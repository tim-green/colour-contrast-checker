import { useContext } from "react";
import styled from "styled-components";
export default function SwapButton() {
  const { handleSwapColors } = useContext(ColorContext);

  return (
    <Tooltip
      content={<p>Swap colors</p>}
      trigger="mouseenter focusin"
      placement="right"
      offset={[0, 15]}
      touch={false}
      wrapperStyles={tooltipWrapperStyles}
    >
      <Button aria-label="Swap colors">
        <MdSwapVert size={28} onClick={handleSwapColors} />
      </Button>
    </Tooltip>
  );
}
