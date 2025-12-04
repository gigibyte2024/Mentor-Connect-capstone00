import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Auth from "./Auth";
import MentorDashboard from "./MentorDashboard";
import StudentDashboard from "./StudentDashboard";
import StudentMentorDiscover from "./StudentMentorDiscover";
import MentorProfile from "./MentorProfile";

// NEW IMPORTS
import Quizzes from "./Quizzes";
import QuizPage from "./QuizPage"; // you will create this later

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

        {/* Quizzes Pages */}
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<QuizPage />} />  {/* dynamic page */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;


