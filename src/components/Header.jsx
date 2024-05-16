import React,{useState,useEffect} from "react";
import mainlogo from "./../assets/main_logo1.png";
import imageGame from "./../assets/games (1) 1.png";
import BalanceSvg from "./../assets/Balance.svg";
import Vector from "./../assets/Vector.svg";
import Group from "./../assets/Group 1597882519.svg";
import Avatar from "./../assets/Ava.png";

import { FaChevronDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
function Header({openDrawer,setOpenDrawer}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="bg-[#1e2225] flex items-center justify-between fixed header-wrap w-full z-10 px-[24px] py-[30px]">
      {
          isMobile &&
          <>
          {openDrawer? <p className="text-white" onClick={setOpenDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </p>: <p onClick={setOpenDrawer} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </p>}
         
          </>

        }
        <div className="flex justify-between gap-5 items-center">
      <div className="logo">

        <img src={mainlogo} className="h-full w-full" />
      </div>
      <div className="flex items-center s bg-[#2C3034] px-3 py-2 rounded-[10px] mobile-hide shadow-[0px 10px 13px 0px rgba(0,0,NaN,1)]">
        <div className="px-1">
          <img src={imageGame} alt="" />
        </div>
        <div className="text-white px-1">GAMES</div>
        <div>
          <FaChevronDown className="text-white" />
        </div>
      </div>
      </div>
        <div className="flex px-3 py-2 rounded-[10px] bg-[#2C3034] items-center mobile-hide">
          <img src={BalanceSvg} alt="" />
          <div className="bg-[#FFC10A] my-1 rounded-md w-6 h-6 flex items-center justify-center ">
            <FaChevronDown className=" text-[10px]  " />
          </div>
        </div>
    <div className="flex items-center gap-2 justify-between">
        <div className="bg-[#FFC10A] flex items-center justify-center  px-3 py-1  rounded-[12px] mobile-hide">
          <img  className="mt-2" src={Vector} alt="" />
          <p className="text-white text-[13px] font-[500]">Withdraw</p>
        </div>
        <div className="bg-[#FFC10A] flex items-center justify-center px-5 py-3 rounded-[12px] mobile-hide">
          <FiPlus className=" items-center" />
          <p className="text-[13px] font-[500] text-[#1E1E1E]">Deposit</p>
        </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
        <div className="bg-[#2C3034] w-[34px] h-[34px]  flex justify-center items-center rounded-lg mobile-hide">
          <img  src={Group} alt="" />
        </div>
        <div className="flex items-center">
           <span className="text-right">
            <h6 className="text-white text-[14px] font-[500]">Alekshendr</h6>
            <p className="text-[#468EFA] text-[12px]">level <span className="text-[#FFC10A]">10</span></p>
          </span>
          <div className="w-[52px] h-[52px]">
            {" "}
            <img src={Avatar} alt="" />
          </div>
        </div>
        </div>
    </div>
  );
}

export default Header;
