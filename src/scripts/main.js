const chatButton = document.querySelector("#chat-button");
const reviewsContainer = document.querySelector("#reviews-container");
const reviewInput = document.querySelector("#review-input");
const submitReviewButton = document.querySelector("#submit-review");

let reviews = [];
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
chatButton.addEventListener("click", () => {
  openForm();
});

submitReviewButton.addEventListener("click", (event) => {
  event.preventDefault();
  const review = reviewInput.value;
  reviews.push(review);
  renderReviews();
});

const renderReviews = () => {
  reviewsContainer.innerHTML = "";
  reviews.forEach((review) => {
    const reviewElement = document.createElement("p");
    reviewElement.textContent = review;
    reviewsContainer.appendChild(reviewElement);
  });
};
