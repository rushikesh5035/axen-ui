// Performance Alert (Dark Theme)

import { Zap, TrendingUp, ExternalLink } from "lucide-react";

export default function Alert_09() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl p-6 shadow-2xl overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 animate-pulse"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Performance Boost
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-400 font-medium">
                    +47% faster
                  </span>
                </div>
              </div>
            </div>

            <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
              <span className="text-xs font-medium text-emerald-300">NEW</span>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            Your app is now running significantly faster thanks to our latest
            optimizations. Experience lightning-fast performance across all
            features.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-xs text-zinc-400">Updated 2 min ago</div>
            </div>

            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20">
              View Details
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
