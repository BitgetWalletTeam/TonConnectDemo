/*! For license information please see 907.11dd6d03.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunktest_provider = self.webpackChunktest_provider || []).push([
  [907],
  {
    2907: (t, e, r) => {
      r.d(e, { getStarknetWindowObject: () => Qg });
      var i,
        n = r(6317),
        s = r(5211),
        o = r(7827),
        a = r(61).Buffer,
        c = r(6297),
        h = Object.defineProperty,
        u = (t, e, r) => (
          ((t, e, r) => {
            e in t
              ? h(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (t[e] = r);
          })(t, "symbol" != typeof e ? e + "" : e, r),
          r
        ),
        l = { exports: {} },
        f = "object" == typeof Reflect ? Reflect : null,
        d =
          f && "function" == typeof f.apply
            ? f.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      i =
        f && "function" == typeof f.ownKeys
          ? f.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var p =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function g() {
        g.init.call(this);
      }
      (l.exports = g),
        (l.exports.once = function (t, e) {
          return new Promise(function (r, i) {
            function n(r) {
              t.removeListener(e, s), i(r);
            }
            function s() {
              "function" == typeof t.removeListener &&
                t.removeListener("error", n),
                r([].slice.call(arguments));
            }
            I(t, e, s, { once: !0 }),
              "error" !== e &&
                (function (t, e, r) {
                  "function" == typeof t.on && I(t, "error", e, r);
                })(t, n, { once: !0 });
          });
        }),
        (g.EventEmitter = g),
        (g.prototype._events = void 0),
        (g.prototype._eventsCount = 0),
        (g.prototype._maxListeners = void 0);
      var m = 10;
      function y(t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function v(t) {
        return void 0 === t._maxListeners
          ? g.defaultMaxListeners
          : t._maxListeners;
      }
      function w(t, e, r, i) {
        var n, s, o;
        if (
          (y(r),
          void 0 === (s = t._events)
            ? ((s = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (s = t._events)),
              (o = s[e])),
          void 0 === o)
        )
          (o = s[e] = r), ++t._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = s[e] = i ? [r, o] : [o, r])
            : i
            ? o.unshift(r)
            : o.push(r),
          (n = v(t)) > 0 && o.length > n && !o.warned)
        ) {
          o.warned = !0;
          var a = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (a.name = "MaxListenersExceededWarning"),
            (a.emitter = t),
            (a.type = e),
            (a.count = o.length),
            (function (t) {
              console && console.warn && console.warn(t);
            })(a);
        }
        return t;
      }
      function b() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function _(t, e, r) {
        var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          n = b.bind(i);
        return (n.listener = r), (i.wrapFn = n), n;
      }
      function A(t, e, r) {
        var i = t._events;
        if (void 0 === i) return [];
        var n = i[e];
        return void 0 === n
          ? []
          : "function" == typeof n
          ? r
            ? [n.listener || n]
            : [n]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
              return e;
            })(n)
          : S(n, n.length);
      }
      function E(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function S(t, e) {
        for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
        return r;
      }
      function I(t, e, r, i) {
        if ("function" == typeof t.on) i.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" != typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof t
            );
          t.addEventListener(e, function n(s) {
            i.once && t.removeEventListener(e, n), r(s);
          });
        }
      }
      Object.defineProperty(g, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return m;
        },
        set: function (t) {
          if ("number" != typeof t || t < 0 || p(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          m = t;
        },
      }),
        (g.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (g.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || p(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (g.prototype.getMaxListeners = function () {
          return v(this);
        }),
        (g.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var i = "error" === t,
            n = this._events;
          if (void 0 !== n) i = i && void 0 === n.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
            var o = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((o.context = s), o);
          }
          var a = n[t];
          if (void 0 === a) return !1;
          if ("function" == typeof a) d(a, this, e);
          else {
            var c = a.length,
              h = S(a, c);
            for (r = 0; r < c; ++r) d(h[r], this, e);
          }
          return !0;
        }),
        (g.prototype.addListener = function (t, e) {
          return w(this, t, e, !1);
        }),
        (g.prototype.on = g.prototype.addListener),
        (g.prototype.prependListener = function (t, e) {
          return w(this, t, e, !0);
        }),
        (g.prototype.once = function (t, e) {
          return y(e), this.on(t, _(this, t, e)), this;
        }),
        (g.prototype.prependOnceListener = function (t, e) {
          return y(e), this.prependListener(t, _(this, t, e)), this;
        }),
        (g.prototype.removeListener = function (t, e) {
          var r, i, n, s, o;
          if ((y(e), void 0 === (i = this._events))) return this;
          if (void 0 === (r = i[t])) return this;
          if (r === e || r.listener === e)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[t],
                i.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" != typeof r) {
            for (n = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === e || r[s].listener === e) {
                (o = r[s].listener), (n = s);
                break;
              }
            if (n < 0) return this;
            0 === n
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, n),
              1 === r.length && (i[t] = r[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", t, o || e);
          }
          return this;
        }),
        (g.prototype.off = g.prototype.removeListener),
        (g.prototype.removeAllListeners = function (t) {
          var e, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var n,
              s = Object.keys(r);
            for (i = 0; i < s.length; ++i)
              "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
          return this;
        }),
        (g.prototype.listeners = function (t) {
          return A(this, t, !0);
        }),
        (g.prototype.rawListeners = function (t) {
          return A(this, t, !1);
        }),
        (g.listenerCount = function (t, e) {
          return "function" == typeof t.listenerCount
            ? t.listenerCount(e)
            : E.call(t, e);
        }),
        (g.prototype.listenerCount = E),
        (g.prototype.eventNames = function () {
          return this._eventsCount > 0 ? i(this._events) : [];
        });
      var M = l.exports;
      const N = (0, n.d)(M),
        O =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        x =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        P = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function R(t, e) {
        if (
          !(
            "__proto__" === t ||
            ("constructor" === t &&
              e &&
              "object" == typeof e &&
              "prototype" in e)
          )
        )
          return e;
        !(function (t) {
          console.warn(
            '[destr] Dropping "'.concat(
              t,
              '" key to prevent prototype pollution.'
            )
          );
        })(t);
      }
      function T(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" != typeof t) return t;
        const r = t.trim();
        if ('"' === t[0] && t.endsWith('"') && !t.includes("\\"))
          return r.slice(1, -1);
        if (r.length <= 9) {
          const t = r.toLowerCase();
          if ("true" === t) return !0;
          if ("false" === t) return !1;
          if ("undefined" === t) return;
          if ("null" === t) return null;
          if ("nan" === t) return Number.NaN;
          if ("infinity" === t) return Number.POSITIVE_INFINITY;
          if ("-infinity" === t) return Number.NEGATIVE_INFINITY;
        }
        if (!P.test(t)) {
          if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
          return t;
        }
        try {
          if (O.test(t) || x.test(t)) {
            if (e.strict)
              throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(t, R);
          }
          return JSON.parse(t);
        } catch (i) {
          if (e.strict) throw i;
          return t;
        }
      }
      function C(t) {
        try {
          for (
            var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
            i < e;
            i++
          )
            r[i - 1] = arguments[i];
          return (function (t) {
            return t && "function" == typeof t.then ? t : Promise.resolve(t);
          })(t(...r));
        } catch (n) {
          return Promise.reject(n);
        }
      }
      function U(t) {
        if (
          (function (t) {
            const e = typeof t;
            return null === t || ("object" !== e && "function" !== e);
          })(t)
        )
          return String(t);
        if (
          (function (t) {
            const e = Object.getPrototypeOf(t);
            return !e || e.isPrototypeOf(Object);
          })(t) ||
          Array.isArray(t)
        )
          return JSON.stringify(t);
        if ("function" == typeof t.toJSON) return U(t.toJSON());
        throw new Error("[unstorage] Cannot stringify value!");
      }
      function L() {
        if (void 0 === typeof a)
          throw new TypeError("[unstorage] Buffer is not supported!");
      }
      const k = "base64:";
      function D(t) {
        return t
          ? t
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function B() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return D(e.join(":"));
      }
      function q(t) {
        return (t = D(t)) ? t + ":" : "";
      }
      const j = () => {
        const t = new Map();
        return {
          name: "memory",
          options: {},
          hasItem: (e) => t.has(e),
          getItem(e) {
            var r;
            return null !== (r = t.get(e)) && void 0 !== r ? r : null;
          },
          getItemRaw(e) {
            var r;
            return null !== (r = t.get(e)) && void 0 !== r ? r : null;
          },
          setItem(e, r) {
            t.set(e, r);
          },
          setItemRaw(e, r) {
            t.set(e, r);
          },
          removeItem(e) {
            t.delete(e);
          },
          getKeys: () => Array.from(t.keys()),
          clear() {
            t.clear();
          },
          dispose() {
            t.clear();
          },
        };
      };
      function z() {
        const t = {
            mounts: {
              "":
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
                ).driver || j(),
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {},
          },
          e = (e) => {
            for (const r of t.mountpoints)
              if (e.startsWith(r))
                return {
                  base: r,
                  relativeKey: e.slice(r.length),
                  driver: t.mounts[r],
                };
            return { base: "", relativeKey: e, driver: t.mounts[""] };
          },
          r = (e, r) =>
            t.mountpoints
              .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
              .map((r) => ({
                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                mountpoint: r,
                driver: t.mounts[r],
              })),
          i = (e, r) => {
            if (t.watching) {
              r = D(r);
              for (const i of t.watchListeners) i(e, r);
            }
          },
          n = async () => {
            if (t.watching) {
              for (const e in t.unwatch) await t.unwatch[e]();
              (t.unwatch = {}), (t.watching = !1);
            }
          },
          s = (t, r, i) => {
            const n = new Map(),
              s = (t) => {
                let e = n.get(t.base);
                return (
                  e ||
                    ((e = { driver: t.driver, base: t.base, items: [] }),
                    n.set(t.base, e)),
                  e
                );
              };
            for (const o of t) {
              const t = "string" == typeof o,
                i = D(t ? o : o.key),
                n = t ? void 0 : o.value,
                a = t || !o.options ? r : { ...r, ...o.options },
                c = e(i);
              s(c).items.push({
                key: i,
                value: n,
                relativeKey: c.relativeKey,
                options: a,
              });
            }
            return Promise.all([...n.values()].map((t) => i(t))).then((t) =>
              t.flat()
            );
          },
          o = {
            hasItem(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = D(t);
              const { relativeKey: i, driver: n } = e(t);
              return C(n.hasItem, i, r);
            },
            getItem(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = D(t);
              const { relativeKey: i, driver: n } = e(t);
              return C(n.getItem, i, r).then((t) => T(t));
            },
            getItems: (t, e) =>
              s(t, e, (t) =>
                t.driver.getItems
                  ? C(
                      t.driver.getItems,
                      t.items.map((t) => ({
                        key: t.relativeKey,
                        options: t.options,
                      })),
                      e
                    ).then((e) =>
                      e.map((e) => ({
                        key: B(t.base, e.key),
                        value: T(e.value),
                      }))
                    )
                  : Promise.all(
                      t.items.map((e) =>
                        C(t.driver.getItem, e.relativeKey, e.options).then(
                          (t) => ({ key: e.key, value: T(t) })
                        )
                      )
                    )
              ),
            getItemRaw(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = D(t);
              const { relativeKey: i, driver: n } = e(t);
              return n.getItemRaw
                ? C(n.getItemRaw, i, r)
                : C(n.getItem, i, r).then((t) =>
                    (function (t) {
                      return "string" == typeof t && t.startsWith(k)
                        ? (L(), a.from(t.slice(k.length), "base64"))
                        : t;
                    })(t)
                  );
            },
            async setItem(t, r) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(t);
              t = D(t);
              const { relativeKey: s, driver: a } = e(t);
              a.setItem &&
                (await C(a.setItem, s, U(r), n), a.watch || i("update", t));
            },
            async setItems(t, e) {
              await s(t, e, async (t) => {
                if (t.driver.setItems)
                  return C(
                    t.driver.setItems,
                    t.items.map((t) => ({
                      key: t.relativeKey,
                      value: U(t.value),
                      options: t.options,
                    })),
                    e
                  );
                t.driver.setItem &&
                  (await Promise.all(
                    t.items.map((e) =>
                      C(t.driver.setItem, e.relativeKey, U(e.value), e.options)
                    )
                  ));
              });
            },
            async setItemRaw(t, r) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(t, n);
              t = D(t);
              const { relativeKey: s, driver: c } = e(t);
              if (c.setItemRaw) await C(c.setItemRaw, s, r, n);
              else {
                if (!c.setItem) return;
                await C(
                  c.setItem,
                  s,
                  (function (t) {
                    if ("string" == typeof t) return t;
                    L();
                    const e = a.from(t).toString("base64");
                    return k + e;
                  })(r),
                  n
                );
              }
              c.watch || i("update", t);
            },
            async removeItem(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" == typeof r && (r = { removeMeta: r }), (t = D(t));
              const { relativeKey: n, driver: s } = e(t);
              s.removeItem &&
                (await C(s.removeItem, n, r),
                (r.removeMeta || r.removeMata) &&
                  (await C(s.removeItem, n + "$", r)),
                s.watch || i("remove", t));
            },
            async getMeta(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" == typeof r && (r = { nativeOnly: r }), (t = D(t));
              const { relativeKey: i, driver: n } = e(t),
                s = Object.create(null);
              if (
                (n.getMeta && Object.assign(s, await C(n.getMeta, i, r)),
                !r.nativeOnly)
              ) {
                const t = await C(n.getItem, i + "$", r).then((t) => T(t));
                t &&
                  "object" == typeof t &&
                  ("string" == typeof t.atime && (t.atime = new Date(t.atime)),
                  "string" == typeof t.mtime && (t.mtime = new Date(t.mtime)),
                  Object.assign(s, t));
              }
              return s;
            },
            setMeta(t, e) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return this.setItem(t + "$", e, r);
            },
            removeMeta(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return this.removeItem(t + "$", e);
            },
            async getKeys(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = q(t);
              const i = r(t, !0);
              let n = [];
              const s = [];
              for (const r of i) {
                const t = (await C(r.driver.getKeys, r.relativeBase, e))
                  .map((t) => r.mountpoint + D(t))
                  .filter((t) => !n.some((e) => t.startsWith(e)));
                s.push(...t),
                  (n = [
                    r.mountpoint,
                    ...n.filter((t) => !t.startsWith(r.mountpoint)),
                  ]);
              }
              return t
                ? s.filter((e) => e.startsWith(t) && !e.endsWith("$"))
                : s.filter((t) => !t.endsWith("$"));
            },
            async clear(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (t = q(t)),
                await Promise.all(
                  r(t, !1).map(async (t) => {
                    if (t.driver.clear)
                      return C(t.driver.clear, t.relativeBase, e);
                    if (t.driver.removeItem) {
                      const r = await t.driver.getKeys(t.relativeBase || "", e);
                      return Promise.all(
                        r.map((r) => t.driver.removeItem(r, e))
                      );
                    }
                  })
                );
            },
            async dispose() {
              await Promise.all(Object.values(t.mounts).map((t) => K(t)));
            },
            watch: async (e) => (
              await (async () => {
                if (!t.watching) {
                  t.watching = !0;
                  for (const e in t.mounts)
                    t.unwatch[e] = await F(t.mounts[e], i, e);
                }
              })(),
              t.watchListeners.push(e),
              async () => {
                (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
                  0 === t.watchListeners.length && (await n());
              }
            ),
            async unwatch() {
              (t.watchListeners = []), await n();
            },
            mount(e, r) {
              if ((e = q(e)) && t.mounts[e])
                throw new Error("already mounted at ".concat(e));
              return (
                e &&
                  (t.mountpoints.push(e),
                  t.mountpoints.sort((t, e) => e.length - t.length)),
                (t.mounts[e] = r),
                t.watching &&
                  Promise.resolve(F(r, i, e))
                    .then((r) => {
                      t.unwatch[e] = r;
                    })
                    .catch(console.error),
                o
              );
            },
            async unmount(e) {
              let r =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              (e = q(e)) &&
                t.mounts[e] &&
                (t.watching &&
                  e in t.unwatch &&
                  (t.unwatch[e](), delete t.unwatch[e]),
                r && (await K(t.mounts[e])),
                (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                delete t.mounts[e]);
            },
            getMount() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              t = D(t) + ":";
              const r = e(t);
              return { driver: r.driver, base: r.base };
            },
            getMounts() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return (
                (t = D(t)),
                r(t, e.parents).map((t) => ({
                  driver: t.driver,
                  base: t.mountpoint,
                }))
              );
            },
          };
        return o;
      }
      function F(t, e, r) {
        return t.watch ? t.watch((t, i) => e(t, r + i)) : () => {};
      }
      async function K(t) {
        "function" == typeof t.dispose && (await C(t.dispose));
      }
      function H(t) {
        return new Promise((e, r) => {
          (t.oncomplete = t.onsuccess = () => e(t.result)),
            (t.onabort = t.onerror = () => r(t.error));
        });
      }
      function V(t, e) {
        const r = indexedDB.open(t);
        r.onupgradeneeded = () => r.result.createObjectStore(e);
        const i = H(r);
        return (t, r) => i.then((i) => r(i.transaction(e, t).objectStore(e)));
      }
      let G;
      function W() {
        return G || (G = V("keyval-store", "keyval")), G;
      }
      function Y(t) {
        return (
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W()
        )("readonly", (e) => H(e.get(t)));
      }
      function Q() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W()
        )("readonly", (t) => {
          if (t.getAllKeys) return H(t.getAllKeys());
          const e = [];
          return (function (t, e) {
            return (
              (t.openCursor().onsuccess = function () {
                this.result && (e(this.result), this.result.continue());
              }),
              H(t.transaction)
            );
          })(t, (t) => e.push(t.key)).then(() => e);
        });
      }
      const J = (t) =>
          JSON.stringify(t, (t, e) =>
            "bigint" == typeof e ? e.toString() + "n" : e
          ),
        X = (t) => {
          const e = t.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(e, (t, e) =>
            "string" == typeof e && e.match(/^\d+n$/)
              ? BigInt(e.substring(0, e.length - 1))
              : e
          );
        };
      function Z(t) {
        if ("string" != typeof t)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof t)
          );
        try {
          return X(t);
        } catch {
          return t;
        }
      }
      function $(t) {
        return "string" == typeof t ? t : J(t) || "";
      }
      var tt = function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const e = t.base && t.base.length > 0 ? "".concat(t.base, ":") : "",
          r = (t) => e + t;
        let i;
        return (
          t.dbName && t.storeName && (i = V(t.dbName, t.storeName)),
          {
            name: "idb-keyval",
            options: t,
            hasItem: async (t) => !(typeof (await Y(r(t), i)) > "u"),
            async getItem(t) {
              var e;
              return null !== (e = await Y(r(t), i)) && void 0 !== e ? e : null;
            },
            setItem: (t, e) =>
              (function (t, e) {
                return (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : W()
                )("readwrite", (r) => (r.put(e, t), H(r.transaction)));
              })(r(t), e, i),
            removeItem: (t) =>
              (function (t) {
                return (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : W()
                )("readwrite", (e) => (e.delete(t), H(e.transaction)));
              })(r(t), i),
            getKeys: () => Q(i),
            clear: () =>
              (function () {
                return (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : W()
                )("readwrite", (t) => (t.clear(), H(t.transaction)));
              })(i),
          }
        );
      };
      let et = class {
        constructor() {
          this.indexedDb = z({
            driver: tt({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((t) => [t.key, t.value]);
        }
        async getItem(t) {
          const e = await this.indexedDb.getItem(t);
          if (null !== e) return e;
        }
        async setItem(t, e) {
          await this.indexedDb.setItem(t, $(e));
        }
        async removeItem(t) {
          await this.indexedDb.removeItem(t);
        }
      };
      var rt =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : typeof self < "u"
            ? self
            : {},
        it = { exports: {} };
      function nt(t) {
        var e;
        return [t[0], Z(null != (e = t[1]) ? e : "")];
      }
      !(function () {
        let t;
        function e() {}
        (t = e),
          (t.prototype.getItem = function (t) {
            return this.hasOwnProperty(t) ? String(this[t]) : null;
          }),
          (t.prototype.setItem = function (t, e) {
            this[t] = String(e);
          }),
          (t.prototype.removeItem = function (t) {
            delete this[t];
          }),
          (t.prototype.clear = function () {
            const t = this;
            Object.keys(t).forEach(function (e) {
              (t[e] = void 0), delete t[e];
            });
          }),
          (t.prototype.key = function (t) {
            return (t = t || 0), Object.keys(this)[t];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          typeof rt < "u" && rt.localStorage
            ? (it.exports = rt.localStorage)
            : typeof window < "u" && window.localStorage
            ? (it.exports = window.localStorage)
            : (it.exports = new e());
      })();
      let st = class {
        constructor() {
          this.localStorage = it.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(nt);
        }
        async getItem(t) {
          const e = this.localStorage.getItem(t);
          if (null !== e) return Z(e);
        }
        async setItem(t, e) {
          this.localStorage.setItem(t, $(e));
        }
        async removeItem(t) {
          this.localStorage.removeItem(t);
        }
      };
      const ot = async (t, e) => {
        e.length &&
          e.forEach(async (e) => {
            await t.removeItem(e);
          });
      };
      let at = class {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (t) => {
              (this.storage = t), (this.initialized = !0);
            });
          const t = new st();
          this.storage = t;
          try {
            (async (t, e, r) => {
              const i = "wc_storage_version",
                n = await e.getItem(i);
              if (n && n >= 1) return void r(e);
              const s = await t.getKeys();
              if (!s.length) return void r(e);
              const o = [];
              for (; s.length; ) {
                const r = s.shift();
                if (!r) continue;
                const i = r.toLowerCase();
                if (
                  i.includes("wc@") ||
                  i.includes("walletconnect") ||
                  i.includes("wc_") ||
                  i.includes("wallet_connect")
                ) {
                  const i = await t.getItem(r);
                  await e.setItem(r, i), o.push(r);
                }
              }
              await e.setItem(i, 1), r(e), ot(t, o);
            })(t, new et(), this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(t) {
          return await this.initialize(), this.storage.getItem(t);
        }
        async setItem(t, e) {
          return await this.initialize(), this.storage.setItem(t, e);
        }
        async removeItem(t) {
          return await this.initialize(), this.storage.removeItem(t);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((t) => {
              const e = setInterval(() => {
                this.initialized && (clearInterval(e), t());
              }, 20);
            }));
        }
      };
      var ct = {},
        ht = { exports: {} };
      !(function (t) {
        var e, r, i, s, o, a, c, h, u, l, f, d, p, g, m, y, v, w, b, _, A, E, S;
        !(function (I) {
          var M =
            "object" == typeof n.c
              ? n.c
              : "object" == typeof self
              ? self
              : "object" == typeof this
              ? this
              : {};
          function N(t, e) {
            return (
              t !== M &&
                ("function" == typeof Object.create
                  ? Object.defineProperty(t, "__esModule", { value: !0 })
                  : (t.__esModule = !0)),
              function (r, i) {
                return (t[r] = e ? e(r, i) : i);
              }
            );
          }
          !(function (t) {
            var n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            (e = function (t, e) {
              function r() {
                this.constructor = t;
              }
              n(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
              (r =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, i = arguments.length; r < i; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }),
              (i = function (t, e) {
                var r = {};
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    e.indexOf(i) < 0 &&
                    (r[i] = t[i]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var n = 0;
                  for (i = Object.getOwnPropertySymbols(t); n < i.length; n++)
                    e.indexOf(i[n]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(t, i[n]) &&
                      (r[i[n]] = t[i[n]]);
                }
                return r;
              }),
              (s = function (t, e, r, i) {
                var n,
                  s = arguments.length,
                  o =
                    s < 3
                      ? e
                      : null === i
                      ? (i = Object.getOwnPropertyDescriptor(e, r))
                      : i;
                if (
                  "object" == typeof Reflect &&
                  "function" == typeof Reflect.decorate
                )
                  o = Reflect.decorate(t, e, r, i);
                else
                  for (var a = t.length - 1; a >= 0; a--)
                    (n = t[a]) &&
                      (o = (s < 3 ? n(o) : s > 3 ? n(e, r, o) : n(e, r)) || o);
                return s > 3 && o && Object.defineProperty(e, r, o), o;
              }),
              (o = function (t, e) {
                return function (r, i) {
                  e(r, i, t);
                };
              }),
              (a = function (t, e) {
                if (
                  "object" == typeof Reflect &&
                  "function" == typeof Reflect.metadata
                )
                  return Reflect.metadata(t, e);
              }),
              (c = function (t, e, r, i) {
                function n(t) {
                  return t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      });
                }
                return new (r || (r = Promise))(function (r, s) {
                  function o(t) {
                    try {
                      c(i.next(t));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function a(t) {
                    try {
                      c(i.throw(t));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function c(t) {
                    t.done ? r(t.value) : n(t.value).then(o, a);
                  }
                  c((i = i.apply(t, e || [])).next());
                });
              }),
              (h = function (t, e) {
                var r,
                  i,
                  n,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & n[0]) throw n[1];
                      return n[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(t) {
                  return function (e) {
                    return c([t, e]);
                  };
                }
                function c(s) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; o; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & s[0]
                              ? i.return
                              : s[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, s[1])).done)
                      )
                        return n;
                      switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                        case 0:
                        case 1:
                          n = s;
                          break;
                        case 4:
                          return o.label++, { value: s[1], done: !1 };
                        case 5:
                          o.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(n = (n = o.trys).length > 0 && n[n.length - 1]) &&
                            (6 === s[0] || 2 === s[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!n || (s[1] > n[0] && s[1] < n[3]))
                          ) {
                            o.label = s[1];
                            break;
                          }
                          if (6 === s[0] && o.label < n[1]) {
                            (o.label = n[1]), (n = s);
                            break;
                          }
                          if (n && o.label < n[2]) {
                            (o.label = n[2]), o.ops.push(s);
                            break;
                          }
                          n[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      s = e.call(t, o);
                    } catch (a) {
                      (s = [6, a]), (i = 0);
                    } finally {
                      r = n = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                }
              }),
              (S = function (t, e, r, i) {
                void 0 === i && (i = r), (t[i] = e[r]);
              }),
              (u = function (t, e) {
                for (var r in t)
                  "default" !== r && !e.hasOwnProperty(r) && (e[r] = t[r]);
              }),
              (l = function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  r = e && t[e],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              }),
              (f = function (t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var i,
                  n,
                  s = r.call(t),
                  o = [];
                try {
                  for (; (void 0 === e || e-- > 0) && !(i = s.next()).done; )
                    o.push(i.value);
                } catch (a) {
                  n = { error: a };
                } finally {
                  try {
                    i && !i.done && (r = s.return) && r.call(s);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return o;
              }),
              (d = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t = t.concat(f(arguments[e]));
                return t;
              }),
              (p = function () {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                  t += arguments[e].length;
                var i = Array(t),
                  n = 0;
                for (e = 0; e < r; e++)
                  for (
                    var s = arguments[e], o = 0, a = s.length;
                    o < a;
                    o++, n++
                  )
                    i[n] = s[o];
                return i;
              }),
              (g = function (t) {
                return this instanceof g ? ((this.v = t), this) : new g(t);
              }),
              (m = function (t, e, r) {
                if (!Symbol.asyncIterator)
                  throw new TypeError("Symbol.asyncIterator is not defined.");
                var i,
                  n = r.apply(t, e || []),
                  s = [];
                return (
                  (i = {}),
                  o("next"),
                  o("throw"),
                  o("return"),
                  (i[Symbol.asyncIterator] = function () {
                    return this;
                  }),
                  i
                );
                function o(t) {
                  n[t] &&
                    (i[t] = function (e) {
                      return new Promise(function (r, i) {
                        s.push([t, e, r, i]) > 1 || a(t, e);
                      });
                    });
                }
                function a(t, e) {
                  try {
                    c(n[t](e));
                  } catch (r) {
                    l(s[0][3], r);
                  }
                }
                function c(t) {
                  t.value instanceof g
                    ? Promise.resolve(t.value.v).then(h, u)
                    : l(s[0][2], t);
                }
                function h(t) {
                  a("next", t);
                }
                function u(t) {
                  a("throw", t);
                }
                function l(t, e) {
                  t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
                }
              }),
              (y = function (t) {
                var e, r;
                return (
                  (e = {}),
                  i("next"),
                  i("throw", function (t) {
                    throw t;
                  }),
                  i("return"),
                  (e[Symbol.iterator] = function () {
                    return this;
                  }),
                  e
                );
                function i(i, n) {
                  e[i] = t[i]
                    ? function (e) {
                        return (r = !r)
                          ? { value: g(t[i](e)), done: "return" === i }
                          : n
                          ? n(e)
                          : e;
                      }
                    : n;
                }
              }),
              (v = function (t) {
                if (!Symbol.asyncIterator)
                  throw new TypeError("Symbol.asyncIterator is not defined.");
                var e,
                  r = t[Symbol.asyncIterator];
                return r
                  ? r.call(t)
                  : ((t = l(t)),
                    (e = {}),
                    i("next"),
                    i("throw"),
                    i("return"),
                    (e[Symbol.asyncIterator] = function () {
                      return this;
                    }),
                    e);
                function i(r) {
                  e[r] =
                    t[r] &&
                    function (e) {
                      return new Promise(function (i, s) {
                        n(i, s, (e = t[r](e)).done, e.value);
                      });
                    };
                }
                function n(t, e, r, i) {
                  Promise.resolve(i).then(function (e) {
                    t({ value: e, done: r });
                  }, e);
                }
              }),
              (w = function (t, e) {
                return (
                  Object.defineProperty
                    ? Object.defineProperty(t, "raw", { value: e })
                    : (t.raw = e),
                  t
                );
              }),
              (b = function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var r in t)
                    Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return (e.default = t), e;
              }),
              (_ = function (t) {
                return t && t.__esModule ? t : { default: t };
              }),
              (A = function (t, e) {
                if (!e.has(t))
                  throw new TypeError(
                    "attempted to get private field on non-instance"
                  );
                return e.get(t);
              }),
              (E = function (t, e, r) {
                if (!e.has(t))
                  throw new TypeError(
                    "attempted to set private field on non-instance"
                  );
                return e.set(t, r), r;
              }),
              t("__extends", e),
              t("__assign", r),
              t("__rest", i),
              t("__decorate", s),
              t("__param", o),
              t("__metadata", a),
              t("__awaiter", c),
              t("__generator", h),
              t("__exportStar", u),
              t("__createBinding", S),
              t("__values", l),
              t("__read", f),
              t("__spread", d),
              t("__spreadArrays", p),
              t("__await", g),
              t("__asyncGenerator", m),
              t("__asyncDelegator", y),
              t("__asyncValues", v),
              t("__makeTemplateObject", w),
              t("__importStar", b),
              t("__importDefault", _),
              t("__classPrivateFieldGet", A),
              t("__classPrivateFieldSet", E);
          })(N(M, N(t.exports)));
        })();
      })(ht);
      var ut,
        lt = ht.exports,
        ft = {},
        dt = {},
        pt = {},
        gt = {};
      var mt,
        yt = {},
        vt = {},
        wt = {};
      var bt,
        _t,
        At,
        Et,
        St = {};
      function It() {
        return (
          _t ||
            ((_t = 1),
            (function (t) {
              Object.defineProperty(t, "__esModule", { value: !0 });
              const e = lt;
              e.__exportStar(
                (mt ||
                  ((mt = 1),
                  Object.defineProperty(wt, "__esModule", { value: !0 }),
                  (wt.ONE_THOUSAND = wt.ONE_HUNDRED = void 0),
                  (wt.ONE_HUNDRED = 100),
                  (wt.ONE_THOUSAND = 1e3)),
                wt),
                t
              ),
                e.__exportStar(
                  (function () {
                    return (
                      bt ||
                        ((bt = 1),
                        (t = St),
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                        (t.ONE_YEAR =
                          t.FOUR_WEEKS =
                          t.THREE_WEEKS =
                          t.TWO_WEEKS =
                          t.ONE_WEEK =
                          t.THIRTY_DAYS =
                          t.SEVEN_DAYS =
                          t.FIVE_DAYS =
                          t.THREE_DAYS =
                          t.ONE_DAY =
                          t.TWENTY_FOUR_HOURS =
                          t.TWELVE_HOURS =
                          t.SIX_HOURS =
                          t.THREE_HOURS =
                          t.ONE_HOUR =
                          t.SIXTY_MINUTES =
                          t.THIRTY_MINUTES =
                          t.TEN_MINUTES =
                          t.FIVE_MINUTES =
                          t.ONE_MINUTE =
                          t.SIXTY_SECONDS =
                          t.THIRTY_SECONDS =
                          t.TEN_SECONDS =
                          t.FIVE_SECONDS =
                          t.ONE_SECOND =
                            void 0),
                        (t.ONE_SECOND = 1),
                        (t.FIVE_SECONDS = 5),
                        (t.TEN_SECONDS = 10),
                        (t.THIRTY_SECONDS = 30),
                        (t.SIXTY_SECONDS = 60),
                        (t.ONE_MINUTE = t.SIXTY_SECONDS),
                        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
                        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
                        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
                        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
                        (t.ONE_HOUR = t.SIXTY_MINUTES),
                        (t.THREE_HOURS = 3 * t.ONE_HOUR),
                        (t.SIX_HOURS = 6 * t.ONE_HOUR),
                        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
                        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
                        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
                        (t.THREE_DAYS = 3 * t.ONE_DAY),
                        (t.FIVE_DAYS = 5 * t.ONE_DAY),
                        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
                        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
                        (t.ONE_WEEK = t.SEVEN_DAYS),
                        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
                        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
                        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
                        (t.ONE_YEAR = 365 * t.ONE_DAY)),
                      St
                    );
                    var t;
                  })(),
                  t
                );
            })(vt)),
          vt
        );
      }
      function Mt() {
        return (
          Et ||
            ((Et = 1),
            (function (t) {
              Object.defineProperty(t, "__esModule", { value: !0 });
              const e = lt;
              e.__exportStar(
                (ut ||
                  ((ut = 1),
                  Object.defineProperty(gt, "__esModule", { value: !0 }),
                  (gt.delay = void 0),
                  (gt.delay = function (t) {
                    return new Promise((e) => {
                      setTimeout(() => {
                        e(!0);
                      }, t);
                    });
                  })),
                gt),
                t
              ),
                e.__exportStar(
                  (function () {
                    if (At) return yt;
                    (At = 1),
                      Object.defineProperty(yt, "__esModule", { value: !0 }),
                      (yt.fromMiliseconds = yt.toMiliseconds = void 0);
                    const t = It();
                    return (
                      (yt.toMiliseconds = function (e) {
                        return e * t.ONE_THOUSAND;
                      }),
                      (yt.fromMiliseconds = function (e) {
                        return Math.floor(e / t.ONE_THOUSAND);
                      }),
                      yt
                    );
                  })(),
                  t
                );
            })(pt)),
          pt
        );
      }
      var Nt,
        Ot = {};
      var xt,
        Pt,
        Rt = {},
        Tt = {};
      function Ct() {
        return (
          Pt ||
            ((Pt = 1),
            (t = Rt),
            Object.defineProperty(t, "__esModule", { value: !0 }),
            lt.__exportStar(
              (xt ||
                ((xt = 1),
                Object.defineProperty(Tt, "__esModule", { value: !0 }),
                (Tt.IWatch = void 0),
                (Tt.IWatch = class {})),
              Tt),
              t
            )),
          Rt
        );
        var t;
      }
      !(function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const e = lt;
        e.__exportStar(Mt(), t),
          e.__exportStar(
            (function () {
              if (Nt) return Ot;
              (Nt = 1),
                Object.defineProperty(Ot, "__esModule", { value: !0 }),
                (Ot.Watch = void 0);
              class t {
                constructor() {
                  this.timestamps = new Map();
                }
                start(t) {
                  if (this.timestamps.has(t))
                    throw new Error(
                      "Watch already started for label: ".concat(t)
                    );
                  this.timestamps.set(t, { started: Date.now() });
                }
                stop(t) {
                  const e = this.get(t);
                  if (typeof e.elapsed < "u")
                    throw new Error(
                      "Watch already stopped for label: ".concat(t)
                    );
                  const r = Date.now() - e.started;
                  this.timestamps.set(t, { started: e.started, elapsed: r });
                }
                get(t) {
                  const e = this.timestamps.get(t);
                  if (typeof e > "u")
                    throw new Error("No timestamp found for label: ".concat(t));
                  return e;
                }
                elapsed(t) {
                  const e = this.get(t);
                  return e.elapsed || Date.now() - e.started;
                }
              }
              return (Ot.Watch = t), (Ot.default = t), Ot;
            })(),
            t
          ),
          e.__exportStar(Ct(), t),
          e.__exportStar(It(), t);
      })(dt);
      var Ut = {},
        Lt = {};
      let kt = class {};
      const Dt = Object.freeze(
          Object.defineProperty(
            { __proto__: null, IEvents: kt },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Bt = (0, n.g)(Dt);
      var qt, jt;
      function zt() {
        return (
          jt ||
            ((jt = 1),
            (t = Ut),
            Object.defineProperty(t, "__esModule", { value: !0 }),
            lt.__exportStar(
              (function () {
                if (qt) return Lt;
                (qt = 1),
                  Object.defineProperty(Lt, "__esModule", { value: !0 }),
                  (Lt.IHeartBeat = void 0);
                const t = Bt;
                class e extends t.IEvents {
                  constructor(t) {
                    super();
                  }
                }
                return (Lt.IHeartBeat = e), Lt;
              })(),
              t
            )),
          Ut
        );
        var t;
      }
      var Ft,
        Kt,
        Ht,
        Vt = {},
        Gt = {};
      function Wt() {
        return (
          Kt ||
            ((Kt = 1),
            (t = Vt),
            Object.defineProperty(t, "__esModule", { value: !0 }),
            lt.__exportStar(
              (function () {
                if (Ft) return Gt;
                (Ft = 1),
                  Object.defineProperty(Gt, "__esModule", { value: !0 }),
                  (Gt.HEARTBEAT_EVENTS = Gt.HEARTBEAT_INTERVAL = void 0);
                const t = dt;
                return (
                  (Gt.HEARTBEAT_INTERVAL = t.FIVE_SECONDS),
                  (Gt.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
                  Gt
                );
              })(),
              t
            )),
          Vt
        );
        var t;
      }
      function Yt(t) {
        try {
          return JSON.stringify(t);
        } catch {
          return '"[Circular]"';
        }
      }
      !(function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const e = lt;
        e.__exportStar(
          (function () {
            if (Ht) return ft;
            (Ht = 1),
              Object.defineProperty(ft, "__esModule", { value: !0 }),
              (ft.HeartBeat = void 0);
            const t = lt,
              e = M,
              r = dt,
              i = zt(),
              n = Wt();
            class s extends i.IHeartBeat {
              constructor(t) {
                super(t),
                  (this.events = new e.EventEmitter()),
                  (this.interval = n.HEARTBEAT_INTERVAL),
                  (this.interval =
                    (null === t || void 0 === t ? void 0 : t.interval) ||
                    n.HEARTBEAT_INTERVAL);
              }
              static init(e) {
                return t.__awaiter(this, void 0, void 0, function* () {
                  const t = new s(e);
                  return yield t.init(), t;
                });
              }
              init() {
                return t.__awaiter(this, void 0, void 0, function* () {
                  yield this.initialize();
                });
              }
              stop() {
                clearInterval(this.intervalRef);
              }
              on(t, e) {
                this.events.on(t, e);
              }
              once(t, e) {
                this.events.once(t, e);
              }
              off(t, e) {
                this.events.off(t, e);
              }
              removeListener(t, e) {
                this.events.removeListener(t, e);
              }
              initialize() {
                return t.__awaiter(this, void 0, void 0, function* () {
                  this.intervalRef = setInterval(
                    () => this.pulse(),
                    r.toMiliseconds(this.interval)
                  );
                });
              }
              pulse() {
                this.events.emit(n.HEARTBEAT_EVENTS.pulse);
              }
            }
            return (ft.HeartBeat = s), ft;
          })(),
          t
        ),
          e.__exportStar(zt(), t),
          e.__exportStar(Wt(), t);
      })(ct);
      var Qt = function (t, e, r) {
        var i = (r && r.stringify) || Yt;
        if ("object" == typeof t && null !== t) {
          var n = e.length + 1;
          if (1 === n) return t;
          var s = new Array(n);
          s[0] = i(t);
          for (var o = 1; o < n; o++) s[o] = i(e[o]);
          return s.join(" ");
        }
        if ("string" != typeof t) return t;
        var a = e.length;
        if (0 === a) return t;
        for (
          var c = "", h = 0, u = -1, l = (t && t.length) || 0, f = 0;
          f < l;

        ) {
          if (37 === t.charCodeAt(f) && f + 1 < l) {
            switch (((u = u > -1 ? u : 0), t.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (h >= a || null == e[h]) break;
                u < f && (c += t.slice(u, f)),
                  (c += Number(e[h])),
                  (u = f + 2),
                  f++;
                break;
              case 105:
                if (h >= a || null == e[h]) break;
                u < f && (c += t.slice(u, f)),
                  (c += Math.floor(Number(e[h]))),
                  (u = f + 2),
                  f++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= a || void 0 === e[h]) break;
                u < f && (c += t.slice(u, f));
                var d = typeof e[h];
                if ("string" === d) {
                  (c += "'" + e[h] + "'"), (u = f + 2), f++;
                  break;
                }
                if ("function" === d) {
                  (c += e[h].name || "<anonymous>"), (u = f + 2), f++;
                  break;
                }
                (c += i(e[h])), (u = f + 2), f++;
                break;
              case 115:
                if (h >= a) break;
                u < f && (c += t.slice(u, f)),
                  (c += String(e[h])),
                  (u = f + 2),
                  f++;
                break;
              case 37:
                u < f && (c += t.slice(u, f)),
                  (c += "%"),
                  (u = f + 2),
                  f++,
                  h--;
            }
            ++h;
          }
          ++f;
        }
        return -1 === u ? t : (u < l && (c += t.slice(u)), c);
      };
      const Jt = Qt;
      var Xt = te;
      const Zt =
          (function () {
            function t(t) {
              return typeof t < "u" && t;
            }
            try {
              return (
                typeof globalThis < "u" ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch {
              return t(self) || t(window) || t(this) || {};
            }
          })().console || {},
        $t = {
          mapHttpRequest: oe,
          mapHttpResponse: oe,
          wrapRequestSerializer: ae,
          wrapResponseSerializer: ae,
          wrapErrorSerializer: ae,
          req: oe,
          res: oe,
          err: function (t) {
            const e = {
              type: t.constructor.name,
              msg: t.message,
              stack: t.stack,
            };
            for (const r in t) void 0 === e[r] && (e[r] = t[r]);
            return e;
          },
        };
      function te(t) {
        (t = t || {}).browser = t.browser || {};
        const e = t.browser.transmit;
        if (e && "function" != typeof e.send)
          throw Error("pino: transmit option must have a send function");
        const r = t.browser.write || Zt;
        t.browser.write && (t.browser.asObject = !0);
        const i = t.serializers || {},
          n = (function (t, e) {
            return Array.isArray(t)
              ? t.filter(function (t) {
                  return "!stdSerializers.err" !== t;
                })
              : !0 === t && Object.keys(e);
          })(t.browser.serialize, i);
        let s = t.browser.serialize;
        Array.isArray(t.browser.serialize) &&
          t.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (s = !1);
        "function" == typeof r &&
          (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === t.enabled && (t.level = "silent");
        const o = t.level || "info",
          a = Object.create(r);
        a.log || (a.log = ce),
          Object.defineProperty(a, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(a, "level", {
            get: function () {
              return this._level;
            },
            set: function (t) {
              if ("silent" !== t && !this.levels.values[t])
                throw Error("unknown level " + t);
              (this._level = t),
                ee(c, a, "error", "log"),
                ee(c, a, "fatal", "error"),
                ee(c, a, "warn", "error"),
                ee(c, a, "info", "log"),
                ee(c, a, "debug", "log"),
                ee(c, a, "trace", "log");
            },
          });
        const c = {
          transmit: e,
          serialize: n,
          asObject: t.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: se(t),
        };
        return (
          (a.levels = te.levels),
          (a.level = o),
          (a.setMaxListeners =
            a.getMaxListeners =
            a.emit =
            a.addListener =
            a.on =
            a.prependListener =
            a.once =
            a.prependOnceListener =
            a.removeListener =
            a.removeAllListeners =
            a.listeners =
            a.listenerCount =
            a.eventNames =
            a.write =
            a.flush =
              ce),
          (a.serializers = i),
          (a._serialize = n),
          (a._stdErrSerialize = s),
          (a.child = function (r, s) {
            if (!r) throw new Error("missing bindings for child Pino");
            (s = s || {}),
              n && r.serializers && (s.serializers = r.serializers);
            const o = s.serializers;
            if (n && o) {
              var a = Object.assign({}, i, o),
                c = !0 === t.browser.serialize ? Object.keys(a) : n;
              delete r.serializers, re([r], c, a, this._stdErrSerialize);
            }
            function h(t) {
              (this._childLevel = 1 + (0 | t._childLevel)),
                (this.error = ie(t, r, "error")),
                (this.fatal = ie(t, r, "fatal")),
                (this.warn = ie(t, r, "warn")),
                (this.info = ie(t, r, "info")),
                (this.debug = ie(t, r, "debug")),
                (this.trace = ie(t, r, "trace")),
                a && ((this.serializers = a), (this._serialize = c)),
                e && (this._logEvent = ne([].concat(t._logEvent.bindings, r)));
            }
            return (h.prototype = this), new h(this);
          }),
          e && (a._logEvent = ne()),
          a
        );
      }
      function ee(t, e, r, i) {
        const n = Object.getPrototypeOf(e);
        (e[r] =
          e.levelVal > e.levels.values[r]
            ? ce
            : n[r]
            ? n[r]
            : Zt[r] || Zt[i] || ce),
          (function (t, e, r) {
            (!t.transmit && e[r] === ce) ||
              (e[r] = (function (i) {
                return function () {
                  const n = t.timestamp(),
                    s = new Array(arguments.length),
                    o =
                      Object.getPrototypeOf &&
                      Object.getPrototypeOf(this) === Zt
                        ? Zt
                        : this;
                  for (var a = 0; a < s.length; a++) s[a] = arguments[a];
                  if (
                    (t.serialize &&
                      !t.asObject &&
                      re(
                        s,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    t.asObject
                      ? i.call(
                          o,
                          (function (t, e, r, i) {
                            t._serialize &&
                              re(
                                r,
                                t._serialize,
                                t.serializers,
                                t._stdErrSerialize
                              );
                            const n = r.slice();
                            let s = n[0];
                            const o = {};
                            i && (o.time = i), (o.level = te.levels.values[e]);
                            let a = 1 + (0 | t._childLevel);
                            if (
                              (a < 1 && (a = 1),
                              null !== s && "object" == typeof s)
                            ) {
                              for (; a-- && "object" == typeof n[0]; )
                                Object.assign(o, n.shift());
                              s = n.length ? Jt(n.shift(), n) : void 0;
                            } else
                              "string" == typeof s && (s = Jt(n.shift(), n));
                            return void 0 !== s && (o.msg = s), o;
                          })(this, r, s, n)
                        )
                      : i.apply(o, s),
                    t.transmit)
                  ) {
                    const i = t.transmit.level || e.level,
                      o = te.levels.values[i],
                      a = te.levels.values[r];
                    if (a < o) return;
                    !(function (t, e, r) {
                      const i = e.send,
                        n = e.ts,
                        s = e.methodLevel,
                        o = e.methodValue,
                        a = e.val,
                        c = t._logEvent.bindings;
                      re(
                        r,
                        t._serialize || Object.keys(t.serializers),
                        t.serializers,
                        void 0 === t._stdErrSerialize || t._stdErrSerialize
                      ),
                        (t._logEvent.ts = n),
                        (t._logEvent.messages = r.filter(function (t) {
                          return -1 === c.indexOf(t);
                        })),
                        (t._logEvent.level.label = s),
                        (t._logEvent.level.value = o),
                        i(s, t._logEvent, a),
                        (t._logEvent = ne(c));
                    })(
                      this,
                      {
                        ts: n,
                        methodLevel: r,
                        methodValue: a,
                        transmitLevel: i,
                        transmitValue:
                          te.levels.values[t.transmit.level || e.level],
                        send: t.transmit.send,
                        val: e.levelVal,
                      },
                      s
                    );
                  }
                };
              })(e[r]));
          })(t, e, r);
      }
      function re(t, e, r, i) {
        for (const n in t)
          if (i && t[n] instanceof Error) t[n] = te.stdSerializers.err(t[n]);
          else if ("object" == typeof t[n] && !Array.isArray(t[n]))
            for (const i in t[n])
              e && e.indexOf(i) > -1 && i in r && (t[n][i] = r[i](t[n][i]));
      }
      function ie(t, e, r) {
        return function () {
          const i = new Array(1 + arguments.length);
          i[0] = e;
          for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
          return t[r].apply(this, i);
        };
      }
      function ne(t) {
        return {
          ts: 0,
          messages: [],
          bindings: t || [],
          level: { label: "", value: 0 },
        };
      }
      function se(t) {
        return "function" == typeof t.timestamp
          ? t.timestamp
          : !1 === t.timestamp
          ? he
          : ue;
      }
      function oe() {
        return {};
      }
      function ae(t) {
        return t;
      }
      function ce() {}
      function he() {
        return !1;
      }
      function ue() {
        return Date.now();
      }
      (te.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (te.stdSerializers = $t),
        (te.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: he,
            epochTime: ue,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
      const le = (0, n.d)(Xt),
        fe = "info",
        de = "custom_context",
        pe = 1024e3;
      class ge {
        constructor(t) {
          (this.nodeValue = t),
            (this.sizeInBytes = new TextEncoder().encode(
              this.nodeValue
            ).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      let me = class {
          constructor(t) {
            (this.head = null),
              (this.tail = null),
              (this.lengthInNodes = 0),
              (this.maxSizeInBytes = t),
              (this.sizeInBytes = 0);
          }
          append(t) {
            const e = new ge(t);
            if (e.size > this.maxSizeInBytes)
              throw new Error(
                "[LinkedList] Value too big to insert into list: "
                  .concat(t, " with size ")
                  .concat(e.size)
              );
            for (; this.size + e.size > this.maxSizeInBytes; ) this.shift();
            this.head
              ? (this.tail && (this.tail.next = e), (this.tail = e))
              : ((this.head = e), (this.tail = e)),
              this.lengthInNodes++,
              (this.sizeInBytes += e.size);
          }
          shift() {
            if (!this.head) return;
            const t = this.head;
            (this.head = this.head.next),
              this.head || (this.tail = null),
              this.lengthInNodes--,
              (this.sizeInBytes -= t.size);
          }
          toArray() {
            const t = [];
            let e = this.head;
            for (; null !== e; ) t.push(e.value), (e = e.next);
            return t;
          }
          get length() {
            return this.lengthInNodes;
          }
          get size() {
            return this.sizeInBytes;
          }
          toOrderedArray() {
            return Array.from(this);
          }
          [Symbol.iterator]() {
            let t = this.head;
            return {
              next: () => {
                if (!t) return { done: !0, value: null };
                const e = t.value;
                return (t = t.next), { done: !1, value: e };
              },
            };
          }
        },
        ye = class {
          constructor(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : pe;
            (this.level = null !== t && void 0 !== t ? t : "error"),
              (this.levelValue = Xt.levels.values[this.level]),
              (this.MAX_LOG_SIZE_IN_BYTES = e),
              (this.logs = new me(this.MAX_LOG_SIZE_IN_BYTES));
          }
          forwardToConsole(t, e) {
            e === Xt.levels.values.error
              ? console.error(t)
              : e === Xt.levels.values.warn
              ? console.warn(t)
              : e === Xt.levels.values.debug
              ? console.debug(t)
              : e === Xt.levels.values.trace
              ? console.trace(t)
              : console.log(t);
          }
          appendToLogs(t) {
            this.logs.append(
              $({ timestamp: new Date().toISOString(), log: t })
            );
            const e = "string" == typeof t ? JSON.parse(t).level : t.level;
            e >= this.levelValue && this.forwardToConsole(t, e);
          }
          getLogs() {
            return this.logs;
          }
          clearLogs() {
            this.logs = new me(this.MAX_LOG_SIZE_IN_BYTES);
          }
          getLogArray() {
            return Array.from(this.logs);
          }
          logsToBlob(t) {
            const e = this.getLogArray();
            return (
              e.push($({ extraMetadata: t })),
              new Blob(e, { type: "application/json" })
            );
          }
        },
        ve = class {
          constructor(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : pe;
            this.baseChunkLogger = new ye(t, e);
          }
          write(t) {
            this.baseChunkLogger.appendToLogs(t);
          }
          getLogs() {
            return this.baseChunkLogger.getLogs();
          }
          clearLogs() {
            this.baseChunkLogger.clearLogs();
          }
          getLogArray() {
            return this.baseChunkLogger.getLogArray();
          }
          logsToBlob(t) {
            return this.baseChunkLogger.logsToBlob(t);
          }
          downloadLogsBlobInBrowser(t) {
            const e = URL.createObjectURL(this.logsToBlob(t)),
              r = document.createElement("a");
            (r.href = e),
              (r.download = "walletconnect-logs-".concat(
                new Date().toISOString(),
                ".txt"
              )),
              document.body.appendChild(r),
              r.click(),
              document.body.removeChild(r),
              URL.revokeObjectURL(e);
          }
        };
      class we {
        constructor(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe;
          this.baseChunkLogger = new ye(t, e);
        }
        write(t) {
          this.baseChunkLogger.appendToLogs(t);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(t) {
          return this.baseChunkLogger.logsToBlob(t);
        }
      }
      var be = Object.defineProperty,
        _e = Object.defineProperties,
        Ae = Object.getOwnPropertyDescriptors,
        Ee = Object.getOwnPropertySymbols,
        Se = Object.prototype.hasOwnProperty,
        Ie = Object.prototype.propertyIsEnumerable,
        Me = (t, e, r) =>
          e in t
            ? be(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Ne = (t, e) => {
          for (var r in e || (e = {})) Se.call(e, r) && Me(t, r, e[r]);
          if (Ee) for (var r of Ee(e)) Ie.call(e, r) && Me(t, r, e[r]);
          return t;
        },
        Oe = (t, e) => _e(t, Ae(e));
      function xe(t) {
        return Oe(Ne({}, t), {
          level: (null === t || void 0 === t ? void 0 : t.level) || fe,
        });
      }
      function Pe(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de,
          r = "";
        return (
          (r =
            typeof t.bindings > "u"
              ? (function (t) {
                  return (
                    t[
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : de
                    ] || ""
                  );
                })(t, e)
              : t.bindings().context || ""),
          r
        );
      }
      function Re(t, e) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de;
        const i = (function (t, e) {
          const r = Pe(
            t,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de
          );
          return r.trim() ? "".concat(r, "/").concat(e) : e;
        })(t, e, r);
        return (function (t, e) {
          return (
            (t[
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : de
            ] = e),
            t
          );
        })(t.child({ context: i }), i, r);
      }
      function Te(t) {
        return typeof t.loggerOverride < "u" &&
          "string" != typeof t.loggerOverride
          ? { logger: t.loggerOverride, chunkLoggerController: null }
          : typeof window < "u"
          ? (function (t) {
              var e, r;
              const i = new ve(
                null == (e = t.opts) ? void 0 : e.level,
                t.maxSizeInBytes
              );
              return {
                logger: le(
                  Oe(Ne({}, t.opts), {
                    level: "trace",
                    browser: Oe(
                      Ne({}, null == (r = t.opts) ? void 0 : r.browser),
                      { write: (t) => i.write(t) }
                    ),
                  })
                ),
                chunkLoggerController: i,
              };
            })(t)
          : (function (t) {
              var e;
              const r = new we(
                null == (e = t.opts) ? void 0 : e.level,
                t.maxSizeInBytes
              );
              return {
                logger: le(Oe(Ne({}, t.opts), { level: "trace" }), r),
                chunkLoggerController: r,
              };
            })(t);
      }
      class Ce extends kt {
        constructor(t) {
          super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
        }
      }
      let Ue = class extends kt {
          constructor(t, e) {
            super(),
              (this.core = t),
              (this.logger = e),
              (this.records = new Map());
          }
        },
        Le = class {
          constructor(t, e) {
            (this.logger = t), (this.core = e);
          }
        };
      class ke extends kt {
        constructor(t, e) {
          super(), (this.relayer = t), (this.logger = e);
        }
      }
      class De extends kt {
        constructor(t) {
          super();
        }
      }
      class Be {
        constructor(t, e, r, i) {
          (this.core = t), (this.logger = e), (this.name = r);
        }
      }
      class qe extends kt {
        constructor(t, e) {
          super(), (this.relayer = t), (this.logger = e);
        }
      }
      class je extends kt {
        constructor(t, e) {
          super(), (this.core = t), (this.logger = e);
        }
      }
      let ze = class {
          constructor(t, e) {
            (this.projectId = t), (this.logger = e);
          }
        },
        Fe = class {
          constructor(t, e) {
            (this.projectId = t), (this.logger = e);
          }
        },
        Ke = class {
          constructor(t) {
            (this.opts = t), (this.protocol = "wc"), (this.version = 2);
          }
        },
        He = class {
          constructor(t) {
            this.client = t;
          }
        };
      var Ve = {},
        Ge = {},
        We = {},
        Ye = {};
      Object.defineProperty(Ye, "__esModule", { value: !0 }),
        (Ye.BrowserRandomSource = void 0);
      Ye.BrowserRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
          t &&
            void 0 !== t.getRandomValues &&
            ((this._crypto = t),
            (this.isAvailable = !0),
            (this.isInstantiated = !0));
        }
        randomBytes(t) {
          if (!this.isAvailable || !this._crypto)
            throw new Error("Browser random byte generator is not available.");
          const e = new Uint8Array(t);
          for (let r = 0; r < e.length; r += 65536)
            this._crypto.getRandomValues(
              e.subarray(r, r + Math.min(e.length - r, 65536))
            );
          return e;
        }
      };
      var Qe = {},
        Je = {};
      Object.defineProperty(Je, "__esModule", { value: !0 }),
        (Je.wipe = function (t) {
          for (var e = 0; e < t.length; e++) t[e] = 0;
          return t;
        });
      const Xe = Object.freeze(
          Object.defineProperty(
            { __proto__: null, default: {} },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Ze = (0, n.g)(Xe);
      Object.defineProperty(Qe, "__esModule", { value: !0 }),
        (Qe.NodeRandomSource = void 0);
      const $e = Je;
      (Qe.NodeRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          {
            const t = Ze;
            t &&
              t.randomBytes &&
              ((this._crypto = t),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
        }
        randomBytes(t) {
          if (!this.isAvailable || !this._crypto)
            throw new Error("Node.js random byte generator is not available.");
          let e = this._crypto.randomBytes(t);
          if (e.length !== t)
            throw new Error("NodeRandomSource: got fewer bytes than requested");
          const r = new Uint8Array(t);
          for (let i = 0; i < r.length; i++) r[i] = e[i];
          return (0, $e.wipe)(e), r;
        }
      }),
        Object.defineProperty(We, "__esModule", { value: !0 }),
        (We.SystemRandomSource = void 0);
      const tr = Ye,
        er = Qe;
      We.SystemRandomSource = class {
        constructor() {
          return (
            (this.isAvailable = !1),
            (this.name = ""),
            (this._source = new tr.BrowserRandomSource()),
            this._source.isAvailable
              ? ((this.isAvailable = !0), void (this.name = "Browser"))
              : ((this._source = new er.NodeRandomSource()),
                this._source.isAvailable
                  ? ((this.isAvailable = !0), void (this.name = "Node"))
                  : void 0)
          );
        }
        randomBytes(t) {
          if (!this.isAvailable)
            throw new Error("System random byte generator is not available.");
          return this._source.randomBytes(t);
        }
      };
      var rr,
        ir = {},
        nr = {};
      (rr = nr),
        Object.defineProperty(rr, "__esModule", { value: !0 }),
        (rr.mul =
          Math.imul ||
          function (t, e) {
            var r = 65535 & t,
              i = 65535 & e;
            return (
              (r * i +
                (((((t >>> 16) & 65535) * i + r * ((e >>> 16) & 65535)) <<
                  16) >>>
                  0)) |
              0
            );
          }),
        (rr.add = function (t, e) {
          return (t + e) | 0;
        }),
        (rr.sub = function (t, e) {
          return (t - e) | 0;
        }),
        (rr.rotl = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (rr.rotr = function (t, e) {
          return (t << (32 - e)) | (t >>> e);
        }),
        (rr.isInteger =
          Number.isInteger ||
          function (t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
          }),
        (rr.MAX_SAFE_INTEGER = 9007199254740991),
        (rr.isSafeInteger = function (t) {
          return (
            rr.isInteger(t) &&
            t >= -rr.MAX_SAFE_INTEGER &&
            t <= rr.MAX_SAFE_INTEGER
          );
        }),
        Object.defineProperty(ir, "__esModule", { value: !0 });
      var sr = nr;
      function or(t, e, r) {
        return (
          void 0 === e && (e = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (e[r + 0] = t >>> 8),
          (e[r + 1] = t >>> 0),
          e
        );
      }
      function ar(t, e, r) {
        return (
          void 0 === e && (e = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (e[r + 0] = t >>> 0),
          (e[r + 1] = t >>> 8),
          e
        );
      }
      function cr(t, e) {
        return (
          void 0 === e && (e = 0),
          (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]
        );
      }
      function hr(t, e) {
        return (
          void 0 === e && (e = 0),
          ((t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]) >>> 0
        );
      }
      function ur(t, e) {
        return (
          void 0 === e && (e = 0),
          (t[e + 3] << 24) | (t[e + 2] << 16) | (t[e + 1] << 8) | t[e]
        );
      }
      function lr(t, e) {
        return (
          void 0 === e && (e = 0),
          ((t[e + 3] << 24) | (t[e + 2] << 16) | (t[e + 1] << 8) | t[e]) >>> 0
        );
      }
      function fr(t, e, r) {
        return (
          void 0 === e && (e = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (e[r + 0] = t >>> 24),
          (e[r + 1] = t >>> 16),
          (e[r + 2] = t >>> 8),
          (e[r + 3] = t >>> 0),
          e
        );
      }
      function dr(t, e, r) {
        return (
          void 0 === e && (e = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (e[r + 0] = t >>> 0),
          (e[r + 1] = t >>> 8),
          (e[r + 2] = t >>> 16),
          (e[r + 3] = t >>> 24),
          e
        );
      }
      function pr(t, e, r) {
        return (
          void 0 === e && (e = new Uint8Array(8)),
          void 0 === r && (r = 0),
          fr((t / 4294967296) >>> 0, e, r),
          fr(t >>> 0, e, r + 4),
          e
        );
      }
      function gr(t, e, r) {
        return (
          void 0 === e && (e = new Uint8Array(8)),
          void 0 === r && (r = 0),
          dr(t >>> 0, e, r),
          dr((t / 4294967296) >>> 0, e, r + 4),
          e
        );
      }
      (ir.readInt16BE = function (t, e) {
        return (
          void 0 === e && (e = 0), (((t[e + 0] << 8) | t[e + 1]) << 16) >> 16
        );
      }),
        (ir.readUint16BE = function (t, e) {
          return void 0 === e && (e = 0), ((t[e + 0] << 8) | t[e + 1]) >>> 0;
        }),
        (ir.readInt16LE = function (t, e) {
          return (
            void 0 === e && (e = 0), (((t[e + 1] << 8) | t[e]) << 16) >> 16
          );
        }),
        (ir.readUint16LE = function (t, e) {
          return void 0 === e && (e = 0), ((t[e + 1] << 8) | t[e]) >>> 0;
        }),
        (ir.writeUint16BE = or),
        (ir.writeInt16BE = or),
        (ir.writeUint16LE = ar),
        (ir.writeInt16LE = ar),
        (ir.readInt32BE = cr),
        (ir.readUint32BE = hr),
        (ir.readInt32LE = ur),
        (ir.readUint32LE = lr),
        (ir.writeUint32BE = fr),
        (ir.writeInt32BE = fr),
        (ir.writeUint32LE = dr),
        (ir.writeInt32LE = dr),
        (ir.readInt64BE = function (t, e) {
          void 0 === e && (e = 0);
          var r = cr(t, e),
            i = cr(t, e + 4);
          return 4294967296 * r + i - 4294967296 * (i >> 31);
        }),
        (ir.readUint64BE = function (t, e) {
          return void 0 === e && (e = 0), 4294967296 * hr(t, e) + hr(t, e + 4);
        }),
        (ir.readInt64LE = function (t, e) {
          void 0 === e && (e = 0);
          var r = ur(t, e);
          return 4294967296 * ur(t, e + 4) + r - 4294967296 * (r >> 31);
        }),
        (ir.readUint64LE = function (t, e) {
          void 0 === e && (e = 0);
          var r = lr(t, e);
          return 4294967296 * lr(t, e + 4) + r;
        }),
        (ir.writeUint64BE = pr),
        (ir.writeInt64BE = pr),
        (ir.writeUint64LE = gr),
        (ir.writeInt64LE = gr),
        (ir.readUintBE = function (t, e, r) {
          if ((void 0 === r && (r = 0), t % 8 !== 0))
            throw new Error(
              "readUintBE supports only bitLengths divisible by 8"
            );
          if (t / 8 > e.length - r)
            throw new Error(
              "readUintBE: array is too short for the given bitLength"
            );
          for (var i = 0, n = 1, s = t / 8 + r - 1; s >= r; s--)
            (i += e[s] * n), (n *= 256);
          return i;
        }),
        (ir.readUintLE = function (t, e, r) {
          if ((void 0 === r && (r = 0), t % 8 !== 0))
            throw new Error(
              "readUintLE supports only bitLengths divisible by 8"
            );
          if (t / 8 > e.length - r)
            throw new Error(
              "readUintLE: array is too short for the given bitLength"
            );
          for (var i = 0, n = 1, s = r; s < r + t / 8; s++)
            (i += e[s] * n), (n *= 256);
          return i;
        }),
        (ir.writeUintBE = function (t, e, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(t / 8)),
            void 0 === i && (i = 0),
            t % 8 !== 0)
          )
            throw new Error(
              "writeUintBE supports only bitLengths divisible by 8"
            );
          if (!sr.isSafeInteger(e))
            throw new Error("writeUintBE value must be an integer");
          for (var n = 1, s = t / 8 + i - 1; s >= i; s--)
            (r[s] = (e / n) & 255), (n *= 256);
          return r;
        }),
        (ir.writeUintLE = function (t, e, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(t / 8)),
            void 0 === i && (i = 0),
            t % 8 !== 0)
          )
            throw new Error(
              "writeUintLE supports only bitLengths divisible by 8"
            );
          if (!sr.isSafeInteger(e))
            throw new Error("writeUintLE value must be an integer");
          for (var n = 1, s = i; s < i + t / 8; s++)
            (r[s] = (e / n) & 255), (n *= 256);
          return r;
        }),
        (ir.readFloat32BE = function (t, e) {
          return (
            void 0 === e && (e = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e)
          );
        }),
        (ir.readFloat32LE = function (t, e) {
          return (
            void 0 === e && (e = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e, !0)
          );
        }),
        (ir.readFloat64BE = function (t, e) {
          return (
            void 0 === e && (e = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e)
          );
        }),
        (ir.readFloat64LE = function (t, e) {
          return (
            void 0 === e && (e = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e, !0)
          );
        }),
        (ir.writeFloat32BE = function (t, e, r) {
          return (
            void 0 === e && (e = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t),
            e
          );
        }),
        (ir.writeFloat32LE = function (t, e, r) {
          return (
            void 0 === e && (e = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(
              r,
              t,
              !0
            ),
            e
          );
        }),
        (ir.writeFloat64BE = function (t, e, r) {
          return (
            void 0 === e && (e = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t),
            e
          );
        }),
        (ir.writeFloat64LE = function (t, e, r) {
          return (
            void 0 === e && (e = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(
              r,
              t,
              !0
            ),
            e
          );
        }),
        (function (t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.randomStringForEntropy =
              t.randomString =
              t.randomUint32 =
              t.randomBytes =
              t.defaultRandomSource =
                void 0);
          const e = We,
            r = ir,
            i = Je;
          function n(e) {
            return (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : t.defaultRandomSource
            ).randomBytes(e);
          }
          (t.defaultRandomSource = new e.SystemRandomSource()),
            (t.randomBytes = n),
            (t.randomUint32 = function () {
              const e = n(
                  4,
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : t.defaultRandomSource
                ),
                s = (0, r.readUint32LE)(e);
              return (0, i.wipe)(e), s;
            });
          const s =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          function o(e) {
            let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : t.defaultRandomSource;
            if (r.length < 2)
              throw new Error("randomString charset is too short");
            if (r.length > 256)
              throw new Error("randomString charset is too long");
            let a = "";
            const c = r.length,
              h = 256 - (256 % c);
            for (; e > 0; ) {
              const t = n(Math.ceil((256 * e) / h), o);
              for (let i = 0; i < t.length && e > 0; i++) {
                const n = t[i];
                n < h && ((a += r.charAt(n % c)), e--);
              }
              (0, i.wipe)(t);
            }
            return a;
          }
          (t.randomString = o),
            (t.randomStringForEntropy = function (e) {
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : t.defaultRandomSource;
              return o(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i);
            });
        })(Ge);
      var mr = {};
      !(function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var e = ir,
          r = Je;
        (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
        var i = (function () {
          function i() {
            (this.digestLength = t.DIGEST_LENGTH),
              (this.blockSize = t.BLOCK_SIZE),
              (this._stateHi = new Int32Array(8)),
              (this._stateLo = new Int32Array(8)),
              (this._tempHi = new Int32Array(16)),
              (this._tempLo = new Int32Array(16)),
              (this._buffer = new Uint8Array(256)),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this.reset();
          }
          return (
            (i.prototype._initState = function () {
              (this._stateHi[0] = 1779033703),
                (this._stateHi[1] = 3144134277),
                (this._stateHi[2] = 1013904242),
                (this._stateHi[3] = 2773480762),
                (this._stateHi[4] = 1359893119),
                (this._stateHi[5] = 2600822924),
                (this._stateHi[6] = 528734635),
                (this._stateHi[7] = 1541459225),
                (this._stateLo[0] = 4089235720),
                (this._stateLo[1] = 2227873595),
                (this._stateLo[2] = 4271175723),
                (this._stateLo[3] = 1595750129),
                (this._stateLo[4] = 2917565137),
                (this._stateLo[5] = 725511199),
                (this._stateLo[6] = 4215389547),
                (this._stateLo[7] = 327033209);
            }),
            (i.prototype.reset = function () {
              return (
                this._initState(),
                (this._bufferLength = 0),
                (this._bytesHashed = 0),
                (this._finished = !1),
                this
              );
            }),
            (i.prototype.clean = function () {
              r.wipe(this._buffer),
                r.wipe(this._tempHi),
                r.wipe(this._tempLo),
                this.reset();
            }),
            (i.prototype.update = function (e, r) {
              if ((void 0 === r && (r = e.length), this._finished))
                throw new Error(
                  "SHA512: can't update because hash was finished."
                );
              var i = 0;
              if (((this._bytesHashed += r), this._bufferLength > 0)) {
                for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                  (this._buffer[this._bufferLength++] = e[i++]), r--;
                this._bufferLength === this.blockSize &&
                  (s(
                    this._tempHi,
                    this._tempLo,
                    this._stateHi,
                    this._stateLo,
                    this._buffer,
                    0,
                    this.blockSize
                  ),
                  (this._bufferLength = 0));
              }
              for (
                r >= this.blockSize &&
                ((i = s(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  e,
                  i,
                  r
                )),
                (r %= this.blockSize));
                r > 0;

              )
                (this._buffer[this._bufferLength++] = e[i++]), r--;
              return this;
            }),
            (i.prototype.finish = function (t) {
              if (!this._finished) {
                var r = this._bytesHashed,
                  i = this._bufferLength,
                  n = (r / 536870912) | 0,
                  o = r << 3,
                  a = r % 128 < 112 ? 128 : 256;
                this._buffer[i] = 128;
                for (var c = i + 1; c < a - 8; c++) this._buffer[c] = 0;
                e.writeUint32BE(n, this._buffer, a - 8),
                  e.writeUint32BE(o, this._buffer, a - 4),
                  s(
                    this._tempHi,
                    this._tempLo,
                    this._stateHi,
                    this._stateLo,
                    this._buffer,
                    0,
                    a
                  ),
                  (this._finished = !0);
              }
              for (c = 0; c < this.digestLength / 8; c++)
                e.writeUint32BE(this._stateHi[c], t, 8 * c),
                  e.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
              return this;
            }),
            (i.prototype.digest = function () {
              var t = new Uint8Array(this.digestLength);
              return this.finish(t), t;
            }),
            (i.prototype.saveState = function () {
              if (this._finished)
                throw new Error("SHA256: cannot save finished state");
              return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer:
                  this._bufferLength > 0
                    ? new Uint8Array(this._buffer)
                    : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed,
              };
            }),
            (i.prototype.restoreState = function (t) {
              return (
                this._stateHi.set(t.stateHi),
                this._stateLo.set(t.stateLo),
                (this._bufferLength = t.bufferLength),
                t.buffer && this._buffer.set(t.buffer),
                (this._bytesHashed = t.bytesHashed),
                (this._finished = !1),
                this
              );
            }),
            (i.prototype.cleanSavedState = function (t) {
              r.wipe(t.stateHi),
                r.wipe(t.stateLo),
                t.buffer && r.wipe(t.buffer),
                (t.bufferLength = 0),
                (t.bytesHashed = 0);
            }),
            i
          );
        })();
        t.SHA512 = i;
        var n = new Int32Array([
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ]);
        function s(t, r, i, s, o, a, c) {
          for (
            var h,
              u,
              l,
              f,
              d,
              p,
              g,
              m,
              y = i[0],
              v = i[1],
              w = i[2],
              b = i[3],
              _ = i[4],
              A = i[5],
              E = i[6],
              S = i[7],
              I = s[0],
              M = s[1],
              N = s[2],
              O = s[3],
              x = s[4],
              P = s[5],
              R = s[6],
              T = s[7];
            c >= 128;

          ) {
            for (var C = 0; C < 16; C++) {
              var U = 8 * C + a;
              (t[C] = e.readUint32BE(o, U)), (r[C] = e.readUint32BE(o, U + 4));
            }
            for (C = 0; C < 80; C++) {
              var L,
                k,
                D = y,
                B = v,
                q = w,
                j = b,
                z = _,
                F = A,
                K = E,
                H = I,
                V = M,
                G = N,
                W = O,
                Y = x,
                Q = P,
                J = R;
              if (
                ((d = 65535 & (u = T)),
                (p = u >>> 16),
                (g = 65535 & (h = S)),
                (m = h >>> 16),
                (d +=
                  65535 &
                  (u =
                    ((x >>> 14) | (_ << 18)) ^
                    ((x >>> 18) | (_ << 14)) ^
                    ((_ >>> 9) | (x << 23)))),
                (p += u >>> 16),
                (g +=
                  65535 &
                  (h =
                    ((_ >>> 14) | (x << 18)) ^
                    ((_ >>> 18) | (x << 14)) ^
                    ((x >>> 9) | (_ << 23)))),
                (m += h >>> 16),
                (d += 65535 & (u = (x & P) ^ (~x & R))),
                (p += u >>> 16),
                (g += 65535 & (h = (_ & A) ^ (~_ & E))),
                (m += h >>> 16),
                (h = n[2 * C]),
                (d += 65535 & (u = n[2 * C + 1])),
                (p += u >>> 16),
                (g += 65535 & h),
                (m += h >>> 16),
                (h = t[C % 16]),
                (p += (u = r[C % 16]) >>> 16),
                (g += 65535 & h),
                (m += h >>> 16),
                (g += (p += (d += 65535 & u) >>> 16) >>> 16),
                (d = 65535 & (u = f = (65535 & d) | (p << 16))),
                (p = u >>> 16),
                (g = 65535 & (h = l = (65535 & g) | ((m += g >>> 16) << 16))),
                (m = h >>> 16),
                (d +=
                  65535 &
                  (u =
                    ((I >>> 28) | (y << 4)) ^
                    ((y >>> 2) | (I << 30)) ^
                    ((y >>> 7) | (I << 25)))),
                (p += u >>> 16),
                (g +=
                  65535 &
                  (h =
                    ((y >>> 28) | (I << 4)) ^
                    ((I >>> 2) | (y << 30)) ^
                    ((I >>> 7) | (y << 25)))),
                (m += h >>> 16),
                (p += (u = (I & M) ^ (I & N) ^ (M & N)) >>> 16),
                (g += 65535 & (h = (y & v) ^ (y & w) ^ (v & w))),
                (m += h >>> 16),
                (L =
                  (65535 & (g += (p += (d += 65535 & u) >>> 16) >>> 16)) |
                  ((m += g >>> 16) << 16)),
                (k = (65535 & d) | (p << 16)),
                (d = 65535 & (u = W)),
                (p = u >>> 16),
                (g = 65535 & (h = j)),
                (m = h >>> 16),
                (p += (u = f) >>> 16),
                (g += 65535 & (h = l)),
                (m += h >>> 16),
                (v = D),
                (w = B),
                (b = q),
                (_ = j =
                  (65535 & (g += (p += (d += 65535 & u) >>> 16) >>> 16)) |
                  ((m += g >>> 16) << 16)),
                (A = z),
                (E = F),
                (S = K),
                (y = L),
                (M = H),
                (N = V),
                (O = G),
                (x = W = (65535 & d) | (p << 16)),
                (P = Y),
                (R = Q),
                (T = J),
                (I = k),
                C % 16 === 15)
              )
                for (U = 0; U < 16; U++)
                  (h = t[U]),
                    (d = 65535 & (u = r[U])),
                    (p = u >>> 16),
                    (g = 65535 & h),
                    (m = h >>> 16),
                    (h = t[(U + 9) % 16]),
                    (d += 65535 & (u = r[(U + 9) % 16])),
                    (p += u >>> 16),
                    (g += 65535 & h),
                    (m += h >>> 16),
                    (l = t[(U + 1) % 16]),
                    (d +=
                      65535 &
                      (u =
                        (((f = r[(U + 1) % 16]) >>> 1) | (l << 31)) ^
                        ((f >>> 8) | (l << 24)) ^
                        ((f >>> 7) | (l << 25)))),
                    (p += u >>> 16),
                    (g +=
                      65535 &
                      (h =
                        ((l >>> 1) | (f << 31)) ^
                        ((l >>> 8) | (f << 24)) ^
                        (l >>> 7))),
                    (m += h >>> 16),
                    (l = t[(U + 14) % 16]),
                    (p +=
                      (u =
                        (((f = r[(U + 14) % 16]) >>> 19) | (l << 13)) ^
                        ((l >>> 29) | (f << 3)) ^
                        ((f >>> 6) | (l << 26))) >>> 16),
                    (g +=
                      65535 &
                      (h =
                        ((l >>> 19) | (f << 13)) ^
                        ((f >>> 29) | (l << 3)) ^
                        (l >>> 6))),
                    (m += h >>> 16),
                    (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
                    (t[U] = (65535 & g) | (m << 16)),
                    (r[U] = (65535 & d) | (p << 16));
            }
            (d = 65535 & (u = I)),
              (p = u >>> 16),
              (g = 65535 & (h = y)),
              (m = h >>> 16),
              (h = i[0]),
              (p += (u = s[0]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[0] = y = (65535 & g) | (m << 16)),
              (s[0] = I = (65535 & d) | (p << 16)),
              (d = 65535 & (u = M)),
              (p = u >>> 16),
              (g = 65535 & (h = v)),
              (m = h >>> 16),
              (h = i[1]),
              (p += (u = s[1]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[1] = v = (65535 & g) | (m << 16)),
              (s[1] = M = (65535 & d) | (p << 16)),
              (d = 65535 & (u = N)),
              (p = u >>> 16),
              (g = 65535 & (h = w)),
              (m = h >>> 16),
              (h = i[2]),
              (p += (u = s[2]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[2] = w = (65535 & g) | (m << 16)),
              (s[2] = N = (65535 & d) | (p << 16)),
              (d = 65535 & (u = O)),
              (p = u >>> 16),
              (g = 65535 & (h = b)),
              (m = h >>> 16),
              (h = i[3]),
              (p += (u = s[3]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[3] = b = (65535 & g) | (m << 16)),
              (s[3] = O = (65535 & d) | (p << 16)),
              (d = 65535 & (u = x)),
              (p = u >>> 16),
              (g = 65535 & (h = _)),
              (m = h >>> 16),
              (h = i[4]),
              (p += (u = s[4]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[4] = _ = (65535 & g) | (m << 16)),
              (s[4] = x = (65535 & d) | (p << 16)),
              (d = 65535 & (u = P)),
              (p = u >>> 16),
              (g = 65535 & (h = A)),
              (m = h >>> 16),
              (h = i[5]),
              (p += (u = s[5]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[5] = A = (65535 & g) | (m << 16)),
              (s[5] = P = (65535 & d) | (p << 16)),
              (d = 65535 & (u = R)),
              (p = u >>> 16),
              (g = 65535 & (h = E)),
              (m = h >>> 16),
              (h = i[6]),
              (p += (u = s[6]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[6] = E = (65535 & g) | (m << 16)),
              (s[6] = R = (65535 & d) | (p << 16)),
              (d = 65535 & (u = T)),
              (p = u >>> 16),
              (g = 65535 & (h = S)),
              (m = h >>> 16),
              (h = i[7]),
              (p += (u = s[7]) >>> 16),
              (g += 65535 & h),
              (m += h >>> 16),
              (m += (g += (p += (d += 65535 & u) >>> 16) >>> 16) >>> 16),
              (i[7] = S = (65535 & g) | (m << 16)),
              (s[7] = T = (65535 & d) | (p << 16)),
              (a += 128),
              (c -= 128);
          }
          return a;
        }
        t.hash = function (t) {
          var e = new i();
          e.update(t);
          var r = e.digest();
          return e.clean(), r;
        };
      })(mr),
        (function (t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.convertSecretKeyToX25519 =
              t.convertPublicKeyToX25519 =
              t.verify =
              t.sign =
              t.extractPublicKeyFromSecretKey =
              t.generateKeyPair =
              t.generateKeyPairFromSeed =
              t.SEED_LENGTH =
              t.SECRET_KEY_LENGTH =
              t.PUBLIC_KEY_LENGTH =
              t.SIGNATURE_LENGTH =
                void 0);
          const e = Ge,
            r = mr,
            i = Je;
          function n(t) {
            const e = new Float64Array(16);
            if (t) for (let r = 0; r < t.length; r++) e[r] = t[r];
            return e;
          }
          (t.SIGNATURE_LENGTH = 64),
            (t.PUBLIC_KEY_LENGTH = 32),
            (t.SECRET_KEY_LENGTH = 64),
            (t.SEED_LENGTH = 32);
          new Uint8Array(32)[0] = 9;
          const s = n(),
            o = n([1]),
            a = n([
              30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
              16505, 36039, 65139, 11119, 27886, 20995,
            ]),
            c = n([
              61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
              33010, 6542, 64743, 22239, 55772, 9222,
            ]),
            h = n([
              54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
              64982, 57905, 49316, 21502, 52590, 14035, 8553,
            ]),
            u = n([
              26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
              26214, 26214, 26214, 26214, 26214, 26214, 26214,
            ]),
            l = n([
              41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207,
              15867, 153, 11085, 57099, 20417, 9344, 11139,
            ]);
          function f(t, e) {
            for (let r = 0; r < 16; r++) t[r] = 0 | e[r];
          }
          function d(t) {
            let e = 1;
            for (let r = 0; r < 16; r++) {
              let i = t[r] + e + 65535;
              (e = Math.floor(i / 65536)), (t[r] = i - 65536 * e);
            }
            t[0] += e - 1 + 37 * (e - 1);
          }
          function p(t, e, r) {
            const i = ~(r - 1);
            for (let n = 0; n < 16; n++) {
              const r = i & (t[n] ^ e[n]);
              (t[n] ^= r), (e[n] ^= r);
            }
          }
          function g(t, e) {
            const r = n(),
              i = n();
            for (let n = 0; n < 16; n++) i[n] = e[n];
            d(i), d(i), d(i);
            for (let n = 0; n < 2; n++) {
              r[0] = i[0] - 65517;
              for (let e = 1; e < 15; e++)
                (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)),
                  (r[e - 1] &= 65535);
              r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
              const t = (r[15] >> 16) & 1;
              (r[14] &= 65535), p(i, r, 1 - t);
            }
            for (let n = 0; n < 16; n++)
              (t[2 * n] = 255 & i[n]), (t[2 * n + 1] = i[n] >> 8);
          }
          function m(t, e) {
            let r = 0;
            for (let i = 0; i < 32; i++) r |= t[i] ^ e[i];
            return (1 & ((r - 1) >>> 8)) - 1;
          }
          function y(t, e) {
            const r = new Uint8Array(32),
              i = new Uint8Array(32);
            return g(r, t), g(i, e), m(r, i);
          }
          function v(t) {
            const e = new Uint8Array(32);
            return g(e, t), 1 & e[0];
          }
          function w(t, e, r) {
            for (let i = 0; i < 16; i++) t[i] = e[i] + r[i];
          }
          function b(t, e, r) {
            for (let i = 0; i < 16; i++) t[i] = e[i] - r[i];
          }
          function _(t, e, r) {
            let i,
              n,
              s = 0,
              o = 0,
              a = 0,
              c = 0,
              h = 0,
              u = 0,
              l = 0,
              f = 0,
              d = 0,
              p = 0,
              g = 0,
              m = 0,
              y = 0,
              v = 0,
              w = 0,
              b = 0,
              _ = 0,
              A = 0,
              E = 0,
              S = 0,
              I = 0,
              M = 0,
              N = 0,
              O = 0,
              x = 0,
              P = 0,
              R = 0,
              T = 0,
              C = 0,
              U = 0,
              L = 0,
              k = r[0],
              D = r[1],
              B = r[2],
              q = r[3],
              j = r[4],
              z = r[5],
              F = r[6],
              K = r[7],
              H = r[8],
              V = r[9],
              G = r[10],
              W = r[11],
              Y = r[12],
              Q = r[13],
              J = r[14],
              X = r[15];
            (i = e[0]),
              (s += i * k),
              (o += i * D),
              (a += i * B),
              (c += i * q),
              (h += i * j),
              (u += i * z),
              (l += i * F),
              (f += i * K),
              (d += i * H),
              (p += i * V),
              (g += i * G),
              (m += i * W),
              (y += i * Y),
              (v += i * Q),
              (w += i * J),
              (b += i * X),
              (i = e[1]),
              (o += i * k),
              (a += i * D),
              (c += i * B),
              (h += i * q),
              (u += i * j),
              (l += i * z),
              (f += i * F),
              (d += i * K),
              (p += i * H),
              (g += i * V),
              (m += i * G),
              (y += i * W),
              (v += i * Y),
              (w += i * Q),
              (b += i * J),
              (_ += i * X),
              (i = e[2]),
              (a += i * k),
              (c += i * D),
              (h += i * B),
              (u += i * q),
              (l += i * j),
              (f += i * z),
              (d += i * F),
              (p += i * K),
              (g += i * H),
              (m += i * V),
              (y += i * G),
              (v += i * W),
              (w += i * Y),
              (b += i * Q),
              (_ += i * J),
              (A += i * X),
              (i = e[3]),
              (c += i * k),
              (h += i * D),
              (u += i * B),
              (l += i * q),
              (f += i * j),
              (d += i * z),
              (p += i * F),
              (g += i * K),
              (m += i * H),
              (y += i * V),
              (v += i * G),
              (w += i * W),
              (b += i * Y),
              (_ += i * Q),
              (A += i * J),
              (E += i * X),
              (i = e[4]),
              (h += i * k),
              (u += i * D),
              (l += i * B),
              (f += i * q),
              (d += i * j),
              (p += i * z),
              (g += i * F),
              (m += i * K),
              (y += i * H),
              (v += i * V),
              (w += i * G),
              (b += i * W),
              (_ += i * Y),
              (A += i * Q),
              (E += i * J),
              (S += i * X),
              (i = e[5]),
              (u += i * k),
              (l += i * D),
              (f += i * B),
              (d += i * q),
              (p += i * j),
              (g += i * z),
              (m += i * F),
              (y += i * K),
              (v += i * H),
              (w += i * V),
              (b += i * G),
              (_ += i * W),
              (A += i * Y),
              (E += i * Q),
              (S += i * J),
              (I += i * X),
              (i = e[6]),
              (l += i * k),
              (f += i * D),
              (d += i * B),
              (p += i * q),
              (g += i * j),
              (m += i * z),
              (y += i * F),
              (v += i * K),
              (w += i * H),
              (b += i * V),
              (_ += i * G),
              (A += i * W),
              (E += i * Y),
              (S += i * Q),
              (I += i * J),
              (M += i * X),
              (i = e[7]),
              (f += i * k),
              (d += i * D),
              (p += i * B),
              (g += i * q),
              (m += i * j),
              (y += i * z),
              (v += i * F),
              (w += i * K),
              (b += i * H),
              (_ += i * V),
              (A += i * G),
              (E += i * W),
              (S += i * Y),
              (I += i * Q),
              (M += i * J),
              (N += i * X),
              (i = e[8]),
              (d += i * k),
              (p += i * D),
              (g += i * B),
              (m += i * q),
              (y += i * j),
              (v += i * z),
              (w += i * F),
              (b += i * K),
              (_ += i * H),
              (A += i * V),
              (E += i * G),
              (S += i * W),
              (I += i * Y),
              (M += i * Q),
              (N += i * J),
              (O += i * X),
              (i = e[9]),
              (p += i * k),
              (g += i * D),
              (m += i * B),
              (y += i * q),
              (v += i * j),
              (w += i * z),
              (b += i * F),
              (_ += i * K),
              (A += i * H),
              (E += i * V),
              (S += i * G),
              (I += i * W),
              (M += i * Y),
              (N += i * Q),
              (O += i * J),
              (x += i * X),
              (i = e[10]),
              (g += i * k),
              (m += i * D),
              (y += i * B),
              (v += i * q),
              (w += i * j),
              (b += i * z),
              (_ += i * F),
              (A += i * K),
              (E += i * H),
              (S += i * V),
              (I += i * G),
              (M += i * W),
              (N += i * Y),
              (O += i * Q),
              (x += i * J),
              (P += i * X),
              (i = e[11]),
              (m += i * k),
              (y += i * D),
              (v += i * B),
              (w += i * q),
              (b += i * j),
              (_ += i * z),
              (A += i * F),
              (E += i * K),
              (S += i * H),
              (I += i * V),
              (M += i * G),
              (N += i * W),
              (O += i * Y),
              (x += i * Q),
              (P += i * J),
              (R += i * X),
              (i = e[12]),
              (y += i * k),
              (v += i * D),
              (w += i * B),
              (b += i * q),
              (_ += i * j),
              (A += i * z),
              (E += i * F),
              (S += i * K),
              (I += i * H),
              (M += i * V),
              (N += i * G),
              (O += i * W),
              (x += i * Y),
              (P += i * Q),
              (R += i * J),
              (T += i * X),
              (i = e[13]),
              (v += i * k),
              (w += i * D),
              (b += i * B),
              (_ += i * q),
              (A += i * j),
              (E += i * z),
              (S += i * F),
              (I += i * K),
              (M += i * H),
              (N += i * V),
              (O += i * G),
              (x += i * W),
              (P += i * Y),
              (R += i * Q),
              (T += i * J),
              (C += i * X),
              (i = e[14]),
              (w += i * k),
              (b += i * D),
              (_ += i * B),
              (A += i * q),
              (E += i * j),
              (S += i * z),
              (I += i * F),
              (M += i * K),
              (N += i * H),
              (O += i * V),
              (x += i * G),
              (P += i * W),
              (R += i * Y),
              (T += i * Q),
              (C += i * J),
              (U += i * X),
              (i = e[15]),
              (b += i * k),
              (_ += i * D),
              (A += i * B),
              (E += i * q),
              (S += i * j),
              (I += i * z),
              (M += i * F),
              (N += i * K),
              (O += i * H),
              (x += i * V),
              (P += i * G),
              (R += i * W),
              (T += i * Y),
              (C += i * Q),
              (U += i * J),
              (L += i * X),
              (s += 38 * _),
              (o += 38 * A),
              (a += 38 * E),
              (c += 38 * S),
              (h += 38 * I),
              (u += 38 * M),
              (l += 38 * N),
              (f += 38 * O),
              (d += 38 * x),
              (p += 38 * P),
              (g += 38 * R),
              (m += 38 * T),
              (y += 38 * C),
              (v += 38 * U),
              (w += 38 * L),
              (n = 1),
              (i = s + n + 65535),
              (n = Math.floor(i / 65536)),
              (s = i - 65536 * n),
              (i = o + n + 65535),
              (n = Math.floor(i / 65536)),
              (o = i - 65536 * n),
              (i = a + n + 65535),
              (n = Math.floor(i / 65536)),
              (a = i - 65536 * n),
              (i = c + n + 65535),
              (n = Math.floor(i / 65536)),
              (c = i - 65536 * n),
              (i = h + n + 65535),
              (n = Math.floor(i / 65536)),
              (h = i - 65536 * n),
              (i = u + n + 65535),
              (n = Math.floor(i / 65536)),
              (u = i - 65536 * n),
              (i = l + n + 65535),
              (n = Math.floor(i / 65536)),
              (l = i - 65536 * n),
              (i = f + n + 65535),
              (n = Math.floor(i / 65536)),
              (f = i - 65536 * n),
              (i = d + n + 65535),
              (n = Math.floor(i / 65536)),
              (d = i - 65536 * n),
              (i = p + n + 65535),
              (n = Math.floor(i / 65536)),
              (p = i - 65536 * n),
              (i = g + n + 65535),
              (n = Math.floor(i / 65536)),
              (g = i - 65536 * n),
              (i = m + n + 65535),
              (n = Math.floor(i / 65536)),
              (m = i - 65536 * n),
              (i = y + n + 65535),
              (n = Math.floor(i / 65536)),
              (y = i - 65536 * n),
              (i = v + n + 65535),
              (n = Math.floor(i / 65536)),
              (v = i - 65536 * n),
              (i = w + n + 65535),
              (n = Math.floor(i / 65536)),
              (w = i - 65536 * n),
              (i = b + n + 65535),
              (n = Math.floor(i / 65536)),
              (b = i - 65536 * n),
              (s += n - 1 + 37 * (n - 1)),
              (n = 1),
              (i = s + n + 65535),
              (n = Math.floor(i / 65536)),
              (s = i - 65536 * n),
              (i = o + n + 65535),
              (n = Math.floor(i / 65536)),
              (o = i - 65536 * n),
              (i = a + n + 65535),
              (n = Math.floor(i / 65536)),
              (a = i - 65536 * n),
              (i = c + n + 65535),
              (n = Math.floor(i / 65536)),
              (c = i - 65536 * n),
              (i = h + n + 65535),
              (n = Math.floor(i / 65536)),
              (h = i - 65536 * n),
              (i = u + n + 65535),
              (n = Math.floor(i / 65536)),
              (u = i - 65536 * n),
              (i = l + n + 65535),
              (n = Math.floor(i / 65536)),
              (l = i - 65536 * n),
              (i = f + n + 65535),
              (n = Math.floor(i / 65536)),
              (f = i - 65536 * n),
              (i = d + n + 65535),
              (n = Math.floor(i / 65536)),
              (d = i - 65536 * n),
              (i = p + n + 65535),
              (n = Math.floor(i / 65536)),
              (p = i - 65536 * n),
              (i = g + n + 65535),
              (n = Math.floor(i / 65536)),
              (g = i - 65536 * n),
              (i = m + n + 65535),
              (n = Math.floor(i / 65536)),
              (m = i - 65536 * n),
              (i = y + n + 65535),
              (n = Math.floor(i / 65536)),
              (y = i - 65536 * n),
              (i = v + n + 65535),
              (n = Math.floor(i / 65536)),
              (v = i - 65536 * n),
              (i = w + n + 65535),
              (n = Math.floor(i / 65536)),
              (w = i - 65536 * n),
              (i = b + n + 65535),
              (n = Math.floor(i / 65536)),
              (b = i - 65536 * n),
              (s += n - 1 + 37 * (n - 1)),
              (t[0] = s),
              (t[1] = o),
              (t[2] = a),
              (t[3] = c),
              (t[4] = h),
              (t[5] = u),
              (t[6] = l),
              (t[7] = f),
              (t[8] = d),
              (t[9] = p),
              (t[10] = g),
              (t[11] = m),
              (t[12] = y),
              (t[13] = v),
              (t[14] = w),
              (t[15] = b);
          }
          function A(t, e) {
            _(t, e, e);
          }
          function E(t, e) {
            const r = n();
            let i;
            for (i = 0; i < 16; i++) r[i] = e[i];
            for (i = 253; i >= 0; i--)
              A(r, r), 2 !== i && 4 !== i && _(r, r, e);
            for (i = 0; i < 16; i++) t[i] = r[i];
          }
          function S(t, e) {
            const r = n(),
              i = n(),
              s = n(),
              o = n(),
              a = n(),
              h = n(),
              u = n(),
              l = n(),
              f = n();
            b(r, t[1], t[0]),
              b(f, e[1], e[0]),
              _(r, r, f),
              w(i, t[0], t[1]),
              w(f, e[0], e[1]),
              _(i, i, f),
              _(s, t[3], e[3]),
              _(s, s, c),
              _(o, t[2], e[2]),
              w(o, o, o),
              b(a, i, r),
              b(h, o, s),
              w(u, o, s),
              w(l, i, r),
              _(t[0], a, h),
              _(t[1], l, u),
              _(t[2], u, h),
              _(t[3], a, l);
          }
          function I(t, e, r) {
            for (let i = 0; i < 4; i++) p(t[i], e[i], r);
          }
          function M(t, e) {
            const r = n(),
              i = n(),
              s = n();
            E(s, e[2]),
              _(r, e[0], s),
              _(i, e[1], s),
              g(t, i),
              (t[31] ^= v(r) << 7);
          }
          function N(t, e, r) {
            f(t[0], s), f(t[1], o), f(t[2], o), f(t[3], s);
            for (let i = 255; i >= 0; --i) {
              const n = (r[(i / 8) | 0] >> (7 & i)) & 1;
              I(t, e, n), S(e, t), S(t, t), I(t, e, n);
            }
          }
          function O(t, e) {
            const r = [n(), n(), n(), n()];
            f(r[0], h), f(r[1], u), f(r[2], o), _(r[3], h, u), N(t, r, e);
          }
          function x(e) {
            if (e.length !== t.SEED_LENGTH)
              throw new Error(
                "ed25519: seed must be ".concat(t.SEED_LENGTH, " bytes")
              );
            const i = (0, r.hash)(e);
            (i[0] &= 248), (i[31] &= 127), (i[31] |= 64);
            const s = new Uint8Array(32),
              o = [n(), n(), n(), n()];
            O(o, i), M(s, o);
            const a = new Uint8Array(64);
            return a.set(e), a.set(s, 32), { publicKey: s, secretKey: a };
          }
          (t.generateKeyPairFromSeed = x),
            (t.generateKeyPair = function (t) {
              const r = (0, e.randomBytes)(32, t),
                n = x(r);
              return (0, i.wipe)(r), n;
            }),
            (t.extractPublicKeyFromSecretKey = function (e) {
              if (e.length !== t.SECRET_KEY_LENGTH)
                throw new Error(
                  "ed25519: secret key must be ".concat(
                    t.SECRET_KEY_LENGTH,
                    " bytes"
                  )
                );
              return new Uint8Array(e.subarray(32));
            });
          const P = new Float64Array([
            237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249,
            222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
          ]);
          function R(t, e) {
            let r, i, n, s;
            for (i = 63; i >= 32; --i) {
              for (r = 0, n = i - 32, s = i - 12; n < s; ++n)
                (e[n] += r - 16 * e[i] * P[n - (i - 32)]),
                  (r = Math.floor((e[n] + 128) / 256)),
                  (e[n] -= 256 * r);
              (e[n] += r), (e[i] = 0);
            }
            for (r = 0, n = 0; n < 32; n++)
              (e[n] += r - (e[31] >> 4) * P[n]), (r = e[n] >> 8), (e[n] &= 255);
            for (n = 0; n < 32; n++) e[n] -= r * P[n];
            for (i = 0; i < 32; i++)
              (e[i + 1] += e[i] >> 8), (t[i] = 255 & e[i]);
          }
          function T(t) {
            const e = new Float64Array(64);
            for (let r = 0; r < 64; r++) e[r] = t[r];
            for (let r = 0; r < 64; r++) t[r] = 0;
            R(t, e);
          }
          function C(t, e) {
            const r = n(),
              i = n(),
              c = n(),
              h = n(),
              u = n(),
              d = n(),
              p = n();
            return (
              f(t[2], o),
              (function (t, e) {
                for (let r = 0; r < 16; r++)
                  t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767;
              })(t[1], e),
              A(c, t[1]),
              _(h, c, a),
              b(c, c, t[2]),
              w(h, t[2], h),
              A(u, h),
              A(d, u),
              _(p, d, u),
              _(r, p, c),
              _(r, r, h),
              (function (t, e) {
                const r = n();
                let i;
                for (i = 0; i < 16; i++) r[i] = e[i];
                for (i = 250; i >= 0; i--) A(r, r), 1 !== i && _(r, r, e);
                for (i = 0; i < 16; i++) t[i] = r[i];
              })(r, r),
              _(r, r, c),
              _(r, r, h),
              _(r, r, h),
              _(t[0], r, h),
              A(i, t[0]),
              _(i, i, h),
              y(i, c) && _(t[0], t[0], l),
              A(i, t[0]),
              _(i, i, h),
              y(i, c)
                ? -1
                : (v(t[0]) === e[31] >> 7 && b(t[0], s, t[0]),
                  _(t[3], t[0], t[1]),
                  0)
            );
          }
          (t.sign = function (t, e) {
            const i = new Float64Array(64),
              s = [n(), n(), n(), n()],
              o = (0, r.hash)(t.subarray(0, 32));
            (o[0] &= 248), (o[31] &= 127), (o[31] |= 64);
            const a = new Uint8Array(64);
            a.set(o.subarray(32), 32);
            const c = new r.SHA512();
            c.update(a.subarray(32)), c.update(e);
            const h = c.digest();
            c.clean(),
              T(h),
              O(s, h),
              M(a, s),
              c.reset(),
              c.update(a.subarray(0, 32)),
              c.update(t.subarray(32)),
              c.update(e);
            const u = c.digest();
            T(u);
            for (let r = 0; r < 32; r++) i[r] = h[r];
            for (let r = 0; r < 32; r++)
              for (let t = 0; t < 32; t++) i[r + t] += u[r] * o[t];
            return R(a.subarray(32), i), a;
          }),
            (t.verify = function (e, i, s) {
              const o = new Uint8Array(32),
                a = [n(), n(), n(), n()],
                c = [n(), n(), n(), n()];
              if (s.length !== t.SIGNATURE_LENGTH)
                throw new Error(
                  "ed25519: signature must be ".concat(
                    t.SIGNATURE_LENGTH,
                    " bytes"
                  )
                );
              if (C(c, e)) return !1;
              const h = new r.SHA512();
              h.update(s.subarray(0, 32)), h.update(e), h.update(i);
              const u = h.digest();
              return (
                T(u),
                N(a, c, u),
                O(c, s.subarray(32)),
                S(a, c),
                M(o, a),
                !m(s, o)
              );
            }),
            (t.convertPublicKeyToX25519 = function (t) {
              let e = [n(), n(), n(), n()];
              if (C(e, t)) throw new Error("Ed25519: invalid public key");
              let r = n(),
                i = n(),
                s = e[1];
              w(r, o, s), b(i, o, s), E(i, i), _(r, r, i);
              let a = new Uint8Array(32);
              return g(a, r), a;
            }),
            (t.convertSecretKeyToX25519 = function (t) {
              const e = (0, r.hash)(t.subarray(0, 32));
              (e[0] &= 248), (e[31] &= 127), (e[31] |= 64);
              const n = new Uint8Array(e.subarray(0, 32));
              return (0, i.wipe)(e), n;
            });
        })(Ve);
      const yr = ".",
        vr = "base64url",
        wr = "utf8",
        br = "utf8",
        _r = ":",
        Ar = "did",
        Er = "key",
        Sr = "base58btc",
        Ir = "z",
        Mr = "K36";
      function Nr(t) {
        return null != globalThis.Buffer
          ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
          : t;
      }
      function Or() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? Nr(globalThis.Buffer.allocUnsafe(t))
          : new Uint8Array(t);
      }
      function xr(t, e) {
        e || (e = t.reduce((t, e) => t + e.length, 0));
        const r = Or(e);
        let i = 0;
        for (const n of t) r.set(n, i), (i += n.length);
        return Nr(r);
      }
      var Pr = function (t, e) {
          if (t.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < t.length; n++) {
            var s = t.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = t.length,
            c = t.charAt(0),
            h = Math.log(a) / Math.log(256),
            u = Math.log(256) / Math.log(a);
          function l(t) {
            if ("string" != typeof t) throw new TypeError("Expected String");
            if (0 === t.length) return new Uint8Array();
            var e = 0;
            if (" " !== t[e]) {
              for (var i = 0, n = 0; t[e] === c; ) i++, e++;
              for (
                var s = ((t.length - e) * h + 1) >>> 0, o = new Uint8Array(s);
                t[e];

              ) {
                var u = r[t.charCodeAt(e)];
                if (255 === u) return;
                for (
                  var l = 0, f = s - 1;
                  (0 !== u || l < n) && -1 !== f;
                  f--, l++
                )
                  (u += (a * o[f]) >>> 0),
                    (o[f] = u % 256 >>> 0),
                    (u = (u / 256) >>> 0);
                if (0 !== u) throw new Error("Non-zero carry");
                (n = l), e++;
              }
              if (" " !== t[e]) {
                for (var d = s - n; d !== s && 0 === o[d]; ) d++;
                for (var p = new Uint8Array(i + (s - d)), g = i; d !== s; )
                  p[g++] = o[d++];
                return p;
              }
            }
          }
          return {
            encode: function (e) {
              if (
                (e instanceof Uint8Array ||
                  (ArrayBuffer.isView(e)
                    ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                    : Array.isArray(e) && (e = Uint8Array.from(e))),
                !(e instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === e.length) return "";
              for (
                var r = 0, i = 0, n = 0, s = e.length;
                n !== s && 0 === e[n];

              )
                n++, r++;
              for (
                var o = ((s - n) * u + 1) >>> 0, h = new Uint8Array(o);
                n !== s;

              ) {
                for (
                  var l = e[n], f = 0, d = o - 1;
                  (0 !== l || f < i) && -1 !== d;
                  d--, f++
                )
                  (l += (256 * h[d]) >>> 0),
                    (h[d] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (i = f), n++;
              }
              for (var p = o - i; p !== o && 0 === h[p]; ) p++;
              for (var g = c.repeat(r); p < o; ++p) g += t.charAt(h[p]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (t) {
              var r = l(t);
              if (r) return r;
              throw new Error("Non-".concat(e, " character"));
            },
          };
        },
        Rr = Pr;
      class Tr {
        constructor(t, e, r) {
          (this.name = t), (this.prefix = e), (this.baseEncode = r);
        }
        encode(t) {
          if (t instanceof Uint8Array)
            return "".concat(this.prefix).concat(this.baseEncode(t));
          throw Error("Unknown type, must be binary type");
        }
      }
      class Cr {
        constructor(t, e, r) {
          if (((this.name = t), (this.prefix = e), void 0 === e.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = e.codePointAt(0)), (this.baseDecode = r);
        }
        decode(t) {
          if ("string" == typeof t) {
            if (t.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                "Unable to decode multibase string "
                  .concat(JSON.stringify(t), ", ")
                  .concat(
                    this.name,
                    " decoder only supports inputs prefixed with "
                  )
                  .concat(this.prefix)
              );
            return this.baseDecode(t.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(t) {
          return Lr(this, t);
        }
      }
      class Ur {
        constructor(t) {
          this.decoders = t;
        }
        or(t) {
          return Lr(this, t);
        }
        decode(t) {
          const e = t[0],
            r = this.decoders[e];
          if (r) return r.decode(t);
          throw RangeError(
            "Unable to decode multibase string "
              .concat(JSON.stringify(t), ", only inputs prefixed with ")
              .concat(Object.keys(this.decoders), " are supported")
          );
        }
      }
      const Lr = (t, e) =>
        new Ur({
          ...(t.decoders || { [t.prefix]: t }),
          ...(e.decoders || { [e.prefix]: e }),
        });
      class kr {
        constructor(t, e, r, i) {
          (this.name = t),
            (this.prefix = e),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new Tr(t, e, r)),
            (this.decoder = new Cr(t, e, i));
        }
        encode(t) {
          return this.encoder.encode(t);
        }
        decode(t) {
          return this.decoder.decode(t);
        }
      }
      const Dr = (t) => {
          let { name: e, prefix: r, encode: i, decode: n } = t;
          return new kr(e, r, i, n);
        },
        Br = (t) => {
          let { prefix: e, name: r, alphabet: i } = t;
          const { encode: n, decode: s } = Rr(i, r);
          return Dr({
            prefix: e,
            name: r,
            encode: n,
            decode: (t) =>
              ((t) => {
                if (
                  t instanceof Uint8Array &&
                  "Uint8Array" === t.constructor.name
                )
                  return t;
                if (t instanceof ArrayBuffer) return new Uint8Array(t);
                if (ArrayBuffer.isView(t))
                  return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                throw new Error("Unknown type, must be binary type");
              })(s(t)),
          });
        },
        qr = (t) => {
          let { name: e, prefix: r, bitsPerChar: i, alphabet: n } = t;
          return Dr({
            prefix: r,
            name: e,
            encode: (t) =>
              ((t, e, r) => {
                const i = "=" === e[e.length - 1],
                  n = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < t.length; ++c)
                  for (a = (a << 8) | t[c], o += 8; o > r; )
                    (o -= r), (s += e[n & (a >> o)]);
                if ((o && (s += e[n & (a << (r - o))]), i))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(t, n, i),
            decode: (t) =>
              ((t, e, r, i) => {
                const n = {};
                for (let u = 0; u < e.length; ++u) n[e[u]] = u;
                let s = t.length;
                for (; "=" === t[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  h = 0;
                for (let u = 0; u < s; ++u) {
                  const e = n[t[u]];
                  if (void 0 === e)
                    throw new SyntaxError("Non-".concat(i, " character"));
                  (c = (c << r) | e),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[h++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(t, n, i, e),
          });
        },
        jr = Dr({
          prefix: "\0",
          name: "identity",
          encode: (t) => ((t) => new TextDecoder().decode(t))(t),
          decode: (t) => ((t) => new TextEncoder().encode(t))(t),
        }),
        zr = Object.freeze(
          Object.defineProperty(
            { __proto__: null, identity: jr },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Fr = qr({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        Kr = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base2: Fr },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Hr = qr({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        Vr = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base8: Hr },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Gr = Br({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        Wr = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base10: Gr },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Yr = qr({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Qr = qr({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        Jr = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base16: Yr, base16upper: Qr },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Xr = qr({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        Zr = qr({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        $r = qr({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ti = qr({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        ei = qr({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        ri = qr({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        ii = qr({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        ni = qr({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        si = qr({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        oi = Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              base32: Xr,
              base32hex: ei,
              base32hexpad: ii,
              base32hexpadupper: ni,
              base32hexupper: ri,
              base32pad: $r,
              base32padupper: ti,
              base32upper: Zr,
              base32z: si,
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        ai = Br({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        ci = Br({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        hi = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base36: ai, base36upper: ci },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        ui = Br({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        li = Br({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        fi = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base58btc: ui, base58flickr: li },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        di = qr({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        pi = qr({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        gi = qr({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        mi = qr({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        yi = Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              base64: di,
              base64pad: pi,
              base64url: gi,
              base64urlpad: mi,
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        vi = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        wi = vi.reduce((t, e, r) => ((t[r] = e), t), []),
        bi = vi.reduce((t, e, r) => ((t[e.codePointAt(0)] = r), t), []);
      const _i = Dr({
          prefix: "\ud83d\ude80",
          name: "base256emoji",
          encode: function (t) {
            return t.reduce((t, e) => (t += wi[e]), "");
          },
          decode: function (t) {
            const e = [];
            for (const r of t) {
              const t = bi[r.codePointAt(0)];
              if (void 0 === t)
                throw new Error("Non-base256emoji character: ".concat(r));
              e.push(t);
            }
            return new Uint8Array(e);
          },
        }),
        Ai = Object.freeze(
          Object.defineProperty(
            { __proto__: null, base256emoji: _i },
            Symbol.toStringTag,
            { value: "Module" }
          )
        );
      new TextEncoder(), new TextDecoder();
      const Ei = {
        ...zr,
        ...Kr,
        ...Vr,
        ...Wr,
        ...Jr,
        ...oi,
        ...hi,
        ...fi,
        ...yi,
        ...Ai,
      };
      function Si(t, e, r, i) {
        return {
          name: t,
          prefix: e,
          encoder: { name: t, prefix: e, encode: r },
          decoder: { decode: i },
        };
      }
      const Ii = Si(
          "utf8",
          "u",
          (t) => "u" + new TextDecoder("utf8").decode(t),
          (t) => new TextEncoder().encode(t.substring(1))
        ),
        Mi = Si(
          "ascii",
          "a",
          (t) => {
            let e = "a";
            for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
            return e;
          },
          (t) => {
            const e = Or((t = t.substring(1)).length);
            for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
            return e;
          }
        ),
        Ni = {
          utf8: Ii,
          "utf-8": Ii,
          hex: Ei.base16,
          latin1: Mi,
          ascii: Mi,
          binary: Mi,
          ...Ei,
        };
      function Oi(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = Ni[e];
        if (!r) throw new Error('Unsupported encoding "'.concat(e, '"'));
        return ("utf8" !== e && "utf-8" !== e) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(t).substring(1)
          : globalThis.Buffer.from(
              t.buffer,
              t.byteOffset,
              t.byteLength
            ).toString("utf8");
      }
      function xi(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = Ni[e];
        if (!r) throw new Error('Unsupported encoding "'.concat(e, '"'));
        return ("utf8" !== e && "utf-8" !== e) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode("".concat(r.prefix).concat(t))
          : Nr(globalThis.Buffer.from(t, "utf-8"));
      }
      function Pi(t) {
        return Oi(xi($(t), wr), vr);
      }
      function Ri(t) {
        const e = xi(Mr, Sr),
          r = Ir + Oi(xr([e, t]), Sr);
        return [Ar, Er, r].join(_r);
      }
      function Ti(t) {
        return Oi(t, vr);
      }
      function Ci() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Ge.randomBytes(32);
        return Ve.generateKeyPairFromSeed(t);
      }
      async function Ui(t, e, r, i) {
        let n =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : dt.fromMiliseconds(Date.now());
        const s = { alg: "EdDSA", typ: "JWT" },
          o = { iss: Ri(i.publicKey), sub: t, aud: e, iat: n, exp: n + r },
          a = (function (t) {
            return xi([Pi(t.header), Pi(t.payload)].join(yr), br);
          })({ header: s, payload: o });
        return (function (t) {
          return [Pi(t.header), Pi(t.payload), Ti(t.signature)].join(yr);
        })({ header: s, payload: o, signature: Ve.sign(i.secretKey, a) });
      }
      var Li =
          (globalThis && globalThis.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 === arguments.length)
              for (var i, n = 0, s = e.length; n < s; n++)
                (i || !(n in e)) &&
                  (i || (i = Array.prototype.slice.call(e, 0, n)),
                  (i[n] = e[n]));
            return t.concat(i || Array.prototype.slice.call(e));
          },
        ki = function (t, e, r) {
          (this.name = t),
            (this.version = e),
            (this.os = r),
            (this.type = "browser");
        },
        Di = function (t) {
          (this.version = t),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = c.platform);
        },
        Bi = function (t, e, r, i) {
          (this.name = t),
            (this.version = e),
            (this.os = r),
            (this.bot = i),
            (this.type = "bot-device");
        },
        qi = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        ji = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        zi =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        Fi = 3,
        Ki = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        Hi = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function Vi(t) {
        return t
          ? Gi(t)
          : typeof document > "u" &&
            typeof navigator < "u" &&
            "ReactNative" === navigator.product
          ? new ji()
          : typeof navigator < "u"
          ? Gi(navigator.userAgent)
          : (function () {
              var t = typeof c < "u" && c.version;
              return t ? new Di(c.version.slice(1)) : null;
            })();
      }
      function Gi(t) {
        var e = (function (t) {
          return (
            "" !== t &&
            Ki.reduce(function (e, r) {
              var i = r[0],
                n = r[1];
              if (e) return e;
              var s = n.exec(t);
              return !!s && [i, s];
            }, !1)
          );
        })(t);
        if (!e) return null;
        var r = e[0],
          i = e[1];
        if ("searchbot" === r) return new qi();
        var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
        n
          ? n.length < Fi &&
            (n = Li(
              Li([], n, !0),
              (function (t) {
                for (var e = [], r = 0; r < t; r++) e.push("0");
                return e;
              })(Fi - n.length),
              !0
            ))
          : (n = []);
        var s = n.join("."),
          o = (function (t) {
            for (var e = 0, r = Hi.length; e < r; e++) {
              var i = Hi[e],
                n = i[0];
              if (i[1].exec(t)) return n;
            }
            return null;
          })(t),
          a = zi.exec(t);
        return a && a[1] ? new Bi(r, s, o, a[1]) : new ki(r, s, o);
      }
      var Wi = {};
      function Yi(t) {
        let e;
        return (
          typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e
        );
      }
      function Qi(t) {
        const e = Yi(t);
        if (!e) throw new Error("".concat(t, " is not defined in Window"));
        return e;
      }
      Object.defineProperty(Wi, "__esModule", { value: !0 }),
        (Wi.getLocalStorage =
          Wi.getLocalStorageOrThrow =
          Wi.getCrypto =
          Wi.getCryptoOrThrow =
          Zi =
          Wi.getLocation =
          Wi.getLocationOrThrow =
          Xi =
          Wi.getNavigator =
          Wi.getNavigatorOrThrow =
          Ji =
          Wi.getDocument =
          Wi.getDocumentOrThrow =
          Wi.getFromWindowOrThrow =
          Wi.getFromWindow =
            void 0),
        (Wi.getFromWindow = Yi),
        (Wi.getFromWindowOrThrow = Qi),
        (Wi.getDocumentOrThrow = function () {
          return Qi("document");
        });
      var Ji = (Wi.getDocument = function () {
        return Yi("document");
      });
      Wi.getNavigatorOrThrow = function () {
        return Qi("navigator");
      };
      var Xi = (Wi.getNavigator = function () {
        return Yi("navigator");
      });
      Wi.getLocationOrThrow = function () {
        return Qi("location");
      };
      var Zi = (Wi.getLocation = function () {
        return Yi("location");
      });
      (Wi.getCryptoOrThrow = function () {
        return Qi("crypto");
      }),
        (Wi.getCrypto = function () {
          return Yi("crypto");
        }),
        (Wi.getLocalStorageOrThrow = function () {
          return Qi("localStorage");
        }),
        (Wi.getLocalStorage = function () {
          return Yi("localStorage");
        });
      var $i = {};
      Object.defineProperty($i, "__esModule", { value: !0 });
      var tn = ($i.getWindowMetadata = void 0);
      const en = Wi;
      tn = $i.getWindowMetadata = function () {
        let t, e;
        try {
          (t = en.getDocumentOrThrow()), (e = en.getLocationOrThrow());
        } catch {
          return null;
        }
        function r() {
          for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          const n = t.getElementsByTagName("meta");
          for (let t = 0; t < n.length; t++) {
            const e = n[t],
              i = ["itemprop", "property", "name"]
                .map((t) => e.getAttribute(t))
                .filter((t) => !!t && r.includes(t));
            if (i.length && i) {
              const t = e.getAttribute("content");
              if (t) return t;
            }
          }
          return "";
        }
        const i = (function () {
          let e = r("name", "og:site_name", "og:title", "twitter:title");
          return e || (e = t.title), e;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: e.origin,
          icons: (function () {
            const r = t.getElementsByTagName("link"),
              i = [];
            for (let t = 0; t < r.length; t++) {
              const n = r[t],
                s = n.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const t = n.getAttribute("href");
                if (t)
                  if (
                    -1 === t.toLowerCase().indexOf("https:") &&
                    -1 === t.toLowerCase().indexOf("http:") &&
                    0 !== t.indexOf("//")
                  ) {
                    let r = e.protocol + "//" + e.host;
                    if (0 === t.indexOf("/")) r += t;
                    else {
                      const i = e.pathname.split("/");
                      i.pop();
                      r += i.join("/") + "/" + t;
                    }
                    i.push(r);
                  } else if (0 === t.indexOf("//")) {
                    const r = e.protocol + t;
                    i.push(r);
                  } else i.push(t);
              }
            }
            return i;
          })(),
          name: i,
        };
      };
      var rn = {},
        nn = (t) =>
          encodeURIComponent(t).replace(/[!'()*]/g, (t) =>
            "%".concat(t.charCodeAt(0).toString(16).toUpperCase())
          ),
        sn = "%[a-f0-9]{2}",
        on = new RegExp("(" + sn + ")|([^%]+?)", "gi"),
        an = new RegExp("(" + sn + ")+", "gi");
      function cn(t, e) {
        try {
          return [decodeURIComponent(t.join(""))];
        } catch {}
        if (1 === t.length) return t;
        e = e || 1;
        var r = t.slice(0, e),
          i = t.slice(e);
        return Array.prototype.concat.call([], cn(r), cn(i));
      }
      function hn(t) {
        try {
          return decodeURIComponent(t);
        } catch {
          for (var e = t.match(on) || [], r = 1; r < e.length; r++)
            e = (t = cn(e, r).join("")).match(on) || [];
          return t;
        }
      }
      var un = function (t) {
          if ("string" != typeof t)
            throw new TypeError(
              "Expected `encodedURI` to be of type `string`, got `" +
                typeof t +
                "`"
            );
          try {
            return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
          } catch {
            return (function (t) {
              for (
                var e = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                  r = an.exec(t);
                r;

              ) {
                try {
                  e[r[0]] = decodeURIComponent(r[0]);
                } catch {
                  var i = hn(r[0]);
                  i !== r[0] && (e[r[0]] = i);
                }
                r = an.exec(t);
              }
              e["%C2"] = "\ufffd";
              for (var n = Object.keys(e), s = 0; s < n.length; s++) {
                var o = n[s];
                t = t.replace(new RegExp(o, "g"), e[o]);
              }
              return t;
            })(t);
          }
        },
        ln = (t, e) => {
          if ("string" != typeof t || "string" != typeof e)
            throw new TypeError(
              "Expected the arguments to be of type `string`"
            );
          if ("" === e) return [t];
          const r = t.indexOf(e);
          return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)];
        },
        fn = function (t, e) {
          for (
            var r = {}, i = Object.keys(t), n = Array.isArray(e), s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s],
              a = t[o];
            (n ? -1 !== e.indexOf(o) : e(o, a, t)) && (r[o] = a);
          }
          return r;
        };
      !(function (t) {
        const e = nn,
          r = un,
          i = ln,
          n = fn,
          s = Symbol("encodeFragmentIdentifier");
        function o(t) {
          if ("string" != typeof t || 1 !== t.length)
            throw new TypeError(
              "arrayFormatSeparator must be single character string"
            );
        }
        function a(t, r) {
          return r.encode ? (r.strict ? e(t) : encodeURIComponent(t)) : t;
        }
        function c(t, e) {
          return e.decode ? r(t) : t;
        }
        function h(t) {
          return Array.isArray(t)
            ? t.sort()
            : "object" == typeof t
            ? h(Object.keys(t))
                .sort((t, e) => Number(t) - Number(e))
                .map((e) => t[e])
            : t;
        }
        function u(t) {
          const e = t.indexOf("#");
          return -1 !== e && (t = t.slice(0, e)), t;
        }
        function l(t) {
          const e = (t = u(t)).indexOf("?");
          return -1 === e ? "" : t.slice(e + 1);
        }
        function f(t, e) {
          return (
            e.parseNumbers &&
            !Number.isNaN(Number(t)) &&
            "string" == typeof t &&
            "" !== t.trim()
              ? (t = Number(t))
              : e.parseBooleans &&
                null !== t &&
                ("true" === t.toLowerCase() || "false" === t.toLowerCase()) &&
                (t = "true" === t.toLowerCase()),
            t
          );
        }
        function d(t, e) {
          o(
            (e = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1,
              },
              e
            )).arrayFormatSeparator
          );
          const r = (function (t) {
              let e;
              switch (t.arrayFormat) {
                case "index":
                  return (t, r, i) => {
                    (e = /\[(\d*)\]$/.exec(t)),
                      (t = t.replace(/\[\d*\]$/, "")),
                      e
                        ? (void 0 === i[t] && (i[t] = {}), (i[t][e[1]] = r))
                        : (i[t] = r);
                  };
                case "bracket":
                  return (t, r, i) => {
                    (e = /(\[\])$/.exec(t)),
                      (t = t.replace(/\[\]$/, "")),
                      e
                        ? void 0 !== i[t]
                          ? (i[t] = [].concat(i[t], r))
                          : (i[t] = [r])
                        : (i[t] = r);
                  };
                case "colon-list-separator":
                  return (t, r, i) => {
                    (e = /(:list)$/.exec(t)),
                      (t = t.replace(/:list$/, "")),
                      e
                        ? void 0 !== i[t]
                          ? (i[t] = [].concat(i[t], r))
                          : (i[t] = [r])
                        : (i[t] = r);
                  };
                case "comma":
                case "separator":
                  return (e, r, i) => {
                    const n =
                        "string" == typeof r &&
                        r.includes(t.arrayFormatSeparator),
                      s =
                        "string" == typeof r &&
                        !n &&
                        c(r, t).includes(t.arrayFormatSeparator);
                    r = s ? c(r, t) : r;
                    const o =
                      n || s
                        ? r.split(t.arrayFormatSeparator).map((e) => c(e, t))
                        : null === r
                        ? r
                        : c(r, t);
                    i[e] = o;
                  };
                case "bracket-separator":
                  return (e, r, i) => {
                    const n = /(\[\])$/.test(e);
                    if (((e = e.replace(/\[\]$/, "")), !n))
                      return void (i[e] = r && c(r, t));
                    const s =
                      null === r
                        ? []
                        : r.split(t.arrayFormatSeparator).map((e) => c(e, t));
                    void 0 !== i[e] ? (i[e] = [].concat(i[e], s)) : (i[e] = s);
                  };
                default:
                  return (t, e, r) => {
                    void 0 !== r[t] ? (r[t] = [].concat(r[t], e)) : (r[t] = e);
                  };
              }
            })(e),
            n = Object.create(null);
          if ("string" != typeof t || !(t = t.trim().replace(/^[?#&]/, "")))
            return n;
          for (const s of t.split("&")) {
            if ("" === s) continue;
            let [t, o] = i(e.decode ? s.replace(/\+/g, " ") : s, "=");
            (o =
              void 0 === o
                ? null
                : ["comma", "separator", "bracket-separator"].includes(
                    e.arrayFormat
                  )
                ? o
                : c(o, e)),
              r(c(t, e), o, n);
          }
          for (const i of Object.keys(n)) {
            const t = n[i];
            if ("object" == typeof t && null !== t)
              for (const r of Object.keys(t)) t[r] = f(t[r], e);
            else n[i] = f(t, e);
          }
          return !1 === e.sort
            ? n
            : (!0 === e.sort
                ? Object.keys(n).sort()
                : Object.keys(n).sort(e.sort)
              ).reduce((t, e) => {
                const r = n[e];
                return (
                  r && "object" == typeof r && !Array.isArray(r)
                    ? (t[e] = h(r))
                    : (t[e] = r),
                  t
                );
              }, Object.create(null));
        }
        (t.extract = l),
          (t.parse = d),
          (t.stringify = (t, e) => {
            if (!t) return "";
            o(
              (e = Object.assign(
                {
                  encode: !0,
                  strict: !0,
                  arrayFormat: "none",
                  arrayFormatSeparator: ",",
                },
                e
              )).arrayFormatSeparator
            );
            const r = (r) =>
                (e.skipNull && ((t) => null == t)(t[r])) ||
                (e.skipEmptyString && "" === t[r]),
              i = (function (t) {
                switch (t.arrayFormat) {
                  case "index":
                    return (e) => (r, i) => {
                      const n = r.length;
                      return void 0 === i ||
                        (t.skipNull && null === i) ||
                        (t.skipEmptyString && "" === i)
                        ? r
                        : null === i
                        ? [...r, [a(e, t), "[", n, "]"].join("")]
                        : [
                            ...r,
                            [a(e, t), "[", a(n, t), "]=", a(i, t)].join(""),
                          ];
                    };
                  case "bracket":
                    return (e) => (r, i) =>
                      void 0 === i ||
                      (t.skipNull && null === i) ||
                      (t.skipEmptyString && "" === i)
                        ? r
                        : null === i
                        ? [...r, [a(e, t), "[]"].join("")]
                        : [...r, [a(e, t), "[]=", a(i, t)].join("")];
                  case "colon-list-separator":
                    return (e) => (r, i) =>
                      void 0 === i ||
                      (t.skipNull && null === i) ||
                      (t.skipEmptyString && "" === i)
                        ? r
                        : null === i
                        ? [...r, [a(e, t), ":list="].join("")]
                        : [...r, [a(e, t), ":list=", a(i, t)].join("")];
                  case "comma":
                  case "separator":
                  case "bracket-separator": {
                    const e =
                      "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                    return (r) => (i, n) =>
                      void 0 === n ||
                      (t.skipNull && null === n) ||
                      (t.skipEmptyString && "" === n)
                        ? i
                        : ((n = null === n ? "" : n),
                          0 === i.length
                            ? [[a(r, t), e, a(n, t)].join("")]
                            : [[i, a(n, t)].join(t.arrayFormatSeparator)]);
                  }
                  default:
                    return (e) => (r, i) =>
                      void 0 === i ||
                      (t.skipNull && null === i) ||
                      (t.skipEmptyString && "" === i)
                        ? r
                        : null === i
                        ? [...r, a(e, t)]
                        : [...r, [a(e, t), "=", a(i, t)].join("")];
                }
              })(e),
              n = {};
            for (const o of Object.keys(t)) r(o) || (n[o] = t[o]);
            const s = Object.keys(n);
            return (
              !1 !== e.sort && s.sort(e.sort),
              s
                .map((r) => {
                  const n = t[r];
                  return void 0 === n
                    ? ""
                    : null === n
                    ? a(r, e)
                    : Array.isArray(n)
                    ? 0 === n.length && "bracket-separator" === e.arrayFormat
                      ? a(r, e) + "[]"
                      : n.reduce(i(r), []).join("&")
                    : a(r, e) + "=" + a(n, e);
                })
                .filter((t) => t.length > 0)
                .join("&")
            );
          }),
          (t.parseUrl = (t, e) => {
            e = Object.assign({ decode: !0 }, e);
            const [r, n] = i(t, "#");
            return Object.assign(
              { url: r.split("?")[0] || "", query: d(l(t), e) },
              e && e.parseFragmentIdentifier && n
                ? { fragmentIdentifier: c(n, e) }
                : {}
            );
          }),
          (t.stringifyUrl = (e, r) => {
            r = Object.assign({ encode: !0, strict: !0, [s]: !0 }, r);
            const i = u(e.url).split("?")[0] || "",
              n = t.extract(e.url),
              o = t.parse(n, { sort: !1 }),
              c = Object.assign(o, e.query);
            let h = t.stringify(c, r);
            h && (h = "?".concat(h));
            let l = (function (t) {
              let e = "";
              const r = t.indexOf("#");
              return -1 !== r && (e = t.slice(r)), e;
            })(e.url);
            return (
              e.fragmentIdentifier &&
                (l = "#".concat(
                  r[s] ? a(e.fragmentIdentifier, r) : e.fragmentIdentifier
                )),
              "".concat(i).concat(h).concat(l)
            );
          }),
          (t.pick = (e, r, i) => {
            i = Object.assign({ parseFragmentIdentifier: !0, [s]: !1 }, i);
            const {
              url: o,
              query: a,
              fragmentIdentifier: c,
            } = t.parseUrl(e, i);
            return t.stringifyUrl(
              { url: o, query: n(a, r), fragmentIdentifier: c },
              i
            );
          }),
          (t.exclude = (e, r, i) => {
            const n = Array.isArray(r)
              ? (t) => !r.includes(t)
              : (t, e) => !r(t, e);
            return t.pick(e, n, i);
          });
      })(rn);
      var dn = {},
        pn = {};
      Object.defineProperty(pn, "__esModule", { value: !0 });
      var gn = ir,
        mn = Je,
        yn = 20;
      function vn(t, e, r) {
        for (
          var i = 1634760805,
            n = 857760878,
            s = 2036477234,
            o = 1797285236,
            a = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
            c = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
            h = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
            u = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
            l = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
            f = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
            d = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
            p = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
            g = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
            m = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
            y = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
            v = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
            w = i,
            b = n,
            _ = s,
            A = o,
            E = a,
            S = c,
            I = h,
            M = u,
            N = l,
            O = f,
            x = d,
            P = p,
            R = g,
            T = m,
            C = y,
            U = v,
            L = 0;
          L < yn;
          L += 2
        )
          (E =
            ((E ^= N =
              (N + (R = ((R ^= w = (w + E) | 0) >>> 16) | (R << 16))) | 0) >>>
              20) |
            (E << 12)),
            (S =
              ((S ^= O =
                (O + (T = ((T ^= b = (b + S) | 0) >>> 16) | (T << 16))) | 0) >>>
                20) |
              (S << 12)),
            (I =
              ((I ^= x =
                (x + (C = ((C ^= _ = (_ + I) | 0) >>> 16) | (C << 16))) | 0) >>>
                20) |
              (I << 12)),
            (M =
              ((M ^= P =
                (P + (U = ((U ^= A = (A + M) | 0) >>> 16) | (U << 16))) | 0) >>>
                20) |
              (M << 12)),
            (I =
              ((I ^= x =
                (x + (C = ((C ^= _ = (_ + I) | 0) >>> 24) | (C << 8))) | 0) >>>
                25) |
              (I << 7)),
            (M =
              ((M ^= P =
                (P + (U = ((U ^= A = (A + M) | 0) >>> 24) | (U << 8))) | 0) >>>
                25) |
              (M << 7)),
            (S =
              ((S ^= O =
                (O + (T = ((T ^= b = (b + S) | 0) >>> 24) | (T << 8))) | 0) >>>
                25) |
              (S << 7)),
            (E =
              ((E ^= N =
                (N + (R = ((R ^= w = (w + E) | 0) >>> 24) | (R << 8))) | 0) >>>
                25) |
              (E << 7)),
            (S =
              ((S ^= x =
                (x + (U = ((U ^= w = (w + S) | 0) >>> 16) | (U << 16))) | 0) >>>
                20) |
              (S << 12)),
            (I =
              ((I ^= P =
                (P + (R = ((R ^= b = (b + I) | 0) >>> 16) | (R << 16))) | 0) >>>
                20) |
              (I << 12)),
            (M =
              ((M ^= N =
                (N + (T = ((T ^= _ = (_ + M) | 0) >>> 16) | (T << 16))) | 0) >>>
                20) |
              (M << 12)),
            (E =
              ((E ^= O =
                (O + (C = ((C ^= A = (A + E) | 0) >>> 16) | (C << 16))) | 0) >>>
                20) |
              (E << 12)),
            (M =
              ((M ^= N =
                (N + (T = ((T ^= _ = (_ + M) | 0) >>> 24) | (T << 8))) | 0) >>>
                25) |
              (M << 7)),
            (E =
              ((E ^= O =
                (O + (C = ((C ^= A = (A + E) | 0) >>> 24) | (C << 8))) | 0) >>>
                25) |
              (E << 7)),
            (I =
              ((I ^= P =
                (P + (R = ((R ^= b = (b + I) | 0) >>> 24) | (R << 8))) | 0) >>>
                25) |
              (I << 7)),
            (S =
              ((S ^= x =
                (x + (U = ((U ^= w = (w + S) | 0) >>> 24) | (U << 8))) | 0) >>>
                25) |
              (S << 7));
        gn.writeUint32LE((w + i) | 0, t, 0),
          gn.writeUint32LE((b + n) | 0, t, 4),
          gn.writeUint32LE((_ + s) | 0, t, 8),
          gn.writeUint32LE((A + o) | 0, t, 12),
          gn.writeUint32LE((E + a) | 0, t, 16),
          gn.writeUint32LE((S + c) | 0, t, 20),
          gn.writeUint32LE((I + h) | 0, t, 24),
          gn.writeUint32LE((M + u) | 0, t, 28),
          gn.writeUint32LE((N + l) | 0, t, 32),
          gn.writeUint32LE((O + f) | 0, t, 36),
          gn.writeUint32LE((x + d) | 0, t, 40),
          gn.writeUint32LE((P + p) | 0, t, 44),
          gn.writeUint32LE((R + g) | 0, t, 48),
          gn.writeUint32LE((T + m) | 0, t, 52),
          gn.writeUint32LE((C + y) | 0, t, 56),
          gn.writeUint32LE((U + v) | 0, t, 60);
      }
      function wn(t, e, r, i, n) {
        if ((void 0 === n && (n = 0), 32 !== t.length))
          throw new Error("ChaCha: key size must be 32 bytes");
        if (i.length < r.length)
          throw new Error("ChaCha: destination is shorter than source");
        var s, o;
        if (0 === n) {
          if (8 !== e.length && 12 !== e.length)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
          (o = (s = new Uint8Array(16)).length - e.length), s.set(e, o);
        } else {
          if (16 !== e.length)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
          (s = e), (o = n);
        }
        for (var a = new Uint8Array(64), c = 0; c < r.length; c += 64) {
          vn(a, s, t);
          for (var h = c; h < c + 64 && h < r.length; h++)
            i[h] = r[h] ^ a[h - c];
          bn(s, 0, o);
        }
        return mn.wipe(a), 0 === n && mn.wipe(s), i;
      }
      function bn(t, e, r) {
        for (var i = 1; r--; )
          (i = (i + (255 & t[e])) | 0), (t[e] = 255 & i), (i >>>= 8), e++;
        if (i > 0) throw new Error("ChaCha: counter overflow");
      }
      (pn.streamXOR = wn),
        (pn.stream = function (t, e, r, i) {
          return void 0 === i && (i = 0), mn.wipe(r), wn(t, e, r, r, i);
        });
      var _n = {},
        An = {};
      function En(t, e) {
        if (t.length !== e.length) return 0;
        for (var r = 0, i = 0; i < t.length; i++) r |= t[i] ^ e[i];
        return 1 & ((r - 1) >>> 8);
      }
      Object.defineProperty(An, "__esModule", { value: !0 }),
        (An.select = function (t, e, r) {
          return (~(t - 1) & e) | ((t - 1) & r);
        }),
        (An.lessOrEqual = function (t, e) {
          return (((0 | t) - (0 | e) - 1) >>> 31) & 1;
        }),
        (An.compare = En),
        (An.equal = function (t, e) {
          return 0 !== t.length && 0 !== e.length && 0 !== En(t, e);
        }),
        (function (t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var e = An,
            r = Je;
          t.DIGEST_LENGTH = 16;
          var i = (function () {
            function e(e) {
              (this.digestLength = t.DIGEST_LENGTH),
                (this._buffer = new Uint8Array(16)),
                (this._r = new Uint16Array(10)),
                (this._h = new Uint16Array(10)),
                (this._pad = new Uint16Array(8)),
                (this._leftover = 0),
                (this._fin = 0),
                (this._finished = !1);
              var r = e[0] | (e[1] << 8);
              this._r[0] = 8191 & r;
              var i = e[2] | (e[3] << 8);
              this._r[1] = 8191 & ((r >>> 13) | (i << 3));
              var n = e[4] | (e[5] << 8);
              this._r[2] = 7939 & ((i >>> 10) | (n << 6));
              var s = e[6] | (e[7] << 8);
              this._r[3] = 8191 & ((n >>> 7) | (s << 9));
              var o = e[8] | (e[9] << 8);
              (this._r[4] = 255 & ((s >>> 4) | (o << 12))),
                (this._r[5] = (o >>> 1) & 8190);
              var a = e[10] | (e[11] << 8);
              this._r[6] = 8191 & ((o >>> 14) | (a << 2));
              var c = e[12] | (e[13] << 8);
              this._r[7] = 8065 & ((a >>> 11) | (c << 5));
              var h = e[14] | (e[15] << 8);
              (this._r[8] = 8191 & ((c >>> 8) | (h << 8))),
                (this._r[9] = (h >>> 5) & 127),
                (this._pad[0] = e[16] | (e[17] << 8)),
                (this._pad[1] = e[18] | (e[19] << 8)),
                (this._pad[2] = e[20] | (e[21] << 8)),
                (this._pad[3] = e[22] | (e[23] << 8)),
                (this._pad[4] = e[24] | (e[25] << 8)),
                (this._pad[5] = e[26] | (e[27] << 8)),
                (this._pad[6] = e[28] | (e[29] << 8)),
                (this._pad[7] = e[30] | (e[31] << 8));
            }
            return (
              (e.prototype._blocks = function (t, e, r) {
                for (
                  var i = this._fin ? 0 : 2048,
                    n = this._h[0],
                    s = this._h[1],
                    o = this._h[2],
                    a = this._h[3],
                    c = this._h[4],
                    h = this._h[5],
                    u = this._h[6],
                    l = this._h[7],
                    f = this._h[8],
                    d = this._h[9],
                    p = this._r[0],
                    g = this._r[1],
                    m = this._r[2],
                    y = this._r[3],
                    v = this._r[4],
                    w = this._r[5],
                    b = this._r[6],
                    _ = this._r[7],
                    A = this._r[8],
                    E = this._r[9];
                  r >= 16;

                ) {
                  var S = t[e + 0] | (t[e + 1] << 8);
                  n += 8191 & S;
                  var I = t[e + 2] | (t[e + 3] << 8);
                  s += 8191 & ((S >>> 13) | (I << 3));
                  var M = t[e + 4] | (t[e + 5] << 8);
                  o += 8191 & ((I >>> 10) | (M << 6));
                  var N = t[e + 6] | (t[e + 7] << 8);
                  a += 8191 & ((M >>> 7) | (N << 9));
                  var O = t[e + 8] | (t[e + 9] << 8);
                  (c += 8191 & ((N >>> 4) | (O << 12))),
                    (h += (O >>> 1) & 8191);
                  var x = t[e + 10] | (t[e + 11] << 8);
                  u += 8191 & ((O >>> 14) | (x << 2));
                  var P = t[e + 12] | (t[e + 13] << 8);
                  l += 8191 & ((x >>> 11) | (P << 5));
                  var R = t[e + 14] | (t[e + 15] << 8),
                    T = 0,
                    C = T;
                  (C += n * p),
                    (C += s * (5 * E)),
                    (C += o * (5 * A)),
                    (C += a * (5 * _)),
                    (T = (C += c * (5 * b)) >>> 13),
                    (C &= 8191),
                    (C += h * (5 * w)),
                    (C += u * (5 * v)),
                    (C += l * (5 * y)),
                    (C += (f += 8191 & ((P >>> 8) | (R << 8))) * (5 * m));
                  var U = (T += (C += (d += (R >>> 5) | i) * (5 * g)) >>> 13);
                  (U += n * g),
                    (U += s * p),
                    (U += o * (5 * E)),
                    (U += a * (5 * A)),
                    (T = (U += c * (5 * _)) >>> 13),
                    (U &= 8191),
                    (U += h * (5 * b)),
                    (U += u * (5 * w)),
                    (U += l * (5 * v)),
                    (U += f * (5 * y)),
                    (T += (U += d * (5 * m)) >>> 13),
                    (U &= 8191);
                  var L = T;
                  (L += n * m),
                    (L += s * g),
                    (L += o * p),
                    (L += a * (5 * E)),
                    (T = (L += c * (5 * A)) >>> 13),
                    (L &= 8191),
                    (L += h * (5 * _)),
                    (L += u * (5 * b)),
                    (L += l * (5 * w)),
                    (L += f * (5 * v));
                  var k = (T += (L += d * (5 * y)) >>> 13);
                  (k += n * y),
                    (k += s * m),
                    (k += o * g),
                    (k += a * p),
                    (T = (k += c * (5 * E)) >>> 13),
                    (k &= 8191),
                    (k += h * (5 * A)),
                    (k += u * (5 * _)),
                    (k += l * (5 * b)),
                    (k += f * (5 * w));
                  var D = (T += (k += d * (5 * v)) >>> 13);
                  (D += n * v),
                    (D += s * y),
                    (D += o * m),
                    (D += a * g),
                    (T = (D += c * p) >>> 13),
                    (D &= 8191),
                    (D += h * (5 * E)),
                    (D += u * (5 * A)),
                    (D += l * (5 * _)),
                    (D += f * (5 * b));
                  var B = (T += (D += d * (5 * w)) >>> 13);
                  (B += n * w),
                    (B += s * v),
                    (B += o * y),
                    (B += a * m),
                    (T = (B += c * g) >>> 13),
                    (B &= 8191),
                    (B += h * p),
                    (B += u * (5 * E)),
                    (B += l * (5 * A)),
                    (B += f * (5 * _));
                  var q = (T += (B += d * (5 * b)) >>> 13);
                  (q += n * b),
                    (q += s * w),
                    (q += o * v),
                    (q += a * y),
                    (T = (q += c * m) >>> 13),
                    (q &= 8191),
                    (q += h * g),
                    (q += u * p),
                    (q += l * (5 * E)),
                    (q += f * (5 * A));
                  var j = (T += (q += d * (5 * _)) >>> 13);
                  (j += n * _),
                    (j += s * b),
                    (j += o * w),
                    (j += a * v),
                    (T = (j += c * y) >>> 13),
                    (j &= 8191),
                    (j += h * m),
                    (j += u * g),
                    (j += l * p),
                    (j += f * (5 * E));
                  var z = (T += (j += d * (5 * A)) >>> 13);
                  (z += n * A),
                    (z += s * _),
                    (z += o * b),
                    (z += a * w),
                    (T = (z += c * v) >>> 13),
                    (z &= 8191),
                    (z += h * y),
                    (z += u * m),
                    (z += l * g),
                    (z += f * p);
                  var F = (T += (z += d * (5 * E)) >>> 13);
                  (F += n * E),
                    (F += s * A),
                    (F += o * _),
                    (F += a * b),
                    (T = (F += c * w) >>> 13),
                    (F &= 8191),
                    (F += h * v),
                    (F += u * y),
                    (F += l * m),
                    (F += f * g),
                    (n = C =
                      8191 &
                      (T =
                        ((T = (((T += (F += d * p) >>> 13) << 2) + T) | 0) +
                          (C &= 8191)) |
                        0)),
                    (s = U += T >>>= 13),
                    (o = L &= 8191),
                    (a = k &= 8191),
                    (c = D &= 8191),
                    (h = B &= 8191),
                    (u = q &= 8191),
                    (l = j &= 8191),
                    (f = z &= 8191),
                    (d = F &= 8191),
                    (e += 16),
                    (r -= 16);
                }
                (this._h[0] = n),
                  (this._h[1] = s),
                  (this._h[2] = o),
                  (this._h[3] = a),
                  (this._h[4] = c),
                  (this._h[5] = h),
                  (this._h[6] = u),
                  (this._h[7] = l),
                  (this._h[8] = f),
                  (this._h[9] = d);
              }),
              (e.prototype.finish = function (t, e) {
                void 0 === e && (e = 0);
                var r,
                  i,
                  n,
                  s,
                  o = new Uint16Array(10);
                if (this._leftover) {
                  for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++)
                    this._buffer[s] = 0;
                  (this._fin = 1), this._blocks(this._buffer, 0, 16);
                }
                for (
                  r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2;
                  s < 10;
                  s++
                )
                  (this._h[s] += r),
                    (r = this._h[s] >>> 13),
                    (this._h[s] &= 8191);
                for (
                  this._h[0] += 5 * r,
                    r = this._h[0] >>> 13,
                    this._h[0] &= 8191,
                    this._h[1] += r,
                    r = this._h[1] >>> 13,
                    this._h[1] &= 8191,
                    this._h[2] += r,
                    o[0] = this._h[0] + 5,
                    r = o[0] >>> 13,
                    o[0] &= 8191,
                    s = 1;
                  s < 10;
                  s++
                )
                  (o[s] = this._h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191);
                for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++)
                  o[s] &= i;
                for (i = ~i, s = 0; s < 10; s++)
                  this._h[s] = (this._h[s] & i) | o[s];
                for (
                  this._h[0] = 65535 & (this._h[0] | (this._h[1] << 13)),
                    this._h[1] =
                      65535 & ((this._h[1] >>> 3) | (this._h[2] << 10)),
                    this._h[2] =
                      65535 & ((this._h[2] >>> 6) | (this._h[3] << 7)),
                    this._h[3] =
                      65535 & ((this._h[3] >>> 9) | (this._h[4] << 4)),
                    this._h[4] =
                      65535 &
                      ((this._h[4] >>> 12) |
                        (this._h[5] << 1) |
                        (this._h[6] << 14)),
                    this._h[5] =
                      65535 & ((this._h[6] >>> 2) | (this._h[7] << 11)),
                    this._h[6] =
                      65535 & ((this._h[7] >>> 5) | (this._h[8] << 8)),
                    this._h[7] =
                      65535 & ((this._h[8] >>> 8) | (this._h[9] << 5)),
                    n = this._h[0] + this._pad[0],
                    this._h[0] = 65535 & n,
                    s = 1;
                  s < 8;
                  s++
                )
                  (n = (((this._h[s] + this._pad[s]) | 0) + (n >>> 16)) | 0),
                    (this._h[s] = 65535 & n);
                return (
                  (t[e + 0] = this._h[0] >>> 0),
                  (t[e + 1] = this._h[0] >>> 8),
                  (t[e + 2] = this._h[1] >>> 0),
                  (t[e + 3] = this._h[1] >>> 8),
                  (t[e + 4] = this._h[2] >>> 0),
                  (t[e + 5] = this._h[2] >>> 8),
                  (t[e + 6] = this._h[3] >>> 0),
                  (t[e + 7] = this._h[3] >>> 8),
                  (t[e + 8] = this._h[4] >>> 0),
                  (t[e + 9] = this._h[4] >>> 8),
                  (t[e + 10] = this._h[5] >>> 0),
                  (t[e + 11] = this._h[5] >>> 8),
                  (t[e + 12] = this._h[6] >>> 0),
                  (t[e + 13] = this._h[6] >>> 8),
                  (t[e + 14] = this._h[7] >>> 0),
                  (t[e + 15] = this._h[7] >>> 8),
                  (this._finished = !0),
                  this
                );
              }),
              (e.prototype.update = function (t) {
                var e,
                  r = 0,
                  i = t.length;
                if (this._leftover) {
                  (e = 16 - this._leftover) > i && (e = i);
                  for (var n = 0; n < e; n++)
                    this._buffer[this._leftover + n] = t[r + n];
                  if (
                    ((i -= e),
                    (r += e),
                    (this._leftover += e),
                    this._leftover < 16)
                  )
                    return this;
                  this._blocks(this._buffer, 0, 16), (this._leftover = 0);
                }
                if (
                  (i >= 16 &&
                    ((e = i - (i % 16)),
                    this._blocks(t, r, e),
                    (r += e),
                    (i -= e)),
                  i)
                ) {
                  for (n = 0; n < i; n++)
                    this._buffer[this._leftover + n] = t[r + n];
                  this._leftover += i;
                }
                return this;
              }),
              (e.prototype.digest = function () {
                if (this._finished) throw new Error("Poly1305 was finished");
                var t = new Uint8Array(16);
                return this.finish(t), t;
              }),
              (e.prototype.clean = function () {
                return (
                  r.wipe(this._buffer),
                  r.wipe(this._r),
                  r.wipe(this._h),
                  r.wipe(this._pad),
                  (this._leftover = 0),
                  (this._fin = 0),
                  (this._finished = !0),
                  this
                );
              }),
              e
            );
          })();
          (t.Poly1305 = i),
            (t.oneTimeAuth = function (t, e) {
              var r = new i(t);
              r.update(e);
              var n = r.digest();
              return r.clean(), n;
            }),
            (t.equal = function (r, i) {
              return (
                r.length === t.DIGEST_LENGTH &&
                i.length === t.DIGEST_LENGTH &&
                e.equal(r, i)
              );
            });
        })(_n),
        (function (t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var e = pn,
            r = _n,
            i = Je,
            n = ir,
            s = An;
          (t.KEY_LENGTH = 32), (t.NONCE_LENGTH = 12), (t.TAG_LENGTH = 16);
          var o = new Uint8Array(16),
            a = (function () {
              function a(e) {
                if (
                  ((this.nonceLength = t.NONCE_LENGTH),
                  (this.tagLength = t.TAG_LENGTH),
                  e.length !== t.KEY_LENGTH)
                )
                  throw new Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(e);
              }
              return (
                (a.prototype.seal = function (t, r, n, s) {
                  if (t.length > 16)
                    throw new Error("ChaCha20Poly1305: incorrect nonce length");
                  var o = new Uint8Array(16);
                  o.set(t, o.length - t.length);
                  var a = new Uint8Array(32);
                  e.stream(this._key, o, a, 4);
                  var c,
                    h = r.length + this.tagLength;
                  if (s) {
                    if (s.length !== h)
                      throw new Error(
                        "ChaCha20Poly1305: incorrect destination length"
                      );
                    c = s;
                  } else c = new Uint8Array(h);
                  return (
                    e.streamXOR(this._key, o, r, c, 4),
                    this._authenticate(
                      c.subarray(c.length - this.tagLength, c.length),
                      a,
                      c.subarray(0, c.length - this.tagLength),
                      n
                    ),
                    i.wipe(o),
                    c
                  );
                }),
                (a.prototype.open = function (t, r, n, o) {
                  if (t.length > 16)
                    throw new Error("ChaCha20Poly1305: incorrect nonce length");
                  if (r.length < this.tagLength) return null;
                  var a = new Uint8Array(16);
                  a.set(t, a.length - t.length);
                  var c = new Uint8Array(32);
                  e.stream(this._key, a, c, 4);
                  var h = new Uint8Array(this.tagLength);
                  if (
                    (this._authenticate(
                      h,
                      c,
                      r.subarray(0, r.length - this.tagLength),
                      n
                    ),
                    !s.equal(
                      h,
                      r.subarray(r.length - this.tagLength, r.length)
                    ))
                  )
                    return null;
                  var u,
                    l = r.length - this.tagLength;
                  if (o) {
                    if (o.length !== l)
                      throw new Error(
                        "ChaCha20Poly1305: incorrect destination length"
                      );
                    u = o;
                  } else u = new Uint8Array(l);
                  return (
                    e.streamXOR(
                      this._key,
                      a,
                      r.subarray(0, r.length - this.tagLength),
                      u,
                      4
                    ),
                    i.wipe(a),
                    u
                  );
                }),
                (a.prototype.clean = function () {
                  return i.wipe(this._key), this;
                }),
                (a.prototype._authenticate = function (t, e, s, a) {
                  var c = new r.Poly1305(e);
                  a &&
                    (c.update(a),
                    a.length % 16 > 0 && c.update(o.subarray(a.length % 16))),
                    c.update(s),
                    s.length % 16 > 0 && c.update(o.subarray(s.length % 16));
                  var h = new Uint8Array(8);
                  a && n.writeUint64LE(a.length, h),
                    c.update(h),
                    n.writeUint64LE(s.length, h),
                    c.update(h);
                  for (var u = c.digest(), l = 0; l < u.length; l++)
                    t[l] = u[l];
                  c.clean(), i.wipe(u), i.wipe(h);
                }),
                a
              );
            })();
          t.ChaCha20Poly1305 = a;
        })(dn);
      var Sn = {},
        In = {},
        Mn = {};
      Object.defineProperty(Mn, "__esModule", { value: !0 }),
        (Mn.isSerializableHash = function (t) {
          return (
            typeof t.saveState < "u" &&
            typeof t.restoreState < "u" &&
            typeof t.cleanSavedState < "u"
          );
        }),
        Object.defineProperty(In, "__esModule", { value: !0 });
      var Nn = Mn,
        On = An,
        xn = Je,
        Pn = (function () {
          function t(t, e) {
            (this._finished = !1),
              (this._inner = new t()),
              (this._outer = new t()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var r = new Uint8Array(this.blockSize);
            e.length > this.blockSize
              ? this._inner.update(e).finish(r).clean()
              : r.set(e);
            for (var i = 0; i < r.length; i++) r[i] ^= 54;
            this._inner.update(r);
            for (i = 0; i < r.length; i++) r[i] ^= 106;
            this._outer.update(r),
              Nn.isSerializableHash(this._inner) &&
                Nn.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              xn.wipe(r);
          }
          return (
            (t.prototype.reset = function () {
              if (
                !Nn.isSerializableHash(this._inner) ||
                !Nn.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()"
                );
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (t.prototype.clean = function () {
              Nn.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                Nn.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (t.prototype.update = function (t) {
              return this._inner.update(t), this;
            }),
            (t.prototype.finish = function (t) {
              return this._finished
                ? (this._outer.finish(t), this)
                : (this._inner.finish(t),
                  this._outer
                    .update(t.subarray(0, this.digestLength))
                    .finish(t),
                  (this._finished = !0),
                  this);
            }),
            (t.prototype.digest = function () {
              var t = new Uint8Array(this.digestLength);
              return this.finish(t), t;
            }),
            (t.prototype.saveState = function () {
              if (!Nn.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't saveState() because hash doesn't implement it"
                );
              return this._inner.saveState();
            }),
            (t.prototype.restoreState = function (t) {
              if (
                !Nn.isSerializableHash(this._inner) ||
                !Nn.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't restoreState() because hash doesn't implement it"
                );
              return (
                this._inner.restoreState(t),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (t.prototype.cleanSavedState = function (t) {
              if (!Nn.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it"
                );
              this._inner.cleanSavedState(t);
            }),
            t
          );
        })();
      (In.HMAC = Pn),
        (In.hmac = function (t, e, r) {
          var i = new Pn(t, e);
          i.update(r);
          var n = i.digest();
          return i.clean(), n;
        }),
        (In.equal = On.equal),
        Object.defineProperty(Sn, "__esModule", { value: !0 });
      var Rn = In,
        Tn = Je,
        Cn = (function () {
          function t(t, e, r, i) {
            void 0 === r && (r = new Uint8Array(0)),
              (this._counter = new Uint8Array(1)),
              (this._hash = t),
              (this._info = i);
            var n = Rn.hmac(this._hash, r, e);
            (this._hmac = new Rn.HMAC(t, n)),
              (this._buffer = new Uint8Array(this._hmac.digestLength)),
              (this._bufpos = this._buffer.length);
          }
          return (
            (t.prototype._fillBuffer = function () {
              this._counter[0]++;
              var t = this._counter[0];
              if (0 === t) throw new Error("hkdf: cannot expand more");
              this._hmac.reset(),
                t > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                (this._bufpos = 0);
            }),
            (t.prototype.expand = function (t) {
              for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                this._bufpos === this._buffer.length && this._fillBuffer(),
                  (e[r] = this._buffer[this._bufpos++]);
              return e;
            }),
            (t.prototype.clean = function () {
              this._hmac.clean(),
                Tn.wipe(this._buffer),
                Tn.wipe(this._counter),
                (this._bufpos = 0);
            }),
            t
          );
        })(),
        Un = (Sn.HKDF = Cn),
        Ln = {};
      !(function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var e = ir,
          r = Je;
        (t.DIGEST_LENGTH = 32), (t.BLOCK_SIZE = 64);
        var i = (function () {
          function i() {
            (this.digestLength = t.DIGEST_LENGTH),
              (this.blockSize = t.BLOCK_SIZE),
              (this._state = new Int32Array(8)),
              (this._temp = new Int32Array(64)),
              (this._buffer = new Uint8Array(128)),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this.reset();
          }
          return (
            (i.prototype._initState = function () {
              (this._state[0] = 1779033703),
                (this._state[1] = 3144134277),
                (this._state[2] = 1013904242),
                (this._state[3] = 2773480762),
                (this._state[4] = 1359893119),
                (this._state[5] = 2600822924),
                (this._state[6] = 528734635),
                (this._state[7] = 1541459225);
            }),
            (i.prototype.reset = function () {
              return (
                this._initState(),
                (this._bufferLength = 0),
                (this._bytesHashed = 0),
                (this._finished = !1),
                this
              );
            }),
            (i.prototype.clean = function () {
              r.wipe(this._buffer), r.wipe(this._temp), this.reset();
            }),
            (i.prototype.update = function (t, e) {
              if ((void 0 === e && (e = t.length), this._finished))
                throw new Error(
                  "SHA256: can't update because hash was finished."
                );
              var r = 0;
              if (((this._bytesHashed += e), this._bufferLength > 0)) {
                for (; this._bufferLength < this.blockSize && e > 0; )
                  (this._buffer[this._bufferLength++] = t[r++]), e--;
                this._bufferLength === this.blockSize &&
                  (s(this._temp, this._state, this._buffer, 0, this.blockSize),
                  (this._bufferLength = 0));
              }
              for (
                e >= this.blockSize &&
                ((r = s(this._temp, this._state, t, r, e)),
                (e %= this.blockSize));
                e > 0;

              )
                (this._buffer[this._bufferLength++] = t[r++]), e--;
              return this;
            }),
            (i.prototype.finish = function (t) {
              if (!this._finished) {
                var r = this._bytesHashed,
                  i = this._bufferLength,
                  n = (r / 536870912) | 0,
                  o = r << 3,
                  a = r % 64 < 56 ? 64 : 128;
                this._buffer[i] = 128;
                for (var c = i + 1; c < a - 8; c++) this._buffer[c] = 0;
                e.writeUint32BE(n, this._buffer, a - 8),
                  e.writeUint32BE(o, this._buffer, a - 4),
                  s(this._temp, this._state, this._buffer, 0, a),
                  (this._finished = !0);
              }
              for (c = 0; c < this.digestLength / 4; c++)
                e.writeUint32BE(this._state[c], t, 4 * c);
              return this;
            }),
            (i.prototype.digest = function () {
              var t = new Uint8Array(this.digestLength);
              return this.finish(t), t;
            }),
            (i.prototype.saveState = function () {
              if (this._finished)
                throw new Error("SHA256: cannot save finished state");
              return {
                state: new Int32Array(this._state),
                buffer:
                  this._bufferLength > 0
                    ? new Uint8Array(this._buffer)
                    : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed,
              };
            }),
            (i.prototype.restoreState = function (t) {
              return (
                this._state.set(t.state),
                (this._bufferLength = t.bufferLength),
                t.buffer && this._buffer.set(t.buffer),
                (this._bytesHashed = t.bytesHashed),
                (this._finished = !1),
                this
              );
            }),
            (i.prototype.cleanSavedState = function (t) {
              r.wipe(t.state),
                t.buffer && r.wipe(t.buffer),
                (t.bufferLength = 0),
                (t.bytesHashed = 0);
            }),
            i
          );
        })();
        t.SHA256 = i;
        var n = new Int32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]);
        function s(t, r, i, s, o) {
          for (; o >= 64; ) {
            for (
              var a = r[0],
                c = r[1],
                h = r[2],
                u = r[3],
                l = r[4],
                f = r[5],
                d = r[6],
                p = r[7],
                g = 0;
              g < 16;
              g++
            ) {
              var m = s + 4 * g;
              t[g] = e.readUint32BE(i, m);
            }
            for (g = 16; g < 64; g++) {
              var y = t[g - 2],
                v =
                  ((y >>> 17) | (y << 15)) ^
                  ((y >>> 19) | (y << 13)) ^
                  (y >>> 10),
                w =
                  (((y = t[g - 15]) >>> 7) | (y << 25)) ^
                  ((y >>> 18) | (y << 14)) ^
                  (y >>> 3);
              t[g] = ((v + t[g - 7]) | 0) + ((w + t[g - 16]) | 0);
            }
            for (g = 0; g < 64; g++) {
              (v =
                ((((((l >>> 6) | (l << 26)) ^
                  ((l >>> 11) | (l << 21)) ^
                  ((l >>> 25) | (l << 7))) +
                  ((l & f) ^ (~l & d))) |
                  0) +
                  ((p + ((n[g] + t[g]) | 0)) | 0)) |
                0),
                (w =
                  ((((a >>> 2) | (a << 30)) ^
                    ((a >>> 13) | (a << 19)) ^
                    ((a >>> 22) | (a << 10))) +
                    ((a & c) ^ (a & h) ^ (c & h))) |
                  0);
              (p = d),
                (d = f),
                (f = l),
                (l = (u + v) | 0),
                (u = h),
                (h = c),
                (c = a),
                (a = (v + w) | 0);
            }
            (r[0] += a),
              (r[1] += c),
              (r[2] += h),
              (r[3] += u),
              (r[4] += l),
              (r[5] += f),
              (r[6] += d),
              (r[7] += p),
              (s += 64),
              (o -= 64);
          }
          return s;
        }
        t.hash = function (t) {
          var e = new i();
          e.update(t);
          var r = e.digest();
          return e.clean(), r;
        };
      })(Ln);
      var kn = {};
      !(function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sharedKey =
            t.generateKeyPair =
            t.generateKeyPairFromSeed =
            t.scalarMultBase =
            t.scalarMult =
            t.SHARED_KEY_LENGTH =
            t.SECRET_KEY_LENGTH =
            t.PUBLIC_KEY_LENGTH =
              void 0);
        const e = Ge,
          r = Je;
        function i(t) {
          const e = new Float64Array(16);
          if (t) for (let r = 0; r < t.length; r++) e[r] = t[r];
          return e;
        }
        (t.PUBLIC_KEY_LENGTH = 32),
          (t.SECRET_KEY_LENGTH = 32),
          (t.SHARED_KEY_LENGTH = 32);
        const n = new Uint8Array(32);
        n[0] = 9;
        const s = i([56129, 1]);
        function o(t) {
          let e = 1;
          for (let r = 0; r < 16; r++) {
            let i = t[r] + e + 65535;
            (e = Math.floor(i / 65536)), (t[r] = i - 65536 * e);
          }
          t[0] += e - 1 + 37 * (e - 1);
        }
        function a(t, e, r) {
          const i = ~(r - 1);
          for (let n = 0; n < 16; n++) {
            const r = i & (t[n] ^ e[n]);
            (t[n] ^= r), (e[n] ^= r);
          }
        }
        function c(t, e, r) {
          for (let i = 0; i < 16; i++) t[i] = e[i] + r[i];
        }
        function h(t, e, r) {
          for (let i = 0; i < 16; i++) t[i] = e[i] - r[i];
        }
        function u(t, e, r) {
          let i,
            n,
            s = 0,
            o = 0,
            a = 0,
            c = 0,
            h = 0,
            u = 0,
            l = 0,
            f = 0,
            d = 0,
            p = 0,
            g = 0,
            m = 0,
            y = 0,
            v = 0,
            w = 0,
            b = 0,
            _ = 0,
            A = 0,
            E = 0,
            S = 0,
            I = 0,
            M = 0,
            N = 0,
            O = 0,
            x = 0,
            P = 0,
            R = 0,
            T = 0,
            C = 0,
            U = 0,
            L = 0,
            k = r[0],
            D = r[1],
            B = r[2],
            q = r[3],
            j = r[4],
            z = r[5],
            F = r[6],
            K = r[7],
            H = r[8],
            V = r[9],
            G = r[10],
            W = r[11],
            Y = r[12],
            Q = r[13],
            J = r[14],
            X = r[15];
          (i = e[0]),
            (s += i * k),
            (o += i * D),
            (a += i * B),
            (c += i * q),
            (h += i * j),
            (u += i * z),
            (l += i * F),
            (f += i * K),
            (d += i * H),
            (p += i * V),
            (g += i * G),
            (m += i * W),
            (y += i * Y),
            (v += i * Q),
            (w += i * J),
            (b += i * X),
            (i = e[1]),
            (o += i * k),
            (a += i * D),
            (c += i * B),
            (h += i * q),
            (u += i * j),
            (l += i * z),
            (f += i * F),
            (d += i * K),
            (p += i * H),
            (g += i * V),
            (m += i * G),
            (y += i * W),
            (v += i * Y),
            (w += i * Q),
            (b += i * J),
            (_ += i * X),
            (i = e[2]),
            (a += i * k),
            (c += i * D),
            (h += i * B),
            (u += i * q),
            (l += i * j),
            (f += i * z),
            (d += i * F),
            (p += i * K),
            (g += i * H),
            (m += i * V),
            (y += i * G),
            (v += i * W),
            (w += i * Y),
            (b += i * Q),
            (_ += i * J),
            (A += i * X),
            (i = e[3]),
            (c += i * k),
            (h += i * D),
            (u += i * B),
            (l += i * q),
            (f += i * j),
            (d += i * z),
            (p += i * F),
            (g += i * K),
            (m += i * H),
            (y += i * V),
            (v += i * G),
            (w += i * W),
            (b += i * Y),
            (_ += i * Q),
            (A += i * J),
            (E += i * X),
            (i = e[4]),
            (h += i * k),
            (u += i * D),
            (l += i * B),
            (f += i * q),
            (d += i * j),
            (p += i * z),
            (g += i * F),
            (m += i * K),
            (y += i * H),
            (v += i * V),
            (w += i * G),
            (b += i * W),
            (_ += i * Y),
            (A += i * Q),
            (E += i * J),
            (S += i * X),
            (i = e[5]),
            (u += i * k),
            (l += i * D),
            (f += i * B),
            (d += i * q),
            (p += i * j),
            (g += i * z),
            (m += i * F),
            (y += i * K),
            (v += i * H),
            (w += i * V),
            (b += i * G),
            (_ += i * W),
            (A += i * Y),
            (E += i * Q),
            (S += i * J),
            (I += i * X),
            (i = e[6]),
            (l += i * k),
            (f += i * D),
            (d += i * B),
            (p += i * q),
            (g += i * j),
            (m += i * z),
            (y += i * F),
            (v += i * K),
            (w += i * H),
            (b += i * V),
            (_ += i * G),
            (A += i * W),
            (E += i * Y),
            (S += i * Q),
            (I += i * J),
            (M += i * X),
            (i = e[7]),
            (f += i * k),
            (d += i * D),
            (p += i * B),
            (g += i * q),
            (m += i * j),
            (y += i * z),
            (v += i * F),
            (w += i * K),
            (b += i * H),
            (_ += i * V),
            (A += i * G),
            (E += i * W),
            (S += i * Y),
            (I += i * Q),
            (M += i * J),
            (N += i * X),
            (i = e[8]),
            (d += i * k),
            (p += i * D),
            (g += i * B),
            (m += i * q),
            (y += i * j),
            (v += i * z),
            (w += i * F),
            (b += i * K),
            (_ += i * H),
            (A += i * V),
            (E += i * G),
            (S += i * W),
            (I += i * Y),
            (M += i * Q),
            (N += i * J),
            (O += i * X),
            (i = e[9]),
            (p += i * k),
            (g += i * D),
            (m += i * B),
            (y += i * q),
            (v += i * j),
            (w += i * z),
            (b += i * F),
            (_ += i * K),
            (A += i * H),
            (E += i * V),
            (S += i * G),
            (I += i * W),
            (M += i * Y),
            (N += i * Q),
            (O += i * J),
            (x += i * X),
            (i = e[10]),
            (g += i * k),
            (m += i * D),
            (y += i * B),
            (v += i * q),
            (w += i * j),
            (b += i * z),
            (_ += i * F),
            (A += i * K),
            (E += i * H),
            (S += i * V),
            (I += i * G),
            (M += i * W),
            (N += i * Y),
            (O += i * Q),
            (x += i * J),
            (P += i * X),
            (i = e[11]),
            (m += i * k),
            (y += i * D),
            (v += i * B),
            (w += i * q),
            (b += i * j),
            (_ += i * z),
            (A += i * F),
            (E += i * K),
            (S += i * H),
            (I += i * V),
            (M += i * G),
            (N += i * W),
            (O += i * Y),
            (x += i * Q),
            (P += i * J),
            (R += i * X),
            (i = e[12]),
            (y += i * k),
            (v += i * D),
            (w += i * B),
            (b += i * q),
            (_ += i * j),
            (A += i * z),
            (E += i * F),
            (S += i * K),
            (I += i * H),
            (M += i * V),
            (N += i * G),
            (O += i * W),
            (x += i * Y),
            (P += i * Q),
            (R += i * J),
            (T += i * X),
            (i = e[13]),
            (v += i * k),
            (w += i * D),
            (b += i * B),
            (_ += i * q),
            (A += i * j),
            (E += i * z),
            (S += i * F),
            (I += i * K),
            (M += i * H),
            (N += i * V),
            (O += i * G),
            (x += i * W),
            (P += i * Y),
            (R += i * Q),
            (T += i * J),
            (C += i * X),
            (i = e[14]),
            (w += i * k),
            (b += i * D),
            (_ += i * B),
            (A += i * q),
            (E += i * j),
            (S += i * z),
            (I += i * F),
            (M += i * K),
            (N += i * H),
            (O += i * V),
            (x += i * G),
            (P += i * W),
            (R += i * Y),
            (T += i * Q),
            (C += i * J),
            (U += i * X),
            (i = e[15]),
            (b += i * k),
            (_ += i * D),
            (A += i * B),
            (E += i * q),
            (S += i * j),
            (I += i * z),
            (M += i * F),
            (N += i * K),
            (O += i * H),
            (x += i * V),
            (P += i * G),
            (R += i * W),
            (T += i * Y),
            (C += i * Q),
            (U += i * J),
            (L += i * X),
            (s += 38 * _),
            (o += 38 * A),
            (a += 38 * E),
            (c += 38 * S),
            (h += 38 * I),
            (u += 38 * M),
            (l += 38 * N),
            (f += 38 * O),
            (d += 38 * x),
            (p += 38 * P),
            (g += 38 * R),
            (m += 38 * T),
            (y += 38 * C),
            (v += 38 * U),
            (w += 38 * L),
            (n = 1),
            (i = s + n + 65535),
            (n = Math.floor(i / 65536)),
            (s = i - 65536 * n),
            (i = o + n + 65535),
            (n = Math.floor(i / 65536)),
            (o = i - 65536 * n),
            (i = a + n + 65535),
            (n = Math.floor(i / 65536)),
            (a = i - 65536 * n),
            (i = c + n + 65535),
            (n = Math.floor(i / 65536)),
            (c = i - 65536 * n),
            (i = h + n + 65535),
            (n = Math.floor(i / 65536)),
            (h = i - 65536 * n),
            (i = u + n + 65535),
            (n = Math.floor(i / 65536)),
            (u = i - 65536 * n),
            (i = l + n + 65535),
            (n = Math.floor(i / 65536)),
            (l = i - 65536 * n),
            (i = f + n + 65535),
            (n = Math.floor(i / 65536)),
            (f = i - 65536 * n),
            (i = d + n + 65535),
            (n = Math.floor(i / 65536)),
            (d = i - 65536 * n),
            (i = p + n + 65535),
            (n = Math.floor(i / 65536)),
            (p = i - 65536 * n),
            (i = g + n + 65535),
            (n = Math.floor(i / 65536)),
            (g = i - 65536 * n),
            (i = m + n + 65535),
            (n = Math.floor(i / 65536)),
            (m = i - 65536 * n),
            (i = y + n + 65535),
            (n = Math.floor(i / 65536)),
            (y = i - 65536 * n),
            (i = v + n + 65535),
            (n = Math.floor(i / 65536)),
            (v = i - 65536 * n),
            (i = w + n + 65535),
            (n = Math.floor(i / 65536)),
            (w = i - 65536 * n),
            (i = b + n + 65535),
            (n = Math.floor(i / 65536)),
            (b = i - 65536 * n),
            (s += n - 1 + 37 * (n - 1)),
            (n = 1),
            (i = s + n + 65535),
            (n = Math.floor(i / 65536)),
            (s = i - 65536 * n),
            (i = o + n + 65535),
            (n = Math.floor(i / 65536)),
            (o = i - 65536 * n),
            (i = a + n + 65535),
            (n = Math.floor(i / 65536)),
            (a = i - 65536 * n),
            (i = c + n + 65535),
            (n = Math.floor(i / 65536)),
            (c = i - 65536 * n),
            (i = h + n + 65535),
            (n = Math.floor(i / 65536)),
            (h = i - 65536 * n),
            (i = u + n + 65535),
            (n = Math.floor(i / 65536)),
            (u = i - 65536 * n),
            (i = l + n + 65535),
            (n = Math.floor(i / 65536)),
            (l = i - 65536 * n),
            (i = f + n + 65535),
            (n = Math.floor(i / 65536)),
            (f = i - 65536 * n),
            (i = d + n + 65535),
            (n = Math.floor(i / 65536)),
            (d = i - 65536 * n),
            (i = p + n + 65535),
            (n = Math.floor(i / 65536)),
            (p = i - 65536 * n),
            (i = g + n + 65535),
            (n = Math.floor(i / 65536)),
            (g = i - 65536 * n),
            (i = m + n + 65535),
            (n = Math.floor(i / 65536)),
            (m = i - 65536 * n),
            (i = y + n + 65535),
            (n = Math.floor(i / 65536)),
            (y = i - 65536 * n),
            (i = v + n + 65535),
            (n = Math.floor(i / 65536)),
            (v = i - 65536 * n),
            (i = w + n + 65535),
            (n = Math.floor(i / 65536)),
            (w = i - 65536 * n),
            (i = b + n + 65535),
            (n = Math.floor(i / 65536)),
            (b = i - 65536 * n),
            (s += n - 1 + 37 * (n - 1)),
            (t[0] = s),
            (t[1] = o),
            (t[2] = a),
            (t[3] = c),
            (t[4] = h),
            (t[5] = u),
            (t[6] = l),
            (t[7] = f),
            (t[8] = d),
            (t[9] = p),
            (t[10] = g),
            (t[11] = m),
            (t[12] = y),
            (t[13] = v),
            (t[14] = w),
            (t[15] = b);
        }
        function l(t, e) {
          u(t, e, e);
        }
        function f(t, e) {
          const r = new Uint8Array(32),
            n = new Float64Array(80),
            f = i(),
            d = i(),
            p = i(),
            g = i(),
            m = i(),
            y = i();
          for (let i = 0; i < 31; i++) r[i] = t[i];
          (r[31] = (127 & t[31]) | 64),
            (r[0] &= 248),
            (function (t, e) {
              for (let r = 0; r < 16; r++)
                t[r] = e[2 * r] + (e[2 * r + 1] << 8);
              t[15] &= 32767;
            })(n, e);
          for (let i = 0; i < 16; i++) d[i] = n[i];
          f[0] = g[0] = 1;
          for (let i = 254; i >= 0; --i) {
            const t = (r[i >>> 3] >>> (7 & i)) & 1;
            a(f, d, t),
              a(p, g, t),
              c(m, f, p),
              h(f, f, p),
              c(p, d, g),
              h(d, d, g),
              l(g, m),
              l(y, f),
              u(f, p, f),
              u(p, d, m),
              c(m, f, p),
              h(f, f, p),
              l(d, f),
              h(p, g, y),
              u(f, p, s),
              c(f, f, g),
              u(p, p, f),
              u(f, g, y),
              u(g, d, n),
              l(d, m),
              a(f, d, t),
              a(p, g, t);
          }
          for (let i = 0; i < 16; i++)
            (n[i + 16] = f[i]),
              (n[i + 32] = p[i]),
              (n[i + 48] = d[i]),
              (n[i + 64] = g[i]);
          const v = n.subarray(32),
            w = n.subarray(16);
          (function (t, e) {
            const r = i();
            for (let i = 0; i < 16; i++) r[i] = e[i];
            for (let i = 253; i >= 0; i--)
              l(r, r), 2 !== i && 4 !== i && u(r, r, e);
            for (let i = 0; i < 16; i++) t[i] = r[i];
          })(v, v),
            u(w, w, v);
          const b = new Uint8Array(32);
          return (
            (function (t, e) {
              const r = i(),
                n = i();
              for (let i = 0; i < 16; i++) n[i] = e[i];
              o(n), o(n), o(n);
              for (let i = 0; i < 2; i++) {
                r[0] = n[0] - 65517;
                for (let e = 1; e < 15; e++)
                  (r[e] = n[e] - 65535 - ((r[e - 1] >> 16) & 1)),
                    (r[e - 1] &= 65535);
                r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
                const t = (r[15] >> 16) & 1;
                (r[14] &= 65535), a(n, r, 1 - t);
              }
              for (let i = 0; i < 16; i++)
                (t[2 * i] = 255 & n[i]), (t[2 * i + 1] = n[i] >> 8);
            })(b, w),
            b
          );
        }
        function d(t) {
          return f(t, n);
        }
        function p(e) {
          if (e.length !== t.SECRET_KEY_LENGTH)
            throw new Error(
              "x25519: seed must be ".concat(t.SECRET_KEY_LENGTH, " bytes")
            );
          const r = new Uint8Array(e);
          return { publicKey: d(r), secretKey: r };
        }
        (t.scalarMult = f),
          (t.scalarMultBase = d),
          (t.generateKeyPairFromSeed = p),
          (t.generateKeyPair = function (t) {
            const i = (0, e.randomBytes)(32, t),
              n = p(i);
            return (0, r.wipe)(i), n;
          }),
          (t.sharedKey = function (e, r) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (e.length !== t.PUBLIC_KEY_LENGTH)
              throw new Error("X25519: incorrect secret key length");
            if (r.length !== t.PUBLIC_KEY_LENGTH)
              throw new Error("X25519: incorrect public key length");
            const n = f(e, r);
            if (i) {
              let t = 0;
              for (let e = 0; e < n.length; e++) t |= n[e];
              if (0 === t) throw new Error("X25519: invalid shared key");
            }
            return n;
          });
      })(kn);
      const Dn = {
          waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe",
          },
          irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe",
          },
          iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe",
          },
        },
        Bn = ":";
      function qn(t) {
        const [e, r] = t.split(Bn);
        return { namespace: e, reference: r };
      }
      function jn(t) {
        const { namespace: e, reference: r } = (function (t) {
          const [e, r, i] = t.split(Bn);
          return { namespace: e, reference: r, address: i };
        })(t);
        return (function (t) {
          const { namespace: e, reference: r } = t;
          return [e, r].join(Bn);
        })({ namespace: e, reference: r });
      }
      function zn(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const r = [];
        return (
          Object.keys(t).forEach((i) => {
            if (e.length && !e.includes(i)) return;
            const n = t[i];
            r.push(...n.accounts);
          }),
          r
        );
      }
      function Fn(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const r = [];
        return (
          Object.keys(t).forEach((i) => {
            if (e.length && !e.includes(i)) return;
            const n = t[i];
            r.push(
              ...(function (t) {
                return (function (t, e) {
                  const r = [];
                  return (
                    t.forEach((t) => {
                      const i = e(t);
                      r.includes(i) || r.push(i);
                    }),
                    r
                  );
                })(t, jn);
              })(n.accounts)
            );
          }),
          r
        );
      }
      function Kn(t, e) {
        return t.includes(":") ? [t] : e.chains || [];
      }
      var Hn = Object.defineProperty,
        Vn = Object.getOwnPropertySymbols,
        Gn = Object.prototype.hasOwnProperty,
        Wn = Object.prototype.propertyIsEnumerable,
        Yn = (t, e, r) =>
          e in t
            ? Hn(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Qn = (t, e) => {
          for (var r in e || (e = {})) Gn.call(e, r) && Yn(t, r, e[r]);
          if (Vn) for (var r of Vn(e)) Wn.call(e, r) && Yn(t, r, e[r]);
          return t;
        };
      const Jn = "ReactNative",
        Xn = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        },
        Zn = "js";
      function $n() {
        return (
          typeof c < "u" &&
          typeof c.versions < "u" &&
          typeof c.versions.node < "u"
        );
      }
      function ts() {
        return !Ji() && !!Xi() && navigator.product === Jn;
      }
      function es() {
        return !$n() && !!Xi() && !!Ji();
      }
      function rs() {
        return ts()
          ? Xn.reactNative
          : $n()
          ? Xn.node
          : es()
          ? Xn.browser
          : Xn.unknown;
      }
      function is(t, e, r) {
        const i = (function () {
            if (
              rs() === Xn.reactNative &&
              typeof global < "u" &&
              typeof (null == global ? void 0 : global.Platform) < "u"
            ) {
              const { OS: t, Version: e } = global.Platform;
              return [t, e].join("-");
            }
            const t = Vi();
            if (null === t) return "unknown";
            const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === t.type
              ? [e, t.name, t.version].join("-")
              : [e, t.version].join("-");
          })(),
          n = (function () {
            var t;
            const e = rs();
            return e === Xn.browser
              ? [e, (null == (t = Zi()) ? void 0 : t.host) || "unknown"].join(
                  ":"
                )
              : e;
          })();
        return [[t, e].join("-"), [Zn, r].join("-"), i, n].join("/");
      }
      function ns(t) {
        let {
          protocol: e,
          version: r,
          relayUrl: i,
          sdkVersion: n,
          auth: s,
          projectId: o,
          useOnCloseEvent: a,
          bundleId: c,
        } = t;
        const h = i.split("?"),
          u = {
            auth: s,
            ua: is(e, r, n),
            projectId: o,
            useOnCloseEvent: a || void 0,
            origin: c || void 0,
          },
          l = (function (t, e) {
            let r = rn.parse(t);
            return (r = Qn(Qn({}, r), e)), rn.stringify(r);
          })(h[1] || "", u);
        return h[0] + "?" + l;
      }
      function ss(t, e) {
        return t.filter((t) => e.includes(t)).length === t.length;
      }
      function os(t) {
        return Object.fromEntries(t.entries());
      }
      function as(t) {
        return new Map(Object.entries(t));
      }
      function cs() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : dt.FIVE_MINUTES,
          e = arguments.length > 1 ? arguments[1] : void 0;
        const r = dt.toMiliseconds(t || dt.FIVE_MINUTES);
        let i, n, s;
        return {
          resolve: (t) => {
            s && i && (clearTimeout(s), i(t));
          },
          reject: (t) => {
            s && n && (clearTimeout(s), n(t));
          },
          done: () =>
            new Promise((t, o) => {
              (s = setTimeout(() => {
                o(new Error(e));
              }, r)),
                (i = t),
                (n = o);
            }),
        };
      }
      function hs(t, e, r) {
        return new Promise(async (i, n) => {
          const s = setTimeout(() => n(new Error(r)), e);
          try {
            i(await t);
          } catch (o) {
            n(o);
          }
          clearTimeout(s);
        });
      }
      function us(t, e) {
        if ("string" == typeof e && e.startsWith("".concat(t, ":"))) return e;
        if ("topic" === t.toLowerCase()) {
          if ("string" != typeof e)
            throw new Error(
              'Value must be "string" for expirer target type: topic'
            );
          return "topic:".concat(e);
        }
        if ("id" === t.toLowerCase()) {
          if ("number" != typeof e)
            throw new Error(
              'Value must be "number" for expirer target type: id'
            );
          return "id:".concat(e);
        }
        throw new Error("Unknown expirer target type: ".concat(t));
      }
      function ls(t) {
        const [e, r] = t.split(":"),
          i = { id: void 0, topic: void 0 };
        if ("topic" === e && "string" == typeof r) i.topic = r;
        else {
          if ("id" !== e || !Number.isInteger(Number(r)))
            throw new Error(
              "Invalid target, expected id:number or topic:string, got "
                .concat(e, ":")
                .concat(r)
            );
          i.id = Number(r);
        }
        return i;
      }
      function fs(t, e) {
        return dt.fromMiliseconds((e || Date.now()) + dt.toMiliseconds(t));
      }
      function ds(t) {
        return Date.now() >= dt.toMiliseconds(t);
      }
      function ps(t, e) {
        return "".concat(t).concat(e ? ":".concat(e) : "");
      }
      function gs() {
        return [
          ...new Set([
            ...(arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : []),
            ...(arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : []),
          ]),
        ];
      }
      var ms =
        typeof globalThis < "u"
          ? globalThis
          : typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {};
      var ys = { exports: {} };
      !(function (t) {
        !(function () {
          var e = "input is invalid type",
            r = "object" == typeof window,
            i = r ? window : {};
          i.JS_SHA3_NO_WINDOW && (r = !1);
          var n = !r && "object" == typeof self;
          !i.JS_SHA3_NO_NODE_JS &&
          "object" == typeof c &&
          c.versions &&
          c.versions.node
            ? (i = ms)
            : n && (i = self);
          var s = !i.JS_SHA3_NO_COMMON_JS && t.exports,
            o = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
            a = "0123456789abcdef".split(""),
            h = [4, 1024, 262144, 67108864],
            u = [0, 8, 16, 24],
            l = [
              1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907,
              0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138,
              0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
              2147483648, 32905, 2147483648, 32771, 2147483648, 32770,
              2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
              2147516545, 2147483648, 32896, 2147483648, 2147483649, 0,
              2147516424, 2147483648,
            ],
            f = [224, 256, 384, 512],
            d = [128, 256],
            p = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            g = { 128: 168, 256: 136 };
          (i.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
            (Array.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
            o &&
              (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
              (ArrayBuffer.isView = function (t) {
                return (
                  "object" == typeof t &&
                  t.buffer &&
                  t.buffer.constructor === ArrayBuffer
                );
              });
          for (
            var m = function (t, e, r) {
                return function (i) {
                  return new R(t, e, t).update(i)[r]();
                };
              },
              y = function (t, e, r) {
                return function (i, n) {
                  return new R(t, e, n).update(i)[r]();
                };
              },
              v = function (t, e, r) {
                return function (e, i, n, s) {
                  return E["cshake" + t].update(e, i, n, s)[r]();
                };
              },
              w = function (t, e, r) {
                return function (e, i, n, s) {
                  return E["kmac" + t].update(e, i, n, s)[r]();
                };
              },
              b = function (t, e, r, i) {
                for (var n = 0; n < p.length; ++n) {
                  var s = p[n];
                  t[s] = e(r, i, s);
                }
                return t;
              },
              _ = function (t, e) {
                var r = m(t, e, "hex");
                return (
                  (r.create = function () {
                    return new R(t, e, t);
                  }),
                  (r.update = function (t) {
                    return r.create().update(t);
                  }),
                  b(r, m, t, e)
                );
              },
              A = [
                {
                  name: "keccak",
                  padding: [1, 256, 65536, 16777216],
                  bits: f,
                  createMethod: _,
                },
                {
                  name: "sha3",
                  padding: [6, 1536, 393216, 100663296],
                  bits: f,
                  createMethod: _,
                },
                {
                  name: "shake",
                  padding: [31, 7936, 2031616, 520093696],
                  bits: d,
                  createMethod: function (t, e) {
                    var r = y(t, e, "hex");
                    return (
                      (r.create = function (r) {
                        return new R(t, e, r);
                      }),
                      (r.update = function (t, e) {
                        return r.create(e).update(t);
                      }),
                      b(r, y, t, e)
                    );
                  },
                },
                {
                  name: "cshake",
                  padding: h,
                  bits: d,
                  createMethod: function (t, e) {
                    var r = g[t],
                      i = v(t, 0, "hex");
                    return (
                      (i.create = function (i, n, s) {
                        return n || s
                          ? new R(t, e, i).bytepad([n, s], r)
                          : E["shake" + t].create(i);
                      }),
                      (i.update = function (t, e, r, n) {
                        return i.create(e, r, n).update(t);
                      }),
                      b(i, v, t, e)
                    );
                  },
                },
                {
                  name: "kmac",
                  padding: h,
                  bits: d,
                  createMethod: function (t, e) {
                    var r = g[t],
                      i = w(t, 0, "hex");
                    return (
                      (i.create = function (i, n, s) {
                        return new T(t, e, n)
                          .bytepad(["KMAC", s], r)
                          .bytepad([i], r);
                      }),
                      (i.update = function (t, e, r, n) {
                        return i.create(t, r, n).update(e);
                      }),
                      b(i, w, t, e)
                    );
                  },
                },
              ],
              E = {},
              S = [],
              I = 0;
            I < A.length;
            ++I
          )
            for (var M = A[I], N = M.bits, O = 0; O < N.length; ++O) {
              var x = M.name + "_" + N[O];
              if (
                (S.push(x),
                (E[x] = M.createMethod(N[O], M.padding)),
                "sha3" !== M.name)
              ) {
                var P = M.name + N[O];
                S.push(P), (E[P] = E[x]);
              }
            }
          function R(t, e, r) {
            (this.blocks = []),
              (this.s = []),
              (this.padding = e),
              (this.outputBits = r),
              (this.reset = !0),
              (this.finalized = !1),
              (this.block = 0),
              (this.start = 0),
              (this.blockCount = (1600 - (t << 1)) >> 5),
              (this.byteCount = this.blockCount << 2),
              (this.outputBlocks = r >> 5),
              (this.extraBytes = (31 & r) >> 3);
            for (var i = 0; i < 50; ++i) this.s[i] = 0;
          }
          function T(t, e, r) {
            R.call(this, t, e, r);
          }
          (R.prototype.update = function (t) {
            if (this.finalized) throw new Error("finalize already called");
            var r,
              i = typeof t;
            if ("string" !== i) {
              if ("object" !== i) throw new Error(e);
              if (null === t) throw new Error(e);
              if (o && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!Array.isArray(t) && (!o || !ArrayBuffer.isView(t)))
                throw new Error(e);
              r = !0;
            }
            for (
              var n,
                s,
                a = this.blocks,
                c = this.byteCount,
                h = t.length,
                l = this.blockCount,
                f = 0,
                d = this.s;
              f < h;

            ) {
              if (this.reset)
                for (this.reset = !1, a[0] = this.block, n = 1; n < l + 1; ++n)
                  a[n] = 0;
              if (r)
                for (n = this.start; f < h && n < c; ++f)
                  a[n >> 2] |= t[f] << u[3 & n++];
              else
                for (n = this.start; f < h && n < c; ++f)
                  (s = t.charCodeAt(f)) < 128
                    ? (a[n >> 2] |= s << u[3 & n++])
                    : s < 2048
                    ? ((a[n >> 2] |= (192 | (s >> 6)) << u[3 & n++]),
                      (a[n >> 2] |= (128 | (63 & s)) << u[3 & n++]))
                    : s < 55296 || s >= 57344
                    ? ((a[n >> 2] |= (224 | (s >> 12)) << u[3 & n++]),
                      (a[n >> 2] |= (128 | ((s >> 6) & 63)) << u[3 & n++]),
                      (a[n >> 2] |= (128 | (63 & s)) << u[3 & n++]))
                    : ((s =
                        65536 +
                        (((1023 & s) << 10) | (1023 & t.charCodeAt(++f)))),
                      (a[n >> 2] |= (240 | (s >> 18)) << u[3 & n++]),
                      (a[n >> 2] |= (128 | ((s >> 12) & 63)) << u[3 & n++]),
                      (a[n >> 2] |= (128 | ((s >> 6) & 63)) << u[3 & n++]),
                      (a[n >> 2] |= (128 | (63 & s)) << u[3 & n++]));
              if (((this.lastByteIndex = n), n >= c)) {
                for (this.start = n - c, this.block = a[l], n = 0; n < l; ++n)
                  d[n] ^= a[n];
                C(d), (this.reset = !0);
              } else this.start = n;
            }
            return this;
          }),
            (R.prototype.encode = function (t, e) {
              var r = 255 & t,
                i = 1,
                n = [r];
              for (r = 255 & (t >>= 8); r > 0; )
                n.unshift(r), (r = 255 & (t >>= 8)), ++i;
              return e ? n.push(i) : n.unshift(i), this.update(n), n.length;
            }),
            (R.prototype.encodeString = function (t) {
              var r,
                i = typeof t;
              if ("string" !== i) {
                if ("object" !== i) throw new Error(e);
                if (null === t) throw new Error(e);
                if (o && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                else if (!Array.isArray(t) && (!o || !ArrayBuffer.isView(t)))
                  throw new Error(e);
                r = !0;
              }
              var n = 0,
                s = t.length;
              if (r) n = s;
              else
                for (var a = 0; a < t.length; ++a) {
                  var c = t.charCodeAt(a);
                  c < 128
                    ? (n += 1)
                    : c < 2048
                    ? (n += 2)
                    : c < 55296 || c >= 57344
                    ? (n += 3)
                    : ((c =
                        65536 +
                        (((1023 & c) << 10) | (1023 & t.charCodeAt(++a)))),
                      (n += 4));
                }
              return (n += this.encode(8 * n)), this.update(t), n;
            }),
            (R.prototype.bytepad = function (t, e) {
              for (var r = this.encode(e), i = 0; i < t.length; ++i)
                r += this.encodeString(t[i]);
              var n = e - (r % e),
                s = [];
              return (s.length = n), this.update(s), this;
            }),
            (R.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                  e = this.lastByteIndex,
                  r = this.blockCount,
                  i = this.s;
                if (
                  ((t[e >> 2] |= this.padding[3 & e]),
                  this.lastByteIndex === this.byteCount)
                )
                  for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) i[e] ^= t[e];
                C(i);
              }
            }),
            (R.prototype.toString = R.prototype.hex =
              function () {
                this.finalize();
                for (
                  var t,
                    e = this.blockCount,
                    r = this.s,
                    i = this.outputBlocks,
                    n = this.extraBytes,
                    s = 0,
                    o = 0,
                    c = "";
                  o < i;

                ) {
                  for (s = 0; s < e && o < i; ++s, ++o)
                    (t = r[s]),
                      (c +=
                        a[(t >> 4) & 15] +
                        a[15 & t] +
                        a[(t >> 12) & 15] +
                        a[(t >> 8) & 15] +
                        a[(t >> 20) & 15] +
                        a[(t >> 16) & 15] +
                        a[(t >> 28) & 15] +
                        a[(t >> 24) & 15]);
                  o % e === 0 && (C(r), (s = 0));
                }
                return (
                  n &&
                    ((t = r[s]),
                    (c += a[(t >> 4) & 15] + a[15 & t]),
                    n > 1 && (c += a[(t >> 12) & 15] + a[(t >> 8) & 15]),
                    n > 2 && (c += a[(t >> 20) & 15] + a[(t >> 16) & 15])),
                  c
                );
              }),
            (R.prototype.arrayBuffer = function () {
              this.finalize();
              var t,
                e = this.blockCount,
                r = this.s,
                i = this.outputBlocks,
                n = this.extraBytes,
                s = 0,
                o = 0,
                a = this.outputBits >> 3;
              t = n ? new ArrayBuffer((i + 1) << 2) : new ArrayBuffer(a);
              for (var c = new Uint32Array(t); o < i; ) {
                for (s = 0; s < e && o < i; ++s, ++o) c[o] = r[s];
                o % e === 0 && C(r);
              }
              return n && ((c[s] = r[s]), (t = t.slice(0, a))), t;
            }),
            (R.prototype.buffer = R.prototype.arrayBuffer),
            (R.prototype.digest = R.prototype.array =
              function () {
                this.finalize();
                for (
                  var t,
                    e,
                    r = this.blockCount,
                    i = this.s,
                    n = this.outputBlocks,
                    s = this.extraBytes,
                    o = 0,
                    a = 0,
                    c = [];
                  a < n;

                ) {
                  for (o = 0; o < r && a < n; ++o, ++a)
                    (t = a << 2),
                      (e = i[o]),
                      (c[t] = 255 & e),
                      (c[t + 1] = (e >> 8) & 255),
                      (c[t + 2] = (e >> 16) & 255),
                      (c[t + 3] = (e >> 24) & 255);
                  a % r === 0 && C(i);
                }
                return (
                  s &&
                    ((t = a << 2),
                    (e = i[o]),
                    (c[t] = 255 & e),
                    s > 1 && (c[t + 1] = (e >> 8) & 255),
                    s > 2 && (c[t + 2] = (e >> 16) & 255)),
                  c
                );
              }),
            (T.prototype = new R()),
            (T.prototype.finalize = function () {
              return (
                this.encode(this.outputBits, !0),
                R.prototype.finalize.call(this)
              );
            });
          var C = function (t) {
            var e,
              r,
              i,
              n,
              s,
              o,
              a,
              c,
              h,
              u,
              f,
              d,
              p,
              g,
              m,
              y,
              v,
              w,
              b,
              _,
              A,
              E,
              S,
              I,
              M,
              N,
              O,
              x,
              P,
              R,
              T,
              C,
              U,
              L,
              k,
              D,
              B,
              q,
              j,
              z,
              F,
              K,
              H,
              V,
              G,
              W,
              Y,
              Q,
              J,
              X,
              Z,
              $,
              tt,
              et,
              rt,
              it,
              nt,
              st,
              ot,
              at,
              ct,
              ht,
              ut;
            for (i = 0; i < 48; i += 2)
              (n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
                (s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
                (o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
                (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
                (c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
                (h = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
                (u = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
                (f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
                (e =
                  (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                  ((o << 1) | (a >>> 31))),
                (r =
                  (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                  ((a << 1) | (o >>> 31))),
                (t[0] ^= e),
                (t[1] ^= r),
                (t[10] ^= e),
                (t[11] ^= r),
                (t[20] ^= e),
                (t[21] ^= r),
                (t[30] ^= e),
                (t[31] ^= r),
                (t[40] ^= e),
                (t[41] ^= r),
                (e = n ^ ((c << 1) | (h >>> 31))),
                (r = s ^ ((h << 1) | (c >>> 31))),
                (t[2] ^= e),
                (t[3] ^= r),
                (t[12] ^= e),
                (t[13] ^= r),
                (t[22] ^= e),
                (t[23] ^= r),
                (t[32] ^= e),
                (t[33] ^= r),
                (t[42] ^= e),
                (t[43] ^= r),
                (e = o ^ ((u << 1) | (f >>> 31))),
                (r = a ^ ((f << 1) | (u >>> 31))),
                (t[4] ^= e),
                (t[5] ^= r),
                (t[14] ^= e),
                (t[15] ^= r),
                (t[24] ^= e),
                (t[25] ^= r),
                (t[34] ^= e),
                (t[35] ^= r),
                (t[44] ^= e),
                (t[45] ^= r),
                (e = c ^ ((d << 1) | (p >>> 31))),
                (r = h ^ ((p << 1) | (d >>> 31))),
                (t[6] ^= e),
                (t[7] ^= r),
                (t[16] ^= e),
                (t[17] ^= r),
                (t[26] ^= e),
                (t[27] ^= r),
                (t[36] ^= e),
                (t[37] ^= r),
                (t[46] ^= e),
                (t[47] ^= r),
                (e = u ^ ((n << 1) | (s >>> 31))),
                (r = f ^ ((s << 1) | (n >>> 31))),
                (t[8] ^= e),
                (t[9] ^= r),
                (t[18] ^= e),
                (t[19] ^= r),
                (t[28] ^= e),
                (t[29] ^= r),
                (t[38] ^= e),
                (t[39] ^= r),
                (t[48] ^= e),
                (t[49] ^= r),
                (g = t[0]),
                (m = t[1]),
                (W = (t[11] << 4) | (t[10] >>> 28)),
                (Y = (t[10] << 4) | (t[11] >>> 28)),
                (x = (t[20] << 3) | (t[21] >>> 29)),
                (P = (t[21] << 3) | (t[20] >>> 29)),
                (at = (t[31] << 9) | (t[30] >>> 23)),
                (ct = (t[30] << 9) | (t[31] >>> 23)),
                (K = (t[40] << 18) | (t[41] >>> 14)),
                (H = (t[41] << 18) | (t[40] >>> 14)),
                (L = (t[2] << 1) | (t[3] >>> 31)),
                (k = (t[3] << 1) | (t[2] >>> 31)),
                (y = (t[13] << 12) | (t[12] >>> 20)),
                (v = (t[12] << 12) | (t[13] >>> 20)),
                (Q = (t[22] << 10) | (t[23] >>> 22)),
                (J = (t[23] << 10) | (t[22] >>> 22)),
                (R = (t[33] << 13) | (t[32] >>> 19)),
                (T = (t[32] << 13) | (t[33] >>> 19)),
                (ht = (t[42] << 2) | (t[43] >>> 30)),
                (ut = (t[43] << 2) | (t[42] >>> 30)),
                (et = (t[5] << 30) | (t[4] >>> 2)),
                (rt = (t[4] << 30) | (t[5] >>> 2)),
                (D = (t[14] << 6) | (t[15] >>> 26)),
                (B = (t[15] << 6) | (t[14] >>> 26)),
                (w = (t[25] << 11) | (t[24] >>> 21)),
                (b = (t[24] << 11) | (t[25] >>> 21)),
                (X = (t[34] << 15) | (t[35] >>> 17)),
                (Z = (t[35] << 15) | (t[34] >>> 17)),
                (C = (t[45] << 29) | (t[44] >>> 3)),
                (U = (t[44] << 29) | (t[45] >>> 3)),
                (I = (t[6] << 28) | (t[7] >>> 4)),
                (M = (t[7] << 28) | (t[6] >>> 4)),
                (it = (t[17] << 23) | (t[16] >>> 9)),
                (nt = (t[16] << 23) | (t[17] >>> 9)),
                (q = (t[26] << 25) | (t[27] >>> 7)),
                (j = (t[27] << 25) | (t[26] >>> 7)),
                (_ = (t[36] << 21) | (t[37] >>> 11)),
                (A = (t[37] << 21) | (t[36] >>> 11)),
                ($ = (t[47] << 24) | (t[46] >>> 8)),
                (tt = (t[46] << 24) | (t[47] >>> 8)),
                (V = (t[8] << 27) | (t[9] >>> 5)),
                (G = (t[9] << 27) | (t[8] >>> 5)),
                (N = (t[18] << 20) | (t[19] >>> 12)),
                (O = (t[19] << 20) | (t[18] >>> 12)),
                (st = (t[29] << 7) | (t[28] >>> 25)),
                (ot = (t[28] << 7) | (t[29] >>> 25)),
                (z = (t[38] << 8) | (t[39] >>> 24)),
                (F = (t[39] << 8) | (t[38] >>> 24)),
                (E = (t[48] << 14) | (t[49] >>> 18)),
                (S = (t[49] << 14) | (t[48] >>> 18)),
                (t[0] = g ^ (~y & w)),
                (t[1] = m ^ (~v & b)),
                (t[10] = I ^ (~N & x)),
                (t[11] = M ^ (~O & P)),
                (t[20] = L ^ (~D & q)),
                (t[21] = k ^ (~B & j)),
                (t[30] = V ^ (~W & Q)),
                (t[31] = G ^ (~Y & J)),
                (t[40] = et ^ (~it & st)),
                (t[41] = rt ^ (~nt & ot)),
                (t[2] = y ^ (~w & _)),
                (t[3] = v ^ (~b & A)),
                (t[12] = N ^ (~x & R)),
                (t[13] = O ^ (~P & T)),
                (t[22] = D ^ (~q & z)),
                (t[23] = B ^ (~j & F)),
                (t[32] = W ^ (~Q & X)),
                (t[33] = Y ^ (~J & Z)),
                (t[42] = it ^ (~st & at)),
                (t[43] = nt ^ (~ot & ct)),
                (t[4] = w ^ (~_ & E)),
                (t[5] = b ^ (~A & S)),
                (t[14] = x ^ (~R & C)),
                (t[15] = P ^ (~T & U)),
                (t[24] = q ^ (~z & K)),
                (t[25] = j ^ (~F & H)),
                (t[34] = Q ^ (~X & $)),
                (t[35] = J ^ (~Z & tt)),
                (t[44] = st ^ (~at & ht)),
                (t[45] = ot ^ (~ct & ut)),
                (t[6] = _ ^ (~E & g)),
                (t[7] = A ^ (~S & m)),
                (t[16] = R ^ (~C & I)),
                (t[17] = T ^ (~U & M)),
                (t[26] = z ^ (~K & L)),
                (t[27] = F ^ (~H & k)),
                (t[36] = X ^ (~$ & V)),
                (t[37] = Z ^ (~tt & G)),
                (t[46] = at ^ (~ht & et)),
                (t[47] = ct ^ (~ut & rt)),
                (t[8] = E ^ (~g & y)),
                (t[9] = S ^ (~m & v)),
                (t[18] = C ^ (~I & N)),
                (t[19] = U ^ (~M & O)),
                (t[28] = K ^ (~L & D)),
                (t[29] = H ^ (~k & B)),
                (t[38] = $ ^ (~V & W)),
                (t[39] = tt ^ (~G & Y)),
                (t[48] = ht ^ (~et & it)),
                (t[49] = ut ^ (~rt & nt)),
                (t[0] ^= l[i]),
                (t[1] ^= l[i + 1]);
          };
          if (s) t.exports = E;
          else for (I = 0; I < S.length; ++I) i[S[I]] = E[S[I]];
        })();
      })(ys);
      var vs = ys.exports;
      let ws = !1,
        bs = !1;
      const _s = {
        debug: 1,
        default: 2,
        info: 2,
        warning: 3,
        error: 4,
        off: 5,
      };
      let As = _s.default,
        Es = null;
      const Ss = (function () {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (rr) {
          return rr.message;
        }
        return null;
      })();
      var Is, Ms;
      !(function (t) {
        (t.DEBUG = "DEBUG"),
          (t.INFO = "INFO"),
          (t.WARNING = "WARNING"),
          (t.ERROR = "ERROR"),
          (t.OFF = "OFF");
      })(Is || (Is = {})),
        (function (t) {
          (t.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (t.NETWORK_ERROR = "NETWORK_ERROR"),
            (t.SERVER_ERROR = "SERVER_ERROR"),
            (t.TIMEOUT = "TIMEOUT"),
            (t.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (t.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (t.MISSING_NEW = "MISSING_NEW"),
            (t.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (t.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (t.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (t.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (t.ACTION_REJECTED = "ACTION_REJECTED");
        })(Ms || (Ms = {}));
      const Ns = "0123456789abcdef";
      let Os = class t {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          null == _s[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            !(As > _s[r]) && console.log.apply(console, e);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          this._log(t.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          this._log(t.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          this._log(t.levels.WARNING, r);
        }
        makeError(e, r, i) {
          if (bs) return this.makeError("censored error", r, {});
          r || (r = t.errors.UNKNOWN_ERROR), i || (i = {});
          const n = [];
          Object.keys(i).forEach((t) => {
            const e = i[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  (r += Ns[e[t] >> 4]), (r += Ns[15 & e[t]]);
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch {
              n.push(t + "=" + JSON.stringify(i[t].toString()));
            }
          }),
            n.push("code=".concat(r)),
            n.push("version=".concat(this.version));
          const s = e;
          let o = "";
          switch (r) {
            case Ms.NUMERIC_FAULT: {
              o = "NUMERIC_FAULT";
              const t = e;
              switch (t) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  o += "-" + t;
                  break;
                case "negative-power":
                case "negative-width":
                  o += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  o += "-unbound-result";
              }
              break;
            }
            case Ms.CALL_EXCEPTION:
            case Ms.INSUFFICIENT_FUNDS:
            case Ms.MISSING_NEW:
            case Ms.NONCE_EXPIRED:
            case Ms.REPLACEMENT_UNDERPRICED:
            case Ms.TRANSACTION_REPLACED:
            case Ms.UNPREDICTABLE_GAS_LIMIT:
              o = r;
          }
          o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = s),
            (a.code = r),
            Object.keys(i).forEach(function (t) {
              a[t] = i[t];
            }),
            a
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(e, r, i) {
          return this.throwError(e, t.errors.INVALID_ARGUMENT, {
            argument: r,
            value: i,
          });
        }
        assert(t, e, r, i) {
          t || this.throwError(e, r, i);
        }
        assertArgument(t, e, r, i) {
          t || this.throwArgumentError(e, r, i);
        }
        checkNormalize(e) {
          Ss &&
            this.throwError(
              "platform missing String.prototype.normalize",
              t.errors.UNSUPPORTED_OPERATION,
              { operation: "String.prototype.normalize", form: Ss }
            );
        }
        checkSafeUint53(e, r) {
          "number" == typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, t.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, t.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, i) {
          (i = i ? ": " + i : ""),
            e < r &&
              this.throwError(
                "missing argument" + i,
                t.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + i,
                t.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e === Object || null == e) &&
            this.throwError("missing new", t.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                t.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e === Object || null == e) &&
              this.throwError("missing new", t.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return Es || (Es = new t("logger/5.7.0")), Es;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                t.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            ws)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              t.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (bs = !!e), (ws = !!r);
        }
        static setLogLevel(e) {
          const r = _s[e.toLowerCase()];
          null != r
            ? (As = r)
            : t.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new t(e);
        }
      };
      (Os.errors = Ms), (Os.levels = Is);
      const xs = new Os("bytes/5.7.0");
      function Ps(t) {
        return !!t.toHexString;
      }
      function Rs(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return Rs(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function Ts(t) {
        return "number" == typeof t && t == t && t % 1 === 0;
      }
      function Cs(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t || !Ts(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!Ts(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function Us(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          xs.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), Rs(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          Ps(t) && (t = t.toHexString()),
          Ls(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
              ? (r += "0")
              : xs.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return Rs(new Uint8Array(i));
        }
        return Cs(t)
          ? Rs(new Uint8Array(t))
          : xs.throwArgumentError("invalid arrayify value", "value", t);
      }
      function Ls(t, e) {
        return !(
          "string" != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          (e && t.length !== 2 + 2 * e)
        );
      }
      const ks = "0123456789abcdef";
      function Ds(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          xs.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (; t; ) (e = ks[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" == typeof t)
          return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          Ps(t))
        )
          return t.toHexString();
        if (Ls(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                ? (t += "0")
                : xs.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (Cs(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            e += ks[(240 & i) >> 4] + ks[15 & i];
          }
          return e;
        }
        return xs.throwArgumentError("invalid hexlify value", "value", t);
      }
      function Bs(t, e, r) {
        return (
          "string" != typeof t
            ? (t = Ds(t))
            : (!Ls(t) || t.length % 2) &&
              xs.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function qs(t, e) {
        for (
          "string" != typeof t
            ? (t = Ds(t))
            : Ls(t) || xs.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 &&
              xs.throwArgumentError(
                "value out of range",
                "value",
                arguments[1]
              );
          t.length < 2 * e + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      function js(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (
          (function (t) {
            return (Ls(t) && !(t.length % 2)) || Cs(t);
          })(t)
        ) {
          let r = Us(t);
          64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = Ds(r.slice(0, 32))),
              (e.s = Ds(r.slice(32, 64))))
            : 65 === r.length
            ? ((e.r = Ds(r.slice(0, 32))),
              (e.s = Ds(r.slice(32, 64))),
              (e.v = r[64]))
            : xs.throwArgumentError("invalid signature string", "signature", t),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : xs.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = Ds(r.slice(32, 64)));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            const r = (function (t, e) {
              (t = Us(t)).length > e &&
                xs.throwArgumentError(
                  "value out of range",
                  "value",
                  arguments[0]
                );
              const r = new Uint8Array(e);
              return r.set(t, e - t.length), Rs(r);
            })(Us(e._vs), 32);
            e._vs = Ds(r);
            const i = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                xs.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t
                ),
              (r[0] &= 127);
            const n = Ds(r);
            null == e.s
              ? (e.s = n)
              : e.s !== n &&
                xs.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? xs.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t
                )
              : 0 === e.v || 1 === e.v
              ? (e.recoveryParam = e.v)
              : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              xs.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t
              );
          }
          null != e.r && Ls(e.r)
            ? (e.r = qs(e.r, 32))
            : xs.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t
              ),
            null != e.s && Ls(e.s)
              ? (e.s = qs(e.s, 32))
              : xs.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t
                );
          const r = Us(e.s);
          r[0] >= 128 &&
            xs.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128);
          const i = Ds(r);
          e._vs &&
            (Ls(e._vs) ||
              xs.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = qs(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                xs.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t
                );
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function zs(t) {
        return "0x" + vs.keccak_256(Us(t));
      }
      var Fs = { exports: {} },
        Ks = (function (t) {
          var e = t.default;
          if ("function" == typeof e) {
            var r = function () {
              return e.apply(this, arguments);
            };
            r.prototype = e.prototype;
          } else r = {};
          return (
            Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.keys(t).forEach(function (e) {
              var i = Object.getOwnPropertyDescriptor(t, e);
              Object.defineProperty(
                r,
                e,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[e];
                      },
                    }
              );
            }),
            r
          );
        })(Object.freeze({ __proto__: null, default: {} }));
      !(function (t) {
        !(function (t, e) {
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var r = function () {};
            (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          }
          function n(t, e, r) {
            if (n.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" === e || "be" === e) && ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be"));
          }
          var s;
          "object" == typeof t ? (t.exports = n) : (e.BN = n),
            (n.BN = n),
            (n.wordSize = 26);
          try {
            s =
              typeof window < "u" && typeof window.Buffer < "u"
                ? window.Buffer
                : Ks.Buffer;
          } catch {}
          function o(t, e) {
            var i = t.charCodeAt(e);
            return i >= 48 && i <= 57
              ? i - 48
              : i >= 65 && i <= 70
              ? i - 55
              : i >= 97 && i <= 102
              ? i - 87
              : void r(!1, "Invalid character in " + t);
          }
          function a(t, e, r) {
            var i = o(t, r);
            return r - 1 >= e && (i |= o(t, r - 1) << 4), i;
          }
          function c(t, e, i, n) {
            for (
              var s = 0, o = 0, a = Math.min(t.length, i), c = e;
              c < a;
              c++
            ) {
              var h = t.charCodeAt(c) - 48;
              (s *= n),
                (o = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                r(h >= 0 && o < n, "Invalid character"),
                (s += o);
            }
            return s;
          }
          function h(t, e) {
            (t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red);
          }
          if (
            ((n.isBN = function (t) {
              return (
                t instanceof n ||
                (null !== t &&
                  "object" == typeof t &&
                  t.constructor.wordSize === n.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (n.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (n.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (n.prototype._init = function (t, e, i) {
              if ("number" == typeof t) return this._initNumber(t, e, i);
              if ("object" == typeof t) return this._initArray(t, e, i);
              "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
              var n = 0;
              "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
                (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === e
                    ? this._parseHex(t, n, i)
                    : (this._parseBase(t, e, n),
                      "le" === i && this._initArray(this.toArray(), e, i)));
            }),
            (n.prototype._initNumber = function (t, e, i) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === i && this._initArray(this.toArray(), e, i);
            }),
            (n.prototype._initArray = function (t, e, i) {
              if ((r("number" == typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var s,
                o,
                a = 0;
              if ("be" === i)
                for (n = t.length - 1, s = 0; n >= 0; n -= 3)
                  (o = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), s++);
              else if ("le" === i)
                for (n = 0, s = 0; n < t.length; n += 3)
                  (o = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), s++);
              return this._strip();
            }),
            (n.prototype._parseHex = function (t, e, r) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                s = 0,
                o = 0;
              if ("be" === r)
                for (i = t.length - 1; i >= e; i -= 2)
                  (n = a(t, e, i) << s),
                    (this.words[o] |= 67108863 & n),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26))
                      : (s += 8);
              else
                for (
                  i = (t.length - e) % 2 === 0 ? e + 1 : e;
                  i < t.length;
                  i += 2
                )
                  (n = a(t, e, i) << s),
                    (this.words[o] |= 67108863 & n),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26))
                      : (s += 8);
              this._strip();
            }),
            (n.prototype._parseBase = function (t, e, r) {
              (this.words = [0]), (this.length = 1);
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              i--, (n = (n / e) | 0);
              for (
                var s = t.length - r,
                  o = s % i,
                  a = Math.min(s, s - o) + r,
                  h = 0,
                  u = r;
                u < a;
                u += i
              )
                (h = c(t, u, u + i, e)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h);
              if (0 !== o) {
                var l = 1;
                for (h = c(t, u, t.length, e), u = 0; u < o; u++) l *= e;
                this.imuln(l),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h);
              }
              this._strip();
            }),
            (n.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (n.prototype._move = function (t) {
              h(t, this);
            }),
            (n.prototype.clone = function () {
              var t = new n(null);
              return this.copy(t), t;
            }),
            (n.prototype._expand = function (t) {
              for (; this.length < t; ) this.words[this.length++] = 0;
              return this;
            }),
            (n.prototype._strip = function () {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (n.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            typeof Symbol < "u" && "function" == typeof Symbol.for)
          )
            try {
              n.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
            } catch {
              n.prototype.inspect = u;
            }
          else n.prototype.inspect = u;
          function u() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var l = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            f = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            d = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          (n.prototype.toString = function (t, e) {
            var i;
            if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
              i = "";
              for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  c = (16777215 & ((a << n) | s)).toString(16);
                (s = (a >>> (24 - n)) & 16777215),
                  (n += 2) >= 26 && ((n -= 26), o--),
                  (i =
                    0 !== s || o !== this.length - 1
                      ? l[6 - c.length] + c + i
                      : c + i);
              }
              for (0 !== s && (i = s.toString(16) + i); i.length % e !== 0; )
                i = "0" + i;
              return 0 !== this.negative && (i = "-" + i), i;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = f[t],
                u = d[t];
              i = "";
              var p = this.clone();
              for (p.negative = 0; !p.isZero(); ) {
                var g = p.modrn(u).toString(t);
                i = (p = p.idivn(u)).isZero() ? g + i : l[h - g.length] + g + i;
              }
              for (this.isZero() && (i = "0" + i); i.length % e !== 0; )
                i = "0" + i;
              return 0 !== this.negative && (i = "-" + i), i;
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (n.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (n.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (n.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (n.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            });
          function p(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            (r.length = i), (i = (i - 1) | 0);
            var n = 0 | t.words[0],
              s = 0 | e.words[0],
              o = n * s,
              a = 67108863 & o,
              c = (o / 67108864) | 0;
            r.words[0] = a;
            for (var h = 1; h < i; h++) {
              for (
                var u = c >>> 26,
                  l = 67108863 & c,
                  f = Math.min(h, e.length - 1),
                  d = Math.max(0, h - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (h - d) | 0;
                (u +=
                  ((o = (n = 0 | t.words[p]) * (s = 0 | e.words[d]) + l) /
                    67108864) |
                  0),
                  (l = 67108863 & o);
              }
              (r.words[h] = 0 | l), (c = 0 | u);
            }
            return 0 !== c ? (r.words[h] = 0 | c) : r.length--, r._strip();
          }
          (n.prototype.toArrayLike = function (t, e, i) {
            this._strip();
            var n = this.byteLength(),
              s = i || Math.max(1, n);
            r(n <= s, "byte array longer than desired length"),
              r(s > 0, "Requested array length <= 0");
            var o = (function (t, e) {
              return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
            })(t, s);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, n), o;
          }),
            (n.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, i = 0, n = 0, s = 0; n < this.length; n++) {
                var o = (this.words[n] << s) | i;
                (t[r++] = 255 & o),
                  r < t.length && (t[r++] = (o >> 8) & 255),
                  r < t.length && (t[r++] = (o >> 16) & 255),
                  6 === s
                    ? (r < t.length && (t[r++] = (o >> 24) & 255),
                      (i = 0),
                      (s = 0))
                    : ((i = o >>> 24), (s += 2));
              }
              if (r < t.length) for (t[r++] = i; r < t.length; ) t[r++] = 0;
            }),
            (n.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, i = 0, n = 0, s = 0;
                n < this.length;
                n++
              ) {
                var o = (this.words[n] << s) | i;
                (t[r--] = 255 & o),
                  r >= 0 && (t[r--] = (o >> 8) & 255),
                  r >= 0 && (t[r--] = (o >> 16) & 255),
                  6 === s
                    ? (r >= 0 && (t[r--] = (o >> 24) & 255), (i = 0), (s = 0))
                    : ((i = o >>> 24), (s += 2));
              }
              if (r >= 0) for (t[r--] = i; r >= 0; ) t[r--] = 0;
            }),
            Math.clz32
              ? (n.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (n.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (n.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                8191 & e || ((r += 13), (e >>>= 13)),
                127 & e || ((r += 7), (e >>>= 7)),
                15 & e || ((r += 4), (e >>>= 4)),
                3 & e || ((r += 2), (e >>>= 2)),
                1 & e || r++,
                r
              );
            }),
            (n.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (n.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (n.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (n.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (n.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (n.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (n.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (n.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (n.prototype.iuor = function (t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (n.prototype.ior = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuor(t);
            }),
            (n.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (n.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (n.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return (this.length = e.length), this._strip();
            }),
            (n.prototype.iand = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuand(t);
            }),
            (n.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (n.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (n.prototype.iuxor = function (t) {
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = e.words[i] ^ r.words[i];
              if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
              return (this.length = e.length), this._strip();
            }),
            (n.prototype.ixor = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuxor(t);
            }),
            (n.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (n.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (n.prototype.inotn = function (t) {
              r("number" == typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                i = t % 26;
              this._expand(e), i > 0 && e--;
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                i > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
                this._strip()
              );
            }),
            (n.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (n.prototype.setn = function (t, e) {
              r("number" == typeof t && t >= 0);
              var i = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(i + 1),
                (this.words[i] = e
                  ? this.words[i] | (1 << n)
                  : this.words[i] & ~(1 << n)),
                this._strip()
              );
            }),
            (n.prototype.iadd = function (t) {
              var e, r, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (i = t))
                : ((r = t), (i = this));
              for (var n = 0, s = 0; s < i.length; s++)
                (e = (0 | r.words[s]) + (0 | i.words[s]) + n),
                  (this.words[s] = 67108863 & e),
                  (n = e >>> 26);
              for (; 0 !== n && s < r.length; s++)
                (e = (0 | r.words[s]) + n),
                  (this.words[s] = 67108863 & e),
                  (n = e >>> 26);
              if (((this.length = r.length), 0 !== n))
                (this.words[this.length] = n), this.length++;
              else if (r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return this;
            }),
            (n.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (n.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
              for (var s = 0, o = 0; o < i.length; o++)
                (s = (e = (0 | r.words[o]) - (0 | i.words[o]) + s) >> 26),
                  (this.words[o] = 67108863 & e);
              for (; 0 !== s && o < r.length; o++)
                (s = (e = (0 | r.words[o]) + s) >> 26),
                  (this.words[o] = 67108863 & e);
              if (0 === s && o < r.length && r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (n.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var g = function (t, e, r) {
            var i,
              n,
              s,
              o = t.words,
              a = e.words,
              c = r.words,
              h = 0,
              u = 0 | o[0],
              l = 8191 & u,
              f = u >>> 13,
              d = 0 | o[1],
              p = 8191 & d,
              g = d >>> 13,
              m = 0 | o[2],
              y = 8191 & m,
              v = m >>> 13,
              w = 0 | o[3],
              b = 8191 & w,
              _ = w >>> 13,
              A = 0 | o[4],
              E = 8191 & A,
              S = A >>> 13,
              I = 0 | o[5],
              M = 8191 & I,
              N = I >>> 13,
              O = 0 | o[6],
              x = 8191 & O,
              P = O >>> 13,
              R = 0 | o[7],
              T = 8191 & R,
              C = R >>> 13,
              U = 0 | o[8],
              L = 8191 & U,
              k = U >>> 13,
              D = 0 | o[9],
              B = 8191 & D,
              q = D >>> 13,
              j = 0 | a[0],
              z = 8191 & j,
              F = j >>> 13,
              K = 0 | a[1],
              H = 8191 & K,
              V = K >>> 13,
              G = 0 | a[2],
              W = 8191 & G,
              Y = G >>> 13,
              Q = 0 | a[3],
              J = 8191 & Q,
              X = Q >>> 13,
              Z = 0 | a[4],
              $ = 8191 & Z,
              tt = Z >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | a[6],
              st = 8191 & nt,
              ot = nt >>> 13,
              at = 0 | a[7],
              ct = 8191 & at,
              ht = at >>> 13,
              ut = 0 | a[8],
              lt = 8191 & ut,
              ft = ut >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              gt = dt >>> 13;
            (r.negative = t.negative ^ e.negative), (r.length = 19);
            var mt =
              (((h + (i = Math.imul(l, z))) | 0) +
                ((8191 & (n = ((n = Math.imul(l, F)) + Math.imul(f, z)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((s = Math.imul(f, F)) + (n >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (i = Math.imul(p, z)),
              (n = ((n = Math.imul(p, F)) + Math.imul(g, z)) | 0),
              (s = Math.imul(g, F));
            var yt =
              (((h + (i = (i + Math.imul(l, H)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, V)) | 0) + Math.imul(f, H)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, V)) | 0) + (n >>> 13)) | 0) +
                (yt >>> 26)) |
              0),
              (yt &= 67108863),
              (i = Math.imul(y, z)),
              (n = ((n = Math.imul(y, F)) + Math.imul(v, z)) | 0),
              (s = Math.imul(v, F)),
              (i = (i + Math.imul(p, H)) | 0),
              (n = ((n = (n + Math.imul(p, V)) | 0) + Math.imul(g, H)) | 0),
              (s = (s + Math.imul(g, V)) | 0);
            var vt =
              (((h + (i = (i + Math.imul(l, W)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, Y)) | 0) + Math.imul(f, W)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, Y)) | 0) + (n >>> 13)) | 0) +
                (vt >>> 26)) |
              0),
              (vt &= 67108863),
              (i = Math.imul(b, z)),
              (n = ((n = Math.imul(b, F)) + Math.imul(_, z)) | 0),
              (s = Math.imul(_, F)),
              (i = (i + Math.imul(y, H)) | 0),
              (n = ((n = (n + Math.imul(y, V)) | 0) + Math.imul(v, H)) | 0),
              (s = (s + Math.imul(v, V)) | 0),
              (i = (i + Math.imul(p, W)) | 0),
              (n = ((n = (n + Math.imul(p, Y)) | 0) + Math.imul(g, W)) | 0),
              (s = (s + Math.imul(g, Y)) | 0);
            var wt =
              (((h + (i = (i + Math.imul(l, J)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, X)) | 0) + Math.imul(f, J)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, X)) | 0) + (n >>> 13)) | 0) +
                (wt >>> 26)) |
              0),
              (wt &= 67108863),
              (i = Math.imul(E, z)),
              (n = ((n = Math.imul(E, F)) + Math.imul(S, z)) | 0),
              (s = Math.imul(S, F)),
              (i = (i + Math.imul(b, H)) | 0),
              (n = ((n = (n + Math.imul(b, V)) | 0) + Math.imul(_, H)) | 0),
              (s = (s + Math.imul(_, V)) | 0),
              (i = (i + Math.imul(y, W)) | 0),
              (n = ((n = (n + Math.imul(y, Y)) | 0) + Math.imul(v, W)) | 0),
              (s = (s + Math.imul(v, Y)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (n = ((n = (n + Math.imul(p, X)) | 0) + Math.imul(g, J)) | 0),
              (s = (s + Math.imul(g, X)) | 0);
            var bt =
              (((h + (i = (i + Math.imul(l, $)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(f, $)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, tt)) | 0) + (n >>> 13)) | 0) +
                (bt >>> 26)) |
              0),
              (bt &= 67108863),
              (i = Math.imul(M, z)),
              (n = ((n = Math.imul(M, F)) + Math.imul(N, z)) | 0),
              (s = Math.imul(N, F)),
              (i = (i + Math.imul(E, H)) | 0),
              (n = ((n = (n + Math.imul(E, V)) | 0) + Math.imul(S, H)) | 0),
              (s = (s + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(b, W)) | 0),
              (n = ((n = (n + Math.imul(b, Y)) | 0) + Math.imul(_, W)) | 0),
              (s = (s + Math.imul(_, Y)) | 0),
              (i = (i + Math.imul(y, J)) | 0),
              (n = ((n = (n + Math.imul(y, X)) | 0) + Math.imul(v, J)) | 0),
              (s = (s + Math.imul(v, X)) | 0),
              (i = (i + Math.imul(p, $)) | 0),
              (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(g, $)) | 0),
              (s = (s + Math.imul(g, tt)) | 0);
            var _t =
              (((h + (i = (i + Math.imul(l, rt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, it)) | 0) + Math.imul(f, rt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, it)) | 0) + (n >>> 13)) | 0) +
                (_t >>> 26)) |
              0),
              (_t &= 67108863),
              (i = Math.imul(x, z)),
              (n = ((n = Math.imul(x, F)) + Math.imul(P, z)) | 0),
              (s = Math.imul(P, F)),
              (i = (i + Math.imul(M, H)) | 0),
              (n = ((n = (n + Math.imul(M, V)) | 0) + Math.imul(N, H)) | 0),
              (s = (s + Math.imul(N, V)) | 0),
              (i = (i + Math.imul(E, W)) | 0),
              (n = ((n = (n + Math.imul(E, Y)) | 0) + Math.imul(S, W)) | 0),
              (s = (s + Math.imul(S, Y)) | 0),
              (i = (i + Math.imul(b, J)) | 0),
              (n = ((n = (n + Math.imul(b, X)) | 0) + Math.imul(_, J)) | 0),
              (s = (s + Math.imul(_, X)) | 0),
              (i = (i + Math.imul(y, $)) | 0),
              (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(v, $)) | 0),
              (s = (s + Math.imul(v, tt)) | 0),
              (i = (i + Math.imul(p, rt)) | 0),
              (n = ((n = (n + Math.imul(p, it)) | 0) + Math.imul(g, rt)) | 0),
              (s = (s + Math.imul(g, it)) | 0);
            var At =
              (((h + (i = (i + Math.imul(l, st)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, ot)) | 0) + Math.imul(f, st)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, ot)) | 0) + (n >>> 13)) | 0) +
                (At >>> 26)) |
              0),
              (At &= 67108863),
              (i = Math.imul(T, z)),
              (n = ((n = Math.imul(T, F)) + Math.imul(C, z)) | 0),
              (s = Math.imul(C, F)),
              (i = (i + Math.imul(x, H)) | 0),
              (n = ((n = (n + Math.imul(x, V)) | 0) + Math.imul(P, H)) | 0),
              (s = (s + Math.imul(P, V)) | 0),
              (i = (i + Math.imul(M, W)) | 0),
              (n = ((n = (n + Math.imul(M, Y)) | 0) + Math.imul(N, W)) | 0),
              (s = (s + Math.imul(N, Y)) | 0),
              (i = (i + Math.imul(E, J)) | 0),
              (n = ((n = (n + Math.imul(E, X)) | 0) + Math.imul(S, J)) | 0),
              (s = (s + Math.imul(S, X)) | 0),
              (i = (i + Math.imul(b, $)) | 0),
              (n = ((n = (n + Math.imul(b, tt)) | 0) + Math.imul(_, $)) | 0),
              (s = (s + Math.imul(_, tt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (n = ((n = (n + Math.imul(y, it)) | 0) + Math.imul(v, rt)) | 0),
              (s = (s + Math.imul(v, it)) | 0),
              (i = (i + Math.imul(p, st)) | 0),
              (n = ((n = (n + Math.imul(p, ot)) | 0) + Math.imul(g, st)) | 0),
              (s = (s + Math.imul(g, ot)) | 0);
            var Et =
              (((h + (i = (i + Math.imul(l, ct)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, ht)) | 0) + Math.imul(f, ct)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, ht)) | 0) + (n >>> 13)) | 0) +
                (Et >>> 26)) |
              0),
              (Et &= 67108863),
              (i = Math.imul(L, z)),
              (n = ((n = Math.imul(L, F)) + Math.imul(k, z)) | 0),
              (s = Math.imul(k, F)),
              (i = (i + Math.imul(T, H)) | 0),
              (n = ((n = (n + Math.imul(T, V)) | 0) + Math.imul(C, H)) | 0),
              (s = (s + Math.imul(C, V)) | 0),
              (i = (i + Math.imul(x, W)) | 0),
              (n = ((n = (n + Math.imul(x, Y)) | 0) + Math.imul(P, W)) | 0),
              (s = (s + Math.imul(P, Y)) | 0),
              (i = (i + Math.imul(M, J)) | 0),
              (n = ((n = (n + Math.imul(M, X)) | 0) + Math.imul(N, J)) | 0),
              (s = (s + Math.imul(N, X)) | 0),
              (i = (i + Math.imul(E, $)) | 0),
              (n = ((n = (n + Math.imul(E, tt)) | 0) + Math.imul(S, $)) | 0),
              (s = (s + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(b, rt)) | 0),
              (n = ((n = (n + Math.imul(b, it)) | 0) + Math.imul(_, rt)) | 0),
              (s = (s + Math.imul(_, it)) | 0),
              (i = (i + Math.imul(y, st)) | 0),
              (n = ((n = (n + Math.imul(y, ot)) | 0) + Math.imul(v, st)) | 0),
              (s = (s + Math.imul(v, ot)) | 0),
              (i = (i + Math.imul(p, ct)) | 0),
              (n = ((n = (n + Math.imul(p, ht)) | 0) + Math.imul(g, ct)) | 0),
              (s = (s + Math.imul(g, ht)) | 0);
            var St =
              (((h + (i = (i + Math.imul(l, lt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, ft)) | 0) + Math.imul(f, lt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, ft)) | 0) + (n >>> 13)) | 0) +
                (St >>> 26)) |
              0),
              (St &= 67108863),
              (i = Math.imul(B, z)),
              (n = ((n = Math.imul(B, F)) + Math.imul(q, z)) | 0),
              (s = Math.imul(q, F)),
              (i = (i + Math.imul(L, H)) | 0),
              (n = ((n = (n + Math.imul(L, V)) | 0) + Math.imul(k, H)) | 0),
              (s = (s + Math.imul(k, V)) | 0),
              (i = (i + Math.imul(T, W)) | 0),
              (n = ((n = (n + Math.imul(T, Y)) | 0) + Math.imul(C, W)) | 0),
              (s = (s + Math.imul(C, Y)) | 0),
              (i = (i + Math.imul(x, J)) | 0),
              (n = ((n = (n + Math.imul(x, X)) | 0) + Math.imul(P, J)) | 0),
              (s = (s + Math.imul(P, X)) | 0),
              (i = (i + Math.imul(M, $)) | 0),
              (n = ((n = (n + Math.imul(M, tt)) | 0) + Math.imul(N, $)) | 0),
              (s = (s + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (n = ((n = (n + Math.imul(E, it)) | 0) + Math.imul(S, rt)) | 0),
              (s = (s + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(b, st)) | 0),
              (n = ((n = (n + Math.imul(b, ot)) | 0) + Math.imul(_, st)) | 0),
              (s = (s + Math.imul(_, ot)) | 0),
              (i = (i + Math.imul(y, ct)) | 0),
              (n = ((n = (n + Math.imul(y, ht)) | 0) + Math.imul(v, ct)) | 0),
              (s = (s + Math.imul(v, ht)) | 0),
              (i = (i + Math.imul(p, lt)) | 0),
              (n = ((n = (n + Math.imul(p, ft)) | 0) + Math.imul(g, lt)) | 0),
              (s = (s + Math.imul(g, ft)) | 0);
            var It =
              (((h + (i = (i + Math.imul(l, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(l, gt)) | 0) + Math.imul(f, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(f, gt)) | 0) + (n >>> 13)) | 0) +
                (It >>> 26)) |
              0),
              (It &= 67108863),
              (i = Math.imul(B, H)),
              (n = ((n = Math.imul(B, V)) + Math.imul(q, H)) | 0),
              (s = Math.imul(q, V)),
              (i = (i + Math.imul(L, W)) | 0),
              (n = ((n = (n + Math.imul(L, Y)) | 0) + Math.imul(k, W)) | 0),
              (s = (s + Math.imul(k, Y)) | 0),
              (i = (i + Math.imul(T, J)) | 0),
              (n = ((n = (n + Math.imul(T, X)) | 0) + Math.imul(C, J)) | 0),
              (s = (s + Math.imul(C, X)) | 0),
              (i = (i + Math.imul(x, $)) | 0),
              (n = ((n = (n + Math.imul(x, tt)) | 0) + Math.imul(P, $)) | 0),
              (s = (s + Math.imul(P, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = ((n = (n + Math.imul(M, it)) | 0) + Math.imul(N, rt)) | 0),
              (s = (s + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(E, st)) | 0),
              (n = ((n = (n + Math.imul(E, ot)) | 0) + Math.imul(S, st)) | 0),
              (s = (s + Math.imul(S, ot)) | 0),
              (i = (i + Math.imul(b, ct)) | 0),
              (n = ((n = (n + Math.imul(b, ht)) | 0) + Math.imul(_, ct)) | 0),
              (s = (s + Math.imul(_, ht)) | 0),
              (i = (i + Math.imul(y, lt)) | 0),
              (n = ((n = (n + Math.imul(y, ft)) | 0) + Math.imul(v, lt)) | 0),
              (s = (s + Math.imul(v, ft)) | 0);
            var Mt =
              (((h + (i = (i + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(p, gt)) | 0) + Math.imul(g, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(g, gt)) | 0) + (n >>> 13)) | 0) +
                (Mt >>> 26)) |
              0),
              (Mt &= 67108863),
              (i = Math.imul(B, W)),
              (n = ((n = Math.imul(B, Y)) + Math.imul(q, W)) | 0),
              (s = Math.imul(q, Y)),
              (i = (i + Math.imul(L, J)) | 0),
              (n = ((n = (n + Math.imul(L, X)) | 0) + Math.imul(k, J)) | 0),
              (s = (s + Math.imul(k, X)) | 0),
              (i = (i + Math.imul(T, $)) | 0),
              (n = ((n = (n + Math.imul(T, tt)) | 0) + Math.imul(C, $)) | 0),
              (s = (s + Math.imul(C, tt)) | 0),
              (i = (i + Math.imul(x, rt)) | 0),
              (n = ((n = (n + Math.imul(x, it)) | 0) + Math.imul(P, rt)) | 0),
              (s = (s + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(M, st)) | 0),
              (n = ((n = (n + Math.imul(M, ot)) | 0) + Math.imul(N, st)) | 0),
              (s = (s + Math.imul(N, ot)) | 0),
              (i = (i + Math.imul(E, ct)) | 0),
              (n = ((n = (n + Math.imul(E, ht)) | 0) + Math.imul(S, ct)) | 0),
              (s = (s + Math.imul(S, ht)) | 0),
              (i = (i + Math.imul(b, lt)) | 0),
              (n = ((n = (n + Math.imul(b, ft)) | 0) + Math.imul(_, lt)) | 0),
              (s = (s + Math.imul(_, ft)) | 0);
            var Nt =
              (((h + (i = (i + Math.imul(y, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(y, gt)) | 0) + Math.imul(v, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(v, gt)) | 0) + (n >>> 13)) | 0) +
                (Nt >>> 26)) |
              0),
              (Nt &= 67108863),
              (i = Math.imul(B, J)),
              (n = ((n = Math.imul(B, X)) + Math.imul(q, J)) | 0),
              (s = Math.imul(q, X)),
              (i = (i + Math.imul(L, $)) | 0),
              (n = ((n = (n + Math.imul(L, tt)) | 0) + Math.imul(k, $)) | 0),
              (s = (s + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(T, rt)) | 0),
              (n = ((n = (n + Math.imul(T, it)) | 0) + Math.imul(C, rt)) | 0),
              (s = (s + Math.imul(C, it)) | 0),
              (i = (i + Math.imul(x, st)) | 0),
              (n = ((n = (n + Math.imul(x, ot)) | 0) + Math.imul(P, st)) | 0),
              (s = (s + Math.imul(P, ot)) | 0),
              (i = (i + Math.imul(M, ct)) | 0),
              (n = ((n = (n + Math.imul(M, ht)) | 0) + Math.imul(N, ct)) | 0),
              (s = (s + Math.imul(N, ht)) | 0),
              (i = (i + Math.imul(E, lt)) | 0),
              (n = ((n = (n + Math.imul(E, ft)) | 0) + Math.imul(S, lt)) | 0),
              (s = (s + Math.imul(S, ft)) | 0);
            var Ot =
              (((h + (i = (i + Math.imul(b, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(b, gt)) | 0) + Math.imul(_, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(_, gt)) | 0) + (n >>> 13)) | 0) +
                (Ot >>> 26)) |
              0),
              (Ot &= 67108863),
              (i = Math.imul(B, $)),
              (n = ((n = Math.imul(B, tt)) + Math.imul(q, $)) | 0),
              (s = Math.imul(q, tt)),
              (i = (i + Math.imul(L, rt)) | 0),
              (n = ((n = (n + Math.imul(L, it)) | 0) + Math.imul(k, rt)) | 0),
              (s = (s + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(T, st)) | 0),
              (n = ((n = (n + Math.imul(T, ot)) | 0) + Math.imul(C, st)) | 0),
              (s = (s + Math.imul(C, ot)) | 0),
              (i = (i + Math.imul(x, ct)) | 0),
              (n = ((n = (n + Math.imul(x, ht)) | 0) + Math.imul(P, ct)) | 0),
              (s = (s + Math.imul(P, ht)) | 0),
              (i = (i + Math.imul(M, lt)) | 0),
              (n = ((n = (n + Math.imul(M, ft)) | 0) + Math.imul(N, lt)) | 0),
              (s = (s + Math.imul(N, ft)) | 0);
            var xt =
              (((h + (i = (i + Math.imul(E, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(E, gt)) | 0) + Math.imul(S, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(S, gt)) | 0) + (n >>> 13)) | 0) +
                (xt >>> 26)) |
              0),
              (xt &= 67108863),
              (i = Math.imul(B, rt)),
              (n = ((n = Math.imul(B, it)) + Math.imul(q, rt)) | 0),
              (s = Math.imul(q, it)),
              (i = (i + Math.imul(L, st)) | 0),
              (n = ((n = (n + Math.imul(L, ot)) | 0) + Math.imul(k, st)) | 0),
              (s = (s + Math.imul(k, ot)) | 0),
              (i = (i + Math.imul(T, ct)) | 0),
              (n = ((n = (n + Math.imul(T, ht)) | 0) + Math.imul(C, ct)) | 0),
              (s = (s + Math.imul(C, ht)) | 0),
              (i = (i + Math.imul(x, lt)) | 0),
              (n = ((n = (n + Math.imul(x, ft)) | 0) + Math.imul(P, lt)) | 0),
              (s = (s + Math.imul(P, ft)) | 0);
            var Pt =
              (((h + (i = (i + Math.imul(M, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(M, gt)) | 0) + Math.imul(N, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(N, gt)) | 0) + (n >>> 13)) | 0) +
                (Pt >>> 26)) |
              0),
              (Pt &= 67108863),
              (i = Math.imul(B, st)),
              (n = ((n = Math.imul(B, ot)) + Math.imul(q, st)) | 0),
              (s = Math.imul(q, ot)),
              (i = (i + Math.imul(L, ct)) | 0),
              (n = ((n = (n + Math.imul(L, ht)) | 0) + Math.imul(k, ct)) | 0),
              (s = (s + Math.imul(k, ht)) | 0),
              (i = (i + Math.imul(T, lt)) | 0),
              (n = ((n = (n + Math.imul(T, ft)) | 0) + Math.imul(C, lt)) | 0),
              (s = (s + Math.imul(C, ft)) | 0);
            var Rt =
              (((h + (i = (i + Math.imul(x, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(x, gt)) | 0) + Math.imul(P, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(P, gt)) | 0) + (n >>> 13)) | 0) +
                (Rt >>> 26)) |
              0),
              (Rt &= 67108863),
              (i = Math.imul(B, ct)),
              (n = ((n = Math.imul(B, ht)) + Math.imul(q, ct)) | 0),
              (s = Math.imul(q, ht)),
              (i = (i + Math.imul(L, lt)) | 0),
              (n = ((n = (n + Math.imul(L, ft)) | 0) + Math.imul(k, lt)) | 0),
              (s = (s + Math.imul(k, ft)) | 0);
            var Tt =
              (((h + (i = (i + Math.imul(T, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(T, gt)) | 0) + Math.imul(C, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(C, gt)) | 0) + (n >>> 13)) | 0) +
                (Tt >>> 26)) |
              0),
              (Tt &= 67108863),
              (i = Math.imul(B, lt)),
              (n = ((n = Math.imul(B, ft)) + Math.imul(q, lt)) | 0),
              (s = Math.imul(q, ft));
            var Ct =
              (((h + (i = (i + Math.imul(L, pt)) | 0)) | 0) +
                ((8191 &
                  (n =
                    ((n = (n + Math.imul(L, gt)) | 0) + Math.imul(k, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((s = (s + Math.imul(k, gt)) | 0) + (n >>> 13)) | 0) +
                (Ct >>> 26)) |
              0),
              (Ct &= 67108863);
            var Ut =
              (((h + (i = Math.imul(B, pt))) | 0) +
                ((8191 &
                  (n = ((n = Math.imul(B, gt)) + Math.imul(q, pt)) | 0)) <<
                  13)) |
              0;
            return (
              (h =
                ((((s = Math.imul(q, gt)) + (n >>> 13)) | 0) + (Ut >>> 26)) |
                0),
              (Ut &= 67108863),
              (c[0] = mt),
              (c[1] = yt),
              (c[2] = vt),
              (c[3] = wt),
              (c[4] = bt),
              (c[5] = _t),
              (c[6] = At),
              (c[7] = Et),
              (c[8] = St),
              (c[9] = It),
              (c[10] = Mt),
              (c[11] = Nt),
              (c[12] = Ot),
              (c[13] = xt),
              (c[14] = Pt),
              (c[15] = Rt),
              (c[16] = Tt),
              (c[17] = Ct),
              (c[18] = Ut),
              0 !== h && ((c[19] = h), r.length++),
              r
            );
          };
          function m(t, e, r) {
            (r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length);
            for (var i = 0, n = 0, s = 0; s < r.length - 1; s++) {
              var o = n;
              n = 0;
              for (
                var a = 67108863 & i,
                  c = Math.min(s, e.length - 1),
                  h = Math.max(0, s - t.length + 1);
                h <= c;
                h++
              ) {
                var u = s - h,
                  l = (0 | t.words[u]) * (0 | e.words[h]),
                  f = 67108863 & l;
                (a = 67108863 & (f = (f + a) | 0)),
                  (n +=
                    (o =
                      ((o = (o + ((l / 67108864) | 0)) | 0) + (f >>> 26)) |
                      0) >>> 26),
                  (o &= 67108863);
              }
              (r.words[s] = a), (i = o), (o = n);
            }
            return 0 !== i ? (r.words[s] = i) : r.length--, r._strip();
          }
          function y(t, e, r) {
            return m(t, e, r);
          }
          Math.imul || (g = p),
            (n.prototype.mulTo = function (t, e) {
              var r = this.length + t.length;
              return 10 === this.length && 10 === t.length
                ? g(this, t, e)
                : r < 63
                ? p(this, t, e)
                : r < 1024
                ? m(this, t, e)
                : y(this, t, e);
            }),
            (n.prototype.mul = function (t) {
              var e = new n(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (n.prototype.mulf = function (t) {
              var e = new n(null);
              return (
                (e.words = new Array(this.length + t.length)), y(this, t, e)
              );
            }),
            (n.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (n.prototype.imuln = function (t) {
              var e = t < 0;
              e && (t = -t), r("number" == typeof t), r(t < 67108864);
              for (var i = 0, n = 0; n < this.length; n++) {
                var s = (0 | this.words[n]) * t,
                  o = (67108863 & s) + (67108863 & i);
                (i >>= 26),
                  (i += (s / 67108864) | 0),
                  (i += o >>> 26),
                  (this.words[n] = 67108863 & o);
              }
              return (
                0 !== i && ((this.words[n] = i), this.length++),
                e ? this.ineg() : this
              );
            }),
            (n.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (n.prototype.sqr = function () {
              return this.mul(this);
            }),
            (n.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (n.prototype.pow = function (t) {
              var e = (function (t) {
                for (
                  var e = new Array(t.bitLength()), r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = (r / 26) | 0,
                    n = r % 26;
                  e[r] = (t.words[i] >>> n) & 1;
                }
                return e;
              })(t);
              if (0 === e.length) return new n(1);
              for (
                var r = this, i = 0;
                i < e.length && 0 === e[i];
                i++, r = r.sqr()
              );
              if (++i < e.length)
                for (var s = r.sqr(); i < e.length; i++, s = s.sqr())
                  0 !== e[i] && (r = r.mul(s));
              return r;
            }),
            (n.prototype.iushln = function (t) {
              r("number" == typeof t && t >= 0);
              var e,
                i = t % 26,
                n = (t - i) / 26,
                s = (67108863 >>> (26 - i)) << (26 - i);
              if (0 !== i) {
                var o = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & s,
                    c = ((0 | this.words[e]) - a) << i;
                  (this.words[e] = c | o), (o = a >>> (26 - i));
                }
                o && ((this.words[e] = o), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (n.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (n.prototype.iushrn = function (t, e, i) {
              var n;
              r("number" == typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0);
              var s = t % 26,
                o = Math.min((t - s) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> s) << s),
                c = i;
              if (((n -= o), (n = Math.max(0, n)), c)) {
                for (var h = 0; h < o; h++) c.words[h] = this.words[h];
                c.length = o;
              }
              if (0 !== o)
                if (this.length > o)
                  for (this.length -= o, h = 0; h < this.length; h++)
                    this.words[h] = this.words[h + o];
                else (this.words[0] = 0), (this.length = 1);
              var u = 0;
              for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
                var l = 0 | this.words[h];
                (this.words[h] = (u << (26 - s)) | (l >>> s)), (u = l & a);
              }
              return (
                c && 0 !== u && (c.words[c.length++] = u),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (n.prototype.ishrn = function (t, e, i) {
              return r(0 === this.negative), this.iushrn(t, e, i);
            }),
            (n.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (n.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (n.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (n.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (n.prototype.testn = function (t) {
              r("number" == typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              return !(this.length <= i) && !!(this.words[i] & n);
            }),
            (n.prototype.imaskn = function (t) {
              r("number" == typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= i)
              )
                return this;
              if (
                (0 !== e && i++,
                (this.length = Math.min(i, this.length)),
                0 !== e)
              ) {
                var n = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= n;
              }
              return this._strip();
            }),
            (n.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (n.prototype.iaddn = function (t) {
              return (
                r("number" == typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (n.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (n.prototype.isubn = function (t) {
              if ((r("number" == typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this._strip();
            }),
            (n.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (n.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (n.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (n.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (n.prototype._ishlnsubmul = function (t, e, i) {
              var n,
                s = t.length + i;
              this._expand(s);
              var o,
                a = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + i]) + a;
                var c = (0 | t.words[n]) * e;
                (a = ((o -= 67108863 & c) >> 26) - ((c / 67108864) | 0)),
                  (this.words[n + i] = 67108863 & o);
              }
              for (; n < this.length - i; n++)
                (a = (o = (0 | this.words[n + i]) + a) >> 26),
                  (this.words[n + i] = 67108863 & o);
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, n = 0; n < this.length; n++)
                (a = (o = -(0 | this.words[n]) + a) >> 26),
                  (this.words[n] = 67108863 & o);
              return (this.negative = 1), this._strip();
            }),
            (n.prototype._wordDiv = function (t, e) {
              var r = (this.length, t.length),
                i = this.clone(),
                s = t,
                o = 0 | s.words[s.length - 1];
              0 !== (r = 26 - this._countBits(o)) &&
                ((s = s.ushln(r)),
                i.iushln(r),
                (o = 0 | s.words[s.length - 1]));
              var a,
                c = i.length - s.length;
              if ("mod" !== e) {
                ((a = new n(null)).length = c + 1),
                  (a.words = new Array(a.length));
                for (var h = 0; h < a.length; h++) a.words[h] = 0;
              }
              var u = i.clone()._ishlnsubmul(s, 1, c);
              0 === u.negative && ((i = u), a && (a.words[c] = 1));
              for (var l = c - 1; l >= 0; l--) {
                var f =
                  67108864 * (0 | i.words[s.length + l]) +
                  (0 | i.words[s.length + l - 1]);
                for (
                  f = Math.min((f / o) | 0, 67108863), i._ishlnsubmul(s, f, l);
                  0 !== i.negative;

                )
                  f--,
                    (i.negative = 0),
                    i._ishlnsubmul(s, 1, l),
                    i.isZero() || (i.negative ^= 1);
                a && (a.words[l] = f);
              }
              return (
                a && a._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: a || null, mod: i }
              );
            }),
            (n.prototype.divmod = function (t, e, i) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new n(0), mod: new n(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    "mod" !== e && (s = a.div.neg()),
                    "div" !== e &&
                      ((o = a.mod.neg()), i && 0 !== o.negative && o.iadd(t)),
                    { div: s, mod: o })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)),
                    "mod" !== e && (s = a.div.neg()),
                    { div: s, mod: a.mod })
                  : this.negative & t.negative
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    "div" !== e &&
                      ((o = a.mod.neg()), i && 0 !== o.negative && o.isub(t)),
                    { div: a.div, mod: o })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new n(0), mod: this }
                  : 1 === t.length
                  ? "div" === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : "mod" === e
                    ? { div: null, mod: new n(this.modrn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new n(this.modrn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var s, o, a;
            }),
            (n.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (n.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (n.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (n.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                s = r.cmp(i);
              return s < 0 || (1 === n && 0 === s)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (n.prototype.modrn = function (t) {
              var e = t < 0;
              e && (t = -t), r(t <= 67108863);
              for (
                var i = (1 << 26) % t, n = 0, s = this.length - 1;
                s >= 0;
                s--
              )
                n = (i * n + (0 | this.words[s])) % t;
              return e ? -n : n;
            }),
            (n.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (n.prototype.idivn = function (t) {
              var e = t < 0;
              e && (t = -t), r(t <= 67108863);
              for (var i = 0, n = this.length - 1; n >= 0; n--) {
                var s = (0 | this.words[n]) + 67108864 * i;
                (this.words[n] = (s / t) | 0), (i = s % t);
              }
              return this._strip(), e ? this.ineg() : this;
            }),
            (n.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (n.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var s = new n(1),
                  o = new n(0),
                  a = new n(0),
                  c = new n(1),
                  h = 0;
                e.isEven() && i.isEven();

              )
                e.iushrn(1), i.iushrn(1), ++h;
              for (var u = i.clone(), l = e.clone(); !e.isZero(); ) {
                for (
                  var f = 0, d = 1;
                  !(e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (s.isOdd() || o.isOdd()) && (s.iadd(u), o.isub(l)),
                      s.iushrn(1),
                      o.iushrn(1);
                for (
                  var p = 0, g = 1;
                  !(i.words[0] & g) && p < 26;
                  ++p, g <<= 1
                );
                if (p > 0)
                  for (i.iushrn(p); p-- > 0; )
                    (a.isOdd() || c.isOdd()) && (a.iadd(u), c.isub(l)),
                      a.iushrn(1),
                      c.iushrn(1);
                e.cmp(i) >= 0
                  ? (e.isub(i), s.isub(a), o.isub(c))
                  : (i.isub(e), a.isub(s), c.isub(o));
              }
              return { a: a, b: c, gcd: i.iushln(h) };
            }),
            (n.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e,
                i = this,
                s = t.clone();
              i = 0 !== i.negative ? i.umod(t) : i.clone();
              for (
                var o = new n(1), a = new n(0), c = s.clone();
                i.cmpn(1) > 0 && s.cmpn(1) > 0;

              ) {
                for (
                  var h = 0, u = 1;
                  !(i.words[0] & u) && h < 26;
                  ++h, u <<= 1
                );
                if (h > 0)
                  for (i.iushrn(h); h-- > 0; )
                    o.isOdd() && o.iadd(c), o.iushrn(1);
                for (
                  var l = 0, f = 1;
                  !(s.words[0] & f) && l < 26;
                  ++l, f <<= 1
                );
                if (l > 0)
                  for (s.iushrn(l); l-- > 0; )
                    a.isOdd() && a.iadd(c), a.iushrn(1);
                i.cmp(s) >= 0 ? (i.isub(s), o.isub(a)) : (s.isub(i), a.isub(o));
              }
              return (e = 0 === i.cmpn(1) ? o : a).cmpn(0) < 0 && e.iadd(t), e;
            }),
            (n.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              (e.negative = 0), (r.negative = 0);
              for (var i = 0; e.isEven() && r.isEven(); i++)
                e.iushrn(1), r.iushrn(1);
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                  var s = e;
                  (e = r), (r = s);
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              }
              return r.iushln(i);
            }),
            (n.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (n.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (n.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (n.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (n.prototype.bincn = function (t) {
              r("number" == typeof t);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i)
                return this._expand(i + 1), (this.words[i] |= n), this;
              for (var s = n, o = i; 0 !== s && o < this.length; o++) {
                var a = 0 | this.words[o];
                (s = (a += s) >>> 26), (a &= 67108863), (this.words[o] = a);
              }
              return 0 !== s && ((this.words[o] = s), this.length++), this;
            }),
            (n.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (n.prototype.cmpn = function (t) {
              var e,
                i = t < 0;
              if (0 !== this.negative && !i) return -1;
              if (0 === this.negative && i) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                i && (t = -t), r(t <= 67108863, "Number is too big");
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (n.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (n.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                  n = 0 | t.words[r];
                if (i !== n) {
                  i < n ? (e = -1) : i > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (n.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (n.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (n.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (n.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (n.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (n.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (n.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (n.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (n.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (n.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (n.red = function (t) {
              return new S(t);
            }),
            (n.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (n.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (n.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (n.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (n.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (n.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (n.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (n.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (n.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (n.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (n.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (n.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (n.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (n.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (n.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (n.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (n.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var v = { k256: null, p224: null, p192: null, p25519: null };
          function w(t, e) {
            (this.name = t),
              (this.p = new n(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new n(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function b() {
            w.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function _() {
            w.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function A() {
            w.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function E() {
            w.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function S(t) {
            if ("string" == typeof t) {
              var e = n._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null);
          }
          function I(t) {
            S.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new n(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (w.prototype._tmp = function () {
            var t = new n(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (w.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                this.split(r, this.tmp),
                  (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
              } while (e > this.n);
              var i = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                  ? r.strip()
                  : r._strip(),
                r
              );
            }),
            (w.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (w.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(b, w),
            (b.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var s = t.words[9];
              for (e.words[e.length++] = s & r, n = 10; n < t.length; n++) {
                var o = 0 | t.words[n];
                (t.words[n - 10] = ((o & r) << 4) | (s >>> 22)), (s = o);
              }
              (s >>>= 22),
                (t.words[n - 10] = s),
                0 === s && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (b.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                (e += 977 * i),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * i + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(_, w),
            i(A, w),
            i(E, w),
            (E.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                (i >>>= 26), (t.words[r] = n), (e = i);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (n._prime = function (t) {
              if (v[t]) return v[t];
              var e;
              if ("k256" === t) e = new b();
              else if ("p224" === t) e = new _();
              else if ("p192" === t) e = new A();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new E();
              }
              return (v[t] = e), e;
            }),
            (S.prototype._verify1 = function (t) {
              r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers");
            }),
            (S.prototype._verify2 = function (t, e) {
              r(
                0 === (t.negative | e.negative),
                "red works only with positives"
              ),
                r(t.red && t.red === e.red, "red works only with red numbers");
            }),
            (S.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (h(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (S.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (S.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }),
            (S.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }),
            (S.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }),
            (S.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }),
            (S.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (S.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (S.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (S.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (S.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (S.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var i = this.m.add(new n(1)).iushrn(2);
                return this.pow(t, i);
              }
              for (
                var s = this.m.subn(1), o = 0;
                !s.isZero() && 0 === s.andln(1);

              )
                o++, s.iushrn(1);
              r(!s.isZero());
              var a = new n(1).toRed(this),
                c = a.redNeg(),
                h = this.m.subn(1).iushrn(1),
                u = this.m.bitLength();
              for (
                u = new n(2 * u * u).toRed(this);
                0 !== this.pow(u, h).cmp(c);

              )
                u.redIAdd(c);
              for (
                var l = this.pow(u, s),
                  f = this.pow(t, s.addn(1).iushrn(1)),
                  d = this.pow(t, s),
                  p = o;
                0 !== d.cmp(a);

              ) {
                for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
                r(m < p);
                var y = this.pow(l, new n(1).iushln(p - m - 1));
                (f = f.redMul(y)), (l = y.redSqr()), (d = d.redMul(l)), (p = m);
              }
              return f;
            }),
            (S.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (S.prototype.pow = function (t, e) {
              if (e.isZero()) return new n(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = new Array(16);
              (r[0] = new n(1).toRed(this)), (r[1] = t);
              for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
              var s = r[0],
                o = 0,
                a = 0,
                c = e.bitLength() % 26;
              for (0 === c && (c = 26), i = e.length - 1; i >= 0; i--) {
                for (var h = e.words[i], u = c - 1; u >= 0; u--) {
                  var l = (h >> u) & 1;
                  (s !== r[0] && (s = this.sqr(s)), 0 !== l || 0 !== o)
                    ? ((o <<= 1),
                      (o |= l),
                      (4 === ++a || (0 === i && 0 === u)) &&
                        ((s = this.mul(s, r[o])), (a = 0), (o = 0)))
                    : (a = 0);
                }
                c = 26;
              }
              return s;
            }),
            (S.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (S.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (n.mont = function (t) {
              return new I(t);
            }),
            i(I, S),
            (I.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (I.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (I.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (I.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
              var r = t.mul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                s = r.isub(i).iushrn(this.shift),
                o = s;
              return (
                s.cmp(this.m) >= 0
                  ? (o = s.isub(this.m))
                  : s.cmpn(0) < 0 && (o = s.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (I.prototype.invm = function (t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(t, ms);
      })(Fs);
      var Hs = Fs.exports;
      const Vs = "bignumber/5.7.0";
      var Gs = Hs.BN;
      const Ws = new Os(Vs),
        Ys = {},
        Qs = 9007199254740991;
      let Js = !1,
        Xs = class t {
          constructor(t, e) {
            t !== Ys &&
              Ws.throwError(
                "cannot call constructor directly; use BigNumber.from",
                Os.errors.UNSUPPORTED_OPERATION,
                { operation: "new (BigNumber)" }
              ),
              (this._hex = e),
              (this._isBigNumber = !0),
              Object.freeze(this);
          }
          fromTwos(t) {
            return $s(to(this).fromTwos(t));
          }
          toTwos(t) {
            return $s(to(this).toTwos(t));
          }
          abs() {
            return "-" === this._hex[0] ? t.from(this._hex.substring(1)) : this;
          }
          add(t) {
            return $s(to(this).add(to(t)));
          }
          sub(t) {
            return $s(to(this).sub(to(t)));
          }
          div(e) {
            return (
              t.from(e).isZero() && eo("division-by-zero", "div"),
              $s(to(this).div(to(e)))
            );
          }
          mul(t) {
            return $s(to(this).mul(to(t)));
          }
          mod(t) {
            const e = to(t);
            return (
              e.isNeg() && eo("division-by-zero", "mod"), $s(to(this).umod(e))
            );
          }
          pow(t) {
            const e = to(t);
            return (
              e.isNeg() && eo("negative-power", "pow"), $s(to(this).pow(e))
            );
          }
          and(t) {
            const e = to(t);
            return (
              (this.isNegative() || e.isNeg()) &&
                eo("unbound-bitwise-result", "and"),
              $s(to(this).and(e))
            );
          }
          or(t) {
            const e = to(t);
            return (
              (this.isNegative() || e.isNeg()) &&
                eo("unbound-bitwise-result", "or"),
              $s(to(this).or(e))
            );
          }
          xor(t) {
            const e = to(t);
            return (
              (this.isNegative() || e.isNeg()) &&
                eo("unbound-bitwise-result", "xor"),
              $s(to(this).xor(e))
            );
          }
          mask(t) {
            return (
              (this.isNegative() || t < 0) && eo("negative-width", "mask"),
              $s(to(this).maskn(t))
            );
          }
          shl(t) {
            return (
              (this.isNegative() || t < 0) && eo("negative-width", "shl"),
              $s(to(this).shln(t))
            );
          }
          shr(t) {
            return (
              (this.isNegative() || t < 0) && eo("negative-width", "shr"),
              $s(to(this).shrn(t))
            );
          }
          eq(t) {
            return to(this).eq(to(t));
          }
          lt(t) {
            return to(this).lt(to(t));
          }
          lte(t) {
            return to(this).lte(to(t));
          }
          gt(t) {
            return to(this).gt(to(t));
          }
          gte(t) {
            return to(this).gte(to(t));
          }
          isNegative() {
            return "-" === this._hex[0];
          }
          isZero() {
            return to(this).isZero();
          }
          toNumber() {
            try {
              return to(this).toNumber();
            } catch {
              eo("overflow", "toNumber", this.toString());
            }
            return null;
          }
          toBigInt() {
            try {
              return BigInt(this.toString());
            } catch {}
            return Ws.throwError(
              "this platform does not support BigInt",
              Os.errors.UNSUPPORTED_OPERATION,
              { value: this.toString() }
            );
          }
          toString() {
            return (
              arguments.length > 0 &&
                (10 === arguments[0]
                  ? Js ||
                    ((Js = !0),
                    Ws.warn(
                      "BigNumber.toString does not accept any parameters; base-10 is assumed"
                    ))
                  : 16 === arguments[0]
                  ? Ws.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      Os.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )
                  : Ws.throwError(
                      "BigNumber.toString does not accept parameters",
                      Os.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )),
              to(this).toString(10)
            );
          }
          toHexString() {
            return this._hex;
          }
          toJSON(t) {
            return { type: "BigNumber", hex: this.toHexString() };
          }
          static from(e) {
            if (e instanceof t) return e;
            if ("string" == typeof e)
              return e.match(/^-?0x[0-9a-f]+$/i)
                ? new t(Ys, Zs(e))
                : e.match(/^-?[0-9]+$/)
                ? new t(Ys, Zs(new Gs(e)))
                : Ws.throwArgumentError("invalid BigNumber string", "value", e);
            if ("number" == typeof e)
              return (
                e % 1 && eo("underflow", "BigNumber.from", e),
                (e >= Qs || e <= -Qs) && eo("overflow", "BigNumber.from", e),
                t.from(String(e))
              );
            const r = e;
            if ("bigint" == typeof r) return t.from(r.toString());
            if (Cs(r)) return t.from(Ds(r));
            if (r)
              if (r.toHexString) {
                const e = r.toHexString();
                if ("string" == typeof e) return t.from(e);
              } else {
                let e = r._hex;
                if (
                  (null == e && "BigNumber" === r.type && (e = r.hex),
                  "string" == typeof e &&
                    (Ls(e) || ("-" === e[0] && Ls(e.substring(1)))))
                )
                  return t.from(e);
              }
            return Ws.throwArgumentError("invalid BigNumber value", "value", e);
          }
          static isBigNumber(t) {
            return !(!t || !t._isBigNumber);
          }
        };
      function Zs(t) {
        if ("string" != typeof t) return Zs(t.toString(16));
        if ("-" === t[0])
          return (
            "-" === (t = t.substring(1))[0] &&
              Ws.throwArgumentError("invalid hex", "value", t),
            "0x00" === (t = Zs(t)) ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        for (
          t.length % 2 && (t = "0x0" + t.substring(2));
          t.length > 4 && "0x00" === t.substring(0, 4);

        )
          t = "0x" + t.substring(4);
        return t;
      }
      function $s(t) {
        return Xs.from(Zs(t));
      }
      function to(t) {
        const e = Xs.from(t).toHexString();
        return "-" === e[0]
          ? new Gs("-" + e.substring(3), 16)
          : new Gs(e.substring(2), 16);
      }
      function eo(t, e, r) {
        const i = { fault: t, operation: e };
        return (
          null != r && (i.value = r),
          Ws.throwError(t, Os.errors.NUMERIC_FAULT, i)
        );
      }
      const ro = new Os(Vs),
        io = {},
        no = Xs.from(0),
        so = Xs.from(-1);
      function oo(t, e, r, i) {
        const n = { fault: e, operation: r };
        return (
          void 0 !== i && (n.value = i),
          ro.throwError(t, Os.errors.NUMERIC_FAULT, n)
        );
      }
      let ao = "0";
      for (; ao.length < 256; ) ao += ao;
      function co(t) {
        if ("number" != typeof t)
          try {
            t = Xs.from(t).toNumber();
          } catch {}
        return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + ao.substring(0, t)
          : ro.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function ho(t, e) {
        null == e && (e = 0);
        const r = co(e),
          i = (t = Xs.from(t)).lt(no);
        i && (t = t.mul(so));
        let n = t.mod(r).toString();
        for (; n.length < r.length - 1; ) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const s = t.div(r).toString();
        return (t = 1 === r.length ? s : s + "." + n), i && (t = "-" + t), t;
      }
      function uo(t, e) {
        null == e && (e = 0);
        const r = co(e);
        ("string" != typeof t || !t.match(/^-?[0-9.]+$/)) &&
          ro.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        i && (t = t.substring(1)),
          "." === t && ro.throwArgumentError("missing value", "value", t);
        const n = t.split(".");
        n.length > 2 &&
          ro.throwArgumentError("too many decimal points", "value", t);
        let s = n[0],
          o = n[1];
        for (s || (s = "0"), o || (o = "0"); "0" === o[o.length - 1]; )
          o = o.substring(0, o.length - 1);
        for (
          o.length > r.length - 1 &&
            oo(
              "fractional component exceeds decimals",
              "underflow",
              "parseFixed"
            ),
            "" === o && (o = "0");
          o.length < r.length - 1;

        )
          o += "0";
        const a = Xs.from(s),
          c = Xs.from(o);
        let h = a.mul(r).add(c);
        return i && (h = h.mul(so)), h;
      }
      let lo = class t {
          constructor(t, e, r, i) {
            t !== io &&
              ro.throwError(
                "cannot use FixedFormat constructor; use FixedFormat.from",
                Os.errors.UNSUPPORTED_OPERATION,
                { operation: "new FixedFormat" }
              ),
              (this.signed = e),
              (this.width = r),
              (this.decimals = i),
              (this.name =
                (e ? "" : "u") + "fixed" + String(r) + "x" + String(i)),
              (this._multiplier = co(i)),
              Object.freeze(this);
          }
          static from(e) {
            if (e instanceof t) return e;
            "number" == typeof e && (e = "fixed128x".concat(e));
            let r = !0,
              i = 128,
              n = 18;
            if ("string" == typeof e) {
              if ("fixed" !== e)
                if ("ufixed" === e) r = !1;
                else {
                  const t = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                  t ||
                    ro.throwArgumentError("invalid fixed format", "format", e),
                    (r = "u" !== t[1]),
                    (i = parseInt(t[2])),
                    (n = parseInt(t[3]));
                }
            } else if (e) {
              const t = (t, r, i) =>
                null == e[t]
                  ? i
                  : (typeof e[t] !== r &&
                      ro.throwArgumentError(
                        "invalid fixed format (" + t + " not " + r + ")",
                        "format." + t,
                        e[t]
                      ),
                    e[t]);
              (r = t("signed", "boolean", r)),
                (i = t("width", "number", i)),
                (n = t("decimals", "number", n));
            }
            return (
              i % 8 &&
                ro.throwArgumentError(
                  "invalid fixed format width (not byte aligned)",
                  "format.width",
                  i
                ),
              n > 80 &&
                ro.throwArgumentError(
                  "invalid fixed format (decimals too large)",
                  "format.decimals",
                  n
                ),
              new t(io, r, i, n)
            );
          }
        },
        fo = class t {
          constructor(t, e, r, i) {
            t !== io &&
              ro.throwError(
                "cannot use FixedNumber constructor; use FixedNumber.from",
                Os.errors.UNSUPPORTED_OPERATION,
                { operation: "new FixedFormat" }
              ),
              (this.format = i),
              (this._hex = e),
              (this._value = r),
              (this._isFixedNumber = !0),
              Object.freeze(this);
          }
          _checkFormat(t) {
            this.format.name !== t.format.name &&
              ro.throwArgumentError(
                "incompatible format; use fixedNumber.toFormat",
                "other",
                t
              );
          }
          addUnsafe(e) {
            this._checkFormat(e);
            const r = uo(this._value, this.format.decimals),
              i = uo(e._value, e.format.decimals);
            return t.fromValue(r.add(i), this.format.decimals, this.format);
          }
          subUnsafe(e) {
            this._checkFormat(e);
            const r = uo(this._value, this.format.decimals),
              i = uo(e._value, e.format.decimals);
            return t.fromValue(r.sub(i), this.format.decimals, this.format);
          }
          mulUnsafe(e) {
            this._checkFormat(e);
            const r = uo(this._value, this.format.decimals),
              i = uo(e._value, e.format.decimals);
            return t.fromValue(
              r.mul(i).div(this.format._multiplier),
              this.format.decimals,
              this.format
            );
          }
          divUnsafe(e) {
            this._checkFormat(e);
            const r = uo(this._value, this.format.decimals),
              i = uo(e._value, e.format.decimals);
            return t.fromValue(
              r.mul(this.format._multiplier).div(i),
              this.format.decimals,
              this.format
            );
          }
          floor() {
            const e = this.toString().split(".");
            1 === e.length && e.push("0");
            let r = t.from(e[0], this.format);
            const i = !e[1].match(/^(0*)$/);
            return (
              this.isNegative() &&
                i &&
                (r = r.subUnsafe(po.toFormat(r.format))),
              r
            );
          }
          ceiling() {
            const e = this.toString().split(".");
            1 === e.length && e.push("0");
            let r = t.from(e[0], this.format);
            const i = !e[1].match(/^(0*)$/);
            return (
              !this.isNegative() &&
                i &&
                (r = r.addUnsafe(po.toFormat(r.format))),
              r
            );
          }
          round(e) {
            null == e && (e = 0);
            const r = this.toString().split(".");
            if (
              (1 === r.length && r.push("0"),
              (e < 0 || e > 80 || e % 1) &&
                ro.throwArgumentError("invalid decimal count", "decimals", e),
              r[1].length <= e)
            )
              return this;
            const i = t.from("1" + ao.substring(0, e), this.format),
              n = go.toFormat(this.format);
            return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
          }
          isZero() {
            return "0.0" === this._value || "0" === this._value;
          }
          isNegative() {
            return "-" === this._value[0];
          }
          toString() {
            return this._value;
          }
          toHexString(t) {
            if (null == t) return this._hex;
            t % 8 && ro.throwArgumentError("invalid byte width", "width", t);
            return qs(
              Xs.from(this._hex)
                .fromTwos(this.format.width)
                .toTwos(t)
                .toHexString(),
              t / 8
            );
          }
          toUnsafeFloat() {
            return parseFloat(this.toString());
          }
          toFormat(e) {
            return t.fromString(this._value, e);
          }
          static fromValue(e, r, i) {
            return (
              null == i &&
                null != r &&
                !(function (t) {
                  return (
                    null != t &&
                    (Xs.isBigNumber(t) ||
                      ("number" == typeof t && t % 1 === 0) ||
                      ("string" == typeof t && !!t.match(/^-?[0-9]+$/)) ||
                      Ls(t) ||
                      "bigint" == typeof t ||
                      Cs(t))
                  );
                })(r) &&
                ((i = r), (r = null)),
              null == r && (r = 0),
              null == i && (i = "fixed"),
              t.fromString(ho(e, r), lo.from(i))
            );
          }
          static fromString(e, r) {
            null == r && (r = "fixed");
            const i = lo.from(r),
              n = uo(e, i.decimals);
            !i.signed &&
              n.lt(no) &&
              oo("unsigned value cannot be negative", "overflow", "value", e);
            let s = null;
            i.signed
              ? (s = n.toTwos(i.width).toHexString())
              : ((s = n.toHexString()), (s = qs(s, i.width / 8)));
            const o = ho(n, i.decimals);
            return new t(io, s, o, i);
          }
          static fromBytes(e, r) {
            null == r && (r = "fixed");
            const i = lo.from(r);
            if (Us(e).length > i.width / 8) throw new Error("overflow");
            let n = Xs.from(e);
            i.signed && (n = n.fromTwos(i.width));
            const s = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
              o = ho(n, i.decimals);
            return new t(io, s, o, i);
          }
          static from(e, r) {
            if ("string" == typeof e) return t.fromString(e, r);
            if (Cs(e)) return t.fromBytes(e, r);
            try {
              return t.fromValue(e, 0, r);
            } catch (i) {
              if (i.code !== Os.errors.INVALID_ARGUMENT) throw i;
            }
            return ro.throwArgumentError(
              "invalid FixedNumber value",
              "value",
              e
            );
          }
          static isFixedNumber(t) {
            return !(!t || !t._isFixedNumber);
          }
        };
      const po = fo.from(1),
        go = fo.from("0.5"),
        mo = new Os("strings/5.7.0");
      var yo, vo;
      function wo(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : yo.current;
        e != yo.current && (mo.checkNormalize(), (t = t.normalize(e)));
        let r = [];
        for (let i = 0; i < t.length; i++) {
          const e = t.charCodeAt(i);
          if (e < 128) r.push(e);
          else if (e < 2048) r.push((e >> 6) | 192), r.push((63 & e) | 128);
          else if (55296 == (64512 & e)) {
            i++;
            const n = t.charCodeAt(i);
            if (i >= t.length || 56320 !== (64512 & n))
              throw new Error("invalid utf-8 string");
            const s = 65536 + ((1023 & e) << 10) + (1023 & n);
            r.push((s >> 18) | 240),
              r.push(((s >> 12) & 63) | 128),
              r.push(((s >> 6) & 63) | 128),
              r.push((63 & s) | 128);
          } else
            r.push((e >> 12) | 224),
              r.push(((e >> 6) & 63) | 128),
              r.push((63 & e) | 128);
        }
        return Us(r);
      }
      function bo(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let r = 0,
          i = {};
        return (
          t.split(",").forEach((t) => {
            let n = t.split(":");
            (r += parseInt(n[0], 16)), (i[r] = e(n[1]));
          }),
          i
        );
      }
      function _o(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let r = t.split("-");
          1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
          let i = e + parseInt(r[0], 16);
          return (e = parseInt(r[1], 16)), { l: i, h: e };
        });
      }
      function Ao(t, e) {
        null == e && (e = 1);
        const r = [],
          i = r.forEach,
          n = function (t, e) {
            i.call(t, function (t) {
              e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t);
            });
          };
        return n(t, e), r;
      }
      function Eo(t) {
        return (function (t) {
          let e = 0;
          return () => t[e++];
        })(
          (function (t) {
            let e = 0;
            function r() {
              return (t[e++] << 8) | t[e++];
            }
            let i = r(),
              n = 1,
              s = [0, 1];
            for (let b = 1; b < i; b++) s.push((n += r()));
            let o = r(),
              a = e;
            e += o;
            let c = 0,
              h = 0;
            function u() {
              return (
                0 == c && ((h = (h << 8) | t[e++]), (c = 8)), (h >> --c) & 1
              );
            }
            const l = Math.pow(2, 31),
              f = l >>> 1,
              d = f >> 1,
              p = l - 1;
            let g = 0;
            for (let b = 0; b < 31; b++) g = (g << 1) | u();
            let m = [],
              y = 0,
              v = l;
            for (;;) {
              let t = Math.floor(((g - y + 1) * n - 1) / v),
                e = 0,
                r = i;
              for (; r - e > 1; ) {
                let i = (e + r) >>> 1;
                t < s[i] ? (r = i) : (e = i);
              }
              if (0 == e) break;
              m.push(e);
              let o = y + Math.floor((v * s[e]) / n),
                a = y + Math.floor((v * s[e + 1]) / n) - 1;
              for (; !((o ^ a) & f); )
                (g = ((g << 1) & p) | u()),
                  (o = (o << 1) & p),
                  (a = ((a << 1) & p) | 1);
              for (; o & ~a & d; )
                (g = (g & f) | ((g << 1) & (p >>> 1)) | u()),
                  (o = (o << 1) ^ f),
                  (a = ((a ^ f) << 1) | f | 1);
              (y = o), (v = 1 + a - o);
            }
            let w = i - 4;
            return m.map((e) => {
              switch (e - w) {
                case 3:
                  return w + 65792 + ((t[a++] << 16) | (t[a++] << 8) | t[a++]);
                case 2:
                  return w + 256 + ((t[a++] << 8) | t[a++]);
                case 1:
                  return w + t[a++];
                default:
                  return e - 1;
              }
            });
          })(t)
        );
      }
      function So(t) {
        return 1 & t ? ~t >> 1 : t >> 1;
      }
      function Io(t, e) {
        let r = Array(t);
        for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
        return r;
      }
      function Mo(t, e) {
        let r = Array(t);
        for (let i = 0, n = 0; i < t; i++) r[i] = n += So(e());
        return r;
      }
      function No(t, e) {
        let r = Io(t(), t),
          i = t(),
          n = Io(i, t),
          s = (function (t, e) {
            let r = Array(t);
            for (let i = 0; i < t; i++) r[i] = 1 + e();
            return r;
          })(i, t);
        for (let o = 0; o < i; o++)
          for (let t = 0; t < s[o]; t++) r.push(n[o] + t);
        return e ? r.map((t) => e[t]) : r;
      }
      function Oo(t, e, r) {
        let i = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let n = 0; n < e; n++) Mo(t, r).forEach((t, e) => i[e].push(t));
        return i;
      }
      function xo(t, e) {
        let r = 1 + e(),
          i = e(),
          n = (function (t) {
            let e = [];
            for (;;) {
              let r = t();
              if (0 == r) break;
              e.push(r);
            }
            return e;
          })(e);
        return Ao(
          Oo(n.length, 1 + t, e).map((t, e) => {
            const s = t[0],
              o = t.slice(1);
            return Array(n[e])
              .fill(void 0)
              .map((t, e) => {
                let n = e * i;
                return [s + e * r, o.map((t) => t + n)];
              });
          })
        );
      }
      function Po(t, e) {
        return Oo(1 + e(), 1 + t, e).map((t) => [t[0], t.slice(1)]);
      }
      !(function (t) {
        (t.current = ""),
          (t.NFC = "NFC"),
          (t.NFD = "NFD"),
          (t.NFKC = "NFKC"),
          (t.NFKD = "NFKD");
      })(yo || (yo = {})),
        (function (t) {
          (t.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (t.BAD_PREFIX = "bad codepoint prefix"),
            (t.OVERRUN = "string overrun"),
            (t.MISSING_CONTINUE = "missing continuation byte"),
            (t.OUT_OF_RANGE = "out of UTF-8 range"),
            (t.UTF16_SURROGATE = "UTF-16 surrogate"),
            (t.OVERLONG = "overlong representation");
        })(vo || (vo = {})),
        _o(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        bo(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        bo(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        bo(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (t) {
            if (t.length % 4 !== 0) throw new Error("bad data");
            let e = [];
            for (let r = 0; r < t.length; r += 4)
              e.push(parseInt(t.substring(r, r + 4), 16));
            return e;
          }
        ),
        _o(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      const Ro = Eo(
        (function (t) {
          t = atob(t);
          const e = [];
          for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
          return Us(e);
        })(
          "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
        )
      );
      new Set(No(Ro)),
        new Set(No(Ro)),
        (function (t) {
          let e = [];
          for (;;) {
            let r = t();
            if (0 == r) break;
            e.push(xo(r, t));
          }
          for (;;) {
            let r = t() - 1;
            if (r < 0) break;
            e.push(Po(r, t));
          }
          (function (t) {
            const e = {};
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              e[i[0]] = i[1];
            }
          })(Ao(e));
        })(Ro),
        (function (t) {
          let e = No(t).sort((t, e) => t - e);
          (function r() {
            let i = [];
            for (;;) {
              let n = No(t, e);
              if (0 == n.length) break;
              i.push({ set: new Set(n), node: r() });
            }
            i.sort((t, e) => e.set.size - t.set.size);
            let n = t(),
              s = n % 3;
            n = (n / 3) | 0;
            let o = !!(1 & n);
            return (
              (n >>= 1),
              { branches: i, valid: s, fe0f: o, save: 1 == n, check: 2 == n }
            );
          })();
        })(Ro);
      new Uint8Array(32).fill(0);
      const To = "\x19Ethereum Signed Message:\n";
      function Co(t) {
        return (
          "string" == typeof t && (t = wo(t)),
          zs(
            (function (t) {
              const e = t.map((t) => Us(t)),
                r = e.reduce((t, e) => t + e.length, 0),
                i = new Uint8Array(r);
              return e.reduce((t, e) => (i.set(e, t), t + e.length), 0), Rs(i);
            })([wo(To), wo(String(t.length)), t])
          )
        );
      }
      const Uo = new Os("address/5.7.0");
      function Lo(t) {
        Ls(t, 20) || Uo.throwArgumentError("invalid address", "address", t);
        const e = (t = t.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
        const i = Us(zs(r));
        for (let n = 0; n < 40; n += 2)
          i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const ko = {};
      for (let Jg = 0; Jg < 10; Jg++) ko[String(Jg)] = String(Jg);
      for (let Jg = 0; Jg < 26; Jg++)
        ko[String.fromCharCode(65 + Jg)] = String(10 + Jg);
      const Do = Math.floor(
        (function (t) {
          return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
        })(9007199254740991)
      );
      function Bo(t) {
        let e = null;
        if (
          ("string" != typeof t &&
            Uo.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== t.substring(0, 2) && (t = "0x" + t),
            (e = Lo(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              Uo.throwArgumentError("bad address checksum", "address", t);
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            t.substring(2, 4) !==
              (function (t) {
                let e = (t =
                  (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
                  .split("")
                  .map((t) => ko[t])
                  .join("");
                for (; e.length >= Do; ) {
                  let t = e.substring(0, Do);
                  e = (parseInt(t, 10) % 97) + e.substring(t.length);
                }
                let r = String(98 - (parseInt(e, 10) % 97));
                for (; r.length < 2; ) r = "0" + r;
                return r;
              })(t) && Uo.throwArgumentError("bad icap checksum", "address", t),
              e = (function (t) {
                return new Gs(t, 36).toString(16);
              })(t.substring(4));
            e.length < 40;

          )
            e = "0" + e;
          e = Lo("0x" + e);
        } else Uo.throwArgumentError("invalid address", "address", t);
        return e;
      }
      function qo(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      new Uint8Array(32).fill(0), Xs.from(-1);
      const jo = Xs.from(0),
        zo = Xs.from(1);
      Xs.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
        qs(zo.toHexString(), 32),
        qs(jo.toHexString(), 32);
      var Fo = {},
        Ko = {},
        Ho = Vo;
      function Vo(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      Vo.equal = function (t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
      };
      var Go = { exports: {} };
      "function" == typeof Object.create
        ? (Go.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (Go.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
      var Wo = Ho,
        Yo = Go.exports;
      function Qo(t, e) {
        return (
          !(
            55296 !== (64512 & t.charCodeAt(e)) ||
            e < 0 ||
            e + 1 >= t.length
          ) && 56320 === (64512 & t.charCodeAt(e + 1))
        );
      }
      function Jo(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function Xo(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function Zo(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (Ko.inherits = Yo),
        (Ko.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" == typeof t)
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                    (t = "0" + t),
                    n = 0;
                  n < t.length;
                  n += 2
                )
                  r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (var i = 0, n = 0; n < t.length; n++) {
                var s = t.charCodeAt(n);
                s < 128
                  ? (r[i++] = s)
                  : s < 2048
                  ? ((r[i++] = (s >> 6) | 192), (r[i++] = (63 & s) | 128))
                  : Qo(t, n)
                  ? ((s =
                      65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n))),
                    (r[i++] = (s >> 18) | 240),
                    (r[i++] = ((s >> 12) & 63) | 128),
                    (r[i++] = ((s >> 6) & 63) | 128),
                    (r[i++] = (63 & s) | 128))
                  : ((r[i++] = (s >> 12) | 224),
                    (r[i++] = ((s >> 6) & 63) | 128),
                    (r[i++] = (63 & s) | 128));
              }
          else for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
          return r;
        }),
        (Ko.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += Xo(t[r].toString(16));
          return e;
        }),
        (Ko.htonl = Jo),
        (Ko.toHex32 = function (t, e) {
          for (var r = "", i = 0; i < t.length; i++) {
            var n = t[i];
            "little" === e && (n = Jo(n)), (r += Zo(n.toString(16)));
          }
          return r;
        }),
        (Ko.zero2 = Xo),
        (Ko.zero8 = Zo),
        (Ko.join32 = function (t, e, r, i) {
          var n = r - e;
          Wo(n % 4 === 0);
          for (
            var s = new Array(n / 4), o = 0, a = e;
            o < s.length;
            o++, a += 4
          ) {
            var c;
            (c =
              "big" === i
                ? (t[a] << 24) | (t[a + 1] << 16) | (t[a + 2] << 8) | t[a + 3]
                : (t[a + 3] << 24) | (t[a + 2] << 16) | (t[a + 1] << 8) | t[a]),
              (s[o] = c >>> 0);
          }
          return s;
        }),
        (Ko.split32 = function (t, e) {
          for (
            var r = new Array(4 * t.length), i = 0, n = 0;
            i < t.length;
            i++, n += 4
          ) {
            var s = t[i];
            "big" === e
              ? ((r[n] = s >>> 24),
                (r[n + 1] = (s >>> 16) & 255),
                (r[n + 2] = (s >>> 8) & 255),
                (r[n + 3] = 255 & s))
              : ((r[n + 3] = s >>> 24),
                (r[n + 2] = (s >>> 16) & 255),
                (r[n + 1] = (s >>> 8) & 255),
                (r[n] = 255 & s));
          }
          return r;
        }),
        (Ko.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (Ko.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (Ko.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (Ko.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (Ko.sum32_4 = function (t, e, r, i) {
          return (t + e + r + i) >>> 0;
        }),
        (Ko.sum32_5 = function (t, e, r, i, n) {
          return (t + e + r + i + n) >>> 0;
        }),
        (Ko.sum64 = function (t, e, r, i) {
          var n = t[e],
            s = (i + t[e + 1]) >>> 0,
            o = (s < i ? 1 : 0) + r + n;
          (t[e] = o >>> 0), (t[e + 1] = s);
        }),
        (Ko.sum64_hi = function (t, e, r, i) {
          return (((e + i) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (Ko.sum64_lo = function (t, e, r, i) {
          return (e + i) >>> 0;
        }),
        (Ko.sum64_4_hi = function (t, e, r, i, n, s, o, a) {
          var c = 0,
            h = e;
          return (
            (c += (h = (h + i) >>> 0) < e ? 1 : 0),
            (c += (h = (h + s) >>> 0) < s ? 1 : 0),
            (t + r + n + o + (c += (h = (h + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (Ko.sum64_4_lo = function (t, e, r, i, n, s, o, a) {
          return (e + i + s + a) >>> 0;
        }),
        (Ko.sum64_5_hi = function (t, e, r, i, n, s, o, a, c, h) {
          var u = 0,
            l = e;
          return (
            (u += (l = (l + i) >>> 0) < e ? 1 : 0),
            (u += (l = (l + s) >>> 0) < s ? 1 : 0),
            (u += (l = (l + a) >>> 0) < a ? 1 : 0),
            (t + r + n + o + c + (u += (l = (l + h) >>> 0) < h ? 1 : 0)) >>> 0
          );
        }),
        (Ko.sum64_5_lo = function (t, e, r, i, n, s, o, a, c, h) {
          return (e + i + s + a + h) >>> 0;
        }),
        (Ko.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (Ko.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (Ko.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (Ko.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
      var $o = {},
        ta = Ko,
        ea = Ho;
      function ra() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      ($o.BlockHash = ra),
        (ra.prototype.update = function (t, e) {
          if (
            ((t = ta.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = ta.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (ra.prototype.digest = function (t) {
          return (
            this.update(this._pad()), ea(null === this.pending), this._digest(t)
          );
        }),
        (ra.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            i = new Array(r + this.padLength);
          i[0] = 128;
          for (var n = 1; n < r; n++) i[n] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var s = 8; s < this.padLength; s++) i[n++] = 0;
            (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (t >>> 24) & 255),
              (i[n++] = (t >>> 16) & 255),
              (i[n++] = (t >>> 8) & 255),
              (i[n++] = 255 & t);
          } else
            for (
              i[n++] = 255 & t,
                i[n++] = (t >>> 8) & 255,
                i[n++] = (t >>> 16) & 255,
                i[n++] = (t >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                s = 8;
              s < this.padLength;
              s++
            )
              i[n++] = 0;
          return i;
        });
      var ia = {},
        na = {},
        sa = Ko.rotr32;
      function oa(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function aa(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function ca(t, e, r) {
        return t ^ e ^ r;
      }
      (na.ft_1 = function (t, e, r, i) {
        return 0 === t
          ? oa(e, r, i)
          : 1 === t || 3 === t
          ? ca(e, r, i)
          : 2 === t
          ? aa(e, r, i)
          : void 0;
      }),
        (na.ch32 = oa),
        (na.maj32 = aa),
        (na.p32 = ca),
        (na.s0_256 = function (t) {
          return sa(t, 2) ^ sa(t, 13) ^ sa(t, 22);
        }),
        (na.s1_256 = function (t) {
          return sa(t, 6) ^ sa(t, 11) ^ sa(t, 25);
        }),
        (na.g0_256 = function (t) {
          return sa(t, 7) ^ sa(t, 18) ^ (t >>> 3);
        }),
        (na.g1_256 = function (t) {
          return sa(t, 17) ^ sa(t, 19) ^ (t >>> 10);
        });
      var ha = Ko,
        ua = $o,
        la = na,
        fa = ha.rotl32,
        da = ha.sum32,
        pa = ha.sum32_5,
        ga = la.ft_1,
        ma = ua.BlockHash,
        ya = [1518500249, 1859775393, 2400959708, 3395469782];
      function va() {
        if (!(this instanceof va)) return new va();
        ma.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = new Array(80));
      }
      ha.inherits(va, ma);
      var wa = va;
      (va.blockSize = 512),
        (va.outSize = 160),
        (va.hmacStrength = 80),
        (va.padLength = 64),
        (va.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = fa(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
          var n = this.h[0],
            s = this.h[1],
            o = this.h[2],
            a = this.h[3],
            c = this.h[4];
          for (i = 0; i < r.length; i++) {
            var h = ~~(i / 20),
              u = pa(fa(n, 5), ga(h, s, o, a), c, r[i], ya[h]);
            (c = a), (a = o), (o = fa(s, 30)), (s = n), (n = u);
          }
          (this.h[0] = da(this.h[0], n)),
            (this.h[1] = da(this.h[1], s)),
            (this.h[2] = da(this.h[2], o)),
            (this.h[3] = da(this.h[3], a)),
            (this.h[4] = da(this.h[4], c));
        }),
        (va.prototype._digest = function (t) {
          return "hex" === t
            ? ha.toHex32(this.h, "big")
            : ha.split32(this.h, "big");
        });
      var ba = Ko,
        _a = $o,
        Aa = na,
        Ea = Ho,
        Sa = ba.sum32,
        Ia = ba.sum32_4,
        Ma = ba.sum32_5,
        Na = Aa.ch32,
        Oa = Aa.maj32,
        xa = Aa.s0_256,
        Pa = Aa.s1_256,
        Ra = Aa.g0_256,
        Ta = Aa.g1_256,
        Ca = _a.BlockHash,
        Ua = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function La() {
        if (!(this instanceof La)) return new La();
        Ca.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = Ua),
          (this.W = new Array(64));
      }
      ba.inherits(La, Ca);
      var ka = La;
      (La.blockSize = 512),
        (La.outSize = 256),
        (La.hmacStrength = 192),
        (La.padLength = 64),
        (La.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = Ia(Ta(r[i - 2]), r[i - 7], Ra(r[i - 15]), r[i - 16]);
          var n = this.h[0],
            s = this.h[1],
            o = this.h[2],
            a = this.h[3],
            c = this.h[4],
            h = this.h[5],
            u = this.h[6],
            l = this.h[7];
          for (Ea(this.k.length === r.length), i = 0; i < r.length; i++) {
            var f = Ma(l, Pa(c), Na(c, h, u), this.k[i], r[i]),
              d = Sa(xa(n), Oa(n, s, o));
            (l = u),
              (u = h),
              (h = c),
              (c = Sa(a, f)),
              (a = o),
              (o = s),
              (s = n),
              (n = Sa(f, d));
          }
          (this.h[0] = Sa(this.h[0], n)),
            (this.h[1] = Sa(this.h[1], s)),
            (this.h[2] = Sa(this.h[2], o)),
            (this.h[3] = Sa(this.h[3], a)),
            (this.h[4] = Sa(this.h[4], c)),
            (this.h[5] = Sa(this.h[5], h)),
            (this.h[6] = Sa(this.h[6], u)),
            (this.h[7] = Sa(this.h[7], l));
        }),
        (La.prototype._digest = function (t) {
          return "hex" === t
            ? ba.toHex32(this.h, "big")
            : ba.split32(this.h, "big");
        });
      var Da = Ko,
        Ba = ka;
      function qa() {
        if (!(this instanceof qa)) return new qa();
        Ba.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      Da.inherits(qa, Ba);
      var ja = qa;
      (qa.blockSize = 512),
        (qa.outSize = 224),
        (qa.hmacStrength = 192),
        (qa.padLength = 64),
        (qa.prototype._digest = function (t) {
          return "hex" === t
            ? Da.toHex32(this.h.slice(0, 7), "big")
            : Da.split32(this.h.slice(0, 7), "big");
        });
      var za = Ko,
        Fa = $o,
        Ka = Ho,
        Ha = za.rotr64_hi,
        Va = za.rotr64_lo,
        Ga = za.shr64_hi,
        Wa = za.shr64_lo,
        Ya = za.sum64,
        Qa = za.sum64_hi,
        Ja = za.sum64_lo,
        Xa = za.sum64_4_hi,
        Za = za.sum64_4_lo,
        $a = za.sum64_5_hi,
        tc = za.sum64_5_lo,
        ec = Fa.BlockHash,
        rc = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function ic() {
        if (!(this instanceof ic)) return new ic();
        ec.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = rc),
          (this.W = new Array(160));
      }
      za.inherits(ic, ec);
      var nc = ic;
      function sc(t, e, r, i, n) {
        var s = (t & r) ^ (~t & n);
        return s < 0 && (s += 4294967296), s;
      }
      function oc(t, e, r, i, n, s) {
        var o = (e & i) ^ (~e & s);
        return o < 0 && (o += 4294967296), o;
      }
      function ac(t, e, r, i, n) {
        var s = (t & r) ^ (t & n) ^ (r & n);
        return s < 0 && (s += 4294967296), s;
      }
      function cc(t, e, r, i, n, s) {
        var o = (e & i) ^ (e & s) ^ (i & s);
        return o < 0 && (o += 4294967296), o;
      }
      function hc(t, e) {
        var r = Ha(t, e, 28) ^ Ha(e, t, 2) ^ Ha(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function uc(t, e) {
        var r = Va(t, e, 28) ^ Va(e, t, 2) ^ Va(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function lc(t, e) {
        var r = Ha(t, e, 14) ^ Ha(t, e, 18) ^ Ha(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function fc(t, e) {
        var r = Va(t, e, 14) ^ Va(t, e, 18) ^ Va(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function dc(t, e) {
        var r = Ha(t, e, 1) ^ Ha(t, e, 8) ^ Ga(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function pc(t, e) {
        var r = Va(t, e, 1) ^ Va(t, e, 8) ^ Wa(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function gc(t, e) {
        var r = Ha(t, e, 19) ^ Ha(e, t, 29) ^ Ga(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function mc(t, e) {
        var r = Va(t, e, 19) ^ Va(e, t, 29) ^ Wa(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      (ic.blockSize = 1024),
        (ic.outSize = 512),
        (ic.hmacStrength = 192),
        (ic.padLength = 128),
        (ic.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
          for (; i < r.length; i += 2) {
            var n = gc(r[i - 4], r[i - 3]),
              s = mc(r[i - 4], r[i - 3]),
              o = r[i - 14],
              a = r[i - 13],
              c = dc(r[i - 30], r[i - 29]),
              h = pc(r[i - 30], r[i - 29]),
              u = r[i - 32],
              l = r[i - 31];
            (r[i] = Xa(n, s, o, a, c, h, u, l)),
              (r[i + 1] = Za(n, s, o, a, c, h, u, l));
          }
        }),
        (ic.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            s = this.h[2],
            o = this.h[3],
            a = this.h[4],
            c = this.h[5],
            h = this.h[6],
            u = this.h[7],
            l = this.h[8],
            f = this.h[9],
            d = this.h[10],
            p = this.h[11],
            g = this.h[12],
            m = this.h[13],
            y = this.h[14],
            v = this.h[15];
          Ka(this.k.length === r.length);
          for (var w = 0; w < r.length; w += 2) {
            var b = y,
              _ = v,
              A = lc(l, f),
              E = fc(l, f),
              S = sc(l, f, d, p, g),
              I = oc(l, f, d, p, g, m),
              M = this.k[w],
              N = this.k[w + 1],
              O = r[w],
              x = r[w + 1],
              P = $a(b, _, A, E, S, I, M, N, O, x),
              R = tc(b, _, A, E, S, I, M, N, O, x);
            (b = hc(i, n)),
              (_ = uc(i, n)),
              (A = ac(i, n, s, o, a)),
              (E = cc(i, n, s, o, a, c));
            var T = Qa(b, _, A, E),
              C = Ja(b, _, A, E);
            (y = g),
              (v = m),
              (g = d),
              (m = p),
              (d = l),
              (p = f),
              (l = Qa(h, u, P, R)),
              (f = Ja(u, u, P, R)),
              (h = a),
              (u = c),
              (a = s),
              (c = o),
              (s = i),
              (o = n),
              (i = Qa(P, R, T, C)),
              (n = Ja(P, R, T, C));
          }
          Ya(this.h, 0, i, n),
            Ya(this.h, 2, s, o),
            Ya(this.h, 4, a, c),
            Ya(this.h, 6, h, u),
            Ya(this.h, 8, l, f),
            Ya(this.h, 10, d, p),
            Ya(this.h, 12, g, m),
            Ya(this.h, 14, y, v);
        }),
        (ic.prototype._digest = function (t) {
          return "hex" === t
            ? za.toHex32(this.h, "big")
            : za.split32(this.h, "big");
        });
      var yc = Ko,
        vc = nc;
      function wc() {
        if (!(this instanceof wc)) return new wc();
        vc.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      yc.inherits(wc, vc);
      var bc = wc;
      (wc.blockSize = 1024),
        (wc.outSize = 384),
        (wc.hmacStrength = 192),
        (wc.padLength = 128),
        (wc.prototype._digest = function (t) {
          return "hex" === t
            ? yc.toHex32(this.h.slice(0, 12), "big")
            : yc.split32(this.h.slice(0, 12), "big");
        }),
        (ia.sha1 = wa),
        (ia.sha224 = ja),
        (ia.sha256 = ka),
        (ia.sha384 = bc),
        (ia.sha512 = nc);
      var _c = {},
        Ac = Ko,
        Ec = $o,
        Sc = Ac.rotl32,
        Ic = Ac.sum32,
        Mc = Ac.sum32_3,
        Nc = Ac.sum32_4,
        Oc = Ec.BlockHash;
      function xc() {
        if (!(this instanceof xc)) return new xc();
        Oc.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function Pc(t, e, r, i) {
        return t <= 15
          ? e ^ r ^ i
          : t <= 31
          ? (e & r) | (~e & i)
          : t <= 47
          ? (e | ~r) ^ i
          : t <= 63
          ? (e & i) | (r & ~i)
          : e ^ (r | ~i);
      }
      function Rc(t) {
        return t <= 15
          ? 0
          : t <= 31
          ? 1518500249
          : t <= 47
          ? 1859775393
          : t <= 63
          ? 2400959708
          : 2840853838;
      }
      function Tc(t) {
        return t <= 15
          ? 1352829926
          : t <= 31
          ? 1548603684
          : t <= 47
          ? 1836072691
          : t <= 63
          ? 2053994217
          : 0;
      }
      Ac.inherits(xc, Oc),
        (_c.ripemd160 = xc),
        (xc.blockSize = 512),
        (xc.outSize = 160),
        (xc.hmacStrength = 192),
        (xc.padLength = 64),
        (xc.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              s = this.h[3],
              o = this.h[4],
              a = r,
              c = i,
              h = n,
              u = s,
              l = o,
              f = 0;
            f < 80;
            f++
          ) {
            var d = Ic(
              Sc(Nc(r, Pc(f, i, n, s), t[Cc[f] + e], Rc(f)), Lc[f]),
              o
            );
            (r = o),
              (o = s),
              (s = Sc(n, 10)),
              (n = i),
              (i = d),
              (d = Ic(
                Sc(Nc(a, Pc(79 - f, c, h, u), t[Uc[f] + e], Tc(f)), kc[f]),
                l
              )),
              (a = l),
              (l = u),
              (u = Sc(h, 10)),
              (h = c),
              (c = d);
          }
          (d = Mc(this.h[1], n, u)),
            (this.h[1] = Mc(this.h[2], s, l)),
            (this.h[2] = Mc(this.h[3], o, a)),
            (this.h[3] = Mc(this.h[4], r, c)),
            (this.h[4] = Mc(this.h[0], i, h)),
            (this.h[0] = d);
        }),
        (xc.prototype._digest = function (t) {
          return "hex" === t
            ? Ac.toHex32(this.h, "little")
            : Ac.split32(this.h, "little");
        });
      var Cc = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        Uc = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        Lc = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        kc = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ],
        Dc = Ko,
        Bc = Ho;
      function qc(t, e, r) {
        if (!(this instanceof qc)) return new qc(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(Dc.toArray(e, r));
      }
      var jc = qc;
      function zc(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return (function () {
                  throw new Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })((null !== e && void 0 !== e) || r.path);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      (qc.prototype._init = function (t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
          Bc(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
          t[e] ^= 106;
        this.outer = new this.Hash().update(t);
      }),
        (qc.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (qc.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        }),
        (function (t) {
          var e = t;
          (e.utils = Ko),
            (e.common = $o),
            (e.sha = ia),
            (e.ripemd = _c),
            (e.hmac = jc),
            (e.sha1 = e.sha.sha1),
            (e.sha256 = e.sha.sha256),
            (e.sha224 = e.sha.sha224),
            (e.sha384 = e.sha.sha384),
            (e.sha512 = e.sha.sha512),
            (e.ripemd160 = e.ripemd.ripemd160);
        })(Fo);
      var Fc = Kc;
      function Kc(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      Kc.equal = function (t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
      };
      var Hc = zc(function (t, e) {
          var r = e;
          function i(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function n(t) {
            for (var e = "", r = 0; r < t.length; r++)
              e += i(t[r].toString(16));
            return e;
          }
          (r.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" != typeof t) {
              for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
              return r;
            }
            if ("hex" === e) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                (t = "0" + t);
              for (i = 0; i < t.length; i += 2)
                r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i),
                  s = n >> 8,
                  o = 255 & n;
                s ? r.push(s, o) : r.push(o);
              }
            return r;
          }),
            (r.zero2 = i),
            (r.toHex = n),
            (r.encode = function (t, e) {
              return "hex" === e ? n(t) : t;
            });
        }),
        Vc = zc(function (t, e) {
          var r = e;
          (r.assert = Fc),
            (r.toArray = Hc.toArray),
            (r.zero2 = Hc.zero2),
            (r.toHex = Hc.toHex),
            (r.encode = Hc.encode),
            (r.getNAF = function (t, e, r) {
              var i = new Array(Math.max(t.bitLength(), r) + 1);
              i.fill(0);
              for (
                var n = 1 << (e + 1), s = t.clone(), o = 0;
                o < i.length;
                o++
              ) {
                var a,
                  c = s.andln(n - 1);
                s.isOdd()
                  ? ((a = c > (n >> 1) - 1 ? (n >> 1) - c : c), s.isubn(a))
                  : (a = 0),
                  (i[o] = a),
                  s.iushrn(1);
              }
              return i;
            }),
            (r.getJSF = function (t, e) {
              var r = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var i, n = 0, s = 0; t.cmpn(-n) > 0 || e.cmpn(-s) > 0; ) {
                var o,
                  a,
                  c = (t.andln(3) + n) & 3,
                  h = (e.andln(3) + s) & 3;
                3 === c && (c = -1),
                  3 === h && (h = -1),
                  1 & c
                    ? (o =
                        (3 !== (i = (t.andln(7) + n) & 7) && 5 !== i) || 2 !== h
                          ? c
                          : -c)
                    : (o = 0),
                  r[0].push(o),
                  1 & h
                    ? (a =
                        (3 !== (i = (e.andln(7) + s) & 7) && 5 !== i) || 2 !== c
                          ? h
                          : -h)
                    : (a = 0),
                  r[1].push(a),
                  2 * n === o + 1 && (n = 1 - n),
                  2 * s === a + 1 && (s = 1 - s),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return r;
            }),
            (r.cachedProperty = function (t, e, r) {
              var i = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
              };
            }),
            (r.parseBytes = function (t) {
              return "string" == typeof t ? r.toArray(t, "hex") : t;
            }),
            (r.intFromLE = function (t) {
              return new Hs(t, "hex", "le");
            });
        }),
        Gc = Vc.getNAF,
        Wc = Vc.getJSF,
        Yc = Vc.assert;
      function Qc(t, e) {
        (this.type = t),
          (this.p = new Hs(e.p, 16)),
          (this.red = e.prime ? Hs.red(e.prime) : Hs.mont(this.p)),
          (this.zero = new Hs(0).toRed(this.red)),
          (this.one = new Hs(1).toRed(this.red)),
          (this.two = new Hs(2).toRed(this.red)),
          (this.n = e.n && new Hs(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var Jc = Qc;
      function Xc(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (Qc.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (Qc.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (Qc.prototype._fixedNafMul = function (t, e) {
          Yc(t.precomputed);
          var r = t._getDoubles(),
            i = Gc(e, 1, this._bitLength),
            n = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          n /= 3;
          var s,
            o,
            a = [];
          for (s = 0; s < i.length; s += r.step) {
            o = 0;
            for (var c = s + r.step - 1; c >= s; c--) o = (o << 1) + i[c];
            a.push(o);
          }
          for (
            var h = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              l = n;
            l > 0;
            l--
          ) {
            for (s = 0; s < a.length; s++)
              (o = a[s]) === l
                ? (u = u.mixedAdd(r.points[s]))
                : o === -l && (u = u.mixedAdd(r.points[s].neg()));
            h = h.add(u);
          }
          return h.toP();
        }),
        (Qc.prototype._wnafMul = function (t, e) {
          var r = 4,
            i = t._getNAFPoints(r);
          r = i.wnd;
          for (
            var n = i.points,
              s = Gc(e, r, this._bitLength),
              o = this.jpoint(null, null, null),
              a = s.length - 1;
            a >= 0;
            a--
          ) {
            for (var c = 0; a >= 0 && 0 === s[a]; a--) c++;
            if ((a >= 0 && c++, (o = o.dblp(c)), a < 0)) break;
            var h = s[a];
            Yc(0 !== h),
              (o =
                "affine" === t.type
                  ? h > 0
                    ? o.mixedAdd(n[(h - 1) >> 1])
                    : o.mixedAdd(n[(-h - 1) >> 1].neg())
                  : h > 0
                  ? o.add(n[(h - 1) >> 1])
                  : o.add(n[(-h - 1) >> 1].neg()));
          }
          return "affine" === t.type ? o.toP() : o;
        }),
        (Qc.prototype._wnafMulAdd = function (t, e, r, i, n) {
          var s,
            o,
            a,
            c = this._wnafT1,
            h = this._wnafT2,
            u = this._wnafT3,
            l = 0;
          for (s = 0; s < i; s++) {
            var f = (a = e[s])._getNAFPoints(t);
            (c[s] = f.wnd), (h[s] = f.points);
          }
          for (s = i - 1; s >= 1; s -= 2) {
            var d = s - 1,
              p = s;
            if (1 === c[d] && 1 === c[p]) {
              var g = [e[d], null, null, e[p]];
              0 === e[d].y.cmp(e[p].y)
                ? ((g[1] = e[d].add(e[p])),
                  (g[2] = e[d].toJ().mixedAdd(e[p].neg())))
                : 0 === e[d].y.cmp(e[p].y.redNeg())
                ? ((g[1] = e[d].toJ().mixedAdd(e[p])),
                  (g[2] = e[d].add(e[p].neg())))
                : ((g[1] = e[d].toJ().mixedAdd(e[p])),
                  (g[2] = e[d].toJ().mixedAdd(e[p].neg())));
              var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = Wc(r[d], r[p]);
              for (
                l = Math.max(y[0].length, l),
                  u[d] = new Array(l),
                  u[p] = new Array(l),
                  o = 0;
                o < l;
                o++
              ) {
                var v = 0 | y[0][o],
                  w = 0 | y[1][o];
                (u[d][o] = m[3 * (v + 1) + (w + 1)]), (u[p][o] = 0), (h[d] = g);
              }
            } else
              (u[d] = Gc(r[d], c[d], this._bitLength)),
                (u[p] = Gc(r[p], c[p], this._bitLength)),
                (l = Math.max(u[d].length, l)),
                (l = Math.max(u[p].length, l));
          }
          var b = this.jpoint(null, null, null),
            _ = this._wnafT4;
          for (s = l; s >= 0; s--) {
            for (var A = 0; s >= 0; ) {
              var E = !0;
              for (o = 0; o < i; o++)
                (_[o] = 0 | u[o][s]), 0 !== _[o] && (E = !1);
              if (!E) break;
              A++, s--;
            }
            if ((s >= 0 && A++, (b = b.dblp(A)), s < 0)) break;
            for (o = 0; o < i; o++) {
              var S = _[o];
              0 !== S &&
                (S > 0
                  ? (a = h[o][(S - 1) >> 1])
                  : S < 0 && (a = h[o][(-S - 1) >> 1].neg()),
                (b = "affine" === a.type ? b.mixedAdd(a) : b.add(a)));
            }
          }
          for (s = 0; s < i; s++) h[s] = null;
          return n ? b : b.toP();
        }),
        (Qc.BasePoint = Xc),
        (Xc.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (Xc.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (Qc.prototype.decodePoint = function (t, e) {
          t = Vc.toArray(t, e);
          var r = this.p.byteLength();
          if (
            (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
            t.length - 1 === 2 * r
          )
            return (
              6 === t[0]
                ? Yc(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && Yc(t[t.length - 1] % 2 === 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw new Error("Unknown point format");
        }),
        (Xc.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (Xc.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (Xc.prototype.encode = function (t, e) {
          return Vc.encode(this._encode(e), t);
        }),
        (Xc.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (Xc.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (Xc.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], i = this, n = 0; n < e; n += t) {
            for (var s = 0; s < t; s++) i = i.dbl();
            r.push(i);
          }
          return { step: t, points: r };
        }),
        (Xc.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              i = 1 === r ? null : this.dbl(),
              n = 1;
            n < r;
            n++
          )
            e[n] = e[n - 1].add(i);
          return { wnd: t, points: e };
        }),
        (Xc.prototype._getBeta = function () {
          return null;
        }),
        (Xc.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
      var Zc = zc(function (t) {
          "function" == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        $c = Vc.assert;
      function th(t) {
        Jc.call(this, "short", t),
          (this.a = new Hs(t.a, 16).toRed(this.red)),
          (this.b = new Hs(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      Zc(th, Jc);
      var eh = th;
      function rh(t, e, r, i) {
        Jc.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new Hs(e, 16)),
              (this.y = new Hs(r, 16)),
              i &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function ih(t, e, r, i) {
        Jc.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === i
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new Hs(0)))
            : ((this.x = new Hs(e, 16)),
              (this.y = new Hs(r, 16)),
              (this.z = new Hs(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (th.prototype._getEndomorphism = function (t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e, r;
          if (t.beta) e = new Hs(t.beta, 16).toRed(this.red);
          else {
            var i = this._getEndoRoots(this.p);
            e = (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red);
          }
          if (t.lambda) r = new Hs(t.lambda, 16);
          else {
            var n = this._getEndoRoots(this.n);
            0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(e))
              ? (r = n[0])
              : ((r = n[1]), $c(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis
              ? t.basis.map(function (t) {
                  return { a: new Hs(t.a, 16), b: new Hs(t.b, 16) };
                })
              : this._getEndoBasis(r),
          };
        }
      }),
        (th.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : Hs.mont(t),
            r = new Hs(2).toRed(e).redInvm(),
            i = r.redNeg(),
            n = new Hs(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()];
        }),
        (th.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              i,
              n,
              s,
              o,
              a,
              c,
              h,
              u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              l = t,
              f = this.n.clone(),
              d = new Hs(1),
              p = new Hs(0),
              g = new Hs(0),
              m = new Hs(1),
              y = 0;
            0 !== l.cmpn(0);

          ) {
            var v = f.div(l);
            (c = f.sub(v.mul(l))), (h = g.sub(v.mul(d)));
            var w = m.sub(v.mul(p));
            if (!i && c.cmp(u) < 0)
              (e = a.neg()), (r = d), (i = c.neg()), (n = h);
            else if (i && 2 === ++y) break;
            (a = c), (f = l), (l = c), (g = d), (d = h), (m = p), (p = w);
          }
          (s = c.neg()), (o = h);
          var b = i.sqr().add(n.sqr());
          return (
            s.sqr().add(o.sqr()).cmp(b) >= 0 && ((s = e), (o = r)),
            i.negative && ((i = i.neg()), (n = n.neg())),
            s.negative && ((s = s.neg()), (o = o.neg())),
            [
              { a: i, b: n },
              { a: s, b: o },
            ]
          );
        }),
        (th.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            i = e[1],
            n = i.b.mul(t).divRound(this.n),
            s = r.b.neg().mul(t).divRound(this.n),
            o = n.mul(r.a),
            a = s.mul(i.a),
            c = n.mul(r.b),
            h = s.mul(i.b);
          return { k1: t.sub(o).sub(a), k2: c.add(h).neg() };
        }),
        (th.prototype.pointFromX = function (t, e) {
          (t = new Hs(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            i = r.redSqrt();
          if (0 !== i.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
          var n = i.fromRed().isOdd();
          return ((e && !n) || (!e && n)) && (i = i.redNeg()), this.point(t, i);
        }),
        (th.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            i = this.a.redMul(e),
            n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
          return 0 === r.redSqr().redISub(n).cmpn(0);
        }),
        (th.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var i = this._endoWnafT1, n = this._endoWnafT2, s = 0;
            s < t.length;
            s++
          ) {
            var o = this._endoSplit(e[s]),
              a = t[s],
              c = a._getBeta();
            o.k1.negative && (o.k1.ineg(), (a = a.neg(!0))),
              o.k2.negative && (o.k2.ineg(), (c = c.neg(!0))),
              (i[2 * s] = a),
              (i[2 * s + 1] = c),
              (n[2 * s] = o.k1),
              (n[2 * s + 1] = o.k2);
          }
          for (
            var h = this._wnafMulAdd(1, i, n, 2 * s, r), u = 0;
            u < 2 * s;
            u++
          )
            (i[u] = null), (n[u] = null);
          return h;
        }),
        Zc(rh, Jc.BasePoint),
        (th.prototype.point = function (t, e, r) {
          return new rh(this, t, e, r);
        }),
        (th.prototype.pointFromJSON = function (t, e) {
          return rh.fromJSON(this, t, e);
        }),
        (rh.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                i = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(i),
                  },
                });
            }
            return e;
          }
        }),
        (rh.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (rh.fromJSON = function (t, e, r) {
          "string" == typeof e && (e = JSON.parse(e));
          var i = t.point(e[0], e[1], r);
          if (!e[2]) return i;
          function n(e) {
            return t.point(e[0], e[1], r);
          }
          var s = e[2];
          return (
            (i.precomputed = {
              beta: null,
              doubles: s.doubles && {
                step: s.doubles.step,
                points: [i].concat(s.doubles.points.map(n)),
              },
              naf: s.naf && {
                wnd: s.naf.wnd,
                points: [i].concat(s.naf.points.map(n)),
              },
            }),
            i
          );
        }),
        (rh.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (rh.prototype.isInfinity = function () {
          return this.inf;
        }),
        (rh.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t)) return this.curve.point(null, null);
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            i = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, i);
        }),
        (rh.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            i = t.redInvm(),
            n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
            s = n.redSqr().redISub(this.x.redAdd(this.x)),
            o = n.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, o);
        }),
        (rh.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (rh.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (rh.prototype.mul = function (t) {
          return (
            (t = new Hs(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (rh.prototype.mulAdd = function (t, e, r) {
          var i = [this, e],
            n = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n)
            : this.curve._wnafMulAdd(1, i, n, 2);
        }),
        (rh.prototype.jmulAdd = function (t, e, r) {
          var i = [this, e],
            n = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n, !0)
            : this.curve._wnafMulAdd(1, i, n, 2, !0);
        }),
        (rh.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (rh.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              i = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i),
              },
            };
          }
          return e;
        }),
        (rh.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        Zc(ih, Jc.BasePoint),
        (th.prototype.jpoint = function (t, e, r) {
          return new ih(this, t, e, r);
        }),
        (ih.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            i = this.y.redMul(e).redMul(t);
          return this.curve.point(r, i);
        }),
        (ih.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (ih.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(e),
            n = t.x.redMul(r),
            s = this.y.redMul(e.redMul(t.z)),
            o = t.y.redMul(r.redMul(this.z)),
            a = i.redSub(n),
            c = s.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== c.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var h = a.redSqr(),
            u = h.redMul(a),
            l = i.redMul(h),
            f = c.redSqr().redIAdd(u).redISub(l).redISub(l),
            d = c.redMul(l.redISub(f)).redISub(s.redMul(u)),
            p = this.z.redMul(t.z).redMul(a);
          return this.curve.jpoint(f, d, p);
        }),
        (ih.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            i = t.x.redMul(e),
            n = this.y,
            s = t.y.redMul(e).redMul(this.z),
            o = r.redSub(i),
            a = n.redSub(s);
          if (0 === o.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = o.redSqr(),
            h = c.redMul(o),
            u = r.redMul(c),
            l = a.redSqr().redIAdd(h).redISub(u).redISub(u),
            f = a.redMul(u.redISub(l)).redISub(n.redMul(h)),
            d = this.z.redMul(o);
          return this.curve.jpoint(l, f, d);
        }),
        (ih.prototype.dblp = function (t) {
          if (0 === t) return this;
          if (this.isInfinity()) return this;
          if (!t) return this.dbl();
          var e;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var i = this.curve.a,
            n = this.curve.tinv,
            s = this.x,
            o = this.y,
            a = this.z,
            c = a.redSqr().redSqr(),
            h = o.redAdd(o);
          for (e = 0; e < t; e++) {
            var u = s.redSqr(),
              l = h.redSqr(),
              f = l.redSqr(),
              d = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(c)),
              p = s.redMul(l),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(f);
            var v = h.redMul(a);
            e + 1 < t && (c = c.redMul(f)), (s = g), (a = v), (h = y);
          }
          return this.curve.jpoint(s, h.redMul(n), a);
        }),
        (ih.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (ih.prototype._zeroDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              s = n.redSqr(),
              o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i),
              c = a.redSqr().redISub(o).redISub(o),
              h = s.redIAdd(s);
            (h = (h = h.redIAdd(h)).redIAdd(h)),
              (t = c),
              (e = a.redMul(o.redISub(c)).redISub(h)),
              (r = this.y.redAdd(this.y));
          } else {
            var u = this.x.redSqr(),
              l = this.y.redSqr(),
              f = l.redSqr(),
              d = this.x.redAdd(l).redSqr().redISub(u).redISub(f);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u),
              g = p.redSqr(),
              m = f.redIAdd(f);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (t = g.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (ih.prototype._threeDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              s = n.redSqr(),
              o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
              c = a.redSqr().redISub(o).redISub(o);
            t = c;
            var h = s.redIAdd(s);
            (h = (h = h.redIAdd(h)).redIAdd(h)),
              (e = a.redMul(o.redISub(c)).redISub(h)),
              (r = this.y.redAdd(this.y));
          } else {
            var u = this.z.redSqr(),
              l = this.y.redSqr(),
              f = this.x.redMul(l),
              d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = f.redIAdd(f),
              g = (p = p.redIAdd(p)).redAdd(p);
            (t = d.redSqr().redISub(g)),
              (r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u));
            var m = l.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (e = d.redMul(p.redISub(t)).redISub(m));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (ih.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            s = e.redSqr(),
            o = r.redSqr(),
            a = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(n)),
            c = e.redAdd(e),
            h = (c = c.redIAdd(c)).redMul(o),
            u = a.redSqr().redISub(h.redAdd(h)),
            l = h.redISub(u),
            f = o.redSqr();
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = a.redMul(l).redISub(f),
            p = r.redAdd(r).redMul(i);
          return this.curve.jpoint(u, d, p);
        }),
        (ih.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            i = e.redSqr(),
            n = t.redAdd(t).redIAdd(t),
            s = n.redSqr(),
            o = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
            a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(
              s
            )).redSqr(),
            c = i.redIAdd(i);
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var h = n.redIAdd(o).redSqr().redISub(s).redISub(a).redISub(c),
            u = e.redMul(h);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var l = this.x.redMul(a).redISub(u);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var f = this.y.redMul(h.redMul(c.redISub(h)).redISub(o.redMul(a)));
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(l, f, d);
        }),
        (ih.prototype.mul = function (t, e) {
          return (t = new Hs(t, e)), this.curve._wnafMul(this, t);
        }),
        (ih.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var i = e.redMul(this.z),
            n = r.redMul(t.z);
          return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
        }),
        (ih.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (ih.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (ih.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var nh = zc(function (t, e) {
          var r = e;
          (r.base = Jc), (r.short = eh), (r.mont = null), (r.edwards = null);
        }),
        sh = zc(function (t, e) {
          var r,
            i = e,
            n = Vc.assert;
          function s(t) {
            "short" === t.type
              ? (this.curve = new nh.short(t))
              : "edwards" === t.type
              ? (this.curve = new nh.edwards(t))
              : (this.curve = new nh.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              n(this.g.validate(), "Invalid curve"),
              n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function o(t, e) {
            Object.defineProperty(i, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var r = new s(e);
                return (
                  Object.defineProperty(i, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                  }),
                  r
                );
              },
            });
          }
          (i.PresetCurve = s),
            o("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: Fo.sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            o("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: Fo.sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            o("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: Fo.sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            o("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: Fo.sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            o("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: Fo.sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            o("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: Fo.sha256,
              gRed: !1,
              g: ["9"],
            }),
            o("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: Fo.sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch {
            r = void 0;
          }
          o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: Fo.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function oh(t) {
        if (!(this instanceof oh)) return new oh(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = Hc.toArray(t.entropy, t.entropyEnc || "hex"),
          r = Hc.toArray(t.nonce, t.nonceEnc || "hex"),
          i = Hc.toArray(t.pers, t.persEnc || "hex");
        Fc(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, i);
      }
      var ah = oh;
      (oh.prototype._init = function (t, e, r) {
        var i = t.concat(e).concat(r);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var n = 0; n < this.V.length; n++)
          (this.K[n] = 0), (this.V[n] = 1);
        this._update(i),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (oh.prototype._hmac = function () {
          return new Fo.hmac(this.hash, this.K);
        }),
        (oh.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (oh.prototype.reseed = function (t, e, r, i) {
          "string" != typeof e && ((i = r), (r = e), (e = null)),
            (t = Hc.toArray(t, e)),
            (r = Hc.toArray(r, i)),
            Fc(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (oh.prototype.generate = function (t, e, r, i) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" != typeof e && ((i = r), (r = e), (e = null)),
            r && ((r = Hc.toArray(r, i || "hex")), this._update(r));
          for (var n = []; n.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (n = n.concat(this.V));
          var s = n.slice(0, t);
          return this._update(r), this._reseed++, Hc.encode(s, e);
        });
      var ch = Vc.assert;
      function hh(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      var uh = hh;
      (hh.fromPublic = function (t, e, r) {
        return e instanceof hh ? e : new hh(t, { pub: e, pubEnc: r });
      }),
        (hh.fromPrivate = function (t, e, r) {
          return e instanceof hh ? e : new hh(t, { priv: e, privEnc: r });
        }),
        (hh.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (hh.prototype.getPublic = function (t, e) {
          return (
            "string" == typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (hh.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (hh.prototype._importPrivate = function (t, e) {
          (this.priv = new Hs(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (hh.prototype._importPublic = function (t, e) {
          if (t.x || t.y)
            return (
              "mont" === this.ec.curve.type
                ? ch(t.x, "Need x coordinate")
                : ("short" === this.ec.curve.type ||
                    "edwards" === this.ec.curve.type) &&
                  ch(t.x && t.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            );
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (hh.prototype.derive = function (t) {
          return (
            t.validate() || ch(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (hh.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (hh.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (hh.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var lh = Vc.assert;
      function fh(t, e) {
        if (t instanceof fh) return t;
        this._importDER(t, e) ||
          (lh(t.r && t.s, "Signature without r or s"),
          (this.r = new Hs(t.r, 16)),
          (this.s = new Hs(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      var dh = fh;
      function ph() {
        this.place = 0;
      }
      function gh(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4) return !1;
        for (var n = 0, s = 0, o = e.place; s < i; s++, o++)
          (n <<= 8), (n |= t[o]), (n >>>= 0);
        return !(n <= 127) && ((e.place = o), n);
      }
      function mh(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function yh(t, e) {
        if (e < 128) t.push(e);
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
          t.push(e);
        }
      }
      (fh.prototype._importDER = function (t, e) {
        t = Vc.toArray(t, e);
        var r = new ph();
        if (48 !== t[r.place++]) return !1;
        var i = gh(t, r);
        if (!1 === i || i + r.place !== t.length || 2 !== t[r.place++])
          return !1;
        var n = gh(t, r);
        if (!1 === n) return !1;
        var s = t.slice(r.place, n + r.place);
        if (((r.place += n), 2 !== t[r.place++])) return !1;
        var o = gh(t, r);
        if (!1 === o || t.length !== o + r.place) return !1;
        var a = t.slice(r.place, o + r.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (
          (this.r = new Hs(s)),
          (this.s = new Hs(a)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (fh.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = mh(e),
              r = mh(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var i = [2];
          yh(i, e.length), (i = i.concat(e)).push(2), yh(i, r.length);
          var n = i.concat(r),
            s = [48];
          return yh(s, n.length), (s = s.concat(n)), Vc.encode(s, t);
        });
      var vh = function () {
          throw new Error("unsupported");
        },
        wh = Vc.assert;
      function bh(t) {
        if (!(this instanceof bh)) return new bh(t);
        "string" == typeof t &&
          (wh(
            Object.prototype.hasOwnProperty.call(sh, t),
            "Unknown curve " + t
          ),
          (t = sh[t])),
          t instanceof sh.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      var _h = bh;
      (bh.prototype.keyPair = function (t) {
        return new uh(this, t);
      }),
        (bh.prototype.keyFromPrivate = function (t, e) {
          return uh.fromPrivate(this, t, e);
        }),
        (bh.prototype.keyFromPublic = function (t, e) {
          return uh.fromPublic(this, t, e);
        }),
        (bh.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new ah({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || vh(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              i = this.n.sub(new Hs(2));
            ;

          ) {
            var n = new Hs(e.generate(r));
            if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
          }
        }),
        (bh.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return (
            r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (bh.prototype.sign = function (t, e, r, i) {
          "object" == typeof r && ((i = r), (r = null)),
            i || (i = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new Hs(t, 16)));
          for (
            var n = this.n.byteLength(),
              s = e.getPrivate().toArray("be", n),
              o = t.toArray("be", n),
              a = new ah({
                hash: this.hash,
                entropy: s,
                nonce: o,
                pers: i.pers,
                persEnc: i.persEnc || "utf8",
              }),
              c = this.n.sub(new Hs(1)),
              h = 0;
            ;
            h++
          ) {
            var u = i.k ? i.k(h) : new Hs(a.generate(this.n.byteLength()));
            if (
              !((u = this._truncateToN(u, !0)).cmpn(1) <= 0 || u.cmp(c) >= 0)
            ) {
              var l = this.g.mul(u);
              if (!l.isInfinity()) {
                var f = l.getX(),
                  d = f.umod(this.n);
                if (0 !== d.cmpn(0)) {
                  var p = u.invm(this.n).mul(d.mul(e.getPrivate()).iadd(t));
                  if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                    var g =
                      (l.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(d) ? 2 : 0);
                    return (
                      i.canonical &&
                        p.cmp(this.nh) > 0 &&
                        ((p = this.n.sub(p)), (g ^= 1)),
                      new dh({ r: d, s: p, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (bh.prototype.verify = function (t, e, r, i) {
          (t = this._truncateToN(new Hs(t, 16))),
            (r = this.keyFromPublic(r, i));
          var n = (e = new dh(e, "hex")).r,
            s = e.s;
          if (
            n.cmpn(1) < 0 ||
            n.cmp(this.n) >= 0 ||
            s.cmpn(1) < 0 ||
            s.cmp(this.n) >= 0
          )
            return !1;
          var o,
            a = s.invm(this.n),
            c = a.mul(t).umod(this.n),
            h = a.mul(n).umod(this.n);
          return this.curve._maxwellTrick
            ? !(o = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() &&
                o.eqXToP(n)
            : !(o = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() &&
                0 === o.getX().umod(this.n).cmp(n);
        }),
        (bh.prototype.recoverPubKey = function (t, e, r, i) {
          wh((3 & r) === r, "The recovery param is more than two bits"),
            (e = new dh(e, i));
          var n = this.n,
            s = new Hs(t),
            o = e.r,
            a = e.s,
            c = 1 & r,
            h = r >> 1;
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
            throw new Error("Unable to find sencond key candinate");
          o = h
            ? this.curve.pointFromX(o.add(this.curve.n), c)
            : this.curve.pointFromX(o, c);
          var u = e.r.invm(n),
            l = n.sub(s).mul(u).umod(n),
            f = a.mul(u).umod(n);
          return this.g.mulAdd(l, o, f);
        }),
        (bh.prototype.getKeyRecoveryParam = function (t, e, r, i) {
          if (null !== (e = new dh(e, i)).recoveryParam) return e.recoveryParam;
          for (var n = 0; n < 4; n++) {
            var s;
            try {
              s = this.recoverPubKey(t, e, n);
            } catch {
              continue;
            }
            if (s.eq(r)) return n;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var Ah = zc(function (t, e) {
        var r = e;
        (r.version = "6.5.4"),
          (r.utils = Vc),
          (r.rand = function () {
            throw new Error("unsupported");
          }),
          (r.curve = nh),
          (r.curves = sh),
          (r.ec = _h),
          (r.eddsa = null);
      }).ec;
      const Eh = new Os("signing-key/5.7.0");
      let Sh = null;
      function Ih() {
        return Sh || (Sh = new Ah("secp256k1")), Sh;
      }
      class Mh {
        constructor(t) {
          qo(this, "curve", "secp256k1"),
            qo(this, "privateKey", Ds(t)),
            32 !==
              (function (t) {
                if ("string" != typeof t) t = Ds(t);
                else if (!Ls(t) || t.length % 2) return null;
                return (t.length - 2) / 2;
              })(this.privateKey) &&
              Eh.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const e = Ih().keyFromPrivate(Us(this.privateKey));
          qo(this, "publicKey", "0x" + e.getPublic(!1, "hex")),
            qo(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")),
            qo(this, "_isSigningKey", !0);
        }
        _addPoint(t) {
          const e = Ih().keyFromPublic(Us(this.publicKey)),
            r = Ih().keyFromPublic(Us(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const e = Ih().keyFromPrivate(Us(this.privateKey)),
            r = Us(t);
          32 !== r.length &&
            Eh.throwArgumentError("bad digest length", "digest", t);
          const i = e.sign(r, { canonical: !0 });
          return js({
            recoveryParam: i.recoveryParam,
            r: qs("0x" + i.r.toString(16), 32),
            s: qs("0x" + i.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          const e = Ih().keyFromPrivate(Us(this.privateKey)),
            r = Ih().keyFromPublic(Us(Nh(t)));
          return qs("0x" + e.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function Nh(t, e) {
        const r = Us(t);
        if (32 === r.length) {
          const t = new Mh(r);
          return e
            ? "0x" + Ih().keyFromPrivate(r).getPublic(!0, "hex")
            : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? Ds(r)
            : "0x" + Ih().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? e
            ? "0x" + Ih().keyFromPublic(r).getPublic(!0, "hex")
            : Ds(r)
          : Eh.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
      var Oh;
      function xh(t, e) {
        return (function (t) {
          return Bo(Bs(zs(Bs(Nh(t), 1)), 12));
        })(
          (function (t, e) {
            const r = js(e),
              i = { r: Us(r.r), s: Us(r.s) };
            return (
              "0x" +
              Ih().recoverPubKey(Us(t), i, r.recoveryParam).encode("hex", !1)
            );
          })(Us(t), e)
        );
      }
      !(function (t) {
        (t[(t.legacy = 0)] = "legacy"),
          (t[(t.eip2930 = 1)] = "eip2930"),
          (t[(t.eip1559 = 2)] = "eip1559");
      })(Oh || (Oh = {}));
      const Ph = "https://rpc.walletconnect.com/v1";
      async function Rh(t, e, r, i, n, s) {
        switch (r.t) {
          case "eip191":
            return (function (t, e, r) {
              return xh(Co(e), r).toLowerCase() === t.toLowerCase();
            })(t, e, r.s);
          case "eip1271":
            return await (async function (t, e, r, i, n, s) {
              try {
                const o = "0x1626ba7e",
                  a =
                    "0000000000000000000000000000000000000000000000000000000000000040",
                  c =
                    "0000000000000000000000000000000000000000000000000000000000000041",
                  h = r.substring(2),
                  u = o + Co(e).substring(2) + a + c + h,
                  l = await fetch(
                    ""
                      .concat(s || Ph, "/?chainId=")
                      .concat(i, "&projectId=")
                      .concat(n),
                    {
                      method: "POST",
                      body: JSON.stringify({
                        id: Th(),
                        jsonrpc: "2.0",
                        method: "eth_call",
                        params: [{ to: t, data: u }, "latest"],
                      }),
                    }
                  ),
                  { result: f } = await l.json();
                return (
                  !!f && f.slice(0, o.length).toLowerCase() === o.toLowerCase()
                );
              } catch (o) {
                return console.error("isValidEip1271Signature: ", o), !1;
              }
            })(t, e, r.s, i, n, s);
          default:
            throw new Error(
              "verifySignature failed: Attempted to verify CacaoSignature with unknown type: ".concat(
                r.t
              )
            );
        }
      }
      function Th() {
        return Date.now() + Math.floor(1e3 * Math.random());
      }
      var Ch = Object.defineProperty,
        Uh = Object.defineProperties,
        Lh = Object.getOwnPropertyDescriptors,
        kh = Object.getOwnPropertySymbols,
        Dh = Object.prototype.hasOwnProperty,
        Bh = Object.prototype.propertyIsEnumerable,
        qh = (t, e, r) =>
          e in t
            ? Ch(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        jh = (t, e) => {
          for (var r in e || (e = {})) Dh.call(e, r) && qh(t, r, e[r]);
          if (kh) for (var r of kh(e)) Bh.call(e, r) && qh(t, r, e[r]);
          return t;
        },
        zh = (t, e) => Uh(t, Lh(e));
      const Fh = (t) => (null === t || void 0 === t ? void 0 : t.split(":")),
        Kh = (t) => {
          const e = t && Fh(t);
          if (e) return t.includes("did:pkh:") ? e[3] : e[1];
        },
        Hh = (t) => {
          const e = t && Fh(t);
          if (e) return e[2] + ":" + e[3];
        },
        Vh = (t) => {
          const e = t && Fh(t);
          if (e) return e.pop();
        };
      async function Gh(t) {
        const { cacao: e, projectId: r } = t,
          { s: i, p: n } = e,
          s = Wh(n, n.iss),
          o = Vh(n.iss);
        return await Rh(o, s, i, Kh(n.iss), r);
      }
      const Wh = (t, e) => {
        const r = "".concat(
            t.domain,
            " wants you to sign in with your Ethereum account:"
          ),
          i = Vh(e);
        if (!t.aud && !t.uri)
          throw new Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let n = t.statement || void 0;
        const s = "URI: ".concat(t.aud || t.uri),
          o = "Version: ".concat(t.version),
          a = "Chain ID: ".concat(Kh(e)),
          c = "Nonce: ".concat(t.nonce),
          h = "Issued At: ".concat(t.iat),
          u = t.resources
            ? "Resources:".concat(
                t.resources.map((t) => "\n- ".concat(t)).join("")
              )
            : void 0,
          l = ru(t.resources);
        if (l) {
          n = (function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e = arguments.length > 1 ? arguments[1] : void 0;
            Yh(e);
            const r =
              "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (t.includes(r)) return t;
            const i = [];
            let n = 0;
            Object.keys(e.att).forEach((t) => {
              const r = Object.keys(e.att[t]).map((t) => ({
                ability: t.split("/")[0],
                action: t.split("/")[1],
              }));
              r.sort((t, e) => t.action.localeCompare(e.action));
              const s = {};
              r.forEach((t) => {
                s[t.ability] || (s[t.ability] = []),
                  s[t.ability].push(t.action);
              });
              const o = Object.keys(s).map(
                (e) => (
                  n++,
                  "("
                    .concat(n, ") '")
                    .concat(e, "': '")
                    .concat(s[e].join("', '"), "' for '")
                    .concat(t, "'.")
                )
              );
              i.push(o.join(", ").replace(".,", "."));
            });
            const s = i.join(" "),
              o = "".concat(r).concat(s);
            return "".concat(t ? t + " " : "").concat(o);
          })(n, Xh(l));
        }
        return [r, i, "", n, "", s, o, a, c, h, u]
          .filter((t) => null != t)
          .join("\n");
      };
      function Yh(t) {
        if (!t) throw new Error("No recap provided, value is undefined");
        if (!t.att) throw new Error("No `att` property found");
        const e = Object.keys(t.att);
        if (null == e || !e.length)
          throw new Error("No resources found in `att` property");
        e.forEach((e) => {
          const r = t.att[e];
          if (Array.isArray(r))
            throw new Error("Resource must be an object: ".concat(e));
          if ("object" != typeof r)
            throw new Error("Resource must be an object: ".concat(e));
          if (!Object.keys(r).length)
            throw new Error("Resource object is empty: ".concat(e));
          Object.keys(r).forEach((t) => {
            const e = r[t];
            if (!Array.isArray(e))
              throw new Error(
                "Ability limits "
                  .concat(t, " must be an array of objects, found: ")
                  .concat(e)
              );
            if (!e.length)
              throw new Error(
                "Value of ".concat(
                  t,
                  " is empty array, must be an array with objects"
                )
              );
            e.forEach((e) => {
              if ("object" != typeof e)
                throw new Error(
                  "Ability limits ("
                    .concat(t, ") must be an array of objects, found: ")
                    .concat(e)
                );
            });
          });
        });
      }
      function Qh(t, e) {
        var r;
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const n = (e =
          null === (r = e) || void 0 === r
            ? void 0
            : r.sort((t, e) => t.localeCompare(e))).map((e) => ({
          ["".concat(t, "/").concat(e)]: [i],
        }));
        return Object.assign({}, ...n);
      }
      function Jh(t) {
        return (
          Yh(t),
          "urn:recap:".concat(
            (function (t) {
              return a.from(JSON.stringify(t)).toString("base64");
            })(t).replace(/=/g, "")
          )
        );
      }
      function Xh(t) {
        const e = (function (t) {
          return JSON.parse(a.from(t, "base64").toString("utf-8"));
        })(t.replace("urn:recap:", ""));
        return Yh(e), e;
      }
      function Zh(t, e, r) {
        const i = (function (t, e, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return (
            null !== r && void 0 !== r && r.sort((t, e) => t.localeCompare(e)),
            { att: { [t]: Qh(e, r, i) } }
          );
        })(t, e, r);
        return Jh(i);
      }
      function $h(t, e) {
        const r = (function (t, e) {
          Yh(t), Yh(e);
          const r = Object.keys(t.att)
              .concat(Object.keys(e.att))
              .sort((t, e) => t.localeCompare(e)),
            i = { att: {} };
          return (
            r.forEach((r) => {
              var n, s;
              Object.keys((null == (n = t.att) ? void 0 : n[r]) || {})
                .concat(
                  Object.keys((null == (s = e.att) ? void 0 : s[r]) || {})
                )
                .sort((t, e) => t.localeCompare(e))
                .forEach((n) => {
                  var s, o;
                  i.att[r] = zh(jh({}, i.att[r]), {
                    [n]:
                      (null == (s = t.att[r]) ? void 0 : s[n]) ||
                      (null == (o = e.att[r]) ? void 0 : o[n]),
                  });
                });
            }),
            i
          );
        })(Xh(t), Xh(e));
        return Jh(r);
      }
      function tu(t) {
        var e;
        const r = Xh(t);
        Yh(r);
        const i = null == (e = r.att) ? void 0 : e.eip155;
        return i ? Object.keys(i).map((t) => t.split("/")[1]) : [];
      }
      function eu(t) {
        const e = Xh(t);
        Yh(e);
        const r = [];
        return (
          Object.values(e.att).forEach((t) => {
            Object.values(t).forEach((t) => {
              var e;
              null != (e = null === t || void 0 === t ? void 0 : t[0]) &&
                e.chains &&
                r.push(t[0].chains);
            });
          }),
          [...new Set(r.flat())]
        );
      }
      function ru(t) {
        if (!t) return;
        const e = null === t || void 0 === t ? void 0 : t[t.length - 1];
        return (function (t) {
          return t && t.includes("urn:recap:");
        })(e)
          ? e
          : void 0;
      }
      const iu = "base10",
        nu = "base16",
        su = "base64pad",
        ou = "utf8",
        au = 0,
        cu = 1,
        hu = 0,
        uu = 1,
        lu = 12,
        fu = 32;
      function du() {
        return Oi(Ge.randomBytes(fu), nu);
      }
      function pu(t) {
        return Oi(Ln.hash(xi(t, nu)), nu);
      }
      function gu(t) {
        return Oi(Ln.hash(xi(t, ou)), nu);
      }
      function mu(t) {
        return Number(Oi(t, iu));
      }
      function yu(t) {
        const e = (function (t) {
          return xi("".concat(t), iu);
        })(typeof t.type < "u" ? t.type : au);
        if (mu(e) === cu && typeof t.senderPublicKey > "u")
          throw new Error("Missing sender public key for type 1 envelope");
        const r =
            typeof t.senderPublicKey < "u" ? xi(t.senderPublicKey, nu) : void 0,
          i = typeof t.iv < "u" ? xi(t.iv, nu) : Ge.randomBytes(lu);
        return (function (t) {
          if (mu(t.type) === cu) {
            if (typeof t.senderPublicKey > "u")
              throw new Error("Missing sender public key for type 1 envelope");
            return Oi(xr([t.type, t.senderPublicKey, t.iv, t.sealed]), su);
          }
          return Oi(xr([t.type, t.iv, t.sealed]), su);
        })({
          type: e,
          sealed: new dn.ChaCha20Poly1305(xi(t.symKey, nu)).seal(
            i,
            xi(t.message, ou)
          ),
          iv: i,
          senderPublicKey: r,
        });
      }
      function vu(t) {
        const e = xi(t, su),
          r = e.slice(hu, uu),
          i = uu;
        if (mu(r) === cu) {
          const t = i + fu,
            n = t + lu,
            s = e.slice(i, t),
            o = e.slice(t, n);
          return { type: r, sealed: e.slice(n), iv: o, senderPublicKey: s };
        }
        const n = i + lu,
          s = e.slice(i, n);
        return { type: r, sealed: e.slice(n), iv: s };
      }
      function wu(t) {
        const e = (null === t || void 0 === t ? void 0 : t.type) || au;
        if (e === cu) {
          if (
            typeof (null === t || void 0 === t ? void 0 : t.senderPublicKey) >
            "u"
          )
            throw new Error("missing sender public key");
          if (
            typeof (null === t || void 0 === t ? void 0 : t.receiverPublicKey) >
            "u"
          )
            throw new Error("missing receiver public key");
        }
        return {
          type: e,
          senderPublicKey:
            null === t || void 0 === t ? void 0 : t.senderPublicKey,
          receiverPublicKey:
            null === t || void 0 === t ? void 0 : t.receiverPublicKey,
        };
      }
      function bu(t) {
        return (
          t.type === cu &&
          "string" == typeof t.senderPublicKey &&
          "string" == typeof t.receiverPublicKey
        );
      }
      function _u(t) {
        return (
          (null === t || void 0 === t ? void 0 : t.relay) || { protocol: "irn" }
        );
      }
      function Au(t) {
        const e = Dn[t];
        if (typeof e > "u")
          throw new Error("Relay Protocol not supported: ".concat(t));
        return e;
      }
      var Eu = Object.defineProperty,
        Su = Object.defineProperties,
        Iu = Object.getOwnPropertyDescriptors,
        Mu = Object.getOwnPropertySymbols,
        Nu = Object.prototype.hasOwnProperty,
        Ou = Object.prototype.propertyIsEnumerable,
        xu = (t, e, r) =>
          e in t
            ? Eu(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Pu = (t, e) => {
          for (var r in e || (e = {})) Nu.call(e, r) && xu(t, r, e[r]);
          if (Mu) for (var r of Mu(e)) Ou.call(e, r) && xu(t, r, e[r]);
          return t;
        };
      function Ru(t) {
        const e = {},
          r =
            "relay" +
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "-");
        return (
          Object.keys(t).forEach((i) => {
            if (i.startsWith(r)) {
              const n = i.replace(r, ""),
                s = t[i];
              e[n] = s;
            }
          }),
          e
        );
      }
      function Tu(t) {
        const e = (t = (t = t.includes("wc://")
            ? t.replace("wc://", "")
            : t).includes("wc:")
            ? t.replace("wc:", "")
            : t).indexOf(":"),
          r = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
          i = t.substring(0, e),
          n = t.substring(e + 1, r).split("@"),
          s = typeof r < "u" ? t.substring(r) : "",
          o = rn.parse(s),
          a = "string" == typeof o.methods ? o.methods.split(",") : void 0;
        return {
          protocol: i,
          topic: Cu(n[0]),
          version: parseInt(n[1], 10),
          symKey: o.symKey,
          relay: Ru(o),
          methods: a,
          expiryTimestamp: o.expiryTimestamp
            ? parseInt(o.expiryTimestamp, 10)
            : void 0,
        };
      }
      function Cu(t) {
        return t.startsWith("//") ? t.substring(2) : t;
      }
      function Uu(t) {
        return (
          ""
            .concat(t.protocol, ":")
            .concat(t.topic, "@")
            .concat(t.version, "?") +
          rn.stringify(
            Pu(
              ((t, e) => Su(t, Iu(e)))(
                Pu(
                  { symKey: t.symKey },
                  (function (t) {
                    let e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "-";
                    const r = {};
                    return (
                      Object.keys(t).forEach((i) => {
                        const n = "relay" + e + i;
                        t[i] && (r[n] = t[i]);
                      }),
                      r
                    );
                  })(t.relay)
                ),
                { expiryTimestamp: t.expiryTimestamp }
              ),
              t.methods ? { methods: t.methods.join(",") } : {}
            )
          )
        );
      }
      function Lu(t) {
        const e = [];
        return (
          t.forEach((t) => {
            const [r, i] = t.split(":");
            e.push("".concat(r, ":").concat(i));
          }),
          e
        );
      }
      function ku(t, e) {
        const r = (function (t) {
          const e = {};
          return (
            null !== t &&
              void 0 !== t &&
              t.forEach((t) => {
                const [r, i] = t.split(":");
                e[r] || (e[r] = { accounts: [], chains: [], events: [] }),
                  e[r].accounts.push(t),
                  e[r].chains.push("".concat(r, ":").concat(i));
              }),
            e
          );
        })((e = e.map((t) => t.replace("did:pkh:", ""))));
        for (const [i, n] of Object.entries(r))
          n.methods ? (n.methods = gs(n.methods, t)) : (n.methods = t),
            (n.events = ["chainChanged", "accountsChanged"]);
        return r;
      }
      const Du = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        Bu = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function qu(t, e) {
        const { message: r, code: i } = Bu[t];
        return { message: e ? "".concat(r, " ").concat(e) : r, code: i };
      }
      function ju(t, e) {
        const { message: r, code: i } = Du[t];
        return { message: e ? "".concat(r, " ").concat(e) : r, code: i };
      }
      function zu(t, e) {
        return (
          !!Array.isArray(t) && (!(typeof e < "u" && t.length) || t.every(e))
        );
      }
      function Fu(t) {
        return (
          Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
        );
      }
      function Ku(t) {
        return typeof t > "u";
      }
      function Hu(t, e) {
        return !(!e || !Ku(t)) || ("string" == typeof t && !!t.trim().length);
      }
      function Vu(t, e) {
        return !(!e || !Ku(t)) || ("number" == typeof t && !isNaN(t));
      }
      function Gu(t) {
        return !(!Hu(t, !1) || !t.includes(":")) && 2 === t.split(":").length;
      }
      function Wu(t) {
        let e = !0;
        return (
          zu(t) ? t.length && (e = t.every((t) => Hu(t, !1))) : (e = !1), e
        );
      }
      function Yu(t, e, r) {
        let i = null;
        return (
          Object.entries(t).forEach((t) => {
            let [n, s] = t;
            if (i) return;
            const o = (function (t, e, r) {
              let i = null;
              return (
                zu(e) && e.length
                  ? e.forEach((t) => {
                      i ||
                        Gu(t) ||
                        (i = ju(
                          "UNSUPPORTED_CHAINS",
                          ""
                            .concat(r, ", chain ")
                            .concat(
                              t,
                              ' should be a string and conform to "namespace:chainId" format'
                            )
                        ));
                    })
                  : Gu(t) ||
                    (i = ju(
                      "UNSUPPORTED_CHAINS",
                      "".concat(
                        r,
                        ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'
                      )
                    )),
                i
              );
            })(n, Kn(n, s), "".concat(e, " ").concat(r));
            o && (i = o);
          }),
          i
        );
      }
      function Qu(t, e) {
        let r = null;
        return (
          zu(t)
            ? t.forEach((t) => {
                r ||
                  (function (t) {
                    if (Hu(t, !1) && t.includes(":")) {
                      const e = t.split(":");
                      if (3 === e.length) {
                        const t = e[0] + ":" + e[1];
                        return !!e[2] && Gu(t);
                      }
                    }
                    return !1;
                  })(t) ||
                  (r = ju(
                    "UNSUPPORTED_ACCOUNTS",
                    ""
                      .concat(e, ", account ")
                      .concat(
                        t,
                        ' should be a string and conform to "namespace:chainId:address" format'
                      )
                  ));
              })
            : (r = ju(
                "UNSUPPORTED_ACCOUNTS",
                "".concat(
                  e,
                  ', accounts should be an array of strings conforming to "namespace:chainId:address" format'
                )
              )),
          r
        );
      }
      function Ju(t, e) {
        let r = null;
        return (
          Object.values(t).forEach((t) => {
            if (r) return;
            const i = (function (t, e) {
              let r = null;
              return (
                Wu(null === t || void 0 === t ? void 0 : t.methods)
                  ? Wu(null === t || void 0 === t ? void 0 : t.events) ||
                    (r = ju(
                      "UNSUPPORTED_EVENTS",
                      "".concat(
                        e,
                        ", events should be an array of strings or empty array for no events"
                      )
                    ))
                  : (r = ju(
                      "UNSUPPORTED_METHODS",
                      "".concat(
                        e,
                        ", methods should be an array of strings or empty array for no methods"
                      )
                    )),
                r
              );
            })(t, "".concat(e, ", namespace"));
            i && (r = i);
          }),
          r
        );
      }
      function Xu(t, e) {
        let r = null;
        if (t && Fu(t)) {
          const i = Ju(t, e);
          i && (r = i);
          const n = (function (t, e) {
            let r = null;
            return (
              Object.values(t).forEach((t) => {
                if (r) return;
                const i = Qu(
                  null === t || void 0 === t ? void 0 : t.accounts,
                  "".concat(e, " namespace")
                );
                i && (r = i);
              }),
              r
            );
          })(t, e);
          n && (r = n);
        } else
          r = qu(
            "MISSING_OR_INVALID",
            "".concat(e, ", namespaces should be an object with data")
          );
        return r;
      }
      function Zu(t) {
        return Hu(t.protocol, !0);
      }
      function $u(t) {
        return typeof t < "u" && null !== typeof t;
      }
      function tl(t, e) {
        return !(
          !Gu(e) ||
          !(function (t) {
            const e = [];
            return (
              Object.values(t).forEach((t) => {
                e.push(...Lu(t.accounts));
              }),
              e
            );
          })(t).includes(e)
        );
      }
      function el(t, e, r) {
        return (
          !!Hu(r, !1) &&
          (function (t, e) {
            const r = [];
            return (
              Object.values(t).forEach((t) => {
                Lu(t.accounts).includes(e) && r.push(...t.methods);
              }),
              r
            );
          })(t, e).includes(r)
        );
      }
      function rl(t, e, r) {
        return (
          !!Hu(r, !1) &&
          (function (t, e) {
            const r = [];
            return (
              Object.values(t).forEach((t) => {
                Lu(t.accounts).includes(e) && r.push(...t.events);
              }),
              r
            );
          })(t, e).includes(r)
        );
      }
      function il(t, e, r) {
        let i = null;
        const n = (function (t) {
            const e = {};
            return (
              Object.keys(t).forEach((r) => {
                var i;
                r.includes(":")
                  ? (e[r] = t[r])
                  : null == (i = t[r].chains) ||
                    i.forEach((i) => {
                      e[i] = { methods: t[r].methods, events: t[r].events };
                    });
              }),
              e
            );
          })(t),
          s = (function (t) {
            const e = {};
            return (
              Object.keys(t).forEach((r) => {
                var i;
                r.includes(":")
                  ? (e[r] = t[r])
                  : null === (i = Lu(t[r].accounts)) ||
                    void 0 === i ||
                    i.forEach((i) => {
                      e[i] = {
                        accounts: t[r].accounts.filter((t) =>
                          t.includes("".concat(i, ":"))
                        ),
                        methods: t[r].methods,
                        events: t[r].events,
                      };
                    });
              }),
              e
            );
          })(e),
          o = Object.keys(n),
          a = Object.keys(s),
          c = nl(Object.keys(t)),
          h = nl(Object.keys(e)),
          u = c.filter((t) => !h.includes(t));
        return (
          u.length &&
            (i = qu(
              "NON_CONFORMING_NAMESPACES",
              ""
                .concat(
                  r,
                  " namespaces keys don't satisfy requiredNamespaces.\n      Required: "
                )
                .concat(u.toString(), "\n      Received: ")
                .concat(Object.keys(e).toString())
            )),
          ss(o, a) ||
            (i = qu(
              "NON_CONFORMING_NAMESPACES",
              ""
                .concat(
                  r,
                  " namespaces chains don't satisfy required namespaces.\n      Required: "
                )
                .concat(o.toString(), "\n      Approved: ")
                .concat(a.toString())
            )),
          Object.keys(e).forEach((t) => {
            if (!t.includes(":") || i) return;
            const n = Lu(e[t].accounts);
            n.includes(t) ||
              (i = qu(
                "NON_CONFORMING_NAMESPACES",
                ""
                  .concat(
                    r,
                    " namespaces accounts don't satisfy namespace accounts for "
                  )
                  .concat(t, "\n        Required: ")
                  .concat(t, "\n        Approved: ")
                  .concat(n.toString())
              ));
          }),
          o.forEach((t) => {
            i ||
              (ss(n[t].methods, s[t].methods)
                ? ss(n[t].events, s[t].events) ||
                  (i = qu(
                    "NON_CONFORMING_NAMESPACES",
                    ""
                      .concat(
                        r,
                        " namespaces events don't satisfy namespace events for "
                      )
                      .concat(t)
                  ))
                : (i = qu(
                    "NON_CONFORMING_NAMESPACES",
                    ""
                      .concat(
                        r,
                        " namespaces methods don't satisfy namespace methods for "
                      )
                      .concat(t)
                  )));
          }),
          i
        );
      }
      function nl(t) {
        return [
          ...new Set(t.map((t) => (t.includes(":") ? t.split(":")[0] : t))),
        ];
      }
      function sl() {
        const t = rs();
        return new Promise((e) => {
          switch (t) {
            case Xn.browser:
              e(
                (function () {
                  var t;
                  return (
                    es() &&
                    (null === (t = navigator) || void 0 === t
                      ? void 0
                      : t.onLine)
                  );
                })()
              );
              break;
            case Xn.reactNative:
              e(
                (async function () {
                  var t;
                  return (
                    !(
                      ts() &&
                      typeof global < "u" &&
                      null != global &&
                      global.NetInfo
                    ) ||
                    (null ===
                      (t = await (null == global
                        ? void 0
                        : global.NetInfo.fetch())) || void 0 === t
                      ? void 0
                      : t.isConnected)
                  );
                })()
              );
              break;
            case Xn.node:
            default:
              e(!0);
          }
        });
      }
      function ol(t) {
        switch (rs()) {
          case Xn.browser:
            !(function (t) {
              !ts() &&
                es() &&
                (window.addEventListener("online", () => t(!0)),
                window.addEventListener("offline", () => t(!1)));
            })(t);
            break;
          case Xn.reactNative:
            !(function (t) {
              var e;
              ts() &&
                typeof global < "u" &&
                null != global &&
                global.NetInfo &&
                (null === (e = global) ||
                  void 0 === e ||
                  e.NetInfo.addEventListener((e) =>
                    t(null === e || void 0 === e ? void 0 : e.isConnected)
                  ));
            })(t);
        }
      }
      const al = {};
      class cl {
        static get(t) {
          return al[t];
        }
        static set(t, e) {
          al[t] = e;
        }
        static delete(t) {
          delete al[t];
        }
      }
      const hl = "INTERNAL_ERROR",
        ul = "SERVER_ERROR",
        ll = [-32700, -32600, -32601, -32602, -32603],
        fl = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [hl]: { code: -32603, message: "Internal error" },
          [ul]: { code: -32e3, message: "Server error" },
        },
        dl = ul;
      function pl(t) {
        return Object.keys(fl).includes(t) ? fl[t] : fl[dl];
      }
      var gl,
        ml = {},
        yl = {};
      var vl,
        wl = {};
      function bl() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        return (
          Date.now() * Math.pow(10, t) +
          Math.floor(Math.random() * Math.pow(10, t))
        );
      }
      function _l() {
        return BigInt(
          bl(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6)
        );
      }
      function Al(t, e, r) {
        return { id: r || bl(), jsonrpc: "2.0", method: t, params: e };
      }
      function El(t, e) {
        return { id: t, jsonrpc: "2.0", result: e };
      }
      function Sl(t, e, r) {
        return { id: t, jsonrpc: "2.0", error: Il(e, r) };
      }
      function Il(t, e) {
        return typeof t > "u"
          ? pl(hl)
          : ("string" == typeof t &&
              (t = Object.assign(Object.assign({}, pl(ul)), { message: t })),
            typeof e < "u" && (t.data = e),
            (function (t) {
              return ll.includes(t);
            })(t.code) &&
              (t = (function (t) {
                return Object.values(fl).find((e) => e.code === t) || fl[dl];
              })(t.code)),
            t);
      }
      !(function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const e = lt;
        e.__exportStar(
          (function () {
            if (gl) return yl;
            function t() {
              return (
                (null === n.c || void 0 === n.c ? void 0 : n.c.crypto) ||
                (null === n.c || void 0 === n.c ? void 0 : n.c.msCrypto) ||
                {}
              );
            }
            function e() {
              const e = t();
              return e.subtle || e.webkitSubtle;
            }
            return (
              (gl = 1),
              Object.defineProperty(yl, "__esModule", { value: !0 }),
              (yl.isBrowserCryptoAvailable =
                yl.getSubtleCrypto =
                yl.getBrowerCrypto =
                  void 0),
              (yl.getBrowerCrypto = t),
              (yl.getSubtleCrypto = e),
              (yl.isBrowserCryptoAvailable = function () {
                return !!t() && !!e();
              }),
              yl
            );
          })(),
          t
        ),
          e.__exportStar(
            (function () {
              if (vl) return wl;
              function t() {
                return (
                  typeof document > "u" &&
                  typeof navigator < "u" &&
                  "ReactNative" === navigator.product
                );
              }
              function e() {
                return (
                  typeof c < "u" &&
                  typeof c.versions < "u" &&
                  typeof c.versions.node < "u"
                );
              }
              return (
                (vl = 1),
                Object.defineProperty(wl, "__esModule", { value: !0 }),
                (wl.isBrowser = wl.isNode = wl.isReactNative = void 0),
                (wl.isReactNative = t),
                (wl.isNode = e),
                (wl.isBrowser = function () {
                  return !t() && !e();
                }),
                wl
              );
            })(),
            t
          );
      })(ml);
      class Ml {}
      class Nl extends Ml {
        constructor(t) {
          super();
        }
      }
      class Ol extends Ml {
        constructor() {
          super();
        }
      }
      class xl extends Ol {
        constructor(t) {
          super();
        }
      }
      function Pl(t, e) {
        const r = (function (t) {
          const e = t.match(new RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return !(typeof r > "u") && new RegExp(e).test(r);
      }
      function Rl(t) {
        return Pl(t, "^wss?:");
      }
      function Tl(t) {
        return new RegExp("wss?://localhost(:d{2,5})?").test(t);
      }
      function Cl(t) {
        return (
          "object" == typeof t &&
          "id" in t &&
          "jsonrpc" in t &&
          "2.0" === t.jsonrpc
        );
      }
      function Ul(t) {
        return Cl(t) && "method" in t;
      }
      function Ll(t) {
        return Cl(t) && (kl(t) || Dl(t));
      }
      function kl(t) {
        return "result" in t;
      }
      function Dl(t) {
        return "error" in t;
      }
      class Bl extends xl {
        constructor(t) {
          super(t),
            (this.events = new M.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(t)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          await this.open(t);
        }
        async disconnect() {
          await this.close();
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async request(t, e) {
          return this.requestStrict(
            Al(t.method, t.params || [], t.id || _l().toString()),
            e
          );
        }
        async requestStrict(t, e) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (n) {
                i(n);
              }
            this.events.on("".concat(t.id), (t) => {
              Dl(t) ? i(t.error) : r(t.result);
            });
            try {
              await this.connection.send(t, e);
            } catch (n) {
              i(n);
            }
          });
        }
        setConnection() {
          return arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.connection;
        }
        onPayload(t) {
          this.events.emit("payload", t),
            Ll(t)
              ? this.events.emit("".concat(t.id), t)
              : this.events.emit("message", { type: t.method, data: t.params });
        }
        onClose(t) {
          t &&
            3e3 === t.code &&
            this.events.emit(
              "error",
              new Error(
                "WebSocket connection closed abnormally with code: "
                  .concat(t.code, " ")
                  .concat(t.reason ? "(".concat(t.reason, ")") : "")
              )
            ),
            this.events.emit("disconnect");
        }
        async open() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          (this.connection === t && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof t &&
              (await this.connection.open(t), (t = this.connection)),
            (this.connection = this.setConnection(t)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (t) => this.onPayload(t)),
            this.connection.on("close", (t) => this.onClose(t)),
            this.connection.on("error", (t) => this.events.emit("error", t)),
            this.connection.on("register_error", (t) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const ql = (t) => t.split("?")[0],
        jl =
          typeof WebSocket < "u"
            ? WebSocket
            : typeof global < "u" && typeof global.WebSocket < "u"
            ? global.WebSocket
            : typeof window < "u" && typeof window.WebSocket < "u"
            ? window.WebSocket
            : typeof self < "u" && typeof self.WebSocket < "u"
            ? self.WebSocket
            : require("ws");
      let zl = class {
        constructor(t) {
          if (
            ((this.url = t),
            (this.events = new M.EventEmitter()),
            (this.registering = !1),
            !Rl(t))
          )
            throw new Error(
              "Provided URL is not compatible with WebSocket connection: ".concat(
                t
              )
            );
          this.url = t;
        }
        get connected() {
          return typeof this.socket < "u";
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(t);
        }
        async close() {
          return new Promise((t, e) => {
            typeof this.socket > "u"
              ? e(new Error("Connection already closed"))
              : ((this.socket.onclose = (e) => {
                  this.onClose(e), t();
                }),
                this.socket.close());
          });
        }
        async send(t) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send($(t));
          } catch (e) {
            this.onError(t.id, e);
          }
        }
        register() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!Rl(t))
            throw new Error(
              "Provided URL is not compatible with WebSocket connection: ".concat(
                t
              )
            );
          if (this.registering) {
            const t = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= t ||
                this.events.listenerCount("open") >= t) &&
                this.events.setMaxListeners(t + 1),
              new Promise((t, e) => {
                this.events.once("register_error", (t) => {
                  this.resetMaxListeners(), e(t);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return e(
                        new Error("WebSocket connection is missing or invalid")
                      );
                    t(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = t),
            (this.registering = !0),
            new Promise((e, r) => {
              const i = new URLSearchParams(t).get("origin"),
                n = ml.isReactNative()
                  ? { headers: { origin: i } }
                  : { rejectUnauthorized: !Tl(t) },
                s = new jl(t, [], n);
              typeof WebSocket < "u" ||
              (typeof global < "u" && typeof global.WebSocket < "u") ||
              (typeof window < "u" && typeof window.WebSocket < "u") ||
              (typeof self < "u" && typeof self.WebSocket < "u")
                ? (s.onerror = (t) => {
                    const e = t;
                    r(this.emitError(e.error));
                  })
                : s.on("error", (t) => {
                    r(this.emitError(t));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), e(s);
                });
            })
          );
        }
        onOpen(t) {
          (t.onmessage = (t) => this.onPayload(t)),
            (t.onclose = (t) => this.onClose(t)),
            (this.socket = t),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(t) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", t);
        }
        onPayload(t) {
          if (typeof t.data > "u") return;
          const e = "string" == typeof t.data ? Z(t.data) : t.data;
          this.events.emit("payload", e);
        }
        onError(t, e) {
          const r = this.parseError(e),
            i = Sl(t, r.message || r.toString());
          this.events.emit("payload", i);
        }
        parseError(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url;
          return (function (t, e, r) {
            return t.message.includes("getaddrinfo ENOTFOUND") ||
              t.message.includes("connect ECONNREFUSED")
              ? new Error("Unavailable ".concat(r, " RPC url at ").concat(e))
              : t;
          })(t, ql(e), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(t) {
          const e = this.parseError(
            new Error(
              (null === t || void 0 === t ? void 0 : t.message) ||
                "WebSocket connection failed for host: ".concat(ql(this.url))
            )
          );
          return this.events.emit("register_error", e), e;
        }
      };
      var Fl = { exports: {} };
      !(function (t, e) {
        var r = "__lodash_hash_undefined__",
          i = 1,
          s = 2,
          o = 9007199254740991,
          a = "[object Arguments]",
          c = "[object Array]",
          h = "[object AsyncFunction]",
          u = "[object Boolean]",
          l = "[object Date]",
          f = "[object Error]",
          d = "[object Function]",
          p = "[object GeneratorFunction]",
          g = "[object Map]",
          m = "[object Number]",
          y = "[object Null]",
          v = "[object Object]",
          w = "[object Promise]",
          b = "[object Proxy]",
          _ = "[object RegExp]",
          A = "[object Set]",
          E = "[object String]",
          S = "[object Symbol]",
          I = "[object Undefined]",
          M = "[object WeakMap]",
          N = "[object ArrayBuffer]",
          O = "[object DataView]",
          x = /^\[object .+?Constructor\]$/,
          P = /^(?:0|[1-9]\d*)$/,
          R = {};
        (R["[object Float32Array]"] =
          R["[object Float64Array]"] =
          R["[object Int8Array]"] =
          R["[object Int16Array]"] =
          R["[object Int32Array]"] =
          R["[object Uint8Array]"] =
          R["[object Uint8ClampedArray]"] =
          R["[object Uint16Array]"] =
          R["[object Uint32Array]"] =
            !0),
          (R[a] =
            R[c] =
            R[N] =
            R[u] =
            R[O] =
            R[l] =
            R[f] =
            R[d] =
            R[g] =
            R[m] =
            R[v] =
            R[_] =
            R[A] =
            R[E] =
            R[M] =
              !1);
        var T = "object" == typeof n.c && n.c && n.c.Object === Object && n.c,
          C = "object" == typeof self && self && self.Object === Object && self,
          U = T || C || Function("return this")(),
          L = e && !e.nodeType && e,
          k = L && t && !t.nodeType && t,
          D = k && k.exports === L,
          B = D && T.process,
          q = (function () {
            try {
              return B && B.binding && B.binding("util");
            } catch {}
          })(),
          j = q && q.isTypedArray;
        function z(t, e) {
          for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
            if (e(t[r], r, t)) return !0;
          return !1;
        }
        function F(t, e) {
          return t.has(e);
        }
        function K(t) {
          var e = -1,
            r = Array(t.size);
          return (
            t.forEach(function (t, i) {
              r[++e] = [i, t];
            }),
            r
          );
        }
        function H(t) {
          var e = -1,
            r = Array(t.size);
          return (
            t.forEach(function (t) {
              r[++e] = t;
            }),
            r
          );
        }
        var V,
          G,
          W = Array.prototype,
          Y = Function.prototype,
          Q = Object.prototype,
          J = U["__core-js_shared__"],
          X = Y.toString,
          Z = Q.hasOwnProperty,
          $ = (function () {
            var t = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || "");
            return t ? "Symbol(src)_1." + t : "";
          })(),
          tt = Q.toString,
          et = RegExp(
            "^" +
              X.call(Z)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          rt = D ? U.Buffer : void 0,
          it = U.Symbol,
          nt = U.Uint8Array,
          st = Q.propertyIsEnumerable,
          ot = W.splice,
          at = it ? it.toStringTag : void 0,
          ct = Object.getOwnPropertySymbols,
          ht = rt ? rt.isBuffer : void 0,
          ut =
            ((V = Object.keys),
            (G = Object),
            function (t) {
              return V(G(t));
            }),
          lt = qt(U, "DataView"),
          ft = qt(U, "Map"),
          dt = qt(U, "Promise"),
          pt = qt(U, "Set"),
          gt = qt(U, "WeakMap"),
          mt = qt(Object, "create"),
          yt = Kt(lt),
          vt = Kt(ft),
          wt = Kt(dt),
          bt = Kt(pt),
          _t = Kt(gt),
          At = it ? it.prototype : void 0,
          Et = At ? At.valueOf : void 0;
        function St(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var i = t[e];
            this.set(i[0], i[1]);
          }
        }
        function It(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var i = t[e];
            this.set(i[0], i[1]);
          }
        }
        function Mt(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var i = t[e];
            this.set(i[0], i[1]);
          }
        }
        function Nt(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.__data__ = new Mt(); ++e < r; ) this.add(t[e]);
        }
        function Ot(t) {
          var e = (this.__data__ = new It(t));
          this.size = e.size;
        }
        function xt(t, e) {
          var r = Gt(t),
            i = !r && Vt(t),
            n = !r && !i && Wt(t),
            s = !r && !i && !n && Zt(t),
            o = r || i || n || s,
            a = o
              ? (function (t, e) {
                  for (var r = -1, i = Array(t); ++r < t; ) i[r] = e(r);
                  return i;
                })(t.length, String)
              : [],
            c = a.length;
          for (var h in t)
            (e || Z.call(t, h)) &&
              (!o ||
                !(
                  "length" == h ||
                  (n && ("offset" == h || "parent" == h)) ||
                  (s &&
                    ("buffer" == h ||
                      "byteLength" == h ||
                      "byteOffset" == h)) ||
                  Ft(h, c)
                )) &&
              a.push(h);
          return a;
        }
        function Pt(t, e) {
          for (var r = t.length; r--; ) if (Ht(t[r][0], e)) return r;
          return -1;
        }
        function Rt(t) {
          return null == t
            ? void 0 === t
              ? I
              : y
            : at && at in Object(t)
            ? (function (t) {
                var e = Z.call(t, at),
                  r = t[at];
                try {
                  t[at] = void 0;
                  var i = !0;
                } catch {}
                var n = tt.call(t);
                return i && (e ? (t[at] = r) : delete t[at]), n;
              })(t)
            : (function (t) {
                return tt.call(t);
              })(t);
        }
        function Tt(t) {
          return Xt(t) && Rt(t) == a;
        }
        function Ct(t, e, r, n, o) {
          return (
            t === e ||
            (null == t || null == e || (!Xt(t) && !Xt(e))
              ? t !== t && e !== e
              : (function (t, e, r, n, o, h) {
                  var d = Gt(t),
                    p = Gt(e),
                    y = d ? c : zt(t),
                    w = p ? c : zt(e),
                    b = (y = y == a ? v : y) == v,
                    I = (w = w == a ? v : w) == v,
                    M = y == w;
                  if (M && Wt(t)) {
                    if (!Wt(e)) return !1;
                    (d = !0), (b = !1);
                  }
                  if (M && !b)
                    return (
                      h || (h = new Ot()),
                      d || Zt(t)
                        ? kt(t, e, r, n, o, h)
                        : (function (t, e, r, n, o, a, c) {
                            switch (r) {
                              case O:
                                if (
                                  t.byteLength != e.byteLength ||
                                  t.byteOffset != e.byteOffset
                                )
                                  return !1;
                                (t = t.buffer), (e = e.buffer);
                              case N:
                                return !(
                                  t.byteLength != e.byteLength ||
                                  !a(new nt(t), new nt(e))
                                );
                              case u:
                              case l:
                              case m:
                                return Ht(+t, +e);
                              case f:
                                return (
                                  t.name == e.name && t.message == e.message
                                );
                              case _:
                              case E:
                                return t == e + "";
                              case g:
                                var h = K;
                              case A:
                                var d = n & i;
                                if ((h || (h = H), t.size != e.size && !d))
                                  return !1;
                                var p = c.get(t);
                                if (p) return p == e;
                                (n |= s), c.set(t, e);
                                var y = kt(h(t), h(e), n, o, a, c);
                                return c.delete(t), y;
                              case S:
                                if (Et) return Et.call(t) == Et.call(e);
                            }
                            return !1;
                          })(t, e, y, r, n, o, h)
                    );
                  if (!(r & i)) {
                    var x = b && Z.call(t, "__wrapped__"),
                      P = I && Z.call(e, "__wrapped__");
                    if (x || P) {
                      var R = x ? t.value() : t,
                        T = P ? e.value() : e;
                      return h || (h = new Ot()), o(R, T, r, n, h);
                    }
                  }
                  return (
                    !!M &&
                    (h || (h = new Ot()),
                    (function (t, e, r, n, s, o) {
                      var a = r & i,
                        c = Dt(t),
                        h = c.length,
                        u = Dt(e),
                        l = u.length;
                      if (h != l && !a) return !1;
                      for (var f = h; f--; ) {
                        var d = c[f];
                        if (!(a ? d in e : Z.call(e, d))) return !1;
                      }
                      var p = o.get(t);
                      if (p && o.get(e)) return p == e;
                      var g = !0;
                      o.set(t, e), o.set(e, t);
                      for (var m = a; ++f < h; ) {
                        var y = t[(d = c[f])],
                          v = e[d];
                        if (n)
                          var w = a ? n(v, y, d, e, t, o) : n(y, v, d, t, e, o);
                        if (!(void 0 === w ? y === v || s(y, v, r, n, o) : w)) {
                          g = !1;
                          break;
                        }
                        m || (m = "constructor" == d);
                      }
                      if (g && !m) {
                        var b = t.constructor,
                          _ = e.constructor;
                        b != _ &&
                          "constructor" in t &&
                          "constructor" in e &&
                          !(
                            "function" == typeof b &&
                            b instanceof b &&
                            "function" == typeof _ &&
                            _ instanceof _
                          ) &&
                          (g = !1);
                      }
                      return o.delete(t), o.delete(e), g;
                    })(t, e, r, n, o, h))
                  );
                })(t, e, r, n, Ct, o))
          );
        }
        function Ut(t) {
          return (
            !(
              !Jt(t) ||
              (function (t) {
                return !!$ && $ in t;
              })(t)
            ) && (Yt(t) ? et : x).test(Kt(t))
          );
        }
        function Lt(t) {
          if (
            !(function (t) {
              var e = t && t.constructor,
                r = ("function" == typeof e && e.prototype) || Q;
              return t === r;
            })(t)
          )
            return ut(t);
          var e = [];
          for (var r in Object(t))
            Z.call(t, r) && "constructor" != r && e.push(r);
          return e;
        }
        function kt(t, e, r, n, o, a) {
          var c = r & i,
            h = t.length,
            u = e.length;
          if (h != u && !(c && u > h)) return !1;
          var l = a.get(t);
          if (l && a.get(e)) return l == e;
          var f = -1,
            d = !0,
            p = r & s ? new Nt() : void 0;
          for (a.set(t, e), a.set(e, t); ++f < h; ) {
            var g = t[f],
              m = e[f];
            if (n) var y = c ? n(m, g, f, e, t, a) : n(g, m, f, t, e, a);
            if (void 0 !== y) {
              if (y) continue;
              d = !1;
              break;
            }
            if (p) {
              if (
                !z(e, function (t, e) {
                  if (!F(p, e) && (g === t || o(g, t, r, n, a)))
                    return p.push(e);
                })
              ) {
                d = !1;
                break;
              }
            } else if (g !== m && !o(g, m, r, n, a)) {
              d = !1;
              break;
            }
          }
          return a.delete(t), a.delete(e), d;
        }
        function Dt(t) {
          return (function (t, e, r) {
            var i = e(t);
            return Gt(t)
              ? i
              : (function (t, e) {
                  for (var r = -1, i = e.length, n = t.length; ++r < i; )
                    t[n + r] = e[r];
                  return t;
                })(i, r(t));
          })(t, $t, jt);
        }
        function Bt(t, e) {
          var r = t.__data__;
          return (function (t) {
            var e = typeof t;
            return "string" == e ||
              "number" == e ||
              "symbol" == e ||
              "boolean" == e
              ? "__proto__" !== t
              : null === t;
          })(e)
            ? r["string" == typeof e ? "string" : "hash"]
            : r.map;
        }
        function qt(t, e) {
          var r = (function (t, e) {
            return null === t || void 0 === t ? void 0 : t[e];
          })(t, e);
          return Ut(r) ? r : void 0;
        }
        (St.prototype.clear = function () {
          (this.__data__ = mt ? mt(null) : {}), (this.size = 0);
        }),
          (St.prototype.delete = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
          }),
          (St.prototype.get = function (t) {
            var e = this.__data__;
            if (mt) {
              var i = e[t];
              return i === r ? void 0 : i;
            }
            return Z.call(e, t) ? e[t] : void 0;
          }),
          (St.prototype.has = function (t) {
            var e = this.__data__;
            return mt ? void 0 !== e[t] : Z.call(e, t);
          }),
          (St.prototype.set = function (t, e) {
            var i = this.__data__;
            return (
              (this.size += this.has(t) ? 0 : 1),
              (i[t] = mt && void 0 === e ? r : e),
              this
            );
          }),
          (It.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
          (It.prototype.delete = function (t) {
            var e = this.__data__,
              r = Pt(e, t);
            return (
              !(r < 0) &&
              (r == e.length - 1 ? e.pop() : ot.call(e, r, 1), --this.size, !0)
            );
          }),
          (It.prototype.get = function (t) {
            var e = this.__data__,
              r = Pt(e, t);
            return r < 0 ? void 0 : e[r][1];
          }),
          (It.prototype.has = function (t) {
            return Pt(this.__data__, t) > -1;
          }),
          (It.prototype.set = function (t, e) {
            var r = this.__data__,
              i = Pt(r, t);
            return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
          }),
          (Mt.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new St(),
                map: new (ft || It)(),
                string: new St(),
              });
          }),
          (Mt.prototype.delete = function (t) {
            var e = Bt(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
          }),
          (Mt.prototype.get = function (t) {
            return Bt(this, t).get(t);
          }),
          (Mt.prototype.has = function (t) {
            return Bt(this, t).has(t);
          }),
          (Mt.prototype.set = function (t, e) {
            var r = Bt(this, t),
              i = r.size;
            return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
          }),
          (Nt.prototype.add = Nt.prototype.push =
            function (t) {
              return this.__data__.set(t, r), this;
            }),
          (Nt.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (Ot.prototype.clear = function () {
            (this.__data__ = new It()), (this.size = 0);
          }),
          (Ot.prototype.delete = function (t) {
            var e = this.__data__,
              r = e.delete(t);
            return (this.size = e.size), r;
          }),
          (Ot.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (Ot.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (Ot.prototype.set = function (t, e) {
            var r = this.__data__;
            if (r instanceof It) {
              var i = r.__data__;
              if (!ft || i.length < 199)
                return i.push([t, e]), (this.size = ++r.size), this;
              r = this.__data__ = new Mt(i);
            }
            return r.set(t, e), (this.size = r.size), this;
          });
        var jt = ct
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    (function (t, e) {
                      for (
                        var r = -1, i = null == t ? 0 : t.length, n = 0, s = [];
                        ++r < i;

                      ) {
                        var o = t[r];
                        e(o, r, t) && (s[n++] = o);
                      }
                      return s;
                    })(ct(t), function (e) {
                      return st.call(t, e);
                    }));
              }
            : function () {
                return [];
              },
          zt = Rt;
        function Ft(t, e) {
          var r;
          return (
            !!(e = null !== (r = e) && void 0 !== r ? r : o) &&
            ("number" == typeof t || P.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        function Kt(t) {
          if (null != t) {
            try {
              return X.call(t);
            } catch {}
            try {
              return t + "";
            } catch {}
          }
          return "";
        }
        function Ht(t, e) {
          return t === e || (t !== t && e !== e);
        }
        ((lt && zt(new lt(new ArrayBuffer(1))) != O) ||
          (ft && zt(new ft()) != g) ||
          (dt && zt(dt.resolve()) != w) ||
          (pt && zt(new pt()) != A) ||
          (gt && zt(new gt()) != M)) &&
          (zt = function (t) {
            var e = Rt(t),
              r = e == v ? t.constructor : void 0,
              i = r ? Kt(r) : "";
            if (i)
              switch (i) {
                case yt:
                  return O;
                case vt:
                  return g;
                case wt:
                  return w;
                case bt:
                  return A;
                case _t:
                  return M;
              }
            return e;
          });
        var Vt = Tt(
            (function () {
              return arguments;
            })()
          )
            ? Tt
            : function (t) {
                return Xt(t) && Z.call(t, "callee") && !st.call(t, "callee");
              },
          Gt = Array.isArray;
        var Wt =
          ht ||
          function () {
            return !1;
          };
        function Yt(t) {
          if (!Jt(t)) return !1;
          var e = Rt(t);
          return e == d || e == p || e == h || e == b;
        }
        function Qt(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o;
        }
        function Jt(t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        }
        function Xt(t) {
          return null != t && "object" == typeof t;
        }
        var Zt = j
          ? (function (t) {
              return function (e) {
                return t(e);
              };
            })(j)
          : function (t) {
              return Xt(t) && Qt(t.length) && !!R[Rt(t)];
            };
        function $t(t) {
          return (function (t) {
            return null != t && Qt(t.length) && !Yt(t);
          })(t)
            ? xt(t)
            : Lt(t);
        }
        t.exports = function (t, e) {
          return Ct(t, e);
        };
      })(Fl, Fl.exports);
      var Kl = Fl.exports;
      const Hl = (0, n.d)(Kl);
      const Vl = Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              default: function (t, e) {
                return (
                  (e = e || {}),
                  new Promise(function (r, i) {
                    var n = new XMLHttpRequest(),
                      s = [],
                      o = [],
                      a = {},
                      c = function () {
                        return {
                          ok: 2 == ((n.status / 100) | 0),
                          statusText: n.statusText,
                          status: n.status,
                          url: n.responseURL,
                          text: function () {
                            return Promise.resolve(n.responseText);
                          },
                          json: function () {
                            return Promise.resolve(n.responseText).then(
                              JSON.parse
                            );
                          },
                          blob: function () {
                            return Promise.resolve(new Blob([n.response]));
                          },
                          clone: c,
                          headers: {
                            keys: function () {
                              return s;
                            },
                            entries: function () {
                              return o;
                            },
                            get: function (t) {
                              return a[t.toLowerCase()];
                            },
                            has: function (t) {
                              return t.toLowerCase() in a;
                            },
                          },
                        };
                      };
                    for (var h in (n.open(e.method || "get", t, !0),
                    (n.onload = function () {
                      n
                        .getAllResponseHeaders()
                        .replace(
                          /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                          function (t, e, r) {
                            s.push((e = e.toLowerCase())),
                              o.push([e, r]),
                              (a[e] = a[e] ? a[e] + "," + r : r);
                          }
                        ),
                        r(c());
                    }),
                    (n.onerror = i),
                    (n.withCredentials = "include" == e.credentials),
                    e.headers))
                      n.setRequestHeader(h, e.headers[h]);
                    n.send(e.body || null);
                  })
                );
              },
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        Gl = (0, n.g)(Vl);
      var Wl = self.fetch || (self.fetch = Gl.default || Gl);
      const Yl = (0, n.d)(Wl);
      var Ql = function (t, e) {
          if (t.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < t.length; n++) {
            var s = t.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = t.length,
            c = t.charAt(0),
            h = Math.log(a) / Math.log(256),
            u = Math.log(256) / Math.log(a);
          function l(t) {
            if ("string" != typeof t) throw new TypeError("Expected String");
            if (0 === t.length) return new Uint8Array();
            var e = 0;
            if (" " !== t[e]) {
              for (var i = 0, n = 0; t[e] === c; ) i++, e++;
              for (
                var s = ((t.length - e) * h + 1) >>> 0, o = new Uint8Array(s);
                t[e];

              ) {
                var u = r[t.charCodeAt(e)];
                if (255 === u) return;
                for (
                  var l = 0, f = s - 1;
                  (0 !== u || l < n) && -1 !== f;
                  f--, l++
                )
                  (u += (a * o[f]) >>> 0),
                    (o[f] = u % 256 >>> 0),
                    (u = (u / 256) >>> 0);
                if (0 !== u) throw new Error("Non-zero carry");
                (n = l), e++;
              }
              if (" " !== t[e]) {
                for (var d = s - n; d !== s && 0 === o[d]; ) d++;
                for (var p = new Uint8Array(i + (s - d)), g = i; d !== s; )
                  p[g++] = o[d++];
                return p;
              }
            }
          }
          return {
            encode: function (e) {
              if (
                (e instanceof Uint8Array ||
                  (ArrayBuffer.isView(e)
                    ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                    : Array.isArray(e) && (e = Uint8Array.from(e))),
                !(e instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === e.length) return "";
              for (
                var r = 0, i = 0, n = 0, s = e.length;
                n !== s && 0 === e[n];

              )
                n++, r++;
              for (
                var o = ((s - n) * u + 1) >>> 0, h = new Uint8Array(o);
                n !== s;

              ) {
                for (
                  var l = e[n], f = 0, d = o - 1;
                  (0 !== l || f < i) && -1 !== d;
                  d--, f++
                )
                  (l += (256 * h[d]) >>> 0),
                    (h[d] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (i = f), n++;
              }
              for (var p = o - i; p !== o && 0 === h[p]; ) p++;
              for (var g = c.repeat(r); p < o; ++p) g += t.charAt(h[p]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (t) {
              var r = l(t);
              if (r) return r;
              throw new Error("Non-".concat(e, " character"));
            },
          };
        },
        Jl = Ql;
      const Xl = (t) => {
        if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name)
          return t;
        if (t instanceof ArrayBuffer) return new Uint8Array(t);
        if (ArrayBuffer.isView(t))
          return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      let Zl = class {
          constructor(t, e, r) {
            (this.name = t), (this.prefix = e), (this.baseEncode = r);
          }
          encode(t) {
            if (t instanceof Uint8Array)
              return "".concat(this.prefix).concat(this.baseEncode(t));
            throw Error("Unknown type, must be binary type");
          }
        },
        $l = class {
          constructor(t, e, r) {
            if (
              ((this.name = t), (this.prefix = e), void 0 === e.codePointAt(0))
            )
              throw new Error("Invalid prefix character");
            (this.prefixCodePoint = e.codePointAt(0)), (this.baseDecode = r);
          }
          decode(t) {
            if ("string" == typeof t) {
              if (t.codePointAt(0) !== this.prefixCodePoint)
                throw Error(
                  "Unable to decode multibase string "
                    .concat(JSON.stringify(t), ", ")
                    .concat(
                      this.name,
                      " decoder only supports inputs prefixed with "
                    )
                    .concat(this.prefix)
                );
              return this.baseDecode(t.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(t) {
            return ef(this, t);
          }
        },
        tf = class {
          constructor(t) {
            this.decoders = t;
          }
          or(t) {
            return ef(this, t);
          }
          decode(t) {
            const e = t[0],
              r = this.decoders[e];
            if (r) return r.decode(t);
            throw RangeError(
              "Unable to decode multibase string "
                .concat(JSON.stringify(t), ", only inputs prefixed with ")
                .concat(Object.keys(this.decoders), " are supported")
            );
          }
        };
      const ef = (t, e) =>
        new tf({
          ...(t.decoders || { [t.prefix]: t }),
          ...(e.decoders || { [e.prefix]: e }),
        });
      let rf = class {
        constructor(t, e, r, i) {
          (this.name = t),
            (this.prefix = e),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new Zl(t, e, r)),
            (this.decoder = new $l(t, e, i));
        }
        encode(t) {
          return this.encoder.encode(t);
        }
        decode(t) {
          return this.decoder.decode(t);
        }
      };
      const nf = (t) => {
          let { name: e, prefix: r, encode: i, decode: n } = t;
          return new rf(e, r, i, n);
        },
        sf = (t) => {
          let { prefix: e, name: r, alphabet: i } = t;
          const { encode: n, decode: s } = Jl(i, r);
          return nf({ prefix: e, name: r, encode: n, decode: (t) => Xl(s(t)) });
        },
        of = (t) => {
          let { name: e, prefix: r, bitsPerChar: i, alphabet: n } = t;
          return nf({
            prefix: r,
            name: e,
            encode: (t) =>
              ((t, e, r) => {
                const i = "=" === e[e.length - 1],
                  n = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < t.length; ++c)
                  for (a = (a << 8) | t[c], o += 8; o > r; )
                    (o -= r), (s += e[n & (a >> o)]);
                if ((o && (s += e[n & (a << (r - o))]), i))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(t, n, i),
            decode: (t) =>
              ((t, e, r, i) => {
                const n = {};
                for (let u = 0; u < e.length; ++u) n[e[u]] = u;
                let s = t.length;
                for (; "=" === t[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  h = 0;
                for (let u = 0; u < s; ++u) {
                  const e = n[t[u]];
                  if (void 0 === e)
                    throw new SyntaxError("Non-".concat(i, " character"));
                  (c = (c << r) | e),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[h++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(t, n, i, e),
          });
        },
        af = nf({
          prefix: "\0",
          name: "identity",
          encode: (t) => ((t) => new TextDecoder().decode(t))(t),
          decode: (t) => ((t) => new TextEncoder().encode(t))(t),
        });
      var cf = Object.freeze({ __proto__: null, identity: af });
      const hf = of({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var uf = Object.freeze({ __proto__: null, base2: hf });
      const lf = of({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var ff = Object.freeze({ __proto__: null, base8: lf });
      const df = sf({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var pf = Object.freeze({ __proto__: null, base10: df });
      const gf = of({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        mf = of({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var yf = Object.freeze({ __proto__: null, base16: gf, base16upper: mf });
      const vf = of({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        wf = of({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        bf = of({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        _f = of({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Af = of({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Ef = of({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Sf = of({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        If = of({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Mf = of({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var Nf = Object.freeze({
        __proto__: null,
        base32: vf,
        base32upper: wf,
        base32pad: bf,
        base32padupper: _f,
        base32hex: Af,
        base32hexupper: Ef,
        base32hexpad: Sf,
        base32hexpadupper: If,
        base32z: Mf,
      });
      const Of = sf({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        xf = sf({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var Pf = Object.freeze({ __proto__: null, base36: Of, base36upper: xf });
      const Rf = sf({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Tf = sf({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var Cf = Object.freeze({
        __proto__: null,
        base58btc: Rf,
        base58flickr: Tf,
      });
      const Uf = of({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Lf = of({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        kf = of({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Df = of({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var Bf = Object.freeze({
        __proto__: null,
        base64: Uf,
        base64pad: Lf,
        base64url: kf,
        base64urlpad: Df,
      });
      const qf = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        jf = qf.reduce((t, e, r) => ((t[r] = e), t), []),
        zf = qf.reduce((t, e, r) => ((t[e.codePointAt(0)] = r), t), []);
      const Ff = nf({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (t) {
          return t.reduce((t, e) => (t += jf[e]), "");
        },
        decode: function (t) {
          const e = [];
          for (const r of t) {
            const t = zf[r.codePointAt(0)];
            if (void 0 === t)
              throw new Error("Non-base256emoji character: ".concat(r));
            e.push(t);
          }
          return new Uint8Array(e);
        },
      });
      var Kf = Object.freeze({ __proto__: null, base256emoji: Ff }),
        Hf = function t(e, r, i) {
          r = r || [];
          for (var n = (i = i || 0); e >= Wf; )
            (r[i++] = (255 & e) | Vf), (e /= 128);
          for (; e & Gf; ) (r[i++] = (255 & e) | Vf), (e >>>= 7);
          return (r[i] = 0 | e), (t.bytes = i - n + 1), r;
        },
        Vf = 128,
        Gf = -128,
        Wf = Math.pow(2, 31);
      var Yf = function t(e, r) {
          var i,
            n = 0,
            s = 0,
            o = (r = r || 0),
            a = e.length;
          do {
            if (o >= a)
              throw ((t.bytes = 0), new RangeError("Could not decode varint"));
            (i = e[o++]),
              (n += s < 28 ? (i & Jf) << s : (i & Jf) * Math.pow(2, s)),
              (s += 7);
          } while (i >= Qf);
          return (t.bytes = o - r), n;
        },
        Qf = 128,
        Jf = 127;
      var Xf = Math.pow(2, 7),
        Zf = Math.pow(2, 14),
        $f = Math.pow(2, 21),
        td = Math.pow(2, 28),
        ed = Math.pow(2, 35),
        rd = Math.pow(2, 42),
        id = Math.pow(2, 49),
        nd = Math.pow(2, 56),
        sd = Math.pow(2, 63),
        od = {
          encode: Hf,
          decode: Yf,
          encodingLength: function (t) {
            return t < Xf
              ? 1
              : t < Zf
              ? 2
              : t < $f
              ? 3
              : t < td
              ? 4
              : t < ed
              ? 5
              : t < rd
              ? 6
              : t < id
              ? 7
              : t < nd
              ? 8
              : t < sd
              ? 9
              : 10;
          },
        },
        ad = od;
      const cd = function (t, e) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return ad.encode(t, e, r), e;
        },
        hd = (t) => ad.encodingLength(t),
        ud = (t, e) => {
          const r = e.byteLength,
            i = hd(t),
            n = i + hd(r),
            s = new Uint8Array(n + r);
          return cd(t, s, 0), cd(r, s, i), s.set(e, n), new ld(t, r, e, s);
        };
      class ld {
        constructor(t, e, r, i) {
          (this.code = t), (this.size = e), (this.digest = r), (this.bytes = i);
        }
      }
      const fd = (t) => {
        let { name: e, code: r, encode: i } = t;
        return new dd(e, r, i);
      };
      class dd {
        constructor(t, e, r) {
          (this.name = t), (this.code = e), (this.encode = r);
        }
        digest(t) {
          if (t instanceof Uint8Array) {
            const e = this.encode(t);
            return e instanceof Uint8Array
              ? ud(this.code, e)
              : e.then((t) => ud(this.code, t));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const pd = (t) => async (e) =>
          new Uint8Array(await crypto.subtle.digest(t, e)),
        gd = fd({ name: "sha2-256", code: 18, encode: pd("SHA-256") }),
        md = fd({ name: "sha2-512", code: 19, encode: pd("SHA-512") });
      Object.freeze({ __proto__: null, sha256: gd, sha512: md });
      const yd = Xl,
        vd = {
          code: 0,
          name: "identity",
          encode: yd,
          digest: (t) => ud(0, yd(t)),
        };
      Object.freeze({ __proto__: null, identity: vd });
      new TextEncoder(), new TextDecoder();
      const wd = {
        ...cf,
        ...uf,
        ...ff,
        ...pf,
        ...yf,
        ...Nf,
        ...Pf,
        ...Cf,
        ...Bf,
        ...Kf,
      };
      function bd(t) {
        return null != globalThis.Buffer
          ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
          : t;
      }
      function _d(t, e, r, i) {
        return {
          name: t,
          prefix: e,
          encoder: { name: t, prefix: e, encode: r },
          decoder: { decode: i },
        };
      }
      const Ad = _d(
          "utf8",
          "u",
          (t) => "u" + new TextDecoder("utf8").decode(t),
          (t) => new TextEncoder().encode(t.substring(1))
        ),
        Ed = _d(
          "ascii",
          "a",
          (t) => {
            let e = "a";
            for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
            return e;
          },
          (t) => {
            const e = (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? bd(globalThis.Buffer.allocUnsafe(t))
                : new Uint8Array(t);
            })((t = t.substring(1)).length);
            for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
            return e;
          }
        ),
        Sd = {
          utf8: Ad,
          "utf-8": Ad,
          hex: wd.base16,
          latin1: Ed,
          ascii: Ed,
          binary: Ed,
          ...wd,
        };
      const Id = "core",
        Md = "".concat("wc", "@2:").concat(Id, ":"),
        Nd = "error",
        Od = { database: ":memory:" },
        xd = "client_ed25519_seed",
        Pd = dt.ONE_DAY,
        Rd = dt.SIX_HOURS,
        Td = "wss://relay.walletconnect.com",
        Cd = "wss://relay.walletconnect.org",
        Ud = "relayer_message",
        Ld = "relayer_message_ack",
        kd = "relayer_connect",
        Dd = "relayer_disconnect",
        Bd = "relayer_error",
        qd = "relayer_connection_stalled",
        jd = "relayer_publish",
        zd = "payload",
        Fd = "connect",
        Kd = "disconnect",
        Hd = "error",
        Vd = dt.ONE_SECOND,
        Gd = "subscription_created",
        Wd = "subscription_deleted",
        Yd = "subscription_sync",
        Qd = "subscription_resubscribed",
        Jd = 1e3 * dt.FIVE_SECONDS,
        Xd = {
          wc_pairingDelete: {
            req: { ttl: dt.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: dt.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: dt.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: dt.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: dt.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: dt.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        Zd = "pairing_create",
        $d = "pairing_expire",
        tp = "pairing_delete",
        ep = "pairing_ping",
        rp = "history_created",
        ip = "history_updated",
        np = "history_deleted",
        sp = "history_sync",
        op = "expirer_created",
        ap = "expirer_deleted",
        cp = "expirer_expired",
        hp = "expirer_sync",
        up = "verify-api",
        lp = "https://verify.walletconnect.com",
        fp = "https://verify.walletconnect.org",
        dp = [lp, fp];
      class pp {
        constructor(t, e) {
          (this.core = t),
            (this.logger = e),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Md),
            (this.init = async () => {
              if (!this.initialized) {
                const t = await this.getKeyChain();
                typeof t < "u" && (this.keychain = t), (this.initialized = !0);
              }
            }),
            (this.has = (t) => (this.isInitialized(), this.keychain.has(t))),
            (this.set = async (t, e) => {
              this.isInitialized(),
                this.keychain.set(t, e),
                await this.persist();
            }),
            (this.get = (t) => {
              this.isInitialized();
              const e = this.keychain.get(t);
              if (typeof e > "u") {
                const { message: e } = qu(
                  "NO_MATCHING_KEY",
                  "".concat(this.name, ": ").concat(t)
                );
                throw new Error(e);
              }
              return e;
            }),
            (this.del = async (t) => {
              this.isInitialized(),
                this.keychain.delete(t),
                await this.persist();
            }),
            (this.core = t),
            (this.logger = Re(e, this.name));
        }
        get context() {
          return Pe(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(t) {
          await this.core.storage.setItem(this.storageKey, os(t));
        }
        async getKeyChain() {
          const t = await this.core.storage.getItem(this.storageKey);
          return typeof t < "u" ? as(t) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class gp {
        constructor(t, e, r) {
          (this.core = t),
            (this.logger = e),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (t) => (
              this.isInitialized(), this.keychain.has(t)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              return Ri(Ci(await this.getClientSeed()).publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const t = (function () {
                const t = kn.generateKeyPair();
                return {
                  privateKey: Oi(t.secretKey, nu),
                  publicKey: Oi(t.publicKey, nu),
                };
              })();
              return this.setPrivateKey(t.publicKey, t.privateKey);
            }),
            (this.signJWT = async (t) => {
              this.isInitialized();
              const e = Ci(await this.getClientSeed()),
                r = du();
              return await Ui(r, t, Pd, e);
            }),
            (this.generateSharedKey = (t, e, r) => {
              this.isInitialized();
              const i = (function (t, e) {
                const r = kn.sharedKey(xi(t, nu), xi(e, nu), !0);
                return Oi(new Un(Ln.SHA256, r).expand(fu), nu);
              })(this.getPrivateKey(t), e);
              return this.setSymKey(i, r);
            }),
            (this.setSymKey = async (t, e) => {
              this.isInitialized();
              const r = e || pu(t);
              return await this.keychain.set(r, t), r;
            }),
            (this.deleteKeyPair = async (t) => {
              this.isInitialized(), await this.keychain.del(t);
            }),
            (this.deleteSymKey = async (t) => {
              this.isInitialized(), await this.keychain.del(t);
            }),
            (this.encode = async (t, e, r) => {
              this.isInitialized();
              const i = wu(r),
                n = $(e);
              if (bu(i)) {
                const e = i.senderPublicKey,
                  r = i.receiverPublicKey;
                t = await this.generateSharedKey(e, r);
              }
              const s = this.getSymKey(t),
                { type: o, senderPublicKey: a } = i;
              return yu({ type: o, symKey: s, message: n, senderPublicKey: a });
            }),
            (this.decode = async (t, e, r) => {
              this.isInitialized();
              const i = (function (t, e) {
                const r = vu(t);
                return wu({
                  type: mu(r.type),
                  senderPublicKey:
                    typeof r.senderPublicKey < "u"
                      ? Oi(r.senderPublicKey, nu)
                      : void 0,
                  receiverPublicKey:
                    null === e || void 0 === e ? void 0 : e.receiverPublicKey,
                });
              })(e, r);
              if (bu(i)) {
                const e = i.receiverPublicKey,
                  r = i.senderPublicKey;
                t = await this.generateSharedKey(e, r);
              }
              try {
                const r = (function (t) {
                  const e = new dn.ChaCha20Poly1305(xi(t.symKey, nu)),
                    { sealed: r, iv: i } = vu(t.encoded),
                    n = e.open(i, r);
                  if (null === n) throw new Error("Failed to decrypt");
                  return Oi(n, ou);
                })({ symKey: this.getSymKey(t), encoded: e });
                return Z(r);
              } catch (n) {
                this.logger.error(
                  "Failed to decode message from topic: '"
                    .concat(t, "', clientId: '")
                    .concat(await this.getClientId(), "'")
                ),
                  this.logger.error(n);
              }
            }),
            (this.getPayloadType = (t) => mu(vu(t).type)),
            (this.getPayloadSenderPublicKey = (t) => {
              const e = vu(t);
              return e.senderPublicKey ? Oi(e.senderPublicKey, nu) : void 0;
            }),
            (this.core = t),
            (this.logger = Re(e, this.name)),
            (this.keychain = r || new pp(this.core, this.logger));
        }
        get context() {
          return Pe(this.logger);
        }
        async setPrivateKey(t, e) {
          return await this.keychain.set(t, e), t;
        }
        getPrivateKey(t) {
          return this.keychain.get(t);
        }
        async getClientSeed() {
          let t = "";
          try {
            t = this.keychain.get(xd);
          } catch {
            (t = du()), await this.keychain.set(xd, t);
          }
          return (function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            const r = Sd[e];
            if (!r) throw new Error('Unsupported encoding "'.concat(e, '"'));
            return ("utf8" !== e && "utf-8" !== e) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode("".concat(r.prefix).concat(t))
              : bd(globalThis.Buffer.from(t, "utf-8"));
          })(t, "base16");
        }
        getSymKey(t) {
          return this.keychain.get(t);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class mp extends Le {
        constructor(t, e) {
          super(t, e),
            (this.logger = t),
            (this.core = e),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Md),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const t = await this.getRelayerMessages();
                  typeof t < "u" && (this.messages = t),
                    this.logger.debug(
                      "Successfully Restored records for ".concat(this.name)
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (t) {
                  this.logger.debug(
                    "Failed to Restore records for ".concat(this.name)
                  ),
                    this.logger.error(t);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (t, e) => {
              this.isInitialized();
              const r = gu(e);
              let i = this.messages.get(t);
              return (
                typeof i > "u" && (i = {}),
                typeof i[r] < "u" ||
                  ((i[r] = e), this.messages.set(t, i), await this.persist()),
                r
              );
            }),
            (this.get = (t) => {
              this.isInitialized();
              let e = this.messages.get(t);
              return typeof e > "u" && (e = {}), e;
            }),
            (this.has = (t, e) => {
              this.isInitialized();
              return typeof this.get(t)[gu(e)] < "u";
            }),
            (this.del = async (t) => {
              this.isInitialized(),
                this.messages.delete(t),
                await this.persist();
            }),
            (this.logger = Re(t, this.name)),
            (this.core = e);
        }
        get context() {
          return Pe(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(t) {
          await this.core.storage.setItem(this.storageKey, os(t));
        }
        async getRelayerMessages() {
          const t = await this.core.storage.getItem(this.storageKey);
          return typeof t < "u" ? as(t) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class yp extends ke {
        constructor(t, e) {
          super(t, e),
            (this.relayer = t),
            (this.logger = e),
            (this.events = new M.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = dt.toMiliseconds(dt.ONE_MINUTE)),
            (this.failedPublishTimeout = dt.toMiliseconds(dt.ONE_SECOND)),
            (this.needsTransportRestart = !1),
            (this.publish = async (t, e, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: t, message: e, opts: r },
                });
              const n = (null === r || void 0 === r ? void 0 : r.ttl) || Rd,
                s = _u(r),
                o = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                a = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                c =
                  (null === r || void 0 === r ? void 0 : r.id) ||
                  _l().toString(),
                h = {
                  topic: t,
                  message: e,
                  opts: { ttl: n, relay: s, prompt: o, tag: a, id: c },
                },
                u = "Failed to publish payload, please try again. id:"
                  .concat(c, " tag:")
                  .concat(a),
                l = Date.now();
              let f,
                d = 1;
              try {
                for (; void 0 === f; ) {
                  if (Date.now() - l > this.publishTimeout) throw new Error(u);
                  this.logger.trace(
                    { id: c, attempts: d },
                    "publisher.publish - attempt ".concat(d)
                  ),
                    (f = await await hs(
                      this.rpcPublish(t, e, n, s, o, a, c).catch((t) =>
                        this.logger.warn(t)
                      ),
                      this.publishTimeout,
                      u
                    )),
                    d++,
                    f ||
                      (await new Promise((t) =>
                        setTimeout(t, this.failedPublishTimeout)
                      ));
                }
                this.relayer.events.emit(jd, h),
                  this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { id: c, topic: t, message: e, opts: r },
                  });
              } catch (p) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(p),
                  null !=
                    (i = null === r || void 0 === r ? void 0 : r.internal) &&
                    i.throwOnFailedPublish)
                )
                  throw p;
                this.queue.set(c, h);
              }
            }),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.relayer = t),
            (this.logger = Re(e, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return Pe(this.logger);
        }
        rpcPublish(t, e, r, i, n, s, o) {
          var a, c, h, u;
          const l = {
            method: Au(i.protocol).publish,
            params: { topic: t, message: e, ttl: r, prompt: n, tag: s },
            id: o,
          };
          return (
            Ku(null == (a = l.params) ? void 0 : a.prompt) &&
              (null == (c = l.params) || delete c.prompt),
            Ku(null == (h = l.params) ? void 0 : h.tag) &&
              (null == (u = l.params) || delete u.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: l,
            }),
            this.relayer.request(l)
          );
        }
        removeRequestFromQueue(t) {
          this.queue.delete(t);
        }
        checkQueue() {
          this.queue.forEach(async (t) => {
            const { topic: e, message: r, opts: i } = t;
            await this.publish(e, r, i);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(ct.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(qd)
              );
            this.checkQueue();
          }),
            this.relayer.on(Ld, (t) => {
              this.removeRequestFromQueue(t.id.toString());
            });
        }
      }
      class vp {
        constructor() {
          (this.map = new Map()),
            (this.set = (t, e) => {
              const r = this.get(t);
              this.exists(t, e) || this.map.set(t, [...r, e]);
            }),
            (this.get = (t) => this.map.get(t) || []),
            (this.exists = (t, e) => this.get(t).includes(e)),
            (this.delete = (t, e) => {
              if (typeof e > "u") return void this.map.delete(t);
              if (!this.map.has(t)) return;
              const r = this.get(t);
              if (!this.exists(t, e)) return;
              const i = r.filter((t) => t !== e);
              i.length ? this.map.set(t, i) : this.map.delete(t);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var wp = Object.defineProperty,
        bp = Object.defineProperties,
        _p = Object.getOwnPropertyDescriptors,
        Ap = Object.getOwnPropertySymbols,
        Ep = Object.prototype.hasOwnProperty,
        Sp = Object.prototype.propertyIsEnumerable,
        Ip = (t, e, r) =>
          e in t
            ? wp(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Mp = (t, e) => {
          for (var r in e || (e = {})) Ep.call(e, r) && Ip(t, r, e[r]);
          if (Ap) for (var r of Ap(e)) Sp.call(e, r) && Ip(t, r, e[r]);
          return t;
        },
        Np = (t, e) => bp(t, _p(e));
      class Op extends qe {
        constructor(t, e) {
          super(t, e),
            (this.relayer = t),
            (this.logger = e),
            (this.subscriptions = new Map()),
            (this.topicMap = new vp()),
            (this.events = new M.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = Md),
            (this.subscribeTimeout = dt.toMiliseconds(dt.ONE_MINUTE)),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (t, e) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: t, opts: e },
                });
              try {
                const r = _u(e),
                  i = { topic: t, relay: r };
                this.pending.set(t, i);
                const n = await this.rpcSubscribe(t, r);
                return (
                  "string" == typeof n &&
                    (this.onSubscribe(n, i),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: t, opts: e },
                    })),
                  n
                );
              } catch (r) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(r),
                  r)
                );
              }
            }),
            (this.unsubscribe = async (t, e) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof (null === e || void 0 === e ? void 0 : e.id) < "u"
                  ? await this.unsubscribeById(t, e.id, e)
                  : await this.unsubscribeByTopic(t, e);
            }),
            (this.isSubscribed = async (t) => {
              if (this.topics.includes(t)) return !0;
              const e = ""
                .concat(this.pendingSubscriptionWatchLabel, "_")
                .concat(t);
              return await new Promise((r, i) => {
                const n = new dt.Watch();
                n.start(e);
                const s = setInterval(() => {
                  !this.pending.has(t) &&
                    this.topics.includes(t) &&
                    (clearInterval(s), n.stop(e), r(!0)),
                    n.elapsed(e) >= Jd &&
                      (clearInterval(s),
                      n.stop(e),
                      i(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.start = async () => {
              await this.onConnect();
            }),
            (this.stop = async () => {
              await this.onDisconnect();
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = t),
            (this.logger = Re(e, this.name)),
            (this.clientId = "");
        }
        get context() {
          return Pe(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(t, e) {
          let r = !1;
          try {
            r = this.getSubscription(t).topic === e;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(t, e) {
          const r = this.topicMap.get(t);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(t, r, e))
          );
        }
        async unsubscribeById(t, e, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: t, id: e, opts: r },
            });
          try {
            const i = _u(r);
            await this.rpcUnsubscribe(t, e, i);
            const n = ju(
              "USER_DISCONNECTED",
              "".concat(this.name, ", ").concat(t)
            );
            await this.onUnsubscribe(t, e, n),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: t, id: e, opts: r },
              });
          } catch (i) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(i),
              i)
            );
          }
        }
        async rpcSubscribe(t, e) {
          const r = { method: Au(e.protocol).subscribe, params: { topic: t } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            return (await await hs(
              this.relayer.request(r).catch((t) => this.logger.warn(t)),
              this.subscribeTimeout
            ))
              ? gu(t + this.clientId)
              : null;
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(qd);
          }
          return null;
        }
        async rpcBatchSubscribe(t) {
          if (!t.length) return;
          const e = {
            method: Au(t[0].relay.protocol).batchSubscribe,
            params: { topics: t.map((t) => t.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: e,
            });
          try {
            return await await hs(
              this.relayer.request(e).catch((t) => this.logger.warn(t)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(qd);
          }
        }
        rpcUnsubscribe(t, e, r) {
          const i = {
            method: Au(r.protocol).unsubscribe,
            params: { topic: t, id: e },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(t, e) {
          this.setSubscription(t, Np(Mp({}, e), { id: t })),
            this.pending.delete(e.topic);
        }
        onBatchSubscribe(t) {
          t.length &&
            t.forEach((t) => {
              this.setSubscription(t.id, Mp({}, t)),
                this.pending.delete(t.topic);
            });
        }
        async onUnsubscribe(t, e, r) {
          this.events.removeAllListeners(e),
            this.hasSubscription(e, t) && this.deleteSubscription(e, r),
            await this.relayer.messages.del(t);
        }
        async setRelayerSubscriptions(t) {
          await this.relayer.core.storage.setItem(this.storageKey, t);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(t, e) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: t,
              subscription: e,
            }),
            this.addSubscription(t, e);
        }
        addSubscription(t, e) {
          this.subscriptions.set(t, Mp({}, e)),
            this.topicMap.set(e.topic, t),
            this.events.emit(Gd, e);
        }
        getSubscription(t) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: t,
            });
          const e = this.subscriptions.get(t);
          if (!e) {
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(t)
            );
            throw new Error(e);
          }
          return e;
        }
        deleteSubscription(t, e) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: t,
              reason: e,
            });
          const r = this.getSubscription(t);
          this.subscriptions.delete(t),
            this.topicMap.delete(r.topic, t),
            this.events.emit(Wd, Np(Mp({}, r), { reason: e }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(Yd);
        }
        async reset() {
          if (this.cached.length) {
            const t = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let e = 0; e < t; e++) {
              const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(Qd);
        }
        async restore() {
          try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length) return;
            if (this.subscriptions.size) {
              const { message: t } = qu("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(t),
                this.logger.error(
                  "".concat(this.name, ": ").concat(JSON.stringify(this.values))
                ),
                new Error(t))
              );
            }
            (this.cached = t),
              this.logger.debug(
                "Successfully Restored subscriptions for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (t) {
            this.logger.debug(
              "Failed to Restore subscriptions for ".concat(this.name)
            ),
              this.logger.error(t);
          }
        }
        async batchSubscribe(t) {
          if (!t.length) return;
          const e = await this.rpcBatchSubscribe(t);
          zu(e) &&
            this.onBatchSubscribe(e.map((e, r) => Np(Mp({}, t[r]), { id: e })));
        }
        async onConnect() {
          await this.restart(), this.onEnable();
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || !this.relayer.connected) return;
          const t = [];
          this.pending.forEach((e) => {
            t.push(e);
          }),
            await this.batchSubscribe(t);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(
            ct.HEARTBEAT_EVENTS.pulse,
            async () => {
              await this.checkPending();
            }
          ),
            this.events.on(Gd, async (t) => {
              const e = Gd;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, data: t }),
                await this.persist();
            }),
            this.events.on(Wd, async (t) => {
              const e = Wd;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, data: t }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((t) => {
              const e = setInterval(() => {
                this.restartInProgress || (clearInterval(e), t());
              }, this.pollingInterval);
            }));
        }
      }
      var xp = Object.defineProperty,
        Pp = Object.getOwnPropertySymbols,
        Rp = Object.prototype.hasOwnProperty,
        Tp = Object.prototype.propertyIsEnumerable,
        Cp = (t, e, r) =>
          e in t
            ? xp(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r);
      class Up extends De {
        constructor(t) {
          super(t),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new M.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = [
              "socket hang up",
              "socket stalled",
              "interrupted",
            ]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.heartBeatTimeout = dt.toMiliseconds(
              dt.THIRTY_SECONDS + dt.ONE_SECOND
            )),
            (this.request = async (t) => {
              var e, r;
              this.logger.debug("Publishing Request Payload");
              const i = t.id || _l().toString();
              await this.toEstablishConnection();
              try {
                const n = this.provider.request(t);
                this.requestsInFlight.set(i, { promise: n, request: t }),
                  this.logger.trace(
                    {
                      id: i,
                      method: t.method,
                      topic: null == (e = t.params) ? void 0 : e.topic,
                    },
                    "relayer.request - attempt to publish..."
                  );
                const s = await new Promise(async (t, e) => {
                  const r = () => {
                    e(
                      new Error(
                        "relayer.request - publish interrupted, id: ".concat(i)
                      )
                    );
                  };
                  this.provider.on(Kd, r);
                  const s = await n;
                  this.provider.off(Kd, r), t(s);
                });
                return (
                  this.logger.trace(
                    {
                      id: i,
                      method: t.method,
                      topic: null == (r = t.params) ? void 0 : r.topic,
                    },
                    "relayer.request - published"
                  ),
                  s
                );
              } catch (n) {
                throw (
                  (this.logger.debug("Failed to Publish Request: ".concat(i)),
                  n)
                );
              } finally {
                this.requestsInFlight.delete(i);
              }
            }),
            (this.resetPingTimeout = () => {
              if ($n())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var t, e, r;
                      null ==
                        (r =
                          null ==
                          (e =
                            null == (t = this.provider) ? void 0 : t.connection)
                            ? void 0
                            : e.socket) || r.terminate();
                    }, this.heartBeatTimeout));
                } catch (t) {
                  this.logger.warn(t);
                }
            }),
            (this.onPayloadHandler = (t) => {
              this.onProviderPayload(t), this.resetPingTimeout();
            }),
            (this.onConnectHandler = () => {
              this.startPingTimeout(), this.events.emit(kd);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (t) => {
              this.logger.error(t),
                this.events.emit(Bd, t),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(zd, this.onPayloadHandler),
                this.provider.on(Fd, this.onConnectHandler),
                this.provider.on(Kd, this.onDisconnectHandler),
                this.provider.on(Hd, this.onProviderErrorHandler);
            }),
            (this.core = t.core),
            (this.logger =
              typeof t.logger < "u" && "string" != typeof t.logger
                ? Re(t.logger, this.name)
                : le(xe({ level: t.logger || "error" }))),
            (this.messages = new mp(this.logger, t.core)),
            (this.subscriber = new Op(this, this.logger)),
            (this.publisher = new yp(this, this.logger)),
            (this.relayUrl =
              (null === t || void 0 === t ? void 0 : t.relayUrl) || Td),
            (this.projectId = t.projectId),
            (this.bundleId = (function () {
              var t;
              try {
                return ts() &&
                  typeof global < "u" &&
                  typeof (null == global ? void 0 : global.Application) < "u"
                  ? null == (t = global.Application)
                    ? void 0
                    : t.applicationId
                  : void 0;
              } catch {
                return;
              }
            })()),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              "Connection via "
                .concat(
                  this.relayUrl,
                  " failed, attempting to connect via failover domain "
                )
                .concat(Cd, "...")
            ),
              await this.restartTransport(Cd);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                0 === this.subscriber.pending.size &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return Pe(this.logger);
        }
        get connected() {
          var t, e, r;
          return (
            1 ===
            (null ==
            (r =
              null == (e = null == (t = this.provider) ? void 0 : t.connection)
                ? void 0
                : e.socket)
              ? void 0
              : r.readyState)
          );
        }
        get connecting() {
          var t, e, r;
          return (
            0 ===
            (null ==
            (r =
              null == (e = null == (t = this.provider) ? void 0 : t.connection)
                ? void 0
                : e.socket)
              ? void 0
              : r.readyState)
          );
        }
        async publish(t, e, r) {
          this.isInitialized(),
            await this.publisher.publish(t, e, r),
            await this.recordMessageEvent({
              topic: t,
              message: e,
              publishedAt: Date.now(),
            });
        }
        async subscribe(t, e) {
          var r;
          this.isInitialized();
          let i,
            n =
              (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) ||
              "";
          const s = (e) => {
            e.topic === t && (this.subscriber.off(Gd, s), i());
          };
          return (
            await Promise.all([
              new Promise((t) => {
                (i = t), this.subscriber.on(Gd, s);
              }),
              new Promise(async (r) => {
                (n = (await this.subscriber.subscribe(t, e)) || n), r();
              }),
            ]),
            n
          );
        }
        async unsubscribe(t, e) {
          this.isInitialized(), await this.subscriber.unsubscribe(t, e);
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async transportDisconnect() {
          if (
            !this.hasExperiencedNetworkDisruption &&
            this.connected &&
            this.requestsInFlight.size > 0
          )
            try {
              await Promise.all(
                Array.from(this.requestsInFlight.values()).map((t) => t.promise)
              );
            } catch (t) {
              this.logger.warn(t);
            }
          this.hasExperiencedNetworkDisruption || this.connected
            ? await hs(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(t) {
          await this.confirmOnlineStateOrThrow(),
            t &&
              t !== this.relayUrl &&
              ((this.relayUrl = t),
              await this.transportDisconnect(),
              await this.createProvider()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          try {
            await new Promise(async (t, e) => {
              const r = () => {
                this.provider.off(Kd, r),
                  e(
                    new Error(
                      "Connection interrupted while trying to subscribe"
                    )
                  );
              };
              this.provider.on(Kd, r),
                await hs(
                  this.provider.connect(),
                  dt.toMiliseconds(dt.ONE_MINUTE),
                  "Socket stalled when trying to connect to ".concat(
                    this.relayUrl
                  )
                ).catch((t) => {
                  e(t);
                }),
                await this.subscriber.start(),
                (this.hasExperiencedNetworkDisruption = !1),
                t();
            });
          } catch (e) {
            this.logger.error(e);
            const t = e;
            if (!this.isConnectionStalled(t.message)) throw e;
          } finally {
            this.connectionAttemptInProgress = !1;
          }
        }
        async restartTransport(t) {
          this.connectionAttemptInProgress ||
            ((this.relayUrl = t || this.relayUrl),
            await this.confirmOnlineStateOrThrow(),
            await this.transportClose(),
            await this.createProvider(),
            await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await sl()))
            throw new Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        startPingTimeout() {
          var t, e, r, i, n;
          if ($n())
            try {
              null !=
                (e = null == (t = this.provider) ? void 0 : t.connection) &&
                e.socket &&
                (null ==
                  (n =
                    null ==
                    (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
                  n.once("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (s) {
              this.logger.warn(s);
            }
        }
        isConnectionStalled(t) {
          return this.staleConnectionErrors.some((e) => t.includes(e));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const t = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new Bl(
            new zl(
              ns({
                sdkVersion: "2.12.2",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: t,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(t) {
          const { topic: e, message: r } = t;
          await this.messages.set(e, r);
        }
        async shouldIgnoreMessageEvent(t) {
          const { topic: e, message: r } = t;
          if (!r || 0 === r.length)
            return (
              this.logger.debug("Ignoring invalid/empty message: ".concat(r)),
              !0
            );
          if (!(await this.subscriber.isSubscribed(e)))
            return (
              this.logger.debug(
                "Ignoring message for non-subscribed topic ".concat(e)
              ),
              !0
            );
          const i = this.messages.has(e, r);
          return (
            i && this.logger.debug("Ignoring duplicate message: ".concat(r)), i
          );
        }
        async onProviderPayload(t) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: t,
            }),
            Ul(t))
          ) {
            if (!t.method.endsWith("_subscription")) return;
            const e = t.params,
              { topic: r, message: i, publishedAt: n } = e.data,
              s = { topic: r, message: i, publishedAt: n };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((t, e) => {
                  for (var r in e || (e = {})) Rp.call(e, r) && Cp(t, r, e[r]);
                  if (Pp) for (var r of Pp(e)) Tp.call(e, r) && Cp(t, r, e[r]);
                  return t;
                })({ type: "event", event: e.id }, s)
              ),
              this.events.emit(e.id, s),
              await this.acknowledgePayload(t),
              await this.onMessageEvent(s);
          } else Ll(t) && this.events.emit(Ld, t);
        }
        async onMessageEvent(t) {
          (await this.shouldIgnoreMessageEvent(t)) ||
            (this.events.emit(Ud, t), await this.recordMessageEvent(t));
        }
        async acknowledgePayload(t) {
          const e = El(t.id, !0);
          await this.provider.connection.send(e);
        }
        unregisterProviderListeners() {
          this.provider.off(zd, this.onPayloadHandler),
            this.provider.off(Fd, this.onConnectHandler),
            this.provider.off(Kd, this.onDisconnectHandler),
            this.provider.off(Hd, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          let t = await sl();
          ol(async (e) => {
            t !== e &&
              ((t = e),
              e
                ? await this.restartTransport().catch((t) =>
                    this.logger.error(t)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          await this.subscriber.stop(),
            this.events.emit(Dd),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              setTimeout(async () => {
                await this.transportOpen().catch((t) => this.logger.error(t));
              }, dt.toMiliseconds(Vd));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            !this.connected &&
              (this.connectionAttemptInProgress &&
                (await new Promise((t) => {
                  const e = setInterval(() => {
                    this.connected && (clearInterval(e), t());
                  }, this.connectionStatusPollingInterval);
                })),
              await this.transportOpen());
        }
      }
      var Lp = Object.defineProperty,
        kp = Object.getOwnPropertySymbols,
        Dp = Object.prototype.hasOwnProperty,
        Bp = Object.prototype.propertyIsEnumerable,
        qp = (t, e, r) =>
          e in t
            ? Lp(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        jp = (t, e) => {
          for (var r in e || (e = {})) Dp.call(e, r) && qp(t, r, e[r]);
          if (kp) for (var r of kp(e)) Bp.call(e, r) && qp(t, r, e[r]);
          return t;
        };
      class zp extends Be {
        constructor(t, e, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Md,
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0;
          super(t, e, r, i),
            (this.core = t),
            (this.logger = e),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Md),
            (this.recentlyDeleted = []),
            (this.recentlyDeletedLimit = 200),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((t) => {
                  this.getKey && null !== t && !Ku(t)
                    ? this.map.set(this.getKey(t), t)
                    : (function (t) {
                        var e;
                        return null ==
                          (e = null === t || void 0 === t ? void 0 : t.proposer)
                          ? void 0
                          : e.publicKey;
                      })(t)
                    ? this.map.set(t.id, t)
                    : (function (t) {
                        return null === t || void 0 === t ? void 0 : t.topic;
                      })(t) && this.map.set(t.topic, t);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (t, e) => {
              this.isInitialized(),
                this.map.has(t)
                  ? await this.update(t, e)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: t,
                      value: e,
                    }),
                    this.map.set(t, e),
                    await this.persist());
            }),
            (this.get = (t) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: t }),
              this.getData(t)
            )),
            (this.getAll = (t) => (
              this.isInitialized(),
              t
                ? this.values.filter((e) =>
                    Object.keys(t).every((r) => Hl(e[r], t[r]))
                  )
                : this.values
            )),
            (this.update = async (t, e) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: t,
                  update: e,
                });
              const r = jp(jp({}, this.getData(t)), e);
              this.map.set(t, r), await this.persist();
            }),
            (this.delete = async (t, e) => {
              this.isInitialized(),
                this.map.has(t) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: t,
                    reason: e,
                  }),
                  this.map.delete(t),
                  this.addToRecentlyDeleted(t),
                  await this.persist());
            }),
            (this.logger = Re(e, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return Pe(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(t) {
          this.recentlyDeleted.push(t),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(t) {
          await this.core.storage.setItem(this.storageKey, t);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(t) {
          const e = this.map.get(t);
          if (!e) {
            if (this.recentlyDeleted.includes(t)) {
              const { message: e } = qu(
                "MISSING_OR_INVALID",
                "Record was recently deleted - "
                  .concat(this.name, ": ")
                  .concat(t)
              );
              throw (this.logger.error(e), new Error(e));
            }
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(t)
            );
            throw (this.logger.error(e), new Error(e));
          }
          return e;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length) return;
            if (this.map.size) {
              const { message: t } = qu("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(t), new Error(t));
            }
            (this.cached = t),
              this.logger.debug(
                "Successfully Restored value for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (t) {
            this.logger.debug("Failed to Restore value for ".concat(this.name)),
              this.logger.error(t);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class Fp {
        constructor(t, e) {
          (this.core = t),
            (this.logger = e),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new N()),
            (this.initialized = !1),
            (this.storagePrefix = Md),
            (this.ignoredPayloadTypes = [cu]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = (t) => {
              let { methods: e } = t;
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async (t) => {
              this.isInitialized();
              const e = du(),
                r = await this.core.crypto.setSymKey(e),
                i = fs(dt.FIVE_MINUTES),
                n = { protocol: "irn" },
                s = { topic: r, expiry: i, relay: n, active: !1 },
                o = Uu({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: e,
                  relay: n,
                  expiryTimestamp: i,
                  methods: null === t || void 0 === t ? void 0 : t.methods,
                });
              return (
                await this.pairings.set(r, s),
                await this.core.relayer.subscribe(r),
                this.core.expirer.set(r, i),
                { topic: r, uri: o }
              );
            }),
            (this.pair = async (t) => {
              this.isInitialized(), this.isValidPair(t);
              const {
                topic: e,
                symKey: r,
                relay: i,
                expiryTimestamp: n,
                methods: s,
              } = Tu(t.uri);
              let o;
              if (
                this.pairings.keys.includes(e) &&
                ((o = this.pairings.get(e)), o.active)
              )
                throw new Error(
                  "Pairing already exists: ".concat(
                    e,
                    ". Please try again with a new connection URI."
                  )
                );
              const a = n || fs(dt.FIVE_MINUTES),
                c = { topic: e, relay: i, expiry: a, active: !1, methods: s };
              return (
                await this.pairings.set(e, c),
                this.core.expirer.set(e, a),
                t.activatePairing && (await this.activate({ topic: e })),
                this.events.emit(Zd, c),
                this.core.crypto.keychain.has(e) ||
                  (await this.core.crypto.setSymKey(r, e)),
                await this.core.relayer.subscribe(e, { relay: i }),
                c
              );
            }),
            (this.activate = async (t) => {
              let { topic: e } = t;
              this.isInitialized();
              const r = fs(dt.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: r }),
                this.core.expirer.set(e, r);
            }),
            (this.ping = async (t) => {
              this.isInitialized(), await this.isValidPing(t);
              const { topic: e } = t;
              if (this.pairings.keys.includes(e)) {
                const t = await this.sendRequest(e, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: n } = cs();
                this.events.once(ps("pairing_ping", t), (t) => {
                  let { error: e } = t;
                  e ? n(e) : i();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async (t) => {
              let { topic: e, expiry: r } = t;
              this.isInitialized(),
                await this.pairings.update(e, { expiry: r });
            }),
            (this.updateMetadata = async (t) => {
              let { topic: e, metadata: r } = t;
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: r });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (t) => {
              this.isInitialized(), await this.isValidDisconnect(t);
              const { topic: e } = t;
              this.pairings.keys.includes(e) &&
                (await this.sendRequest(
                  e,
                  "wc_pairingDelete",
                  ju("USER_DISCONNECTED")
                ),
                await this.deletePairing(e));
            }),
            (this.sendRequest = async (t, e, r) => {
              const i = Al(e, r),
                n = await this.core.crypto.encode(t, i),
                s = Xd[e].req;
              return (
                this.core.history.set(t, i),
                this.core.relayer.publish(t, n, s),
                i.id
              );
            }),
            (this.sendResult = async (t, e, r) => {
              const i = El(t, r),
                n = await this.core.crypto.encode(e, i),
                s = await this.core.history.get(e, t),
                o = Xd[s.request.method].res;
              await this.core.relayer.publish(e, n, o),
                await this.core.history.resolve(i);
            }),
            (this.sendError = async (t, e, r) => {
              const i = Sl(t, r),
                n = await this.core.crypto.encode(e, i),
                s = await this.core.history.get(e, t),
                o = Xd[s.request.method]
                  ? Xd[s.request.method].res
                  : Xd.unregistered_method.res;
              await this.core.relayer.publish(e, n, o),
                await this.core.history.resolve(i);
            }),
            (this.deletePairing = async (t, e) => {
              await this.core.relayer.unsubscribe(t),
                await Promise.all([
                  this.pairings.delete(t, ju("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(t),
                  e ? Promise.resolve() : this.core.expirer.del(t),
                ]);
            }),
            (this.cleanup = async () => {
              const t = this.pairings.getAll().filter((t) => ds(t.expiry));
              await Promise.all(t.map((t) => this.deletePairing(t.topic)));
            }),
            (this.onRelayEventRequest = (t) => {
              const { topic: e, payload: r } = t;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(e, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(e, r);
                default:
                  return this.onUnknownRpcMethodRequest(e, r);
              }
            }),
            (this.onRelayEventResponse = async (t) => {
              const { topic: e, payload: r } = t,
                i = (await this.core.history.get(e, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(e, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            (this.onPairingPingRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidPing({ topic: t }),
                  await this.sendResult(r, t, !0),
                  this.events.emit(ep, { id: r, topic: t });
              } catch (i) {
                await this.sendError(r, t, i), this.logger.error(i);
              }
            }),
            (this.onPairingPingResponse = (t, e) => {
              const { id: r } = e;
              setTimeout(() => {
                kl(e)
                  ? this.events.emit(ps("pairing_ping", r), {})
                  : Dl(e) &&
                    this.events.emit(ps("pairing_ping", r), { error: e.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidDisconnect({ topic: t }),
                  await this.deletePairing(t),
                  this.events.emit(tp, { id: r, topic: t });
              } catch (i) {
                await this.sendError(r, t, i), this.logger.error(i);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (t, e) => {
              const { id: r, method: i } = e;
              try {
                if (this.registeredMethods.includes(i)) return;
                const e = ju("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, t, e), this.logger.error(e);
              } catch (n) {
                await this.sendError(r, t, n), this.logger.error(n);
              }
            }),
            (this.onUnknownRpcMethodResponse = (t) => {
              this.registeredMethods.includes(t) ||
                this.logger.error(ju("WC_METHOD_UNSUPPORTED", t));
            }),
            (this.isValidPair = (t) => {
              var e;
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "pair() params: ".concat(t)
                );
                throw new Error(e);
              }
              if (
                !(function (t) {
                  if (Hu(t, !1))
                    try {
                      return typeof new URL(t) < "u";
                    } catch {
                      return !1;
                    }
                  return !1;
                })(t.uri)
              ) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "pair() uri: ".concat(t.uri)
                );
                throw new Error(e);
              }
              const r = Tu(t.uri);
              if (
                null == (e = null === r || void 0 === r ? void 0 : r.relay) ||
                !e.protocol
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw new Error(t);
              }
              if (null == r || !r.symKey) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw new Error(t);
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                dt.toMiliseconds(
                  null === r || void 0 === r ? void 0 : r.expiryTimestamp
                ) < Date.now()
              ) {
                const { message: t } = qu(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "ping() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidPairingTopic(e);
            }),
            (this.isValidDisconnect = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "disconnect() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidPairingTopic(e);
            }),
            (this.isValidPairingTopic = async (t) => {
              if (!Hu(t, !1)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "pairing topic should be a string: ".concat(t)
                );
                throw new Error(e);
              }
              if (!this.pairings.keys.includes(t)) {
                const { message: e } = qu(
                  "NO_MATCHING_KEY",
                  "pairing topic doesn't exist: ".concat(t)
                );
                throw new Error(e);
              }
              if (ds(this.pairings.get(t).expiry)) {
                await this.deletePairing(t);
                const { message: e } = qu(
                  "EXPIRED",
                  "pairing topic: ".concat(t)
                );
                throw new Error(e);
              }
            }),
            (this.core = t),
            (this.logger = Re(e, this.name)),
            (this.pairings = new zp(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return Pe(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(Ud, async (t) => {
            const { topic: e, message: r } = t;
            if (
              !this.pairings.keys.includes(e) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              return;
            const i = await this.core.crypto.decode(e, r);
            try {
              Ul(i)
                ? (this.core.history.set(e, i),
                  this.onRelayEventRequest({ topic: e, payload: i }))
                : Ll(i) &&
                  (await this.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: e, payload: i }),
                  this.core.history.delete(e, i.id));
            } catch (n) {
              this.logger.error(n);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(cp, async (t) => {
            const { topic: e } = ls(t.target);
            e &&
              this.pairings.keys.includes(e) &&
              (await this.deletePairing(e, !0),
              this.events.emit($d, { topic: e }));
          });
        }
      }
      class Kp extends Ue {
        constructor(t, e) {
          super(t, e),
            (this.core = t),
            (this.logger = e),
            (this.records = new Map()),
            (this.events = new M.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Md),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((t) => this.records.set(t.id, t)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (t, e, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: t,
                  request: e,
                  chainId: r,
                }),
                this.records.has(e.id))
              )
                return;
              const i = {
                id: e.id,
                topic: t,
                request: { method: e.method, params: e.params || null },
                chainId: r,
                expiry: fs(dt.THIRTY_DAYS),
              };
              this.records.set(i.id, i),
                this.persist(),
                this.events.emit(rp, i);
            }),
            (this.resolve = async (t) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: t,
                }),
                !this.records.has(t.id))
              )
                return;
              const e = await this.getRecord(t.id);
              typeof e.response > "u" &&
                ((e.response = Dl(t)
                  ? { error: t.error }
                  : { result: t.result }),
                this.records.set(e.id, e),
                this.persist(),
                this.events.emit(ip, e));
            }),
            (this.get = async (t, e) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: t,
                id: e,
              }),
              await this.getRecord(e)
            )),
            (this.delete = (t, e) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: e }),
                this.values.forEach((r) => {
                  if (r.topic === t) {
                    if (typeof e < "u" && r.id !== e) return;
                    this.records.delete(r.id), this.events.emit(np, r);
                  }
                }),
                this.persist();
            }),
            (this.exists = async (t, e) => (
              this.isInitialized(),
              !!this.records.has(e) && (await this.getRecord(e)).topic === t
            )),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.logger = Re(e, this.name));
        }
        get context() {
          return Pe(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const t = [];
          return (
            this.values.forEach((e) => {
              if (typeof e.response < "u") return;
              const r = {
                topic: e.topic,
                request: Al(e.request.method, e.request.params, e.id),
                chainId: e.chainId,
              };
              return t.push(r);
            }),
            t
          );
        }
        async setJsonRpcRecords(t) {
          await this.core.storage.setItem(this.storageKey, t);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(t) {
          this.isInitialized();
          const e = this.records.get(t);
          if (!e) {
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(t)
            );
            throw new Error(e);
          }
          return e;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(sp);
        }
        async restore() {
          try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length) return;
            if (this.records.size) {
              const { message: t } = qu("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(t), new Error(t));
            }
            (this.cached = t),
              this.logger.debug(
                "Successfully Restored records for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (t) {
            this.logger.debug(
              "Failed to Restore records for ".concat(this.name)
            ),
              this.logger.error(t);
          }
        }
        registerEventListeners() {
          this.events.on(rp, (t) => {
            const e = rp;
            this.logger.info("Emitting ".concat(e)),
              this.logger.debug({ type: "event", event: e, record: t });
          }),
            this.events.on(ip, (t) => {
              const e = ip;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, record: t });
            }),
            this.events.on(np, (t) => {
              const e = np;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, record: t });
            }),
            this.core.heartbeat.on(ct.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let t = !1;
            this.records.forEach((e) => {
              dt.toMiliseconds(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(
                  "Deleting expired history log: ".concat(e.id)
                ),
                this.records.delete(e.id),
                this.events.emit(np, e, !1),
                (t = !0));
            }),
              t && this.persist();
          } catch (t) {
            this.logger.warn(t);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class Hp extends je {
        constructor(t, e) {
          super(t, e),
            (this.core = t),
            (this.logger = e),
            (this.expirations = new Map()),
            (this.events = new M.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Md),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((t) => this.expirations.set(t.target, t)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (t) => {
              try {
                const e = this.formatTarget(t);
                return typeof this.getExpiration(e) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (t, e) => {
              this.isInitialized();
              const r = this.formatTarget(t),
                i = { target: r, expiry: e };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(op, { target: r, expiration: i });
            }),
            (this.get = (t) => {
              this.isInitialized();
              const e = this.formatTarget(t);
              return this.getExpiration(e);
            }),
            (this.del = (t) => {
              if ((this.isInitialized(), this.has(t))) {
                const e = this.formatTarget(t),
                  r = this.getExpiration(e);
                this.expirations.delete(e),
                  this.events.emit(ap, { target: e, expiration: r });
              }
            }),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.logger = Re(e, this.name));
        }
        get context() {
          return Pe(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(t) {
          if ("string" == typeof t)
            return (function (t) {
              return us("topic", t);
            })(t);
          if ("number" == typeof t)
            return (function (t) {
              return us("id", t);
            })(t);
          const { message: e } = qu(
            "UNKNOWN_TYPE",
            "Target type: ".concat(typeof t)
          );
          throw new Error(e);
        }
        async setExpirations(t) {
          await this.core.storage.setItem(this.storageKey, t);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(hp);
        }
        async restore() {
          try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length) return;
            if (this.expirations.size) {
              const { message: t } = qu("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(t), new Error(t));
            }
            (this.cached = t),
              this.logger.debug(
                "Successfully Restored expirations for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (t) {
            this.logger.debug(
              "Failed to Restore expirations for ".concat(this.name)
            ),
              this.logger.error(t);
          }
        }
        getExpiration(t) {
          const e = this.expirations.get(t);
          if (!e) {
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(t)
            );
            throw (this.logger.warn(e), new Error(e));
          }
          return e;
        }
        checkExpiry(t, e) {
          const { expiry: r } = e;
          dt.toMiliseconds(r) - Date.now() <= 0 && this.expire(t, e);
        }
        expire(t, e) {
          this.expirations.delete(t),
            this.events.emit(cp, { target: t, expiration: e });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((t, e) => this.checkExpiry(e, t));
        }
        registerEventListeners() {
          this.core.heartbeat.on(ct.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(op, (t) => {
              const e = op;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, data: t }),
                this.persist();
            }),
            this.events.on(cp, (t) => {
              const e = cp;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, data: t }),
                this.persist();
            }),
            this.events.on(ap, (t) => {
              const e = ap;
              this.logger.info("Emitting ".concat(e)),
                this.logger.debug({ type: "event", event: e, data: t }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      let Vp = class extends ze {
          constructor(t, e) {
            super(t, e),
              (this.projectId = t),
              (this.logger = e),
              (this.name = up),
              (this.initialized = !1),
              (this.queue = []),
              (this.verifyDisabled = !1),
              (this.init = async (t) => {
                if (this.verifyDisabled || ts() || !es()) return;
                const e = this.getVerifyUrl(
                  null === t || void 0 === t ? void 0 : t.verifyUrl
                );
                this.verifyUrl !== e && this.removeIframe(),
                  (this.verifyUrl = e);
                try {
                  await this.createIframe();
                } catch (r) {
                  this.logger.info(
                    "Verify iframe failed to load: ".concat(this.verifyUrl)
                  ),
                    this.logger.info(r);
                }
                if (!this.initialized) {
                  this.removeIframe(), (this.verifyUrl = fp);
                  try {
                    await this.createIframe();
                  } catch (r) {
                    this.logger.info(
                      "Verify iframe failed to load: ".concat(this.verifyUrl)
                    ),
                      this.logger.info(r),
                      (this.verifyDisabled = !0);
                  }
                }
              }),
              (this.register = async (t) => {
                this.initialized
                  ? this.sendPost(t.attestationId)
                  : (this.addToQueue(t.attestationId), await this.init());
              }),
              (this.resolve = async (t) => {
                if (this.isDevEnv) return "";
                const e = this.getVerifyUrl(
                  null === t || void 0 === t ? void 0 : t.verifyUrl
                );
                let r;
                try {
                  r = await this.fetchAttestation(t.attestationId, e);
                } catch (i) {
                  this.logger.info(
                    "failed to resolve attestation: "
                      .concat(t.attestationId, " from url: ")
                      .concat(e)
                  ),
                    this.logger.info(i),
                    (r = await this.fetchAttestation(t.attestationId, fp));
                }
                return r;
              }),
              (this.fetchAttestation = async (t, e) => {
                this.logger.info(
                  "resolving attestation: ".concat(t, " from url: ").concat(e)
                );
                const r = this.startAbortTimer(2 * dt.ONE_SECOND),
                  i = await fetch("".concat(e, "/attestation/").concat(t), {
                    signal: this.abortController.signal,
                  });
                return (
                  clearTimeout(r), 200 === i.status ? await i.json() : void 0
                );
              }),
              (this.addToQueue = (t) => {
                this.queue.push(t);
              }),
              (this.processQueue = () => {
                0 !== this.queue.length &&
                  (this.queue.forEach((t) => this.sendPost(t)),
                  (this.queue = []));
              }),
              (this.sendPost = (t) => {
                var e;
                try {
                  if (!this.iframe) return;
                  null == (e = this.iframe.contentWindow) ||
                    e.postMessage(t, "*"),
                    this.logger.info(
                      "postMessage sent: ".concat(t, " ").concat(this.verifyUrl)
                    );
                } catch {}
              }),
              (this.createIframe = async () => {
                let t;
                const e = (r) => {
                  "verify_ready" === r.data &&
                    (this.onInit(),
                    window.removeEventListener("message", e),
                    t());
                };
                await Promise.race([
                  new Promise((r) => {
                    const i = document.getElementById(up);
                    if (i) return (this.iframe = i), this.onInit(), r();
                    window.addEventListener("message", e);
                    const n = document.createElement("iframe");
                    (n.id = up),
                      (n.src = ""
                        .concat(this.verifyUrl, "/")
                        .concat(this.projectId)),
                      (n.style.display = "none"),
                      document.body.append(n),
                      (this.iframe = n),
                      (t = r);
                  }),
                  new Promise((t, r) =>
                    setTimeout(() => {
                      window.removeEventListener("message", e),
                        r("verify iframe load timeout");
                    }, dt.toMiliseconds(dt.FIVE_SECONDS))
                  ),
                ]);
              }),
              (this.onInit = () => {
                (this.initialized = !0), this.processQueue();
              }),
              (this.removeIframe = () => {
                this.iframe &&
                  (this.iframe.remove(),
                  (this.iframe = void 0),
                  (this.initialized = !1));
              }),
              (this.getVerifyUrl = (t) => {
                let e = t || lp;
                return (
                  dp.includes(e) ||
                    (this.logger.info(
                      "verify url: "
                        .concat(
                          e,
                          ", not included in trusted list, assigning default: "
                        )
                        .concat(lp)
                    ),
                    (e = lp)),
                  e
                );
              }),
              (this.logger = Re(e, this.name)),
              (this.verifyUrl = lp),
              (this.abortController = new AbortController()),
              (this.isDevEnv =
                $n() &&
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.IS_VITEST);
          }
          get context() {
            return Pe(this.logger);
          }
          startAbortTimer(t) {
            return (
              (this.abortController = new AbortController()),
              setTimeout(
                () => this.abortController.abort(),
                dt.toMiliseconds(t)
              )
            );
          }
        },
        Gp = class extends Fe {
          constructor(t, e) {
            super(t, e),
              (this.projectId = t),
              (this.logger = e),
              (this.context = "echo"),
              (this.registerDeviceToken = async (t) => {
                const {
                    clientId: e,
                    token: r,
                    notificationType: i,
                    enableEncrypted: n = !1,
                  } = t,
                  s = ""
                    .concat("https://echo.walletconnect.com", "/")
                    .concat(this.projectId, "/clients");
                await Yl(s, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    client_id: e,
                    type: i,
                    token: r,
                    always_raw: n,
                  }),
                });
              }),
              (this.logger = Re(e, this.context));
          }
        };
      var Wp = Object.defineProperty,
        Yp = Object.getOwnPropertySymbols,
        Qp = Object.prototype.hasOwnProperty,
        Jp = Object.prototype.propertyIsEnumerable,
        Xp = (t, e, r) =>
          e in t
            ? Wp(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Zp = (t, e) => {
          for (var r in e || (e = {})) Qp.call(e, r) && Xp(t, r, e[r]);
          if (Yp) for (var r of Yp(e)) Jp.call(e, r) && Xp(t, r, e[r]);
          return t;
        };
      const $p = class t extends Ce {
          constructor(t) {
            var e;
            super(t),
              (this.protocol = "wc"),
              (this.version = 2),
              (this.name = Id),
              (this.events = new M.EventEmitter()),
              (this.initialized = !1),
              (this.on = (t, e) => this.events.on(t, e)),
              (this.once = (t, e) => this.events.once(t, e)),
              (this.off = (t, e) => this.events.off(t, e)),
              (this.removeListener = (t, e) =>
                this.events.removeListener(t, e)),
              (this.projectId =
                null === t || void 0 === t ? void 0 : t.projectId),
              (this.relayUrl =
                (null === t || void 0 === t ? void 0 : t.relayUrl) || Td),
              (this.customStoragePrefix =
                null != t && t.customStoragePrefix
                  ? ":".concat(t.customStoragePrefix)
                  : "");
            const r = xe({
                level:
                  "string" ==
                    typeof (null === t || void 0 === t ? void 0 : t.logger) &&
                  t.logger
                    ? t.logger
                    : Nd,
              }),
              { logger: i, chunkLoggerController: n } = Te({
                opts: r,
                maxSizeInBytes:
                  null === t || void 0 === t ? void 0 : t.maxLogBlobSizeInBytes,
                loggerOverride: null === t || void 0 === t ? void 0 : t.logger,
              });
            (this.logChunkController = n),
              null != (e = this.logChunkController) &&
                e.downloadLogsBlobInBrowser &&
                (window.downloadLogsBlobInBrowser = async () => {
                  var t, e;
                  null != (t = this.logChunkController) &&
                    t.downloadLogsBlobInBrowser &&
                    (null == (e = this.logChunkController) ||
                      e.downloadLogsBlobInBrowser({
                        clientId: await this.crypto.getClientId(),
                      }));
                }),
              (this.logger = Re(i, this.name)),
              (this.heartbeat = new ct.HeartBeat()),
              (this.crypto = new gp(
                this,
                this.logger,
                null === t || void 0 === t ? void 0 : t.keychain
              )),
              (this.history = new Kp(this, this.logger)),
              (this.expirer = new Hp(this, this.logger)),
              (this.storage =
                null != t && t.storage
                  ? t.storage
                  : new at(
                      Zp(
                        Zp({}, Od),
                        null === t || void 0 === t ? void 0 : t.storageOptions
                      )
                    )),
              (this.relayer = new Up({
                core: this,
                logger: this.logger,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
              })),
              (this.pairing = new Fp(this, this.logger)),
              (this.verify = new Vp(this.projectId || "", this.logger)),
              (this.echoClient = new Gp(this.projectId || "", this.logger));
          }
          static async init(e) {
            const r = new t(e);
            await r.initialize();
            const i = await r.crypto.getClientId();
            return await r.storage.setItem("WALLETCONNECT_CLIENT_ID", i), r;
          }
          get context() {
            return Pe(this.logger);
          }
          async start() {
            this.initialized || (await this.initialize());
          }
          async getLogsBlob() {
            var t;
            return null == (t = this.logChunkController)
              ? void 0
              : t.logsToBlob({ clientId: await this.crypto.getClientId() });
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.crypto.init(),
                await this.history.init(),
                await this.expirer.init(),
                await this.relayer.init(),
                await this.heartbeat.init(),
                await this.pairing.init(),
                (this.initialized = !0),
                this.logger.info("Core Initialization Success");
            } catch (t) {
              throw (
                (this.logger.warn(
                  "Core Initialization Failure at epoch ".concat(Date.now()),
                  t
                ),
                this.logger.error(t.message),
                t)
              );
            }
          }
        },
        tg = "client",
        eg = "".concat("wc", "@").concat(2, ":").concat(tg, ":"),
        rg = tg,
        ig = "error",
        ng = "WALLETCONNECT_DEEPLINK_CHOICE",
        sg = dt.SEVEN_DAYS,
        og = {
          wc_sessionPropose: {
            req: { ttl: dt.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: dt.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: dt.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: dt.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: dt.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: dt.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: dt.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: dt.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: dt.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: dt.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: dt.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: dt.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: dt.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: dt.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: dt.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: dt.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: dt.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: dt.ONE_HOUR, prompt: !1, tag: 1117 },
          },
        },
        ag = { min: dt.FIVE_MINUTES, max: dt.SEVEN_DAYS },
        cg = "IDLE",
        hg = "ACTIVE",
        ug = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
        lg = "".concat("wc", "@", 1.5, ":").concat("auth", ":"),
        fg = "".concat(lg, ":PUB_KEY");
      var dg = Object.defineProperty,
        pg = Object.defineProperties,
        gg = Object.getOwnPropertyDescriptors,
        mg = Object.getOwnPropertySymbols,
        yg = Object.prototype.hasOwnProperty,
        vg = Object.prototype.propertyIsEnumerable,
        wg = (t, e, r) =>
          e in t
            ? dg(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        bg = (t, e) => {
          for (var r in e || (e = {})) yg.call(e, r) && wg(t, r, e[r]);
          if (mg) for (var r of mg(e)) vg.call(e, r) && wg(t, r, e[r]);
          return t;
        },
        _g = (t, e) => pg(t, gg(e));
      class Ag extends He {
        constructor(t) {
          var e;
          super(t),
            (e = this),
            (this.name = "engine"),
            (this.events = new N()),
            (this.initialized = !1),
            (this.requestQueue = { state: cg, queue: [] }),
            (this.sessionRequestQueue = { state: cg, queue: [] }),
            (this.requestQueueDelay = dt.ONE_SECOND),
            (this.expectedPairingMethodMap = new Map()),
            (this.recentlyDeletedMap = new Map()),
            (this.recentlyDeletedLimit = 200),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(og) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, dt.toMiliseconds(this.requestQueueDelay)));
            }),
            (this.connect = async (t) => {
              await this.isInitialized();
              const e = _g(bg({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {},
              });
              await this.isValidConnect(e);
              const {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: n,
                sessionProperties: s,
                relays: o,
              } = e;
              let a,
                c = r,
                h = !1;
              try {
                c && (h = this.client.core.pairing.pairings.get(c).active);
              } catch (v) {
                throw (
                  (this.client.logger.error(
                    "connect() -> pairing.get(".concat(c, ") failed")
                  ),
                  v)
                );
              }
              if (!c || !h) {
                const { topic: t, uri: e } =
                  await this.client.core.pairing.create();
                (c = t), (a = e);
              }
              if (!c) {
                const { message: t } = qu(
                  "NO_MATCHING_KEY",
                  "connect() pairing topic: ".concat(c)
                );
                throw new Error(t);
              }
              const u = await this.client.core.crypto.generateKeyPair(),
                l = og.wc_sessionPropose.req.ttl || dt.FIVE_MINUTES,
                f = fs(l),
                d = bg(
                  {
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    relays:
                      null !== o && void 0 !== o ? o : [{ protocol: "irn" }],
                    proposer: { publicKey: u, metadata: this.client.metadata },
                    expiryTimestamp: f,
                  },
                  s && { sessionProperties: s }
                ),
                { reject: p, resolve: g, done: m } = cs(l, "Proposal expired");
              this.events.once(ps("session_connect"), async (t) => {
                let { error: e, session: r } = t;
                if (e) p(e);
                else if (r) {
                  r.self.publicKey = u;
                  const t = _g(bg({}, r), {
                    requiredNamespaces: d.requiredNamespaces,
                    optionalNamespaces: d.optionalNamespaces,
                  });
                  await this.client.session.set(r.topic, t),
                    await this.setExpiry(r.topic, r.expiry),
                    c &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: c,
                        metadata: r.peer.metadata,
                      })),
                    g(t);
                }
              });
              const y = await this.sendRequest({
                topic: c,
                method: "wc_sessionPropose",
                params: d,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(y, bg({ id: y }, d)),
                { uri: a, approval: m }
              );
            }),
            (this.pair = async (t) => {
              await this.isInitialized();
              try {
                return await this.client.core.pairing.pair(t);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            (this.approve = async (t) => {
              await this.isInitialized();
              try {
                await this.isValidApprove(t);
              } catch (m) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  m)
                );
              }
              const {
                id: e,
                relayProtocol: r,
                namespaces: i,
                sessionProperties: n,
                sessionConfig: s,
              } = t;
              let o;
              try {
                o = this.client.proposal.get(e);
              } catch (m) {
                throw (
                  (this.client.logger.error(
                    "approve() -> proposal.get(".concat(e, ") failed")
                  ),
                  m)
                );
              }
              let {
                pairingTopic: a,
                proposer: c,
                requiredNamespaces: h,
                optionalNamespaces: u,
              } = o;
              a = a || "";
              const l = await this.client.core.crypto.generateKeyPair(),
                f = c.publicKey,
                d = await this.client.core.crypto.generateSharedKey(l, f),
                p = bg(
                  bg(
                    {
                      relay: {
                        protocol: null !== r && void 0 !== r ? r : "irn",
                      },
                      namespaces: i,
                      pairingTopic: a,
                      controller: {
                        publicKey: l,
                        metadata: this.client.metadata,
                      },
                      expiry: fs(sg),
                    },
                    n && { sessionProperties: n }
                  ),
                  s && { sessionConfig: s }
                );
              await this.client.core.relayer.subscribe(d);
              const g = _g(bg({}, p), {
                topic: d,
                requiredNamespaces: h,
                optionalNamespaces: u,
                pairingTopic: a,
                acknowledged: !1,
                self: p.controller,
                peer: { publicKey: c.publicKey, metadata: c.metadata },
                controller: l,
              });
              await this.client.session.set(d, g);
              try {
                await this.sendResult({
                  id: e,
                  topic: a,
                  result: {
                    relay: { protocol: null !== r && void 0 !== r ? r : "irn" },
                    responderPublicKey: l,
                  },
                  throwOnFailedPublish: !0,
                }),
                  await this.sendRequest({
                    topic: d,
                    method: "wc_sessionSettle",
                    params: p,
                    throwOnFailedPublish: !0,
                  });
              } catch (m) {
                throw (
                  (this.client.logger.error(m),
                  this.client.session.delete(d, ju("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(d),
                  m)
                );
              }
              return (
                await this.client.core.pairing.updateMetadata({
                  topic: a,
                  metadata: c.metadata,
                }),
                await this.client.proposal.delete(e, ju("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: a }),
                await this.setExpiry(d, fs(sg)),
                {
                  topic: d,
                  acknowledged: () =>
                    new Promise((t) =>
                      setTimeout(() => t(this.client.session.get(d)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (t) => {
              await this.isInitialized();
              try {
                await this.isValidReject(t);
              } catch (n) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  n)
                );
              }
              const { id: e, reason: r } = t;
              let i;
              try {
                i = this.client.proposal.get(e).pairingTopic;
              } catch (n) {
                throw (
                  (this.client.logger.error(
                    "reject() -> proposal.get(".concat(e, ") failed")
                  ),
                  n)
                );
              }
              i &&
                (await this.sendError({ id: e, topic: i, error: r }),
                await this.client.proposal.delete(e, ju("USER_DISCONNECTED")));
            }),
            (this.update = async (t) => {
              await this.isInitialized();
              try {
                await this.isValidUpdate(t);
              } catch (h) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  h)
                );
              }
              const { topic: e, namespaces: r } = t,
                { done: i, resolve: n, reject: s } = cs(),
                o = bl(),
                a = _l().toString(),
                c = this.client.session.get(e).namespaces;
              return (
                this.events.once(ps("session_update", o), (t) => {
                  let { error: e } = t;
                  e ? s(e) : n();
                }),
                await this.client.session.update(e, { namespaces: r }),
                this.sendRequest({
                  topic: e,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((t) => {
                  this.client.logger.error(t),
                    this.client.session.update(e, { namespaces: c }),
                    s(t);
                }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (t) => {
              await this.isInitialized();
              try {
                await this.isValidExtend(t);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  o)
                );
              }
              const { topic: e } = t,
                r = bl(),
                { done: i, resolve: n, reject: s } = cs();
              return (
                this.events.once(ps("session_extend", r), (t) => {
                  let { error: e } = t;
                  e ? s(e) : n();
                }),
                await this.setExpiry(e, fs(sg)),
                this.sendRequest({
                  topic: e,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((t) => {
                  s(t);
                }),
                { acknowledged: i }
              );
            }),
            (this.request = async (t) => {
              await this.isInitialized();
              try {
                await this.isValidRequest(t);
              } catch (l) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  l)
                );
              }
              const {
                  chainId: e,
                  request: r,
                  topic: i,
                  expiry: n = og.wc_sessionRequest.req.ttl,
                } = t,
                s = this.client.session.get(i),
                o = bl(),
                a = _l().toString(),
                {
                  done: c,
                  resolve: h,
                  reject: u,
                } = cs(n, "Request expired. Please try again.");
              return (
                this.events.once(ps("session_request", o), (t) => {
                  let { error: e, result: r } = t;
                  e ? u(e) : h(r);
                }),
                await Promise.all([
                  new Promise(async (t) => {
                    await this.sendRequest({
                      clientRpcId: o,
                      relayRpcId: a,
                      topic: i,
                      method: "wc_sessionRequest",
                      params: {
                        request: _g(bg({}, r), { expiryTimestamp: fs(n) }),
                        chainId: e,
                      },
                      expiry: n,
                      throwOnFailedPublish: !0,
                    }).catch((t) => u(t)),
                      this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: r,
                        chainId: e,
                        id: o,
                      }),
                      t();
                  }),
                  new Promise(async (r) => {
                    var n;
                    if (null == (n = s.sessionConfig) || !n.disableDeepLink) {
                      const r = await (async function (e, r) {
                        try {
                          return (
                            (await e.getItem(r)) ||
                            (es() ? localStorage.getItem(r) : void 0)
                          );
                        } catch (t) {
                          console.error(t);
                        }
                      })(this.client.core.storage, ng);
                      !(async function (t) {
                        let { id: r, topic: i, wcDeepLink: n } = t;
                        try {
                          var s;
                          if (!n) return;
                          let t =
                            null ===
                              (s = "string" == typeof n ? JSON.parse(n) : n) ||
                            void 0 === s
                              ? void 0
                              : s.href;
                          if ("string" != typeof t) return;
                          t.endsWith("/") && (t = t.slice(0, -1));
                          const e = ""
                              .concat(t, "/wc?requestId=")
                              .concat(r, "&sessionTopic=")
                              .concat(i),
                            o = rs();
                          o === Xn.browser
                            ? e.startsWith("https://") ||
                              e.startsWith("http://")
                              ? window.open(e, "_blank", "noreferrer noopener")
                              : window.open(e, "_self", "noreferrer noopener")
                            : o === Xn.reactNative &&
                              typeof (null == global
                                ? void 0
                                : global.Linking) < "u" &&
                              (await global.Linking.openURL(e));
                        } catch (e) {
                          console.error(e);
                        }
                      })({ id: o, topic: i, wcDeepLink: r });
                    }
                    r();
                  }),
                  c(),
                ]).then((t) => t[2])
              );
            }),
            (this.respond = async (t) => {
              await this.isInitialized(), await this.isValidRespond(t);
              const { topic: e, response: r } = t,
                { id: i } = r;
              kl(r)
                ? await this.sendResult({
                    id: i,
                    topic: e,
                    result: r.result,
                    throwOnFailedPublish: !0,
                  })
                : Dl(r) &&
                  (await this.sendError({ id: i, topic: e, error: r.error })),
                this.cleanupAfterResponse(t);
            }),
            (this.ping = async (t) => {
              await this.isInitialized();
              try {
                await this.isValidPing(t);
              } catch (r) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  r)
                );
              }
              const { topic: e } = t;
              if (this.client.session.keys.includes(e)) {
                const t = bl(),
                  r = _l().toString(),
                  { done: i, resolve: n, reject: s } = cs();
                this.events.once(ps("session_ping", t), (t) => {
                  let { error: e } = t;
                  e ? s(e) : n();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: e,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: t,
                      relayRpcId: r,
                    }),
                    i(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(e) &&
                  (await this.client.core.pairing.ping({ topic: e }));
            }),
            (this.emit = async (t) => {
              await this.isInitialized(), await this.isValidEmit(t);
              const { topic: e, event: r, chainId: i } = t,
                n = _l().toString();
              await this.sendRequest({
                topic: e,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: n,
              });
            }),
            (this.disconnect = async (t) => {
              await this.isInitialized(), await this.isValidDisconnect(t);
              const { topic: e } = t;
              if (this.client.session.keys.includes(e))
                await this.sendRequest({
                  topic: e,
                  method: "wc_sessionDelete",
                  params: ju("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: e, emitEvent: !1 });
              else {
                if (!this.client.core.pairing.pairings.keys.includes(e)) {
                  const { message: t } = qu(
                    "MISMATCHED_TOPIC",
                    "Session or pairing topic not found: ".concat(e)
                  );
                  throw new Error(t);
                }
                await this.client.core.pairing.disconnect({ topic: e });
              }
            }),
            (this.find = (t) => (
              this.isInitialized(),
              this.client.session.getAll().filter((e) =>
                (function (t, e) {
                  const { requiredNamespaces: r } = e,
                    i = Object.keys(t.namespaces),
                    n = Object.keys(r);
                  let s = !0;
                  return (
                    !!ss(n, i) &&
                    (i.forEach((e) => {
                      const {
                          accounts: i,
                          methods: n,
                          events: o,
                        } = t.namespaces[e],
                        a = Lu(i),
                        c = r[e];
                      (!ss(Kn(e, c), a) ||
                        !ss(c.methods, n) ||
                        !ss(c.events, o)) &&
                        (s = !1);
                    }),
                    s)
                  );
                })(e, t)
              )
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.authenticate = async (t) => {
              this.isInitialized(), this.isValidAuthenticate(t);
              const {
                  chains: e,
                  statement: r = "",
                  uri: i,
                  domain: n,
                  nonce: s,
                  type: o,
                  exp: a,
                  nbf: c,
                  methods: h = [],
                } = t,
                u = [...(t.resources || [])],
                { topic: l, uri: f } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: l, uri: f },
              });
              const d = await this.client.core.crypto.generateKeyPair(),
                p = pu(d);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(fg, {
                    responseTopic: p,
                    publicKey: d,
                  }),
                  this.client.auth.pairingTopics.set(p, {
                    topic: p,
                    pairingTopic: l,
                  }),
                ]),
                await this.client.core.relayer.subscribe(p),
                this.client.logger.info(
                  "sending request to new pairing topic: ".concat(l)
                ),
                h.length > 0)
              ) {
                const { namespace: t } = qn(e[0]);
                let r = Zh(t, "request", h);
                ru(u) && (r = $h(r, u.pop())), u.push(r);
              }
              const g = fs(og.wc_sessionPropose.req.ttl),
                m = {
                  authPayload: {
                    type: null !== o && void 0 !== o ? o : "caip122",
                    chains: e,
                    statement: r,
                    aud: i,
                    domain: n,
                    version: "1",
                    nonce: s,
                    iat: new Date().toISOString(),
                    exp: a,
                    nbf: c,
                    resources: u,
                  },
                  requester: { publicKey: d, metadata: this.client.metadata },
                  expiryTimestamp: g,
                },
                y = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: e,
                      methods: [...new Set(["personal_sign", ...h])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  proposer: { publicKey: d, metadata: this.client.metadata },
                  expiryTimestamp: g,
                },
                {
                  done: v,
                  resolve: w,
                  reject: b,
                } = cs(og.wc_sessionAuthenticate.req.ttl, "Request expired"),
                _ = async (t) => {
                  let { error: e, session: r } = t;
                  if ((this.events.off(ps("session_request", E), A), e)) b(e);
                  else if (r) {
                    (r.self.publicKey = d),
                      await this.client.session.set(r.topic, r),
                      await this.setExpiry(r.topic, r.expiry),
                      l &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: l,
                          metadata: r.peer.metadata,
                        }));
                    const t = this.client.session.get(r.topic);
                    w({ session: t });
                  }
                },
                A = async (t) => {
                  if (t.error) {
                    const e = ju(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return t.error.code === e.code
                      ? void 0
                      : (this.events.off(ps("session_connect"), _),
                        b(t.error.message));
                  }
                  this.events.off(ps("session_connect"), _);
                  const { cacaos: e, responder: r } = t.result,
                    i = [],
                    n = [];
                  for (const a of e) {
                    (await Gh({
                      cacao: a,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        a,
                        "Signature verification failed"
                      ),
                      b(
                        ju(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    const { p: t } = a,
                      e = ru(t.resources),
                      r = [Hh(t.iss)],
                      s = Vh(t.iss);
                    if (e) {
                      const t = tu(e),
                        n = eu(e);
                      i.push(...t), r.push(...n);
                    }
                    for (const i of r) n.push("".concat(i, ":").concat(s));
                  }
                  const s = await this.client.core.crypto.generateSharedKey(
                    d,
                    r.publicKey
                  );
                  let o;
                  i.length > 0 &&
                    ((o = {
                      topic: s,
                      acknowledged: !0,
                      self: { publicKey: d, metadata: this.client.metadata },
                      peer: r,
                      controller: r.publicKey,
                      expiry: fs(sg),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: l,
                      namespaces: ku([...new Set(i)], [...new Set(n)]),
                    }),
                    await this.client.core.relayer.subscribe(s),
                    await this.client.session.set(s, o),
                    (o = this.client.session.get(s))),
                    w({ auths: e, session: o });
                },
                E = bl(),
                S = bl();
              this.events.once(ps("session_connect"), _),
                this.events.once(ps("session_request", E), A);
              try {
                await Promise.all([
                  this.sendRequest({
                    topic: l,
                    method: "wc_sessionAuthenticate",
                    params: m,
                    expiry: t.expiry,
                    throwOnFailedPublish: !0,
                    clientRpcId: E,
                  }),
                  this.sendRequest({
                    topic: l,
                    method: "wc_sessionPropose",
                    params: y,
                    expiry: og.wc_sessionPropose.req.ttl,
                    throwOnFailedPublish: !0,
                    clientRpcId: S,
                  }),
                ]);
              } catch (I) {
                throw (
                  (this.events.off(ps("session_connect"), _),
                  this.events.off(ps("session_request", E), A),
                  I)
                );
              }
              return (
                await this.setProposal(S, bg({ id: S }, y)),
                await this.client.auth.requests.set(E, {
                  authPayload: m.authPayload,
                  requester: m.requester,
                  expiryTimestamp: g,
                  id: E,
                  pairingTopic: l,
                  verifyContext: {},
                }),
                { uri: f, response: v }
              );
            }),
            (this.approveSessionAuthenticate = async (t) => {
              this.isInitialized();
              const { id: e, auths: r } = t,
                i = this.getPendingAuthRequest(e);
              if (!i)
                throw new Error(
                  "Could not find pending auth request with id ".concat(e)
                );
              const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = pu(n),
                a = { type: cu, receiverPublicKey: n, senderPublicKey: s },
                c = [],
                h = [];
              for (const f of r) {
                if (
                  !(await Gh({
                    cacao: f,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  const t = ju(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: e,
                      topic: o,
                      error: t,
                      encodeOpts: a,
                    }),
                    new Error(t.message))
                  );
                }
                const { p: t } = f,
                  r = ru(t.resources),
                  i = [Hh(t.iss)],
                  n = Vh(t.iss);
                if (r) {
                  const t = tu(r),
                    e = eu(r);
                  c.push(...t), i.push(...e);
                }
                for (const e of i) h.push("".concat(e, ":").concat(n));
              }
              const u = await this.client.core.crypto.generateSharedKey(s, n);
              let l;
              return (
                (null === c || void 0 === c ? void 0 : c.length) > 0 &&
                  ((l = {
                    topic: u,
                    acknowledged: !0,
                    self: { publicKey: s, metadata: this.client.metadata },
                    peer: { publicKey: n, metadata: i.requester.metadata },
                    controller: n,
                    expiry: fs(sg),
                    authentication: r,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: { protocol: "irn" },
                    pairingTopic: "",
                    namespaces: ku([...new Set(c)], [...new Set(h)]),
                  }),
                  await this.client.core.relayer.subscribe(u),
                  await this.client.session.set(u, l)),
                await this.sendResult({
                  topic: o,
                  id: e,
                  result: {
                    cacaos: r,
                    responder: { publicKey: s, metadata: this.client.metadata },
                  },
                  encodeOpts: a,
                  throwOnFailedPublish: !0,
                }),
                await this.client.auth.requests.delete(e, {
                  message: "fullfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: i.pairingTopic,
                }),
                { session: l }
              );
            }),
            (this.rejectSessionAuthenticate = async (t) => {
              await this.isInitialized();
              const { id: e, reason: r } = t,
                i = this.getPendingAuthRequest(e);
              if (!i)
                throw new Error(
                  "Could not find pending auth request with id ".concat(e)
                );
              const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = pu(n),
                a = { type: cu, receiverPublicKey: n, senderPublicKey: s };
              await this.sendError({
                id: e,
                topic: o,
                error: r,
                encodeOpts: a,
              }),
                await this.client.auth.requests.delete(e, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(e, ju("USER_DISCONNECTED"));
            }),
            (this.formatAuthMessage = (t) => {
              this.isInitialized();
              const { request: e, iss: r } = t;
              return Wh(e, r);
            }),
            (this.cleanupDuplicatePairings = async (t) => {
              if (t.pairingTopic)
                try {
                  const e = this.client.core.pairing.pairings.get(
                      t.pairingTopic
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, n;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (n = r.peerMetadata) ? void 0 : n.url) ===
                            t.peer.metadata.url &&
                          r.topic &&
                          r.topic !== e.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    "Cleaning up ".concat(r.length, " duplicate pairing(s)")
                  ),
                    await Promise.all(
                      r.map((t) =>
                        this.client.core.pairing.disconnect({ topic: t.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (t) => {
              const {
                  topic: e,
                  expirerHasDeleted: r = !1,
                  emitEvent: i = !0,
                  id: n = 0,
                } = t,
                { self: s } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                await this.client.session.delete(e, ju("USER_DISCONNECTED")),
                this.addToRecentlyDeleted(e, "session"),
                this.client.core.crypto.keychain.has(s.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(s.publicKey)),
                this.client.core.crypto.keychain.has(e) &&
                  (await this.client.core.crypto.deleteSymKey(e)),
                r || this.client.core.expirer.del(e),
                this.client.core.storage
                  .removeItem(ng)
                  .catch((t) => this.client.logger.warn(t)),
                this.getPendingSessionRequests().forEach((t) => {
                  t.topic === e &&
                    this.deletePendingSessionRequest(
                      t.id,
                      ju("USER_DISCONNECTED")
                    );
                }),
                i &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: e,
                  });
            }),
            (this.deleteProposal = async (t, e) => {
              await Promise.all([
                this.client.proposal.delete(t, ju("USER_DISCONNECTED")),
                e ? Promise.resolve() : this.client.core.expirer.del(t),
              ]),
                this.addToRecentlyDeleted(t, "proposal");
            }),
            (this.deletePendingSessionRequest = async function (t, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              await Promise.all([
                e.client.pendingRequest.delete(t, r),
                i ? Promise.resolve() : e.client.core.expirer.del(t),
              ]),
                e.addToRecentlyDeleted(t, "request"),
                (e.sessionRequestQueue.queue =
                  e.sessionRequestQueue.queue.filter((e) => e.id !== t)),
                i &&
                  ((e.sessionRequestQueue.state = cg),
                  e.client.events.emit("session_request_expire", { id: t }));
            }),
            (this.setExpiry = async (t, e) => {
              this.client.session.keys.includes(t) &&
                (await this.client.session.update(t, { expiry: e })),
                this.client.core.expirer.set(t, e);
            }),
            (this.setProposal = async (t, e) => {
              await this.client.proposal.set(t, e),
                this.client.core.expirer.set(
                  t,
                  fs(og.wc_sessionPropose.req.ttl)
                );
            }),
            (this.setPendingSessionRequest = async (t) => {
              const { id: e, topic: r, params: i, verifyContext: n } = t,
                s =
                  i.request.expiryTimestamp || fs(og.wc_sessionRequest.req.ttl);
              await this.client.pendingRequest.set(e, {
                id: e,
                topic: r,
                params: i,
                verifyContext: n,
              }),
                s && this.client.core.expirer.set(e, s);
            }),
            (this.sendRequest = async (t) => {
              const {
                  topic: e,
                  method: r,
                  params: i,
                  expiry: n,
                  relayRpcId: s,
                  clientRpcId: o,
                  throwOnFailedPublish: a,
                } = t,
                c = Al(r, i, o);
              if (es() && ug.includes(r)) {
                const t = gu(JSON.stringify(c));
                this.client.core.verify.register({ attestationId: t });
              }
              let h;
              try {
                h = await this.client.core.crypto.encode(e, c);
              } catch (l) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    "sendRequest() -> core.crypto.encode() for topic ".concat(
                      e,
                      " failed"
                    )
                  ),
                  l)
                );
              }
              const u = og[r].req;
              return (
                n && (u.ttl = n),
                s && (u.id = s),
                this.client.core.history.set(e, c),
                a
                  ? ((u.internal = _g(bg({}, u.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(e, h, u))
                  : this.client.core.relayer
                      .publish(e, h, u)
                      .catch((t) => this.client.logger.error(t)),
                c.id
              );
            }),
            (this.sendResult = async (t) => {
              const {
                  id: e,
                  topic: r,
                  result: i,
                  throwOnFailedPublish: n,
                  encodeOpts: s,
                } = t,
                o = El(e, i);
              let a, c;
              try {
                a = await this.client.core.crypto.encode(r, o, s);
              } catch (u) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    "sendResult() -> core.crypto.encode() for topic ".concat(
                      r,
                      " failed"
                    )
                  ),
                  u)
                );
              }
              try {
                c = await this.client.core.history.get(r, e);
              } catch (u) {
                throw (
                  (this.client.logger.error(
                    "sendResult() -> history.get("
                      .concat(r, ", ")
                      .concat(e, ") failed")
                  ),
                  u)
                );
              }
              const h = og[c.request.method].res;
              n
                ? ((h.internal = _g(bg({}, h.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(r, a, h))
                : this.client.core.relayer
                    .publish(r, a, h)
                    .catch((t) => this.client.logger.error(t)),
                await this.client.core.history.resolve(o);
            }),
            (this.sendError = async (t) => {
              const { id: e, topic: r, error: i, encodeOpts: n } = t,
                s = Sl(e, i);
              let o, a;
              try {
                o = await this.client.core.crypto.encode(r, s, n);
              } catch (h) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    "sendError() -> core.crypto.encode() for topic ".concat(
                      r,
                      " failed"
                    )
                  ),
                  h)
                );
              }
              try {
                a = await this.client.core.history.get(r, e);
              } catch (h) {
                throw (
                  (this.client.logger.error(
                    "sendError() -> history.get("
                      .concat(r, ", ")
                      .concat(e, ") failed")
                  ),
                  h)
                );
              }
              const c = og[a.request.method].res;
              this.client.core.relayer.publish(r, o, c),
                await this.client.core.history.resolve(s);
            }),
            (this.cleanup = async () => {
              const t = [],
                e = [];
              this.client.session.getAll().forEach((e) => {
                let r = !1;
                ds(e.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(e.topic) || (r = !0),
                  r && t.push(e.topic);
              }),
                this.client.proposal.getAll().forEach((t) => {
                  ds(t.expiryTimestamp) && e.push(t.id);
                }),
                await Promise.all([
                  ...t.map((t) => this.deleteSession({ topic: t })),
                  ...e.map((t) => this.deleteProposal(t)),
                ]);
            }),
            (this.onRelayEventRequest = async (t) => {
              this.requestQueue.queue.push(t),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state !== hg) {
                for (
                  this.client.logger.info(
                    "Request queue starting with ".concat(
                      this.requestQueue.queue.length,
                      " requests"
                    )
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = hg;
                  const e = this.requestQueue.queue.shift();
                  if (e)
                    try {
                      this.processRequest(e),
                        await new Promise((t) => setTimeout(t, 300));
                    } catch (t) {
                      this.client.logger.warn(t);
                    }
                }
                this.requestQueue.state = cg;
              } else
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
            }),
            (this.processRequest = (t) => {
              const { topic: e, payload: r } = t,
                i = r.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: e, requestMethod: i })
              )
                switch (i) {
                  case "wc_sessionPropose":
                    return this.onSessionProposeRequest(e, r);
                  case "wc_sessionSettle":
                    return this.onSessionSettleRequest(e, r);
                  case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(e, r);
                  case "wc_sessionExtend":
                    return this.onSessionExtendRequest(e, r);
                  case "wc_sessionPing":
                    return this.onSessionPingRequest(e, r);
                  case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(e, r);
                  case "wc_sessionRequest":
                    return this.onSessionRequest(e, r);
                  case "wc_sessionEvent":
                    return this.onSessionEventRequest(e, r);
                  case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateRequest(e, r);
                  default:
                    return this.client.logger.info(
                      "Unsupported request method ".concat(i)
                    );
                }
            }),
            (this.onRelayEventResponse = async (t) => {
              const { topic: e, payload: r } = t,
                i = (await this.client.core.history.get(e, r.id)).request
                  .method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(e, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(e, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(e, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(e, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(e, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(e, r);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(e, r);
                default:
                  return this.client.logger.info(
                    "Unsupported response method ".concat(i)
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (t) => {
              const { topic: e } = t,
                { message: r } = qu(
                  "MISSING_OR_INVALID",
                  "Decoded payload on topic ".concat(
                    e,
                    " is not identifiable as a JSON-RPC request or a response."
                  )
                );
              throw new Error(r);
            }),
            (this.shouldIgnorePairingRequest = (t) => {
              const { topic: e, requestMethod: r } = t,
                i = this.expectedPairingMethodMap.get(e);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            (this.onSessionProposeRequest = async (t, e) => {
              const { params: r, id: i } = e;
              try {
                this.isValidConnect(bg({}, e.params));
                const n = r.expiryTimestamp || fs(og.wc_sessionPropose.req.ttl),
                  s = bg({ id: i, pairingTopic: t, expiryTimestamp: n }, r);
                await this.setProposal(i, s);
                const o = gu(JSON.stringify(e)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: i,
                  params: s,
                  verifyContext: a,
                });
              } catch (n) {
                await this.sendError({ id: i, topic: t, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.onSessionProposeResponse = async (t, e) => {
              const { id: r } = e;
              if (kl(e)) {
                const { result: i } = e;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: i,
                });
                const n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                const s = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                const o = i.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: t });
              } else if (Dl(e)) {
                await this.client.proposal.delete(r, ju("USER_DISCONNECTED"));
                const t = ps("session_connect");
                if (0 === this.events.listenerCount(t))
                  throw new Error(
                    "emitting ".concat(t, " without any listeners, 954")
                  );
                this.events.emit(ps("session_connect"), { error: e.error });
              }
            }),
            (this.onSessionSettleRequest = async (t, e) => {
              const { id: r, params: i } = e;
              try {
                this.isValidSessionSettleRequest(i);
                const {
                    relay: r,
                    controller: n,
                    expiry: s,
                    namespaces: o,
                    sessionProperties: a,
                    pairingTopic: c,
                    sessionConfig: h,
                  } = e.params,
                  u = bg(
                    bg(
                      {
                        topic: t,
                        relay: r,
                        expiry: s,
                        namespaces: o,
                        acknowledged: !0,
                        pairingTopic: c,
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        controller: n.publicKey,
                        self: { publicKey: "", metadata: this.client.metadata },
                        peer: { publicKey: n.publicKey, metadata: n.metadata },
                      },
                      a && { sessionProperties: a }
                    ),
                    h && { sessionConfig: h }
                  );
                await this.sendResult({
                  id: e.id,
                  topic: t,
                  result: !0,
                  throwOnFailedPublish: !0,
                });
                const l = ps("session_connect");
                if (0 === this.events.listenerCount(l))
                  throw new Error(
                    "emitting ".concat(l, " without any listeners 997")
                  );
                this.events.emit(ps("session_connect"), { session: u }),
                  this.cleanupDuplicatePairings(u);
              } catch (n) {
                await this.sendError({ id: r, topic: t, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.onSessionSettleResponse = async (t, e) => {
              const { id: r } = e;
              kl(e)
                ? (await this.client.session.update(t, { acknowledged: !0 }),
                  this.events.emit(ps("session_approve", r), {}))
                : Dl(e) &&
                  (await this.client.session.delete(t, ju("USER_DISCONNECTED")),
                  this.events.emit(ps("session_approve", r), {
                    error: e.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (t, e) => {
              const { params: r, id: i } = e;
              try {
                const e = "".concat(t, "_session_update"),
                  s = cl.get(e);
                if (s && this.isRequestOutOfSync(s, i))
                  return (
                    this.client.logger.info(
                      "Discarding out of sync request - ".concat(i)
                    ),
                    void this.sendError({
                      id: i,
                      topic: t,
                      error: ju("INVALID_UPDATE_REQUEST"),
                    })
                  );
                this.isValidUpdate(bg({ topic: t }, r));
                try {
                  cl.set(e, i),
                    await this.client.session.update(t, {
                      namespaces: r.namespaces,
                    }),
                    await this.sendResult({
                      id: i,
                      topic: t,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (n) {
                  throw (cl.delete(e), n);
                }
                this.client.events.emit("session_update", {
                  id: i,
                  topic: t,
                  params: r,
                });
              } catch (s) {
                await this.sendError({ id: i, topic: t, error: s }),
                  this.client.logger.error(s);
              }
            }),
            (this.isRequestOutOfSync = (t, e) =>
              parseInt(e.toString().slice(0, -3)) <=
              parseInt(t.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (t, e) => {
              const { id: r } = e,
                i = ps("session_update", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(
                  "emitting ".concat(i, " without any listeners")
                );
              kl(e)
                ? this.events.emit(ps("session_update", r), {})
                : Dl(e) &&
                  this.events.emit(ps("session_update", r), { error: e.error });
            }),
            (this.onSessionExtendRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidExtend({ topic: t }),
                  await this.setExpiry(t, fs(sg)),
                  await this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: t,
                  });
              } catch (i) {
                await this.sendError({ id: r, topic: t, error: i }),
                  this.client.logger.error(i);
              }
            }),
            (this.onSessionExtendResponse = (t, e) => {
              const { id: r } = e,
                i = ps("session_extend", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(
                  "emitting ".concat(i, " without any listeners")
                );
              kl(e)
                ? this.events.emit(ps("session_extend", r), {})
                : Dl(e) &&
                  this.events.emit(ps("session_extend", r), { error: e.error });
            }),
            (this.onSessionPingRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidPing({ topic: t }),
                  await this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: r, topic: t });
              } catch (i) {
                await this.sendError({ id: r, topic: t, error: i }),
                  this.client.logger.error(i);
              }
            }),
            (this.onSessionPingResponse = (t, e) => {
              const { id: r } = e,
                i = ps("session_ping", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(
                  "emitting ".concat(i, " without any listeners")
                );
              setTimeout(() => {
                kl(e)
                  ? this.events.emit(ps("session_ping", r), {})
                  : Dl(e) &&
                    this.events.emit(ps("session_ping", r), { error: e.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidDisconnect({ topic: t, reason: e.params }),
                  await Promise.all([
                    new Promise((e) => {
                      this.client.core.relayer.once(jd, async () => {
                        e(await this.deleteSession({ topic: t, id: r }));
                      });
                    }),
                    this.sendResult({
                      id: r,
                      topic: t,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: t,
                      error: ju("USER_DISCONNECTED"),
                    }),
                  ]);
              } catch (i) {
                this.client.logger.error(i);
              }
            }),
            (this.onSessionRequest = async (t, e) => {
              const { id: r, params: i } = e;
              try {
                await this.isValidRequest(bg({ topic: t }, i));
                const e = gu(JSON.stringify(Al("wc_sessionRequest", i, r))),
                  n = this.client.session.get(t),
                  s = {
                    id: r,
                    topic: t,
                    params: i,
                    verifyContext: await this.getVerifyContext(
                      e,
                      n.peer.metadata
                    ),
                  };
                await this.setPendingSessionRequest(s),
                  this.addSessionRequestToSessionRequestQueue(s),
                  this.processSessionRequestQueue();
              } catch (n) {
                await this.sendError({ id: r, topic: t, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.onSessionRequestResponse = (t, e) => {
              const { id: r } = e,
                i = ps("session_request", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(
                  "emitting ".concat(i, " without any listeners")
                );
              kl(e)
                ? this.events.emit(ps("session_request", r), {
                    result: e.result,
                  })
                : Dl(e) &&
                  this.events.emit(ps("session_request", r), {
                    error: e.error,
                  });
            }),
            (this.onSessionEventRequest = async (t, e) => {
              const { id: r, params: i } = e;
              try {
                const e = "".concat(t, "_session_event_").concat(i.event.name),
                  n = cl.get(e);
                if (n && this.isRequestOutOfSync(n, r))
                  return void this.client.logger.info(
                    "Discarding out of sync request - ".concat(r)
                  );
                this.isValidEmit(bg({ topic: t }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: t,
                    params: i,
                  }),
                  cl.set(e, r);
              } catch (n) {
                await this.sendError({ id: r, topic: t, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.onSessionAuthenticateResponse = (t, e) => {
              const { id: r } = e;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: t,
                payload: e,
              }),
                kl(e)
                  ? this.events.emit(ps("session_request", r), {
                      result: e.result,
                    })
                  : Dl(e) &&
                    this.events.emit(ps("session_request", r), {
                      error: e.error,
                    });
            }),
            (this.onSessionAuthenticateRequest = async (t, e) => {
              const {
                  requester: r,
                  authPayload: i,
                  expiryTimestamp: n,
                } = e.params,
                s = gu(JSON.stringify(e)),
                o = await this.getVerifyContext(s, this.client.metadata),
                a = {
                  requester: r,
                  pairingTopic: t,
                  id: e.id,
                  authPayload: i,
                  verifyContext: o,
                  expiryTimestamp: n,
                };
              await this.client.auth.requests.set(e.id, a),
                this.client.events.emit("session_authenticate", {
                  topic: t,
                  params: e.params,
                  id: e.id,
                });
            }),
            (this.addSessionRequestToSessionRequestQueue = (t) => {
              this.sessionRequestQueue.queue.push(t);
            }),
            (this.cleanupAfterResponse = (t) => {
              this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = cg),
                    this.processSessionRequestQueue();
                }, dt.toMiliseconds(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = (t) => {
              let { topic: e, error: r } = t;
              const i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter(
                    (t) =>
                      t.topic === e && "wc_sessionRequest" === t.request.method
                  )
                  .forEach((t) => {
                    const e = ps("session_request", t.request.id);
                    if (0 === this.events.listenerCount(e))
                      throw new Error(
                        "emitting ".concat(e, " without any listeners")
                      );
                    this.events.emit(ps("session_request", t.request.id), {
                      error: r,
                    });
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === hg)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              const t = this.sessionRequestQueue.queue[0];
              if (t)
                try {
                  (this.sessionRequestQueue.state = hg),
                    this.client.events.emit("session_request", t);
                } catch (e) {
                  this.client.logger.error(e);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.onPairingCreated = (t) => {
              if (
                (t.methods &&
                  this.expectedPairingMethodMap.set(t.topic, t.methods),
                t.active)
              )
                return;
              const e = this.client.proposal
                .getAll()
                .find((e) => e.pairingTopic === t.topic);
              e &&
                this.onSessionProposeRequest(
                  t.topic,
                  Al(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: e.requiredNamespaces,
                      optionalNamespaces: e.optionalNamespaces,
                      relays: e.relays,
                      proposer: e.proposer,
                      sessionProperties: e.sessionProperties,
                    },
                    e.id
                  )
                );
            }),
            (this.isValidConnect = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "connect() params: ".concat(JSON.stringify(t))
                );
                throw new Error(e);
              }
              const {
                pairingTopic: e,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: n,
                relays: s,
              } = t;
              if (
                (Ku(e) || (await this.isValidPairingTopic(e)),
                !(function (t, e) {
                  let r = !1;
                  return (
                    e && !t
                      ? (r = !0)
                      : t &&
                        zu(t) &&
                        t.length &&
                        t.forEach((t) => {
                          r = Zu(t);
                        }),
                    r
                  );
                })(s, !0))
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "connect() relays: ".concat(s)
                );
                throw new Error(t);
              }
              !Ku(r) &&
                0 !== Fu(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !Ku(i) &&
                  0 !== Fu(i) &&
                  this.validateNamespaces(i, "optionalNamespaces"),
                Ku(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.validateNamespaces = (t, e) => {
              const r = (function (t, e, r) {
                let i = null;
                if (t && Fu(t)) {
                  const n = Ju(t, e);
                  n && (i = n);
                  const s = Yu(t, e, r);
                  s && (i = s);
                } else
                  i = qu(
                    "MISSING_OR_INVALID",
                    ""
                      .concat(e, ", ")
                      .concat(r, " should be an object with data")
                  );
                return i;
              })(t, "connect()", e);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (t) => {
              if (!$u(t))
                throw new Error(
                  qu(
                    "MISSING_OR_INVALID",
                    "approve() params: ".concat(t)
                  ).message
                );
              const {
                id: e,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n,
              } = t;
              this.checkRecentlyDeleted(e), await this.isValidProposalId(e);
              const s = this.client.proposal.get(e),
                o = Xu(r, "approve()");
              if (o) throw new Error(o.message);
              const a = il(s.requiredNamespaces, r, "approve()");
              if (a) throw new Error(a.message);
              if (!Hu(i, !0)) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "approve() relayProtocol: ".concat(i)
                );
                throw new Error(t);
              }
              Ku(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.isValidReject = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "reject() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { id: e, reason: r } = t;
              if (
                (this.checkRecentlyDeleted(e),
                await this.isValidProposalId(e),
                !(function (t) {
                  return !(
                    !t ||
                    "object" != typeof t ||
                    !t.code ||
                    !Vu(t.code, !1) ||
                    !t.message ||
                    !Hu(t.message, !1)
                  );
                })(r))
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "reject() reason: ".concat(JSON.stringify(r))
                );
                throw new Error(t);
              }
            }),
            (this.isValidSessionSettleRequest = (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { relay: e, controller: r, namespaces: i, expiry: n } = t;
              if (!Zu(e)) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw new Error(t);
              }
              const s = (function (t, e) {
                let r = null;
                return (
                  Hu(null === t || void 0 === t ? void 0 : t.publicKey, !1) ||
                    (r = qu(
                      "MISSING_OR_INVALID",
                      "".concat(e, " controller public key should be a string")
                    )),
                  r
                );
              })(r, "onSessionSettleRequest()");
              if (s) throw new Error(s.message);
              const o = Xu(i, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if (ds(n)) {
                const { message: t } = qu(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw new Error(t);
              }
            }),
            (this.isValidUpdate = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "update() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e, namespaces: r } = t;
              this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
              const i = this.client.session.get(e),
                n = Xu(r, "update()");
              if (n) throw new Error(n.message);
              const s = il(i.requiredNamespaces, r, "update()");
              if (s) throw new Error(s.message);
            }),
            (this.isValidExtend = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "extend() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
            }),
            (this.isValidRequest = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "request() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e, request: r, chainId: i, expiry: n } = t;
              this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
              const { namespaces: s } = this.client.session.get(e);
              if (!tl(s, i)) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "request() chainId: ".concat(i)
                );
                throw new Error(t);
              }
              if (
                !(function (t) {
                  return !(Ku(t) || !Hu(t.method, !1));
                })(r)
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "request() ".concat(JSON.stringify(r))
                );
                throw new Error(t);
              }
              if (!el(s, i, r.method)) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "request() method: ".concat(r.method)
                );
                throw new Error(t);
              }
              if (
                n &&
                !(function (t, e) {
                  return Vu(t, !1) && t <= e.max && t >= e.min;
                })(n, ag)
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "request() expiry: "
                    .concat(
                      n,
                      ". Expiry must be a number (in seconds) between "
                    )
                    .concat(ag.min, " and ")
                    .concat(ag.max)
                );
                throw new Error(t);
              }
            }),
            (this.isValidRespond = async (t) => {
              var e;
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "respond() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: r, response: i } = t;
              try {
                await this.isValidSessionTopic(r);
              } catch (n) {
                throw (
                  (null !=
                    (e = null === t || void 0 === t ? void 0 : t.response) &&
                    e.id &&
                    this.cleanupAfterResponse(t),
                  n)
                );
              }
              if (
                !(function (t) {
                  return !(
                    Ku(t) ||
                    (Ku(t.result) && Ku(t.error)) ||
                    !Vu(t.id, !1) ||
                    !Hu(t.jsonrpc, !1)
                  );
                })(i)
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "respond() response: ".concat(JSON.stringify(i))
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "ping() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidSessionOrPairingTopic(e);
            }),
            (this.isValidEmit = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "emit() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e, event: r, chainId: i } = t;
              await this.isValidSessionTopic(e);
              const { namespaces: n } = this.client.session.get(e);
              if (!tl(n, i)) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "emit() chainId: ".concat(i)
                );
                throw new Error(t);
              }
              if (
                !(function (t) {
                  return !(Ku(t) || !Hu(t.name, !1));
                })(r)
              ) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "emit() event: ".concat(JSON.stringify(r))
                );
                throw new Error(t);
              }
              if (!rl(n, i, r.name)) {
                const { message: t } = qu(
                  "MISSING_OR_INVALID",
                  "emit() event: ".concat(JSON.stringify(r))
                );
                throw new Error(t);
              }
            }),
            (this.isValidDisconnect = async (t) => {
              if (!$u(t)) {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "disconnect() params: ".concat(t)
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidSessionOrPairingTopic(e);
            }),
            (this.isValidAuthenticate = (t) => {
              const { chains: e, uri: r, domain: i, nonce: n } = t;
              if (!Array.isArray(e) || 0 === e.length)
                throw new Error(
                  "chains is required and must be a non-empty array"
                );
              if (!Hu(r, !1)) throw new Error("uri is required parameter");
              if (!Hu(i, !1)) throw new Error("domain is required parameter");
              if (!Hu(n, !1)) throw new Error("nonce is required parameter");
              if ([...new Set(e.map((t) => qn(t).namespace))].length > 1)
                throw new Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              const { namespace: s } = qn(e[0]);
              if ("eip155" !== s)
                throw new Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            (this.getVerifyContext = async (t, e) => {
              const r = {
                verified: {
                  verifyUrl: e.verifyUrl || lp,
                  validation: "UNKNOWN",
                  origin: e.url || "",
                },
              };
              try {
                const i = await this.client.core.verify.resolve({
                  attestationId: t,
                  verifyUrl: e.verifyUrl,
                });
                i &&
                  ((r.verified.origin = i.origin),
                  (r.verified.isScam = i.isScam),
                  (r.verified.validation =
                    i.origin === new URL(e.url).origin ? "VALID" : "INVALID"));
              } catch (i) {
                this.client.logger.info(i);
              }
              return (
                this.client.logger.info(
                  "Verify context: ".concat(JSON.stringify(r))
                ),
                r
              );
            }),
            (this.validateSessionProps = (t, e) => {
              Object.values(t).forEach((t) => {
                if (!Hu(t, !1)) {
                  const { message: r } = qu(
                    "MISSING_OR_INVALID",
                    ""
                      .concat(
                        e,
                        " must be in Record<string, string> format. Received: "
                      )
                      .concat(JSON.stringify(t))
                  );
                  throw new Error(r);
                }
              });
            }),
            (this.getPendingAuthRequest = (t) => {
              const e = this.client.auth.requests.get(t);
              return "object" == typeof e ? e : void 0;
            }),
            (this.addToRecentlyDeleted = (t, e) => {
              if (
                (this.recentlyDeletedMap.set(t, e),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let t = 0;
                const e = this.recentlyDeletedLimit / 2;
                for (const r of this.recentlyDeletedMap.keys()) {
                  if (t++ >= e) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            (this.checkRecentlyDeleted = (t) => {
              const e = this.recentlyDeletedMap.get(t);
              if (e) {
                const { message: r } = qu(
                  "MISSING_OR_INVALID",
                  "Record was recently deleted - ".concat(e, ": ").concat(t)
                );
                throw new Error(r);
              }
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            const { message: t } = qu("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(Ud, async (t) => {
            const { topic: e, message: r } = t,
              { publicKey: i } = this.client.auth.authKeys.keys.includes(fg)
                ? this.client.auth.authKeys.get(fg)
                : { responseTopic: void 0, publicKey: void 0 },
              n = await this.client.core.crypto.decode(e, r, {
                receiverPublicKey: i,
              });
            try {
              Ul(n)
                ? (this.client.core.history.set(e, n),
                  this.onRelayEventRequest({ topic: e, payload: n }))
                : Ll(n)
                ? (await this.client.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: e, payload: n }),
                  this.client.core.history.delete(e, n.id))
                : this.onRelayEventUnknownPayload({ topic: e, payload: n });
            } catch (s) {
              this.client.logger.error(s);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(cp, async (t) => {
            const { topic: e, id: r } = ls(t.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                qu("EXPIRED"),
                !0
              );
            e
              ? this.client.session.keys.includes(e) &&
                (await this.deleteSession({ topic: e, expirerHasDeleted: !0 }),
                this.client.events.emit("session_expire", { topic: e }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(Zd, (t) =>
            this.onPairingCreated(t)
          ),
            this.client.core.pairing.events.on(tp, (t) => {
              this.addToRecentlyDeleted(t.topic, "pairing");
            });
        }
        isValidPairingTopic(t) {
          if (!Hu(t, !1)) {
            const { message: e } = qu(
              "MISSING_OR_INVALID",
              "pairing topic should be a string: ".concat(t)
            );
            throw new Error(e);
          }
          if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "pairing topic doesn't exist: ".concat(t)
            );
            throw new Error(e);
          }
          if (ds(this.client.core.pairing.pairings.get(t).expiry)) {
            const { message: e } = qu("EXPIRED", "pairing topic: ".concat(t));
            throw new Error(e);
          }
        }
        async isValidSessionTopic(t) {
          if (!Hu(t, !1)) {
            const { message: e } = qu(
              "MISSING_OR_INVALID",
              "session topic should be a string: ".concat(t)
            );
            throw new Error(e);
          }
          if (
            (this.checkRecentlyDeleted(t),
            !this.client.session.keys.includes(t))
          ) {
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "session topic doesn't exist: ".concat(t)
            );
            throw new Error(e);
          }
          if (ds(this.client.session.get(t).expiry)) {
            await this.deleteSession({ topic: t });
            const { message: e } = qu("EXPIRED", "session topic: ".concat(t));
            throw new Error(e);
          }
          if (!this.client.core.crypto.keychain.has(t)) {
            const { message: e } = qu(
              "MISSING_OR_INVALID",
              "session topic does not exist in keychain: ".concat(t)
            );
            throw (await this.deleteSession({ topic: t }), new Error(e));
          }
        }
        async isValidSessionOrPairingTopic(t) {
          if (
            (this.checkRecentlyDeleted(t), this.client.session.keys.includes(t))
          )
            await this.isValidSessionTopic(t);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(t)) {
              if (Hu(t, !1)) {
                const { message: e } = qu(
                  "NO_MATCHING_KEY",
                  "session or pairing topic doesn't exist: ".concat(t)
                );
                throw new Error(e);
              }
              {
                const { message: e } = qu(
                  "MISSING_OR_INVALID",
                  "session or pairing topic should be a string: ".concat(t)
                );
                throw new Error(e);
              }
            }
            this.isValidPairingTopic(t);
          }
        }
        async isValidProposalId(t) {
          if (
            !(function (t) {
              return "number" == typeof t;
            })(t)
          ) {
            const { message: e } = qu(
              "MISSING_OR_INVALID",
              "proposal id should be a number: ".concat(t)
            );
            throw new Error(e);
          }
          if (!this.client.proposal.keys.includes(t)) {
            const { message: e } = qu(
              "NO_MATCHING_KEY",
              "proposal id doesn't exist: ".concat(t)
            );
            throw new Error(e);
          }
          if (ds(this.client.proposal.get(t).expiryTimestamp)) {
            await this.deleteProposal(t);
            const { message: e } = qu("EXPIRED", "proposal id: ".concat(t));
            throw new Error(e);
          }
        }
      }
      class Eg extends zp {
        constructor(t, e) {
          super(t, e, "proposal", eg), (this.core = t), (this.logger = e);
        }
      }
      class Sg extends zp {
        constructor(t, e) {
          super(t, e, "session", eg), (this.core = t), (this.logger = e);
        }
      }
      class Ig extends zp {
        constructor(t, e) {
          super(t, e, "request", eg, (t) => t.id),
            (this.core = t),
            (this.logger = e);
        }
      }
      class Mg extends zp {
        constructor(t, e) {
          super(t, e, "authKeys", lg, () => fg),
            (this.core = t),
            (this.logger = e);
        }
      }
      class Ng extends zp {
        constructor(t, e) {
          super(t, e, "pairingTopics", lg), (this.core = t), (this.logger = e);
        }
      }
      class Og extends zp {
        constructor(t, e) {
          super(t, e, "requests", lg, (t) => t.id),
            (this.core = t),
            (this.logger = e);
        }
      }
      class xg {
        constructor(t, e) {
          (this.core = t),
            (this.logger = e),
            (this.authKeys = new Mg(this.core, this.logger)),
            (this.pairingTopics = new Ng(this.core, this.logger)),
            (this.requests = new Og(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      class Pg extends Ke {
        constructor(t) {
          super(t),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = rg),
            (this.events = new M.EventEmitter()),
            (this.on = (t, e) => this.events.on(t, e)),
            (this.once = (t, e) => this.events.once(t, e)),
            (this.off = (t, e) => this.events.off(t, e)),
            (this.removeListener = (t, e) => this.events.removeListener(t, e)),
            (this.removeAllListeners = (t) =>
              this.events.removeAllListeners(t)),
            (this.connect = async (t) => {
              try {
                return await this.engine.connect(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (t) => {
              try {
                return await this.engine.pair(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (t) => {
              try {
                return await this.engine.approve(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (t) => {
              try {
                return await this.engine.reject(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (t) => {
              try {
                return await this.engine.update(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (t) => {
              try {
                return await this.engine.extend(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (t) => {
              try {
                return await this.engine.request(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (t) => {
              try {
                return await this.engine.respond(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (t) => {
              try {
                return await this.engine.ping(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (t) => {
              try {
                return await this.engine.emit(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (t) => {
              try {
                return await this.engine.disconnect(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (t) => {
              try {
                return this.engine.find(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.authenticate = async (t) => {
              try {
                return await this.engine.authenticate(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.formatAuthMessage = (t) => {
              try {
                return this.engine.formatAuthMessage(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approveSessionAuthenticate = async (t) => {
              try {
                return await this.engine.approveSessionAuthenticate(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.rejectSessionAuthenticate = async (t) => {
              try {
                return await this.engine.rejectSessionAuthenticate(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = (null === t || void 0 === t ? void 0 : t.name) || rg),
            (this.metadata = (null === t || void 0 === t
              ? void 0
              : t.metadata) ||
              tn() || { name: "", description: "", url: "", icons: [""] });
          const e =
            typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" &&
            "string" != typeof (null === t || void 0 === t ? void 0 : t.logger)
              ? t.logger
              : le(
                  xe({
                    level:
                      (null === t || void 0 === t ? void 0 : t.logger) || ig,
                  })
                );
          (this.core =
            (null === t || void 0 === t ? void 0 : t.core) || new $p(t)),
            (this.logger = Re(e, this.name)),
            (this.session = new Sg(this.core, this.logger)),
            (this.proposal = new Eg(this.core, this.logger)),
            (this.pendingRequest = new Ig(this.core, this.logger)),
            (this.engine = new Ag(this)),
            (this.auth = new xg(this.core, this.logger));
        }
        static async init(t) {
          const e = new Pg(t);
          return await e.initialize(), e;
        }
        get context() {
          return Pe(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              await this.auth.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (t) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(t.message),
              t)
            );
          }
        }
      }
      const Rg = (() => {
          var t;
          const e =
            null === (t = Vi()) ||
            void 0 === t ||
            null === (t = t.os) ||
            void 0 === t
              ? void 0
              : t.toLowerCase();
          return null !== e && void 0 !== e && e.includes("android")
            ? "android"
            : (null !== e && void 0 !== e && e.toLowerCase().includes("ios")) ||
              (null !== e &&
                void 0 !== e &&
                e.toLowerCase().includes("mac") &&
                navigator.maxTouchPoints > 1)
            ? "ios"
            : "desktop";
        })(),
        Tg = {
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(10px)",
          zIndex: "9999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          fontWeight: "500",
          fontFamily: "'Barlow', sans-serif",
        },
        Cg = {
          width: "840px",
          height: "540px",
          zIndex: "99999",
          backgroundColor: "white",
          border: "none",
          outline: "none",
          borderRadius: "40px",
          boxShadow:
            "0px 4px 40px 0px rgb(0 0 0), 0px 4px 8px 0px rgb(0 0 0 / 25%)",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        };
      const Ug = new (class {
          constructor() {
            u(this, "bridgeUrl", "https://login.argent.xyz"),
              u(this, "mobileUrl", "argent://"),
              u(this, "type", "overlay"),
              u(this, "wcUri"),
              u(this, "overlay"),
              u(this, "popupWindow"),
              u(this, "closingTimeout"),
              u(this, "close", () => {
                var t, e;
                null !== (t = this.overlay) && void 0 !== t && t.remove(),
                  null !== (e = this.popupWindow) && void 0 !== e && e.close(),
                  (this.overlay = void 0),
                  (this.popupWindow = void 0);
              });
          }
          showConnectionModal(t) {
            const e = encodeURIComponent(t),
              r = encodeURIComponent(window.location.href),
              i = encodeURIComponent(
                "".concat(this.mobileUrl, "app/wc?uri=").concat(e)
              );
            this.showModal({
              desktop: ""
                .concat(this.bridgeUrl, "?wc=")
                .concat(i, "&device=desktop"),
              ios: ""
                .concat(this.mobileUrl, "app/wc?uri=")
                .concat(e, "&href=")
                .concat(r, "&device=mobile"),
              android: ""
                .concat(this.mobileUrl, "app/wc?uri=")
                .concat(e, "&href=")
                .concat(r, "&device=mobile"),
            });
          }
          showApprovalModal(t) {
            if ("desktop" === Rg)
              return void this.showModal({
                desktop: "".concat(this.bridgeUrl, "?action=sign"),
                ios: "",
                android: "",
              });
            const e = encodeURIComponent(window.location.href);
            this.showModal({
              desktop: "".concat(this.bridgeUrl, "?action=sign&device=desktop"),
              ios: ""
                .concat(this.mobileUrl, "app/wc/request?href=")
                .concat(e, "&device=mobile"),
              android: ""
                .concat(this.mobileUrl, "app/wc/request?href=")
                .concat(e, "&device=mobile"),
            });
          }
          closeModal(t) {
            var e, r;
            t
              ? (null !== (e = this.overlay) &&
                  void 0 !== e &&
                  null !== (e = e.querySelector("iframe")) &&
                  void 0 !== e &&
                  null !== (e = e.contentWindow) &&
                  void 0 !== e &&
                  e.postMessage("argent-login.success", "*"),
                null !== (r = this.popupWindow) &&
                  void 0 !== r &&
                  r.postMessage("argent-login.success", "*"),
                (this.closingTimeout = setTimeout(this.close, 3400)))
              : this.close();
          }
          showModal(t) {
            if (
              (clearTimeout(this.closingTimeout),
              (this.overlay || this.popupWindow) && this.close(),
              "android" === Rg || "ios" === Rg)
            ) {
              const e = document.createElement("button");
              return (
                (e.style.display = "none"),
                e.addEventListener("click", () => {
                  window.location.href = t[Rg];
                }),
                void e.click()
              );
            }
            if ("window" === this.type) {
              const e =
                "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=840,height=540";
              return void (this.popupWindow =
                window.open(t.desktop, "_blank", e) || void 0);
            }
            const e = document.createElement("div");
            (e.innerHTML =
              '\n  <div id="argent-mobile-modal-container" style="position: relative">\n    <iframe class="argent-iframe" allow="clipboard-write"></iframe>\n    <div class="argent-close-button" style="position: absolute; top: 24px; right: 24px; cursor: pointer;">\n      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="16" cy="16" r="16" fill="#F5F3F0"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2462 9.75382C22.7018 10.2094 22.7018 10.9481 22.2462 11.4037L17.6499 16L22.2462 20.5963C22.7018 21.0519 22.7018 21.7906 22.2462 22.2462C21.7905 22.7018 21.0519 22.7018 20.5962 22.2462L16 17.6499L11.4039 22.246C10.9482 22.7017 10.2096 22.7017 9.75394 22.246C9.29833 21.7904 9.29833 21.0517 9.75394 20.5961L14.3501 16L9.75394 11.4039C9.29833 10.9483 9.29833 10.2096 9.75394 9.75396C10.2096 9.29835 10.9482 9.29835 11.4039 9.75396L16 14.3501L20.5962 9.75382C21.0519 9.29821 21.7905 9.29821 22.2462 9.75382Z" fill="#333332"/>\n      </svg>\n    </div>\n  </div>\n'),
              (e.id = "argent-mobile-modal-overlay");
            for (const [i, n] of Object.entries(Tg)) e.style[i] = n;
            document.body.appendChild(e),
              e.addEventListener("click", () => this.closeModal()),
              (this.overlay = e);
            const r = e.querySelector("iframe");
            r.setAttribute("src", t.desktop);
            for (const [i, n] of Object.entries(Cg)) r.style[i] = n;
            e.querySelector(".argent-close-button").addEventListener(
              "click",
              () => this.closeModal()
            );
          }
        })(),
        Lg = s.AA.NetworkName,
        kg = (t) => {
          if (!t)
            throw new Error(
              "Unknown or unsupported chainId (".concat(
                t,
                "), either specify a supported chain or set bridgeUrl."
              )
            );
          const e = parseInt("".concat(t));
          return String(t).startsWith(Lg.SN_SEPOLIA) || 11155111 === e
            ? "https://login.hydrogen.argent47.net"
            : String(t).startsWith(Lg.SN_MAIN) || 1 === e
            ? "https://login.argent.xyz"
            : void 0;
        },
        Dg = (t) => {
          if (!t)
            throw new Error(
              "Unknown or unsupported chainId (".concat(
                t,
                "), either specify a supported chain or set mobileUrl."
              )
            );
          const e = parseInt("".concat(t));
          return String(t).startsWith(Lg.SN_SEPOLIA) || 11155111 === e
            ? "argent-dev://"
            : String(t).startsWith(Lg.SN_MAIN) || 1 === e
            ? "argent://"
            : void 0;
        };
      const Bg = "signer_init",
        qg = "signer_uri",
        jg = "signer_created",
        zg = "signer_updated",
        Fg = "signer_deleted",
        Kg = "signer_event";
      class Hg extends Nl {
        constructor(t) {
          super(),
            (this.events = new M.EventEmitter()),
            (this.pending = !1),
            (this.initializing = !1),
            (this.requiredNamespaces =
              (null === t || void 0 === t ? void 0 : t.requiredNamespaces) ||
              {}),
            (this.opts = null === t || void 0 === t ? void 0 : t.client);
        }
        get connected() {
          return typeof this.session < "u";
        }
        get connecting() {
          return this.pending;
        }
        get chains() {
          return this.session
            ? Fn(this.session.namespaces)
            : (function (t) {
                let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                const r = [];
                return (
                  Object.keys(t).forEach((i) => {
                    if (e.length && !e.includes(i)) return;
                    const n = t[i];
                    r.push(...Kn(i, n));
                  }),
                  r
                );
              })(this.requiredNamespaces);
        }
        get accounts() {
          return this.session ? zn(this.session.namespaces) : [];
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open() {
          if (this.pending)
            return new Promise((t, e) => {
              this.events.once("open", () => {
                if (
                  (this.events.once("open_error", (t) => {
                    e(t);
                  }),
                  typeof this.client > "u")
                )
                  return e(new Error("Sign Client not initialized"));
                t();
              });
            });
          try {
            this.pending = !0;
            const t = await this.register(),
              e = t.find({ requiredNamespaces: this.requiredNamespaces });
            if (e.length) return this.onOpen(e[0]);
            const { uri: r, approval: i } = await t.connect({
              requiredNamespaces: this.requiredNamespaces,
            });
            this.events.emit(qg, { uri: r }),
              (this.session = await i()),
              this.events.emit(jg, this.session),
              this.onOpen();
          } catch (t) {
            throw (this.events.emit("open_error", t), t);
          }
        }
        async close() {
          typeof this.session > "u" ||
            (await (
              await this.register()
            ).disconnect({
              topic: this.session.topic,
              reason: ju("USER_DISCONNECTED"),
            }),
            this.onClose());
        }
        async send(t, e) {
          if (
            (typeof this.client > "u" &&
              ((this.client = await this.register()),
              this.connected || (await this.open())),
            typeof this.session > "u")
          )
            throw new Error("Signer connection is missing session");
          this.client
            .request({
              topic: this.session.topic,
              request: t,
              chainId: null === e || void 0 === e ? void 0 : e.chainId,
            })
            .then((e) => this.events.emit("payload", El(t.id, e)))
            .catch((e) => this.events.emit("payload", Sl(t.id, e.message)));
        }
        async register() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.opts;
          if (typeof this.client < "u") return this.client;
          if (this.initializing)
            return new Promise((t, e) => {
              this.events.once("register_error", (t) => {
                e(t);
              }),
                this.events.once(Bg, () => {
                  if (typeof this.client > "u")
                    return e(new Error("Sign Client not initialized"));
                  t(this.client);
                });
            });
          if (
            (function (t) {
              return typeof t < "u" && typeof t.context < "u";
            })(t)
          )
            return (
              (this.client = t), this.registerEventListeners(), this.client
            );
          try {
            return (
              (this.initializing = !0),
              (this.client = await Pg.init(t)),
              (this.initializing = !1),
              this.registerEventListeners(),
              this.events.emit(Bg),
              this.client
            );
          } catch (e) {
            throw (this.events.emit("register_error", e), e);
          }
        }
        onOpen(t) {
          (this.pending = !1),
            t && (this.session = t),
            this.events.emit("open");
        }
        onClose() {
          (this.pending = !1),
            this.client && (this.client = void 0),
            this.events.emit("close");
        }
        registerEventListeners() {
          typeof this.client < "u" &&
            (this.client.on("session_event", (t) => {
              var e;
              (this.session &&
                (null == (e = this.session) ? void 0 : e.topic) !== t.topic) ||
                this.events.emit(Kg, t.params);
            }),
            this.client.on("session_update", (t) => {
              var e;
              typeof this.client < "u" &&
                ((this.session &&
                  (null == (e = this.session) ? void 0 : e.topic) !==
                    t.topic) ||
                  ((this.session = this.client.session.get(t.topic)),
                  this.events.emit(zg, this.session)));
            }),
            this.client.on("session_delete", (t) => {
              var e;
              this.session &&
                ((this.session &&
                  (null == (e = this.session) ? void 0 : e.topic) !==
                    t.topic) ||
                  (this.onClose(),
                  this.events.emit(Fg, this.session),
                  (this.session = void 0)));
            }));
        }
      }
      class Vg {
        constructor() {
          u(this, "accounts", []),
            u(this, "eventEmitter", new M.EventEmitter()),
            u(this, "updateSession", (t) => {
              if (!this.isValidSession(t))
                throw (
                  (console.warn(
                    "updateSession incompatible session",
                    t,
                    "for adapter",
                    this.formatChainId(this.chainId)
                  ),
                  new Error("Invalid session"))
                );
              this.session = t;
              const e = Fn(t.namespaces, [this.namespace]);
              this.setChainIds(e);
              const r = zn(t.namespaces, [this.namespace]);
              this.setAccounts(r);
            }),
            u(this, "isValidSession", (t) => {
              var e, r;
              let { namespaces: i, requiredNamespaces: n } = t;
              const s = this.formatChainId(this.chainId);
              return n
                ? !(
                    null === (e = n[this.namespace]) ||
                    void 0 === e ||
                    null === (e = e.chains) ||
                    void 0 === e ||
                    !e.includes(s)
                  )
                : !(
                    null === i ||
                    void 0 === i ||
                    null === (r = i[this.namespace]) ||
                    void 0 === r ||
                    !r.accounts.some((t) => t.startsWith(s))
                  );
            });
        }
        getRequiredNamespaces() {
          const t = [this.formatChainId(this.chainId)];
          return {
            [this.namespace]: {
              chains: t,
              methods: this.methods,
              events: this.events,
            },
          };
        }
        isCompatibleChainId(t) {
          return (
            "string" == typeof t && t.startsWith("".concat(this.namespace, ":"))
          );
        }
        setChainIds(t) {
          const e = t
            .filter((t) => this.isCompatibleChainId(t))
            .map((t) => this.parseChainId(t))
            .filter((t) => t !== this.chainId);
          e.length &&
            ((this.chainId = e[0]),
            this.eventEmitter.emit("chainChanged", this.chainId));
        }
        setChainId(t) {
          if (this.isCompatibleChainId(t)) {
            const e = this.parseChainId(t);
            (this.chainId = e),
              this.eventEmitter.emit("chainChanged", this.chainId);
          }
        }
        parseAccountId(t) {
          const [e, r, i] = t.split(":");
          return { chainId: "".concat(e, ":").concat(r), address: i };
        }
        getSignerConnection(t) {
          return new Hg({
            requiredNamespaces: {
              [this.namespace]: {
                chains: this.rpc.chains,
                methods: this.rpc.methods,
                events: this.rpc.events,
              },
            },
            client: t,
          });
        }
        registerEventListeners() {
          this.rpcProvider.on("connect", () => {
            const { chains: t, accounts: e } = this.signerConnection;
            null !== t && void 0 !== t && t.length && this.setChainIds(t),
              (null === e || void 0 === e ? void 0 : e.length) &&
                this.setAccounts(e);
          }),
            this.signerConnection.on(jg, this.updateSession),
            this.signerConnection.on(zg, this.updateSession),
            this.signerConnection.on(Kg, (t) => {
              if (!this.rpc.chains.includes(t.chainId)) return;
              const { event: e } = t;
              "accountsChanged" === e.name
                ? ((this.accounts = e.data),
                  this.eventEmitter.emit("accountsChanged", this.accounts))
                : "chainChanged" === e.name
                ? this.setChainId(e.data)
                : this.eventEmitter.emit(e.name, e.data);
            }),
            this.rpcProvider.on("disconnect", () => {
              this.eventEmitter.emit("disconnect");
            });
        }
      }
      class Gg extends s.gD {
        constructor(t, e, r, i) {
          super(t, e, r), (this.wallet = i);
        }
        async execute(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return (
            (t = Array.isArray(t) ? t : [t]),
            await this.wallet.starknet_requestAddInvokeTransaction({
              accountAddress: this.address,
              executionRequest: { calls: t, abis: e, invocationDetails: r },
            })
          );
        }
        async declare(t, e) {
          throw new Error("Not supported via Argent Login");
        }
        async deployAccount(t, e) {
          throw new Error("Not supported via Argent Login");
        }
      }
      class Wg {
        constructor(t) {
          this.wallet = t;
        }
        async getPubKey() {
          throw new Error("Not supported via Argent Login");
        }
        async signMessage(t, e) {
          const { signature: r } = await this.wallet.starknet_signTypedData({
            accountAddress: e,
            typedData: t,
          });
          return r;
        }
        async signTransaction(t, e, r) {
          throw new Error("Not supported via Argent Login");
        }
        async signDeployAccountTransaction(t) {
          throw new Error("Not supported via Argent Login");
        }
        async signDeclareTransaction(t) {
          throw new Error("Not supported via Argent Login");
        }
      }
      class Yg extends Vg {
        constructor(t) {
          let { client: e, chainId: r, rpcUrl: i, provider: n } = t;
          super(),
            u(this, "id", "argentMobile"),
            u(this, "name", "Argent Mobile"),
            u(this, "version", "0.1.0"),
            u(this, "icon", ""),
            u(this, "provider"),
            u(this, "signer"),
            u(this, "account"),
            u(this, "selectedAddress", ""),
            u(this, "namespace", "starknet"),
            u(this, "methods", [
              "starknet_supportedSpecs",
              "starknet_signTypedData",
              "starknet_requestAddInvokeTransaction",
            ]),
            u(this, "events", ["chainChanged", "accountsChanged"]),
            u(this, "remoteSigner"),
            u(this, "signerConnection"),
            u(this, "rpcProvider"),
            u(this, "chainId"),
            u(this, "client"),
            u(this, "session"),
            u(this, "rpc"),
            u(this, "walletRpc"),
            u(this, "handleRequest"),
            u(this, "request", async (t) => {
              if (!this.session) throw new Error("No session");
              const e = this.handleRequest[t.type];
              if (e) return e(t.params);
              throw new Error(
                "Not implemented: .request() for ".concat(t.type)
              );
            }),
            u(this, "on", (t, e) => {
              this.eventEmitter.on(t, e);
            }),
            u(this, "off", (t, e) => {
              this.eventEmitter.off(t, e);
            }),
            u(this, "handleRequestChainId", () =>
              this.chainId === s.AA.NetworkName.SN_SEPOLIA
                ? s.AA.StarknetChainId.SN_SEPOLIA
                : s.AA.StarknetChainId.SN_MAIN
            ),
            u(this, "handleRequestAccounts", () => this.accounts),
            u(this, "handleGetPermissions", async () =>
              (await this.isPreauthorized()) ? ["accounts"] : []
            ),
            u(this, "handleAddInvokeTransaction", async (t) => {
              const { calls: e } = t;
              return await this.requestWallet({
                method: "starknet_requestAddInvokeTransaction",
                params: {
                  accountAddress: this.account.address,
                  executionRequest: {
                    calls:
                      null === e || void 0 === e
                        ? void 0
                        : e.map((t) => {
                            let { contract_address: e, ...r } = t;
                            return { ...r, contractAddress: e };
                          }),
                  },
                },
              });
            }),
            u(this, "handleSignTypedData", async (t) => {
              const e = { accountAddress: this.account.address, typedData: t },
                r = await this.requestWallet({
                  method: "starknet_signTypedData",
                  params: e,
                });
              return "signature" in r ? r.signature : r;
            }),
            u(
              this,
              "handleSupportedSpecs",
              async () =>
                await this.requestWallet({
                  method: "starknet_supportedSpecs",
                  params: {},
                })
            ),
            (this.chainId = String(
              null !== r && void 0 !== r ? r : s.AA.NetworkName.SN_MAIN
            )),
            (this.rpc = {
              chains: r ? [this.formatChainId(this.chainId)] : [],
              methods: this.methods,
              events: this.events,
            }),
            (this.signerConnection = this.getSignerConnection(e)),
            (this.rpcProvider = new Bl(this.signerConnection)),
            (this.client = e),
            this.registerEventListeners(),
            (this.walletRpc = new Proxy(
              {},
              {
                get: (t, e) => (t) =>
                  this.requestWallet({ method: e, params: t }),
              }
            )),
            (this.remoteSigner = new Wg(this.walletRpc)),
            (this.provider = n || new s.bd({ nodeUrl: i })),
            (this.account = new Gg(
              this.provider,
              "",
              this.remoteSigner,
              this.walletRpc
            )),
            (this.handleRequest = Object.freeze({
              wallet_requestChainId: this.handleRequestChainId,
              wallet_requestAccounts: this.handleRequestAccounts,
              wallet_getPermissions: this.handleGetPermissions,
              starknet_addInvokeTransaction: this.handleAddInvokeTransaction,
              starknet_signTypedData: this.handleSignTypedData,
              starknet_supportedSpecs: this.handleSupportedSpecs,
            }));
        }
        getNetworkName(t) {
          if ("SN_SEPOLIA" === t) return s.AA.NetworkName.SN_SEPOLIA;
          if ("SN_MAIN" === t) return s.AA.NetworkName.SN_MAIN;
          throw new Error(
            "Unknown starknet.js network name for chainId ".concat(t)
          );
        }
        async enable() {
          return await this.rpcProvider.connect(), this.accounts;
        }
        get isConnected() {
          return !0;
        }
        async isPreauthorized() {
          return !!this.client.session.getAll().find(this.isValidSession);
        }
        async requestWallet(t) {
          if (!this.session) throw new Error("No session");
          try {
            const { topic: e } = this.session,
              r = this.formatChainId(this.chainId);
            Ug.showApprovalModal(t);
            const i = await this.client.request({
              topic: e,
              chainId: r,
              request: t,
            });
            return Ug.closeModal("animateSuccess"), i;
          } catch (e) {
            throw (
              (Ug.closeModal(),
              e instanceof Error
                ? new Error(e.message)
                : new Error("Unknow error on requestWallet"))
            );
          }
        }
        get isConnecting() {
          return this.signerConnection.connecting;
        }
        async disable() {
          await this.rpcProvider.disconnect();
        }
        get isWalletConnect() {
          return !0;
        }
        registerEventListeners() {
          super.registerEventListeners(),
            this.eventEmitter.on("chainChanged", (t) => {
              throw new Error("Not implemented: chainChanged");
            });
        }
        formatChainId(t) {
          return ""
            .concat(this.namespace, ":")
            .concat(((t) => t.replace(/^SN_/, "SN"))(t));
        }
        parseChainId(t) {
          return ((t) => t.replace(/^SN/, "SN_"))(t.split(":")[1]);
        }
        setAccounts(t) {
          this.accounts = t
            .filter(
              (t) =>
                this.parseChainId(this.parseAccountId(t).chainId) ===
                this.chainId
            )
            .map((t) => this.parseAccountId(t).address);
          const { address: e } = this.parseAccountId(t[0]),
            r = e.startsWith("0x") ? e : "0x".concat(e);
          (this.account = new Gg(
            this.provider,
            r,
            this.remoteSigner,
            this.walletRpc
          )),
            this.eventEmitter.emit("accountsChanged", this.accounts),
            (this.selectedAddress = r);
        }
      }
      const Qg = async (t) =>
        (async (t, e) => {
          let {
            projectId: r,
            chainId: i,
            name: n,
            description: a,
            rpcUrl: c,
            bridgeUrl: h = kg(i),
            mobileUrl: u = Dg(i),
            modalType: l = "overlay",
            url: f,
            icons: d,
            walletConnect: p,
          } = t;
          if (!h) throw new Error("bridgeUrl is required");
          if (!u) throw new Error("mobileUrl is required");
          (Ug.bridgeUrl = h), (Ug.mobileUrl = u), (Ug.type = l);
          const g = {
              projectId: r,
              metadata: {
                name: null !== n && void 0 !== n ? n : "Unknown dapp",
                description:
                  null !== a && void 0 !== a ? a : "Unknown dapp description",
                url: null !== f && void 0 !== f ? f : "#",
                icons: null !== d && void 0 !== d ? d : [],
                ...(null === p || void 0 === p ? void 0 : p.metadata),
              },
            },
            m = await Pg.init(g),
            y = new s.bd({ nodeUrl: c }),
            v = new e({ client: m, chainId: i, rpcUrl: c, provider: y });
          m.on("session_event", (t) => {}),
            m.on("session_update", (t) => {
              let { topic: e, params: r } = t;
              const { namespaces: i } = r,
                n = m.session.get(e);
              v.updateSession({ ...n, namespaces: i });
            }),
            m.on("session_delete", () => {});
          try {
            const t = m.session.getAll().find(v.isValidSession);
            if (t) return v.updateSession(t), v;
            const e = { requiredNamespaces: v.getRequiredNamespaces() };
            (0, o.r)(), await new Promise((t) => setTimeout(t, 200));
            const { uri: r, approval: i } = await m.connect(e);
            if (r) {
              Ug.showConnectionModal(r), (Ug.wcUri = r);
              const t = await i();
              v.updateSession(t), Ug.closeModal("animateSuccess");
            }
            return v;
          } catch {
            return console.error("@argent/login::error"), Ug.closeModal(), null;
          }
        })(t, Yg);
    },
  },
]);
//# sourceMappingURL=907.11dd6d03.chunk.js.map
