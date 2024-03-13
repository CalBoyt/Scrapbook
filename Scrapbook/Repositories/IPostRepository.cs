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
        List<Post> Search(string criterion, bool sortDescending);
        void Update(Post post);
    }
}