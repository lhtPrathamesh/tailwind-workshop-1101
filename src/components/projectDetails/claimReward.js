import React from "react";

function ClaimReward() {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row mb-10 md:mb-16 lg:mb-115px">
        <div className="w-full h-183px md:h-371px lg:w-60per lg:h-98 mb-6 lg:mb-0 lg:mr-30px relative">
          <div className="w-full h-full">
            <img
              src="/images/claimReward.svg"
              alt=""
              className="w-full h-full lg:object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-40per">
          <div className="font-PoppinsSemiBold text-ft11 text-black-100 md:text-ft31">
            Claim your Reward
          </div>
          <div className="font-PoppinsRegular text-ft4 text-black-50 mb-33px">
            You have won 10 Cake tokens for successfully completing the tasks in
            this project. Click on the Claim Reward button to get these tokens
            in your wallet.
          </div>
          <div className="flex items-center justify-center flex-col lg:block">
            <div className="w-50 h-13 bg-green rounded-xl flex items-center justify-center cursor-pointer">
              <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                Claim Reward
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-15 md:mb-16 lg:mb-90px">
        <span className="font-PoppinsMedium text-ft4 text-black-50">
          Facing any technical issue?&nbsp;
        </span>
        <span className="font-PoppinsMedium text-ft4 text-blue-250 cursor-pointer">
          Contact Us
        </span>
      </div>
    </div>
  );
}

export default ClaimReward;
