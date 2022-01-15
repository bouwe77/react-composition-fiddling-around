import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const defaultData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)"
      ],
      borderWidth: 1
    }
  ]
};

function getRandomData() {
  const randomData = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 20)
  );

  const newData = { ...defaultData };
  newData.datasets[0].data = randomData;

  return newData;
}

export function Chart({ number }) {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    setData(getRandomData());
  }, [number]);

  return <PolarArea data={data} />;
}
