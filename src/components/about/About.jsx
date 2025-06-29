import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-auto w-full flex flex-warp font-serif flex-col items-center mt-10 md:mt-10 ">
      <div className="font-extrabold text-4xl text-red-950 "> About me!</div>
      <div className="flex max-md:flex-wrap justify-center gap-5 lg:gap-24 md:gap-10 ">
        <img
          className="lg:h-100 lg:w-100 h-80 w-80 md:mt-8 md:ml-10 sm:ml-5 mt-10 rounded-t-full "
          src="./Images/profile.jpg"
          alt=""
        />
        <div className="text-justify md:text-balance sm:mr-5 md:mr-10 mx-5 flex max-md:items-center flex-col">
          <p className="md:h-auto text-wrap lg:mt-20 md:mt-20 mt-10 text-[#000f28] md:max-w-200 font-serif md:font-mono text-md m-2 md:text-xl">
            Hi! I’m Subhash Kumar, a passionate and detail-oriented Frontend
            Developer with a strong foundation in HTML, CSS, JavaScript, and
            modern libraries like React and Tailwind CSS. As a fresher, I’m
            constantly learning and building responsive, user-friendly web
            applications. I love turning ideas into real, interactive websites
            and enjoy solving problems through clean, efficient code. I’m
            currently looking for opportunities to work in a collaborative
            environment where I can grow my skills and contribute to real-world
            projects.
            <br />
            Let’s build something amazing together!
          </p>
          <button className="w-40 h-10 text-[18px] font-bold rounded-full text-[#ffffff]  mt-4 md:mt-8 md:mb-4 ml-2 cursor-pointer bg-gradient-to-r md:block hidden from-[#030124] to-[#b1a8d6]">
            More about me
          </button>
          <Link to="https://drive.google.com/file/d/1FL9z4UU7b9qMhSE9sZQ3os3B-pPyNrnX/view?usp=sharing">
          <button className="w-40 h-10 text-[18px] font-bold rounded-full text-[#ffffff] md:hidden  mt-4 md:mt-10 mb-3 cursor-pointer bg-gradient-to-r from-[#030124] to-[#b1a8d6]">
            Download CV
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
