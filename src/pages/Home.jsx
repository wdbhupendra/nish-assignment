import React, { useState } from "react";
import Table from "./../components/Table";
import { FaArrowLeft } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

// Import local images
import LightImg from "./../assets/Lightning.svg";
import MainImg from "./../assets/pngegg (7) 2.png"; // Corrected file name
import BlockInfo from "./../assets/Block Info.png"; // Corrected file name
import BunnerImg from "./../assets/Bunner 1.png";
import Banner1 from "./../assets/Bunner-1.png";
import Banner2 from "./../assets/Bunner-2.png";
import IconSvg from "./../assets/icon.svg";
import EyeSvg from "./../assets/Eye.svg";
import Card1 from "./../assets/C 1.png";
import Card2 from "./../assets/C 2.png";
import Card3 from "./../assets/C 4.png";
import Roulette from "./../assets/Roulette.png";
import Mines from "./../assets/Mines.png";
import Icon1 from "./../assets/icon (1).svg";
import Plinko from "./../assets/Plinko.png";
import Crash from "./../assets/Crash.png";
import Dice from "./../assets/Dice.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const [prev, setPrev] = useState("");
  const [tab, setTab] = useState("All-Bets");

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={
            currentSlide === 0 ? "disable" : "" + "text-white previous-cta"
          }
          onClick={() => {
            setPrev("prev");
            previous();
          }}
        >
          <FaLessThan className="text-center text-gray-400 text-sm" />
        </button>
        <button
          onClick={() => {
            setPrev("next");
            next();
          }}
          className="text-white next-cta"
        >
          <FaGreaterThan className="text-center text-sm" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto pl-5 pr-5 w-full">
        <div className="grid grid-cols-12 banner-bg">
          {/* Left Arrow */}
          <div className="w-12 h-10 bg-[#2c2f34] rounded flex items-center justify-start mt-3">
            <FaArrowLeft className="ml-4 text-slate-200 text-[13px]" />
          </div>
          {/* Content */}
          <div className="col-span-3">
            {/* <div>
              <h1 className="text-white text-4xl font-bold font-poppins">
                COLLECT <br /> BATTLE PASS <br />
                <span className="text-yellow-500">REWARDS</span>
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-white">
                Register to claim your <br />
                <span className="text-yellow-500">bonus</span> and start winning
              </p>
            </div>
            <div className="bg-yellow-500 flex items-center justify-center w-44 rounded-lg mt-5 py-1">
              <img src={LightImg} alt="Lightning" />
              <p className="font-semibold">Create Account</p>
            </div> */}
          </div>

          {/* Main Image */}
          <div className="col-span-4 static ">
            <div className="">
              <img className="h-auto w-auto" src={MainImg} alt="Main" />
            </div>
          </div>

          {/* Info Block */}
          <div className="col-span-3  flex justify-end">
            {/* <div className="mt-32 ">
              <img src={BlockInfo} alt="Block Info" />
            </div> */}
          </div>
        </div>
        {/* ///////////////////////////////////// cards ///////////////////////////////////////////////// */}

        <div className="flex items center justify-between mt-3 case-wrapper">
          <div className="mr-3">
            <img src={Banner1} alt="" />
          </div>

          <div className="ml-2">
            <div>
              {" "}
              <img src={Banner2} alt="" />
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////// cards end ///////////////////////////////////////////////// */}

        {/* ///////////////////////////////////// second cards ///////////////////////////////////////////////// */}
        <div className="bg-[#1F2225] rounded-[16px] pt-5 pb-4 mb-3 pl-4 pr-4 slider-section">
          <div className="">
            <div className="flex items-center w-full justify-between p-4 house-game">
              <div className="w-1/2 flex items-center">
                <img className="h-10" src={IconSvg} alt="" />
                <h5 className="text-white text-[18px] font-bold">
                  IN-HOUSE GAME
                </h5>
              </div>
              <div className="w-1/2 flex items-end justify-end gap-4">
                <div className="bg-[#2C3034] flex items-center justify-center w-24 rounded-[13px] p-2 shadow-md mobile-hide">
                  <img className="text-white px-1" src={EyeSvg} alt="" />
                  <p className="text-[13px] text-[#555C63] mobile-hide">see All</p>
                </div>
                <div className="flex items-center justify-center  space-x-3">
                  <div
                    className={`w-[36px] h-[36px] hidden lg:flex md:flex items-center justify-center rounded-[13px] bg-[#2C3034] ${
                      prev == "prev" && "bg-[#FFC10A]"
                    }`}
                  >
                    {/* <FaLessThan className="text-center text-gray-400 text-sm" /> */}
                  </div>
                  <div
                    className={`w-[36px] h-[36px] hidden lg:flex md:flex items-center justify-center rounded-[13px] bg-[#2C3034] ${
                      prev == "next" && "bg-[#FFC10A]"
                    } `}
                  >
                    {/* <FaGreaterThan className="text-center text-sm" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                renderButtonGroupOutside={true}
                // keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                // containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
                arrows={false}
                customButtonGroup={<ButtonGroup />}
              >
                <div className="flex flex-col items-center rounded-lg h-[202px] w-[202]">
                  <img src={Roulette} alt="" />
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-centerrounded-lg h-[202px] w-[202] sm:flex-[33%]">
                  <img src={Mines} alt="" />
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center  rounded-lg h-[202px] w-[202] sm:flex-[33%]">
                  <img src={Plinko} alt="" />
                </div>

                {/* Column 4 */}
                <div className="flex flex-col items-center rounded-lg h-[202px] w-[202] sm:flex-[33%]">
                  <img src={Crash} alt="" />
                </div>

                {/* Column 5 */}
                <div className="flex flex-col items-center rounded-lg h-[202px] w-[202] sm:flex-[33%]">
                  <img src={Dice} alt="" />
                </div>
              </Carousel>
          </div>
        </div>
        {/* ///////////////////////////////////// second cards  end ///////////////////////////////////////////////// */}

        {/* ///////////////////////////////////// third cards  ///////////////////////////////////////////////// */}
        <div className="bg-[#1F2225] rounded-[16px] pt-5 pb-4 mt-3 mb-3 pl-4 pr-4  house-game_wrapper">
         
            <div className="flex items-center w-full  p-4">
              <img src={Icon1} alt="" />
              <h5 className="text-white font-poppins text-[18px] font-bold">HOT CASES</h5>
          
          </div>
            <div className="flex items-center justify-between w-full cases-wrap">
              <div className="flex flex-col items-center  rounded-lg ">
                <img src={Card1} alt="" />
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center  rounded-lg ">
                <img src={Card2} alt="" />
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center rounded-lg ">
                <img src={Card1} alt="" />
              </div>

              {/* Column 4 */}
              <div className="flex flex-col items-center  rounded-lg ">
                <img src={Card2} alt="" />
              </div>

              {/* Column 5 */}
              <div className="flex flex-col items-center  rounded-lg ">
                <img src={Card1} alt="" />
              </div>
            </div>
        </div>

        {/* ///////////////////////////////////// second cards  end ///////////////////////////////////////////////// */}

        {/* /////////////////////////////////// Table ////////////////////////////////////////////////////////////////  */}
        <div className="mt-9">
          <div className="flex items-center w-full  px-3">
        
              <ul className="flex justify-center items-center gap-4 tab-wrapper">
                {/* <div
                  className={`text-[#555C63] ${
                    tab == "All-Bets" && "bg-[#2C3034]"
                  } w-20  px-2  py-2 rounded-[10px] cursor-pointer`}
                  onClick={() => setTab("All-Bets")}
                > */}
                <li
                  className={`text-[#555C63] ${
                    tab == "All-Bets" && "bg-[#2C3034] text-white"
                  }  text-[13px] font-medium text-center px-2  py-2 rounded-[10px] cursor-pointer`}
                  onClick={() => setTab("All-Bets")}
                >
                  All Bets
                </li>
                {/* </div> */}
                <li
                  className={`text-[#555C63] ${
                    tab == "High-Holders" && "bg-[#2C3034] text-white"
                  }  text-[13px] font-medium text-center px-2  py-2 rounded-[10px] cursor-pointer`}
                  onClick={() => setTab("High-Holders")}
                >
                  High Holders
                </li>
                <li
                  className={`text-[#555C63] ${
                    tab == "Lucky-Bets" && "bg-[#2C3034] text-white"
                  }  text-[13px] font-medium text-center px-2  py-2 rounded-[10px] cursor-pointer`}
                  onClick={() => setTab("Lucky-Bets")}
                >
                  Lucky Bets
                </li>
                <li
                  className={`text-[#555C63] ${
                    tab == "My-Bets" && "bg-[#2C3034] text-white"
                  }   text-[13px] font-medium text-center px-2  py-2 rounded-[10px] cursor-pointer`}
                  onClick={() => setTab("My-Bets")}
                >
                  My Bets
                </li>
              </ul>
            
          </div>
        </div>
        <div className="mt-4 mb-16 table-wrapper">
          <div className="flex items-center w-full  px-3">
            {tab == "All-Bets" ? (
              <Table />
            ) : (
              <div className="flex justify-center items-center h-[200px]">
                <p className="text-white">empty {tab}</p>
              </div>
            )}
          </div>
        </div>

        {/* /////////////////////////////////// Table  End ////////////////////////////////////////////////////////////////  */}
      </div>
    </>
  );
};

export default Home;
