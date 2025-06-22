import { asyncToGenerator } from "./common";
import { setupDatabase } from "./setupDatabase";
import { RammerheadSession } from "./classes/RammerheadSession";

export function initializeSession() {
    // eslint-disable-next-line no-func-assign
    return (initializeSession = asyncToGenerator(
        // eslint-disable-next-line no-undef
        regeneratorRuntime.mark(function e(sessionName) {
            var n;
            // eslint-disable-next-line no-undef
            return regeneratorRuntime.wrap(function (e) {
                for (;;)
                    switch ((e.prev = e.next)) {
                        case 0:
                            return (e.t0 = RammerheadSession), (e.next = 3), setupDatabase(sessionName);
                        case 3:
                            return (
                                (e.t1 = e.sent),
                                (n = new e.t0(e.t1)),
                                (e.next = 7),
                                n.init()
                            );
                        case 7:
                            return e.abrupt("return", n);
                        case 8:
                        case "end":
                            return e.stop();
                    }
            }, e);
        })
    )).apply(this, arguments);
}