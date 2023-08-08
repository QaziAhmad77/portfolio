import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

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
          Hello, my name is Ahmad and I am a MERN stack developer. I specialize
          in building full-stack web applications using MongoDB, Express.js,
          React, and Node.js. With my expertise in these technologies, I am able
          to design and develop dynamic web applications that are responsive,
          scalable, and efficient. I am doing Computer Systems Engineering from
          UET Peshawar and I am passionate about using technology to solve
          real-world problems.|
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skill On
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
