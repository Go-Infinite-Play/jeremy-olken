"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
}

export function EmailModal({ open, onClose }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText("jeremy.olken@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold text-foreground mb-3">
          Let&apos;s be real...
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          C&apos;mon, these things never work. It&apos;ll probably just open up
          Outlook that you haven&apos;t used in 10 years. Just copy and paste my
          email:
        </p>
        <div className="bg-muted rounded-lg px-4 py-3 mb-6 flex items-center justify-between gap-3">
          <code className="text-sm font-mono text-foreground">
            jeremy.olken@gmail.com
          </code>
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
