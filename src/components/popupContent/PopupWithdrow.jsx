import React, { useState } from 'react'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { hookSignUp } from '@/hooks/hookSignUp'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import { productStatusOptions, withdrawalTypes } from '@/seed'
import Select from '../atoms/Select'

export default function PopupWithdrow() {
	const t = useTranslations("my-withdrawals")
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
	
  return (
	<div>

		<div className='flex flex-col gap-[30px] mt-[30px] ' >                    
			<Select KEY='city' cnSelect={"bg-[#f7f7f7]"} error={errors?.city} setValue={setValue} watch={watch} trigger={trigger} data={withdrawalTypes} place={withdrawalTypes[0].value} label={t('withdrawal_type')}     iconSelect={"/icons/two-arrow.png"} />
			<Input cnInput={"!h-[45px] !bg-[#f7f7f7] !border-[#ebecee] dark:!border-[#263358] "} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("withdrawal_balance")}  />
			<Button name={t("confirm_withdrawal")} cn={"w-full bg-secondery  "}  />
		</div>
	</div>
  )
}
