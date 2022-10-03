const swiper = new Swiper('.swiper', {
	direction: "horizontal",
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,
	pagination: {
        el: '.swiper-paginationPersons',
        clickable: true,
      },

	  breakpoints: {
		768: {slidesPerView: 4, spaceBetween: 10},
		1024: {slidesPerView: 5, spaceBetween: 20},
	},

	navigation: {
		nextEl: '.personsNext',
		prevEl: '.personsPrev',
	}
})