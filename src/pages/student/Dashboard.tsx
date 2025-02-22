
import {
  BookOpen,
  FileText,
  MessageSquare,
  TrendingUp,
  Settings,
  LogOut,
  Upload,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Side Navigation */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-8">
            <span className="text-xl font-semibold">GradeAssist</span>
          </div>

          <div className="flex-grow space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <BookOpen className="h-5 w-5" />
              <span>Current Assignments</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <Upload className="h-5 w-5" />
              <span>Submit Work</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <FileText className="h-5 w-5" />
              <span>Grades</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <MessageSquare className="h-5 w-5" />
              <span>Feedback</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <TrendingUp className="h-5 w-5" />
              <span>Progress</span>
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

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Student Dashboard
            </h1>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neo-card p-6"
            >
              <h3 className="font-semibold mb-2">Due Soon</h3>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-gray-500">Assignments pending</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neo-card p-6"
            >
              <h3 className="font-semibold mb-2">Current Grade</h3>
              <p className="text-3xl font-bold">A-</p>
              <p className="text-sm text-gray-500">Class average</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neo-card p-6"
            >
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm text-gray-500">New comments</p>
            </motion.div>
          </div>

          {/* Upcoming Assignments */}
          <div className="neo-card overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Upcoming Assignments</h2>
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
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Research Paper
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      History 201
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      2024-03-20
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Feedback */}
          <div className="neo-card p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Feedback</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Math Quiz #3</h3>
                    <p className="text-sm text-gray-500">
                      Good work on the calculus problems. Remember to show all steps
                      in your solutions.
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
              {/* Add more feedback items as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
