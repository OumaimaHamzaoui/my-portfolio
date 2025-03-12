import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/next';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {isHomePage && (
        <div className="absolute top-0 left-0 w-full h-full bg-cover ">
          <Image
            src="/dev-icon.gif"
            alt="Web development icons"
            fill
            className="object-cover opacity-60"
          />
        </div>
      )}
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
        <Analytics />
      </main>
    </div>
  );
}
