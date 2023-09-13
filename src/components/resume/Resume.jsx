import { useState } from 'react';
import Title from '../layouts/Title';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  const [educationData, setEduationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setAchievementData] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      id="resume"
      className='className="w-full py-20 border-b-[1px] border-b-black'
    >
      <div className="flex justify-center items-center text-center">
        <Title title="1 YEAR OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>
              setEduationData(true) &
              setSkillData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEduationData(false) &
              setSkillData(true) &
              setAchievementData(false)
            }
            className={`${
              skillData ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEduationData(false) &
              setSkillData(false) &
              setAchievementData(true)
            }
            className={`${
              experienceData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
