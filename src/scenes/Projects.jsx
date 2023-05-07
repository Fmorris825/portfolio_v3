import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, descritpion, fileName, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-4xl font-playfair">{title}</p>
        <p className="mt-7 text-2xl">{descritpion}</p>
        <a
          target="_blank"
          className="mt-6 text-3xl underline hover:text-yellow transition duration-500  text-sky-800 font-playfair"
          href={link}
        >
          Check out live site
        </a>
      </div>
      <img src={`../assets/${fileName}.png`} alt={fileName} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Below are some projects and applications that are from my Education
          and some that I have done recently while doing some Freelance work.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Enterprise Application Interfaces
          </div>
          <Project
            title="Morris Delta Realty"
            fileName="MdrLanding"
            descritpion="Enterprise Application for a realty firm."
            link="morrisdeltarealty.com"
          />
          <Project
            title="StreamlineDashboard"
            fileName="StreamlineLanding"
            descritpion="Dashboard Application to improve application and feature build times within projects."
            link="https://dashboard-demo-git-main-fmorris825.vercel.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Morris Delta Realty"
            fileName="MdrViewer"
            descritpion="Property viewing component to let clients browse photos and information about properties."
            link="morrisdeltarealty.com"
          />
          <Project
            title="StreamlineDashboard"
            fileName="StreamlineSelect"
            descritpion="Project selection component to organize tasks between applications."
            link="https://dashboard-demo-git-main-fmorris825.vercel.app/"
          />
          <Project
            title="Morris Delta Realty"
            fileName="MdrCrud"
            descritpion="Full CRUD functionality to connect to database hosted through AWS cloud services."
            link="morrisdeltarealty.com"
          />

          {/* ROW 3 */}
          <Project
            title="StreamlineDashboard"
            fileName="StreamlineProject"
            descritpion="Allows users CRUD functionality for tasks within projects to make planning more efficient."
            link="https://dashboard-demo-git-main-fmorris825.vercel.app/"
          />
          <Project
            title="Morris Delta Realty"
            fileName="MdrMap"
            descritpion="Allows clients to search neighborhood and view areas around properties via Google Maps API."
            link="morrisdeltarealty.com"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Professional & Clean Functionality
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
