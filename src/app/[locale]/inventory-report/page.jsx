'use client';
import ButtonIcon from '@/components/atoms/ButtonIcon';
import Table from '@/components/templates/Table';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import InventoryTable from '@/tables/Inventory';
import PopupInventory from '@/components/popupContent/PopupInventory';
import Popup from '@/components/molecules/Popup';

export default function page() {
    const t = useTranslations('inventory');
    const { headContent, data } = InventoryTable();

    //! popup
    const [isOpenPopup, setisOpenPopup] = useState({show : false , id : null});


    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]'>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div className='flex items-center gap-[10px]'>
                    <h1 className=' @max-lg:text-center text-[#0f1728] text-[27px] font-normal'> {t('inventory_reports')} </h1>
                    <div className='min-w-[45px] h-[27px] px-2 py-0.5 bg-[#f5f8ff] rounded-2xl justify-center items-center flex text-center text-[#084384] text-xs font-normal'> 1500 </div>
                </div>

                <div className='flex items-center gap-[10px] flex-wrap '>
                    <ButtonIcon icon={'/icons/pdf.png'} />
                    <ButtonIcon icon={'/icons/print.png'} />
                    <ButtonIcon icon={'/icons/copy.png'} />
                    {/* <Button name={t("new_center")} cn={"bg-secondery  "} order={"order-[-1]"} icon={<Image src={"/icons/plus.png"} alt='' width={22} height={22} /> } /> */}
                </div>
            </div>


            {/*  Table  */}
            <div className='cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px] '>
                <Table setisOpenPopup={setisOpenPopup} nameEditBtn={''} head={headContent} data={data} onOpen={() => setisOpenPopup(true)} />
            </div>

            <Popup title={t('shipping_stock')} isOpen={isOpenPopup.show} onClose={() => setisOpenPopup({show : false})} content={<PopupInventory id={isOpenPopup.id} />} />
        </div>
    );
}
