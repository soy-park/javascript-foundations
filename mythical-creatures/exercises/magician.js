class Magician {
    constructor({ name, assistant, clothing }) {
        this.name = `The Great ${name}`;
        this.assistant = assistant;
        this.favoriteAccessory = clothing || "top hat";
        this.confidencePercentage = 10;
    }

    performIncantation(statement) {
        return `${statement.toUpperCase()}!`;
    }

    performTrick() {
        this.confidencePercentage += 10;
        return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`;
    }

    performShowStopper() {
        if (this.confidencePercentage === 90 && this.assistant === true) {
            return `Oh no, this trick is not ready!`;
        } else if (this.confidencePercentage === 110 && this.assistant === false) {
            return `Oh no, this trick is not ready!`;
        } else if (this.confidencePercentage === 100 && this.assistant === true) {
            return `WOW! The magician totally just sawed that person in half!`;
        } else if (this.confidencePercentage === 110 && this.assistant === true) {
            return `WOW! The magician totally just sawed that person in half!`;
        } else {
            return `Oh no, this trick is not ready!`;
        }
    }
}

module.exports = Magician;