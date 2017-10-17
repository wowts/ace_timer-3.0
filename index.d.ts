import { Library } from "@wowts/tslib";
export interface AceTimer {
    ScheduleTimer(method: string, interval: number): void;
    ScheduleRepeatingTimer(method: string, interval: number): number;
    CancelTimer(handle: number): void;
}
declare const lib: Library<AceTimer>;
export default lib;
