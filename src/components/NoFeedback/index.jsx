import { Text } from 'components';
import React from 'react'
import { useTranslation } from 'react-i18next';

function NoFeedBack() {
    const { t } = useTranslation();
  return (
    <div className="bg-gray-100 p-[20px] flex flex-col items-center rounded">
        <img src='images/nofeedback.svg' alt='nofeedback' />
        <Text className="py-[16px] text-lg font-semibold">{t("studentDatabase.noFeedback")}</Text>
        <Text className="text-sm font-normal">{t("studentDatabase.noFeedbackReceivedYet")}</Text>
    </div>
  )
}

export default NoFeedBack