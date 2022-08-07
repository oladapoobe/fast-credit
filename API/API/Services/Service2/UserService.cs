using API.ClassModel;
using API.Infrastructure;
using API.Repository.Interface;
using API.Services.Service2.Interface;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using tool.Data.Dapper;




namespace API.Services.Service2
{
    public class UserService : IUserService
    {
        IBaseRepository<User> RepoCurrentAccount;
        IQueryGenericRepository<User> OTPCurrentDocumentUpload;
        private readonly IJwtAuthManager jwtAuthManagersrv;
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public UserService(IBaseRepository<User> _RepoCurrentAccount, IJwtAuthManager _jwtAuthManagersrv,
            IQueryGenericRepository<User> _OTPCurrentDocumentUpload)
        {
            RepoCurrentAccount = _RepoCurrentAccount ?? throw new ArgumentNullException(nameof(_RepoCurrentAccount));
            jwtAuthManagersrv = _jwtAuthManagersrv ?? throw new ArgumentNullException(nameof(_jwtAuthManagersrv));
            OTPCurrentDocumentUpload = _OTPCurrentDocumentUpload ?? throw new ArgumentNullException(nameof(_OTPCurrentDocumentUpload));
        }

        public async Task<IQueryable<User>> GetAll()
        {
            var query = OTPCurrentDocumentUpload.SelectAllQry();
            var data = RepoCurrentAccount.GetAll(query).Result;
            return await Task.FromResult(data);

        }

        public async Task<ClsReturnMessage> PostUser(User payload)
        {
           
            var identifier = new { EmailAddress = payload.EmailAddress };
            var query = OTPCurrentDocumentUpload.SelectQry(identifier);
            //check if record exist in db... 
            var data = RepoCurrentAccount.SingleOrDefault(query, identifier);
            if (data == null)
            {
                var query3 = OTPCurrentDocumentUpload.InsertQry();
                var result = RepoCurrentAccount.Insert(query3, payload).Result;

                return await Task.FromResult(result);
            }
     

            return await Task.FromResult(new ClsReturnMessage { success = false, data = null });

        }

        public async Task<ClsReturnMessage> UpdateUser(User payload)
        {
            var query3 = OTPCurrentDocumentUpload.UpdateQry(payload);
            var result = RepoCurrentAccount.Update(query3, payload).Result;

            return await Task.FromResult(result);
        }

        public async Task<ClsReturnMessage> DeleteUser(long id)
        {
            var obj = new { Id = id };
            var query3 = OTPCurrentDocumentUpload.DeleteQry(obj);
            var json = JsonConvert.SerializeObject(obj);
            User objx = JsonConvert.DeserializeObject<User>(json);
            objx.IsDeleted = true;
            var result = RepoCurrentAccount.Delete(query3, objx).Result;

            return await Task.FromResult(result);

        }


    }
}
