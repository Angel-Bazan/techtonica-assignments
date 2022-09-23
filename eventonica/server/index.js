import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";

const pgp = pgPromise();
const db = pgp("postgres://localhost:5432/eventonica");

const app = express();
const PORT = 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", async function (req, res, next) {
  try {
    const users = await db.any('SELECT * FROM "USERS" ORDER BY id', [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.get("/events", async function (req, res, next) {
    try {
      const users = await db.any('SELECT * FROM "EVENTS"');
      res.send(users);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

app.post("/users", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  console.log("post", user);
  try {
 
    const createdUser = await db.one(
      'INSERT INTO "USERS"(name, email) VALUES($1, $2) RETURNING *',
      [user.name, user.email]
    );
    console.log("createdUser, post", createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
/* Delete users listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

app.get("/users/:id", async function (req, res, next) {
  const userId = req.params.id;
  console.log(userId);
  try {
    await db.many('SELECT FROM "USERS" WHERE id=$1', [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.delete("/users/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  console.log(userId);
  try {
    await db.many('DELETE FROM "USERS" WHERE id=$1', [userId]);
    res.send({ status: "success" });
  } catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
});



app.listen(PORT, () => console.log(`Hello, I am listening on port ${PORT}.`));