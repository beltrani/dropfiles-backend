const express = require("express");
const multer = require('multer');
const multerConfig = require('./config/multer');

const FileController = require('./controllers/FileController');
const BoxController = require('./controllers/BoxController');

const routs = express.Router();

routs.post('/boxes', BoxController.store);
routs.get('/boxes/:id', BoxController.show);

routs.post('/boxes/:id/files', multer(multerConfig).single('file'),FileController.store);

module.exports = routs;




