//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Repository
{
    using System;
    using System.Collections.Generic;
    
    public partial class clfs_winner_monthly_headers
    {
        public int HEADER_ID { get; set; }
        public int SHOW_YEAR { get; set; }
        public int EXHIBITOR_ID { get; set; }
        public string REPORTING_MONTH { get; set; }
        public string GREETER_CONTACTED { get; set; }
        public string DONOR_SUBMIT { get; set; }
        public Nullable<System.DateTime> DONOR_SUBMIT_DATE { get; set; }
        public string COMMENTS { get; set; }
        public Nullable<int> CREATED_BY { get; set; }
        public Nullable<System.DateTime> CREATION_DATE { get; set; }
        public Nullable<int> LAST_UPDATED_BY { get; set; }
        public Nullable<System.DateTime> LAST_UPDATE_DATE { get; set; }
    }
}
