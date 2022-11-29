import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ ScrollNav }) => (ScrollNav ? "#000" : "transparent")};
  margin-top: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  text-decoration: none !important;
  &:hover {
    color: #fab209 !imprtant;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 1.8 rem;
    transform: translate(-100%, 60%);
  }
`;

export const Navmenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 93px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0 1.3rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none !important;

  &.active {
    border-bottom: 3px solid #fab209;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #fab209;
  white-space: nowrap;
  padding: 10px 22px;
  text-decoration: none;
  font-size: 16px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #000 !important;

  }
}
`;
