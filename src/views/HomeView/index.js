import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeView = ({ optymalists }) => {

  // const [typeSort, setTypeSort] = useState('Ascending');
  // let newOp = optymalists;
  //
  // newOp = newOp.sort((a, b) => {
  //   if (typeSort === 'Ascending') {
  //     if (a.title > b.title) return -1;
  //   } else {
  //     if (a.title < b.title) return -1;
  //   }
  // });

    const [title, setTitle] = useState('')
    console.log(title);


  return (
    <div>
      <h1>Home PAage</h1>
      {/*<button*/}
      {/*  onClick={() => setTypeSort((prev) => (prev === 'Ascending' ? 'Descending' : 'Ascending'))}>*/}
      {/*  {typeSort}*/}
      {/*</button>*/}

        <input type='text' onChange={(event) => {setTitle(event.target.value)}}
               />

      {optymalists.filter((item) => {
        if (item.title.toLowerCase().includes(title)) {
          return item;
        }
      }).map(item => <><Link to={item.to} key={item.id}> {item.title} </Link> <br/></>)
          }

    </div>
  );
};
