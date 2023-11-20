import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://img.freepik.com/premium-vector/3d-online-shopping-social-media-mobile-applications-websites-concepts_131114-30.jpg?w=1060",
    "https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148935597.jpg?w=1060&t=st=1684172887~exp=1684173487~hmac=28d3fd2a1d2db636ad8e8c17415d74da8984a0c41146f1be4af0bceb42116207",
    "https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1060&t=st=1684172924~exp=1684173524~hmac=810291c98359ab614047f9222248fd459b8e0d0aa28fcb5e1168561ab927088a",
    "https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=1060",
  ];
  //  banner slide program
const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev-1)
  }
  
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 3 ? 0 : (prev)=>prev+1)
    
  }
  console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide *100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover"
            loading="priority"
            src={data[0]}
            alt="imageone"
          />
          <img
            className="w-screen h-full object-cover"
            loading="priority"
            src={data[1]}
            alt="imageone"
          />

          <img
            className="w-screen h-full object-cover"
            loading="priority"
            src={data[2]}
            alt="imageone"
          />

          <img
            className="w-screen h-full object-cover"
            loading="priority"
            src={data[3]}
            alt="imageone"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                <HiArrowLeft/>
            </div>
            <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                <HiArrowRight/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
