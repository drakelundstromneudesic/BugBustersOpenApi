import { useForm } from "react-hook-form";
import styled from "styled-components";

type BandInputProps = {
  readonly bandList: string[];
  readonly setBandList: (bandList: string[]) => void;
};

type Band = {
  readonly name: string;
};

export const BandInput = ({
  bandList,
  setBandList,
}: BandInputProps): JSX.Element => {
  const { handleSubmit, register } = useForm<Band>();

  return (
    <StyledForm
      onSubmit={handleSubmit((Band) => {
        setBandList([...bandList, Band.name]);
      })}
    >
      <StyledInput
        type={"text"}
        {...register("name", { required: true, max: 100 })}
      />
      <StyledInput type={"submit"} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flexbox;
`;

const StyledInput = styled.input`
  width: 50px;
`;
