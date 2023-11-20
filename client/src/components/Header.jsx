import React from "react";
import { cart, logoDark } from "../assests"; //i am not using this one
import { TfiBag } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  // console.log(productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-40">
      <div className='className="max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
          <div>
            <img
              className="w-28"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png"
              alt="logoDark"
            />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
          </ul>
          {/* another image  */}
        <Link to='/cart'>
        <div className="relative">
            <TfiBag  className="w-6"/>
            <span className="absolute w-6 top-0 left-0 text-sm flex items-center justify-center font-semibold">
              {productData.length}
            </span>
          </div>
        </Link>
         <Link to='/login'>
         <img
              className="w-8 h-8 rounded-full"
              src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
              alt="loginicomimage"
             
            />
         </Link>
         {/* pass data here  */}
         {
          userInfo &&  <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
         }
        </div>
      </div>
    </div>
  );
};

export default Header;
