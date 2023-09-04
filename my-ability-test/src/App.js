import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AppRoutes from './routes/Routes';

function App() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    axios.get(`https://puce-frightened-chameleon.cyclic.app/sections/VA/`)
      .then((response) => {
        setSection(response.data);
      })
      .catch((err) => {

      });
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
