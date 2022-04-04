import { Link } from "react-router-dom";
import React from "react"
import { Counter } from "../../components/atoms/Counter";
export const GniewomirXView = ({back, title}) => {

  return <div>
    <Counter>0</Counter>
    <h1>{title}</h1>
    <Link to={back.to}>{back.text}</Link>
  </div>
};
