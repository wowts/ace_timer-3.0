"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = {
    Embed(Base) {
        return class extends Base {
            ScheduleTimer(method, interval) { }
            ScheduleRepeatingTimer(method, interval) { return 0; }
            CancelTimer(handle) { }
        };
    },
};
exports.default = lib;
