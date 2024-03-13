using Scrapbook.Models;
using Scrapbook.Utils;

namespace Scrapbook.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        //Return all categories as a list
        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name] FROM Category ORDER BY Name
                    ";

                    var categories = new List<Category>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        Category category = new Category()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Name = DbUtils.GetString(reader, "name"),
                        };
                        categories.Add(category);
                    }

                    reader.Close();
                    return categories;
                }
            }
        }
    }
}
