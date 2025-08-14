// Warning - Left Border Accent

import { AlertTriangle, X } from "lucide-react";

export default function Alert_02() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-400 shadow-lg rounded-r-xl p-5">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-semibold text-amber-800 dark:text-amber-200">
                Warning Alert
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                This action cannot be undone. Please review your changes before
                proceeding.
              </p>
            </div>
          </div>

          <button className="flex-shrink-0 p-1 rounded-full hover:bg-amber-200 dark:hover:bg-amber-800/30 transition-colors">
            <X className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
