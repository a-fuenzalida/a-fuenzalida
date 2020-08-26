import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  color: #909bb3;
  font-size: 1.5vw;
  font-weight: 200;
  text-justify: inter-word;
  margin-bottom: 10px;

  @media (max-width: 1080px) {
    font-size: 1.1em;
  }
`

export default Text;