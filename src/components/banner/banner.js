import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="w-screen relative">
      <img
        src="/images/headerBackground.png"
        alt=""
        className="w-full h-130 tab:h-171 mobile:h-148 border-2 absolute  mix-blend-overlay"
      />
      <div className="w-full px-5 tab:px-11 lg:px-[98px] xl:px-[180px] 2xl:px-65 3xl:px-90">
        {/* Header Top */}
        <div className="flex items-center lg:justify-between mb-[69px] tab:mb-14 mobile:mb-9">
          <div className="w-[179px] h-[31px] mt-5 tab:mr-6">
            <img
              src="/images/learn2Earn.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          {/* Header Items */}
          <div className="flex items-center mobile:hidden tab:w-full mt-5 z-50">
            <div className="tab:flex-1">
              <div className="flex items-center justify-between  w-[350px] h-9  mr-9">
                <span className="font-PoppinsMedium text-ft5 text-white-100 cursor-pointer">
                  Projects
                </span>
                <span className="font-PoppinsMedium text-ft5 text-white-100 cursor-pointer">
                  How it Works
                </span>
                <span className="font-PoppinsMedium text-ft5 text-white-100 cursor-pointer">
                  Stake
                </span>
                <span className="font-PoppinsMedium text-ft5 text-white-100 cursor-pointer">
                  Contact
                </span>
              </div>
            </div>
            <div className="h-9 w-9 cursor-pointer">
              <img src="/images/wallet.svg" alt="" />
            </div>
          </div>
          <div className="mobile:flex tab:hidden lg:hidden ml-auto">
            <MenuIcon className="text-white-100 w-[27px] h-[18px] mt-4" />
          </div>
        </div>
        {/* Header Bottom */}
        <div className="flex justify-between mobile:flex-col mobile:items-center tab:flex-col tab:items-center">
          <div className="w-[447px] h-full mobile:w-[286px]">
            <div className="mb-[46px]">
              <div className="mobile:text-center">
                <span className="font-PoppinsSemiBold  text-ft14 text-white-100 mobile:text-ft111">
                  Earn as you Learn
                </span>
              </div>
              <div className="mobile:text-center tab:text-center">
                <span className="font-PoppinsRegular text-ft5 text-white-100 mobile:text-ft5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing ibulum
                  gravida semper enim vel fermentum.
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mobile:flex-col tab:mb-5">
              {/* Buttons */}
              <div className="flex items-center justify-center w-50 h-13 bg-blue-250 rounded-2xl mobile:w-[298px] mobile:h-10 mobile:mb-4 z-50 cursor-pointer">
                <span className="font-PoppinsSemiBold text-ft5 text-white-100">
                  Connect Wallet
                </span>
              </div>
              <div className="flex items-center justify-center w-50 h-13 bg-blue-100 rounded-2xl mobile:w-[298px] mobile:h-10 z-50 cursor-pointer">
                <span className="font-PoppinsSemiBold text-ft5 text-btnTextSkyBlue">
                  How it Works
                </span>
              </div>
            </div>
          </div>
          <div className="w-[513px] h-[403px] tab:w-105 tab:h-83 mobile:w-65 mobile:h-50 mobile:mt-4">
            <img
              src="/images/handPhoneIllustration.svg"
              alt=""
              className="object-cover h-99 tab:h-83 mobile:h-50 tab:object-contain absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
