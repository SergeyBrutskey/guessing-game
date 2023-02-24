class GuessingGame {
    constructor() {
        this.min = Infinity; 
        this.max = Infinity;
    }

    setRange(min, max) {
        this.min=min; 
        this.max=max;
    }

    guess() {
        return Math.round((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
