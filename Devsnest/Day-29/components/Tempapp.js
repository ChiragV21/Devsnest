import React, { useState, useEffect } from 'react';
import './style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6807bd0adb456ad8ee71614a1db4b63c`;
            const response = await fetch(url);

            const resJSON = await response.json();
            setCity(resJSON.main);
        };

        fetchApi();
    }, [search])

    return (
        <div>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="input_field" onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className="errormsg" >No Data Found</p>
                ) : (

                    <div>
                        <div className="info">
                            <h2 className="Location">
                                <i className="fas fa-street-view"></i>{search}</h2>
                            <h1 className="temp">
                                {city.temp}Cel
                            </h1>
                            <h3 className="tempmin_max">{city.temp_min}{city.temp_max}</h3>
                        </div>
                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tempapp;
