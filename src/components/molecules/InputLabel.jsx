import styled from "styled-components";
function InputLabel({ labelFor, title, tooltipText }) {
  return (
    <Container>
      <Label htmlFor={labelFor}>{title}</Label>
      {tooltipText !== undefined ? (
        <Tooltip
          placement={window.innerWidth >= 330 ? "right" : "top"}
          content={<p>{tooltipText}</p>}
          wrapperStyles={tooltipWrapperStyles}
          trigger="mouseenter focusin"
        >
          <InfoIcon size={18} tabIndex="0" />
        </Tooltip>
      ) : null}
    </Container>
  );
}

InputLabel.propTypes = {
  labelFor: PropTypes.string,
  title: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
};

export default InputLabel;
