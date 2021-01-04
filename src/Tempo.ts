export class Tempo {
    bpm: number;
    quarter: number;
    eighth: number;
    sixteenth: number
    eighthTriplet: number;

    constructor(bpm: number) {
        this.bpm = bpm;
        this.quarter = 60000 / bpm;
        this.eighth = this.quarter / 2;
        this.sixteenth = this.quarter / 4;
        this.eighthTriplet = this.quarter / 3;
    }
}
