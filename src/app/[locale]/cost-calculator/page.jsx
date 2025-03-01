'use client';
import Breadcrumb from '@/components/atoms/Breadcrumb ';
import Button from '@/components/atoms/Button';
import ExplainIcon from '@/components/atoms/ExplainIcon';
import Select from '@/components/atoms/Select';
import { hookSignUp } from '@/hooks/hookSignUp';
import { socialMediaPlatforms } from '@/seed';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function page() {
    const t = useTranslations('costCalculator');
    const t_ = useTranslations('');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();



    const breadcrumbItems = [
        { label: t('home'), href: '/' },
        { label: t('cost_calculator'), href: null },
    ];



    const costs = [
      {
        title : t_("products_and_costs") ,
        icon : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path className=' fill-[#084384] dark:fill-primary ' d="M5 7.808V18.385C5 18.5643 5.05767 18.7117 5.173 18.827C5.28833 18.9423 5.436 19 5.616 19H18.385C18.5643 19 18.7117 18.9423 18.827 18.827C18.9423 18.7117 19 18.5643 19 18.385V7.808H15V14.596L12 13.096L9 14.596V7.808H5ZM5.616 20C5.168 20 4.78667 19.8427 4.472 19.528C4.15733 19.2133 4 18.8323 4 18.385V7.486C4 7.29133 4.031 7.108 4.093 6.936C4.155 6.764 4.24833 6.60567 4.373 6.461L5.931 4.591C6.07567 4.39567 6.25667 4.24833 6.474 4.149C6.69133 4.04967 6.92433 4 7.173 4H16.789C17.037 4 17.273 4.04967 17.497 4.149C17.721 4.24833 17.9053 4.39533 18.05 4.59L19.627 6.5C19.7517 6.64467 19.845 6.80633 19.907 6.985C19.969 7.163 20 7.34967 20 7.545V18.385C20 18.8317 19.8427 19.2127 19.528 19.528C19.2133 19.8427 18.8323 20 18.385 20H5.616ZM5.38 6.808H18.6L17.27 5.21C17.2053 5.146 17.1313 5.095 17.048 5.057C16.9647 5.019 16.878 5 16.788 5H7.192C7.10267 5 7.016 5.01933 6.932 5.058C6.848 5.09667 6.77467 5.148 6.712 5.212L5.38 6.808ZM9.999 7.808V12.961L11.999 11.961L13.999 12.961V7.809L9.999 7.808Z" fill=""/> </svg> ,
        unit : "",
        lists : [
          { explain: t_("product_cost"), name: t("product_cost"), value: 100 },
          { explain: t_("additional_selling_cost"), name: t("additional_selling_cost"), value: 100 },
          { explain: t_("cpl"), name: t("cpl"), value: 100 },
          { explain: t_("local_price"), name: t("local_price"), value: 100 },
          { explain: t_("usd_price"), name: t("usd_price"), value: 100 },
          { explain: t_("additional_local_price"), name: t("additional_local_price"), value: 100 },
          { explain: t_("additional_usd_price"), name: t("additional_usd_price"), value: 100 },
        ]
      },
      {
        title : t_("order_rate") ,
        icon :  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 4H7.25C6.14543 4 5.25 4.89543 5.25 6V19C5.25 20.1046 6.14543 21 7.25 21H17.25C18.3546 21 19.25 20.1046 19.25 19V6C19.25 4.89543 18.3546 4 17.25 4Z" stroke="#F9A51A"/><path d="M9.25 9H15.25M9.25 13H15.25M9.25 17H13.25" stroke="#F9A51A" stroke-linecap="round"/></svg>,
        unit : "%",
        lists : [
          { explain: t_("confirmed"), name: t("confirmed"), value: 100 },
          { explain: t_("delivered"), name: t("delivered"), value: 100 },
          { explain: t_("returned"), name: t("returned"), value: 100 },
          { explain: t_("sold"), name: t("sold"), value: 100 },
          { explain: t_("ldr"), name: t("ldr"), value: 100 },
        ]
      },
      {
        title : t_("call_cost") ,
        icon :<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_826_8516)"> <path d="M23.5831 5.4375H18.8723C18.8237 5.4375 18.7756 5.42791 18.7308 5.40928C18.686 5.39065 18.6453 5.36335 18.611 5.32894C18.5768 5.29454 18.5497 5.2537 18.5313 5.20879C18.5128 5.16387 18.5035 5.11576 18.5037 5.06722C18.5042 4.97787 18.5364 4.89161 18.5945 4.82379L21.9545 0.983787C21.9871 0.94571 22.0276 0.915233 22.0732 0.894501C22.1188 0.873769 22.1684 0.863285 22.2185 0.863787C22.4105 0.863787 22.5665 1.0215 22.5665 1.2135V6.9615M15.6717 6.95979H11.6088V6.09407C11.6093 5.79789 11.6959 5.50823 11.8581 5.26044C12.0204 5.01266 12.2512 4.81745 12.5225 4.69864L14.7854 3.7095C15.0985 3.57317 15.3551 3.33305 15.5118 3.02962C15.6685 2.72618 15.7158 2.378 15.6457 2.04375C15.5757 1.7095 15.3925 1.40963 15.1271 1.19469C14.8617 0.979753 14.5303 0.862884 14.1888 0.863787H13.1328C12.8177 0.864135 12.5104 0.962046 12.2532 1.14407C11.996 1.3261 11.8014 1.5833 11.6963 1.88036M13.3677 22.3969C14.2564 22.9692 15.3142 23.22 16.3652 23.1077C17.4162 22.9954 18.3971 22.5268 19.1448 21.7798L19.7963 21.1284C20.0852 20.8363 20.2473 20.442 20.2473 20.0312C20.2473 19.6204 20.0852 19.2261 19.7963 18.9341L17.0534 16.2084C16.7643 15.9205 16.3729 15.7589 15.9648 15.7589C15.5568 15.7589 15.1654 15.9205 14.8763 16.2084C14.5842 16.4973 14.19 16.6594 13.7791 16.6594C13.3683 16.6594 12.974 16.4973 12.682 16.2084L8.31055 11.8369C8.02161 11.5449 7.85955 11.1506 7.85955 10.7398C7.85955 10.329 8.02161 9.9347 8.31055 9.64264C8.59843 9.3535 8.76005 8.96209 8.76005 8.55407C8.76005 8.14605 8.59843 7.75465 8.31055 7.4655L5.67055 4.72264C5.37849 4.43371 4.98424 4.27164 4.57341 4.27164C4.16257 4.27164 3.76832 4.43371 3.47626 4.72264L2.82483 5.37407C2.06439 6.11128 1.57977 7.08698 1.45186 8.13836C1.32394 9.18974 1.56048 10.2532 2.12198 11.1512C5.11023 15.59 8.92895 19.4087 13.3677 22.3969Z" stroke="#218ABA" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_826_8516"> <rect width="24" height="24" fill="white" transform="translate(0.5)"/> </clipPath> </defs> </svg> ,
        unit : "",
        lists : [
          { explain: t_("product_type"), name: t("product_type"), value: 100 },
          { explain: t_("received_orders"), name: t("received_orders"), value: 100 },
          { explain: t_("confirmed_orders"), name: t("confirmed_orders"), value: 100 },
          { explain: t_("unconfirmed_orders"), name: t("unconfirmed_orders"), value: 100 },
          { explain: t_("sold_orders"), name: t("sold_orders"), value: 100 },
          { explain: t_("returned_orders"), name: t("returned_orders"), value: 100 },
        ]
      },
      {
        title : t_("shipping_cost") ,
        icon : <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_822_7476)"><path d="M0.75 4.5V6H15V17.25H10.383C10.0485 15.9607 8.889 15 7.5 15C6.111 15 4.9515 15.9607 4.617 17.25H3.75V13.5H2.25V18.75H4.617C4.9515 20.0393 6.111 21 7.5 21C8.889 21 10.0485 20.0393 10.383 18.75H16.617C16.9515 20.0393 18.111 21 19.5 21C20.889 21 22.0485 20.0393 22.383 18.75H24.75V12.633L24.7028 12.5153L23.2028 8.01525L23.04 7.5H16.5V4.5H0.75ZM1.5 7.5V9H8.25V7.5H1.5ZM16.5 9H21.9608L23.25 12.8438V17.25H22.383C22.0485 15.9607 20.889 15 19.5 15C18.111 15 16.9515 15.9607 16.617 17.25H16.5V9ZM2.25 10.5V12H6.75V10.5H2.25ZM7.5 16.5C8.33775 16.5 9 17.1622 9 18C9 18.8378 8.33775 19.5 7.5 19.5C6.66225 19.5 6 18.8378 6 18C6 17.1622 6.66225 16.5 7.5 16.5ZM19.5 16.5C20.3377 16.5 21 17.1622 21 18C21 18.8378 20.3377 19.5 19.5 19.5C18.6623 19.5 18 18.8378 18 18C18 17.1622 18.6623 16.5 19.5 16.5Z" fill="#169C3B"/></g><defs><clipPath id="clip0_822_7476"><rect width="24" height="24" fill="white" transform="translate(0.75)"/></clipPath></defs></svg>,
        unit : "",
        lists : [
          { explain: t_("received_orders2"), name: t_("received_orders"), value: 100 },
          { explain: t_("returned2"), name: t_("returned"), value: 100 },
          { explain: t_("cash_on_delivery2"), name: t_("cash_on_delivery"), value: 100 },
        ]
      }
    ]

    
    const costs2 = [
      {
        title : t("call_centers") ,
        icon : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7.5" stroke="#F9A51A" strokeWidth="3"/></svg>,
        lists : [
          { name : t("unconfirmed_orders_count") , value : 100 , },
          { name : t("total_orders") , value : 100 , },
          { name : t("total_received_orders") , value : 100 , },
          { name : t("total_amount") , value : 100 , },
        ]
      },
      {
        title : t("shipping_fees") ,
        icon : <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">        <circle cx="9.5" cy="9" r="7.5" stroke="#084384" strokeWidth="3"/>        </svg>         ,
        lists : [
          {name : t("returned_orders") , value : 100 , },
          {name : t("total_orders") , value : 100 , },
          {name : t("free_shipping") , value : 100 , },
          {name : t("total_amount") , value : 100 , },
        ]
      },
      {
        title : t("orders_cost_delivered") ,
        icon :<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7.5" stroke="#169C3B" strokeWidth="3"/></svg>,
        lists : [
          {name : t("storage_fees") , value : 100 , },
          {name : t("advertisement_costs") , value : 100 , },
          {name : t("total_products") , value : 100 , },
          {name : t("total_amount") , value : 100 , },
        ]
      }
    ]
    const costs3 = {
        title : t("summary") ,
        icon : <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9.5" r="7.5" stroke="#2D9AC1" strokeWidth="3"/></svg>,
        lists : [
          { name : t("total_sales") , value : 100 , },
          { name : t("profit_per_delivered_order") , value : 100 , },
          { name : t("total_profit") , value : 100 , },
        ]
      
    }


    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px] '>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] bg-white p-[20px] rounded-[10px]  flex items-center justify-center @max-xl:flex-wrap gap-[10px] '>
                <div className="@xl:w-[300px] " >
                    <h1 className=' @max-lg:text-center text-[#0f1728] dark:text-[#fff] duration-300  text-2xl font-normal'> {t('cost_calculator')} </h1>
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <div className='flex  flex-wrap items-center @max-xl:justify-center justify-end gap-[13px] w-full' >

                  <div class="max-w-[140px] w-full h-[50px] p-2.5 bg-white dark:bg-bg3 dark:border-border1  rounded-[6px] border border-[#ececeb] justify-between items-center inline-flex">
                    <div class="text-[#637381] dark:text-white text-sm font-normal "> {t_("all_costs")} </div>
                    <div class="w-[34px] h-7 bg-white rounded-[3px] dark:bg-bg4 dark:border-bg2 border border-[#ebf0ed] flex-col justify-center items-center gap-2.5 inline-flex"><div class="text-center text-[#6b6b6b] dark:text-white text-sm font-normal  leading-tight">200</div> </div>
                  </div>
                  <Select cn={"max-w-[140px] w-full "} cnSelect={"!min-h-[50px]"}  KEY='city' error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={socialMediaPlatforms} place={t_('pre_costs')} />
                  <Button name={t("calculate_result")} cn={"bg-secondery  dark:bg-primary "} order={"order-[-1]"} icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9735 13.4735C14.4431 13.4735 13.9344 13.6842 13.5593 14.0593C13.1842 14.4344 12.9735 14.9431 12.9735 15.4735V19.75C12.9735 20.2804 13.1842 20.7891 13.5593 21.1642C13.9344 21.5393 14.4431 21.75 14.9735 21.75H19.25C19.7804 21.75 20.2891 21.5393 20.6642 21.1642C21.0393 20.7891 21.25 20.2804 21.25 19.75V15.4735C21.25 14.9431 21.0393 14.4344 20.6642 14.0593C20.2891 13.6842 19.7804 13.4735 19.25 13.4735H14.9735ZM4.75 3.25C4.21957 3.25 3.71086 3.46071 3.33579 3.83579C2.96071 4.21086 2.75 4.71957 2.75 5.25V9.5265C2.75 10.0569 2.96071 10.5656 3.33579 10.9407C3.71086 11.3158 4.21957 11.5265 4.75 11.5265H9.0265C9.55693 11.5265 10.0656 11.3158 10.4407 10.9407C10.8158 10.5656 11.0265 10.0569 11.0265 9.5265V5.25C11.0265 4.71957 10.8158 4.21086 10.4407 3.83579C10.0656 3.46071 9.55693 3.25 9.0265 3.25H4.75Z" stroke="white" strokeWidth="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.2492 3.25H14.9727C13.8681 3.25 12.9727 4.14543 12.9727 5.25V9.5265C12.9727 10.6311 13.8681 11.5265 14.9727 11.5265H19.2492C20.3537 11.5265 21.2492 10.6311 21.2492 9.5265V5.25C21.2492 4.14543 20.3537 3.25 19.2492 3.25Z" stroke="white" strokeWidth="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.0265 13.4736H4.75C3.64543 13.4736 2.75 14.3691 2.75 15.4736V19.7501C2.75 20.8547 3.64543 21.7501 4.75 21.7501H9.0265C10.1311 21.7501 11.0265 20.8547 11.0265 19.7501V15.4736C11.0265 14.3691 10.1311 13.4736 9.0265 13.4736Z" stroke="white" strokeWidth="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.88844 4.71045V10.0659M4.21094 7.38795H9.56644M14.4344 16.1514H19.7899M14.4344 19.0724H19.7899" stroke="white" strokeWidth="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg>} />
                  <Button name={t("save")} cn={" !bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#efefef] !text-[#757d8a] "} order={"order-[-1]"} icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21.5H7M17 21.5H17.803C18.921 21.5 19.48 21.5 19.907 21.282C20.284 21.09 20.59 20.784 20.782 20.408C21 19.981 21 19.421 21 18.303V9.72C21 9.27 21 9.045 20.952 8.831C20.9094 8.64009 20.8389 8.45647 20.743 8.286C20.637 8.096 20.487 7.931 20.193 7.604L17.438 4.542C17.097 4.164 16.924 3.972 16.717 3.834C16.5303 3.71013 16.3241 3.61853 16.107 3.563C15.863 3.5 15.6 3.5 15.075 3.5H6.2C5.08 3.5 4.52 3.5 4.092 3.718C3.71569 3.90974 3.40974 4.21569 3.218 4.592C3 5.02 3 5.58 3 6.7V18.3C3 19.42 3 19.98 3.218 20.407C3.41 20.784 3.715 21.09 4.092 21.282C4.519 21.5 5.079 21.5 6.197 21.5H7M17 21.5V17.697C17 16.579 17 16.019 16.782 15.592C16.59 15.2155 16.2837 14.9096 15.907 14.718C15.48 14.5 14.92 14.5 13.8 14.5H10.2C9.08 14.5 8.52 14.5 8.092 14.718C7.71569 14.9097 7.40974 15.2157 7.218 15.592C7 16.02 7 16.58 7 17.7V21.5M15 7.5H9" stroke="#757D8A" strokeWidth="1.41667" stroke-linecap="round" stroke-linejoin="round"/></svg>} />
                </div>
            </div>


            <div className='grid grid-cols-4 @max-3xl:grid-cols-2 @max-lg:!grid-cols-1 gap-[20px] ' >
              {
                costs?.map((e,i)=>(
                  <div key={i} className='cShadow !py-[10px]  bg-white rounded-[10px]' > 
                    <div className='flex items-center gap-[7px] ' > 
                      <span> {e.icon} </span>  
                      <h4 className='text-[#3e4c5b] dark:text-[#fff] text-lg font-normal' > {e.title} </h4>
                    </div>

                    <hr className=' my-[25px] border-dashed border-t border-t-[#eeeeee] dark:border-t-border1 ' />
                    <div className='flex flex-col gap-[25px] ' >
                        {
                          e.lists?.map((ele ,idx)=> (
                            <div key={idx} className='flex items-center justify-between ' >
                              <div className='flex items-center gap-[7px] ' >
                                <h4 className='text-[#818b9a] dark:text-white text-[15px] font-normal' > {ele.name} </h4>
                                <ExplainIcon name={ele.explain} />
                              </div>

                              <div className='flex items-center gap-[7px] ' >
                                <input type='text' className=' flex-none  text-[#6b6b6b] dark:text-[#fff] text-sm font-normal w-[44px] h-7 bg-white dark:bg-bg4 rounded-[3px] border border-[#ebf0ed] dark:border-border1 outline-secondery dark:outline-primary  ' />
                                <span className=' flex-none text-center text-[#6b6b6b] dark:text-[#fff] text-base font-normal' > {e.unit} </span>
                              </div>
                            </div>
                          ) )
                        }
                    </div>
                  </div>
                ))
              }

            </div>


            <div className='cShadow !py-[10px]  bg-white rounded-[10px] grid grid-cols-3 @max-2xl:grid-cols-2 @max-lg:!grid-cols-1 gap-[20px] ' >
              {
                  costs2?.map((e,i)=>(
                    <div key={i} className=' px-[30px] ' > 
                      <div className='flex items-center gap-[7px] mb-[15px] ' > 
                        <span> {e.icon} </span>  
                        <h4 className='text-[#3e4c5b] dark:text-[#fff] text-lg font-normal' > {e.title} </h4>
                      </div>

                      <div className='flex flex-col ' >
                          {
                            e.lists?.map((ele ,idx)=> (
                              <div key={idx} className={`${(e.lists.length-1) != idx && "border-dashed border-b-[.5px] border-b-[#e8e8e8] dark:border-b-border1 "} py-[10px] flex items-center justify-between`} >
                                <h4 className={` ${(e.lists.length-1) == idx && "text-primary dark:!text-primary" } text-[#818b9a] dark:text-white text-[15px] font-normal`} > {ele.name} </h4>
                                <span className={`${(e.lists.length-1) == idx && "text-primary" } flex-none text-center text-[#6b6b6b] dark:text-[#fff] text-base font-normal`} > {t("price" , {count : ele.value} )} </span>
                              </div>
                            ) )
                          }
                        </div>
                  </div>
                ))
              }
            </div>

            <div className='cShadow !py-[10px]  bg-white rounded-[10px]  ' >
                <div className='flex items-center gap-[7px] mb-[15px] ' > 
                  <span> {costs3.icon} </span>  
                  <h4 className='text-[#3e4c5b] dark:text-[#fff] text-lg font-normal' > {costs3.title} </h4>
                </div>
              {

                  <div className='grid grid-cols-3  @max-2xl:grid-cols-2 @max-lg:!grid-cols-1 gap-x-[20px] gap-y-0 ' >
                      {
                        costs3.lists?.map((ele ,idx)=> (
                          <div key={idx} className={`py-[10px] px-[30px] flex items-center justify-between`} >
                            <h4 className={` ${ 2 == idx && "text-primary dark:!text-primary" } text-[#818b9a] dark:text-white text-[15px] font-normal`} > {ele.name} </h4>
                            <span className={`${ 2 == idx && "text-primary" } flex-none text-center text-[#6b6b6b] dark:text-[#fff] text-base font-normal`} > {t("price" , {count : ele.value} )} </span>
                          </div>
                        ) )
                      }
                    </div>
              }
            </div>


        </div>
    );
}

