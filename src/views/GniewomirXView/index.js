import { Link } from "react-router-dom";
import React, { useState } from "react"
import { Counter } from "../../components/atoms/Counter";
import Button from "../../components/atoms/Button";
export const GniewomirXView = ({back, title}) => {
const [count, setCount] = useState(0);
  return <div>
    <Button onClick={() => setCount(count + 1)}>JEB</Button>
    <Counter fontSize={count}>{count}</Counter>
    <h1>{title}</h1>
    <Link to={back.to}>{back.text}</Link>
  </div>
};
