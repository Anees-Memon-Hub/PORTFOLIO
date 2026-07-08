import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold mb-4">
          Anees
        </h1>

        <h2 className="text-2xl text-gray-300 mb-6">
          Computer Science Student • AI & Software Developer
        </h2>

        <p className="text-gray-400 text-lg leading-8">
          I build intelligent applications, modern web experiences,
          and software that solves real-world problems.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold">
            View Projects
          </button>

          <button className="border border-cyan-500 hover:bg-cyan-500 transition px-6 py-3 rounded-xl font-semibold">
            Download Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;