import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
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
            <h2 className="text-3xl md:text-4xl  font-bold">EDUCATION</h2>
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Matric"
            subTitle="Iqra Huffaz Secondary School Warsak Road Peshawar (2007 - 2018)"
            result="900/1100"
            des="My academic journey took root at Huffaz Secondary School on Warsak Road in Peshawar, where I spent formative years from 2007 to 2018. This institution provided more than just education"
          />
          <ResumeCard
            title="Intermediate (Pre-Engineering)"
            subTitle="Government College Peshawar (2018 - 2020)"
            result="895/1100"
            des="From 2018 to 2020, I embarked on a transformative academic phase at Government College Peshawar. Beyond the pursuit of knowledge, this institution became a crucible for my personal and intellectual growth."
          />
        </div>
      </div>
      {/* Part two */}
      <div className="w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl  font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor (BSc)"
            subTitle="University Of Engineering And Technology Peshawar (2020 - 2024)"
            result="3.19/4"
            des="My ongoing pursuit of knowledge at the University of Engineering and Technology (UET) Peshawar began in 2020 and has already encompassed six enriching semesters. As I stand on the cusp of completing my Bachelor's degree in the coming two semesters, this journey symbolizes my commitment to academic excellence and growth. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
