const React = require('react');
// const pokemon = require('../models/pokemon');
const Pokemon = require('../models/Pokemons')

 const Index = ({Pokemon}) => {
    return(
        <div>
            <h1>See All Pokemon</h1>
            <ul>
                {Pokemon.map((pokemon, id) => {
                    return(
                        
                        <li key={pokemon.name}>
                        <a href={`/pokemon/${id}`}>{pokemon.name}</a>
                    </li>
                        )

                })}
            </ul>
            
        </div>
    )
}

module.exports = Index;