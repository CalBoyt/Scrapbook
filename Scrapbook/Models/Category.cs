using System.ComponentModel.DataAnnotations;

namespace Scrapbook.Models
{
    public class Category
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

    }
}
