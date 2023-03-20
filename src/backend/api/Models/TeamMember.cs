using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TeamMember
    {
        public string Name { get; set; }
        public string FavoriteQuote { get; set; }


        public TeamMember (string name, string favoriteQuote)
        {
            Name = name;
            FavoriteQuote = favoriteQuote;
        }
    }
}
