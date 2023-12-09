import {useRouter} from "next/router";
import Logo from "./Logo";
import ConnectWallet from "./ConnectWallet";
import Link from "next/link";

function Navbar() {
  const router = useRouter()
  return (
    <nav className="hidden padding text-[#141414] mt-5 lg:flex justify-between items-center ">
      <Logo />
      <div className="flex space-x-10 cursor-pointer font-bold ">
        <h1>About</h1>
        <h1>Contact</h1>
        <Link className={router.pathname.includes('lending-and-borrowing') ? 'border-b-2 border-[#87C232]' : ''} href="lending-and-borrowing">Lending</Link>
        <Link className={router.pathname.includes('parametric-insurance') ? 'border-b-2 border-[#87C232]' : ''} href="parametric-insurance">Insurance</Link>
        <Link className={router.pathname.includes('asset-bridge') ? 'border-b-2 border-[#87C232]' : ''} href="asset-bridge">Asset Bridge</Link>
        <Link className={router.pathname.includes('team') ? 'border-b-2 border-[#87C232]' : ''} href="team">Team</Link>
      </div>
      <ConnectWallet />
    </nav>
  );
}

export default Navbar;
