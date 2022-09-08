import { useState, useEffect } from "react"; 
import Santa_Ana from "../santa_ana.jpeg"

const Weather = (props) => {
    
        const [weather, setWeather] = useState(null);

        const loadData = () =>{
            fetch('http://localhost:5000/api/weather')
            .then((response) => response.json())
            .then(data => {
                setWeather(data);
            })
            .catch(error => {
                console.error(error)
            })
        }

      

       
        return (
            <div className="Container">
               

                <header className="container">
            <img src ={Santa_Ana} className= "img-fluid rounded mx-auto d-block" width= "40%"></img>
    </header>
    <nav className="container">
      <div className="row align-items-center py-2">
      </div>
      <div className="py-2">
        <div className="text-center">
          <button id="btnGet" type="button" onClick={loadData} className="btn btn-primary mb-3">
            Get Weather
          </button>

        </div>
      </div>
    </nav>
    <main className="container">
      <h2>Weather</h2>

{weather != null && (
      <div className="weather row gx-2">
        <div className="col">
          <div className="card" id="weathercard" >
            <h5 className="card-title p-2">City: {weather.city}</h5>

            <div className="card-body">
              <h3 className="card-title">Weather Label</h3>
              <p className="card-text">High Temp:{weather.hightemp} Low Temp:{weather.lowtemp}</p>
              <p className="card-text">Icon: {weather.current.weather.icon} 
              <img src ={` http://openweathermap.org/img/wn/11d@2x.png`} 
         alt="wthr img" /></p>
              <p className="card-text">Pressure: {weather.current.pressure}</p>
              <p className="card-text">Humidty: {weather.current.humidity}</p>
            </div>
          </div>
        </div>
      </div>
)}
    </main>
  </div>
       

           
        )
}

export default Weather;