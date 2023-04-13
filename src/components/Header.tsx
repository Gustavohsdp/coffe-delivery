import { CartButton } from "./CartButton";
import { Location } from "./Location";
import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="w-full flex flex-row items-center justify-between py-8 px-40 fixed backdrop-blur-xl">
      <Logo />

      <div className="flex flex-row gap-3 items-center">
        <Location city="Itabira" state="MG" />
        <CartButton quantityOfItems={5} />
      </div>
    </div>
  );
}
