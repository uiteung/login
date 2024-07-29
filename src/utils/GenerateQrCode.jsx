import React from "react";
import useQrCode from "../hooks/useQrCode";

const GenerateQrCode = ({ text, size }) => {
  const qrCodeContainerRef = useQrCode(text, size);

  return <div ref={qrCodeContainerRef} id="qrCodeContainer"></div>;
};

export default GenerateQrCode;
