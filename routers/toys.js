
/* importo express */
const express = require('express'); 

/* inizializziamo router */
const router = express.Router();

/* scrivo le differenti rotte */
/* 1. index */
router.get('/', (req,res) => {
  res.send('lista dei giocattoli con index')
})

/* 2. show */
router.get('/:id', (req,res) => {
  res.send(`dettagli giocattolo con id ${req.params.id}`)
})

/* 3. store */
router.post('/', (req,res) => {
  res.send('nuovo giocattolo')
})

/* 4. update */
router.put ('/:id', (req,res) => {
  res.send(`modifico l'elemento con id ${req.params.id}`)})

/* 5. modify */
router.patch('/:id', (req,res) => {
  res.send (`modifico parzialmente l'elemento con id ${req.params.id}`)
})

/* 6. delete */
router.delete('/:id', (req,res)=> {
 res.send (`elimino l'elemento con id ${req.params.id}`)
})

/* esportiamo il router */
module.exports = router; 