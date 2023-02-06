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
// All Charts

/* A comment. */
// --------------Chart one---------------------//

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
  data.map((data2) => Object.values(data2).filter((key) => key))
);

const bb = filterDoughnut4.map((data1) =>
  data1.map((data2) => data2.map((data3) => data3.Sold))
);
const doughnutDataNum = bb.map((d) =>
  d.map((x) =>
    x.reduce(function (total, num) {
      return total + num;
    }, 0)
  )
);

// const doughnutDataNum = filterDoughnut
//   .map((data) => data.Sold)
//   .sort(function (a, b) {
//     return b - a;
//   })
//   .reduce(function (total, num) {
//     return total + num;
//   }, 0);
let labels1 = Object.keys(chartData.Categories).filter((key, i) => key);
let data1 = doughnutDataNum;
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
      text: "doughnut chart",
      display: true,
    },
  },
});

// --------------Chart Two---------------------//
const barChart = filterDoughnut4.map((data1) =>
  data1.map((data2) => data2.map((data3) => data3.Price))
);
const barChartData = barChart.map((d) =>
  d.map((x) =>
    x.reduce(function (total, num) {
      return total + num;
    }, 0)
  )
);
console.log(barChartData);
let labels2 = labels1;
let data2 = barChartData;
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
      text: "Products",
      display: true,
    },
    legend: {
      display: false,
    },
  },
});

// --------------Chart Three---------------------//
function getBestSellingProducts(data) {
  let products = [];
  let views = [];

  for (let category of Object.values(data)) {
    for (let subCategory of Object.values(category)) {
      for (let product of Object.values(subCategory)) {
        for (let bestProduct of Object.values(product)) {
          for (let topProduct of Object.entries(bestProduct)) {
            console.log(topProduct[1].Sold);
            if (topProduct[1].Sold > 16 && topProduct[1].Number_of_views > 20) {
              console.log(topProduct[1].Number_of_views);
              products.push(topProduct[0]);
              views.push(topProduct[1].Number_of_views);
            }
          }
        }
      }
    }
  }

  // products.sort((a, b) => b.Sold - a.Sold);
  return { products, views };
}
let data = { chartData }; // your JSON data
let bestSellingProducts = getBestSellingProducts(data);
// const bestProduct = bestSellingProducts.map(({ Sold }) => Sold);
console.log(bestSellingProducts);

let labels3 = bestSellingProducts.products.slice(0, 5);
let myChart3 = document.getElementById("myChart3").getContext("2d");

let chart3 = new Chart(myChart3, {
  type: "radar",
  data: {
    labels: labels3,
    datasets: [
      {
        label: "Product",
        fill: true,
        backgroundColor: "rgba(179, 181, 198, 0.2)",
        borderColor: "rgba(179, 181, 198, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179, 181, 198, 1)",
        data: bestSellingProducts.views,
      },
      {
        label: "Review",
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        data: [51, 10, 32, 20, 44],
      },
    ],
  },
  options: {
    title: {
      text: "best Product",
      display: true,
    },
  },
});
