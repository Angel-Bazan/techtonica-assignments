import express from 'express'; 
import cors from 'cors';

const app = express(); 
const PORT = 5000; 

app.use(cors()); 


app.get('/', (req, res) => {
    res.json("Hello from Techtonica")
});

app.get('/api/students', (req, res) => {
    const STUDENTS = [
        {firstname: "Lisa", lastname: "Lee"},
        {firstname: "student2", lastname: "lastName2"}, 
        {firstname: "student3", lastname: "lastName3"}, 
        {firstname: "student4", lastname: "lastName4"}, 

    ]

    res.json(STUDENTS);
});
app.listen(PORT, () => console.log(`Hola! server running on port http://localhost:${PORT}`));