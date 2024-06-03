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

router.put('/like/:id', (req, res) => {
    let likesId = req.params.id 
    let likes = req.body.likes 

    let queryText = `
     UPDATE "gallery" SET "likes"= "likes" + 1
     WHERE "id"= $1;`

    
    pool.query(queryText, [likesId])
        .then((result) => {
            res.sendStatus(204)
        })
        .catch((err) => {
            console.log(`Error making query.. '${queryText}'`, err)
            res.sendStatus(500)
        })
})


  



module.exports = router;
