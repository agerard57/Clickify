import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Panel } from "../Panel";

Chart.register(ArcElement);

interface PieChartProps {
  holeSize: number;
  style: React.CSSProperties;
}

const PieChart: React.FC<PieChartProps> = ({ holeSize, style }) => {
  return (
    <Panel style={style}>
      {" "}
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "Oui oui non",
              data: [300, 50, 100],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          cutout: holeSize,
          responsive: true,
        }}
      />
    </Panel>
  );
};

export default PieChart;
