import React from "react";
import Banner from "../banner";
import Footer from "../footer/index";
import DashboardComponent from "./dashboard";

function Dashboard() {
  return (
    <div>
      <Banner />
      <DashboardComponent />
      <Footer />
    </div>
  );
}

export default Dashboard;
