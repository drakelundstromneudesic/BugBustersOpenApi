using System.Collections.Generic;

namespace api.Models
{
    public class PostRecommendBands
    {
        public List<string> Likes { get; set; }
        public List<string> Dislikes { get; set; }
        public List<string> Recommendations { get; set; }


        public PostRecommendBands(List<string> likes, List<string> dislikes, List<string> recommendations)
        {
            this.Likes = likes;
            this.Dislikes = dislikes;
            this.Recommendations = recommendations;
        }
    }
}
