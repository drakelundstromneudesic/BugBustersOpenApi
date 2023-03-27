import { useForm } from "react-hook-form";
import styled from "styled-components";
import { BLACK, LIGHT_TURQUOISE, SILVER } from "../../../Style/Colors";

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

  const addBand = (band: Band) => {
    if (bandList.findIndex((x) => x == band.name) == -1) {
      setBandList([...bandList, band.name]);
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit((band) => {
        addBand(band);
      })}
    >
      <StyledTextInput
        type={"text"}
        {...register("name", { required: true, max: 100 })}
      />
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