import { post } from "./HttpClient";
import { HttpStatusCodes } from "./HttpStatusCodes";
import { RecommendationRequest } from "../Models/RecommendationRequest";

const BANDS_ENDPOINT = "bands";

export const getRecommendation = async (data: RecommendationRequest) => {
    const response = await post(BANDS_ENDPOINT, data, false);
    console.log(response);
    return response.status === HttpStatusCodes.Ok
        ? response.data
        : { recommendations: ["No recommendations found"] };
}