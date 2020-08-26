import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 5vw;

  @media (max-width: 640px) {
    margin: 0 5vw;
  }
`

export default Container;