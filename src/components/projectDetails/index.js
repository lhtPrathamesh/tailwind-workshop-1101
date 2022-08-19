import React, { Component } from "react";
import ProjectDetailsComponent from "./projectDetails";
import Header from "../header/index";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="overflow-x-hidden lg:overflow-y-hidden">
        <Header />
        <ProjectDetailsComponent />
      </div>
    );
  }
}

export default ProjectDetails;
