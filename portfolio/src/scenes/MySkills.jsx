import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
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
          <LineGradient width="w-1/3" />
          {/* <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p> */}
          <ul className="gap-6 columns-3 mt-10 mb-7 list-disc">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Python</li>
            <li>Django REST FrameWork</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Java</li>
            <li>Spring Framework</li>
            <li>Google Firebase</li>
            <li>AWS Relational Database</li>
            <li>AWS Amplify</li>
            <li>AWS Elastic Beanstalk</li>
            <li>MySql</li>
            <li>Postman</li>
            <li>Git</li>
            <li>Github</li>
            <li>Docker</li>
            <li>REST API's</li>
            <li>Web Services</li>
            <li>Agile Methodologies</li>
            <li>JSON</li>
            <li>Dev Ops</li>
            <li>Responsive Design</li>
            <li>Document Object Model (DOM)</li>
          </ul>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Creative Focus */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Creative Focus
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            When creating an application, I focus on{" "}
            <span className="text-blue">user friednliness</span>, while also
            being able to produce{" "}
            <span className="text-blue">maintainable</span> and{" "}
            <span className="text-blue">reusable</span> code that is made to be{" "}
            <span className="text-blue">scalable</span> and{" "}
            <span className="text-blue">
              have the ability to be expanded upon
            </span>
            .
          </p>
        </motion.div>

        {/* Aptitude 4 Learning */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Aptitude 4 Learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am a <span className="text-red">fast-paced learner</span> who does
            well in <span className="text-red">goal-oriented environments</span>
            , that is able to learn technologies and skills on the go. I am self
            taught when it comes to mutliple technologies such as{" "}
            <span className="text-red">AWS</span>,{" "}
            <span className="text-red">Google Firebase</span>,{" "}
            <span className="text-red">Docker</span> and others.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Background
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am prior{" "}
            <span className="text-yellow">
              Wildife & Conservation Biologist
            </span>{" "}
            which due to some unfortunate life events had to turn away form
            something i greatly enjoyed, but redirected myself to a{" "}
            <span className="text-yellow">
              new found passion of creating with code
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
