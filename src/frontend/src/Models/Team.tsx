export type Team = {
  readonly teamName: string;
  readonly teamMembers: TeamMember[];
};

export type TeamMember = {
  readonly name: string;
  readonly favoriteQuote: string;
};
