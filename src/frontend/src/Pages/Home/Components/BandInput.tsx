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
  justify-content: center;
  padding: 5px;
  flex-wrap: wrap;
  border-radius: 10px;
  border-color: ${BLACK};
  border-width: 1px;
  border-style: solid;
  background-color: ${LIGHT_TURQUOISE};
`;

const StyledInput = styled.input``;
