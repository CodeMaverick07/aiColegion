import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const HeaderHome = () => {
  const path = window.location.pathname;
  console.log(path);
  return (
    <>
      <header className=" w-screen fixed z-10">
        <div className="mx-20 my-5 py-2 flex font-mic text-xl text-Whi/60 items-center justify-between px-5">
          <div className="text-xl flex gap-16">
            <Link
              className={`shadow ${path === "/about" && "text-white"}`}
              to={"/about"}
            >
              About
            </Link>
            <Link
              className={`flex items-center gap-1 shadow ${
                path === "/activities" && "text-white"
              }`}
              to={"/activities"}
            >
              Activities
              <IoIosArrowDown className="text-3xl" />
            </Link>
            <Link
              className={`${path === "/community" && "text-white"} shadow`}
              to={"/community"}
            >
              Community
            </Link>
          </div>

          <div className="mx-36">
            <Link
              to={"/"}
              className={`flex items-center gap-5 text-Whi shadow ${
                path === "/" && "text-white"
              } `}
            >
              <img
                src="./logo_sq.png"
                className="h-12 w-12 rounded-lg"
                alt="logo"
              />
              <span>Ai CoLegion</span>
            </Link>
          </div>
          <div>
            <div className="connect p-2">
              {" "}
              <Link
                to={"/contact"}
                className={`text-white/80 shadow ${
                  path === "/contact" && "text-white"
                } `}
              >
                Connect to us!
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
