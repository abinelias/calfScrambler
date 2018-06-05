using Repository;
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
        [System.Web.Http.HttpPost]
        public customer GetCustomerId(int id)
        {
            return db.GetCustomerById(id);
        }
        
    }
}