import { motion } from "framer-motion";

function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-wide"
          >
            Muhammad{" "}
            <span className="text-cyan-400">
              Anees
            </span>
          </a>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative text-gray-300 hover:text-white duration-300"
                >
                  {link.name}

                  <span
                    className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 duration-300 font-semibold shadow-lg shadow-cyan-500/30"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;