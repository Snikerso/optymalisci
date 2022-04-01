import { Link } from "react-router-dom";

export const KanonashiView = ({title, back}) => {

  return <div>
    <h1>{title} Witaj na mojej podstronie</h1>
    <h2>Słodkiego dnia życze</h2>
    <Link to={"/"}>Back to home </Link>
    <Link to={back.to}>{back.text}</Link>
  </div>
};
