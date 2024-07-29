import React from "react";

const GoogleSignInButton = ({ onSuccess }) => {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="239713755402-4hr2cva377m43rsqs2dk0c7f7cktfeph.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
        data-auto_select="true"
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
};

export default GoogleSignInButton;
