import { useState } from "react";
import { Team } from "./Models/Team";
import { getTeam } from "./Services/TeamMembersService";
import logo from "./Neudesic-Logo.jpg";

export const HomePage = (): JSX.Element => {
  const [team, setTeam] = useState<Team>({
    teamName: "no team",
    teamMembers: [],
  });

  const updateTeam = async () => {
    const updatedBreads = await getTeam();
    setTeam(updatedBreads);
  };

  const eraseTeam = () => {
    setTeam({ teamName: "no team", teamMembers: [] });
  };

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{team.teamName}</h2>
      {team.teamMembers.length > 0 ? (
        team.teamMembers.map((teamMember) => (
          <>
            <p>
              {teamMember.name}: "{teamMember.favoriteQuote}"
            </p>
          </>
        ))
      ) : (
        <></>
      )}
      <button onClick={() => updateTeam()}>Get Team</button>
      <button onClick={() => eraseTeam()}>Erase Team</button>
    </>
  );
};
