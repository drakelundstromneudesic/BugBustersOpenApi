import { Link } from "react-router-dom";

import { BoxText, MenuBox } from "./MenuBox";
import { RECOMMENDATIONS_ROUTE } from "../../../Routes";

type SessionBoxProps = {
  readonly sessionName: string;
  readonly model: string;
  readonly topic: string;
  readonly sessionId: string;
};

export const SessionBox = ({
  model,
  sessionId,
  sessionName,
  topic,
}: SessionBoxProps): JSX.Element => {
  return (
    <MenuBox>
      <Link to={RECOMMENDATIONS_ROUTE + sessionId}>
        <BoxText>Session Name: {sessionName}</BoxText>
        <BoxText>Model: {model}</BoxText>
        <BoxText>Topic: {topic}</BoxText>
      </Link>
    </MenuBox>
  );
};
