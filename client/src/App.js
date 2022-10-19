import './App.css';
import './custom.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [allCountries, setAllCountries] = useState([])
  const getAllCountries = () => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) =>
        setAllCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)
        )))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    getAllCountries()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="d-flex flex-row">

        <div className="col-3">
          <CountriesList countries={allCountries} />
        </div>

        <div style={{ position: 'fixed', top: '10vh', left: '33vw', overflow: 'scroll' }}>
          <Routes>
            <Route path="/:counrtyAlpha3Code" element={<CountryDetails countries={allCountries} />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
