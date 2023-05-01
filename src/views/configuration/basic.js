import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi";
import { CButton, CFormSwitch } from "@coreui/react";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

import { configServices } from "src/services";

import { LoadingIndicator, Modal } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormPhoneNumberInputGroup,
} from "src/components/common/CustomCInputGroup";

const BasicConfigPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  console.log("currentLanguage", currentLanguage);
  const [language, setLanguage] = useState(currentLanguage || "en");
  const [newLanguage, setNewLanguage] = useState(currentLanguage || "en");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [initialValues, setInitialValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  // Fetch admin data
  useEffect(() => {
    let isSubscribed = true;
    const fetchAgent = async () => {
      try {
        setLoading(true);
        const configs = await configServices.getAllConfigs();
        if (configs && isSubscribed && Object.keys(configs).length > 0) {
          setFormData(configs);
          setInitialValues(configs);
        } else {
          toast.error(t("common_error"));
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error(t("common_error"));
      }
    };
    fetchAgent();
    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  // Joi schema
  const schema = Joi.object({
    reminderTime: Joi.number().optional().label("Reminder Time"),
  });

  /*
   * Handlers
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    delete formErrors[name];
    setFormData({ ...formData, [name]: value });
  };

  // Handle update account button click
  const handleSubmit = async (e) => {
    if (!updateMode) {
      return;
    }
    // Check if reminder time is equal in initial value and form data
    if (formData.reminderTime != initialValues.reminderTime) {
      const updatedData = _.pick(formData, ["reminderTime"]);
      setLoading(true);
      const { error, value } = schema.validate(updatedData, {
        abortEarly: false,
      });
      if (!error) {
        try {
          await configServices.updateConfig(updatedData);
          setInitialValues(updatedData);
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
    }

    // Check if language is equal in initial value and form data
    if (language != newLanguage) {
      setLoading(true);
      try {
        setLanguage(newLanguage);
        // Save current locale to cookie
        Cookies.set("LawWebcurrentLocale", newLanguage);
        setLoading(false);
        toast.success(t("common_success"));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Language options
  const languageOptions = [
    { value: "si", label: "Sinhala" },
    { value: "en", label: "English" },
  ];

  // Handle language change
  const handleLanguageChange = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    console.log("Changed language to: ", value);
    setNewLanguage(value);
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
              setFormData(initialValues);
            }}
          />
        </div>
        {loading ? (
          LoadingIndicator("xl")
        ) : (
          <div>
            <div className="row g-3">
              {CustomCFormInputGroup({
                label: t("Reminder Time"),
                name: "reminderTime",
                value: formData.reminderTime,
                onChange: handleChange,
                error: formErrors.reminderTime,
                uppercase: true,
                required: false,
                readOnly: !updateMode,
                mdSize: 4,
                type: "number",
              })}
            </div>
            <div className="row g-3">
              <CustomCFormSelectGroup
                label={t("language")}
                name="language"
                value={newLanguage}
                onChange={handleLanguageChange}
                uppercase={true}
                mdSize={4}
                options={languageOptions}
                readOnly={!updateMode}
                required={false}
              />
            </div>
          </div>
        )}

        <div className="flex justify-end" hidden={!updateMode}>
          <div className="justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
              disabled={loading}
            >
              {t("update")}
            </CButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicConfigPage;

const initialState = {
  reminderTime: "",
};
