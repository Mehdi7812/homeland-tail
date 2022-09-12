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

const swiper1 = new Swiper(".swiper1", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
});

const swiperNewst = new Swiper(".swiperNewst", {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10}
	}
});

const swiperNewsImg1 = new Swiper(".swiperNewsImg1", {
	direction: "horizontal",
	loop: true,
	navigation: {
		nextEl: ".swiperNewsImg1-next",
		prevEl: ".swiperNewsImg1-prev",
	},
});

const swiperProposal = new Swiper(".swiperProposal", {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10}
	}
});

const swiperProposalImg1 = new Swiper(".swiperProposalImg1", {
	direction: "horizontal",
	loop: true,

	navigation: {
		nextEl: ".swiperProposalImg1-next",
		prevEl: ".swiperProposalImg1-prev",
	},
});

const swiperFavourite = new Swiper(".swiperFavourite", {
	direction: "horizontal",
	loop: true,
	spaceBetween: 20,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10}
	}
});

const swiperWeblog = new Swiper('.swiperWeblog', {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10}
	}
})

const swiperWeblogImg1 = new Swiper(".swiperWeblogImg1", {
	direction: "horizontal",
	loop: true,
	
	navigation: {
		nextEl: ".swiperWeblogImg1-next",
		prevEl: ".swiperWeblogImg1-prev",
	},
});

const swiperPersons = new Swiper('.swiperPersons', {
	direction: "horizontal",
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,
	pagination: {
        el: '.swiper-paginationPersons',
        clickable: true,
      },

	  breakpoints: {
		768: {slidesPerView: 4, spaceBetween: 10}
	}
})