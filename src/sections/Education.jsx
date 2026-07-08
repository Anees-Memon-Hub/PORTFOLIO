import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-28 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Education
        </p>

        <h2 className="text-5xl font-bold mt-3 mb-20">
          My Academic Journey
        </h2>

        <div className="relative border-l-2 border-cyan-500 pl-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 relative"
          >

            <div className="absolute -left-[60px] bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">

              <FaGraduationCap className="text-white"/>

            </div>

            <h3 className="text-3xl font-bold">
              Bachelor of Science in Computer Science
            </h3>

            <p className="text-cyan-400 mt-2">
              Sukkur IBA University
            </p>

            <p className="text-gray-400 mt-5 leading-8">
              Currently pursuing a Bachelor's degree in Computer Science,
              focusing on Artificial Intelligence, Software Engineering,
              Database Systems, and Full Stack Development.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;