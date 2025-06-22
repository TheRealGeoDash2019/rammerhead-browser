!(function () {
    var e = {
            575: function (module) {
                (module.exports = function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                }),
                    (module.exports.__esModule = !0),
                    (module.exports.default = module.exports);
            },
            913: function (module) {
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                (module.exports = function (e, n, r) {
                    return (
                        n && t(e.prototype, n),
                        r && t(e, r),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                }),
                    (module.exports.__esModule = !0),
                    (module.exports.default = module.exports);
            },
            132: function (module) {
                "use strict";
                var t = Object.prototype.hasOwnProperty,
                    n = Object.prototype.toString,
                    r = Object.defineProperty,
                    i = Object.getOwnPropertyDescriptor,
                    o = function (e) {
                        return "function" === typeof Array.isArray
                            ? Array.isArray(e)
                            : "[object Array]" === n.call(e);
                    },
                    a = function (e) {
                        if (!e || "[object Object]" !== n.call(e)) return !1;
                        var r,
                            i = t.call(e, "constructor"),
                            o =
                                e.constructor &&
                                e.constructor.prototype &&
                                t.call(
                                    e.constructor.prototype,
                                    "isPrototypeOf"
                                );
                        if (e.constructor && !i && !o) return !1;
                        for (r in e);
                        return "undefined" === typeof r || t.call(e, r);
                    },
                    u = function (e, t) {
                        r && "__proto__" === t.name
                            ? r(e, t.name, {
                                  enumerable: !0,
                                  configurable: !0,
                                  value: t.newValue,
                                  writable: !0,
                              })
                            : (e[t.name] = t.newValue);
                    },
                    l = function (e, n) {
                        if ("__proto__" === n) {
                            if (!t.call(e, n)) return;
                            if (i) return i(e, n).value;
                        }
                        return e[n];
                    };
                module.exports = function e() {
                    var t,
                        n,
                        r,
                        i,
                        s,
                        c,
                        f = arguments[0],
                        d = 1,
                        p = arguments.length,
                        h = !1;
                    for (
                        "boolean" === typeof f &&
                            ((h = f), (f = arguments[1] || {}), (d = 2)),
                            (null == f ||
                                ("object" !== typeof f &&
                                    "function" !== typeof f)) &&
                                (f = {});
                        d < p;
                        ++d
                    )
                        if (null != (t = arguments[d]))
                            for (n in t)
                                (r = l(f, n)),
                                    f !== (i = l(t, n)) &&
                                        (h && i && (a(i) || (s = o(i)))
                                            ? (s
                                                  ? ((s = !1),
                                                    (c = r && o(r) ? r : []))
                                                  : (c = r && a(r) ? r : {}),
                                              u(f, {
                                                  name: n,
                                                  newValue: e(h, c, i),
                                              }))
                                            : "undefined" !== typeof i &&
                                              u(f, { name: n, newValue: i }));
                    return f;
                };
            },
            791: function (module, exports, require) {
                "use strict";
                // REACT MAIN
                module.exports = require("react");
            },
            184: function (e, t, n) {
                "use strict";
                var r = n(791),
                    i = 60103;
                if (
                    ((t.Fragment = 60107),
                    "function" === typeof Symbol && Symbol.for)
                ) {
                    var o = Symbol.for;
                    (i = o("react.element")),
                        (t.Fragment = o("react.fragment"));
                }
                var a =
                        r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                            .ReactCurrentOwner,
                    u = Object.prototype.hasOwnProperty,
                    l = { key: !0, ref: !0, __self: !0, __source: !0 };
                function s(e, t, n) {
                    var r,
                        o = {},
                        s = null,
                        c = null;
                    for (r in (void 0 !== n && (s = "" + n),
                    void 0 !== t.key && (s = "" + t.key),
                    void 0 !== t.ref && (c = t.ref),
                    t))
                        u.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in (t = e.defaultProps))
                            void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: i,
                        type: e,
                        key: s,
                        ref: c,
                        props: o,
                        _owner: a.current,
                    };
                }
                (t.jsx = s), (t.jsxs = s);
            },
            192: function (e, t, n) {
                var r = n(575).default,
                    i = n(913).default,
                    o = function (e, t) {
                        return ((e % t) + t) % t;
                    },
                    a =
                        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~-",
                    u = "_rhs",
                    l = function () {
                        for (var e = "", t = a.split(""); t.length > 0; )
                            e += t.splice(
                                Math.floor(Math.random() * t.length),
                                1
                            )[0];
                        return e;
                    },
                    s = (function () {
                        "use strict";
                        function e() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : l();
                            r(this, e), (this.dictionary = t);
                        }
                        return (
                            i(e, [
                                {
                                    key: "shuffle",
                                    value: function (e) {
                                        if (e.startsWith(u)) return e;
                                        for (
                                            var t = "", n = 0;
                                            n < e.length;
                                            n++
                                        ) {
                                            var r = e.charAt(n),
                                                i = a.indexOf(r);
                                            "%" === r && e.length - n >= 3
                                                ? ((t += r),
                                                  (t += e.charAt(++n)),
                                                  (t += e.charAt(++n)))
                                                : (t +=
                                                      -1 === i
                                                          ? r
                                                          : this.dictionary.charAt(
                                                                o(
                                                                    i + n,
                                                                    a.length
                                                                )
                                                            ));
                                        }
                                        return u + t;
                                    },
                                },
                                {
                                    key: "unshuffle",
                                    value: function (e) {
                                        if (!e.startsWith(u)) return e;
                                        e = e.slice(u.length);
                                        for (
                                            var t = "", n = 0;
                                            n < e.length;
                                            n++
                                        ) {
                                            var r = e.charAt(n),
                                                i = this.dictionary.indexOf(r);
                                            "%" === r && e.length - n >= 3
                                                ? ((t += r),
                                                  (t += e.charAt(++n)),
                                                  (t += e.charAt(++n)))
                                                : (t +=
                                                      -1 === i
                                                          ? r
                                                          : a.charAt(
                                                                o(
                                                                    i - n,
                                                                    a.length
                                                                )
                                                            ));
                                        }
                                        return t;
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                (s.baseDictionary = a),
                    (s.shuffledIndicator = u),
                    (s.generateDictionary = l),
                    (e.exports = s);
            },
        },
        t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = (t[r] = { id: r, loaded: !1, exports: {} });
        return (
            e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
        );
    }
    (n.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                      return e.default;
                  }
                : function () {
                      return e;
                  };
        return n.d(t, { a: t }), t;
    }),
        (n.d = function (e, t) {
            for (var r in t)
                n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.g = (function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        })()),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.r = function (e) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (function () {
            "use strict";
            var e = {};
            n.r(e),
                n.d(e, {
                    attentionMarkers: function () {
                        return li;
                    },
                    contentInitial: function () {
                        return ni;
                    },
                    disable: function () {
                        return si;
                    },
                    document: function () {
                        return ti;
                    },
                    flow: function () {
                        return ii;
                    },
                    flowInitial: function () {
                        return ri;
                    },
                    insideSpan: function () {
                        return ui;
                    },
                    string: function () {
                        return oi;
                    },
                    text: function () {
                        return ai;
                    },
                });
            var t = {};
            n.r(t),
                n.d(t, {
                    boolean: function () {
                        return io;
                    },
                    booleanish: function () {
                        return oo;
                    },
                    commaOrSpaceSeparated: function () {
                        return co;
                    },
                    commaSeparated: function () {
                        return so;
                    },
                    number: function () {
                        return uo;
                    },
                    overloadedBoolean: function () {
                        return ao;
                    },
                    spaceSeparated: function () {
                        return lo;
                    },
                });
            var React = require("react"),
                ReactDOM = require("react-dom");
            function executeAsyncStep(generator, resolve, reject, next, _throw, key, arg) {
                try {
                    var info = generator[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    Promise.resolve(value).then(next, _throw);
                }
            }
            function asyncToGenerator(generatorFn) {
                return function () {
                    var self = this;
                    var args = arguments;
                    return new Promise(function (resolve, reject) {
                        var generator = generatorFn.apply(self, args);
                        function next(value) {
                            executeAsyncStep(generator, resolve, reject, next, _throw, "next", value);
                        }
                        function _throw(err) {
                            executeAsyncStep(generator, resolve, reject, next, _throw, "throw", err);
                        }
                        next(undefined);
                    });
                };
            }
            function assertIsArray(arr) {
                if (Array.isArray(arr)) return arr;
            }
            function arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) {
                    len = arr.length;
                }
                const result = new Array(len);
                for (let i = 0; i < len; i++) {
                    result[i] = arr[i];
                }
                return result;
            }
            function unsupportedIterableToArray(source, len) {
                if (!source) return;
                if (typeof source === "string") {
                    return arrayLikeToArray(source, len);
                }
                let className = Object.prototype.toString.call(source).slice(8, -1);
                if (className === "Object" && source.constructor) {
                    className = source.constructor.name;
                }
                if (className === "Map" || className === "Set") {
                    return Array.from(source);
                }
                if (className === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(className)) {
                    return arrayLikeToArray(source, len);
                }
            }
            function throwNonIterableError() {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            }
            function destructureToArray(iterable, limit) {
                // Helper to handle standard iterators
                function iterateAndSlice(iter, limit) {
                    const iterableSymbol = (typeof Symbol !== "undefined" && iter[Symbol.iterator]) || iter["@@iterator"];
                    if (iterableSymbol == null) return;

                    const iterator = iterableSymbol.call(iter);
                    const result = [];
                    let isDone = false;
                    let hasError = false;
                    let error;

                    try {
                        let step;
                        while (!(isDone = (step = iterator.next()).done)) {
                            result.push(step.value);
                            if (limit && result.length === limit) break;
                        }
                    } catch (err) {
                        hasError = true;
                        error = err;
                    } finally {
                        try {
                            if (!isDone && iterator.return != null) {
                                iterator.return();
                            }
                        } finally {
                            if (hasError) throw error;
                        }
                    }
                    return result;
                }

                return (
                    assertIsArray(iterable) ||
                    iterateAndSlice(iterable, limit) ||
                    unsupportedIterableToArray(iterable, limit) ||
                    throwNonIterableError()
                );
            }
            var d = require("regenerator-runtime"),
                p = n.n(d);
            function h(e) {
                return v.apply(this, arguments);
            }
            function v() {
                return (v = asyncToGenerator(
                    p().mark(function e(t) {
                        return p().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return e.abrupt(
                                            "return",
                                            new Promise(function (e, n) {
                                                var r = indexedDB.open(
                                                    "rammerhead-session-" + t,
                                                    1
                                                );
                                                (r.onerror = n),
                                                    (r.onupgradeneeded =
                                                        function () {
                                                            var e = r.result;
                                                            e.createObjectStore(
                                                                "browsing-history",
                                                                {
                                                                    keyPath:
                                                                        "timestamp",
                                                                }
                                                            ),
                                                                e.createObjectStore(
                                                                    "data",
                                                                    {
                                                                        keyPath:
                                                                            "type",
                                                                    }
                                                                ),
                                                                e.createObjectStore(
                                                                    "localStorage",
                                                                    {
                                                                        keyPath:
                                                                            "origin",
                                                                    }
                                                                ),
                                                                sessionStorage.setItem(
                                                                    "rh-firstrun",
                                                                    "true"
                                                                );
                                                        }),
                                                    (r.onsuccess = function (
                                                        t
                                                    ) {
                                                        return e(
                                                            t.target.result
                                                        );
                                                    });
                                            })
                                        );
                                    case 1:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function g(e, t) {
                var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(e) ||
                        (n = unsupportedIterableToArray(e)) ||
                        (t && e && "number" === typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: i,
                        };
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                }
                var o,
                    a = !0,
                    u = !1;
                return {
                    s: function () {
                        n = n.call(e);
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (u = !0), (o = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (u) throw o;
                        }
                    },
                };
            }
            function m(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function b(e, t, n) {
                return (
                    t && y(e.prototype, t),
                    n && y(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                );
            }
            function w(e, t) {
                return (
                    (w =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        }),
                    w(e, t)
                );
            }
            function x(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function"
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && w(e, t);
            }
            function E(e) {
                return (
                    (E = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    E(e)
                );
            }
            function k() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return (
                        Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                    );
                } catch (e) {
                    return !1;
                }
            }
            function S(e) {
                return (
                    (S =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    S(e)
                );
            }
            function A(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function C(e, t) {
                if (t && ("object" === S(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError(
                        "Derived constructors may only return object or undefined"
                    );
                return A(e);
            }
            function O(e) {
                var t = k();
                return function () {
                    var n,
                        r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return C(this, n);
                };
            }
            function T(e, t, n) {
                return (
                    (T = k()
                        ? Reflect.construct
                        : function (e, t, n) {
                              var r = [null];
                              r.push.apply(r, t);
                              var i = new (Function.bind.apply(e, r))();
                              return n && w(i, n.prototype), i;
                          }),
                    T.apply(null, arguments)
                );
            }
            function _(e) {
                var t = "function" === typeof Map ? new Map() : void 0;
                return (
                    (_ = function (e) {
                        if (
                            null === e ||
                            ((n = e),
                            -1 ===
                                Function.toString
                                    .call(n)
                                    .indexOf("[native code]"))
                        )
                            return e;
                        var n;
                        if ("function" !== typeof e)
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        if ("undefined" !== typeof t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, r);
                        }
                        function r() {
                            return T(e, arguments, E(this).constructor);
                        }
                        return (
                            (r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                            w(r, e)
                        );
                    }),
                    _(e)
                );
            }
            var I = (function (e) {
                x(n, e);
                var t = O(n);
                function n() {
                    return m(this, n), t.apply(this, arguments);
                }
                return b(n);
            })(_(Error));
            Object.defineProperty(I.prototype, "name", {
                value: "SetIntervalAsyncError",
            });
            function N(e) {
                if ("function" !== typeof e)
                    throw new I(
                        'Invalid argument: "handler". Expected a function.'
                    );
            }
            function L(e) {
                if (!("number" === typeof e && 10 <= e))
                    throw new I(
                        'Invalid argument: "interval". Expected a number greater than or equal to '.concat(
                            10,
                            "."
                        )
                    );
            }
            function R(e) {
                if (
                    !(e && "stopped" in e && "timeouts" in e && "promises" in e)
                )
                    throw new I(
                        'Invalid argument: "timer". Expected an instance of SetIntervalAsyncTimer.'
                    );
            }
            function P(e) {
                return D.apply(this, arguments);
            }
            function D() {
                return (D = asyncToGenerator(
                    d.mark(function e(t) {
                        var n, r;
                        return d.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            for (n in (R(t),
                                            (t.stopped = !0),
                                            t.timeouts))
                                                clearTimeout(t.timeouts[n]),
                                                    delete t.timeouts[n];
                                            e.t0 = d.keys(t.promises);
                                        case 4:
                                            if ((e.t1 = e.t0()).done) {
                                                e.next = 16;
                                                break;
                                            }
                                            return (
                                                (r = e.t1.value),
                                                (e.prev = 6),
                                                (e.next = 9),
                                                t.promises[r]
                                            );
                                        case 9:
                                            e.next = 13;
                                            break;
                                        case 11:
                                            (e.prev = 11), (e.t2 = e.catch(6));
                                        case 13:
                                            delete t.promises[r], (e.next = 4);
                                            break;
                                        case 16:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[6, 11]]
                        );
                    })
                )).apply(this, arguments);
            }
            var M = b(function e() {
                m(this, e),
                    (this.stopped = !1),
                    (this.timeouts = {}),
                    (this.promises = {});
            });
            function j(e) {
                return e === Number.MAX_SAFE_INTEGER ? 0 : e + 1;
            }
            function F() {
                return B.apply(this, arguments);
            }
            function B() {
                return (B = asyncToGenerator(
                    d.mark(function e() {
                        return d.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function U(e, t) {
                N(e), L(t);
                for (
                    var n = new M(),
                        r = 0,
                        i = arguments.length,
                        o = new Array(i > 2 ? i - 2 : 0),
                        a = 2;
                    a < i;
                    a++
                )
                    o[a - 2] = arguments[a];
                return (
                    (n.timeouts[r] = setTimeout.apply(
                        void 0,
                        [z, t, n, r, e, t].concat(o)
                    )),
                    n
                );
            }
            function z(e, t, n, r) {
                delete e.timeouts[t];
                for (
                    var i = arguments.length,
                        o = new Array(i > 4 ? i - 4 : 0),
                        a = 4;
                    a < i;
                    a++
                )
                    o[a - 4] = arguments[a];
                e.promises[t] = H.apply(void 0, [e, t, n, r].concat(o));
            }
            function H(e, t, n, r) {
                return W.apply(this, arguments);
            }
            function W() {
                return (
                    (W = asyncToGenerator(
                        d.mark(function e(t, n, r, i) {
                            var o,
                                a,
                                u,
                                l,
                                s = arguments;
                            return d.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), F();
                                            case 2:
                                                for (
                                                    o = s.length,
                                                        a = new Array(
                                                            o > 4 ? o - 4 : 0
                                                        ),
                                                        u = 4;
                                                    u < o;
                                                    u++
                                                )
                                                    a[u - 4] = s[u];
                                                return (
                                                    (e.prev = 3),
                                                    (e.next = 6),
                                                    r.apply(void 0, a)
                                                );
                                            case 6:
                                                return (
                                                    (e.prev = 6),
                                                    t.stopped ||
                                                        ((l = j(n)),
                                                        (t.timeouts[l] =
                                                            setTimeout.apply(
                                                                void 0,
                                                                [
                                                                    z,
                                                                    i,
                                                                    t,
                                                                    l,
                                                                    r,
                                                                    i,
                                                                ].concat(a)
                                                            ))),
                                                    delete t.promises[n],
                                                    e.finish(6)
                                                );
                                            case 10:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[3, , 6, 10]]
                            );
                        })
                    )),
                    W.apply(this, arguments)
                );
            }
            function G(e) {
                return $.apply(this, arguments);
            }
            function $() {
                return ($ = asyncToGenerator(
                    p().mark(function e(t) {
                        return p().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return e.abrupt(
                                            "return",
                                            new Promise(function (e, n) {
                                                (t.onsuccess = e),
                                                    (t.onerror = n);
                                            })
                                        );
                                    case 1:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            var V = n(192),
                X = n.n(V),
                Y = (function () {
                    function e(t) {
                        m(this, e),
                            (this.db = t),
                            (this.speedTicketActive = !1),
                            (this.speedTicketErr = null);
                    }
                    return (
                        b(e, [
                            {
                                key: "init",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t,
                                                n,
                                                r,
                                                i,
                                                o,
                                                u,
                                                l,
                                                s = this;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (t =
                                                                        localStorage.getItem(
                                                                            "rh-speedticket"
                                                                        )),
                                                                    (e.next = 3),
                                                                    fetch(
                                                                        t
                                                                            ? "/api/generateTicketedSessionId?code=" +
                                                                                  t
                                                                            : "/api/generateSessionId"
                                                                    )
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.next = 5),
                                                                    e.sent.json()
                                                                );
                                                            case 5:
                                                                return (
                                                                    (n =
                                                                        e.sent),
                                                                    (r = n.id),
                                                                    (i =
                                                                        n.signedId),
                                                                    (this.id =
                                                                        r),
                                                                    (this.signedId =
                                                                        i),
                                                                    (e.next = 12),
                                                                    this.getSessionData()
                                                                );
                                                            case 12:
                                                                if (e.sent) {
                                                                    e.next = 22;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 15),
                                                                    fetch(
                                                                        "/api/generateSession"
                                                                    )
                                                                );
                                                            case 15:
                                                                return (
                                                                    (e.next = 17),
                                                                    e.sent.json()
                                                                );
                                                            case 17:
                                                                return (
                                                                    (o =
                                                                        e.sent),
                                                                    (u =
                                                                        o.data),
                                                                    (l =
                                                                        o.signature),
                                                                    (e.next = 22),
                                                                    this.updateSessionData(
                                                                        u,
                                                                        l
                                                                    )
                                                                );
                                                            case 22:
                                                                return (
                                                                    (e.next = 24),
                                                                    this.setTabFavicon()
                                                                );
                                                            case 24:
                                                                return (
                                                                    (e.next = 26),
                                                                    this.setTabTitle()
                                                                );
                                                            case 26:
                                                                return (
                                                                    (this.syncCount = 0),
                                                                    (e.next = 29),
                                                                    this.syncSession()
                                                                );
                                                            case 29:
                                                                return (
                                                                    (e.next = 31),
                                                                    this.reshuffle()
                                                                );
                                                            case 31:
                                                                return (
                                                                    (this.syncId =
                                                                        U(
                                                                            asyncToGenerator(
                                                                                p().mark(
                                                                                    function e() {
                                                                                        return p().wrap(
                                                                                            function (
                                                                                                e
                                                                                            ) {
                                                                                                for (;;)
                                                                                                    switch (
                                                                                                        (e.prev =
                                                                                                            e.next)
                                                                                                    ) {
                                                                                                        case 0:
                                                                                                            return (
                                                                                                                s.syncLocalStorage(),
                                                                                                                (e.next = 3),
                                                                                                                s.syncSession()
                                                                                                            );
                                                                                                        case 3:
                                                                                                            return (
                                                                                                                (e.next = 5),
                                                                                                                s.checkSpeedTicketCode()
                                                                                                            );
                                                                                                        case 5:
                                                                                                        case "end":
                                                                                                            return e.stop();
                                                                                                    }
                                                                                            },
                                                                                            e
                                                                                        );
                                                                                    }
                                                                                )
                                                                            ),
                                                                            1e4
                                                                        )),
                                                                    window.addEventListener(
                                                                        "beforeunload",
                                                                        function () {
                                                                            return s.synchronousClose();
                                                                        }
                                                                    ),
                                                                    localStorage.setItem(
                                                                        "rhdatabase-" +
                                                                            this
                                                                                .id,
                                                                        this.db
                                                                            .name
                                                                    ),
                                                                    this.updateAliveSessionId(),
                                                                    (this.updateAliveId =
                                                                        setInterval(
                                                                            function () {
                                                                                return s.updateAliveSessionId();
                                                                            },
                                                                            5e3
                                                                        )),
                                                                    this.cleanupStaleSessionIds(),
                                                                    (e.next = 39),
                                                                    fetch(
                                                                        "/CHANGELOG.md"
                                                                    )
                                                                );
                                                            case 39:
                                                                return (
                                                                    (e.next = 41),
                                                                    e.sent.text()
                                                                );
                                                            case 41:
                                                                return (
                                                                    (e.t0 =
                                                                        e.sent),
                                                                    (e.next = 44),
                                                                    fetch(
                                                                        "/version"
                                                                    )
                                                                );
                                                            case 44:
                                                                return (
                                                                    (e.next = 46),
                                                                    e.sent.text()
                                                                );
                                                            case 46:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    (e.next = 49),
                                                                    fetch(
                                                                        "/version-opensource"
                                                                    )
                                                                );
                                                            case 49:
                                                                return (
                                                                    (e.next = 51),
                                                                    e.sent.text()
                                                                );
                                                            case 51:
                                                                (e.t2 = e.sent),
                                                                    (this.staticAssets =
                                                                        {
                                                                            changelog:
                                                                                e.t0,
                                                                            version:
                                                                                e.t1,
                                                                            openSourceVersion:
                                                                                e.t2,
                                                                        });
                                                                try {
                                                                    this.staticAssets.bashggLink =
                                                                        "https://www.sunnyvale.gg/?utm_source=rammerhead&utm_medium=banner&utm_campaign=rh-bash-general";
                                                                } catch (c) {
                                                                    console.error(
                                                                        c
                                                                    );
                                                                }
                                                            case 54:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "submitSpeedTicketCode",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n, r, i, o, a, u;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                if (t) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return",
                                                                    "must specify code"
                                                                );
                                                            case 2:
                                                                if (
                                                                    36 ===
                                                                    t.length
                                                                ) {
                                                                    e.next = 4;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return",
                                                                    "invalid code"
                                                                );
                                                            case 4:
                                                                return (
                                                                    (e.next = 6),
                                                                    fetch(
                                                                        "/api/speedTicketApply?id="
                                                                            .concat(
                                                                                this
                                                                                    .id,
                                                                                "&code="
                                                                            )
                                                                            .concat(
                                                                                t
                                                                            )
                                                                    )
                                                                );
                                                            case 6:
                                                                return (
                                                                    (e.next = 8),
                                                                    e.sent.text()
                                                                );
                                                            case 8:
                                                                if (
                                                                    "session not found" !==
                                                                    (n = e.sent)
                                                                ) {
                                                                    e.next = 15;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 12),
                                                                    this.syncSession()
                                                                );
                                                            case 12:
                                                                return (
                                                                    (e.next = 14),
                                                                    this.submitSpeedTicketCode(
                                                                        t
                                                                    )
                                                                );
                                                            case 14:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.sent
                                                                );
                                                            case 15:
                                                                (e.prev = 15),
                                                                    (r =
                                                                        JSON.parse(
                                                                            n
                                                                        )),
                                                                    (e.next = 22);
                                                                break;
                                                            case 19:
                                                                return (
                                                                    (e.prev = 19),
                                                                    (e.t0 =
                                                                        e.catch(
                                                                            15
                                                                        )),
                                                                    e.abrupt(
                                                                        "return",
                                                                        "Unable to contact server"
                                                                    )
                                                                );
                                                            case 22:
                                                                if (!r.err) {
                                                                    e.next = 24;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return",
                                                                    r.err
                                                                );
                                                            case 24:
                                                                (this.speedTicketActive =
                                                                    !0),
                                                                    localStorage.setItem(
                                                                        "rh-speedticket",
                                                                        t
                                                                    ),
                                                                    (i = 0),
                                                                    (o =
                                                                        Object.keys(
                                                                            localStorage
                                                                        ));
                                                            case 27:
                                                                if (
                                                                    !(
                                                                        i <
                                                                        o.length
                                                                    )
                                                                ) {
                                                                    e.next = 36;
                                                                    break;
                                                                }
                                                                if (
                                                                    !(a =
                                                                        o[
                                                                            i
                                                                        ]).startsWith(
                                                                        "rh-speedticket-settings-"
                                                                    )
                                                                ) {
                                                                    e.next = 33;
                                                                    break;
                                                                }
                                                                return (
                                                                    (u =
                                                                        a.split(
                                                                            "-"
                                                                        )[3]),
                                                                    (e.next = 33),
                                                                    fetch(
                                                                        "/api/speedTicketApplySettings?id="
                                                                            .concat(
                                                                                this
                                                                                    .id,
                                                                                "&"
                                                                            )
                                                                            .concat(
                                                                                u,
                                                                                "="
                                                                            )
                                                                            .concat(
                                                                                localStorage.getItem(
                                                                                    a
                                                                                )
                                                                            )
                                                                    )
                                                                );
                                                            case 33:
                                                                i++,
                                                                    (e.next = 27);
                                                                break;
                                                            case 36:
                                                                return e.abrupt(
                                                                    "return",
                                                                    null
                                                                );
                                                            case 37:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[15, 19]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "resubmitSpeedTicketCode",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t, n;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    (t =
                                                                        localStorage.getItem(
                                                                            "rh-speedticket"
                                                                        ))
                                                                ) {
                                                                    e.next = 3;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return"
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.next = 5),
                                                                    this.submitSpeedTicketCode(
                                                                        t
                                                                    )
                                                                );
                                                            case 5:
                                                                (n = e.sent) &&
                                                                    ((this.speedTicketActive =
                                                                        !1),
                                                                    (this.speedTicketErr =
                                                                        n));
                                                            case 7:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "checkSpeedTicketCode",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    this
                                                                        .speedTicketActive
                                                                ) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return"
                                                                );
                                                            case 2:
                                                                return (
                                                                    (e.next = 4),
                                                                    fetch(
                                                                        "/api/speedTicketSettings?id=".concat(
                                                                            this
                                                                                .id
                                                                        )
                                                                    )
                                                                );
                                                            case 4:
                                                                return (
                                                                    (e.next = 6),
                                                                    e.sent.text()
                                                                );
                                                            case 6:
                                                                if (
                                                                    (t =
                                                                        e.sent).startsWith(
                                                                        "{"
                                                                    )
                                                                ) {
                                                                    e.next = 19;
                                                                    break;
                                                                }
                                                                if (
                                                                    "cannot find speed ticket associated with current session" !==
                                                                    t
                                                                ) {
                                                                    e.next = 14;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 11),
                                                                    this.resubmitSpeedTicketCode()
                                                                );
                                                            case 11:
                                                                return (
                                                                    (e.next = 13),
                                                                    this.checkSpeedTicketCode()
                                                                );
                                                            case 13:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.sent
                                                                );
                                                            case 14:
                                                                if (
                                                                    "session not found" !==
                                                                    t
                                                                ) {
                                                                    e.next = 17;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 17),
                                                                    this.syncSession()
                                                                );
                                                            case 17:
                                                                (this.speedTicketActive =
                                                                    !1),
                                                                    (this.speedTicketErr =
                                                                        t);
                                                            case 19:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "cleanupStaleSessionIds",
                                value: function (e) {
                                    var t;
                                    try {
                                        t = JSON.parse(
                                            localStorage.getItem(
                                                "rhbrowser-alive-sessionids"
                                            ) || "{}"
                                        );
                                    } catch (a) {
                                        console.warn(
                                            "while trying to cleanup stale session ids: error parsing rhbrowser-alive-sessionids localStorage data. session data in other tabs may be deleted"
                                        ),
                                            (t = {});
                                    }
                                    var n = Date.now();
                                    for (var r in localStorage)
                                        if (r.startsWith("rhdatabase-")) {
                                            var i = r.split("-")[1];
                                            i &&
                                                (!t[i] ||
                                                    n - t[i] > 216e5 ||
                                                    (e && i === this.id)) &&
                                                (localStorage.removeItem(r),
                                                delete t[i]);
                                        }
                                    for (var o in t)
                                        localStorage.getItem(
                                            "rhdatabase-" + o
                                        ) || delete t[o];
                                    localStorage.setItem(
                                        "rhbrowser-alive-sessionids",
                                        JSON.stringify(t)
                                    );
                                },
                            },
                            {
                                key: "updateAliveSessionId",
                                value: function () {
                                    var e;
                                    try {
                                        e = JSON.parse(
                                            localStorage.getItem(
                                                "rhbrowser-alive-sessionids"
                                            ) || "{}"
                                        );
                                    } catch (t) {
                                        console.warn(
                                            "while trying to update alive session id: error parsing rhbrowser-alive-sessionids localStorage data. session data in other tabs may be deleted"
                                        ),
                                            (e = {});
                                    }
                                    (e[this.id] = Date.now()),
                                        localStorage.setItem(
                                            "rhbrowser-alive-sessionids",
                                            JSON.stringify(e)
                                        );
                                },
                            },
                            {
                                key: "syncLocalStorage",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                e.t0 =
                                                                    p().keys(
                                                                        localStorage
                                                                    );
                                                            case 1:
                                                                if (
                                                                    (e.t1 =
                                                                        e.t0())
                                                                        .done
                                                                ) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                if (
                                                                    !(t =
                                                                        e.t1
                                                                            .value).startsWith(
                                                                        "rhbrowser|" +
                                                                            this
                                                                                .id
                                                                    )
                                                                ) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                if (
                                                                    !localStorage[
                                                                        "notSynced|" +
                                                                            t
                                                                    ]
                                                                ) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 7),
                                                                    this._putData(
                                                                        "localStorage",
                                                                        {
                                                                            origin: t
                                                                                .split(
                                                                                    "|"
                                                                                )
                                                                                .pop(),
                                                                            data: localStorage[
                                                                                t
                                                                            ],
                                                                        }
                                                                    )
                                                                );
                                                            case 7:
                                                                delete localStorage[
                                                                    "notSynced|" +
                                                                        t
                                                                ];
                                                            case 8:
                                                                e.next = 1;
                                                                break;
                                                            case 10:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "syncSession",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n, r, i, o;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    this
                                                                        .syncCount++,
                                                                    (e.next = 3),
                                                                    fetch(
                                                                        "/api/sessionStatus?id=" +
                                                                            encodeURIComponent(
                                                                                this
                                                                                    .id
                                                                            )
                                                                    )
                                                                );
                                                            case 3:
                                                                if (
                                                                    ((e.t0 =
                                                                        e.sent.status),
                                                                    404 !==
                                                                        e.t0)
                                                                ) {
                                                                    e.next = 23;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.t1 =
                                                                        fetch),
                                                                    (e.t2 =
                                                                        "/api/uploadSession?id="
                                                                            .concat(
                                                                                encodeURIComponent(
                                                                                    this
                                                                                        .id
                                                                                ),
                                                                                "&signedId="
                                                                            )
                                                                            .concat(
                                                                                encodeURIComponent(
                                                                                    this
                                                                                        .signedId
                                                                                ),
                                                                                "&signed="
                                                                            )),
                                                                    (e.t3 =
                                                                        encodeURIComponent),
                                                                    (e.next = 10),
                                                                    this.getSessionSignature()
                                                                );
                                                            case 10:
                                                                return (
                                                                    (e.t4 =
                                                                        e.sent),
                                                                    (e.t5 = (0,
                                                                    e.t3)(
                                                                        e.t4
                                                                    )),
                                                                    (e.t6 =
                                                                        e.t2.concat.call(
                                                                            e.t2,
                                                                            e.t5
                                                                        )),
                                                                    (e.next = 15),
                                                                    this.getSessionData()
                                                                );
                                                            case 15:
                                                                return (
                                                                    (e.t7 =
                                                                        e.sent),
                                                                    (e.t8 = {
                                                                        method: "POST",
                                                                        body: e.t7,
                                                                    }),
                                                                    (e.next = 19),
                                                                    e.t1(
                                                                        e.t6,
                                                                        e.t8
                                                                    )
                                                                );
                                                            case 19:
                                                                return (
                                                                    (e.next = 21),
                                                                    this.resubmitSpeedTicketCode()
                                                                );
                                                            case 21:
                                                                e.next = 35;
                                                                break;
                                                            case 23:
                                                                if (
                                                                    this
                                                                        .syncCount %
                                                                        3 !==
                                                                        0 &&
                                                                    !t
                                                                ) {
                                                                    e.next = 35;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 26),
                                                                    fetch(
                                                                        "/api/getSession?id="
                                                                            .concat(
                                                                                encodeURIComponent(
                                                                                    this
                                                                                        .id
                                                                                ),
                                                                                "&signedId="
                                                                            )
                                                                            .concat(
                                                                                encodeURIComponent(
                                                                                    this
                                                                                        .signedId
                                                                                )
                                                                            )
                                                                    )
                                                                );
                                                            case 26:
                                                                if (
                                                                    200 !==
                                                                    (n = e.sent)
                                                                        .status
                                                                ) {
                                                                    e.next = 35;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 30),
                                                                    n.json()
                                                                );
                                                            case 30:
                                                                return (
                                                                    (r =
                                                                        e.sent),
                                                                    (i =
                                                                        r.data),
                                                                    (o =
                                                                        r.signature),
                                                                    (e.next = 35),
                                                                    this.updateSessionData(
                                                                        i,
                                                                        o
                                                                    )
                                                                );
                                                            case 35:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "reshuffle",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this.isShufflingEnabled()
                                                                );
                                                            case 2:
                                                                if (!e.sent) {
                                                                    e.next = 7;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 5),
                                                                    fetch(
                                                                        "/api/configShuffling?id=".concat(
                                                                            encodeURIComponent(
                                                                                this
                                                                                    .id
                                                                            ),
                                                                            "&enable=true&reshuffle=true"
                                                                        )
                                                                    )
                                                                );
                                                            case 5:
                                                                return (
                                                                    (e.next = 7),
                                                                    this.syncSession(
                                                                        !0
                                                                    )
                                                                );
                                                            case 7:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "prefetchLocalStorage",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._prefetchLocalStorage(
                                                                        t.replace(
                                                                            /^http:/,
                                                                            "https:"
                                                                        )
                                                                    )
                                                                );
                                                            case 2:
                                                                return (
                                                                    (e.next = 4),
                                                                    this._prefetchLocalStorage(
                                                                        t.replace(
                                                                            /^https:/,
                                                                            "http:"
                                                                        )
                                                                    )
                                                                );
                                                            case 4:
                                                                return (
                                                                    (e.next = 6),
                                                                    this._prefetchLocalStorage(
                                                                        t.replace(
                                                                            /^http:\/\//,
                                                                            "https://www."
                                                                        )
                                                                    )
                                                                );
                                                            case 6:
                                                                return (
                                                                    (e.next = 8),
                                                                    this._prefetchLocalStorage(
                                                                        t.replace(
                                                                            /^https:\/\//,
                                                                            "http://www."
                                                                        )
                                                                    )
                                                                );
                                                            case 8:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "_prefetchLocalStorage",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n, r, i;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                (e.prev = 0),
                                                                    (n =
                                                                        new URL(
                                                                            t
                                                                        )),
                                                                    (e.next = 7);
                                                                break;
                                                            case 4:
                                                                return (
                                                                    (e.prev = 4),
                                                                    (e.t0 =
                                                                        e.catch(
                                                                            0
                                                                        )),
                                                                    e.abrupt(
                                                                        "return"
                                                                    )
                                                                );
                                                            case 7:
                                                                if (
                                                                    ((r =
                                                                        "rhbrowser|"
                                                                            .concat(
                                                                                this
                                                                                    .id,
                                                                                "|"
                                                                            )
                                                                            .concat(
                                                                                n.origin
                                                                            )),
                                                                    localStorage.getItem(
                                                                        r
                                                                    ))
                                                                ) {
                                                                    e.next = 16;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 11),
                                                                    this._getData(
                                                                        "localStorage",
                                                                        n.origin
                                                                    )
                                                                );
                                                            case 11:
                                                                if (
                                                                    ((e.t1 =
                                                                        e.sent),
                                                                    e.t1)
                                                                ) {
                                                                    e.next = 14;
                                                                    break;
                                                                }
                                                                e.t1 = {};
                                                            case 14:
                                                                (i =
                                                                    e.t1
                                                                        .data) &&
                                                                    localStorage.setItem(
                                                                        r,
                                                                        i
                                                                    );
                                                            case 16:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[0, 4]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "updateSessionData",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t, n) {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._putData(
                                                                        "data",
                                                                        {
                                                                            type: "sessionData",
                                                                            sessionData:
                                                                                t,
                                                                        }
                                                                    )
                                                                );
                                                            case 2:
                                                                return (
                                                                    (e.next = 4),
                                                                    this._putData(
                                                                        "data",
                                                                        {
                                                                            type: "sessionDataSignature",
                                                                            signature:
                                                                                n,
                                                                        }
                                                                    )
                                                                );
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t, n) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getSessionData",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._getData(
                                                                        "data",
                                                                        "sessionData"
                                                                    )
                                                                );
                                                            case 2:
                                                                if (
                                                                    ((e.t0 =
                                                                        e.sent),
                                                                    e.t0)
                                                                ) {
                                                                    e.next = 5;
                                                                    break;
                                                                }
                                                                e.t0 = {};
                                                            case 5:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.t0
                                                                        .sessionData
                                                                );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getSessionSignature",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._getData(
                                                                        "data",
                                                                        "sessionDataSignature"
                                                                    )
                                                                );
                                                            case 2:
                                                                if (
                                                                    ((e.t0 =
                                                                        e.sent),
                                                                    e.t0)
                                                                ) {
                                                                    e.next = 5;
                                                                    break;
                                                                }
                                                                e.t0 = {};
                                                            case 5:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.t0
                                                                        .signature
                                                                );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getShuffler",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.t0 =
                                                                        JSON),
                                                                    (e.next = 3),
                                                                    this.getSessionData()
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    (t =
                                                                        e.t0.parse.call(
                                                                            e.t0,
                                                                            e.t1
                                                                        ).data
                                                                            .shuffleDict),
                                                                    e.abrupt(
                                                                        "return",
                                                                        t
                                                                            ? new (X())(
                                                                                  t
                                                                              )
                                                                            : null
                                                                    )
                                                                );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProxyUrl",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n,
                                                r,
                                                i = arguments;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (n =
                                                                        i.length >
                                                                            1 &&
                                                                        void 0 !==
                                                                            i[1]
                                                                            ? i[1]
                                                                            : ""),
                                                                    (e.next = 3),
                                                                    this.getShuffler()
                                                                );
                                                            case 3:
                                                                return (
                                                                    (r =
                                                                        e.sent),
                                                                    e.abrupt(
                                                                        "return",
                                                                        "/"
                                                                            .concat(
                                                                                this
                                                                                    .id
                                                                            )
                                                                            .concat(
                                                                                n,
                                                                                "/"
                                                                            )
                                                                            .concat(
                                                                                r
                                                                                    ? r.shuffle(
                                                                                          t
                                                                                      )
                                                                                    : t
                                                                            )
                                                                    )
                                                                );
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getFullProxyUrl",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n,
                                                r = arguments;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (n =
                                                                        r.length >
                                                                            1 &&
                                                                        void 0 !==
                                                                            r[1]
                                                                            ? r[1]
                                                                            : ""),
                                                                    (e.t0 = ""
                                                                        .concat(
                                                                            location.protocol,
                                                                            "//"
                                                                        )
                                                                        .concat(
                                                                            location.host
                                                                        )),
                                                                    (e.next = 4),
                                                                    this.getProxyUrl(
                                                                        t,
                                                                        n
                                                                    )
                                                                );
                                                            case 4:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    e.abrupt(
                                                                        "return",
                                                                        e.t0.concat.call(
                                                                            e.t0,
                                                                            e.t1
                                                                        )
                                                                    )
                                                                );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "fetchProxy",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t, n) {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.t0 =
                                                                        fetch),
                                                                    (e.next = 3),
                                                                    this.getProxyUrl(
                                                                        t,
                                                                        "!a"
                                                                    )
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    (e.t2 = n),
                                                                    (e.next = 7),
                                                                    e.t0(
                                                                        e.t1,
                                                                        e.t2
                                                                    )
                                                                );
                                                            case 7:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.sent
                                                                );
                                                            case 8:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t, n) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProfileCreationTime",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.t0 =
                                                                        JSON),
                                                                    (e.next = 3),
                                                                    this.getSessionData()
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    e.abrupt(
                                                                        "return",
                                                                        e.t0.parse.call(
                                                                            e.t0,
                                                                            e.t1
                                                                        ).data
                                                                            .createdAt
                                                                    )
                                                                );
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProfileImportTime",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._getData(
                                                                        "data",
                                                                        "importTime"
                                                                    )
                                                                );
                                                            case 2:
                                                                if (
                                                                    ((e.t1 = t =
                                                                        e.sent),
                                                                    (e.t0 =
                                                                        null ===
                                                                        e.t1),
                                                                    e.t0)
                                                                ) {
                                                                    e.next = 6;
                                                                    break;
                                                                }
                                                                e.t0 =
                                                                    void 0 ===
                                                                    t;
                                                            case 6:
                                                                if (!e.t0) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                (e.t2 = void 0),
                                                                    (e.next = 11);
                                                                break;
                                                            case 10:
                                                                e.t2 = t.time;
                                                            case 11:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.t2
                                                                );
                                                            case 12:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "updateProfileImportTime",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._putData(
                                                                        "data",
                                                                        {
                                                                            type: "importTime",
                                                                            time: Date.now(),
                                                                        }
                                                                    )
                                                                );
                                                            case 2:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getTabFavicon",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._getData(
                                                                        "data",
                                                                        "tabFavicon"
                                                                    )
                                                                );
                                                            case 2:
                                                                if (
                                                                    ((e.t1 = t =
                                                                        e.sent),
                                                                    (e.t0 =
                                                                        null ===
                                                                        e.t1),
                                                                    e.t0)
                                                                ) {
                                                                    e.next = 6;
                                                                    break;
                                                                }
                                                                e.t0 =
                                                                    void 0 ===
                                                                    t;
                                                            case 6:
                                                                if (!e.t0) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                (e.t2 = void 0),
                                                                    (e.next = 11);
                                                                break;
                                                            case 10:
                                                                e.t2 = t.data;
                                                            case 11:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.t2
                                                                );
                                                            case 12:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "setTabFavicon",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t,
                                                n = arguments;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (t =
                                                                        n.length >
                                                                            0 &&
                                                                        void 0 !==
                                                                            n[0]
                                                                            ? n[0]
                                                                            : this.getTabFavicon()),
                                                                    (e.next = 3),
                                                                    t
                                                                );
                                                            case 3:
                                                                return (
                                                                    (t =
                                                                        e.sent),
                                                                    (document.querySelector(
                                                                        'link[rel="shortcut icon"]'
                                                                    ).href =
                                                                        t ||
                                                                        "/favicon.png"),
                                                                    (e.next = 7),
                                                                    this._putData(
                                                                        "data",
                                                                        {
                                                                            type: "tabFavicon",
                                                                            data: t,
                                                                        }
                                                                    )
                                                                );
                                                            case 7:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.sent
                                                                );
                                                            case 8:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getTabTitle",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this._getData(
                                                                        "data",
                                                                        "tabTitle"
                                                                    )
                                                                );
                                                            case 2:
                                                                if (
                                                                    ((e.t1 = t =
                                                                        e.sent),
                                                                    (e.t0 =
                                                                        null ===
                                                                        e.t1),
                                                                    e.t0)
                                                                ) {
                                                                    e.next = 6;
                                                                    break;
                                                                }
                                                                e.t0 =
                                                                    void 0 ===
                                                                    t;
                                                            case 6:
                                                                if (!e.t0) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                (e.t2 = void 0),
                                                                    (e.next = 11);
                                                                break;
                                                            case 10:
                                                                e.t2 = t.data;
                                                            case 11:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.t2
                                                                );
                                                            case 12:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "setTabTitle",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t,
                                                n = arguments;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (t =
                                                                        n.length >
                                                                            0 &&
                                                                        void 0 !==
                                                                            n[0]
                                                                            ? n[0]
                                                                            : this.getTabTitle()),
                                                                    (e.next = 3),
                                                                    t
                                                                );
                                                            case 3:
                                                                return (
                                                                    (t =
                                                                        e.sent),
                                                                    (document.title =
                                                                        t ||
                                                                        document.title),
                                                                    (e.next = 7),
                                                                    this._putData(
                                                                        "data",
                                                                        {
                                                                            type: "tabTitle",
                                                                            data: t,
                                                                        }
                                                                    )
                                                                );
                                                            case 7:
                                                                return e.abrupt(
                                                                    "return",
                                                                    e.sent
                                                                );
                                                            case 8:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "isShufflingEnabled",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.t0 =
                                                                        JSON),
                                                                    (e.next = 3),
                                                                    this.getSessionData()
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    e.abrupt(
                                                                        "return",
                                                                        !!e.t0.parse.call(
                                                                            e.t0,
                                                                            e.t1
                                                                        ).data
                                                                            .shuffleDict
                                                                    )
                                                                );
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "enableShuffling",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    "boolean" ===
                                                                    typeof t
                                                                ) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                throw new TypeError(
                                                                    "enable argument must be a boolean"
                                                                );
                                                            case 2:
                                                                return (
                                                                    (e.next = 4),
                                                                    fetch(
                                                                        "/api/configShuffling?id="
                                                                            .concat(
                                                                                encodeURIComponent(
                                                                                    this
                                                                                        .id
                                                                                ),
                                                                                "&enable="
                                                                            )
                                                                            .concat(
                                                                                t
                                                                            )
                                                                    )
                                                                );
                                                            case 4:
                                                                return (
                                                                    (e.next = 6),
                                                                    this.syncSession(
                                                                        !0
                                                                    )
                                                                );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getHttpProxySetting",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.t0 =
                                                                        JSON),
                                                                    (e.next = 3),
                                                                    this.getSessionData()
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.t1 =
                                                                        e.sent),
                                                                    e.abrupt(
                                                                        "return",
                                                                        e.t0.parse.call(
                                                                            e.t0,
                                                                            e.t1
                                                                        ).data
                                                                            .externalProxySettings
                                                                    )
                                                                );
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "setHttpProxySetting",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    fetch(
                                                                        "/api/configProxy?id=".concat(
                                                                            encodeURIComponent(
                                                                                this
                                                                                    .id
                                                                            )
                                                                        ) +
                                                                            (t
                                                                                ? "&httpProxy=" +
                                                                                  encodeURIComponent(
                                                                                      t
                                                                                  )
                                                                                : "")
                                                                    )
                                                                );
                                                            case 2:
                                                                return (
                                                                    (e.next = 4),
                                                                    this.syncSession(
                                                                        !0
                                                                    )
                                                                );
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "importBrowserProfile",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n, r, i, o, a, u;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                for (
                                                                    n = 0;
                                                                    n <
                                                                    t.length;
                                                                    n++
                                                                )
                                                                    t[n] ^= 69;
                                                                (e.prev = 1),
                                                                    (r =
                                                                        JSON.parse(
                                                                            new TextDecoder().decode(
                                                                                t
                                                                            )
                                                                        )),
                                                                    (e.next = 8);
                                                                break;
                                                            case 5:
                                                                return (
                                                                    (e.prev = 5),
                                                                    (e.t0 =
                                                                        e.catch(
                                                                            1
                                                                        )),
                                                                    e.abrupt(
                                                                        "return",
                                                                        "corrupted rammerfile"
                                                                    )
                                                                );
                                                            case 8:
                                                                if (
                                                                    r &&
                                                                    Array.isArray(
                                                                        r.data
                                                                    ) &&
                                                                    Array.isArray(
                                                                        r.localStorage
                                                                    ) &&
                                                                    Array.isArray(
                                                                        r.browsingHistory
                                                                    )
                                                                ) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return",
                                                                    "invalid rammerfile"
                                                                );
                                                            case 10:
                                                                (i = {}),
                                                                    (o = g(
                                                                        r.data
                                                                    ));
                                                                try {
                                                                    for (
                                                                        o.s();
                                                                        !(a =
                                                                            o.n())
                                                                            .done;

                                                                    )
                                                                        (u =
                                                                            a.value),
                                                                            (i[
                                                                                u.type
                                                                            ] =
                                                                                u);
                                                                } catch (l) {
                                                                    o.e(l);
                                                                } finally {
                                                                    o.f();
                                                                }
                                                                if (
                                                                    "string" ===
                                                                        typeof i
                                                                            .sessionData
                                                                            .sessionData &&
                                                                    "string" ===
                                                                        typeof i
                                                                            .sessionDataSignature
                                                                            .signature
                                                                ) {
                                                                    e.next = 15;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return",
                                                                    "session data missing"
                                                                );
                                                            case 15:
                                                                return (
                                                                    (e.next = 17),
                                                                    fetch(
                                                                        "/api/validateSession?signed=" +
                                                                            encodeURIComponent(
                                                                                i
                                                                                    .sessionDataSignature
                                                                                    .signature
                                                                            ),
                                                                        {
                                                                            method: "POST",
                                                                            body: i
                                                                                .sessionData
                                                                                .sessionData,
                                                                        }
                                                                    )
                                                                );
                                                            case 17:
                                                                return (
                                                                    (e.next = 19),
                                                                    e.sent.text()
                                                                );
                                                            case 19:
                                                                if (
                                                                    ((e.t1 =
                                                                        e.sent),
                                                                    "ok" ===
                                                                        e.t1)
                                                                ) {
                                                                    e.next = 22;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "return",
                                                                    "bad session data"
                                                                );
                                                            case 22:
                                                                return (
                                                                    (e.next = 24),
                                                                    this._putAllData(
                                                                        "data",
                                                                        r.data
                                                                    )
                                                                );
                                                            case 24:
                                                                return (
                                                                    (e.next = 26),
                                                                    this._putAllData(
                                                                        "localStorage",
                                                                        r.localStorage
                                                                    )
                                                                );
                                                            case 26:
                                                                return (
                                                                    (e.next = 28),
                                                                    this._putAllData(
                                                                        "browsing-history",
                                                                        r.browsingHistory
                                                                    )
                                                                );
                                                            case 28:
                                                                return (
                                                                    (e.next = 30),
                                                                    this.updateProfileImportTime()
                                                                );
                                                            case 30:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[1, 5]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "exportBrowserProfile",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            var t, n, r;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (t = {}),
                                                                    (e.next = 3),
                                                                    this._getAllData(
                                                                        "data"
                                                                    )
                                                                );
                                                            case 3:
                                                                return (
                                                                    (t.data =
                                                                        e.sent),
                                                                    (e.next = 6),
                                                                    this._getAllData(
                                                                        "localStorage"
                                                                    )
                                                                );
                                                            case 6:
                                                                return (
                                                                    (t.localStorage =
                                                                        e.sent),
                                                                    (e.next = 9),
                                                                    this._getAllData(
                                                                        "browsing-history"
                                                                    )
                                                                );
                                                            case 9:
                                                                for (
                                                                    t.browsingHistory =
                                                                        e.sent,
                                                                        n =
                                                                            new TextEncoder().encode(
                                                                                JSON.stringify(
                                                                                    t
                                                                                )
                                                                            ),
                                                                        r = 0;
                                                                    r <
                                                                    n.length;
                                                                    r++
                                                                )
                                                                    n[r] ^= 69;
                                                                return e.abrupt(
                                                                    "return",
                                                                    n
                                                                );
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "synchronousClose",
                                value: function () {
                                    this.cleanupStaleSessionIds(!0),
                                        clearInterval(this.updateAliveId);
                                },
                            },
                            {
                                key: "close",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    this.synchronousClose(),
                                                                    (e.next = 3),
                                                                    P(
                                                                        this
                                                                            .syncId
                                                                    )
                                                                );
                                                            case 3:
                                                                return (
                                                                    (e.next = 5),
                                                                    this.syncSession(
                                                                        !0
                                                                    )
                                                                );
                                                            case 5:
                                                                this.db.close();
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "delete",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e() {
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    this.close()
                                                                );
                                                            case 2:
                                                                return (
                                                                    (e.next = 4),
                                                                    G(
                                                                        indexedDB.deleteDatabase(
                                                                            this
                                                                                .db
                                                                                .name
                                                                        )
                                                                    )
                                                                );
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "_getData",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t, n) {
                                            var r;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (r = this.db
                                                                        .transaction(
                                                                            t,
                                                                            "readonly"
                                                                        )
                                                                        .objectStore(
                                                                            t
                                                                        )
                                                                        .get(
                                                                            n
                                                                        )),
                                                                    (e.next = 3),
                                                                    G(r)
                                                                );
                                                            case 3:
                                                                return e.abrupt(
                                                                    "return",
                                                                    r.result
                                                                );
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t, n) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "_putData",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t, n) {
                                            var r;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (r = this.db
                                                                        .transaction(
                                                                            t,
                                                                            "readwrite"
                                                                        )
                                                                        .objectStore(
                                                                            t
                                                                        )
                                                                        .put(
                                                                            n
                                                                        )),
                                                                    (e.next = 3),
                                                                    G(r)
                                                                );
                                                            case 3:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t, n) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "_getDataKeys",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (n = this.db
                                                                        .transaction(
                                                                            t,
                                                                            "readonly"
                                                                        )
                                                                        .objectStore(
                                                                            t
                                                                        )
                                                                        .getAllKeys()),
                                                                    (e.next = 3),
                                                                    G(n)
                                                                );
                                                            case 3:
                                                                return e.abrupt(
                                                                    "return",
                                                                    n.result
                                                                );
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "_getAllData",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t) {
                                            var n, r, i, o;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (n = []),
                                                                    (e.t0 = g),
                                                                    (e.next = 4),
                                                                    this._getDataKeys(
                                                                        t
                                                                    )
                                                                );
                                                            case 4:
                                                                (e.t1 = e.sent),
                                                                    (r = (0,
                                                                    e.t0)(
                                                                        e.t1
                                                                    )),
                                                                    (e.prev = 6),
                                                                    r.s();
                                                            case 8:
                                                                if (
                                                                    (i = r.n())
                                                                        .done
                                                                ) {
                                                                    e.next = 17;
                                                                    break;
                                                                }
                                                                return (
                                                                    (o =
                                                                        i.value),
                                                                    (e.t2 = n),
                                                                    (e.next = 13),
                                                                    this._getData(
                                                                        t,
                                                                        o
                                                                    )
                                                                );
                                                            case 13:
                                                                (e.t3 = e.sent),
                                                                    e.t2.push.call(
                                                                        e.t2,
                                                                        e.t3
                                                                    );
                                                            case 15:
                                                                e.next = 8;
                                                                break;
                                                            case 17:
                                                                e.next = 22;
                                                                break;
                                                            case 19:
                                                                (e.prev = 19),
                                                                    (e.t4 =
                                                                        e.catch(
                                                                            6
                                                                        )),
                                                                    r.e(e.t4);
                                                            case 22:
                                                                return (
                                                                    (e.prev = 22),
                                                                    r.f(),
                                                                    e.finish(22)
                                                                );
                                                            case 25:
                                                                return e.abrupt(
                                                                    "return",
                                                                    n
                                                                );
                                                            case 26:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[6, 19, 22, 25]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "_putAllData",
                                value: (function () {
                                    var e = asyncToGenerator(
                                        p().mark(function e(t, n) {
                                            var r, i, o;
                                            return p().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                (r = g(n)),
                                                                    (e.prev = 1),
                                                                    r.s();
                                                            case 3:
                                                                if (
                                                                    (i = r.n())
                                                                        .done
                                                                ) {
                                                                    e.next = 9;
                                                                    break;
                                                                }
                                                                return (
                                                                    (o =
                                                                        i.value),
                                                                    (e.next = 7),
                                                                    this._putData(
                                                                        t,
                                                                        o
                                                                    )
                                                                );
                                                            case 7:
                                                                e.next = 3;
                                                                break;
                                                            case 9:
                                                                e.next = 14;
                                                                break;
                                                            case 11:
                                                                (e.prev = 11),
                                                                    (e.t0 =
                                                                        e.catch(
                                                                            1
                                                                        )),
                                                                    r.e(e.t0);
                                                            case 14:
                                                                return (
                                                                    (e.prev = 14),
                                                                    r.f(),
                                                                    e.finish(14)
                                                                );
                                                            case 17:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[1, 11, 14, 17]]
                                            );
                                        })
                                    );
                                    return function (t, n) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        e
                    );
                })();
            function K(e) {
                return Q.apply(this, arguments);
            }
            function Q() {
                return (Q = asyncToGenerator(
                    p().mark(function e(t) {
                        var n;
                        return p().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (e.t0 = Y), (e.next = 3), h(t);
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
            var q = n(184),
                J = React.createContext();
            function Z() {
                return React.useContext(J);
            }
            function ee(e) {
                var t = e.children,
                    n = destructureToArray(React.useState(null), 2),
                    i = n[0],
                    o = n[1],
                    errorDisplay = destructureToArray(React.useState(null), 2),
                    l = errorDisplay[0],
                    s = errorDisplay[1],
                    c = destructureToArray(React.useState(false), 2),
                    d = c[0];
                c[1];
                return (
                    React.useEffect(function () {
                        var e;
                        return (
                            asyncToGenerator(
                                p().mark(function t() {
                                    var n, r;
                                    return p().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.prev = 0),
                                                            (n =
                                                                localStorage.getItem(
                                                                    "current-rh-session-name"
                                                                ) || "default"),
                                                            (t.next = 4),
                                                            K(n)
                                                        );
                                                    case 4:
                                                        if (
                                                            ((r = t.sent),
                                                            null !== e)
                                                        ) {
                                                            t.next = 8;
                                                            break;
                                                        }
                                                        return (
                                                            r.close(),
                                                            t.abrupt("return")
                                                        );
                                                    case 8:
                                                        (e = r),
                                                            o(r),
                                                            (t.next = 16);
                                                        break;
                                                    case 12:
                                                        (t.prev = 12),
                                                            (t.t0 = t.catch(0)),
                                                            console.error(t.t0),
                                                            s(
                                                                "An error occurred while trying to connect to the server. Please refresh the page and try again"
                                                            );
                                                    case 16:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null,
                                        [[0, 12]]
                                    );
                                })
                            )(),
                            function () {
                                e ? e.close() : (e = null);
                            }
                        );
                    }, []),
                    JSXRuntime.jsx(J.Provider, {
                        value: i,
                        children:
                            !i || l
                                ? JSXRuntime.jsxs("div", {
                                      style: { padding: 20, fontSize: 30 },
                                      children: [
                                          !d &&
                                              JSXRuntime.jsx("p", {
                                                  style: { margin: 0 },
                                                  children:
                                                      "Connecting to server...",
                                              }),
                                          JSXRuntime.jsx("p", {
                                              style: { margin: d ? 0 : void 0 },
                                              children: l,
                                          }),
                                      ],
                                  })
                                : t,
                    })
                );
            }
            var te,
                ne = require("chrome-tabs"),
                re = n.n(ne);
            function ie(e) {
                var t = e.iframe,
                    n = React.useRef();
                return (
                    React.useEffect(function () {
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
                    JSXRuntime.jsx("div", {
                        className: "browser-tab-content-541321",
                        ref: n,
                    })
                );
            }
            var oe = ["title", "titleId"];
            function ae() {
                return (
                    (ae =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    ae.apply(this, arguments)
                );
            }
            function ue(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function le(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = ue(e, oe);
                return React.createElement(
                    "svg",
                    ae(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 32,
                            height: 32,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 32 32",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    te ||
                        (te = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 4.22 14.03 C 3.53 14.15 3 14.77 3 15.5 C 3 16.25 3.53 16.86 4.24 16.98 L 4.02 17.19 L 14.36 27.51 C 14.65 27.81 15.05 28 15.5 28 C 16.33 28 17 27.33 17 26.5 C 17 26.05 16.8 25.65 16.49 25.38 L 16.55 25.32 L 8.22 17 L 27.51 17 C 28.33 17 29 16.33 29 15.5 C 29 14.67 28.33 14 27.51 14 L 8.2 14 L 16.55 5.66 C 16.81 5.34 17 4.94 17 4.5 C 17 3.68 16.33 3 15.5 3 C 15.06 3 14.66 3.2 14.39 3.5 L 14.36 3.47 L 4 13.81 Z",
                        }))
                );
            }
            var se,
                ce = React.forwardRef(le),
                fe = ["title", "titleId"];
            function de() {
                return (
                    (de =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    de.apply(this, arguments)
                );
            }
            function pe(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function he(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = pe(e, fe);
                return React.createElement(
                    "svg",
                    de(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 32,
                            height: 32,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 32 32",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    se ||
                        (se = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 27.78 14.03 C 28.47 14.15 29 14.77 29 15.5 C 29 16.25 28.47 16.86 27.76 16.98 L 27.98 17.19 L 17.64 27.51 C 17.35 27.81 16.95 28 16.5 28 C 15.67 28 15 27.33 15 26.5 C 15 26.05 15.2 25.65 15.51 25.38 L 15.45 25.32 L 23.78 17 L 4.49 17 C 3.67 17 3 16.33 3 15.5 C 3 14.67 3.67 14 4.49 14 L 23.8 14 L 15.45 5.66 C 15.19 5.34 15 4.94 15 4.5 C 15 3.68 15.67 3 16.5 3 C 16.94 3 17.34 3.2 17.61 3.5 L 17.64 3.47 L 28 13.81 Z",
                        }))
                );
            }
            var ve,
                ge = React.forwardRef(he),
                me = ["title", "titleId"];
            function ye() {
                return (
                    (ye =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    ye.apply(this, arguments)
                );
            }
            function be(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function we(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = be(e, me);
                return React.createElement(
                    "svg",
                    ye(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 32,
                            height: 32,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 32 32",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    ve ||
                        (ve = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 25.1 20.15 L 25.08 20.14 C 23.51 23.59 20.04 26 16 26 C 10.48 26 6 21.52 6 16 C 6 10.48 10.48 6 16 6 C 19.02 6 21.72 7.34 23.55 9.45 L 23.55 9.45 L 19 14 L 25.8 14 L 28.83 14 L 30 14 L 30 3 L 25.67 7.33 C 23.3 4.67 19.85 3 16 3 C 8.82 3 3 8.82 3 16 C 3 23.18 8.82 29 16 29 C 21.27 29 25.8 25.86 27.84 21.34 C 27.96 21.13 28.03 20.88 28.03 20.61 C 28.03 19.78 27.36 19.11 26.53 19.11 C 25.87 19.11 25.3 19.55 25.1 20.15 Z",
                        }))
                );
            }
            var xe,
                Ee = React.forwardRef(we),
                ke = ["title", "titleId"];
            function Se() {
                return (
                    (Se =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    Se.apply(this, arguments)
                );
            }
            function Ae(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function Ce(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = Ae(e, ke);
                return React.createElement(
                    "svg",
                    Se(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 32,
                            height: 32,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 32 32",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    xe ||
                        (xe = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 16 18.37 L 6.86 27.51 C 6.21 28.16 5.15 28.16 4.49 27.51 C 3.84 26.85 3.84 25.79 4.49 25.14 L 13.63 16 L 4.49 6.86 C 3.84 6.21 3.84 5.15 4.49 4.49 C 5.15 3.84 6.21 3.84 6.86 4.49 L 16 13.63 L 25.14 4.49 C 25.79 3.84 26.85 3.84 27.51 4.49 C 28.16 5.15 28.16 6.21 27.51 6.86 L 18.37 16 L 27.51 25.14 C 28.16 25.79 28.16 26.85 27.51 27.51 C 26.85 28.16 25.79 28.16 25.14 27.51 Z",
                        }))
                );
            }
            var Oe,
                Te = React.forwardRef(Ce),
                _e = ["title", "titleId"];
            function Ie() {
                return (
                    (Ie =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    Ie.apply(this, arguments)
                );
            }
            function Ne(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function Le(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = Ne(e, _e);
                return React.createElement(
                    "svg",
                    Ie(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 48,
                            height: 48,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 48 48",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    Oe ||
                        (Oe = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 38 38 H 10 V 10 h 14 V 6 H 10 c -2.21 0 -4 1.79 -4 4 v 28 c 0 2.21 1.79 4 4 4 h 28 c 2.21 0 4 -1.79 4 -4 V 24 h -4 v 14 Z M 28 6 v 4 h 7.17 L 15.51 29.66 l 2.83 2.83 L 38 12.83 V 20 h 4 V 6 H 28 Z",
                        }))
                );
            }
            var Re,
                Pe = React.forwardRef(Le),
                De = ["title", "titleId"];
            function Me() {
                return (
                    (Me =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    Me.apply(this, arguments)
                );
            }
            function je(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function Fe(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = je(e, De);
                return React.createElement(
                    "svg",
                    Me(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 32,
                            height: 32,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 32 32",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    Re ||
                        (Re = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 21 12 v -2 c 0 -2.76 -2.24 -5 -5 -5 c -2.76 0.02 -5 2.24 -5 5 v 2 h -0.5 c -0.83 0 -1.5 0.67 -1.5 1.5 v 9 c 0 0.83 0.67 1.5 1.5 1.5 h 11 c 0.83 0 1.5 -0.67 1.5 -1.5 v -9 c 0 -0.83 -0.67 -1.5 -1.5 -1.5 H 21 Z m -8 0.02 v -2.02 C 13 8.34 14.34 7 16 7 c 1.66 0 3 1.34 3 3 v 2.02 h -6 Z",
                        }))
                );
            }
            var Be,
                Ue = React.forwardRef(Fe),
                ze = ["title", "titleId"];
            function He() {
                return (
                    (He =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    He.apply(this, arguments)
                );
            }
            function We(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function Ge(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = We(e, ze);
                return React.createElement(
                    "svg",
                    He(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 20,
                            height: 20,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 20 20",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    Be ||
                        (Be = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 9 14 h 2 v -4 H 9 v 4 Z m 1 -12 c -4.42 0 -8 3.58 -8 8 c 0 4.42 3.58 8 8 8 c 4.42 0 8 -3.58 8 -8 c 0 -4.42 -3.58 -8 -8 -8 Z m 0 14 c -3.31 0 -6 -2.69 -6 -6 c 0 -3.31 2.69 -6 6 -6 c 3.31 0 6 2.69 6 6 c 0 3.31 -2.69 6 -6 6 Z M 9 8 h 2 V 6 H 9 v 2 Z",
                        }))
                );
            }
            var $e = React.forwardRef(Ge);
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
            function Xe(e) {
                var t = e.width,
                    n = void 0 === t ? 5 : t,
                    r = e.height,
                    i = void 0 === r ? 1 : r;
                return JSXRuntime.jsx("div", { style: { height: i, width: n } });
            }
            function Ye(e) {
                var t = e.url,
                    n = e.state,
                    i = e.onUrlEnter,
                    o = e.onType,
                    a = React.useRef(),
                    u = destructureToArray(React.useState(!1), 2),
                    l = u[0],
                    s = u[1];
                void 0 === n.isInitialMouseDown && (n.isInitialMouseDown = !0);
                return JSXRuntime.jsxs("div", {
                    className: "addressbar-829502",
                    style: {
                        outline: l ? "2px #4285f4 solid" : "none",
                        backgroundColor: l ? "#ffffff" : "#f1f3f4",
                    },
                    children: [
                        JSXRuntime.jsx(Xe, {}),
                        null !== t && void 0 !== t && t.startsWith("https")
                            ? JSXRuntime.jsx(Ue, {
                                  className:
                                      "browser-bar-btn-608215 addressbar-btn-270129",
                              })
                            : JSXRuntime.jsx($e, {
                                  className:
                                      "browser-bar-btn-608215 addressbar-btn-270129",
                              }),
                        JSXRuntime.jsx("div", {
                            className: "addressbar-urlbar-155974",
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
                                        JSXRuntime.jsxs(
                                            "span",
                                            {
                                                className:
                                                    "addressbar-grey-856202",
                                                children: [o, "://"],
                                            },
                                            "protocol"
                                        )
                                    );
                                try {
                                    r = new URL(e.replace(o, "http"));
                                } catch (u) {
                                    return r;
                                }
                                var a = r.pathname + r.search;
                                return (
                                    i.push(
                                        JSXRuntime.jsx(
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
                                        JSXRuntime.jsx(
                                            "span",
                                            {
                                                className:
                                                    "addressbar-grey-856202",
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
            function Ke(e) {
                if (
                    ("undefined" !== typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                )
                    return Array.from(e);
            }
            function Qe(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return arrayLikeToArray(e);
                    })(e) ||
                    Ke(e) ||
                    unsupportedIterableToArray(e) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            function qe(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }
            function Je(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Je(Object(n), !0).forEach(function (t) {
                              qe(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : Je(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              );
                          });
                }
                return e;
            }
            function et(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            var tt,
                nt = ["Icon", "children", "focused"];
            function rt(e) {
                var t = e.Icon,
                    n = void 0 === t ? null : t,
                    r = e.children,
                    i = e.focused,
                    o = et(e, nt);
                return JSXRuntime.jsxs(
                    "div",
                    Ze(
                        Ze(
                            {
                                className: "addressbar-menu-item-965959",
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
                                JSXRuntime.jsx("div", {
                                    className:
                                        "addressbar-menu-item-icon-wrapper-593022",
                                    children:
                                        n &&
                                        JSXRuntime.jsx(n, {
                                            className:
                                                "addressbar-menu-item-icon-99327",
                                        }),
                                }),
                                r,
                            ],
                        }
                    )
                );
            }
            var it = ["title", "titleId"];
            function ot() {
                return (
                    (ot =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    ot.apply(this, arguments)
                );
            }
            function at(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function ut(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = at(e, it);
                return React.createElement(
                    "svg",
                    ot(
                        {
                            viewBox: "0 0 24 24",
                            width: 24,
                            height: 24,
                            xmlns: "http://www.w3.org/2000/svg",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    tt ||
                        (tt = React.createElement("path", {
                            d: "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM4 12h4.4c3.407.022 4.922 1.73 4.543 5.127H9.488v2.47a8.004 8.004 0 0 0 10.498-8.083C19.327 12.504 18.332 13 17 13c-2.137 0-3.206-.916-3.206-2.75h-3.748c-.274-2.728.683-4.092 2.87-4.092 0-.975.327-1.597.811-1.97A8.004 8.004 0 0 0 4 12z",
                        }))
                );
            }
            var lt,
                st = React.forwardRef(ut),
                ct = ["title", "titleId"];
            function ft() {
                return (
                    (ft =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    ft.apply(this, arguments)
                );
            }
            function dt(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function pt(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = dt(e, ct);
                return React.createElement(
                    "svg",
                    ft(
                        {
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 24,
                            height: 24,
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    lt ||
                        (lt = React.createElement("path", {
                            d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
                        }))
                );
            }
            var ht = React.forwardRef(pt);
            var vt = "[a-fA-F\\d:]",
                gt = function (e) {
                    return e && e.includeBoundaries
                        ? "(?:(?<=\\s|^)(?="
                              .concat(vt, ")|(?<=")
                              .concat(vt, ")(?=\\s|$))")
                        : "";
                },
                mt =
                    "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                yt = "[a-fA-F\\d]{1,4}",
                bt = "\n(?:\n(?:"
                    .concat(yt, ":){7}(?:")
                    .concat(
                        yt,
                        "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"
                    )
                    .concat(yt, ":){6}(?:")
                    .concat(mt, "|:")
                    .concat(
                        yt,
                        "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"
                    )
                    .concat(yt, ":){5}(?::")
                    .concat(mt, "|(?::")
                    .concat(
                        yt,
                        "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"
                    )
                    .concat(yt, ":){4}(?:(?::")
                    .concat(yt, "){0,1}:")
                    .concat(mt, "|(?::")
                    .concat(
                        yt,
                        "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"
                    )
                    .concat(yt, ":){3}(?:(?::")
                    .concat(yt, "){0,2}:")
                    .concat(mt, "|(?::")
                    .concat(
                        yt,
                        "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"
                    )
                    .concat(yt, ":){2}(?:(?::")
                    .concat(yt, "){0,3}:")
                    .concat(mt, "|(?::")
                    .concat(
                        yt,
                        "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"
                    )
                    .concat(yt, ":){1}(?:(?::")
                    .concat(yt, "){0,4}:")
                    .concat(mt, "|(?::")
                    .concat(
                        yt,
                        "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"
                    )
                    .concat(yt, "){0,5}:")
                    .concat(mt, "|(?::")
                    .concat(
                        yt,
                        "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n"
                    )
                    .replace(/\s*\/\/.*$/gm, "")
                    .replace(/\n/g, "")
                    .trim(),
                wt = new RegExp("(?:^".concat(mt, "$)|(?:^").concat(bt, "$)")),
                xt = new RegExp("^".concat(mt, "$")),
                Et = new RegExp("^".concat(bt, "$")),
                kt = function (e) {
                    return e && e.exact
                        ? wt
                        : new RegExp(
                              "(?:"
                                  .concat(gt(e))
                                  .concat(mt)
                                  .concat(gt(e), ")|(?:")
                                  .concat(gt(e))
                                  .concat(bt)
                                  .concat(gt(e), ")"),
                              "g"
                          );
                };
            (kt.v4 = function (e) {
                return e && e.exact
                    ? xt
                    : new RegExp(
                          "".concat(gt(e)).concat(mt).concat(gt(e)),
                          "g"
                      );
            }),
                (kt.v6 = function (e) {
                    return e && e.exact
                        ? Et
                        : new RegExp(
                              "".concat(gt(e)).concat(bt).concat(gt(e)),
                              "g"
                          );
                });
            var St = kt;
            var At = ["EVERY FUCKING TLD POSSIBLE"]; // TLDs
            function Ct(e) {
                if (e.toLowerCase().startsWith("javascript:")) return !0;
                var t = (e.match(/^[a-z0-9]+:\/\//) || [])[0],
                    n = e.replace(/^[a-z0-9]+:\/\//i, "").split(/(?=\/)/);
                if (((e = n[0].trim()), /^[^ ]+$/.test(e))) {
                    if (n.length > 1) return !0;
                    if (
                        e.includes(".") &&
                        -1 !== At.indexOf(e.split(".").pop().toUpperCase())
                    )
                        return !0;
                    if (
                        (function (e) {
                            return St.v4({ exact: !0 }).test(e);
                        })(e)
                    )
                        return !0;
                    if ("rh://" === t || "rammerhead://" === t) return !0;
                }
                return !1;
            }
            var lodash = require('lodash');
            function Tt(e, t) {
                e.document.documentElement.innerHTML =
                    '<body style="margin: 0;"><iframe src="'.concat(
                        t.replace(/"/g, '\\"'),
                        '" style="width: 100vw; height: 100vh; margin: 0; border: 0;" sandbox="allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"></iframe></body>'
                    );
            }
            function _t(e) {
                var t = e.goToUrl,
                    n = e.href,
                    r = e.text;
                return JSXRuntime.jsx("a", {
                    href: n,
                    onClick: function (e) {
                        e.preventDefault(), t(n);
                    },
                    children: r || n,
                });
            }
            var It,
                Nt,
                Lt = require("dayjs"),
                Rt = n.n(Lt),
                Pt = require("dayjs/plugin/relativeTime"),
                Dt = n.n(Pt),
                Mt = require("dayjs/plugin/duration"),
                jt = n.n(Mt),
                Ft = ["title", "titleId"];
            function Bt() {
                return (
                    (Bt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    Bt.apply(this, arguments)
                );
            }
            function Ut(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function zt(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = Ut(e, Ft);
                return React.createElement(
                    "svg",
                    Bt(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 24,
                            height: 24,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className:
                                "feather-871554 feather-arrow-left-194566",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    It ||
                        (It = React.createElement("line", {
                            x1: 19,
                            y1: 12,
                            x2: 5,
                            y2: 12,
                        })),
                    Nt ||
                        (Nt = React.createElement("polyline", {
                            points: "12 19 5 12 12 5",
                        }))
                );
            }
            var Ht = React.forwardRef(zt);
            function Wt(e) {
                var t,
                    n = e.canHideSpeedTicketPanel,
                    i = e.onHide,
                    o = e.onCodeApply,
                    u = e.goToUrl,
                    l = Z(),
                    s = destructureToArray(React.useState(l.speedTicketActive), 2),
                    c = s[0],
                    d = s[1],
                    h = destructureToArray(React.useState(null), 2),
                    v = h[0],
                    g = h[1],
                    m = destructureToArray(React.useState(!window.rhTempNotDedicatedSpeed), 2),
                    y = m[0],
                    b = m[1],
                    w = destructureToArray(React.useState(!1), 2),
                    x = w[0],
                    E = w[1],
                    k = destructureToArray(React.useState(""), 2),
                    S = k[0],
                    A = k[1],
                    C = destructureToArray(React.useState(null), 2),
                    O = C[0],
                    T = C[1],
                    _ = destructureToArray(React.useState(null), 2),
                    I = _[0],
                    N = _[1],
                    L = destructureToArray(React.useState(null), 2),
                    R = L[0],
                    P = L[1],
                    D = destructureToArray(React.useState(null), 2),
                    M = D[0],
                    j = D[1],
                    F = destructureToArray(React.useState(null), 2),
                    B = F[0],
                    U = F[1],
                    z = React.useRef(),
                    H = React.useRef();
                function W() {
                    return G.apply(this, arguments);
                }
                function G() {
                    return (G = asyncToGenerator(
                        p().mark(function e() {
                            var t, n;
                            return p().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                (g(l.speedTicketErr || null),
                                                d(l.speedTicketActive),
                                                l.speedTicketActive)
                                            ) {
                                                e.next = 4;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return (
                                                (e.next = 6),
                                                fetch(
                                                    "/api/speedTicketSettings?id=".concat(
                                                        l.id
                                                    )
                                                )
                                            );
                                        case 6:
                                            return (e.next = 8), e.sent.text();
                                        case 8:
                                            if ((t = e.sent).startsWith("{")) {
                                                e.next = 24;
                                                break;
                                            }
                                            if (
                                                "cannot find speed ticket associated with current session" !==
                                                t
                                            ) {
                                                e.next = 16;
                                                break;
                                            }
                                            return (
                                                (e.next = 13),
                                                l.resubmitSpeedTicketCode()
                                            );
                                        case 13:
                                            return (e.next = 15), W();
                                        case 15:
                                            return e.abrupt("return", e.sent);
                                        case 16:
                                            if ("session not found" !== t) {
                                                e.next = 20;
                                                break;
                                            }
                                            return (
                                                (e.next = 19), l.syncSession()
                                            );
                                        case 19:
                                            return e.abrupt("return");
                                        case 20:
                                            return (
                                                (l.speedTicketActive = !1),
                                                (l.speedTicketErr = t),
                                                g(t),
                                                e.abrupt("return")
                                            );
                                        case 24:
                                            return (
                                                (n = JSON.parse(t)),
                                                N(n.adblock),
                                                P(n.youtubeAdblock),
                                                A(n.vpnRegionId || ""),
                                                T(n.vpnRegions),
                                                (e.next = 31),
                                                $()
                                            );
                                        case 31:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function $() {
                    return V.apply(this, arguments);
                }
                function V() {
                    return (V = asyncToGenerator(
                        p().mark(function e() {
                            var t, n, r;
                            return p().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                fetch(
                                                    "/api/speedTicketData?id=".concat(
                                                        l.id
                                                    )
                                                )
                                            );
                                        case 2:
                                            return (e.next = 4), e.sent.text();
                                        case 4:
                                            (t = e.sent).startsWith("{") &&
                                                ((n = JSON.parse(t)),
                                                (r = n.maxHours - n.usedHours),
                                                0.5 *
                                                    ((new Date(
                                                        n.expiresAt
                                                    ).getTime() -
                                                        Date.now()) /
                                                        1e3 /
                                                        60 /
                                                        60) >
                                                    r && j(Math.max(0, r)),
                                                U(n.expiresAt));
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function X(e, t) {
                    return Y.apply(this, arguments);
                }
                function Y() {
                    return (Y = asyncToGenerator(
                        p().mark(function e(t, n) {
                            var r;
                            return p().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                g(null),
                                                (e.next = 3),
                                                fetch(
                                                    "/api/speedTicketApplySettings?id="
                                                        .concat(l.id, "&")
                                                        .concat(t, "=")
                                                        .concat(
                                                            encodeURIComponent(
                                                                n
                                                            )
                                                        )
                                                )
                                            );
                                        case 3:
                                            return (e.next = 5), e.sent.text();
                                        case 5:
                                            if (
                                                "cannot find speed ticket associated with current session" !==
                                                (r = e.sent)
                                            ) {
                                                e.next = 12;
                                                break;
                                            }
                                            return (
                                                (e.next = 9),
                                                l.resubmitSpeedTicketCode()
                                            );
                                        case 9:
                                            return (e.next = 11), X(t, n);
                                        case 11:
                                        case 17:
                                            return e.abrupt("return", e.sent);
                                        case 12:
                                            if ("session not found" !== r) {
                                                e.next = 18;
                                                break;
                                            }
                                            return (
                                                (e.next = 15), l.syncSession()
                                            );
                                        case 15:
                                            return (e.next = 17), X(t, n);
                                        case 18:
                                            if ("ok" === r) {
                                                e.next = 21;
                                                break;
                                            }
                                            return g(r), e.abrupt("return");
                                        case 21:
                                            return (
                                                localStorage.setItem(
                                                    "rh-speedticket-settings-".concat(
                                                        t
                                                    ),
                                                    n
                                                ),
                                                (e.next = 24),
                                                W()
                                            );
                                        case 24:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                return (
                    React.useEffect(W, []),
                    JSXRuntime.jsxs("div", {
                        className: "rhnewtab-header-stp-737270",
                        children: [
                            !c &&
                                JSXRuntime.jsxs(q.Fragment, {
                                    children: [
                                        JSXRuntime.jsxs("div", {
                                            children: [
                                                Date.now() < 1706936399059 &&
                                                    JSXRuntime.jsxs(q.Fragment, {
                                                        children: [
                                                            JSXRuntime.jsx("p", {
                                                                style: {
                                                                    fontWeight:
                                                                        "bold",
                                                                },
                                                                children:
                                                                    "\ud83c\udf89 Opening sale \ud83c\udf89 Rammerhead Speed Ticket",
                                                            }),
                                                            JSXRuntime.jsx("p", {
                                                                children:
                                                                    "10% off promo code OPENINGSALE (ends on 02/02/2024)",
                                                            }),
                                                        ],
                                                    }),
                                                JSXRuntime.jsxs("p", {
                                                    style: { marginBottom: 0 },
                                                    children: [
                                                        "Buy your ticket at ",
                                                        JSXRuntime.jsx("a", {
                                                            style: {
                                                                textDecoration:
                                                                    "none",
                                                            },
                                                            href: "https://shop.rammerhead.org",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children:
                                                                "https://shop.rammerhead.org",
                                                        }),
                                                    ],
                                                }),
                                                JSXRuntime.jsxs("p", {
                                                    style: {
                                                        marginTop: 5,
                                                        fontSize: "0.8em",
                                                    },
                                                    children: [
                                                        "or click ",
                                                        JSXRuntime.jsx("a", {
                                                            href: "#",
                                                            onClick:
                                                                function () {
                                                                    return u(
                                                                        "https://shop.rammerhead.org"
                                                                    );
                                                                },
                                                            children: "here",
                                                        }),
                                                        " if you can't access it (though not recommended)",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        JSXRuntime.jsx("div", {
                                            style: {
                                                height: 1,
                                                backgroundColor: "black",
                                            },
                                        }),
                                    ],
                                }),
                            JSXRuntime.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                },
                                children: [
                                    JSXRuntime.jsx("h3", {
                                        children:
                                            "\ud83c\udf9f\ufe0f Speed ticket panel \ud83c\udf9f\ufe0f",
                                    }),
                                    n &&
                                        JSXRuntime.jsx("button", {
                                            style: {
                                                backgroundColor: "transparent",
                                                cursor: "pointer",
                                                border: "none",
                                            },
                                            onClick: i,
                                            children: JSXRuntime.jsx(Ht, {}),
                                        }),
                                ],
                            }),
                            (M || B) &&
                                JSXRuntime.jsxs("div", {
                                    style: {
                                        marginBottom: 20,
                                        fontSize: "0.8em",
                                        color: "rgba(0,0,0,0.5)",
                                    },
                                    children: [
                                        B &&
                                            JSXRuntime.jsxs("p", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: 5,
                                                },
                                                children: [
                                                    "Code expires ",
                                                    Rt()().to(B).toString(),
                                                ],
                                            }),
                                        M &&
                                            JSXRuntime.jsxs("p", {
                                                style: { margin: 0 },
                                                children: [
                                                    "Remaining usage: ",
                                                    M.toFixed(2),
                                                    " hours",
                                                ],
                                            }),
                                    ],
                                }),
                            JSXRuntime.jsxs("div", {
                                children: [
                                    JSXRuntime.jsx("div", {
                                        style: { marginBottom: 20 },
                                        children: JSXRuntime.jsxs("form", {
                                            onSubmit: (function () {
                                                var e = asyncToGenerator(
                                                    p().mark(function e(t) {
                                                        var n, r;
                                                        return p().wrap(
                                                            function (e) {
                                                                for (;;)
                                                                    switch (
                                                                        (e.prev =
                                                                            e.next)
                                                                    ) {
                                                                        case 0:
                                                                            if (
                                                                                (t.preventDefault(),
                                                                                (n =
                                                                                    z
                                                                                        .current
                                                                                        .value))
                                                                            ) {
                                                                                e.next = 5;
                                                                                break;
                                                                            }
                                                                            return (
                                                                                g(
                                                                                    "Must specify code"
                                                                                ),
                                                                                e.abrupt(
                                                                                    "return"
                                                                                )
                                                                            );
                                                                        case 5:
                                                                            return (
                                                                                g(
                                                                                    null
                                                                                ),
                                                                                (e.next = 8),
                                                                                l.submitSpeedTicketCode(
                                                                                    n
                                                                                )
                                                                            );
                                                                        case 8:
                                                                            if (
                                                                                !(r =
                                                                                    e.sent)
                                                                            ) {
                                                                                e.next = 12;
                                                                                break;
                                                                            }
                                                                            return (
                                                                                g(
                                                                                    r
                                                                                ),
                                                                                e.abrupt(
                                                                                    "return"
                                                                                )
                                                                            );
                                                                        case 12:
                                                                            if (
                                                                                !confirm(
                                                                                    'Code has been applied successfully! You must reload for "Dedicated speed" to take effect. Would you like to do that now?'
                                                                                )
                                                                            ) {
                                                                                e.next = 15;
                                                                                break;
                                                                            }
                                                                            return (
                                                                                window.location.reload(),
                                                                                e.abrupt(
                                                                                    "return"
                                                                                )
                                                                            );
                                                                        case 15:
                                                                            return (
                                                                                b(
                                                                                    !1
                                                                                ),
                                                                                (window.rhTempNotDedicatedSpeed =
                                                                                    !0),
                                                                                o(),
                                                                                (e.next = 20),
                                                                                W()
                                                                            );
                                                                        case 20:
                                                                        case "end":
                                                                            return e.stop();
                                                                    }
                                                            },
                                                            e
                                                        );
                                                    })
                                                );
                                                return function (t) {
                                                    return e.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })(),
                                            children: [
                                                v &&
                                                    JSXRuntime.jsxs("p", {
                                                        className:
                                                            "rhnewtab-header-stp-err-924697",
                                                        children: [
                                                            "Error: ",
                                                            v,
                                                        ],
                                                    }),
                                                "Code: ",
                                                JSXRuntime.jsx("input", {
                                                    placeholder: c
                                                        ? (null ===
                                                              (t =
                                                                  localStorage.getItem(
                                                                      "rh-speedticket"
                                                                  )) ||
                                                          void 0 === t
                                                              ? void 0
                                                              : t.slice(0, 8)) +
                                                          "-...."
                                                        : "123e4567-e89b-12d3-a456-426614174000",
                                                    ref: z,
                                                    disabled: c,
                                                }),
                                                c
                                                    ? JSXRuntime.jsx("button", {
                                                          onClick: function () {
                                                              if (
                                                                  confirm(
                                                                      "Are you sure you want turn off the speed ticket? The browser will reload upon confirmation."
                                                                  )
                                                              ) {
                                                                  for (
                                                                      var e = 0,
                                                                          t =
                                                                              Object.keys(
                                                                                  localStorage
                                                                              );
                                                                      e <
                                                                      t.length;
                                                                      e++
                                                                  ) {
                                                                      var n =
                                                                          t[e];
                                                                      n.startsWith(
                                                                          "rh-speedticket"
                                                                      ) &&
                                                                          localStorage.removeItem(
                                                                              n
                                                                          );
                                                                  }
                                                                  window.location.reload();
                                                              }
                                                          },
                                                          children: "Turn OFF",
                                                      })
                                                    : JSXRuntime.jsx("button", {
                                                          type: "submit",
                                                          children: "Enter",
                                                      }),
                                            ],
                                        }),
                                    }),
                                    JSXRuntime.jsxs("div", {
                                        children: [
                                            "Dedicated speed ",
                                            c && y ? "\u26a1" : Gt("\u26a1"),
                                            ": ",
                                            c && y
                                                ? JSXRuntime.jsx("span", {
                                                      style: {
                                                          fontWeight: "bold",
                                                          color: "green",
                                                      },
                                                      children: "On",
                                                  })
                                                : JSXRuntime.jsx("span", {
                                                      style: {
                                                          fontWeight: "bold",
                                                          color: "red",
                                                      },
                                                      children: "Off",
                                                  }),
                                        ],
                                    }),
                                    JSXRuntime.jsxs("div", {
                                        children: [
                                            "VPN selection ",
                                            null === O
                                                ? Gt("\ud83c\udf10")
                                                : "\ud83c\udf10",
                                            ": ",
                                            JSXRuntime.jsxs("select", {
                                                disabled: null === O,
                                                value: S,
                                                ref: H,
                                                onChange: function (e) {
                                                    A(e.target.value), E(!0);
                                                },
                                                children: [
                                                    JSXRuntime.jsx("option", {
                                                        value: "",
                                                        children:
                                                            "\ud83c\uddfa\ud83c\uddf8 USA (default)",
                                                    }),
                                                    O &&
                                                        O.map(function (e, t) {
                                                            return (0,
                                                            JSXRuntime.jsx)("option", { value: e.regionId, children: e.regionName }, t);
                                                        }),
                                                ],
                                            }),
                                            JSXRuntime.jsx("button", {
                                                onClick: asyncToGenerator(
                                                    p().mark(function e() {
                                                        var t;
                                                        return p().wrap(
                                                            function (e) {
                                                                for (;;)
                                                                    switch (
                                                                        (e.prev =
                                                                            e.next)
                                                                    ) {
                                                                        case 0:
                                                                            return (
                                                                                (t =
                                                                                    H
                                                                                        .current
                                                                                        .value),
                                                                                (e.next = 3),
                                                                                X(
                                                                                    "vpnRegionId",
                                                                                    t ||
                                                                                        "0"
                                                                                )
                                                                            );
                                                                        case 3:
                                                                            E(
                                                                                !1
                                                                            );
                                                                        case 4:
                                                                        case "end":
                                                                            return e.stop();
                                                                    }
                                                            },
                                                            e
                                                        );
                                                    })
                                                ),
                                                disabled: !x,
                                                children: x
                                                    ? "Apply"
                                                    : "Applied",
                                            }),
                                        ],
                                    }),
                                    JSXRuntime.jsxs("div", {
                                        children: [
                                            "General adblock ",
                                            I
                                                ? "\ud83d\udeab"
                                                : Gt("\ud83d\udeab"),
                                            ": ",
                                            JSXRuntime.jsxs("button", {
                                                onClick: function () {
                                                    return X(
                                                        "adblock",
                                                        I ? 0 : 1
                                                    );
                                                },
                                                disabled: null === I,
                                                children: [
                                                    "Turn ",
                                                    I ? "OFF" : "on",
                                                ],
                                            }),
                                        ],
                                    }),
                                    JSXRuntime.jsxs("div", {
                                        children: [
                                            "YouTube adblock ",
                                            R
                                                ? "\ud83d\udeab"
                                                : Gt("\ud83d\udeab"),
                                            ": ",
                                            JSXRuntime.jsxs("button", {
                                                onClick: function () {
                                                    return X(
                                                        "youtubeAdblock",
                                                        R ? 0 : 1
                                                    );
                                                },
                                                disabled: null === R,
                                                children: [
                                                    "Turn ",
                                                    R ? "OFF" : "on",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            }
            function Gt(e) {
                return JSXRuntime.jsx("span", {
                    style: { filter: "grayscale(100%)" },
                    children: e,
                });
            }
            function $t() {
                Z();
                return JSXRuntime.jsxs("div", {
                    className: "rhnewtab-header-ad-777376",
                    children: [
                        JSXRuntime.jsx("p", { children: "*Open ad slot here*" }),
                        JSXRuntime.jsxs("div", {
                            children: [
                                "Contact @staff in the ",
                                JSXRuntime.jsx("a", {
                                    href: "https://discord.gg/VNT4E7gN5Y",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Discord server",
                                }),
                                " if interested",
                            ],
                        }),
                    ],
                });
            }
            function Vt(e) {
                var t = e.onFile,
                    n = e.onError,
                    i = e.readAs,
                    o = e.accept,
                    u = e.style,
                    l = e.children,
                    s = React.useRef();
                return (
                    React.useEffect(function () {
                        s.current.onchange = function () {
                            var e = new FileReader();
                            (e.onload = asyncToGenerator(
                                p().mark(function n() {
                                    return p().wrap(function (n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    t(e.result);
                                                case 1:
                                                case "end":
                                                    return n.stop();
                                            }
                                    }, n);
                                })
                            )),
                                (e.onerror = function () {
                                    n("error occurred while reading the file");
                                }),
                                s.current.files[0] && e[i](s.current.files[0]);
                        };
                    }, []),
                    JSXRuntime.jsxs(q.Fragment, {
                        children: [
                            JSXRuntime.jsx("input", {
                                ref: s,
                                type: "file",
                                accept: o,
                                style: { display: "none" },
                            }),
                            JSXRuntime.jsx("button", {
                                style: u,
                                onClick: function () {
                                    s.current.click();
                                },
                                children: l,
                            }),
                        ],
                    })
                );
            }
            Rt().extend(Dt()), Rt().extend(jt());
            var Xt = require('is-buffer');
            function Yt(e) {
                return e && "object" === typeof e
                    ? "position" in e || "type" in e
                        ? Qt(e.position)
                        : "start" in e || "end" in e
                        ? Qt(e)
                        : "line" in e || "column" in e
                        ? Kt(e)
                        : ""
                    : "";
            }
            function Kt(e) {
                return qt(e && e.line) + ":" + qt(e && e.column);
            }
            function Qt(e) {
                return Kt(e && e.start) + "-" + Kt(e && e.end);
            }
            function qt(e) {
                return e && "number" === typeof e ? e : 1;
            }
            var Jt = (function (e) {
                x(n, e);
                var t = O(n);
                function n(e, r, i) {
                    var o;
                    m(this, n);
                    var a = [null, null],
                        u = {
                            start: { line: null, column: null },
                            end: { line: null, column: null },
                        };
                    if (
                        ((o = t.call(this)),
                        "string" === typeof r && ((i = r), (r = void 0)),
                        "string" === typeof i)
                    ) {
                        var l = i.indexOf(":");
                        -1 === l
                            ? (a[1] = i)
                            : ((a[0] = i.slice(0, l)), (a[1] = i.slice(l + 1)));
                    }
                    return (
                        r &&
                            ("type" in r || "position" in r
                                ? r.position && (u = r.position)
                                : "start" in r || "end" in r
                                ? (u = r)
                                : ("line" in r || "column" in r) &&
                                  (u.start = r)),
                        (o.name = Yt(r) || "1:1"),
                        (o.message = "object" === typeof e ? e.message : e),
                        (o.stack = "object" === typeof e ? e.stack : ""),
                        (o.reason = o.message),
                        o.fatal,
                        (o.line = u.start.line),
                        (o.column = u.start.column),
                        (o.source = a[0]),
                        (o.ruleId = a[1]),
                        (o.position = u),
                        o.actual,
                        o.expected,
                        o.file,
                        o.url,
                        o.note,
                        o
                    );
                }
                return b(n);
            })(_(Error));
            (Jt.prototype.file = ""),
                (Jt.prototype.name = ""),
                (Jt.prototype.reason = ""),
                (Jt.prototype.message = ""),
                (Jt.prototype.stack = ""),
                (Jt.prototype.fatal = null),
                (Jt.prototype.column = null),
                (Jt.prototype.line = null),
                (Jt.prototype.source = null),
                (Jt.prototype.ruleId = null),
                (Jt.prototype.position = null);
            var Zt = {
                basename: function (e, t) {
                    if (void 0 !== t && "string" !== typeof t)
                        throw new TypeError('"ext" argument must be a string');
                    tn(e);
                    var n,
                        r = 0,
                        i = -1,
                        o = e.length;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; o--; )
                            if (47 === e.charCodeAt(o)) {
                                if (n) {
                                    r = o + 1;
                                    break;
                                }
                            } else i < 0 && ((n = !0), (i = o + 1));
                        return i < 0 ? "" : e.slice(r, i);
                    }
                    if (t === e) return "";
                    var a = -1,
                        u = t.length - 1;
                    for (; o--; )
                        if (47 === e.charCodeAt(o)) {
                            if (n) {
                                r = o + 1;
                                break;
                            }
                        } else
                            a < 0 && ((n = !0), (a = o + 1)),
                                u > -1 &&
                                    (e.charCodeAt(o) === t.charCodeAt(u--)
                                        ? u < 0 && (i = o)
                                        : ((u = -1), (i = a)));
                    r === i ? (i = a) : i < 0 && (i = e.length);
                    return e.slice(r, i);
                },
                dirname: function (e) {
                    if ((tn(e), 0 === e.length)) return ".";
                    var t,
                        n = -1,
                        r = e.length;
                    for (; --r; )
                        if (47 === e.charCodeAt(r)) {
                            if (t) {
                                n = r;
                                break;
                            }
                        } else t || (t = !0);
                    return n < 0
                        ? 47 === e.charCodeAt(0)
                            ? "/"
                            : "."
                        : 1 === n && 47 === e.charCodeAt(0)
                        ? "//"
                        : e.slice(0, n);
                },
                extname: function (e) {
                    tn(e);
                    var t,
                        n = e.length,
                        r = -1,
                        i = 0,
                        o = -1,
                        a = 0;
                    for (; n--; ) {
                        var u = e.charCodeAt(n);
                        if (47 !== u)
                            r < 0 && ((t = !0), (r = n + 1)),
                                46 === u
                                    ? o < 0
                                        ? (o = n)
                                        : 1 !== a && (a = 1)
                                    : o > -1 && (a = -1);
                        else if (t) {
                            i = n + 1;
                            break;
                        }
                    }
                    if (
                        o < 0 ||
                        r < 0 ||
                        0 === a ||
                        (1 === a && o === r - 1 && o === i + 1)
                    )
                        return "";
                    return e.slice(o, r);
                },
                join: function () {
                    for (
                        var e,
                            t = -1,
                            n = arguments.length,
                            r = new Array(n),
                            i = 0;
                        i < n;
                        i++
                    )
                        r[i] = arguments[i];
                    for (; ++t < r.length; )
                        tn(r[t]),
                            r[t] && (e = void 0 === e ? r[t] : e + "/" + r[t]);
                    return void 0 === e ? "." : en(e);
                },
                sep: "/",
            };
            function en(e) {
                tn(e);
                var t = 47 === e.charCodeAt(0),
                    n = (function (e, t) {
                        var n,
                            r,
                            i = "",
                            o = 0,
                            a = -1,
                            u = 0,
                            l = -1;
                        for (; ++l <= e.length; ) {
                            if (l < e.length) n = e.charCodeAt(l);
                            else {
                                if (47 === n) break;
                                n = 47;
                            }
                            if (47 === n) {
                                if (a === l - 1 || 1 === u);
                                else if (a !== l - 1 && 2 === u) {
                                    if (
                                        i.length < 2 ||
                                        2 !== o ||
                                        46 !== i.charCodeAt(i.length - 1) ||
                                        46 !== i.charCodeAt(i.length - 2)
                                    )
                                        if (i.length > 2) {
                                            if (
                                                (r = i.lastIndexOf("/")) !==
                                                i.length - 1
                                            ) {
                                                r < 0
                                                    ? ((i = ""), (o = 0))
                                                    : (o =
                                                          (i = i.slice(0, r))
                                                              .length -
                                                          1 -
                                                          i.lastIndexOf("/")),
                                                    (a = l),
                                                    (u = 0);
                                                continue;
                                            }
                                        } else if (i.length > 0) {
                                            (i = ""), (o = 0), (a = l), (u = 0);
                                            continue;
                                        }
                                    t &&
                                        ((i = i.length > 0 ? i + "/.." : ".."),
                                        (o = 2));
                                } else
                                    i.length > 0
                                        ? (i += "/" + e.slice(a + 1, l))
                                        : (i = e.slice(a + 1, l)),
                                        (o = l - a - 1);
                                (a = l), (u = 0);
                            } else 46 === n && u > -1 ? u++ : (u = -1);
                        }
                        return i;
                    })(e, !t);
                return (
                    0 !== n.length || t || (n = "."),
                    n.length > 0 &&
                        47 === e.charCodeAt(e.length - 1) &&
                        (n += "/"),
                    t ? "/" + n : n
                );
            }
            function tn(e) {
                if ("string" !== typeof e)
                    throw new TypeError(
                        "Path must be a string. Received " + JSON.stringify(e)
                    );
            }
            var nn = {
                cwd: function () {
                    return "/";
                },
            };
            function rn(e) {
                return (
                    null !== e && "object" === typeof e && e.href && e.origin
                );
            }
            function on(e) {
                if ("string" === typeof e) e = new URL(e);
                else if (!rn(e)) {
                    var t = new TypeError(
                        'The "path" argument must be of type string or an instance of URL. Received `' +
                            e +
                            "`"
                    );
                    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
                }
                if ("file:" !== e.protocol) {
                    var n = new TypeError("The URL must be of scheme file");
                    throw ((n.code = "ERR_INVALID_URL_SCHEME"), n);
                }
                return (function (e) {
                    if ("" !== e.hostname) {
                        var t = new TypeError(
                            'File URL host must be "localhost" or empty on darwin'
                        );
                        throw ((t.code = "ERR_INVALID_FILE_URL_HOST"), t);
                    }
                    var n = e.pathname,
                        r = -1;
                    for (; ++r < n.length; )
                        if (
                            37 === n.charCodeAt(r) &&
                            50 === n.charCodeAt(r + 1)
                        ) {
                            var i = n.charCodeAt(r + 2);
                            if (70 === i || 102 === i) {
                                var o = new TypeError(
                                    "File URL path must not include encoded / characters"
                                );
                                throw (
                                    ((o.code = "ERR_INVALID_FILE_URL_PATH"), o)
                                );
                            }
                        }
                    return decodeURIComponent(n);
                })(e);
            }
            var an = [
                    "history",
                    "path",
                    "basename",
                    "stem",
                    "extname",
                    "dirname",
                ],
                un = (function () {
                    function e(t) {
                        var n;
                        m(this, e),
                            (n = t
                                ? "string" === typeof t || Xt(t)
                                    ? { value: t }
                                    : rn(t)
                                    ? { path: t }
                                    : t
                                : {}),
                            (this.data = {}),
                            (this.messages = []),
                            (this.history = []),
                            (this.cwd = nn.cwd()),
                            this.value,
                            this.stored,
                            this.result,
                            this.map;
                        for (var r, i = -1; ++i < an.length; ) {
                            var o = an[i];
                            o in n &&
                                void 0 !== n[o] &&
                                (this[o] = "history" === o ? Qe(n[o]) : n[o]);
                        }
                        for (r in n) an.includes(r) || (this[r] = n[r]);
                    }
                    return (
                        b(e, [
                            {
                                key: "path",
                                get: function () {
                                    return this.history[
                                        this.history.length - 1
                                    ];
                                },
                                set: function (e) {
                                    rn(e) && (e = on(e)),
                                        sn(e, "path"),
                                        this.path !== e && this.history.push(e);
                                },
                            },
                            {
                                key: "dirname",
                                get: function () {
                                    return "string" === typeof this.path
                                        ? Zt.dirname(this.path)
                                        : void 0;
                                },
                                set: function (e) {
                                    cn(this.basename, "dirname"),
                                        (this.path = Zt.join(
                                            e || "",
                                            this.basename
                                        ));
                                },
                            },
                            {
                                key: "basename",
                                get: function () {
                                    return "string" === typeof this.path
                                        ? Zt.basename(this.path)
                                        : void 0;
                                },
                                set: function (e) {
                                    sn(e, "basename"),
                                        ln(e, "basename"),
                                        (this.path = Zt.join(
                                            this.dirname || "",
                                            e
                                        ));
                                },
                            },
                            {
                                key: "extname",
                                get: function () {
                                    return "string" === typeof this.path
                                        ? Zt.extname(this.path)
                                        : void 0;
                                },
                                set: function (e) {
                                    if (
                                        (ln(e, "extname"),
                                        cn(this.dirname, "extname"),
                                        e)
                                    ) {
                                        if (46 !== e.charCodeAt(0))
                                            throw new Error(
                                                "`extname` must start with `.`"
                                            );
                                        if (e.includes(".", 1))
                                            throw new Error(
                                                "`extname` cannot contain multiple dots"
                                            );
                                    }
                                    this.path = Zt.join(
                                        this.dirname,
                                        this.stem + (e || "")
                                    );
                                },
                            },
                            {
                                key: "stem",
                                get: function () {
                                    return "string" === typeof this.path
                                        ? Zt.basename(this.path, this.extname)
                                        : void 0;
                                },
                                set: function (e) {
                                    sn(e, "stem"),
                                        ln(e, "stem"),
                                        (this.path = Zt.join(
                                            this.dirname || "",
                                            e + (this.extname || "")
                                        ));
                                },
                            },
                            {
                                key: "toString",
                                value: function (e) {
                                    return (this.value || "").toString(e);
                                },
                            },
                            {
                                key: "message",
                                value: function (e, t, n) {
                                    var r = new Jt(e, t, n);
                                    return (
                                        this.path &&
                                            ((r.name =
                                                this.path + ":" + r.name),
                                            (r.file = this.path)),
                                        (r.fatal = !1),
                                        this.messages.push(r),
                                        r
                                    );
                                },
                            },
                            {
                                key: "info",
                                value: function (e, t, n) {
                                    var r = this.message(e, t, n);
                                    return (r.fatal = null), r;
                                },
                            },
                            {
                                key: "fail",
                                value: function (e, t, n) {
                                    var r = this.message(e, t, n);
                                    throw ((r.fatal = !0), r);
                                },
                            },
                        ]),
                        e
                    );
                })();
            function ln(e, t) {
                if (e && e.includes(Zt.sep))
                    throw new Error(
                        "`" +
                            t +
                            "` cannot be a path: did not expect `" +
                            Zt.sep +
                            "`"
                    );
            }
            function sn(e, t) {
                if (!e) throw new Error("`" + t + "` cannot be empty");
            }
            function cn(e, t) {
                if (!e)
                    throw new Error(
                        "Setting `" + t + "` requires `path` to be set too"
                    );
            }
            function fn(e) {
                return assertIsArray(e) || Ke(e) || unsupportedIterableToArray(e) || throwNonIterableError();
            }
            function dn(e) {
                if (e) throw e;
            }
            var pn = n(132);
            function hn(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype;
            }
            function vn(e, t) {
                var n;
                return function () {
                    for (
                        var t = arguments.length, o = new Array(t), a = 0;
                        a < t;
                        a++
                    )
                        o[a] = arguments[a];
                    var u,
                        l = e.length > o.length;
                    l && o.push(r);
                    try {
                        u = e.apply(this, o);
                    } catch (c) {
                        var s = c;
                        if (l && n) throw s;
                        return r(s);
                    }
                    l ||
                        (u instanceof Promise
                            ? u.then(i, r)
                            : u instanceof Error
                            ? r(u)
                            : i(u));
                };
                function r(e) {
                    if (!n) {
                        n = !0;
                        for (
                            var r = arguments.length,
                                i = new Array(r > 1 ? r - 1 : 0),
                                o = 1;
                            o < r;
                            o++
                        )
                            i[o - 1] = arguments[o];
                        t.apply(void 0, [e].concat(i));
                    }
                }
                function i(e) {
                    r(null, e);
                }
            }
            var gn = (function e() {
                    var t,
                        n = (function () {
                            var e = [],
                                t = {
                                    run: function () {
                                        for (
                                            var t = arguments.length,
                                                n = new Array(t),
                                                r = 0;
                                            r < t;
                                            r++
                                        )
                                            n[r] = arguments[r];
                                        var i = -1,
                                            o = n.pop();
                                        if ("function" !== typeof o)
                                            throw new TypeError(
                                                "Expected function as last argument, not " +
                                                    o
                                            );
                                        function a(t) {
                                            var r = e[++i],
                                                u = -1;
                                            if (t) o(t);
                                            else {
                                                for (
                                                    var l = arguments.length,
                                                        s = new Array(
                                                            l > 1 ? l - 1 : 0
                                                        ),
                                                        c = 1;
                                                    c < l;
                                                    c++
                                                )
                                                    s[c - 1] = arguments[c];
                                                for (; ++u < n.length; )
                                                    (null !== s[u] &&
                                                        void 0 !== s[u]) ||
                                                        (s[u] = n[u]);
                                                (n = s),
                                                    r
                                                        ? vn(r, a).apply(
                                                              void 0,
                                                              s
                                                          )
                                                        : o.apply(
                                                              void 0,
                                                              [null].concat(s)
                                                          );
                                            }
                                        }
                                        a.apply(void 0, [null].concat(Qe(n)));
                                    },
                                    use: function (n) {
                                        if ("function" !== typeof n)
                                            throw new TypeError(
                                                "Expected `middelware` to be a function, not " +
                                                    n
                                            );
                                        return e.push(n), t;
                                    },
                                };
                            return t;
                        })(),
                        r = [],
                        i = {},
                        o = -1;
                    return (
                        (a.data = function (e, n) {
                            if ("string" === typeof e)
                                return 2 === arguments.length
                                    ? (xn("data", t), (i[e] = n), a)
                                    : (mn.call(i, e) && i[e]) || null;
                            if (e) return xn("data", t), (i = e), a;
                            return i;
                        }),
                        (a.Parser = void 0),
                        (a.Compiler = void 0),
                        (a.freeze = function () {
                            if (t) return a;
                            for (; ++o < r.length; ) {
                                var e = fn(r[o]),
                                    i = e[0],
                                    u = e.slice(1);
                                if (!1 !== u[0]) {
                                    !0 === u[0] && (u[0] = void 0);
                                    var l = i.call.apply(i, [a].concat(Qe(u)));
                                    "function" === typeof l && n.use(l);
                                }
                            }
                            return (t = !0), (o = Number.POSITIVE_INFINITY), a;
                        }),
                        (a.attachers = r),
                        (a.use = function (e) {
                            for (
                                var n = arguments.length,
                                    o = new Array(n > 1 ? n - 1 : 0),
                                    u = 1;
                                u < n;
                                u++
                            )
                                o[u - 1] = arguments[u];
                            var l;
                            if ((xn("use", t), null === e || void 0 === e));
                            else if ("function" === typeof e)
                                d.apply(void 0, [e].concat(o));
                            else {
                                if ("object" !== typeof e)
                                    throw new TypeError(
                                        "Expected usable value, not `" + e + "`"
                                    );
                                Array.isArray(e) ? f(e) : c(e);
                            }
                            l &&
                                (i.settings = Object.assign(
                                    i.settings || {},
                                    l
                                ));
                            return a;
                            function s(e) {
                                if ("function" === typeof e) d(e);
                                else {
                                    if ("object" !== typeof e)
                                        throw new TypeError(
                                            "Expected usable value, not `" +
                                                e +
                                                "`"
                                        );
                                    if (Array.isArray(e)) {
                                        var t = fn(e),
                                            n = t[0],
                                            r = t.slice(1);
                                        d.apply(void 0, [n].concat(Qe(r)));
                                    } else c(e);
                                }
                            }
                            function c(e) {
                                f(e.plugins),
                                    e.settings &&
                                        (l = Object.assign(
                                            l || {},
                                            e.settings
                                        ));
                            }
                            function f(e) {
                                var t = -1;
                                if (null === e || void 0 === e);
                                else {
                                    if (!Array.isArray(e))
                                        throw new TypeError(
                                            "Expected a list of plugins, not `" +
                                                e +
                                                "`"
                                        );
                                    for (; ++t < e.length; ) {
                                        s(e[t]);
                                    }
                                }
                            }
                            function d(e, t) {
                                for (var n, i = -1; ++i < r.length; )
                                    if (r[i][0] === e) {
                                        n = r[i];
                                        break;
                                    }
                                n
                                    ? (hn(n[1]) &&
                                          hn(t) &&
                                          (t = pn(!0, n[1], t)),
                                      (n[1] = t))
                                    : r.push(
                                          Array.prototype.slice.call(arguments)
                                      );
                            }
                        }),
                        (a.parse = function (e) {
                            a.freeze();
                            var t = Sn(e),
                                n = a.Parser;
                            if ((bn("parse", n), yn(n, "parse")))
                                return new n(String(t), t).parse();
                            return n(String(t), t);
                        }),
                        (a.stringify = function (e, t) {
                            a.freeze();
                            var n = Sn(t),
                                r = a.Compiler;
                            if ((wn("stringify", r), En(e), yn(r, "compile")))
                                return new r(e, n).compile();
                            return r(e, n);
                        }),
                        (a.run = function (e, t, r) {
                            En(e),
                                a.freeze(),
                                r ||
                                    "function" !== typeof t ||
                                    ((r = t), (t = void 0));
                            if (!r) return new Promise(i);
                            function i(i, o) {
                                function a(t, n, a) {
                                    (n = n || e),
                                        t ? o(t) : i ? i(n) : r(null, n, a);
                                }
                                n.run(e, Sn(t), a);
                            }
                            i(null, r);
                        }),
                        (a.runSync = function (e, t) {
                            var n, r;
                            return a.run(e, t, i), kn("runSync", "run", r), n;
                            function i(e, t) {
                                dn(e), (n = t), (r = !0);
                            }
                        }),
                        (a.process = function (e, t) {
                            if (
                                (a.freeze(),
                                bn("process", a.Parser),
                                wn("process", a.Compiler),
                                !t)
                            )
                                return new Promise(n);
                            function n(n, r) {
                                var i = Sn(e);
                                function o(e, i) {
                                    e || !i ? r(e) : n ? n(i) : t(null, i);
                                }
                                a.run(a.parse(i), i, function (e, t, n) {
                                    if (!e && t && n) {
                                        var r = a.stringify(t, n);
                                        void 0 === r ||
                                            null === r ||
                                            ("string" === typeof (i = r) ||
                                            Xt(i)
                                                ? (n.value = r)
                                                : (n.result = r)),
                                            o(e, n);
                                    } else o(e);
                                    var i;
                                });
                            }
                            n(null, t);
                        }),
                        (a.processSync = function (e) {
                            var t;
                            a.freeze(),
                                bn("processSync", a.Parser),
                                wn("processSync", a.Compiler);
                            var n = Sn(e);
                            return (
                                a.process(n, r),
                                kn("processSync", "process", t),
                                n
                            );
                            function r(e) {
                                (t = !0), dn(e);
                            }
                        }),
                        a
                    );
                    function a() {
                        for (var t = e(), n = -1; ++n < r.length; )
                            t.use.apply(t, Qe(r[n]));
                        return t.data(pn(!0, {}, i)), t;
                    }
                })().freeze(),
                mn = {}.hasOwnProperty;
            function yn(e, t) {
                return (
                    "function" === typeof e &&
                    e.prototype &&
                    ((function (e) {
                        var t;
                        for (t in e) if (mn.call(e, t)) return !0;
                        return !1;
                    })(e.prototype) ||
                        t in e.prototype)
                );
            }
            function bn(e, t) {
                if ("function" !== typeof t)
                    throw new TypeError("Cannot `" + e + "` without `Parser`");
            }
            function wn(e, t) {
                if ("function" !== typeof t)
                    throw new TypeError(
                        "Cannot `" + e + "` without `Compiler`"
                    );
            }
            function xn(e, t) {
                if (t)
                    throw new Error(
                        "Cannot call `" +
                            e +
                            "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
                    );
            }
            function En(e) {
                if (!hn(e) || "string" !== typeof e.type)
                    throw new TypeError("Expected node, got `" + e + "`");
            }
            function kn(e, t, n) {
                if (!n)
                    throw new Error(
                        "`" + e + "` finished async. Use `" + t + "` instead"
                    );
            }
            function Sn(e) {
                return (function (e) {
                    return Boolean(
                        e &&
                            "object" === typeof e &&
                            "message" in e &&
                            "messages" in e
                    );
                })(e)
                    ? e
                    : new un(e);
            }
            function An(e, t) {
                var n = (t || {}).includeImageAlt;
                return Cn(e, void 0 === n || n);
            }
            function Cn(e, t) {
                return (
                    (e &&
                        "object" === typeof e &&
                        (e.value ||
                            (t ? e.alt : "") ||
                            ("children" in e && On(e.children, t)) ||
                            (Array.isArray(e) && On(e, t)))) ||
                    ""
                );
            }
            function On(e, t) {
                for (var n = [], r = -1; ++r < e.length; ) n[r] = Cn(e[r], t);
                return n.join("");
            }
            function Tn(e, t, n, r) {
                var i,
                    o = e.length,
                    a = 0;
                if (
                    ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
                    (n = n > 0 ? n : 0),
                    r.length < 1e4)
                )
                    (i = Array.from(r)).unshift(t, n), [].splice.apply(e, i);
                else
                    for (n && [].splice.apply(e, [t, n]); a < r.length; )
                        (i = r.slice(a, a + 1e4)).unshift(t, 0),
                            [].splice.apply(e, i),
                            (a += 1e4),
                            (t += 1e4);
            }
            function _n(e, t) {
                return e.length > 0 ? (Tn(e, e.length, 0, t), e) : t;
            }
            var In = {}.hasOwnProperty;
            function Nn(e) {
                for (var t = {}, n = -1; ++n < e.length; ) Ln(t, e[n]);
                return t;
            }
            function Ln(e, t) {
                var n;
                for (n in t) {
                    var r = (In.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                        i = t[n],
                        o = void 0;
                    for (o in i) {
                        In.call(r, o) || (r[o] = []);
                        var a = i[o];
                        Rn(r[o], Array.isArray(a) ? a : a ? [a] : []);
                    }
                }
            }
            function Rn(e, t) {
                for (var n = -1, r = []; ++n < t.length; )
                    ("after" === t[n].add ? e : r).push(t[n]);
                Tn(e, 0, 0, r);
            }
            var Pn = Vn(/[A-Za-z]/),
                Dn = Vn(/\d/),
                Mn = Vn(/[\dA-Fa-f]/),
                jn = Vn(/[\dA-Za-z]/),
                Fn = Vn(/[!-/:-@[-`{-~]/),
                Bn = Vn(/[#-'*+\--9=?A-Z^-~]/);
            function Un(e) {
                return null !== e && (e < 32 || 127 === e);
            }
            function zn(e) {
                return null !== e && (e < 0 || 32 === e);
            }
            function Hn(e) {
                return null !== e && e < -2;
            }
            function Wn(e) {
                return -2 === e || -1 === e || 32 === e;
            }
            var Gn = Vn(/\s/),
                $n = Vn(
                    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
                );
            function Vn(e) {
                return function (t) {
                    return null !== t && e.test(String.fromCharCode(t));
                };
            }
            function Xn(e, t, n, r) {
                var i = r ? r - 1 : Number.POSITIVE_INFINITY,
                    o = 0;
                return function (r) {
                    if (Wn(r)) return e.enter(n), a(r);
                    return t(r);
                };
                function a(r) {
                    return Wn(r) && o++ < i
                        ? (e.consume(r), a)
                        : (e.exit(n), t(r));
                }
            }
            var Yn = {
                tokenize: function (e) {
                    var t,
                        n = e.attempt(
                            this.parser.constructs.contentInitial,
                            function (t) {
                                if (null === t) return void e.consume(t);
                                return (
                                    e.enter("lineEnding"),
                                    e.consume(t),
                                    e.exit("lineEnding"),
                                    Xn(e, n, "linePrefix")
                                );
                            },
                            function (t) {
                                return e.enter("paragraph"), r(t);
                            }
                        );
                    return n;
                    function r(n) {
                        var r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t,
                        });
                        return t && (t.next = r), (t = r), i(n);
                    }
                    function i(t) {
                        return null === t
                            ? (e.exit("chunkText"),
                              e.exit("paragraph"),
                              void e.consume(t))
                            : Hn(t)
                            ? (e.consume(t), e.exit("chunkText"), r)
                            : (e.consume(t), i);
                    }
                },
            };
            var Kn = {
                    tokenize: function (e) {
                        var t,
                            n,
                            r,
                            i = this,
                            o = [],
                            a = 0;
                        return u;
                        function u(t) {
                            if (a < o.length) {
                                var n = o[a];
                                return (
                                    (i.containerState = n[1]),
                                    e.attempt(n[0].continuation, l, s)(t)
                                );
                            }
                            return s(t);
                        }
                        function l(e) {
                            if ((a++, i.containerState._closeFlow)) {
                                (i.containerState._closeFlow = void 0),
                                    t && y();
                                for (var n, r = i.events.length, o = r; o--; )
                                    if (
                                        "exit" === i.events[o][0] &&
                                        "chunkFlow" === i.events[o][1].type
                                    ) {
                                        n = i.events[o][1].end;
                                        break;
                                    }
                                m(a);
                                for (var l = r; l < i.events.length; )
                                    (i.events[l][1].end = Object.assign({}, n)),
                                        l++;
                                return (
                                    Tn(i.events, o + 1, 0, i.events.slice(r)),
                                    (i.events.length = l),
                                    s(e)
                                );
                            }
                            return u(e);
                        }
                        function s(n) {
                            if (a === o.length) {
                                if (!t) return d(n);
                                if (
                                    t.currentConstruct &&
                                    t.currentConstruct.concrete
                                )
                                    return h(n);
                                i.interrupt = Boolean(
                                    t.currentConstruct &&
                                        !t._gfmTableDynamicInterruptHack
                                );
                            }
                            return (
                                (i.containerState = {}), e.check(Qn, c, f)(n)
                            );
                        }
                        function c(e) {
                            return t && y(), m(a), d(e);
                        }
                        function f(e) {
                            return (
                                (i.parser.lazy[i.now().line] = a !== o.length),
                                (r = i.now().offset),
                                h(e)
                            );
                        }
                        function d(t) {
                            return (
                                (i.containerState = {}), e.attempt(Qn, p, h)(t)
                            );
                        }
                        function p(e) {
                            return (
                                a++,
                                o.push([i.currentConstruct, i.containerState]),
                                d(e)
                            );
                        }
                        function h(r) {
                            return null === r
                                ? (t && y(), m(0), void e.consume(r))
                                : ((t = t || i.parser.flow(i.now())),
                                  e.enter("chunkFlow", {
                                      contentType: "flow",
                                      previous: n,
                                      _tokenizer: t,
                                  }),
                                  v(r));
                        }
                        function v(t) {
                            return null === t
                                ? (g(e.exit("chunkFlow"), !0),
                                  m(0),
                                  void e.consume(t))
                                : Hn(t)
                                ? (e.consume(t),
                                  g(e.exit("chunkFlow")),
                                  (a = 0),
                                  (i.interrupt = void 0),
                                  u)
                                : (e.consume(t), v);
                        }
                        function g(e, o) {
                            var u = i.sliceStream(e);
                            if (
                                (o && u.push(null),
                                (e.previous = n),
                                n && (n.next = e),
                                (n = e),
                                t.defineSkip(e.start),
                                t.write(u),
                                i.parser.lazy[e.start.line])
                            ) {
                                for (var l = t.events.length; l--; )
                                    if (
                                        t.events[l][1].start.offset < r &&
                                        (!t.events[l][1].end ||
                                            t.events[l][1].end.offset > r)
                                    )
                                        return;
                                for (
                                    var s, c, f = i.events.length, d = f;
                                    d--;

                                )
                                    if (
                                        "exit" === i.events[d][0] &&
                                        "chunkFlow" === i.events[d][1].type
                                    ) {
                                        if (s) {
                                            c = i.events[d][1].end;
                                            break;
                                        }
                                        s = !0;
                                    }
                                for (m(a), l = f; l < i.events.length; )
                                    (i.events[l][1].end = Object.assign({}, c)),
                                        l++;
                                Tn(i.events, d + 1, 0, i.events.slice(f)),
                                    (i.events.length = l);
                            }
                        }
                        function m(t) {
                            for (var n = o.length; n-- > t; ) {
                                var r = o[n];
                                (i.containerState = r[1]), r[0].exit.call(i, e);
                            }
                            o.length = t;
                        }
                        function y() {
                            t.write([null]),
                                (n = void 0),
                                (t = void 0),
                                (i.containerState._closeFlow = void 0);
                        }
                    },
                },
                Qn = {
                    tokenize: function (e, t, n) {
                        return Xn(
                            e,
                            e.attempt(this.parser.constructs.document, t, n),
                            "linePrefix",
                            this.parser.constructs.disable.null.includes(
                                "codeIndented"
                            )
                                ? void 0
                                : 4
                        );
                    },
                };
            var qn = {
                tokenize: function (e, t, n) {
                    return Xn(
                        e,
                        function (e) {
                            return null === e || Hn(e) ? t(e) : n(e);
                        },
                        "linePrefix"
                    );
                },
                partial: !0,
            };
            function Jn(e) {
                for (
                    var t, n, r, i, o, a, u, l = {}, s = -1;
                    ++s < e.length;

                ) {
                    for (; s in l; ) s = l[s];
                    if (
                        ((t = e[s]),
                        s &&
                            "chunkFlow" === t[1].type &&
                            "listItemPrefix" === e[s - 1][1].type &&
                            ((r = 0) < (a = t[1]._tokenizer.events).length &&
                                "lineEndingBlank" === a[r][1].type &&
                                (r += 2),
                            r < a.length && "content" === a[r][1].type))
                    )
                        for (; ++r < a.length && "content" !== a[r][1].type; )
                            "chunkText" === a[r][1].type &&
                                ((a[r][1]._isInFirstContentOfListItem = !0),
                                r++);
                    if ("enter" === t[0])
                        t[1].contentType &&
                            (Object.assign(l, Zn(e, s)), (s = l[s]), (u = !0));
                    else if (t[1]._container) {
                        for (
                            r = s, n = void 0;
                            r-- &&
                            ("lineEnding" === (i = e[r])[1].type ||
                                "lineEndingBlank" === i[1].type);

                        )
                            "enter" === i[0] &&
                                (n && (e[n][1].type = "lineEndingBlank"),
                                (i[1].type = "lineEnding"),
                                (n = r));
                        n &&
                            ((t[1].end = Object.assign({}, e[n][1].start)),
                            (o = e.slice(n, s)).unshift(t),
                            Tn(e, n, s - n + 1, o));
                    }
                }
                return !u;
            }
            function Zn(e, t) {
                for (
                    var n,
                        r,
                        i = e[t][1],
                        o = e[t][2],
                        a = t - 1,
                        u = [],
                        l = i._tokenizer || o.parser[i.contentType](i.start),
                        s = l.events,
                        c = [],
                        f = {},
                        d = -1,
                        p = i,
                        h = 0,
                        v = 0,
                        g = [v];
                    p;

                ) {
                    for (; e[++a][1] !== p; );
                    u.push(a),
                        p._tokenizer ||
                            ((n = o.sliceStream(p)),
                            p.next || n.push(null),
                            r && l.defineSkip(p.start),
                            p._isInFirstContentOfListItem &&
                                (l._gfmTasklistFirstContentOfListItem = !0),
                            l.write(n),
                            p._isInFirstContentOfListItem &&
                                (l._gfmTasklistFirstContentOfListItem =
                                    void 0)),
                        (r = p),
                        (p = p.next);
                }
                for (p = i; ++d < s.length; )
                    "exit" === s[d][0] &&
                        "enter" === s[d - 1][0] &&
                        s[d][1].type === s[d - 1][1].type &&
                        s[d][1].start.line !== s[d][1].end.line &&
                        ((v = d + 1),
                        g.push(v),
                        (p._tokenizer = void 0),
                        (p.previous = void 0),
                        (p = p.next));
                for (
                    l.events = [],
                        p
                            ? ((p._tokenizer = void 0), (p.previous = void 0))
                            : g.pop(),
                        d = g.length;
                    d--;

                ) {
                    var m = s.slice(g[d], g[d + 1]),
                        y = u.pop();
                    c.unshift([y, y + m.length - 1]), Tn(e, y, 2, m);
                }
                for (d = -1; ++d < c.length; )
                    (f[h + c[d][0]] = h + c[d][1]),
                        (h += c[d][1] - c[d][0] - 1);
                return f;
            }
            var er = {
                    tokenize: function (e, t) {
                        var n;
                        return function (t) {
                            return (
                                e.enter("content"),
                                (n = e.enter("chunkContent", {
                                    contentType: "content",
                                })),
                                r(t)
                            );
                        };
                        function r(t) {
                            return null === t
                                ? i(t)
                                : Hn(t)
                                ? e.check(tr, o, i)(t)
                                : (e.consume(t), r);
                        }
                        function i(n) {
                            return (
                                e.exit("chunkContent"), e.exit("content"), t(n)
                            );
                        }
                        function o(t) {
                            return (
                                e.consume(t),
                                e.exit("chunkContent"),
                                (n.next = e.enter("chunkContent", {
                                    contentType: "content",
                                    previous: n,
                                })),
                                (n = n.next),
                                r
                            );
                        }
                    },
                    resolve: function (e) {
                        return Jn(e), e;
                    },
                },
                tr = {
                    tokenize: function (e, t, n) {
                        var r = this;
                        return function (t) {
                            return (
                                e.exit("chunkContent"),
                                e.enter("lineEnding"),
                                e.consume(t),
                                e.exit("lineEnding"),
                                Xn(e, i, "linePrefix")
                            );
                        };
                        function i(i) {
                            if (null === i || Hn(i)) return n(i);
                            var o = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes(
                                "codeIndented"
                            ) &&
                                o &&
                                "linePrefix" === o[1].type &&
                                o[2].sliceSerialize(o[1], !0).length >= 4
                                ? t(i)
                                : e.interrupt(
                                      r.parser.constructs.flow,
                                      n,
                                      t
                                  )(i);
                        }
                    },
                    partial: !0,
                };
            var nr = {
                tokenize: function (e) {
                    var t = this,
                        n = e.attempt(
                            qn,
                            function (r) {
                                if (null === r) return void e.consume(r);
                                return (
                                    e.enter("lineEndingBlank"),
                                    e.consume(r),
                                    e.exit("lineEndingBlank"),
                                    (t.currentConstruct = void 0),
                                    n
                                );
                            },
                            e.attempt(
                                this.parser.constructs.flowInitial,
                                r,
                                Xn(
                                    e,
                                    e.attempt(
                                        this.parser.constructs.flow,
                                        r,
                                        e.attempt(er, r)
                                    ),
                                    "linePrefix"
                                )
                            )
                        );
                    return n;
                    function r(r) {
                        if (null !== r)
                            return (
                                e.enter("lineEnding"),
                                e.consume(r),
                                e.exit("lineEnding"),
                                (t.currentConstruct = void 0),
                                n
                            );
                        e.consume(r);
                    }
                },
            };
            var rr = { resolveAll: ur() },
                ir = ar("string"),
                or = ar("text");
            function ar(e) {
                return {
                    tokenize: function (t) {
                        var n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, a);
                        return o;
                        function o(e) {
                            return l(e) ? i(e) : a(e);
                        }
                        function a(e) {
                            if (null !== e)
                                return t.enter("data"), t.consume(e), u;
                            t.consume(e);
                        }
                        function u(e) {
                            return l(e)
                                ? (t.exit("data"), i(e))
                                : (t.consume(e), u);
                        }
                        function l(e) {
                            if (null === e) return !0;
                            var t = r[e],
                                i = -1;
                            if (t)
                                for (; ++i < t.length; ) {
                                    var o = t[i];
                                    if (
                                        !o.previous ||
                                        o.previous.call(n, n.previous)
                                    )
                                        return !0;
                                }
                            return !1;
                        }
                    },
                    resolveAll: ur("text" === e ? lr : void 0),
                };
            }
            function ur(e) {
                return function (t, n) {
                    var r,
                        i = -1;
                    for (; ++i <= t.length; )
                        void 0 === r
                            ? t[i] && "data" === t[i][1].type && ((r = i), i++)
                            : (t[i] && "data" === t[i][1].type) ||
                              (i !== r + 2 &&
                                  ((t[r][1].end = t[i - 1][1].end),
                                  t.splice(r + 2, i - r - 2),
                                  (i = r + 2)),
                              (r = void 0));
                    return e ? e(t, n) : t;
                };
            }
            function lr(e, t) {
                for (var n = 0; ++n <= e.length; )
                    if (
                        (n === e.length || "lineEnding" === e[n][1].type) &&
                        "data" === e[n - 1][1].type
                    ) {
                        for (
                            var r = e[n - 1][1],
                                i = t.sliceStream(r),
                                o = i.length,
                                a = -1,
                                u = 0,
                                l = void 0;
                            o--;

                        ) {
                            var s = i[o];
                            if ("string" === typeof s) {
                                for (a = s.length; 32 === s.charCodeAt(a - 1); )
                                    u++, a--;
                                if (a) break;
                                a = -1;
                            } else if (-2 === s) (l = !0), u++;
                            else if (-1 !== s) {
                                o++;
                                break;
                            }
                        }
                        if (u) {
                            var c = {
                                type:
                                    n === e.length || l || u < 2
                                        ? "lineSuffix"
                                        : "hardBreakTrailing",
                                start: {
                                    line: r.end.line,
                                    column: r.end.column - u,
                                    offset: r.end.offset - u,
                                    _index: r.start._index + o,
                                    _bufferIndex: o
                                        ? a
                                        : r.start._bufferIndex + a,
                                },
                                end: Object.assign({}, r.end),
                            };
                            (r.end = Object.assign({}, c.start)),
                                r.start.offset === r.end.offset
                                    ? Object.assign(r, c)
                                    : (e.splice(
                                          n,
                                          0,
                                          ["enter", c, t],
                                          ["exit", c, t]
                                      ),
                                      (n += 2));
                        }
                        n++;
                    }
                return e;
            }
            function sr(e, t, n) {
                for (var r = [], i = -1; ++i < e.length; ) {
                    var o = e[i].resolveAll;
                    o && !r.includes(o) && ((t = o(t, n)), r.push(o));
                }
                return t;
            }
            function cr(e, t, n) {
                var r = Object.assign(
                        n
                            ? Object.assign({}, n)
                            : { line: 1, column: 1, offset: 0 },
                        { _index: 0, _bufferIndex: -1 }
                    ),
                    i = {},
                    o = [],
                    a = [],
                    u = [],
                    l = {
                        consume: function (e) {
                            Hn(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  y())
                                : -1 !== e && (r.column++, r.offset++);
                            r._bufferIndex < 0
                                ? r._index++
                                : (r._bufferIndex++,
                                  r._bufferIndex === a[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++));
                            (s.previous = e), !0;
                        },
                        enter: function (e, t) {
                            var n = t || {};
                            return (
                                (n.type = e),
                                (n.start = d()),
                                s.events.push(["enter", n, s]),
                                u.push(n),
                                n
                            );
                        },
                        exit: function (e) {
                            var t = u.pop();
                            return (
                                (t.end = d()), s.events.push(["exit", t, s]), t
                            );
                        },
                        attempt: g(function (e, t) {
                            m(e, t.from);
                        }),
                        check: g(v),
                        interrupt: g(v, { interrupt: !0 }),
                    },
                    s = {
                        previous: null,
                        code: null,
                        containerState: {},
                        events: [],
                        parser: e,
                        sliceStream: f,
                        sliceSerialize: function (e, t) {
                            return (function (e, t) {
                                var n,
                                    r = -1,
                                    i = [];
                                for (; ++r < e.length; ) {
                                    var o = e[r],
                                        a = void 0;
                                    if ("string" === typeof o) a = o;
                                    else
                                        switch (o) {
                                            case -5:
                                                a = "\r";
                                                break;
                                            case -4:
                                                a = "\n";
                                                break;
                                            case -3:
                                                a = "\r\n";
                                                break;
                                            case -2:
                                                a = t ? " " : "\t";
                                                break;
                                            case -1:
                                                if (!t && n) continue;
                                                a = " ";
                                                break;
                                            default:
                                                a = String.fromCharCode(o);
                                        }
                                    (n = -2 === o), i.push(a);
                                }
                                return i.join("");
                            })(f(e), t);
                        },
                        now: d,
                        defineSkip: function (e) {
                            (i[e.line] = e.column), y();
                        },
                        write: function (e) {
                            if (((a = _n(a, e)), p(), null !== a[a.length - 1]))
                                return [];
                            return (
                                m(t, 0),
                                (s.events = sr(o, s.events, s)),
                                s.events
                            );
                        },
                    },
                    c = t.tokenize.call(s, l);
                return t.resolveAll && o.push(t), s;
                function f(e) {
                    return (function (e, t) {
                        var n,
                            r = t.start._index,
                            i = t.start._bufferIndex,
                            o = t.end._index,
                            a = t.end._bufferIndex;
                        r === o
                            ? (n = [e[r].slice(i, a)])
                            : ((n = e.slice(r, o)),
                              i > -1 && (n[0] = n[0].slice(i)),
                              a > 0 && n.push(e[o].slice(0, a)));
                        return n;
                    })(a, e);
                }
                function d() {
                    return Object.assign({}, r);
                }
                function p() {
                    for (var e; r._index < a.length; ) {
                        var t = a[r._index];
                        if ("string" === typeof t)
                            for (
                                e = r._index,
                                    r._bufferIndex < 0 && (r._bufferIndex = 0);
                                r._index === e && r._bufferIndex < t.length;

                            )
                                h(t.charCodeAt(r._bufferIndex));
                        else h(t);
                    }
                }
                function h(e) {
                    void 0, e, (c = c(e));
                }
                function v(e, t) {
                    t.restore();
                }
                function g(e, t) {
                    return function (n, i, o) {
                        var a, c, f, p;
                        return Array.isArray(n)
                            ? h(n)
                            : "tokenize" in n
                            ? h([n])
                            : (function (e) {
                                  return t;
                                  function t(t) {
                                      var n = null !== t && e[t],
                                          r = null !== t && e.null;
                                      return h(
                                          [].concat(
                                              Qe(
                                                  Array.isArray(n)
                                                      ? n
                                                      : n
                                                      ? [n]
                                                      : []
                                              ),
                                              Qe(
                                                  Array.isArray(r)
                                                      ? r
                                                      : r
                                                      ? [r]
                                                      : []
                                              )
                                          )
                                      )(t);
                                  }
                              })(n);
                        function h(e) {
                            return (
                                (a = e), (c = 0), 0 === e.length ? o : v(e[c])
                            );
                        }
                        function v(e) {
                            return function (n) {
                                (p = (function () {
                                    var e = d(),
                                        t = s.previous,
                                        n = s.currentConstruct,
                                        i = s.events.length,
                                        o = Array.from(u);
                                    return { restore: a, from: i };
                                    function a() {
                                        (r = e),
                                            (s.previous = t),
                                            (s.currentConstruct = n),
                                            (s.events.length = i),
                                            (u = o),
                                            y();
                                    }
                                })()),
                                    (f = e),
                                    e.partial || (s.currentConstruct = e);
                                if (
                                    e.name &&
                                    s.parser.constructs.disable.null.includes(
                                        e.name
                                    )
                                )
                                    return m(n);
                                return e.tokenize.call(
                                    t ? Object.assign(Object.create(s), t) : s,
                                    l,
                                    g,
                                    m
                                )(n);
                            };
                        }
                        function g(t) {
                            return !0, e(f, p), i;
                        }
                        function m(e) {
                            return (
                                !0, p.restore(), ++c < a.length ? v(a[c]) : o
                            );
                        }
                    };
                }
                function m(e, t) {
                    e.resolveAll && !o.includes(e) && o.push(e),
                        e.resolve &&
                            Tn(
                                s.events,
                                t,
                                s.events.length - t,
                                e.resolve(s.events.slice(t), s)
                            ),
                        e.resolveTo && (s.events = e.resolveTo(s.events, s));
                }
                function y() {
                    r.line in i &&
                        r.column < 2 &&
                        ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
                }
            }
            var fr = {
                name: "thematicBreak",
                tokenize: function (e, t, n) {
                    var r,
                        i = 0;
                    return function (t) {
                        return e.enter("thematicBreak"), (r = t), o(t);
                    };
                    function o(u) {
                        return u === r
                            ? (e.enter("thematicBreakSequence"), a(u))
                            : Wn(u)
                            ? Xn(e, o, "whitespace")(u)
                            : i < 3 || (null !== u && !Hn(u))
                            ? n(u)
                            : (e.exit("thematicBreak"), t(u));
                    }
                    function a(t) {
                        return t === r
                            ? (e.consume(t), i++, a)
                            : (e.exit("thematicBreakSequence"), o(t));
                    }
                },
            };
            var dr = {
                    name: "list",
                    tokenize: function (e, t, n) {
                        var r = this,
                            i = r.events[r.events.length - 1],
                            o =
                                i && "linePrefix" === i[1].type
                                    ? i[2].sliceSerialize(i[1], !0).length
                                    : 0,
                            a = 0;
                        return function (t) {
                            var i =
                                r.containerState.type ||
                                (42 === t || 43 === t || 45 === t
                                    ? "listUnordered"
                                    : "listOrdered");
                            if (
                                "listUnordered" === i
                                    ? !r.containerState.marker ||
                                      t === r.containerState.marker
                                    : Dn(t)
                            ) {
                                if (
                                    (r.containerState.type ||
                                        ((r.containerState.type = i),
                                        e.enter(i, { _container: !0 })),
                                    "listUnordered" === i)
                                )
                                    return (
                                        e.enter("listItemPrefix"),
                                        42 === t || 45 === t
                                            ? e.check(fr, n, l)(t)
                                            : l(t)
                                    );
                                if (!r.interrupt || 49 === t)
                                    return (
                                        e.enter("listItemPrefix"),
                                        e.enter("listItemValue"),
                                        u(t)
                                    );
                            }
                            return n(t);
                        };
                        function u(t) {
                            return Dn(t) && ++a < 10
                                ? (e.consume(t), u)
                                : (!r.interrupt || a < 2) &&
                                  (r.containerState.marker
                                      ? t === r.containerState.marker
                                      : 41 === t || 46 === t)
                                ? (e.exit("listItemValue"), l(t))
                                : n(t);
                        }
                        function l(t) {
                            return (
                                e.enter("listItemMarker"),
                                e.consume(t),
                                e.exit("listItemMarker"),
                                (r.containerState.marker =
                                    r.containerState.marker || t),
                                e.check(
                                    qn,
                                    r.interrupt ? n : s,
                                    e.attempt(pr, f, c)
                                )
                            );
                        }
                        function s(e) {
                            return (
                                (r.containerState.initialBlankLine = !0),
                                o++,
                                f(e)
                            );
                        }
                        function c(t) {
                            return Wn(t)
                                ? (e.enter("listItemPrefixWhitespace"),
                                  e.consume(t),
                                  e.exit("listItemPrefixWhitespace"),
                                  f)
                                : n(t);
                        }
                        function f(n) {
                            return (
                                (r.containerState.size =
                                    o +
                                    r.sliceSerialize(
                                        e.exit("listItemPrefix"),
                                        !0
                                    ).length),
                                t(n)
                            );
                        }
                    },
                    continuation: {
                        tokenize: function (e, t, n) {
                            var r = this;
                            return (
                                (r.containerState._closeFlow = void 0),
                                e.check(qn, i, o)
                            );
                            function i(n) {
                                return (
                                    (r.containerState.furtherBlankLines =
                                        r.containerState.furtherBlankLines ||
                                        r.containerState.initialBlankLine),
                                    Xn(
                                        e,
                                        t,
                                        "listItemIndent",
                                        r.containerState.size + 1
                                    )(n)
                                );
                            }
                            function o(n) {
                                return r.containerState.furtherBlankLines ||
                                    !Wn(n)
                                    ? ((r.containerState.furtherBlankLines =
                                          void 0),
                                      (r.containerState.initialBlankLine =
                                          void 0),
                                      a(n))
                                    : ((r.containerState.furtherBlankLines =
                                          void 0),
                                      (r.containerState.initialBlankLine =
                                          void 0),
                                      e.attempt(hr, t, a)(n));
                            }
                            function a(i) {
                                return (
                                    (r.containerState._closeFlow = !0),
                                    (r.interrupt = void 0),
                                    Xn(
                                        e,
                                        e.attempt(dr, t, n),
                                        "linePrefix",
                                        r.parser.constructs.disable.null.includes(
                                            "codeIndented"
                                        )
                                            ? void 0
                                            : 4
                                    )(i)
                                );
                            }
                        },
                    },
                    exit: function (e) {
                        e.exit(this.containerState.type);
                    },
                },
                pr = {
                    tokenize: function (e, t, n) {
                        var r = this;
                        return Xn(
                            e,
                            function (e) {
                                var i = r.events[r.events.length - 1];
                                return !Wn(e) &&
                                    i &&
                                    "listItemPrefixWhitespace" === i[1].type
                                    ? t(e)
                                    : n(e);
                            },
                            "listItemPrefixWhitespace",
                            r.parser.constructs.disable.null.includes(
                                "codeIndented"
                            )
                                ? void 0
                                : 5
                        );
                    },
                    partial: !0,
                },
                hr = {
                    tokenize: function (e, t, n) {
                        var r = this;
                        return Xn(
                            e,
                            function (e) {
                                var i = r.events[r.events.length - 1];
                                return i &&
                                    "listItemIndent" === i[1].type &&
                                    i[2].sliceSerialize(i[1], !0).length ===
                                        r.containerState.size
                                    ? t(e)
                                    : n(e);
                            },
                            "listItemIndent",
                            r.containerState.size + 1
                        );
                    },
                    partial: !0,
                };
            var vr = {
                name: "blockQuote",
                tokenize: function (e, t, n) {
                    var r = this;
                    return function (t) {
                        if (62 === t) {
                            var o = r.containerState;
                            return (
                                o.open ||
                                    (e.enter("blockQuote", { _container: !0 }),
                                    (o.open = !0)),
                                e.enter("blockQuotePrefix"),
                                e.enter("blockQuoteMarker"),
                                e.consume(t),
                                e.exit("blockQuoteMarker"),
                                i
                            );
                        }
                        return n(t);
                    };
                    function i(n) {
                        return Wn(n)
                            ? (e.enter("blockQuotePrefixWhitespace"),
                              e.consume(n),
                              e.exit("blockQuotePrefixWhitespace"),
                              e.exit("blockQuotePrefix"),
                              t)
                            : (e.exit("blockQuotePrefix"), t(n));
                    }
                },
                continuation: {
                    tokenize: function (e, t, n) {
                        return Xn(
                            e,
                            e.attempt(vr, t, n),
                            "linePrefix",
                            this.parser.constructs.disable.null.includes(
                                "codeIndented"
                            )
                                ? void 0
                                : 4
                        );
                    },
                },
                exit: function (e) {
                    e.exit("blockQuote");
                },
            };
            function gr(e, t, n, r, i, o, a, u, l) {
                var s = l || Number.POSITIVE_INFINITY,
                    c = 0;
                return function (t) {
                    if (60 === t)
                        return (
                            e.enter(r),
                            e.enter(i),
                            e.enter(o),
                            e.consume(t),
                            e.exit(o),
                            f
                        );
                    if (null === t || 41 === t || Un(t)) return n(t);
                    return (
                        e.enter(r),
                        e.enter(a),
                        e.enter(u),
                        e.enter("chunkString", { contentType: "string" }),
                        h(t)
                    );
                };
                function f(n) {
                    return 62 === n
                        ? (e.enter(o),
                          e.consume(n),
                          e.exit(o),
                          e.exit(i),
                          e.exit(r),
                          t)
                        : (e.enter(u),
                          e.enter("chunkString", { contentType: "string" }),
                          d(n));
                }
                function d(t) {
                    return 62 === t
                        ? (e.exit("chunkString"), e.exit(u), f(t))
                        : null === t || 60 === t || Hn(t)
                        ? n(t)
                        : (e.consume(t), 92 === t ? p : d);
                }
                function p(t) {
                    return 60 === t || 62 === t || 92 === t
                        ? (e.consume(t), d)
                        : d(t);
                }
                function h(i) {
                    return 40 === i
                        ? ++c > s
                            ? n(i)
                            : (e.consume(i), h)
                        : 41 === i
                        ? c--
                            ? (e.consume(i), h)
                            : (e.exit("chunkString"),
                              e.exit(u),
                              e.exit(a),
                              e.exit(r),
                              t(i))
                        : null === i || zn(i)
                        ? c
                            ? n(i)
                            : (e.exit("chunkString"),
                              e.exit(u),
                              e.exit(a),
                              e.exit(r),
                              t(i))
                        : Un(i)
                        ? n(i)
                        : (e.consume(i), 92 === i ? v : h);
                }
                function v(t) {
                    return 40 === t || 41 === t || 92 === t
                        ? (e.consume(t), h)
                        : h(t);
                }
            }
            function mr(e, t, n, r, i, o) {
                var a,
                    u = this,
                    l = 0;
                return function (t) {
                    return (
                        e.enter(r),
                        e.enter(i),
                        e.consume(t),
                        e.exit(i),
                        e.enter(o),
                        s
                    );
                };
                function s(f) {
                    return null === f ||
                        91 === f ||
                        (93 === f && !a) ||
                        (94 === f &&
                            !l &&
                            "_hiddenFootnoteSupport" in u.parser.constructs) ||
                        l > 999
                        ? n(f)
                        : 93 === f
                        ? (e.exit(o),
                          e.enter(i),
                          e.consume(f),
                          e.exit(i),
                          e.exit(r),
                          t)
                        : Hn(f)
                        ? (e.enter("lineEnding"),
                          e.consume(f),
                          e.exit("lineEnding"),
                          s)
                        : (e.enter("chunkString", { contentType: "string" }),
                          c(f));
                }
                function c(t) {
                    return null === t ||
                        91 === t ||
                        93 === t ||
                        Hn(t) ||
                        l++ > 999
                        ? (e.exit("chunkString"), s(t))
                        : (e.consume(t), (a = a || !Wn(t)), 92 === t ? f : c);
                }
                function f(t) {
                    return 91 === t || 92 === t || 93 === t
                        ? (e.consume(t), l++, c)
                        : c(t);
                }
            }
            function yr(e, t, n, r, i, o) {
                var a;
                return function (t) {
                    return (
                        e.enter(r),
                        e.enter(i),
                        e.consume(t),
                        e.exit(i),
                        (a = 40 === t ? 41 : t),
                        u
                    );
                };
                function u(n) {
                    return n === a
                        ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
                        : (e.enter(o), l(n));
                }
                function l(t) {
                    return t === a
                        ? (e.exit(o), u(a))
                        : null === t
                        ? n(t)
                        : Hn(t)
                        ? (e.enter("lineEnding"),
                          e.consume(t),
                          e.exit("lineEnding"),
                          Xn(e, l, "linePrefix"))
                        : (e.enter("chunkString", { contentType: "string" }),
                          s(t));
                }
                function s(t) {
                    return t === a || null === t || Hn(t)
                        ? (e.exit("chunkString"), l(t))
                        : (e.consume(t), 92 === t ? c : s);
                }
                function c(t) {
                    return t === a || 92 === t ? (e.consume(t), s) : s(t);
                }
            }
            function br(e, t) {
                var n;
                return function r(i) {
                    if (Hn(i))
                        return (
                            e.enter("lineEnding"),
                            e.consume(i),
                            e.exit("lineEnding"),
                            (n = !0),
                            r
                        );
                    if (Wn(i))
                        return Xn(e, r, n ? "linePrefix" : "lineSuffix")(i);
                    return t(i);
                };
            }
            function wr(e) {
                return e
                    .replace(/[\t\n\r ]+/g, " ")
                    .replace(/^ | $/g, "")
                    .toLowerCase()
                    .toUpperCase();
            }
            var xr = {
                    name: "definition",
                    tokenize: function (e, t, n) {
                        var r,
                            i = this;
                        return function (t) {
                            return (
                                e.enter("definition"),
                                mr.call(
                                    i,
                                    e,
                                    o,
                                    n,
                                    "definitionLabel",
                                    "definitionLabelMarker",
                                    "definitionLabelString"
                                )(t)
                            );
                        };
                        function o(t) {
                            return (
                                (r = wr(
                                    i
                                        .sliceSerialize(
                                            i.events[i.events.length - 1][1]
                                        )
                                        .slice(1, -1)
                                )),
                                58 === t
                                    ? (e.enter("definitionMarker"),
                                      e.consume(t),
                                      e.exit("definitionMarker"),
                                      br(
                                          e,
                                          gr(
                                              e,
                                              e.attempt(
                                                  Er,
                                                  Xn(e, a, "whitespace"),
                                                  Xn(e, a, "whitespace")
                                              ),
                                              n,
                                              "definitionDestination",
                                              "definitionDestinationLiteral",
                                              "definitionDestinationLiteralMarker",
                                              "definitionDestinationRaw",
                                              "definitionDestinationString"
                                          )
                                      ))
                                    : n(t)
                            );
                        }
                        function a(o) {
                            return null === o || Hn(o)
                                ? (e.exit("definition"),
                                  i.parser.defined.includes(r) ||
                                      i.parser.defined.push(r),
                                  t(o))
                                : n(o);
                        }
                    },
                },
                Er = {
                    tokenize: function (e, t, n) {
                        return function (t) {
                            return zn(t) ? br(e, r)(t) : n(t);
                        };
                        function r(t) {
                            return 34 === t || 39 === t || 40 === t
                                ? yr(
                                      e,
                                      Xn(e, i, "whitespace"),
                                      n,
                                      "definitionTitle",
                                      "definitionTitleMarker",
                                      "definitionTitleString"
                                  )(t)
                                : n(t);
                        }
                        function i(e) {
                            return null === e || Hn(e) ? t(e) : n(e);
                        }
                    },
                    partial: !0,
                };
            var kr = {
                    name: "codeIndented",
                    tokenize: function (e, t, n) {
                        var r = this;
                        return function (t) {
                            return (
                                e.enter("codeIndented"),
                                Xn(e, i, "linePrefix", 5)(t)
                            );
                        };
                        function i(e) {
                            var t = r.events[r.events.length - 1];
                            return t &&
                                "linePrefix" === t[1].type &&
                                t[2].sliceSerialize(t[1], !0).length >= 4
                                ? o(e)
                                : n(e);
                        }
                        function o(t) {
                            return null === t
                                ? u(t)
                                : Hn(t)
                                ? e.attempt(Sr, o, u)(t)
                                : (e.enter("codeFlowValue"), a(t));
                        }
                        function a(t) {
                            return null === t || Hn(t)
                                ? (e.exit("codeFlowValue"), o(t))
                                : (e.consume(t), a);
                        }
                        function u(n) {
                            return e.exit("codeIndented"), t(n);
                        }
                    },
                },
                Sr = {
                    tokenize: function (e, t, n) {
                        var r = this;
                        return i;
                        function i(t) {
                            return r.parser.lazy[r.now().line]
                                ? n(t)
                                : Hn(t)
                                ? (e.enter("lineEnding"),
                                  e.consume(t),
                                  e.exit("lineEnding"),
                                  i)
                                : Xn(e, o, "linePrefix", 5)(t);
                        }
                        function o(e) {
                            var o = r.events[r.events.length - 1];
                            return o &&
                                "linePrefix" === o[1].type &&
                                o[2].sliceSerialize(o[1], !0).length >= 4
                                ? t(e)
                                : Hn(e)
                                ? i(e)
                                : n(e);
                        }
                    },
                    partial: !0,
                };
            var Ar = {
                name: "headingAtx",
                tokenize: function (e, t, n) {
                    var r = this,
                        i = 0;
                    return function (t) {
                        return (
                            e.enter("atxHeading"),
                            e.enter("atxHeadingSequence"),
                            o(t)
                        );
                    };
                    function o(u) {
                        return 35 === u && i++ < 6
                            ? (e.consume(u), o)
                            : null === u || zn(u)
                            ? (e.exit("atxHeadingSequence"),
                              r.interrupt ? t(u) : a(u))
                            : n(u);
                    }
                    function a(n) {
                        return 35 === n
                            ? (e.enter("atxHeadingSequence"), u(n))
                            : null === n || Hn(n)
                            ? (e.exit("atxHeading"), t(n))
                            : Wn(n)
                            ? Xn(e, a, "whitespace")(n)
                            : (e.enter("atxHeadingText"), l(n));
                    }
                    function u(t) {
                        return 35 === t
                            ? (e.consume(t), u)
                            : (e.exit("atxHeadingSequence"), a(t));
                    }
                    function l(t) {
                        return null === t || 35 === t || zn(t)
                            ? (e.exit("atxHeadingText"), a(t))
                            : (e.consume(t), l);
                    }
                },
                resolve: function (e, t) {
                    var n,
                        r,
                        i = e.length - 2,
                        o = 3;
                    "whitespace" === e[o][1].type && (o += 2);
                    i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                    "atxHeadingSequence" === e[i][1].type &&
                        (o === i - 1 ||
                            (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                        (i -= o + 1 === i ? 2 : 4);
                    i > o &&
                        ((n = {
                            type: "atxHeadingText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                        }),
                        (r = {
                            type: "chunkText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                            contentType: "text",
                        }),
                        Tn(e, o, i - o + 1, [
                            ["enter", n, t],
                            ["enter", r, t],
                            ["exit", r, t],
                            ["exit", n, t],
                        ]));
                    return e;
                },
            };
            var Cr = {
                name: "setextUnderline",
                tokenize: function (e, t, n) {
                    var r,
                        i,
                        o = this,
                        a = o.events.length;
                    for (; a--; )
                        if (
                            "lineEnding" !== o.events[a][1].type &&
                            "linePrefix" !== o.events[a][1].type &&
                            "content" !== o.events[a][1].type
                        ) {
                            i = "paragraph" === o.events[a][1].type;
                            break;
                        }
                    return function (t) {
                        if (!o.parser.lazy[o.now().line] && (o.interrupt || i))
                            return (
                                e.enter("setextHeadingLine"),
                                e.enter("setextHeadingLineSequence"),
                                (r = t),
                                u(t)
                            );
                        return n(t);
                    };
                    function u(t) {
                        return t === r
                            ? (e.consume(t), u)
                            : (e.exit("setextHeadingLineSequence"),
                              Xn(e, l, "lineSuffix")(t));
                    }
                    function l(r) {
                        return null === r || Hn(r)
                            ? (e.exit("setextHeadingLine"), t(r))
                            : n(r);
                    }
                },
                resolveTo: function (e, t) {
                    var n,
                        r,
                        i,
                        o = e.length;
                    for (; o--; )
                        if ("enter" === e[o][0]) {
                            if ("content" === e[o][1].type) {
                                n = o;
                                break;
                            }
                            "paragraph" === e[o][1].type && (r = o);
                        } else
                            "content" === e[o][1].type && e.splice(o, 1),
                                i || "definition" !== e[o][1].type || (i = o);
                    var a = {
                        type: "setextHeading",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end),
                    };
                    (e[r][1].type = "setextHeadingText"),
                        i
                            ? (e.splice(r, 0, ["enter", a, t]),
                              e.splice(i + 1, 0, ["exit", e[n][1], t]),
                              (e[n][1].end = Object.assign({}, e[i][1].end)))
                            : (e[n][1] = a);
                    return e.push(["exit", a, t]), e;
                },
            };
            var Or = [
                    "address",
                    "article",
                    "aside",
                    "base",
                    "basefont",
                    "blockquote",
                    "body",
                    "caption",
                    "center",
                    "col",
                    "colgroup",
                    "dd",
                    "details",
                    "dialog",
                    "dir",
                    "div",
                    "dl",
                    "dt",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "frame",
                    "frameset",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "head",
                    "header",
                    "hr",
                    "html",
                    "iframe",
                    "legend",
                    "li",
                    "link",
                    "main",
                    "menu",
                    "menuitem",
                    "nav",
                    "noframes",
                    "ol",
                    "optgroup",
                    "option",
                    "p",
                    "param",
                    "section",
                    "source",
                    "summary",
                    "table",
                    "tbody",
                    "td",
                    "tfoot",
                    "th",
                    "thead",
                    "title",
                    "tr",
                    "track",
                    "ul",
                ],
                Tr = ["pre", "script", "style", "textarea"],
                _r = {
                    name: "htmlFlow",
                    tokenize: function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            u,
                            l = this;
                        return function (t) {
                            return (
                                e.enter("htmlFlow"),
                                e.enter("htmlFlowData"),
                                e.consume(t),
                                s
                            );
                        };
                        function s(a) {
                            return 33 === a
                                ? (e.consume(a), c)
                                : 47 === a
                                ? (e.consume(a), p)
                                : 63 === a
                                ? (e.consume(a), (r = 3), l.interrupt ? t : P)
                                : Pn(a)
                                ? (e.consume(a),
                                  (o = String.fromCharCode(a)),
                                  (i = !0),
                                  h)
                                : n(a);
                        }
                        function c(i) {
                            return 45 === i
                                ? (e.consume(i), (r = 2), f)
                                : 91 === i
                                ? (e.consume(i),
                                  (r = 5),
                                  (o = "CDATA["),
                                  (a = 0),
                                  d)
                                : Pn(i)
                                ? (e.consume(i), (r = 4), l.interrupt ? t : P)
                                : n(i);
                        }
                        function f(r) {
                            return 45 === r
                                ? (e.consume(r), l.interrupt ? t : P)
                                : n(r);
                        }
                        function d(r) {
                            return r === o.charCodeAt(a++)
                                ? (e.consume(r),
                                  a === o.length ? (l.interrupt ? t : C) : d)
                                : n(r);
                        }
                        function p(t) {
                            return Pn(t)
                                ? (e.consume(t),
                                  (o = String.fromCharCode(t)),
                                  h)
                                : n(t);
                        }
                        function h(a) {
                            return null === a || 47 === a || 62 === a || zn(a)
                                ? 47 !== a && i && Tr.includes(o.toLowerCase())
                                    ? ((r = 1), l.interrupt ? t(a) : C(a))
                                    : Or.includes(o.toLowerCase())
                                    ? ((r = 6),
                                      47 === a
                                          ? (e.consume(a), v)
                                          : l.interrupt
                                          ? t(a)
                                          : C(a))
                                    : ((r = 7),
                                      l.interrupt &&
                                      !l.parser.lazy[l.now().line]
                                          ? n(a)
                                          : i
                                          ? m(a)
                                          : g(a))
                                : 45 === a || jn(a)
                                ? (e.consume(a),
                                  (o += String.fromCharCode(a)),
                                  h)
                                : n(a);
                        }
                        function v(r) {
                            return 62 === r
                                ? (e.consume(r), l.interrupt ? t : C)
                                : n(r);
                        }
                        function g(t) {
                            return Wn(t) ? (e.consume(t), g) : S(t);
                        }
                        function m(t) {
                            return 47 === t
                                ? (e.consume(t), S)
                                : 58 === t || 95 === t || Pn(t)
                                ? (e.consume(t), y)
                                : Wn(t)
                                ? (e.consume(t), m)
                                : S(t);
                        }
                        function y(t) {
                            return 45 === t ||
                                46 === t ||
                                58 === t ||
                                95 === t ||
                                jn(t)
                                ? (e.consume(t), y)
                                : b(t);
                        }
                        function b(t) {
                            return 61 === t
                                ? (e.consume(t), w)
                                : Wn(t)
                                ? (e.consume(t), b)
                                : m(t);
                        }
                        function w(t) {
                            return null === t ||
                                60 === t ||
                                61 === t ||
                                62 === t ||
                                96 === t
                                ? n(t)
                                : 34 === t || 39 === t
                                ? (e.consume(t), (u = t), x)
                                : Wn(t)
                                ? (e.consume(t), w)
                                : ((u = null), E(t));
                        }
                        function x(t) {
                            return null === t || Hn(t)
                                ? n(t)
                                : t === u
                                ? (e.consume(t), k)
                                : (e.consume(t), x);
                        }
                        function E(t) {
                            return null === t ||
                                34 === t ||
                                39 === t ||
                                60 === t ||
                                61 === t ||
                                62 === t ||
                                96 === t ||
                                zn(t)
                                ? b(t)
                                : (e.consume(t), E);
                        }
                        function k(e) {
                            return 47 === e || 62 === e || Wn(e) ? m(e) : n(e);
                        }
                        function S(t) {
                            return 62 === t ? (e.consume(t), A) : n(t);
                        }
                        function A(t) {
                            return Wn(t)
                                ? (e.consume(t), A)
                                : null === t || Hn(t)
                                ? C(t)
                                : n(t);
                        }
                        function C(t) {
                            return 45 === t && 2 === r
                                ? (e.consume(t), I)
                                : 60 === t && 1 === r
                                ? (e.consume(t), N)
                                : 62 === t && 4 === r
                                ? (e.consume(t), D)
                                : 63 === t && 3 === r
                                ? (e.consume(t), P)
                                : 93 === t && 5 === r
                                ? (e.consume(t), R)
                                : !Hn(t) || (6 !== r && 7 !== r)
                                ? null === t || Hn(t)
                                    ? O(t)
                                    : (e.consume(t), C)
                                : e.check(Ir, D, O)(t);
                        }
                        function O(t) {
                            return e.exit("htmlFlowData"), T(t);
                        }
                        function T(t) {
                            return null === t
                                ? M(t)
                                : Hn(t)
                                ? e.attempt(
                                      { tokenize: _, partial: !0 },
                                      T,
                                      M
                                  )(t)
                                : (e.enter("htmlFlowData"), C(t));
                        }
                        function _(e, t, n) {
                            return function (t) {
                                return (
                                    e.enter("lineEnding"),
                                    e.consume(t),
                                    e.exit("lineEnding"),
                                    r
                                );
                            };
                            function r(e) {
                                return l.parser.lazy[l.now().line]
                                    ? n(e)
                                    : t(e);
                            }
                        }
                        function I(t) {
                            return 45 === t ? (e.consume(t), P) : C(t);
                        }
                        function N(t) {
                            return 47 === t
                                ? (e.consume(t), (o = ""), L)
                                : C(t);
                        }
                        function L(t) {
                            return 62 === t && Tr.includes(o.toLowerCase())
                                ? (e.consume(t), D)
                                : Pn(t) && o.length < 8
                                ? (e.consume(t),
                                  (o += String.fromCharCode(t)),
                                  L)
                                : C(t);
                        }
                        function R(t) {
                            return 93 === t ? (e.consume(t), P) : C(t);
                        }
                        function P(t) {
                            return 62 === t
                                ? (e.consume(t), D)
                                : 45 === t && 2 === r
                                ? (e.consume(t), P)
                                : C(t);
                        }
                        function D(t) {
                            return null === t || Hn(t)
                                ? (e.exit("htmlFlowData"), M(t))
                                : (e.consume(t), D);
                        }
                        function M(n) {
                            return e.exit("htmlFlow"), t(n);
                        }
                    },
                    resolveTo: function (e) {
                        var t = e.length;
                        for (
                            ;
                            t-- &&
                            ("enter" !== e[t][0] ||
                                "htmlFlow" !== e[t][1].type);

                        );
                        t > 1 &&
                            "linePrefix" === e[t - 2][1].type &&
                            ((e[t][1].start = e[t - 2][1].start),
                            (e[t + 1][1].start = e[t - 2][1].start),
                            e.splice(t - 2, 2));
                        return e;
                    },
                    concrete: !0,
                },
                Ir = {
                    tokenize: function (e, t, n) {
                        return function (r) {
                            return (
                                e.exit("htmlFlowData"),
                                e.enter("lineEndingBlank"),
                                e.consume(r),
                                e.exit("lineEndingBlank"),
                                e.attempt(qn, t, n)
                            );
                        };
                    },
                    partial: !0,
                };
            var Nr = {
                name: "codeFenced",
                tokenize: function (e, t, n) {
                    var r,
                        i = this,
                        o = {
                            tokenize: function (e, t, n) {
                                var i = 0;
                                return Xn(
                                    e,
                                    o,
                                    "linePrefix",
                                    this.parser.constructs.disable.null.includes(
                                        "codeIndented"
                                    )
                                        ? void 0
                                        : 4
                                );
                                function o(t) {
                                    return (
                                        e.enter("codeFencedFence"),
                                        e.enter("codeFencedFenceSequence"),
                                        a(t)
                                    );
                                }
                                function a(t) {
                                    return t === r
                                        ? (e.consume(t), i++, a)
                                        : i < s
                                        ? n(t)
                                        : (e.exit("codeFencedFenceSequence"),
                                          Xn(e, u, "whitespace")(t));
                                }
                                function u(r) {
                                    return null === r || Hn(r)
                                        ? (e.exit("codeFencedFence"), t(r))
                                        : n(r);
                                }
                            },
                            partial: !0,
                        },
                        a = {
                            tokenize: function (e, t, n) {
                                var r = this;
                                return i;
                                function i(t) {
                                    return (
                                        e.enter("lineEnding"),
                                        e.consume(t),
                                        e.exit("lineEnding"),
                                        o
                                    );
                                }
                                function o(e) {
                                    return r.parser.lazy[r.now().line]
                                        ? n(e)
                                        : t(e);
                                }
                            },
                            partial: !0,
                        },
                        u = this.events[this.events.length - 1],
                        l =
                            u && "linePrefix" === u[1].type
                                ? u[2].sliceSerialize(u[1], !0).length
                                : 0,
                        s = 0;
                    return function (t) {
                        return (
                            e.enter("codeFenced"),
                            e.enter("codeFencedFence"),
                            e.enter("codeFencedFenceSequence"),
                            (r = t),
                            c(t)
                        );
                    };
                    function c(t) {
                        return t === r
                            ? (e.consume(t), s++, c)
                            : (e.exit("codeFencedFenceSequence"),
                              s < 3 ? n(t) : Xn(e, f, "whitespace")(t));
                    }
                    function f(t) {
                        return null === t || Hn(t)
                            ? v(t)
                            : (e.enter("codeFencedFenceInfo"),
                              e.enter("chunkString", { contentType: "string" }),
                              d(t));
                    }
                    function d(t) {
                        return null === t || zn(t)
                            ? (e.exit("chunkString"),
                              e.exit("codeFencedFenceInfo"),
                              Xn(e, p, "whitespace")(t))
                            : 96 === t && t === r
                            ? n(t)
                            : (e.consume(t), d);
                    }
                    function p(t) {
                        return null === t || Hn(t)
                            ? v(t)
                            : (e.enter("codeFencedFenceMeta"),
                              e.enter("chunkString", { contentType: "string" }),
                              h(t));
                    }
                    function h(t) {
                        return null === t || Hn(t)
                            ? (e.exit("chunkString"),
                              e.exit("codeFencedFenceMeta"),
                              v(t))
                            : 96 === t && t === r
                            ? n(t)
                            : (e.consume(t), h);
                    }
                    function v(n) {
                        return (
                            e.exit("codeFencedFence"), i.interrupt ? t(n) : g(n)
                        );
                    }
                    function g(t) {
                        return null === t
                            ? y(t)
                            : Hn(t)
                            ? e.attempt(
                                  a,
                                  e.attempt(
                                      o,
                                      y,
                                      l ? Xn(e, g, "linePrefix", l + 1) : g
                                  ),
                                  y
                              )(t)
                            : (e.enter("codeFlowValue"), m(t));
                    }
                    function m(t) {
                        return null === t || Hn(t)
                            ? (e.exit("codeFlowValue"), g(t))
                            : (e.consume(t), m);
                    }
                    function y(n) {
                        return e.exit("codeFenced"), t(n);
                    }
                },
                concrete: !0,
            };
            var Lr = document.createElement("i");
            function Rr(e) {
                var t = "&" + e + ";";
                Lr.innerHTML = t;
                var n = Lr.textContent;
                return (
                    (59 !== n.charCodeAt(n.length - 1) || "semi" === e) &&
                    n !== t &&
                    n
                );
            }
            var Pr = {
                name: "characterReference",
                tokenize: function (e, t, n) {
                    var r,
                        i,
                        o = this,
                        a = 0;
                    return function (t) {
                        return (
                            e.enter("characterReference"),
                            e.enter("characterReferenceMarker"),
                            e.consume(t),
                            e.exit("characterReferenceMarker"),
                            u
                        );
                    };
                    function u(t) {
                        return 35 === t
                            ? (e.enter("characterReferenceMarkerNumeric"),
                              e.consume(t),
                              e.exit("characterReferenceMarkerNumeric"),
                              l)
                            : (e.enter("characterReferenceValue"),
                              (r = 31),
                              (i = jn),
                              s(t));
                    }
                    function l(t) {
                        return 88 === t || 120 === t
                            ? (e.enter("characterReferenceMarkerHexadecimal"),
                              e.consume(t),
                              e.exit("characterReferenceMarkerHexadecimal"),
                              e.enter("characterReferenceValue"),
                              (r = 6),
                              (i = Mn),
                              s)
                            : (e.enter("characterReferenceValue"),
                              (r = 7),
                              (i = Dn),
                              s(t));
                    }
                    function s(u) {
                        var l;
                        return 59 === u && a
                            ? ((l = e.exit("characterReferenceValue")),
                              i !== jn || Rr(o.sliceSerialize(l))
                                  ? (e.enter("characterReferenceMarker"),
                                    e.consume(u),
                                    e.exit("characterReferenceMarker"),
                                    e.exit("characterReference"),
                                    t)
                                  : n(u))
                            : i(u) && a++ < r
                            ? (e.consume(u), s)
                            : n(u);
                    }
                },
            };
            var Dr = {
                name: "characterEscape",
                tokenize: function (e, t, n) {
                    return function (t) {
                        return (
                            e.enter("characterEscape"),
                            e.enter("escapeMarker"),
                            e.consume(t),
                            e.exit("escapeMarker"),
                            r
                        );
                    };
                    function r(r) {
                        return Fn(r)
                            ? (e.enter("characterEscapeValue"),
                              e.consume(r),
                              e.exit("characterEscapeValue"),
                              e.exit("characterEscape"),
                              t)
                            : n(r);
                    }
                },
            };
            var Mr = {
                name: "lineEnding",
                tokenize: function (e, t) {
                    return function (n) {
                        return (
                            e.enter("lineEnding"),
                            e.consume(n),
                            e.exit("lineEnding"),
                            Xn(e, t, "linePrefix")
                        );
                    };
                },
            };
            var jr = {
                    name: "labelEnd",
                    tokenize: function (e, t, n) {
                        var r,
                            i,
                            o = this,
                            a = o.events.length;
                        for (; a--; )
                            if (
                                ("labelImage" === o.events[a][1].type ||
                                    "labelLink" === o.events[a][1].type) &&
                                !o.events[a][1]._balanced
                            ) {
                                r = o.events[a][1];
                                break;
                            }
                        return function (t) {
                            if (!r) return n(t);
                            return r._inactive
                                ? l(t)
                                : ((i = o.parser.defined.includes(
                                      wr(
                                          o.sliceSerialize({
                                              start: r.end,
                                              end: o.now(),
                                          })
                                      )
                                  )),
                                  e.enter("labelEnd"),
                                  e.enter("labelMarker"),
                                  e.consume(t),
                                  e.exit("labelMarker"),
                                  e.exit("labelEnd"),
                                  u);
                        };
                        function u(n) {
                            return 40 === n
                                ? e.attempt(Fr, t, i ? t : l)(n)
                                : 91 === n
                                ? e.attempt(
                                      Br,
                                      t,
                                      i ? e.attempt(Ur, t, l) : l
                                  )(n)
                                : i
                                ? t(n)
                                : l(n);
                        }
                        function l(e) {
                            return (r._balanced = !0), n(e);
                        }
                    },
                    resolveTo: function (e, t) {
                        var n,
                            r,
                            i,
                            o,
                            a = e.length,
                            u = 0;
                        for (; a--; )
                            if (((n = e[a][1]), r)) {
                                if (
                                    "link" === n.type ||
                                    ("labelLink" === n.type && n._inactive)
                                )
                                    break;
                                "enter" === e[a][0] &&
                                    "labelLink" === n.type &&
                                    (n._inactive = !0);
                            } else if (i) {
                                if (
                                    "enter" === e[a][0] &&
                                    ("labelImage" === n.type ||
                                        "labelLink" === n.type) &&
                                    !n._balanced &&
                                    ((r = a), "labelLink" !== n.type)
                                ) {
                                    u = 2;
                                    break;
                                }
                            } else "labelEnd" === n.type && (i = a);
                        var l = {
                                type:
                                    "labelLink" === e[r][1].type
                                        ? "link"
                                        : "image",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end),
                            },
                            s = {
                                type: "label",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[i][1].end),
                            },
                            c = {
                                type: "labelText",
                                start: Object.assign({}, e[r + u + 2][1].end),
                                end: Object.assign({}, e[i - 2][1].start),
                            };
                        return (
                            (o = _n(
                                (o = [
                                    ["enter", l, t],
                                    ["enter", s, t],
                                ]),
                                e.slice(r + 1, r + u + 3)
                            )),
                            (o = _n(o, [["enter", c, t]])),
                            (o = _n(
                                o,
                                sr(
                                    t.parser.constructs.insideSpan.null,
                                    e.slice(r + u + 4, i - 3),
                                    t
                                )
                            )),
                            (o = _n(o, [
                                ["exit", c, t],
                                e[i - 2],
                                e[i - 1],
                                ["exit", s, t],
                            ])),
                            (o = _n(o, e.slice(i + 1))),
                            (o = _n(o, [["exit", l, t]])),
                            Tn(e, r, e.length, o),
                            e
                        );
                    },
                    resolveAll: function (e) {
                        var t,
                            n = -1;
                        for (; ++n < e.length; )
                            ("labelImage" !== (t = e[n][1]).type &&
                                "labelLink" !== t.type &&
                                "labelEnd" !== t.type) ||
                                (e.splice(
                                    n + 1,
                                    "labelImage" === t.type ? 4 : 2
                                ),
                                (t.type = "data"),
                                n++);
                        return e;
                    },
                },
                Fr = {
                    tokenize: function (e, t, n) {
                        return function (t) {
                            return (
                                e.enter("resource"),
                                e.enter("resourceMarker"),
                                e.consume(t),
                                e.exit("resourceMarker"),
                                br(e, r)
                            );
                        };
                        function r(t) {
                            return 41 === t
                                ? a(t)
                                : gr(
                                      e,
                                      i,
                                      n,
                                      "resourceDestination",
                                      "resourceDestinationLiteral",
                                      "resourceDestinationLiteralMarker",
                                      "resourceDestinationRaw",
                                      "resourceDestinationString",
                                      32
                                  )(t);
                        }
                        function i(t) {
                            return zn(t) ? br(e, o)(t) : a(t);
                        }
                        function o(t) {
                            return 34 === t || 39 === t || 40 === t
                                ? yr(
                                      e,
                                      br(e, a),
                                      n,
                                      "resourceTitle",
                                      "resourceTitleMarker",
                                      "resourceTitleString"
                                  )(t)
                                : a(t);
                        }
                        function a(r) {
                            return 41 === r
                                ? (e.enter("resourceMarker"),
                                  e.consume(r),
                                  e.exit("resourceMarker"),
                                  e.exit("resource"),
                                  t)
                                : n(r);
                        }
                    },
                },
                Br = {
                    tokenize: function (e, t, n) {
                        var r = this;
                        return function (t) {
                            return mr.call(
                                r,
                                e,
                                i,
                                n,
                                "reference",
                                "referenceMarker",
                                "referenceString"
                            )(t);
                        };
                        function i(e) {
                            return r.parser.defined.includes(
                                wr(
                                    r
                                        .sliceSerialize(
                                            r.events[r.events.length - 1][1]
                                        )
                                        .slice(1, -1)
                                )
                            )
                                ? t(e)
                                : n(e);
                        }
                    },
                },
                Ur = {
                    tokenize: function (e, t, n) {
                        return function (t) {
                            return (
                                e.enter("reference"),
                                e.enter("referenceMarker"),
                                e.consume(t),
                                e.exit("referenceMarker"),
                                r
                            );
                        };
                        function r(r) {
                            return 93 === r
                                ? (e.enter("referenceMarker"),
                                  e.consume(r),
                                  e.exit("referenceMarker"),
                                  e.exit("reference"),
                                  t)
                                : n(r);
                        }
                    },
                };
            var zr = {
                name: "labelStartImage",
                tokenize: function (e, t, n) {
                    var r = this;
                    return function (t) {
                        return (
                            e.enter("labelImage"),
                            e.enter("labelImageMarker"),
                            e.consume(t),
                            e.exit("labelImageMarker"),
                            i
                        );
                    };
                    function i(t) {
                        return 91 === t
                            ? (e.enter("labelMarker"),
                              e.consume(t),
                              e.exit("labelMarker"),
                              e.exit("labelImage"),
                              o)
                            : n(t);
                    }
                    function o(e) {
                        return 94 === e &&
                            "_hiddenFootnoteSupport" in r.parser.constructs
                            ? n(e)
                            : t(e);
                    }
                },
                resolveAll: jr.resolveAll,
            };
            function Hr(e) {
                return null === e || zn(e) || Gn(e) ? 1 : $n(e) ? 2 : void 0;
            }
            var Wr = {
                name: "attention",
                tokenize: function (e, t) {
                    var n,
                        r = this.parser.constructs.attentionMarkers.null,
                        i = this.previous,
                        o = Hr(i);
                    return function (t) {
                        return e.enter("attentionSequence"), (n = t), a(t);
                    };
                    function a(u) {
                        if (u === n) return e.consume(u), a;
                        var l = e.exit("attentionSequence"),
                            s = Hr(u),
                            c = !s || (2 === s && o) || r.includes(u),
                            f = !o || (2 === o && s) || r.includes(i);
                        return (
                            (l._open = Boolean(42 === n ? c : c && (o || !f))),
                            (l._close = Boolean(42 === n ? f : f && (s || !c))),
                            t(u)
                        );
                    }
                },
                resolveAll: function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        u,
                        l,
                        s,
                        c = -1;
                    for (; ++c < e.length; )
                        if (
                            "enter" === e[c][0] &&
                            "attentionSequence" === e[c][1].type &&
                            e[c][1]._close
                        )
                            for (n = c; n--; )
                                if (
                                    "exit" === e[n][0] &&
                                    "attentionSequence" === e[n][1].type &&
                                    e[n][1]._open &&
                                    t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                                        t.sliceSerialize(e[c][1]).charCodeAt(0)
                                ) {
                                    if (
                                        (e[n][1]._close || e[c][1]._open) &&
                                        (e[c][1].end.offset -
                                            e[c][1].start.offset) %
                                            3 &&
                                        !(
                                            (e[n][1].end.offset -
                                                e[n][1].start.offset +
                                                e[c][1].end.offset -
                                                e[c][1].start.offset) %
                                            3
                                        )
                                    )
                                        continue;
                                    u =
                                        e[n][1].end.offset -
                                            e[n][1].start.offset >
                                            1 &&
                                        e[c][1].end.offset -
                                            e[c][1].start.offset >
                                            1
                                            ? 2
                                            : 1;
                                    var f = Object.assign({}, e[n][1].end),
                                        d = Object.assign({}, e[c][1].start);
                                    Gr(f, -u),
                                        Gr(d, u),
                                        (o = {
                                            type:
                                                u > 1
                                                    ? "strongSequence"
                                                    : "emphasisSequence",
                                            start: f,
                                            end: Object.assign({}, e[n][1].end),
                                        }),
                                        (a = {
                                            type:
                                                u > 1
                                                    ? "strongSequence"
                                                    : "emphasisSequence",
                                            start: Object.assign(
                                                {},
                                                e[c][1].start
                                            ),
                                            end: d,
                                        }),
                                        (i = {
                                            type:
                                                u > 1
                                                    ? "strongText"
                                                    : "emphasisText",
                                            start: Object.assign(
                                                {},
                                                e[n][1].end
                                            ),
                                            end: Object.assign(
                                                {},
                                                e[c][1].start
                                            ),
                                        }),
                                        (r = {
                                            type: u > 1 ? "strong" : "emphasis",
                                            start: Object.assign({}, o.start),
                                            end: Object.assign({}, a.end),
                                        }),
                                        (e[n][1].end = Object.assign(
                                            {},
                                            o.start
                                        )),
                                        (e[c][1].start = Object.assign(
                                            {},
                                            a.end
                                        )),
                                        (l = []),
                                        e[n][1].end.offset -
                                            e[n][1].start.offset &&
                                            (l = _n(l, [
                                                ["enter", e[n][1], t],
                                                ["exit", e[n][1], t],
                                            ])),
                                        (l = _n(l, [
                                            ["enter", r, t],
                                            ["enter", o, t],
                                            ["exit", o, t],
                                            ["enter", i, t],
                                        ])),
                                        (l = _n(
                                            l,
                                            sr(
                                                t.parser.constructs.insideSpan
                                                    .null,
                                                e.slice(n + 1, c),
                                                t
                                            )
                                        )),
                                        (l = _n(l, [
                                            ["exit", i, t],
                                            ["enter", a, t],
                                            ["exit", a, t],
                                            ["exit", r, t],
                                        ])),
                                        e[c][1].end.offset -
                                        e[c][1].start.offset
                                            ? ((s = 2),
                                              (l = _n(l, [
                                                  ["enter", e[c][1], t],
                                                  ["exit", e[c][1], t],
                                              ])))
                                            : (s = 0),
                                        Tn(e, n - 1, c - n + 3, l),
                                        (c = n + l.length - s - 2);
                                    break;
                                }
                    c = -1;
                    for (; ++c < e.length; )
                        "attentionSequence" === e[c][1].type &&
                            (e[c][1].type = "data");
                    return e;
                },
            };
            function Gr(e, t) {
                (e.column += t), (e.offset += t), (e._bufferIndex += t);
            }
            var $r = {
                name: "autolink",
                tokenize: function (e, t, n) {
                    var r = 1;
                    return function (t) {
                        return (
                            e.enter("autolink"),
                            e.enter("autolinkMarker"),
                            e.consume(t),
                            e.exit("autolinkMarker"),
                            e.enter("autolinkProtocol"),
                            i
                        );
                    };
                    function i(t) {
                        return Pn(t) ? (e.consume(t), o) : Bn(t) ? l(t) : n(t);
                    }
                    function o(e) {
                        return 43 === e || 45 === e || 46 === e || jn(e)
                            ? a(e)
                            : l(e);
                    }
                    function a(t) {
                        return 58 === t
                            ? (e.consume(t), u)
                            : (43 === t || 45 === t || 46 === t || jn(t)) &&
                              r++ < 32
                            ? (e.consume(t), a)
                            : l(t);
                    }
                    function u(t) {
                        return 62 === t
                            ? (e.exit("autolinkProtocol"), d(t))
                            : null === t || 32 === t || 60 === t || Un(t)
                            ? n(t)
                            : (e.consume(t), u);
                    }
                    function l(t) {
                        return 64 === t
                            ? (e.consume(t), (r = 0), s)
                            : Bn(t)
                            ? (e.consume(t), l)
                            : n(t);
                    }
                    function s(e) {
                        return jn(e) ? c(e) : n(e);
                    }
                    function c(t) {
                        return 46 === t
                            ? (e.consume(t), (r = 0), s)
                            : 62 === t
                            ? ((e.exit("autolinkProtocol").type =
                                  "autolinkEmail"),
                              d(t))
                            : f(t);
                    }
                    function f(t) {
                        return (45 === t || jn(t)) && r++ < 63
                            ? (e.consume(t), 45 === t ? f : c)
                            : n(t);
                    }
                    function d(n) {
                        return (
                            e.enter("autolinkMarker"),
                            e.consume(n),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t
                        );
                    }
                },
            };
            var Vr = {
                name: "htmlText",
                tokenize: function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        u = this;
                    return function (t) {
                        return (
                            e.enter("htmlText"),
                            e.enter("htmlTextData"),
                            e.consume(t),
                            l
                        );
                    };
                    function l(t) {
                        return 33 === t
                            ? (e.consume(t), s)
                            : 47 === t
                            ? (e.consume(t), E)
                            : 63 === t
                            ? (e.consume(t), w)
                            : Pn(t)
                            ? (e.consume(t), A)
                            : n(t);
                    }
                    function s(t) {
                        return 45 === t
                            ? (e.consume(t), c)
                            : 91 === t
                            ? (e.consume(t), (i = "CDATA["), (o = 0), v)
                            : Pn(t)
                            ? (e.consume(t), b)
                            : n(t);
                    }
                    function c(t) {
                        return 45 === t ? (e.consume(t), f) : n(t);
                    }
                    function f(t) {
                        return null === t || 62 === t
                            ? n(t)
                            : 45 === t
                            ? (e.consume(t), d)
                            : p(t);
                    }
                    function d(e) {
                        return null === e || 62 === e ? n(e) : p(e);
                    }
                    function p(t) {
                        return null === t
                            ? n(t)
                            : 45 === t
                            ? (e.consume(t), h)
                            : Hn(t)
                            ? ((a = p), R(t))
                            : (e.consume(t), p);
                    }
                    function h(t) {
                        return 45 === t ? (e.consume(t), D) : p(t);
                    }
                    function v(t) {
                        return t === i.charCodeAt(o++)
                            ? (e.consume(t), o === i.length ? g : v)
                            : n(t);
                    }
                    function g(t) {
                        return null === t
                            ? n(t)
                            : 93 === t
                            ? (e.consume(t), m)
                            : Hn(t)
                            ? ((a = g), R(t))
                            : (e.consume(t), g);
                    }
                    function m(t) {
                        return 93 === t ? (e.consume(t), y) : g(t);
                    }
                    function y(t) {
                        return 62 === t
                            ? D(t)
                            : 93 === t
                            ? (e.consume(t), y)
                            : g(t);
                    }
                    function b(t) {
                        return null === t || 62 === t
                            ? D(t)
                            : Hn(t)
                            ? ((a = b), R(t))
                            : (e.consume(t), b);
                    }
                    function w(t) {
                        return null === t
                            ? n(t)
                            : 63 === t
                            ? (e.consume(t), x)
                            : Hn(t)
                            ? ((a = w), R(t))
                            : (e.consume(t), w);
                    }
                    function x(e) {
                        return 62 === e ? D(e) : w(e);
                    }
                    function E(t) {
                        return Pn(t) ? (e.consume(t), k) : n(t);
                    }
                    function k(t) {
                        return 45 === t || jn(t) ? (e.consume(t), k) : S(t);
                    }
                    function S(t) {
                        return Hn(t)
                            ? ((a = S), R(t))
                            : Wn(t)
                            ? (e.consume(t), S)
                            : D(t);
                    }
                    function A(t) {
                        return 45 === t || jn(t)
                            ? (e.consume(t), A)
                            : 47 === t || 62 === t || zn(t)
                            ? C(t)
                            : n(t);
                    }
                    function C(t) {
                        return 47 === t
                            ? (e.consume(t), D)
                            : 58 === t || 95 === t || Pn(t)
                            ? (e.consume(t), O)
                            : Hn(t)
                            ? ((a = C), R(t))
                            : Wn(t)
                            ? (e.consume(t), C)
                            : D(t);
                    }
                    function O(t) {
                        return 45 === t ||
                            46 === t ||
                            58 === t ||
                            95 === t ||
                            jn(t)
                            ? (e.consume(t), O)
                            : T(t);
                    }
                    function T(t) {
                        return 61 === t
                            ? (e.consume(t), _)
                            : Hn(t)
                            ? ((a = T), R(t))
                            : Wn(t)
                            ? (e.consume(t), T)
                            : C(t);
                    }
                    function _(t) {
                        return null === t ||
                            60 === t ||
                            61 === t ||
                            62 === t ||
                            96 === t
                            ? n(t)
                            : 34 === t || 39 === t
                            ? (e.consume(t), (r = t), I)
                            : Hn(t)
                            ? ((a = _), R(t))
                            : Wn(t)
                            ? (e.consume(t), _)
                            : (e.consume(t), (r = void 0), L);
                    }
                    function I(t) {
                        return t === r
                            ? (e.consume(t), N)
                            : null === t
                            ? n(t)
                            : Hn(t)
                            ? ((a = I), R(t))
                            : (e.consume(t), I);
                    }
                    function N(e) {
                        return 62 === e || 47 === e || zn(e) ? C(e) : n(e);
                    }
                    function L(t) {
                        return null === t ||
                            34 === t ||
                            39 === t ||
                            60 === t ||
                            61 === t ||
                            96 === t
                            ? n(t)
                            : 62 === t || zn(t)
                            ? C(t)
                            : (e.consume(t), L);
                    }
                    function R(t) {
                        return (
                            e.exit("htmlTextData"),
                            e.enter("lineEnding"),
                            e.consume(t),
                            e.exit("lineEnding"),
                            Xn(
                                e,
                                P,
                                "linePrefix",
                                u.parser.constructs.disable.null.includes(
                                    "codeIndented"
                                )
                                    ? void 0
                                    : 4
                            )
                        );
                    }
                    function P(t) {
                        return e.enter("htmlTextData"), a(t);
                    }
                    function D(r) {
                        return 62 === r
                            ? (e.consume(r),
                              e.exit("htmlTextData"),
                              e.exit("htmlText"),
                              t)
                            : n(r);
                    }
                },
            };
            var Xr = {
                name: "labelStartLink",
                tokenize: function (e, t, n) {
                    var r = this;
                    return function (t) {
                        return (
                            e.enter("labelLink"),
                            e.enter("labelMarker"),
                            e.consume(t),
                            e.exit("labelMarker"),
                            e.exit("labelLink"),
                            i
                        );
                    };
                    function i(e) {
                        return 94 === e &&
                            "_hiddenFootnoteSupport" in r.parser.constructs
                            ? n(e)
                            : t(e);
                    }
                },
                resolveAll: jr.resolveAll,
            };
            var Yr = {
                name: "hardBreakEscape",
                tokenize: function (e, t, n) {
                    return function (t) {
                        return (
                            e.enter("hardBreakEscape"),
                            e.enter("escapeMarker"),
                            e.consume(t),
                            r
                        );
                    };
                    function r(r) {
                        return Hn(r)
                            ? (e.exit("escapeMarker"),
                              e.exit("hardBreakEscape"),
                              t(r))
                            : n(r);
                    }
                },
            };
            var Kr,
                Qr,
                qr,
                Jr,
                Zr,
                ei = {
                    name: "codeText",
                    tokenize: function (e, t, n) {
                        var r,
                            i,
                            o = 0;
                        return function (t) {
                            return (
                                e.enter("codeText"),
                                e.enter("codeTextSequence"),
                                a(t)
                            );
                        };
                        function a(t) {
                            return 96 === t
                                ? (e.consume(t), o++, a)
                                : (e.exit("codeTextSequence"), u(t));
                        }
                        function u(t) {
                            return null === t
                                ? n(t)
                                : 96 === t
                                ? ((i = e.enter("codeTextSequence")),
                                  (r = 0),
                                  s(t))
                                : 32 === t
                                ? (e.enter("space"),
                                  e.consume(t),
                                  e.exit("space"),
                                  u)
                                : Hn(t)
                                ? (e.enter("lineEnding"),
                                  e.consume(t),
                                  e.exit("lineEnding"),
                                  u)
                                : (e.enter("codeTextData"), l(t));
                        }
                        function l(t) {
                            return null === t || 32 === t || 96 === t || Hn(t)
                                ? (e.exit("codeTextData"), u(t))
                                : (e.consume(t), l);
                        }
                        function s(n) {
                            return 96 === n
                                ? (e.consume(n), r++, s)
                                : r === o
                                ? (e.exit("codeTextSequence"),
                                  e.exit("codeText"),
                                  t(n))
                                : ((i.type = "codeTextData"), l(n));
                        }
                    },
                    resolve: function (e) {
                        var t,
                            n,
                            r = e.length - 4,
                            i = 3;
                        if (
                            ("lineEnding" === e[i][1].type ||
                                "space" === e[i][1].type) &&
                            ("lineEnding" === e[r][1].type ||
                                "space" === e[r][1].type)
                        )
                            for (t = i; ++t < r; )
                                if ("codeTextData" === e[t][1].type) {
                                    (e[i][1].type = "codeTextPadding"),
                                        (e[r][1].type = "codeTextPadding"),
                                        (i += 2),
                                        (r -= 2);
                                    break;
                                }
                        (t = i - 1), r++;
                        for (; ++t <= r; )
                            void 0 === n
                                ? t !== r &&
                                  "lineEnding" !== e[t][1].type &&
                                  (n = t)
                                : (t !== r && "lineEnding" !== e[t][1].type) ||
                                  ((e[n][1].type = "codeTextData"),
                                  t !== n + 2 &&
                                      ((e[n][1].end = e[t - 1][1].end),
                                      e.splice(n + 2, t - n - 2),
                                      (r -= t - n - 2),
                                      (t = n + 2)),
                                  (n = void 0));
                        return e;
                    },
                    previous: function (e) {
                        return (
                            96 !== e ||
                            "characterEscape" ===
                                this.events[this.events.length - 1][1].type
                        );
                    },
                };
            var ti =
                    (qe((Kr = {}), 42, dr),
                    qe(Kr, 43, dr),
                    qe(Kr, 45, dr),
                    qe(Kr, 48, dr),
                    qe(Kr, 49, dr),
                    qe(Kr, 50, dr),
                    qe(Kr, 51, dr),
                    qe(Kr, 52, dr),
                    qe(Kr, 53, dr),
                    qe(Kr, 54, dr),
                    qe(Kr, 55, dr),
                    qe(Kr, 56, dr),
                    qe(Kr, 57, dr),
                    qe(Kr, 62, vr),
                    Kr),
                ni = qe({}, 91, xr),
                ri =
                    (qe((Qr = {}), -2, kr), qe(Qr, -1, kr), qe(Qr, 32, kr), Qr),
                ii =
                    (qe((qr = {}), 35, Ar),
                    qe(qr, 42, fr),
                    qe(qr, 45, [Cr, fr]),
                    qe(qr, 60, _r),
                    qe(qr, 61, Cr),
                    qe(qr, 95, fr),
                    qe(qr, 96, Nr),
                    qe(qr, 126, Nr),
                    qr),
                oi = (qe((Jr = {}), 38, Pr), qe(Jr, 92, Dr), Jr),
                ai =
                    (qe((Zr = {}), -5, Mr),
                    qe(Zr, -4, Mr),
                    qe(Zr, -3, Mr),
                    qe(Zr, 33, zr),
                    qe(Zr, 38, Pr),
                    qe(Zr, 42, Wr),
                    qe(Zr, 60, [$r, Vr]),
                    qe(Zr, 91, Xr),
                    qe(Zr, 92, [Yr, Dr]),
                    qe(Zr, 93, jr),
                    qe(Zr, 95, Wr),
                    qe(Zr, 96, ei),
                    Zr),
                ui = { null: [Wr, rr] },
                li = { null: [42, 95] },
                si = { null: [] };
            var ci = /[\0\t\n\r]/g;
            function fi(e, t) {
                var n = Number.parseInt(e, t);
                return n < 9 ||
                    11 === n ||
                    (n > 13 && n < 32) ||
                    (n > 126 && n < 160) ||
                    (n > 55295 && n < 57344) ||
                    (n > 64975 && n < 65008) ||
                    65535 === (65535 & n) ||
                    65534 === (65535 & n) ||
                    n > 1114111
                    ? "\ufffd"
                    : String.fromCharCode(n);
            }
            var di =
                /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
            function pi(e) {
                return e.replace(di, hi);
            }
            function hi(e, t, n) {
                if (t) return t;
                if (35 === n.charCodeAt(0)) {
                    var r = n.charCodeAt(1),
                        i = 120 === r || 88 === r;
                    return fi(n.slice(i ? 2 : 1), i ? 16 : 10);
                }
                return Rr(n) || e;
            }
            var vi = {}.hasOwnProperty,
                gi = function (t, n, r) {
                    return (
                        "string" !== typeof n && ((r = n), (n = void 0)),
                        (function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                t = mi(
                                    {
                                        transforms: [],
                                        canContainEols: [
                                            "emphasis",
                                            "fragment",
                                            "heading",
                                            "paragraph",
                                            "strong",
                                        ],
                                        enter: {
                                            autolink: l(re),
                                            autolinkProtocol: T,
                                            autolinkEmail: T,
                                            atxHeading: l(Z),
                                            blockQuote: l(Y),
                                            characterEscape: T,
                                            characterReference: T,
                                            codeFenced: l(K),
                                            codeFencedFenceInfo: s,
                                            codeFencedFenceMeta: s,
                                            codeIndented: l(K, s),
                                            codeText: l(Q, s),
                                            codeTextData: T,
                                            data: T,
                                            codeFlowValue: T,
                                            definition: l(q),
                                            definitionDestinationString: s,
                                            definitionLabelString: s,
                                            definitionTitleString: s,
                                            emphasis: l(J),
                                            hardBreakEscape: l(ee),
                                            hardBreakTrailing: l(ee),
                                            htmlFlow: l(te, s),
                                            htmlFlowData: T,
                                            htmlText: l(te, s),
                                            htmlTextData: T,
                                            image: l(ne),
                                            label: s,
                                            link: l(re),
                                            listItem: l(oe),
                                            listItemValue: v,
                                            listOrdered: l(ie, h),
                                            listUnordered: l(ie),
                                            paragraph: l(ae),
                                            reference: H,
                                            referenceString: s,
                                            resourceDestinationString: s,
                                            resourceTitleString: s,
                                            setextHeading: l(Z),
                                            strong: l(ue),
                                            thematicBreak: l(se),
                                        },
                                        exit: {
                                            atxHeading: f(),
                                            atxHeadingSequence: S,
                                            autolink: f(),
                                            autolinkEmail: X,
                                            autolinkProtocol: V,
                                            blockQuote: f(),
                                            characterEscapeValue: _,
                                            characterReferenceMarkerHexadecimal:
                                                G,
                                            characterReferenceMarkerNumeric: G,
                                            characterReferenceValue: $,
                                            codeFenced: f(b),
                                            codeFencedFence: y,
                                            codeFencedFenceInfo: g,
                                            codeFencedFenceMeta: m,
                                            codeFlowValue: _,
                                            codeIndented: f(w),
                                            codeText: f(P),
                                            codeTextData: _,
                                            data: _,
                                            definition: f(),
                                            definitionDestinationString: k,
                                            definitionLabelString: x,
                                            definitionTitleString: E,
                                            emphasis: f(),
                                            hardBreakEscape: f(N),
                                            hardBreakTrailing: f(N),
                                            htmlFlow: f(L),
                                            htmlFlowData: _,
                                            htmlText: f(R),
                                            htmlTextData: _,
                                            image: f(M),
                                            label: F,
                                            labelText: j,
                                            lineEnding: I,
                                            link: f(D),
                                            listItem: f(),
                                            listOrdered: f(),
                                            listUnordered: f(),
                                            paragraph: f(),
                                            referenceString: W,
                                            resourceDestinationString: B,
                                            resourceTitleString: U,
                                            resource: z,
                                            setextHeading: f(O),
                                            setextHeadingLineSequence: C,
                                            setextHeadingText: A,
                                            strong: f(),
                                            thematicBreak: f(),
                                        },
                                    },
                                    e.mdastExtensions || []
                                ),
                                n = {};
                            return r;
                            function r(e) {
                                for (
                                    var n = { type: "root", children: [] },
                                        r = [],
                                        l = [],
                                        f = {
                                            stack: [n],
                                            tokenStack: r,
                                            config: t,
                                            enter: c,
                                            exit: d,
                                            buffer: s,
                                            resume: p,
                                            setData: o,
                                            getData: a,
                                        },
                                        h = -1;
                                    ++h < e.length;

                                ) {
                                    if (
                                        "listOrdered" === e[h][1].type ||
                                        "listUnordered" === e[h][1].type
                                    )
                                        if ("enter" === e[h][0]) l.push(h);
                                        else h = i(e, l.pop(), h);
                                }
                                for (h = -1; ++h < e.length; ) {
                                    var v = t[e[h][0]];
                                    vi.call(v, e[h][1].type) &&
                                        v[e[h][1].type].call(
                                            Object.assign(
                                                {
                                                    sliceSerialize:
                                                        e[h][2].sliceSerialize,
                                                },
                                                f
                                            ),
                                            e[h][1]
                                        );
                                }
                                if (r.length > 0) {
                                    var g = r[r.length - 1];
                                    (g[1] || bi).call(f, void 0, g[0]);
                                }
                                for (
                                    n.position = {
                                        start: u(
                                            e.length > 0
                                                ? e[0][1].start
                                                : {
                                                      line: 1,
                                                      column: 1,
                                                      offset: 0,
                                                  }
                                        ),
                                        end: u(
                                            e.length > 0
                                                ? e[e.length - 2][1].end
                                                : {
                                                      line: 1,
                                                      column: 1,
                                                      offset: 0,
                                                  }
                                        ),
                                    },
                                        h = -1;
                                    ++h < t.transforms.length;

                                )
                                    n = t.transforms[h](n) || n;
                                return n;
                            }
                            function i(e, t, n) {
                                for (
                                    var r, i, o, a, u = t - 1, l = -1, s = !1;
                                    ++u <= n;

                                ) {
                                    var c = e[u];
                                    if (
                                        ("listUnordered" === c[1].type ||
                                        "listOrdered" === c[1].type ||
                                        "blockQuote" === c[1].type
                                            ? ("enter" === c[0] ? l++ : l--,
                                              (a = void 0))
                                            : "lineEndingBlank" === c[1].type
                                            ? "enter" === c[0] &&
                                              (!r || a || l || o || (o = u),
                                              (a = void 0))
                                            : "linePrefix" === c[1].type ||
                                              "listItemValue" === c[1].type ||
                                              "listItemMarker" === c[1].type ||
                                              "listItemPrefix" === c[1].type ||
                                              "listItemPrefixWhitespace" ===
                                                  c[1].type ||
                                              (a = void 0),
                                        (!l &&
                                            "enter" === c[0] &&
                                            "listItemPrefix" === c[1].type) ||
                                            (-1 === l &&
                                                "exit" === c[0] &&
                                                ("listUnordered" ===
                                                    c[1].type ||
                                                    "listOrdered" ===
                                                        c[1].type)))
                                    ) {
                                        if (r) {
                                            var f = u;
                                            for (i = void 0; f--; ) {
                                                var d = e[f];
                                                if (
                                                    "lineEnding" ===
                                                        d[1].type ||
                                                    "lineEndingBlank" ===
                                                        d[1].type
                                                ) {
                                                    if ("exit" === d[0])
                                                        continue;
                                                    i &&
                                                        ((e[i][1].type =
                                                            "lineEndingBlank"),
                                                        (s = !0)),
                                                        (d[1].type =
                                                            "lineEnding"),
                                                        (i = f);
                                                } else if (
                                                    "linePrefix" !==
                                                        d[1].type &&
                                                    "blockQuotePrefix" !==
                                                        d[1].type &&
                                                    "blockQuotePrefixWhitespace" !==
                                                        d[1].type &&
                                                    "blockQuoteMarker" !==
                                                        d[1].type &&
                                                    "listItemIndent" !==
                                                        d[1].type
                                                )
                                                    break;
                                            }
                                            o &&
                                                (!i || o < i) &&
                                                (r._spread = !0),
                                                (r.end = Object.assign(
                                                    {},
                                                    i ? e[i][1].start : c[1].end
                                                )),
                                                e.splice(i || u, 0, [
                                                    "exit",
                                                    r,
                                                    c[2],
                                                ]),
                                                u++,
                                                n++;
                                        }
                                        "listItemPrefix" === c[1].type &&
                                            ((r = {
                                                type: "listItem",
                                                _spread: !1,
                                                start: Object.assign(
                                                    {},
                                                    c[1].start
                                                ),
                                            }),
                                            e.splice(u, 0, ["enter", r, c[2]]),
                                            u++,
                                            n++,
                                            (o = void 0),
                                            (a = !0));
                                    }
                                }
                                return (e[t][1]._spread = s), n;
                            }
                            function o(e, t) {
                                n[e] = t;
                            }
                            function a(e) {
                                return n[e];
                            }
                            function u(e) {
                                return {
                                    line: e.line,
                                    column: e.column,
                                    offset: e.offset,
                                };
                            }
                            function l(e, t) {
                                return n;
                                function n(n) {
                                    c.call(this, e(n), n), t && t.call(this, n);
                                }
                            }
                            function s() {
                                this.stack.push({
                                    type: "fragment",
                                    children: [],
                                });
                            }
                            function c(e, t, n) {
                                return (
                                    this.stack[
                                        this.stack.length - 1
                                    ].children.push(e),
                                    this.stack.push(e),
                                    this.tokenStack.push([t, n]),
                                    (e.position = { start: u(t.start) }),
                                    e
                                );
                            }
                            function f(e) {
                                return t;
                                function t(t) {
                                    e && e.call(this, t), d.call(this, t);
                                }
                            }
                            function d(e, t) {
                                var n = this.stack.pop(),
                                    r = this.tokenStack.pop();
                                if (!r)
                                    throw new Error(
                                        "Cannot close `" +
                                            e.type +
                                            "` (" +
                                            Yt({ start: e.start, end: e.end }) +
                                            "): it\u2019s not open"
                                    );
                                return (
                                    r[0].type !== e.type &&
                                        (t
                                            ? t.call(this, e, r[0])
                                            : (r[1] || bi).call(this, e, r[0])),
                                    (n.position.end = u(e.end)),
                                    n
                                );
                            }
                            function p() {
                                return An(this.stack.pop());
                            }
                            function h() {
                                o("expectingFirstListItemValue", !0);
                            }
                            function v(e) {
                                a("expectingFirstListItemValue") &&
                                    ((this.stack[this.stack.length - 2].start =
                                        Number.parseInt(
                                            this.sliceSerialize(e),
                                            10
                                        )),
                                    o("expectingFirstListItemValue"));
                            }
                            function g() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].lang = e;
                            }
                            function m() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].meta = e;
                            }
                            function y() {
                                a("flowCodeInside") ||
                                    (this.buffer(), o("flowCodeInside", !0));
                            }
                            function b() {
                                var e = this.resume();
                                (this.stack[this.stack.length - 1].value =
                                    e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
                                    o("flowCodeInside");
                            }
                            function w() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].value =
                                    e.replace(/(\r?\n|\r)$/g, "");
                            }
                            function x(e) {
                                var t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                (n.label = t),
                                    (n.identifier = wr(
                                        this.sliceSerialize(e)
                                    ).toLowerCase());
                            }
                            function E() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].title = e;
                            }
                            function k() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].url = e;
                            }
                            function S(e) {
                                var t = this.stack[this.stack.length - 1];
                                if (!t.depth) {
                                    var n = this.sliceSerialize(e).length;
                                    t.depth = n;
                                }
                            }
                            function A() {
                                o("setextHeadingSlurpLineEnding", !0);
                            }
                            function C(e) {
                                this.stack[this.stack.length - 1].depth =
                                    61 === this.sliceSerialize(e).charCodeAt(0)
                                        ? 1
                                        : 2;
                            }
                            function O() {
                                o("setextHeadingSlurpLineEnding");
                            }
                            function T(e) {
                                var t = this.stack[this.stack.length - 1],
                                    n = t.children[t.children.length - 1];
                                (n && "text" === n.type) ||
                                    (((n = le()).position = {
                                        start: u(e.start),
                                    }),
                                    t.children.push(n)),
                                    this.stack.push(n);
                            }
                            function _(e) {
                                var t = this.stack.pop();
                                (t.value += this.sliceSerialize(e)),
                                    (t.position.end = u(e.end));
                            }
                            function I(e) {
                                var n = this.stack[this.stack.length - 1];
                                if (a("atHardBreak"))
                                    return (
                                        (n.children[
                                            n.children.length - 1
                                        ].position.end = u(e.end)),
                                        void o("atHardBreak")
                                    );
                                !a("setextHeadingSlurpLineEnding") &&
                                    t.canContainEols.includes(n.type) &&
                                    (T.call(this, e), _.call(this, e));
                            }
                            function N() {
                                o("atHardBreak", !0);
                            }
                            function L() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].value = e;
                            }
                            function R() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].value = e;
                            }
                            function P() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].value = e;
                            }
                            function D() {
                                var e = this.stack[this.stack.length - 1];
                                a("inReference")
                                    ? ((e.type += "Reference"),
                                      (e.referenceType =
                                          a("referenceType") || "shortcut"),
                                      delete e.url,
                                      delete e.title)
                                    : (delete e.identifier, delete e.label),
                                    o("referenceType");
                            }
                            function M() {
                                var e = this.stack[this.stack.length - 1];
                                a("inReference")
                                    ? ((e.type += "Reference"),
                                      (e.referenceType =
                                          a("referenceType") || "shortcut"),
                                      delete e.url,
                                      delete e.title)
                                    : (delete e.identifier, delete e.label),
                                    o("referenceType");
                            }
                            function j(e) {
                                var t = this.stack[this.stack.length - 2],
                                    n = this.sliceSerialize(e);
                                (t.label = pi(n)),
                                    (t.identifier = wr(n).toLowerCase());
                            }
                            function F() {
                                var e = this.stack[this.stack.length - 1],
                                    t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                o("inReference", !0),
                                    "link" === n.type
                                        ? (n.children = e.children)
                                        : (n.alt = t);
                            }
                            function B() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].url = e;
                            }
                            function U() {
                                var e = this.resume();
                                this.stack[this.stack.length - 1].title = e;
                            }
                            function z() {
                                o("inReference");
                            }
                            function H() {
                                o("referenceType", "collapsed");
                            }
                            function W(e) {
                                var t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                (n.label = t),
                                    (n.identifier = wr(
                                        this.sliceSerialize(e)
                                    ).toLowerCase()),
                                    o("referenceType", "full");
                            }
                            function G(e) {
                                o("characterReferenceType", e.type);
                            }
                            function $(e) {
                                var t,
                                    n = this.sliceSerialize(e),
                                    r = a("characterReferenceType");
                                r
                                    ? ((t = fi(
                                          n,
                                          "characterReferenceMarkerNumeric" ===
                                              r
                                              ? 10
                                              : 16
                                      )),
                                      o("characterReferenceType"))
                                    : (t = Rr(n));
                                var i = this.stack.pop();
                                (i.value += t), (i.position.end = u(e.end));
                            }
                            function V(e) {
                                _.call(this, e),
                                    (this.stack[this.stack.length - 1].url =
                                        this.sliceSerialize(e));
                            }
                            function X(e) {
                                _.call(this, e),
                                    (this.stack[this.stack.length - 1].url =
                                        "mailto:" + this.sliceSerialize(e));
                            }
                            function Y() {
                                return { type: "blockquote", children: [] };
                            }
                            function K() {
                                return {
                                    type: "code",
                                    lang: null,
                                    meta: null,
                                    value: "",
                                };
                            }
                            function Q() {
                                return { type: "inlineCode", value: "" };
                            }
                            function q() {
                                return {
                                    type: "definition",
                                    identifier: "",
                                    label: null,
                                    title: null,
                                    url: "",
                                };
                            }
                            function J() {
                                return { type: "emphasis", children: [] };
                            }
                            function Z() {
                                return {
                                    type: "heading",
                                    depth: void 0,
                                    children: [],
                                };
                            }
                            function ee() {
                                return { type: "break" };
                            }
                            function te() {
                                return { type: "html", value: "" };
                            }
                            function ne() {
                                return {
                                    type: "image",
                                    title: null,
                                    url: "",
                                    alt: null,
                                };
                            }
                            function re() {
                                return {
                                    type: "link",
                                    title: null,
                                    url: "",
                                    children: [],
                                };
                            }
                            function ie(e) {
                                return {
                                    type: "list",
                                    ordered: "listOrdered" === e.type,
                                    start: null,
                                    spread: e._spread,
                                    children: [],
                                };
                            }
                            function oe(e) {
                                return {
                                    type: "listItem",
                                    spread: e._spread,
                                    checked: null,
                                    children: [],
                                };
                            }
                            function ae() {
                                return { type: "paragraph", children: [] };
                            }
                            function ue() {
                                return { type: "strong", children: [] };
                            }
                            function le() {
                                return { type: "text", value: "" };
                            }
                            function se() {
                                return { type: "thematicBreak" };
                            }
                        })(r)(
                            (function (e) {
                                for (; !Jn(e); );
                                return e;
                            })(
                                (function () {
                                    var t = {
                                        defined: [],
                                        lazy: {},
                                        constructs: Nn(
                                            [e].concat(
                                                (arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : {}
                                                ).extensions || []
                                            )
                                        ),
                                        content: n(Yn),
                                        document: n(Kn),
                                        flow: n(nr),
                                        string: n(ir),
                                        text: n(or),
                                    };
                                    return t;
                                    function n(e) {
                                        return function (n) {
                                            return cr(t, e, n);
                                        };
                                    }
                                })(r)
                                    .document()
                                    .write(
                                        (function () {
                                            var e,
                                                t = 1,
                                                n = "",
                                                r = !0;
                                            return function (i, o, a) {
                                                var u,
                                                    l,
                                                    s,
                                                    c,
                                                    f,
                                                    d = [];
                                                for (
                                                    i = n + i.toString(o),
                                                        s = 0,
                                                        n = "",
                                                        r &&
                                                            (65279 ===
                                                                i.charCodeAt(
                                                                    0
                                                                ) && s++,
                                                            (r = void 0));
                                                    s < i.length;

                                                ) {
                                                    if (
                                                        ((ci.lastIndex = s),
                                                        (c =
                                                            (u = ci.exec(i)) &&
                                                            void 0 !== u.index
                                                                ? u.index
                                                                : i.length),
                                                        (f = i.charCodeAt(c)),
                                                        !u)
                                                    ) {
                                                        n = i.slice(s);
                                                        break;
                                                    }
                                                    if (
                                                        10 === f &&
                                                        s === c &&
                                                        e
                                                    )
                                                        d.push(-3),
                                                            (e = void 0);
                                                    else
                                                        switch (
                                                            (e &&
                                                                (d.push(-5),
                                                                (e = void 0)),
                                                            s < c &&
                                                                (d.push(
                                                                    i.slice(
                                                                        s,
                                                                        c
                                                                    )
                                                                ),
                                                                (t += c - s)),
                                                            f)
                                                        ) {
                                                            case 0:
                                                                d.push(65533),
                                                                    t++;
                                                                break;
                                                            case 9:
                                                                for (
                                                                    l =
                                                                        4 *
                                                                        Math.ceil(
                                                                            t /
                                                                                4
                                                                        ),
                                                                        d.push(
                                                                            -2
                                                                        );
                                                                    t++ < l;

                                                                )
                                                                    d.push(-1);
                                                                break;
                                                            case 10:
                                                                d.push(-4),
                                                                    (t = 1);
                                                                break;
                                                            default:
                                                                (e = !0),
                                                                    (t = 1);
                                                        }
                                                    s = c + 1;
                                                }
                                                return (
                                                    a &&
                                                        (e && d.push(-5),
                                                        n && d.push(n),
                                                        d.push(null)),
                                                    d
                                                );
                                            };
                                        })()(t, n, !0)
                                    )
                            )
                        )
                    );
                };
            function mi(e, t) {
                for (var n = -1; ++n < t.length; ) {
                    var r = t[n];
                    Array.isArray(r) ? mi(e, r) : yi(e, r);
                }
                return e;
            }
            function yi(e, t) {
                var n;
                for (n in t)
                    if (vi.call(t, n)) {
                        var r = "canContainEols" === n || "transforms" === n,
                            i =
                                (vi.call(e, n) ? e[n] : void 0) ||
                                (e[n] = r ? [] : {}),
                            o = t[n];
                        o &&
                            (r
                                ? (e[n] = [].concat(Qe(i), Qe(o)))
                                : Object.assign(i, o));
                    }
            }
            function bi(e, t) {
                throw e
                    ? new Error(
                          "Cannot close `" +
                              e.type +
                              "` (" +
                              Yt({ start: e.start, end: e.end }) +
                              "): a different token (`" +
                              t.type +
                              "`, " +
                              Yt({ start: t.start, end: t.end }) +
                              ") is open"
                      )
                    : new Error(
                          "Cannot close document, a token (`" +
                              t.type +
                              "`, " +
                              Yt({ start: t.start, end: t.end }) +
                              ") is still open"
                      );
            }
            var wi = function (e) {
                    var t = this;
                    Object.assign(this, {
                        Parser: function (n) {
                            var r = t.data("settings");
                            return gi(
                                n,
                                Object.assign({}, r, e, {
                                    extensions:
                                        t.data("micromarkExtensions") || [],
                                    mdastExtensions:
                                        t.data("fromMarkdownExtensions") || [],
                                })
                            );
                        },
                    });
                },
                xi = function (e, t, n) {
                    var r = { type: String(e) };
                    return (
                        (void 0 !== n && null !== n) ||
                        ("string" !== typeof t && !Array.isArray(t))
                            ? Object.assign(r, t)
                            : (n = t),
                        Array.isArray(n)
                            ? (r.children = n)
                            : void 0 !== n &&
                              null !== n &&
                              (r.value = String(n)),
                        r
                    );
                },
                Ei = function (e) {
                    if (void 0 === e || null === e) return Ai;
                    if ("string" === typeof e)
                        return (function (e) {
                            return Si(t);
                            function t(t) {
                                return t && t.type === e;
                            }
                        })(e);
                    if ("object" === typeof e)
                        return Array.isArray(e)
                            ? ki(e)
                            : (function (e) {
                                  return Si(t);
                                  function t(t) {
                                      var n;
                                      for (n in e) if (t[n] !== e[n]) return !1;
                                      return !0;
                                  }
                              })(e);
                    if ("function" === typeof e) return Si(e);
                    throw new Error(
                        "Expected function, string, or object as test"
                    );
                };
            function ki(e) {
                for (var t = [], n = -1; ++n < e.length; ) t[n] = Ei(e[n]);
                return Si(function () {
                    for (
                        var e = -1,
                            n = arguments.length,
                            r = new Array(n),
                            i = 0;
                        i < n;
                        i++
                    )
                        r[i] = arguments[i];
                    for (; ++e < t.length; ) {
                        var o;
                        if ((o = t[e]).call.apply(o, [this].concat(r)))
                            return !0;
                    }
                    return !1;
                });
            }
            function Si(e) {
                return function () {
                    for (
                        var t = arguments.length, n = new Array(t), r = 0;
                        r < t;
                        r++
                    )
                        n[r] = arguments[r];
                    return Boolean(e.call.apply(e, [this].concat(n)));
                };
            }
            function Ai() {
                return !0;
            }
            var Ci = function (e, t, n, r) {
                "function" === typeof t &&
                    "function" !== typeof n &&
                    ((r = n), (n = t), (t = null));
                var i = Ei(t),
                    o = r ? -1 : 1;
                !(function e(a, u, l) {
                    var s,
                        c = "object" === typeof a && null !== a ? a : {};
                    "string" === typeof c.type &&
                        ((s =
                            "string" === typeof c.tagName
                                ? c.tagName
                                : "string" === typeof c.name
                                ? c.name
                                : void 0),
                        Object.defineProperty(f, "name", {
                            value:
                                "node (" +
                                c.type +
                                (s ? "<" + s + ">" : "") +
                                ")",
                        }));
                    return f;
                    function f() {
                        var s,
                            c,
                            f,
                            d = [];
                        if (
                            (!t || i(a, u, l[l.length - 1] || null)) &&
                            ((d = (function (e) {
                                if (Array.isArray(e)) return e;
                                if ("number" === typeof e) return [true, e];
                                return [e];
                            })(n(a, l))),
                            false === d[0])
                        )
                            return d;
                        if (a.children && "skip" !== d[0])
                            for (
                                c = (r ? a.children.length : -1) + o,
                                    f = l.concat(a);
                                c > -1 && c < a.children.length;

                            ) {
                                if (
                                    ((s = e(a.children[c], c, f)()),
                                    false === s[0])
                                )
                                    return s;
                                c = "number" === typeof s[1] ? s[1] : c + o;
                            }
                        return d;
                    }
                })(e, null, [])();
            };
            var Oi = function (e, t, n, r) {
                    "function" === typeof t &&
                        "function" !== typeof n &&
                        ((r = n), (n = t), (t = null)),
                        Ci(
                            e,
                            t,
                            function (e, t) {
                                var r = t[t.length - 1];
                                return n(
                                    e,
                                    r ? r.children.indexOf(e) : null,
                                    r
                                );
                            },
                            r
                        );
                },
                Ti = Ii("start"),
                _i = Ii("end");
            function Ii(e) {
                return function (t) {
                    var n = (t && t.position && t.position[e]) || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: n.offset > -1 ? n.offset : null,
                    };
                };
            }
            var Ni = function (e, t, n, r) {
                "function" === typeof t &&
                    "function" !== typeof n &&
                    ((r = n), (n = t), (t = null));
                var i = Ei(t),
                    o = r ? -1 : 1;
                !(function e(a, u, l) {
                    var s,
                        c = "object" === typeof a && null !== a ? a : {};
                    "string" === typeof c.type &&
                        ((s =
                            "string" === typeof c.tagName
                                ? c.tagName
                                : "string" === typeof c.name
                                ? c.name
                                : void 0),
                        Object.defineProperty(f, "name", {
                            value:
                                "node (" +
                                c.type +
                                (s ? "<" + s + ">" : "") +
                                ")",
                        }));
                    return f;
                    function f() {
                        var s,
                            c,
                            f,
                            d = [];
                        if (
                            (!t || i(a, u, l[l.length - 1] || null)) &&
                            ((d = (function (e) {
                                if (Array.isArray(e)) return e;
                                if ("number" === typeof e) return [true, e];
                                return [e];
                            })(n(a, l))),
                            false === d[0])
                        )
                            return d;
                        if (a.children && "skip" !== d[0])
                            for (
                                c = (r ? a.children.length : -1) + o,
                                    f = l.concat(a);
                                c > -1 && c < a.children.length;

                            ) {
                                if (
                                    ((s = e(a.children[c], c, f)()),
                                    false === s[0])
                                )
                                    return s;
                                c = "number" === typeof s[1] ? s[1] : c + o;
                            }
                        return d;
                    }
                })(e, null, [])();
            };
            var Li = {}.hasOwnProperty;
            function Ri(e) {
                var t,
                    n,
                    r,
                    i = Object.create(null);
                if (!e || !e.type)
                    throw new Error("mdast-util-definitions expected node");
                return (
                    (n = function (e) {
                        var t = Pi(e.identifier);
                        t && !Li.call(i, t) && (i[t] = e);
                    }),
                    "function" === typeof (t = "definition") &&
                        "function" !== typeof n &&
                        ((r = n), (n = t), (t = null)),
                    Ni(
                        e,
                        t,
                        function (e, t) {
                            var r = t[t.length - 1];
                            return n(e, r ? r.children.indexOf(e) : null, r);
                        },
                        r
                    ),
                    function (e) {
                        var t = Pi(e);
                        return t && Li.call(i, t) ? i[t] : null;
                    }
                );
            }
            function Pi(e) {
                return String(e || "").toUpperCase();
            }
            var Di = {}.hasOwnProperty;
            function Mi(e, t) {
                var n = t.data || {};
                return "value" in t &&
                    !(
                        Di.call(n, "hName") ||
                        Di.call(n, "hProperties") ||
                        Di.call(n, "hChildren")
                    )
                    ? e.augment(t, xi("text", t.value))
                    : e(t, "div", Bi(e, t));
            }
            function ji(e, t, n) {
                var r,
                    i = t && t.type;
                if (!i) throw new Error("Expected node, got `" + t + "`");
                return (
                    "function" ===
                        typeof (r = Di.call(e.handlers, i)
                            ? e.handlers[i]
                            : e.passThrough && e.passThrough.includes(i)
                            ? Fi
                            : e.unknownHandler)
                        ? r
                        : Mi
                )(e, t, n);
            }
            function Fi(e, t) {
                return "children" in t
                    ? Ze(Ze({}, t), {}, { children: Bi(e, t) })
                    : t;
            }
            function Bi(e, t) {
                var n = [];
                if ("children" in t)
                    for (var r = t.children, i = -1; ++i < r.length; ) {
                        var o = ji(e, r[i], t);
                        if (o) {
                            if (
                                i &&
                                "break" === r[i - 1].type &&
                                (Array.isArray(o) ||
                                    "text" !== o.type ||
                                    (o.value = o.value.replace(/^\s+/, "")),
                                !Array.isArray(o) && "element" === o.type)
                            ) {
                                var a = o.children[0];
                                a &&
                                    "text" === a.type &&
                                    (a.value = a.value.replace(/^\s+/, ""));
                            }
                            Array.isArray(o)
                                ? n.push.apply(n, Qe(o))
                                : n.push(o);
                        }
                    }
                return n;
            }
            var Ui = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
            function zi(e, t) {
                var n = (function (e) {
                    return e.replace(/["&<>]/g, function (e) {
                        return "&" + Ui[e] + ";";
                    });
                })(
                    (function (e) {
                        var t = [],
                            n = -1,
                            r = 0,
                            i = 0;
                        for (; ++n < e.length; ) {
                            var o = e.charCodeAt(n),
                                a = "";
                            if (
                                37 === o &&
                                jn(e.charCodeAt(n + 1)) &&
                                jn(e.charCodeAt(n + 2))
                            )
                                i = 2;
                            else if (o < 128)
                                /[!#$&-;=?-Z_a-z~]/.test(
                                    String.fromCharCode(o)
                                ) || (a = String.fromCharCode(o));
                            else if (o > 55295 && o < 57344) {
                                var u = e.charCodeAt(n + 1);
                                o < 56320 && u > 56319 && u < 57344
                                    ? ((a = String.fromCharCode(o, u)), (i = 1))
                                    : (a = "\ufffd");
                            } else a = String.fromCharCode(o);
                            a &&
                                (t.push(e.slice(r, n), encodeURIComponent(a)),
                                (r = n + i + 1),
                                (a = "")),
                                i && ((n += i), (i = 0));
                        }
                        return t.join("") + e.slice(r);
                    })(e || "")
                );
                if (!t) return n;
                var r = n.indexOf(":"),
                    i = n.indexOf("?"),
                    o = n.indexOf("#"),
                    a = n.indexOf("/");
                return r < 0 ||
                    (a > -1 && r > a) ||
                    (i > -1 && r > i) ||
                    (o > -1 && r > o) ||
                    t.test(n.slice(0, r))
                    ? n
                    : "";
            }
            function Hi(e, t) {
                var n = [],
                    r = -1;
                for (t && n.push(xi("text", "\n")); ++r < e.length; )
                    r && n.push(xi("text", "\n")), n.push(e[r]);
                return t && e.length > 0 && n.push(xi("text", "\n")), n;
            }
            function Wi(e, t) {
                var n,
                    r = String(t.identifier),
                    i = zi(r.toLowerCase()),
                    o = e.footnoteOrder.indexOf(r);
                -1 === o
                    ? (e.footnoteOrder.push(r),
                      (e.footnoteCounts[r] = 1),
                      (n = e.footnoteOrder.length))
                    : (e.footnoteCounts[r]++, (n = o + 1));
                var a = e.footnoteCounts[r];
                return e(t, "sup", [
                    e(
                        t.position,
                        "a",
                        {
                            href: "#" + e.clobberPrefix + "fn-" + i,
                            id:
                                e.clobberPrefix +
                                "fnref-" +
                                i +
                                (a > 1 ? "-" + a : ""),
                            dataFootnoteRef: !0,
                            ariaDescribedBy: "footnote-label",
                        },
                        [xi("text", String(n))]
                    ),
                ]);
            }
            var Gi = require("mdurl").encode;
            function $i(e, t) {
                var n = t.referenceType,
                    r = "]";
                if (
                    ("collapsed" === n
                        ? (r += "[]")
                        : "full" === n &&
                          (r += "[" + (t.label || t.identifier) + "]"),
                    "imageReference" === t.type)
                )
                    return xi("text", "![" + t.alt + r);
                var i = Bi(e, t),
                    o = i[0];
                o && "text" === o.type
                    ? (o.value = "[" + o.value)
                    : i.unshift(xi("text", "["));
                var a = i[i.length - 1];
                return (
                    a && "text" === a.type
                        ? (a.value += r)
                        : i.push(xi("text", r)),
                    i
                );
            }
            function Vi(e) {
                var t = e.spread;
                return void 0 === t || null === t ? e.children.length > 1 : t;
            }
            var Xi = {
                blockquote: function (e, t) {
                    return e(t, "blockquote", Hi(Bi(e, t), !0));
                },
                break: function (e, t) {
                    return [e(t, "br"), xi("text", "\n")];
                },
                code: function (e, t) {
                    var n = t.value ? t.value + "\n" : "",
                        r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                        i = {};
                    r && (i.className = ["language-" + r]);
                    var o = e(t, "code", i, [xi("text", n)]);
                    return (
                        t.meta && (o.data = { meta: t.meta }),
                        e(t.position, "pre", [o])
                    );
                },
                delete: function (e, t) {
                    return e(t, "del", Bi(e, t));
                },
                emphasis: function (e, t) {
                    return e(t, "em", Bi(e, t));
                },
                footnoteReference: Wi,
                footnote: function (e, t) {
                    for (var n = e.footnoteById, r = 1; r in n; ) r++;
                    var i = String(r);
                    return (
                        (n[i] = {
                            type: "footnoteDefinition",
                            identifier: i,
                            children: [
                                { type: "paragraph", children: t.children },
                            ],
                            position: t.position,
                        }),
                        Wi(e, {
                            type: "footnoteReference",
                            identifier: i,
                            position: t.position,
                        })
                    );
                },
                heading: function (e, t) {
                    return e(t, "h" + t.depth, Bi(e, t));
                },
                html: function (e, t) {
                    return e.dangerous
                        ? e.augment(t, xi("raw", t.value))
                        : null;
                },
                imageReference: function (e, t) {
                    var n = e.definition(t.identifier);
                    if (!n) return $i(e, t);
                    var r = { src: Gi(n.url || ""), alt: t.alt };
                    return (
                        null !== n.title &&
                            void 0 !== n.title &&
                            (r.title = n.title),
                        e(t, "img", r)
                    );
                },
                image: function (e, t) {
                    var n = { src: Gi(t.url), alt: t.alt };
                    return (
                        null !== t.title &&
                            void 0 !== t.title &&
                            (n.title = t.title),
                        e(t, "img", n)
                    );
                },
                inlineCode: function (e, t) {
                    return e(t, "code", [
                        xi("text", t.value.replace(/\r?\n|\r/g, " ")),
                    ]);
                },
                linkReference: function (e, t) {
                    var n = e.definition(t.identifier);
                    if (!n) return $i(e, t);
                    var r = { href: Gi(n.url || "") };
                    return (
                        null !== n.title &&
                            void 0 !== n.title &&
                            (r.title = n.title),
                        e(t, "a", r, Bi(e, t))
                    );
                },
                link: function (e, t) {
                    var n = { href: Gi(t.url) };
                    return (
                        null !== t.title &&
                            void 0 !== t.title &&
                            (n.title = t.title),
                        e(t, "a", n, Bi(e, t))
                    );
                },
                listItem: function (e, t, n) {
                    var r,
                        i = Bi(e, t),
                        o = n
                            ? (function (e) {
                                  var t = e.spread,
                                      n = e.children,
                                      r = -1;
                                  for (; !t && ++r < n.length; ) t = Vi(n[r]);
                                  return Boolean(t);
                              })(n)
                            : Vi(t),
                        a = {},
                        u = [];
                    "boolean" === typeof t.checked &&
                        (i[0] && "element" === i[0].type && "p" === i[0].tagName
                            ? (r = i[0])
                            : ((r = e(null, "p", [])), i.unshift(r)),
                        r.children.length > 0 &&
                            r.children.unshift(xi("text", " ")),
                        r.children.unshift(
                            e(null, "input", {
                                type: "checkbox",
                                checked: t.checked,
                                disabled: !0,
                            })
                        ),
                        (a.className = ["task-list-item"]));
                    for (var l = -1; ++l < i.length; ) {
                        var s = i[l];
                        (o ||
                            0 !== l ||
                            "element" !== s.type ||
                            "p" !== s.tagName) &&
                            u.push(xi("text", "\n")),
                            "element" !== s.type || "p" !== s.tagName || o
                                ? u.push(s)
                                : u.push.apply(u, Qe(s.children));
                    }
                    var c = i[i.length - 1];
                    return (
                        !c ||
                            (!o && "tagName" in c && "p" === c.tagName) ||
                            u.push(xi("text", "\n")),
                        e(t, "li", a, u)
                    );
                },
                list: function (e, t) {
                    var n = {},
                        r = t.ordered ? "ol" : "ul",
                        i = Bi(e, t),
                        o = -1;
                    for (
                        "number" === typeof t.start &&
                        1 !== t.start &&
                        (n.start = t.start);
                        ++o < i.length;

                    ) {
                        var a = i[o];
                        if (
                            "element" === a.type &&
                            "li" === a.tagName &&
                            a.properties &&
                            Array.isArray(a.properties.className) &&
                            a.properties.className.includes("task-list-item")
                        ) {
                            n.className = ["contains-task-list"];
                            break;
                        }
                    }
                    return e(t, r, n, Hi(i, !0));
                },
                paragraph: function (e, t) {
                    return e(t, "p", Bi(e, t));
                },
                root: function (e, t) {
                    return e.augment(t, xi("root", Hi(Bi(e, t))));
                },
                strong: function (e, t) {
                    return e(t, "strong", Bi(e, t));
                },
                table: function (e, t) {
                    for (
                        var n = t.children, r = -1, i = t.align || [], o = [];
                        ++r < n.length;

                    ) {
                        for (
                            var a = n[r].children,
                                u = 0 === r ? "th" : "td",
                                l = [],
                                s = -1,
                                c = t.align ? i.length : a.length;
                            ++s < c;

                        ) {
                            var f = a[s];
                            l.push(e(f, u, { align: i[s] }, f ? Bi(e, f) : []));
                        }
                        o[r] = e(n[r], "tr", Hi(l, !0));
                    }
                    return e(
                        t,
                        "table",
                        Hi(
                            [e(o[0].position, "thead", Hi([o[0]], !0))].concat(
                                o[1]
                                    ? e(
                                          {
                                              start: Ti(o[1]),
                                              end: _i(o[o.length - 1]),
                                          },
                                          "tbody",
                                          Hi(o.slice(1), !0)
                                      )
                                    : []
                            ),
                            !0
                        )
                    );
                },
                text: function (e, t) {
                    return e.augment(
                        t,
                        xi(
                            "text",
                            String(t.value).replace(
                                /[ \t]*(\r?\n|\r)[ \t]*/g,
                                "$1"
                            )
                        )
                    );
                },
                thematicBreak: function (e, t) {
                    return e(t, "hr");
                },
                toml: Yi,
                yaml: Yi,
                definition: Yi,
                footnoteDefinition: Yi,
            };
            function Yi() {
                return null;
            }
            var Ki = {}.hasOwnProperty;
            function Qi(e, t) {
                var n = (function (e, t) {
                        var n = t || {},
                            r = n.allowDangerousHtml || !1,
                            i = {};
                        return (
                            (a.dangerous = r),
                            (a.clobberPrefix =
                                void 0 === n.clobberPrefix ||
                                null === n.clobberPrefix
                                    ? "user-content-"
                                    : n.clobberPrefix),
                            (a.footnoteLabel = n.footnoteLabel || "Footnotes"),
                            (a.footnoteBackLabel =
                                n.footnoteBackLabel || "Back to content"),
                            (a.definition = Ri(e)),
                            (a.footnoteById = i),
                            (a.footnoteOrder = []),
                            (a.footnoteCounts = {}),
                            (a.augment = o),
                            (a.handlers = Ze(Ze({}, Xi), n.handlers)),
                            (a.unknownHandler = n.unknownHandler),
                            (a.passThrough = n.passThrough),
                            Oi(e, "footnoteDefinition", function (e) {
                                var t = String(e.identifier).toUpperCase();
                                Ki.call(i, t) || (i[t] = e);
                            }),
                            a
                        );
                        function o(e, t) {
                            if (e && "data" in e && e.data) {
                                var n = e.data;
                                n.hName &&
                                    ("element" !== t.type &&
                                        (t = {
                                            type: "element",
                                            tagName: "",
                                            properties: {},
                                            children: [],
                                        }),
                                    (t.tagName = n.hName)),
                                    "element" === t.type &&
                                        n.hProperties &&
                                        (t.properties = Ze(
                                            Ze({}, t.properties),
                                            n.hProperties
                                        )),
                                    "children" in t &&
                                        t.children &&
                                        n.hChildren &&
                                        (t.children = n.hChildren);
                            }
                            if (e) {
                                var r = "type" in e ? e : { position: e };
                                (i = r) &&
                                    i.position &&
                                    i.position.start &&
                                    i.position.start.line &&
                                    i.position.start.column &&
                                    i.position.end &&
                                    i.position.end.line &&
                                    i.position.end.column &&
                                    (t.position = { start: Ti(r), end: _i(r) });
                            }
                            var i;
                            return t;
                        }
                        function a(e, t, n, r) {
                            return (
                                Array.isArray(n) && ((r = n), (n = {})),
                                o(e, {
                                    type: "element",
                                    tagName: t,
                                    properties: n || {},
                                    children: r || [],
                                })
                            );
                        }
                    })(e, t),
                    r = ji(n, e, null),
                    i = (function (e) {
                        for (
                            var t = -1, n = [];
                            ++t < e.footnoteOrder.length;

                        ) {
                            var r =
                                e.footnoteById[
                                    e.footnoteOrder[t].toUpperCase()
                                ];
                            if (r) {
                                for (
                                    var i = Bi(e, r),
                                        o = String(r.identifier),
                                        a = zi(o.toLowerCase()),
                                        u = 0,
                                        l = [];
                                    ++u <= e.footnoteCounts[o];

                                ) {
                                    var s = {
                                        type: "element",
                                        tagName: "a",
                                        properties: {
                                            href:
                                                "#" +
                                                e.clobberPrefix +
                                                "fnref-" +
                                                a +
                                                (u > 1 ? "-" + u : ""),
                                            dataFootnoteBackref: !0,
                                            className: [
                                                "data-footnote-backref",
                                            ],
                                            ariaLabel: e.footnoteBackLabel,
                                        },
                                        children: [
                                            { type: "text", value: "\u21a9" },
                                        ],
                                    };
                                    u > 1 &&
                                        s.children.push({
                                            type: "element",
                                            tagName: "sup",
                                            children: [
                                                {
                                                    type: "text",
                                                    value: String(u),
                                                },
                                            ],
                                        }),
                                        l.length > 0 &&
                                            l.push({
                                                type: "text",
                                                value: " ",
                                            }),
                                        l.push(s);
                                }
                                var c = i[i.length - 1];
                                if (
                                    c &&
                                    "element" === c.type &&
                                    "p" === c.tagName
                                ) {
                                    var f,
                                        d = c.children[c.children.length - 1];
                                    d && "text" === d.type
                                        ? (d.value += " ")
                                        : c.children.push({
                                              type: "text",
                                              value: " ",
                                          }),
                                        (f = c.children).push.apply(f, l);
                                } else i.push.apply(i, l);
                                var p = {
                                    type: "element",
                                    tagName: "li",
                                    properties: {
                                        id: e.clobberPrefix + "fn-" + a,
                                    },
                                    children: Hi(i, !0),
                                };
                                r.position && (p.position = r.position),
                                    n.push(p);
                            }
                        }
                        return 0 === n.length
                            ? null
                            : {
                                  type: "element",
                                  tagName: "section",
                                  properties: {
                                      dataFootnotes: !0,
                                      className: ["footnotes"],
                                  },
                                  children: [
                                      {
                                          type: "element",
                                          tagName: "h2",
                                          properties: {
                                              id: "footnote-label",
                                              className: ["sr-only"],
                                          },
                                          children: [
                                              xi("text", e.footnoteLabel),
                                          ],
                                      },
                                      { type: "text", value: "\n" },
                                      {
                                          type: "element",
                                          tagName: "ol",
                                          properties: {},
                                          children: Hi(n, !0),
                                      },
                                      { type: "text", value: "\n" },
                                  ],
                              };
                    })(n);
                return (
                    i && r.children.push(xi("text", "\n"), i),
                    Array.isArray(r) ? { type: "root", children: r } : r
                );
            }
            var qi = function (e, t) {
                return e && "run" in e
                    ? (function (e, t) {
                          return function (n, r, i) {
                              e.run(Qi(n, t), r, function (e) {
                                  i(e);
                              });
                          };
                      })(e, t)
                    : (function (e) {
                          return function (t) {
                              return Qi(t, e);
                          };
                      })(e || t);
            };
            var Ji = require("prop-types"),
                Zi = b(function e(t, n, r) {
                    m(this, e),
                        (this.property = t),
                        (this.normal = n),
                        r && (this.space = r);
                });
            function eo(e, t) {
                for (var n = {}, r = {}, i = -1; ++i < e.length; )
                    Object.assign(n, e[i].property),
                        Object.assign(r, e[i].normal);
                return new Zi(n, r, t);
            }
            function to(e) {
                return e.toLowerCase();
            }
            (Zi.prototype.property = {}),
                (Zi.prototype.normal = {}),
                (Zi.prototype.space = null);
            var no = b(function e(t, n) {
                m(this, e), (this.property = t), (this.attribute = n);
            });
            (no.prototype.space = null),
                (no.prototype.boolean = !1),
                (no.prototype.booleanish = !1),
                (no.prototype.overloadedBoolean = !1),
                (no.prototype.number = !1),
                (no.prototype.commaSeparated = !1),
                (no.prototype.spaceSeparated = !1),
                (no.prototype.commaOrSpaceSeparated = !1),
                (no.prototype.mustUseProperty = !1),
                (no.prototype.defined = !1);
            var ro = 0,
                io = fo(),
                oo = fo(),
                ao = fo(),
                uo = fo(),
                lo = fo(),
                so = fo(),
                co = fo();
            function fo() {
                return Math.pow(2, ++ro);
            }
            var po = Object.keys(t),
                ho = (function (e) {
                    x(r, e);
                    var n = O(r);
                    function r(e, i, o, a) {
                        var u;
                        m(this, r);
                        var l = -1;
                        if (
                            (vo(A((u = n.call(this, e, i))), "space", a),
                            "number" === typeof o)
                        )
                            for (; ++l < po.length; ) {
                                var s = po[l];
                                vo(A(u), po[l], (o & t[s]) === t[s]);
                            }
                        return u;
                    }
                    return b(r);
                })(no);
            function vo(e, t, n) {
                n && (e[t] = n);
            }
            ho.prototype.defined = !0;
            var go = {}.hasOwnProperty;
            function mo(e) {
                var t,
                    n = {},
                    r = {};
                for (t in e.properties)
                    if (go.call(e.properties, t)) {
                        var i = e.properties[t],
                            o = new ho(
                                t,
                                e.transform(e.attributes || {}, t),
                                i,
                                e.space
                            );
                        e.mustUseProperty &&
                            e.mustUseProperty.includes(t) &&
                            (o.mustUseProperty = !0),
                            (n[t] = o),
                            (r[to(t)] = t),
                            (r[to(o.attribute)] = t);
                    }
                return new Zi(n, r, e.space);
            }
            var yo = mo({
                    space: "xlink",
                    transform: function (e, t) {
                        return "xlink:" + t.slice(5).toLowerCase();
                    },
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null,
                    },
                }),
                bo = mo({
                    space: "xml",
                    transform: function (e, t) {
                        return "xml:" + t.slice(3).toLowerCase();
                    },
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null,
                    },
                });
            function wo(e, t) {
                return t in e ? e[t] : t;
            }
            function xo(e, t) {
                return wo(e, t.toLowerCase());
            }
            var Eo = mo({
                    space: "xmlns",
                    attributes: { xmlnsxlink: "xmlns:xlink" },
                    transform: xo,
                    properties: { xmlns: null, xmlnsXLink: null },
                }),
                ko = mo({
                    transform: function (e, t) {
                        return "role" === t
                            ? t
                            : "aria-" + t.slice(4).toLowerCase();
                    },
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: oo,
                        ariaAutoComplete: null,
                        ariaBusy: oo,
                        ariaChecked: oo,
                        ariaColCount: uo,
                        ariaColIndex: uo,
                        ariaColSpan: uo,
                        ariaControls: lo,
                        ariaCurrent: null,
                        ariaDescribedBy: lo,
                        ariaDetails: null,
                        ariaDisabled: oo,
                        ariaDropEffect: lo,
                        ariaErrorMessage: null,
                        ariaExpanded: oo,
                        ariaFlowTo: lo,
                        ariaGrabbed: oo,
                        ariaHasPopup: null,
                        ariaHidden: oo,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: lo,
                        ariaLevel: uo,
                        ariaLive: null,
                        ariaModal: oo,
                        ariaMultiLine: oo,
                        ariaMultiSelectable: oo,
                        ariaOrientation: null,
                        ariaOwns: lo,
                        ariaPlaceholder: null,
                        ariaPosInSet: uo,
                        ariaPressed: oo,
                        ariaReadOnly: oo,
                        ariaRelevant: null,
                        ariaRequired: oo,
                        ariaRoleDescription: lo,
                        ariaRowCount: uo,
                        ariaRowIndex: uo,
                        ariaRowSpan: uo,
                        ariaSelected: oo,
                        ariaSetSize: uo,
                        ariaSort: null,
                        ariaValueMax: uo,
                        ariaValueMin: uo,
                        ariaValueNow: uo,
                        ariaValueText: null,
                        role: null,
                    },
                }),
                So = mo({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv",
                    },
                    transform: xo,
                    mustUseProperty: [
                        "checked",
                        "multiple",
                        "muted",
                        "selected",
                    ],
                    properties: {
                        abbr: null,
                        accept: so,
                        acceptCharset: lo,
                        accessKey: lo,
                        action: null,
                        allow: null,
                        allowFullScreen: io,
                        allowPaymentRequest: io,
                        allowUserMedia: io,
                        alt: null,
                        as: null,
                        async: io,
                        autoCapitalize: null,
                        autoComplete: lo,
                        autoFocus: io,
                        autoPlay: io,
                        capture: io,
                        charSet: null,
                        checked: io,
                        cite: null,
                        className: lo,
                        cols: uo,
                        colSpan: null,
                        content: null,
                        contentEditable: oo,
                        controls: io,
                        controlsList: lo,
                        coords: uo | so,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: io,
                        defer: io,
                        dir: null,
                        dirName: null,
                        disabled: io,
                        download: ao,
                        draggable: oo,
                        encType: null,
                        enterKeyHint: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: io,
                        formTarget: null,
                        headers: lo,
                        height: uo,
                        hidden: io,
                        high: uo,
                        href: null,
                        hrefLang: null,
                        htmlFor: lo,
                        httpEquiv: lo,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: io,
                        itemId: null,
                        itemProp: lo,
                        itemRef: lo,
                        itemScope: io,
                        itemType: lo,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: io,
                        low: uo,
                        manifest: null,
                        max: null,
                        maxLength: uo,
                        media: null,
                        method: null,
                        min: null,
                        minLength: uo,
                        multiple: io,
                        muted: io,
                        name: null,
                        nonce: null,
                        noModule: io,
                        noValidate: io,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: io,
                        optimum: uo,
                        pattern: null,
                        ping: lo,
                        placeholder: null,
                        playsInline: io,
                        poster: null,
                        preload: null,
                        readOnly: io,
                        referrerPolicy: null,
                        rel: lo,
                        required: io,
                        reversed: io,
                        rows: uo,
                        rowSpan: uo,
                        sandbox: lo,
                        scope: null,
                        scoped: io,
                        seamless: io,
                        selected: io,
                        shape: null,
                        size: uo,
                        sizes: null,
                        slot: null,
                        span: uo,
                        spellCheck: oo,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: uo,
                        step: null,
                        style: null,
                        tabIndex: uo,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: io,
                        useMap: null,
                        value: oo,
                        width: uo,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: lo,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: uo,
                        borderColor: null,
                        bottomMargin: uo,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: io,
                        declare: io,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: uo,
                        leftMargin: uo,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: uo,
                        marginWidth: uo,
                        noResize: io,
                        noHref: io,
                        noShade: io,
                        noWrap: io,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: uo,
                        rules: null,
                        scheme: null,
                        scrolling: oo,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: uo,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: uo,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: io,
                        disableRemotePlayback: io,
                        prefix: null,
                        property: null,
                        results: uo,
                        security: null,
                        unselectable: null,
                    },
                }),
                Ao = mo({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters:
                            "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal:
                            "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin",
                    },
                    transform: wo,
                    properties: {
                        about: co,
                        accentHeight: uo,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: uo,
                        amplitude: uo,
                        arabicForm: null,
                        ascent: uo,
                        attributeName: null,
                        attributeType: null,
                        azimuth: uo,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: uo,
                        by: null,
                        calcMode: null,
                        capHeight: uo,
                        className: lo,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: uo,
                        diffuseConstant: uo,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: uo,
                        dominantBaseline: null,
                        download: io,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: uo,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: uo,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: uo,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: so,
                        g2: so,
                        glyphName: so,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: uo,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: uo,
                        horizOriginX: uo,
                        horizOriginY: uo,
                        id: null,
                        ideographic: uo,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: uo,
                        k: uo,
                        k1: uo,
                        k2: uo,
                        k3: uo,
                        k4: uo,
                        kernelMatrix: co,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: uo,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: uo,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: uo,
                        overlineThickness: uo,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: uo,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: lo,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: uo,
                        pointsAtY: uo,
                        pointsAtZ: uo,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: co,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: co,
                        rev: co,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: co,
                        requiredFeatures: co,
                        requiredFonts: co,
                        requiredFormats: co,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: uo,
                        specularExponent: uo,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: uo,
                        strikethroughThickness: uo,
                        string: null,
                        stroke: null,
                        strokeDashArray: co,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: uo,
                        strokeOpacity: uo,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: uo,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: co,
                        tabIndex: uo,
                        tableValues: null,
                        target: null,
                        targetX: uo,
                        targetY: uo,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: co,
                        to: null,
                        transform: null,
                        u1: null,
                        u2: null,
                        underlinePosition: uo,
                        underlineThickness: uo,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: uo,
                        values: null,
                        vAlphabetic: uo,
                        vMathematical: uo,
                        vectorEffect: null,
                        vHanging: uo,
                        vIdeographic: uo,
                        version: null,
                        vertAdvY: uo,
                        vertOriginX: uo,
                        vertOriginY: uo,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: uo,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null,
                    },
                }),
                Co = eo([bo, yo, Eo, ko, So], "html"),
                Oo = eo([bo, yo, Eo, ko, Ao], "svg");
            function To(e) {
                if (e.allowedElements && e.disallowedElements)
                    throw new TypeError(
                        "Only one of `allowedElements` and `disallowedElements` should be defined"
                    );
                if (e.allowedElements || e.disallowedElements || e.allowElement)
                    return function (t) {
                        Oi(t, "element", function (t, n, r) {
                            var i,
                                o = r;
                            if (
                                (e.allowedElements
                                    ? (i = !e.allowedElements.includes(
                                          t.tagName
                                      ))
                                    : e.disallowedElements &&
                                      (i = e.disallowedElements.includes(
                                          t.tagName
                                      )),
                                !i &&
                                    e.allowElement &&
                                    "number" === typeof n &&
                                    (i = !e.allowElement(t, n, o)),
                                i && "number" === typeof n)
                            ) {
                                var a;
                                if (e.unwrapDisallowed && t.children)
                                    (a = o.children).splice.apply(
                                        a,
                                        [n, 1].concat(Qe(t.children))
                                    );
                                else o.children.splice(n, 1);
                                return n;
                            }
                        });
                    };
            }
            var _o = ["http", "https", "mailto", "tel"];
            // react-is@17.0.2
            var Io = require("react-is");
            function No(e) {
                var t =
                    e && "object" === typeof e && "text" === e.type
                        ? e.value || ""
                        : e;
                return (
                    "string" === typeof t &&
                    "" === t.replace(/[ \t\n\f\r]/g, "")
                );
            }
            var Lo = /^data[-\w.:]+$/i,
                Ro = /-[a-z]/g,
                Po = /[A-Z]/g;
            function Do(e) {
                return "-" + e.toLowerCase();
            }
            function Mo(e) {
                return e.charAt(1).toUpperCase();
            }
            var jo = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink",
            };
            var styleParser = require('style-parser'),
                Bo = {}.hasOwnProperty,
                Uo = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
            function zo(e, t) {
                for (var n, r = [], i = -1; ++i < t.children.length; )
                    "element" === (n = t.children[i]).type
                        ? r.push(Ho(e, n, i, t))
                        : "text" === n.type
                        ? ("element" === t.type &&
                              Uo.has(t.tagName) &&
                              No(n)) ||
                          r.push(n.value)
                        : "raw" !== n.type ||
                          e.options.skipHtml ||
                          r.push(n.value);
                return r;
            }
            function Ho(e, t, n, i) {
                var o,
                    a = e.options,
                    u = e.schema,
                    l = t.tagName,
                    s = {},
                    c = u;
                if (
                    ("html" === u.space &&
                        "svg" === l &&
                        ((c = Oo), (e.schema = c)),
                    t.properties)
                )
                    for (o in t.properties)
                        Bo.call(t.properties, o) &&
                            Go(s, o, t.properties[o], e);
                ("ol" !== l && "ul" !== l) || e.listDepth++;
                var f = zo(e, t);
                ("ol" !== l && "ul" !== l) || e.listDepth--, (e.schema = u);
                var d,
                    p = t.position || {
                        start: { line: null, column: null, offset: null },
                        end: { line: null, column: null, offset: null },
                    },
                    h =
                        a.components && Bo.call(a.components, l)
                            ? a.components[l]
                            : l,
                    v = "string" === typeof h || h === r.Fragment;
                if (!Io.isValidElementType(h))
                    throw new TypeError(
                        "Component for name `".concat(
                            l,
                            "` not defined or is not renderable"
                        )
                    );
                if (
                    ((s.key = [l, p.start.line, p.start.column, n].join("-")),
                    "a" === l &&
                        a.linkTarget &&
                        (s.target =
                            "function" === typeof a.linkTarget
                                ? a.linkTarget(
                                      String(s.href || ""),
                                      t.children,
                                      "string" === typeof s.title
                                          ? s.title
                                          : null
                                  )
                                : a.linkTarget),
                    "a" === l &&
                        a.transformLinkUri &&
                        (s.href = a.transformLinkUri(
                            String(s.href || ""),
                            t.children,
                            "string" === typeof s.title ? s.title : null
                        )),
                    v ||
                        "code" !== l ||
                        "element" !== i.type ||
                        "pre" === i.tagName ||
                        (s.inline = !0),
                    v ||
                        ("h1" !== l &&
                            "h2" !== l &&
                            "h3" !== l &&
                            "h4" !== l &&
                            "h5" !== l &&
                            "h6" !== l) ||
                        (s.level = Number.parseInt(l.charAt(1), 10)),
                    "img" === l &&
                        a.transformImageUri &&
                        (s.src = a.transformImageUri(
                            String(s.src || ""),
                            String(s.alt || ""),
                            "string" === typeof s.title ? s.title : null
                        )),
                    !v && "li" === l && "element" === i.type)
                ) {
                    var g = (function (e) {
                        var t = -1;
                        for (; ++t < e.children.length; ) {
                            var n = e.children[t];
                            if ("element" === n.type && "input" === n.tagName)
                                return n;
                        }
                        return null;
                    })(t);
                    (s.checked =
                        g && g.properties
                            ? Boolean(g.properties.checked)
                            : null),
                        (s.index = Wo(i, t)),
                        (s.ordered = "ol" === i.tagName);
                }
                return (
                    v ||
                        ("ol" !== l && "ul" !== l) ||
                        ((s.ordered = "ol" === l), (s.depth = e.listDepth)),
                    ("td" !== l && "th" !== l) ||
                        (s.align &&
                            (s.style || (s.style = {}),
                            (s.style.textAlign = s.align),
                            delete s.align),
                        v || (s.isHeader = "th" === l)),
                    v ||
                        "tr" !== l ||
                        "element" !== i.type ||
                        (s.isHeader = Boolean("thead" === i.tagName)),
                    a.sourcePos &&
                        (s["data-sourcepos"] = [
                            (d = p).start.line,
                            ":",
                            d.start.column,
                            "-",
                            d.end.line,
                            ":",
                            d.end.column,
                        ]
                            .map(function (e) {
                                return String(e);
                            })
                            .join("")),
                    !v && a.rawSourcePos && (s.sourcePosition = t.position),
                    !v &&
                        a.includeElementIndex &&
                        ((s.index = Wo(i, t)), (s.siblingCount = Wo(i))),
                    v || (s.node = t),
                    f.length > 0
                        ? React.createElement(h, s, f)
                        : React.createElement(h, s)
                );
            }
            function Wo(e, t) {
                for (
                    var n = -1, r = 0;
                    ++n < e.children.length && e.children[n] !== t;

                )
                    "element" === e.children[n].type && r++;
                return r;
            }
            function Go(e, t, n, r) {
                var i = (function (e, t) {
                        var n = to(t),
                            r = t,
                            i = no;
                        if (n in e.normal) return e.property[e.normal[n]];
                        if (
                            n.length > 4 &&
                            "data" === n.slice(0, 4) &&
                            Lo.test(t)
                        ) {
                            if ("-" === t.charAt(4)) {
                                var o = t.slice(5).replace(Ro, Mo);
                                r =
                                    "data" +
                                    o.charAt(0).toUpperCase() +
                                    o.slice(1);
                            } else {
                                var a = t.slice(4);
                                if (!Ro.test(a)) {
                                    var u = a.replace(Po, Do);
                                    "-" !== u.charAt(0) && (u = "-" + u),
                                        (t = "data" + u);
                                }
                            }
                            i = ho;
                        }
                        return new i(r, t);
                    })(r.schema, t),
                    o = n;
                null !== o &&
                    void 0 !== o &&
                    o === o &&
                    (Array.isArray(o) &&
                        (o = i.commaSeparated
                            ? (function (e, t) {
                                  var n = t || {};
                                  return (
                                      "" === e[e.length - 1] &&
                                          (e = e.concat("")),
                                      e
                                          .join(
                                              (n.padRight ? " " : "") +
                                                  "," +
                                                  (!1 === n.padLeft ? "" : " ")
                                          )
                                          .trim()
                                  );
                              })(o)
                            : o.join(" ").trim()),
                    "style" === i.property &&
                        "string" === typeof o &&
                        (o = (function (e) {
                            var t = {};
                            try {
                                styleParser(e, n);
                            } catch (r) {}
                            return t;
                            function n(e, n) {
                                var r =
                                    "-ms-" === e.slice(0, 4)
                                        ? "ms-".concat(e.slice(4))
                                        : e;
                                t[r.replace(/-([a-z])/g, $o)] = n;
                            }
                        })(o)),
                    i.space && i.property
                        ? (e[
                              Bo.call(jo, i.property)
                                  ? jo[i.property]
                                  : i.property
                          ] = o)
                        : i.attribute && (e[i.attribute] = o));
            }
            function $o(e, t) {
                return t.toUpperCase();
            }
            var Vo = {}.hasOwnProperty,
                Xo = {
                    plugins: {
                        to: "plugins",
                        id: "change-plugins-to-remarkplugins",
                    },
                    renderers: {
                        to: "components",
                        id: "change-renderers-to-components",
                    },
                    astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
                    allowDangerousHtml: {
                        id: "remove-buggy-html-in-markdown-parser",
                    },
                    escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
                    source: { to: "children", id: "change-source-to-children" },
                    allowNode: {
                        to: "allowElement",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    },
                    allowedTypes: {
                        to: "allowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    },
                    disallowedTypes: {
                        to: "disallowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    },
                    includeNodeIndex: {
                        to: "includeElementIndex",
                        id: "change-includenodeindex-to-includeelementindex",
                    },
                };
            function Yo(e) {
                for (var t in Xo)
                    if (Vo.call(Xo, t) && Vo.call(e, t)) {
                        var n = Xo[t];
                        console.warn(
                            "[react-markdown] Warning: please "
                                .concat(
                                    n.to
                                        ? "use `".concat(n.to, "` instead of")
                                        : "remove",
                                    " `"
                                )
                                .concat(t, "` (see <")
                                .concat(
                                    "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
                                    "#"
                                )
                                .concat(n.id, "> for more info)")
                        ),
                            delete Xo[t];
                    }
                var i = gn()
                        .use(wi)
                        .use(e.remarkPlugins || [])
                        .use(
                            qi,
                            Ze(
                                Ze({}, e.remarkRehypeOptions),
                                {},
                                { allowDangerousHtml: !0 }
                            )
                        )
                        .use(e.rehypePlugins || [])
                        .use(To, e),
                    o = new un();
                "string" === typeof e.children
                    ? (o.value = e.children)
                    : void 0 !== e.children &&
                      null !== e.children &&
                      console.warn(
                          "[react-markdown] Warning: please pass a string as `children` (not: `".concat(
                              e.children,
                              "`)"
                          )
                      );
                var a = i.runSync(i.parse(o), o);
                if ("root" !== a.type)
                    throw new TypeError("Expected a `root` node");
                var u = React.createElement(
                    r.Fragment,
                    {},
                    zo({ options: e, schema: Co, listDepth: 0 }, a)
                );
                return (
                    e.className &&
                        (u = React.createElement(
                            "div",
                            { className: e.className },
                            u
                        )),
                    u
                );
            }
            (Yo.defaultProps = {
                transformLinkUri: function (e) {
                    var t = (e || "").trim(),
                        n = t.charAt(0);
                    if ("#" === n || "/" === n) return t;
                    var r = t.indexOf(":");
                    if (-1 === r) return t;
                    for (var i = -1; ++i < _o.length; ) {
                        var o = _o[i];
                        if (
                            r === o.length &&
                            t.slice(0, o.length).toLowerCase() === o
                        )
                            return t;
                    }
                    return (-1 !== (i = t.indexOf("?")) && r > i) ||
                        (-1 !== (i = t.indexOf("#")) && r > i)
                        ? t
                        : "javascript:void(0)";
                },
            }),
                (Yo.propTypes = {
                    children: Ji.string,
                    className: Ji.string,
                    allowElement: Ji.func,
                    allowedElements: Ji.arrayOf(Ji.string),
                    disallowedElements: Ji.arrayOf(Ji.string),
                    unwrapDisallowed: Ji.bool,
                    remarkPlugins: Ji.arrayOf(
                        Ji.oneOfType([
                            Ji.object,
                            Ji.func,
                            Ji.arrayOf(Ji.oneOfType([Ji.object, Ji.func])),
                        ])
                    ),
                    rehypePlugins: Ji.arrayOf(
                        Ji.oneOfType([
                            Ji.object,
                            Ji.func,
                            Ji.arrayOf(Ji.oneOfType([Ji.object, Ji.func])),
                        ])
                    ),
                    sourcePos: Ji.bool,
                    rawSourcePos: Ji.bool,
                    skipHtml: Ji.bool,
                    includeElementIndex: Ji.bool,
                    transformLinkUri: Ji.oneOfType([Ji.func, Ji.bool]),
                    linkTarget: Ji.oneOfType([Ji.func, Ji.string]),
                    transformImageUri: Ji.func,
                    components: Ji.object,
                });
            var Ko = [
                {
                    host: "empty",
                    title: "Empty",
                    existsOnlyAtRoot: !0,
                    Component: function () {
                        return JSXRuntime.jsx("div", {
                            className: "rhpages-286501",
                            children: JSXRuntime.jsx("h2", {
                                style: { fontWeight: "normal" },
                                children:
                                    "Hey there! It looks like you closed all the tabs! To open a new tab, double click on the bar above.",
                            }),
                        });
                    },
                },
                {
                    host: "new-tab",
                    title: "New Tab",
                    existsOnlyAtRoot: !0,
                    Component: function (e) {
                        var t = e.goToUrl,
                            n = Z(),
                            i = React.useRef(),
                            o = destructureToArray(React.useState(n.speedTicketActive), 2),
                            u = o[0],
                            l = o[1],
                            s = u && !n.speedTicketErr,
                            c = destructureToArray(React.useState(!!window.rhTempHidePanel), 2),
                            d = c[0],
                            h = c[1],
                            v = (function () {
                                var e = asyncToGenerator(
                                    p().mark(function e(r) {
                                        var o;
                                        return p().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            i.current &&
                                                            i.current.value
                                                        ) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            "return"
                                                        );
                                                    case 2:
                                                        (o = Ve(
                                                            i.current.value
                                                        )),
                                                            (e.t0 = r),
                                                            (e.next =
                                                                "in-browser" ===
                                                                e.t0
                                                                    ? 6
                                                                    : "ab-cloaked" ===
                                                                      e.t0
                                                                    ? 8
                                                                    : "open-direct" ===
                                                                      e.t0
                                                                    ? 15
                                                                    : 21);
                                                        break;
                                                    case 6:
                                                        return (
                                                            t(o),
                                                            e.abrupt(
                                                                "break",
                                                                22
                                                            )
                                                        );
                                                    case 8:
                                                        return (
                                                            (e.t1 = Tt),
                                                            (e.t2 =
                                                                window.open()),
                                                            (e.next = 12),
                                                            n.getFullProxyUrl(o)
                                                        );
                                                    case 12:
                                                        return (
                                                            (e.t3 = e.sent),
                                                            e.t1(
                                                                e.t2,
                                                                e.t3
                                                            ),
                                                            e.abrupt(
                                                                "break",
                                                                22
                                                            )
                                                        );
                                                    case 15:
                                                        return (
                                                            (e.t4 = window),
                                                            (e.next = 18),
                                                            n.getFullProxyUrl(o)
                                                        );
                                                    case 18:
                                                        return (
                                                            (e.t5 = e.sent),
                                                            e.t4.open.call(
                                                                e.t4,
                                                                e.t5,
                                                                "_blank",
                                                                "noopener"
                                                            ),
                                                            e.abrupt(
                                                                "break",
                                                                22
                                                            )
                                                        );
                                                    case 21:
                                                        throw new TypeError(
                                                            "unknown type: " + r
                                                        );
                                                    case 22:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })();
                        return JSXRuntime.jsxs("div", {
                            className: "rhpages-286501 rhnewtab-771674",
                            children: [
                                JSXRuntime.jsxs("div", {
                                    className: "rhnewtab-header-13409",
                                    children: [
                                        JSXRuntime.jsx("div", {
                                            children:
                                                s && d
                                                    ? JSXRuntime.jsxs("div", {
                                                          style: {
                                                              display: "flex",
                                                              alignItems:
                                                                  "center",
                                                              marginTop: "1em",
                                                          },
                                                          children: [
                                                              JSXRuntime.jsx("p", {
                                                                  style: {
                                                                      fontSize:
                                                                          "0.8em",
                                                                      margin: 0,
                                                                  },
                                                                  children:
                                                                      "Show ticket panel",
                                                              }),
                                                              JSXRuntime.jsx(
                                                                  "button",
                                                                  {
                                                                      style: {
                                                                          backgroundColor:
                                                                              "transparent",
                                                                          cursor: "pointer",
                                                                          border: "none",
                                                                          transform:
                                                                              "rotate(180deg)",
                                                                      },
                                                                      onClick:
                                                                          function () {
                                                                              h(
                                                                                  !1
                                                                              ),
                                                                                  (window.rhTempHidePanel =
                                                                                      !1);
                                                                          },
                                                                      children:
                                                                          (0,
                                                                          JSXRuntime.jsx)(
                                                                              Ht,
                                                                              {}
                                                                          ),
                                                                  }
                                                              ),
                                                          ],
                                                      })
                                                    : JSXRuntime.jsx(Wt, {
                                                          canHideSpeedTicketPanel:
                                                              s,
                                                          onHide: function () {
                                                              s &&
                                                                  (h(!0),
                                                                  (window.rhTempHidePanel =
                                                                      !0));
                                                          },
                                                          onCodeApply:
                                                              function () {
                                                                  l(
                                                                      n.speedTicketActive
                                                                  );
                                                              },
                                                          goToUrl: t,
                                                      }),
                                        }),
                                        JSXRuntime.jsx("img", {
                                            src: u
                                                ? "/logo-speedticketed.png"
                                                : "/logo.png",
                                            width: "300px",
                                        }),
                                        JSXRuntime.jsx("div", {
                                            style: { justifySelf: "end" },
                                            children: !u && JSXRuntime.jsx($t, {}),
                                        }),
                                    ],
                                }),
                                JSXRuntime.jsx("p", {
                                    className: "rhnewtab-msg-304482",
                                    children:
                                        "Click on the URL bar to start searching.",
                                }),
                                JSXRuntime.jsxs("div", {
                                    className:
                                        "rhnewtab-oldui-container-791208",
                                    children: [
                                        JSXRuntime.jsx("p", {
                                            className:
                                                "rhnewtab-oldui-msg-583325",
                                            children:
                                                "or input your URL directly: ",
                                        }),
                                        JSXRuntime.jsx("input", {
                                            ref: i,
                                            type: "text",
                                            placeholder:
                                                "https://www.google.com",
                                            spellCheck: "false",
                                        }),
                                        JSXRuntime.jsxs("div", {
                                            className:
                                                "rhnewtab-oldui-btn-container-230732",
                                            children: [
                                                JSXRuntime.jsx("span", {
                                                    onClick: function () {
                                                        return v("in-browser");
                                                    },
                                                    children: "Open in-browser",
                                                }),
                                                JSXRuntime.jsx("span", {
                                                    onClick: function () {
                                                        return v("ab-cloaked");
                                                    },
                                                    children: "Open AB cloaked",
                                                }),
                                                JSXRuntime.jsx("span", {
                                                    onClick: function () {
                                                        return v("open-direct");
                                                    },
                                                    children: "Open direct",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                JSXRuntime.jsxs("p", {
                                    className: "rhnewtab-discord-200633",
                                    children: [
                                        "Join the ",
                                        JSXRuntime.jsx("a", {
                                            href: "https://discord.gg/VNT4E7gN5Y",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "discord server",
                                        }),
                                        " for help or just chill.",
                                    ],
                                }),
                                JSXRuntime.jsxs("div", {
                                    className:
                                        "rhnewtab-version-container-50986",
                                    children: [
                                        JSXRuntime.jsxs("p", {
                                            className:
                                                "rhnewtab-version-number-892330",
                                            children: [
                                                "Browser version: v",
                                                n.staticAssets.version,
                                            ],
                                        }),
                                        JSXRuntime.jsxs("p", {
                                            className:
                                                "rhnewtab-version-number-892330",
                                            children: [
                                                "Rammerhead version: v",
                                                n.staticAssets
                                                    .openSourceVersion,
                                            ],
                                        }),
                                        JSXRuntime.jsxs("p", {
                                            children: [
                                                "(view browser changelog ",
                                                JSXRuntime.jsx(_t, {
                                                    goToUrl: t,
                                                    href: "rh://changelog",
                                                    text: "here",
                                                }),
                                                ")",
                                            ],
                                        }),
                                        JSXRuntime.jsxs("p", {
                                            children: [
                                                "(view Rammerhead changelog ",
                                                JSXRuntime.jsx("a", {
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    href: "https://github.com/binary-person/rammerhead/blob/master/CHANGELOG.md",
                                                    children: "here",
                                                }),
                                                ")",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    },
                },
                {
                    host: "settings",
                    title: "Settings",
                    existsOnlyAtRoot: !0,
                    showSuggestions: !0,
                    Component: function () {
                        var e = Z(),
                            t = destructureToArray(React.useState({}), 2),
                            n = t[0],
                            i = t[1],
                            o = destructureToArray(React.useState(), 2),
                            u = o[0],
                            l = o[1];
                        React.useEffect(
                            asyncToGenerator(
                                p().mark(function t() {
                                    var n, r, o, a;
                                    return p().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (n = {}),
                                                        (t.next = 3),
                                                        e.isShufflingEnabled()
                                                    );
                                                case 3:
                                                    return (
                                                        (n.isShufflingEnabled =
                                                            t.sent),
                                                        (t.next = 6),
                                                        e.getHttpProxySetting()
                                                    );
                                                case 6:
                                                    return (
                                                        (r = t.sent) &&
                                                            (n.httpProxySetting =
                                                                "http://" +
                                                                (r.proxyAuth
                                                                    ? r.proxyAuth +
                                                                      "@"
                                                                    : "") +
                                                                r.host),
                                                        (t.next = 10),
                                                        e.getTabTitle()
                                                    );
                                                case 10:
                                                    return (
                                                        (n.tabTitle = t.sent),
                                                        (t.t0 = l),
                                                        (t.next = 14),
                                                        e.getTabFavicon()
                                                    );
                                                case 14:
                                                    return (
                                                        (t.t1 = t.sent),
                                                        t.t0(t.t1),
                                                        (o = function (e) {
                                                            return (
                                                                "[" +
                                                                new Date(
                                                                    e
                                                                ).toLocaleString() +
                                                                "]"
                                                            );
                                                        }),
                                                        (t.next = 19),
                                                        e.getProfileImportTime()
                                                    );
                                                case 19:
                                                    return (
                                                        (a = t.sent),
                                                        (t.t2 = o),
                                                        (t.next = 23),
                                                        e.getProfileCreationTime()
                                                    );
                                                case 23:
                                                    (t.t3 = t.sent),
                                                        (t.t4 = t.t2(
                                                            t.t3
                                                        )),
                                                        (t.t5 = a
                                                            ? ", imported on " +
                                                              o(a)
                                                            : ""),
                                                        (n.profileCreationTime =
                                                            t.t4 + t.t5),
                                                        i(n);
                                                case 28:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            ),
                            []
                        );
                        var s = React.useRef(),
                            c = destructureToArray(React.useState(null), 2),
                            d = c[0],
                            h = c[1],
                            v = destructureToArray(React.useState(null), 2),
                            m = v[0],
                            y = v[1],
                            b = function (t) {
                                var n = t.src;
                                return JSXRuntime.jsx("img", {
                                    draggable: "false",
                                    src: n,
                                    onClick: asyncToGenerator(
                                        p().mark(function t() {
                                            return p().wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                "/favicon.png" ===
                                                                    n &&
                                                                    (n = null),
                                                                (t.next = 3),
                                                                e.setTabFavicon(
                                                                    n
                                                                )
                                                            );
                                                        case 3:
                                                            l(n);
                                                        case 4:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            }, t);
                                        })
                                    ),
                                });
                            };
                        return JSXRuntime.jsxs("div", {
                            className: "rhpages-286501 rhsettings-153738",
                            children: [
                                JSXRuntime.jsx("hr", {}),
                                JSXRuntime.jsx("h2", {
                                    children: "Customize (actual) tab",
                                }),
                                JSXRuntime.jsx("h3", {
                                    children:
                                        "Customize look of this browser's favicon or title.",
                                }),
                                JSXRuntime.jsxs("div", {
                                    className:
                                        "rhsettings-section-946952 rhsettings-titlefavicon-40002",
                                    children: [
                                        m &&
                                            JSXRuntime.jsxs("p", {
                                                style: {
                                                    fontWeight: "bold",
                                                    marginBottom: 10,
                                                    color: "#cf3b3b",
                                                },
                                                children: [
                                                    "Error while importing profile: ",
                                                    m,
                                                ],
                                            }),
                                        JSXRuntime.jsxs("div", {
                                            className:
                                                "rhsettings-titlefavicon-setting-421322",
                                            children: [
                                                "Current title: ",
                                                JSXRuntime.jsx("input", {
                                                    ref: s,
                                                    placeholder:
                                                        "Rammerhead Browser",
                                                    defaultValue: n.tabTitle,
                                                    onInput: (function () {
                                                        var t = asyncToGenerator(
                                                            p().mark(function t(
                                                                n
                                                            ) {
                                                                return p().wrap(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        for (;;)
                                                                            switch (
                                                                                (t.prev =
                                                                                    t.next)
                                                                            ) {
                                                                                case 0:
                                                                                    return (
                                                                                        (t.next = 2),
                                                                                        e.setTabTitle(
                                                                                            n
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    );
                                                                                case 2:
                                                                                    return t.abrupt(
                                                                                        "return",
                                                                                        t.sent
                                                                                    );
                                                                                case 3:
                                                                                case "end":
                                                                                    return t.stop();
                                                                            }
                                                                    },
                                                                    t
                                                                );
                                                            })
                                                        );
                                                        return function (e) {
                                                            return t.apply(
                                                                this,
                                                                arguments
                                                            );
                                                        };
                                                    })(),
                                                }),
                                            ],
                                        }),
                                        JSXRuntime.jsxs("div", {
                                            className:
                                                "rhsettings-titlefavicon-setting-421322",
                                            children: [
                                                "Current favicon: ",
                                                JSXRuntime.jsx("img", {
                                                    draggable: "false",
                                                    src: u || "/favicon.png",
                                                }),
                                            ],
                                        }),
                                        JSXRuntime.jsxs("div", {
                                            className:
                                                "rhsettings-titlefavicon-setting-421322 rhsettings-titlefavicon-setting-presets-909781",
                                            children: [
                                                "Presets:",
                                                JSXRuntime.jsx(b, {
                                                    src: "/favicon.png",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/google.ico",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/drive.png",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/docs.ico",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/gmail.ico",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/microsoft.ico",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/microsoft-teams.png",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/word.ico",
                                                }),
                                                JSXRuntime.jsx(b, {
                                                    src: "/static-assets/favicon-presets/outlook.ico",
                                                }),
                                            ],
                                        }),
                                        JSXRuntime.jsx(Vt, {
                                            onError: y,
                                            style: {
                                                marginLeft: 0,
                                                marginTop: 5,
                                            },
                                            accept: ".ico,.png,.svg,.jpg,.jpeg,.gif",
                                            readAs: "readAsDataURL",
                                            onFile: (function () {
                                                var t = asyncToGenerator(
                                                    p().mark(function t(n) {
                                                        return p().wrap(
                                                            function (t) {
                                                                for (;;)
                                                                    switch (
                                                                        (t.prev =
                                                                            t.next)
                                                                    ) {
                                                                        case 0:
                                                                            return (
                                                                                (t.next = 2),
                                                                                e.setTabFavicon(
                                                                                    n
                                                                                )
                                                                            );
                                                                        case 2:
                                                                            l(
                                                                                n
                                                                            );
                                                                        case 3:
                                                                        case "end":
                                                                            return t.stop();
                                                                    }
                                                            },
                                                            t
                                                        );
                                                    })
                                                );
                                                return function (e) {
                                                    return t.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })(),
                                            children: "Upload favicon",
                                        }),
                                        JSXRuntime.jsx("button", {
                                            style: { marginLeft: 0 },
                                            onClick: asyncToGenerator(
                                                p().mark(function t() {
                                                    return p().wrap(function (
                                                        t
                                                    ) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    return (
                                                                        (t.next = 2),
                                                                        e.setTabFavicon(
                                                                            null
                                                                        )
                                                                    );
                                                                case 2:
                                                                    return (
                                                                        (t.next = 4),
                                                                        e.setTabTitle(
                                                                            null
                                                                        )
                                                                    );
                                                                case 4:
                                                                    l(null),
                                                                        (s.current.value =
                                                                            "");
                                                                case 6:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t);
                                                })
                                            ),
                                            children: "Reset changes",
                                        }),
                                    ],
                                }),
                                JSXRuntime.jsx("hr", {}),
                                JSXRuntime.jsx("h2", {
                                    children: "Other settings",
                                }),
                                JSXRuntime.jsxs("div", {
                                    className: "rhsettings-section-946952",
                                    children: [
                                        JSXRuntime.jsx("input", {
                                            id: "rhsettings-shuffling",
                                            type: "checkbox",
                                            defaultChecked:
                                                n.isShufflingEnabled,
                                            onClick: (function () {
                                                var t = asyncToGenerator(
                                                    p().mark(function t(n) {
                                                        return p().wrap(
                                                            function (t) {
                                                                for (;;)
                                                                    switch (
                                                                        (t.prev =
                                                                            t.next)
                                                                    ) {
                                                                        case 0:
                                                                            return (
                                                                                (t.next = 2),
                                                                                e.enableShuffling(
                                                                                    n
                                                                                        .target
                                                                                        .checked
                                                                                )
                                                                            );
                                                                        case 2:
                                                                        case "end":
                                                                            return t.stop();
                                                                    }
                                                            },
                                                            t
                                                        );
                                                    })
                                                );
                                                return function (e) {
                                                    return t.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })(),
                                        }),
                                        JSXRuntime.jsx("label", {
                                            htmlFor: "rhsettings-shuffling",
                                            children: "Enable URL Shuffling",
                                        }),
                                    ],
                                }),
                                JSXRuntime.jsx("hr", {}),
                                JSXRuntime.jsx("h2", {
                                    children: "Import/export browser profile",
                                }),
                                JSXRuntime.jsx("h3", {
                                    children:
                                        "Migrate all your site data to here or another device.",
                                }),
                                JSXRuntime.jsxs("div", {
                                    className: "rhsettings-section-946952",
                                    children: [
                                        JSXRuntime.jsx("p", {
                                            style: {
                                                fontWeight: "bold",
                                                marginBottom: 2,
                                            },
                                            children:
                                                "Note: do NOT share your exported browser profile with anyone",
                                        }),
                                        JSXRuntime.jsx("p", {
                                            style: {
                                                fontWeight: "bold",
                                                marginBottom: 10,
                                                color: "#686868",
                                            },
                                            children:
                                                "Note 2: importing will automatically restart the browser",
                                        }),
                                        d &&
                                            JSXRuntime.jsxs("p", {
                                                style: {
                                                    fontWeight: "bold",
                                                    marginBottom: 10,
                                                    color: "#cf3b3b",
                                                },
                                                children: [
                                                    "Error while importing profile: ",
                                                    d,
                                                ],
                                            }),
                                        JSXRuntime.jsxs("p", {
                                            children: [
                                                "Rammerhead profile created on ",
                                                JSXRuntime.jsx("span", {
                                                    children:
                                                        n.profileCreationTime,
                                                }),
                                            ],
                                        }),
                                        JSXRuntime.jsx(Vt, {
                                            onError: h,
                                            style: { marginLeft: 0 },
                                            accept: ".rf",
                                            readAs: "readAsArrayBuffer",
                                            onFile: (function () {
                                                var t = asyncToGenerator(
                                                    p().mark(function t(n) {
                                                        var r;
                                                        return p().wrap(
                                                            function (t) {
                                                                for (;;)
                                                                    switch (
                                                                        (t.prev =
                                                                            t.next)
                                                                    ) {
                                                                        case 0:
                                                                            return (
                                                                                (t.prev = 0),
                                                                                (t.next = 3),
                                                                                e.importBrowserProfile(
                                                                                    new Uint8Array(
                                                                                        n
                                                                                    )
                                                                                )
                                                                            );
                                                                        case 3:
                                                                            (r =
                                                                                t.sent)
                                                                                ? h(
                                                                                      r
                                                                                  )
                                                                                : window.location.reload(),
                                                                                (t.next = 11);
                                                                            break;
                                                                        case 7:
                                                                            (t.prev = 7),
                                                                                (t.t0 =
                                                                                    t.catch(
                                                                                        0
                                                                                    )),
                                                                                console.error(
                                                                                    t.t0
                                                                                ),
                                                                                h(
                                                                                    "unknown error occurred"
                                                                                );
                                                                        case 11:
                                                                        case "end":
                                                                            return t.stop();
                                                                    }
                                                            },
                                                            t,
                                                            null,
                                                            [[0, 7]]
                                                        );
                                                    })
                                                );
                                                return function (e) {
                                                    return t.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })(),
                                            children: "Import rammerfile",
                                        }),
                                        JSXRuntime.jsx("button", {
                                            onClick: asyncToGenerator(
                                                p().mark(function t() {
                                                    var n, r;
                                                    return p().wrap(function (
                                                        t
                                                    ) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    return (
                                                                        (t.t0 =
                                                                            Blob),
                                                                        (t.next = 3),
                                                                        e.exportBrowserProfile()
                                                                    );
                                                                case 3:
                                                                    (t.t1 =
                                                                        t.sent),
                                                                        (t.t2 =
                                                                            [
                                                                                t.t1,
                                                                            ]),
                                                                        (t.t3 =
                                                                            {
                                                                                type: "application/octet-stream",
                                                                            }),
                                                                        (n =
                                                                            new t.t0(
                                                                                t.t2,
                                                                                t.t3
                                                                            )),
                                                                        (r =
                                                                            document.createElement(
                                                                                "a"
                                                                            )),
                                                                        document.body.appendChild(
                                                                            r
                                                                        ),
                                                                        (r.download =
                                                                            "profile.rf"),
                                                                        (r.href =
                                                                            URL.createObjectURL(
                                                                                n
                                                                            )),
                                                                        r.click(),
                                                                        setTimeout(
                                                                            function () {
                                                                                document.body.removeChild(
                                                                                    r
                                                                                ),
                                                                                    URL.revokeObjectURL(
                                                                                        n
                                                                                    );
                                                                            },
                                                                            0
                                                                        );
                                                                case 13:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t);
                                                })
                                            ),
                                            children: "Export rammerfile",
                                        }),
                                    ],
                                }),
                                JSXRuntime.jsx("hr", {}),
                                JSXRuntime.jsx("h2", {
                                    children: "Reset this browser",
                                }),
                                JSXRuntime.jsx("h3", {
                                    children:
                                        "Deletes everything, including site data and any Rammerhead settings. Make sure you export your rammerfile before you do so!",
                                }),
                                JSXRuntime.jsx("div", {
                                    className: "rhsettings-section-946952",
                                    children: JSXRuntime.jsx("button", {
                                        onClick: asyncToGenerator(
                                            p().mark(function t() {
                                                var n, r, i;
                                                return p().wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    if (
                                                                        !confirm(
                                                                            "Are you sure you want to reset and delete everything?\nTHIS ACTION IS IRREVERSIBLE!!\nBrowser will refresh after reset is complete"
                                                                        )
                                                                    ) {
                                                                        t.next = 15;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        (t.prev = 1),
                                                                        (t.next = 4),
                                                                        e.delete()
                                                                    );
                                                                case 4:
                                                                    localStorage.clear(),
                                                                        sessionStorage.clear(),
                                                                        (n = g(
                                                                            document.cookie.split(
                                                                                ";"
                                                                            )
                                                                        ));
                                                                    try {
                                                                        for (
                                                                            n.s();
                                                                            !(r =
                                                                                n.n())
                                                                                .done;

                                                                        )
                                                                            (i =
                                                                                r.value),
                                                                                (document.cookie =
                                                                                    i.split(
                                                                                        "="
                                                                                    )[0] +
                                                                                    "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT");
                                                                    } catch (o) {
                                                                        n.e(o);
                                                                    } finally {
                                                                        n.f();
                                                                    }
                                                                    location.reload(),
                                                                        (t.next = 15);
                                                                    break;
                                                                case 11:
                                                                    (t.prev = 11),
                                                                        (t.t0 =
                                                                            t.catch(
                                                                                1
                                                                            )),
                                                                        alert(
                                                                            "an error occurred while trying to reset the browser. please notify the developer about this issue in the discord server, along with a screenshot of the dev console (opened with CTRL + SHIFT + J)"
                                                                        ),
                                                                        console.error(
                                                                            t.t0
                                                                        );
                                                                case 15:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    null,
                                                    [[1, 11]]
                                                );
                                            })
                                        ),
                                        children: "Reset everything",
                                    }),
                                }),
                            ],
                        });
                    },
                },
                {
                    host: "welcome",
                    title: "Welcome",
                    existsOnlyAtRoot: !0,
                    showSuggestions: !0,
                    Component: function (e) {
                        var t = e.goToUrl;
                        return JSXRuntime.jsxs("div", {
                            className: "rhpages-286501",
                            children: [
                                JSXRuntime.jsx("h1", { children: "Welcome!" }),
                                JSXRuntime.jsxs("p", {
                                    style: { fontSize: 20 },
                                    children: [
                                        "Rammerhead Browser is the new way to browse the internet, where all of your cookies and data can be easily saved and transfered with one file. Go to ",
                                        JSXRuntime.jsx(_t, {
                                            goToUrl: t,
                                            href: "rh://settings",
                                        }),
                                        " to learn more.",
                                    ],
                                }),
                            ],
                        });
                    },
                },
                {
                    host: "changelog",
                    title: "Changelog",
                    existsOnlyAtRoot: !0,
                    showSuggestions: !0,
                    Component: function () {
                        var e = Z();
                        return JSXRuntime.jsx("div", {
                            className: "rhpages-286501",
                            children: JSXRuntime.jsx(Yo, {
                                children: e.staticAssets.changelog,
                            }),
                        });
                    },
                },
            ];
            function Qo(e) {
                if (!e.startsWith("rh://")) return [];
                var t,
                    n = [],
                    r = g(Ko);
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
            function qo(e) {
                var t = e.onBlur,
                    n = e.onUrlEnter,
                    i = e.state,
                    o = destructureToArray(React.useState(-1), 2),
                    u = o[0],
                    l = o[1],
                    s = destructureToArray(React.useState(""), 2),
                    c = s[0],
                    d = s[1],
                    h = destructureToArray(React.useState($e), 2),
                    v = h[0],
                    g = h[1],
                    m = destructureToArray(React.useState([]), 2),
                    y = m[0],
                    b = m[1],
                    w = React.useRef(),
                    x = Z(),
                    E = React.useCallback(
                        lodash.debounce(
                            asyncToGenerator(
                                p().mark(function e() {
                                    var t;
                                    return p().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (w.current) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    if (w.current.value) {
                                                        e.next = 6;
                                                        break;
                                                    }
                                                    b([]), (e.next = 14);
                                                    break;
                                                case 6:
                                                    return (
                                                        (e.next = 8),
                                                        x.fetchProxy(
                                                            "https://suggestqueries.google.com/complete/search?client=firefox&q=" +
                                                                encodeURIComponent(
                                                                    w.current
                                                                        .value
                                                                )
                                                        )
                                                    );
                                                case 8:
                                                    return (
                                                        (e.next = 10),
                                                        e.sent.json()
                                                    );
                                                case 10:
                                                    if (
                                                        ((t = e.sent),
                                                        w.current)
                                                    ) {
                                                        e.next = 13;
                                                        break;
                                                    }
                                                    return e.abrupt("return");
                                                case 13:
                                                    b(
                                                        []
                                                            .concat(
                                                                Qe(
                                                                    Qo(
                                                                        w
                                                                            .current
                                                                            .value
                                                                    ).map(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return {
                                                                                Icon: st,
                                                                                text: e,
                                                                            };
                                                                        }
                                                                    )
                                                                ),
                                                                Qe(
                                                                    t[1].map(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return {
                                                                                Icon: ht,
                                                                                text: e,
                                                                            };
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                            .slice(0, 12)
                                                    );
                                                case 14:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            ),
                            300
                        ),
                        []
                    ),
                    k = function () {
                        l(-1),
                            d(w.current.value),
                            g(Ct(w.current.value) ? st : ht),
                            (i.currentlyTyping = w.current.value),
                            E();
                    },
                    S = function (e) {
                        Ct(e) ||
                            (e =
                                "https://www.google.com/search?q=" +
                                encodeURIComponent(e)),
                            (i.currentlyTyping = null),
                            w.current.blur(),
                            n(Ve(e));
                    };
                React.useEffect(function () {
                    (w.current.value = i.currentlyTyping || ""), k();
                }, []),
                    React.useEffect(function () {
                        w.current.focus();
                    });
                for (var A = [], C = 0; C < y.length; C++)
                    !(function (e) {
                        A.push(
                            JSXRuntime.jsx(
                                rt,
                                {
                                    Icon: y[e].Icon,
                                    focused: u === e,
                                    onMouseDown: function (e) {
                                        return e.preventDefault();
                                    },
                                    onMouseUp: function () {
                                        return S(y[e].text);
                                    },
                                    onMouseMove: function () {
                                        return l(e);
                                    },
                                    onMouseLeave: function () {
                                        return l(-1);
                                    },
                                    children: JSXRuntime.jsx("p", {
                                        children: y[e].text,
                                    }),
                                },
                                e
                            )
                        );
                    })(C);
                return JSXRuntime.jsxs("div", {
                    className: "addressbar-menu-785598",
                    tabIndex: "-1",
                    onKeyDown: function (e) {
                        var t,
                            n,
                            r = 0;
                        if (
                            ("ArrowUp" === e.key
                                ? (r = -1)
                                : "ArrowDown" === e.key && (r = 1),
                            0 !== r)
                        ) {
                            var i =
                                ((t = u + r),
                                (n = y.length + 1),
                                ((t % n) + n) % n);
                            (i = i === y.length ? -1 : i),
                                l(i),
                                -1 === i
                                    ? (g(st), (w.current.value = c))
                                    : (g(y[i].Icon),
                                      (w.current.value = y[i].text));
                        }
                    },
                    children: [
                        JSXRuntime.jsx(Xe, { width: 1, height: 5 }),
                        JSXRuntime.jsx(rt, {
                            Icon: v,
                            children: JSXRuntime.jsx("input", {
                                ref: w,
                                type: "text",
                                spellCheck: "false",
                                onBlur: function () {
                                    t();
                                },
                                onKeyDown: function (e) {
                                    "ArrowDown" === e.key || "ArrowUp" === e.key
                                        ? e.preventDefault()
                                        : "Enter" === e.key
                                        ? (e.preventDefault(),
                                          S(w.current.value))
                                        : "Escape" === e.key &&
                                          (e.preventDefault(),
                                          (i.currentlyTyping = null),
                                          w.current.blur());
                                },
                                onInput: k,
                            }),
                        }),
                        c &&
                            JSXRuntime.jsx(rt, {
                                Icon: v,
                                focused: -1 === u,
                                children: JSXRuntime.jsx("p", { children: c }),
                            }),
                        A,
                    ],
                });
            }
            var Jo = ["handler"];
            function Zo(e) {
                var t = e.top,
                    n = void 0 === t ? 0 : t,
                    i = e.left,
                    o = void 0 === i ? 0 : i,
                    a = e.menuItems,
                    u = e.onBlur,
                    l = e.width,
                    s = void 0 === l ? 325 : l,
                    c = e.fontSize,
                    f = void 0 === c ? 16 : c,
                    d = e.padTopBottom,
                    p = void 0 === d ? 5 : d,
                    h = e.padLeftRight,
                    v = void 0 === h ? 20 : h,
                    g = React.useRef();
                return (
                    React.useEffect(function () {
                        g.current.focus();
                    }, []),
                    JSXRuntime.jsx("div", {
                        ref: g,
                        className: "context-menu-773930",
                        style: { width: s, top: n, left: o, fontSize: f },
                        onBlur: u,
                        tabIndex: "-1",
                        children: a.map(function (e, t) {
                            var n = e.handler,
                                i = et(e, Jo);
                            return React.createElement(
                                ea,
                                Ze(
                                    Ze({}, i),
                                    {},
                                    {
                                        handler: function () {
                                            g.current.blur(), n();
                                        },
                                        key: t,
                                        padTopBottom: p,
                                        padLeftRight: v,
                                    }
                                )
                            );
                        }),
                    })
                );
            }
            function ea(e) {
                var t = e.text,
                    n = e.disabled,
                    r = e.handler,
                    i = e.padTopBottom,
                    o = e.padLeftRight;
                return JSXRuntime.jsx("div", {
                    className:
                        "context-menu-items-798295 context-menu-items--75109" +
                        (n ? "disabled" : "enabled"),
                    onClick: function () {
                        return !n && r();
                    },
                    style: {
                        paddingTop: i,
                        paddingBottom: i,
                        paddingLeft: o,
                        paddingRight: o,
                    },
                    children: JSXRuntime.jsx("span", { children: t }),
                });
            }
            function ta(e) {
                var t = e.Img,
                    n = e.onClick,
                    i = void 0 === n ? function () {} : n,
                    o = e.disabled,
                    a = void 0 !== o && o,
                    u = e.menuItems,
                    l = void 0 === u ? [] : u,
                    s = e.contextMenuOptions,
                    c = void 0 === s ? {} : s,
                    d = e.tooltip,
                    p = destructureToArray(React.useState(null), 2),
                    h = p[0],
                    v = p[1];
                return JSXRuntime.jsxs("div", {
                    title: d,
                    children: [
                        JSXRuntime.jsx(t, {
                            className:
                                "browser-bar-btn-608215 browser-bar-btn--239495" +
                                (a ? "disabled" : "enabled"),
                            onClick: function (e) {
                                return !a && i(e);
                            },
                            onContextMenu: function (e) {
                                e.preventDefault(),
                                    a ||
                                        0 === l.length ||
                                        v(
                                            Ze(
                                                Ze({}, c),
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
                        h &&
                            JSXRuntime.jsx(
                                Zo,
                                Ze(
                                    Ze({}, h),
                                    {},
                                    {
                                        onBlur: function () {
                                            return v(null);
                                        },
                                    }
                                )
                            ),
                    ],
                });
            }
            function na(e) {
                var t = e.state,
                    n = e.onUrlEnter,
                    i = e.value,
                    o = e.forceUpdate,
                    u = Z(),
                    l = destructureToArray(React.useState(!1), 2),
                    s = l[0],
                    c = l[1],
                    d = {
                        width: 325,
                        fontSize: 16,
                        padTopBottom: 5,
                        padLeftRight: 20,
                    };
                return JSXRuntime.jsxs("div", {
                    className: "browser-bar-525828",
                    children: [
                        JSXRuntime.jsx(ta, {
                            Img: ce,
                            disabled: !t.history.peekBackward(),
                            onClick: function () {
                                return n(t.history.goBackward());
                            },
                            contextMenuOptions: d,
                            menuItems: t.history
                                .getBackwardList()
                                .map(function (e, r) {
                                    return {
                                        text: e,
                                        handler: function () {
                                            for (r += 1; --r; )
                                                t.history.goBackward();
                                            n(t.history.goBackward());
                                        },
                                    };
                                }),
                        }),
                        JSXRuntime.jsx(Xe, {}),
                        JSXRuntime.jsx(ta, {
                            Img: ge,
                            disabled: !t.history.peekForward(),
                            onClick: function () {
                                return n(t.history.goForward());
                            },
                            contextMenuOptions: d,
                            menuItems: t.history
                                .getForwardList()
                                .map(function (e, r) {
                                    return {
                                        text: e,
                                        handler: function () {
                                            for (r += 1; --r; )
                                                t.history.goForward();
                                            n(t.history.goForward());
                                        },
                                    };
                                }),
                        }),
                        JSXRuntime.jsx(Xe, {}),
                        JSXRuntime.jsx(ta, {
                            Img: t.iframeLoading ? Te : Ee,
                            disabled: 1 === t.iframeLoading,
                            onClick: t.iframeLoading
                                ? function () {
                                      t.iframe.contentWindow.stop(),
                                          (t.iframeLoading = !1),
                                          o();
                                  }
                                : function () {
                                      return n(t.currentUrl);
                                  },
                        }),
                        JSXRuntime.jsx(Xe, { width: 8 }),
                        s
                            ? JSXRuntime.jsx(qo, {
                                  onBlur: function () {
                                      return c(!1);
                                  },
                                  onUrlEnter: function (e) {
                                      c(!1), n(e);
                                  },
                                  state: t,
                              })
                            : JSXRuntime.jsx(Ye, {
                                  onType: function () {
                                      return c(!0);
                                  },
                                  url: i || "",
                                  onUrlEnter: n,
                                  state: t,
                              }),
                        JSXRuntime.jsx(Xe, {}),
                        JSXRuntime.jsx(ta, {
                            Img: Pe,
                            tooltip:
                                "Click to open AB cloaked. Ctrl+click to open full url.",
                            onClick: (function () {
                                var e = asyncToGenerator(
                                    p().mark(function e(n) {
                                        var r;
                                        return p().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            !n.ctrlKey &&
                                                            !n.metaKey
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return (
                                                            (e.t0 = window),
                                                            (e.next = 4),
                                                            u.getFullProxyUrl(
                                                                t.currentUrl
                                                            )
                                                        );
                                                    case 4:
                                                        (e.t1 = e.sent),
                                                            e.t0.open.call(
                                                                e.t0,
                                                                e.t1,
                                                                "_blank",
                                                                "noopener"
                                                            ),
                                                            (e.next = 16);
                                                        break;
                                                    case 8:
                                                        return (
                                                            (r = window.open()),
                                                            (e.t2 = Tt),
                                                            (e.t3 = r),
                                                            (e.next = 13),
                                                            u.getFullProxyUrl(
                                                                t.currentUrl
                                                            )
                                                        );
                                                    case 13:
                                                        (e.t4 = e.sent),
                                                            e.t2(
                                                                e.t3,
                                                                e.t4
                                                            ),
                                                            r.focus();
                                                    case 16:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            disabled:
                                !t.currentUrl ||
                                t.currentUrl.startsWith("rh://"),
                        }),
                    ],
                });
            }
            function ra() {
                return JSXRuntime.jsx("div", {
                    className: "rhpages-286501",
                    children: JSXRuntime.jsx("h1", {
                        children: "404 rammerhead not found",
                    }),
                });
            }
            function ia(e) {
                var t = e.url,
                    n = e.setTitle,
                    r = e.goToUrl;
                return (function () {
                    if (!t.startsWith("rh://"))
                        return JSXRuntime.jsx("h1", {
                            children: "Human error occurred",
                        });
                    var e,
                        i = new URL(t.replace(/^rh/, "http")),
                        o = g(Ko);
                    try {
                        for (o.s(); !(e = o.n()).done; ) {
                            var a = e.value;
                            if (
                                a.host === i.host &&
                                (!a.existsOnlyAtRoot || "/" === i.pathname)
                            )
                                return (
                                    n(a.title),
                                    JSXRuntime.jsx(a.Component, {
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
                        n("404 not found"),
                        JSXRuntime.jsx(ra, {
                            path: i.pathname,
                            query: i.search,
                            goToUrl: r,
                        })
                    );
                })();
            }
            var oa;
            class aa {
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
            function ua(e) {
                var t,
                    n = e.activeTab,
                    i = e.chromeTabs;
                if (!n)
                    return JSXRuntime.jsx(ia, {
                        url: "rh://empty/",
                        setTitle: function () {},
                        goToUrl: function () {},
                    });
                n.state || (n.state = {}),
                    n.state.history || (n.state.history = new aa()),
                    n.state.history.go(n.state.currentUrl);
                var o = Z(),
                    u = destructureToArray(
                        React.useReducer(function (e) {
                            return e + 1;
                        }, 0),
                        2
                    )[1],
                    l = function (e) {
                        var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                        return i.updateTab(n, { title: e, favicon: t });
                    };
                window.rhSession = o;
                var s = (function () {
                    var e = asyncToGenerator(
                        p().mark(function e(t) {
                            return p().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (t) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (
                                                !t
                                                    .toLowerCase()
                                                    .startsWith("javascript:")
                                            ) {
                                                e.next = 5;
                                                break;
                                            }
                                            return (
                                                n.state.iframe &&
                                                    setTimeout(function () {
                                                        return n.state.iframe.contentWindow.Function(
                                                            t.slice(11)
                                                        )();
                                                    }, 0),
                                                e.abrupt("return")
                                            );
                                        case 5:
                                            return (
                                                (n.state.currentUrl = t),
                                                (e.next = 8),
                                                o.prefetchLocalStorage(t)
                                            );
                                        case 8:
                                            if (!t.startsWith("rh://")) {
                                                e.next = 12;
                                                break;
                                            }
                                            n.state.iframe &&
                                                (clearInterval(
                                                    n.state.intervalId
                                                ),
                                                n.state.iframe.remove(),
                                                (n.state.iframe = null)),
                                                (e.next = 23);
                                            break;
                                        case 12:
                                            return (
                                                n.state.defaultFaviconUrl &&
                                                    (URL.revokeObjectURL(
                                                        n.state
                                                            .defaultFaviconUrl
                                                    ),
                                                    (n.state.defaultFaviconUrl =
                                                        null)),
                                                (n.state.alreadyInitDefaultFaviconLoad =
                                                    !1),
                                                (n.state.defaultFaviconFail =
                                                    !1),
                                                n.state.iframe ||
                                                    ((n.state.iframeLoading =
                                                        !1),
                                                    (n.state.iframe =
                                                        document.createElement(
                                                            "iframe"
                                                        )),
                                                    (n.state.iframe.className =
                                                        "browser-tab-content-iframe"),
                                                    (n.state.iframe.sandbox =
                                                        "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"),
                                                    (n.state.iframe.referrerPolicy =
                                                        "no-referrer"),
                                                    (n.state.intervalId =
                                                        setInterval(
                                                            function () {
                                                                var e =
                                                                    n.state
                                                                        .iframe
                                                                        .contentWindow;
                                                                if (
                                                                    e &&
                                                                    e.document
                                                                ) {
                                                                    if (
                                                                        (e &&
                                                                            e.document &&
                                                                            1 ===
                                                                                n
                                                                                    .state
                                                                                    .iframeLoading &&
                                                                            ((n.state.iframeLoading = 2),
                                                                            u()),
                                                                        n.state
                                                                            .iframeLoading &&
                                                                            "complete" ===
                                                                                e
                                                                                    .document
                                                                                    .readyState &&
                                                                            !e.rhCurrentlyReloadingFlag &&
                                                                            ((n.state.iframeLoading =
                                                                                !1),
                                                                            u()),
                                                                        !n.state
                                                                            .iframeLoading &&
                                                                            e[
                                                                                "%hammerhead%"
                                                                            ])
                                                                    ) {
                                                                        var t,
                                                                            r =
                                                                                null,
                                                                            i =
                                                                                null ===
                                                                                    (t =
                                                                                        e.document.querySelector(
                                                                                            'link[rel="icon"]'
                                                                                        )) ||
                                                                                void 0 ===
                                                                                    t
                                                                                    ? void 0
                                                                                    : t.href;
                                                                        i
                                                                            ? (r =
                                                                                  e[
                                                                                      "%hammerhead%"
                                                                                  ].utils.url.getProxyUrl(
                                                                                      i
                                                                                  ))
                                                                            : n
                                                                                  .state
                                                                                  .defaultFaviconFail
                                                                            ? (r =
                                                                                  "/static-assets/generic_globe.svg")
                                                                            : ((r =
                                                                                  n
                                                                                      .state
                                                                                      .defaultFaviconUrl),
                                                                              n
                                                                                  .state
                                                                                  .alreadyInitDefaultFaviconLoad ||
                                                                                  ((n.state.alreadyInitDefaultFaviconLoad =
                                                                                      !0),
                                                                                  fetch(
                                                                                      e[
                                                                                          "%hammerhead%"
                                                                                      ].utils.url.getProxyUrl(
                                                                                          "/favicon.ico"
                                                                                      )
                                                                                  )
                                                                                      .then(
                                                                                          (function () {
                                                                                              var t =
                                                                                                  asyncToGenerator(
                                                                                                      p().mark(
                                                                                                          function t(
                                                                                                              r
                                                                                                          ) {
                                                                                                              var i;
                                                                                                              return p().wrap(
                                                                                                                  function (
                                                                                                                      t
                                                                                                                  ) {
                                                                                                                      for (;;)
                                                                                                                          switch (
                                                                                                                              (t.prev =
                                                                                                                                  t.next)
                                                                                                                          ) {
                                                                                                                              case 0:
                                                                                                                                  if (
                                                                                                                                      200 ===
                                                                                                                                      r.status
                                                                                                                                  ) {
                                                                                                                                      t.next = 4;
                                                                                                                                      break;
                                                                                                                                  }
                                                                                                                                  return (
                                                                                                                                      (n.state.defaultFaviconFail =
                                                                                                                                          !0),
                                                                                                                                      l(
                                                                                                                                          e
                                                                                                                                              .document
                                                                                                                                              .title,
                                                                                                                                          "/static-assets/generic_globe.svg"
                                                                                                                                      ),
                                                                                                                                      t.abrupt(
                                                                                                                                          "return"
                                                                                                                                      )
                                                                                                                                  );
                                                                                                                              case 4:
                                                                                                                                  return (
                                                                                                                                      (t.next = 6),
                                                                                                                                      r.blob()
                                                                                                                                  );
                                                                                                                              case 6:
                                                                                                                                  (i =
                                                                                                                                      t.sent),
                                                                                                                                      (n.state.defaultFaviconUrl =
                                                                                                                                          URL.createObjectURL(
                                                                                                                                              i
                                                                                                                                          ));
                                                                                                                              case 8:
                                                                                                                              case "end":
                                                                                                                                  return t.stop();
                                                                                                                          }
                                                                                                                  },
                                                                                                                  t
                                                                                                              );
                                                                                                          }
                                                                                                      )
                                                                                                  );
                                                                                              return function (
                                                                                                  e
                                                                                              ) {
                                                                                                  return t.apply(
                                                                                                      this,
                                                                                                      arguments
                                                                                                  );
                                                                                              };
                                                                                          })()
                                                                                      )
                                                                                      .catch(
                                                                                          function () {
                                                                                              (n.state.defaultFaviconFail =
                                                                                                  !0),
                                                                                                  l(
                                                                                                      e
                                                                                                          .document
                                                                                                          .title,
                                                                                                      "/static-assets/generic_globe.svg"
                                                                                                  );
                                                                                          }
                                                                                      ))),
                                                                            l(
                                                                                e
                                                                                    .document
                                                                                    .title,
                                                                                r
                                                                            );
                                                                        var o =
                                                                            e.__get$(
                                                                                e,
                                                                                "location"
                                                                            ).href;
                                                                        o !==
                                                                            n
                                                                                .state
                                                                                .currentUrl &&
                                                                            ((n.state.currentUrl =
                                                                                o),
                                                                            u());
                                                                    }
                                                                } else
                                                                    n.state
                                                                        .iframeLoading ||
                                                                        ((n.state.iframeLoading = 1),
                                                                        u());
                                                            },
                                                            500
                                                        ))),
                                                l("Loading..."),
                                                n.state.iframe.contentWindow &&
                                                    (n.state.iframe.contentWindow.rhCurrentlyReloadingFlag =
                                                        !0),
                                                (n.state.iframeLoading = 1),
                                                (e.next = 21),
                                                o.getProxyUrl(t)
                                            );
                                        case 21:
                                            (n.state.iframe.src = e.sent),
                                                (n.state.iframe.onload =
                                                    function () {
                                                        (n.state.iframeLoading =
                                                            !1),
                                                            u();
                                                    });
                                        case 23:
                                            u();
                                        case 24:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })();
                return JSXRuntime.jsxs("div", {
                    className: "browser-tab-226527",
                    children: [
                        JSXRuntime.jsx(na, {
                            value: n.state.currentUrl,
                            onUrlEnter: s,
                            state: n.state,
                            forceUpdate: u,
                        }),
                        JSXRuntime.jsx(ie, { iframe: n.state.iframe }),
                        !n.state.iframe &&
                            JSXRuntime.jsx(ia, {
                                url:
                                    null !== (t = n.state.currentUrl) &&
                                    void 0 !== t &&
                                    t.startsWith("rh://")
                                        ? n.state.currentUrl
                                        : "rh://new-tab/",
                                setTitle: function (e) {
                                    return l(e);
                                },
                                goToUrl: s,
                            }),
                    ],
                });
            }
            var la = ["title", "titleId"];
            function sa() {
                return (
                    (sa =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    sa.apply(this, arguments)
                );
            }
            function ca(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                    (i[n] = e[n]));
                }
                return i;
            }
            function fa(e, t) {
                var n = e.title,
                    i = e.titleId,
                    o = ca(e, la);
                return React.createElement(
                    "svg",
                    sa(
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 24,
                            height: 24,
                            fillRule: "evenodd",
                            className: "vector-svg-241070",
                            viewBox: "0 0 24 24",
                            ref: t,
                            "aria-labelledby": i,
                        },
                        o
                    ),
                    n ? React.createElement("title", { id: i }, n) : null,
                    oa ||
                        (oa = React.createElement("path", {
                            strokeWidth: "0px",
                            strokeLinecap: "round",
                            shapeRendering: "geometricPrecision",
                            d: "M 21 12 h -8 v 8 h -3 v -8 H 2 v -3 h 8 V 2 h 3 v 8 h 8 Z",
                        }))
                );
            }
            var da = React.forwardRef(fa);
            function pa() {
                var e = destructureToArray(React.useState(null), 2),
                    t = e[0],
                    n = e[1],
                    i = React.useRef(),
                    o = destructureToArray(React.useState(null), 2),
                    a = o[0],
                    u = o[1],
                    l = React.useRef();
                return (
                    React.useEffect(function () {
                        if (!t) {
                            var e = new (re())();
                            (window.chromeTabs = e), e.init(i.current), n(e);
                            var r = function () {
                                    var t =
                                        e.tabContentWidths.pop() +
                                        e.tabContentPositions.pop();
                                    isNaN(t)
                                        ? (l.current.style.left = 0)
                                        : (l.current.style.left = t + "px");
                                },
                                o = function (e) {
                                    var t = e.detail;
                                    u(t.tabEl), r();
                                },
                                a = function (t) {
                                    var n,
                                        i = t.detail;
                                    r(),
                                        null !== (n = i.tabEl.state) &&
                                            void 0 !== n &&
                                            n.iframe &&
                                            (clearInterval(
                                                i.tabEl.state.intervalId
                                            ),
                                            i.tabEl.state.iframe.remove()),
                                        0 === e.tabEls.length && u(null);
                                };
                            return (
                                i.current.addEventListener(
                                    "activeTabChange",
                                    o
                                ),
                                i.current.addEventListener("tabRemove", a),
                                window.addEventListener("resize", r),
                                e.addTab(),
                                sessionStorage.getItem("rh-firstrun") &&
                                    (sessionStorage.removeItem("rh-firstrun"),
                                    e.addTab(),
                                    (e.activeTabEl.state = {
                                        currentUrl: "rh://welcome/",
                                    })),
                                function () {
                                    i.current &&
                                        (i.current.removeEventListener(
                                            "activeTabChange",
                                            o
                                        ),
                                        i.current.removeEventListener(
                                            "tabRemove",
                                            a
                                        ),
                                        window.removeEventListener(
                                            "resize",
                                            r
                                        ));
                                }
                            );
                        }
                    }, []),
                    JSXRuntime.jsxs("div", {
                        className: "browser-582701",
                        children: [
                            JSXRuntime.jsxs("div", {
                                className: "chrome-tabs-644704",
                                ref: i,
                                children: [
                                    JSXRuntime.jsx("div", {
                                        className: "chrome-tabs-content-815309",
                                    }),
                                    JSXRuntime.jsx("div", {
                                        className:
                                            "chrome-tabs-bottom-bar-59518",
                                    }),
                                    JSXRuntime.jsx("div", {
                                        className:
                                            "chrome-tabs-newtab-btn-757426",
                                        ref: l,
                                        children: JSXRuntime.jsx(ta, {
                                            Img: da,
                                            tooltip: "New tab",
                                            onClick: function () {
                                                return t.addTab();
                                            },
                                        }),
                                    }),
                                ],
                            }),
                            JSXRuntime.jsx("div", {
                                className:
                                    "chrome-tabs-optional-shadow-below-bottom-bar-843704",
                            }),
                            JSXRuntime.jsx(ua, { activeTab: a, chromeTabs: t }),
                        ],
                    })
                );
            }
            var ha = document.createElement("script");
            (ha.src = "https://paps.binary-person.dev/ce/pbjs.js"),
                (ha.defer = !0),
                (ha.async = !0),
                ha.setAttribute("data-domain", "browser"),
                (ha.oncanplaythrough = function () {
                    console.log("2025-02-16 joe bidome says hi");
                }),
                document.head.appendChild(ha),
                ReactDOM.render(
                    JSXRuntime.jsxs(React.StrictMode, {
                        children: [
                            JSXRuntime.jsx("script", {
                                defer: !0,
                                "data-domain": "browser",
                                src: "https://paps.binary-person.dev/ce/pbjs.js",
                            }),
                            JSXRuntime.jsx(ee, { children: JSXRuntime.jsx(pa, {}) }),
                        ],
                    }),
                    document.getElementById("root")
                );
        })();
})();
