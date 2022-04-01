import { Link } from "react-router-dom";

export const GniewomirXView = ({back, title}) => {

  return <div>
    <h1>{title}</h1>
    <Link to={back.to}>{back.text}</Link>
  </div>
};