const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const favouriteCharacterSchema = new Schema(
    {
        id: Number,
        name: String,
        status: String,
        species: String,
        type: String,
        gender: String,
        origin: Object,
        location: Object,
        image: String,
        episode: Array,
        url: String,
        created: String,
        createdAt: Date,
    });
const FavChar = model('FavouriteCharacter', favouriteCharacterSchema);
module.exports = FavChar;