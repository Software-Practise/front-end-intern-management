import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Todo: Private Routing For Admin Dashboard */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
