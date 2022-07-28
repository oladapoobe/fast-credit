

namespace API.Repository.Interface
{
    public interface IQueryGenericRepository<T> where T : class
    {
     
        string DeleteQry(object pks);
        string InsertQry();
        string SelectAllQry();
        string SelectQry(object pks);
        string UpdateQry(object pks);
    }
}