import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-8 mt-32 mx-2 md:mx-10 lg:mx-28 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h1 className="text-xl md:text-3xl font-semibold">
            Maximus Aurelius Wiranata
          </h1>
          <p className="text-neutral-400 text-sm">
            Building solutions for complex problems through software
            development.
          </p>
          <div className="flex items-center gap-x-4 mt-2">
            <Link href="mailto:maxwiranata02@gmail.com" target="_blank">
              <MdEmail
                size={32}
                className="hover:text-neutral-300 transition"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/maximus-aurelius-wiranata/"
              target="_blank"
            >
              <FaLinkedin
                size={28}
                className="hover:text-neutral-300 transition"
              />
            </Link>
            <Link href="https://github.com/maxx2002" target="_blank">
              <FaGithub
                size={28}
                className="hover:text-neutral-300 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
