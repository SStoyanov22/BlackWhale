using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BlackWhale.Web.Startup))]
namespace BlackWhale.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
