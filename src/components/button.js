import styled from "@emotion/styled"
import colors from "../color"

export const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  transition: 0.4s;
  box-shadow: #867a7a 0px 0px 4px 0px;
  cursor: pointer;
  border: none;
  &:hover {
    box-shadow: #867a7a 0px 0px 5px 1px;
  }
`

export const StyledButton = styled(Button)`
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.white};
  min-width: 10vw;
  &:hover {
    background-color: ${colors.lightPrimary};
  }
`

export const DeleteButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  font-size: 1.5em;
  box-shadow: none;
  background-color: ${colors.error};
  color: ${colors.white};
`
