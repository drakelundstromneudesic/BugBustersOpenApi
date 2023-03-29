import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SessionInformation } from "../../Models/SessionInformation";
import { MenuBar } from "./Components/MenuBar";
import { MenuButton } from "./Components/MenuButton";

export const DefaultPage = (): JSX.Element => {
  const [sessions, setSessions] = useState<SessionInformation[]>([
    {
      model: "gtp 3.5 turbo",
      sessionId: "qweqwerartadfaw",
      sessionName: "rock bands",
      topic: "band",
    },
    {
      model: "gtp 3.5 turbo",
      sessionId: "asasfasfasfas",
      sessionName: "thanksgiving food ideas",
      topic: "dish",
    },
    {
      model: "gtp 3.5 turbo",
      sessionId: "zxczxczczc",
      sessionName: "Books to read",
      topic: "book",
    },
  ]);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Box>
      <MenuButton toggleMenu={toggleMenu} />
      {showMenu ? <MenuBar sessions={sessions} /> : <></>}

      <Page>
        <Outlet />
      </Page>
    </Box>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
`;
