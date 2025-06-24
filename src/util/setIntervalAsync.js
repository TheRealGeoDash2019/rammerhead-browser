export async function stopIntervalAsync(timer) {
    if (!timer || typeof timer !== "object") throw new TypeError("Invalid timer object");
    timer.stopped = true;
    // Clear all timeouts
    for (const key in timer.timeouts) {
        clearTimeout(timer.timeouts[key]);
        delete timer.timeouts[key];
    }
    // Await all pending promises
    for (const key of Object.keys(timer.promises)) {
        try {
            await timer.promises[key];
        // eslint-disable-next-line
        } catch {}
        delete timer.promises[key];
    }
}

export function setIntervalAsync(handler, interval, ...args) {
    if (typeof handler !== "function") throw new Error('Invalid argument: "handler". Expected a function.');
    if (!(typeof interval === "number" && interval >= 10)) throw new Error('Invalid argument: "interval". Expected a number >= 10.');
    const timer = { stopped: false, timeouts: {}, promises: {} };
    let id = 0;
    function schedule() {
        if (timer.stopped) return;
        const currentId = id;
        timer.timeouts[currentId] = setTimeout(async function run() {
            delete timer.timeouts[currentId];
            timer.promises[currentId] = (async () => {
                try { await handler(...args); }
                finally {
                    if (!timer.stopped) {
                        id = id === Number.MAX_SAFE_INTEGER ? 0 : id + 1;
                        schedule();
                    }
                    delete timer.promises[currentId];
                }
            })();
        }, interval);
    }
    schedule();
    return timer;
}
