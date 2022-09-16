import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { t } from "i18next";
import { CChart } from "@coreui/react-chartjs";
import randomColor from "randomcolor";
/**
 * Customer Insight Chart
 */
const CustomerInsight = (props) => {
  // Fetch data from firestore
  const [data, setData] = useState([]);
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

  return (
    <>
      <div className="w-1/2 object-contain">
        <CChart
          wrapper={true}
          height={200}
          className=""
          type="doughnut"
          data={data}
        />
      </div>
    </>
  );
};

export default CustomerInsight;
