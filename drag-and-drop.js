// DOM Elements
const pickColor = document.querySelectorAll('.pick-color');
const selectedColors = document.querySelector('.selected-colors');

pickColor.forEach(color => {
	color.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('text', e.target.style.backgroundImage)
		console.log(e.target.className);
	})
})


selectedColors.addEventListener('dragover', (e) => {
	e.preventDefault()
})
selectedColors.addEventListener('drop', (e) => {
	e.preventDefault()
	let newColor = document.createElement('div');
	newColor.setAttribute('class', 'pick-color');
	let selectedColor = e.dataTransfer.getData('text');
	console.log(selectedColor)
	newColor.style.backgroundImage = selectedColor
	selectedColors.appendChild(newColor)
})