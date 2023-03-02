import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function CheckedCountriesList({ countries }) {
    const [checkedList, setCheckedList] = useState([])
    const getCheckedList = () => {
        axios.get("/api/checked-list")
            .then(response => {
                setCheckedList((response.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCheckedList()
    }, [checkedList])

    return (
        <div>
            <h3 style={{ padding: '2vh 0 2vh 0' }}>Website visitors have checked the following countries:</h3>
            {checkedList?.map((checkedCountry) => {
                return (
                    <div key={checkedCountry._id} >
                        <Link to={`/${checkedCountry.counrtyAlpha3Code}`} style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bolder', fontSize: '1.2rem' }}>
                            <div>
                                <h5>{checkedCountry.countryName}</h5>
                            </div>
                        </Link >
                    </div >
                )
            })}
        </div>
    )
}

export default CheckedCountriesList;