import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className="bg-black min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-sans tracking-tight mb-12">
          Starter Template (ShadCn UI Included)
          <br />
          <span className="relative inline-block mt-4 [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.3))]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              Next.js
            </span>
            <span className="mx-4 text-silver text-5xl font-extrabold">+</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              JavaScript
            </span>
          </span>
        </h1>

        {/* Logos */}
        <div className="flex items-center gap-8 mb-12">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={40}
            className="filter drop-shadow-lg bg-white rounded-full"
          />
          <span className="text-gray-400 text-5xl font-extrabold">+</span>
          <Image
            src="/javascript.svg"
            alt="JavaScript logo"
            width={100}
            height={100}
            className="filter drop-shadow-lg"
          />
        </div>

        {/* GitHub Promotion Button */}
        <a
          href="https://github.com/ezoltech/nextjs-javascript-starter-template"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition transform"
        >
          ⭐ Give it a Star
        </a>

        <h2 className="mt-12 text-lg md:text-xl lg:text-2xl font-medium text-gray-200 dark:text-gray-400 tracking-wide">
          Start by editing{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-semibold">
            src/app/page.js
          </span>
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
