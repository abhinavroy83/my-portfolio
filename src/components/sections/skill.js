import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

const Skill = (props) => {
  console.log(props);
  return (
    <section id="skill" ref={props.sectionRef}>
      <div className="vertical-line"></div>
      <div className="contact workspace flex flex-col">
        <p className="text-[64px] font-bold">My Expertises</p>
        <div className="grid grid-cols-5 flex-wrap w-auto m-auto justify-center mt-[4.5rem] gap-5 max-w-[860px] cursor-pointer">
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <TiHtml5
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Html
          </div>

          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <FaCss3Alt
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Css
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <BiLogoTailwindCss
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Tailwind Css
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <FaReact
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            React
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <IoLogoJavascript 
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Javascript
          </div>
          <div className="bg-[#00ADB5] group hover:text-[#00ADB5] hover:bg-white font-bold transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl w-[130px] object-cover border border-black justify-center h-[130px]">
            <GrMysql
              size={45}
              className="group-hover:rotate-[360deg] transition-transform"
            />
            Mysql
          </div>

          <div className="">
            <div className="bg-white group transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl hover:bg-slate-100 w-[150px] object-cover border border-black justify-center h-[150px]">
              {/* <img
          className="w-[6.4rem] h-13"
          src={`https://img.freepik.com/premium-vector/upcoming-events-announcement-megaphone-label-loudspeaker-speech-bubble_123447-5297.jpg`}
          alt="logo"
        /> */}
              {/* <BiCalendarEvent
            size={45}
            className="group-hover:rotate-[360deg] transition-transform"
          /> */}

              <h1 className="text-[22px] text-center font-bold text-[#000] mt-3">
                Events
              </h1>
            </div>
          </div>
          <div className="">
            <div className="bg-white group transition duration-300 text-center flex flex-col items-center rounded-lg shadow-md hover:scale-105 shadow-black hover:shadow-xl hover:bg-slate-100 w-[150px] object-cover border border-black justify-center h-[150px]">
              {/* <img
          className="w-[4.9rem] h-15"
          src={`https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-6.png`}
          alt="logo"
        /> */}
              {/* <BiCameraMovie
            size={45}
            className="group-hover:rotate-[360deg] transition-transform"
          /> */}
              <h1 className="text-[22px] text-center font-bold text-[#000] mt-3">
                Movies
              </h1>
            </div>
          </div>
          <div className="">
            <div className="bg-white group transition duration-300 text-center flex flex-col items-center rounded-lg hover:scale-105 shadow-md shadow-black hover:shadow-xl hover:bg-slate-100 w-[150px] object-cover border border-black justify-center h-[150px]">
              {/* <img
          className="w-[6.4rem] h-13"
          src={`https://img.freepik.com/premium-vector/upcoming-events-announcement-megaphone-label-loudspeaker-speech-bubble_123447-5297.jpg`}
          alt="logo"
        /> */}
              {/* <BiCalendarEvent
            size={45}
            className="group-hover:rotate-[360deg] transition-transform"
          /> */}

              <h1 className="text-[22px] text-center font-bold text-[#000] mt-3">
                Events
              </h1>
            </div>
          </div>
          <button
            type="submit"
            className=" rounded-md bg-[#cc9724] my-5 mt-12 px-7 py-4 text-[20px] self-center text-white shadow-sm hover:bg-[#cc9724]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skill;
