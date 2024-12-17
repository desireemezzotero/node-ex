const toys = require('./data/toys');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('server dei giocattoli')
})

app.get('/toys', (req,res) => {
  const queryMaterial = req.query.material;
  if(!queryMaterial){
    return res.json(toys)
  }
  const toysMaterial= toys.filter(toy => toy.materiali.includes(queryMaterial))
  res.json(toysMaterial)
})

app.listen(port, () => {
  console.log('funziono')
})
