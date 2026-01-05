// src/components/ExperienceItem.tsx
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/src/components/ui/card";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  timeframe?: string;
  bullets?: string[];
  collapsibleOnMobile?: boolean;
};

export default function ExperienceItem({
  id,
  title,
  subtitle,
  timeframe,
  bullets = [],
}: Props) {
  return (
    <article id={id} className="w-full">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between w-full">
            <div className="pr-4">
              <CardTitle className="mb-1">{title}</CardTitle>
              {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
            </div>

            {timeframe && (
              <time className="text-xs text-slate-400 whitespace-nowrap">
                {timeframe}
              </time>
            )}
          </div>
        </CardHeader>

        <CardContent>
          {/* Mobile: collapsible details */}
          <div className="md:hidden">
            <details>
              <summary className="cursor-pointer text-sm text-slate-600 underline">
                Details
              </summary>
              <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-2 text-sm">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </details>
          </div>

          {/* Desktop / Tablet: show bullets directly */}
          <div className="hidden md:block">
            <ul className="mt-1 list-disc pl-5 text-slate-600 space-y-2 text-sm">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
