import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: #14161a;
    color: #fff;
  }
`

export const LayoutBody = styled.div`
  max-width: 100vw;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: left;
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
`