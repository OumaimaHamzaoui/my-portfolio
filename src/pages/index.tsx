import Link from "next/link";
import Image from "next/image";
import profilePic from "@/../public/profile.jpeg";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page | My portfolio</title>
      </Head>
      <div className="h-screen flex justify-center items-center px-6 fade-in">

        <div className="bg-gray-800 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-lg text-center max-w-3xl w-full">
          <Image
            src={profilePic}
            alt="oumaima_photo"
            width={200}
            height={200}
            className="rounded-full shadow-lg border-4 border-blue-200 mb-3 mx-auto"
          />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Hello, I am Oumaima Hamzaoui <span className="text-gray-800">👩‍💻</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">
            A passionate <span className="font-bold underline">Web Developer</span> crafting beautiful web experiences. 🚀🔥
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white shadow-md"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white shadow-md"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
