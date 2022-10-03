const swiper1 = new Swiper(".swiper1", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
});

const swiperNewst = new Swiper(".swiperNewst", {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10},
		1024: {slidesPerView: 3, spaceBetween: 10}
	}
});

const mantagheBtn = document.getElementById('mantaghe')
const melkBtn = document.getElementById('melk')
const priceBtn = document.getElementById('price')

mantagheBtn.addEventListener('click', (e) => {
	listOpen(mantagheBtn)
})
melkBtn.addEventListener('click', (e) => {
	listOpen(melkBtn)
})
priceBtn.addEventListener('click', (e) => {
	listOpen(priceBtn)
})

function listOpen (btn) {
	console.log(btn);
	let list = btn.querySelector('div')
	let svgElem = btn.querySelector('svg')

	if (!svgElem.classList.contains('-rotate-90')) {
		list.style.height = '0px'
		svgElem.classList.add('-rotate-90')
	} else {
		list.style.height = '165px'
		svgElem.classList.remove('-rotate-90')
	}
}

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
		768: {slidesPerView: 2, spaceBetween: 10},
		1394: {slidesPerView: 2, spaceBetween: 10},
	}
});

const swiperProposalImg1 = new Swiper(".swiperProposalImg1", {
	direction: "horizontal",
	loop: true,

	navigation: {
		nextEl: ".swiperProposalImg1-next",
		prevEl: ".swiperProposalImg1-prev",
	},

	breakpoints: {
		1024: {spaceBetween: 10},
	}
});

const swiperFavourite = new Swiper(".swiperFavourite", {
	direction: "horizontal",
	loop: true,
	spaceBetween: 20,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10},
		1024: {slidesPerView: 3, spaceBetween: 10}
	}
});

const swiperWeblog = new Swiper('.swiperWeblog', {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		768: {slidesPerView: 2, spaceBetween: 10},
		1024: {slidesPerView: 3, spaceBetween: 10}
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
		768: {slidesPerView: 4, spaceBetween: 10},
		1024: {slidesPerView: 5, spaceBetween: 20},
	},

	navigation: {
		nextEl: '.personsNext',
		prevEl: '.personsPrev',
	}
})

const navMenu = document.getElementById('navMenu')

document.addEventListener('scroll', function () {
	if(document.documentElement.scrollTop > 100) {
		if(navMenu.classList.contains('navMain')) {
			navMenu.classList.remove('navMain')
			console.log('navMenu Removed');
		}
	} else {
		if(!navMenu.classList.contains('navMain')) {
			navMenu.classList.add('navMain')
			console.log('hgvfhgfhgf Added');
		} 
	}
})