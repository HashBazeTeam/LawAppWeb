import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import OtpInput from "react-otp-input-rc-17";
import PhoneInputWithCountry from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { CFormLabel } from "@coreui/react";

import { LoadingIndicator } from "src/components";
import { thunks } from "src/store";
import {
  auth,
  signInWithPhoneNumber,
  appVerifier,
} from "src/services/firebase";
import { colors } from "src/configs/theme";
import { userServices } from "src/services";

/**
 *
 * @returns Login Section for Login page
 */
export default function LoginSection(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const { control } = useForm();

  // States
  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [expandForm, setExpandForm] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState({});
  const [_appVerifier, setAppVerifier] = useState({});

  // Joi validation schema
  const otpSchema = Joi.object({
    otp: Joi.string()
      .length(6)
      .pattern(/^[0-9]+$/)
      .required(),
  });

  /**
   * Handlers
   */
  const handleChange = (value) => {
    delete formErrors["phoneNumber"];
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleOTPChange = (value) => {
    setFormData({ ...formData, otp: value });
  };

  // Send OTP to user phone number
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Validate phone number
    if (!isPossiblePhoneNumber(formData.phoneNumber)) {
      setLoading(false);
      setFormErrors({ ...formErrors, phoneNumber: "Invalid phone number" });
      return toast.error(t("login_invalid_phone_number"));
    } else {
      try {
        // Check user role from cloud functions
        const data = await userServices.onLoginFunction(formData.phoneNumber);
        if (!data) {
          setLoading(false);
          toast.error("User is not registered. Please contact administrator.");
          return;
        };
        const role = data.role;
        if (role == "Admin" || role == "Super Admin") {
          // Send OTP code
          const _appVerifier = appVerifier();
          setAppVerifier(_appVerifier);
          const confirmationResult = await signInWithPhoneNumber(
            auth,
            formData.phoneNumber,
            _appVerifier
          );
          setConfirmationResult(confirmationResult);
          setExpandForm(true);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  // Verify OTP code and authenticate the user
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error, value } = otpSchema.validate(
      { otp: formData.otp },
      { abortEarly: false }
    );
    if (!error) {
      try {
        const credential = await confirmationResult.confirm(formData.otp);
        dispatch(thunks.user.userLogin(credential.user));
        history.push("/law-admin");
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(t("login_invalid_otp"));
      }
    } else {
      setLoading(false);
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setLoading(false);
      setFormErrors(errors);
      toast.error(t("login_invalid_otp"));
    }
  };

  // Handle change phone number
  const handleChangePhoneNumberBtn = (e) => {
    e.preventDefault();
    setExpandForm(false);
    setFormData({ phoneNumber: "", otp: "" });
  };

  // Handle resend otp
  const handleResendOtp = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, otp: "" });
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formData.phoneNumber,
        _appVerifier
      );
      setConfirmationResult(confirmationResult);
      setExpandForm(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error while resending OTP: ", error);
    }
  };

  return (
    <>
      <div className="container h-500 mb-16 sm:mb-16 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 align-middle h-full w-full">
          <div className="hidden md:block align-middle m-10">
            <img
              src={process.env.PUBLIC_URL + "/images/login.svg"}
              className=" object-cover w-full h-full "
            />
          </div>
          <div className="flex items-center justify-center align-content-center px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md w-full space-y-8">
              <div>
                {/* <img
                  className="mx-auto h-12 w-auto"
                  src="images/logo.png"
                  alt="Workflow"
                /> */}
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  {t("sign_in_to_your_account")}
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleRequestOTP}
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md ">
                  <div className="py-2">
                    <CFormLabel htmlFor="phoneNumber" className="">
                      {t("phone_number")}
                    </CFormLabel>
                    <PhoneInputWithCountry
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      defaultCountry="LK"
                      style={{
                        width: "100%",
                        borderColor: "red",
                        padding: "15px",
                        marginBottom: "4px",
                        height: 40,
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: formErrors.phoneNumber ? "red" : "#ced4da",
                        backgroundColor: "#fff",
                      }}
                    />
                  </div>
                  <div id="recaptcha-container"></div>
                  {expandForm && (
                    <OtpInput
                      value={formData.otp}
                      onChange={handleOTPChange}
                      numInputs={6}
                      separator={<span>-</span>}
                      containerStyle="text-black flex-row justify-center items-center"
                      // placeholder="000000"
                      inputStyle="text-2xl mx-1 text-black border-2 border-gray-600 text-red"
                      focusStyle="border-2 border-blue-500"
                      hasErrored={true}
                      errorStyle="text-md text-red-200"
                    />
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <button
                      className={`font-medium text-primary_clr-600 hover:text-primary_clr-500`}
                      onClick={handleChangePhoneNumberBtn}
                    >
                      {t("change_phone_number")}
                    </button>
                  </div>
                  <div className="text-sm">
                    <button
                      className={`font-medium text-primary_clr-600 hover:text-primary_clr-500`}
                      onClick={handleResendOtp}
                    >
                      {t("resend_otp")}
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    id="recaptcha-container"
                    disabled={loading}
                    onClick={expandForm ? handleLogin : handleRequestOTP}
                    type="submit"
                    className={`group relative w-full flex justify-center py-2 px-4 border 
                    border-transparent text-sm font-medium rounded-md text-white 
                    bg-primary_clr-600 hover:bg-primary_clr-500 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-primary_clr-700`}
                  >
                    {loading ? LoadingIndicator("sm") : null}
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {expandForm ? t("sign_in") : t("request_otp")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
