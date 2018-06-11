namespace BlackWhale.Models.EntityModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Comment
    {
        public Comment()
        {
            this.CreatedOn = DateTime.Now;
        }

        [Key]
        public int Id { get; set; }


        public string Content { get; set; }


        public virtual ApplicationUser Author { get; set; }

        public virtual ICOReview Review { get; set; }

    
        public DateTime CreatedOn  { get; set; }

        public bool IsModified { get; set; }

    }

}
