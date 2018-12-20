import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: flex-end;
  border-bottom: 2px dashed white;
  bottom: 1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;

const Emoji = styled.span`
  font-size: 2rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const Train = styled.span<{ fromRightPercentage: number }>`
  font-size: 4rem;
  position: absolute;
  right: ${({ fromRightPercentage }) => fromRightPercentage * 100}%;
  transform: scale(-1, 1);
  transition: position 1s ease-in;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const Timeline = () => {
  const START_DATE = new Date(Date.UTC(2018, 11, 16, 0, 0, 0, 0));
  const END_DATE = new Date(Date.UTC(2019, 3, 27, 4, 0, 0, 0));
  const totalTime = END_DATE.getTime() - START_DATE.getTime();
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(END_DATE.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Wrapper>
      <Emoji>✅</Emoji>

      <Train fromRightPercentage={timeLeft / totalTime}>🚃</Train>

      <Emoji>🛑</Emoji>
    </Wrapper>
  );
};
