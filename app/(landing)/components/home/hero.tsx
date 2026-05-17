import Image from "next/image";
import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto py-20 flex">
      <div className="relative self-center w-full">

        <Image
          src="/images/img-basketball.svg"
          width={350}
          height={340}
          alt="image sporton"
          className="grayscale absolute left-10 top-3"
        />

        <div className="relative ml-50 mt-20 max-w-[650px]">
          <div className="text-primary italic">Friday Sale, 50%</div>

          <h1 className="font-extrabold text-[72px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> 
            TOP-QUALITY <br /> 
            SPORTSWEAR
          </h1>

          <p className="w-[420px] mt-6 leading-loose text-gray-600">
            Engineered for endurance and designed for speed. Experience gear 
            that moves as fast as you do. Premium fabrics. Unmatched comfort. 
            Limitless motion.
          </p>

          <div className="flex gap-5 mt-10">
            <Button>
              Explore More <FiFastForward />
            </Button>

            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>

        <Image
          src="/images/img-hero.svg"
          width={520}
          height={700}
          alt="image sporton hero"
          className="absolute right-30 top-1/2 -translate-y-1/2"
        />

        <Image
          src="/images/img-ornament-hero.svg"
          width={350}
          height={350}
          alt="image sporton"
          className="absolute -right-[220px] top-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default HeroSection;