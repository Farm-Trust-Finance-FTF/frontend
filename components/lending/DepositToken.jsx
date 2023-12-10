import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { FTFSenderABI, FTFSender_ADDRESS } from "../../constants";

const DepositToken = () => {
  const [token, setToken] = useState();
  const [amount, setAmount] = useState();

  const { config: depositTokenConfig } = usePrepareContractWrite({
    address: FTFSender_ADDRESS,
    abi: FTFSenderABI,
    functionName: "depositToken",
    args: [token, amount],
  });

  const {
    data: depositTokenData,
    isError: isDepositingTokenError,
    write: depositTokenWrite,
  } = useContractWrite(depositTokenConfig);

  const { isLoading: isDepositingToken, isSuccess: isTokenDeposited } =
    useWaitForTransaction({
      hash: depositTokenData?.hash,
    });

  const handleDepositToken = async (e) => {
    e.preventDefault();
    console.log("Depositing Token...");
    depositTokenWrite?.();
  };

  return (
    <div>
      <form
        action=""
        className="flex  mt-20 flex-col w-1/2  justify-center mx-auto shadow-xl p-10"
        onSubmit={handleDepositToken}
      >
        <div className="space-y-4">
          <h1 className="flex justify-center items-center mb-10 text-xl text-[#316721] font-semibold ">
            Deposit Token For Lending and Borrowing
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="tokenToDeposit">Token</label>
            <input
              type="text"
              name="tokenToDeposit"
              id="tokenToDeposit"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Token Address"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          Deposit Token
        </button>
        <article className="mt-4 text-sm">
          {isDepositingToken && <p>Depositing Token...</p>}

          {isTokenDeposited && <p>Token Deposited...</p>}

          {isDepositingTokenError && (
            <p>There is an Error in Depositing Token...</p>
          )}
        </article>
      </form>
    </div>
  );
};

export default DepositToken;
