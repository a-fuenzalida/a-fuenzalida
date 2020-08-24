import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: #14161a;
    color: #fff;
    overflow-x: hidden;
  }
`

const LayoutBody = styled.div`
  display: flex;
  justify-content: left;
`

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 60px;
`

export {
  GlobalStyle,
  LayoutBody,
  Main
}