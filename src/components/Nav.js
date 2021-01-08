import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Capture
        </a>
      </h1>
      <ul>
        <NavLink exact className="link" activeClassName="is-active" to="/">
          About Us
        </NavLink>
        <NavLink className="link" activeClassName="is-active" to="/work">
          Our Work
        </NavLink>
        <NavLink className="link" activeClassName="is-active" to="/contact">
          Contact
        </NavLink>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    .link {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  .is-active {
    color: #23d997;
  }
`;

export default Nav;
