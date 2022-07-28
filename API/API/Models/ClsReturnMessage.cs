using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.ClassModel
{
    public class ClsReturnMessage
    {
        public ClsReturnMessage() { }
        public ClsReturnMessage(dynamic dyn)
        {
            id = dyn.id;
            isSuccess = dyn.isSuccess;
            message = dyn.message;
        }
        public string id { get; set; }
        public bool isSuccess { get; set; }
        public string message { get; set; }
    }
}
