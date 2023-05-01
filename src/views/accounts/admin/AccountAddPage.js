import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Joi from "joi";
import { useTranslation } from "react-i18next";
import { isPossiblePhoneNumber } from "react-phone-number-input";

import { countryArray } from "src/utils";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormPhoneNumberInputGroup,
} from "src/components/common/CustomCInputGroup";
import { userServices } from "src/services";

import { CButton } from "@coreui/react";

/**
 * Admin account add page
 * TODO: Change according to law app requirements
 */
const AdminAddPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCountryOptions(countryArray);
  }, []);

  // Joi schema
  const schema = Joi.object({
    fullName: Joi.string().required().label("Full name"),
    country: Joi.string().required().label("Country"),
    dob: Joi.date().required().label("Date of birth").max("now"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    phoneNumber: Joi.string().required().label("Phone Number"),
  });

  /*
   * Form related functions
   */

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    delete formErrors["phoneNumber"];
    setFormData({ ...formData, phoneNumber: value });
  };

  // Handle add agent form submit
  const handleSubmit = async (e) => {
    setLoading(true);
    const { error, value } = schema.validate(formData, { abortEarly: false });
    let phoneError = false;
    if (!isPossiblePhoneNumber(formData.phoneNumber)) {
      setLoading(false);
      setFormErrors({ ...formErrors, phoneNumber: "Invalid phone number" });
      phoneError = true;
    }
    if (!error && !phoneError) {
      try {
        const user = await userServices.getAdminByPhoneNumber(formData.phoneNumber);
        if (user) {
          setLoading(false);
          setFormErrors({ ...formErrors, phoneNumber: "Phone number already exists" });
          return;
        }
        await userServices.addAdmin(value);
        toast.success(t("common_success"));
        setFormData(initialValue);
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");
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
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3 mt-8">
        <div className="row g-3">
          <CustomCFormInputGroup
            label={t("full_name")}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={formErrors.fullName}
            uppercase={true}
          />
          <CustomCFormInputGroup
            label={t("email_address")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormSelectGroup
            label={t("country")}
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={formErrors.country}
            uppercase={true}
            mdSize={6}
            options={countryOptions}
          />
          <CustomCFormPhoneNumberInputGroup
            label={t("phone_number")}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            error={formErrors.phoneNumber}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label={t("date_of_birth")}
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            error={formErrors.dob}
            uppercase={true}
            mdSize={6}
            type="date"
          />
        </div>
        <div className="grid justify-end">
          <CButton
            color="primary"
            variant="outline"
            className="mr-2"
            onClick={handleSubmit}
            disabled={loading}
          >
            {" "}
            Submit{" "}
          </CButton>
        </div>
      </div>
    </>
  );
};

export default AdminAddPage;

const initialValue = {
  fullName: "",
  email: "",
  phoneNumber: "",
  country: "",
  dob: "",
};
