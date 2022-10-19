import { Link } from "react-router-dom";

function CountriesList({ countries }) {
    return (
        <div>
            {countries.map((country) => {
                return (
                    <div className="bg-light d-flex justify-content-end align-items-center " style={{ paddingRight: '30px', borderRight: '4px solid black', borderBottom: '0.2px solid gray' }}>
                        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code} style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bolder', padding: '20px', fontSize: '1.5rem' }}>
                            {country.name.common}
                        </Link >
                        <img src={`https://countryflagsapi.com/png/${country.alpha3Code.toLowerCase()}`} alt="flag" style={{ width: '45px' }} />
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;