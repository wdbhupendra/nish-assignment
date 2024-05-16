import React from "react";
import Avatar1 from "./../assets/Ava (1).svg";
import Avatar2 from "./../assets/Ava (2).svg";
import CoinSvg from "./../assets/Transparent 1.svg";

function Table() {
  return (
    <div className="overflow-x-auto table-wrapper w-full">
    <table>
    <tr>
    <th className="text-white text-[14px] font-medium">Game</th>
    <th className="text-white text-[14px] font-medium">Time</th>
    <th className="text-white text-[14px] font-medium">User</th>
    <th className="text-white text-[14px] font-medium">Bet Amount</th>
    <th className="text-white text-[14px] font-medium">Multiplier</th>
    <th className="text-white text-[14px] font-medium">Payout</th>
    </tr>
    <tr className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2">
    <td>
      <div className="flex items-center gap-2 py-2">
    <img src={Avatar1} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center gap-2 py-2">
    <p className="text-[#555C63] text-[12px]">7:30 AM</p>
    </div>
    </td>
    <td>
      <div  className="flex items-center gap-2 py-2">
    <img src={Avatar2} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">170</p>
    </div>
    </td>
    
    <td>
    <div className="py-2 bg-[#303438] w-14 h-8 flex items-center justify-center rounded-[12px]">
    <p className="text-white text-[12px]">0.00x</p>
    </div>
    </td>
    <td>
      <div className="py-2 flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">0.00</p>
    </div>
    </td>
    </tr>
    <tr className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2">
    <td>
      <div className="flex items-center gap-2 py-2">
    <img src={Avatar1} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center py-2">
    <p className="text-[#555C63] text-[12px]">7:30 AM</p>
    </div>
    </td>
    <td>
      <div  className="flex items-center gap-2 py-2">
    <img src={Avatar2} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">170</p>
    </div>
    </td>
    
    <td>
    <div className="py-2 bg-[#303438] w-14 h-8 flex items-center rounded-[12px] justify-center">
    <p className="text-white text-[12px]">0.00x</p>
    </div>
    </td>
    <td>
      <div className="py-2 flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">0.00</p>
    </div>
    </td>
    </tr>
    <tr className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2">
    <td>
      <div className="flex items-center gap-2 py-2">
    <img src={Avatar1} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center py-2">
    <p className="text-[#555C63] text-[12px]">7:30 AM</p>
    </div>
    </td>
    <td>
      <div  className="flex items-center gap-2 py-2">
    <img src={Avatar2} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">170</p>
    </div>
    </td>
    
    <td>
    <div className="py-2 bg-[#303438] w-14 h-8 flex items-center rounded-[12px] justify-center">
    <p className="text-white text-[12px]">0.00x</p>
    </div>
    </td>
    <td>
      <div className="py-2 flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">0.00</p>
    </div>
    </td>
    </tr>
    <tr className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2">
    <td>
      <div className="flex items-center gap-2 py-2">
    <img src={Avatar1} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center py-2 w-12">
    <p className="text-[#555C63] text-[12px]">7:30 AM</p>
    </div>
    </td>
    <td>
      <div  className="flex items-center gap-2 py-2">
    <img src={Avatar2} alt="" />
    <h3 className="text-white text-[12px]">Blackjack</h3>
    </div>
    </td>
    <td>
      <div className="flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-white text-[12px]">170</p>
    </div>
    </td>
    
    <td>
    <div className="py-2 bg-[#303438] w-14 h-8 flex items-center rounded-[12px] justify-center">
    <p className="text-white text-[12px]">0.00x</p>
    </div>
    </td>
    <td>
      <div className="py-2 flex items-center gap-2">
    <img src={CoinSvg} alt="" />
    <p className="text-[#FFC10A] text-[12px]">0.00</p>
    </div>
    </td>
    </tr>
    </table>
    </div>
  );
}

export default Table;
