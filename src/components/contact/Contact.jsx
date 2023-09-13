import { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="contact"
      className="w-full h-auto py-20 border-b-[1px] border-b-black"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center items-center text-center"
      >
        <Title title="CONTACT" des="Contact with Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
