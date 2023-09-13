import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Card = ({ title, des, icon }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      className="w-full h-80 px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
    >
      <div className="h-72 py-6 overflow-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-1000">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-base">{des}</p>
            <span className="text-2xl text-designColor">
              <a href="https://github.com/QaziAhmad77">
                {' '}
                <HiArrowRight />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
