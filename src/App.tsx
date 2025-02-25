
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import TeacherDashboard from "./pages/teacher/Dashboard";
import ExamCreation from "./pages/teacher/ExamCreation";
import StudentDashboard from "./pages/student/Dashboard";
import Settings from "./pages/settings/Settings";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/teacher"
            element={
                <TeacherDashboard />
            }
          />
          <Route
            path="/teacher/exam/create"
            element={
                <ExamCreation />
            }
          />
          <Route
            path="/student"
            element={
                <StudentDashboard />
            }
          />
          <Route
            path="/settings"
            element={
                <Settings />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
