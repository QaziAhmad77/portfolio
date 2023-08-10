import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ deration: 0.5 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part one */}
      <div className="w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {' '}
            <h2 className="text-3xl md:text-4xl  font-bold">EXPERIENCE</h2>
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FRONTEND"
            subTitle="Gaining Proficiency and Passion in Frontend Development"
            des="While I may not possess formal industry experience, my journey in the realm of frontend development spans one enriching year. During this time, I have dedicated myself to honing my skills, building projects, and immersing myself in the intricacies of creating captivating user interfaces. My commitment to frontend craftsmanship is evident through the projects I have undertaken and the continuous growth I have achieved. I eagerly look forward to translating this passion into impactful contributions in the industry."
          />
        </div>
      </div>
      {/* Part two */}
      <div className="w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl  font-bold">EXPERIENCE</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BACKEND"
            subTitle="Forging a Strong Foundation in Backend Development"
            des="My journey into the realm of backend development began during my tenure at the University of Engineering and Technology (UET) Peshawar. As I approach the completion of my Bachelor's degree over the next two semesters, this voyage stands as a testament to my unwavering dedication to academic excellence and growth. With a focus on backend technologies, I am poised to channel my education and passion into meaningful contributions that drive innovation and efficiency."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
