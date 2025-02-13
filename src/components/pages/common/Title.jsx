"use client"
import Select from '@/components/atoms/Select';
import { hookSignUp } from '@/hooks/hookSignUp';
import React from 'react'

export default function Title({title , cn , data , place}) {
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
	

  return (
	<div className={`flex items-center justify-between gap-[10px] ${cn} mb-[30px] `} >

		<div className=' w-full flex items-center gap-[10px] ' >
			<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8.5" r="6.5" stroke="#F9A51A" stroke-width="3"/>
			</svg>
			<span className=' w-full text-[#0a2849] text-xl @max-xl:text-[14px] font-normal' > {title} </span>
		</div>
	
		{data && <Select cnSelect={"bg-neutral-50 border !border-[#ebf0ed] "} cn={" max-w-[100px] h-[40px] "} KEY='city'  error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={data} place={place} />}

	</div>
  )
}
