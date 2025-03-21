import {
  Upload,
  FileText,
  Users,
  BarChart2,
  Settings,
  List,
  LogOut,
  Menu,
  X,
  PlusCircle,
  Edit,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Exam {
  id: string;
  title: string;
  type: string;
  dueDate: string;
  status: "draft" | "published" | "grading" | "completed";
  submissions: number;
  totalStudents: number;
}

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mockExams: Exam[] = [
    {
      id: "1",
      title: "Midterm Exam",
      type: "Multiple Choice",
      dueDate: "2024-03-20",
      status: "published",
      submissions: 24,
      totalStudents: 30,
    },
    {
      id: "2",
      title: "Final Essay",
      type: "Essay",
      dueDate: "2024-03-15",
      status: "grading",
      submissions: 28,
      totalStudents: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-white shadow-lg md:hidden z-50"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-8">
            <span className="text-xl font-semibold">GradeAssist</span>
          </div>

          <div className="flex-grow space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <Upload className="h-5 w-5" />
              <span>Upload Assignment</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <FileText className="h-5 w-5" />
              <span>Grade Submissions</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <Users className="h-5 w-5" />
              <span>Student Management</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <BarChart2 className="h-5 w-5" />
              <span>Analytics</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <List className="h-5 w-5" />
              <span>Manage Rubrics</span>
            </button>
          </div>

          <div className="space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="ml-0 md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Welcome, Dr. Smith!
                </h1>
                <p className="text-gray-600 mt-1">Tuesday, March 12, 2024</p>
              </div>
              <button
                onClick={() => navigate("/teacher/exam/create")}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Create Exam
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neo-card p-6"
            >
              <h3 className="font-semibold mb-2">Pending Reviews</h3>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-500">Assignments to grade</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neo-card p-6"
            >
              <h3 className="font-semibold mb-2">Active Students</h3>
              <p className="text-3xl font-bold">156</p>
              <p className="text-sm text-gray-500">Across all classes</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neo-card p-6"
            >
              <h3 className="font-semibold mb-2">Average Score</h3>
              <p className="text-3xl font-bold">87%</p>
              <p className="text-sm text-gray-500">This semester</p>
            </motion.div>
          </div>

          <div className="mb-8 neo-card p-6">
            <h2 className="text-lg font-semibold mb-4">Task Reminders</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                  <div>
                    <p className="font-medium">Grade Final Essays</p>
                    <p className="text-sm text-gray-500">Due in 2 days</p>
                  </div>
                </div>
                <span className="text-sm text-yellow-600">24 submissions</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                  <div>
                    <p className="font-medium">Review Midterm Papers</p>
                    <p className="text-sm text-gray-500">Overdue by 1 day</p>
                  </div>
                </div>
                <span className="text-sm text-red-600">12 pending</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Manage Exams</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Exam Title
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Due Date
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Submissions
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockExams.map((exam) => (
                    <tr key={exam.id}>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {exam.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {exam.type}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {exam.dueDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {exam.submissions}/{exam.totalStudents}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            exam.status === "published"
                              ? "bg-green-100 text-green-800"
                              : exam.status === "grading"
                              ? "bg-yellow-100 text-yellow-800"
                              : exam.status === "completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {exam.status.charAt(0).toUpperCase() +
                            exam.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => {
                              /* Edit exam logic */
                            }}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => {
                              /* Grade exam logic */
                            }}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <GraduationCap className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="neo-card overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Recent Assignments</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Assignment
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Class
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Due Date
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Submissions
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Final Essay
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      English 101
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      2024-03-15
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">24/30</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        In Progress
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
