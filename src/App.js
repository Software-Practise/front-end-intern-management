import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Generic Routes
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SearchBar from "./components/SearchBar";

// Admin Routes
import AdminDashboard from "./views/Admin/AdminDashboard";
import AdminApplicationList from "./views/Admin/AdminApplicationList";
import AdminApplicationView from "./views/Admin/AdminApplicationView";
import StudentList from "./views/Admin/StudentList";


// Faculty Routes
import FacultyDashboard from "./views/Faculty/FacultyDashboard";
import FacultyApplicationView from "./views/Faculty/FacultyApplicationView";
import FacultyApplicationList from "./views/Faculty/FacultyApplicationList";
import FacultyGetHelp from "./views/Faculty/FacultyGetHelp";
import FacultyInternsList from "./views/Faculty/FacultyInternsList";

// Student Routes
import StudentDashboard from "./views/Student/StudentDashboard";
import StudentApply from "./views/Student/StudentApply";
import StudentOffers from "./views/Student/StudentOffers";
import StudentGetHelp from "./views/Student/StudentGetHelp";
import StudentApplicationView from "./views/Student/StudentApplicationView";



function App() {
  return (
    <Router>
      <Routes>
        {/* Generic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Admin Routes */}
        <Route path="/AdminApplicationView" element={<AdminApplicationView />} />
        <Route path="/AdminApplicationList" element={<AdminApplicationList />} />
        <Route path="/StudentList" element={<StudentList />} />

        {/* Faculty Routes */}
        <Route path="/Faculty" element={<FacultyDashboard />} />
        <Route path="/FacultyApplicationView" element={<FacultyApplicationView />} />
        <Route path="/FacultyApplicationList" element={<FacultyApplicationList />} />
        <Route path="/FacultyGetHelp" element={<FacultyGetHelp />} />
        <Route path="/FacultyInternsList" element={<FacultyInternsList />} />

        {/* Student Routes */}
        <Route path="/studentApplications" element={<StudentDashboard />} />
        <Route path="/studentApplicationView" element={<StudentApplicationView />} />
        <Route path="/studentApply" element={<StudentApply />} />
        <Route path="/studentOffers" element={<StudentOffers />} />
        <Route path="/studentGetHelp" element={<StudentGetHelp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
