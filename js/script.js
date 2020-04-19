const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d') //запрашивает контекст отрисовки

canvas.width = 500
canvas.height = 500


drawRect({
    x: 10,
    y: 10,
    widht: 150,
    hegiht: 300,

    strokeStyle: "red",
    stroke: true,

    fillStyle: "green",
    fill: true,

    lineWidth: 2
})

function drawRect(param) {
    if (!param.fill && !param.stroke) {
        return
    }


    context.beginPath() //новая фигура
    context.rect(param.x, param.y, param.widht, param.hegiht) //прямоугольник


    if (param.fill) { //нужно ли закрасить
        context.fillStyle = param.fillStyle
        context.fill()
    }


    if (param.stroke) { // нужно ли обвести
        context.strokeStyle = param.strokeStyle
        context.lineWidth = param.lineWidth
        context.stroke()
    }
}