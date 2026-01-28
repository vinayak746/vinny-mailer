import { ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="group flex-1 h-full flex flex-col gap-2 p-4 rounded-md border bg-zinc-950 hover:border-zinc-700 border-zinc-800 max-w-xs duration-200 cursor-default">
      <div className="p-1.5 w-fit rounded-md border border-zinc-800 bg-black group-hover:bg-zinc-800 group-hover:border-zinc-500 duration-200">
        {icon}
      </div>
      <h5 className="text-base font-bold">{title}</h5>
      <p className="text-sm text-zinc-500">{desc}</p>
    </div>
  );
}
