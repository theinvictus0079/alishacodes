import React from "react";
import { projects } from "../util/usePortfolioCard";
import ProjectCard from "../UI/ProjectCard";
import { name } from "../util/constant";


const Home = () => {
  const portfolioWebsites = projects;

  return (
    <div className="w-screen  flex flex-col items-center justify-center pb-12">
      <div className="flex flex-col gap-y-6 items-center justify-center space-y-4">
        <div className=" font-mono w-fit bg-gradient-to-r from-red-600  to-emerald-700 text-center text-white md:text-lg font-bold px-10 md:px-20 py-2 rounded-full">
          by @<span className="ml-1">{name}</span>
        </div>
        {/* Your Shortcut to Stunning */}

        <div className="md:px-0 px-6 text-center  text-xl md:text-4xl font-bold ">
          Your Shortcut to Stunning
          <span className="bg-gradient-to-r from-red-600  to-red-900 text-transparent bg-clip-text ml-2">
            Portfolios & UI Magic!
          </span>
        </div>
      </div>

      {/* Portfolio Webiste Cards */}
      <div className="mt-12  pb-20">

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-10"> 
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project}/>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
