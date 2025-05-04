import React from "react";

function Home() {
  return (
    <div className="flex flex-row md:flex-col flex-wrap w-full h-120 pt-20 ">  
      <div className="bg-gradient-to-r from-[#000407]  via-[#27425e] to-[rgb(94,172,236)]  md:w-200 rounded-e-full md:h-80 h-50 w-90 md:mx-20 mx-8 p-8 md:p-7 ">
        <p className="md:text-[30px] text-[#f5dbf5]  text-[12px] font-serif ">
          Hello,It's Me{" "}
        </p>
        <h1 className="text-[#ccaeed] md:text-5xl text-[20px] font-semibold md:mt-2  font-serif ">
          Subhash Kumar
        </h1>
        <p className="text-[#fffbff] md:pt-9 pt-4 md:text-4xl text-xl font-mono">
          Frontend Developer | Debugger
        </p>
      </div>
      <div className="md:max-h-130 md:max-w-130 h-80 w-80 mt-15 md:mt-0">
        <img
          className=" rounded-full  md:ml-0 ml-10 flex flex-wrap flex-col"
          src="./Images/profile.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
