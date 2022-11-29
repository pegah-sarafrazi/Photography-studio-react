import React from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElement";
import Video from "../../Videos/video.mp4";
import { useState } from "react";
import { Button } from "../ButtonEeleents";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>PHOTOGRAGHY STUDIO</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repellendus voluptatem dolores quae possimus esse necessitatibus
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/"
            primary
            dark
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
