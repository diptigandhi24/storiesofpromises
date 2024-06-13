"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const serverData = fetch("http://localhost:3000/api/hello").then((res)=> res.json())
  const [data, updatedata] = useState(serverData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Promise</h1>
      {serverData}
    </main>
  );
}
