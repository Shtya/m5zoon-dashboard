'use client';
import Breadcrumb from '@/components/atoms/Breadcrumb ';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import SelectButton from '@/components/atoms/SelectButton';
import Card from '@/components/atoms/SummaryCircle';
import Title from '@/components/pages/common/Title';
import AdSlider from '@/components/pages/dashboard/AdSlider';
import OrdersChart from '@/components/pages/dashboard/OrdersChart';
import ProductMostSales, { AvarageCosts, DataStores } from '@/components/pages/dashboard/ProductMostSales';
import { hookSignUp } from '@/hooks/hookSignUp';
import { DataStoreData, FadeDateData, ProductMoreSalesData, ProductsData, socialMediaPlatforms, totalCostsData } from '@/seed';
import { useTranslations } from 'next-intl';
import React from 'react';

import dynamic from "next/dynamic";
import { Search } from 'lucide-react';
const CustomPieChart = dynamic(() => import("@/components/pages/dashboard/CustomPieChart"), { ssr: false });




export default function page() {
    const t = useTranslations('dashboard');
    const t_ = useTranslations("")
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();

    const breadcrumbItems = [
        { label: t('dashboard.home'), href: '/' },
        { label: t('dashboard.control_panel'), href: null },
    ];

    const filtersData = [
        { key: 'All', name: t('filters.all') },
        { key: 'Today', name: t('filters.today') },
        { key: 'yesterday', name: t('filters.yesterday') },
        { key: 'Days', name: t('filters.last_7_days') },
        { key: 'Months', name: t('filters.this_month') },
        { key: 'years', name: t('filters.this_year') },
    ];

    const staticsData = [
        { count: 101, price: 2500, value: 70, color: '#fff'   , secondColor: '#225d9e',explain: t_("all_orders") ,  title: t('statics.all_orders'), bg: 'bg-secondery' },
        { count: 102, price: 2500, value: 80, color: '#e1c408', secondColor: '#fff4d6',explain: t_("confirmed_orders") ,  title: t('statics.valid_orders') },
        { count: 103, price: 2500, value: 60, color: '#159b3b', secondColor: '#e3ffe6',explain: t_("customer_confirmed_orders") ,  title: t('statics.confirmed_orders') },
        { count: 104, price: 2500, value: 60, color: '#5db3b3', secondColor: '#e5f4f2',explain: t_("delivered_orders") ,  title: t('statics.delivered_orders_confirmed') },
        { count: 105, price: 2500, value: 60, color: '#d1bc9b', secondColor: '#f1efe1',explain: t_("delivered_orders") ,  title: t('statics.delivered_orders_total') },
        { count: 106, price: 2500, value: 60, color: '#750884', secondColor: '#f3e8fc',explain: t_("in_transit_orders") ,  title: t('statics.orders_in_delivery') },
        { count: 107, price: 2500, value: 70, color: '#702fb6', secondColor: '#f8e9ff',explain: t_("new_orders") ,  title: t('statics.new_order') },
        { count: 108, price: 2500, value: 70, color: '#26a1b6', secondColor: '#e3f2ff',explain: t_("unresponsive_orders") ,  title: t('statics.unconfirmed_order') },
        { count: 109, price: 2500, value: 40, color: '#ed49a9', secondColor: '#feeaf9',explain: t_("pending_follow_up_orders") ,  title: t('statics.no_response') },
        { count: 110, price: 2500, value: 70, color: '#f9a51a', secondColor: '#ffefe3',explain: t_("postponed_orders") ,  title: t('statics.postponed') },
        { count: 111, price: 2500, value: 70, color: '#1c5182', secondColor: '#e8e8e8',explain: t_("pending_restock") ,  title: t('statics.awaiting_stock_renewal') },
        { count: 112, price: 2500, value: 70, color: '#2f3ab6', secondColor: '#e3f2ff',explain: t_("canceled_orders_pending_follow_up") ,  title: t('statics.canceled_orders_under_review') },
        { count: 113, price: 2500, value: 70, color: '#da8e5b', secondColor: '#e8f6fc',explain: t_("canceled_orders") ,  title: t('statics.canceled_order') },
        { count: 114, price: 2500, value: 70, color: '#665663', secondColor: '#e4e4e4',explain: t_("returns") ,  title: t('statics.returned_order') },
        { count: 115, price: 2500, value: 40, color: '#cf1d20', secondColor: '#ffe3e3',explain: t_("out_of_delivery_range") ,  title: t('statics.out_of_delivery_zone') },
        { count: 116, price: 2500, value: 70, color: '#ae3293', secondColor: '#f1e3ff',explain: t_("unreachable_orders") ,  title: t('statics.unable_to_contact') },
        { count: 117, price: 2500, value: 70, color: '#7cc236', secondColor: '#e3f2ff',explain: t_("duplicate_orders") ,  title: t('statics.duplicate_order') },
    ];



  const avarageOrderData = [
    {icon : "/icons/snap.png" , name : t("platform_orders.snapchat") , percent : "60%" , count_order : 500 , status : "down" , color : "#e2d510" } ,
    {icon : "/icons/insta.png" , name : t("platform_orders.instagram") , percent : "80%" , count_order : 500 , status : "up" , color : "#c31f70" } ,
    {icon : "/icons/tiktok.png" , name : t("platform_orders.tiktok") , percent : "50%" , count_order : 500 , status : "down" , color : "#31cfcb" } ,
    {icon : "/icons/face.png" , name : t("platform_orders.facebook") , percent : "40%" , count_order : 500 , status : "up"   , color : "#1877f2" } ,
    {icon : "/icons/google.png" , name : t("platform_orders.google") , percent : "60%" , count_order : 500 , status : "up"   , color : "#28b446" } ,
  ]


  const CustomPieChartData = [
    { currency : t_("currency.jordan_currency") , name: t("earnings_by_country.jordan") , value: 20000, color: "#3366CC" },
    { currency : t_("currency.saudi_currency") , name: t("earnings_by_country.saudi_arabia") , value: 9000, color: "#FFA726" },
    { currency : t_("currency.uaee_currency") , name: t("earnings_by_country.uae") , value: 8000, color: "#2E7D32" },
  ];


  const account_summaryData = [
    { count: 101, price: 2500, value: 70, color: '#fff', secondColor: '#225d9e', title: t('account_summary.total_stock'), bg: 'bg-secondery' },
    { count: 102, price: 2500, value: 40, color: '#fbb03b', secondColor: '#fff7e3', title: t('account_summary.total_products') },
    { count: 102, price: 2500, value: 80, color: '#ae3293', secondColor: '#f1e3ff', title: t('account_summary.pending_stock_replenishment') },
    { count: 102, price: 2500, value: 40, color: '#f12f32', secondColor: '#ffe3e3', title: t('account_summary.profits_with_makhzon') },
    { count: 102, price: 2500, value: 40, color: '#20be15', secondColor: '#eaffe3', title: t('account_summary.withdrawn_profits') },
    { count: 102, price: 2500, value: 80, color: '#5b9dda', secondColor: '#e8f6fc', title: t('account_summary.returns') },
    ];


    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px] '>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] bg-white p-[20px] rounded-[10px]  flex items-center justify-center @max-xl:flex-wrap gap-[10px]  '>
                <div className='@xl:w-[300px] ' >
                    <h1 className=' @max-xl:text-center text-[#0f1728] dark:text-[#fff] duration-300  text-2xl font-normal'> {t('dashboard.control_panel')} </h1>
                    <Breadcrumb  items={breadcrumbItems} />
                </div>

                <div className='flex  flex-wrap items-center @max-xl:justify-center justify-end gap-[13px] w-full ' >
                    <Input cn={"max-w-[210px] w-full "} cnInput={"!h-[45px]"} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} place={t('search.search_product')} icon={<Search size={18} />} />
                    <Select cn={"max-w-[110px] w-full "} cnSelect={"!min-h-[45px]"}  KEY='city' error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={socialMediaPlatforms} place={t('search.choose_platform')} />
                    <SelectButton data={filtersData} />
                </div>

            </div>



            {/* Search */}
            {/* <div className=' cShadow @max-2xl:justify-center  min-h-[100px]  bg-white p-[20px] rounded-[10px]  flex items-end justify-between flex-wrap gap-x-[10px] gap-y-[20px]  '>
                <div className='grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-[20px]  max-w-[1100px] w-full '>
                    <Calendar KEY='date' error={errors?.date} setValue={setValue} watch={watch} trigger={trigger} cnInput={"h-[50px]"} classname={'w-full'} label={t('search.choose_date')} />
                </div>

                <div className='flex items-center gap-[10px] flex-wrap max-w-fit w-full '>
                    <Button cn={' !min-h-[45px] ttttt  bg-secondery dark:bg-bg1   '} name={t('search.search_now')} />
                    <Button cn={' border border-gray-200 !min-h-[45px] ttttt  bg-white !text-secondery   '} name={t('search.update')} icon={<Image src={'/icons/refresh.png'} alt='' width={16} height={16} />} />
                </div>
            </div> */}



            {/*  Summery  */}
            <div className=' cShadow bg-white p-[20px] rounded-[10px] ' >
                <Title title={t("statics.title")} place={t("statics.product")}  data={ProductsData} />
                <div className='   grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px]   '>
                    {staticsData.map((item, index) => (
                        <Card key={index} index={index} data={item} />
                    ))}
                </div>
            </div>




            {/*  Charts  */}
            <div className=' grid grid-cols-2 gap-[20px] @max-lg:grid-cols-1  ' >
                    <div className=' cShadow p-[20px] rounded-[10px]' >
                      <Title title={t("platform_orders.title")}   data={FadeDateData} />
                       <AdSlider data={avarageOrderData} />
                    </div>
                    
                    <div className=' cShadow p-[20px] rounded-[10px]' >
                      <Title title={t("earnings_by_country.title")}   data={FadeDateData} />
                       <CustomPieChart data={CustomPieChartData} />
                    </div>
            </div>



            {/* Summary Account */}
            <div className=' cShadow bg-white p-[20px] rounded-[10px] ' >
                <Title title={t("account_summary.title")}  />
                <div className='   grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px]   '>
                    {account_summaryData.map((item, index) => (
                        <Card index={index} key={index} data={item} />
                    ))}
                </div>
            </div>



            {/*   3 tables  */}
            <div className='  grid grid-cols-3 gap-[20px] @max-2xl:grid-cols-2  @max-lg:!grid-cols-1  ' >
                    <div className='cShadow bg-white p-[20px] rounded-[10px]' >
                      <Title title={t("tables3.title1")}   data={FadeDateData} />
                       <ProductMostSales data={ProductMoreSalesData} />
                    </div>
                    
                    <div className='cShadow bg-white p-[20px] rounded-[10px]' >
                      <Title title={t("tables3.title2")}   data={FadeDateData} />
                      <AvarageCosts data={totalCostsData} />
                    </div>

                    <div className='cShadow bg-white p-[20px] rounded-[10px]' >
                      <Title title={t("tables3.title3")}   data={FadeDateData} />
                      <DataStores data={DataStoreData} />
                    </div>
            </div>





            {/*  Orders Chart  */}
            <div className='  grid grid-cols-2 gap-[20px] @max-lg:grid-cols-1  ' >
                    <div className='cShadow bg-white p-[20px] rounded-[10px]' >
                      <Title title={t("platform_orders.title")}   data={FadeDateData} />
                      <OrdersChart />
                    </div>
                    
                    <div className='cShadow bg-white p-[20px] rounded-[10px]' >
                      <Title title={t("earnings_by_country.title")}   data={FadeDateData} />
                      <OrdersChart />
                    </div>
            </div>
        </div>
    );
}

