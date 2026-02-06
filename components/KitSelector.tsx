"use client";

import { useState } from "react";
import { kits } from "../data/kits";

export default function KitSelector() {
  const [type, setType] = useState<"sport" | "trad" | null>(null);

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setType("sport")}
        >
          Sport
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setType("trad")}
        >
          Trad
        </button>
      </div>

      {type && (
        <div className="mt-6 max-w-xl">
          {kits[type].beginner.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.note}</p>
              <p className="text-sm text-gray-500">{item.estPrice}</p>
              <a
                href={item.affiliate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Buy here
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
