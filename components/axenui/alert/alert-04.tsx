// Expanded Alerts - With Descriptions

"use client";

import { CheckCircle, Info, AlertTriangle, X, XCircle } from "lucide-react";

interface ExpandedAlertProps {
  type: "success" | "info" | "warning" | "error";
  title: string;
  description: string;
  onClose?: () => void;
}

export default function Alert_10() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <ExpandedAlert
          type="success"
          title="Success Tips"
          description="Detailed description and advice about successful copywriting."
        />
        <ExpandedAlert
          type="info"
          title="Informational Notes"
          description="Additional description and information about copywriting."
        />
        <ExpandedAlert
          type="warning"
          title="Warning"
          description="This is a warning notice about copywriting."
          onClose={() => {}}
        />
        <ExpandedAlert
          type="error"
          title="Error"
          description="This is an error message about copywriting."
        />
      </div>
    </div>
  );
}

function ExpandedAlert({
  type,
  title,
  description,
  onClose,
}: ExpandedAlertProps) {
  const variants = {
    success: {
      bg: "bg-green-50 dark:bg-green-950/20",
      border: "border-green-200 dark:border-green-800/30",
      icon: CheckCircle,
      iconColor: "text-green-600 dark:text-green-400",
      titleColor: "text-green-800 dark:text-green-200",
      descColor: "text-green-700 dark:text-green-300",
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800/30",
      icon: Info,
      iconColor: "text-blue-600 dark:text-blue-400",
      titleColor: "text-blue-800 dark:text-blue-200",
      descColor: "text-blue-700 dark:text-blue-300",
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-950/20",
      border: "border-yellow-200 dark:border-yellow-800/30",
      icon: AlertTriangle,
      iconColor: "text-yellow-600 dark:text-yellow-400",
      titleColor: "text-yellow-800 dark:text-yellow-200",
      descColor: "text-yellow-700 dark:text-yellow-300",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950/20",
      border: "border-red-200 dark:border-red-800/30",
      icon: XCircle,
      iconColor: "text-red-600 dark:text-red-400",
      titleColor: "text-red-800 dark:text-red-200",
      descColor: "text-red-700 dark:text-red-300",
    },
  };

  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <div
      className={`flex gap-4 p-4 rounded-lg border ${variant.bg} ${variant.border}`}
    >
      <div className={`p-1 rounded-full ${variant.bg}`}>
        <Icon className={`w-5 h-5 ${variant.iconColor}`} />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className={`text-sm font-semibold ${variant.titleColor}`}>
          {title}
        </h3>
        <p className={`text-sm ${variant.descColor}`}>{description}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={`${variant.iconColor} hover:opacity-70 transition-opacity self-start`}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
