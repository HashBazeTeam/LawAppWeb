import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi";
import { CButton, CFormSwitch } from "@coreui/react";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { isPossiblePhoneNumber } from "react-phone-number-input";

import { convertFirestoreDateToDate } from "src/services/firebase";
import { userServices } from "src/services";
import { countryArray } from "src/utils";
import { convertTZ } from "src/utils";
import { selectors } from "src/store";

import { Modal } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormPhoneNumberInputGroup,
} from "src/components/common/CustomCInputGroup";

/**
 * Profile page
 */
const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const userData = useSelector(selectors.user.selectUserData);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [initialAccount, setInitialAccount] = useState(userData);
  const [formErrors, setFormErrors] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Modal related states
  const [modalVisibility, setModalVisibility] = useState(false);
  console.log(userData);

  useEffect(() => {
    setFormData(userData);
    setInitialAccount(userData);
  }, [userData]);

  // Joi schema
  const schema = Joi.object({
    fullName: Joi.string().optional().label("Full name"),
    country: Joi.string().optional().label("Country"),
    dob: Joi.date().optional().allow("").label("Date of birth").max("now"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .optional()
      .allow("")
      .label("Email"),
    phoneNumber: Joi.string().optional().label("Phone number"),
  });

  /*
   * Handlers
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    delete formErrors[name];
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    delete formErrors["phoneNumber"];
    setFormData({ ...formData, phoneNumber: value });
  };

  // Handle update account button click
  const handleSubmit = async (e) => {
    if (!updateMode) {
      return;
    }
    const updatedData = _.pick(formData, [
      "fullName",
      "country",
      "email",
      "phoneNumber",
      "dob",
    ]);
    setLoading(true);
    const { error, value } = schema.validate(updatedData, {
      abortEarly: false,
    });
    let phoneError = false;
    console.log(formData.phoneNumber != "");
    if (
      formData.phoneNumber != "" &&
      !isPossiblePhoneNumber(formData.phoneNumber)
    ) {
      setLoading(false);
      setFormErrors({ ...formErrors, phoneNumber: "Invalid phone number" });
      phoneError = true;
    }
    if (!error && !phoneError) {
      try {
        await userServices.updateAdmin(userData.userID, updatedData);
        setInitialAccount(updatedData);
        setFormData(updatedData);
        toast.success(t("common_success"));
      } catch (error) {
        console.log(error);
        toast.error(`${t("common_error")}`);
      } finally {
        setLoading(false);
      }
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors({ ...formErrors, ...errors });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="shadow sm:rounded-lg bg-white p-4 mt-2 mb-5 row g-3">
        <div className="grid justify-end">
          <CFormSwitch
            //   size="xl"
            label="Enable Update Mode"
            id="formSwitchCheckDefault"
            onChange={() => {
              setUpdateMode(!updateMode);
              setFormData(initialAccount);
            }}
          />
        </div>
        <div className="row g-3">
          {CustomCFormInputGroup({
            label: t("full_name"),
            name: "fullName",
            value: formData.fullName,
            onChange: handleChange,
            error: formErrors.fullName,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
          })}

          {CustomCFormInputGroup({
            label: t("email_address"),
            name: "email",
            value: formData.email,
            onChange: handleChange,
            error: formErrors.email,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
          })}
          {CustomCFormInputGroup({
            label: t("date_of_birth"),
            name: "dob",
            value: convertTZ(formData.dob),
            onChange: handleChange,
            error: formErrors.dob,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
            mdSize: 6,
            type: "date",
          })}
          {updateMode ? (
            <CustomCFormPhoneNumberInputGroup
              label={t("phone_number")}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              error={formErrors.phoneNumber}
              uppercase={true}
              mdSize={6}
            />
          ) : (
            <CustomCFormInputGroup
              label={t("phone_number")}
              name="phoneNumber"
              value={formData.phoneNumber}
              uppercase={true}
              required={false}
              readOnly={!updateMode}
              mdSize={6}
            />
          )}

          {updateMode
            ? CustomCFormSelectGroup({
                label: t("country"),
                name: "country",
                value: formData.country,
                onChange: handleChange,
                error: formErrors.country,
                uppercase: true,
                required: false,
                readOnly: !updateMode,
                options: countryArray,
                mdSize: 6,
              })
            : CustomCFormInputGroup({
                label: t("country"),
                name: "country",
                value: formData.country,
                onChange: handleChange,
                error: formErrors.country,
                uppercase: true,
                required: false,
                readOnly: !updateMode,
                mdSize: 6,
              })}
        </div>
        <div className="flex justify-end" hidden={!updateMode}>
          <div className="justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
            >
              {t("update")}
            </CButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  country: "",
};
