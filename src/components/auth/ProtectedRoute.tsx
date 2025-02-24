
import { useAuth, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isLoaded, userId, sessionId } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!userId && !sessionId) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified, check if user has permission
  if (allowedRoles) {
    const userRole = user?.publicMetadata?.role as string;
    if (!allowedRoles.includes(userRole)) {
      toast.error("You don't have permission to access this page");
      return <Navigate to={userRole === "teacher" ? "/teacher" : "/student"} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
