import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { LendingBorrowingABI, LendingBorrowing_ADDRESS } from "../../constants";

const Borrow = () => {
  const [messageId, setMessageId] = useState();

  const { config: BorrowConfig } = usePrepareContractWrite({
    address: LendingBorrowing_ADDRESS,
    abi: LendingBorrowingABI,
    functionName: "borrowUSDC",
    args: [messageId],
  });

  const {
    data: borrowData,
    isError: isBorrowingTokenError,
    write: borrowWrite,
  } = useContractWrite(BorrowConfig);

  const { isLoading: isBorrowingToken, isSuccess: isTokenBorrowed } =
    useWaitForTransaction({
      hash: borrowData?.hash,
    });

  const handleBorrow = async (e) => {
    e.preventDefault();
    console.log("Borrowing Token...");
    borrowWrite?.();
  };

  return (
    <div>
      <form
        action=""
        className="flex  mt-20 flex-col w-1/2  justify-center mx-auto shadow-xl p-10"
        onSubmit={handleBorrow}
      >
        <div className="space-y-4">
          <h1 className="flex justify-center items-center mb-10 text-xl text-[#316721] font-semibold ">
            Borrow Token Using Message Id
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="messageId">Message Id</label>
            <input
              type="text"
              name="messageId"
              id="messageId"
              value={messageId}
              onChange={(e) => setMessageId(e.target.value)}
              placeholder="Message Id"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          Borrow
        </button>
        <article className="mt-4 text-sm">
          {isBorrowingToken && <p>Borrowing Token...</p>}

          {isTokenBorrowed && <p>Token Borrowed... </p>}

          {isBorrowingTokenError && (
            <p>There is an Error in Borrowing Token...</p>
          )}
        </article>
      </form>
    </div>
  );
};

export default Borrow;
