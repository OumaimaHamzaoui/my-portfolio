import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-12">
      <div className="bg-white/10 p-6 sm:p-8 rounded-lg backdrop-blur-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Contact Me
        </h1>

        <div className="mt-8 space-y-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Oumaima Hamzaoui</h2>
          <p className="text-gray-300">Web Developer</p>
          <p className="text-gray-400 text-sm sm:text-base">
            Feel free to reach out to me for collaborations or inquiries.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:oumaima.hamzaoui.pro@gmail.com"
              className="flex items-center space-x-2 text-blue-500 hover:underline"
            >
              <Mail size={22} />
              <span className="text-sm sm:text-base">oumaima.hamzaoui.pro@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/oumaima-hamzaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
            >
              <Linkedin size={22} />
              <span className="text-sm sm:text-base">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
