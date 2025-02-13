import React from 'react'
import { useTranslations } from 'next-intl'


export default function TextArea({ delay , place , dataAos ,  error , cnInput , classname , label , KEY , register , cnLabel}) {
  const t = useTranslations()


	return (
	<div data-aos={dataAos} data-aos-delay={delay} className={`${classname} flex flex-col  gap-[5px]  relative `} >
		{label && <label htmlFor={KEY} className={`h5 ${cnLabel}`} > {label} </label> }
		
		<div className={`rounded-[8px] border border-[#7d7d7d]/20 w-full overflow-hidden text-xl h-[90px]  ${cnInput} `} >
			<textarea className={` placeholder:text-[#979797]/60 text-[#555]  p-[10px] h-full w-full font-normal outline-none `} {...register} id={KEY} placeholder={place} />
		</div>
		{error && <div className='error ' > {t(error?.message)} </div>}
	</div>
  )
}
