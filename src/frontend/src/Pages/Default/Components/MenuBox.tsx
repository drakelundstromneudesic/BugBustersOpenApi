import styled from "styled-components";
import { TAN, DARK_GREY, LIGHT_BROWN, BLACK } from "../../../Style/Colors";

export const MenuBox = styled.div`
  background-color: ${TAN};
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  border-color: ${DARK_GREY};
  :hover {
    background-color: ${LIGHT_BROWN};
  }
  border-color: ${BLACK};
  border-style: solid;
  border-width: 1px;
`;

export const BoxText = styled.div`
  font-size: medium;
  text-decoration: none;
  color: ${BLACK};
`;
