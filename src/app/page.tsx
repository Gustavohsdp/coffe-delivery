import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <h1 className="text-brown-900 font-bold text-3xl">Hello world!</h1>
    </main>
  );
}
