import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Background from "./images/boats.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;  
    background: url(${Background}) repeat center / cover;
    text-align: center;
    background-attachment: fixed;
  }
`;

ReactDom.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
