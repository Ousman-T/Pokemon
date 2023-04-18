const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: false
    },
    PokePic: {
        type: String,
        required: false
    }
})


const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;