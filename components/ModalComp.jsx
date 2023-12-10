import React from 'react';


const ModalComp = ({ isOpen, onClose, children, styling, XIcon }) => {
  return (
    <div
      className={`absolute inset-0 flex items-start pt-10 justify-center z-50  ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div onClick={() => onClose()} className="absolute inset-0 bg-[#010B1ACC] opacity-70 h-[100vh]"></div>
      <div className={`bg-white rounded-xl z-10 ${styling}`}>
      <div className={`flex justify-end px-4 py-4 ${
        XIcon ? '' : 'hidden'
      } `}>
        <img src='/icons/close-x.svg' className='w-[15px] cursor-pointer'  onClick={onClose}  />
      </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalComp;