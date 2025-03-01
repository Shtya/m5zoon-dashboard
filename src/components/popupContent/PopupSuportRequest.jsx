import React, { useState } from 'react'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { hookSignUp } from '@/hooks/hookSignUp'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'

export default function PopupSuportRequest() {
	const t = useTranslations("support-requests")
	const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
	
  return (
	<div>

		<div className='flex flex-col gap-[30px] mt-[30px] ' >
			<Input cnInput={"!h-[45px] !bg-[#f7f7f7] !border-[#ebecee] dark:!border-[#263358] "} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("customer_name")}  />
			<TextArea cnInput={"!h-[120px] !bg-[#f7f7f7] dark:!bg-bg3 !border-[#ebecee]  "} KEY={'first_name'} error={errors?.first_name} type={'text'} register={register('first_name')} label={t("message_content")}  />
			<Button name={t("save")} cn={"w-full bg-secondery dark:bg-primary  "}  />
		</div>
	</div>
  )
}
