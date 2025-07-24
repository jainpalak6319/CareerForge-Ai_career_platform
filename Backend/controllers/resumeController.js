// Backend/controllers/resumeController.js
const Resume = require('../models/Resume');

// Create new resume
exports.createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get resumes by userId
exports.getResumesByUser = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.params.userId });
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete resume
exports.deleteResume = async (req, res) => {
  try {
    const deleted = await Resume.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json({ message: 'Resume deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
