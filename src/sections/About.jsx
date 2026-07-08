import { motion } from "framer-motion";
import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Turning Ideas into Intelligent Software
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-9 max-w-4xl">
            I'm Muhammad Anees, a Computer Science student passionate about
            Artificial Intelligence, Machine Learning, and Full Stack
            Development. I enjoy designing scalable applications,
            solving real-world problems, and continuously learning
            modern technologies.
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-9 max-w-4xl">
            My goal is to become a software engineer capable of building
            impactful AI products that improve people's lives while writing
            clean, maintainable, and efficient code.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
          >

            <FaBrain className="text-5xl text-cyan-400 mb-6"/>

            <h3 className="text-2xl font-bold mb-4">
              Artificial Intelligence
            </h3>

            <p className="text-gray-400 leading-8">
              Building intelligent systems using Machine Learning,
              Natural Language Processing, and modern AI tools.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
          >

            <FaLaptopCode className="text-5xl text-cyan-400 mb-6"/>

            <h3 className="text-2xl font-bold mb-4">
              Full Stack Development
            </h3>

            <p className="text-gray-400 leading-8">
              Creating responsive web applications using React,
              FastAPI, MongoDB, SQL, and modern web technologies.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
          >

            <FaCode className="text-5xl text-cyan-400 mb-6"/>

            <h3 className="text-2xl font-bold mb-4">
              Problem Solving
            </h3>

            <p className="text-gray-400 leading-8">
              Strong interest in algorithms, software engineering,
              and building efficient solutions to challenging problems.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;