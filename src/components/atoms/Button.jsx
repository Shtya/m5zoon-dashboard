"use client"
import { useRouter } from '@/navigation';
import Image from 'next/image';
import React from 'react';

export default function Button({ delay , dataAos , shadow , name, cn, href , icon  , order }) {
    const router = useRouter();

    const handleOnClick = () => {
        if (href) {
            router.push(href);
        }
    };

    return (
        <div data-aos={dataAos} data-aos-delay={delay} onClick={handleOnClick} className={`${cn} ${shadow && "shadow-[0px_38px_50px_0px_rgba(229,231,242,1.00)]" } text-center  t16 max-sm:t14 font-medium text-white  group cursor-pointer hover:bg-opacity-70 transition-all duration-300 w-fit min-h-[50px] max-sm:min-h-[45px] max-sm:px-[15px] px-[20px] py-[5px] bg-[#f9a51a] rounded-[10px]  flex justify-center items-center gap-[10px] max-sm:gap-[7px] `}>
            <div className=' '> {name} </div>
            <span className={`${order}`} > {icon} </span>
			
        </div>
    );
}
