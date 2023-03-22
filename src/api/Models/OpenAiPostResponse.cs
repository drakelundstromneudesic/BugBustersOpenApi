using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class OpenAiPostResponse
    {
        public string Id { get; set; }
        public string Object { get; set; }
        public DateTime Created { get; set; }
        public string Model { get; set; }
        public UsageObject Usage { get; set; }
        public ChoicesObject Choices { get; set; }
    }

    public class UsageObject
    {
        public int prompt_tokens { get; set; }
        public int completion_tokens { get; set; }
        public int total_tokens { get; set; }
    }

    public class ChoicesObject
    {
        public string Role { get; set; }
        public string Content { get; set; }
    }
}


