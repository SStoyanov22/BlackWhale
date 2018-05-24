namespace BlackWhale.Service.Response
{
    public interface IResponse
    {
        string Message { get; set; }

        ResponseStatus Status { get; }

        object ResultData { get; }
        
    }
}
