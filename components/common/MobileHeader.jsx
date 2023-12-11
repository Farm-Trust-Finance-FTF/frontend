import { useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Logo from "./Logo";
import ConnectWallet from "./ConnectWallet";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className="xl:hidden padding pt-5">
        <nav className="w-full">
          <div className="flex justify-between">
            {/* Logo and search bar */}
            <div className="flex space-x-5">
              <Link href="/">
                <Logo />
              </Link>
              <div className="pt-1 flex"></div>
            </div>
            {!open ? (
              <Bars2Icon
                className="w-8 text-[#446119] cursor-pointer"
                onClick={() => setOpen(true)}
              />
            ) : (
              <XMarkIcon
                className="w-8 text-[#446119] cursor-pointer"
                onClick={() => setOpen(false)}
              />
            )}
          </div>
        </nav>
      </header>
      {!open ? (
        <div></div>
      ) : (
        <div className="fixed h-[100vh] z-50 bg-white w-full px-5 py-2 transition-all">
          <div className="gap-x-4 pt-4">
            <div className="block space-y-6 cursor-pointer font-bold pb-5 ">
              <h1>About</h1>
              <h1>Contact</h1>
              <div>
                <Link
                  className={
                    router.pathname.includes("lending-and-borrowing")
                      ? "border-b-2 border-[#87C232]"
                      : ""
                  }
                  href="lending-and-borrowing"
                >
                  Lending
                </Link>
              </div>
              <div>
                <Link
                  className={
                    router.pathname.includes("parametric-insurance")
                      ? "border-b-2 border-[#87C232]"
                      : ""
                  }
                  href="parametric-insurance"
                >
                  Insurance
                </Link>
              </div>
              <div>
                <Link
                  className={
                    router.pathname.includes("asset-bridge")
                      ? "border-b-2 border-[#87C232]"
                      : ""
                  }
                  href="asset-bridge"
                >
                  Asset Bridge
                </Link>
              </div>
              <div>
                <Link
                  className={
                    router.pathname.includes("team")
                      ? "border-b-2 border-[#87C232]"
                      : ""
                  }
                  href="team"
                >
                  Team
                </Link>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
