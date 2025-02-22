
import {
  Upload,
  FileText,
  Users,
  BarChart2,
  Settings,
  List,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
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

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Teacher Dashboard
            </h1>
          </header>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

          {/* Recent Assignments Table */}
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
                  {/* Add more rows as needed */}
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
