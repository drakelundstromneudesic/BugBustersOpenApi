import { BandDetails } from "../../../Models/BandDetails";
import {
  BandBox,
  DescriptionText,
  LikedBandsBoxFormatting,
  LoadingImage,
  StyledDislikeButton,
  StyledRemoveButton,
} from "./BandsBoxComponents";

import loading from "../../../Assets/loading-gif.gif";

type LikedBandsBoxProps = {
  readonly focusForDetails: BandDetails;
  readonly likedBands: string[];
  readonly likeToDislike: (band: string) => void;
  readonly hideDetails: () => void;
  readonly showDetails: (band: string) => void;
  readonly removedLikedBand: (band: string) => void;
};

export const LikedBandsBox = ({
  focusForDetails,
  likedBands,
  likeToDislike,
  hideDetails,
  removedLikedBand,
  showDetails,
}: LikedBandsBoxProps): JSX.Element => {
  return (
    <LikedBandsBoxFormatting>
      {likedBands.map((band) => (
        <>
          {band == focusForDetails.name ? (
            <BandBox>
              <h3>{band}</h3>
              {focusForDetails.description == "" ? (
                <LoadingImage src={loading} alt="loading" />
              ) : (
                <DescriptionText>{focusForDetails.description}</DescriptionText>
              )}

              <StyledDislikeButton onClick={() => likeToDislike(band)}>
                dislike
              </StyledDislikeButton>
              <StyledRemoveButton onClick={() => hideDetails()}>
                show less
              </StyledRemoveButton>
              <StyledRemoveButton onClick={() => removedLikedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          ) : (
            <BandBox>
              {band}
              <StyledDislikeButton onClick={() => likeToDislike(band)}>
                dislike
              </StyledDislikeButton>
              <StyledRemoveButton onClick={() => showDetails(band)}>
                show more
              </StyledRemoveButton>
              <StyledRemoveButton onClick={() => removedLikedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          )}
        </>
      ))}
    </LikedBandsBoxFormatting>
  );
};
