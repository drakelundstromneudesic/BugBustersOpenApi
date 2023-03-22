import { useState } from "react";
import logo from "./Neudesic-Logo.jpg";
import { useForm } from "react-hook-form";
import { getRecommendation } from "./Services/OpenAIService";

export const HomePage = (): JSX.Element => {
  const PrintResponse = async () => {
    const aiResponse = await getRecommendation();
    console.log(aiResponse);
  };

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />

      <button onClick={() => PrintResponse()}>PrintResponse </button>
    </>
  );
};
