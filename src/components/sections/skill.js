import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { FaWordpress } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";

const Skill = (props) => {
  console.log(props);
  return (
    <section id="skill" ref={props.sectionRef}>
      <div className="vertical-line"></div>
      <div className="contact workspace flex flex-col">
        <p className="text-[64px] font-bold">My Expertises</p>
        <div className="grid lg:grid-cols-5 grid-cols-3 flex-wrap w-auto m-auto justify-center mt-[4.5rem] gap-5 max-w-[860px] cursor-pointer">
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <TiHtml5
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Html
          </div>

          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <FaCss3Alt
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Css
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <BiLogoTailwindCss
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Tailwind Css
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <FaReact
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            React
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <IoLogoJavascript
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Javascript
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <GrMysql
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Mysql
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <FaWordpress
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Wordpress
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <FaNodeJs
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            NodeJs
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[110px] lg:w-[130px] h-[130px] object-cover border border-black justify-center">
            <FaNodeJs
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            NodeJs
          </div>
          {/* <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <FaNodeJs
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            NodeJs
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skill;
