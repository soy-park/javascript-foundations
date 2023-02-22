var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = { buttons: 0, carrots: 0, coal: 0, snowballs: 0 };
    }

    gatherMaterials(material, num) {
        return this.materials[material] += num;
    }

    buildASnowman() {
        var snowman = new Snowman({ carrots: this.materials.carrots, coal: this.materials.coal, buttons: this.materials.buttons, snowballs: this.materials.snowballs });
        return snowman;
    }

    placeMagicHat(snowmanInstance) {
        snowmanInstance.canWearMagicHat();
        if (snowmanInstance.magicHat === true) {
            return `Woah, this snowman is coming to life!`;
        } else if (snowmanInstance.magicHat === false) {
            return 'I guess I didn\'t build it correctly.';
        }
    }
}

module.exports = Human;