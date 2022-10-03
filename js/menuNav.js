const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menu_mobile");
const exitBtn = document.getElementById("exitBtn");

hamburger.addEventListener("click", () => {
	menuMobile.classList.remove("w-0");
	menuMobile.classList.add("w-full");
});

exitBtn.addEventListener("click", () => {
	menuMobile.classList.remove("w-full");
	menuMobile.classList.add("w-0");
});