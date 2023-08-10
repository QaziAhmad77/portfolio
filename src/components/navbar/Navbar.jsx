import { Link } from 'react-scroll';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" w-full h-24 mx-auto  flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 sticky top-0 z-50 bg-bodyColor">
      <div>
        <img className="w-[70px] h-[70px] rounded-full" src={logo} alt="" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-back w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias similique natus totam iste excepturi rerum
                  cupiditate quisquam in pariatur quo?
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
