import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CountryDetails({ countries }) {
    const { counrtyAlpha3Code } = useParams();
    const clickedCountry = countries.filter((country) => {
        return country.alpha3Code === counrtyAlpha3Code
    })

    return (
        <div>
            <div className='d-flex justify-content-center' >
                <h1 className='m-5' key={clickedCountry[0].name.official}>{clickedCountry[0].name.official}</h1>
            </div>

            <div className='d-flex flex-row col-10 m-auto' style={{ borderBottom: '0.2px solid gray' }}>
                <h4 className='col-4'>Capital</h4>
                <h4 className='col-6' key={clickedCountry[0].capital}>{clickedCountry[0].capital}</h4>
            </div>

            <div className='d-flex flex-row col-10 m-auto' style={{ borderBottom: '0.2px solid gray', paddingTop: '1vh' }}>
                <h4 className='col-4'>Area</h4>
                <h4 className='col-6' key={clickedCountry[0].area}>{clickedCountry[0].area} km²</h4>
            </div>

            <div className='d-flex flex-row col-10 m-auto' style={{ paddingTop: '1vh' }}>
                <h4 className='col-4'>Borders</h4>
                <h4 className='col-6'>{clickedCountry[0].borders.length === 0 ? 'No borders' : clickedCountry[0].borders.map((alpha3CodeOfBorder) => {
                    const country = countries.find((country) => {
                        return country.alpha3Code === alpha3CodeOfBorder
                    })
                    const nameOfCountry = country.name.common
                    return { nameOfCountry, alpha3CodeOfBorder }
                }).map(({ nameOfCountry, alpha3CodeOfBorder }, index) => {
                    return (
                        <li className="border-country m-2" key={uuidv4()} style={{ listStyleType: 'none' }} >
                            <Link to={`/${alpha3CodeOfBorder}`} key={index} style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bolder' }}>
                                <div className="border-country">{nameOfCountry}</div>
                            </Link >
                        </li>
                    )
                })
                }</h4>
            </div>

        </div>
    )
}
export default CountryDetails;
