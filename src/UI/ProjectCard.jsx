import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ data }) => {

  const { title, image, technologies, liveUrl, githubUrl } = data;

  return (
    <div className="shadow-xl shadow-[#ede9eb] bg-[#dbd5d8] border border-slate-400 rounded-[12px] flex flex-col ">
      {/* image */}
      <div className='p-1 w-[350px] h-[200px] md:w-[440px] md:h-[230px]'>
        <img className='object-cover rounded-t-xl  object-left-top w-full h-full' src={image} alt="" />
      </div>
      <div className='pl-2 text-xl font-semibold mt-[10px] '>{title}</div>
      <div className='pl-2 text-neutral-800 font-mono  '>
        {
          technologies.map((tech) => (
            <span
              key={tech}
              className=""
            >
              {tech}
            </span>
          ))
          
        }
      </div>
      <div className='flex justify-evenly mt-3 w-[350px] md:w-[440px] pb-2 text-white font-semibold text-xl  '>
        <a href={liveUrl} target='__blank' >
          <button className='transition-all ease-in-out duration-500 border  border-red-700 bg-gradient-to-r from-red-500 to-emerald-400 py-2 w-[170px] md:w-[210px] rounded-bl-lg flex justify-center items-center  hover:text-black'> <ExternalLink className='mr-2'/> Live Demo</button>
        </a> 
        <a href={githubUrl} target='__blank' >
          <button className='transition-all ease-in-out duration-500 border  border-red-700  bg-gradient-to-l from-red-500 to-emerald-400 py-2 w-[170px] md:w-[210px] rounded-br-lg flex justify-center items-center  hover:text-black'><Github className='mr-2'/> Source Code</button>
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;