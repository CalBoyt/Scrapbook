//using Scrapbook.Models;
//using Scrapbook.Utils;

//namespace Scrapbook.Repositories
//{
//    public class TagUserRepository : BaseRepository
//    {
//        public TagUserRepository(IConfiguration configuration) : base(configuration) { }

//        public List<TagUser> GetAllTagUsersByPostId(int postId)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"
//                        SELECT tu.Id, tu.PostId, tu.UserProfileId, p.Id
//                        FROM TagUser tu
//                        LEFT JOIN Post p ON p.Id = tu.PostId
//                    "
//                }
//            }
//        }
//    }
//}
