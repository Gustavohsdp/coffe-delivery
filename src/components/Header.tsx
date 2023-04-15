"use client";

import { useRouter } from "next/navigation";
import { CartButton } from "./CartButton";
import { Location } from "./Location";
import { Logo } from "./Logo";

export function Header() {
  const router = useRouter();

  function handleHomePage() {
    router.push("/");
  }

  function handleNavigateCheckoutPage() {
    router.push("/checkout");
  }

  return (
    <div className="w-full py-8 px-4 lg:px-0 fixed backdrop-blur-xl z-10">
      <div className="flex flex-row items-center justify-between mx-auto max-w-[1120px]">
        <button onClick={handleHomePage}>
          {" "}
          <Logo />
        </button>

        <div className="flex flex-row gap-3 items-center">
          <Location />
          <CartButton onClick={handleNavigateCheckoutPage} />
        </div>
      </div>
    </div>
  );
}
