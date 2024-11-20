"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"], // Fix missing hash for one color
      },
    ],
    labels: ["Bank of America", "Chase"],
  };

  return <Doughnut data={data} 
  options={{ cutout: "60%" ,
    plugins: {
      legend: {
        display: false,
      },
    }

  }} />; // Properly wrap the return value in parentheses
};

export default DoughnutChart;
