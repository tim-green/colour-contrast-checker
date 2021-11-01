import styled from "styled-components";
import { bp } from "../../styles/breakpoints";

export default function ColorInputs() {
  return (
    <Container>
      <ColorInputBlock>
        <InputLabel title="Background" labelFor="background" tooltipText="Accepts HEX, RGB & HSL" />
        <ColorInputField target="background" />
      </ColorInputBlock>
      <SwapButton />
      <ColorInputBlock>
        <InputLabel title="Foreground" labelFor="foreground" tooltipText="Accepts HEX, RGB & HSL" />
        <ColorInputField target="foreground" />
      </ColorInputBlock>
    </Container>
  );
}
