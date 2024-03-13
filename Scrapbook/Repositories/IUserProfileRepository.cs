using Scrapbook.Models;

namespace Scrapbook.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        List<UserProfile> GetAllUserProfiles();
        UserProfile GetByEmail(string email);
        UserProfile GetById(int Id);
    }
}