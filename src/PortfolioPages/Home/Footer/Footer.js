import React from "react";
import "./Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px] mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href=""
            className="box font-medium text-white flex items-center justify-center flex-col"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <WhatsAppIcon className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <InstagramIcon className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2023 Dev CrypticCoder </span> All rights
          reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
}
