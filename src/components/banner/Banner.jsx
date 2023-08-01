import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}


