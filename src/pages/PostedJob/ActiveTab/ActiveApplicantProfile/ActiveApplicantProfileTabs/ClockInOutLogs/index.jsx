import React from "react";
import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Img, SearchInputComponent, SelectBox, Text } from "components";
import MapView from "modals/MapView";
import RaiseDispute from "modals/RaiseDispute";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const LastWeekSelect = [
  {
    value: "Option",
    label: "Option",
  },
  {
    value: "Option",
    label: "Option",
  },
  { value: "Option", label: "Option" },
  { value: "Option", label: "Option" },
];
const ClockInOutLogs = () => {
  const { t } = useTranslation();
  const [mapView, setMapView] = useState(false);
  const [raiseDisputeShow, setRaiseDisputeShow] = useState(false);
  const handleMapView = () => {
    setMapView(true);
  };
  const handleMapViewClose = () => {
    setMapView(false);
  };
  const handleeRaiseDispute = () => {
    setRaiseDisputeShow(true);
  };
  const handleRaiseDisputeClose = () => {
    setRaiseDisputeShow(false);
  };
  return (
    <>
      <div className="w-full flex justify-between !my-[20px]">
        <SearchInputComponent
          placeholder={t("common.search")}
          startAdornment={
            <Img
              className="h-[24px] w-[24px] md:mr-0"
              src="images/img_search.svg"
              alt="img_search"
            />
          }
          className="!mb-[0px] max-w-[300px] w-full search-input"
        />
        <div className="w-full max-w-[180px]">
          <SelectBox
            className="!mb-[0px]"
            size="small"
            required
            options={LastWeekSelect}
            value=""
            onSelect={(type, name) => {
              console.log(type, name);
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <TableContainer component={Paper} className="table-content">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">{t("posted.date")}</span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.clockIn")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.clockOut")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]">
                  {" "}
                  {t("common.status")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  23/02/2024
                </TableCell>
                <TableCell>10:07 AM</TableCell>
                <TableCell>07:10 PM</TableCell>
                <TableCell>
                  <Img
                    className="h-[24px] w-[24px] my-[13px]"
                    src="images/img_error_gray_900_02.svg"
                    alt="error_one"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  <div className="flex items-start gap-1">
                    <Text className="text-gray-900_02 mt-[3px] text-sm font-normal">
                      19/02/2024
                    </Text>
                    <Img
                      className="h-[24px] w-[24px]"
                      src="images/img_location.svg"
                      alt="location_five"
                      onClick={() => handleMapView()}
                    />
                  </div>
                </TableCell>
                <TableCell>10:07 AM</TableCell>
                <TableCell>07:10 PM</TableCell>
                <TableCell>
                  <div className="parent-tooltip">
                    <Img
                      className="h-[24px] w-[24px] my-[13px] cursor-pointer"
                      src="images/img_check_circle.svg"
                      alt="error_one"
                    />
                    <div className="tooltip-box">
                      <Text className="text-[16px] font-semibold">
                        Clock In/Out
                      </Text>
                      <div className="flex gap-1 my-[12px]">
                        <Img
                          className="h-[24px] w-[24px]"
                          src="images/img_arrow.svg"
                          alt="arrow_one"
                        />
                        <Text className="text-gray-900_02 text-sm font-semibold">
                          10:07:53 AM
                        </Text>
                        <Img
                          className="h-[24px] w-[24px]"
                          src="images/img_arrow_gray_900_02.svg"
                          alt="arrow_three"
                        />
                        <Text className="text-gray-900_02 text-sm font-semibold">
                          07:14:47 PM
                        </Text>
                      </div>
                      <Divider variant="middle" className="!mx-[0]" />
                      <div className="flex items-center gap-2 mt-[12px]">
                        <Img
                          className="h-[20px] w-[20px]"
                          src="images/img_icon_light_blue_900_20x20.svg"
                          alt="icon_one"
                        />
                        <Text
                          onClick={() => handleeRaiseDispute()}
                          className="text-gray-900_02 self-end !text-light_blue-900 text-center text-sm font-semibold"
                        >
                          Raise Dispute
                        </Text>
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  <div className="flex items-start gap-1">
                    <Text className="text-gray-900_02 mt-[3px] text-sm font-normal">
                      19/02/2024
                    </Text>
                    <Img
                      className="h-[24px] w-[24px]"
                      src="images/img_location.svg"
                      alt="location_five"
                      onClick={() => handleMapView()}
                    />
                  </div>
                </TableCell>
                <TableCell>10:07 AM</TableCell>
                <TableCell>07:10 PM</TableCell>
                <TableCell>
                  <div className="parent-tooltip">
                    <Img
                      className="h-[24px] w-[24px] my-[13px] cursor-pointer"
                      src="images/img_check_circle.svg"
                      alt="error_one"
                    />
                    <div className="tooltip-box">
                      <Text className="text-[16px] font-semibold">
                        Clock In/Out
                      </Text>
                      <div className="flex gap-1 my-[12px]">
                        <Img
                          className="h-[24px] w-[24px]"
                          src="images/img_arrow.svg"
                          alt="arrow_one"
                        />
                        <Text className="text-gray-900_02 text-sm font-semibold">
                          10:07:53 AM
                        </Text>
                        <Img
                          className="h-[24px] w-[24px]"
                          src="images/img_arrow_gray_900_02.svg"
                          alt="arrow_three"
                        />
                        <Text className="text-gray-900_02 text-sm font-semibold">
                          07:14:47 PM
                        </Text>
                      </div>
                      <Divider variant="middle" className="!mx-[0]" />
                      <div className="flex items-center gap-2 mt-[12px]">
                        <Img
                          className="h-[20px] w-[20px]"
                          src="images/img_icon_light_blue_900_20x20.svg"
                          alt="icon_one"
                        />
                        <Text
                          onClick={() => handleeRaiseDispute()}
                          className="text-gray-900_02 self-end !text-light_blue-900 text-center text-sm font-semibold"
                        >
                          Raise Dispute
                        </Text>
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <MapView open={mapView} onClose={handleMapViewClose} />
      <RaiseDispute open={raiseDisputeShow} onClose={handleRaiseDisputeClose} />
    </>
  );
};

export default ClockInOutLogs;
