# Drag and Drop elements

Dragging and dropping items with JavaScript is pretty straight forward. First thing to do, set the item to be dragged to draggable e.g 
`<div draggable="true"></div>` 
Now we can add our event listeners.

There are three event listeners we are gonna be working with:

`ondragstart` as soon as the user drags an item. 

`ondragover` as soon as the user drags an item over a valid drop zone/target(where it's allowed to be dropped).

`ondrop` as soon as the user drops an item.

To transfer data from dragged element to drop target, we'll use `setData()` and `getData()` functions.

Let's assume the element being dragged is `<div class="to-be-dragged" draggable="true"></div>` and it is being dragged to `<div class="drop-target"></div>`

```
let toBeDragged = document.querySelector('.to-be-dragged');
toBeDragged.addEventListener('dragstart', (e) => {
	e.dataTransfer.setData('text', e.target.style.backgroundImage)
})
```
As you can see, `setData()` takes in two arguments i.e the type of item being transfered and the item being transfered. In our case, we want to transfer the linear-gradient color which is in `document.style.backgroundImage`

Next, we want to run `preventDefault()` in `ondragover` event or otherwise our no items will not be allowed to be dropped at the drop target. We'll add this event to our drop target
```
let dropTarget = document.querySelector('.drop-target');
dropTarget.addEventListener('dragover', (e) => {
	e.preventDefault()
})
```

Finally, now we can collect the data transfered from `ondragstart` event using `ondrop` event and `getData()`.

```
dropTarget.addEventListener('drop', (e) => {
	e.preventDefault()
})
```