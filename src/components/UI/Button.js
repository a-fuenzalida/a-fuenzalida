import styled from 'styled-components'

const Button = styled.a`
  background-color: transparent;
  backdrop-filter: blur(3px);
  border: 2px solid #b06ab3;
  margin: 5px 0;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1em;
  font-family: inherit;
  font-weight: 600;
  color: #b06ab3;
  cursor: pointer;
  outline: none;
  transition-duration: 0.2s;
  appearance: button;

  &:hover {
    box-shadow: 0px 0px 12px 0px #b16ab34f;
  }

  &:active {
    background-color: #b16ab310;
  }

  &:not(:first-child) {
    margin: 5px;
  }
`

export default Button;