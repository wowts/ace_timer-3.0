"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = {
    Embed(Base) {
        return class extends Base {
            ScheduleTimer(method, interval) { return { delay: interval, looping: false, ends: interval }; }
            ScheduleRepeatingTimer(method, interval) { return { delay: interval, looping: true, ends: interval }; }
            CancelTimer(handle) { }
        };
    },
};
exports.default = lib;
