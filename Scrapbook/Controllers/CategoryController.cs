using Microsoft.AspNetCore.Mvc;
using Scrapbook.Repositories;

namespace Scrapbook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]

        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAll());
        }
    }
}
