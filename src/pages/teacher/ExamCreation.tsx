
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  GraduationCap,
  Plus,
  Save,
  Send,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type QuestionType = "mcq" | "essay" | "trueFalse";
type ExamType = "multipleChoice" | "essay" | "both";

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  marks: number;
  options?: string[];
  correctAnswer?: string;
  wordLimit?: number;
  rubrics?: string;
}

const ExamCreation = () => {
  const navigate = useNavigate();
  const [examType, setExamType] = useState<ExamType>("both");
  const [currentQuestionType, setCurrentQuestionType] =
    useState<QuestionType>("mcq");
  const [questions, setQuestions] = useState<Question[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: crypto.randomUUID(),
    type: "mcq",
    text: "",
    marks: 0,
    options: ["", "", "", ""],
  });

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      id: crypto.randomUUID(),
      type: currentQuestionType,
      text: "",
      marks: 0,
      options: currentQuestionType === "mcq" ? ["", "", "", ""] : undefined,
    });
  };

  const handleRemoveQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Exam</h1>
          <p className="mt-2 text-gray-600">
            Fill in the exam details and add questions below
          </p>
        </div>

        {/* Exam Form */}
        <div className="space-y-8">
          {/* Basic Details */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Exam Details</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="examTitle"
                >
                  Exam Title
                </label>
                <input
                  type="text"
                  id="examTitle"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="e.g., Midterm Exam"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="examType"
                >
                  Exam Type
                </label>
                <select
                  id="examType"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value as ExamType)}
                >
                  <option value="multipleChoice">Multiple Choice Only</option>
                  <option value="essay">Essay Only</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="duration"
                >
                  Duration (minutes)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    id="duration"
                    className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    placeholder="60"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="maxMarks"
                >
                  Maximum Marks
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    id="maxMarks"
                    className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    placeholder="100"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    id="startDate"
                    className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="dueDate"
                >
                  Due Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    id="dueDate"
                    className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="description"
                >
                  Description & Instructions
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Enter exam instructions and additional notes..."
                />
              </div>
            </div>
          </div>

          {/* Question Creation */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Add Questions</h2>

            {/* Question Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question Type
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-gray-900"
                    name="questionType"
                    value="mcq"
                    checked={currentQuestionType === "mcq"}
                    onChange={(e) =>
                      setCurrentQuestionType(e.target.value as QuestionType)
                    }
                  />
                  <span className="ml-2">Multiple Choice</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-gray-900"
                    name="questionType"
                    value="essay"
                    checked={currentQuestionType === "essay"}
                    onChange={(e) =>
                      setCurrentQuestionType(e.target.value as QuestionType)
                    }
                  />
                  <span className="ml-2">Essay</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-gray-900"
                    name="questionType"
                    value="trueFalse"
                    checked={currentQuestionType === "trueFalse"}
                    onChange={(e) =>
                      setCurrentQuestionType(e.target.value as QuestionType)
                    }
                  />
                  <span className="ml-2">True/False</span>
                </label>
              </div>
            </div>

            {/* Question Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Text
                </label>
                <textarea
                  value={currentQuestion.text}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      text: e.target.value,
                    })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  rows={3}
                  placeholder="Enter your question here..."
                />
              </div>

              {currentQuestionType === "mcq" && (
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Options
                  </label>
                  {currentQuestion.options?.map((option, index) => (
                    <input
                      key={index}
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...(currentQuestion.options || [])];
                        newOptions[index] = e.target.value;
                        setCurrentQuestion({
                          ...currentQuestion,
                          options: newOptions,
                        });
                      }}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      placeholder={`Option ${String.fromCharCode(65 + index)}`}
                    />
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Correct Answer
                    </label>
                    <select
                      value={currentQuestion.correctAnswer}
                      onChange={(e) =>
                        setCurrentQuestion({
                          ...currentQuestion,
                          correctAnswer: e.target.value,
                        })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    >
                      <option value="">Select correct answer</option>
                      <option value="A">Option A</option>
                      <option value="B">Option B</option>
                      <option value="C">Option C</option>
                      <option value="D">Option D</option>
                    </select>
                  </div>
                </div>
              )}

              {currentQuestionType === "essay" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Word Limit
                    </label>
                    <input
                      type="number"
                      value={currentQuestion.wordLimit || ""}
                      onChange={(e) =>
                        setCurrentQuestion({
                          ...currentQuestion,
                          wordLimit: parseInt(e.target.value),
                        })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      placeholder="Enter word limit (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Grading Rubrics
                    </label>
                    <textarea
                      value={currentQuestion.rubrics || ""}
                      onChange={(e) =>
                        setCurrentQuestion({
                          ...currentQuestion,
                          rubrics: e.target.value,
                        })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      rows={4}
                      placeholder="Enter grading criteria (e.g., grammar: 10 points, content: 20 points)"
                    />
                  </div>
                </div>
              )}

              {currentQuestionType === "trueFalse" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correct Answer
                  </label>
                  <select
                    value={currentQuestion.correctAnswer}
                    onChange={(e) =>
                      setCurrentQuestion({
                        ...currentQuestion,
                        correctAnswer: e.target.value,
                      })
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  >
                    <option value="">Select correct answer</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marks
                </label>
                <input
                  type="number"
                  value={currentQuestion.marks}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      marks: parseInt(e.target.value),
                    })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Enter marks for this question"
                  min="0"
                />
              </div>

              <button
                onClick={handleAddQuestion}
                className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Question
              </button>
            </div>
          </div>

          {/* Added Questions List */}
          {questions.length > 0 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Added Questions</h2>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Question {index + 1} ({question.type.toUpperCase()})
                        </span>
                        <p className="mt-1">{question.text}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveQuestion(question.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                /* Save as draft logic */
              }}
              className="flex-1 inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Draft
            </button>
            <button
              onClick={() => {
                /* Publish exam logic */
              }}
              className="flex-1 inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <Send className="h-5 w-5 mr-2" />
              Publish Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCreation;
