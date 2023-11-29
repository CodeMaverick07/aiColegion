import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen bg-Pur z-10">
      <div className="flex text-white mx-10">
        <div className="w-48 h-48 m-5">
          <img src="./logo_large.png" alt="" />
        </div>
        <div className="m-5">
          <h1 className="text-4xl">
            Official Technical Club of AI & Data Science Dept.
          </h1>
          <h2 className="font-bold text-2xl">Quick Links</h2>
          <div className="grid grid-cols-4">
            <div className="flex flex-col justify-start ">
              <p>Council Members</p>
              <p>About</p>
              <p>Gallery</p>
              <p>Workshops</p>
              <p>Resources</p>
            </div>
            <div className="">
              <p>Events</p>
              <p>Hackathons</p>
              <p>Upcoming</p>
              <p>Announcements</p>
              <p>Worksops</p>
            </div>
            <div className="">
              <p>Community</p>
              <p>Sessions</p>
              <p>Marketplace</p>
              <p>Blog Posts</p>
              <p>Projects</p>
            </div>
            <div className="">
              <p>Instagram Page</p>
              <p>LinkedIn</p>
              <p>{"X (Twitter)"}</p>
              <p>Facebook</p>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
