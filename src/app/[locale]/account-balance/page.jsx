'use client';
import Button from '@/components/atoms/Button';
import ButtonIcon from '@/components/atoms/ButtonIcon';
import Input from '@/components/atoms/Input';
import Table from '@/components/templates/Table';
import { hookSignUp } from '@/hooks/hookSignUp';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Popup from '@/components/molecules/Popup';
import PopupWithdrow from '@/components/popupContent/PopupWithdrow';
import AccountBalanceTable from '../../../tables/AccountBalance';
import Image from 'next/image';

export default function page() {
    const t = useTranslations('my-withdrawals');
    const t_ = useTranslations('');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
    const { headContent, data } = AccountBalanceTable();

    //! popup
    const [isOpenPopup, setisOpenPopup] = useState(false);

    /*
        "total_earnings": "اجمالي الارباح",
        "": "إجمالي الرصيد",
        "total_balance_value": "10000 ر.س",
        "": "رصيد قيد المراجعة",
        "": "رصيد قابل للسحب",
        "": "رصيد تم سحبه",
	*/

    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]'>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] @max-xl:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <div className='flex items-center gap-[10px]'>
                    <h1 className=' @max-lg:text-center text-[#0f1728] text-[27px] font-normal'> {t('account_balance')} </h1>
                    <div className='min-w-[45px] h-[27px] px-2 py-0.5 bg-[#f5f8ff] rounded-2xl justify-center items-center flex text-center text-[#084384] text-xs font-normal'> 1500 </div>
                </div>

                <div className='flex items-center gap-[10px] flex-wrap '>
                    <Input cnInput={'!h-[50px]'} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} place={t('search_placeholder')} icon={'/icons/search.png'} />
                    <ButtonIcon icon={'/icons/replace.png'} />
                    <ButtonIcon icon={'/icons/pdf.png'} />
                    <ButtonIcon icon={'/icons/print.png'} />
                    <ButtonIcon icon={'/icons/copy.png'} />
                </div>
            </div>

            {/*  My Wallet  */}
            <div className='cShadow text-white  grid grid-cols-2 @max-2xl:grid-cols-1 gap-[50px]  min-h-[100px]  bg-white p-[20px] rounded-[10px] '>
                <div className=' relative min-h-[252px] p-6 bg-gradient-to-b from-[#084384] to-[#084384] rounded-2xl border border-[#dcdcdd] flex-col justify-start items-start gap-[76px] inline-flex'>
                    <Image className='w-full h-full absolute inset-0 object-fill' src={'/imgs/card.png'} alt='' width={250} height={100} />

                    <h3 className='text-[#f6f6f6] text-[22px] font-normal flex items-center gap-[10px] '>
                        <span className='w-[3px] h-[18px] bg-white rounded-tr-[30px] rounded-bl-[30px]' /> {t('total_balance')}
                    </h3>
                    <div className=' relative w-full grid @max-md:grid-cols-1 grid-cols-2 gap-[20px] '>
                        <span className='@max-md:hidden  absolute left-[50%] translate-x-[-50%] top-0 h-full w-[1px] bg-[#e0e0e0] '></span>
                        <div className='max-w-[190px] w-full mx-auto '>
                            <h4 className='text-[#f6f6f6] text-xl font-normal flex items-center gap-[5px] '>
                                <span className='w-3 h-3 bg-[#32a840] rounded-full' /> {t('withdrawn_balance')}
                            </h4>
                            <span className='text-[22px] font-bold mt-[8px]  '>
                                {'3000'} {t_('currency.saudi_currency')}
                            </span>
                        </div>
                        <div className='max-w-[190px] w-full mx-auto '>
                            <h4 className='text-[#f6f6f6] text-xl font-normal flex items-center gap-[5px] '>
                                <span className='w-3 h-3 bg-[#e5a240] rounded-full' /> {t('withdrawable_balance')}
                            </h4>
                            <span className='text-[22px] font-bold mt-[8px]  '>
                                {'5000'} {t_('currency.saudi_currency')}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-[20px] '>
                    <div className='min-h-[117px] w-full p-5 bg-[#f7f8fa] rounded-[10px] justify-between items-center inline-flex'>
                        <div className='flex-col gap-[15px] inline-flex'>
							<h3 className='text-[#7a7a7e] text-xl font-normal flex items-center gap-[10px] '>
								<span className='w-[3px] h-[18px] bg-secondery rounded-tr-[30px] rounded-bl-[30px]' /> {t('total_balance')}
							</h3>
                            <div className=" text-[#084384] text-[22px] font-normal "> {'10000'} {t_('currency.saudi_currency')} </div>
                        </div>
                        <svg width='60' height='61' viewBox='0 0 60 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect y='0.75' width='60' height='60' rx='30' fill='#FEFEFF' /> <path d='M27.6421 13.2751C27.3331 13.274 27.0232 13.2743 26.7124 13.2756C25.2166 13.2826 23.6968 13.3219 22.1641 13.3787L22.6075 15.3235C24.2037 15.143 25.9536 15.0087 27.7034 14.9415C28.6513 14.9051 29.5935 14.8859 30.5074 14.8907C33.2492 14.905 35.7369 15.1352 37.3645 15.7659L38.0604 16.0357L37.7497 16.7142C35.4793 21.674 34.9542 26.4589 35.31 31.1537C35.4856 25.582 37.8016 20.6264 40.842 14.2734C36.7048 13.5859 32.2769 13.2905 27.6421 13.275V13.2751ZM29.8323 16.3055C29.1495 16.3061 28.4534 16.3199 27.7573 16.3466C24.5017 16.4716 21.2574 16.8537 19.143 17.2916C21.5049 21.6728 23.4156 26.0641 24.6495 30.3449C24.8029 30.3398 24.9565 30.341 25.1099 30.3484C25.4238 30.3638 25.7343 30.4064 26.0377 30.4727C24.7818 26.4573 23.3513 22.7539 21.5731 19.0562L21.1713 18.2207L22.0843 18.0591C24.3777 17.653 26.7449 17.4959 28.9979 17.4952C29.148 17.4952 29.2979 17.4957 29.447 17.497C30.8785 17.5095 32.2582 17.5836 33.5365 17.6951L34.4001 17.7705L34.1482 18.5999C32.6873 23.4095 32.4011 28.5748 33.2271 33.4891C33.2409 33.5019 33.2548 33.5145 33.2682 33.5274C33.5661 33.423 33.8448 33.3166 34.1045 33.2029C33.4597 27.9377 33.7454 22.5058 36.1537 16.8591C34.8098 16.5166 32.7611 16.3377 30.51 16.3095C30.2841 16.3067 30.0582 16.3054 29.8323 16.3055ZM41.1561 16.8825C38.7377 22.0041 37.0199 26.1083 36.7384 30.539C38.3038 25.3201 41.3297 20.6417 44.7777 17.636C43.5809 17.3375 42.3727 17.0861 41.1561 16.8825ZM18.1123 18.3301C16.6466 18.6323 15.2149 19.0159 13.8301 19.5459C14.504 20.1302 15.7223 21.2173 17.2004 22.6622C17.8807 21.962 18.5745 21.2702 19.2982 20.6411C18.9149 19.8646 18.5196 19.0942 18.1123 18.3301ZM29.2078 18.9146C28.1437 18.9095 27.0545 18.9399 25.9614 19.0156C25.8467 20.0845 25.2145 21.0845 24.4595 22.068C25.665 24.9171 26.7062 27.8245 27.6435 30.9112C29.0791 31.3347 30.4993 31.8352 31.6498 32.435C31.2224 29.118 31.2809 25.7191 31.8357 22.3953C30.8291 21.3555 30.3047 20.2008 30.2627 18.9312C29.9111 18.9219 29.5595 18.9163 29.2078 18.9146ZM43.428 21.0228C41.4959 23.3119 39.7935 26.1788 38.6334 29.2972C40.7634 26.2673 43.3827 23.9041 46.1707 22.2347C45.2624 21.8174 44.348 21.4134 43.428 21.0228ZM19.9327 21.9571C18.7925 22.9874 17.6659 24.2241 16.4927 25.4022C19.0153 26.9015 21.1639 28.677 22.9166 30.6881C23.0255 30.647 23.1354 30.6101 23.2459 30.5764C22.4258 27.7564 21.3018 24.8707 19.9327 21.9571ZM38.166 31.7034C36.885 33.2493 35.679 34.0655 34.0184 34.7166C34.2052 35.437 33.9277 36.2639 33.2891 36.8964C32.9135 37.2684 32.4415 37.6923 31.7513 37.9679C31.8509 38.0268 31.9525 38.0823 32.056 38.1341C33.022 38.6161 34.7284 38.4606 36.3138 37.7396C37.8943 37.0209 39.3062 35.7793 39.8295 34.5216C40.0917 33.8145 39.9045 33.4458 39.4453 32.905C39.1184 32.5202 38.641 32.1323 38.166 31.7034V31.7034ZM24.8786 31.7491C24.0415 31.7415 23.1913 31.983 22.4887 32.5116C21.4895 33.2634 20.7192 34.6041 20.7123 36.8815V36.8971L20.7116 36.9127C20.4834 41.7081 20.8366 43.9205 21.5362 45.1209C22.1537 46.1805 23.1807 46.6877 24.683 47.6205C24.7546 47.4325 24.8291 47.2013 24.8991 46.9097C25.077 46.1676 25.2241 45.1484 25.3174 44.021C25.5041 41.7665 25.4768 39.0593 25.1647 37.1112L24.9998 36.0808L26.0166 36.3148C28.4866 36.883 29.8995 36.9501 30.7198 36.8054C31.5402 36.6605 31.8183 36.3739 32.2995 35.8973C32.7519 35.4495 32.7434 35.2883 32.6477 35.0362C32.5518 34.7841 32.1673 34.3687 31.5148 33.9712C30.2099 33.1762 27.9926 32.4391 25.92 31.8894C25.5801 31.7994 25.2302 31.7523 24.8786 31.7491ZM39.652 37.1723C38.8698 37.9343 37.9071 38.5598 36.896 39.0197C35.2567 39.7652 33.4536 40.1062 31.9577 39.6098C31.4295 39.8063 31.1227 40.0322 30.968 40.2191C30.7556 40.4757 30.7423 40.6644 30.8143 40.9348C30.8862 41.2051 31.1006 41.526 31.3658 41.757C31.6309 41.9879 31.9459 42.1079 32.0657 42.1135C35.7215 42.2871 37.3037 41.238 39.2748 40.0211C39.8497 39.6662 40.0697 38.9474 40.0146 38.2296C39.987 37.8707 39.8826 37.5334 39.762 37.321C39.7321 37.2668 39.6951 37.2168 39.652 37.1723ZM26.6687 37.8829C26.8817 39.8413 26.8852 42.1262 26.7188 44.137C26.6214 45.3145 26.4708 46.3854 26.2666 47.2374C26.1777 47.6082 26.08 47.937 25.9619 48.2264L37.4226 47.7213C37.2932 47.2409 37.1613 46.7585 37.0295 46.2759C36.5892 46.4224 36.1391 46.5379 35.6827 46.6215L35.6861 46.6785L35.0364 46.719C34.6363 46.767 34.2198 46.7934 33.7877 46.7965L27.2362 47.2035L27.4309 46.2967C28.0518 43.4056 28.1091 40.8601 27.7261 38.0753C27.3724 38.018 27.0198 37.9539 26.6686 37.8829H26.6687ZM29.1665 38.2488C29.4749 40.7436 29.4378 43.1246 28.9785 45.6863L30.4835 45.5929C30.2475 45.2446 30.0853 44.8517 30.007 44.4384C29.9057 43.9009 29.962 43.3026 30.3137 42.8079C30.3292 42.7859 30.346 42.7649 30.3627 42.7437C29.9528 42.3652 29.6105 41.8795 29.4553 41.2966C29.2902 40.6759 29.3933 39.9161 29.8848 39.3223C30.0472 39.1262 30.2435 38.9492 30.4741 38.7898C30.2702 38.6273 30.0914 38.4551 29.937 38.2756C29.6977 38.2773 29.4413 38.2684 29.1665 38.2488ZM39.531 41.5133C37.6985 42.6268 35.6396 43.6911 31.999 43.5183C31.8802 43.5125 31.7621 43.4964 31.646 43.4702C31.5497 43.5134 31.4983 43.5684 31.4599 43.6223C31.3847 43.7282 31.3402 43.9192 31.3889 44.178C31.4864 44.6958 31.9768 45.2631 32.4334 45.3162C35.6666 45.6923 37.9005 44.6345 39.257 43.404C39.882 42.837 39.8873 42.4743 39.7952 42.0797C39.7491 41.8826 39.6476 41.6915 39.531 41.5133ZM39.0089 45.3462C38.7919 45.4823 38.5691 45.609 38.3412 45.7259C38.4701 46.1987 38.5993 46.6714 38.7269 47.1442L40.2831 46.8652C39.8816 46.5224 39.5673 46.1656 39.3152 45.8108C39.2025 45.6523 39.1032 45.4982 39.0089 45.3462Z' fill='#084384' />
                        </svg>
                    </div>

                    <div className='min-h-[117px] w-full border border-[#eeeeee] p-5  rounded-[10px] justify-between items-center inline-flex'>
                        <div className='flex-col  gap-[15px] inline-flex'>
							<h3 className='text-[#7a7a7e] text-xl font-normal flex items-center gap-[10px] '>
								<span className='w-[3px] h-[18px] bg-primary rounded-tr-[30px] rounded-bl-[30px]' /> {t('pending_balance')}
							</h3>
                            <div className=" text-primary text-[22px] font-normal "> {'10000'} {t_('currency.saudi_currency')} </div>
                        </div>
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.25" width="60" height="60" rx="30" fill="#FFF9F5"/><path d="M44.4759 32.0596V37.4881C44.4759 39.8405 38.8049 42.9167 31.8092 42.9167C24.8136 42.9167 19.1426 39.8405 19.1426 37.4881V32.9643" stroke="#FBB03B" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.6748 33.4323C21.24 35.5096 26.0805 37.4585 31.8095 37.4585C38.8051 37.4585 44.4761 34.5524 44.4761 32.0552C44.4761 30.6528 42.6901 29.1166 39.8872 28.0381" stroke="#FBB03B" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.0472 23.0117V28.4403C39.0472 30.7927 33.3762 33.8689 26.3805 33.8689C19.3849 33.8689 13.7139 30.7927 13.7139 28.4403V23.0117" stroke="#FBB03B" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.3805 28.4112C33.3762 28.4112 39.0472 25.5051 39.0472 23.008C39.0472 20.509 33.3762 17.583 26.3805 17.583C19.3849 17.583 13.7139 20.509 13.7139 23.008C13.7139 25.5051 19.3849 28.4112 26.3805 28.4112Z" stroke="#FBB03B" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>
            </div>

            {/*  Table  */}
            <div className='cShadow   min-h-[100px]  bg-white p-[20px] rounded-[10px] '>
                <Table nameEditBtn={''} head={headContent} data={data} onOpen={() => setisOpenPopup(true)} />
            </div>
            <Popup title={t('new_withdrawal')} isOpen={isOpenPopup} onClose={() => setisOpenPopup(false)} content={<PopupWithdrow />} />
        </div>
    );
}
