import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-24 right-24 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-cyan-500/30 mb-8">

            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>

            <p className="text-cyan-400 text-sm font-medium">
              Available for Opportunities
            </p>

          </div>

          {/* Heading */}

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">

            Muhammad{" "}

            <span className="text-cyan-400">
              Anees
            </span>

          </h1>

          {/* Subtitle */}

          <h2 className="mt-6 text-3xl text-gray-300 font-medium">
            Computer Science Student
          </h2>

          <p className="mt-3 text-xl text-cyan-400">
            AI Engineer • Full Stack Developer
          </p>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg text-gray-400 leading-9">

            I design and build intelligent software, AI-powered
            applications, and modern web experiences focused on
            performance, usability, and solving real-world problems.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold
              hover:bg-cyan-400 hover:-translate-y-1
              transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              View Projects →
            </button>

            <button
              className="px-8 py-4 border border-cyan-500 rounded-xl font-semibold
              hover:bg-cyan-500 hover:-translate-y-1
              transition-all duration-300"
            >
              Download Resume ↓
            </button>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10 text-2xl">

            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}

          <div className="flex gap-16 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">12+</h2>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">10+</h2>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">2+</h2>
              <p className="text-gray-400 mt-2">Certificates</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-25"></div>

            <div
              className="relative w-[420px] h-[420px]
              rounded-full border-4 border-cyan-400
              bg-slate-800 flex items-center justify-center
              text-7xl font-bold text-cyan-400"
            >
              MA
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;