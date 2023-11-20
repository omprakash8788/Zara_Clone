import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* -------- LogoIcon Start here----------- */}
        <div className="flex flex-col gap-7 ">
          <img
            className="w-32"
            src="https://t4.ftcdn.net/jpg/02/84/20/39/360_F_284203907_PpYxdxCtsAWSB96cMh0WXWttZ5Qlldn1.jpg"
            alt="imglogoinfooter"
          />
          <p className="text-white text-sm tracking-wide">@MaxBazar.com</p>
          <img
            className="w-56"
            src="https://t3.ftcdn.net/jpg/04/07/44/62/360_F_407446284_KBEUJeBQWXwrPwRB7vh0CdAzT9VmXori.jpg"
            alt="paymentimg"
          />
          <div className="flex  gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* -------- LogoIcon end here----------- */}

        {/* -------- Locateus Start here----------- */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p> Navi Mumbai , India</p>
            <p>Mobile : 8788364473 </p>
            <p>Phone : 8788364473</p>
            <p>Email : omprakashkumar552@gmail.com</p>
          </div>
        </div>
        {/* -------- Locateus end here----------- */}

        {/* -------- Profiles Start here----------- */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
         <div className="flex flex-col gap-2 text-base">
         <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              {" "}
              <BsPersonFill />{" "}
            </span>
            My Account
          </p>

          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              {" "}
              <BsPaypal />{" "}
            </span>
         Check-Out
          </p>

          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              {" "}
              <FaHome/>{" "}
            </span>
            Order Tracing 
          </p>

          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              {" "}
              <MdLocationOn />{" "}
            </span>
            Help and Support
          </p>
         </div>
        </div>
        {/* -------- Profiles End here----------- */}



        {/* -------- Subscribe Start here----------- */}
        <div className="flex flex-col justify-center">
            <input className="bg-transparent border px-4 py-2 text-sm " placeholder="Email" type="text" />
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
        {/* -------- subscribe end here----------- */}
      </div>
    </div>
  );
};

export default Footer;