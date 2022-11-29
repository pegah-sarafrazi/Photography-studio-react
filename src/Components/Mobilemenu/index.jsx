import React from "react";
import {
  MobileContainer,
  Icon,
  CloseIcon,
  MobileSideMenu,
  MobileLink,
  MobileWrapper,
  MobileBtnWrapper,
  MobileBtn,
} from "./MobileMenuElements";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileSideMenu>
          <MobileLink onClick={toggle} to="/">
            Home
          </MobileLink>
          <MobileLink onClick={toggle} to="/courses">
            Courses
          </MobileLink>
          <MobileLink onClick={toggle} to="/blog">
            Blog
          </MobileLink>
          <MobileLink onClick={toggle} to="/roadmap">
            Road Map
          </MobileLink>
        </MobileSideMenu>
        <MobileBtnWrapper>
          <MobileBtn to="/signin">Sign in</MobileBtn>
        </MobileBtnWrapper>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
