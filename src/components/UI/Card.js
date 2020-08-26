import styled from 'styled-components'

const Card = styled.div`
  width: 18vw;
  height: 18vw;
  background: #4568dc10;
  backdrop-filter: blur(10px);
  margin: 1vw;
  border-radius: 10%;

  @media (max-width: 1365px) {
    margin: 10px;
  }

  @media (max-width: 640px) {
    width: 40vw;
    height: 40vw;
  }

  @media (max-width: 335px) {
    width: 35vw;
    heigth: 35vw;
  }
`

export default Card;