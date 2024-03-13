using System.ComponentModel.DataAnnotations;

namespace Scrapbook.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(555)]
        public string Email { get; set; }

        [MaxLength(255)]
        public string? ImageLocation { get; set; }

        [Required]
        public bool IsAdmin { get; set; }

        [Required]
        [MaxLength(50)]
        public string FamilyGUID { get; set; }
    }
}
