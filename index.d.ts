import { Library } from "@wowts/tslib";
export declare type Callback = (timer: Timer) => void;
export interface AceTimer {
    ScheduleTimer(method: string | Callback, interval: number): Timer;
    ScheduleRepeatingTimer(method: string | Callback, interval: number): Timer;
    CancelTimer(handle: Timer): void;
}
export interface Timer {
    delay: number;
    ends: number;
    looping: boolean;
}
declare const lib: Library<AceTimer>;
export default lib;
