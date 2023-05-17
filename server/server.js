// MONGOOSE: 
const mongoose = require('mongoose');
let FavChar = require('./model/FavouriteCharacter');
const userId = 'markveszelka';
const password = 'iV4cZxpwodOxNYTw';
const clusterId = 'cluster0.ukekemt';
const budapestTimeZone = (120 * 60 * 1000);

//EXPRESS:
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/favchar', async (req, res) => {
    const allFavChars = await FavChar.find({});
    res.status(200).send(allFavChars);
});

app.post('/api/favchar', (req, res) => {
    const character = req.body;
    const createdAt = Date.now() + budapestTimeZone;
    const favChar = new FavChar({
        ...character,
        createdAt,
    });
    favChar.save()
        .then((addedChar) => res.status(200).json(addedChar))
        .catch(() => res.status(400).json({ success: false }));
});

app.delete('/api/favchar/:id', (req, res) => {
    const deleteDocumentId = req.params.id;
    FavChar.deleteOne({ id: deleteDocumentId })
        .then((deletedChar) => console.log(deletedChar))
        .catch((error) => console.error(error));
    res.status(200).json({ success: true });
});

mongoose.connect(`mongodb+srv://${userId}:${password}@${clusterId}.mongodb.net/mern-project`)
    .then(() => {
        app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));
    });
