# Drag and Drop elements

Dragging and dropping items with JavaScript is pretty easy. First thing to do, set the item to be dragged to draggable e.g `<div draggable='true'></div>` and then now we can add our event listeners.
There are three event listeners we are gonna be working with:
`ondragstart` as soon as the user drags an item.
`ondragover` as soon as the user drags an item over a valid drop zone/target(where it's allowed to be dropped).
`ondrop` as the user drops an item.
