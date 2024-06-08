import React, { useRef, useEffect, useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { fetchSales } from "./api/auth";
import MyContext from "./context/ContextStore";

const Chart = () => {
  const chartRef = useRef(null);
  const { setSales, sales } = useContext(MyContext);
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
  const fetchTime = () => {
    if (sales) {
      if (sales.period === "Yearly") {
        return [
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
        ];
      } else if (sales.period === "Monthly") {
        return ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
      } else if (sales.period === "Weekly") {
        return sales.data.map((val) => val.date);
      }
    }
  };
  const data = {
    labels: fetchTime(),
    datasets: [
      {
        type: "bar",
        label: "Sales",
        data: sales && sales.data.map((val) => val.delivered_orders_count),
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
  const [loading, setLoading] = useState(false);
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {loading && (
          <div className="absolute text-[#5DB505] font-semibold font-poppins inset-0 flex items-center justify-center">
            Loading...
          </div>
        )}
        <div className="text-lg font-poppins font-semibold text-[#303972]">
          Sales Overview
        </div>
        <div className="flex items-center gap-5">
          <div
            onClick={() => fetchSales(setSales, "yearly", setLoading)}
            className="text-[#6C757D] text-sm font-poppins font-medium leading-5 hover:text-[#5DB505] duration-300 cursor-pointer"
          >
            Yearly
          </div>
          <div
            onClick={() => fetchSales(setSales, "monthly", setLoading)}
            className="text-[#6C757D] text-sm font-poppins hover:text-[#5DB505] duration-300 font-medium leading-5 cursor-pointer"
          >
            Monthly
          </div>
          <div
            onClick={() => fetchSales(setSales, "weekly", setLoading)}
            className="text-[#6C757D] text-sm font-poppins font-medium leading-5 hover:text-[#5DB505] duration-300 cursor-pointer"
          >
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
