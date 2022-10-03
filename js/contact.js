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

const nosazInput = document.getElementById('nosaz')
const nosazList = document.getElementById('nosazList')

nosazInput.addEventListener('click', () => {
	if (nosazInput.checked) {
	console.log('true');
	nosazList.style.height= '28px'
	} else {
		console.log('false');
		nosazList.style.height= '0px'
	}
})
