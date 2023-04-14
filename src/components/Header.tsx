import { CartButton } from "./CartButton";
import { Location } from "./Location";
import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="w-full  py-8 fixed backdrop-blur-xl z-10">
      <div className="flex flex-row items-center justify-between mx-auto max-w-[1120px]">
        <Logo />

        <div className="flex flex-row gap-3 items-center">
          <Location city="Itabira" state="MG" />
          <CartButton quantityOfItems={5} />
        </div>
      </div>
    </div>
  );
}
