import React from "react"
import styled from "@emotion/styled"
import colors from "../color"

const StyledSideBar = styled.div`
  @keyframes grow {
    0% {
      width: 0;
    }
  }
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  display: flex;
  flex-flow: column;
  height: 100vh;
  box-shadow: #c8c0c0 0px 0px 11px 1px;
  animation: grow 1s ease-in-out;
  z-index: 10;
  background: ${colors.white};
  h1 {
    white-space: nowrap;
    margin: 0;
    padding: 2vw;
    flex-basis: 10%;
    background-color: ${colors.primary};
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div {
    margin: 2vw;
  }
`

const SideBar = ({ title, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <StyledSideBar onClick={e => e.stopPropagation()}>
          <h1>{title}</h1>
          <div>{children}</div>
        </StyledSideBar>
      )}
    </>
  )
}

export default SideBar
