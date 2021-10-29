import { css } from "styled-components";

export const defaultColors = {
  background: "#101010", // rgb(16, 16, 16) or hsl(	0, 0%, 6%)
  foreground: "#01D277", // rgb(1, 210, 119 ) or hsl(154°, 99%, 41%)
};

const variables = css`
  :root {
    --background: ${defaultColors.background};
    --foreground: ${defaultColors.foreground};
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

export default variables;
