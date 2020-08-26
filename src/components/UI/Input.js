import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const InputContainer = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  background: transparent;
  backdrop-filter: blur(3px);
  border: 1px solid #b06ab3;
  padding: 3px 0;
  width: 15vw;
  height: 35px;
  outline: none;
  border-radius: 8px;
  color: #909bb3;
  font-family: "Poppins",sans-serif;
  padding-left: 40px;
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
    width: 25vw;
  }

  @media (max-width: 640px) {
    width: calc(100% - 40px);
    margin-right: 0;
  }
`

export default function Input({ type, name, placeholder, value, iconName, autocomplete }) {
  return (
    <InputContainer>
      <Icon name={iconName} position="absolute" />
      <StyledInput type={type} name={name} placeholder={placeholder} value={value} autoComplete={autocomplete} />
    </InputContainer>
  )
}