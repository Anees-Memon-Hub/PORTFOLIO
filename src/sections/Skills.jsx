import { motion } from "framer-motion";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-950 px-8">

      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Skills
        </p>

        <h2 className="text-5xl font-bold mt-3 mb-16">
          Technologies I Work With
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (

            <motion.div
              key={skill.name}
              whileHover={{ y: -8 }}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-8"
            >

              <div className="flex justify-between">

                <h3 className="text-2xl font-semibold">
                  {skill.name}
                </h3>

                <span className="text-cyan-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <p className="text-gray-400 mt-4">
                {skill.description}
              </p>

              <div className="w-full bg-slate-700 rounded-full h-3 mt-8">

                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;