import styled from "styled-components";
import {
  addOpacityToColor,
  BLACK,
  CREAM,
  DARK_RED,
  GREEN,
  GREY,
  LIGHT_GREEN,
  LIGHT_RED,
  SILVER,
  SKY_BLUE,
} from "../../../Style/Colors";

const BandsBox = styled.div`
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px ${(props) => addOpacityToColor(BLACK, 0.8)};
  min-height: 70px;
`;

export const LikedBandsBoxFormatting = styled(BandsBox)`
  background-color: ${LIGHT_GREEN};
`;

export const DislikedBandsBoxFormatting = styled(BandsBox)`
  background-color: ${LIGHT_RED};
`;

export const RecommendedBandsBoxFormatting = styled(BandsBox)`
  background-color: ${SKY_BLUE};
`;

export const BandBox = styled.div`
  display: flexbox;
  justify-content: center;
  padding: 5px;
  flex-wrap: wrap;
  border-radius: 10px;
  border-color: ${BLACK};
  background-color: ${CREAM};
  margin: 5px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  margin: 3px;
  border: 2px solid;
  border-radius: 50px;
  padding: 4px 12px;
  width: fit-content;
`;

export const StyledLikeButton = styled(StyledButton)`
  background-color: ${LIGHT_GREEN};
  color: ${BLACK};
  border-color: ${GREEN};
`;

export const StyledDislikeButton = styled(StyledButton)`
  background-color: ${LIGHT_RED};
  color: ${BLACK};
  border-color: ${DARK_RED};
`;

export const StyledRemoveButton = styled(StyledButton)`
  background-color: ${GREY};
  color: ${BLACK};
  border-color: ${SILVER};
`;

export const DescriptionText = styled.div`
  font-size: 11px;
`;

export const LoadingImage = styled.img`
  width: 10vw;
  height: 3vw;
`;
