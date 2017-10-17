import { AceModule } from "@wowts/tsaddon";
import { Constructor, Library } from "@wowts/tslib";

export interface AceTimer {
    ScheduleTimer(method: string, interval: number): void;
    ScheduleRepeatingTimer(method: string, interval: number): number;
    CancelTimer(handle: number): void;
}

const lib: Library<AceTimer> = {
    Embed<T extends Constructor<{}>>(Base: T): Constructor<AceTimer> & T {
        return class extends Base {
            public ScheduleTimer(method: string, interval: number): void {}
            public ScheduleRepeatingTimer(method: string, interval: number): number { return 0; }
            public CancelTimer(handle: number): void {}
        };
    },
};
export default lib;
