import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 150);
      gradient.addColorStop(0, "#FF7D24");
      gradient.addColorStop(1, "#B13A1A");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "bar",
        label: "Sales",
        data: [73, 80, 70, 100, 50, 100, 80, 70],
        backgroundColor: "#B13A1A", // temporary, will be overwritten by useEffect
        borderWidth: 0,
        barPercentage: 0.22,
      },
      {
        type: "line",
        label: "Trend",
        data: [50, 60, 55, 97, 45, 70, 55, 60],
        borderColor: "#3AC977",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important for custom dimensions
    plugins: {
      legend: {
        display: false,
      },
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const dataset = chart.config.data.datasets[0];
        const gradient = ctx.createLinearGradient(
          0,
          0,
          0,
          chart.chartArea.bottom
        );
        gradient.addColorStop(0, "#FF7D24");
        gradient.addColorStop(1, "#B13A1A");
        dataset.backgroundColor = gradient;
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          // text: "Month",
          color: "#A098AE",
        },
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          // text: "Sales",
          color: "#A098AE",
        },
        ticks: {
          stepSize: 25, // Display 0, 25, 50, 75, 100
        },
      },
    },
    elements: {
      bar: {
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
      },
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-lg font-poppins font-semibold text-[#303972]">
          Sales Overview
        </div>
        <div className="flex items-center gap-5">
          <div className="text-[#6C757D] text-sm font-medium leading-5 hover:text-[#5DB505] cursor-pointer">
            Yearly
          </div>
          <div className="text-[#5DB505] text-sm font-medium leading-5 cursor-pointer">
            Monthly
          </div>
          <div className="text-[#6C757D] text-sm font-medium leading-5 hover:text-[#5DB505] cursor-pointer">
            Weekly
          </div>
        </div>
      </div>
      <div
        className="mt-6 font-poppins"
        style={{ width: "600px", height: "180px" }}
      >
        <Bar data={data} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default Chart;
