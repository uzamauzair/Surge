const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');
const express = require('express');
const app = express();

const db = `${config.get('Surge.dbConfig.dbHostLink')}${config.get('Surge.dbConfig.dbName')}`;

mongoose.set("strictQuery", false);
mongoose.connect(db).then(() => {
    console.log('mongo db connected')
}).catch(error => {
    console.log(error.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('App running on port', port);
})