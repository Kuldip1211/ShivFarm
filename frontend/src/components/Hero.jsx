import { assets } from "../assets/assets";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { motion } from "framer-motion";

const Hero = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
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
      <div className="flex flex-wrap justify-evenly py-10 bg-light poppins-medium">
        {/* Card 1: Best Plants */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CCard style={{ width: "22rem", height: "30rem" }} className="shadow">
            <CCardImage
              orientation="top"
              className="p-2"
              src="https://plus.unsplash.com/premium_photo-1673203734665-0a534c043b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnR8ZW58MHx8MHx8fDA%3D"
            />
            <CCardBody className="flex-row justify-between h-full ">
              <CCardTitle className="text-center my-3 text-xl font-semibold text-green-400 bg-gray-50">
              <span className="poppins-bold text-black text-2xl bg-gray-200 px-5 py-1">Best</span>  Plants
              </CCardTitle>

              <CCardText className="p-2 text-center mb-8 poppins-regular">
                Discover a variety of beautiful plants to enhance your home and
                garden. Shop our collection now.
              </CCardText>
              <CButton
                color="primary"
                className=" bg-blue-200 p-2 rounded-sm ml-4" 
                href="#"
              >
                Learn More
              </CButton>
            </CCardBody>
          </CCard>
        </motion.div>

        {/* Card 2: Best Fertilizers */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CCard style={{ width: "22rem", height: "30rem" }} className="shadow">
            <CCardImage
              orientation="top"
              className="p-2"
              src="https://plus.unsplash.com/premium_photo-1677756428830-2b1f94657596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlcnRpbGl6ZXJ8ZW58MHx8MHx8fDA%3D"
            />
            <CCardBody className="flex-row justify-evenly relative">
              <CCardTitle className="text-center my-3  text-xl font-semibold text-green-400 bg-gray-50">
              <span className="poppins-bold text-black text-2xl bg-gray-200 px-5 py-1">Best</span> Fertilizers
              </CCardTitle>
              <CCardText className="p-2 text-center mb-9 poppins-regular">
                Give your plants the nutrients they need with our premium
                selection of fertilizers.
              </CCardText>
              <CButton
                color="primary"
                className="relative top-5 left-4 bg-blue-200 p-2 rounded-sm"
                href="#"
              >
                Explore Now
              </CButton>
            </CCardBody>
          </CCard>
        </motion.div>

        {/* Card 3: Professional Advice */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <CCard style={{ width: "22rem", height: "30rem" }} className="shadow">
            <CCardImage
              orientation="top"
              className="p-2"
              src="https://media.istockphoto.com/id/1301128630/photo/young-handsome-agronomist-and-farmer-inspecting-cotton-field-with-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=tZMuozm5V7PiITREFAiHUAD63AtsOp3deKa8VE6nGiA="
            />
            <CCardBody className="flex-row justify-evenly ">
              <CCardTitle className="text-center my-3  text-xl font-semibold text-green-400 bg-gray-50">
                <span className="poppins-bold text-black text-2xl bg-gray-200 px-5 py-1">Professional</span> Advice
              </CCardTitle>
              <CCardText className="p-2 text-center mb-8 poppins-regular">
                Need help? Our gardening experts are here to provide tips and
                guidance for your plants.
              </CCardText>
              <CButton
                color="primary"
                className="flex-col justify-center items-end bg-blue-200 p-2 rounded-sm ml-4"
                href="#"
              >
                <span>Get Advice</span>
              </CButton>
            </CCardBody>
          </CCard>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
