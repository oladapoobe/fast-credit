using API.ClassModel;
using API.Infrastructure;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository.Interface
{
    public interface IBaseRepository<T> where T : class
    {
        IConfiguration _configuration { get; }
        string BaseUrl { get; }
        string constringdapper { get; }

        JwtTokenConfig Config();
        Task<ClsReturnMessage> Delete(string query, T entity);
        Task<string> GenerateRndNumber(int cnt);
        Task<IQueryable<T>> GetAll(string query);
        Task<string> GetLocalIPAddress();  
        Task<ClsReturnMessage> Insert(string query, T entity);
        Task<IQueryable<T>> QueryGetAll(string query, object entity);
        Task<dynamic> SingleOrDefault(string query, object entity);    
        Task<ClsReturnMessage> Update(string query, T entity);

    }
}