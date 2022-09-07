import express from 'express'; 
import cors from 'cors';
import { config } from "dotenv"; config();

const app = express(); 
const PORT = 5000; 

app.use(cors()); 



app.get('/', (req, res) => {
    res.json("Hello from Techtonica")
});


    // Variable to store your API Key
  
  // create the correct URL to fetch
  const url = "https://api.openweathermap.org/data/2.5/" 
  app.get('/api/weather', (req,res)=> { 
    
    fetch(`${url}weather?q=london&APPID=${process.env.REACT_APP_API}&units=imperial`)  
    .then((response) => response.json()) 
    .then(data =>  res.send(data) );})


app.listen(PORT, () => console.log(`Hola! server running on port http://localhost:${PORT}`));