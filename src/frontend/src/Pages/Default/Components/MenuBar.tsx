import styled from "styled-components";
import { SessionInformation } from "../../../Models/SessionInformation";
import { SILVER } from "../../../Style/Colors";
import { NewSessionBox } from "./NewSessionBox";
import { SessionBox } from "./SessionBox";

type MenuBarProps = {
  readonly sessions: SessionInformation[];
};

export const MenuBar = ({ sessions }: MenuBarProps): JSX.Element => {
  return (
    <MenuBarBox>
      <NewSessionBox />
      {sessions.map((session) => (
        <SessionBox
          model={session.model}
          sessionId={session.sessionId}
          sessionName={session.sessionName}
          topic={session.topic}
        />
      ))}
    </MenuBarBox>
  );
};

const MenuBarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  left: 0px;
  height: 100vh;
  overflow: auto;
  background-color: ${SILVER};
`;
