'use client';
import Button from '@/components/atoms/Button';
import ButtonIcon from '@/components/atoms/ButtonIcon';
import Table from '@/components/templates/Table';
import { hookSignUp } from '@/hooks/hookSignUp';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Image from 'next/image';
import Select from '@/components/atoms/Select';
import { FadeDate } from '@/seed';
import InvoicesTable from '../../../tables/Invoices';

export default function page() {
    const t = useTranslations('callCenter');
    const t_ = useTranslations('');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
    const { headContent, data } = InvoicesTable();

    //! popup
    const [isOpenPopup, setisOpenPopup] = useState(false);




    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]'>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div className='flex items-center gap-[10px]'>
                    <h1 className=' @max-lg:text-center text-[#0f1728] text-[27px] font-normal'> {t('invoices')} </h1>
                    <div className='min-w-[45px] h-[27px] px-2 py-0.5 bg-[#f5f8ff] rounded-2xl justify-center items-center flex text-center text-[#084384] text-xs font-normal'> 1500 </div>
                </div>

                <div className='flex items-center gap-[10px] flex-wrap '>
                    <ButtonIcon icon={'/icons/pdf.png'} />
                    <ButtonIcon icon={'/icons/print.png'} />
                    <ButtonIcon icon={'/icons/copy.png'} />
                    {/* <Button name={t("new_center")} cn={"bg-secondery  "} order={"order-[-1]"} icon={<Image src={"/icons/plus.png"} alt='' width={22} height={22} /> } /> */}
                </div>
            </div>


            {/*  Search */}
            <div className=' cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px]  flex items-end justify-between @max-xl:justify-center flex-wrap gap-x-[10px] gap-y-[20px]  '>
                <div className='grid grid-cols-2 gap-[20px] @max-md:grid-cols-1 w-full  @xl:w-[60%]'>
                    <Select KEY='city' cnSelect={"bg-[#f7f7f7]"} error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={FadeDate} place={FadeDate[0].value} label={t('from_date')} iconSelect={"/icons/two-arrow.png"} />
                    <Select KEY='city' cnSelect={"bg-[#f7f7f7]"} error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={FadeDate} place={FadeDate[0].value} label={t('to_date')}     iconSelect={"/icons/two-arrow.png"} />
                </div>

                <div className='flex items-center gap-[10px] flex-wrap max-w-fit @xl:w-[40%] '>
                    <Button cn={' !min-h-[55px] bg-secondery   '} name={t('search_now')} />
                    <Button cn={' border border-gray-200 !min-h-[55px] bg-white !text-secondery   '} name={t('update')} icon={<Image src={'/icons/refresh.png'} alt='' width={16} height={16} />} />
                </div>
            </div>



            {/*  Table  */}
            <div className='cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px] '>
                <Table nameEditBtn={''} head={headContent} data={data} onOpen={() => setisOpenPopup(true)} />
            </div>
            {/* <Popup title={t('new_withdrawal')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={<PopupWithdrow />} /> */}
        </div>
    );
}
