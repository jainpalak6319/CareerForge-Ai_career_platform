// Backend/routes/atsRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const atsController = require('../controllers/atsController');

const upload = multer({ dest: 'uploads/' });

router.post('/check', upload.single('resume'), atsController.checkATS);

module.exports = router;
