import React from 'react'
import Card from "./Card";
import image1 from "./../assets/Ava (1).svg";
import image2 from "./../assets/Ava (2).svg";
import image3 from "./../assets/Ava.svg";
import flag from "./../assets/england-flag.png";

import coinImg from "./../assets/Transparent 1.svg";
import { FiPlus } from "react-icons/fi";
import { FaRegSmile, FaChevronDown } from "react-icons/fa";
function Drawer() {
    const chatList = [
        {
          img_url: image1,
          heading_main: "Aleksandr Bern",
          time: "3 min ago",
          details: "Hey! I will be glad to new acquaintances! 🙏",
        },
        {
          img_url: image2,
          heading_main: "Nikol Gordon",
          time: "3 min ago",
          details:
            "Is someone participating in the lottery? What are the chances? 🤔",
        },
        {
          img_url: image3,
          heading_main: "Kas Samurski",
          time: "3 min ago",
          details: "Who will go to play roulette? 🤷‍♂️",
        },
        {
          img_url: image1,
          heading_main: "Aleksandr Bern",
          time: "3 min ago",
          details:
            "I'm going to play roulette in a couple of minutes. I want to try a new tactic.",
        },
        {
          img_url: image3,
          heading_main: "Murad Ahmedov",
          time: "3 min ago",
          details:
            "How to withdraw money from the project? I won for the first time in my life, I want to withdraw everything!",
        },
        {
          img_url: image2,
          heading_main: "Nikol Gordon",
          time: "3 min ago",
          details:
            "Is someone participating in the lottery? What are the chances? 🤔",
        },
      ];
  return (
    <>
    <div className="mt-[80px] sidebar-wrap bg-[#1F2225] fixed z-10 top-0 left-0 overflow-y-auto	overflow-x-none max-h-[90vh]">
    <div>
        <div className="flex justify-center bg-[#1c1d21] ">
          <div className="bg-[#2c2f34] flex items-center rounded-lg my-3 p-2 h-16 w-[299px] live-wrapper">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="h-[9px] w-[9px] border-none rounded-full bg-yellow-400 outline-none gap-1"></div>
                <p className="text-white text-[12px] px-1">Live Rain</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#171f21] rounded-md flex items-center">
                  <div className="flex items-center gap-2 p-2">
                    <img src={coinImg} alt="" className="" />
                    <p className="text-white text-[9px]">10.31</p>
                  </div>
                  <div className="bg-yellow-500 rounded h-9 w-8 flex items-center justify-center">
                    <FiPlus className=" items-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 drawer-heading">
          {chatList.map((item, index) => (
            <Card
              key={"sidebar_" + index}
              img_url={item.img_url}
              heading_main={item.heading_main}
              time={item.time}
              details={item.details}
            />
          ))}
        </div>
        <div className="sticky bg-[#1F2225] bottom-0 py-2 drawer-cta">
          <div className="flex items-center justify-center gap-2 my-4 mx-2">
            <input
              type="text"
              placeholder="Type a message"
              className="bg-[#2c2f34] px-3 py-[6px] leading-10  w-[80%] rounded-xl  text-[13px] text-slate-300 border-none outline-none placeholder-[#2c2f34]::placeholder"
            />
            <button className="bg-yellow-500 py-3 px-6 rounded-md text-md font-bold w-[20%] flex justify-center">
              Send
            </button>
          </div>

          <div className="flex items-center justify-centergap-2  my-4 mx-2">
            <div className="bg-[#2c2f34] p-3 w-[75%] rounded-xl text-slate-100 flex justify-between">
              <div className="flex justify-between gap-10">
                <div className="w-8 h-7">
                  <img src={flag} alt="flag" className="w-full h-full" />
                </div>
                <p className="text-[18px] font-semibold">English</p>
              </div>
              <div className="flex justify-center items-center">
                <FaChevronDown className="text-white" />
              </div>
            </div>
            <div className="bg-[#2c2f34] py-3 px-6  w-[20%] ml-[5%] rounded-xl text-[13px] text-slate-300 flex justify-center items-center">
              <FaRegSmile className="text-white text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Drawer