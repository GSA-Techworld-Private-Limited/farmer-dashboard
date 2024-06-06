// src/Chart.js
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        type: "bar",
        label: "Sales",
        data: [75, 70, 65, 90, 50, 100, 75, 70],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Trend",
        data: [60, 65, 70, 100, 50, 80, 60, 75],
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          color: "#6B7280",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Sales",
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="p-5">
      <div className="text-xl font-bold text-blue-600">Sales Overview</div>
      <div className="flex justify-center mt-4">
        <div className="text-gray-400 hover:text-green-500 cursor-pointer mx-2">
          Yearly
        </div>
        <div className="text-green-500 cursor-pointer mx-2">Monthly</div>
        <div className="text-gray-400 hover:text-green-500 cursor-pointer mx-2">
          Weekly
        </div>
      </div>
      <Bar data={data} options={options} className="mt-6" />
    </div>
  );
};

export default Chart;
