namespace BlackWhale.Web.App_Start
{
    using System.Web.Mvc;
    using BlackWhale.Service.Interface;
    using BlackWhale.Service.Services;
    using Unity;
    using Unity.AspNet.Mvc;
    using Unity.Lifetime;

    public class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here 
            // it is NOT necessary to register your controllers 

            // e.g. container.RegisterType<ITestService, TestService>(); 

            container.RegisterType<IReviewService, ReviewService>(new HierarchicalLifetimeManager());

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}