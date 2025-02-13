"use client"
import React , {useState} from 'react'
import Image from "next/image"
import { useTranslations } from 'next-intl'


export default function Input({ required , delay , place , dataAos , error , cnInput , cn , label , type , icon , KEY , register , cnLabel}) {
  const t = useTranslations()
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
	type == "password" &&
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };


	return (
	<div data-aos={dataAos} data-aos-delay={delay} className={`${cn} flex flex-col  gap-[15px] max-md:gap-[10px]  relative `} >
		{label && <label htmlFor={KEY} className={`${cnLabel} text-[#3e4c5b] text-lg font-normal`} > {label} <span className='text-[#ff4b55]' > {required && "*"} </span> </label> }
		
		<div  className={`h-[55px]  relative overflow-hidden rounded-lg border border-[#ececeb]  w-full ${cnInput} `} >
			<input className={`text-[#637381] text-base font-normal  w-full ${icon ? "ltr:pl-[40px] rtl:pr-[40px]" : "" } px-[10px] h-full outline-none `} {...register} id={KEY} placeholder={place} type={inputType} />
			{icon && <Image onClick={toggleInputType} className='absolute hover:opacity-50 duration-300 ltr:left-[10px] cursor-pointer rtl:right-[10px] top-[50%] translate-y-[-50%] '  src={ icon } alt="" width={20} height={20} /> }
		</div>

		{error && <div className='error text-[#ff4b55] mt-[-10px]  t14  ' > {t(error?.message)} </div>}
	</div>
  )
}
