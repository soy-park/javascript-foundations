class Craft {
    constructor({ type , materials }) {
        this.name = type;
        this.materials = materials;
        this.completed = false;
    }

    completeCraft() {
        this.completed = true;
        return `All done! It looks great!`;
    }

    calculateProjectTotal() {
        var count = 0;
        for (var i = 0; i < this.materials.length; i++) {
            count += this.materials[i].calculateMaterialCost();
        }
        return count;
    }
}

module.exports = Craft;
