
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("")
    let [country, setCountry] = useState("")
    let [error, setError] = useState(false)

    let getWheatherInfo = async () => {
        try {
            const Api_URL = "https://api.openweathermap.org/data/2.5/weather"
            const Api_KEY = "a2a1e7b6d920abe25c44be39c3423ab5"
            let response = await fetch(`${Api_URL}?q=${city},${country}&limit=1&appid=${Api_KEY}`)
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                pressure: jsonResponse.main.pressure,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,

            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    }

    function searchCity(event) {
        setCity(event.target.value)
    }
    function handleCountry(event) {
        setCountry(event.target.value)
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("")
            setCountry("")
            let newInfo = await getWheatherInfo();
            updateInfo(newInfo)
        } catch (err) {
            setError(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='w_container'>
                    <h1>Welcome to know wheather from City name </h1>
                    <TextField onChange={handleCountry} id="outlined-basic" className='searchCity' label="Enter Country" variant="outlined" value={country} /> <br></br> <br></br> <br></br>

                    <TextField onChange={searchCity} id="outlined-basic" className='searchCity' label="Enter City" variant="outlined" value={city} /> <br></br> <br></br> <br></br>
                    <Button variant="contained" type='submit' >Submit</Button>
                </div>
            </form>
            {error && <p> No such city and country ! wrong city or country name</p>}
        </div>

    );
}