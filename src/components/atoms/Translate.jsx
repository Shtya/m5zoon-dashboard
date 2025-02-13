"use client"
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function Translate({cn , cnParent}) {
  const router = useRouter();
  const pathname  = usePathname()
  const locale = useLocale()


  // Function to switch the language
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'; 
    router.push(pathname, { locale: newLocale });
  };


  return (
    <div
      className={` ${cnParent} flex-none flex ltr:border-l-[1px] rtl:border-r-[1px] ltr:border-l-[#c2c2c2] rtl:border-r-[#c2c2c2] py-[15px] px-[20px] ltr:ml-[10px] rtl:mr-[10px] items-center gap-[5px]  cursor-pointer  duration-200 justify-center`}
      onClick={switchLanguage} // Add onClick handler
    >
      <Image alt='' src={"/icons/en.png"} width={22} height={22} />
      {/* <Locale cn={cn} /> */}
    
    </div>
  );
}