import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Education = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="education" className="pt-32 pb-16">
      {/* HEADING */}
      <div className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"> 
      <motion.div
        className="md:w-1/2 text-center md:text-left "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">EDU</span>CATION
          </p>
        <LineGradient width="mt-2 mx-auto w-2/4" />
        <p className="mt-10">
        I'm a mechatronic engineer,
        I studied in the school of engineering UNAM, I like data science, industrial engineering, backend programming, supply chain management and control automation also I've took the following courses: 
        </p>
        <p className="mt-10">
        - Introduction to Data Science: Statistical Programming with R - Coursera UNAM 
        </p>
        <p className="mt-2">
        - Diploma "Development of Managerial Skills" 240 h - FI UNAM 
        </p>
        <p className="mt-2">
        - White Belt Lean Six Sigma certification - International Lean Six Sigma 
        </p>
        
      </motion.div>

      {/* Education */}
      <div className="basis-3/5 z-10 mt-16 md:mt-20 flex justify-center md:order-2">
            
            {isAboveLarge ? (
          <div
            className="relative z-0 ml-20"
          >
            <img
              alt=""
              className="transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/escudo_fi_color.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/escudo_fi_color.png"
          />
        )}
       </div>
      </div>
    </section>
  );
};

export default Education;