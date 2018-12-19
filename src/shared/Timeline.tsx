import React from "react";
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
`;

const Train = styled.span`
  font-size: 4rem;
`;

export const Timeline = () => (
  <Wrapper>
    <Emoji>✅</Emoji>

    <Train>🚃</Train>

    <Emoji>🛑</Emoji>
  </Wrapper>
);
