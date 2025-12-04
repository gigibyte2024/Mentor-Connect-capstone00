import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Auth from "./Auth";
import MentorDashboard from "./MentorDashboard";
import StudentDashboard from "./StudentDashboard";
import StudentMentorDiscover from "./StudentMentorDiscover";
import MentorProfile from "./MentorProfile";

// NEW IMPORTS
import Quizzes from "./Quizzes";
import QuizPage from "./QuizPage";
import ChatPage from "./ChatPage";   // 🔥 Added Chat Page import

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing & Auth */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        {/* Dashboards */}
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Student → Discover Mentors */}
        <Route path="/student-mentors" element={<StudentMentorDiscover />} />

        {/* Mentor Profile */}
        <Route path="/mentor-profile" element={<MentorProfile />} />

        {/* Quizzes */}
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<QuizPage />} />

        {/* 🔥 Chat Page Route */}
        <Route path="/chat" element={<ChatPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
