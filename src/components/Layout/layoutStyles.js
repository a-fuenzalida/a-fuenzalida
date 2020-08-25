import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: #14161a;
    color: #fff;
    overflow-x: hidden;
  }
`

export const LayoutBody = styled.div`
  display: flex;
  justify-content: left;
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 60px;
`