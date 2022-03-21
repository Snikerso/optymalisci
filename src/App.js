import './App.css';
import {BrowserRouter,Routes, Route, Link } from "react-router-dom"
import {SnikersView} from "./views/SnikersView"
import {BartusView} from "./views/BartusView"
import {KanonashiView} from "./views/KanonashiView"


function App() {
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Link  to="/snikers">Link</Link>
          <Link to="/bartus">Tutaj do bartusia!</Link>
          <Routes>
            <Route index element={<div>Home</div>} />
            <Route path='bartus' element={<BartusView />} />
            <Route path='kanonashi' element={<KanonashiView/>}/>
            <Route path='snikers' element={<SnikersView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
