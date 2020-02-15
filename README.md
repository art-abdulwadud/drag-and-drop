# Creating an Image Slider for Begginers

Only a few things to be done for you to create a simple image slider:

## Add images
In the HTML section, we'll create `div` container with the classname `slider`. Within our container, we'll add a couple of images, each in it's own `div` and  Within this `div`, we can also add some text and overlay. We'll then add buttons for selecting previous and next image within the container.
```
        <div class="slider m-1 text-center">
            <div class="slide">
                <div class="overlay animate"></div>
                <img class="slide-img" src="img/keri-b1.jpg" alt="">
                <div class="description">Exquisite Taste</div>
            </div>
            
            <div class="slide"
                <div class="overlay animate"></div>
                <img class="slide-img" src="img/keri-b2.jpg" alt="">
                <div class="description">Pure Fruits</div>
            </div>

            <div class="slide">
                <div class="overlay animate"></div>
                <img class="slide-img" src="img/keri-b3.jpg" alt="">
                <div class="description">Nutritionally Beneficial</div>
            </div>

            <div class="slide">
                <div class="overlay animate"></div>
                <img class="slide-img" src="img/keri-b4.jpg" alt="">
                <div class="description">Affordable Prices</div>
            </div>
            
            <button class="previous" data-aos="fade-left" onclick="slideMove(-1)"
            ><i class="material-icons">arrow_back</i></button>
            <button class="next" data-aos="fade-right" onclick="slideMove(1)"
            ><i class="material-icons">arrow_forward</i></button>
        </div>
```
You can create a link for each slider(optional)
```
<div class="links-wrapper text-center">
    <button class="slide-links" onclick="selectSlide(1)"><i class="material-icons">face</i></button>
    <button class="slide-links" onclick="selectSlide(2)"><i class="material-icons">face</i></button>
    <button class="slide-links" onclick="selectSlide(3)"><i class="material-icons">face</i></button>
    <button class="slide-links" onclick="selectSlide(4)"><i class="material-icons">face</i></button>
</div>
```
Then we'll set the display of the slide `div` to none to hide all the images because we only want one to be viewed.
```
.slide{
	display: none;
}
```
We'll create a function for activating the slides, one at a time. This will change the slide selected from 
`display: none` to `display:grid`
```
let allSlides = document.querySelectorAll('.slide');
let slideLinks = document.querySelectorAll('.slide-links');
// This function activates the selected slide
const activateSlide = slide => {
	// Making sure that slideIndex is never less than 0 or more than number of existing slides
	slide < 1 ? slideIndex = allSlides.length: 0;
	slide > allSlides.length ? slideIndex = 1: 0;
	// Hidding the slides
	for (let i = 0; i < allSlides.length; i++) {
		allSlides[i].style.display = "none";
	}
	// Selecting a slide manually on click
	for (let i = 0; i < slideLinks.length; i++) {
		slideLinks[i].classList.remove('active')
	}
	// Showing only one slide
	allSlides[slideIndex - 1].style.display = "grid";
	slideLinks[slideIndex - 1].classList.add('active');
}
```
After this, we now need to activate the slider, allowing one slide to be viewed when page loads.
```
// Activating the first slide on load
activateSlide(slideIndex)
```
Finally, the previous and next button functions need to be created
```
let prev = document.querySelector('.previous');
let next = document.querySelector('.next');
// Function for moving either to next or previous image
const slideMove = slide => {
	activateSlide(slideIndex += slide)
};
// Function for manually selecting a slide on click
const selectSlide = slide => {
	activateSlide(slideIndex = slide)
}
```
View slider => https://art-abdulwadud.github.io/keri-b-slider/



