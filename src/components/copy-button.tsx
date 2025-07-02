"use client";

import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className={`ml-2 px-2 py-1 rounded text-xs transition-all duration-200 ${
        copied
          ? "bg-green-600 text-white"
          : "bg-slate-700 hover:bg-slate-600 text-white"
      }`}
      onClick={() => {
        navigator.clipboard?.writeText("npm i use-s-react");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
