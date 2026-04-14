import React from "react";
import clsx from "clsx";

type PremiumCardProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export default function PremiumCard({ title, subtitle, className, children }: PremiumCardProps) {
  return (
    <section
      className={clsx(
        "rounded-3xl border border-white/50 bg-white/80 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur",
        className,
      )}
    >
      {(title || subtitle) && (
        <header className="mb-4">
          {title && <h3 className="text-lg font-bold text-slate-900">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

