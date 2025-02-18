"use client"
import AddImage from '@/components/atoms/AddImage';
import Breadcrumb from '@/components/atoms/Breadcrumb ';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import MultiSelectDropdown from '@/components/atoms/MultiSelect';
import RichTextEditor from '@/components/atoms/RichText';
import Select from '@/components/atoms/Select';
import Popup from '@/components/molecules/Popup';
import Title from '@/components/pages/common/Title';
import PopupProducts from '@/components/popupContent/PopupProducts';
import { hookSignUp } from '@/hooks/hookSignUp';
import { withdrawalTypes } from '@/seed';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

export default function page({params}) {
	const t = useTranslations("products")
	const [isOpenPopup , setisOpenPopup] = useState(false)
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();


		const breadcrumbItems = [
			{ label: t('products'), href: '/products' },
			{ label: t('product_edit_with_id' , {count : params.id} ), href: null },
		];

    return (
        <div className='pb-[40px] pt-[20px]' >
            {/*  Name of the page  */}
            <div className='cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
				<div>
                    <h1 className=' @max-lg:text-center text-[#0f1728] text-2xl font-normal'> {t('product_edit')} </h1>
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <div className='flex items-center gap-[10px] flex-wrap '>
                    <Button cn={'bg-secondery  '} name={t('save')}  />
                </div>
            </div>


			<div className=' grid grid-cols-3 @max-xl:grid-cols-2 @max-lg:!grid-cols-1 mt-[20px] gap-[20px] '>
				<div className=' h-fit p20 @xl:col-span-2 grid grid-cols-2 gap-[30px] cShadow  bg-white rounded-[10px]' >
					<Input cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'item_name'}             error={errors?.item_name}              type={'text'}       register={register('item_name')}           label={t('item_name')}   place={t("item_name")} />
					<Input cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'wholesale_price'}       error={errors?.wholesale_price}        type={'text'}       register={register('wholesale_price')}     label={t('wholesale_price')}   place={t("wholesale_price")} />
					<Select cnSelect={'bg-[#f7f7f7]'}                             KEY='product_classification'  error={errors?.product_classification} setValue={setValue} watch={watch}                              label={t('product_classification')} iconSelect={'/icons/two-arrow.png'} trigger={trigger} data={withdrawalTypes} place={withdrawalTypes[0].value} />
					<Select cnSelect={'bg-[#f7f7f7]'}                             KEY='categories'              error={errors?.categories}             setValue={setValue} watch={watch}                              label={t('categories')} iconSelect={'/icons/two-arrow.png'} trigger={trigger} data={withdrawalTypes} place={withdrawalTypes[0].value} />

					<MultiSelectDropdown cnInput={'!min-h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY='new_classification' label={t("new_classification")} place={t("add_new_item")} />
					<Input  cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'piece_count'}           error={errors?.piece_count}            type={'text'}       register={register('piece_count')}         label={t('piece_count')} place={t('piece_count')} />
					<Input cn={" col-span-2 "} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'image_files_link'}      error={errors?.image_files_link}       type={'text'}       register={register('image_files_link')}    label={t('image_files_link')} />
					{/* <Input  cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'product_description'}   error={errors?.product_description}    type={'text'}       register={register('product_description')}  /> */}
					<RichTextEditor cn="col-span-2" label={t('product_description')} place={t("write_item_details_here")} />
				</div>


				<div className='   cShadow  bg-white p-[20px] rounded-[10px]' >
					<Title title={t("product_image")} />
					<AddImage multiple={false} title={t("click_to_upload_product_image")} cn="mb-[30px]" />
					
					<Title title={t("additional_images")} />
					<AddImage multiple={true} title={t("click_to_upload_files")} desc={t("upload_limit")} cn="mb-[30px]" />
				</div>
			</div>

			<Popup title={t('provide')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={ <PopupProducts /> } />

        </div>
    );
}
