import React, { useState } from "react";
import ValidateDialog from "./validateDialog";

function Task({ taskDetails, handleTask, handleWallet, isActivated }) {
  const [validateDialoag, setValidateDialoag] = useState(false);
  return (
    <>
      <div className="relative">
        {/* Video Player */}
        <div className="flex flex-col lg:flex-row mb-10 md:mb-16 lg:mb-115px">
          <div className="w-full h-183px md:h-371px lg:w-60per lg:h-98 mb-6 lg:mb-0 lg:mr-30px relative">
            <div className="w-full h-full">
              <img
                src={taskDetails.taskVideo}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-15per right-40per md:top-35per md:right-40per">
              <img
                src="/images/play.svg"
                alt=""
                className="mobile:w-24 mobile:h-28"
              />
            </div>
          </div>
          <div className="w-full lg:w-40per">
            <div className="font-PoppinsSemiBold text-ft17 md:text-ft11 text-black-100">
              {taskDetails.taskHeading}
            </div>
            <div className="font-PoppinsRegular text-ft4 text-black-50 mb-20">
              {taskDetails.taskDescription}
            </div>
            <div className="flex items-center justify-center flex-col lg:block">
              <div className="w-50 text-center mb-0.5">
                <span className="font-PoppinsRegular text-ft3 text-black-100">
                  Watched the video?
                </span>
              </div>
              <div
                className="w-50 h-13 bg-blue-250 rounded-xl flex items-center justify-center cursor-pointer"
                onClick={() => setValidateDialoag(true)}
              >
                <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                  Validate Task
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-15 md:pb-16 lg:pb-90px">
          <span className="font-PoppinsMedium text-ft4 text-black-50">
            Facing any technical issue?&nbsp;
          </span>
          <span className="font-PoppinsMedium text-ft4 text-blue-250 cursor-pointer">
            Contact Us
          </span>
        </div>
      </div>
      {validateDialoag ? (
        <ValidateDialog
          handleClose={() => setValidateDialoag(false)}
          open={validateDialoag}
          handleTask={handleTask}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Task;
