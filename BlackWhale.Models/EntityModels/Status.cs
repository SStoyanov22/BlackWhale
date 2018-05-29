namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Collections.Generic;

    [Table("Status")]
    public class Status
    {
        [Key]
        [Required]
        public int Id { get; set; }
        //Completed     /      Upcoming ....

        [Required]
        public string Description { get; set; }

        public virtual ICollection<ICOReview> Reviews { get; set; }
    }
}
