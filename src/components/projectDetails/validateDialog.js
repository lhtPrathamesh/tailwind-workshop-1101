import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 46,
  },
});

function ValidateDialog({ handleClose, open, handleTask }) {
  const classes = useStyles();
  const [address, setAddress] = useState(
    "0xafd4f2a6291402355f1f4821f7383f471a8daeebfa9622d03e3fc8c63a1afc53"
  );

  const handleNextTask = () => {
    handleTask();
    handleClose();
  };

  return (
    <Dialog
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{
        style: { borderRadius: 12 },
      }}
      classes={{
        paper: classes.dialog,
      }}
      maxWidth="md"
      className="rounded-lg"
    >
      <div className="w-[640px] h-[379px] bg-white-100 px-[27px] py-[23px]">
        <div className="flex justify-between items-center mb-[18px]">
          <span className="font-PoppinsSemiBold text-ft16 text-black-100">
            Validate Task
          </span>
          <img
            src="/images/close.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => handleClose()}
          />
        </div>
        <div className="mb-[31px]">
          <div>
            <span className="font-PoppinsRegular text-ft17 text-black-50">
              1. Open{" "}
              <span className="text-blue-250">www.pancakeswap.finance</span> and
              click on Trade.
            </span>
          </div>
          <div>
            <span className="font-PoppinsRegular text-ft17 text-black-50">
              2. Connect your wallet.
            </span>
          </div>
          <div>
            <span className="font-PoppinsRegular text-ft17 text-black-50">
              3. Make a Swap as explained in the video.
            </span>
          </div>
        </div>
        <div className="font-PoppinsRegular text-ft2 text-black-50 mb-3">
          Copy paste swap transaction address from{" "}
          <span className="text-blue-250">Etherscan</span> and click Verify
        </div>
        <div className="w-full h-[47px] border border-darkGrey-100 rounded-lg mb-[21px]">
          <input
            type="text"
            className="w-full h-full border-none outline-none p-[10px] font-PoppinsRegular text-ft4 text-black-50 rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <div
            className="w-[213px] h-[42px] rounded-lg bg-blue-250 flex items-center justify-center cursor-pointer"
            onClick={() => handleNextTask()}
          >
            <span className="font-PoppinsSemiBold text-ft6 text-white-100">
              Validate Task
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ValidateDialog;
