import './App.css';
import './custom.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import CheckedCountriesList from './components/CheckedCountriesList';
import { Spinner } from 'react-bootstrap'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const API = 'https://ih-countries-api.herokuapp.com/countries'

  const getAllCountries = () => {
    setIsLoading(true)
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
        setIsLoading(false)
      })
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
          {isLoading ? (<div className="d-flex align-items-center flex-column pt-5" ><Spinner animation="grow" size="md" /><h4>Loading...</h4></div>)
            :
            (<CountriesList countries={allCountries} />)}
        </div>

        <div style={{ position: 'fixed', right: '30vw' }}>
          <div className="col-6" style={{ position: '-webkit-sticky', position: 'sticky', top: '10vh', overflow: 'scroll', height: '100vh', width: '40vw' }}>
            <Routes>
              <Route path="/:counrtyAlpha3Code" element={<CountryDetails countries={allCountries} />} />
            </Routes>
          </div>
        </div>


        <div style={{ position: 'fixed', right: '0vw' }}>
          <div style={{ position: '-webkit-sticky', position: 'sticky', overflow: 'scroll', paddingRight: '30px', paddingBottom: '10vh', borderLeft: '4px solid black', height: '100vh', width: '24vw' }}>
            <Routes>
              <Route path="/:counrtyAlpha3Code" element={<CheckedCountriesList countries={allCountries} />} />
            </Routes>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;