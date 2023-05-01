import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { t } from "i18next";
import { CChart } from "@coreui/react-chartjs";
import { CButton, CCol, CAlert } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilFindInPage } from "@coreui/icons";
import randomColor from "randomcolor";
import _ from "lodash";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";
import { convertTZ } from "src/utils";
import { questionServices } from "src/services";

/**
 * Customer Insight Chart
 */
const CustomerInsight = (props) => {
  const { t } = useTranslation();
  // Set initial from and to date values
  const date = new Date();
  const lastMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  const initialState = {
    from: lastMonth,
    to: new Date(),
  };

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    delete formErrors[name];
    setFormData({ ...formData, [name]: value });
  };

  // Fetch data on page change
  const fetchData = async () => {
    setLoading(true);
    try {
      const fromDate = new Date(formData.from);
      fromDate.setHours(0, 0, 0, 0);
      const toDate = new Date(formData.to);
      toDate.setHours(24, 0, 0, 0);
      const { countryQuestions } = await questionServices.getQuestionInsight(
        formData.status,
        fromDate,
        toDate
      );
      const labels = _.keys(countryQuestions);
      const values = _.values(countryQuestions);
      const backgroundColor = randomColor({
        count: labels.length,
        alpha: 0.5,
      });

      const datasets = [
        {
          backgroundColor: backgroundColor,
          data: values,
        },
      ];

      setData({
        labels,
        datasets,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(t("common_error"));
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container bg-white p-6">
        <div className="w-1/2 object-contain">
          <CAlert color="primary">
            {t("select_date_range_and_press_generate")}
          </CAlert>
        </div>
        <div className="row g-4 text-sm mb-4">
          <CustomCFormInputGroup
            label={t("from")}
            name="from"
            value={convertTZ(formData.from)}
            onChange={handleChange}
            error={formErrors.from}
            uppercase={true}
            mdSize={4}
            type="date"
          />
          <CustomCFormInputGroup
            label={t("to")}
            name="to"
            value={convertTZ(formData.to)}
            onChange={handleChange}
            error={formErrors.to}
            uppercase={true}
            mdSize={4}
            type="date"
          />
          <CCol className="justify-end mb-3 pt-4" xs={12} md={4}>
            <CButton color="primary" variant="outline" onClick={fetchData}>
              <CIcon icon={cilFindInPage} />{" "}
              <span className="text-sm">{t("generate")}</span>
            </CButton>
          </CCol>
        </div>

        <div className="w-1/2 object-contain">
          {data?.labels ? (
            data.labels.length >= 1 ? (
              <CChart
                wrapper={true}
                height={200}
                className=""
                type="doughnut"
                data={data}
              />
            ) : (
              <CAlert color="primary">
                {t("No questions found in given date range!")}
              </CAlert>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerInsight;
