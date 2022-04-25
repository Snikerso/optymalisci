import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../components/atoms/Button';


export const HomeView = ({ optymalists }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [optymalistsArray, setOptymalistsArray] = useState(optymalists)
  //console.log(optymalistsArray)
  return (
    <div>
      <h1>Home Page</h1>

      <input
        cos="ds"
        type="text"
        onChange={(event) => {
          setInputTitle(event.target.value);
        }}
      />

      <Button
        onClick={() => setOptymalistsArray(  [...optymalistsArray,{
          id: optymalistsArray.length+1,
          to: `/${inputTitle}`,
          text: 'Do'+ inputTitle,
          title: inputTitle,
          back: { toHome: '/', textHome: 'Home' }
        }])}>Dodaj</Button>

      {optymalistsArray
        .filter((item) => {
          //console.log(item.title.toLowerCase().includes(inputTitle),inputTitle)
          if (item.title.toLowerCase().includes(inputTitle.toLowerCase())) {
            return item;
          }
        })
        .map((item) => (
          <div key={item.id}>
            <Link to={item.to} key={item.id}>
              {item.title.toUpperCase()}
            </Link>
            <br />
          </div>
        ))}
    </div>
  );
};
