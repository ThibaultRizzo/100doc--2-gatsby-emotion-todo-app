import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import styled from "@emotion/styled"
import colors from "../color"

const StyledLayout = styled.div`
  min-height: 100vh;
  padding: 2vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${colors.white};
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{children}</main>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
