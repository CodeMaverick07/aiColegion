import React from "react";

import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <div className="bg-pattern bg-fixed bg-cover">
        <div className="w-screen h-screen pt-16">
          <div className="grid grid-cols-5">
            <div className="px-28 col-span-2 ">
              {" "}
              <img
                className="h-[700px] w-[400px]"
                src="./glass_girl.png"
                alt="glass_girl"
              />
            </div>
            <div className="col-span-3 my-36">
              <div className="pl-16">
                <h2 className="text-Whi/60 font-mic text-2xl">
                  Welcome to world of AI with
                </h2>
                <h1 className="text-7xl font-syne font-extrabold text-Whi tracking-wide">
                  Ai CoLegion
                </h1>
                <div className="h-1 w-48 mb-4 bg-Gr"></div>
              </div>

              <div className="flex">
                <img src="./braket.png" alt="braket" className="w-[130px]" />
                <span className="text-xl w-[600px] -ml-8 mt-2 text-white/60">
                  8 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc elementum magna eget dui varius porta. Fusce in est vel
                  mi lobortis dictum ac eu nisl. Donec placerat, nunc et
                  vulputate commodo, sem est porttitor nisi, vitae luctus sem
                  nunc eget dui. Phasellus et gravida arcu, eu venenatis lorem.
                  Nunc elit quam, placerat vel efficitur at, accumsan at massa.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-screen ">
          <div className="h-screen grid grid-cols-5">
            <div className="col-span-3 ml-20">
              <h1 className="text-white text-5xl font-mic mb-2 mt-20">
                Exciting Events
              </h1>
              <div className="h-1 w-72 mb-4 bg-Gr "></div>
              <div class="grid grid-rows-7 grid-cols-2 gap-4 pt-4 h-4/5">
                <div class="row-span-3 col-span-1 backdrop-blur-sm bg-Whi/10 border border-white/50 rounded-lg p-4"></div>

                <div class="row-span-4 col-span-1 backdrop-blur-sm bg-white/10 border border-white/50 rounded-lg p-4"></div>

                <div class="row-span-4 col-span-1 backdrop-blur-sm bg-white/10 border border-white/50  rounded-lg p-4"></div>

                <div class="row-span-3 col-span-1 backdrop-blur-sm bg-white/10 border border-white/50 rounded-lg p-4"></div>
              </div>
            </div>
            <div className="col-span-2">
              <img
                src="./hand.png"
                alt="hand"
                className="w-[850px] pt-36 ml-20 -rotate-[9deg] "
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-screen px-24">
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <img
                src="./astro.png"
                alt="astro"
                className="w-[500px] pt-[154px] -mx-20"
              />
            </div>
            <div className="col-span-3 bg-pink-40 my-36">
              <div className="flex justify-end">
                <h1 className="text-5xl font-mic text-Whi">Recent Updates</h1>
              </div>
              <div className="flex justify-end my-3">
                <div className="h-1 w-72 mb-4 bg-Gr"></div>
              </div>
              <div className="flex justify-end h-full">
                <div className="grid grid-rows-4 grid-cols-7  w-[800px] gap-3">
                  <div className="col-span-1 row-span-1"></div>
                  <div className="rounded-xl col-span-6 row-span-1 backdrop-blur-sm bg-Whi/10 border border-white/50 p-4"></div>
                  <div className="col-span-3 row-span-1"></div>
                  <div className="rounded-xl col-span-4 row-span-1 backdrop-blur-sm bg-Whi/10 border border-white/50 p-4"></div>
                  <div className="col-span-2 row-span-1"></div>
                  <div className="rounded-xl col-span-5 row-span-1 backdrop-blur-sm bg-Whi/10 border border-white/50 p-4"></div>
                  <div className="col-span-3 row-span-1"></div>
                  <div className="rounded-xl col-span-4 row-span-1 backdrop-blur-sm bg-Whi/10 border border-white/50 p-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
