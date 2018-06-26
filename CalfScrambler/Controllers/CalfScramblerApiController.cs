using CalfScrambler.Models;
using Repository;
using System.Collections.Generic;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;

namespace CalfScrambler.Controllers
{
    public class CalfScramblerApiController : ApiController
    {
        private RepositoryCalfScrample db;
        public CalfScramblerApiController()
        {
            db = new RepositoryCalfScrample();
        }

        /// [Route("GetCustomerId")]
        [System.Web.Http.HttpPost]
        public CustomerInfo GetCustomerId(int id)
        {
            return new CustomerInfo
            {
                cutomer = db.GetCustomerById(id),
                address = db.GetAddressById(id)

            };
        }

        [System.Web.Http.HttpPost]
        public bool UploadTest()
        {
            var httpPostedFile = HttpContext.Current.Request.Files["filesample"];
            return true;
        }

        ////  [Route("GetCurrentMonth")]
        [System.Web.Http.HttpGet]
        public string GetCurrentMonth()
        {
            string month = WebConfigurationManager.AppSettings["Month"];
            return month;
        }

       
    }
}