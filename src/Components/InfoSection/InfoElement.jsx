import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #010606;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1' ` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1' ` : `'col1' 'col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 50px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 440px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #fab209;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 700;
  color: ${({ lightBg }) => (lightBg ? "#010606" : "#f7f8fa")};
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 27px;
  color: ${({ lightBg }) => (lightBg ? "#010606" : "#f7f8fa")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrapp = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 0 50px 50px 30px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    top: 30px;
    right: 10px;
    left: 45px;
    bottom: 15px;
    background-color: #2b2b2b;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  position: relative;
  z-index: 1;
`;
