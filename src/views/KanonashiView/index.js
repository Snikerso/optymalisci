import { Link } from "react-router-dom";

export const KanonashiView = ({title, back}) => {

  return <div>
    <div className='background'></div>
    <h1>{title} Witaj na mojej podstronie</h1>
    <h2>Słodkiego dnia życze</h2>
    <Link to={"/"}>Back to home </Link>
    <Link to={back.to}>className={'Link'}{back.text}</Link>
  </div>
};
