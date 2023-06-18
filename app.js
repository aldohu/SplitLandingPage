const xbox = document.querySelector('.xbox');
const playstation = document.querySelector('.playstation');

xbox.addEventListener('mouseover', function () {
	console.log('hovering xbox');
	xbox.classList.add('hover');
	xbox.classList.remove('cut');
	playstation.classList.remove('hover');
	playstation.classList.add('cut');
});

playstation.addEventListener('mouseover', function () {
	console.log('hovering playstation');
	playstation.classList.add('hover');
	playstation.classList.remove('cut');
	xbox.classList.remove('hover');
	xbox.classList.add('cut');
});
