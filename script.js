const images = document.querySelectorAll("#slider img");
let firstImage = 0;
function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
}
function nextImage() {
  firstImage++;
  if (firstImage >= images.length) {
    currentImage = 0;
  }
  showImage(firstImage);
}
function prevImage() {
  firstImage--;
  if (firstImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(firstImage);
}
document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);
showImage(firstImage);