import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {SnikersView} from "./views/SnikersView"
import {BartusView} from "./views/BartusView"
import {KanonashiView} from "./views/KanonashiView"
import { GniewomirXView } from './views/GniewomirXView';
import {KasperosView} from "./views/KasperosView"

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Link to="/snikers">Tutaj to Snikersa!</Link><br></br>
          <Link to="/bartus">Tutaj do bartusia!</Link><br></br>
          <Link to="/kanonashi">Tutaj do Kanonashi!</Link><br></br>
          <Link to="/gniewomirx">Tutaj do GniewomirX!</Link><br></br>
          <Link to="/kasperos">Tutaj do Kasperskiego!</Link><br></br>
          <Routes>
            <Route index element={<div><h1>Home</h1></div>} />
            <Route path='bartus' element={<BartusView back={{toHome: "/", textHome: "Home"}} title={"Znajdujesz się na podstronie bartusia."} />} />
            <Route path='kanonashi' element={<KanonashiView back={{to: "/snikers", text:"Do Snikersa"}} title={"U Kanonashi"} />} />
            <Route path='gniewomirx' element={<GniewomirXView back={{to: "/snikers", text:"Do Snikersa"}} title={"U Gniewka"} />} />
            <Route path='snikers' element={<SnikersView back={{ to: "/bartus", text:"Back to bartus"}} title={"Moja super podstrona snikera"} />} />
            <Route path='kasperos' element={<KasperosView back={{to: "/kasperos", text:"Do Twojego Starego"}} title={"Zapraszaaam!"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
