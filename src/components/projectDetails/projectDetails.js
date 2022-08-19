import React, { useState } from "react";
import Banner from "./banner";
import Status from "./taskStatus";
import Task from "./task";
import ClaimReward from "./claimReward";
import { tasks } from "../../constants/index";

function ProjectDetails() {
  const [currentTask, setCurrentTask] = useState(0);
  const [isActivated, setIsActivated] = useState(false);

  const handleTask = () => {
    setCurrentTask(currentTask + 1);
  };

  const handleWallet = () => {
    setIsActivated(true);
  };

  return (
    <div className="px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 bg-white-50 mt-27px md:mt-8 lg:mt-23px">
      <Banner />
      <Status currentTask={currentTask} />
      {currentTask < 2 ? (
        <Task
          taskDetails={tasks[currentTask]}
          handleTask={handleTask}
          handleWallet={handleWallet}
          isActivated={isActivated}
        />
      ) : (
        <ClaimReward />
      )}
    </div>
  );
}

export default ProjectDetails;
