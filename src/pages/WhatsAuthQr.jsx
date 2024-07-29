import React, { useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import ThemeController from "../components/ThemeController";
import UserInfo from "../components/UserInfo";

const WhatsAuthQR = () => {
  const { user } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const loadScripts = async () => {
      try {
        const { qrController, deleteCookie } = await import(
          "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js"
        );
        const { wauthparam } = await import(
          "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js"
        );

        wauthparam.auth_ws =
          "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
        wauthparam.keyword =
          "aHR0cHM6Ly93YS5tZS82Mjg5NTYwMTA2MDAwMD90ZXh0PXdoNHQ1YXV0aDA=";
        wauthparam.tokencookiehourslifetime = 18;
        wauthparam.redirect = "/dashboard";
        deleteCookie(wauthparam.tokencookiename);

        // Pengecekan keberadaan elemen sebelum memanggil qrController
        if (
          isMounted &&
          document.getElementById("whatsauthqr") &&
          document.getElementById("whatsauthcounter")
        ) {
          qrController(wauthparam);
        } else {
          console.error("Required elements for WhatsAuth not found.");
        }
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();

    return () => {
      isMounted = false;
      document.body
        .querySelectorAll('script[src*="whatsauth"]')
        .forEach((script) => script.remove());
    };
  }, []);

  return (
    <div
      id="hasphonenumber"
      className="w-full min-h-screen bg-blue-50 flex items-center justify-center py-10"
    >
      <ThemeController />
      <div className="card w-96 bg-base-100 shadow-xl">
        {user ? (
          <div className="card-body max-w-md flex flex-col justify-center items-center text-center">
            <UserInfo data={user} />
            <p className="text-gray-700 mt-3">
              Please scan the QR code with your WhatsApp camera to provide your
              phone number.
            </p>
          </div>
        ) : (
          <div className="text-center p-3">
            <p className="text-gray-700 mt-3">
              Please scan the QR code with your WhatsApp camera to provide your
              phone number.
            </p>
          </div>
        )}

        <div className="flex justify-center mb-4" id="whatsauthqr">
          <span className="loading loading-dots loading-lg"></span>
        </div>
        <p
          className="font-bold text-center text-gray-700 mb-4"
          id="whatsauthcounter"
        >
          Counter
        </p>
      </div>
    </div>
  );
};

export default WhatsAuthQR;
