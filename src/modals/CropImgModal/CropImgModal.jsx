/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Text } from "components";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useDispatch } from "react-redux";
import { handleUploadImage } from "common/HelperFunctions";
import { setSnackbar } from "../../redux/reducers/snackbar";
const CropImgModal = ({ open, onClose, select_img, setCropImg }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose(false);
  };

  ///states for image cropper
  const cropperRef = useRef(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState("");
  //handle crop images
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImageUrl(cropper.getCroppedCanvas().toDataURL());
    // setCroppedImageUrl(
    //   cropper.getCroppedCanvas({ width: 500, height: 500 }).toDataURL()
    // );
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="!rounded-xl"
      >
        <div className="w-full min-w-[380px] sm:min-w-fit">
          <div className="p-[24px]">
            <Text className="text-[18px] font-bold mb-[12px]">
              {"Crop Image"}
            </Text>
          </div>
          <div className="md:min-w-fit min-w-[380px] p-[24px]">
            {select_img && (
              <Cropper
                src={select_img}
                aspectRatio={1}
                // guides={false}
                crop={onCrop}
                ref={cropperRef}
                zoomable={false}
              />
            )}
          </div>
          <div className="flex justify-end align-end px-[24px] pb-[24px] md:px-[10px] gap-3 ">
            <Button
              className="cursor-pointer font-semibold text-center text-sm md:px-[20px]"
              shape="round"
              color="gray_400"
              variant="outline"
              onClick={handleClose}
            >
              {t("common.cancel")}
            </Button>
            <Button
              className="cursor-pointer font-semibold text-center text-sm md:px-[20px]"
              shape="round"
              color="black_900"
              variant="fill"
              onClick={async () => {
                // console.log("croppedImageUrl", croppedImageUrl);
                let res = await handleUploadImage(croppedImageUrl);
                if (res?.res === "success") {
                  setCropImg(res?.data);
                } else if (res?.res === "error") {
                  dispatch(
                    setSnackbar({
                      isOpen: true,
                      message: res?.data,
                      state: "error",
                    })
                  );
                }
              }}
            >
              {t("common.crop")}
            </Button>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default CropImgModal;
