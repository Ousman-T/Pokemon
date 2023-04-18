const React = require('react');
const Pokemon = require('../models/Pokemons');


function Index(props){
    const { Pokemon } = props;
    console.log(Pokemon)
    return(
        <>
        <h1>Index of Pokemon</h1>
        <ul>
            {Pokemon.map((poke) => {
                return(
                    <li key={poke._id}>
                    <a href={`/pokemon/${poke._id}`}>{poke.Name}</a></li>
                )

            })}
        </ul>
        </>
    )
}

module.exports = Index;