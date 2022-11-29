import React from "react";
import { FaBars, FaToggleOff } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Navmenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [ScrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToBottom();
  };

  return (
    <>
      <Nav ScrollNav={ScrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Lido Studio
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Navmenu>
            <NavItem>
              <NavLinks
                to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                about
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about2"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Blog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Portfolio
              </NavLinks>
            </NavItem>
          </Navmenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
