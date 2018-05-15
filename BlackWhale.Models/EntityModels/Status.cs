﻿namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Status")]
    public class Status
    {
        [Key]
        [Required]
        public int Id { get; set; }
        //Completed     /      Upcoming ....
        public string Type { get; set; }
    }
}
