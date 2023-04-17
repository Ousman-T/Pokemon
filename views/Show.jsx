const React = require('react');
const pokemon = require('../models/pokemon');


const Show = ({pokemon}) => {
    console.log(pokemon);
    return(
        <div>
            <h1>Gota Catch 'Em All!</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img + '.jpg'} alt={pokemon.name}/>
            <a href='/pokemon'>Back</a>
        </div>
    )
}

module.exports = Show;