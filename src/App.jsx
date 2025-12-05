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

// ⭐ PROFILE SETTINGS PAGE
import ProfileSettings from "./ProfileSettings";  
import MentorResources from "./MentorResources";

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

        {/* ⭐ PROFILE SETTINGS ROUTE */}
        <Route path="/profile" element={<ProfileSettings />} />

        <Route path="/mentor-resources" element={<MentorResources />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
