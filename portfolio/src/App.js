import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup.jsx";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOFPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOFPage={isTopOFPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
    </div>
  );
}

export default App;
