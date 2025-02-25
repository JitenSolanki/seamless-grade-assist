// const mongoose = require('mongoose');

// const examSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   examType: { type: String, required: true },  // For example, 'multiple choice', 'true/false', etc.
//   duration: { type: Number, required: true },  // Duration in minutes
//   maxMarks: { type: Number, required: true },  // Maximum marks for the exam
//   startDate: { type: Date, required: true },
//   dueDate: { type: Date, required: true },
//   description: { type: String },
//   questions: [
//     {
//       id: { type: String, required: true },
//       type: { type: String, required: true },  // e.g., MCQ, short answer, etc.
//       text: { type: String, required: true },
//       marks: { type: Number, required: true },
//       options: [String],  // For MCQ type questions
//       correctAnswer: { type: String },  // For MCQ or true/false questions
//     }
//   ]
// });

// const Exam = mongoose.model('Exam', examSchema);

// module.exports = Exam;




// hiren code goes from here

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String, required: true },
  marks: { type: Number, required: true },
  options: [String], // Optional for MCQ
  correctAnswer: String, // Optional for MCQ
  wordLimit: Number, // Optional for essay
  rubrics: String, // Optional for true/false
});

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  examType: { type: String, required: true },
  duration: { type: Number, required: true },
  maxMarks: { type: Number, required: true },
  startDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  description: { type: String, required: true },
  questions: [questionSchema], // Array of questions
});

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;
