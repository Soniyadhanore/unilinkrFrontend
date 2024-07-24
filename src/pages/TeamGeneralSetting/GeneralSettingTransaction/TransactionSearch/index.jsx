import { Button, Img, SearchInputComponent, SelectBox, Text } from "components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TransactionDateModal from "../TransactionDateModal";
const statusSelect = [
  {
    value: "Option",
    label: "Status",
  },
  {
    value: "Option1",
    label: "Open",
  },
  {
    value: "Option2",
    label: "Resolved",
  },
  { value: "Option3", label: "Pending" },
];
const TransactionSearch = () => {
  const { t } = useTranslation();
  const [transactionDateShow, setTransactionDateShow] = useState(false);
  const handleTransactionDateShow = () => {
    setTransactionDateShow(true);
  };
  const handleTransactionDateClose = () => {
    setTransactionDateShow(false);
  };
  return (
    <div className="w-full">
      <div className="flex sm:flex-col justify-between gap-5 my-[16px]">
        <div className="flex sm:flex-col justify-left w-[75%] md:w-full gap-5">
          <SearchInputComponent
            placeholder={t("common.search")}
            startAdornment={
              <Img
                className="h-[24px] w-[24px] md:mr-0"
                src="images/img_search.svg"
                alt="img_search"
              />
            }
            className="!mb-[0px] sm:mb-4 max-w-[350px] sm:max-w-[100%] md:max-w-[200px] w-full search-input"
          />
          <div className="flex border rounded-lg w-[130px] justify-between px-[16px] py-[9px] sm:w-full">
            <Text>{t("posted.date")}</Text>
            <Img
              className="h-[18px] w-[18px] md:mr-0 cursor-pointer relative right-[0px]"
              src="images/Calendar.svg"
              alt="info_one"
              onClick={() => handleTransactionDateShow()}
            />
          </div>
          <SelectBox
            size="small"
            options={statusSelect}
            value="Option"
            className="!mb-[0px] w-full max-w-[130px] sm:max-w-none"
            onSelect={(type, name) => {
              console.log(type, name);
            }}
          />
        </div>

        <Button className="gap-2 font-semibold min-w-[90px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] px-[12px] text-sm border-black-900 border border-solid text-gray-900_02 !bg-white-A700">
          <img
            src="images/img_icon_gray_900_02_20x20.svg"
            alt="icon"
            loading="lazy"
          />
          {t("common.export")}
        </Button>
      </div>
      <TransactionDateModal
        open={transactionDateShow}
        onClose={handleTransactionDateClose}
      />
    </div>
  );
};

export default TransactionSearch;
