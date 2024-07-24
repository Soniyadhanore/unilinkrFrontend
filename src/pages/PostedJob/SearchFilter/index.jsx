import React from "react";
import { Button, Img, SearchInputComponent } from "components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import OpenApplicationFilter from "../OpenApplicationFilter";
const SearchFilter = () => {
  const { t } = useTranslation();
  const [applicationFilterOpen, setApplicationFilterOpen] = useState(false);
  const toggleOpenApplicationDrawer = (newOpen) => () => {
    setApplicationFilterOpen(newOpen);
  };
  return (
    <>
      <div className="w-full flex justify-between !my-[20px]">
        <SearchInputComponent
          placeholder={t("posted.searchByStudentNameOrEmailId")}
          startAdornment={
            <Img
              className="h-[24px] w-[24px] md:mr-0"
              src="images/img_search.svg"
              alt="img_search"
            />
          }
          className="!mb-[0px] max-w-[300px] w-full search-input"
        />
        <Button
          onClick={toggleOpenApplicationDrawer(true)}
          className="min-w-[82px] md:ml-[8px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] !p-[12px] text-sm bg-gray-100 text-gray-900_02"
        >
          {t("common.filter")}
          <Img
            src="images/img_iconly_lightoutline_filter.svg"
            alt="Iconly/Light-Outline/Filter"
            className="ml-[8px]"
          />
        </Button>
      </div>
      <OpenApplicationFilter
        open={applicationFilterOpen}
        onClose={toggleOpenApplicationDrawer(false)}
      />
    </>
  );
};

export default SearchFilter;
