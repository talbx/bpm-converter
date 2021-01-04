import {Tempo} from "./Tempo";

export const bpmToMs = (beat: number): Tempo => {
    const quarterMs = 60000 / beat;
    return new Tempo(beat);
}
