export const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Users Active",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y-axis-1",
    },
    {
      label: "# of Hours",
      data: [3, 4, 1, 2, 2, 1],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      yAxisID: "y-axis-2",
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export const dataPie = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "# of Users Active",
      data: [12, 19, 3, 5, 2, 3, 9],
      fill: false,
      backgroundColor: [
        "#83ce83",
        "#959595",
        "#f96a5d",
        "#00A6B4",
        "#6800B4",
        "#5000B4",
        "#f000f4",
      ],
      borderColor: "#fff",
    },
  ],
};

export const optionsPie = {
  responsive: true,
  maintainAspectRatio: false,
};
