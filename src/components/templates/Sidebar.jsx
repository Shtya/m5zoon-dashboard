'use client';
// import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import { Maximize2 } from 'lucide-react';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Sidebar() {
    const t = useTranslations('sidebar');
    const sidebarItems = [
        { icon: '/icons/sidebar/1.png', href: '/', label: t('dashboard'), key: 'dashboard' },
        { icon: '/icons/sidebar/2.png', href: '/my-account', label: t('my_account'), key: 'my_account' },
        { icon: '/icons/sidebar/3.png', href: '/products', label: t('products'), key: 'products' },
        {
            icon: '/icons/sidebar/4.png',
            href: '/transactions',
            label: t('financial_transactions'),
            key: 'financial_transaction',
            lists: [
                { icon: '/icons/sidebar/5.png', href: '/my-withdrawals', label: t('my_withdrawals'), key: 'my_withdrawals' },
                { icon: '/icons/sidebar/6.png', href: '/new-withdrawal', label: t('new_withdrawal'), key: 'new_withdrawal' },
                { icon: '/icons/sidebar/7.png', href: '/account-balance', label: t('account_balance'), key: 'account_balance' },
            ],
        },
        { icon: '/icons/sidebar/8.png', href: '/notifications', label: t('notifications'), key: 'notifications' },
        { icon: '/icons/sidebar/9.png', href: '/support-requests', label: t('support_requests'), key: 'support_requests' },
        { icon: '/icons/sidebar/10.png', href: '/inventory-report', label: t('inventory_report'), key: 'inventory_report' },
        { icon: '/icons/sidebar/11.png', href: '/pricing-plans', label: t('pricing_plans'), key: 'pricing_plans' },
        { icon: '/icons/sidebar/12.png', href: '/call_center-fees', label: t('call_center_fees'), key: 'call_center_fees' },
        { icon: '/icons/sidebar/13.png', href: '/shipping-fees', label: t('shipping_fees'), key: 'shipping_fees' },
        { icon: '/icons/sidebar/14.png', href: '/service-invoices', label: t('service_invoices'), key: 'service_invoices' },
        // { icon: '/icons/sidebar/15.png', href: '/technical-support', label: t('technical_support'), key: 'technical_support' },
        // { icon: '/icons/sidebar/16.png', href: '/logout', label: t('logout'), key: 'logout' },
        { icon: '/icons/sidebar/18.png', href: '/cost-calculator', label: t('cost_calculator'), key: 'cost_calculator' },
    ];

    const accountManager = {
        imgUser: '/icons/sidebar/17.png',
        name: 'نور الدين صالح',
        contact: '+201002766592',
    };

    const [expand, setexpand] = useState(true);
    const [show, setshow] = useState('');
    const handleExpand = () => {
        setexpand(!expand);
        setshow(null);
    };

    const router = useRouter();
    const toggleDropdown = (val , e) => {
        e.lists ? null : router.push(e.href)
        
        if (!['financial_transaction'].includes(val)) return;
        setexpand(false);
        show == val ? setshow() : setshow(val);
    };

    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const locale = useLocale()


    const [showAccountDetails , setShowAccountDetails ] = useState(null)

    return (
        <nav className={`  ${expand ? 'w-[65px] ' : 'w-[330px]'} h-[calc(100vh-20px)] relative duration-500 `}>
            <div className={` ${expand ? 'w-[65px] ' : 'w-[330px]'}  fixed top-0 ltr:translate-x-[-10px] rtl:translate-x-[10px] rounded-[40px]  duration-500 transition-all mt-[10px] ltr:ml-[10px] rtl:mr-[10px] h-[calc(100vh-20px)] overflow-hidden bg-secon  bg-[#084384] dark:bg-[#1B2541] `}>
                <div className='h-full overflow-auto '>
                    <div className={` ${expand ? 'pb-[10px]' : 'p-[20px] '} logo flex items-center justify-between `}>
                        <Link className={`${expand && 'hidden'} `} href={'/'}>
                            <Image src={'/imgs/logo-white.png'} alt='' width={140} height={43} />{' '}
                        </Link>
                        {expand ? <Maximize2 onClick={handleExpand} className={` ${expand && ' mx-auto  mt-[20px] '} cursor-pointer hover:scale-[.9] text-white rotate-[45deg] rounded-xl w-[40px] mx-auto h-[40px] object-contain p-[10px]  scale-[.9] bg-[#0b4a90] dark:bg-[#1F2A4A] duration-300`} /> : <Image onClick={handleExpand} className={` ${expand && ' mx-auto  mt-[20px] '} cursor-pointer hover:scale-[.9] duration-300`} src={'/icons/expand.png'} alt='' width={35} height={35} />}
                    </div>

                    <div className={`flex flex-col  duration-500`}>
                        {sidebarItems.map((e, i) => (
                            <div onClick={() => toggleDropdown(e.key , e)} key={i}  className={` ${show == e.key ? '' : 'hover:bg-[#0b4a90] hover:dark:bg-[#1F2A4A] '} ${pathname == e.href && 'bg-[#0b4a90] dark:bg-[#1F2A4A] shadow-md '}  cursor-pointer hover:shadow-md min-h-[60px] flex-col py-[15px] px-[20px]  text-white transition-colors duration-300 relative `}>
                                <div className='flex gap-[15px] items-center justify-between '>
                                    <div className='flex gap-[15px] items-center'>
                                        <Image className='w-[28px] h-[28px] object-contain ' src={e.icon} alt='' width={30} height={30} />
                                        <span className={`capitalize ${expand && 'hidden'} `}>{e.label}</span>
                                    </div>
                                    {e.lists && <Image className={` ${show == e.key ? 'rotate-0' : 'rotate-[-180deg]'} ${expand && 'hidden'}  duration-300`} src={'/icons/arrow-top.png'} alt='' width={20} height={20} />}
                                </div>

                                <div className={` ${show == e.key ? 'max-h-[500px]  opacity-100 pt-[20px] ' : 'max-h-0 opacity-0'}  rtl:pr-[20px] ltr:pl-[20px] overflow-hidden transition-all duration-500 ease-in-out`}>
                                    {mounted && e.lists?.map((ele, idx) => (
                                        <Link
                                            href={ele.href || ''}
                                            key={idx}
                                            className={` 
                                                before:absolute rtl:before:right-[-11px] ltr:before:left-[-11px] before:bottom-[14px] before:rounded-full before:h-[12px] before:w-[12px]  before:bg-[#fff]  
                                                after:absolute after:h-[100%] after:rounded-full after:w-[10px] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-t-transparent  after:border-[#fff] ltr:after:left-[-13px] rtl:after:right-[-7px] after:bottom-[15px] 
                                                relative flex gap-[15px] hover:bg-[#0b4a90] hover:dark:bg-[#1F2A4A] px-[15px] min-h-[40px] t10 items-center`}>
                                            <Image className='w-[20px] h-[20px] ' src={ele.icon} alt='' width={30} height={30} />
                                            <span className='capitalize'>{ele.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div onClick={() => showAccountDetails == "account" ?  setShowAccountDetails("")  : setShowAccountDetails("account")  } className={` ${showAccountDetails == "account" ? 'bg-[#0b4a90] dark:bg-[#1F2A4A] ' : 'hover:shadow-md hover:bg-[#0b4a90] hover:dark:bg-[#1F2A4A] '} cursor-pointer  min-h-[60px]  py-[15px] px-[20px]  text-white transition-colors duration-300 relative `}  >
                            <div className='flex items-center justify-between w-full' >
                                <div className='flex gap-[15px] items-center'>
                                    <Image className='w-[28px] h-[28px] object-contain ' src={"/icons/sidebar/2.png"} alt='' width={30} height={30} />
                                    <span className={`capitalize ${expand && 'hidden'} `}>{t("account_manager")}</span>
                                </div>
                                <Image className={` ${showAccountDetails == "account" ? 'rotate-0' : 'rotate-[-180deg]'} ${expand && 'hidden'}  duration-300`} src={'/icons/arrow-top.png'} alt='' width={20} height={20} />
                            </div>
                            <div className={` ${expand && "hidden"} ${showAccountDetails == "account" ? "max-h-[300px] opacity-100 pt-[10px]  " : "max-h-0 opacity-0" }  gap-[10px] px-[20px] flex flex-col overflow-auto ease-in-out transition-all duration-500`} >
                                <div className="text-white text-sm font-normal"> نور الدين صالح</div>
                                <div className={`text-white text-sm font-normal  ${locale == "ar" && "text-right" } `} dir={locale == "ar" && "ltr" } > +201002766592</div>
                            </div>
                        </div>


                        <div  className={`cursor-pointer mt-[30px] mb-[20px]  min-h-[60px]  text-white transition-colors duration-300 relative `}  >
                                <div className=' rounded-md hover:shadow-md duration-300 flex justify-center gap-[15px] items-center max-w-[80%] mx-auto px-[10px] py-[10px] w-full bg-[#0b4a90] dark:bg-[#1F2A4A] '>
                                    <Image className='w-[28px] h-[28px] object-contain ' src={"/icons/sidebar/16.png"} alt='' width={30} height={30} />
                                    <span className={`capitalize ${expand && 'hidden'} `}>{t("logout")}</span>
                                </div>
                        </div>


                    </div>

                </div>
            </div>
        </nav>
    );
}
