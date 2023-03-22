using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class OpenAiPostRequest
    {
        public string Model { get; set; }
        public List<MessagesObject> Messages { get; set; }

        public OpenAiPostRequest (string model, List<MessagesObject> messages)
        {
            Model = model;
            Messages = messages;
        }

    }

    public class MessagesObject
    {
        public string Role { get; set; }
        public string Content { get; set; }

        public MessagesObject (string role, string content)
        {
            Role = role;
            Content = content;
        }
    }
}
