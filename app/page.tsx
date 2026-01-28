import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex grow bg-pink-50 w-full max-w-3xl flex-col items-center justify-between py-16 sm:py-32 px-8 sm:px-16 dark:bg-black sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
