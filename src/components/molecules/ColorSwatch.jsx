import { useContext } from "react";
import styled from "styled-components";
function ColorSwatch() {
  const { updateBackground, updateForeground, updateContrast } = useContext(ColorContext);
  const { savedColors, setSavedColors } = useContext(SaveContext);

  // Load saved color. Every saved color stores a property called `key`, which is a timestamp
  const handleLoad = (key) => {
    const { background, foreground } = savedColors.find((color) => color.time === key);

    // Do not update contrast in `updateBackground` and `updateForeground` since state update is async.
    updateBackground(background, false);
    updateForeground(foreground, false);
    updateContrast(background.rgb, foreground.rgb);
  };

