// const chatButton = document.querySelector("#chat-button");
// const reviewsContainer = document.querySelector("#reviews-container");
// const reviewInput = document.querySelector("#review-input");
// const submitReviewButton = document.querySelector("#submit-review");

// let reviews = [];
// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
// chatButton.addEventListener("click", () => {
//   openForm();
// });

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

const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function () {
  sliderMainImage.src = sliderImageList[0].src;
  console.log(sliderMainImage.src);
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
