import React from "react";
import { Button } from "../ButtonEeleents";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrapp,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElement";

const InfoSection = ({
  id,
  lightBg,
  topLine,
  heading,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightBg={lightBg}>{heading}</Heading>
                <Subtitle lightBg={lightBg}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="/">{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapp>
                <Img src={img} alt={alt} />
              </ImgWrapp>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
