import React from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import LoginForm from "./LoginForm";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const LoginBox = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const handleQRAuth = () => {
    navigate("/qrauth");
  };

  return (
    <div className="card flex justify-center flex-col p-8 w-full max-w-sm shadow-lg bg-base-100">
      <div className="md:px-2 py-3 md:py-0">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="doMyId Logo"
            className="mb-4 rounded mix-blend-multiply"
          />
        </div>
        {/* Logo */}

        <div className="flex flex-wrap w-full justify-center py-3">
          <GoogleSignInButton onSuccess={logIn} />
        </div>

        <div className="flex flex-wrap w-full justify-center py-3">
          <button
            onClick={handleQRAuth}
            className="btn btn-outline btn-primary w-full"
          >
            Scan QR
          </button>
        </div>

        <div className="divider">Or using your number phone</div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginBox;
