// const chatButton = document.querySelector("#chat-button");
// const reviewsContainer = document.querySelector("#reviews-container");
// const reviewInput = document.querySelector("#review-input");
// const submitReviewButton = document.querySelector("#submit-review");

/* Importing the data from the data.json file. */
// import { data } from "../../data";

// let reviews = [];
// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }

// submitReviewButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const review = reviewInput.value;
//   reviews.push(review);
//   renderReviews();
// });

// const renderReviews = () => {
//   reviewsContainer.innerHTML = "";
//   reviews.forEach((review) => {
//     const reviewElement = document.createElement("p");
//     reviewElement.textContent = review;
//     reviewsContainer.appendChild(reviewElement);
//   });
// };

// function getData() {
// fetch("./products.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// }
// const getProductData = getData();

// let http = new XMLHttpRequest();
// http.open("get", "products.json", true);
// http.send();

// http.onload = function () {
//   if (http.readyState == 0 && http.status == 0) {
//     let products = JSON.parse(http.responseText);
//     console.log(products);
//   }
// };
// console.log(http);
// document.ready(function () {
//   // FETCHING DATA FROM JSON FILE
//   getJSON("products.json", function (data) {
//     console.log(data);
//   });
// });
//const getData = document.getElementById("get-data");
// function getData() {
//   console.log("sds");
// }
// const data = require("./data.json");
// import data from "../../data.json" assert { type: "JSON" };
// document.getElementById("get-data").addEventListener("click", () => {
//   console.log(data);
// });
// let xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let data = this.responseText;
//     jsonData(data);
//   }
// };
// xmlhttp.open("GET", "data.json", true);
// xmlhttp.send();
// function jsonData(data) {
//   let stringData = JSON.parse(data);
//   console.log(stringData);
//   for (x of stringData.persons) {
//     console.log(x);
//   }
// }

const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
// console.log("ok");

sliderImageList[0].onclick = function () {
  sliderMainImage.src = sliderImageList[0].src;
  console.log(sliderMainImage.src);
  // console.log(data);
};

sliderImageList[1].onclick = function () {
  sliderMainImage.src = sliderImageList[1].src;
  console.log(sliderMainImage.src);
};
// sliderImageList[2].onclick = function () {
//   sliderMainImage.src = sliderImageList[2].src;
//   console.log(sliderMainImage.src);
// };

// sliderImageList[3].onclick = function () {
//   sliderMainImage.src = sliderImageList[3].src;
//   console.log(sliderMainImage.src);
// };
