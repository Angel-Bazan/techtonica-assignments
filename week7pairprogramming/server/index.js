import express, { urlencoded } from 'express';
import cors from 'cors';
import { config } from "dotenv"; 
import fetch from 'node-fetch';

config();
const app = express();
const PORT = 5000;
app.use(cors());

app.get('/', (req, res) =>{
    res.json("Weather App Information")
})




app.get('/api/weather', (req, res) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=santa+ana+&APPID=${process.env.REACT_APP_API}&units=metric`; 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

app.listen(PORT, () => console.log(`Hello! Server is running on port http://localhost${PORT}`));

//     const WEATHER = {
//     "hightemp": 95.75,
//     "lowtemp": 73,
//     "city": "Santa Ana",
//     "timezone_offset": -18000,
//     "current": {
//       "dt": 1646318698,
//       "sunrise": 1646306882,
//       "sunset": 1646347929,
//       "temp": 282.21,
//       "feels_like": 278.41,
//       "pressure": 1014,
//       "humidity": 65,
//       "dew_point": 275.99,
//       "uvi": 2.55,
//       "clouds": 40,
//       "visibility": 10000,
//       "wind_speed": 8.75,
//       "wind_deg": 360,
//       "wind_gust": 13.89,
//       "main":"Clouds",
//       "weather": 
//         {
//           "id": 802,
//           "main": "Clouds",
//           "description": "scattered clouds",
//           "icon":""
//         },
      
//     },
//  };
//  res.json(WEATHER);


