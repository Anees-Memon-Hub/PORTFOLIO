function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-white">
          Muhammad <span className="text-cyan-400">Anees</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300">

          <li>
            <a href="#about" className="hover:text-cyan-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;