'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { hookSignUp } from '@/hooks/hookSignUp';
import { useTranslations } from 'next-intl';
import MyWithdrawalsTable from '@/tables/MyWithdrawals';
import Select from '@/components/atoms/Select';
import { withdrawalTypes } from '@/seed';

export default function page() {
    const t = useTranslations('my-withdrawals');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();


    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]'>
            {/*  Name of the page  */}
            <div className=' cShadow min-h-[100px] @max-sm:justify-center  flex-wrap bg-white p-[20px] rounded-[10px]  flex items-center justify-between gap-[10px]  '>
                <h1 className=' @max-lg:text-center text-[#0f1728] dark:text-[#fff] duration-300  text-[27px] font-normal'> {t('new_withdrawal')} </h1>
                <Button  order={'order-[-1]  '} cn={'bg-secondery dark:bg-primary  '} name={t('confirm_withdrawal')} />
            </div>



            {/*  Table  */}
            <div className='cShadow   min-h-[500px]  bg-white p-[20px] rounded-[10px] '>
                <div className='flex flex-col gap-[30px] mt-[30px] '>
                    <Select KEY='city' cnSelect={'bg-[#f7f7f7]'} error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={withdrawalTypes} place={withdrawalTypes[0].value} label={t('withdrawal_type')} iconSelect={'/icons/two-arrow.png'} />
                    <Input cnInput={'!h-[50px] !bg-[#f7f7f7] !border-[#ebecee] dark:!border-[#263358] '} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t('withdrawal_balance')} />
                </div>
            </div>
        </div>
    );
}
