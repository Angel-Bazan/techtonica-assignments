import express from "express";
import db from "../db/db-connection.js";

const router = express.Router();


/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await db.any('SELECT * FROM "EVENTS"');
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Add users listing. */

router.post("/", async (req, res) => {
  const event = {
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    category: req.body.category
  };
  console.log(event);
  try {
    const createdUser = await db.one(
      'INSERT INTO events(name, date, description, category) VALUES($1, $2, $3, $4) RETURNING *',
      [event.name, event.date, event.description, event.category]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Delete events listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

router.delete('/:id', async (req, res) => {

  const eventId = req.params.id;
  try {
    await db.none('DELETE FROM events WHERE id=$1', [eventId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;
