import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colord, getFormat } from "colord";
import ColorContext from "../../context/ColorContext";
function ColorTextInput({ target }) {
  const { background, updateBackground, foreground, updateForeground } = useContext(ColorContext);

  const isBackground = target === "background";
  const color = isBackground ? background : foreground;
  let validInput = color.validInput;

  const handleInputChange = (event) => {
    const input = event.target.value;
    const inputColor = colord(input);

    let rgb = inputColor.toRgb();
    let inputFormat = getFormat(input);
    validInput = inputColor.isValid();

    // Use values from the original color state if input is invalid
    if (!validInput) {
      rgb = color.rgb;
      inputFormat = color.inputFormat;
    }

    const newState = { rgb, input, inputFormat, validInput };
    isBackground ? updateBackground(newState) : updateForeground(newState);
  };

  return (
    <>
      <Input
        type="text"
        id={target}
        value={color.input}
        onChange={(event) => handleInputChange(event)}
        valid={validInput}
        spellCheck={false}
      />
      <HelperText visible={!validInput}>Invalid input</HelperText>
    </>
  );
}

ColorTextInput.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default ColorTextInput;
