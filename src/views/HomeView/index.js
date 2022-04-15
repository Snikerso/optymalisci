import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeView = ({ optymalists }) => {
  const [typeSort, setTypeSort] = useState('Ascending');
  const [newOptymalist, setNewOptymalist] = useState(optymalists);

  useEffect(() => {
    console.log(typeSort);
    const newArray = newOptymalist.sort((a, b) => {
      if (typeSort === 'Ascending') {
        if (a.title > b.title) return -1;
      } else {
        if (a.title < b.title) return -1;
      }
    });
    setNewOptymalist(newArray);
  }, [typeSort]);

  return (
    <div>
      <h1>Home PAage</h1>
      <button
        onClick={() => setTypeSort((prev) => (prev === 'Ascending' ? 'Descending' : 'Ascending'))}>
        {typeSort}
      </button>
      {newOptymalist.map((item) => {
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
