// Success Alert (Playful)

import { Heart, Sparkles } from "lucide-react";

export default function Alert_08() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/30 dark:via-rose-950/30 dark:to-red-950/30 border border-pink-200/50 dark:border-pink-800/30 rounded-3xl p-6 shadow-2xl">
        {/* Animated sparkles */}
        <div className="absolute top-4 right-6">
          <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
        </div>
        <div className="absolute top-8 right-12">
          <div
            className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 flex items-center justify-center shadow-xl">
                <Heart className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs">✨</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              Thank You!
            </h3>
            <p className="text-sm text-rose-700 dark:text-rose-300 leading-relaxed">
              Your feedback helps us improve. We &apos;ve received your message
              and will get back to you soon!
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-rose-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                +127 others loved this
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
