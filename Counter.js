import React, { useState } from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  width: 2em;
  background: crimson;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px limegreen;
  }
`;

const ButtonSpan = styled.span`
  margin: 0 40px;
  font-weight: bolder;
`;

export default () => {
  const [count, setCount] = useState(0);

  return (
    <CounterContainer>
      <h3>Simple Counter with useState</h3>
      <div>
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <ButtonSpan>{count}</ButtonSpan>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </CounterContainer>
  );
};
