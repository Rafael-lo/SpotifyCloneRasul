import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import SpotifyWebApi from "spotify-web-api-js";
import { useEffect } from 'react';

const s = new SpotifyWebApi();

function App() {

  // const [{token}, dispatch] = useStateValue();

  // useEffect(() => {
  //   const hash = getTokenResponse();


  // }, [token, dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/player' element={<Player/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
