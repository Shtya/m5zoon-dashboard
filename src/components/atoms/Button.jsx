"use client"
import { useRouter } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';

export default function Button({ onclick , delay , dataAos , shadow , name, cn, href , icon  , order }) {
    const router = useRouter();

    const handleOnClick = () => {
        onclick && onclick();
        if (href) {
            router.push(href);
        }
    };

    return (
        <div data-aos={dataAos} data-aos-delay={delay} onClick={handleOnClick} className={`${cn} ${shadow && "shadow-[0px_38px_50px_0px_rgba(229,231,242,1.00)]" } text-center  t14 font-medium text-white  group cursor-pointer hover:!bg-opacity-80 hover:border-opacity-80 hover:scale-[.99] transition-all duration-300 w-fit min-w-[120px] min-h-[45px] px-[10px] py-[5px] bg-primary rounded-[6px]  flex justify-center items-center gap-[5px] `}>
            <div className='text-nowrap '> {name} </div>
            {icon && <span className={`${order} flex-none `} > {icon} </span>}
        </div>
    );
}
