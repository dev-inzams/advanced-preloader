function showLoader() {
  document.getElementById("preloader-container").style.display = "flex";
  document.getElementById("content").style.display = "none";
}

function hideLoader() {
  document.getElementById("preloader-container").style.display = "none";
  document.getElementById("content").style.display = "block";
}


showLoader();

