import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./views/Admin/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import StudentApply from "./views/StudentApply";
import StudentOffers from "./views/StudentOffers";
import StudentGetHelp from "./views/StudentGetHelp";
import FacultyDashboard from "./views/FacultyDashboard";
import FacultyApplicationView from "./views/FacultyApplicationView";
import FacultyApplicationList from "./views/FacultyApplicationList";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import FacultyGetHelp from "./views/FacultyGetHelp";
import FacultyInternsList from "./views/FacultyInternsList";
import AdminApplicationList from "./views/Admin/AdminApplicationList";
import AdminApplicationView from "./views/Admin/AdminApplicationView";

function App() {
  return (
    <Router>
      <Routes>
        {/* Todo: Private Routing For Admin Dashboard */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/Faculty" element={<FacultyDashboard />} />
        <Route path="/studentApplications" element={<StudentDashboard />} />
        <Route path="/studentApply" element={<StudentApply />} />
        <Route path="/studentOffers" element={<StudentOffers />} />
        <Route path="/studentGetHelp" element={<StudentGetHelp />} />
        <Route path="/FacultyApplicationView" element={<FacultyApplicationView />} />
        <Route path="/FacultyApplicationList" element={<FacultyApplicationList />} />
        <Route path="/FacultyGetHelp" element={<FacultyGetHelp />} />
        <Route path="/FacultyInternsList" element={<FacultyInternsList />} />
        <Route path="/AdminApplicationView" element={<AdminApplicationView />} />
        <Route path="/AdminApplicationList" element={<AdminApplicationList />} />
      </Routes>
    </Router>
  );
}

export default App;
