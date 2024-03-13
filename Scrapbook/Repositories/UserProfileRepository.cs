using Scrapbook.Models;
using Scrapbook.Utils;

namespace Scrapbook.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAllUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.[Name], up.Email, up.ImageLocation, up.IsAdmin, up.FamilyGUID
                        FROM UserProfile up
                        ORDER BY up.Name
                    ";

                    var reader = cmd.ExecuteReader();

                    var profiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        profiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            IsAdmin = DbUtils.IsNotDbNull(reader, "IsAdmin"),
                            FamilyGUID = DbUtils.GetString(reader, "FamilyGUID")
                        });
                    }
                    reader.Close();

                    return profiles;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (Name, Email, ImageLocation, IsAdmin, FamilyGUID)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @Email, @ImageLocation, @IsAdmin, @FamilyGUID)
                    ";

                    DbUtils.AddParameter(cmd, "@Name", userProfile.Name);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@ImageLocation", userProfile.ImageLocation);
                    DbUtils.AddParameter(cmd, "@IsAdmin", userProfile.IsAdmin);
                    DbUtils.AddParameter(cmd, "@FamilyGUID", userProfile.FamilyGUID);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public UserProfile GetById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.[Name], up.Email, up.ImageLocation, up.IsAdmin, up.FamilyGUID
                        FROM UserProfile up
                        WHERE up.Id = @Id
                    ";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            IsAdmin = DbUtils.GetNullableBoolean(reader, "IsAdmin"),
                            FamilyGUID = DbUtils.GetString(reader, "FamilyGUID")
                        };

                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public UserProfile GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.[Name], up.Email, up.ImageLocation, up.IsAdmin, up.FamilyGUID
                        FROM UserProfile up
                        WHERE Email = @email
                    ";

                    DbUtils.AddParameter(cmd, "@email", email);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            IsAdmin = DbUtils.GetNullableBoolean(reader, "IsAdmin"),
                            FamilyGUID = DbUtils.GetString(reader, "FamilyGUID")
                        };
                    }
                    reader.Close();

                    return userProfile;


                }
            }
        }
    }
}
