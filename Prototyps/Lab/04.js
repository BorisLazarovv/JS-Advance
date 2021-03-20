function createBalloons() {
    class Ballon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    };

    class PartyBallon extends Ballon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    };

    class BirthdayBallon extends PartyBallon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this._text = text;
        }
        get text() {
            return this._text;
        }
    };
    return {
        Ballon,
        PartyBallon,
        BirthdayBallon
    }
}
const balloons = createBalloons()
const birthday = new balloons.BirthdayBallon('red', 10, 'yellow', 100, 'asdasdasd');

console.log(birthday.ribbon);
console.log(birthday.text);