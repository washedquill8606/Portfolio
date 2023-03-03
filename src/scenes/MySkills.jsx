import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:my-8 md:gap-16 mt-32">
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
          <p className="font-playfair font-semibold text-4xl mb-5 mt-10">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3"/>
          <p className="mt-10 mb-7 text-xl">
            These are the languages and frameworks that I've worked with.
          </p>
        </motion.div>
      </div>

      {/* SKILL BARS */}
      <div className="mt-5">
      <motion.div
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, /*delay:1*/ }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="js_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/js_logo.svg"/>
          <p className="inline font-playfair">Javascript</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={80}/>
        <span>80%</span>
        </div>
        </motion.div>
      </div>
      
      
      <div className="mt-5">
      <motion.div
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, /*delay:1*/ }}
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
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, /*delay:1*/ }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="django_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/django_logo.svg"/>
          <p className="inline font-playfair">Django</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={80}/>
        <span>80%</span>
        </div>
        </motion.div>
      </div>

      <div className="mt-5">
      <motion.div
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, /*delay:1*/ }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

        <img alt="fastapi_logo"
          className="mr-2 inline w-[24px]"
          src="../assets/fastapi_logo.svg"/>
          <p className="inline font-playfair">FastAPI</p>

        <div className="mt-5">
        <LinearProgress className="w-7/8 mb-2" variant="determinate" value={40}/>
        <span>40%</span>
        </div>
        </motion.div>
      </div>
      
      <div className="mt-5">
      <motion.div
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, }}
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
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, }}
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
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5,  }}
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
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5,  }}
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
          className="md:w-7/8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5,  }}
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
