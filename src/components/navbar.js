const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");
const mobileNavbar = document.querySelector(".navigation-bar > ul");

openNavbar.addEventListener("click", () => {
  mobileNavbar.classList.add("active");
});

closeNavbar.addEventListener("click", () => {
  mobileNavbar.classList.remove("active");
});

mobileNavbar.addEventListener("click", () => {
  mobileNavbar.classList.remove("active");
});
