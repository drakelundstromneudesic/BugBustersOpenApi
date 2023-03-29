import styled from "styled-components";
import hamburger from "../../../Assets/hamburger-button.png";

type MenuButtonProps = {
  readonly toggleMenu: () => void;
};

export const MenuButton = ({ toggleMenu }: MenuButtonProps): JSX.Element => {
  return <MenuButtonImage src={hamburger} onClick={toggleMenu} />;
};

const MenuButtonImage = styled.img`
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1000;
`;
