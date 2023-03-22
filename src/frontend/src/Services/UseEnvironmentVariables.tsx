export type EnvironmentVariables = {
  apiUri: string;
};

export const UseEnvironmentVariables = (): EnvironmentVariables => {
  const checkedApiURI = window.location.hostname.includes("localhost")
    ? "https://api.openai.com/v1/chat"
    : "https://okrneudesictest.azurewebsites.net";
  const EnvironmentVars: EnvironmentVariables = {
    apiUri: checkedApiURI,
  };
  return EnvironmentVars;
};
