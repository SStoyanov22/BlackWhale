namespace BlackWhale.Service.Response
{
    public class Response : IResponse
    {
        public string Message { get; set; }

        public ResponseStatus Status { get; set; }

        public object ResultData { get; set; }
    }
}
