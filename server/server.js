// MONGOOSE: 
const mongoose = require('mongoose');
let FavChar = require('./model/FavouriteCharacter');
const userId = 'markveszelka';
const password = 'iV4cZxpwodOxNYTw';
const clusterId = 'cluster0.ukekemt';
const budapestTimeZone = (120 * 60 * 1000);
mongoose.connect(`mongodb+srv://${userId}:${password}@${clusterId}.mongodb.net/mern-project`);

//EXPRESS:
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));

app.use(cors());
app.use(express.json());

app.get('/api/favchar', async (req, res) => {
    const allFavChars = await FavChar.find({});
    res.status(200).send(allFavChars);
});

app.post('/api/favchar', (req, res) => {
    // console.log('REQBODY', req.body);
    const character = req.body;
    const createdAt = Date.now() + budapestTimeZone;
    const favChar = new FavChar({
        character,
        createdAt,
    });
    favChar.save()
        .then(addedChar => res.status(200).json(addedChar))
        .catch(() => res.status(400).json({ success: false }));
});

app.delete('/api/favchar/:id', async (req, res) => {
    // console.log(req.params.id);
    const deleteDocumentId = req.params.id;
    FavChar.deleteOne({ _id: deleteDocumentId })
        .then(deletedChar => console.log(deletedChar))
        .catch(error => console.error(error));
    const allFavChars = await FavChar.find();
    res.status(200).json(allFavChars);
});
