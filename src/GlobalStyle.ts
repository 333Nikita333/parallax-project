import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  :root {
    --index: calc(1vw + 1vh);
    --text: #e7e7e0;
    --transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 1);
  }

  @font-face {
	  font-family: raleway_f;
	  src: url(fonts/raleway-regular.woff2);
  }
  @font-face {
	  font-family: raleway_b;
	  src: url(fonts/raleway-black.woff2);
	  font-weight: 900;
  }
  
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
  
  body {
    background-color: #010101;
    font-family: raleway_f, sans-serif;
    line-height: 1.55;
  }
  
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  button,
  select {
    font: inherit;
  }
`;

export default GlobalStyle;
