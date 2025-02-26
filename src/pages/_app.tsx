import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {isHomePage && (
        <div className="absolute top-0 left-0 w-full h-full bg-cover ">
          <img
            src="/dev-icon.gif"
            alt="Web development icons"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      )}
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
