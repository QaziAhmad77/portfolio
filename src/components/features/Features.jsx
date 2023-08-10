import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiFrontendmentor, SiBackendless } from 'react-icons/si';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Turning designs into captivating realities through elegant frontend development. Let's create a seamless, user-centric web experience together."
          icon={<SiFrontendmentor />}
        />
        <Card
          title="Backend Development"
          des="Mastering backend intricacies to fuel seamless user experiences. Let's empower your digital vision with efficient, data-driven solutions."
          icon={<SiBackendless />}
        />
        <Card
          title="Hosting Websites"
          des="Transforming concepts into live websites. Seamlessly bridging design and functionality for a captivating online presence."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export { Features };
