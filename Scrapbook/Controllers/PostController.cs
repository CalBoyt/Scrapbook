using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Scrapbook.Repositories;
using Scrapbook.Models;

namespace Scrapbook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }


        //Get that returns all posts
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }


        //Get that returns a single post by its Id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var posts = _postRepository.GetById(id);
            if (posts == null)
            {
                return NotFound();
            }
            return Ok(posts);
        }


        //POST to add new post
        [HttpPost]
        public IActionResult Post(Post post)
        {
            post.DateCreated = DateTime.Now;
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);

        }


        //GET that returns posts by Author
        [HttpGet("GetUserPosts/{id}")]
        public IActionResult Get(int id)
        {
            List<Post> posts = _postRepository.GetPostByAuthor(id);
            if (posts == null)
            {
                return NotFound();
            }
            return Ok(posts);
        }

        //PUT that allows a post to be edited
        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _postRepository.Update(post);
            return NoContent();
        }


        // DELETE to remove a post from API
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.DeletePost(id);
            return NoContent();
        }


    }
}
