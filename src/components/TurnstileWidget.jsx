import React from "react";
import Turnstile from "react-turnstile";

const TurnstileWidget = ({ setCaptchaToken }) => {
  return (
    <div className="flex flex-wrap max-w-sm justify-center mt-4">
      <Turnstile
        sitekey="0x4AAAAAAAfj2PR-4GafelYT"
        onVerify={(token) => setCaptchaToken(token)}
        theme="light"
      />
    </div>
  );
};

export default TurnstileWidget;
