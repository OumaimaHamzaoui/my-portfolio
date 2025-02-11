import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
