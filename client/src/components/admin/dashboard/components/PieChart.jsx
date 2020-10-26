import { Pie } from "react-chartjs-2";
import React from "react";

const PieChart = () => {
  const state = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#8133FF",
          "#6800B4",
          "#78FF33",
          "#FF3633",
        ],
        data: [65, 59, 80, 81, 56, 56, 20, 10],
      },
    ],
  };
  return (
    <div className="card card__shadow bg-gradient-success">
      <div className="card-header border-0">
        <h5 className="card-title mb-0">
          <i className="fa fa-pie-chart" aria-hidden="true"></i>
          &nbsp; Average Subscription Per month
        </h5>
      </div>
      <div className="card-body pt-0">
        <Pie
          className="pt-4"
          data={state}
          options={{
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
