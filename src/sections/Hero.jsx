import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute right-20 top-40 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="text-cyan-400 font-semibold mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="text-6xl lg:text-8xl font-black leading-tight"
          >
            Muhammad{" "}
            <span className="text-cyan-400">
              Anees
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-6 text-3xl text-gray-300"
          >
            Computer Science Student
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-2 text-xl text-cyan-400"
          >
            AI Engineer • Full Stack Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="mt-8 text-gray-400 leading-9 text-lg max-w-xl"
          >
            I design and build intelligent software, AI-powered
            applications, and modern web experiences that solve
            real-world problems through clean code and thoughtful
            engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-5 flex-wrap"
          >

            <button className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/20">

              View Projects →

            </button>

            <button className="border border-cyan-500 hover:bg-cyan-500 hover:scale-105 duration-300 px-8 py-4 rounded-xl font-semibold">

              Download Resume

            </button>

          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .5 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full"></div>

            <div className="relative w-96 h-96 rounded-full border-4 border-cyan-400 bg-slate-800 flex items-center justify-center text-gray-500 text-xl">

              Your Photo

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;