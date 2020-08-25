import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  font-size: 3em;
  background: linear-gradient(330deg, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 640px) {
    font-size: 2em;
  }
`

export default Title;