const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list");

sliderImageList[0].onclick = function () {
  sliderMainImage.src = sliderImageList[0].src;
};

sliderImageList[1].onclick = function () {
  sliderMainImage.src = sliderImageList[1].src;
};
