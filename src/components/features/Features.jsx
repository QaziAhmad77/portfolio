import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe, FaBars } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus, consequuntur alias ullam in architecto! Alias eius ipsam dolore ad!"
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus, consequuntur alias ullam in architecto! Alias eius ipsam dolore ad!"
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus, consequuntur alias ullam in architecto! Alias eius ipsam dolore ad!"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus, consequuntur alias ullam in architecto! Alias eius ipsam dolore ad!"
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus, consequuntur alias ullam in architecto! Alias eius ipsam dolore ad!"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus, consequuntur alias ullam in architecto! Alias eius ipsam dolore ad!"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export { Features };
