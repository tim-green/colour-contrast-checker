import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
extend([a11yPlugin]); //use the accessibility plugin from colord

/**
 * Get the string representation of the color according to the given color format.
 * @param {Colord} color Input color object
 * @param {import("colord/types").Format} [format] The color format for the output
 * @returns {string}  String representation of the color
 * @example
 * const color = colord("#ff0000");
 * getColorString(color, "hsl");  // Returns "hsl(0, 100%, 50%)"
 */
export function getColorString(color, format) {
  let output = null;
  switch (format) {
    case "hex":
      output = color.toHex().toUpperCase();
      break;
    case "rgb":
      output = color.toRgbString();
      break;
    case "hsl":
      output = color.toHslString();
      break;
    default:
      output = color.toHex();
  }

  return output;
}

/**
 * Convert a RGB object into a string
 * @param {{r: number, g: number, b: number}} rgbColor Input color object
 * @returns {string}
 */
export function getRgbString(rgbColor) {
  return colord(rgbColor).toRgbString();
}

