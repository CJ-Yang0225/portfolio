import React from "react";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://lh3.googleusercontent.com/ogw/ADGmqu8FefabuNHnyjX9VFTGW-m9dvrFJOA40Lh3R7M=s192-c-mo"
        alt="User avatar"
        className="w-32 h-32 mx-auto border-4 border-green-400 border-solid rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wide font-kaushan">
        <span className="text-green">Chao-Jie </span>
        Yang
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Front-End Developer
      </p>
      <a
        href=""
        download="name"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>
      <div className="flex justify-around w-9/12 m-auto my-5 text-green-400">
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Taichung,TW</span>
        </div>
        <div className="flex items-center justify-center my-2 space-x-2">
          <AiOutlineMail className="w-6 h-6" />
          <span>cj.yang0225@gmail.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <AiOutlinePhone className="w-6 h-6" />
          <span>0987-648-373</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
          onClick={() => window.open("mailto:cj.yang0225@gmail.com")}>
          Email me
        </button>
        <button className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">
          Switch theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
