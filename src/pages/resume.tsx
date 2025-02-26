import React, { useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Resume() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  const resumes: { fr: string; en: string } = {
    fr: "/CV-Hamzaoui_Oumaima-French.pdf",
    en: "/CV-Hamzaoui_Oumaima-English.pdf",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
        My Resume
      </h1>

      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            language === "fr" ? "bg-blue-500 text-white" : "bg-gray-700"
          }`}
          onClick={() => setLanguage("fr")}
        >
          French
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            language === "en" ? "bg-blue-500 text-white" : "bg-gray-700"
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
      </div>

      <div className="w-full max-w-5xl border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={resumes[language]}
          className="w-full h-[650px] bg-white"
          title="Resume Preview"
        ></iframe>
      </div>

      <Link href={resumes[language]} download className="mt-6">
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
          <Download className="w-5 h-5" />
          Download Resume
        </button>
      </Link>
    </div>
  );
}
