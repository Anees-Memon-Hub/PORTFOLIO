import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-28 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-widest">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Let's Build Something Great Together
        </h2>

        <p className="text-gray-400 mt-8 leading-8">
          I'm always interested in discussing software development,
          AI, internships, collaborations, or exciting opportunities.
        </p>

        <div className="flex justify-center gap-8 text-3xl mt-14">

         
<a
  href="https://github.com/Anees-Memon-Hub"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub className="hover:text-cyan-400 transition" />
</a>

<a
  href="https://www.linkedin.com/in/muhammad-anees-memon-1638b4325/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="hover:text-cyan-400 transition" />
</a>

<a href="mailto:memonanees277@gmail.com">
  <FaEnvelope className="hover:text-cyan-400 transition" />
</a>



        </div>

      </div>
    </section>
  );
}

export default Contact;