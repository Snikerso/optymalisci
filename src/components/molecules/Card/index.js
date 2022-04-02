import React from 'react';
import { Head } from '../../atoms/Head';
import { Wrapper } from './styles';

export const Card = ({ title, description, children, goals = [] }) => {
  return (
    <Wrapper>
      <Head fontSize={'18'}>{title}</Head>
      <p>{description}</p>
      {/* TODO dodać if goals to wyswietli tytuł */}
      {/* TODO wylistować cele na ten miesiąc */}
      {children}
    </Wrapper>
  );
};
