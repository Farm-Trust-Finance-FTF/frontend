import { useRouter } from "next/router";
import Logo from "./Logo";
import ConnectWallet from "./ConnectWallet";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="hidden padding text-[#141414] mt-5 xl:flex justify-between items-center ">
      <Link className="cursor-pointer" href="/">
        <Logo />
      </Link>
      <div className="flex space-x-10 font-bold ">
        <Link
          className={
            router.pathname.includes("about")
              ? "border-b-2 border-[#87C232] cursor-pointer"
              : ""
          }
          href="about"
        >
          About
        </Link>
        <h1>Contact</h1>
        <Link
          className={
            router.pathname.includes("lending-and-borrowing")
              ? "border-b-2 border-[#87C232] cursor-pointer"
              : ""
          }
          href="lending-and-borrowing"
        >
          Lending
        </Link>
        <Link
          className={
            router.pathname.includes("parametric-insurance")
              ? "border-b-2 border-[#87C232] cursor-pointer"
              : ""
          }
          href="parametric-insurance"
        >
          Insurance
        </Link>
        <Link
          className={
            router.pathname.includes("asset-bridge")
              ? "border-b-2 border-[#87C232] cursor-pointer"
              : ""
          }
          href="asset-bridge"
        >
          Asset Bridge
        </Link>
        <Link
          className={
            router.pathname.includes("team")
              ? "border-b-2 border-[#87C232] cursor-pointer"
              : ""
          }
          href="team"
        >
          Team
        </Link>
      </div>
      <ConnectWallet />
    </nav>
  );
}

export default Navbar;
