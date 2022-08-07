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
            success = dyn.success;
            data = dyn.data;
            message = dyn.message;  
        }
        public string id { get; set; }
        public bool success { get; set; }
        public dynamic data { get; set; }
        public string message { get; set; }
        
    }
}
