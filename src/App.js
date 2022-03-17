import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import StudentApply from "./views/StudentApply";
import StudentOffers from "./views/StudentOffers";
import StudentGetHelp from "./views/StudentGetHelp";
import FacultyDashboard from "./views/FacultyDashboard";
import FacultyAdminApplicationView from "./views/FacultyAdminApplicationView";
import FacultyAdminStudentOverview from "./views/FacultyAdminApplicationsAll";
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
        <Route path="/studentApplications" element={<StudentDashboard />} />
        <Route path="/studentApply" element={<StudentApply />} />
        <Route path="/studentOffers" element={<StudentOffers />} />
        <Route path="/studentGetHelp" element={<StudentGetHelp />} />
        <Route path="/facultyStaffApplicationView" element={<FacultyAdminApplicationView />} />
        <Route path="/facultyStaffStudentOverview" element={<FacultyAdminStudentOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
