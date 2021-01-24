import styled, { css } from "styled-components"

const buttonStyles = css`
  background-color: white;
`

const formButtonStyles = css`
  background-color: black;
  color: white;
`

const getButtonStyles = (props) => {
  return props.formButton ? formButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  font-family: "Carrois Gothic SC", sans-serif;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  width: 100%;
  text-transform: uppercase;
  border: 1px solid lighten($color-gray, 40%);
  padding: 5px;
  min-height: 40px;
  margin: 1rem 1rem 1rem 0;
  transition: all 0.2s;
  -webkit-appearance: none;
  border-radius: 0;
  &:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.28), 0 2px 2px rgba(0, 0, 0, 0.3);
  }
  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
    transform: scale(0.99);
  }
  &:focus {
    outline: 0;
  }
  ${getButtonStyles}
`
