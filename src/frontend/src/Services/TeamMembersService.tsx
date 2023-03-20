import { Team } from "../Models/Team";
import { get } from "./HttpClient";
import { HttpStatusCodes } from "./HttpStatusCodes";

const TEAM_ENDPOINT = "/Team";

export const getTeam = async (): Promise<Team> => {
  const response = await get(TEAM_ENDPOINT, true, false);
  return response.status === HttpStatusCodes.Ok
    ? response.data
    : { teamName: "team not found", teamMembers: [] };
};
