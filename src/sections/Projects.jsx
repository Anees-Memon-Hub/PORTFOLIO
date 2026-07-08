import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Projects
        </p>

        <h2 className="text-5xl font-bold mt-3 mb-16">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-700 bg-slate-800 overflow-hidden"
            >

              {/* Project Image Placeholder */}

              <div className="h-52 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 flex items-center justify-center">

                <span className="text-6xl font-bold text-cyan-400">
                  {project.title.charAt(0)}
                </span>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-slate-700 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 border border-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-500 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;