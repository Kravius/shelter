const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu_icon');

const body = document.querySelector('body');

//hаботаю надо бургером

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('activee');
		menuBtn.classList.toggle('activee');
		body.classList.toggle('lock')
	})
}

// menu.querySelectorAll('.header__link').forEach(el => {
// 	el.addEventListener('click', ()=> {
// 		menu.classList.remove('activee');
// 		menuBtn.classList.remove('activee');
// 		body.classList.remove('lock')
// 	})
// })
menu.addEventListener('click', ()=> {
		menu.classList.remove('activee');
		menuBtn.classList.remove('activee');
		body.classList.remove('lock')
	})
// конец бургера

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchors => {
	anchors.addEventListener('click', event => {
		event.preventDefault();

		const blockId = anchors.getAttribute('href').substring(1)
		document.getElementById(blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

console.log(111)