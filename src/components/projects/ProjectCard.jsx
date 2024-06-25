/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const ProjectCard = ({ title, des, src, link, url, isPrivate, isLive }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
      >
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt=""
          />
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
                {title}
              </h3>

              <div className="flex gap-2">
                {isPrivate ? (
                  <span
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 duration-300 cursor-not-allowed"
                    data-tooltip-id="my-tooltip1"
                    data-tooltip-content="This project is private! see live"
                    data-tooltip-variant="light"
                    data-tooltip-offset={10}
                  >
                    <BsGithub />
                  </span>
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                )}
                <Tooltip
                  effect="solid"
                  id="my-tooltip1"
                  style={{ padding: '6px' }}
                />
                {isLive ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span
                      className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                      data-tooltip-id="my-tooltip2"
                      data-tooltip-content="This project is not live !"
                      data-tooltip-variant="error"
                      data-tooltip-offset={10}
                    >
                      <FaGlobe />
                    </span>
                  </a>
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                )}
                <Tooltip
                  effect="solid"
                  id="my-tooltip2"
                  style={{ padding: '6px' }}
                />
              </div>
            </div>
            <p className="text-sm text-justify tracking-wide mt-3 hover:text-gray-100 transition-max-height max-h-clamp hover:max-h-full">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
