import styled from "styled-components";
import PropTypes from "prop-types";
import ColorTextInput from "../atoms/ColorTextInput";
import ColorPicker from "../atoms/ColorPicker";
import CopyButton from "../atoms/CopyButton";
import FormatButton from "../atoms/FormatButton";
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
