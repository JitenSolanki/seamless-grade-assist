import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  GraduationCap,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

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
  const [examTitle, setExamTitle] = useState<string>("");
  const [duration, setDuration] = useState<number>(60);
  const [maxMarks, setMaxMarks] = useState<number>(100);
  const [startDate, setStartDate] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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

  // Function to handle the publish exam logic
  const handlePublishExam = async () => {
    const examData = {
      title: examTitle,
      examType: examType,
      duration: duration,
      maxMarks: maxMarks,
      startDate: startDate,
      dueDate: dueDate,
      description: description,
      questions: questions,
    };

    try {
      console.log(examData);
      const response = await axios.post("http://localhost:5000/api/exams", examData); // Your backend URL
      console.log("Exam created successfully:", response.data);
      // Optionally navigate to another page or show a success message
      navigate("/teacher"); // Navigate to the exam dashboard after success
    } catch (error) {
      console.error("Error creating exam:", error.response?.data || error);
    }
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
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
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
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
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
                    value={maxMarks}
                    onChange={(e) => setMaxMarks(Number(e.target.value))}
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
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
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
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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

            {/* Question Fields */}
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="questionText"
                >
                  Question Text
                </label>
                <textarea
                  id="questionText"
                  rows={4}
                  value={currentQuestion.text}
                  onChange={(e) =>
                    setCurrentQuestion({ ...currentQuestion, text: e.target.value })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Enter question text..."
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="marks"
                  >
                    Marks
                  </label>
                  <input
                    type="number"
                    id="marks"
                    value={currentQuestion.marks}
                    onChange={(e) =>
                      setCurrentQuestion({ ...currentQuestion, marks: Number(e.target.value) })
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>

                {currentQuestionType === "mcq" && (
                  <>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="optionA"
                      >
                        Option A
                      </label>
                      <input
                        type="text"
                        value={currentQuestion.options[0]}
                        onChange={(e) =>
                          setCurrentQuestion({
                            ...currentQuestion,
                            options: [
                              e.target.value,
                              currentQuestion.options[1],
                              currentQuestion.options[2],
                              currentQuestion.options[3],
                            ],
                          })
                        }
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="optionB"
                      >
                        Option B
                      </label>
                      <input
                        type="text"
                        value={currentQuestion.options[1]}
                        onChange={(e) =>
                          setCurrentQuestion({
                            ...currentQuestion,
                            options: [
                              currentQuestion.options[0],
                              e.target.value,
                              currentQuestion.options[2],
                              currentQuestion.options[3],
                            ],
                          })
                        }
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="optionC"
                      >
                        Option C
                      </label>
                      <input
                        type="text"
                        value={currentQuestion.options[2]}
                        onChange={(e) =>
                          setCurrentQuestion({
                            ...currentQuestion,
                            options: [
                              currentQuestion.options[0],
                              currentQuestion.options[1],
                              e.target.value,
                              currentQuestion.options[3],
                            ],
                          })
                        }
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="optionD"
                      >
                        Option D
                      </label>
                      <input
                        type="text"
                        value={currentQuestion.options[3]}
                        onChange={(e) =>
                          setCurrentQuestion({
                            ...currentQuestion,
                            options: [
                              currentQuestion.options[0],
                              currentQuestion.options[1],
                              currentQuestion.options[2],
                              e.target.value,
                            ],
                          })
                        }
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="correctAnswer"
                      >
                        Correct Answer
                      </label>
                      <input
                        type="text"
                        id="correctAnswer"
                        value={currentQuestion.correctAnswer || ""}
                        onChange={(e) =>
                          setCurrentQuestion({
                            ...currentQuestion,
                            correctAnswer: e.target.value,
                          })
                        }
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>
                  </>
                )}

                {currentQuestionType === "essay" && (
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="wordLimit"
                    >
                      Word Limit
                    </label>
                    <input
                      type="number"
                      id="wordLimit"
                      value={currentQuestion.wordLimit || 0}
                      onChange={(e) =>
                        setCurrentQuestion({
                          ...currentQuestion,
                          wordLimit: Number(e.target.value),
                        })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                )}

                {currentQuestionType === "trueFalse" && (
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="rubrics"
                    >
                      Rubrics
                    </label>
                    <input
                      type="text"
                      id="rubrics"
                      value={currentQuestion.rubrics || ""}
                      onChange={(e) =>
                        setCurrentQuestion({
                          ...currentQuestion,
                          rubrics: e.target.value,
                        })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleAddQuestion}
                className="mt-6 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </button>
            </div>
          </div>

          {/* Publish Button */}
          <div className="flex justify-end mt-8">
            <button
              type="button"
              onClick={handlePublishExam}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              <Save className="mr-2 h-5 w-5" />
              Publish Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCreation;
