namespace BlackWhale.Core.DTO.Comment
{
    using System;

    public class CommentDTO
    {
        public int Id { get; set; }


        public int ReviewId { get; set; }

        public string Content { get; set; }

        public string Author { get; set; }

        public DateTime CreatedOn { get; set; }

        public bool IsModified { get; set; }
    }
}
