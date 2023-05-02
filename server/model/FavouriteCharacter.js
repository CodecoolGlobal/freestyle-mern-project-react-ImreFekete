const mongoose = require('mongoose'); 
const { Schema, model } = mongoose; 
const favouriteCharacterSchema = new Schema(
    { 
        character: Object, 
        createdAt: Date, 
    }); 
const FavChar = model('FavouriteCharacter', favouriteCharacterSchema); 
module.exports = FavChar;