"use client";

import React, { useState } from "react";

type Country = {
  name: string;
  code: string;
  dial_code: string;
};

const countries: Country[] = [
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Singapore", code: "SG", dial_code: "+65" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "China", code: "CN", dial_code: "+86" },
  // 👉 You can add more countries or fetch dynamically if needed
];

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function CountrySelector({ value, onChange }: Props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial_code.includes(search)
  );

  return (
    <div className="relative w-full">
      <button
        aria-label="country code Select label"
        type="button"
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-full w-full bg-white dark:bg-dark"
      >
        <span>{value || "+91"}</span>
        <span>▼</span>
      </button>

      {open && (
        <div className="absolute mt-2 max-h-60 w-full overflow-y-auto border border-black/10 dark:border-white/10 bg-white dark:bg-dark rounded-lg shadow-xl z-20">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search country"
            className="w-full px-3 py-2 border-b border-gray-200 dark:border-gray-700 outline-none"
          />
          {filtered.map((c) => (
            <div
              key={c.code}
              onClick={() => {
                onChange(c.dial_code);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            >
              {c.name} ({c.dial_code})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
