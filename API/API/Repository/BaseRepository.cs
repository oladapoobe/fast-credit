using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Reflection;
using System.Configuration;
using System.Net;
using System.Net.Sockets;
using Newtonsoft.Json;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using API.Infrastructure;
using System.Runtime.Serialization.Json;
using System.Data;
using System.ServiceModel.Security;
using API.Repository.Interface;
using API.Services;
using API.ClassModel;
using tool.Data.Helper;
using tool.Data.Dapper.Infrastructure;

namespace API.Repository
{

    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
       HttpClientWrapper clientService = new HttpClientWrapper();
        public IConfiguration _configuration { get; }
        public BaseRepository()
        {

        }
        public BaseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string BaseUrl
        {
            get
            {

                var Base = Config().getStatement;
                return Base;



            }
        }
        public string constringdapper
        {
            get
            {
                var Base = Config().dapperconnection;
                return Base;

            }
        }
      

        public async Task<IQueryable<T>> QueryGetAll(string query, object entity)
        {

            using (SqlConnection connection = new SqlConnection(constringdapper))
            {
                var result = connection.Query<T>(query, entity).AsQueryable();

                return await Task.FromResult(result);

            }


        }
        public async Task<IQueryable<T>> GetAll(string query)
        {

            using (SqlConnection connection = new SqlConnection(constringdapper))
            {
                var result = connection.Query<T>(query).AsQueryable();

                return await Task.FromResult(result);

            }


        }
        public async Task<ClsReturnMessage>  Insert(string query, T entity)
        {
            using (SqlConnection connection = new SqlConnection(constringdapper))
            {

                connection.Open();
                connection.Execute(query, entity);
                connection.Close();
                return await Task.FromResult(new ClsReturnMessage { success = true, data = entity });

            }





        }
        public async Task<dynamic> SingleOrDefault(string query, object entity)
        {

            using (SqlConnection connection = new SqlConnection(constringdapper))
            {
                var result = connection.Query<T>(query, entity).SingleOrDefault();

                return await Task.FromResult(result);

            }


        }
        public async Task<ClsReturnMessage> Update(string query, T entity)
        {




            using (SqlConnection connection = new SqlConnection(constringdapper))
            {

                connection.Open();
                connection.Execute(query, entity);
                connection.Close();
                return await Task.FromResult(new ClsReturnMessage { success = true, data = entity });

            }




        }
        public async Task<ClsReturnMessage> Delete(string query, T entity)
        {




            using (SqlConnection connection = new SqlConnection(constringdapper))
            {

                connection.Open();
                connection.Execute(query, entity);
                connection.Close();
                return await Task.FromResult(new ClsReturnMessage { success = true, data = entity });

            }




        }
 
        public async Task<string> GenerateRndNumber(int cnt)
        {
            string[] key2 = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };
            Random rand1 = new Random();
            string txt = "";
            for (int j = 0; j < cnt; j++)
                txt += key2[rand1.Next(0, 9)];
            return await Task.FromResult(txt);
        }

        public async Task<string> GetLocalIPAddress()
        {

            var host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (var ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return await Task.FromResult(ip.ToString());
                }
            }



            return await Task.FromResult("No network adapters with an IPv4 address in the system!");
        }
        public JwtTokenConfig Config()
        {
            var config = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json").Build();
            var section = config.GetSection(nameof(JwtTokenConfig));
            var result = section.Get<JwtTokenConfig>();
            return result;
        }
      

    }




}