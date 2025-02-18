'use client';
import Breadcrumb from '@/components/atoms/Breadcrumb ';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import { PaymentSvg1 ,PaymentSvg2 ,PaymentSvg3 ,PaymentSvg4 ,PaymentSvg5 ,PaymentSvg6 ,PaymentSvg7 } from '@/components/svg/Svg';
import { hookSignUp } from '@/hooks/hookSignUp';
import { withdrawalTypes } from '@/seed';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

export default function page() {
    const t = useTranslations('account');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();

    const breadcrumbItems = [
        { label: t('main'), href: '/' },
        { label: t('my_account'), href: null },
    ];

    const switchBtns = [
        { value: 'profile', name: t('profile') },
        { value: 'payment_info', name: t('payment_info') },
    ];


    
    const [val, setval] = useState(switchBtns[0].value);
    const [valPayment, setvalPayment] = useState("value_1");
    let switchBtnsPayment = [
        { value: 'value_1', name: <PaymentSvg1 stroke={valPayment== "value_1" && "!stroke-white"} fill={valPayment == "value_1" && "!fill-white"} />  },
        { value: 'value_2', name: <PaymentSvg2 stroke={valPayment== "value_2" && "!stroke-white"} fill={valPayment == "value_2" && "!fill-white"} />  },
        { value: 'value_3', name: <PaymentSvg3 stroke={valPayment== "value_3" && "!stroke-white"} fill={valPayment == "value_3" && "!fill-white"} />  },
        { value: 'value_4', name: <PaymentSvg4 stroke={valPayment== "value_4" && "!stroke-white"} fill={valPayment == "value_4" && "!fill-white"} />  },
        { value: 'value_5', name: <PaymentSvg5 stroke={valPayment== "value_5" && "!stroke-white"} fill={valPayment == "value_5" && "!fill-white"} />  },
        { value: 'value_6', name: <PaymentSvg6 stroke={valPayment== "value_6" && "!stroke-white"} fill={valPayment == "value_6" && "!fill-white"} />  },
        { value: 'value_7', name: <PaymentSvg7 stroke={valPayment== "value_7" && "!stroke-white"} fill={valPayment == "value_7" && "!fill-white"} />  },
    ];

    const paymentImgs = [];
    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px] '>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px]  bg-white p-[30px] rounded-[10px] '>
                <div className=' flex items-center justify-between gap-[10px] @max-lg:justify-center  flex-wrap'>
                    <div>
                        <h1 className=' @max-lg:text-center text-[#0f1728] text-2xl font-normal'> {t('my_account')} </h1>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <Button name={t('edit')} />
                </div>
                <hr className='h-px border border-t-[#f2f3f3] border-transparent bg-transparent my-[28px] ' />
                <div className='flex items-center gap-[10px]'>
                    {switchBtns.map((e, i) => (
                        <span onClick={() => setval(e.value)} key={i} className={`max-w-fit px-[10px] flex items-center justify-center w-full h-[42px] duration-300  cursor-pointer hover:bg-opacity-90 ${e.value == val ? 'bg-secondery text-white' : 'bg-white text-[#637381]'}  text-base font-normal rounded-[8px]`}>
                            {e.name}
                        </span>
                    ))}
                </div>
            </div>

            {/*  Card Data */}
            <div className='cShadow w-full min-h-[900px]  bg-white p-[30px]  rounded-[10px] '>
                <div className=' w-full grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px] '>
                    {val == 'profile' ? (
                        <>
                            <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'name'} error={errors?.first_name} type={'text'} register={register('name')} label={t('name')} />
                            <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'email'} error={errors?.first_name} type={'text'} register={register('email')} label={t('email')} />
                            <Input dataAos={'fade-up'} delay={100} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'phone_number'} error={errors?.first_name} type={'text'} register={register('phone_number')} label={t('phone_number')} />
                            <Input dataAos={'fade-up'} delay={100} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'whatsapp_number'} error={errors?.first_name} type={'text'} register={register('whatsapp_number')} label={t('whatsapp_number')} />
                            <Input dataAos={'fade-up'} delay={200} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'password'} error={errors?.first_name} type={'text'} register={register('password')} label={t('password')} />
                            <Input dataAos={'fade-up'} delay={200} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'product_type'} error={errors?.first_name} type={'text'} register={register('product_type')} label={t('product_type')} />
                            <Select dataAos={'fade-up'} delay={300} KEY='country' cnSelect={'bg-[#f7f7f7]'} error={errors?.country} setValue={setValue} watch={watch} trigger={trigger} data={withdrawalTypes} place={withdrawalTypes[0].value} label={t('country')} iconSelect={'/icons/two-arrow.png'} />
                            <Input dataAos={'fade-up'} delay={300} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'address'} error={errors?.first_name} type={'text'} register={register('address')} label={t('address')} />
                            <div data-aos={'fade-up'} data-aos-delay={400} className='flex flex-col gap-[15px] '>
                                <div className='text-[#3e4c5b] text-lg font-normal  '> {t('profile_picture')} </div>
                                <Image className='rounded-full w-[90px] h-[90px] ' src={'/icons/test/13.png'} alt='' width={100} height={100} />
                            </div>
                        </>
                    ) : (
                        <div className='col-span-2'>
                            <div className=' w-full flex-wrap  flex items-center gap-[20px] mb-[30px]  '>
                                {switchBtnsPayment.map((e, i) => (
                                    <div onClick={() => setvalPayment(e.value)} key={i} className={`group ${e.value == valPayment && "bg-secondery  "} cursor-pointer hover:bg-secondery h-[80px] max-w-[220px] w-full px-[10px] flex items-center justify-center bg-[#fff] rounded-lg border border-[#eeeeee]`}>
                                        {e.name}
                                    </div>
                                ))}
                            </div>

                            
                            {valPayment == 'value_1' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'account_number'} error={errors?.first_name} type={'text'} register={register('account_number')} label={t('account_number')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'iban_number'} error={errors?.first_name} type={'text'} register={register('iban_number')} label={t('iban_number')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'full_name'} error={errors?.first_name} type={'text'} register={register('full_name')} label={t('full_name')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'bank_name'} error={errors?.first_name} type={'text'} register={register('bank_name')} label={t('bank_name')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'bank_branch'} error={errors?.first_name} type={'text'} register={register('bank_branch')} label={t('bank_branch')} />
                               </div>
                            )}
                            {valPayment == 'value_2' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'wallet.full_name'} error={errors?.first_name} type={'text'} register={register('wallet.full_name')} label={t('full_name')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'wallet.wallet_id'} error={errors?.first_name} type={'text'} register={register('wallet.wallet_id')} label={t('wallet_id')} />
                                </div>
                            )}
                            {valPayment == 'value_3' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'full_name'} error={errors?.first_name} type={'text'} register={register('full_name')} label={t('full_name')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'paypal_email'} error={errors?.first_name} type={'text'} register={register('paypal_email')} label={t('paypal_email')} />
                                </div>
                            )}
                            {valPayment == 'value_4' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'card.card_holder'} error={errors?.first_name} type={'text'} register={register('card.card_holder')} label={t('card_holder')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'card.card_number'} error={errors?.first_name} type={'text'} register={register('card.card_number')} label={t('card_number')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'card.expiry_date'} error={errors?.first_name} type={'text'} register={register('card.expiry_date')} label={t('expiry_date')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'card.cvv'} error={errors?.first_name} type={'text'} register={register('card.cvv')} label={t('cvv')} />
                                </div>
                            )}
                            {valPayment == 'value_5' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'transaction_id'} error={errors?.first_name} type={'text'} register={register('transaction_id')} label={t('transaction_id')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'receiver_name'} error={errors?.first_name} type={'text'} register={register('receiver_name')} label={t('receiver_name')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'sender_name'} error={errors?.first_name} type={'text'} register={register('sender_name')} label={t('sender_name')} />
                                </div>
                            )}
                            {valPayment == 'value_6' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'transaction_id'} error={errors?.first_name} type={'text'} register={register('transaction_id')} label={t('transaction_id')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'receiver_name'} error={errors?.first_name} type={'text'} register={register('receiver_name')} label={t('receiver_name')} />
                                    <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'sender_name'} error={errors?.first_name} type={'text'} register={register('sender_name')} label={t('sender_name')} />
                                </div>
                            )}
                            {valPayment == 'value_7' && (
                                <div className=' w-full  col-span-2  grid grid-cols-2 @max-lg:grid-cols-1 gap-[30px]'>
                                     <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'transaction_id'} error={errors?.first_name} type={'text'} register={register('transaction_id')} label={t('transaction_id')} />
                                     <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'receiver_name'} error={errors?.first_name} type={'text'} register={register('receiver_name')} label={t('receiver_name')} />
                                     <Input dataAos={'fade-up'} cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee]'} KEY={'sender_name'} error={errors?.first_name} type={'text'} register={register('sender_name')} label={t('sender_name')} />
                                </div>
                            )}


                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
