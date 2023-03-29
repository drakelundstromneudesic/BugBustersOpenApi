import { Guid } from "guid-typescript";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SessionInformation } from "../../Models/SessionInformation";
import { BLACK, LIGHT_TURQUOISE, SILVER } from "../../Style/Colors";

export const NewSessionPage = (): JSX.Element => {
  const { handleSubmit, register, reset } = useForm<SessionInformation>();

  // const Session = (session: SessionInformation) => {};

  return (
    <StyledForm
      onSubmit={handleSubmit((session) => {
        const newSession: SessionInformation = {
          model: session.model,
          sessionId: Guid.create().toString(),
          sessionName: session.sessionName,
          topic: session.topic,
        };

        reset();
      })}
    >
      <StyledTextInput
        type={"text"}
        {...register("sessionName", { required: true })}
      />
      <StyledInput type={"radio"} {...register("model", { required: true })} />
      <StyledInput type={"radio"} {...register("topic", { required: true })} />
      <StyledInput type={"submit"} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  border-radius: 10px;
  border-color: ${BLACK};
  border-width: 1px;
  border-style: solid;
  background-color: ${LIGHT_TURQUOISE};
  margin: 2px;
  width: 90vw;
  align-content: center;
  color: black;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border-width: 1px;
  margin: 0px 3px;
  font-size: 18px;
  width: 16%;
`;

const StyledTextInput = styled.input`
  border-radius: 5px;
  margin: 0px 3px;
  border-width: 1px;
  width: 60%;
  font-size: 20px;
`;
