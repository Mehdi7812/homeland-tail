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

const mantagheBtn = document.getElementById('mantaghe')
const melkBtn = document.getElementById('melk')
const priceBtn = document.getElementById('price')

mantagheBtn.addEventListener('click', (e) => {
	listOpen(e)
})
melkBtn.addEventListener('click', (e) => {
	listOpen(e)
})
priceBtn.addEventListener('click', (e) => {
	listOpen(e)
})

function listOpen (e) {
	let mantagheList = e.target.querySelector('div')
	let svgElem = e.target.querySelector('svg')

	if (!svgElem.classList.contains('-rotate-90')) {
		mantagheList.style.height = '0px'
		svgElem.classList.add('-rotate-90')
	} else {
		mantagheList.style.height = '165px'
		svgElem.classList.remove('-rotate-90')
	}
}