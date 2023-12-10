import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { LendingBorrowingABI, LendingBorrowing_ADDRESS } from "../../constants";

const WIthdrawToken = () => {
  const [address, setAddress] = useState();

  const { config: withdrawTokenConfig } = usePrepareContractWrite({
    address: LendingBorrowing_ADDRESS,
    abi: LendingBorrowingABI,
    functionName: "withdrawToken",
    args: [address],
  });

  const {
    data: withdrawTokenData,
    isError: isWithdrawingTokenError,
    write: withdrawTokenWrite,
  } = useContractWrite(withdrawTokenConfig);

  const { isLoading: isWithdrawingToken, isSuccess: isTokenWithdrawn } =
    useWaitForTransaction({
      hash: withdrawTokenData?.hash,
    });

  const handleBorrow = async (e) => {
    e.preventDefault();
    console.log("Withdrawing Token...");
    withdrawTokenWrite?.();
  };

  return (
    <div>
      <form
        action=""
        className="flex  mt-20 flex-col lg:w-1/2  justify-center mx-auto shadow-xl p-10"
        onSubmit={handleBorrow}
      >
        <div className="space-y-4">
          <h1 className="flex justify-center items-center mb-10 text-xl text-[#316721] font-semibold ">
            Withdraw Token
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">Token</label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Token Address"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          withdraw Token
        </button>
        <article className="mt-4 text-sm">
          {isWithdrawingToken && <p>Withdrawing Token...</p>}

          {isTokenWithdrawn && <p>Token Withdrawn... </p>}

          {isWithdrawingTokenError && (
            <p>There is an Error in Withdrawing Token...</p>
          )}
        </article>
      </form>
    </div>
  );
};

export default WIthdrawToken;
