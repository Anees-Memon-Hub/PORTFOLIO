function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">

      <div className="max-w-7xl mx-auto text-center text-gray-500">

        © {new Date().getFullYear()} Muhammad Anees.
        Built with React, Tailwind CSS & Framer Motion.

      </div>

    </footer>
  );
}

export default Footer;