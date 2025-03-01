import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'
import Image from 'next/image'
import Translate from '../atoms/Translate'
import Darkmode from '../atoms/Darkmode'

export default function Navbar() {
	const t = useTranslations("")
	const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
	<div className={` ${isScrolled ? 'dark:border-border1 border-gray-100  !shadow-2xl' : ''} border-transparent border-[1px] sticky top-[20px] z-[10000] cShadow p20 !px-[30px] flex  bg-white  items-center justify-between gap-[20px]  rounded-[10px] mt-[10px] `} >
		<div className='@max-xl:hidden ' >
			<h3 className='text-[#242C34] dark:text-[#fff] duration-300 text-2xl font-bold ' > {t("welcomeMessage")} يسرا علام 👋 </h3>
			<p className='text-[#878787] dark:text-white dark:text-opacity-80 text-base font-normal' > {t("platformDescription")} </p>
		</div>

		<div className=' flex items-center gap-[10px] @max-xl:justify-between  @max-xl:w-full ' >
			<Button order={"order-[-1]"} cn={"bg-primary !t16 !px-[10px] !font-normal h-[40px] !min-w-fit !min-h-[40px] "} name={t("addOrder")} icon={ <Image alt='' src={"/icons/range.png"} width={16} height={16} /> } />
			
			<div className='flex items-center gap-[5px] ' >

				<Translate />
				<Darkmode />

				<div className=" flex items-center cursor-pointer gap-[5px]  ">
					<Image className=' rounded-full ' alt='' src={"/icons/avatar.png"} width={45} height={45} />
					<div className='flex-col flex items-center @max-xl:hidden ' >
						<span className='text-[#202020] dark:text-[#fff] duration-300  text-base font-bold' > يسرا علام </span>
						<span className='text-[#8f8f8f] text-sm font-normal ' > {t("code" , {count : 18} )} </span>
					</div>
					{/* <Image className=' @max-md:order-[-1] rtl:mr-[10px] ltr:ml-[10px] ' alt='' src={"/icons/arrow-top-black.png"} width={22} height={22} /> */}
				</div>
			</div>
		</div>
	</div>
  )
}
