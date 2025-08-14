import React from "react";
import { MotionDiv } from "../motion-wrapper";
import Link from "next/link";
import { Sparkle } from "lucide-react";
import TailwindCSS from "../icons/tailwind-css";
import BrowseComponentsButton from "../browse-component-button";
import BrowseBlocksButton from "../browse-blocks-button";
import Features from "./features";

const HeroSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      {/* Left Side */}
      <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Design with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              precision, <br />
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                build with
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
                speed!
              </span>
            </span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            Discover{" "}
            <span className="font-semibold">
              100+ hand-crafted premium UI components,
            </span>{" "}
            built with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
              shadcn/ui
            </span>{" "}
            — perfect for <span className="font-semibold">modern React</span>{" "}
            and <span className="font-semibold">Next.js</span> projects.
          </p>
          <Link href={"/"}></Link>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 pb-3 text-start flex items-center gap-2">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              Now fully optimized for Tailwind CSS 4.0!{" "}
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ">
                <Sparkle className="h-3 w-4 mr-1" />
                New
              </span>
            </span>
          </span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </MotionDiv>

        <Features />
      </div>
    </div>
  );
};

export default HeroSection;
