using API.ClassModel;
using API.Services.Service2.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace API.Controllers.Controller2
{
    
    [Route("api/[controller]")]
    [ApiController]
  
    public class UserController : ControllerBase
    {
        private IUserService currentService;


        public UserController(IUserService _currentService)
        {
            currentService = _currentService ?? throw new ArgumentNullException(nameof(_currentService));
        }


      
        [HttpPost("PostUser")]
        public async Task<IActionResult> PostUser([FromBody] User values)
        {
            var transactionResult = await currentService.PostUser(values);
            return Ok(transactionResult);
        }

        [HttpPut("UpdateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] User values)
        {
            var transactionResult = await currentService.UpdateUser(values);
            return Ok(transactionResult);
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var transactionResult = await currentService.GetAll();
            return Ok(transactionResult);
        }

        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            var transactionResult = await currentService.DeleteUser(id);
            return Ok(transactionResult);
        }


    }
}
