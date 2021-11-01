import styled from "styled-components";
import DeleteAllButton from "../atoms/DeleteAllButton";
import SaveButton from "../atoms/SaveButton";

function SaveButtonGroup() {
  return (
    <ButtonGroup>
      <SaveButton />
      <DeleteAllButton />
    </ButtonGroup>
  );
}

export default SaveButtonGroup;
