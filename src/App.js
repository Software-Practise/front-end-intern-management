import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import FacultyDashboard from "./views/FacultyDashboard";
import FacultyApplicationViewAll from "./views/FacultyApplicationViewAll";
import StudentOverview from "./views/StudentOverview";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Todo: Private Routing For Admin Dashboard */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/facultyApplication" element={<FacultyApplicationViewAll />} />
        <Route path="/studentOverview" element={<StudentOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
