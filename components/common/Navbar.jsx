import React from "react";
import Logo from "./Logo";
import ConnectWallet from "./ConnectWallet";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="hidden padding text-[#141414] mt-5 lg:flex justify-between items-center ">
      <Logo />
      <div className="flex space-x-10 cursor-pointer font-bold ">
        <h1>About</h1>
        <h1>Contact</h1>
        <Link href="lending-and-borrowing">Lending</Link>
        <Link href="parametric-insurance">Insurance</Link>
        <Link href="asset-bridge">Asset Bridge</Link>
        <Link href="team">Team</Link>
      </div>
      <ConnectWallet />
    </nav>
  );
}

export default Navbar;
