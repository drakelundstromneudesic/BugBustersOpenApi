export type RecommendationRequest = {
    readonly likes: string[];
    readonly dislikes: string[];
    readonly recommendations: string[];
  };