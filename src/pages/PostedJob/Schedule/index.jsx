import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { Text } from "components";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Schedule = () => {
  return (
    <>
      <Accordion className="schedule-acc">
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex flex-col">
            <Text className="text-[16px] font-semibold mb-[4px]">
              Morning Shift
            </Text>
            <div className="flex sm:flex-col items-center gap-3 md:block">
              <Text className="text-gray-900_02 font-qanelas  text-sm font-semibold">
                Vacancies: 5
              </Text>
              <div className="h-[4px] w-[4px] bg-gray-900_02 rounded-[50%] md:hidden" />
              <Text className="text-gray-900_02 font-qanelas  text-sm font-semibold">
                01/03/2024 to 31/03/2024
              </Text>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex justify-between">
            <Text className="">Monday</Text>
            <Text>-</Text>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Tuesday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Wednesday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Thursday</Text>
            <div>
              <Text>-</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Friday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Saturday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Sunday</Text>
            <div>
              <Text>-</Text>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="schedule-acc">
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex flex-col">
            <Text className="text-[16px] font-semibold mb-[4px]">
              Night Shift
            </Text>
            <div className="flex sm:flex-col items-center gap-3 md:block">
              <Text className="text-gray-900_02 font-qanelas  text-sm font-semibold">
                Vacancies: 5
              </Text>
              <div className="h-[4px] w-[4px] bg-gray-900_02 rounded-[50%] md:hidden" />
              <Text className="text-gray-900_02 font-qanelas  text-sm font-semibold">
                01/03/2024 to 31/03/2024
              </Text>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex justify-between">
            <Text className="">Monday</Text>
            <Text>-</Text>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Tuesday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Wednesday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Thursday</Text>
            <div>
              <Text>-</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Friday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Saturday</Text>
            <div>
              <Text>10:00 AM - 02:00 PM</Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <div className="flex justify-between">
            <Text className="">Sunday</Text>
            <div>
              <Text>-</Text>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Schedule;
