import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, BarElement } from "chart.js";
import { Panel } from "../Panel";

Chart.register(CategoryScale, LinearScale, BarElement);

interface BarChartProps {
  style: React.CSSProperties;
}

const BarChart: React.FC<BarChartProps> = ({ style }) => {
  return (
    <Panel style={style}>
      <Bar
        style={{ width: "100%", height: "100%" }}
        data={{
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
            },
          ],
        }}
        options={{
          indexAxis: "x",
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
    </Panel>
  );
};

export default BarChart;
