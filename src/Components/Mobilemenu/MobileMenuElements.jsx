import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const MobileWrapper = styled.div`
  color: #fff;
`;
export const MobileSideMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const MobileLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2ms ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fab209;
    transition: 0.2ms ease-in-out;
  }
`;

export const MobileBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileBtn = styled(LinkR)`
  border-radius: 50px;
  background: #fab209;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background: #fff;
    transition: 0.2s ease-in-out;
  }
`;
