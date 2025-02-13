import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function ProductMostSales({data}) {
	const t = useTranslations("dashboard.tables3")

  return (
	<div className='flex flex-col gap-[20px] ' >
		{
			data?.map((e,i)=> (
				<div key={i} className='flex py-[7px] items-center justify-between gap-[15px] '  > 
						<Image src={e.icon} alt='' width={50} height={50} />
						<div className='flex flex-col  w-full  ' >
							<span className='text-[#818b9a] text-[15px] font-normal' > {e.name} </span>
							<span className='text-[#404142] text-lg font-normal' > {t("remain")} {e.stock} </span>
						</div>
						<span className=' min-w-[95px] h-[35px] px-1.5 py-[3px] bg-[#f1f5ff] rounded-[10px] text-[#084384] text-lg font-normal flex   justify-center items-center ' > {e.price} {e.unit} </span>
				</div>
			))
		}
	</div>
  )
}





export function AvarageCosts({data}) {
	const t = useTranslations("dashboard.tables3")

	// {  avrage : "15.25" , unit : "up" , icon : "/icons/test/5.png" , name : "رسوم  مراكز الاتصال" },

	const colors = [
		"#aac6ff",
		"#b69bf9",
		"#e5b648",
		"#1dd2b4",
	]
  return (
	<div className='flex flex-col gap-[20px] ' >
		{
			data?.map((e,i)=> (
				<div key={i} style={{ borderColor : colors[i] }} className={` p-[7px]  border-dashed border-[2px] rounded-[3px] flex items-center justify-between gap-[10px]`}  > 
						<Image src={e.icon} alt='' width={50} height={50} />
						<div className='flex flex-col  w-full  '  >
							<span className='text-[#818b9a] text-[15px] font-normal' > {e.name} </span>
							<span className='text-[#404142] text-lg font-normal rtl:text-right ' > {e.currency} {e.price} </span>
						</div>
						<span className={` ${e.unit == "up" ? " text-[#159b3b] " : "text-[#d62e2e]"} min-w-[95px] h-[35px] px-1.5 py-[3px]  text-lg font-normal flex  gap-[3px] justify-center items-center`} >
							<Image src={`/icons/${e.unit == "up" ? "up-z-green.png" : "down-z-red.png"}`} alt='' width={20} height={20} />
							{e.avrage} 
						</span>
				</div>
			))
		}
	</div>
  )
}




export function DataStores({data}) {
	const t = useTranslations("dashboard.tables3")

	// {  avrage : "15.25" , unit : "up" , icon : "/icons/test/5.png" , name : "رسوم  مراكز الاتصال" },

	const colors = [
		"#b3aaff",
		"#f6ce8b",
		"#a2cfaf",
		"#ffd2de",
	]
  return (
	<div className='flex flex-col gap-[20px] ' >
		{
			data?.map((e,i)=> (
				<div key={i} style={{ borderColor : colors[i] }} className={` p-[7px]  border-dashed border-[2px] rounded-[3px] flex items-center justify-between gap-[10px]`}  > 
						<Image src={e.icon} alt='' width={50} height={50} />
						<div className='flex flex-col  w-full  '  >
							<span className='text-[#818b9a] text-[15px] font-normal' > {e.name} </span>
							<span className='text-[#404142] text-lg font-normal rtl:text-right ' > {e.price} {t(e.currency)}  </span>
						</div>
						<span className={` ${e.unit == "up" ? " text-[#159b3b] " : "text-[#d62e2e]"} min-w-[95px] h-[35px] px-1.5 py-[3px]  text-lg font-normal flex  gap-[3px] justify-center items-center`} >
							<Image src={`/icons/${e.unit == "up" ? "up-z-green.png" : "down-z-red.png"}`} alt='' width={20} height={20} />
							{e.avrage} 
						</span>
				</div>
			))
		}
	</div>
  )
}
