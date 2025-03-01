
"use client"
import Button from '@/components/atoms/Button';
import ButtonIcon from '@/components/atoms/ButtonIcon';
import Input from '@/components/atoms/Input';
import Table from '@/components/templates/Table';
import { hookSignUp } from '@/hooks/hookSignUp';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import React, { useState } from 'react'
import Popup from '@/components/molecules/Popup';
import MyWithdrawalsTable from '@/tables/MyWithdrawals';
import PopupWithdrow from '@/components/popupContent/PopupWithdrow';
import { Search } from 'lucide-react';

export default function page() {
	const t = useTranslations("my-withdrawals")
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
	const {headContent , data} = MyWithdrawalsTable()


		//! popup
	const [isOpenPopup , setisOpenPopup] = useState(false)
	
  return (
	<div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]' >

		{/*  Name of the page  */}
		<div className=' cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div className='flex items-center gap-[10px]' >
                    <h1 className=' @max-lg:text-center text-[#0f1728] dark:text-[#fff] duration-300  text-[27px] font-normal'> {t('my_withdrawals')} </h1>
                    <div className="min-w-[45px] h-[27px] px-2 py-0.5  rounded-2xl justify-center items-center flex text-center text-[#084384] dark:text-white bg-[#f5f8ff] dark:bg-bg4 text-xs font-normal"> 1500 </div>
                </div>

				<div className='flex items-center gap-[10px] flex-wrap ' >
					<Input cnInput={"!h-[45px]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} place={t('search_placeholder')} icon={<Search />} />
					<ButtonIcon icon={"/icons/filter.png"} />
					<ButtonIcon icon={"/icons/replace.png"} />
					<ButtonIcon icon={"/icons/pdf.png"} />
					<ButtonIcon icon={"/icons/print.png"} />
					<ButtonIcon icon={"/icons/copy.png"} />
					<Button onclick={() => setisOpenPopup(true)} order={"order-[-1]  "} cn={"bg-secondery dark:bg-primary "}  name={t("new_withdrawal")} icon={<Image src={"/icons/plus.png"} alt='' width={20} height={20} />} />
				</div>

            </div>


			{/*  Table  */}
			<div className='cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px] ' >
				<Table nameEditBtn={""} head={headContent} data={data} onOpen={() => setisOpenPopup(true)} />
			</div>
			<Popup title={t('new_withdrawal')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={ <PopupWithdrow /> } />

	</div>
  )
}
