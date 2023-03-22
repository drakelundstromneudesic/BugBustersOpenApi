using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class OpenAiPostResponse
    {
        public string id { get; set; }
        public string Object { get; set; }
        public DateTime Created { get; set; }
        public string model { get; set; }
        public UsageObject usage { get; set; }
        public List<MessageObject> choices { get; set; }
    }

    public class UsageObject
    {
        public int prompt_tokens { get; set; }
        public int completion_tokens { get; set; }
        public int total_tokens { get; set; }
    }

    public class MessageObject
    {
        public ChoicesObject message { get; set; }
        public string finish_reason { get; set; }
        public int index { get; set; }
    }

    public class ChoicesObject
    {
        public string role { get; set; }
        public string content { get; set; }
    }
}


