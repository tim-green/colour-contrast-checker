import styled from "styled-components";
function ColorInputField({ target }) {
  return (
    <Container>
      <ColorTextInput target={target} />
      <ColorPicker target={target} />
      <div id={`picker-root-${target}`} />
      <ButtonGroup>
        <FormatButton target={target} />
        <CopyButton target={target} />
      </ButtonGroup>
    </Container>
  );
}

ColorInputField.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]),
};

export default ColorInputField;
