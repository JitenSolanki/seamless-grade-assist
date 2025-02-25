
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogIn, UserCheck, ChevronRight } from "lucide-react";
import { SignIn, SignUp, useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const { isLoaded, userId, sessionId } = useAuth();
  const { user } = useUser();

  // Redirect if already logged in
  useEffect(() => {
    if (isLoaded && (userId || sessionId)) {
      const userRole = user?.publicMetadata?.role as string;
      
      // Redirect based on role
      if (userRole === "teacher") {
        navigate("/teacher");
        toast.success("Welcome back, Teacher!");
      } else if (userRole === "student") {
        navigate("/student");
        toast.success("Welcome back, Student!");
      } else {
        // If no role is set, we'll treat them as a student by default
        navigate("/student");
        toast.success("Welcome back!");
      }
    }
  }, [isLoaded, userId, sessionId, navigate, user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isRegistering ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isRegistering
              ? "Sign up for GradeAssist"
              : "Sign in to your account"}
          </p>
        </div>

        {isRegistering ? (
          <SignUp
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "rounded-lg shadow-lg p-8 bg-white",
                headerTitle: "text-2xl font-bold text-gray-900",
                headerSubtitle: "text-gray-600",
                formButtonPrimary:
                  "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
              },
            }}
            redirectUrl="/login"
          />
        ) : (
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "rounded-lg shadow-lg p-8 bg-white",
                headerTitle: "text-2xl font-bold text-gray-900",
                headerSubtitle: "text-gray-600",
                formButtonPrimary:
                  "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
              },
            }}
            redirectUrl="/login"
          />
        )}

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
  );
};

export default Login;
