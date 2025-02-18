"use client"
import Button from '@/components/atoms/Button';
import Popup from '@/components/molecules/Popup';
import Title from '@/components/pages/common/Title';
import PopupProducts from '@/components/popupContent/PopupProducts';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

export default function page({params}) {
	const t = useTranslations("products")
	const [isOpenPopup , setisOpenPopup] = useState(false)


		const switchBtns = [
			{value : "details" , name : t("product_details2")} ,
			{value : "description" , name : t("product_description")} ,
		]
		const [switchName , setswitchName] = useState(switchBtns[0].value)

		const detailsProduct = [
			{key:t("product_name") , value : "منتج عسل" } ,
			{key:t("product_status") , value : "مفعل" } ,
			{key:t("remaining_quantity") , value : "98" } ,
			{key:t("size") , value : "عادى" } ,
			{key:t("wholesale_price") , value : "20 درهم" } ,
			{key:t("suggested_selling_price") , value : "600 درهم" } ,
			{key:t("manufacturing_type") , value : "محلي" } ,
			{key:t("categories") , value : "منتجات ترفيهية" } ,
			{key:t("product_files") , value : "ملف متواجد هنا " } ,
			{key:t("current_orders") , value : "24" } ,
		]


		const dataOfPieces = {
			title : t("piece_data"),
			lists : [
				{title : t("shipping_stock") , value : 500  , icon : <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#FFFAF5"/><g clip-path="url(#clip0_1_5529)"><g clip-path="url(#clip1_1_5529)"><path d="M8.375 13.75V15H22.0312V24.375H17.6066C17.2861 23.3006 16.1749 22.5 14.8438 22.5C13.5126 22.5 12.4014 23.3006 12.0809 24.375H11.25V21.25H9.8125V25.625H12.0809C12.4014 26.6994 13.5126 27.5 14.8438 27.5C16.1749 27.5 17.2861 26.6994 17.6066 25.625H23.5809C23.9014 26.6994 25.0126 27.5 26.3438 27.5C27.6749 27.5 28.7861 26.6994 29.1066 25.625H31.375V20.5275L31.3297 20.4294L29.8922 16.6794L29.7362 16.25H23.4688V13.75H8.375ZM9.09375 16.25V17.5H15.5625V16.25H9.09375ZM23.4688 17.5H28.702L29.9375 20.7031V24.375H29.1066C28.7861 23.3006 27.6749 22.5 26.3438 22.5C25.0126 22.5 23.9014 23.3006 23.5809 24.375H23.4688V17.5ZM9.8125 18.75V20H14.125V18.75H9.8125ZM14.8438 23.75C15.6466 23.75 16.2812 24.3019 16.2812 25C16.2812 25.6981 15.6466 26.25 14.8438 26.25C14.0409 26.25 13.4062 25.6981 13.4062 25C13.4062 24.3019 14.0409 23.75 14.8438 23.75ZM26.3438 23.75C27.1466 23.75 27.7812 24.3019 27.7812 25C27.7812 25.6981 27.1466 26.25 26.3438 26.25C25.5409 26.25 24.9062 25.6981 24.9062 25C24.9062 24.3019 25.5409 23.75 26.3438 23.75Z" fill="#E8B36A"/></g></g><defs><clipPath id="clip0_1_5529"><rect width="22" height="22" fill="white" transform="translate(9 9)"/></clipPath><clipPath id="clip1_1_5529"><rect width="23" height="20" fill="white" transform="translate(8.375 10)"/></clipPath></defs></svg> } ,
				{title : t("sold_pieces_count") , value : 500  , icon : <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="40" height="40" rx="6" fill="#EAEFFE"/><path d="M13 16.7455V27.9375H27V16.7455H23V23.5335L20 22.0335L17 23.5335V16.7455H13ZM12 28.9375V15.8535L14.416 12.9375H25.566L28 15.8915V28.9375H12ZM13.38 15.7455H26.6L25.077 13.9375H14.904L13.38 15.7455ZM18 16.7455V21.8985L20 20.8985L22 21.8985V16.7465L18 16.7455Z" fill="#244C97"/></svg> } ,
				{title : t("shelf_stock") , value : 500  , icon : <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#F0FEEA"/><path d="M21.8538 11.8538C21.9449 11.7595 21.9953 11.6332 21.9941 11.5021C21.993 11.371 21.9404 11.2456 21.8477 11.1529C21.755 11.0602 21.6296 11.0076 21.4985 11.0064C21.3674 11.0053 21.2411 11.0557 21.1468 11.1468L20.0003 12.2933L18.8538 11.1468C18.8077 11.099 18.7525 11.0609 18.6915 11.0347C18.6305 11.0085 18.5649 10.9947 18.4985 10.9942C18.4321 10.9936 18.3663 11.0062 18.3048 11.0314C18.2434 11.0565 18.1875 11.0936 18.1406 11.1406C18.0936 11.1875 18.0565 11.2434 18.0314 11.3048C18.0062 11.3663 17.9936 11.4321 17.9942 11.4985C17.9947 11.5649 18.0085 11.6305 18.0347 11.6915C18.0609 11.7525 18.099 11.8077 18.1468 11.8538L19.2933 13.0003L18.1468 14.1468C18.0557 14.2411 18.0053 14.3674 18.0064 14.4985C18.0076 14.6296 18.0602 14.755 18.1529 14.8477C18.2456 14.9404 18.371 14.993 18.5021 14.9941C18.6332 14.9953 18.7595 14.9449 18.8538 14.8538L20.0003 13.7073L21.1468 14.8538C21.2406 14.9475 21.3678 15.0002 21.5005 15.0001C21.6331 15.0001 21.7603 14.9474 21.854 14.8535C21.9478 14.7597 22.0004 14.6325 22.0004 14.4999C22.0003 14.3672 21.9476 14.24 21.8538 14.1463L20.7073 13.0003L21.8538 11.8538ZM24.9748 24.0923C24.9956 24.1546 25.0038 24.2204 24.9992 24.2859C24.9945 24.3514 24.977 24.4154 24.9476 24.4741C24.9182 24.5328 24.8775 24.5852 24.8279 24.6282C24.7782 24.6712 24.7206 24.7041 24.6583 24.7248L22.4083 25.4748C22.2824 25.5167 22.1451 25.5069 22.0265 25.4475C21.9079 25.3882 21.8177 25.2841 21.7758 25.1583C21.7339 25.0324 21.7437 24.8951 21.803 24.7765C21.8624 24.6579 21.9664 24.5677 22.0923 24.5258L24.3423 23.7758C24.4046 23.755 24.4704 23.7467 24.5359 23.7514C24.6014 23.7561 24.6654 23.7736 24.7241 23.803C24.7828 23.8324 24.8352 23.8731 24.8782 23.9227C24.9212 23.9723 24.9541 24.03 24.9748 24.0923Z" fill="#74C470"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3422 21.2245L13.0002 21.777V26C13.0002 26.104 13.0326 26.2053 13.0929 26.29C13.1533 26.3747 13.2385 26.4385 13.3367 26.4725L19.8327 28.721C19.9355 28.7575 20.0473 28.7594 20.1512 28.7265L20.1582 28.7245L20.1657 28.722L26.6637 26.4725C26.762 26.4385 26.8472 26.3747 26.9075 26.29C26.9678 26.2053 27.0002 26.104 27.0002 26V21.777L28.6582 21.2245C28.7347 21.1991 28.8039 21.1555 28.8599 21.0976C28.9159 21.0396 28.9571 20.969 28.98 20.8917C29.0028 20.8144 29.0066 20.7327 28.9911 20.6536C28.9755 20.5746 28.9411 20.5004 28.8907 20.4375L26.8907 17.9375C26.8314 17.8636 26.7523 17.8081 26.6627 17.7775L20.1637 15.5275C20.0578 15.4908 19.9426 15.4908 19.8367 15.5275L13.3377 17.7775C13.2481 17.8081 13.169 17.8636 13.1097 17.9375L11.1097 20.4375C11.0593 20.5004 11.0249 20.5746 11.0094 20.6536C10.9938 20.7327 10.9977 20.8144 11.0205 20.8917C11.0433 20.969 11.0845 21.0396 11.1405 21.0976C11.1965 21.1555 11.2657 21.1991 11.3422 21.2245ZM18.6597 23.2865L19.5002 22.0865V27.548L14.0002 25.644V22.11L18.0922 23.474C18.1944 23.508 18.3049 23.508 18.4072 23.4741C18.5094 23.4403 18.598 23.3748 18.6597 23.2865ZM15.0287 18.25L20.0002 19.971L24.9717 18.25L20.0002 16.529L15.0287 18.25ZM21.3407 23.287L20.5002 22.086V27.548L26.0002 25.644V22.11L21.9082 23.474C21.806 23.508 21.6955 23.508 21.5933 23.4741C21.491 23.4403 21.4024 23.3743 21.3407 23.286M13.6702 18.838L12.3387 20.5025L15.0942 21.421L18.0542 22.4075L19.2107 20.756L19.1432 20.7325L13.6702 18.838ZM27.6617 20.5025L26.3302 18.8375L20.7897 20.756L21.9462 22.4075L27.6617 20.5025Z" fill="#74C470"/></svg> } ,
			]
		}

    return (
        <div className='pb-[40px] pt-[20px]'  >
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div className='flex items-center gap-[10px]'>
                    <h1 className=' @max-lg:text-center text-[#0f1728] text-[27px] font-normal'> {t('product_details_with_id' , {count : params.id} )} </h1>
                </div>

                <div className='flex items-center gap-[10px] flex-wrap '>
                    <Button href={`/products/edit/${params.id}`} order={'order-[-1]  '} cn={'bg-primary  '} name={t('edit')} icon={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 6.4997L18.5 9.4997M13.5 20.4997H21.5M5.5 16.4997L4.5 20.4997L8.5 19.4997L20.086 7.9137C20.4609 7.53864 20.6716 7.03003 20.6716 6.4997C20.6716 5.96937 20.4609 5.46075 20.086 5.0857L19.914 4.9137C19.5389 4.53876 19.0303 4.32812 18.5 4.32812C17.9697 4.32812 17.4611 4.53876 17.086 4.9137L5.5 16.4997Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>} />
                    <Button onclick={ () => setisOpenPopup(true)} order={'order-[-1]  '} cn={'bg-secondery  '} name={t('stock_feeding')} icon={<Image src={'/icons/plus.png'} alt='' width={20} height={20} />} />
                </div>
            </div>


			<div className=' grid grid-cols-3 @max-xl:grid-cols-2 @max-lg:!grid-cols-1 mt-[20px] gap-[20px] '>
				<div className=' p20 @xl:col-span-2 cShadow  bg-white p-[20px] rounded-[10px]' >

					<div className='flex items-center border-b-[.5px] border-[#eeeeee]' >
						{
							switchBtns.map((e,i)=> ( <span onClick={()=> setswitchName(e.value)} key={i} className={`max-w-fit px-[10px] flex items-center justify-center w-full h-[42px] duration-300  cursor-pointer hover:bg-opacity-90 ${e.value == switchName ? "bg-secondery text-white" : "bg-white text-[#637381]"}  text-base font-normal`} > {e.name} </span> ))
						}
					</div>

					{
						switchName == "details" &&  detailsProduct.map((e,i)=> ( 
						<div data-aos="fade-up" data-aos-delay={`${i}00`} key={i} className=' min-h-[45px] flex justify-between  items-center gap-[10px] odd:bg-[#f7f7f7] '> 
							<span className='text-[#666666] flex-1 text-base font-normal'> {e.key} </span> 
							<span className='ltr:text-left rtl:text-right flex-1 text-[#333333] text-base font-normal'> {e.value} </span> 
						</div> )) 
					}



				</div>
				<div className='flex flex-col gap-[20px] ' >
					<div className=' col-span-2 @max-xl:!col-span-1 cShadow  bg-white p-[20px] rounded-[10px]' >
						<Title title={dataOfPieces.title} />
						<hr className=' my-[25px] border-t border-t-[#eeeeee] border-dashed ' />
						<div className='flex flex-col gap-[15px] ' >
							{
								dataOfPieces?.lists?.map((e,i)=> <div key={i} className='flex items-center gap-[15px] '  > 
									<span> {e.icon} </span>
									<div className='flex gap-[5px] flex-col ' >
										<span className='text-[#777777] text-base font-normal' > {e.title} </span>
										<span className='text-[#b0b0b0] text-sm font-normal' > {t("total_pieces" , {count : e.value })} </span>
									</div>
								</div> )
							}
						</div>
					</div>

					<div className=' col-span-2 cShadow  bg-white p-[20px] rounded-[10px]' >
						<Title title={t("product_image")} />
						<Image className=' mb-[50px] w-full h-auto '  src={"/imgs/test/1.png"} alt='' width={350} height={200} />
						
						<Title title={t("additional_images")} />
						<div className='grid grid-cols-4 items-center gap-[10px] ' >
							{
								Array.from({length : 4} , (e,i)=>(
									<Image key={i} className=' mb-[20px] w-full h-auto'  src={`/imgs/test/${i+2}.png`} alt='' width={80} height={70} />
								))
							}
						</div>
					</div>
				</div>

				
			</div>

			<Popup title={t('provide')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={ <PopupProducts /> } />

        </div>
    );
}
