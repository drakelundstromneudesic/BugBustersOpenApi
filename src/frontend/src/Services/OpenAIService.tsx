
import { post } from "./HttpClient";
import { HttpStatusCodes } from "./HttpStatusCodes";
import { OpenAIResponse } from '../Models/OpenAIResponse';

const TEAM_ENDPOINT = "/completions";

export const getRecommendation = async (): Promise<OpenAIResponse> => {
  const data = { model: "gpt-3.5-turbo", messages: [{role: "user", content: "I like the bands Britney Spears, and christina aguilera.   What bands would you recommend listening to?  Format as json with the fields likes, dislikes, and recommendations"}]};
  const response = await post(TEAM_ENDPOINT, data, false);
  console.log(response);
  return response.status === HttpStatusCodes.Ok
    ? response.data
    : { teamName: "team not found", teamMembers: [] };
};
