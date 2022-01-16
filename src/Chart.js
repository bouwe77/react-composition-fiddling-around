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
  //console.log(defaultData);
  const randomData = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 20)
  );

  const newData = { ...defaultData };
  newData.datasets[0] = { ...newData.datasets[0], data: randomData };

  console.log(newData.datasets[0].data);

  return newData;
}

export function Chart({ input }) {
  const [data, setData] = useState(() => getRandomData());

  useEffect(() => {
    setData(getRandomData());
  }, [input]);

  useEffect(() => {
    console.log("data has changed...");
  }, [data]);

  useEffect(() => {
    console.log("rerender...");
  });

  return (
    <>
      <PolarArea redraw={true} data={data} />
    </>
  );
}
