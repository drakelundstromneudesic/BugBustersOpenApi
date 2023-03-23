export type OpenAIResponse = {
  readonly id: string;
  readonly object: string;
  readonly created: Date;
  readonly model: string;
  readonly usage: Usage;
  readonly choices: Choices;
};

export type Usage = {
  readonly prompt_tokens: number;
  readonly completion_tokens: number;
  readonly total_tokens: number;
};

export type Choices = {
  readonly message: Message;
  readonly finish_reason: string;
  readonly index: number;
};

export type Message = {
  readonly role: string;
  readonly content: string;
};
