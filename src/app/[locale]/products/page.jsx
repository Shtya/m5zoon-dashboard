
"use client"
import Button from '@/components/atoms/Button';
import ButtonIcon from '@/components/atoms/ButtonIcon';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Table from '@/components/templates/Table';
import { hookSignUp } from '@/hooks/hookSignUp';
import { productStatusOptions, socialMediaPlatforms } from '@/seed';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import React, { useState } from 'react'
import productsTable from '@/tables/products';
import PopupProducts from '@/components/popupContent/PopupProducts';
import Popup from '@/components/molecules/Popup';
import { Search } from 'lucide-react';

export default function page() {
	const t = useTranslations("products")
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
	const {headContent , productsData} = productsTable()


	//! popup
	const [isOpenPopup , setisOpenPopup] = useState(false)
	
  return (
	<div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]' >

		{/*  Name of the page  */}
		<div className=' cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div className='flex items-center gap-[10px]' >
                    <h1 className=' @max-lg:text-center text-[#0f1728] dark:text-[#fff] duration-300  text-[27px] font-normal'> {t('products')} </h1>
                    <div className="min-w-[45px] h-[27px] px-2 py-0.5 bg-[#f5f8ff] dark:bg-bg4 rounded-2xl justify-center items-center flex text-center text-[#084384] dark:text-white text-xs font-normal"> 1500 </div>
                </div>

				<div className='flex items-center gap-[10px] flex-wrap ' >
					<Input cnInput={"!h-[50px]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} place={t('search_placeholder')} icon={ <Search /> } />
					<ButtonIcon icon={"/icons/pdf.png"} />
					<ButtonIcon icon={"/icons/print.png"} />
					<ButtonIcon icon={"/icons/copy.png"} />
					<Button href={"/products/add"} order={"order-[-1]  "} cn={"bg-secondery dark:bg-primary  "}  name={t("add_product")} icon={<Image src={"/icons/plus.png"} alt='' width={20} height={20} />} />
				</div>
            </div>



            {/* Search */}
            <div className=' cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px]  flex items-end justify-between @max-xl:justify-center flex-wrap gap-x-[10px] gap-y-[20px]  '>
                <div className='grid grid-cols-2 gap-[20px] @max-md:grid-cols-1 w-full  @xl:w-[60%]'>
                    <Select KEY='city' cnSelect={"bg-[#f7f7f7]"} error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={productStatusOptions} place={productStatusOptions[0].value} label={t('product_status')} iconSelect={"/icons/two-arrow.png"} />
                    <Select KEY='city' cnSelect={"bg-[#f7f7f7]"} error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={productStatusOptions} place={productStatusOptions[0].value} label={t('categories')}     iconSelect={"/icons/two-arrow.png"} />
                </div>

                <div className='flex items-center gap-[10px] flex-wrap max-w-fit @xl:w-[40%] '>
                    <Button cn={' !min-h-[55px] bg-secondery  dark:bg-primary  '} name={t('search_now')} />
                    <Button cn={' border border-gray-200 !min-h-[55px] bg-white dark:bg-bg4 dark:!text-white dark:border-border1 !text-secondery   '} name={t('update')} icon={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5054)"><path className='dark:stroke-white '  d="M9.75 9L7.5 11.25L9.75 13.5M5.25 6L7.5 3.75L5.25 1.5" stroke="#0E2354" stroke-linecap="round" stroke-linejoin="round"/><path className='dark:stroke-white '  d="M7.5 11.25H12C12.5304 11.25 13.0391 11.0393 13.4142 10.6642C13.7893 10.2891 14 9.78043 14 9.25V5.75C14 5.21957 13.7893 4.71086 13.4142 4.33579C13.0391 3.96071 12.5304 3.75 12 3.75H10.5M7.5 3.75H3C2.46957 3.75 1.96086 3.96071 1.58579 4.33579C1.21071 4.71086 1 5.21957 1 5.75V9.25C1 9.78043 1.21071 10.2891 1.58579 10.6642C1.96086 11.0393 2.46957 11.25 3 11.25H4.5" stroke="#0E2354" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5054"><rect width="14" height="14" fill="white" transform="translate(0.5 0.5)"/></clipPath></defs></svg>} />
                </div>
            </div>



			{/*  Table  */}
			<div className='cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px] ' >
				<Table showHref={"/products/show"} editHref={"/products/edit"} nameEditBtn={t('provide')} head={headContent} data={productsData} onOpen={() => setisOpenPopup(true)} />
			</div>
			<Popup  title={t('provide')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={ <PopupProducts /> } />



	</div>
  )
}
