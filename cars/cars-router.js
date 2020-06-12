const express = require('express');

const db = require('../data/dbConfig')

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
      .then(cars => {
        return res.json(cars);
      })
      .catch(error => {
        res.status(500).json({
          errorMessage: "Failed to get cars"
        });
      });
  });
  
  router.post("/", (req, res) => {
      db("cars")
      .insert(req.body)
      .then(post => {
          return res.status(201).json(req.body);
      })
      .catch(err => {
          console.log(err)
          return res.status(500).json({
              error: "error posting"
          })
      })
  })

  module.exports = router;