import dogsList from "./pets.json" assert { type: "json" };

const popupWrapper = document.querySelector(".popup_wrapper");
const petPicture = document.querySelector(".popup_picture");
const petName = document.querySelector(".petName");
const petType = document.querySelector(".petType");
const petBreed = document.querySelector(".petBreed");
const petDescription = document.querySelector(".petDescription");
const petAge = document.querySelector(".popup_age");
const petInoculations = document.querySelector(".popup_inoculations");
const petDiseases = document.querySelector(".popup_diseases");
const petParasites = document.querySelector(".popup_parasites");
const popUpCloseButton = document.querySelector('.popup_close-button');

// const sectionFriends = document.querySelector('.slider-conteiner');

document.addEventListener('click', function (event) {
	if (
		event.target.classList.contains('slider-card')
	) {
		newPopup(event.target.firstElementChild.nextElementSibling.innerText);
	}
	if (
		event.target.classList.contains('slider-img-img')
	) {
		newPopup(event.target.parentNode.nextElementSibling.innerText)
	}
	if (
		event.target.classList.contains('slider-text')
	) {
		newPopup(event.target.firstChild.innerText);
	}
	if (
		event.target.classList.contains('slider-text-p')
	) { newPopup(event.target.innerText) }

	if (
		event.target.classList.contains('slider-button')
	) {
		newPopup(event.target.previousElementSibling.innerText)
	}

	if (event.target.classList.contains('popup_shadow')) {
		closeContentPop();
	}
})

function newPopup(PetName) {
	for (let i = 0; i <= dogsList.length - 1; i++) {
		if (PetName === dogsList[i].name) {
			popupWrapper.style.display = "flex";
			popupWrapper.style.top = `${window.scrollY}px`;
			document.body.style.overflow = "hidden";
			//почему так не работает что б в стилях задать ширину 100% картинка маленькая
			// petPicture.style.background = `url(${dogsList[i].img}) no-repeat center`
			petPicture.style.backgroundImage = `url(${dogsList[i].img})`
			petName.innerText = dogsList[i].name;
			petType.innerText = dogsList[i].type;
			petBreed.innerText = dogsList[i].breed;
			petDescription.innerText = dogsList[i].description;
			petAge.innerText = dogsList[i].age;
			petInoculations.innerText = dogsList[i].inoculations.join(', ');
			petDiseases.innerText = dogsList[i].diseases.join(', ');
			petParasites.innerText = dogsList[i].parasites.join(', ');
		}
	}
}

popUpCloseButton.addEventListener('click', function (even) {
	popupWrapper.style.display = 'none';
	document.body.style.overflow = 'auto';
})

function closeContentPop() {
	popupWrapper.style.display = "none";
	document.body.style.overflow = "auto";
}

// console.log(dogsList)