// Compact Alerts - Clean & Simple

"use client";

import { CheckCircle, Info, AlertTriangle, X, XCircle } from "lucide-react";

interface CompactAlertProps {
  type: "success" | "info" | "warning" | "error";
  title: string;
  onClose?: () => void;
}

export default function Alert_03() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-3">
        <CompactAlert type="success" title="Success Tips" />
        <CompactAlert type="info" title="Informational Notes" />
        <CompactAlert type="warning" title="Warning" onClose={() => {}} />
        <CompactAlert type="error" title="Error" />
      </div>
    </div>
  );
}

function CompactAlert({ type, title, onClose }: CompactAlertProps) {
  const variants = {
    success: {
      bg: "bg-green-50 dark:bg-green-950/20",
      border: "border-green-200 dark:border-green-800/30",
      icon: CheckCircle,
      iconColor: "text-green-600 dark:text-green-400",
      textColor: "text-green-800 dark:text-green-200",
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800/30",
      icon: Info,
      iconColor: "text-blue-600 dark:text-blue-400",
      textColor: "text-blue-800 dark:text-blue-200",
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-950/20",
      border: "border-yellow-200 dark:border-yellow-800/30",
      icon: AlertTriangle,
      iconColor: "text-yellow-600 dark:text-yellow-400",
      textColor: "text-yellow-800 dark:text-yellow-200",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950/20",
      border: "border-red-200 dark:border-red-800/30",
      icon: XCircle,
      iconColor: "text-red-600 dark:text-red-400",
      textColor: "text-red-800 dark:text-red-200",
    },
  };

  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${variant.bg} ${variant.border}`}
    >
      <Icon className={`w-4 h-4 ${variant.iconColor}`} />
      <span className={`text-sm font-medium ${variant.textColor} flex-1`}>
        {title}
      </span>
      {onClose && (
        <button
          onClick={onClose}
          className={`${variant.iconColor} hover:opacity-70 transition-opacity`}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
