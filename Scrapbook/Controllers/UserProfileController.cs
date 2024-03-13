using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Scrapbook.Repositories;
using Scrapbook.Models;

namespace Scrapbook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var profiles = _userProfileRepository.GetAllUserProfiles();
            return Ok(profiles);
        }

        [HttpPost]

        public IActionResult Post(UserProfile userProfile) 
        {
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                "GetByEmail",
                new { email = userProfile.Email },
                userProfile);
        }


        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userProfileRepository.GetByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        [HttpGet("GetById/{Id}")]
        public IActionResult GetById(int Id) 
        {
            var user = _userProfileRepository.GetById(Id);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
