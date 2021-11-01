import styled from "styled-components";
import SaveButtonGroup from "../molecules/SaveButtonGroup";
import ColorSwatch from "../molecules/ColorSwatch";
import { bp } from "../../styles/breakpoints";
export default function SavedColors() {
  return (
    <Container id="saved-colors">
      <h2>Saved Colors</h2>
      <SaveButtonGroup />
      <ColorSwatch />
    </Container>
  );
}
