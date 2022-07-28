using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using tool.Data.Dapper.Infrastructure;
using Dapper;
using tool.Data.Helper;
using API.Repository.Interface;

namespace API.Repository
{
    public class QueryGenericRepository<T> : IQueryGenericRepository<T> where T : class
    {
        private readonly IDbConnection conn;


        /// <summary>
        /// Manager Qry Constructor.
        /// </summary>
        public IPartsQryGenerator<T> partsQryGenerator { private get; set; }
        /// <summary>
        /// Manager to worker with Identified Fields
        /// </summary>
        public IIDentityInspector<T> identityInspector { private get; set; }

        /// <summary>
        /// Idetenfier parameter (@) to SqlServer (:) to Oracle
        /// </summary>
        public char ParameterIdentified { get; set; }


        protected string qrySelect { get; set; }
        protected string qryInsert { get; set; }



        private string identityField;


        /// <summary>
        /// Create a GenericRepository for Dapper
        /// </summary>
        /// <param name="conn">Connection</param>
        /// <param name="parameterIdentified">Idetenfier parameter (@) to SqlServer (:) to Oracle</param>
        public QueryGenericRepository(IDbConnection conn, char parameterIdentified = '@')
        {
            if (conn == null) throw new ArgumentNullException(nameof(conn), $"The parameter {nameof(conn)} can't be null");

            this.conn = conn;
            ParameterIdentified = parameterIdentified;
            partsQryGenerator = new PartsQryGenerator<T>(ParameterIdentified);
            identityInspector = new IDentityInspector<T>(conn);
        }


        #region Query
        public string SelectAllQry()
        {
            if (string.IsNullOrWhiteSpace(qrySelect))
            {
                qrySelect = partsQryGenerator.GenerateSelect();
            }

            return qrySelect;
        }

        public string InsertQry()
        {
            if (string.IsNullOrWhiteSpace(qryInsert))
            {
                identityField = identityInspector.GetColumnsIdentityForType();

                qryInsert = partsQryGenerator.GeneratePartInsert(identityField);
            }
            return qryInsert;
        }

        public string UpdateQry(object pks)
        {

            ParameterValidator.ValidateObject(pks, nameof(pks));

            var updateQry = partsQryGenerator.GenerateUpdate(pks);
            return updateQry;
        }

        public string DeleteQry(object pks)
        {

            ParameterValidator.ValidateObject(pks, nameof(pks));

            var updateQry = partsQryGenerator.GenerateDelete(pks);
            return updateQry;
        }

        public string SelectQry(object pks)
        {

            ParameterValidator.ValidateObject(pks, nameof(pks));

            var updateQry = partsQryGenerator.GenerateSelect(pks);
            return updateQry;
        }
        #endregion
    }
}
