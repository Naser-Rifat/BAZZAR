// data json

const chartData = {
  Categories: {
    Books: {
      Author: {
        Kafka: {
          Sold: 10,
          Price: 110,
          Real_price: 110,
          Discount: "0%",
          Bought_Price: 90,
          Currency: "US Dollar",
          Number_of_views: 173,
        },
        Tolstoy: {
          Sold: 7,
          Price: 80,
          real_price: 100,
          Discount: "20%",
          Bought_Price: 70,
          Currency: "US Dollar",
          Number_of_views: 143,
        },
        Shakespeare: {
          Sold: 13,
          Price: 100,
          real_price: 100,
          Discount: "0%",
          Bought_Price: 60,
          Currency: "US Dollar",
          Number_of_views: 92,
        },
        "Charles-Dickens": {
          Sold: 4,
          Price: 40,
          Real_price: 50,
          Discount: "20%",
          Bought_Price: 20,
          Currency: "US Dollar",
          Number_of_views: 201,
        },
        "James-Joyce": {
          Sold: 4,
          Price: 40,
          Real_price: 40,
          Discount: "0%",
          Bought_Price: 20,
          Currency: "US Dollar",
          Number_of_views: "17",
        },
      },
    },
    Watches: {
      Brand: {
        Rolex: {
          Sold: 19,
          Price: 4000,
          Real_price: 8000,
          Discount: "50%",
          Bought_Price: 2375,
          Currency: "US Dollar",
          Number_of_views: 73,
        },
        Piaget: {
          Sold: 3,
          Price: 3335,
          Real_price: 3335,
          Discount: "0%",
          Bought_Price: 1950,
          Currency: "US Dollar",
          Number_of_views: 17,
        },
        Cartier: {
          Sold: 36,
          Price: 1200,
          Real_price: 2000,
          Discount: "20%",
          Bought_Price: 1100,
          Currency: "US Dollar",
          Number_of_views: 93,
        },
        Blancpain: {
          Sold: 23,
          Price: 3000,
          Real_price: 4000,
          Discount: "25%",
          Bought_Price: 2500,
          Currency: "US Dollar",
          Number_of_views: 107,
        },
        Longines: {
          Sold: 17,
          Price: 500,
          Real_price: 1000,
          Discount: "50%",
          Bought_Price: 400,
          Currency: "US Dollar",
          Number_of_views: 30,
        },
      },
    },
    Laptops: {
      Brand: {
        Apple: {
          Sold: 17,
          Price: 1000,
          Real_price: 2000,
          Discount: "50%",
          Bought_Price: 700,
          Currency: "US Dollar",
          Number_of_views: 30,
        },
        Asus: {
          Sold: 31,
          Price: 500,
          Real_price: 1000,
          Discount: "50%",
          Bought_Price: 400,
          Currency: "US Dollar",
          Number_of_views: 63,
        },
        Dell: {
          Sold: 10,
          Price: 900,
          Real_price: 900,
          Discount: "0%",
          Bought_Price: 800,
          Currency: "US Dollar",
          Number_of_views: 13,
        },
        Alienware: {
          Sold: 2,
          Price: 1900,
          Real_price: 2000,
          Discount: "5%",
          Bought_Price: 1700,
          Currency: "US Dollar",
          Number_of_views: 37,
        },
        Razor: {
          Sold: 9,
          Price: 1600,
          Real_price: 2000,
          Discount: "20%",
          Bought_Price: 1500,
          Currency: "US Dollar",
          Number_of_views: 44,
        },
      },
    },
  },
};
// Chart
const filterDoughnut = Object.values(chartData.Categories.Books.Author).filter(
  (key, i) => key
);

const filterDoughnut2 = Object.values(chartData.Categories).filter(
  (key, i) => key
);
const filterDoughnut3 = filterDoughnut2.map((key1, i) =>
  Object.values(key1).filter((key2, i) => key2)
);
const filterDoughnut4 = filterDoughnut3.map((data, i) =>
  data.map((data2) =>
    Object.values(data2).filter((key) =>
      Object.values(key).filter(({ Sold }) => console.log(Sold))
    )
  )
);

const bb = filterDoughnut4.map((data1) =>
  data1.map((data2) => data2.map((data3) => data3.Sold))
);
const aa = bb.map((d) =>
  d.map((x) =>
    x.reduce(function (total, num) {
      return total + num;
    }, 0)
  )
);

const doughnutDataNum = filterDoughnut
  .map((data) => data.Sold)
  .sort(function (a, b) {
    return b - a;
  })
  .reduce(function (total, num) {
    return total + num;
  }, 0);

let labels1 = Object.keys(chartData.Categories).filter((key, i) => key);
let data1 = aa;
let colors1 = ["#49A9EA", "#36CAAB"];

let myDoughnutChart = document.getElementById("myChart").getContext("2d");
let chart1 = new Chart(myDoughnutChart, {
  type: "doughnut",
  data: {
    labels: labels1,
    datasets: [
      {
        data: data1,
        backgroundColor: colors1,
      },
    ],
  },
  options: {
    title: {
      text: "Do you like doughnuts?",
      display: true,
    },
  },
});

let labels2 = [
  "American Airlines Group",
  "Ryanair",
  "China Southern Airlines",
  "Lufthansa Group",
];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ["#49A9EA", "#36CAAB", "#34495E", "#B370CF"];

let myChart2 = document.getElementById("myChart2").getContext("2d");

let chart2 = new Chart(myChart2, {
  type: "bar",
  data: {
    labels: labels1,
    datasets: [
      {
        data: data2,
        backgroundColor: colors2,
      },
    ],
  },
  options: {
    title: {
      text: "Number of passengers carried in 2017 (in mio.)",
      display: true,
    },
    legend: {
      display: false,
    },
  },
});

let labels4 = ["Germany", "France", "UK", "Italy", "Spain", "Others(23)"];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = [
  "#49A9EA",
  "#36CAAB",
  "#34495E",
  "#B370CF",
  "#AC5353",
  "#CFD4D8",
];

let myChart4 = document.getElementById("myChart4").getContext("2d");

let chart4 = new Chart(myChart4, {
  type: "pie",
  data: {
    labels: labels4,
    datasets: [
      {
        data: data4,
        backgroundColor: colors4,
      },
    ],
  },
  options: {
    title: {
      text: "Population of the European Union (in mio)",
      display: true,
    },
  },
});
