import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { LendingBorrowingABI, LendingBorrowing_ADDRESS } from "../../constants";

const Repay = () => {
  const [destinationChain, setDestinationChain] = useState();
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState();
  const [messageId, setMessageId] = useState();

  const { config: repayConfig } = usePrepareContractWrite({
    address: LendingBorrowing_ADDRESS,
    abi: LendingBorrowingABI,
    functionName: "repayAndSendMessage",
    args: [amount, destinationChain, receiver, messageId],
  });

  const {
    data: repayData,
    isError: isRepayingError,
    write: repayWrite,
  } = useContractWrite(repayConfig);

  const { isLoading: isRepaying, isSuccess: isMessageSent } =
    useWaitForTransaction({
      hash: repayData?.hash,
    });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log("Sending CrossChain Message with CCIP...");
    repayWrite?.();
  };

  return (
    <div>
      <form
        action=""
        className="flex  mt-20 flex-col w-1/2  justify-center mx-auto shadow-xl p-10"
        onSubmit={handleSendMessage}
      >
        <div className="space-y-4">
          <h1 className="flex justify-center items-center mb-10 text-xl text-[#316721] font-semibold ">
            Repay Borrowed Token and Send CrossChain Message
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="amountToTransfer">Amount</label>
            <input
              type="number"
              name="amountToTransfer"
              id="amountToTransfer"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Transfer Amount"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="destinationChain">Destination Chain</label>
            <input
              type="number"
              name="destinationChain"
              id="destinationChain"
              value={destinationChain}
              onChange={(e) => setDestinationChain(e.target.value)}
              placeholder="Destination Chain Selector"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="receiverAddress">Receiver</label>
            <input
              type="text"
              name="receiverAddress"
              id="receiverAddress"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              placeholder="Receiver Address"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="messageId">Message Id</label>
            <input
              type="number"
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
          Repay
        </button>

        <article className="mt-4 text-sm">
          {isRepaying && <p>Sending CrossChain Message using CCIP...</p>}

          {isMessageSent && <p>CrossChain Message Sent...</p>}

          {isRepayingError && (
            <p>There is an Error in Sending CrossChain Message</p>
          )}
        </article>
      </form>
    </div>
  );
};

export default Repay;
