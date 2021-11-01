import styled from "styled-components";
import Ratio from "../atoms/Ratio";
import { bp } from "../../styles/breakpoints";

export default function ContrastRatio() {
  return (
    <Container>
      <Label>Contrast Ratio</Label>
      <Ratio />
    </Container>
  );
}
