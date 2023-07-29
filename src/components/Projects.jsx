import Title from './layouts/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree } from '../assets';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quo!L"
          src={projectThree}
        />
        <ProjectCard
          title="E-commerce Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quo!L"
          src={projectOne}
        />
        <ProjectCard
          title="Chatting App"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quo!L"
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
