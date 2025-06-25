/* eslint-disable no-unused-vars */
import { asyncToGenerator } from "../common";
import { setIntervalAsync, stopIntervalAsync } from "../setIntervalAsync";
import { Shuffler } from "./Shuffler";

function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};

function g(obj) {
    var iterator =
        (typeof Symbol !== "undefined" && obj[Symbol.iterator]) ||
        obj["@@iterator"];
    if (!iterator) throw new TypeError("Object is not iterable");
    var it = iterator.call(obj),
        normal = true,
        error = false,
        err;
    return {
        s() {},
        n() {
            var step = it.next();
            return { done: step.done, value: step.value };
        },
        e(e) {
            error = true;
            err = e;
        },
        f() {
            try {
                if (!normal && it.return != null) it.return();
            } finally {
                // eslint-disable-next-line no-unsafe-finally
                if (error) throw err;
            }
        },
    };
}

function G(request) {
    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request);
        request.onerror = () => reject(request.error);
    });
}

export class RammerheadSession {
    constructor(db) {
        this.db = db;
        this.speedTicketActive = false;
        this.speedTicketErr = null;
    }

    async init() {
        let t = localStorage.getItem("rh-speedticket");
        let n = await fetch(
            t
                ? "https://betterrh.lhost.dev/api/generateTicketedSessionId?code=" + t
                : "https://betterrh.lhost.dev/api/generateSessionId"
        );
        n = await n.json();
        let r = n.id,
            i = n.signedId;
        this.id = r;
        this.signedId = i;
        let sessionData = await this.getSessionData();
        if (!sessionData) {
            let o = await fetch("https://betterrh.lhost.dev/api/generateSession");
            o = await o.json();
            let u = o.data,
                l = o.signature;
            await this.updateSessionData(u, l);
        }
        waitForElement(`[class^="browser-tab-content"]`).then(() => this.setTabTheme());
        await this.setTabFavicon();
        await this.setTabTitle();
        await this.setSearchEngine();
        this.syncCount = 0;
        await this.syncSession();
        await this.reshuffle();
        this.syncId = setIntervalAsync(
            asyncToGenerator(
                // eslint-disable-next-line no-undef
                regeneratorRuntime.mark(function* () {
                    yield this.syncLocalStorage();
                    yield this.syncSession();
                    yield this.checkSpeedTicketCode();
                }.bind(this))
            ),
            1e4
        );
        window.addEventListener("beforeunload", () => this.synchronousClose());
        localStorage.setItem("rhdatabase-" + this.id, this.db.name);
        this.updateAliveSessionId();
        this.updateAliveId = setInterval(() => this.updateAliveSessionId(), 5000);
        this.cleanupStaleSessionIds();
        let changelog = await (await fetch("/CHANGELOG.md")).text();
        let version = await (await fetch("/version")).text();
        let openSourceVersion = await (await fetch("/version-opensource")).text();
        this.region = await (await fetch("/rhdc/region")).text();
        this.staticAssets = {
            changelog,
            version,
            openSourceVersion,
        };
        try {
            this.staticAssets.bashggLink =
                "https://www.sunnyvale.gg/?utm_source=rammerhead&utm_medium=banner&utm_campaign=rh-bash-general";
        } catch (c) {
            console.error(c);
        }
    }

    async submitSpeedTicketCode(t) {
        if (!t) return "must specify code";
        if (t.length !== 36) return "invalid code";
        let n = await fetch(
            `https://betterrh.lhost.dev/api/speedTicketApply?id=${this.id}&code=${t}`
        );
        n = await n.text();
        if (n === "session not found") {
            await this.syncSession();
            return await this.submitSpeedTicketCode(t);
        }
        let r;
        try {
            r = JSON.parse(n);
        } catch (e) {
            return "Unable to contact server";
        }
        if (r.err) return r.err;
        this.speedTicketActive = true;
        localStorage.setItem("rh-speedticket", t);
        let o = Object.keys(localStorage);
        for (let i = 0; i < o.length; i++) {
            let a = o[i];
            if (a.startsWith("rh-speedticket-settings-")) {
                let u = a.split("-")[3];
                await fetch(
                    `https://betterrh.lhost.dev/api/speedTicketApplySettings?id=${this.id}&${u}=${localStorage.getItem(a)}`
                );
            }
        }
        return null;
    }

    async resubmitSpeedTicketCode() {
        let t = localStorage.getItem("rh-speedticket");
        if (!t) return;
        let n = await this.submitSpeedTicketCode(t);
        if (n) {
            this.speedTicketActive = false;
            this.speedTicketErr = n;
        }
    }

    async checkSpeedTicketCode() {
        if (!this.speedTicketActive) return;
        let t = await fetch(`https://betterrh.lhost.dev/api/speedTicketSettings?id=${this.id}`);
        t = await t.text();
        if (t.startsWith("{")) return;
        if (t === "cannot find speed ticket associated with current session") {
            await this.resubmitSpeedTicketCode();
            return await this.checkSpeedTicketCode();
        }
        if (t === "session not found") {
            await this.syncSession();
        }
        this.speedTicketActive = false;
        this.speedTicketErr = t;
    }

    cleanupStaleSessionIds(e) {
        let t;
        try {
            t = JSON.parse(localStorage.getItem("rhbrowser-alive-sessionids") || "{}");
        } catch (a) {
            console.warn(
                "while trying to cleanup stale session ids: error parsing rhbrowser-alive-sessionids localStorage data. session data in other tabs may be deleted"
            );
            t = {};
        }
        let n = Date.now();
        for (let r in localStorage) {
            if (r.startsWith("rhdatabase-")) {
                let i = r.split("-")[1];
                if (
                    i &&
                    (!t[i] || n - t[i] > 216e5 || (e && i === this.id))
                ) {
                    localStorage.removeItem(r);
                    delete t[i];
                }
            }
        }
        for (let o in t) {
            if (!localStorage.getItem("rhdatabase-" + o)) delete t[o];
        }
        localStorage.setItem("rhbrowser-alive-sessionids", JSON.stringify(t));
    }

    updateAliveSessionId() {
        let e;
        try {
            e = JSON.parse(localStorage.getItem("rhbrowser-alive-sessionids") || "{}");
        } catch (t) {
            console.warn(
                "while trying to update alive session id: error parsing rhbrowser-alive-sessionids localStorage data. session data in other tabs may be deleted"
            );
            e = {};
        }
        e[this.id] = Date.now();
        localStorage.setItem("rhbrowser-alive-sessionids", JSON.stringify(e));
    }

    async syncLocalStorage() {
        for (let t of Object.keys(localStorage)) {
            if (
                t.startsWith("rhbrowser|" + this.id) &&
                localStorage["notSynced|" + t]
            ) {
                await this._putData("localStorage", {
                    origin: t.split("|").pop(),
                    data: localStorage[t],
                });
                delete localStorage["notSynced|" + t];
            }
        }
    }

    async syncSession(t) {
        this.syncCount++;
        let resp = await fetch(
            "https://betterrh.lhost.dev/api/sessionStatus?id=" + encodeURIComponent(this.id)
        );
        if (resp.status === 404) {
            let url =
                "https://betterrh.lhost.dev/api/uploadSession?id=" +
                encodeURIComponent(this.id) +
                "&signedId=" +
                encodeURIComponent(this.signedId) +
                "&signed=" +
                encodeURIComponent(await this.getSessionSignature());
            let body = await this.getSessionData();
            await fetch(url, { method: "POST", body });
            await this.resubmitSpeedTicketCode();
        } else if (this.syncCount % 3 === 0 || t) {
            let n = await fetch(
                "https://betterrh.lhost.dev/api/getSession?id=" +
                encodeURIComponent(this.id) +
                "&signedId=" +
                encodeURIComponent(this.signedId)
            );
            if (n.status === 200) {
                let r = await n.json();
                let i = r.data,
                    o = r.signature;
                await this.updateSessionData(i, o);
            }
        }
    }

    async reshuffle() {
        if (await this.isShufflingEnabled()) {
            await fetch(
                `https://betterrh.lhost.dev/api/configShuffling?id=${encodeURIComponent(this.id)}&enable=true&reshuffle=true`
            );
            await this.syncSession(true);
        }
    }

    async prefetchLocalStorage(t) {
        await this._prefetchLocalStorage(t.replace(/^http:/, "https:"));
        await this._prefetchLocalStorage(t.replace(/^https:/, "http:"));
        await this._prefetchLocalStorage(t.replace(/^http:\/\//, "https://www."));
        await this._prefetchLocalStorage(t.replace(/^https:\/\//, "http://www."));
    }

    async _prefetchLocalStorage(t) {
        let n;
        try {
            n = new URL(t);
        } catch (e) {
            return;
        }
        let r = `rhbrowser|${this.id}|${n.origin}`;
        if (!localStorage.getItem(r)) {
            let data = await this._getData("localStorage", n.origin);
            if (!data) data = {};
            let i = data.data;
            if (i) localStorage.setItem(r, i);
        }
    }

    async updateSessionData(t, n) {
        await this._putData("data", { type: "sessionData", sessionData: t });
        await this._putData("data", { type: "sessionDataSignature", signature: n });
    }

    async getSessionData() {
        let data = await this._getData("data", "sessionData");
        if (!data) data = {};
        return data.sessionData;
    }

    async getSessionSignature() {
        let data = await this._getData("data", "sessionDataSignature");
        if (!data) data = {};
        return data.signature;
    }

    async getShuffler() {
        let sessionData = await this.getSessionData();
        let t = JSON.parse(sessionData).data.shuffleDict;
        return t ? (new Shuffler(t)) : null;
    }

    async getProxyUrl(t, n = "") {
        let r = await this.getShuffler();
        return `/${this.id}${n}/${r ? r.shuffle(t) : t}`;
    }

    async getFullProxyUrl(t, n = "") {
        let base = `${location.protocol}//${location.host}`;
        let url = await this.getProxyUrl(t, n);
        return base + url;
    }

    async fetchProxy(t, n) {
        let url = await this.getProxyUrl(t, "!a");
        return await fetch(url, n);
    }

    async getProfileCreationTime() {
        let sessionData = await this.getSessionData();
        return JSON.parse(sessionData).data.createdAt;
    }

    async getProfileImportTime() {
        let t = await this._getData("data", "importTime");
        if (t === null || t === undefined) return undefined;
        return t.time;
    }

    async updateProfileImportTime() {
        await this._putData("data", {
            type: "importTime",
            time: Date.now(),
        });
    }

    async getTabFavicon() {
        let t = await this._getData("data", "tabFavicon");
        if (t === null || t === undefined) return undefined;
        return t.data;
    }

    async setTabFavicon(t = this.getTabFavicon()) {
        t = await t;
        document.querySelector('link[rel="shortcut icon"]').href = t || "/favicon.png";
        await this._putData("data", { type: "tabFavicon", data: t });
        return t;
    }

    async getTabTitle() {
        let t = await this._getData("data", "tabTitle");
        if (t === null || t === undefined) return undefined;
        return t.data;
    }

    async setTabTitle(t = this.getTabTitle()) {
        t = await t;
        document.title = t || document.title;
        await this._putData("data", { type: "tabTitle", data: t });
        return t;
    }
    
    async getSearchEngine() {
        let t = await this._getData("data", "searchEngine");
        if (t === null || t === undefined) return "https://www.google.com/search?q=";
        return t.data;
    }

    async setSearchEngine(t = this.getSearchEngine()) {
        t = await t;
        await this._putData("data", { type: "searchEngine", data: t });
        return t;
    }

    async getTabTheme() {
        let t = await this._getData("data", "tabTheming");
        if (t === null || t === undefined) return { enabled: false, url: "" };
        return t.data;
    }

    async setTabTheme(t = this.getTabTheme()) {
        t = await t;
        await this._putData("data", { type: "tabTheming", data: t });
        if (t && "url" in t) {
            if (t.url.replaceAll(" ", "").length < 1) {
                document.querySelectorAll("link.custom-theme").forEach(e => {
                    e.remove();
                })
            } else {
                document.querySelectorAll("link.custom-theme").forEach(e => {
                    e.remove();
                })
                let o = document.createElement("link");
                o.rel = "stylesheet";
                o.href = t.url;
                o.className = "custom-theme";
                document.head.appendChild(o);
            }
        };
        if (t && "enabled" in t) {
            const el = document.querySelector(`[class^="browser-tab-content"]`);
            if (t.enabled === false) {
                document.documentElement.classList.remove('dark-theme');
                document.documentElement.classList.remove('custom-theme');
                document.documentElement.classList.add('light-theme');
                el.classList.remove('chrome-tabs-dark-theme');
                el.classList.add('chrome-tabs-light-theme');
            } else {
                document.documentElement.classList.add('dark-theme');
                document.documentElement.classList.add('custom-theme');
                document.documentElement.classList.remove('light-theme');
                el.classList.add('chrome-tabs-dark-theme');
                el.classList.remove('chrome-tabs-light-theme');
            }
        };
        return t;
    }

    async isShufflingEnabled() {
        let sessionData = await this.getSessionData();
        return !!JSON.parse(sessionData).data.shuffleDict;
    }

    async enableShuffling(t) {
        if (typeof t !== "boolean") throw new TypeError("enable argument must be a boolean");
        await fetch(
            `https://betterrh.lhost.dev/api/configShuffling?id=${encodeURIComponent(this.id)}&enable=${t}`
        );
        await this.syncSession(true);
    }

    async getHttpProxySetting() {
        let sessionData = await this.getSessionData();
        return JSON.parse(sessionData).data.externalProxySettings;
    }

    async setHttpProxySetting(t) {
        await fetch(
            `https://betterrh.lhost.dev/api/configProxy?id=${encodeURIComponent(this.id)}` +
            (t ? "&httpProxy=" + encodeURIComponent(t) : "")
        );
        await this.syncSession(true);
    }

    async importBrowserProfile(t) {
        for (let n = 0; n < t.length; n++) t[n] ^= 69;
        let r;
        try {
            r = JSON.parse(new TextDecoder().decode(t));
        } catch (e) {
            return "corrupted rammerfile";
        }
        if (
            !r ||
            !Array.isArray(r.data) ||
            !Array.isArray(r.localStorage) ||
            !Array.isArray(r.browsingHistory)
        ) {
            return "invalid rammerfile";
        }
        let i = {},
            o = g(r.data);
        try {
            o.s();
            let a;
            while (!(a = o.n()).done) {
                let u = a.value;
                i[u.type] = u;
            }
        } catch (l) {
            o.e(l);
        } finally {
            o.f();
        }
        if (
            typeof i.sessionData?.sessionData !== "string" ||
            typeof i.sessionDataSignature?.signature !== "string"
        ) {
            return "session data missing";
        }
        let valid = await fetch(
            "https://betterrh.lhost.dev/api/validateSession?signed=" +
            encodeURIComponent(i.sessionDataSignature.signature),
            {
                method: "POST",
                body: i.sessionData.sessionData,
            }
        );
        valid = await valid.text();
        if (valid !== "ok") return "bad session data";
        await this._putAllData("data", r.data);
        await this._putAllData("localStorage", r.localStorage);
        await this._putAllData("browsing-history", r.browsingHistory);
        await this.updateProfileImportTime();
    }

    async exportBrowserProfile() {
        let t = {};
        t.data = await this._getAllData("data");
        t.localStorage = await this._getAllData("localStorage");
        t.browsingHistory = await this._getAllData("browsing-history");
        let n = new TextEncoder().encode(JSON.stringify(t));
        for (let r = 0; r < n.length; r++) n[r] ^= 69;
        return n;
    }

    synchronousClose() {
        this.cleanupStaleSessionIds(true);
        clearInterval(this.updateAliveId);
    }

    async close() {
        this.synchronousClose();
        await stopIntervalAsync(this.syncId);
        await this.syncSession(true);
        this.db.close();
    }

    async delete() {
        await this.close();
        await G(indexedDB.deleteDatabase(this.db.name));
    }

    async _getData(t, n) {
        let r = this.db
            .transaction(t, "readonly")
            .objectStore(t)
            .get(n);
        await G(r);
        return r.result;
    }

    async _putData(t, n) {
        let r = this.db
            .transaction(t, "readwrite")
            .objectStore(t)
            .put(n);
        await G(r);
    }

    async _getDataKeys(t) {
        let n = this.db
            .transaction(t, "readonly")
            .objectStore(t)
            .getAllKeys();
        await G(n);
        return n.result;
    }

    async _getAllData(t) {
        let n = [];
        let r = g(await this._getDataKeys(t));
        try {
            r.s();
            let i;
            while (!(i = r.n()).done) {
                let o = i.value;
                n.push(await this._getData(t, o));
            }
        } catch (e) {
            r.e(e);
        } finally {
            r.f();
        }
        return n;
    }

    async _putAllData(t, n) {
        let r = g(n);
        try {
            r.s();
            let i;
            while (!(i = r.n()).done) {
                let o = i.value;
                await this._putData(t, o);
            }
        } catch (e) {
            r.e(e);
        } finally {
            r.f();
        }
    }
}