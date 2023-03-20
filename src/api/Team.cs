using api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api
{
    public class Team
    {

        public string teamName { get; }

       public List<TeamMember> teamMembers { get;  }


        public Team()
        {
            teamName = "Team Bicep Curls";

            teamMembers = new List<TeamMember>();

            teamMembers.Add(new TeamMember("Drake", "Do a lunch and learn"));
            teamMembers.Add(new TeamMember("Drew", "Sounds good"));
            teamMembers.Add(new TeamMember("Nasir", "Let me know if you need help"));

        }

    }
}
