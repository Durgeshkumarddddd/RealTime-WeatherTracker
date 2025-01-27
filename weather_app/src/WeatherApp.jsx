
import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import {useState} from 'react';
export default function WeatherApp(){
    
    let [info, setInfo] = useState({
        city: "London",
        weather : "clear sky",
        humidity : "234",
        pressure: 1020,
        feels_like: 282,
        temp: 280,
        temp_min: 280,
        temp_max: 284,
    })
    let updateInfo = (result) => {
        setInfo(result)
    }
    let style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
    }
    return (
        <div style={style}>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox  info={info}/>

        </div>
    );
}