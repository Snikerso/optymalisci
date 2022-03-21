import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {SnikersView} from "./views/SnikersView"


function App() {
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<div>Home</div>} />
            <Route path='bartus' element={<div>Bartus</div>} />
            <Route path='kanonashi' element={<div>Kanonashi</div>} />
            <Route path='snikers' element={<SnikersView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
