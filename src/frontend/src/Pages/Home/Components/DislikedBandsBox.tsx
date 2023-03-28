import { BandDetails } from "../../../Models/BandDetails";
import {
  BandBox,
  DescriptionText,
  DislikedBandsBoxFormatting,
  LoadingImage,
  StyledLikeButton,
  StyledRemoveButton,
} from "./BandsBoxComponents";

import loading from "../../../loading-gif.gif";

type DislikedBandsBoxProps = {
  readonly focusForDetails: BandDetails;
  readonly dislikedBands: string[];
  readonly dislikeToLike: (band: string) => void;
  readonly hideDetails: () => void;
  readonly showDetails: (band: string) => void;
  readonly removedDislikedBand: (band: string) => void;
};

export const DislikedBandsBox = ({
  focusForDetails,
  dislikedBands,
  dislikeToLike,
  hideDetails,
  removedDislikedBand,
  showDetails,
}: DislikedBandsBoxProps): JSX.Element => {
  return (
    <DislikedBandsBoxFormatting>
      {dislikedBands.map((band) => (
        <>
          {band == focusForDetails.name ? (
            <BandBox>
              <h3>{band}</h3>
              {focusForDetails.description == "" ? (
                <LoadingImage src={loading} alt="loading" />
              ) : (
                <DescriptionText>{focusForDetails.description}</DescriptionText>
              )}

              <StyledLikeButton onClick={() => dislikeToLike(band)}>
                dislike
              </StyledLikeButton>
              <StyledRemoveButton onClick={() => hideDetails()}>
                show less
              </StyledRemoveButton>
              <StyledRemoveButton onClick={() => removedDislikedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          ) : (
            <BandBox>
              {band}
              <StyledLikeButton onClick={() => dislikeToLike(band)}>
                dislike
              </StyledLikeButton>
              <StyledRemoveButton onClick={() => showDetails(band)}>
                show more
              </StyledRemoveButton>
              <StyledRemoveButton onClick={() => removedDislikedBand(band)}>
                remove
              </StyledRemoveButton>
            </BandBox>
          )}
        </>
      ))}
    </DislikedBandsBoxFormatting>
  );
};
