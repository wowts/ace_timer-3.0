import { Library } from "@wowts/tslib";
export interface AceTimer {
    ScheduleTimer(method: string, interval: number): Timer;
    ScheduleRepeatingTimer(method: string, interval: number): Timer;
    CancelTimer(handle: number): void;
}
export interface Timer {
    delay: number;
    ends: number;
    looping: boolean;
}
declare const lib: Library<AceTimer>;
export default lib;
