namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using Core.DTO.Exchange;
    using Service.Interface;
    using Service.Response;
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
            var model = Mapper.Map<IEnumerable<ExchangeIndexViewModel>>(exchanges.ResultData);

            return View(model);
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

        [HttpPost]
        public ActionResult Edit(ExchangeEditViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.View(model);
            }

            var dto = Mapper.Map<ExchangeEditDTO>(model);
            var result = this.exchangeService.Edit(dto);

            if (result.Status == ResponseStatus.Fail)
            {
                return View(model);
            }

            return RedirectToAction(nameof(this.Index));
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            var result = this.exchangeService.GetById(id);
            var model = Mapper.Map<ExchangeEditViewModel>(result.ResultData);

            return this.View(model);
        }

        [HttpGet]
        public ActionResult Delete(int id)
        {
            var result = this.exchangeService.Delete(id);

            if (result.Status == ResponseStatus.Fail)
            {
                return RedirectToAction(nameof(this.Index));
            }

            return RedirectToAction(nameof(this.Index));
        }
    }
}