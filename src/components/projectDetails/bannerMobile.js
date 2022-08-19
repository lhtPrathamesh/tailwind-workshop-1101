import React from "react";

function BannerMobile() {
  return (
    <div>
      <div className="flex justify-center mt-[25px] mb-17px">
        <div className="font-PoppinsSemiBold text-2xl text-white-100 text-center w-56">
          Bridge Tokens on PancakeSwap
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-31 h-115px border border-blue-300 rounded-lg py-2.5 px-14px">
          <div className="flex items-center h-6 mb-1">
            <span className="mr-2 font-PoppinsMedium text-ft3 text-blue-100">
              Earn
            </span>
            <div className="w-3 h-3">
              <img src="/images/info.svg" alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex items-center h-11">
            <span className="font-PoppinsSemiBold text-ft14 text-white-100 mr-3">
              10
            </span>
            <span className="font-PoppinsMedium text-base text-white-150">
              CAKE
            </span>
          </div>
          <div className="h-5">
            <span className="font-PoppinsMedium text-ft3 text-purple-200">
              32.30 USD
            </span>
          </div>
        </div>{" "}
        <div className="h-115px flex flex-col items-center justify-center">
          <img src="/images/plusIcon.svg" alt="" className="w-3 h-3 mx-2" />
        </div>
        <div className="w-31 h-115px border border-blue-300 rounded-lg py-2.5 px-14px">
          <div className="flex items-center h-6 mb-1">
            <span className="mr-2 font-PoppinsMedium text-ft3 text-blue-100">
              Get
            </span>
            <div className="w-3 h-3">
              <img src="/images/info.svg" alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex items-center h-11">
            <span className="font-PoppinsSemiBold text-ft14 text-white-100 mr-3">
              NFT
            </span>
          </div>
          <div className="h-5">
            <span className="font-PoppinsMedium text-ft3 text-purple-200">
              Certificate
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center w-75 h-25 mb-26px">
          <span className="font-PoppinsRegular text-ft5 text-white-100 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit cras quis
            odio justo. Sed elit mi, aliquam congue justo in, molestie semper
            dui.
          </span>
        </div>
      </div>

      <div className="flex flex-wrap w-full items-center mb-6">
        <div className="flex items-center mr-10">
          <img className="mr-7px" src="/images/clock.svg" alt="" />
          <span className="font-PoppinsMedium text-ft3 text-white-100">
            30 min duration
          </span>
        </div>
        <div className="flex items-center">
          <img className="mr-7px" src="/images/beginner.svg" alt="" />
          <span className="font-PoppinsMedium text-ft3 text-white-100">
            Beginners
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <img className="mr-7px" src="/images/participant.svg" alt="" />
        <span className="font-PoppinsMedium text-ft3 text-white-100">
          221 Participants
        </span>
      </div>
    </div>
  );
}

export default BannerMobile;
