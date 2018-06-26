using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CalfScrambler.Controllers
{
    public class ExpenseController : ApiController
    {

        private RepositoryCalfScrample db;
        public ExpenseController()
        {
            db = new RepositoryCalfScrample();
        }
        [System.Web.Http.HttpGet]
        public IReadOnlyList<ExpenseGridEntity> GetExpenseByYear(int year, int customerid)
        {
            return db.GetExpenseByYear(year, customerid);
        }
        [System.Web.Http.HttpPost]
        public bool AddExpense([FromBody]ExpenseEntity e)
        {
            return db.AddExpense(e);
        }
    }
}