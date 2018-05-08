namespace BlackWhale.Models.EntityModels
{
    public class Verdict
    {
        public  string Category { get; set; }

        public string Description { get; set; }

        public int Count { get; set; }

        public VerdictSymbol Symbol { get; set; }
    }
}
