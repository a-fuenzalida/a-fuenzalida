import styled from 'styled-components'

const Textarea = styled.textarea`
  background: transparent;
  backdrop-filter: blur(3px);
  border: 1px solid #b06ab3;
  padding: 10px;
  width: calc(30vw + 72px);
  height: 20vh;
  outline: none;
  border-radius: 8px;
  color: #909bb3;
  font-family: "Poppins",sans-serif;
  transition-duration: 0.2s;
  font-size: 1em;
  margin-right: 10px;
  margin-bottom: 10px;

  &:focus {
    background-color: #b16ab305;
  }

  &::placeholder {
    color: #909bb370
  }

  @media (max-width: 900px) {
    width: calc(50vw + 72px);
  }

  @media (max-width: 640px) {
    width: calc(100% - 20px);
    margin-right: 0;
  }
`

export default Textarea;