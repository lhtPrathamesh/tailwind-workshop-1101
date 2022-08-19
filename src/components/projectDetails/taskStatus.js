import React, { useState } from "react";

function Status({ currentTask }) {
  const [tasks] = useState([1, 2, 3]);
  return (
    <div className="mb-9">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="font-PoppinsMedium text-ft8 text-black-100 mr-4 md:mr-2 lg:mr-4">
            Project Status
          </span>
          {currentTask > 0 ? (
            currentTask > 1 ? (
              <div className="flex items-center justify-center w-24.5 h-26px rounded-full bg-lightGreen">
                <span className="font-PoppinsMedium text-ft1 text-green">
                  Completed
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center w-24.5 h-26px rounded-full bg-lightGreen">
                <span className="font-PoppinsMedium text-ft1 text-green">
                  In Progress
                </span>
              </div>
            )
          ) : (
            <div className="flex items-center justify-center w-24.5 h-26px rounded-full bg-lightGreen">
              <span className="font-PoppinsMedium text-ft1 text-green">
                Activated
              </span>
            </div>
          )}
        </div>
        {currentTask > 1 ? (
          <div className="w-40 h-31px rounded-xl bg-purple-150 flex items-center justify-center cursor-pointer">
            <img
              src="/images/nounCertificate.svg"
              alt=""
              className="w-5 h-5 mr-7px"
            />
            <span className="font-PoppinsMedium text-ft3 text-white-100">
              View Certificate
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Task Status Bar */}
      <div className="w-full h-10 md:h-45px flex bg-blue-100 rounded-lg">
        {tasks.length === 1 ? (
          <>
            <div className="w-50per tab: h-full flex items-center justify-center font-PoppinsSemiBold text-ft4 text-purple-150 bg-white-100 rounded-lg shadow-md">
              Task 1
            </div>
            <div className="w-50per tab: h-full flex items-center justify-center font-PoppinsSemiBold text-ft4 text-purple-150">
              Claim Reward
            </div>
          </>
        ) : (
          tasks.map((task, index) => {
            return currentTask === index ? (
              <div
                key={index}
                className="flex-1 h-full flex items-center justify-center font-PoppinsSemiBold text-ft4 text-purple-150 bg-white-100 rounded-lg shadow-md"
              >
                {tasks.length - 1 === index ? "Claim Reward" : `Task ${task}`}
              </div>
            ) : currentTask < index ? (
              <div
                key={index}
                className="flex-1 h-full flex items-center justify-center font-PoppinsMedium text-ft4 text-blue-50"
              >
                {tasks.length - 1 === index ? "Claim Reward" : `Task ${task}`}
              </div>
            ) : (
              <div
                key={index}
                className="flex-1 h-full flex items-center justify-center font-PoppinsSemiBold text-ft4 text-purple-150"
              >
                <img
                  src="/images/checkGreen.svg"
                  alt=""
                  className="mr-2 w-[17px] h-[17px]"
                />
                {tasks.length - 1 === index ? "Claim Reward" : `Task ${task}`}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Status;
