import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ data }) => {

  const { title, image, technologies, liveUrl, githubUrl } = data;

  return (
    <div className="shadow-lg shadow-slate-400  rounded-b-lg flex flex-col ">
      {/* image */}
      <div className='w-[350px] h-[200px] md:w-[440px] md:h-[230px]'>
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
      <div className='flex justify-evenly mt-3 w-[350px] md:w-[440px] pb-2 text-white '>
        <a href={liveUrl} target='__blank' >
          <button className='bg-gradient-to-r from-red-500 to-emerald-400 py-2 w-[170px] md:w-[210px] rounded-bl-lg flex justify-center items-center font-semibold  text-xl'> <ExternalLink className='mr-2'/> Live Demo</button>
        </a> 
        <a href={githubUrl} target='__blank' >
          <button className='bg-gradient-to-l from-red-500 to-emerald-400 py-2 w-[170px] md:w-[210px] rounded-br-lg flex justify-center items-center font-semibold text-xl'><Github className='mr-2'/> Source Code</button>
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;