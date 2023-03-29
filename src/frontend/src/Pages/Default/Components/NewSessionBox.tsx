import { Link } from "react-router-dom";

import { MenuBox } from "./MenuBox";
import { HOME_ROUTE } from "../../../Routes";

export const NewSessionBox = (): JSX.Element => {
  return (
    <MenuBox>
      <Link to={HOME_ROUTE}>New Session</Link>
    </MenuBox>
  );
};
