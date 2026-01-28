import { ArrowLeft, ArrowRight } from "lucide-react";

export interface EndpointProps {
  method: "GET" | "POST";
  path: string;
  desc: string;
  reqBody: object;
  resBody: object;
}

export default function Endpoint({
  method,
  path,
  desc,
  reqBody,
  resBody,
}: EndpointProps) {
  return (
    <div className="w-full rounded-md text-sm border border-zinc-800">
      <div className="w-full flex flex-col gap-2 rounded-t-md text-xs bg-slate-950 px-4 py-4 border-b border-b-zinc-800">
        <div className="flex items-center gap-4">
          <span
            className={`rounded-full text-black font-semibold px-2 py-1 ${method === "GET" ? "bg-orange-400" : "bg-violet-400"}`}
          >
            {method}
          </span>
          <span className="font-mono">{path}</span>
        </div>
        <div className="text-zinc-400">{desc}</div>
      </div>
      <div className="w-full rounded-b-md px-6 py-6 text-sm">
        <div>
          <span className="flex items-center gap-2 py-2">
            <ArrowRight className="text-orange-400" size={12} /> Request Body
          </span>
          <div className="px-2">
            <pre className="text-xs px-4 py-2 rounded-md bg-zinc-900 text-zinc-300">
              {JSON.stringify(reqBody, null, 2)}
            </pre>
          </div>
        </div>
        <div>
          <span className="flex items-center gap-2 py-2">
            <ArrowLeft className="text-violet-400" size={12} /> Response Body
          </span>
          <div className="px-2">
            <pre className="text-xs px-4 py-2 rounded-md bg-zinc-900 text-zinc-300">
              {JSON.stringify(resBody, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
