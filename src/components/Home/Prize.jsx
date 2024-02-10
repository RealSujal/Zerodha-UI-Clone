import React from 'react';

function Prize() {
  return (
    <div className="flex flex-row px-32 text-gray-700 pb-20 max-sm:flex-col max-sm:px-5 gap-10">
      <div className="w-2/5 leading-relaxed max-sm:w-full">
        <h1 className="font-medium pb-4" style={{ fontSize: '2rem' }}>
          Unbeatable pricing
        </h1>
        <p className="pb-4">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <button>
          See pricing <i class="ri-arrow-right-line"></i>
        </button>
      </div>

      <div className="w-3/5 flex flex-row justify-center px-5 gap-px leading-relaxed text-gray-700 max-sm:flex-col max-sm:w-full max-sm:p-0">
        <div className="h-48 w-64 p-5 text-center  text-wrap border border-gray-300 max-sm:w-full">
          <h1 className="font-medium" style={{ fontSize: '2.5rem' }}>
            ₹0
          </h1>
          <p className="py-5">Free equity delivery and direct mutual funds</p>
        </div>
        <div className="h-48 w-64 text-center border border-gray-300 p-5 max-sm:w-full">
          <h1 className="font-medium" style={{ fontSize: '2.5rem' }}>
            ₹20
          </h1>
          <p className="py-5">Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Prize;
