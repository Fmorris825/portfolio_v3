import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="md:flex md:justify-between md:items-center md:h-full gap 16 py-10">
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-10 before:absolute before:-top-10 before:-left-10 before:[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 trasition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/portrait.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-150 trasition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/portrait.png"
          />
        )}
      </div>
    </section>
  );
};

export default Landing;
