import Title from '../layouts/Title';
import { contactImg } from '../../assets/index';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-auto py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact with Me" />
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg">
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
            <div className="text-base uppercase font-titleFont mb-4">
              <h2>Find me in</h2>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center "></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
