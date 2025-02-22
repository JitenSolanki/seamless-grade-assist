
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogIn, UserCheck, ChevronRight } from "lucide-react";

const Login = () => {
  const [role, setRole] = useState<"teacher" | "student" | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to the appropriate dashboard
    navigate(role === "teacher" ? "/teacher" : "/student");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isRegistering ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isRegistering
              ? "Sign up for GradeAssist"
              : "Please select your role to continue"}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {/* OAuth Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <img
                src="https://www.microsoft.com/favicon.ico"
                alt="Microsoft"
                className="h-5 w-5 mr-2"
              />
              Continue with Microsoft
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRole("teacher")}
              className={`relative p-4 rounded-lg border ${
                role === "teacher"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <UserCheck className="mx-auto h-8 w-8 mb-2" />
                <span className="block text-sm font-medium">Teacher</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRole("student")}
              className={`relative p-4 rounded-lg border ${
                role === "student"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <UserCheck className="mx-auto h-8 w-8 mb-2" />
                <span className="block text-sm font-medium">Student</span>
              </div>
            </motion.button>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="School email address"
                />
              </div>
              {isRegistering && (
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Full name"
                  />
                </div>
              )}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isRegistering ? "new-password" : "current-password"}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder={isRegistering ? "Create password" : "Password"}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!role}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LogIn className="h-5 w-5" aria-hidden="true" />
                </span>
                {isRegistering ? "Create Account" : "Sign In"}
              </button>
            </div>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="font-medium text-gray-600 hover:text-gray-900 text-sm inline-flex items-center"
            >
              {isRegistering ? "Already have an account? Sign in" : "Create an account"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
