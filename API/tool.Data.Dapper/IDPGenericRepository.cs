﻿using System.Collections.Generic;
using System.Threading.Tasks;

namespace tool.Data.Dapper
{
    public interface IDPGenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetData(object filter);
        Task<IEnumerable<TEntity>> GetDataAsync(object filter);
    }
}
