import React from "react";
import { GlobalStyle } from "../shared/GlobalStyle";
import styled, { keyframes } from "styled-components";
import { Timeline } from "../shared/Timeline";

const Wrapper = styled.div`
  align-items: center;
  color: white;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

const rainbow = keyframes`
  0% {color: red;}
	15% {color: orange;}
	30% {color: yellow;}
	45% {color: green;}
	60% {color: cyan;}
	75% {color: darkpurple;}
	100% {color: purple;} 
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: -1rem;
  text-align: center;
`;

const Answer = styled.p`
  animation: ${rainbow} 1s ease-in-out infinite;
  font-size: 8rem;
  font-weight: 700;
  margin-top: 1.5rem;
`;

const Index = () => (
  <Wrapper>
    <GlobalStyle />

    <Title>Is the L Shut Down Yet?</Title>
    <Answer>No</Answer>

    <Timeline />
  </Wrapper>
);

export default Index;
