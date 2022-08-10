import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Joi from "joi";
import store, { thunks, selectors } from "../../../store";

import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

import { CButton } from "@coreui/react";

/**
 * Agent account add page
 * TODO: Change according to law app requirements
 */
const AgentAddPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);

  // Fetch countries
  useEffect(() => {
    const fetchData = async () => {
      // TODO: Fetch countries logic implement
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  // Joi schema
  const schema = Joi.object({
    fullName: Joi.string().required().label("Full name"),
    country: Joi.string().required().label("Country"),
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
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle add agent form submit
  const handleSubmit = async (e) => {
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
    //   e.preventDefault();
    //   if (res.status === 200) {
    //     toast.success("Successfully Added");
    //     setFormData(initialValue);
    //   } else {
    //     toast.error(res.message ? res.message : "Error occurred. Please try again later.");
    //   }
    //   return;
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
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <div className="row g-3">
          <CustomCFormInputGroup
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={formErrors.fullName}
            uppercase={true}
          />
          <CustomCFormInputGroup
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormSelectGroup
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={formErrors.country}
            uppercase={true}
            mdSize={6}
            options={countryOptions}
          />
          <CustomCFormInputGroup
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={formErrors.phoneNumber}
            uppercase={true}
            mdSize={6}
          />
        </div>
        <div className="grid justify-end">
          <CButton
            color="primary"
            variant="outline"
            className="mr-2"
            onClick={handleSubmit}
          >
            {" "}
            Submit{" "}
          </CButton>
        </div>
      </div>
    </>
  );
};

export default AgentAddPage;

const initialValue = {
  fullName: "",
  email: "",
  phoneNumber: "",
  country: "",
};
