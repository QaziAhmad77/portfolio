import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ deration: 0.5 }}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor trackin-[4px]">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="University of UVI (2005 - 2010)"
            subTitle="Kingstart Secondary School (1998 - 2000)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectores of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an acadic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstart Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor trackin-[4px]">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="University of UVI (2005 - 2010)"
            subTitle="Kingstart Secondary School (1998 - 2000)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectores of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an acadic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstart Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
