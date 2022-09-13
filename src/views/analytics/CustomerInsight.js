import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { t } from "i18next";
import { CChart } from "@coreui/react-chartjs";

/**
 * Customer Insight Chart
 */
const CustomerInsight = (props) => {
  // Fetch data from firestore
  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full max-h-72">
      <CChart
        type="doughnut"
        data={{
          labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
          datasets: [
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: [40, 20, 80, 10],
            },
          ],
        }}
        />
        </div>
    </>
  );
};

export default CustomerInsight;

