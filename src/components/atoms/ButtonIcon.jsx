import Image from 'next/image'
import React from 'react'

export default function ButtonIcon({icon}) {
  return (
	<div className=' cursor-pointer hover:bg-[#efefef] duration-300 group w-[50px] h-[50px] flex items-center justify-center border-[2px] border-[#efefef] rounded-[4px] '  >
		<Image className='group-hover:scale-[1.2] duration-300 ' src={icon} alt='' width={24} height={24} />
	</div>
  )
}
