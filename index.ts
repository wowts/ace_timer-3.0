import { Constructor, Library } from "@wowts/tslib";

export type Callback = (timer: Timer) => void;

export interface AceTimer {
    ScheduleTimer(method: string |  Callback, interval: number): Timer;
    ScheduleRepeatingTimer(method: string |  Callback, interval: number): Timer;
    CancelTimer(handle: Timer): void;
}

export interface Timer {
    delay: number;
    ends: number;
    looping: boolean;
}

const lib: Library<AceTimer> = {
    Embed<T extends Constructor<{}>>(Base: T): Constructor<AceTimer> & T {
        return class extends Base {
            public ScheduleTimer(method: string |  Callback, interval: number): Timer { return { delay: interval, looping: false, ends: interval }; }
            public ScheduleRepeatingTimer(method: string |  Callback, interval: number): Timer { return { delay: interval, looping: true, ends: interval }; }
            public CancelTimer(handle: Timer): void {}
        };
    },
};
export default lib;
