const express = require('express');
const router = express.Router();
const db = require('../db/db.json');

/* GET pizzas page. */
router.get('/datos', function(req, res, next) {
  try {
    res.json(db);
  } catch (error) {
    res.status(500).json({error: 'El servidor no responde'});
  }
});

router.get('/datos/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    const pizza = db.pizzas.find(pizza => pizza.id === id);
    if(pizza) {
      res.json(pizza);
    } else {
      res.status(404).json({error: 'No existe la pizza'});
    }
});

router.post('/add', function(req, res, next) {
 
});

module.exports = router;
