using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class RepositoryCalfScrample
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

        public address GetAddressById(int id)
        {
            using (CalfScramblerEntities cs = new CalfScramblerEntities())
            {
                return cs.addresses.Where(x => x.CUSTOMER_ID == id).FirstOrDefault();
            }
        }

        public bool AddExpense(ExpenseEntity e)
        {
            using (CalfScramblerEntities cs = new CalfScramblerEntities())
            {
                var header = cs.clfs_winner_monthly_headers.Where(x => x.EXHIBITOR_ID == e.customerid && x.REPORTING_MONTH == e.month && x.SHOW_YEAR == e.year).FirstOrDefault();
                if (header == null)
                {
                    header = new clfs_winner_monthly_headers { EXHIBITOR_ID = e.customerid, REPORTING_MONTH = e.month, SHOW_YEAR = e.year };
                    cs.clfs_winner_monthly_headers.Add(header);
                    cs.SaveChanges();
                }
                cs.clfs_winner_monthly_expenses.Add(new clfs_winner_monthly_expenses { HEADER_ID = header.HEADER_ID, EXPENSE_TYPE = e.expensetype, QUANTITY = e.quantity, UNIT_COST = e.unitcost });
                cs.SaveChanges();
                return true;
            }
        }

        public IReadOnlyList<ExpenseGridEntity> GetExpenseByYear(int year, int customerid)
        {
            using (CalfScramblerEntities cs = new CalfScramblerEntities())
            {
                var list = new List<ExpenseGridEntity>();
                var header = cs.clfs_winner_monthly_headers.Where(x => x.EXHIBITOR_ID == customerid && x.SHOW_YEAR == year).FirstOrDefault();
                if (header != null)
                {
                    foreach (var r in cs.clfs_winner_monthly_expenses.Where(x => x.HEADER_ID == header.HEADER_ID))
                    {
                        list.Add(new ExpenseGridEntity { expenseid = r.LINE_ID, expensetype = r.EXPENSE_TYPE, month = header.REPORTING_MONTH, quantity = (int)r.QUANTITY, unitcost = (decimal)r.UNIT_COST, year = year });
                    }

                }

                return list;
            }
        }
    }
}
