import React from "react";

function Home() {
  return (
    <div className="text-center pt-50">
      <h1>
        <a href="/admin">Admin View</a>
      </h1>
      <h1>
        <a href="/Faculty">Faculty View</a>
      </h1>
      <h1>
        <a href="/studentApplications">Student Applications List</a>
      </h1>

      <h1>
        <a href="/studentApplicationView">Student Application View</a>
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
        <a href="/FacultyApplicationView">Faculty Student Application View</a>
        {/* route to view specific student's application details */}
      </h1>

      <h1>
        <a href="/FacultyApplicationList">Faculty Applications (all) Overview</a>
        {/* route to view list of all students. Clicking on a student routes to /facultyStaffApplicationView */}
      </h1>

    </div>
  );
}

export default Home;
