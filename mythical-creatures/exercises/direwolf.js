class Direwolf {
    constructor(name, home, size) {
        this.name = name;
        this.home = home || "Beyond the Wall";
        this.size = size || "Massive";
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
        this.counter = 0;
    }

    protect(stark) {
        this.counter += 1;
        if (this.home === stark.location && this.counter < 3) {
            this.starksToProtect.push(stark);
            stark.safe = true;
            this.huntsWhiteWalkers = false;
        } else if (this.home === stark.location && this.counter === 5) {
            this.starksToProtect.push(stark);
            this.starksToProtect.shift();
            this.starksToProtect.length = 2;
        }
    }

    leave(stark) {
        this.starksToProtect.shift();
        stark.safe = false;
    }
}

module.exports = Direwolf;