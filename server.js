const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon');
const React = require('react');
// const bodyparser = require('bodyparser');

//=============Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();
    
});
// Parsing incoming data from request
// app.use(bodyparser.json());
app.use(express.urlencoded({extended: false}));


// Home Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Index Route
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon});
});

// Show Route
app.get("/pokemon/:id", (req, res) => {
    // pokemon.findById(req.params.id, (error, foundPoke) => {
      res.render("Show", { pokemon: pokemon[req.params.id] });
    });
//   });




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})