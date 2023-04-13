"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex gap-3 flex-col">
      <h1 className="text-brown-900 font-bold text-3xl">Hello world!</h1>
    </main>
  );
}
