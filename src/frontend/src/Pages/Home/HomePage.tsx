import logo from "../../Neudesic-Logo.jpg";
import loading from "../../loading-gif.gif";
import styled from "styled-components";
import {
  BLACK,
  BURGUNDY,
  DARK_RED,
  GREEN,
  LIGHT_GREEN,
  SILVER,
  WHITE,
} from "../../Style/Colors";

import { getDetails, getRecommendation } from "../../Services/BandService";
import { useState } from "react";
import { BandInput } from "./Components/BandInput";
import { RecommendationRequest } from "../../Models/RecommendationRequest";
import {
  BandBox,
  DisikedBandsBoxFormatting,
  LoadingImage,
  RecommendedBandsBoxFormatting,
  StyledDislikeButton,
  StyledLikeButton,
  StyledRemoveButton,
} from "./Components/BandsBoxComponents";
import { BandDetails } from "../../Models/BandDetails";
import { LikedBandsBox } from "./Components/LikedBandsBox";

export const HomePage = (): JSX.Element => {
  const [likedBands, setLikedBands] = useState<string[]>([]);
  const [dislikedBands, setDislikedBands] = useState<string[]>([]);
  const [recommendedBands, setRecommendedBands] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [focusForDetails, setFocusForDetails] = useState<BandDetails>({
    name: "",
    description: "",
  });
  const [generateButtonError, setGenerateButtonError] = useState<string>("");

  const likeBand = (band: string) => setLikedBands([...likedBands, band]);
  const removedLikedBand = (band: string) =>
    setLikedBands([...likedBands].filter((name) => name !== band));
  const dislikeBand = (band: string) =>
    setDislikedBands([...dislikedBands, band]);
  const removedDisikedBand = (band: string) =>
    setDislikedBands([...dislikedBands].filter((name) => name !== band));
  const removedRecommendedBand = (band: string) =>
    setRecommendedBands([...recommendedBands].filter((name) => name !== band));

  const recommendedToLike = (band: string) => {
    removedRecommendedBand(band);
    likeBand(band);
  };
  const recommendedToDislike = (band: string) => {
    removedRecommendedBand(band);
    dislikeBand(band);
  };

  const likeToDislike = (band: string) => {
    removedLikedBand(band);
    dislikeBand(band);
  };

  const dislikeToLike = (band: string) => {
    removedDisikedBand(band);
    likeBand(band);
  };

  const generateRecommendations = async () => {
    if (likedBands.length > 0) {
      setGenerateButtonError("");
      setIsLoading(true);
      const data: RecommendationRequest = {
        likes: likedBands,
        dislikes: dislikedBands,
        recommendations: recommendedBands,
      };
      const updatedRecommendations: RecommendationRequest =
        await getRecommendation(data);
      setIsLoading(false);
      setRecommendedBands(updatedRecommendations.recommendations);
    } else {
      setGenerateButtonError(
        "Please add a liked band before using this button"
      );
    }
  };

  const showDetails = async (band: string) => {
    const currentBandDetails: BandDetails = { name: band, description: "" };
    setFocusForDetails(currentBandDetails);
    const updatedBandDetails: BandDetails = await getDetails(
      currentBandDetails
    );
    setFocusForDetails(updatedBandDetails);
  };
  const hideDetails = () => {
    setFocusForDetails({ name: "", description: "" });
  };

  return (
    <>
      <Header>
        <HeaderImage src={logo} alt="Neudesic Logo" />
      </Header>
      <BandGrid>
        <ColumnTitle>Liked Bands</ColumnTitle>
        <ColumnTitle>Disliked Bands</ColumnTitle>
        <ColumnTitle>Recommended Bands</ColumnTitle>
        <BandInput bandList={likedBands} setBandList={setLikedBands} />
        <BandInput bandList={dislikedBands} setBandList={setDislikedBands} />
        <div>
          <StyledGenerateButton onClick={() => generateRecommendations()}>
            Generate Recommendations
          </StyledGenerateButton>
          {generateButtonError != "" ? (
            <ErrorText>{generateButtonError}</ErrorText>
          ) : (
            <></>
          )}
        </div>
        <LikedBandsBox
          focusForDetails={focusForDetails}
          hideDetails={hideDetails}
          likeToDislike={likeToDislike}
          likedBands={likedBands}
          removedLikedBand={removedLikedBand}
          showDetails={showDetails}
        />
        <DisikedBandsBoxFormatting>
          {dislikedBands.map((band) => (
            <BandBox>
              {band}
              <StyledLikeButton onClick={() => dislikeToLike(band)}>
                like
              </StyledLikeButton>
              <StyledRemoveButton onClick={() => removedDisikedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          ))}
        </DisikedBandsBoxFormatting>
        <RecommendedBandsBoxFormatting>
          {isLoading ? (
            <LoadingImage src={loading} alt="loading" />
          ) : (
            <>
              {recommendedBands.map((band) => (
                <BandBox>
                  {band}
                  <StyledLikeButton onClick={() => recommendedToLike(band)}>
                    like
                  </StyledLikeButton>
                  <StyledDislikeButton
                    onClick={() => recommendedToDislike(band)}
                  >
                    dislike
                  </StyledDislikeButton>
                  <StyledRemoveButton
                    onClick={() => removedRecommendedBand(band)}
                  >
                    remove
                  </StyledRemoveButton>
                </BandBox>
              ))}
            </>
          )}
        </RecommendedBandsBoxFormatting>
        <></>
      </BandGrid>
    </>
  );
};

const BandGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 0.5%;
  background-color: ${SILVER};
  width: 90vw;
  align-content: center;
  color: black;
`;
const Header = styled.div`
  background-color: ${WHITE};
  align-content: center;
  color: black;
  width: 90vw;
`;

const ColumnTitle = styled.div`
  font-size: 2vw;
  padding-top: 0.5vw;
  padding-bottom: 0.5vw;
`;

const HeaderImage = styled.img`
  height: 20vmin;
  pointer-events: none;
`;

export const StyledGenerateButton = styled.button`
  width: 60%;
  margin: 0% 20%;
  font-size: 20px;
  border: 2px solid;
  border-radius: 50px;
  padding: 4px 12px;
  width: fit-content;
  justify-content: center;
  background-color: ${LIGHT_GREEN};
  color: ${BLACK};
  border-color: ${GREEN};
`;

const ErrorText = styled.div`
  font-size: small;
  color: ${DARK_RED};
  font-weight: bolder;
`;
