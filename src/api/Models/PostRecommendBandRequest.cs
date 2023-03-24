using System.Collections.Generic;

namespace api.Models
{
    public class PostRecommendBandRequest
    {
        public List<string> Likes { get; set; }
        public List<string> Dislikes { get; set; }
        public List<string> Recommendations { get; set; }


        public PostRecommendBandRequest(List<string> likes, List<string> dislikes, List<string> recommendations)
        {
            this.Likes = likes;
            this.Dislikes = dislikes;
            this.Recommendations = recommendations;
        }
    }
}
