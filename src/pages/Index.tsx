
import { motion } from "framer-motion";
import { GraduationCap, Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to GradeAssist
          </h1>
          <p className="text-lg text-gray-600">
            Please select your role to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Teacher Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate("/teacher")}
            className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                I'm a Teacher
              </h2>
              <p className="text-gray-600 text-center">
                Create and manage exams, grade submissions, and track student
                progress
              </p>
              <button
                onClick={() => navigate("/teacher")}
                className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Enter Teacher Dashboard
              </button>
            </div>
          </motion.div>

          {/* Student Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate("/student")}
            className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                I'm a Student
              </h2>
              <p className="text-gray-600 text-center">
                Take exams, view grades, and track your academic progress
              </p>
              <button
                onClick={() => navigate("/student")}
                className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Enter Student Dashboard
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="md:col-span-2 mt-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Login
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
                  Help & Support
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
                  About Us
                </button>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold mb-2">Smart Grading</h3>
                <p className="text-sm text-gray-600">
                  Automated grading for MCQs and rubric-based essay evaluation
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold mb-2">Real-time Progress</h3>
                <p className="text-sm text-gray-600">
                  Track performance and view instant feedback on submissions
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold mb-2">Secure Platform</h3>
                <p className="text-sm text-gray-600">
                  Safe and reliable exam environment with role-based access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
