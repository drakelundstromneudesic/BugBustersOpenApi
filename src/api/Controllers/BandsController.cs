using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using RestSharp;
using api.Models;
using System.Threading.Tasks;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.Azure.Cosmos;
using System.Linq;

namespace api.Controllers
{
    [Route("Bands")]
    [ApiController]
    public class BandsController : Controller
    {

        private readonly IConfiguration Configuration;

        private readonly string OpenAiAuthToken;
        private readonly CosmosClient cosmos;
        private readonly Container recommendations;


        public BandsController(CosmosClient cosmosClient, OpenAiConfig openAiConfig)
        {
            OpenAiAuthToken = openAiConfig.ApiKey;

            cosmos = cosmosClient; 
            this.recommendations = cosmos.GetContainer("bug-busters-db", "Recommendations");
        }

        [HttpGet]
        public async Task<IActionResult> GetTest()
        {
            try
            {
                var test = recommendations.GetItemLinqQueryable<Test>(true)
                    .Where(stream => stream.userId == "test" )
                    .AsEnumerable();

                if (test.Any()) return Ok(test);

                return NoContent();
            }
            catch
            {
                return StatusCode(500, "Internal Server Error");
                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostRecommendations(PostRecommendBands requestIn)
        {
            string messageLikes = "";
            string messageDislikes = "";
            string messageUsedRecommendations = "";


            if (requestIn.Likes.Count == 1)
            {
                messageLikes = $"I like the band {requestIn.Likes[0]}. ";
            }
            else if (requestIn.Likes.Count > 1)
            {
                messageLikes = "I like the bands ";
                for (int i = 0; i < requestIn.Likes.Count; i++)
                {
                    if (i < requestIn.Likes.Count - 1)
                    {
                        messageLikes += $"{requestIn.Likes[i]}, ";
                    }
                    else
                    {
                        messageLikes += $"and {requestIn.Likes[i]}. ";
                    }
                }
            }

            if (requestIn.Dislikes.Count == 1)
            {
                messageDislikes = $"I dislike the band {requestIn.Dislikes[0]}. ";
            }
            else if (requestIn.Dislikes.Count > 1)
            {
                messageDislikes = "I dislike the bands ";
                for (int i = 0; i < requestIn.Dislikes.Count; i++)
                {
                    if (i < requestIn.Dislikes.Count - 1)
                    {
                        messageDislikes += $"{requestIn.Dislikes[i]}, ";
                    }
                    else
                    {
                        messageDislikes += $"and {requestIn.Dislikes[i]}. ";
                    }
                }
            }

            if (requestIn.Recommendations.Count == 1)
            {
                messageUsedRecommendations = $"Do not include the band {requestIn.Recommendations[0]} in your recommendations. ";
            }
            else if (requestIn.Recommendations.Count > 1)
            {
                messageUsedRecommendations = "Do not include the bands ";
                for (int i = 0; i < requestIn.Recommendations.Count; i++)
                {
                    if (i < requestIn.Recommendations.Count - 1)
                    {
                        messageUsedRecommendations += $"{requestIn.Recommendations[i]}, ";
                    }
                    else
                    {
                        messageUsedRecommendations += $"and {requestIn.Recommendations[i]} in your recommendations. ";
                    }
                }
            }

            string messageEnd = "What bands would you recommend listening to? Format as json with the fields likes, dislikes, and recommendations.";


            string finalMessage = $"{messageLikes}{messageDislikes}{messageUsedRecommendations}{messageEnd}";

            OpenAiPostResponse res = await CallOpenAi(finalMessage);

            return Ok(res.choices[0].message.content);
        }

        [HttpPost("detail")]
        public async Task<IActionResult> PostDetails(PostBandDetails requestIn)
        {
            string message = $"Give me a short description of the band {requestIn.Name} and their 3 best songs for a new listener.";

            OpenAiPostResponse res = await CallOpenAi(message);

            PostBandDetails response = requestIn;
            response.Description = res.choices[0].message.content;

            return Ok(response);
        }


        private async Task<OpenAiPostResponse> CallOpenAi(string messageBody)
        {

            Uri baseUrl = new Uri("https://api.openai.com/v1/chat");
            IRestClient client = new RestClient(baseUrl);
            RestRequest request = new RestRequest("completions", Method.Post);


            request.AddHeader("Authorization", $"Bearer {OpenAiAuthToken}");
            request.AddHeader("Content-Type", "application/json");

            MessagesObject message = new MessagesObject("user", messageBody);


            OpenAiPostRequest requestBody = new OpenAiPostRequest("gpt-3.5-turbo", new List<MessagesObject> { message });

            request.AddBody(requestBody);


            RestResponse<OpenAiPostResponse> response = await client.ExecuteAsync<OpenAiPostResponse>(request);


            OpenAiPostResponse res = JsonSerializer.Deserialize<OpenAiPostResponse>(response.Content);

            return res;

        }

    }
}
