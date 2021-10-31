import { css } from "styled-components";

export const defaultColors = {
  background: "#101010", // rgb(16, 16, 16) or hsl(	0, 0%, 6%)
  foreground: "#01D277", // rgb(1, 210, 119 ) or hsl(154°, 99%, 41%)
};

const variables = css`
  :root {
    --background: ${defaultColors.background};
    --foreground: ${defaultColors.foreground};
    --background-hover: ${defaultColors.background};
    --foreground-hover: ${defaultColors.foreground};

    --black: #101010;
    --deep-black: #0A0909;
    --darkest-gray: #3F3F3F;
    --dark-gray: #292929;
    --gray: #A6A6A6;
    --white: #ffffff;
    --white-hover: rgba(255, 255, 255, .2);
    --red: #C30000;
    --light-red: #E15346;
    --light-red-hover: rgba(225, 83, 70, .2);
    --greeny: #01D277;
    --greeny-hover: rgba(1, 210, 119, .2);
    --green: #5BB015;
    --green-hover: rgba(91, 176, 21, .2);
    --cyan: #2afeb7;
    --cyan-hover: rgba(42, 254, 183, .7);

    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    --gradient-start: rgba(17, 153, 142, 1);
  	--gradient-end: rgba(56, 239, 125, 1);
  }
`;

export default variables;
