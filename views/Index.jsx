const React = require('react');
const pokemon = require('../models/pokemon');

 const Index = ({pokemon}) => {
    return(
        <div>
            <h1>See All Pokemon</h1>
            <ul>
                {pokemon.map((pokemon, idx) => {
                    return(
                        
                        <li key={pokemon.name}>
                        <a href={`/pokemon/${idx}`}>{pokemon.name}</a>
                    </li>
                        )

                })}
            </ul>
            
        </div>
    )
}

module.exports = Index;