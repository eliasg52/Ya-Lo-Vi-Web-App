import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: none;
}

html {
  overflow-x: hidden;
  scroll-padding-top: 5.5rem;
  scroll-behavior: smooth;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export default GlobalStyles;
