import { useState } from "react";

import BaseLayout from "layout/Base";
import ModalComp from "../../components/ModalComp";
import { packages } from "../../utils/packages";

const index = () => {
  const [isRegister, setRegister] = useState(false)
  const [isFrom, setForm] = useState(false)
  return (
    <BaseLayout>
      <section className="mt-10">
        <button onClick={() => setRegister(true)} className="bg-[#316721] text-white py-4 px-5 font-bold rounded-md">Register Insurance </button>
        <ModalComp XIcon={true} isOpen={isRegister} onClose={() => setRegister(false)} styling="w-[400px] md:w-[680px] pb-[10px] text-center">
          {!isFrom ? (
            <>
              <img src='/icons/insure.svg' className='m-auto'  />
              <h1 className="text-[32px] font-bold my-5">Register Insurance</h1>
              <p className="text-[18px] px-20">Dear customer to register your insurance you need to speak with our agent for proper registration on your insurance plan.</p>
              <button onClick={() => setForm(true)} className="border border-[#316721] text-[#316721] mt-5 px-5 py-3 rounded-3xl">Send us a message</button>  
            </>
          ) :

          (
            <>
              <form>
                <div>
                  <input type="text" placeholder="Name" className="border p-4 border-[#316721] rounded-lg" />
                </div>
                <div className="mt-3">
                  <input type="email" placeholder="Email" className="border p-4 border-[#316721] rounded-lg" />
                </div>
                <div className="mt-3">
                  <input type="text" placeholder="Location" className="border p-4 border-[#316721] rounded-lg" />
                </div>
                <div className="mt-3">
                  <input type="text" placeholder="Subject" className="border p-4 border-[#316721] rounded-lg" />
                </div>
                <div className="mt-3">
                  {/* <input type="text" placeholder="Subject" /> */}
                  <textarea name="" id="" cols="21" rows="5" placeholder="Message" className="border p-4 border-[#316721] rounded-lg" ></textarea>
                </div>
                <button  className="border border-[#316721] text-[#316721] mt-5 px-5 py-3 rounded-3xl">Send message</button> 
              </form>
            </>
          )
          }
        </ModalComp>
      </section>

      <section className="mt-20">
          <div class="grid grid-cols-3 gap-4">
            {packages.map((pac, i) => (
              <div className="border rounded-xl">
                <div className={`bg-[${pac.color}] text-center text-white rounded-t-xl`} >
                  <h1 className="font-fira text-[32px]">{pac.name}</h1>
                </div>
                <div className="py-8 px-10 ">
                  <p className="text-[20px]">{pac.desc}</p>
                  <h2 className="font-fira text-[32px] font-bold">${pac.amount}</h2>
                  <p className="mb-12">{pac.text}</p>
                  <hr />

                  <h3 className="font-bold text-[20px] mt-12">What’s Include?</h3>

                  <ul>
                    {pac.includes.map(item => (
                      <li className="pt-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
      </section>
    </BaseLayout>
  );
};

export default index;
