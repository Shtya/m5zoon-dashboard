import React, { useState } from 'react'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { hookSignUp } from '@/hooks/hookSignUp'
import Input from '../atoms/Input'
import Table from '../templates/Table'
import InventoryTable from '../../../tables/inventory'
import InnerInventoryTable from '../../../tables/InnerInventory'

export default function PopupInventory({id}) {
	const t = useTranslations("inventory")
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();


    const { headContent, data } = InnerInventoryTable();
		
  return (
	<div>
		<Table nameEditBtn={''} head={headContent} data={data}  />

		{/* <div className='flex items-center gap-[10px]  justify-between' >
			<div className='flex items-center gap-[10px]  ' >
				{
					switchBtns.map((e,i)=> ( <span onClick={()=> setval(e.value)} key={i} className={`max-w-fit px-[10px] flex items-center justify-center w-full h-[42px] duration-300  cursor-pointer hover:bg-opacity-90 ${e.value == val ? "bg-secondery text-white" : "bg-white text-[#637381]"}  text-base font-normal rounded-[8px]`} > {e.name} </span> ))
				}
			</div>
			<Image className=' w-[60px] h-[60px] rounded-full ' src={"/icons/test/13.png"} alt='' width={60} height={60} />
		</div>

		<div className='flex flex-col gap-[30px] mt-[30px] ' >
			<Input cnInput={"!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("product_details.product_name")}  />
			<Input cnInput={"!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("product_details.pieces_count")}  />
			<Button name={t("confirmation")} cn={"w-full bg-secondery  "}  />
		</div> */}
	</div>
  )
}
