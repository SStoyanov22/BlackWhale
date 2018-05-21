namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using Core.DTO.Exchange;
    using Service.Interface;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using ViewModels.Exchange;

    public class ExchangeController : BaseController
    {
        private readonly IExchangeService exchangeService;

        public ExchangeController(IExchangeService exchangeService)
        {
            this.exchangeService = exchangeService;
        }
        
        [HttpGet]
        public ActionResult Index()
        {
            var exchanges = this.exchangeService.GetAll();
            var model = Mapper.Map<IEnumerable<ExchangeIndexViewModel>>(exchanges);

            return View(model);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return this.View();
        }

        [HttpPost]
        public ActionResult Create(ExchangeCreateViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.View(model);
            }

            var dto = Mapper.Map<ExchangeCreateDTO>(model);
            this.exchangeService.Create(dto);

            return RedirectToAction(nameof(this.Index));

        }
    }
}