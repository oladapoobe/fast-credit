using API.ClassModel;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services.Service2.Interface
{
    public interface IUserService
    {
        Task<ClsReturnMessage> PostUser(User payload);
        Task<ClsReturnMessage> UpdateUser(User payload);
        Task<IQueryable<User>> GetAll();
        Task<ClsReturnMessage> DeleteUser(long id);
       
    }
}