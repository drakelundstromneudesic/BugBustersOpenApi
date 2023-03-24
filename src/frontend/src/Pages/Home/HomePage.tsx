import logo from "../../Neudesic-Logo.jpg";
import styled from "styled-components";
import { SILVER } from "../../Style/Colors";

import { getRecommendation } from "../../Services/OpenAIService";
import { useState } from "react";
import { text } from "stream/consumers";
import { BandInput } from "./Components/BandInput";
import {
  BandBox,
  DisikedBandsBox,
  LikedBandsBox,
  RecommendedBandsBox,
  StyledDislikeButton,
  StyledLikeButton,
  StyledRemoveButton,
} from "./Components/BandsBoxComponents";

export const HomePage = (): JSX.Element => {
  const PrintResponse = async () => {
    const aiResponse = await getRecommendation();
    console.log(aiResponse);
  };

  const TestHooks = () => {
    console.log("LikedBands");
    console.log(LikedBands);
    console.log("DislikedBands");
    console.log(DislikedBands);
    console.log("RecommendedBands");
    console.log(RecommendedBands);
  };

  const [LikedBands, setLikedBands] = useState<string[]>([]);
  const [DislikedBands, setDislikedBands] = useState<string[]>([]);
  const [RecommendedBands, setRecommendedBands] = useState<string[]>([]);

  const likeBand = (band: string) => setLikedBands([...LikedBands, band]);
  const removedLikedBand = (band: string) =>
    setLikedBands([...LikedBands].filter((name) => name !== band));
  const dislikeBand = (band: string) =>
    setDislikedBands([...DislikedBands, band]);
  const removedDisikedBand = (band: string) =>
    setDislikedBands([...DislikedBands].filter((name) => name !== band));
  const removedRecommendedBand = (band: string) =>
    setRecommendedBands([...RecommendedBands].filter((name) => name !== band));

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

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <BandGrid>
        <ColumnTitle>Liked Bands</ColumnTitle>
        <ColumnTitle>Disliked Bands</ColumnTitle>
        <ColumnTitle>Recommended Bands</ColumnTitle>
        <BandInput bandList={LikedBands} setBandList={setLikedBands} />
        <BandInput bandList={DislikedBands} setBandList={setDislikedBands} />
        <BandInput
          bandList={RecommendedBands}
          setBandList={setRecommendedBands}
        />
        <LikedBandsBox>
          {LikedBands.map((band) => (
            <BandBox>
              {band}
              <StyledDislikeButton onClick={() => likeToDislike(band)}>
                dislike
              </StyledDislikeButton>
              <StyledRemoveButton onClick={() => removedLikedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          ))}
        </LikedBandsBox>
        <DisikedBandsBox>
          {DislikedBands.map((band) => (
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
        </DisikedBandsBox>
        <RecommendedBandsBox>
          {RecommendedBands.map((band) => (
            <BandBox>
              {band}
              <StyledLikeButton onClick={() => recommendedToLike(band)}>
                like
              </StyledLikeButton>
              <StyledDislikeButton onClick={() => recommendedToDislike(band)}>
                dislike
              </StyledDislikeButton>
              <StyledRemoveButton onClick={() => removedRecommendedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          ))}
        </RecommendedBandsBox>
        <></>
      </BandGrid>
      <button onClick={() => PrintResponse()}>PrintResponse </button>

      <button onClick={() => TestHooks()}>Test Button</button>
    </>
  );
};

const BandGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 1vw;
  background-color: ${SILVER};
  width: 90vw;
  align-content: center;
  color: black;
`;

const ColumnTitle = styled.h1``;
