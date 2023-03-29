import { BandDetails } from "../../../Models/BandDetails";
import {
  BandBox,
  DescriptionText,
  LoadingImage,
  RecommendedBandsBoxFormatting,
  StyledDislikeButton,
  StyledLikeButton,
  StyledRemoveButton,
} from "./BandsBoxComponents";

import loading from "../../../Assets/loading-gif.gif";

type RecommendedBandsBoxProps = {
  readonly focusForDetails: BandDetails;
  readonly recommendedBands: string[];
  readonly recommendedToLike: (band: string) => void;
  readonly recommendedToDislike: (band: string) => void;

  readonly hideDetails: () => void;
  readonly showDetails: (band: string) => void;
  readonly removedRecommendedBand: (band: string) => void;
  readonly isLoading: boolean;
};

export const RecommendedBandsBox = ({
  focusForDetails,
  recommendedBands,
  recommendedToLike,
  recommendedToDislike,
  hideDetails,
  removedRecommendedBand,
  showDetails,
  isLoading,
}: RecommendedBandsBoxProps): JSX.Element => {
  return (
    <RecommendedBandsBoxFormatting>
      {isLoading ? (
        <LoadingImage src={loading} alt="loading" />
      ) : (
        <>
          {recommendedBands.map((band) => (
            <>
              {band == focusForDetails.name ? (
                <BandBox>
                  <h3>{band}</h3>
                  {focusForDetails.description == "" ? (
                    <LoadingImage src={loading} alt="loading" />
                  ) : (
                    <DescriptionText>
                      {focusForDetails.description}
                    </DescriptionText>
                  )}
                  <StyledLikeButton onClick={() => recommendedToLike(band)}>
                    like
                  </StyledLikeButton>
                  <StyledDislikeButton
                    onClick={() => recommendedToDislike(band)}
                  >
                    dislike
                  </StyledDislikeButton>
                  <StyledRemoveButton onClick={() => hideDetails()}>
                    show less
                  </StyledRemoveButton>
                  <StyledRemoveButton
                    onClick={() => removedRecommendedBand(band)}
                  >
                    remove
                  </StyledRemoveButton>
                </BandBox>
              ) : (
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
                  <StyledRemoveButton onClick={() => showDetails(band)}>
                    show more
                  </StyledRemoveButton>
                  <StyledRemoveButton
                    onClick={() => removedRecommendedBand(band)}
                  >
                    remove
                  </StyledRemoveButton>
                </BandBox>
              )}
            </>
          ))}
        </>
      )}
    </RecommendedBandsBoxFormatting>
  );
};
