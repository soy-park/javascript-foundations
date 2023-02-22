class GolfCourse {
    constructor(name, difficulty, openings, arrayOfFeatures) {
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = arrayOfFeatures;
        this.currentlyPlaying = [];
    }

    checkInGroup(arrayOfGolferInstances) {
        if (this.openings > 1) {
            this.openings = this.openings - arrayOfGolferInstances.length;
            for (var i = 0; i < arrayOfGolferInstances.length; i++) {
                this.currentlyPlaying.unshift(arrayOfGolferInstances[i].name);
            }
            return `You\'re checked in. Have fun!`;
        } else if (this.openings === 1) {
            return `Sorry, we are currently booked! Please come back later.`;
        }
    }
}

module.exports = GolfCourse;
