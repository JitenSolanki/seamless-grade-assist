
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { GraduationCap, ChalkBoard } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (isLoaded && userId) {
      const userRole = user?.publicMetadata?.role as string;
      if (userRole === "teacher") {
        navigate("/teacher");
      } else if (userRole === "student") {
        navigate("/student");
      }
    }
  }, [isLoaded, userId, user, navigate]);

  const handleRoleSelect = async (role: "student" | "teacher") => {
    if (!userId) {
      // Store the selected role in localStorage for after login
      localStorage.setItem("selectedRole", role);
      navigate("/login");
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (userId) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to GradeAssist
          </h1>
          <p className="text-gray-600 mb-8">
            Please select your role to continue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelect("student")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <GraduationCap className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">Student</h2>
            <p className="text-sm text-gray-500 mt-2">Access your exams</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelect("teacher")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChalkBoard className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">Teacher</h2>
            <p className="text-sm text-gray-500 mt-2">Manage your classes</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Index;
