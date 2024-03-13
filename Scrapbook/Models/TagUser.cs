using System.ComponentModel.DataAnnotations;

namespace Scrapbook.Models
{
    public class TagUser
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int PostId { get; set; }

        [Required]
        public int UserProfileId { get; set; }
    }
}
