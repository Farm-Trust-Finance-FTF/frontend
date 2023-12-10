import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ConnectButton  } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi'

import { admins } from "../../utils/admins";

function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const [isAdmin, setAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if(admins.includes(address)){
      setAdmin(true)
    }
  }, [])

  return (
    <div className="lg:flex lg:space-x-5">
      {/* <button className="bg-[#306621] text-white px-8 py-3 rounded-full">
        Connect Wallet
      </button> */}
      <ConnectButton />
      <button onClick={() => router.push('/admin')}  className={`border border-[#316721] text-[#316721] mt-5 px-5 py-3 rounded-3xl ${isAdmin ? 'block' : 'hidden' }`}>Admin</button>
    </div>
  );
}

export default ConnectWallet;
