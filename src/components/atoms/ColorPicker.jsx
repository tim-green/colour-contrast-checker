import { useContext } from "react";
import styled from "styled-components";
function ColorPicker({ target }) {
  const { background, updateBackground, foreground, updateForeground } = useContext(ColorContext);

  const isBackground = target === "background";
  const targetColor = isBackground ? background : foreground;

  const handlePickerChange = (color) => {
    // Uses the same color format as the text input
    const inputFormat = targetColor.inputFormat;
    const inputValue = getColorString(colord(color), inputFormat);

    // No error validation is needed if we use color picker
    const newState = { rgb: color, input: inputValue, inputFormat, validInput: true };
    isBackground ? updateBackground(newState) : updateForeground(newState);
  };

  const rgbPicker = <RgbPicker color={targetColor.rgb} onChange={(color) => handlePickerChange(color)} />;

  return (
    <Tooltip
      content={rgbPicker}
      trigger="click"
      placement="bottom"
      offset={[100, 5]}
      interactive={true}
      wrapperStyles={styles.buttonWrapper}
      tooltipBoxStyles={styles.tooltipBox}
      plugins={[hideOnEsc]}
      appendTo={() => document.getElementById(`picker-root-${target}`)}
    >
      <PickerButton target={target} aria-label="Open color picker" />
    </Tooltip>
  );
}

ColorPicker.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default ColorPicker;
