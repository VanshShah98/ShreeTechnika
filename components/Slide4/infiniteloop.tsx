import Image from 'next/image';

const LOGOS = [
  { src: "/Abbot.svg", alt: "Abbot" },
  { src: "/Axtel.svg", alt: "Axtel" },
  { src: "/GEA.svg", alt: "GEA" },
  { src: "/Borosil.svg", alt: "Borosil" },
  { src: "/inductel.svg", alt: "inductel" },
  { src: "/Evonik.svg", alt: "Evonik" },
  { src: "/Tetra_Pak.svg", alt: "Tetra_Pak" },
];

// Duplicate the logos multiple times to extend the loop
const REPEATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]; // Adjust the number of repetitions as needed

export const InfiniteSlider = () => {
  return (
    <div className="relative z-1 m-auto w-5/6 lg:w-full overflow-hidden bg-slate-200 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:scale-x-[-1] after:bg-gradient-to-r after:from-white after:to-transparent after:content-['']">
      <div className="lg:h-32 animate-infinite-slider flex w-[calc(125px*28)]"> {/* Adjust the width calculation based on the number of repeated logos */}
        {REPEATED_LOGOS.map((logo, index) => (
          <div className="slide flex w-[125px] items-center justify-center" key={`logo-${index}`}>
            <Image src={logo.src} width={400} height={300} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
