import React, { useState } from 'react';
import Button from '../Button';
import { StyledCounter } from './styles';

export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>JEB</Button>
      <StyledCounter fontSize={count}>{count}</StyledCounter>
      {children}
    </>
  );
};
