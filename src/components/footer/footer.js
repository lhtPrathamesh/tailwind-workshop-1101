import React from "react";

function Footer() {
  return (
    <div className="bg-purple-150 w-full h-[518px] md:h-[471px] lg:h-[299px] px-5 tab:px-11 lg:px-[98px] xl:px-[180px] 2xl:px-65 3xl:px-90 pt-[47px] pb-[50px]">
      <div className="block lg:flex mb-[37px] md:mb-[45px]">
        {/* Left Container */}
        <div className="mr-[90px] mobile:mb-6 tab:mb-[47px]">
          <img src="/images/learn2Earn.png" alt="" className="mb-5" />
          <div className="font-PoppinsRegular text-ft4 text-white-100 w-[325px] md:w-[492px] lg:w-[377px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing ibulum gravida
            semper enim vel fermentum. Ut neque odio, tincidunt ut congue ac,
            gravida ut enim.
          </div>
        </div>
        {/* Right Container */}
        <div className="w-full flex justify-between">
          <div className="w-[328px] tab:w-[436px] flex justify-between">
            <div className="flex flex-col mobile:h-[167px] tab:h-[167px] mobile:mb-6">
              <span className="font-PoppinsMedium text-ft3 text-white-100 flex-1">
                Projects
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100 flex-1">
                How it works
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100 mobile:flex-1 tab:flex-1">
                Stake
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100 lg:hidden block">
                Contact Us
              </span>
            </div>
            <div className="flex flex-col lg:mr-5">
              <span className="font-PoppinsMedium text-ft3 text-white-100 mb-[38px]">
                Terms and Conditions
              </span>
              <span className="font-PoppinsMedium text-ft3 text-white-100">
                Privacy Policy
              </span>
            </div>
          </div>
          <div className="flex-col w-[209px] h-[137px] hidden md:flex">
            <div className="flex flex-1">
              <img
                src="/images/facebook.svg"
                alt=""
                className="w-6 h-6 mr-[10px] tab:mr[20px]"
              />
              <img
                src="/images/twitter.svg"
                alt=""
                className="w-6 h-6 mr-[10px] tab:mr[20px]"
              />
              <img
                src="/images/discord.svg"
                alt=""
                className="w-6 h-6 mr-[10px] tab:mr[20px]"
              />
              <img
                src="/images/reddit.svg"
                alt=""
                className="w-6 h-6 mr-[10px] tab:mr[20px]"
              />
            </div>
            <div className="font-PoppinsRegular text-ft3 text-white-100 flex-1 tab:hidden">
              Please contact us if you have any query or feedback
            </div>
            <div className="flex items-center tab:hidden">
              <img
                src="images/email.svg"
                alt=""
                className="w-[14px] h-[14px] mr-[10px]"
              />
              <span className="font-PoppinsMedium text-ft3 text-white-100">
                support@lte.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex md:hidden">
          <img
            src="/images/facebook.svg"
            alt=""
            className="w-6 h-6 mr-[10px] tab:mr[20px]"
          />
          <img
            src="/images/twitter.svg"
            alt=""
            className="w-6 h-6 mr-[10px] tab:mr[20px]"
          />
          <img
            src="/images/discord.svg"
            alt=""
            className="w-6 h-6 mr-[10px] tab:mr[20px]"
          />
          <img
            src="/images/reddit.svg"
            alt=""
            className="w-6 h-6 mr-[10px] tab:mr[20px]"
          />
        </div>
      </div>
      <div className="font-PoppinsRegular text-ft4 text-white-100">
        2022 © RunCrypto LLC
      </div>
    </div>
  );
}

export default Footer;
