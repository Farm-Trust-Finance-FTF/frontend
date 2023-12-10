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

function Admin() {
  const { address } = useAccount()
  const [ farmer, setFarmer] = useState('')
  const [duration, setDuration] = useState()
  const [premium, setPremium] = useState()
  const [payout, setPayout] = useState()
  const [location, setLocation] = useState('')

  const router = useRouter()

  const { config } = usePrepareContractWrite({
    address: '0xe784a4a9de1f822E836B7Ccc13bd70ba03fdA258',
    abi: insuranceAbi,
    functionName: 'newContract',
    args: [farmer, parseInt(duration), parseInt(premium), parseInt(payout), location]
  })

  const { write, isError, data } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  const handleNewContract = (e) => {
    e.preventDefault();
    console.log('Creating contract')
    write?.()
  }


  useEffect(() => {
    if(!admins.includes(address)){
      router.push('/')
    }
  }, [])

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
        <button
          type="submit"
          className="bg-[#316721] mt-10  px-4 py-2 text-white font-semibold text-xl rounded-full"
        >
          Create
        </button>
        <article className="mt-4 text-sm">
          {isLoading && <p>Creating contract...</p>}

          {isSuccess && <p>Contract created...</p>}

          {isError && (
            <p>There is an Error in Creating contract...</p>
          )}
        </article>
      </form>
    </div>
    </BaseLayout>
  )
}

export default Admin