import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../components/atoms/Button';


export const InterpretetionView = () => {
  const [interpretetion, setInterpretetion] = useState()
  console.log(interpretetion)
  return (
    <div>
      <input onChange={(event)=>setInterpretetion(event.target.value) }/> 
      <Button onClick ={()=> localStorage.setItem("interpretetion", interpretetion)}>Zapisz</Button>
      
    </div>
    )
};
