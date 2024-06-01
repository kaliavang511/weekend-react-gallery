const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
  console.log("In GET request");
  let queryText = 'SELECT * from "gallery"';

  pool.query(queryText).then((result) => {
      res.send(result.rows);
  }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
  })
});



router.post('/', (req, res) => {
  const liked = req.body;
  const sqlText = `INSERT INTO food ("likes")
                   VALUES ($1,)`;
  pool.query(sqlText, [liked.like,])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})

module.exports = router;
