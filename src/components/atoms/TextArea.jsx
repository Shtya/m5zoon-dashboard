import React from 'react'
import { useTranslations } from 'next-intl'


export default function TextArea({ delay , place , dataAos ,  error , cnInput , classname , label , KEY , register , cnLabel}) {
  const t = useTranslations()


	return (
	<div data-aos={dataAos} data-aos-delay={delay} className={`${classname} flex flex-col  gap-[15px]  relative `} >
		{label && <label htmlFor={KEY} className={`text-[#3e4c5b] dark:text-[#fff] text-lg font-normal${cnLabel}`} > {label} </label> }
		
		<div className={`rounded-[6px] border dark:!border-border1 border-[#7d7d7d]/20 w-full overflow-hidden text-xl h-[90px]  ${cnInput} `} >
			<textarea className={` text-[#637381] dark:text-[#fff] text-base   p-[10px] h-full w-full font-normal bg-transparent dark:!bg-bg3 outline-none `} {...register} id={KEY} placeholder={place} />
		</div>
		{error && <div className='error ' > {t(error?.message)} </div>}
	</div>
  )
}
