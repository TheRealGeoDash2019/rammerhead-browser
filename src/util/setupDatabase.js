import { asyncToGenerator } from "./common";

export function setupDatabase() {
    // eslint-disable-next-line no-func-assign
    return (setupDatabase = asyncToGenerator(
        
        // eslint-disable-next-line no-undef
        regeneratorRuntime.mark(function init(sessionName) {
            // eslint-disable-next-line no-undef
            return regeneratorRuntime.wrap(function (e) {
                for (;;)
                    switch ((e.prev = e.next)) {
                        case 0:
                            return e.abrupt(
                                "return",
                                new Promise(function (resv, rej) {
                                    var databaseConn = indexedDB.open("rammerhead-session-" + sessionName, 1);
                                    databaseConn.onerror = rej;
                                    databaseConn.onupgradeneeded = function() {
                                        var databaseSession = databaseConn.result;
                                        databaseSession.createObjectStore("browsing-history", {
                                            keyPath: "timestamp",
                                        });
                                        databaseSession.createObjectStore("data", {
                                            keyPath: "type",
                                        });
                                        databaseSession.createObjectStore("localStorage", {
                                            keyPath: "origin",
                                        });
                                        sessionStorage.setItem("rh-firstrun", "true");
                                    };
                                    databaseConn.onsuccess = function(event) {
                                        return resv(event.target.result);
                                    };
                                })
                            );
                        case 1:
                        case "end":
                            return e.stop();
                    }
            }, init);
        })
    )).apply(this, arguments);
}