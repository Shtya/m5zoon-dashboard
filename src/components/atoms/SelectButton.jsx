'use client';
import React, { useState } from 'react';

export default function SelectButton({ data }) {
    const [activeFilter, setActiveFilter] = useState(data?.[0]?.key);

    return (
        <div className=' overflow-x-auto scroll-select-btns '>
            <div className='w-fit  overflow-hidden  flex flex-nowrap gap-y-[5px] gap-x-[1px] justify-center  rounded-[6px] ' >
              {data.map(filter => (
                  <button key={filter.key} className={` text-nowrap px-4 min-h-[45px] py-2 text-sm font-medium  transition-colors ${activeFilter === filter.key ? 'bg-secondery dark:bg-bg1 text-white text-base font-normal' : ' text-[#637381] dark:text-[#fff] text-base font-normal hover:bg-gray-200 hover:dark:bg-bg1 '} bg-[#f6f7fb] dark:bg-bg3 `} onClick={() => setActiveFilter(filter.key)}>
                      {filter.name}
                  </button>
              ))}
            </div>
        </div>
    );
}
