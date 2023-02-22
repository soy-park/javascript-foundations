class Snowman {
    constructor({ carrots, coal, buttons, snowballs }) {
        this.carrots = carrots;
        this.coal = coal;
        this.buttons = buttons;
        this.snowballs = snowballs;
        this.magicHat = false;
    }

    canWearMagicHat() {
        if (this.coal >= 2 && this.buttons >= 5 && this.carrots >=1 && this.snowballs >= 2) {
            this.magicHat = true;
            return true;
        } else if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
            this.magicHat = false;
            return false;
        }
    }
}

module.exports = Snowman;