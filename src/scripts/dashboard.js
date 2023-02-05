var ctx = document.getElementById("doughnutChart").getContext("2d");

var data = {
  labels: ["Books", "Watches", "Laptops"],
  datasets: [
    {
      data: [38, 98, 69],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

var options = {
  cutoutPercentage: 50,
  responsive: true,
  maintainAspectRatio: false,
};

var doughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: options,
});

var ctx2 = document.getElementById("doughnutChart").getContext("2d");

var data = {
  labels: ["Books", "Watches", "Laptops"],
  datasets: [
    {
      data: [38, 98, 69],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

var options = {
  cutoutPercentage: 50,
  responsive: true,
  maintainAspectRatio: false,
};

var lineChart = new Chart(ctx2, {
  type: "lineChart",
  data: data,
  options: options,
});
