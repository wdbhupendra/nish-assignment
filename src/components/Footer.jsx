import React from "react";
//////////////////////////////////////////
import { FaL } from "react-icons/fa6";
import { FaDigitalOcean } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
///////////////////////////////////////////////
import { FaAlipay } from "react-icons/fa";
import { SiFampay } from "react-icons/si";
import { SiAmazonpay } from "react-icons/si";
import { RiWechatPayFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import { FaLitecoinSign } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { SiApplepay } from "react-icons/si";
//////////////// socialMedia ///////////////////////////////
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
//////////////////////////////////////////////////////////
import CoinIcon from "../assets/Transparent 1.svg";
import MainLogo from "../assets/footer_logo.png";
function Footer() {
  return (
    <div className="bg-[#1F2225] p-6 footer-wrap relative w-full">
      <div className="flex justify-between gap-5 footer-container">
        <div className="flex flex-col items-left">
            <img src={MainLogo} alt="logo" />          
          <p className="text-[14px] text-[#757786]">
            <span className="text-white pr-1">
              RustStrike
            </span>
            simply dummy text of the <br />printing and typesetting industry. <br />
            Lorem Ipsum has been the industry's<br /> standard dummy
            </p>
        </div>
        <div className="">
          {" "}
            <div className="program-sec flex items-center justify-between w-full pl-4 pr-4">
              <div className="flex flex-col">
                  <h6 className="text-white text-[14px]">Allife Programm</h6> 
                <ul className="flex pt-2 flex-col">
                    <li className="text-slate-400 text-[13px] py-1">
                      Promo
                    </li>
                    <li className="text-slate-400 text-[13px] py-1">
                      Referal
                    </li>
                  
                </ul>
              </div>

              <div className="flex flex-col">
                  <h6 className="text-white text-[14px]">Promotions</h6>
                <ul className="flex pt-2 flex-col">
                    <li className="text-slate-400 text-[13px] py-1">
                    Deposit
                    </li>
                    <li className="text-slate-400 text-[13px] py-1">
                    Bonus
                    </li>                
                </ul>
              </div>
              <div className="flex flex-col">
                  <h6 className="text-white text-[14px]">About Us</h6>
                <ul className="flex pt-2 flex-col">
                  
                    <li className="text-slate-400 text-[13px] py-1">
                    News
                    </li>
                    <li className="text-slate-400 text-[13px] py-1">
                    Provably Fair
                    </li>
                  
                </ul>
              </div>
              <div className="flex flex-col">
                  <h6 className="text-white text-[14px]">Help</h6>
                <ul className="flex pt-2 flex-col">
                    <li className="text-slate-400 text-[13px] py-1">
                    Live Support
                    </li>
                    <li className="text-slate-400 text-[13px] py-1">
                    Privacy Policy
                    </li>
                  
                </ul>
              </div>
           
          </div>
        </div>
        <div className="">
          <div className="text-white text-[14px] ">Payment Methods</div>
          <ul className="flex items-center justify-start pt-4 gap-3">
            <li className="text-[#757786] text-[16px]">
              <FaAlipay />
            </li>
            <li className="text-[#757786] text-[16px]">
              <SiFampay />
            </li>
            <li className="text-[#757786] text-[16px]">
              <SiAmazonpay />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaGooglePay />
            </li>
            <li className="text-[#757786] text-[16px]">
              <RiWechatPayFill />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaPaypal />
            </li>
          </ul>
          <div className="mt-4">
            <div className="text-white text-[14px] ">Follow Us</div>
          </div>
          <ul className="flex items-center gap-3 justify-start pt-4">
            <li className="text-[#757786] text-[16px]">
              <FaTelegramPlane />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaYoutube />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaTwitter />
            </li>
            <li className="text-[#757786] text-[16px]">
              <IoLogoInstagram />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaDiscord />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaTiktok />
            </li>
            <li className="text-[#757786] text-[16px]">
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-10px py-6 border-b-2 border-[#3F4655] border-t-2 my-10">
        <ul className="flex items-center justify-center gap-3 payment-section">
          <li className="text-[#666773] text-[24px] mx-9">
            <FaBitcoin />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <FaLitecoinSign />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <FaGooglePay />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <IoLogoUsd />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <RiVisaLine />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <FaAlipay />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <FaAmazonPay />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <FaCcPaypal />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <SiPayoneer />
          </li>
          <li className="text-[#666773] text-[24px] mx-9">
            <SiApplepay />
          </li>
        </ul>
      </div>

      <div className="mx-10px py-6 bitcoins-wrap">
        <ul className="flex items-center justify-center bit-coins_section">
          <li className="bg-[#1a1b1f] rounded-[16px] flex items-center justify-center px-2 py-1 mx-6">
            <img className="h-4 pr-1" src={CoinIcon} alt="" />
            <p className="text-[#757786] text-[14px]">
              1 BTC ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $20498.00
              </span>
            </p>
          </li>
          <li className="bg-[#1a1b1f] rounded-[16px] flex items-center justify-center px-2 py-1 mx-6">
            <div className="bg-blue-800 rounded-full p-1">
              {" "}
              <FaL className="text-[11px] text-white " />
            </div>
            <p className="text-[#757786] text-[14px] px-1">
              1 LTS ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $52.04
              </span>
            </p>
          </li>
          <li className="bg-[#1a1b1f] rounded-[16px] flex items-center justify-center px-2 py-1 mx-6">
            <div className="bg-yellow-500 rounded-full p-1">
              {" "}
              <FaDigitalOcean className="text-[11px]  " />
            </div>
            <p className="text-[#757786] text-[14px] px-1">
              1 DGC ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $0.15
              </span>
            </p>
          </li>
          <li className="bg-[#1a1b1f] rounded-[16px] flex items-center justify-center px-2 py-1 mx-6">
            <div className="bg-blue-800 rounded-full p-1">
              {" "}
              <MdOutlinePhoneInTalk className="text-[11px]  " />
            </div>
            <p className="text-[#757786] text-[14px] px-1">
              1 ETH ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $1092.15
              </span>
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-7">
          <p className="text-[#666773] text-[15px]">
            Copyright (C) 2024{" "}
            <span className="text-white text-[15px]">
              RUSTSTRIKE
            </span>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
