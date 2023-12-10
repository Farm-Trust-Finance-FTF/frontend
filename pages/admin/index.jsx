import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useAccount
} from "wagmi";
import BaseLayout from "layout/Base";

import insuranceAbi from '../../constants/insurance.json'
import { admins } from "../../utils/admins"
import ModalComp from "../../components/ModalComp";

function Admin() {
  const { address } = useAccount()
  const [ farmer, setFarmer] = useState('')
  const [duration, setDuration] = useState()
  const [premium, setPremium] = useState()
  const [payout, setPayout] = useState()
  const [location, setLocation] = useState('')

  const router = useRouter()

  const { config } = usePrepareContractWrite({
    address: '0xead9d06d89aecf6e9d1cf794edd5e62ca11444ec',
    abi: insuranceAbi,
    functionName: 'newContract',
    args: [farmer, parseInt(duration), parseInt(premium), parseInt(payout), location]
  })

  const { write, isError, data } = useContractWrite(config)

  const { isLoading, isSuccess, } = useWaitForTransaction({
    hash: data?.hash,
  })

  const handleNewContract = (e) => {
    e.preventDefault();
    console.log('Creating contract')
    write?.()
  }

  const [ modal, setModal ] = useState()
  useEffect(() => {
    if(!admins.includes(address)){
      router.push('/')
    }
    if (isSuccess) {
      setModal(true)
    }
  }, [isSuccess])

  return (
    <BaseLayout>
      <div>
      <form
        action=""
        className="flex  mt-20 flex-col w-1/2  justify-center mx-auto shadow-xl p-10"
        onSubmit={(e) => handleNewContract(e)}
      >
        <div className="space-y-4">
          <h1 className="flex justify-center items-center mb-10 text-xl text-[#316721] font-semibold ">
            Create new Parametric insurance Contract
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="farmerAddres">Farmer Address</label>
            <input
              type="text"
              name="farmerAddres"
              id="farmerAddres"
              value={farmer}
              onChange={(e) => setFarmer(e.target.value)}
              placeholder="Farmer Address"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter duration"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="payout">Payout</label>
            <input
              type="number"
              name="payout"
              id="payout"
              value={payout}
              onChange={(e) => setPayout(e.target.value)}
              placeholder="Enter payout value"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="premium">Premium</label>
            <input
              type="number"
              name="premium"
              id="premium"
              value={premium}
              onChange={(e) => setPremium(e.target.value)}
              placeholder="Premium"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>

          {/* <div className="flex flex-col gap-2">
            <label htmlFor="payout">Payout</label>
            <input
              type="number"
              name="payout"
              id="payout"
              value={payout}
              onChange={(e) => setPayout(e.target.value)}
              placeholder="Payout value"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div> */}

          <div className="flex flex-col gap-2">
            <label htmlFor="location">location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location of farmer"
              required
              className="w-full shadow-inner py-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none border-[#A5A5A5]"
            />
          </div>
          
        </div>
        { isLoading && <button
          type="submit"
          disabled={isLoading}
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          Creating contract...
        </button> }
        { isSuccess && <button
          type="submit"
          disabled={isSuccess}
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          Contract created......
        </button> }

        { !isSuccess && <button
          type="submit"
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          Create
        </button> }


        <ModalComp XIcon={true} isOpen={modal} onClose={() => setModal(false)} styling="w-[400px] md:w-[680px] pb-[10px] text-center">
          <img src='/icons/insure.svg' className='m-auto'  />
            <p className="font-bold text-[18px] px-10 py-5">Thank you for creating a new Parametric insurance contract</p>

            <p>Transaction -ID</p>

            <p className="py-5">{data?.hash}</p>

            <a className="text-[#316721] font-bold"  href={`https://sepolia.etherscan.io/tx/${data?.hash}`} target="_blank" rel="noopener noreferrer">View TX</a>
            
        </ModalComp>
      </form>
    </div>
    </BaseLayout>
  )
}

export default Admin