import React from "react";

function Home() {
  return (
    <div className="text-center pt-50">
      <h1>
        <a href="/admin">Admin View</a>
      </h1>
      <h1>
        <a href="/faculty">Faculty View</a>
      </h1>
      <h1>
        <a href="/studentApplications">Student View Applications</a>
      </h1>
      
      <h1>
        <a href="/studentApply">Student Apply</a>
      </h1>

      <h1>
        <a href="/studentOffers">Student View Offers</a>
      </h1>

      <h1>
        <a href="/studentGetHelp">Student Get Help</a>
      </h1>

      <h1>
        <a href="/login">Log In</a>
      </h1>

      <h1>
        <a href="/facultyStaffApplicationView">Faculty/Admin Student Application View</a>
        {/* route to view specific student's application details */}
      </h1>

      <h1>
        <a href="/facultyStaffStudentOverview">Faculty/Admin Applications Overview</a>
        {/* route to view list of all students. Clicking on a student routes to /facultyStaffApplicationView */}
      </h1>
    </div>
  );
}

export default Home;
