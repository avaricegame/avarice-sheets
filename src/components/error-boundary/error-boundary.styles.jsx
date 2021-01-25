import styled from "styled-components"

export const ErrorImageDiv = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`

export const ErrorImageText = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 5rem;
`
