import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3"/>
          <p className="mt-10 mb-7">
              I've worked on different projects that involves frontend and backend as well.
          </p>
        </motion.div>
        
          <div>
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <LinearProgress variant="determinate" value={50} />

              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <div>
              <img alt="js_logo"
              className="mr-2 inline w-[24px]"
               src="../assets/js_logo.svg"/>
              <p className="inline font-playfair">JavaScript</p>
            </div>
            )}
          </div>

      </div>

      {/* SKILL BARS */}
      <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={80}/>
        <span>80%</span>
      </div>
      
      
      <div className="mt-5">
      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="python_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/python_logo.svg"/>
          <p className="inline font-playfair">Python</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={70}/>
        <span>70%</span>
        </div>
        </motion.div>
      </div>
      
      <div className="mt-5">
      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="html_5_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/html_5_logo.svg"/>
          <p className="inline font-playfair">HTML</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={90}/>
        <span>90%</span>
        </div>
      </motion.div> 
      </div>

      <div className="mt-5">
      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="css3_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/css3_logo.svg"/>
          <p className="inline font-playfair">CSS</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={80}/>
        <span>80%</span>
        </div>
      </motion.div>
      </div>

      <div className="mt-5">
      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="react_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/react_logo.svg"/>
          <p className="inline font-playfair">React</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={90}/>
        <span>90%</span>
        </div>
      </motion.div>
      </div>

      <div className="mt-5">
      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="csharp_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/csharp_logo.svg"/>
          <p className="inline font-playfair">C#</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={60}/>
        <span>60%</span>
        </div>
      </motion.div>
      </div>

      <div className="mt-5">
      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="node_js_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/node_js_logo.svg"/>
          <p className="inline font-playfair">Node Js</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={70}/>
        <span>70%</span>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
