import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-10 sm:py-0">
        <div className="text-[#414141] max-w-lg">
          {/* Header */}
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              Discover Our Best Plants
            </p>
          </div>
          {/* Main Heading */}
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Fresh Arrivals
          </h1>
          {/* Subheading */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <p className="font-semibold text-sm md:text-base">
              Shop our newest collection of plants, pots, and gardening tools.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <video
          className="w-full h-auto md:h-[300px] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={assets.gettyimages} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
