using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackWhale.Models.EntityModels
{
    public class Currency
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [MaxLength(3)]
        [Required]
        public string ISOCode { get; set; }

        [Required]
        public bool IsCrypto { get; set; }

        public virtual ICollection<ICOReview> Reviews { get; set; }
    }
}
