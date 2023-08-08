import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ deration: 0.5 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="lgl:w-1/2 w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor trackin-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100% ' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe XD</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Design</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="lgl:w-1/2 w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor trackin-[4px]">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React Js</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100% ' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Node js</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">MongoDB (Mongoose)</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[800%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">MySql (Sequelize)</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Tailwind CSS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
