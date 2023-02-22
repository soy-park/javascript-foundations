class LunchBox {
    constructor(lunchBoxObject) {
        this.owner = lunchBoxObject.owner;
        this.material = lunchBoxObject.madeOf;
        this.shape = lunchBoxObject.shape;
        this.color = lunchBoxObject.color;
        this.snacks = [];
    }

    acquireSnack(snackInstance) {
        this.snacks.push(snackInstance);
        snackInstance.isInLunchBox = true;
    }

    findHealthySnacks() {
        var healthSnacks = [];
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].type.toLowerCase().includes("fruit")) {
                healthSnacks.push(this.snacks[i].type) 
            }
        }
        return healthSnacks;
    }
}

module.exports = LunchBox;
