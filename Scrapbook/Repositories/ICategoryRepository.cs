using Scrapbook.Models;

namespace Scrapbook.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
    }
}