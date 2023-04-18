const React = require('react');
const Pokemon = require('../models/Pokemons');


function Show(props){
    const {Pokemon} = props
    console.log(Pokemon)
        return(
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{Pokemon.Name}</h2>
            <img src={`${Pokemon.PokePic}`}/>
            <br/>
            <a href='/pokemon'>Go Back Home</a>
        </div>
    )
};

module.exports = Show;