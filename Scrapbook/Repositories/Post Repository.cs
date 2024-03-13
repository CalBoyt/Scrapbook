using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Scrapbook.Utils;
using Scrapbook.Models;
using Microsoft.Data.SqlClient;


namespace Scrapbook.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.Title, p.Content, p.Image1, p.Image2, p.Image3, p.Image4, p.Caption1, p.Caption2, p.Caption3, p.Caption4, p.DateCreated,
    
                                c.Id AS CategoryId, c.[Name] AS CategoryName,
                                
                                up.Id AS AuthorId, up.Name AS AuthorName, up.Email, up.ImageLocation AS AuthorImage,

                                t.Id AS TagId, t.PostId AS TaggedPostId, t.UserProfileId

                        FROM Post p
                        LEFT JOIN Category c ON p.CategoryId = c.id
                        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                        LEFT JOIN TagUser t ON p.Id = t.id
                        ORDER BY p.DateCreated DESC
                        
                    ";

                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        var postId = DbUtils.GetInt(reader, "Id");
                        var existingPost = posts.FirstOrDefault(p => p.Id == postId);
                        if (existingPost == null)
                        {
                            existingPost = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Content = DbUtils.GetString(reader, "content"),
                                Image1 = DbUtils.GetString(reader, "Image1"),
                                Image2 = DbUtils.GetString(reader, "Image2"),
                                Image3 = DbUtils.GetString(reader, "Image3"),
                                Image4 = DbUtils.GetString(reader, "Image4"),
                                Caption1 = DbUtils.GetString(reader, "Caption1"),
                                Caption2 = DbUtils.GetString(reader, "Caption2"),
                                Caption3 = DbUtils.GetString(reader, "Caption3"),
                                Caption4 = DbUtils.GetString(reader, "Caption4"),
                                DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                Category = new Category()
                                {
                                    Id = DbUtils.GetInt(reader, "CategoryId"),
                                    Name = DbUtils.GetString(reader, "CategoryName")
                                },
                                UserProfileId = DbUtils.GetInt(reader, "AuthorId"),
                                UserProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "AuthorId"),
                                    Name = DbUtils.GetString(reader, "AuthorName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    ImageLocation = DbUtils.GetString(reader, "AuthorImage")
                                },
                                Tags = new List<TagUser>()
                            };
                            posts.Add(existingPost);
                        }
                        if (DbUtils.IsNotDbNull(reader, "TaggedPostId"))
                        {
                            existingPost.Tags.Add(new TagUser()
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                PostId = DbUtils.GetInt(reader, "TaggedPostId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")

                            });
                        }

                    }
                    reader.Close();

                    return posts;
                  
                }
            }
        }

        public Post GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.Title, p.Content, p.Image1, p.Image2, p.Image3, p.Image4, p.Caption1, p.Caption2, p.Caption3, p.Caption4, p.DateCreated,
    
                                c.Id AS CategoryId, c.[Name] AS CategoryName,
                                
                                up.Id AS AuthorId, up.Name AS AuthorName, up.Email, up.ImageLocation AS AuthorImage,

                                t.Id AS TagId, t.PostId AS TaggedPostId, t.UserProfileId

                        FROM Post p
                        LEFT JOIN Category c ON p.CategoryId = c.id
                        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                        LEFT JOIN TagUser t ON p.Id = t.id
                        WHERE p.ID = @Id
                    ";

                    DbUtils.AddParameter(cmd, "Id", id);

                    var reader = cmd.ExecuteReader();

                    Post post = null;
                    if (reader.Read())
                    {
                        post = new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "content"),
                            Image1 = DbUtils.GetString(reader, "Image1"),
                            Image2 = DbUtils.GetString(reader, "Image2"),
                            Image3 = DbUtils.GetString(reader, "Image3"),
                            Image4 = DbUtils.GetString(reader, "Image4"),
                            Caption1 = DbUtils.GetString(reader, "Caption1"),
                            Caption2 = DbUtils.GetString(reader, "Caption2"),
                            Caption3 = DbUtils.GetString(reader, "Caption3"),
                            Caption4 = DbUtils.GetString(reader, "Caption4"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "AuthorId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "AuthorId"),
                                Name = DbUtils.GetString(reader, "AuthorName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ImageLocation = DbUtils.GetString(reader, "AuthorImage")
                            }
                        };
                    }
                    reader.Close();

                    return post;
                }
            }
        }

        public List<Post> GetPostByAuthor(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.Title, p.Content, p.Image1, p.Image2, p.Image3, p.Image4, p.Caption1, p.Caption2, p.Caption3, p.Caption4, p.DateCreated,
    
                                c.Id AS CategoryId, c.[Name] AS CategoryName,
                                
                                up.Id AS AuthorId, up.Name AS AuthorName, up.Email, up.ImageLocation AS AuthorImage,

                                t.Id AS TagId, t.PostId AS TaggedPostId, t.UserProfileId

                        FROM Post p
                        LEFT JOIN Category c ON p.CategoryId = c.id
                        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                        LEFT JOIN TagUser t ON p.Id = t.id
                        WHERE up.id = @userProfileId
                        ORDER BY p.DateCreated DESC
                    ";

                    cmd.Parameters.AddWithValue("@userProfileId", userProfileId);

                    var reader = cmd.ExecuteReader();
                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "content"),
                            Image1 = DbUtils.GetString(reader, "Image1"),
                            Image2 = DbUtils.GetString(reader, "Image2"),
                            Image3 = DbUtils.GetString(reader, "Image3"),
                            Image4 = DbUtils.GetString(reader, "Image4"),
                            Caption1 = DbUtils.GetString(reader, "Caption1"),
                            Caption2 = DbUtils.GetString(reader, "Caption2"),
                            Caption3 = DbUtils.GetString(reader, "Caption3"),
                            Caption4 = DbUtils.GetString(reader, "Caption4"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "AuthorId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "AuthorId"),
                                Name = DbUtils.GetString(reader, "AuthorName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ImageLocation = DbUtils.GetString(reader, "AuthorImage")
                            }
                        });
                    }

                    reader.Close();
                    return posts;
                }
            }
        }

        public void Add(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Post (Title, Content, Image1, Image2, Image3, Image4, Caption1, Caption2, Caption3, Caption4, DateCreated, CategoryId, UserProfileId)
                        OUTPUT INSERTED.ID
                        VALUES (@Title, @Content, @Image1, @Image2, @Image3, @Image4, @Caption1, @Caption2, @Caption3, @Caption4, @DateCreated, @CategoryId, @UserProfileId)
                    ";

                    cmd.Parameters.AddWithValue("@Title", post.Title);
                    cmd.Parameters.AddWithValue("@Content", post.Content);
                    cmd.Parameters.AddWithValue("@Image1", DbUtils.ValueOrDBNull(post.Image1));
                    cmd.Parameters.AddWithValue("@Image2", DbUtils.ValueOrDBNull(post.Image2));
                    cmd.Parameters.AddWithValue("@Image3", DbUtils.ValueOrDBNull(post.Image3));
                    cmd.Parameters.AddWithValue("@Image4", DbUtils.ValueOrDBNull(post.Image4));
                    cmd.Parameters.AddWithValue("@Caption1", DbUtils.ValueOrDBNull(post.Caption1));
                    cmd.Parameters.AddWithValue("@Caption2", DbUtils.ValueOrDBNull(post.Caption2));
                    cmd.Parameters.AddWithValue("@Caption3", DbUtils.ValueOrDBNull(post.Caption3));
                    cmd.Parameters.AddWithValue("@Caption4", DbUtils.ValueOrDBNull(post.Caption4));
                    cmd.Parameters.AddWithValue("@DateCreated", post.DateCreated);
                    cmd.Parameters.AddWithValue("@CategoryId", post.CategoryId);
                    cmd.Parameters.AddWithValue("@UserProfileId", post.UserProfileId);

                    post.Id = (int)cmd.ExecuteScalar();
                }
            }

        }

        public void Update(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Post
                           SET UserProfileId = @UserProfileId,
                           Title = @Title,
                           Content = @Content,
                           Image1 = @Image1,
                           Image2 = @Image2,
                           Image3 = @Image3,
                           Image4 = @Image4,
                           Caption1 = @Caption1,
                           Caption2 = @Caption2,
                           Caption3 = @Caption3,
                           Caption4 = @Caption4,
                           DateCreated = @DateCreated,
                           CategoryId = @CategoryId
                           WHERE Id = @id;
                    ";

                    DbUtils.AddParameter(cmd, "@id", post.Id);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Title", post.Title);
                    DbUtils.AddParameter(cmd, "@Content", post.Content);
                    DbUtils.AddParameter(cmd, "@Image1", DbUtils.ValueOrDBNull(post.Image1));
                    DbUtils.AddParameter(cmd, "@Image2", DbUtils.ValueOrDBNull(post.Image2));
                    DbUtils.AddParameter(cmd, "@Image3", DbUtils.ValueOrDBNull(post.Image3));
                    DbUtils.AddParameter(cmd, "@Image4", DbUtils.ValueOrDBNull(post.Image4));
                    DbUtils.AddParameter(cmd, "@Caption1", DbUtils.ValueOrDBNull(post.Caption1));
                    DbUtils.AddParameter(cmd, "@Caption2", DbUtils.ValueOrDBNull(post.Caption2));
                    DbUtils.AddParameter(cmd, "@Caption3", DbUtils.ValueOrDBNull(post.Caption3));
                    DbUtils.AddParameter(cmd, "@Caption4", DbUtils.ValueOrDBNull(post.Caption4));
                    DbUtils.AddParameter(cmd, "@DateCreated", post.DateCreated);
                    DbUtils.AddParameter(cmd, "@CategoryId", post.CategoryId);
                    
                    cmd.ExecuteNonQuery();
                   
                }
            }

        }

        public void DeletePost(int postId)
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE from Comment
                            WHERE PostId = @id
                        DELETE FROM TagUser
                            WHERE PostId = @id
                        DELETE FROM Post
                            WHERE Id = @id

                    ";

                    cmd.Parameters.AddWithValue("@id", postId);

                    cmd.ExecuteNonQuery();

                }
            }
        }

        public List<Post> Search(string criterion, bool sortDescending)
        {
            using (var  conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    var sql =
                        @" 
                        SELECT p.Id AS PostId, p.Title, p.Content, p.Image1, p.Image2, p.Image3, p.Image4, p.Caption1, p.Caption2, p.Caption3, p.Caption4, p.DateCreated,
    
                                c.Id AS CategoryId, c.Name AS CategoryName,
                                
                                up.Id AS AuthorId, up.Name AS AuthorName, up.Email, up.ImageLocation AS AuthorImage

                        FROM Post p
                        LEFT JOIN Category c ON p.CategoryId = c.id
                        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                        WHERE p.Title LIKE @Criterion OR p.Content LIKE @Criterion OR c.[Name] LIKE @Criterion
                        ORDER BY p.DateCreated DESC
                        ";

                    cmd.CommandText = sql;
                    DbUtils.AddParameter(cmd, "@Criterion", $"%{criterion}%");
                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "PostId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            Image1 = DbUtils.GetString(reader, "Image1"),
                            Image2 = DbUtils.GetString(reader, "Image2"),
                            Image3 = DbUtils.GetString(reader, "Image3"),
                            Image4 = DbUtils.GetString(reader, "Image4"),
                            Caption1 = DbUtils.GetString(reader, "Caption1"),
                            Caption2 = DbUtils.GetString(reader, "Caption2"),
                            Caption3 = DbUtils.GetString(reader, "Caption3"),
                            Caption4 = DbUtils.GetString(reader, "Caption4"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "AuthorId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "AuthorId"),
                                Name = DbUtils.GetString(reader, "AuthorName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ImageLocation = DbUtils.GetString(reader, "AuthorImage")
                            }
                        });
                    }
                    reader.Close();

                    return posts;
                }
            }
        }
    }
}
