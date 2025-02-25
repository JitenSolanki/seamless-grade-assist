const Exam = require('../models/Exam');  // Ensure your Exam model is correct

// Create Exam
const createExam = async (req, res) => {
  try {
    // Destructure the incoming data from request body
    const { title, examType, duration, maxMarks, startDate, dueDate, description, questions } = req.body;

    // Check if all required fields are provided
    if (!title || !examType || !duration || !maxMarks || !startDate || !dueDate || !questions) {
      return res.status(400).json({ error: 'All fields are required!' });
    }

    // Create a new exam document
    const newExam = new Exam({
      title,
      examType,
      duration,
      maxMarks,
      startDate,
      dueDate,
      description,
      questions
    });

    // Save the new exam to MongoDB
    await newExam.save();

    // Respond with the created exam object
    return res.status(201).json(newExam);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating exam' });
  }
};

module.exports = {
  createExam,
};
