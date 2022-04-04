import React from 'react';
import './view.css';
import { Link } from 'react-router-dom';
import { BarName } from '../../components/molecules/BarName';
import { BarDiscord } from '../../components/organism/BarDiscord';
import Head from '../../components/atoms/Head';

export const BartusView = ({ back, title }) => {
  return (
    <div className="bartusDiv">
      <div className="bartusBackground"></div>
      <h1 className="bartusTitle">{title}</h1>
      <Link to={back.toHome} className={'bartusLink'}>
        Back to {back.textHome}
      </Link>
      <br></br>
      {/* <Head nick='bartus' id='#7376'></Head>*/}
      <br></br>
      <BarDiscord></BarDiscord>
      <br></br>
      <div className="bartusDiscordGoal"></div>
      <br></br>
    </div>
  );
};
