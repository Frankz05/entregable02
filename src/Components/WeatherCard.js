import axios from "axios";
import { useState, useEffect } from "react";

const WeatherCard = () => {
  const [weather, setWeather] = useState({})
  const [isFarenheit, setIsFarenheit] = useState(true)
  const changeUnit =()=> setIsFarenheit(!isFarenheit)

  useEffect(()=>{

    function success(pos) {
        var crd = pos.coords; 
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        
    
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=1fa895ca8829f6c51f6d0d2a2894ef01`)
          .then(res=> setWeather(res.data))
    }
      
      navigator.geolocation.getCurrentPosition(success);
  },[])
  
    return ( 
        <div className="AppApp">
            <div className="header">
                <h1>Weather App</h1>
                <p><b>{weather.name}, {weather.sys?.country}</b></p>
            </div>
            
            <div className="bodyCard">

                <div className="leftBody">
                    <img className="nube" style={{width:"8rem"}} src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                    <p>{isFarenheit? `${weather.main?.temp} °F` : `${ (weather.main?.temp.toFixed(2) - 273.15).toFixed(2)} °C`}</p>
                </div>

                <div className="rightBody">
                    <p className="description">
                      <b>"{weather.weather?.[0].description}"</b> 
                    </p>
                    <p className="wind"> 
                      <i className="fa-solid fa-wind"></i> 
                      <b> Wind speed:</b> {weather.wind?.speed} m/s
                      </p>
                    <p> 
                      <i className="fa-solid fa-cloud"></i> 
                      <b> Clouds:</b> {weather.clouds?.all}%
                    </p>
                    <p className="pressure"> 
                      <i className="fa-solid fa-temperature-half"></i> 
                      <b> Pressure:</b> {weather.main?.pressure} mb
                    </p>
                    <p className="humidity"> 
                      <i className="fa-solid fa-droplet"></i> 
                      <b> Humidity:</b> {weather.main?.humidity}%
                    </p>
                </div>

            </div>
            <button onClick={changeUnit}>Degree °F / °C</button>
        </div>
     );
}
 
export default WeatherCard;