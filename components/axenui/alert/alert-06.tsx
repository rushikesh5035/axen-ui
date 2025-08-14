// Premium - Gradient Border

import { Zap, Clock } from "lucide-react";

export default function Alert_06() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-2xl p-[1px] shadow-2xl">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 h-full">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Premium Feature
                </h3>
                <div className="flex items-center gap-1 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                  <Clock className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                  <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                    Limited Time
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Unlock advanced analytics and priority support with our Pro
                plan.
              </p>

              <div className="flex gap-2 pt-1">
                <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                  Upgrade Now
                </button>
                <button className="px-4 py-2 text-violet-600 dark:text-violet-400 text-sm font-medium hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-xl transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
