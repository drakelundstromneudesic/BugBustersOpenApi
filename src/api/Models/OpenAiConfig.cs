using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class OpenAiConfig
    {
        public string ApiKey { get; set; }

        public OpenAiConfig(string apiKey)
        {
            ApiKey = apiKey;
        }
    }
}
