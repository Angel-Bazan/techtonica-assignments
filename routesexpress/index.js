//this will be your express server

//basic things that we need
import express from 'express'; 
import cors from 'cors';
import path from 'path';

const app = express(); //create this new application
const PORT = 8080; //show me that application on this PORT


//configuring cors middleware
app.use(cors()); 

//configuring path middleware telling server about our files
const _dirname = path.resolve();

//Create route for the beginning of the page
app.get('/', (req, res) =>{
    res.sendFile(path.join(_dirname, 'client', 'index.html'));

})

//create route for the about me 
app.get('/about', (req, res) =>{
    res.sendFile(path.join(_dirname, 'client', 'about.html'));

})
//create route the contact me page 
app.get('/contactme', (req, res) =>{
    res.sendFile(path.join(_dirname, 'client', 'contactme.html'));

})

//create route for the 404 error
app.use((req, res) =>{
    res.status(404);
    res.sendFile(path.join(_dirname, 'client', '404.html'));
})

//liste on this PORT 
app.listen(PORT, () =>{
    console.log(`Hola this server is running on ${PORT}`)
})