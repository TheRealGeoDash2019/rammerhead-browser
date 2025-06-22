import { useEffect, useState } from "react";
import regen from "regenerator-runtime";
import { asyncToGenerator } from "../util/common";
import { initializeSession } from "../util/sessionController";
import { SessionContext } from "./SessionContext";

function Startup({ children }) {
    const [rhSessionObj, setSessionObj] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(function() {
        var persistedSessionObject;
        return (
            asyncToGenerator(
                regen.mark(function t() {
                    var sessionName, sessionObject;
                    return regen.wrap(function (t) {
                       for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                t.prev = 0;
                                sessionName = (localStorage.getItem("current-rh-session-name") || "default");
                                t.next = 4;
                                return initializeSession(sessionName);
                            case 4:
                                sessionObject = t.sent;
                                if (persistedSessionObject !== null) {
                                    t.next = 8;
                                    break;
                                }
                                sessionObject.close();
                                return t.abrupt("return");
                            case 8:
                                persistedSessionObject = sessionObject;
                                setSessionObj(sessionObject);
                                t.next = 16;
                                break;
                            case 12:
                                t.prev = 12;
                                t.t0 = t.catch(0);
                                console.error(t.t0);
                                setErrorMessage(
                                    "An error occurred while trying to connect to the server. Please refresh the page and try again"
                                );
                            // eslint-disable-next-line no-fallthrough
                            case 16:
                            case "end":
                                return t.stop();

                        } 
                    })
                })
            )(),
            function() {
                persistedSessionObject? persistedSessionObject.close() : (persistedSessionObject = null);
            }
        );
    }, []);
    
    window.rhSession = rhSessionObj;

    return (
        <SessionContext.Provider value={rhSessionObj}>
            {(!rhSessionObj || errorMessage)? (
                <div style={{ padding: 20, fontSize: 30 }}>
                    <p style={{ margin: 0 }}>
                        Connecting to server...
                    </p>
                    <p style={{ margin: 0 }}>
                        {errorMessage}
                    </p>
                </div>
            ) : (children || ("Session ID (Signed): " + rhSessionObj?.id + " (" + rhSessionObj?.signedId + ")"))}
        </SessionContext.Provider>
    );
}

export default Startup;