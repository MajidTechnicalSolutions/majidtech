import React from "react";
import Tags from "../../utils/Tags";

// import "./modal.css";

export const Modal = ({ onSubmit, closeModal, data, getImage }) => {
  return (
    <div
      className="fixed w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)] left-0 top-0"
      onClick={(e) => closeModal("Modal was closed")}
    >
      <div className=" bg-tagDark w-[30em] justify-between p-6 rounded-lg">
        <img src={getImage()} className="w-full" alt="Example of work done" />
        <Tags tagNames={data.tags} tagStyle="mt-4 mr-1" />
        <p className="my-4 text-white">{data.title}</p>
        <div id="additionalInfo" className="flex justify-between">
          <p className="text-silverDark">{data.desc}</p>
        </div>
        <div className="comments flex justify-evenly"></div>
      </div>
    </div>
  );
};
