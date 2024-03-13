using System.ComponentModel.DataAnnotations;

namespace Scrapbook.Models
{
    public class Post
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }


        public string? Image1 { get; set; }

        public string? Image2 { get; set; }

        public string? Image3 { get; set; }

        public string? Image4 { get; set; }


        public string? Caption1 { get; set; }

        public string? Caption2 { get; set; }

        public string? Caption3 { get; set; }

        public string? Caption4 { get; set; }


        [Required]
        public DateTime DateCreated { get; set; }

        [Required]
        public int CategoryId { get; set; }

        public Category? Category { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile? UserProfile { get; set; }

        public List<TagUser>? Tags { get; set; }

        //public List<Comment>? Comments { get; set; }
    }
}
