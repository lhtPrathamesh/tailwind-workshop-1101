import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { history } from "../../managers/history";

function Header() {
  return (
    <div className="w-screen h-15 bg-purple-150 px-5 tab:px-11 lg:px-[98px] xl:px-[180px] 2xl:px-65 3xl:px-90 mb-7 tab:mb-8 lg:mb-6">
      <div className="h-full flex items-center lg:justify-between">
        <div className="w-[179px] h-[31px] mr-auto lg:mr-0">
          <img
            src="/images/learn2Earn.png"
            alt=""
            className="object-contain w-full h-full cursor-pointer"
            onClick={() => history.push("/")}
          />
        </div>
        {/* Header Items */}
        <div className="flex items-center z-50">
          <div className="hidden lg:flex">
            <div className="flex items-center justify-between  w-[350px] h-9  mr-9">
              <span className="font-PoppinsMedium text-ft3 text-white-100 cursor-pointer">
                Projects
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100 cursor-pointer">
                How it Works
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100 cursor-pointer">
                Stake
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100 cursor-pointer">
                Contact
              </span>
            </div>
          </div>
          <div className="h-[33px] w-[144px] cursor-pointer bg-purple-250 rounded-[18px] flex items-center justify-center mobile:hidden tab:mr-[16px]">
            <img
              src="/images/walletLight.svg"
              alt=""
              className="w-[22px] h-[17px] mr-[6px]"
            />
            <span className="font-PoppinsMedium text-ft3 text-white-100">
              0x91C2…7cA4
            </span>
          </div>
        </div>
        <div className="mobile:flex lg:hidden">
          <AiOutlineMenu color="#fff" className="w-7 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Header;
