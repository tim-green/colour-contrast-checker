import { useContext } from "react";
import styled from "styled-components";
import { bp } from "../../styles/breakpoints";
export default function Ratio() {
  let { contrast } = useContext(ColorContext);
  contrast = (Math.round(contrast * 10) / 10).toFixed(1); // Round to 1 decimal place

  return (
    <Container>
      <Value>{contrast}</Value>
      <OutOf>/21</OutOf>
    </Container>
  );
}
