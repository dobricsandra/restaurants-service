const express = require('express');
const fs = require("fs");
const path = require("path");
const csv = require('fast-csv');
const cors = require('cors');
let data = []




const app = express();
const port = 3000;

app.use(cors({
    origin: 'https://restaurants-client.vercel.app/'
}));

app.get('/coordinates', async (req, res) => {
    data = [];
    fs.createReadStream('Book.csv')
        .pipe(csv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => data.push(row))
        .on('end', () => res.send(data));
})

app.listen(port, () => {

})