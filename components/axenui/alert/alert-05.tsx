"use client";

import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";

interface BannerAlertProps {
  text: string;
  type?: "warning" | "info" | "success" | "error";
}

export default function Alert_05() {
  return (
    <div className="max-w-2xl mx-auto">
      <BannerAlert
        type="warning"
        text="This is some scrolling text. I can be a React component, multiple React components, or just plain text that moves continuously across the screen. Hover to pause the animation!"
      />
    </div>
  );
}

function BannerAlert({ text, type = "warning" }: BannerAlertProps) {
  const variants = {
    success: {
      bg: "bg-green-50 dark:bg-green-950/20",
      border: "border-green-200 dark:border-green-800/30",
      iconColor: "text-green-600 dark:text-green-400",
      textColor: "text-green-800 dark:text-green-200",
      icon: CheckCircle,
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      textColor: "text-blue-800 dark:text-blue-200",
      icon: Info,
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-950/20",
      border: "border-yellow-200 dark:border-yellow-800/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      textColor: "text-yellow-800 dark:text-yellow-200",
      icon: AlertTriangle,
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950/20",
      border: "border-red-200 dark:border-red-800/30",
      iconColor: "text-red-600 dark:text-red-red-400",
      textColor: "text-red-800 dark:text-red-200",
      icon: XCircle,
    },
  };

  const variant = variants[type];
  const IconComponent = variant.icon;

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-scroll {
          animation: marquee 20s linear infinite;
        }

        .marquee-container:hover .marquee-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`marquee-container relative overflow-hidden rounded-lg border ${variant.bg} ${variant.border} py-3 cursor-pointer`}
      >
        <div className="flex items-center gap-3 px-4">
          <IconComponent
            className={`w-4 h-4 ${variant.iconColor} flex-shrink-0`}
          />
          <div className="flex-1 overflow-hidden">
            <div
              className={`marquee-scroll whitespace-nowrap ${variant.textColor} text-sm font-medium`}
            >
              {text} • {text} • {text} • {text} • {text}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
