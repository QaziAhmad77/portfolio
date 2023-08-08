import { useState } from 'react';
import Title from '../layouts/Title';
import Achievement from './Achievement';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
const Resume = () => {
  const [educationData, setEduationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className='className="w-full py-20 border-b-[1px] border-b-black'
    >
      <div className="flex justify-center items-center text-center">
        <Title title="1 YEAR OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEduationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
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
              setExperienceData(false) &
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
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEduationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
