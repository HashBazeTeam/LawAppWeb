import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi";
import { CButton, CFormSwitch } from "@coreui/react";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { messaging, onMessage, getToken } from "src/services/firebase";

import { configServices } from "src/services";

import { Modal } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormPhoneNumberInputGroup,
} from "src/components/common/CustomCInputGroup";

const BasicConfigPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [initialValues, setInitialValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Modal related states
  const [modalVisibility, setModalVisibility] = useState(false);

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
  };

  // Receive message from firebase; firebase error
  // const receiveMessage = (e) => {
  //   if (Notification.requestPermission == "granted") {
  //     onMessageListener();
  //   } else {
  //     Notification.requestPermission()
  //       .then(async () => {
  //         onMessageListener();
  //       })
  //       .catch((err) => console.log("Notification request error: ", err));
  //   }

  //   // Foreground message listener
  //   const onMessageListener = () => {
  //     // Message listener
  //     getToken(messaging, { vapidKey: process.env.REACT_APP_FCM_VAPID_KEY })
  //       .then((currentToken) => {
  //         if (currentToken) {
  //           // Send the token to your server and update the UI if necessary
  //           // ...
  //         } else {
  //           // Show permission request UI
  //           console.log(
  //             "No registration token available. Request permission to generate one."
  //           );
  //           // ...
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("An error occurred while retrieving token. ", err);
  //         // ...
  //       });
  //   };
  // };

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
            mdSize: 6,
            type: "number",
          })}
          {/* <CFormSwitch
            //   size="xl"
            label="Enable Notification"
            id="formSwitchCheckDefault"
            onChange={() => receiveMessage()}
          /> */}
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

export default BasicConfigPage;

const initialState = {
  reminderTime: "",
};
