function getMouse (element) {
const mouse = {
    x: 0,
    y: 0
}

element.addEventListener('mousemove', function (event) {
	const rect = element.getBoundingClientRect() // абсолютное положение элемента, относительно крайнего верхнего угла страницы
mouse.x = event.clientX - rect.left
mouse.y = event.clientY - rect.top
})

return mouse
}