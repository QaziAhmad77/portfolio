import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { doctor, cart, movie, realEstate, todo } from '../../assets';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Doctor Appointment System"
          des="The Doctor Appointment System is built using the MERN technology stack,The app is a sophisticated and user-friendly application designed to streamline and enhance the process of scheduling medical appointments. "
          src={doctor}
          link="https://github.com/QaziAhmad77/Doctor-Appointment-system"
          url="https://github.com/QaziAhmad77/Portfolio"
        />
        <ProjectCard
          title="Shopping Cart"
          des='The "Shopping Cart" project is a user-friendly web application designed to provide a seamless and engaging online shopping experience. This application utilizes React.js, Bootstrap, HTML, and CSS to create an visually appealing platform for users '
          src={cart}
          link="https://github.com/QaziAhmad77/redux-cart"
          url="https://rtk-ecommerce-ten.vercel.app/"
        />
        <ProjectCard
          title="Movie App"
          des="The 'Movie App' is a captivating and feature-rich web application that caters to movie enthusiasts by providing them with a user-friendly platform. With a powerful technology stack that includes React.js with Redux, SASS, HTML, and integration with an external API for fetching movie data, "
          src={movie}
          link="https://github.com/QaziAhmad77/RTK-movies-site"
          url="https://movie-site-jade.vercel.app/"
        />
        <ProjectCard
          title="Real Estate Website"
          des="The 'Real Estate Website' is a visually appealing and user-centric web application designed to provide users with a seamless experience for exploring and discovering real estate properties. This project utilizes the Tailwind CSS framework and HTML to create a modern and responsive platform for users"
          src={realEstate}
          link="https://github.com/QaziAhmad77/tailwindCSS/tree/main/realEstateWebsite"
          url="https://tailwind-css-snowy.vercel.app/"
        />
        <ProjectCard
          title="Advance ToDo App"
          des="The 'Advanced ToDo App' is a feature-rich and interactive web application that takes task management to the next level. Built with React, Redux, and React Persist, this app offers users a powerful tool to organize their tasks, ensuring a seamless experience even across different sessions."
          src={todo}
          link="https://github.com/QaziAhmad77/toDoList"
          url="https://to-do-list-nine-woad.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
