import express from 'express'; 
import cors from 'cors';

const app = express(); 
const PORT = 5000; 

app.use(cors()); 


app.get('/', (req, res) => {
    res.json("Hello from Techtonica")
});

app.get('/api/weather', (req, res) => {
    // Variable to store your API Key
  const APIKEY = "91290aa34b77dd1517169822a284b6a8";

  // create the correct URL to fetch
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    res.json(url);
});
app.listen(PORT, () => console.log(`Hola! server running on port http://localhost:${PORT}`));