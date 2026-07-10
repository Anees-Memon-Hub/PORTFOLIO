import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import profile from "../data/profile";

/* ---------------------------------------------------------
   Design notes
   - Palette: near-black canvas, violet + amber duotone accent,
     a terminal-green status pulse. No cyan-on-black default.
   - Type: Space Grotesk (display) / Inter (body) / JetBrains Mono
     (terminal + data labels) — the mono face is load-bearing,
     not decorative, since the signature element is a terminal.
   - Signature: a live typed terminal window stands in for the
     generic "initials in a circle" avatar — it's the one thing
     this hero would be remembered by.
   - Motion respects prefers-reduced-motion: typewriters resolve
     instantly and ambient float/pulse animations are disabled.
--------------------------------------------------------- */

const FONT_IMPORTS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const ROLES = ["AI Engineer", "Full-Stack Developer", "Problem Solver"];

const SKILLS = [
  { name: "python", x: "6%", y: "10%", delay: "0s" },
  { name: "pytorch", x: "78%", y: "4%", delay: "0.6s" },
  { name: "typescript", x: "84%", y: "48%", delay: "1.2s" },
  { name: "react", x: "2%", y: "58%", delay: "1.8s" },
  { name: "docker", x: "70%", y: "88%", delay: "0.9s" },
  { name: "node.js", x: "8%", y: "92%", delay: "0.3s" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useRoleTypewriter(reducedMotion) {
  const [text, setText] = useState(reducedMotion ? ROLES[0] : "");
  useEffect(() => {
    if (reducedMotion) {
      setText(ROLES[0]);
      return;
    }
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const word = ROLES[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
        timeoutId = setTimeout(tick, 65);
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % ROLES.length;
          timeoutId = setTimeout(tick, 300);
          return;
        }
        timeoutId = setTimeout(tick, 35);
      }
    };

    timeoutId = setTimeout(tick, 65);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);
  return text;
}

/* Terminal sequence: an array of { type: 'input'|'output', text, className } */
const TERMINAL_LINES = [
  { type: "input", text: "whoami" },
  { type: "output", text: "muhammad_anees", cls: "text-violet-300" },
  { type: "input", text: "cat role.txt" },
  { type: "output", text: "AI Engineer / Full-Stack Developer", cls: "text-amber-300" },
  { type: "input", text: "./build_something_great.sh" },
  { type: "output", text: "\u2713 status: available for hire", cls: "text-emerald-400" },
];

function useTerminalTypewriter(reducedMotion) {
  const [lines, setLines] = useState([]);
  const [caretVisible, setCaretVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setLines(TERMINAL_LINES.map((l) => ({ ...l, text: l.text })));
      setDone(true);
      return;
    }
    let cancelled = false;
    const built = [];

    async function run() {
      for (let i = 0; i < TERMINAL_LINES.length; i++) {
        const line = TERMINAL_LINES[i];
        if (cancelled) return;
        if (line.type === "input") {
          built.push({ ...line, text: "" });
          setLines([...built]);
          for (let c = 1; c <= line.text.length; c++) {
            if (cancelled) return;
            await new Promise((r) => setTimeout(r, 38));
            built[built.length - 1] = { ...line, text: line.text.slice(0, c) };
            setLines([...built]);
          }
          await new Promise((r) => setTimeout(r, 260));
        } else {
          await new Promise((r) => setTimeout(r, 120));
          built.push(line);
          setLines([...built]);
          await new Promise((r) => setTimeout(r, 420));
        }
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setCaretVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return { lines, caretVisible, done };
}

function scrollToProjects(e) {
  if (e) e.preventDefault();
  const el = document.getElementById("projects");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // Fallback: behaves exactly like a normal <a href="#projects"> click
    window.location.hash = "projects";
  }
}

function downloadResume() {
  const link = document.createElement("a");
  // profile.js currently has no resume field — add one, e.g.
  //   resume: "/resume.pdf"
  // then swap this line to: link.href = profile.resume;
  link.href = "/resume.pdf";
  link.download = "Muhammad_Anees_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function MagneticButton({ children, variant = "primary", className = "", href, ...props }) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const handleMove = useCallback(
    (e) => {
      if (reducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    },
    [reducedMotion]
  );

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }, []);

  const base =
    "relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-transform duration-200 ease-out will-change-transform cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400";
  const styles =
    variant === "primary"
      ? "bg-violet-500 text-neutral-950 hover:bg-violet-400 shadow-lg shadow-violet-500/30"
      : "border border-neutral-700 text-neutral-100 hover:border-violet-400 hover:text-violet-300";

  // Rendering as a real <a href="..."> means clicking it works exactly like
  // any other in-page nav link (e.g. your Navbar), with the smooth-scroll
  // handler layered on top as an enhancement rather than the only path.
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`${base} ${styles} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const roleText = useRoleTypewriter(reducedMotion);
  const { lines, caretVisible, done } = useTerminalTypewriter(reducedMotion);

  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden text-neutral-100">
      <style>{`
        ${FONT_IMPORTS}
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes float-chip {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .chip-float { animation: float-chip 5s ease-in-out infinite; }

        @keyframes grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(139,92,246,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139,92,246,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .bg-grid { animation: grid-drift 14s linear infinite; }
        }
        @media (prefers-reduced-motion: reduce) {
          .chip-float { animation: none; }
        }
      `}</style>

      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute rounded-full bg-violet-500/20 blur-3xl"
        style={{ width: 480, height: 480, top: "-8%", right: "8%" }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full bg-amber-400/10 blur-3xl"
        style={{ width: 380, height: 380, bottom: "-6%", left: "2%" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 mb-8 font-mono text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-300">available --for-hire</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-amber-300 bg-clip-text text-transparent">
              Anees
            </span>
          </h1>

          {/* Role typewriter */}
          <h2 className="mt-6 font-mono text-xl sm:text-2xl text-neutral-300 h-8">
            <span className="text-neutral-500">&gt;</span> {roleText}
            <span className="inline-block w-2 ml-0.5 bg-violet-400 motion-safe:animate-pulse">
              &nbsp;
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg text-neutral-400 font-body leading-8">
            I design and build intelligent software, AI-powered applications, and
            modern web experiences focused on performance, usability, and solving
            real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <MagneticButton variant="primary" href="#projects" onClick={scrollToProjects}>
              View Projects →
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={downloadResume}>
              Download Resume ↓
            </MagneticButton>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10 text-neutral-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:text-violet-300 hover:bg-neutral-900 transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:text-violet-300 hover:bg-neutral-900 transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={profile.email}
              aria-label="Email"
              className="p-2 rounded-lg hover:text-violet-300 hover:bg-neutral-900 transition-colors duration-200"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Stats — rendered as terminal key:value pairs */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-16 font-mono text-sm">
            <div>
              <span className="text-neutral-500">projects:</span>{" "}
              <span className="text-2xl font-display font-semibold text-violet-300">12+</span>
            </div>
            <div>
              <span className="text-neutral-500">stack_size:</span>{" "}
              <span className="text-2xl font-display font-semibold text-violet-300">10+</span>
            </div>
            <div>
              <span className="text-neutral-500">certs:</span>{" "}
              <span className="text-2xl font-display font-semibold text-violet-300">2+</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — signature terminal window */}
        <div className="relative flex justify-center">
          {/* Floating skill chips */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {SKILLS.map((s) => (
              <span
                key={s.name}
                className="chip-float absolute px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400"
                style={{ left: s.x, top: s.y, animationDelay: s.delay }}
              >
                {s.name}
              </span>
            ))}
          </div>

          <div className="relative w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl shadow-violet-500/10 backdrop-blur-sm overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-neutral-500">
                anees@portfolio: ~
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm min-h-[260px] flex flex-col gap-2.5">
              {lines.map((line, i) =>
                line.type === "input" ? (
                  <div key={i} className="flex gap-2 text-neutral-200">
                    <span className="text-emerald-400">$</span>
                    <span>{line.text}</span>
                    {i === lines.length - 1 && !done && (
                      <span
                        className={`inline-block w-2 -mb-0.5 bg-neutral-300 ${
                          caretVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        &nbsp;
                      </span>
                    )}
                  </div>
                ) : (
                  <div key={i} className={`pl-4 ${line.cls || "text-neutral-400"}`}>
                    {line.text}
                  </div>
                )
              )}
              {done && (
                <div className="flex gap-2 text-neutral-200 mt-1">
                  <span className="text-emerald-400">$</span>
                  <span
                    className={`inline-block w-2 -mb-0.5 bg-neutral-300 ${
                      caretVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    &nbsp;
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 motion-safe:animate-bounce">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <FiChevronDown size={18} />
      </div>
    </section>
  );
}

export default Hero;
