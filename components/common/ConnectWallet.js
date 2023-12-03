import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ConnectWallet() {
  return (
    <div>
      {/* <button className="bg-[#306621] text-white px-8 py-3 rounded-full">
        Connect Wallet
      </button> */}
      <ConnectButton />
    </div>
  );
}

export default ConnectWallet;
