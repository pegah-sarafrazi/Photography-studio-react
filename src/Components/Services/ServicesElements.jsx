import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
  height: 800px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 70px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  transition: all 0.2s ease-in-out;
  background-color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
`;

export const ServicesH2 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 70px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #010606;
`;
export const ServicesP = styled.p`
  font-size: 0.95rem;
  color: #010606;
  text-align: center;
`;
