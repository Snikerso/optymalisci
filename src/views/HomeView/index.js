import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeView = ({ optymalists }) => {
  const [typeSort, setTypeSort] = useState('Ascending');
  let newOp = optymalists;

  newOp = newOp.sort((a, b) => {
    if (typeSort === 'Ascending') {
      if (a.title > b.title) return -1;
    } else {
      if (a.title < b.title) return -1;
    }
  });

  return (
    <div>
      <h1>Home PAage</h1>
      <button
        onClick={() => setTypeSort((prev) => (prev === 'Ascending' ? 'Descending' : 'Ascending'))}>
        {typeSort}
      </button>
      {newOp.map((item) => {
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
