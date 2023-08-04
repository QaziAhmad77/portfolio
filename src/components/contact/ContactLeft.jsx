import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { contactImg } from "../../assets"

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center">
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src={contactImg}
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Qazi Ahmad</h3>
              <p className="text-lg font-normal text-gray-400">
                MERN Stack Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, iste!
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+92 3331602121</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{' '}
                <span className="text-lightText">qaziahmad2233@gmail.com</span>
              </p>
            </div>
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
          </div>
  )
}

export default ContactLeft
