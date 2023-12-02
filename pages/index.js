import Image from 'next/image'
import BaseLayout from '@/layout/Base'
import ConnectWallet from '@/components/common/ConnectWallet'


export default function Home() {
  return (
    <BaseLayout>
      <section className='mt-20 lg:flex justify-around items-center'>
        <div>
          <h1 className='font-bold text-[28px] lg:w-[360px]'>
          Farm Trust Finance (FTF) is a Neo Banking platform
          </h1>
          <p className='lg:w-[560px] pt-5'>
          Farm Trust Finance (FTF) is a Neo Banking platform that offers banking services to smallholder farmers through providing services like Prometric insurance, lending, borrowing, cross-chain asset transfer, saving, Agricultural best practices, location-based disaster notification, Marketplace, and climate risk management
          </p>
          <div className='py-5'>
            <ConnectWallet />
          </div>
        </div>
        <img className='w-[400px] mt-5' src='/img/hero.png' />
      </section>

      <section className='mt-40 lg:flex justify-around items-center'>
        <div>
          <h1 className='font-bold text-[18px] text-[#446119]'>
          WHAT WE DO
          </h1>
          <p className='lg:w-[560px] text-[18px] pt-5 pr-5'>
          Farm Trust Finance (FTF) is a Neo Banking platform that offers banking services to smallholder farmers through providing services like Prometric insurance, lending, borrowing, cross-chain asset transfer, saving, Agricultural best practices, location-based disaster notification, Marketplace, and climate risk management
          </p>
        </div>
        <img className='w-[400px] mt-5' src='/img/what.png' />
      </section>

      <section className='mt-40 lg:flex justify-around items-center'>
        <div>
          <h1 className='font-bold text-[18px] text-[#446119]'>
          Why Farm Trust Finance (FTF)
          </h1>
          <h1 className='font-bold text-[20px] py-4'>
          Inclusive Banking for Farmers
          </h1>
          <p className='lg:w-[560px] text-[18px] pr-5'>
          FTF is committed to financial inclusivity, specifically designed to cater to the financial requirements of smallholder farmers. By offering a range of banking services, including lending, borrowing, and savings, FTF addresses the financial challenges faced by farmers, helping them build a secure and sustainable financial future.
          </p>
        </div>
        <img className='w-[400px] mt-5' src='/img/why.png' />
      </section>

      <section className='mt-40 lg:flex justify-around items-center'>
        <img className='w-[400px] mt-5' src='/img/insure.png' />
        <div className='pl-5'>
          {/* <h1 className='font-bold text-[18px] text-[#446119]'>
          Why Farm Trust Finance (FTF)
          </h1> */}
          <h1 className='font-bold text-[20px] py-4'>
          Prometric Insurance
          </h1>
          <p className='lg:w-[560px] text-[18px]'>
          FTF understands the inherent risks in agriculture. Through its Prometric insurance services, the platform provides farmers with a safety net, protecting them against unforeseen events such as crop failure, natural disasters, or market fluctuations. This ensures that farmers can cultivate their crops with confidence, knowing they have financial support in times of need.
          </p>
        </div>
      </section>

      <section className='mt-40 lg:flex justify-around items-center'>
        <div>
          {/* <h1 className='font-bold text-[18px] text-[#446119]'>
          Why Farm Trust Finance (FTF)
          </h1> */}
          <h1 className='font-bold text-[20px] py-4'>
          Marketplace
          </h1>
          <p className='lg:w-[560px] text-[18px] pr-5'>
          FTF serves as a marketplace, connecting farmers with buyers and facilitating trade. This feature enhances market access for smallholder farmers, ensuring that their produce reaches a wider audience. By bridging the gap around farmers and consumers, FTF contributes to the economic empowerment of agricultural communities.
          </p>
        </div>
        <div className='text-center'>
          <img className='w-[400px] m-auto mt-5' src='/img/market.png' />
        </div>
      </section>
    </BaseLayout>
  )
}