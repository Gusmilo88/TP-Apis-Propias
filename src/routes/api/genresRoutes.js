const express = require('express');
const router = express.Router();
const { list, detail, store, update, destroy } = require('../../controllers/api/genresController');


// Llega como /api
router
    .get('/genres', list)
    .get('/genres/:id', detail)
    .post('/genres', store)
    .put("/genres/:id", update)
    .delete("/genres/:id", destroy)


module.exports = router;