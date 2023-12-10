import { useState } from "react";

import BaseLayout from "layout/Base";
import ModalComp from "../../components/ModalComp";
import { packages } from "../../utils/packages";

const index = () => {
  const [isRegister, setRegister] = useState(false)
  const [sent, setSent] = useState(false)
  const [isFrom, setForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendMsg = async (e) => {
    e.preventDefault();
    if (!name.length || !email.length || !location.length || !subject.length || !message.length) {
      return
    }

    
    const payload = {
      name,
      email,
      subject: `FTF - ${subject}`,
      message
    }

    const response = await fetch('https://formsubmit.co/ajax/kingifean@gmail.com', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
      });

    setSent(true)
  }
  return (
    <BaseLayout>
      <section className="mt-10">
        <button onClick={() => setRegister(true)} className="bg-[#316721] text-white py-4 px-5 font-bold rounded-md">Register Insurance </button>
        <ModalComp XIcon={true} isOpen={isRegister} onClose={() => setRegister(false)} styling="w-[400px] md:w-[680px] pb-[10px] text-center">
          {!isFrom ? (
            <>
              <img src='/icons/insure.svg' className='m-auto'  />
              <h1 className="text-[32px] font-bold my-5">Register Insurance</h1>
              <p className="text-[18px] lg:px-20">Dear customer to register your insurance you need to speak with our agent for proper registration on your insurance plan.</p>
              <button onClick={() => setForm(true)} className="border border-[#316721] text-[#316721] mt-5 px-5 py-3 rounded-3xl">Send us a message</button>  
            </>
          ) :

          (
            <>
              <form>
                <div>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="border p-4 border-[#316721] rounded-lg" required />
                </div>
                <div className="mt-3">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="border p-4 border-[#316721] rounded-lg" required />
                </div>
                <div className="mt-3">
                  <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Location" className="border p-4 border-[#316721] rounded-lg" required />
                </div>
                <div className="mt-3">
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject" className="border p-4 border-[#316721] rounded-lg" required />
                </div>
                <div className="mt-3">
                  {/* <input type="text" placeholder="Subject" /> */}
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="21" rows="5" placeholder="Message" className="border p-4 border-[#316721] rounded-lg" required ></textarea>
                </div>
                <button disabled={sent} type="submit" onClick={(e) => sendMsg(e)} className="border border-[#316721] text-[#316721] mt-5 px-5 py-3 rounded-3xl">{sent ? 'Message sent' : 'Send message'}</button>
              </form>
            </>
          )
          }
        </ModalComp>
      </section>

      <section className="mt-20">
          <div class="lg:grid space-y-5 lg:space-y-0 grid-cols-3 gap-4">
            {packages.map((pac, i) => (
              <div className="border rounded-xl">
                <div className={` ${pac.name === 'Gold' ? 'bg-[#935216]' : pac.name === 'Platinum' ? 'bg-[#163D76]' : 'bg-[#049793]'} text-center text-white rounded-t-xl`} >
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
