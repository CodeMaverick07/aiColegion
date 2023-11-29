import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const path = window.location.pathname;
  return (
    <>
      <header>
        <div className="w-screen fixed">
          <div className="mx-20 my-5 header py-2 flex font-mic text-xl text-Whi/60 items-center justify-between px-5">
            <div className="flex gap-16">
              <Link to={"/about"}>About</Link>
              <Link className="flex items-center gap-1" to={"/activities"}>
                Activities <IoIosArrowDown className="text-3xl" />
              </Link>
              <Link to={"/community"}>Community</Link>
            </div>

            <div className="">
              <Link className="flex items-center gap-5 text-Whi" to={"/"}>
                <img
                  src="./logo_sq.png"
                  className="h-12 w-12 rounded-lg"
                  alt="logo"
                />
                <span>Ai CoLegion</span>
              </Link>
            </div>

            <div className="bg-Blu p-2 rounded-xl text-white">
              <Link className="" to={"/contact"}>
                Connect to us!
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
