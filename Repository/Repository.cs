using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
   public  class RepositoryCalfScrample
    {
        public RepositoryCalfScrample()
        {
        }
        public customer GetCustomerById(int id)
        {
            using (CalfScramblerEntities cs = new CalfScramblerEntities())
            {
                return cs.customers.Where(x => x.CUSTOMER_ID == id).FirstOrDefault();
            }
        }
    }
}
