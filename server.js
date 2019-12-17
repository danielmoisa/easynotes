const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// config the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParse: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect ot the database. Exiting now...', err);
    process.exit();
});

// simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes app!"});
})

// require Notes routes
require('./app/routes/note.routes.js')(app);










// run server and listen for requests
app.listen(3000, () => {
    console.log('Server is listen on port 3000!');
});