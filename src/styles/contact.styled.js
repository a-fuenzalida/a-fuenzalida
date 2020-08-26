import styled from 'styled-components'

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`