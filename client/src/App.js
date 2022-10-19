import './App.css';
import './custom.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';


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

        <div>
          <CountriesList countries={allCountries} />
        </div>

      </div>
    </div>
  );
}

export default App;
