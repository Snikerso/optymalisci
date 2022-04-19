import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { SnikersView } from './views/SnikersView';
import { BartusView } from './views/BartusView';
import { KanonashiView } from './views/KanonashiView';
import { GniewomirXView } from './views/GniewomirXView';
import { KasperosView } from './views/KasperosView';
import { Header } from './components/organism/Header';
import { HomeView } from './views/HomeView';

const optymalists = [
  {
    id: 1,
    to: '/snikers',
    text: 'Do Snikersa',
    title: 'Snikersa',
    back: { toHome: '/', textHome: 'Home' }
  },
  {
    id: 2,
    to: '/kasperos',
    text: 'Do Kasperos',
    title: 'Kasperos',
    back: { toHome: '/', textHome: 'Home' }
  },
  {
    id: 3,
    to: '/gniewomirx',
    text: 'Do Gniewka',
    title: 'Gniewka',
    back: { toHome: '/', textHome: 'Home' }
  },
  {
    id: 4,
    to: '/kanonashi',
    text: 'Do Kanonoashi',
    title: 'Kanonoashi',
    back: { toHome: '/', textHome: 'Home' }
  },
  {
    id: 5,
    to: '/bartus',
    text: 'Do Bartus',
    title: 'Bartus',
    back: { toHome: '/', textHome: 'Home' }
  }
];

const OptimalistName = ({ text }) => {
  return <div style={{ display: 'flex' }}>{text}</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
              <br></br>
            </li>
            {optymalists.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link to={item.to} >
                    <OptimalistName text={index + 1 + '.' + item.title} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Header>



        <Routes>
          <Route index element={<HomeView optymalists={optymalists} />} />
          <Route
            path="bartus"
            element={
              <BartusView
                back={{ toHome: '/', textHome: 'Home' }}
                title={'Znajdujesz się na podstronie bartusia.'}
              />
            }
          />
          <Route
            path="kanonashi"
            element={
              <KanonashiView back={{ to: '/snikers', text: 'Do Snikersa' }} title={'U Kanonashi'} />
            }
          />
          <Route
            path="gniewomirx"
            element={<GniewomirXView back={{ to: '/', text: 'Do Snikersa' }} title={'U Gniewka'} />}
          />
          <Route
            path="snikers"
            element={
              <SnikersView
                back={{ to: '/bartus', text: 'Back to bartus' }}
                title={'Moja super podstrona snikera'}
              />
            }
          />
          <Route
            path="kasperos"
            element={
              <KasperosView
                back={{ to: '/kasperos', text: 'Do Twojego Starego' }}
                title={'Zapraszaaam!'}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
