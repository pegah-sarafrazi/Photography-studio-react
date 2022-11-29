import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  padding: 70px 0;
`;

export const TabH2 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 70px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TabWrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 50px;
`;

export const TabImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5%;
`;

export const TabsImg = styled.img`
  width: 100%;
  padding: 5px;
`;
