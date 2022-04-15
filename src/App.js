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
    title: 'Bartus',
    back: { toHome: '/', textHome: 'Home' }
  },
  {
    id: 2,
    to: '/snikers',
    text: 'Do Snikersa',
    title: 'Kasperos',
    back: { toHome: '/', textHome: 'Home' }
  },
  {
    id: 3,
    to: '/snikers',
    text: 'Do Snikersa',
    title: 'Snikers',
    back: { toHome: '/', textHome: 'Home' }
  }
];

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
            {optymalists.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.text}</Link>
                <br></br>
              </li>
            ))}
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
            element={
              <GniewomirXView back={{ to: '/snikers', text: 'Do Snikersa' }} title={'U Gniewka'} />
            }
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
