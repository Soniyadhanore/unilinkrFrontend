import React from "react";
import { Paper, TableContainer } from "@mui/material";
import { CheckBox, Input, InputLabels, Text } from "components";
import { useTranslation } from "react-i18next";
import RolesHeader from "../RolesHeader";
const EditAndViewRole = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-full pb-[24px] bg-white-A700">
      <RolesHeader />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">
          {t("rolesAndPermission.editViewRole")}
        </Text>
      </div>
      <div className="w-full max-w-[860px] flex flex-col self-center justify-center p-[24px] sm:p-5 border-gray-200 border bg-white-A700 rounded">
        <div className="w-full max-w-[320px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("rolesAndPermission.roleName")}
          />
          <Input
            className="fill"
            size="small"
            placeholder={t("rolesAndPermission.egAdminEmployee")}
          />
        </div>
        <TableContainer component={Paper} className="table-content">
          <Text className="text-[16px] font-semibold mb-[20px]">
            {t("rolesAndPermission.permission")}
          </Text>
          <div className="overflow-hidden md:overflow-auto w-full">
            <table
              aria-label="simple table"
              className="border-gray-200 border bg-white-A700 rounded min-w-full"
            >
              <thead>
                <tr className="bg-gray-100">
                  <th className="!font-semibold border-l px-[16px] py-[11px] w-[262px] text-[14px]">
                    <div className="text-left">
                      {t("rolesAndPermission.module")}
                    </div>
                  </th>
                  <th className="!font-semibold border-l !text-center p-[11px] text-[14px]">
                    {t("common.view")}
                  </th>
                  <th className="!font-semibold border-l !text-center p-[11px] text-[14px]">
                    {t("common.add")}
                  </th>
                  <th className="!font-semibold border-l !text-center p-[11px] text-[14px]">
                    {t("common.edit")}
                  </th>
                  <th className="!font-semibold border-l !text-center p-[11px] text-[14px]">
                    {t("common.delete")}
                  </th>
                  <th className="!font-semibold border-l !text-center p-[11px] text-[14px]">
                    {t("common.updateStatus")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="px-[16px] py-[9px] border">
                    <Text className="text-[14px] font-normal block min-w-[262px]">
                      {t("rolesAndPermission.job")}
                    </Text>
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="px-[16px] py-[9px] border">
                    <Text className="text-[14px] font-normal block min-w-[262px]">
                      {t("rolesAndPermission.paymentMethod")}
                    </Text>
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="px-[16px] py-[9px] border">
                    <Text className="text-[14px] font-normal block min-w-[262px]">
                      {t("rolesAndPermission.chat")}
                    </Text>
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="px-[16px] py-[9px] border">
                    <Text className="text-[14px] font-normal block min-w-[262px]">
                      {t("sidebar.studentDatabase")}
                    </Text>
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="px-[16px] py-[9px] border">
                    <Text className="text-[14px] font-normal block min-w-[262px]">
                      {t("rolesAndPermission.affiliates")}
                    </Text>
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="px-[16px] py-[9px] border">
                    <Text className="text-[14px] font-normal block min-w-[262px]">
                      {t("rolesAndPermission.roles")}
                    </Text>
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox className="text-center justify-center" />
                  </td>
                  <td className="px-[16px] py-[9px] text-center border">
                    <CheckBox checked className="text-center justify-center" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TableContainer>
      </div>
    </div>
  );
};
export default EditAndViewRole;