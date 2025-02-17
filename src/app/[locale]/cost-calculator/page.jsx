'use client';
import Breadcrumb from '@/components/atoms/Breadcrumb ';
import Button from '@/components/atoms/Button';
import Calendar from '@/components/atoms/Calender';
import ExplainIcon from '@/components/atoms/ExplainIcon';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import SelectButton from '@/components/atoms/SelectButton';
import Card from '@/components/atoms/SummaryCircle';
import Title from '@/components/pages/common/Title';
import AdSlider from '@/components/pages/dashboard/AdSlider';
import CustomPieChart from '@/components/pages/dashboard/CustomPieChart';
import OrdersChart from '@/components/pages/dashboard/OrdersChart';
import ProductMostSales, { AvarageCosts, DataStores } from '@/components/pages/dashboard/ProductMostSales';
import { hookSignUp } from '@/hooks/hookSignUp';
import { DataStoreData, FadeDateData, ProductMoreSalesData, ProductsData, socialMediaPlatforms, totalCostsData } from '@/seed';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function page() {
    const t = useTranslations('costCalculator');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();


    const breadcrumbItems = [
        { label: t('home'), href: '/' },
        { label: t('cost_calculator'), href: null },
    ];



    const costs = [
      {
        title : t("title1") ,
        icon : <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.835938" width="40" height="40" rx="20" fill="#F0F5FF"/><path d="M13.8359 15.808V26.385C13.8359 26.5643 13.8936 26.7117 14.0089 26.827C14.1243 26.9423 14.2719 27 14.4519 27H27.2209C27.4003 27 27.5476 26.9423 27.6629 26.827C27.7783 26.7117 27.8359 26.5643 27.8359 26.385V15.808H23.8359V22.596L20.8359 21.096L17.8359 22.596V15.808H13.8359ZM14.4519 28C14.0039 28 13.6226 27.8427 13.3079 27.528C12.9933 27.2133 12.8359 26.8323 12.8359 26.385V15.486C12.8359 15.2913 12.8669 15.108 12.9289 14.936C12.9909 14.764 13.0843 14.6057 13.2089 14.461L14.7669 12.591C14.9116 12.3957 15.0926 12.2483 15.3099 12.149C15.5273 12.0497 15.7603 12 16.0089 12H25.6249C25.8729 12 26.1089 12.0497 26.3329 12.149C26.5569 12.2483 26.7413 12.3953 26.8859 12.59L28.4629 14.5C28.5876 14.6447 28.6809 14.8063 28.7429 14.985C28.8049 15.163 28.8359 15.3497 28.8359 15.545V26.385C28.8359 26.8317 28.6786 27.2127 28.3639 27.528C28.0493 27.8427 27.6683 28 27.2209 28H14.4519ZM14.2159 14.808H27.4359L26.1059 13.21C26.0413 13.146 25.9673 13.095 25.8839 13.057C25.8006 13.019 25.7139 13 25.6239 13H16.0279C15.9386 13 15.8519 13.0193 15.7679 13.058C15.6839 13.0967 15.6106 13.148 15.5479 13.212L14.2159 14.808ZM18.8349 15.808V20.961L20.8349 19.961L22.8349 20.961V15.809L18.8349 15.808Z" fill="#084384"/></svg>,
        unit : "",
        lists : [
          { explain : "lorem ipsum dolor sit amet", name : t("product_cost") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("additional_selling_cost") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("cpl") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("local_price") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("usd_price") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("additional_local_price") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("additional_usd_price") , value : 100 , },
        ]
      },
      {
        title : t("title2") ,
        icon : <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="40" height="40" rx="20" fill="#FFFAF0"/><path d="M25.5 12H15.5C14.3954 12 13.5 12.8954 13.5 14V27C13.5 28.1046 14.3954 29 15.5 29H25.5C26.6046 29 27.5 28.1046 27.5 27V14C27.5 12.8954 26.6046 12 25.5 12Z" stroke="#F9A51A"/><path d="M17.5 17H23.5M17.5 21H23.5M17.5 25H21.5" stroke="#F9A51A" stroke-linecap="round"/></svg>,
        unit : "%",
        lists : [
          { explain : "lorem ipsum dolor sit amet", name : t("confirmed") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("delivered") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("returned") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("sold") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("ldr") , value : 100 , },
        ]
      },
      {
        title : t("title3") ,
        icon : <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.166016" width="40" height="40" rx="20" fill="#F1FFEC"/><g clip-path="url(#clip0_1_8144)"><path d="M8.16602 12.5V14H22.416V25.25H17.799C17.4645 23.9607 16.305 23 14.916 23C13.527 23 12.3675 23.9607 12.033 25.25H11.166V21.5H9.66602V26.75H12.033C12.3675 28.0393 13.527 29 14.916 29C16.305 29 17.4645 28.0393 17.799 26.75H24.033C24.3675 28.0393 25.527 29 26.916 29C28.305 29 29.4645 28.0393 29.799 26.75H32.166V20.633L32.1188 20.5153L30.6188 16.0153L30.456 15.5H23.916V12.5H8.16602ZM8.91602 15.5V17H15.666V15.5H8.91602ZM23.916 17H29.3768L30.666 20.8438V25.25H29.799C29.4645 23.9607 28.305 23 26.916 23C25.527 23 24.3675 23.9607 24.033 25.25H23.916V17ZM9.66602 18.5V20H14.166V18.5H9.66602ZM14.916 24.5C15.7538 24.5 16.416 25.1622 16.416 26C16.416 26.8378 15.7538 27.5 14.916 27.5C14.0783 27.5 13.416 26.8378 13.416 26C13.416 25.1622 14.0783 24.5 14.916 24.5ZM26.916 24.5C27.7538 24.5 28.416 25.1622 28.416 26C28.416 26.8378 27.7538 27.5 26.916 27.5C26.0783 27.5 25.416 26.8378 25.416 26C25.416 25.1622 26.0783 24.5 26.916 24.5Z" fill="#169C3B"/></g><defs><clipPath id="clip0_1_8144"><rect width="24" height="24" fill="white" transform="translate(8.16602 8)"/></clipPath></defs></svg>,
        unit : "",
        lists : [
          { explain : "lorem ipsum dolor sit amet", name : t("product_type") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("received_orders") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("confirmed_orders") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("unconfirmed_orders") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("sold_orders") , value : 100 , },
          { explain : "lorem ipsum dolor sit amet", name : t("returned_orders") , value : 100 , },
        ]
      }
    ]
    const costs2 = [
      {
        title : t("call_centers") ,
        icon : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7.5" stroke="#F9A51A" stroke-width="3"/></svg>,
        lists : [
          { name : t("unconfirmed_orders_count") , value : 100 , },
          { name : t("total_orders") , value : 100 , },
          { name : t("total_received_orders") , value : 100 , },
          { name : t("total_amount") , value : 100 , },
        ]
      },
      {
        title : t("shipping_fees") ,
        icon : <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">        <circle cx="9.5" cy="9" r="7.5" stroke="#084384" stroke-width="3"/>        </svg>         ,
        lists : [
          {name : t("returned_orders") , value : 100 , },
          {name : t("total_orders") , value : 100 , },
          {name : t("free_shipping") , value : 100 , },
          {name : t("total_amount") , value : 100 , },
        ]
      },
      {
        title : t("orders_cost_delivered") ,
        icon :<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7.5" stroke="#169C3B" stroke-width="3"/></svg>,
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
        icon : <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9.5" r="7.5" stroke="#2D9AC1" stroke-width="3"/></svg>,
        lists : [
          { name : t("total_sales") , value : 100 , },
          { name : t("profit_per_delivered_order") , value : 100 , },
          { name : t("total_profit") , value : 100 , },
        ]
      
    }


    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px] '>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] @max-lg:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div>
                    <h1 className=' @max-lg:text-center text-[#0f1728] text-2xl font-normal'> {t('cost_calculator')} </h1>
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className='flex items-center gap-[10px] ' >
                  <Button name={t("save")} cn={" !bg-transparent shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#efefef] !text-[#757d8a] "} order={"order-[-1]"} icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21.5H7M17 21.5H17.803C18.921 21.5 19.48 21.5 19.907 21.282C20.284 21.09 20.59 20.784 20.782 20.408C21 19.981 21 19.421 21 18.303V9.72C21 9.27 21 9.045 20.952 8.831C20.9094 8.64009 20.8389 8.45647 20.743 8.286C20.637 8.096 20.487 7.931 20.193 7.604L17.438 4.542C17.097 4.164 16.924 3.972 16.717 3.834C16.5303 3.71013 16.3241 3.61853 16.107 3.563C15.863 3.5 15.6 3.5 15.075 3.5H6.2C5.08 3.5 4.52 3.5 4.092 3.718C3.71569 3.90974 3.40974 4.21569 3.218 4.592C3 5.02 3 5.58 3 6.7V18.3C3 19.42 3 19.98 3.218 20.407C3.41 20.784 3.715 21.09 4.092 21.282C4.519 21.5 5.079 21.5 6.197 21.5H7M17 21.5V17.697C17 16.579 17 16.019 16.782 15.592C16.59 15.2155 16.2837 14.9096 15.907 14.718C15.48 14.5 14.92 14.5 13.8 14.5H10.2C9.08 14.5 8.52 14.5 8.092 14.718C7.71569 14.9097 7.40974 15.2157 7.218 15.592C7 16.02 7 16.58 7 17.7V21.5M15 7.5H9" stroke="#757D8A" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/></svg>} />
                  <Button name={t("calculate_result")} cn={"bg-secondery  "} order={"order-[-1]"} icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9735 13.4735C14.4431 13.4735 13.9344 13.6842 13.5593 14.0593C13.1842 14.4344 12.9735 14.9431 12.9735 15.4735V19.75C12.9735 20.2804 13.1842 20.7891 13.5593 21.1642C13.9344 21.5393 14.4431 21.75 14.9735 21.75H19.25C19.7804 21.75 20.2891 21.5393 20.6642 21.1642C21.0393 20.7891 21.25 20.2804 21.25 19.75V15.4735C21.25 14.9431 21.0393 14.4344 20.6642 14.0593C20.2891 13.6842 19.7804 13.4735 19.25 13.4735H14.9735ZM4.75 3.25C4.21957 3.25 3.71086 3.46071 3.33579 3.83579C2.96071 4.21086 2.75 4.71957 2.75 5.25V9.5265C2.75 10.0569 2.96071 10.5656 3.33579 10.9407C3.71086 11.3158 4.21957 11.5265 4.75 11.5265H9.0265C9.55693 11.5265 10.0656 11.3158 10.4407 10.9407C10.8158 10.5656 11.0265 10.0569 11.0265 9.5265V5.25C11.0265 4.71957 10.8158 4.21086 10.4407 3.83579C10.0656 3.46071 9.55693 3.25 9.0265 3.25H4.75Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.2492 3.25H14.9727C13.8681 3.25 12.9727 4.14543 12.9727 5.25V9.5265C12.9727 10.6311 13.8681 11.5265 14.9727 11.5265H19.2492C20.3537 11.5265 21.2492 10.6311 21.2492 9.5265V5.25C21.2492 4.14543 20.3537 3.25 19.2492 3.25Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.0265 13.4736H4.75C3.64543 13.4736 2.75 14.3691 2.75 15.4736V19.7501C2.75 20.8547 3.64543 21.7501 4.75 21.7501H9.0265C10.1311 21.7501 11.0265 20.8547 11.0265 19.7501V15.4736C11.0265 14.3691 10.1311 13.4736 9.0265 13.4736Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.88844 4.71045V10.0659M4.21094 7.38795H9.56644M14.4344 16.1514H19.7899M14.4344 19.0724H19.7899" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg>} />
                </div>
            </div>


            <div className='grid grid-cols-3 @max-2xl:grid-cols-2 @max-lg:!grid-cols-1 gap-[20px] ' >
              {
                costs?.map((e,i)=>(
                  <div key={i} className='cShadow !py-[10px]  bg-white rounded-[10px]' > 
                    <div className='flex items-center gap-[7px] ' > 
                      <span> {e.icon} </span>  
                      <h4 className='text-[#3e4c5b] text-lg font-normal' > {e.title} </h4>
                    </div>

                    <hr className=' my-[25px] border-dashed border-t border-t-[#eeeeee]' />
                    <div className='flex flex-col gap-[25px] ' >
                        {
                          e.lists?.map((ele ,idx)=> (
                            <div key={idx} className='flex items-center justify-between ' >
                              <div className='flex items-center gap-[7px] ' >
                                <h4 className='text-[#818b9a] text-[15px] font-normal' > {ele.name} </h4>
                                <ExplainIcon name={ele.explain} />
                              </div>

                              <div className='flex items-center gap-[7px] ' >
                                <span className=' flex-none  text-[#6b6b6b] text-sm font-normal min-w-[34px] h-7 bg-white rounded-[3px] border border-[#ebf0ed] flex-col justify-center items-center gap-2.5 inline-flex' > {ele.value} </span>
                                <span className=' flex-none text-center text-[#6b6b6b] text-base font-normal' > {e.unit} </span>
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
                        <h4 className='text-[#3e4c5b] text-lg font-normal' > {e.title} </h4>
                      </div>

                      <div className='flex flex-col ' >
                          {
                            e.lists?.map((ele ,idx)=> (
                              <div key={idx} className={`${(e.lists.length-1) != idx && "border-dashed border-b-[.5px] border-b-[#e8e8e8]"} py-[10px] flex items-center justify-between`} >
                                <h4 className={` ${(e.lists.length-1) == idx && "text-primary" } text-[#818b9a] text-[15px] font-normal`} > {ele.name} </h4>
                                <span className={`${(e.lists.length-1) == idx && "text-primary" } flex-none text-center text-[#6b6b6b] text-base font-normal`} > {t("price" , {count : ele.value} )} </span>
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
                  <h4 className='text-[#3e4c5b] text-lg font-normal' > {costs3.title} </h4>
                </div>
              {

                  <div className='grid grid-cols-3  @max-2xl:grid-cols-2 @max-lg:!grid-cols-1 gap-x-[20px] gap-y-0 ' >
                      {
                        costs3.lists?.map((ele ,idx)=> (
                          <div key={idx} className={`py-[10px] px-[30px] flex items-center justify-between`} >
                            <h4 className={` ${ 2 == idx && "text-primary" } text-[#818b9a] text-[15px] font-normal`} > {ele.name} </h4>
                            <span className={`${ 2 == idx && "text-primary" } flex-none text-center text-[#6b6b6b] text-base font-normal`} > {t("price" , {count : ele.value} )} </span>
                          </div>
                        ) )
                      }
                    </div>
              }
            </div>


        </div>
    );
}

