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
            subTitle="Experienced in React.js, Nextt.js, Tailwind CSS, and other UI libraries"
            des="With 1.5 years of dedicated experience in frontend development, I have cultivated a strong foundation in creating captivating user interfaces. My journey has been marked by hands-on work with React.js, Next.js, Tailwind CSS, Framer Motion, and various other UI libraries. This practical experience is complemented by my current role as a Full Stack Developer at Apptex Software Solutions, where I continue to refine my skills and contribute to innovative projects. My commitment to frontend craftsmanship and continuous growth is evident through the diverse projects I have undertaken, and I am eager to translate this passion into impactful contributions in the industry."
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
            subTitle="Experienced in Node.js, Firebase, MongoDB, and MySQL"
            des="With 1.5 years of hands-on experience in backend development, I specialize in Node.js with frameworks like Express, and databases including Firebase Realtime Database, MongoDB with Mongoose, and MySQL with Sequelize. Currently leveraging Firebase for ongoing projects, I am dedicated to delivering robust backend solutions that enhance efficiency and drive innovation."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
