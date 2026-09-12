import './styles.scss'

const body = document.body
const burgerBtn = document.querySelector('.js-burger')
const mobileMenu = document.querySelector('.js-header__list-mobile')
const linkBtn = document.querySelectorAll('.js-header__link-mobile')

burgerBtn.addEventListener('click', () => {
	const isOpen = burgerBtn.classList.toggle('active')

	mobileMenu.classList.toggle('is-open', isOpen)
	body.classList.toggle('no-scroll', isOpen)
})

function closeMenu() {
	burgerBtn.classList.remove('active')
	mobileMenu.classList.remove('is-open')
	body.classList.remove('no-scroll')
}

linkBtn.forEach(link => {
	link.addEventListener('click', () => {
		closeMenu()
	})
})
