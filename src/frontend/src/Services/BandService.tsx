import { post } from "./HttpClient";
import { HttpStatusCodes } from "./HttpStatusCodes";
import { RecommendationRequest } from "../Models/RecommendationRequest";
import { BandDetails } from "../Models/BandDetails";

const BANDS_ENDPOINT = "bands";
const BANDS_DETAILS_ENDPOINT = "bands/detail";

export const getRecommendation = async (data: RecommendationRequest) => {
  const response = await post(BANDS_ENDPOINT, data, false);
  console.log(response);
  return response.status === HttpStatusCodes.Ok
    ? response.data
    : { recommendations: ["No recommendations found"] };
};

export const getDetails = async (data: BandDetails) => {
  const response = await post(BANDS_DETAILS_ENDPOINT, data, false);
  console.log(response);
  return response.status === HttpStatusCodes.Ok
    ? response.data
    : { description: "No description found" };
};
