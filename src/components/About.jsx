import { name } from "../util/constant";
import profilepic from "../assets/images/alisha.jpg";
import instaLogo from "../assets/images/instaLogo.png";
import ytLogo from "../assets/images/youtubeLogo.png";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
    <div className="flex justify-center  items-center flex-col   py-10 bg-neutral-300 ">
      {/* About Me Section */}

      <div className="border border-[#e067a0] rounded-full  shadow-lg shadow-[#6e6a6c] ">
          <img
            className=" w-[150px] h-[150px] rounded-full"
            src={profilepic}
            alt=""
          />
        </div>

      <div className=" flex md:flex-row gap-x-10 flex-col mt-10 justify-center   items-center">

        <div
          className=" pb-10 w-fit md:w-[600px] shadow-lg shadow-[#cac6c6] rounded-[50px] gap-y-4 pt-4
         flex flex-col justify-center  text-center px-4 "
        >
          <div className=" text-3xl font-bold underline underline-offset-8 text-red-500">
            Hi, I'm Alihsa
          </div>
          <div className="text-lg md:text-xl font-bold font-mono">
            Software Engineer▪️Tech Blogger
          </div>

{/* socail icons */}
          <div className=" flex flex-row justify-evenly items-center py-4 rounded-b-[30px] ">


{/* instagram*/}
            <div className="font-mono text-lg flex flex-col justify-center items-center">
              
              <div className="w-[60px] h-[60px]">
                <img className="w-full h-full object-contain" src={instaLogo} alt="" />
              </div>

              <div className="mt-2 px-2 py-1 rounded-lg">
                @{name}
              </div>
              <a href="https://www.instagram.com/alisha_codes/" target="__blank">
              <div className="transition-all ease-in-out duration-500 text-lg  hover:bg-blue-500 bg-blue-200 mt-4 w-[100px] md:w-[200px] border-[2px] border-blue-600 font-extrabold rounded-s-sm rounded-e-lg">visit</div>
              </a>
            </div>

{/* youtube */}
            <div className="font-mono text-lg flex flex-col justify-center items-center">
              
              <div className="w-[60px] h-[60px]">
                <img className="w-full h-full object-contain" src={ytLogo} alt="" />
              </div>

              <div className="mt-2   px-2 py-1 rounded-lg">
                tech with alisha
              </div>
              <a href="https://www.youtube.com/channel/UC7p6XhpzCECyfurMuUYlVOw" target="__blank">
              <div className= "transition-all ease-in-out duration-500 text-lg  hover:bg-red-500 bg-red-200 mt-4 w-[100px] md:w-[200px] border-[2px] rounded-s-lg rounded-e-sm border-red-600 font-extrabold">visit</div>
              </a>
              
            </div>
            
            

          </div>

        </div>
      </div>

      {/* Skills Section */}
      {/* <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default About;
