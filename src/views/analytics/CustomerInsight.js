import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { t } from "i18next";
import { CChart } from "@coreui/react-chartjs";
import randomColor from "randomcolor";

import {
  CustomCFormInputGroup,
} from "src/components/common/CustomCInputGroup";
import { convertTZ } from "src/utils";

/**
 * Customer Insight Chart
 */
const CustomerInsight = (props) => {
  // Set initial from and to date values
  const date = new Date();
  const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
  const initialState = {
    from: lastMonth,
    to: new Date()
  }
  
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  
  // Fetch data from firestore
  useEffect(() => {
    const labels = ["Sri Lanka", "India", "Sweden", "Ukraine"];
    const backgroundColor = randomColor({
      count: labels.length,
      alpha: 0.5,
    });
    const datasets = [
      {
        backgroundColor: backgroundColor,
        data: [40, 20, 80, 10],
      },
    ];

    setData({
      labels,
      datasets,
    });
  }, []);

   // Handle input change
   const handleChange = (e) => {
    const { name, value, files } = e.target;
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="container bg-white p-6">
      <div className="row g-3 text-sm mb-4">
      <CustomCFormInputGroup
            label={t("from")}
            name="from"
            value={convertTZ(formData.from)}
            onChange={handleChange}
            error={formErrors.from}
            uppercase={true}
            mdSize={6}
            type="date"
          />
          <CustomCFormInputGroup
            label={t("to")}
            name="to"
            value={convertTZ(formData.to)}
            onChange={handleChange}
            error={formErrors.to}
            uppercase={true}
            mdSize={6}
            type="date"
          />

        </div>
      <div className="w-1/2 object-contain">
        <CChart
          wrapper={true}
          height={200}
          className=""
          type="doughnut"
          data={data}
        />
        </div>
        </div>
    </>
  );
};

export default CustomerInsight;
