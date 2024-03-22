import { useState } from 'react'
import './App.css'

/*Images*/
import searchIcon from "./assets/Search.png";
import clearIcon from "./assets/Clear.png";
import cloudIcon from "./assets/Cloud.png";
import drizzleIcon from "./assets/Drizzle.png";
import humidityIcon from "./assets/Humidity.png";
import rainIcon from "./assets/Rain.png";
import snowIcon from "./assets/Snow.png";
import windIcon from "./assets/Wind.png";

const WeatherDetails = ({icon, temp, city, country, lat, log}) => {
   return( <>
    <div className="image">
      <img src={icon} alt="Image"/>
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className="lat">Latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="log">Longitude</span>
        <span>{log}</span>
      </div>
    </div>
    </>);
};


function App() {
const [icon, setIcon] = useState(snowIcon);
const [temp, setTemp] = useState(0);
const [city, setCity] = useState("Chennai");
const [country, setCountry] = useState("IN");
const [lat, setLat] = useState(0);
const [log, setLog] = useState(0);

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text"
            className="cityInput"
            placeholder="Search City" />
          <div className="search-icon">
            <img src={searchIcon} alt="Search" />
          </div>
        </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log}/>
      </div>
    </>
  )
}

export default App
