import styled from "styled-components";
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