import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeView = ({ optymalists }) => {
  const [inputTitle, setInputTitle] = useState('');

  return (
    <div>
      <h1>Home PAage</h1>

      <input
        type="text"
        onClick
        onChange={(event) => {
          setInputTitle(event.target.value);
        }}
      />

      {optymalists
        .filter((item) => {
          if (item.title.toLowerCase().includes(inputTitle)) {
            return item;
          }
        })
        .map((item) => (
          <>
            <Link to={item.to} key={item.id}>
              {item.title.toLowerCase()}
            </Link>
            <br />
          </>
        ))}
    </div>
  );
};
