module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note
    app.get('/notes/:noteId', notes.findOne);

    // Update a single Note
    app.put('/notes/:noteId', notes.update);

    // Delete a single Note
    app.delete('/notes/:noteId', notes.delete);
}