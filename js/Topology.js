class Topology {
    constructor() {
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
}