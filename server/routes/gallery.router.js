const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

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

module.exports = router;
