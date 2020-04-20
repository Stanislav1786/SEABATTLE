class Topology {
    constructor(param) {
        this.offsetX = param.offsetX // отступы от верхнего края для отрисовки нашей топологии
        this.offsetY = param.offsetY


        this.sheeps = []
        this.checks = []
    }


    addSheeps(...sheeps) {
        for (const sheep of sheeps) {
            if (!this.sheeps.includes(sheep)) {
                this.sheeps.push(sheep)
            }
        }

        return this
    }


    addChecks(...checks) {
        for (const check of checks) {
            if (!this.checks.includes(check)) {
                this.checks.push(check)
            }
        }

        return this
    }

    drawFields(context) {
        context.strokeStyle = "blue"
        context.lineWidth = 1.7


        for (let i = 1; i <= 11; i++) {
            context.beginPath()
            context.moveTo(
                this.offsetX + i * FIELD_SIZE,
                this.offsetY
            )
            context.lineTo(
                this.offsetX + i * FIELD_SIZE,
                this.offsetY + 11 * FIELD_SIZE
            )
            context.stroke()
        }

        for (let i = 1; i <= 11; i++) {
            context.beginPath()
            context.moveTo(
                this.offsetX,
                this.offsetY + i * FIELD_SIZE
            )
            context.lineTo(
                this.offsetX + 11 * FIELD_SIZE,
                this.offsetY + i * FIELD_SIZE
            )
            context.stroke()
        }

        context.textAlign = "center"
        context.font = "18px comic sans"

        const alphabet = "АБВГДЕЖЗИК"
        for (let i = 0; i < 10; i++) {
            const letter = alphabet[i]
            context.fillText(
                letter,
                this.offsetX + i * FIELD_SIZE + FIELD_SIZE * 1.5,
                this.offsetY + FIELD_SIZE * 0.7
            )
        }

        for (let i = 1; i <= 10; i++) {
            context.fillText(
                i,
                this.offsetX + FIELD_SIZE * 0.5,
                this.offsetY + i * FIELD_SIZE + FIELD_SIZE * 0.7
            )
        }

        return this
    }
}