import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Resume() {
  const resumePath = "/CV-Hamzaoui_Oumaima.pdf"; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
        My Resume
      </h1>
      <div className="w-full max-w-5xl border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={resumePath}
          className="w-full h-[650px] bg-white"
          title="Resume Preview"
        ></iframe>
      </div>
      <Link href={resumePath} download className="mt-6">
        <button className="flex items-center gap-2 bg-blue-500  hover:bg-blue-600 px-6 py-3 rounded-lg">
          <Download className="w-5 h-5" />
          Download Resume
        </button>
      </Link>
    </div>
  );
}
