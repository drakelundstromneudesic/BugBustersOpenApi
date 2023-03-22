using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace api.Controllers
{
    [Route("Bands")]
    [ApiController]
    public class BandsController : Controller
    {

        public BandsController()
        {
  
        }

        [HttpPost]
        public IActionResult PostRecommendations()
        {
            return Ok("hello world");
            //var Team = team;
            //return team.teamMembers.Any() ? Ok(Team) : NotFound();
        }
    }
}
