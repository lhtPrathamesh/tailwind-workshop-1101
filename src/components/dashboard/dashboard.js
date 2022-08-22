import React, { useState } from "react";
import ProjectCardComponent from "./projectCard";
import { data } from "../../constants/index";

function Dashoard() {
  const [search, setSearch] = useState(false);

  return (
    <div className="bg-white-50 px-5 tab:px-11 lg:px-[98px] xl:px-[180px] 2xl:px-65 3xl:px-90 pt-15">
      <div className="mb-7 flex items-center justify-between tab:justify-start mobile:justify-center">
        <span className="font-PoppinsSemiBold text-black-100 text-ft8 tab:mr-6">
          Choose a Project to Start Earning
        </span>
        <div className="flex items-center mobile:hidden">
          {!search ? (
            <img
              src="/images/searchSmall.svg"
              alt=""
              className="w-9 h-9 mr-4 cursor-pointer"
              onClick={() => setSearch(true)}
            />
          ) : (
            ""
          )}
          {/* Search Box */}
          {search ? (
            <div className="mobile:hidden flex items-center w-[250px] h-9.5 bg-white-100 rounded-full px-2">
              <img src="/images/searchSmall.svg" alt="" className="w-9 h-9" />
              <input
                type="text"
                className="bg-transparent outline-none font-ft3  text-black-50"
                placeholder="Search"
              />
              <img
                src="/images/crossSmall.svg"
                alt=""
                className="w-4 h-4 cursor-pointer"
                onClick={() => setSearch(false)}
              />
            </div>
          ) : (
            ""
          )}
          <img
            src="/images/filterIconSmall.svg"
            alt=""
            className="w-9 h-9 cursor-pointer"
          />
        </div>
      </div>
      {/* Card Component */}
      <div className="grid md:gap-11 grid-cols-1 md:grid-cols-2 xl:grid-cols-30/30/30 mobile:flex mobile:flex-wrap mobile:justify-center mb-2 md:mb-[60px] lg:mb-[87px]">
        {data.map((project, index) => (
          <ProjectCardComponent
            key={index}
            image={project.image}
            heading={project.heading}
            amount={project.amount}
            value={project.value}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashoard;
