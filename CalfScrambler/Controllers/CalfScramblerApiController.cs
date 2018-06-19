using Repository;
using System.Web;
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
        [Route("GetCustomerId")]
        [System.Web.Http.HttpPost]
        public customer GetCustomerId(int id)
        {
            return db.GetCustomerById(id);
        }
        [System.Web.Http.HttpPost]
        public bool UploadTest()
        {
          //  var httpPostedFile = HttpContext.Current.Request.Files["file"];                                                 // this is not working

              var httpPostedFile = HttpContext.Current.Request.Files["filesample"];
            //  var fileName = httpPostedFile.FileName;
            return true;


        }
    }
}