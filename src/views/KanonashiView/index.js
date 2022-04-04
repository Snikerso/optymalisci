import { Link } from 'react-router-dom';
import React from 'react';
import { Counter } from "../../components/atoms/Counter";
import { Circle } from '../../components/atoms/Circle';
export const KanonashiView = ({ title, back }) => {
  return (
    <div>
      {/* Tu będzie guzik */}
      <Circle onScroll={() => console.log(`konntroluje scrolla`)}>
      
      </Circle>
      <div className="background"></div>
      <h1>{title} Witaj na mojej podstronie</h1>
      <h2>Słodkiego dnia życze</h2>
      <Link to={'/'}>Back to home </Link>
      <Link to={back.to}>
        className={'Link'}
        {back.text}
      </Link>
    </div>
  );
};
