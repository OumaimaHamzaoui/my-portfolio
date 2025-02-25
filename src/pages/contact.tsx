import { Mail, Linkedin } from "lucide-react"; // Import the necessary icons

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 ">
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Contact Me
        </h1>

        <div className="mt-10 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white">Oumaima Hamzaoui</h2>
            <p className="text-gray-300">Web Developer</p>
            <div className="mt-4 space-y-4">
              <p className="text-gray-400">
                Feel free to reach out to me for collaborations or inquiries.
              </p>
              <p className="text-gray-400 flex items-center justify-center">
                <Mail size={20} className="mr-2" />
                <strong>Email:  &nbsp; </strong> 
                <a href="mailto:oumaima.hamzaoui.pro@gmail.com" className="text-blue-500 hover:underline">oumaima.hamzaoui.pro@gmail.com</a>
              </p>
              <div className="mt-4 flex items-center justify-center">
                <Linkedin size={20} className="mr-2" />
                <a
                  href="https://www.linkedin.com/in/oumaima-hamzaoui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
