import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '../atoms/Button';

export default function PopupLogout({  onClose }) {
  const t = useTranslations("");

  return (
        <div className="flex justify-center gap-4">
			<Button onclick={onClose} name={t("cancel")}  cn={"!bg-gray-300 capitalize "} />
			<Button name={t("confirm")}  cn={"!bg-red-600 capitalize "} />
      </div>
  );
}
