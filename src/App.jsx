import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Auth from "./Auth";

import MentorDashboard from "./MentorDashboard";
import StudentDashboard from "./StudentDashboard";

import StudentMentorDiscover from "./StudentMentorDiscover";
import MentorProfile from "./MentorProfile";

// QUIZ SYSTEM
import Quizzes from "./Quizzes";
import QuizPage from "./QuizPage";

// CHAT SYSTEM
import ChatPage from "./ChatPage";

// ⭐ PROFILE SETTINGS
import ProfileSettings from "./ProfileSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING + AUTH */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        {/* DASHBOARDS */}
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* STUDENT FEATURES */}
        <Route path="/student-mentors" element={<StudentMentorDiscover />} />
        <Route path="/mentor-profile" element={<MentorProfile />} />

        {/* QUIZZES */}
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<QuizPage />} />

        {/* CHAT PAGE */}
        <Route path="/chat" element={<ChatPage />} />

        {/* PROFILE SETTINGS */}
        <Route path="/profile" element={<ProfileSettings />} />

        {/* ❌ REMOVED MENTOR RESOURCES ROUTE */}
        {/* It is now an internal component, not a separate page */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
