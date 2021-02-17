// slickslider setings
$(document).ready(function () {
	$('.footer__slider').slick({
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 5,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,

		centerMode: true,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
})

// random bid&ask
const randomNumberInRange = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min

const bid = randomNumberInRange(1200, 4599)
const ask = randomNumberInRange(bid, 4599)

const placeForBid = document.getElementById('bid')
placeForBid.innerHTML = ` &#8364; ${bid}`
const placeForAsk = document.getElementById('ask')
placeForAsk.innerHTML = ` &#8364; ${ask}`

// modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach((modal) => {
		closeModal(modal)
	})
})

function openModal(modal) {
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}

//mopdal result
function results() {
	const firstName = document.getElementById('firstName')
	const lastName = document.getElementById('lastName')
	const email = document.getElementById('email')
	const html = `
  First name: ${firstName.value}<br>
  Last name: ${lastName.value}<br>
  Email: ${email.value}`

	const modalText = document.getElementById('modal__text')
	modalText.innerHTML = html
}

function clear() {
	firstName.value = ''
	lastName.value = ''
	email.value = ''
}

const form = document.getElementById('section-intro__form')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log('firstName', firstName.value)
	results()
	clear()
})
