/* eslint-disable react/no-unescaped-entities */
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { LuInstagram } from 'react-icons/lu';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer.',
      'Computer Systems Engineer.',
      'Passionate Programmer.',
    ],
    loop: true,
    typeSpeed: 20, // melisecond
    deleteSpeed: 10,
    delaySpeed: 2000, // 2 second
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 ">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{' '}
          <span className="text-designColor capitalize">Qazi Ahmad</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="true" cursorStyle="" cursorColor="#ff014f" />
        </h2>
        <p className="text-justify">
          Hello, I'm Ahmad, With over 1 year and 8 months of professional experience, I currently thrive as a Full Stack Developer at Apptex Software Solutions.
          My expertise spans across a versatile tech stack including React.js, Next.js, Tailwind CSS, Firebase, Node.js, MongoDB (with Mongoose), and MySQL (with Sequelize).
          I excel in designing and developing dynamic, responsive, and scalable web solutions that effectively address real-world challenges.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href=" https://www.linkedin.com/in/qazi-ahmad-b4124b203">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/QaziAhmad77">
                <BsGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.instagram.com/qazi_ahmad420/">
                <LuInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
