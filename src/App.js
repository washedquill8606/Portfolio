import Navbar from "./scenes/Navbar";
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects"
import MySkills from "./scenes/MySkills";
import Footer from "./scenes/Footer";
import { motion } from "framer-motion";
import LineGradient from "./components/LineGradient";

function App() {
  
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("min-width: 1060px");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
           <DotGroup
           selectedPage={selectedPage}
           setSelectedPage={setSelectedPage}
         />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
          <Projects/>
      </div>
    </div>
  );
}

export default App;
