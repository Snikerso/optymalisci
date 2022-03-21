import './App.css';
<<<<<<< Updated upstream
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {SnikersView} from "./views/SnikersView"
import {BartusView} from "./views/BartusView"
import {KanonashiView} from "./views/KanonashiView"

=======
import {BrowserRouter, Routers, Route} from "react-router-dom";
>>>>>>> Stashed changes

function App() {
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
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
