import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi";
import { CButton, CFormSwitch } from "@coreui/react";
import _ from "lodash";
import { useTranslation } from "react-i18next";

import { userServices } from "src/services";
import { countryArray } from "src/utils";

import { CustomModal } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormPhoneNumberInputGroup,
} from "src/components/common/CustomCInputGroup";

const AgentAccountPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userID = useLocation().state.userID;
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [initialAccount, setInitialAccount] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  // Modal related states
  const [modalVisibility, setModalVisibility] = useState(false);

  // Fetch agent data
  useEffect(() => {
    let isSubscribed = true;
    console.log(userID);
    const fetchAgent = async () => {
      try {
        setLoading(true);
        const agent = await userServices.getAgentByID(userID);
        if (agent && isSubscribed) {
          setFormData(agent);
          setInitialAccount(agent);
        } else {
          toast.error(t("common_error"));
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error(t("common_error"));
      }
    };
    fetchAgent();
    setLoading(false);

    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  // Joi schema
  const schema = Joi.object({
    fullName: Joi.string().optional().label("Full name"),
    country: Joi.string().optional().label("Country"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .optional()
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

  const handleSubmit = async (e) => {
    if (!updateMode) {
      return;
    }
    const updatedData = _.pick(formData, [
      "fullName",
      "email",
      "phoneNumber",
      "country",
    ]);
    const { error, value } = schema.validate(updatedData, {
      abortEarly: false,
    });
    if (!error) {
      e.preventDefault();

      return;
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors(errors);
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
        <div className="grid justify-end" hidden={!updateMode}>
          <CButton
            color="primary"
            variant="outline"
            className="mr-2"
            onClick={handleSubmit}
          >
            Update Account
          </CButton>
        </div>
      </div>
    </>
  );
};

export default AgentAccountPage;

const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  country: "",
};
