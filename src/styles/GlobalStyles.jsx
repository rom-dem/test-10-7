import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, 
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

ul, 
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
}

input, select, textarea {
  font-family: inherit;
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
}



h1, h2, h3, h4 {
  margin: 0;
}
`;

export default GlobalStyles;
