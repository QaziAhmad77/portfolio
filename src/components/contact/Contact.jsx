import { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

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
          <ContactLeft />
          <ContactRight/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
