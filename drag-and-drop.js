// DOM Elements
const selectColors = document.querySelector('.select-colors');
const pickColor = document.querySelectorAll('.pick-color');
const selectedColors = document.querySelector('.selected-colors');
const mainGrid = document.querySelector('.grid');

pickColor.forEach(color => {
	color.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('text', e.target.style.backgroundImage)
	})
})


selectedColors.addEventListener('dragover', (e) => {
	e.preventDefault()
})
selectedColors.addEventListener('drop', (e) => {
	e.preventDefault()
	let newColor = document.createElement('div');
	newColor.setAttribute('class', 'picked-color');
	newColor.setAttribute('draggable', 'true');
	newColor.innerText = 'drag to remove';
	let selectedColor = e.dataTransfer.getData('text');
	newColor.style.backgroundImage = selectedColor;
	selectedColors.appendChild(newColor);
	let x = document.querySelectorAll('.picked-color');
	// To delete selected color
	for(let i = 0;i < x.length;i++){
		x[i].addEventListener('dragend', (e) => {
			e.preventDefault()
			x[i].remove()
		})
		x[i].addEventListener('dragover', (e) => {
			e.preventDefault()
			if(x[i].style.backgroundImage == ""){
				x[i].remove()
			}
		})
		// To get rid of blank divs
		x[i].addEventListener('drop', (e) => {
			e.preventDefault()
			if(e.target.style.backgroundImage == ""){
				x[i].remove()
			}
			e.target.remove()
		})
	}
	
	// Show used color
	pickColor.forEach(color => {
		let txt = document.createElement('div');
		txt.setAttribute('class', 'confirm');
		txt.innerText = 'used';
		const appendColor = () => {
			color.style.backgroundImage == selectedColor ? color.appendChild(txt): 0;
		}
		color.children.length == 0 ? appendColor(): 0;
	})
})