import React, { useState } from 'react'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { hookSignUp } from '@/hooks/hookSignUp'
import Input from '../atoms/Input'
import Table from '../templates/Table'
import InnerInventoryTable from '@/tables/InnerInventory'
import InnerProductTable from '@/tables/InnerProduct'

export default function PopupProducts() {
	const t = useTranslations("products")
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
	
	const switchBtns = [
		{value : "details" , name : t("product_details.title")} ,
		{value : "record" , name : t("feeding_record")} ,
	]
	const [val , setval] = useState(switchBtns[0].value)
	const { headContent, data } = InnerProductTable();

  return (
	<div>
		<div className='flex items-center gap-[10px]  justify-between' >
			<div className='flex items-center gap-[10px]  ' >
				{
					switchBtns.map((e,i)=> ( <span onClick={()=> setval(e.value)} key={i} className={`max-w-fit px-[10px] flex items-center justify-center w-full h-[42px] duration-300  cursor-pointer hover:bg-opacity-90 ${e.value == val ? "bg-secondery text-white" : "bg-white text-[#637381]"}  text-base font-normal rounded-[8px]`} > {e.name} </span> ))
				}
			</div>
			<Image className=' w-[60px] h-[60px] rounded-full ' src={"/icons/test/13.png"} alt='' width={60} height={60} />
		</div>

		{val == "details" && <div className='flex flex-col gap-[30px] mt-[30px] ' >
			<Input dataAos={"fade-up"} delay={0} cnInput={"!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("product_details.product_name")}  />
			<Input dataAos={"fade-up"} delay={100} cnInput={"!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("product_details.pieces_count")}  />
			<Button dataAos={"fade-up"} delay={200} name={t("confirmation")} cn={"w-full bg-secondery  "}  />
		</div>}

		{
			val == "record" && <div data-aos="fade-up" > <Table nameEditBtn={''} head={headContent} data={data}  /> </div>
		}
	</div>
  )
}
