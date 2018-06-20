using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlackWhale.Core.DTO.SubmitedICO
{
    public class SubmittedICODTO
    {
        public int Id { get; set; }

        public string Website { get; set; }

        public string Submitter { get; set; }

        public DateTime SubmitDate { get; set; }
    }
}
