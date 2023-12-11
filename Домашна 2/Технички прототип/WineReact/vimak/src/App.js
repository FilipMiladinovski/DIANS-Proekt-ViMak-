import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
 
  const [wines, setWines] = useState();

  const getWines = async () => {
    try {
      const response = await api.get("/api/v1/wines");

      console.log(response.data);

      setWines(response.data);

    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getWines();
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home wines={wines}/>}>
          </Route>
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
