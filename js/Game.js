class Game {
    constructor() { //регистрирует вызов ф-ции, привязан к обновлению экрана
        this.stage = "preparation"
        this.playerOrder = true

        this.player = new Topology({
            offsetX: 60,
            offsetY: 90
        })

        this.computer = new Topology({
            offsetX: 600,
            offsetY: 100,
            secret: true
        })

        this.computer.randoming()

        //         this.player
        // .addSheeps({
        //         x: 0,
        //         y: 0,
        //         direct: 0,
        //         size: 3
        //     },

        //     {
        //         x: 0,
        //         y: 2,
        //         direct: 1,
        //         size: 4
        //     }
        // )

        // .addChecks({
        //         x: 5,
        //         y: 5
        //     },

        //     {
        //         x: 5,
        //         y: 4
        //     }
        // )

        this.player.randoming()
        this.stage = "play"

        requestAnimationFrame(x => this.tick(x))
    }

    tick(timestamp) {
        requestAnimationFrame(x => this.tick(x)) //информация как долго существует наша страница

        clearCanvas()
        drawGrid()

        this.player.draw(context)
        this.computer.draw(context) // рисует поле computer

        if (this.stage === "preparation") {
            this.tickPreparation(timestamp)
        } else if (this.stage === "play") {
            this.tickPlay(timestamp)
        }


        mouse.pleft = mouse.left

    }

    tickPreparation(timestamp) {
        if (!this.player.isPointUnder(mouse)) {
            return
        }


        const sheepSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1] //Колличество корабликов для игры
        const sheepSize = sheepSizes[this.player.sheeps.length]
        const coordinats = this.player.getCoordinats(mouse)

        const sheep = {
            x: coordinats.x,
            y: coordinats.y,
            direct: mouse.s ? 0 : 1,
            size: sheepSize
        }

        if (!this.player.canStay(sheep)) {
            return
        }

        this.player.drawSheep(context, sheep)

        if (mouse.left && !mouse.pleft) {

            this.player.addSheeps(sheep)

            if (this.player.sheeps.length === 10) {
                this.stage = "play"

            }
        }
    }

    tickPlay(timestamp) {
        if (this.playerOrder) {
            if (this.computer.isPointUnder(mouse)) {
                return
            }

            const point = this.computer.getCoordinats(mouse)

            if (mouse.left && !mouse.pleft) {
                this.computer.addChecks(point)
                this.computer.update()
                this.playerOrder = false
            }
        } else { //ответный выстрел компьютера
            const point = {
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10)
            }

            this.player.addChecks(point)
            this.player.update()
            this.playerOrder = true
        }
    }

}