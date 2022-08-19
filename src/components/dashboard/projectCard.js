import React from "react";
import { history } from "../../managers/history";

function ProjectCard({ image, heading, amount, value, index }) {
  return (
    <div
      className="bg-white-100 h-57.5 mobile:w-92.5 rounded-2xl shadow-md mb-10 cursor-pointer"
      onClick={() => (index === 0 ? history.push("/project-details") : "")}
    >
      <div className="h-3/5 flex items-center justify-center border-b border-grey-50">
        <img src={image} alt="" />
      </div>
      <div className="h-2/5 flex items-center justify-between p-4">
        <div className="w-3/5 font-PoppinsSemiBold text-black-100 text-ft5">
          {heading}
        </div>
        <div className="w-2/6">
          <span className="font-PoppinsSemiBold text-black-100 text-ft3">
            Earn{" "}
            <span className="font-PoppinsBold text-ft7 text-purple-150">
              {amount}
            </span>{" "}
            <span className="">{value}</span>
          </span>
          <div className="font-PoppinsMedium text-darkGrey-50 text-ft1">
            + NFT Certificate
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
