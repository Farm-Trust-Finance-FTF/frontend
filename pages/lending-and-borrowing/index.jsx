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

        <div className="lg:flex space-y-5 items-center justify-center mt-10 gap-4 py-10">
          <div>
          <Link
            href="lending-and-borrowing/depositToken"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Deposit Token
          </Link>
          </div>

          <div>
          <Link
            href="lending-and-borrowing/depositETH"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Deposit ETH
          </Link>
          </div>

          <div>
          <Link
            href="lending-and-borrowing/sendMessage"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Send Message
          </Link>
          </div>

         <div>
         <Link
            href="lending-and-borrowing/borrow"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Borrow
          </Link>
         </div>

         <div>
         <Link
            href="lending-and-borrowing/repay"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Repay
          </Link>
         </div>

         <div>
         <Link
            href="lending-and-borrowing/withdrawToken"
            className="bg-[#306621] text-white rounded-lg px-4 py-2 text-lg "
          >
            Withdraw Token
          </Link>
         </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default index;
