import React from 'react';
import './view.css';
import { Link } from 'react-router-dom';
import BarNick from '../../components/atoms/BarNick';
import BarId from '../../components/atoms/BarId';
import { BarName } from '../../components/molecules/BarName';
import { BarDiscord } from '../../components/organism/BarDiscord';

export const BartusView = ({ back, title }) => {
  return (
    <div className="bartusDiv">
      <div className="bartusBackground"></div>
      <h1 className="bartusTitle">{title}</h1>
      <Link to={back.toHome} className={'bartusLink'}>
        Back to {back.textHome}
      </Link>
      <br></br>
      <BarNick>bartus</BarNick><BarId>#7376</BarId>
      <br></br>
      <BarName nick='bartus' id='#7376'></BarName>
      <br></br>
      <BarDiscord></BarDiscord>
      <br></br>
      <div className="bartusDiscordGoal"></div>
      <br></br>
    </div>
  );
};
