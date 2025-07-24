// Backend/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.post('/', resumeController.createResume);
router.get('/:userId', resumeController.getResumesByUser);
router.delete('/:id', resumeController.deleteResume);

module.exports = router;
