import styled from "styled-components";
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
