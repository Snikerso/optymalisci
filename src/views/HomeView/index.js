import React from 'react';
import { Link } from 'react-router-dom';

export const HomeView = ({ optymalists }) => {
  return (
    <div>
      <h1>Home PAage</h1>
      {optymalists.map((item) => {
        if (item.title === '') {
          return null;
        }
        return (
          <div key={item.id}>
            <Link to={item.to}>
              <p>NickName: {item.title + '.'}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
