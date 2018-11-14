class Duration {
    constructor(numString, denString) {
        const numNum = parseInt(numString, 10)
        const denNum = parseInt(denString, 10)

        this.numerator = numNum ? numNum : 1
        this.denominator = denNum ? denNum : 1
    }

    toString = () => {
        return this.numerator + '/' + this.denominator
    }

    getDuration = () => {
        return this.numerator / this.denominator
    }
}

export default Duration
