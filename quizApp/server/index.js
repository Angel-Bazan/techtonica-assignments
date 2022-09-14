import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import { config } from "dotenv"; 
import fetch from 'node-fetch'

config();
const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json("hello from techtonica");
});

// this is a hard code since we are not fetching any api’s
app.get('/api/categories', (req, res) => {
    const url=`https://opentdb.com/api_category.php`; 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});




app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
