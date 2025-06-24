import { useState, useRef, useEffect, useReducer, useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import chromeTabs from 'chrome-tabs';
import { getSessionContext } from "./SessionContext";
import { unsupportedIterableToArray } from "../util/common";
import pages from "./pages";
import { debounce } from "lodash";
import { tldList } from "../util/tld";
import ipRegex from 'ip-regex';
import { uiIcons } from "../util/uiIcons";

function BrowserBarButton(props) {
    var t = props.Img,
        origOnClick = props.onClick,
        onClick = void 0 === origOnClick? function () {} : origOnClick,
        disabledValue = props.disabled,
        isDisabled = void 0 !== disabledValue && disabledValue,
        u = props.menuItems,
        l = void 0 === u ? [] : u,
        s = props.contextMenuOptions,
        c = void 0 === s ? {} : s,
        d = props.tooltip,
        p = useState(null),
        // eslint-disable-next-line no-unused-vars
        h = p[0],
        v = p[1];
    return jsxs("div", {
        title: d,
        children: [
            jsx(t, {
                className:
                    "browser-bar-btn browser-bar-btn-" +
                    (isDisabled ? "disabled" : "enabled"),
                onClick: function (e) {
                    return !isDisabled && onClick(e);
                },
                onContextMenu: function (e) {
                    e.preventDefault(),
                        isDisabled ||
                            0 === l.length ||
                            v(
                                mergeObjects(
                                    mergeObjects({}, c),
                                    {},
                                    {
                                        top: e.pageY,
                                        left: e.pageX,
                                        menuItems: l,
                                    }
                                )
                            );
                },
            }),
            /*
            h &&
                jsx(
                    Zo,
                    mergeObjects(
                        mergeObjects({}, h),
                        {},
                        {
                            onBlur: function () {
                                return v(null);
                            },
                        }
                    )
                ), */
        ],
    });
}

function omit(obj, excludeKeys) {
    if (obj == null) return {};
    var result = {}, key, i, keys = Object.keys(obj);
    for (i = 0; i < keys.length; i++)
        (key = keys[i]), excludeKeys.indexOf(key) >= 0 || (result[key] = obj[key]);
    if (Object.getOwnPropertySymbols) {
        var syms = Object.getOwnPropertySymbols(obj);
        for (i = 0; i < syms.length; i++)
            (key = syms[i]),
                excludeKeys.indexOf(key) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(obj, key) && (result[key] = obj[key]));
    }
    return result;
}

function mergeObjects(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i] ?? {};
        const keys = Object.keys(source);
        if (Object.getOwnPropertySymbols) {
            let symbols = Object.getOwnPropertySymbols(source);
            symbols = symbols.filter(sym => Object.getOwnPropertyDescriptor(source, sym).enumerable);
            keys.push(...symbols);
        }
        for (const key of keys) {
            if (Object.getOwnPropertyDescriptors) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

function NotFoundPage() {
    return jsx("div", {
        className: "rhpages",
        children: jsx("h1", {
            children: "404 rammerhead not found",
        }),
    });
}

function g(e, t) {
    if (e == null) throw new TypeError("Cannot iterate over null or undefined");
    if (typeof e[Symbol.iterator] === "function") {
        var iterator, error, done = false;
        return {
            s: function () { iterator = e[Symbol.iterator](); },
            n: function () { var step = iterator.next(); done = step.done; return step; },
            e: function (err) { error = err; },
            f: function () { if (!done && iterator && typeof iterator.return === "function") iterator.return(); if (error) throw error; }
        };
    }
    if (Array.isArray(e) || (t && typeof e.length === "number")) {
        var i = 0;
        return {
            s: function () {},
            n: function () { return i >= e.length ? { done: true } : { done: false, value: e[i++] }; },
            e: function (err) { throw err; },
            f: function () {}
        };
    }
    var arr = unsupportedIterableToArray(e);
    if (arr) {
        var j = 0;
        return {
            s: function () {},
            n: function () { return j >= arr.length ? { done: true } : { done: false, value: arr[j++] }; },
            e: function (err) { throw err; },
            f: function () {}
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function RenderInternalPage(e) {
    var t = e.url,
        n = e.setTitle,
        r = e.goToUrl;
    return (function () {
        if (!t.startsWith("rh://"))
            return jsx("h1", {
                children: "Human error occurred",
            });
        var e,
            i = new URL(t.replace(/^rh/, "http")),
            o = g(pages);
        try {
            for (o.s(); !(e = o.n()).done; ) {
                var a = e.value;
                if (
                    a.host === i.host &&
                    (!a.existsOnlyAtRoot || "/" === i.pathname)
                )
                    return (
                        n(a.title),
                        jsx(a.Component, {
                            path: i.pathname,
                            query: i.search,
                            goToUrl: r,
                        })
                    );
            }
        } catch (u) {
            o.e(u);
        } finally {
            o.f();
        }
        return (
            n(t),
            jsx(NotFoundPage, {
                path: i.pathname,
                query: i.search,
                goToUrl: r,
            })
        );
    })();
}

class TabHistory {
    constructor() {
        this.history = ["rh://new-tab/"];
        this.historyIdx = 0;
    }
    peekForward() {
        return this._getElement(this.historyIdx - 1);
    }
    peekBackward() {
        return this._getElement(this.historyIdx + 1);
    }
    peekCurrent() {
        return this.history[this.historyIdx];
    }
    goForward() {
        if (!this._withinBounds(this.historyIdx - 1))
            throw new TypeError(
                "cannot go forward to non-existent history entry"
            );
        return this.history[--this.historyIdx];
    }
    goBackward() {
        if (!this._withinBounds(this.historyIdx + 1))
            throw new TypeError(
                "cannot go backward to non-existent history entry"
            );
        return this.history[++this.historyIdx];
    }
    go(e) {
        if (e && this.peekCurrent() !== e) {
            if (this.historyIdx !== 0) {
                this.history.splice(0, this.historyIdx);
                this.historyIdx = 0;
            }
            this.history.unshift(e);
        }
    }
    updateCurrent(e) {
        this.history[this.historyIdx] = e;
    }
    getForwardList() {
        var e = [];
        for (var t = this.historyIdx - 1; t >= 0; t--) {
            e.push(this.history[t]);
        }
        return e;
    }
    getBackwardList() {
        return this.history.slice(this.historyIdx + 1);
    }
    _withinBounds(e) {
        return e >= 0 && e < this.history.length;
    }
    _getElement(e) {
        return this._withinBounds(e) ? this.history[e] : null;
    }
}

function BrowserTabContents(e) {
    var t = e.iframe,
        n = useRef();
    return (
        useEffect(function () {
            for (
                var e = n.current, r = !1, i = 0;
                i < e.childNodes.length;
                i++
            )
                e.childNodes[i] === t
                    ? ((t.style.display = "block"), (r = !0))
                    : (e.childNodes[i].style.display = "none");
            !r && t && e.appendChild(t),
                (n.current.style.display = t ? "block" : "none");
        }),
        jsx("div", {
            className: "browser-tab-content",
            ref: n,
        })
    );
}

function Separator(e) {
    var t = e.width,
        n = void 0 === t ? 5 : t,
        r = e.height,
        i = void 0 === r ? 1 : r;
    return jsx("div", { style: { height: i, width: n } });
}

function createIframe(e, t) {
    e.document.documentElement.innerHTML =
        '<body style="margin: 0;"><iframe src="'.concat(
            t.replace(/"/g, '\\"'),
            '" style="width: 100vw; height: 100vh; margin: 0; border: 0;" sandbox="allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"></iframe></body>'
        );
}

function qo(e) {
    if (!e.startsWith("rh://")) return [];
    var t,
        n = [],
        r = g(pages);
    try {
        for (r.s(); !(t = r.n()).done; ) {
            var i = t.value;
            i.showSuggestions &&
                ("rh://" + i.host).startsWith(e) &&
                n.push("rh://" + i.host);
        }
    } catch (o) {
        r.e(o);
    } finally {
        r.f();
    }
    return n;
}

function Ct(e) {
    if (e.toLowerCase().startsWith("javascript:")) return !0;
    var t = (e.match(/^[a-z0-9]+:\/\//) || [])[0],
        n = e.replace(/^[a-z0-9]+:\/\//i, "").split(/(?=\/)/);
    if (((e = n[0].trim()), /^[^ ]+$/.test(e))) {
        if (n.length > 1) return !0;
        if (
            e.includes(".") &&
            -1 !== tldList.indexOf(e.split(".").pop().toUpperCase())
        )
            return !0;
        if (
            (function (e) {
                return ipRegex.v4({ exact: !0 }).test(e);
            })(e)
        )
            return !0;
        if ("rh://" === t || "rammerhead://" === t) return !0;
    }
    return !1;
}

function Rt(e) {
    var t = e.Icon,
        n = void 0 === t ? null : t,
        r = e.children,
        i = e.focused,
        o = omit(e, ["Icon", "children", "focused"]);
    return jsxs(
        "div",
        mergeObjects(
            mergeObjects(
                {
                    className: "addressbar-menu-item",
                    style: {
                        backgroundColor: i
                            ? "rgba(0, 0, 0, 0.1)"
                            : "white",
                    },
                },
                o
            ),
            {},
            {
                children: [
                    jsx("div", {
                        className:
                            "addressbar-menu-item-icon-wrapper",
                        children:
                            n &&
                            jsx(n, {
                                className:
                                    "addressbar-menu-item-icon",
                            }),
                    }),
                    r,
                ],
            }
        )
    );
}

function Ve(e) {
    return e
        ? /^javascript:/i.test(e)
            ? e
            : (/^(?:[a-z0-9]+):\/\//i.test(e) ||
                    (e = "http://" + e),
                /^(?:[a-z0-9]+):\/\/[^/]+$/i.test(e) && (e += "/"),
                (e = (e = e.replace(
                    /(^[a-z0-9]+:\/\/[^/]+)/i,
                    function (e, t) {
                        return t.toLowerCase();
                    }
                )).replace(
                    /^rammerhead:\/\/([A-Za-z0-9]?)/,
                    "rh://$1"
                )))
        : "";
}

function SearchSuggestions({ onBlur, onUrlEnter, state }) {
    const [focusedIdx, setFocusedIdx] = useState(-1);
    const [inputValue, setInputValue] = useState("");
    const [Icon, setIcon] = useState(uiIcons.defaultSearchIcon);
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef();

    // Fetch suggestions (Google and internal)
    const fetchSuggestions = debounce(async () => {
        if (!inputRef.current) return;
        const val = inputRef.current.value;
        if (!val) {
            setSuggestions([]);
            return;
        }
        let google = [];
        try {
            const res = await getSessionContext().fetchProxy(
                "https://suggestqueries.google.com/complete/search?client=firefox&q=" +
                    encodeURIComponent(val)
            );
            google = (await res.json())[1] || [];
        // eslint-disable-next-line no-empty
        } catch {}
        const internal = qo(val).map(e => ({ Icon: uiIcons.internalIcon, text: e }));
        setSuggestions([
            ...internal,
            ...google.map(e => ({ Icon: uiIcons.searchIcon, text: e }))
        ].slice(0, 12));
    }, 300);

    // Handle input changes
    const handleInput = () => {
        setFocusedIdx(-1);
        setInputValue(inputRef.current.value);
        setIcon(Ct(inputRef.current.value) ? uiIcons.internalIcon : uiIcons.searchIcon);
        state.currentlyTyping = inputRef.current.value;
        fetchSuggestions();
    };

    // Handle suggestion selection
    const selectSuggestion = (text) => {
        let url = Ct(text)
            ? text
            : "https://www.google.com/search?q=" + encodeURIComponent(text);
        state.currentlyTyping = null;
        inputRef.current.blur();
        onUrlEnter(Ve(url));
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
        let dir = 0;
        if (e.key === "ArrowUp") dir = -1;
        else if (e.key === "ArrowDown") dir = 1;
        if (dir !== 0) {
            const len = suggestions.length + 1;
            let idx = ((focusedIdx + dir) % len + len) % len;
            idx = idx === suggestions.length ? -1 : idx;
            setFocusedIdx(idx);
            if (idx === -1) {
                setIcon(uiIcons.internalIcon);
                inputRef.current.value = inputValue;
            } else {
                setIcon(suggestions[idx].Icon);
                inputRef.current.value = suggestions[idx].text;
            }
        }
    };

    useEffect(() => {
        inputRef.current.value = state.currentlyTyping || "";
        handleInput();
        inputRef.current.focus();
    }, []);

    return (
        <div className="addressbar-menu" tabIndex="-1" onKeyDown={handleKeyDown}>
            <Separator width={1} height={5} />
            <Rt Icon={Icon}>
                <input
                    ref={inputRef}
                    type="text"
                    spellCheck="false"
                    onBlur={onBlur}
                    placeholder="Search or type a URL"
                    onKeyDown={e => {
                        if (e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault();
                        else if (e.key === "Enter") {
                            e.preventDefault();
                            selectSuggestion(inputRef.current.value);
                        } else if (e.key === "Escape") {
                            e.preventDefault();
                            state.currentlyTyping = null;
                            inputRef.current.blur();
                        }
                    }}
                    onInput={handleInput}
                />
            </Rt>
            {inputValue && (
                <Rt Icon={Icon} focused={focusedIdx === -1}>
                    <p>{inputValue}</p>
                </Rt>
            )}
            {suggestions.map((s, idx) => (
                <Rt
                    key={idx}
                    Icon={s.Icon}
                    focused={focusedIdx === idx}
                    onMouseDown={e => e.preventDefault()}
                    onMouseUp={() => selectSuggestion(s.text)}
                    onMouseMove={() => setFocusedIdx(idx)}
                    onMouseLeave={() => setFocusedIdx(-1)}
                >
                    <p>{s.text}</p>
                </Rt>
            ))}
        </div>
    );
}

function Ye(e) {
    var t = e.url,
        n = e.state,
        i = e.onUrlEnter,
        o = e.onType,
        a = useRef(),
        u = useState(!1),
        l = u[0],
        s = u[1];
    void 0 === n.isInitialMouseDown && (n.isInitialMouseDown = !0);
    return jsxs("div", {
        className: "addressbar",
        style: {
            outline: l ? "2px #4285f4 solid" : "none",
            backgroundColor: l ? "#ffffff" : "#f1f3f4"
        },
        children: [
            jsx(Separator, {}),
            null !== t && void 0 !== t && t.startsWith("https")
                ? jsx(uiIcons.padlockIcon, {
                        className:
                            "browser-bar-btn addressbar-btn",
                    })
                : jsx(uiIcons.defaultSearchIcon, {
                        className:
                            "browser-bar-btn addressbar-btn",
                    }),
            jsx("div", {
                className: "addressbar-urlbar",
                contentEditable: !0,
                ref: a,
                spellCheck: "false",
                suppressContentEditableWarning: !0,
                onPaste: function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = e.clipboardData
                            .getData("text")
                            .replace(/\n|\r/g, "")
                            .replace(/\t/g, " "),
                        n = window.getSelection();
                    n.rangeCount &&
                        (n.deleteFromDocument(),
                        n
                            .getRangeAt(0)
                            .insertNode(
                                document.createTextNode(t)
                            ));
                },
                onInput: function () {
                    (n.currentlyTyping = a.current.textContent),
                        o();
                },
                onKeyDown: function (e) {
                    "Enter" === e.key
                        ? ((n.currentlyTyping = null),
                            a.current.blur(),
                            i(Ve(a.current.textContent)))
                        : "Escape" === e.key &&
                            ((n.currentlyTyping = null),
                            a.current.blur());
                },
                onFocus: function () {
                    s(!0),
                        n.currentlyTyping || t || o(),
                        (n.isInitialMouseDown = !0);
                },
                onMouseUp: function () {
                    l &&
                        n.isInitialMouseDown &&
                        1 === window.getSelection().rangeCount &&
                        0 ===
                            window.getSelection().toString()
                                .length &&
                        (document.execCommand(
                            "selectAll",
                            !1,
                            null
                        ),
                        (n.isInitialMouseDown = !1));
                },
                onBlur: function () {
                    return s(!1);
                },
                children: (function () {
                    var e = n.currentlyTyping || t;
                    if (l || n.currentlyTyping) return e;
                    var r,
                        i = [],
                        o = (e.match(/^([a-z0-9]+):\/\//) || [])[1];
                    if (!o) return e;
                    "http" !== o &&
                        "https" !== o &&
                        i.push(
                            jsxs(
                                "span",
                                {
                                    className:
                                        "addressbar-grey",
                                    children: [o, "://"],
                                },
                                "protocol"
                            )
                        );
                    try {
                        r = new URL(e.replace(o, "http"));
                    // eslint-disable-next-line no-unused-vars
                    } catch (u) {
                        return r;
                    }
                    var a = r.pathname + r.search;
                    return (
                        i.push(
                            jsx(
                                "span",
                                {
                                    children: r.host.replace(
                                        /^www\./,
                                        ""
                                    ),
                                },
                                "host"
                            )
                        ),
                        i.push(
                            jsx(
                                "span",
                                {
                                    className:
                                        "addressbar-grey",
                                    children: "/" === a ? "" : a,
                                },
                                "path"
                            )
                        ),
                        i
                    );
                })(),
            }),
        ],
    });
}

function BrowserBar({ state: t, onUrlEnter: n, value: i, forceUpdate: o }) {
    const u = getSessionContext();
    const [editing, setEditing] = useState(false);
    const contextMenuOptions = {
        width: 325,
        fontSize: 16,
        padTopBottom: 5,
        padLeftRight: 20,
    };

    // Helper to create menu items for history navigation
    const createMenuItems = (list, goFn) =>
        list.map((url, idx) => ({
            text: url,
            handler: () => {
                for (let r = idx + 1; --r; ) goFn();
                n(goFn());
            },
        }));

    return jsxs("div", {
        className: "browser-bar",
        children: [
            // Back button
            jsx(BrowserBarButton, {
                Img: uiIcons.backButton,
                disabled: !t.history.peekBackward(),
                onClick: () => n(t.history.goBackward()),
                contextMenuOptions,
                menuItems: createMenuItems(t.history.getBackwardList(), t.history.goBackward.bind(t.history)),
            }),
            jsx(Separator, {}),
            // Forward button
            jsx(BrowserBarButton, {
                Img: uiIcons.forwardButton,
                disabled: !t.history.peekForward(),
                onClick: () => n(t.history.goForward()),
                contextMenuOptions,
                menuItems: createMenuItems(t.history.getForwardList(), t.history.goForward.bind(t.history)),
            }),
            jsx(Separator, {}),
            // Reload/Stop button
            jsx(BrowserBarButton, {
                Img: t.iframeLoading ? uiIcons.stopButton : uiIcons.reloadButton,
                disabled: t.iframeLoading === 1,
                onClick: t.iframeLoading
                    ? () => {
                        t.iframe.contentWindow.stop();
                        t.iframeLoading = false;
                        o();
                    }
                    : () => n(t.currentUrl),
            }),
            jsx(Separator, { width: 8 }),
            // URL bar (editable or not)
            editing
                ? jsx(SearchSuggestions, {
                    onBlur: () => setEditing(false),
                    onUrlEnter: url => {
                        setEditing(false);
                        n(url);
                    },
                    state: t,
                })
                : jsx(Ye, {
                    onType: () => setEditing(true),
                    url: i || "",
                    onUrlEnter: n,
                    state: t,
                }),
            jsx(Separator, {}),
            // AB Cloak button
            jsx(BrowserBarButton, {
                Img: uiIcons.abCloakButton,
                tooltip: "Click to open AB cloaked. Ctrl+click to open full url.",
                onClick: async evt => {
                    if (evt.ctrlKey || evt.metaKey) {
                        window.open(await u.getFullProxyUrl(t.currentUrl), "_blank", "noopener");
                    } else {
                        const win = window.open();
                        createIframe(win, await u.getFullProxyUrl(t.currentUrl));
                        win.focus();
                    }
                },
                disabled: !t.currentUrl || t.currentUrl.startsWith("rh://"),
            }),
        ],
    });
}

function BrowserTab({ activeTab: n, chromeTabs: i }) {
    const o = getSessionContext();
    const [, forceUpdate] = useReducer(e => e + 1, 0);

    // Always define setTabTitle and goToUrl, even if n is null
    const setTabTitle = (title, favicon) => {
        if (i && n) i.updateTab(n, { title, favicon });
    };

    window.rhSession = o;

    const goToUrl = useCallback(async t => {
        if (!n) return;
        if (!t) return;
        if (t.toLowerCase().startsWith("javascript:")) {
            n.state.iframe && setTimeout(() => {
                n.state.iframe.contentWindow.Function(t.slice(11))();
            }, 0);
            return;
        }
        n.state.currentUrl = t;
        await o.prefetchLocalStorage(t);

        if (t.startsWith("rh://")) {
            if (n.state.iframe) {
                clearInterval(n.state.intervalId);
                n.state.iframe.remove();
                n.state.iframe = null;
            }
            forceUpdate();
            return;
        }

        if (n.state.defaultFaviconUrl) {
            URL.revokeObjectURL(n.state.defaultFaviconUrl);
            n.state.defaultFaviconUrl = null;
        }
        n.state.alreadyInitDefaultFaviconLoad = false;
        n.state.defaultFaviconFail = false;

        if (!n.state.iframe) {
            n.state.iframeLoading = false;
            n.state.iframe = document.createElement("iframe");
            n.state.iframe.className = "browser-tab-content-iframe";
            n.state.iframe.sandbox = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts";
            n.state.iframe.referrerPolicy = "no-referrer";
            n.state.intervalId = setInterval(() => {
                const win = n.state.iframe.contentWindow;
                if (win && win.document) {
                    if (n.state.iframeLoading === 1) {
                        n.state.iframeLoading = 2;
                        forceUpdate();
                    }
                    if (n.state.iframeLoading && win.document.readyState === "complete" && !win.rhCurrentlyReloadingFlag) {
                        n.state.iframeLoading = false;
                        forceUpdate();
                    }
                    if (!n.state.iframeLoading && win["%hammerhead%"]) {
                        let favicon = null;
                        const iconEl = win.document.querySelector('link[rel="icon"]');
                        const iconHref = iconEl?.href;
                        if (iconHref) {
                            favicon = win["%hammerhead%"].utils.url.getProxyUrl(iconHref);
                        } else if (n.state.defaultFaviconFail) {
                            favicon = "/static-assets/generic_globe.svg";
                        } else {
                            favicon = n.state.defaultFaviconUrl;
                            if (!n.state.alreadyInitDefaultFaviconLoad) {
                                n.state.alreadyInitDefaultFaviconLoad = true;
                                fetch(win["%hammerhead%"].utils.url.getProxyUrl("/favicon.ico"))
                                    .then(async r => {
                                        if (r.status !== 200) {
                                            n.state.defaultFaviconFail = true;
                                            setTabTitle(win.document.title, "/static-assets/generic_globe.svg");
                                            return;
                                        }
                                        const blob = await r.blob();
                                        n.state.defaultFaviconUrl = URL.createObjectURL(blob);
                                    })
                                    .catch(() => {
                                        n.state.defaultFaviconFail = true;
                                        setTabTitle(win.document.title, "/static-assets/generic_globe.svg");
                                    });
                            }
                        }
                        setTabTitle(win.document.title, favicon);
                        const url = win.__get$(win, "location").href;
                        if (url !== n.state.currentUrl) {
                            n.state.currentUrl = url;
                            forceUpdate();
                        }
                    }
                } else if (!n.state.iframeLoading) {
                    n.state.iframeLoading = 1;
                    forceUpdate();
                }
            }, 500);
        }

        setTabTitle("Loading...");
        if (n.state.iframe.contentWindow)
            n.state.iframe.contentWindow.rhCurrentlyReloadingFlag = true;
        n.state.iframeLoading = 1;
        n.state.iframe.src = await o.getProxyUrl(t);
        n.state.iframe.onload = () => {
            n.state.iframeLoading = false;
            forceUpdate();
        };
        forceUpdate();
    }, [n, o, forceUpdate, setTabTitle]);

    if (!n)
        return jsx(RenderInternalPage, {
            url: "rh://empty/",
            setTitle: () => {},
            goToUrl: () => {},
        });

    n.state ||= {};
    n.state.history ||= new TabHistory();
    n.state.history.go(n.state.currentUrl);

    return jsxs("div", {
        className: "browser-tab",
        children: [
            jsx(BrowserBar, {
                value: n.state.currentUrl,
                onUrlEnter: goToUrl,
                state: n.state,
                forceUpdate,
            }),
            jsx(BrowserTabContents, { iframe: n.state.iframe }),
            !n.state.iframe &&
                jsx(RenderInternalPage, {
                    url: n.state.currentUrl?.startsWith("rh://") ? n.state.currentUrl : "rh://new-tab/",
                    setTitle: setTabTitle,
                    goToUrl,
                }),
        ],
    });
}

export function BrowserUI() {
    const [chromeTabsInstance, setTabsInstance] = useState(null);
    const chromeTabsRef = useRef();
    const [activeTabEl, setActiveTabEl] = useState(null);
    const newTabRef = useRef();

    useEffect(function () {
        if (!chromeTabsInstance) {
            var e = new chromeTabs();
            window.chromeTabs = e;
            e.init(chromeTabsRef.current);
            setTabsInstance(e);
            var onResize = function () {
                var t =
                    e.tabContentWidths.pop() +
                    e.tabContentPositions.pop();
                isNaN(t)
                    ? (newTabRef.current.style.left = 0)
                    : (newTabRef.current.style.left = t + "px");
            },
            onActiveTabChange = function (e) {
                var t = e.detail;
                setActiveTabEl(t.tabEl), onResize();
            },
            onTabRemove = function (t) {
                var n, i = t.detail;
                onResize(),
                    null !== (n = i.tabEl.state) &&
                    void 0 !== n &&
                    n.iframe &&
                    (clearInterval(
                        i.tabEl.state.intervalId
                    ),
                        i.tabEl.state.iframe.remove()),
                    0 === e.tabEls.length && setActiveTabEl(null);
            };
            return (
                chromeTabsRef.current.addEventListener(
                    "activeTabChange",
                    onActiveTabChange
                ),
                chromeTabsRef.current.addEventListener("tabRemove", onTabRemove),
                window.addEventListener("resize", onResize),
                e.addTab(),
                sessionStorage.getItem("rh-firstrun") &&
                (sessionStorage.removeItem("rh-firstrun"),
                    e.addTab(),
                    (e.activeTabEl.state = {
                        currentUrl: "rh://welcome/",
                    })),
                function () {
                    chromeTabsRef.current &&
                        (chromeTabsRef.current.removeEventListener(
                            "activeTabChange",
                            onActiveTabChange
                        ),
                        chromeTabsRef.current.removeEventListener(
                            "tabRemove",
                            onTabRemove
                        ),
                        window.removeEventListener(
                            "resize",
                            onResize
                        ));
                }
            );
        }
    }, []);

    return (
        <div className="browser">
            <div className="chrome-tabs" ref={chromeTabsRef}>
                <div className="chrome-tabs-content">

                </div>
                <div className="chrome-tabs-bottom-bar">

                </div>
                <div className="chrome-tabs-newtab-btn" ref={newTabRef}>
                    <BrowserBarButton Img={uiIcons.addTabButton} tooltip="New tab" onClick={() => chromeTabsInstance.addTab()}></BrowserBarButton>
                </div>
            </div>
            <div className="chrome-tabs-optional-shadow-below-bottom-bar"></div>
            <BrowserTab activeTab={activeTabEl} chromeTabs={chromeTabsInstance}></BrowserTab>
            {/* jsx(ua, { activeTab: a, chromeTabs: t }), */}
        </div>
    );
}