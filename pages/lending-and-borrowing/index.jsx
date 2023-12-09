import Link from "next/link";

import BaseLayout from "layout/Base";
import Footer from "../../components/common/Footer";

const index = () => {
  return (
    <BaseLayout>
    
      <div className="shadow-2xl p-6 mt-5">
        <h1 className=" flex text-xl font-bold mt-14 items-center justify-center">
          {" "}
          Lend and Borrow Tokens Using ChainLink CCIP
        </h1>

        <div className="flex items-center justify-center mt-10 gap-6 py-10">
          <Link
            href="lending-and-borrowing/depositToken"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Deposit Token
          </Link>

          <Link
            href="lending-and-borrowing/depositETH"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Deposit ETH
          </Link>

          <Link
            href="lending-and-borrowing/sendMessage"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Send Message
          </Link>

          <Link
            href="lending-and-borrowing/borrow"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Borrow
          </Link>

          <Link
            href="lending-and-borrowing/repay"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Repay
          </Link>

          <Link
            href="lending-and-borrowing/withdrawToken"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Withdraw Token
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default index;
