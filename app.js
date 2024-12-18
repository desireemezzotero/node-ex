const toys = require('./data/toys');
const express = require('express');
const app = express();
const port = 3000;
/* importiamo il router */
const routerToys = require('./routers/toys')

app.get('/', (req,res) => {
  res.send('server dei giocattoli')
})

/* utilizziamo il router */
app.use('/toys',routerToys)


app.listen(port, () => {
  console.log('funziono')
})