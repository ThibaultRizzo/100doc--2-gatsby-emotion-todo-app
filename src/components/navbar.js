import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "../color"

const StyledNavbar = styled.nav`
  padding: 2vh;
`

const StyledNavLink = styled(Link)`
  color: ${colors.lightPrimary};
  padding: 1vw;
  font-weight: 600;
  font-size: 1.5em;
  text-decoration: none;
  transition: 0.4s;
  :hover {
    font-size: 1.7em;
  }
  &.active {
    font-weight: 800;
    color: ${colors.primary};
  }
`

const NavLink = ({ to, children }) => {
  return (
    <StyledNavLink to={to} activeClassName="active">
      {children}
    </StyledNavLink>
  )
}

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">Todos</NavLink>
      <NavLink to="/about">About</NavLink>
    </StyledNavbar>
  )
}

export default Navbar
