import { CheckCircle, Code, TriangleAlert } from "lucide-react";
import FeatureCard from "./feature-card";

export default function Hero() {
  return (
    <div>
      <div className="text-center flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl">
          <span>Send emails reliably,</span>{" "}
          <span className="text-violet-400">at scale</span>
        </h2>
        <p className="text-zinc-400 max-w-md">
          A production-ready microservice for email delivery with built-in Dead
          Letter Queue support to handle failures gracefully.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FeatureCard
            icon={<CheckCircle className="text-purple-400" size={16} />}
            title={"Async Processing"}
            desc="Queue-based delivery ensures non-blocking requests"
          />
          <FeatureCard
            icon={<TriangleAlert className="text-orange-400" size={16} />}
            title={"DLQ support"}
            desc="Failed emails are logged for Inspection and retry"
          />
          <FeatureCard
            icon={<Code className="text-blue-400" size={16} />}
            title={"Simple API"}
            desc="Clean REST endpoints with JSON request/response"
          />
        </div>
      </div>
    </div>
  );
}
