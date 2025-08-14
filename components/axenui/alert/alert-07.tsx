// Celebration - Animated Elements

import { Heart, Users, TrendingUp } from "lucide-react";

export default function Alert_07() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-red-950/30 border border-rose-200 dark:border-rose-800 rounded-3xl p-6 shadow-xl">
        {/* Floating elements */}
        <div className="absolute top-4 right-6 flex gap-2">
          <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-150"></div>
        </div>

        <div className="flex items-start gap-5">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 flex items-center justify-center shadow-2xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-rose-900 dark:text-rose-100">
                Community Milestone!
              </h3>
              <p className="text-sm text-rose-700 dark:text-rose-300 mt-1 leading-relaxed">
                We &apos;ve reached 10,000 active users! Thank you for being
                part of our amazing community.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span className="text-sm font-semibold text-rose-800 dark:text-rose-200">
                  10K Users
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span className="text-sm font-semibold text-rose-800 dark:text-rose-200">
                  +25% Growth
                </span>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-sm font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              <Heart className="w-4 h-4" />
              Celebrate With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
