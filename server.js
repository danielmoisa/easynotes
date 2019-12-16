const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes app!"});
})



// run server and listen for requests
app.listen(3000, () => {
    console.log('Server is listen on port 3000!');
});