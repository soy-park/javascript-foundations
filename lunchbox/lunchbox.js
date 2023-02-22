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
      
    }
}

module.exports = LunchBox;
