import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../../components/atoms/Counter';
import { Head } from '../../components/atoms/Head';
import { Card } from '../../components/molecules/Card';

export const SnikersView = ({ back, title }) => {
  return (
    <div>
      <Counter />
      <Head fontSize="40" color="green">
        {title}
      </Head>
      <Card title={title} description={'Jest super'}>
        <Link to={back.to}>{back.text}</Link>
      </Card>
    </div>
  );
};
