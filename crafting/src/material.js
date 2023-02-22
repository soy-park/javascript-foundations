class Material {
    constructor(name, price, amount, units) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.units = units;
    }

    useMaterial(num) {
        if (num < this.amount) {
            this.amount -= num;
            return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
        } else if (num > this.amount) {
            return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
        }  
    }

    calculateMaterialCost() {
        return this.price * this.amount;
    }
}

module.exports = Material;
