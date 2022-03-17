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
        <a href="/facultyStaffApplicationView">Faculty/Admin Application View</a>
      </h1>

      <h1>
        <a href="/studentOverview">Faculty/Admin Student Overview</a>
      </h1>
    </div>
  );
}

export default Home;
