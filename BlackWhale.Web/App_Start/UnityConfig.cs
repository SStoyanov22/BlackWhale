namespace BlackWhale.Web.App_Start
{
    using System.Web.Mvc;
    using Service.Interface;
    using Service.Services;
    using Unity;
    using Unity.AspNet.Mvc;
    using Unity.Lifetime;
    using Data.Interfaces;
    using Data.Data;
    using Data;

    public class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here 
            // it is NOT necessary to register your controllers 

            // e.g. container.RegisterType<ITestService, TestService>(); 
            container.RegisterType<IBlackWhaleDbContext, BlackWhaleDbContext>();
            container.RegisterType<IBlackWhaleData, BlackWhaleData>();

            container.RegisterType<IReviewService, ReviewService>(new HierarchicalLifetimeManager());

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}