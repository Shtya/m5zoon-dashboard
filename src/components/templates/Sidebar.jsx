'use client';
// import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import { Maximize2 } from 'lucide-react';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { createPortal } from 'react-dom';
import Popup from '../molecules/Popup';
import PopupProducts from '../popupContent/PopupProducts';
import PopupLogout from '../popupContent/PopupLogout';




function TooltipPortal({ children, position , locale }) {
    if (position.left === null) return null;

    return createPortal(
        <div
            className="fixed bg-secondery2 dark:bg-border1 text-white text-sm px-3 duration-500 py-3 rounded-md shadow-lg whitespace-nowrap z-[10000000000000]"
            style={{
                left: `${position.left}px`,
                top: `${position.top}px`,
                transform: locale === "ar" 
                    ? `translateX(-100%) translateY(-50%)` // Align to left in Arabic
                    : `translateX(0) translateY(-50%)`, // Align to right in English
            }}
        >
            {children}
        </div>,
        document.body // Append directly to body
    );
}




export default function Sidebar({isMobile}) {
    const t = useTranslations('sidebar');
    const t_ = useTranslations()
    const sidebarItems = [
        { icon: '/icons/sidebar/1.png', href: '/', label: t('dashboard'), KEY: 'dashboard' },
        { icon: '/icons/sidebar/2.png', href: '/my-account', label: t('my_account'), KEY: 'my_account' },
        { icon: '/icons/sidebar/3.png', href: '/products', label: t('products'), KEY: 'products' },
        {
            icon: '/icons/sidebar/4.png',
            href: '/transactions',
            label: t('financial_transactions'),
            KEY: 'financial_transaction',
            lists: [
                { icon: '/icons/sidebar/5.png', href: '/my-withdrawals', label: t('my_withdrawals'), KEY: 'my_withdrawals' },
                { icon: '/icons/sidebar/6.png', href: '/new-withdrawal', label: t('new_withdrawal'), KEY: 'new_withdrawal' },
                { icon: '/icons/sidebar/7.png', href: '/account-balance', label: t('account_balance'), KEY: 'account_balance' },
            ],
        },
        { icon: '/icons/sidebar/8.png', href: '/notifications', label: t('notifications'), KEY: 'notifications' },
        { icon: '/icons/sidebar/9.png', href: '/support-requests', label: t('support_requests'), KEY: 'support_requests' },
        { icon: '/icons/sidebar/10.png', href: '/inventory-report', label: t('inventory_report'), KEY: 'inventory_report' },
        { icon: '/icons/sidebar/11.png', href: '/pricing-plans', label: t('pricing_plans'), KEY: 'pricing_plans' },
        { icon: '/icons/sidebar/12.png', href: '/call_center-fees', label: t('call_center_fees'), KEY: 'call_center_fees' },
        { icon: '/icons/sidebar/13.png', href: '/shipping-fees', label: t('shipping_fees'), KEY: 'shipping_fees' },
        { icon: '/icons/sidebar/14.png', href: '/service-invoices', label: t('service_invoices'), KEY: 'service_invoices' },
        // { icon: '/icons/sidebar/15.png', href: '/technical-support', label: t('technical_support'), KEY: 'technical_support' },
        // { icon: '/icons/sidebar/16.png', href: '/logout', label: t('logout'), KEY: 'logout' },
        { icon: '/icons/sidebar/18.png', href: '/cost-calculator', label: t('cost_calculator'), KEY: 'cost_calculator' },
    ];


    const [expand, setexpand] = useState(false);
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

    useEffect(()=> {
        isMobile ? setexpand(true)  : setexpand(false)
    } ,[isMobile])


    const [showAccountDetails , setShowAccountDetails ] = useState(null)

    //!  tooltip 
    const [hoveredItem, setHoveredItem] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ left: null, top: 0 , right : null });

    const handleMouseEnter = (event, ele) => {
        const linkElement = event?.currentTarget
        if (!linkElement) return;


        const rect = linkElement.getBoundingClientRect();

        const left = locale === "ar" ? rect.left - 5 : rect.right + 5; // Adjust based on language
        const top = rect.top + rect.height / 2; // Centered vertically

        setHoveredItem(ele?.label);
        setTooltipPosition({ left, top });
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const [isOpenPopup , setisOpenPopup] = useState(false)


    return (
        <nav className={`z-[100000]  ${isMobile && " absolute rtl:right-0 ltr:left-0 top-0 " }  ${expand ? 'w-[65px] ' : 'w-[280px]'} relative duration-500 `}>
            <div className={` ${expand ? 'w-[65px] ' : 'w-[280px]'}  fixed top-0 ltr:translate-x-[-10px] rtl:translate-x-[10px] rounded-[40px]  duration-500 transition-all mt-[10px] ltr:ml-[10px] rtl:mr-[10px] h-[calc(100vh-20px)] overflow-hidden bg-secon  bg-[#084384] dark:bg-[#1B2541] `}>
                <div className='h-full overflow-auto '>
                    <div className={` ${expand ? 'pb-[10px]' : 'p-[20px] pt-[40px]'}  logo flex items-center justify-between `}>
                        <Link className={`${expand && 'hidden'} `} href={'/'}>
                            <Image src={'/imgs/logo-white.png'} alt='' width={110} height={43} />{' '}
                        </Link>
                        {expand ? <Maximize2 onClick={handleExpand} className={` ${expand && ' mx-auto  mt-[20px] '} cursor-pointer hover:scale-[.9] text-white rotate-[45deg] rounded-xl w-[40px] mx-auto h-[40px] object-contain p-[10px]  scale-[.9] bg-[#0b4a90] dark:bg-[#1F2A4A] duration-300`} /> : <Image onClick={handleExpand} className={` ${expand && ' mx-auto  mt-[20px] '} cursor-pointer hover:scale-[.9] duration-300`} src={'/icons/expand.png'} alt='' width={35} height={35} />}
                    </div>

                    <div className={`main flex flex-col  duration-500`}>
                        {sidebarItems.map((e, i) => (
                            <div 
                                    onMouseEnter={(event) => handleMouseEnter(event, e )}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => toggleDropdown(e.KEY , e)} 
                                    key={i}  
                                    className={` ${show == e.KEY ? '' : 'hover:bg-[#0b4a90] hover:dark:bg-[#1F2A4A] '} ${pathname == e.href && 'bg-[#0b4a90] dark:bg-[#1F2A4A] shadow-md '}  cursor-pointer hover:shadow-md min-h-[60px] flex-col py-[15px] px-[20px]  text-white transition-colors duration-300 relative `}>
                                <div className='flex gap-[15px] items-center justify-between '>
                                    <div className='flex gap-[15px] items-center'>
                                        <Image className='w-[28px] h-[28px] object-contain ' src={e.icon} alt='' width={30} height={30} />
                                        <span className={`capitalize ${expand && 'hidden'} `}>{e.label}</span>
                                    </div>
                                    {e.KEY == "notifications" &&  <span className={`w-[20px] h-[20px] bg-primary text-white text-sm   rounded-full flex items-center justify-center ${expand && 'hidden'} `} > 2 </span> }
                                    {e.lists && <Image className={` ${show == e.KEY ? 'rotate-0' : 'rotate-[-180deg]'} ${expand && 'hidden'}  duration-300`} src={'/icons/arrow-top.png'} alt='' width={20} height={20} />}
                                </div>

                                {hoveredItem && expand && <TooltipPortal locale={locale} position={tooltipPosition}>{hoveredItem}</TooltipPortal>}


                                <div className={` ${show == e.KEY ? 'max-h-[500px]  opacity-100 pt-[20px] ' : 'max-h-0 opacity-0'}  rtl:pr-[20px] ltr:pl-[20px] overflow-hidden transition-all duration-500 ease-in-out`}>
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

                            <div className={` ${expand && "hidden"} ${showAccountDetails == "account" ? "max-h-[300px] opacity-100 pt-[20px]  " : "max-h-0 opacity-0" }  gap-[10px] px-[20px] flex flex-col  items-center overflow-auto ease-in-out transition-all duration-500`} >
                                <div className="text-white text-sm font-normal"> نور الدين صالح</div>
                                <div className={`text-white text-sm font-normal flex items-center gap-[5px]  ${locale == "ar" && "text-right" } `} dir={locale == "ar" && "ltr" } > 
                                    <svg className='order-[2] ' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path className='fill-[#29a319] ' fill-rule="evenodd" clip-rule="evenodd" d="M7.45291 0.75C11.1635 0.75 14.1717 3.75812 14.1717 7.46875C14.1717 11.1794 11.1635 14.1875 7.45291 14.1875C6.29041 14.1875 5.19666 13.8919 4.24229 13.3719L1.27979 13.8687C1.20677 13.8809 1.1319 13.8757 1.06132 13.8533C0.990735 13.831 0.92644 13.7923 0.873699 13.7403C0.820958 13.6884 0.781271 13.6247 0.757887 13.5545C0.734503 13.4842 0.728087 13.4094 0.739165 13.3362L1.23916 10.03C0.904211 9.21771 0.732609 8.34738 0.734165 7.46875C0.734165 3.75812 3.74229 0.75 7.45291 0.75ZM4.91729 4.15625C4.45791 4.15625 4.07729 4.54375 4.14854 5.0225C4.28354 5.92 4.68229 7.57375 5.86854 8.76875C7.10854 10.0181 8.88291 10.5525 9.84354 10.7631C10.341 10.8725 10.7654 10.4787 10.7654 9.99312V8.85312C10.7654 8.81525 10.754 8.77825 10.7326 8.74702C10.7111 8.71578 10.6808 8.69176 10.6454 8.67812L9.42041 8.2075C9.38735 8.19485 9.35138 8.19181 9.31666 8.19875L8.08104 8.44C7.28416 8.0275 6.80166 7.565 6.51229 6.86812L6.74479 5.60875C6.75102 5.57524 6.74799 5.54067 6.73604 5.50875L6.27666 4.27812C6.26333 4.24244 6.23944 4.21166 6.20818 4.18988C6.17692 4.16811 6.13976 4.15638 6.10166 4.15625H4.91729Z" fill="#084384"/> </svg>
                                    +201002766592</div>
                            </div>
                        </div>

                        <div  className={`cursor-pointer mt-[30px] mb-[20px]  min-h-[60px]  text-white transition-colors duration-300 relative `}  >
                                <div onClick={()=> setisOpenPopup(true)} className=' rounded-md hover:shadow-md duration-300 flex justify-center gap-[15px] items-center max-w-[80%] mx-auto px-[10px] py-[10px] w-full bg-[#0b4a90] dark:bg-[#1F2A4A] '>
                                    <Image className='w-[28px] h-[28px] object-contain ' src={"/icons/sidebar/16.png"} alt='' width={30} height={30} />
                                    <span className={`capitalize ${expand && 'hidden'} `}>{t("logout")}</span>
                                </div>
                        </div>

                        
                    </div>

                </div>
            </div>


            <Popup cn="max-w-[500px] "  title={t_('logout_confirmation')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={ <PopupLogout onClose={()=> setisOpenPopup(false)} /> } />

        </nav>
    );
}
