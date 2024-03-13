using Scrapbook.Models;

namespace Scrapbook.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void DeletePost(int postId);
        List<Post> GetAll();
        Post GetById(int id);
        List<Post> GetPostByAuthor(int userProfileId);
        void Update(Post post);
    }
}