class Game {
	constructor () { //регистрирует вызов ф-ции, привязан к обновлению экрана
		this.stage = "preparation"

		this.player = new Topology ({ 
			offsetX: 60,
            offsetY: 90
        })

        this.computer = new Topology ({ 
			offsetX: 600,
            offsetY: 100
        })

        this.player
.addSheeps({
        x: 0,
        y: 0,
        direct: 0,
        size: 3
    },

    {
        x: 0,
        y: 2,
        direct: 1,
        size: 4
    }
)

.addChecks({
        x: 5,
        y: 5
    },

    {
        x: 5,
        y: 4
    }
)

		requestAnimationFrame(x => this.tick(x))
	}

	tick (timestamp) {
		requestAnimationFrame(x => this.tick(x)) //информация как долго существует наша страница

		 clearCanvas()
		 drawGrid()

		 this.player.draw(context)
		 this.computer.draw(context) // рисует поле computer

		 if (this.stage === "preparation") {
		 	this.tickPreparation(timestamp)
		 }
	}

	tickPreparation (timestamp) {

	}
}