const CELL_SIZE = 23


const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d') //запрашивает контекст отрисовки

canvas.width = 500
canvas.height = 500

drawGrid() //используя const  понять как разрисован наш canvas


// drawRect({
//     x: 10,
//     y: 10,
//     widht: 150,
//     hegiht: 300,

//     strokeStyle: "red",
//     stroke: true,

//     fillStyle: "green",
//     fill: true,

//     lineWidth: 2
// })

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

function drawGrid() {
    context.strokeStyle = 'blue'
    context.lineWidth = 0.5


    for (let i = 0; i < canvas.width / CELL_SIZE; i++) {
        context.beginPath()
        context.moveTo(i * CELL_SIZE, 0)
        context.lineTo(i * CELL_SIZE, canvas.height)
        context.stroke()
    }

    for (let i = 0; i < canvas.height / CELL_SIZE; i++) {
        context.beginPath()
        context.moveTo(0, i * CELL_SIZE)
        context.lineTo(canvas.width, i * CELL_SIZE)
        context.stroke()
    }

    context.lineWidth = 2 //создание красной линии поля
    context.strokeStyle = 'red'

    context.beginPath()
    context.moveTo(0, 75)
    context.lineTo(canvas.width, 75)
    context.stroke()

}