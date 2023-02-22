class Golfer {
    constructor({ name, handicap }) {
        this.name = name;
        this.handicap = handicap;
        this.frustration = 0;
        this.confidence = 0;
    }

    calculateAvg(par) {
        var score = par + this.handicap;
        return `I usually shoot a ${score} on average.`;
    }

    playRound(golfCourseInstance) {
        if (golfCourseInstance.difficulty === "hard") {
            this.frustration = 500;
        } else if (golfCourseInstance.difficulty === "moderate") {
            this.frustration = 100;
        }
    }

    hitTheRange() {
        this.confidence += 10;
    }

    marvel(golfCourseInstance) {
        for (var i = 0; i < golfCourseInstance.features.length; i++) {
            return `I love the ${golfCourseInstance.features[0]} and ${golfCourseInstance.features[1]} on this course!`;
        }
    }

    whatYaShoot(num) {
        if (num < 0) {
            this.frustration = 0;
            return `I AM THE GREATEST GOLFER ALIVE!`;
        } else if (num === 3 || num === 4) {
            this.frustration = 20;
            return `Doh!`;
        } else if (num === 2) {
            this.frustration = 30;
            return `Doh!`;
        } else if (num === 0) {
            this.frustration -= 10;
            return `Booyah!`;
        }
    }
}

module.exports = Golfer;
