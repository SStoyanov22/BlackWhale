namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TokenSymbol")]
    public class TokenSymbol    
    {
        [Key]
        [Required]
        public int Id { get; set; }
        // Etherium - ETH
        public string ShortName { get; set; }

    }
}
