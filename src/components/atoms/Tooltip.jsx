import styled from "styled-components";
import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";

const TooltipBox = styled.div`
  padding: .5rem .9rem;
  background-color: var(--darkest-gray);
  border-radius: .5rem;
  border-color: var(--black);

  /* Style the location of the tooltip arrow */
  &[data-placement^="top"] > #arrow {
    bottom: -.4rem;
  }

  &[data-placement^="bottom"] > #arrow {
    top: -.4rem;
  }

  &[data-placement^="left"] > #arrow {
    right: -.4rem;
  }

  &[data-placement^="right"] > #arrow {
    left: -.4rem;
  }
`;

const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: .8rem;
    height: .8rem;
    background: inherit;
  }

  & {
    visibility: hidden;
  }

  &::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
`;

// `children` component needs to wrapped by a span - https://github.com/atomiks/tippyjs-react#component-children
const ChildrenWrapper = styled.span`
  display: inline-block;
  height: max-content;
`;

// `children` - Component that triggers the tooltip
// `wrapperStyles` - Styles applied to the wrapper that holds the trigger element
function Tooltip({ children, content, wrapperStyles = {}, tooltipBoxStyles = {}, ...tippyProps }) {
  return (
    <Tippy
      render={(attrs) => (
        <TooltipBox {...attrs} style={tooltipBoxStyles}>
          {content}
          <Arrow id="arrow" data-popper-arrow="" />
        </TooltipBox>
      )}
      {...tippyProps}
    >
      <ChildrenWrapper style={wrapperStyles}>{children}</ChildrenWrapper>
    </Tippy>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  tooltipBoxStyles: PropTypes.object,
  wrapperStyles: PropTypes.object,
};

export default Tooltip;