import Link from "next/link";
import React from "react";
import { MotionDiv } from "./motion-wrapper";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const BrowseBlocksButton = () => {
  return (
    <Link href={"/"} className="flex items-center gap-8">
      <MotionDiv
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
        className="relative"
      >
        <Button
          className={cn(
            "relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
            "relative h-12 px-6 min-w-72 md:min-w-56",
            "bg-white dark:bg-black",
            "text-black dark:text-white",
            "border-2 border-black/20 dark:border-white/20",
            "hover:bg-black/5 dark:hover:bg-white/10",
            "backdrop-blur-xs",
            "shadow-md hover:shadow-lg transition-all duration-200"
          )}
        >
          <span className="font-medium flex items-center gap-2">
            Go to Templates
          </span>
          <ArrowRight className="w-5 h-5" />
        </Button>
      </MotionDiv>
    </Link>
  );
};

export default BrowseBlocksButton;
