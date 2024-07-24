import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Img, SearchInputComponent, SelectBox } from "components";
import { InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import HelpDescription from "../HelpDescription";
import { useHelps } from "hooks/useHelps";
import { debounceFunction } from "common/HelperFunctions";
const statusSelect = [
  { value: "", label: "Select status" },
  {
    value: "open",
    label: "Open",
  },
  {
    value: "resolve",
    label: "Resolved",
  },
  { value: "pending", label: "Pending" },
];

const JobApprovalHelp = ({ getHelpsList, helpsList }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    search: "",
    type_id: "",
    status: "",
  });

  // get custom hooks
  const { getCategoryTypeList, categoryList } = useHelps();

  useEffect(() => {
    getCategoryTypeList();
  }, []);

  useEffect(() => {
    getHelpsList(filters);
  }, [filters]);

  //debounce search
  const delayedSearch = debounceFunction((searchValue) => {
    setFilters({
      ...filters,
      search: searchValue,
    });
  }, 500); // Adjust the delay time as per your requirement

  const handleSearchChange = (search) => {
    delayedSearch(search);
  };

  return (
    <>
      <div className="w-full flex flex-row sm:flex-col justify-between items-start !mt-[16px]">
        <SearchInputComponent
          placeholder={t("common.search")}
          startAdornment={
            <InputAdornment position="start">
              <Img
                className="h-[24px] w-[24px] md:mr-0"
                src="images/img_search.svg"
                alt="img_search"
              />
            </InputAdornment>
          }
          className="mb-[0px] sm:mb-4 max-w-[350px] sm:max-w-[100%] md:max-w-[200px] w-full search-input"
          // value={filters?.search}
          onChange={(search) => {
            handleSearchChange(search);
          }}
        />
        <div className="flex items-center gap-4 sm:w-[100%]">
          <div className="w-[110px] sm:w-[100%]">
            <SelectBox
              size="small"
              options={categoryList || []}
              value={filters?.type_id}
              onSelect={(type_id, name) => {
                console.log(name);
                setFilters({
                  ...filters,
                  type_id,
                });
              }}
            />
          </div>
          <div className="w-[110px] sm:w-[100%]">
            <SelectBox
              size="small"
              options={statusSelect || []}
              value={filters?.status}
              onSelect={(status, name) => {
                console.log(name);
                setFilters({
                  ...filters,
                  status,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 mt-1">
        {helpsList?.map((item, index) => {
          return (
            <HelpDescription
              key={index + item?.name}
              detailHeading={item?.title}
              detailType1={item?.help_n_support_type?.type_en}
              detailType2="01/02/2024"
              description={item?.description}
              statusText={item?.status}
              className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
            />
          );
        })}
        {/* <HelpDescription
          detailHeading="My Job is yet not approved"
          detailType1="Job related query"
          detailType2="01/02/2024"
          description="I have posted a job in December 2023 but due to some reason it got reject. I tried to make updates & resubmit. But there is no information or update on new job."
          statusText="Open"
          className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
        />
        <HelpDescription
          detailHeading="My Job is yet not approved"
          detailType1="General"
          detailType2="25/01/2024"
          description="I have posted a job in December 2023 but due to some reason it got reject. I tried to make updates & resubmit. But there is no information or update on new job."
          statusText="Resolved"
          className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
        /> */}
      </div>
    </>
  );
};
export default JobApprovalHelp;

JobApprovalHelp.propTypes = {
  getHelpsList: PropTypes?.func,
  helpsList: PropTypes?.any,
};
