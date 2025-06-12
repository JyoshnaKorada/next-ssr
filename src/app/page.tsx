"use client";

import { useEffect, useState } from "react";

type Row = {
  Name: string;
};

export default function Home() {
  const [data, setData] = useState<Row[]>([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Data from SQL Server</h1>
      <ul className="mt-4">
        {/* {data.map((row, i) => (
          <li key={i} className="py-1">
            {row.name}
          </li>
        ))} */}
        {data.map((row: Row, i) => (
          <li key={i} className="py-1">
            {row.Name}
          </li>
        ))}
      </ul>
    </main>
  );
}
