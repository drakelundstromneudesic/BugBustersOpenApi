using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("Team")]
    [ApiController]
    public class TeamController : Controller
    {
        private Team team;

        public TeamController()
        {
            team = new Team();
        }

        [HttpGet]
        public IActionResult GetTeam()
        {
            var Team = team;
            return team.teamMembers.Any() ? Ok(Team) : NotFound();
        }
    }
}

