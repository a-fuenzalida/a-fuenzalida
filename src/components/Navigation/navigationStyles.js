import styled from 'styled-components'

export const Nav = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  height: 100vh;
  margin: 0 20px; 

  @media (max-width: 640px) {
    margin: 0;
    width: 100vw;
    display: flex;
    position: fixed !important;
    bottom: 0;
    left: 0;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const Item = styled.div`
  margin: 10px 0;

  @media (max-width: 640px) {
    margin: 15px 0;
  }
`