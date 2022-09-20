import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';


let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

config();
 const app = express();
 const PORT = 3000
 app.use(cors());
/* GET home page. */

app.get('/', function (req, res, next) {

  res.json('Hello Techtonica');
});

app.get('/users', function (req, res, next) {
  console.log(req.body);
  res.json({ users: mockUsers });
});


app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
