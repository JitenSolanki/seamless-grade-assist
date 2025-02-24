import {
  Upload,
  Settings,
  FileText,
  Brain,
  Shield,
  List,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const performanceData = [
  { month: "Jan", score: 85 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 92 },
  { month: "Apr", score: 88 },
  { month: "May", score: 95 },
];

const recentActivities = [
  {
    name: "Midterm Essay",
    date: "2024-02-15",
    status: "Completed",
    score: "92/100",
  },
  {
    name: "Quiz 3",
    date: "2024-02-14",
    status: "Completed",
    score: "88/100",
  },
  {
    name: "Assignment 2",
    date: "2024-02-13",
    status: "Completed",
    score: "95/100",
  },
];

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Auto-Grade MCQs & Essays",
    description: "Instantly grade multiple choice questions and essays with AI",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Accuracy",
    description: "Get precise grading with advanced machine learning algorithms",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Plagiarism Detection",
    description: "Automatically detect and prevent academic dishonesty",
  },
  {
    icon: <List className="w-6 h-6" />,
    title: "Customizable Rubrics",
    description: "Create and modify grading criteria to match your needs",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold">GradeAssist</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Upload Assignment
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                View Grades
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Help
              </a>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Effortless & Smart Grading with AI-Powered Accuracy!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save time grading quizzes and essays. Get instant, fair, and detailed
              feedback for your students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors animate-scale">
                Upload Assignment
              </button>
              <button className="px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
                View Past Grades
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="neo-card p-6"
              >
                <div className="text-gray-900 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600 mb-6">
              Drag and drop your files here, or click to browse
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Choose File
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors">
                Upload & Grade
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities Section (For Students) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Recent Activities</h2>
          <div className="overflow-x-auto">
            <table className="w-full neo-card">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left">Assignment Name</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">{activity.name}</td>
                    <td className="px-6 py-4">{activity.date}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{activity.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Performance Trends Section (For Students) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Performance Trends</h2>
          <div className="h-[400px] neo-card p-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#000"
                  strokeWidth={2}
                  dot={{ fill: "#000" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">support@gradeassist.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GradeAssist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
