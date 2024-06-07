import {
  ReplaySubject,
  computed,
  concatMap,
  delay,
  filter,
  first,
  fromEvent,
  map,
  mergeMap,
  observable,
  of,
  pipe,
  reaction,
  require_proxy_deep,
  runInAction,
  scan,
  timestamp,
  toJS
} from "./chunk-A6J2VAW2.js";
import "./chunk-4RUCNEUM.js";
import {
  __publicField,
  __toESM
} from "./chunk-J32WSRGE.js";

// node_modules/.pnpm/@latticexyz+utils@2.0.12/node_modules/@latticexyz/utils/dist/index.js
var import_proxy_deep = __toESM(require_proxy_deep());
function hr(r) {
  return r.length !== 0;
}
function Ar(r) {
  return r.filter((e) => e != null);
}
function p() {
  let r = null, e = null, t = new Promise((n, o) => {
    r = (i) => n(i), e = (i) => o(i);
  });
  return [r, e, t];
}
async function R(r) {
  let [e, , t] = p(), n = reaction(() => r.get(), (i) => {
    i && e(i);
  }, { fireImmediately: true }), o = await t;
  return n(), o;
}
function F(r) {
  return typeof r == "object" && !Array.isArray(r) && r !== null;
}
function S(r) {
  return r instanceof Function;
}
function k(r, e) {
  if (e.length === 0)
    return r;
  if (e.length === 1)
    return r[e[0]];
  let [t, ...n] = e, o = r[t];
  if (!F(o))
    throw new Error("Path does not exist on the target");
  return k(o, n);
}
function Br(r) {
  let e = [], t = new import_proxy_deep.default({}, { get(n, o) {
    let i = r.get();
    return i ? o === "proxied" ? false : Reflect.get(i, o) : o === "proxied" ? true : o === "name" ? "ProxiedTarget" : o === "toJSON" ? () => ({ proxied: true }) : this.nest(() => {
    });
  }, apply(n, o, i) {
    let s = r.get();
    if (s) {
      let a = k(s, this.path);
      if (!S(a))
        throw new Error("Target is not callable");
      return Reflect.apply(a, o, i);
    } else {
      let [a, l, u] = p();
      return e.push({ path: this.path, args: i, resolve: a, reject: l }), u;
    }
  } });
  return reaction(() => r.get(), (n) => {
    if (!n)
      return;
    let o = e.splice(0);
    for (let { path: i, args: s, resolve: a, reject: l } of o) {
      let u = k(n, i);
      s && S(u) ? (async () => {
        try {
          a(await u(...s));
        } catch (f) {
          l(f);
        }
      })() : a(u);
    }
  }), t;
}
function _r(r) {
  let e = [];
  for (let t of Object.values(r))
    isNaN(Number(t)) || e.push(Number(t));
  return e;
}
function $r(r, e) {
  let t = {};
  for (let n in r)
    t[n] = e(r[n], n);
  return t;
}
function Q(r, e = 0) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
}
function Yr(r) {
  return r[Q(r.length - 1)];
}
function ur() {
  return pipe(filter((r) => r != null));
}
function Zr() {
  return pipe(concatMap((r) => r));
}
function re(r) {
  return pipe(timestamp(), scan((e, t) => {
    let n = 0;
    if (e !== null) {
      let o = t.timestamp - e.timestamp;
      n = o > r ? 0 : r - o;
    }
    return { timestamp: t.timestamp, delay: n, value: t.value };
  }, null), ur(), mergeMap((e) => of(e.value).pipe(delay(e.delay)), 1));
}
function ee(r) {
  return computed(() => r.get());
}
function te(r) {
  let e = new ReplaySubject(1);
  return reaction(() => r.get(), (t) => {
    t != null && e.next(t);
  }, { fireImmediately: true }), e;
}
function ne(r) {
  let e = new ReplaySubject(1);
  return reaction(() => toJS(r), (t) => {
    t != null && e.next(t);
  }, { fireImmediately: true }), e;
}
function oe(r) {
  let e = observable.box();
  return r.subscribe((t) => runInAction(() => e.set(t))), computed(() => e.get());
}
async function ie(r) {
  let e = observable.box();
  r.subscribe((n) => runInAction(() => e.set(n)));
  let t = computed(() => e.get());
  return await R(t), t;
}
async function lr(r, e = (t) => t != null) {
  let [t, , n] = p();
  return r.pipe(first(e)).subscribe(t), n;
}
async function ae(r) {
  let e = {};
  return r.subscribe((t) => e.current = t), e.current = await lr(r), e;
}
var ue = function() {
  let r = cr, e = mr;
  return e(r(32), 8) + "-" + e(r(16), 4) + "-" + e(16384 | r(12), 4) + "-" + e(32768 | r(14), 4) + "-" + e(r(48), 12);
};
var cr = function(r) {
  if (r < 0 || r > 53)
    return NaN;
  let e = 0 | Math.random() * 1073741824;
  return r > 30 ? e + (0 | Math.random() * (1 << r - 30)) * 1073741824 : e >>> 30 - r;
};
var mr = function(r, e) {
  let t = r.toString(16), n = e - t.length, o = "0";
  for (; n > 0; n >>>= 1, o += o)
    n & 1 && (t = o + t);
  return t;
};
function U(r, e) {
  return new Promise((t) => setTimeout(() => t(e), r));
}
var pe = function* (r = 0, e = 1, t = 0) {
  for (let n = 0; n < r; yield t + n++ * e)
    ;
};
async function fr(r, e) {
  throw await U(r), new Error(e);
}
var de = async (r, e, t) => Promise.race([r, fr(e, t)]);
var Te = (r, e = [], t = 10, n = 1e3) => {
  let [o, i, s] = p();
  return (async () => {
    let l;
    for (let u = 0; u < t; u++)
      try {
        l = await r(...e), o(l);
        break;
      } catch (f) {
        u < t - 1 ? (console.info("[CallWithRetry Failed] attempt number=" + u, r), console.error(f), await U(Math.min(n * 2 ** u + Math.random() * 100, 15e3))) : i(f);
      }
  })(), s;
};
function y(r) {
  return { ...r, [Symbol.iterator]() {
    return this;
  } };
}
function be(r, e) {
  return y(e ? { next() {
    let t = r.next();
    return t.done ? e.next() : t;
  } } : r);
}
function ge(r, e) {
  return y({ next() {
    let n = r.next(), o = e.next();
    return n.done && o.done ? { done: true, value: null } : { value: [n.value, o.value] };
  } });
}
function I(r, e) {
  return y({ next() {
    let { done: t, value: n } = r.next();
    return { done: t, value: t ? n : e(n) };
  } });
}
function ye(r) {
  let e = 0;
  return y({ next() {
    let n = e >= r.length;
    return n ? { done: n, value: null } : { value: r[e++] };
  } });
}
function Ae(r, e) {
  return e.x >= r.x && e.y >= r.y && e.x < r.x + r.width && e.y < r.y + r.height;
}
function we(r) {
  let e = [];
  for (let t = 0; t < r.width; t++)
    for (let n = 0; n < r.height; n++)
      e.push({ x: r.x + t, y: r.y + n });
  return e;
}
function Ve(r, e) {
  return e.subscribe((t) => r.postMessage(t)), fromEvent(r, "message").pipe(map((t) => t.data));
}
function Oe(r) {
  let e = fromEvent(self, "message");
  r.work(e.pipe(map((n) => n.data))).subscribe((n) => self.postMessage(n));
}
function pr(r, e) {
  return r & 2 ** e - 1;
}
function dr(r, e) {
  if (e.reduce((n, o) => n + o, 0) > 32)
    throw new Error("JS pretends integers are 32 bit when bitshifts are involved");
  if (r.length !== e.length)
    throw new Error("Arrays' lengths must match");
  for (let n = 0; n < r.length; n++) {
    if (r[n] < 0)
      throw new Error("Underflow: can only pack unsigned integer");
    if (r[n] > 2 ** e[n] - 1) {
      let o = `Overflow: ${r[n]} does not fit in ${e[n]} bits`;
      throw new Error(o);
    }
  }
  let t = 0;
  for (let n = 0; n < r.length; n++)
    t = t << e[n] | r[n];
  return t;
}
function Tr(r, e) {
  let t = [], n = r;
  for (let o = e.length - 1; o >= 0; o--)
    t.unshift(pr(n, e[o])), n = n >>> e[o];
  return t;
}
function ke(r) {
  return dr(r, [8, 24]);
}
function Ee(r) {
  return Tr(r, [8, 24]);
}
var xr = 2 ** 16 - 1;
var h = 2 ** 15 - 1;
function Ne(r, e) {
  let t = new A();
  for (let n of r.coords())
    e.get(n) || t.set(n, true);
  return t;
}
function v(r) {
  return r.x << 16 | r.y & xr;
}
function Y(r) {
  let e = r >> 16, t = r << 16 >> 16;
  return { x: e, y: t };
}
var A = class {
  constructor(e) {
    __publicField(this, "map");
    __publicField(this, "defaultValue");
    this.map = /* @__PURE__ */ new Map(), this.defaultValue = e == null ? void 0 : e.defaultValue;
  }
  static from(e) {
    let t = new A();
    return t.map = e.map, t.defaultValue = e.defaultValue, t;
  }
  set(e, t) {
    if (e.x > h || e.x < -1 * h || e.y > h || e.y < -1 * h)
      throw new Error(`CoordMap only supports coords up to ${h}`);
    return this.map.set(v(e), t);
  }
  get(e) {
    return this.map.get(v(e)) ?? this.defaultValue;
  }
  keys() {
    return this.map.keys();
  }
  coords() {
    return I(this.map.keys(), (e) => Y(e));
  }
  entries() {
    return this.map.entries();
  }
  toArray() {
    return Array.from(this.map.entries()).map(([t, n]) => [Y(t), n]);
  }
  values() {
    return this.map.values();
  }
  delete(e) {
    return this.map.delete(v(e));
  }
  has(e) {
    return this.map.has(v(e));
  }
  clear() {
    for (let e of this.map.keys())
      this.map.delete(e);
  }
  get size() {
    return this.map.size;
  }
};
function V(r) {
  return `${r.x}/${r.y}/${r.z}`;
}
function W(r) {
  let e = r.split("/");
  return { x: Number(e[0]), y: Number(e[1]), z: Number(e[2]) };
}
var O = class {
  constructor(e) {
    __publicField(this, "map");
    __publicField(this, "defaultValue");
    this.map = /* @__PURE__ */ new Map(), this.defaultValue = e == null ? void 0 : e.defaultValue;
  }
  static from(e) {
    let t = new O();
    return t.map = e.map, t.defaultValue = e.defaultValue, t;
  }
  set(e, t) {
    return this.map.set(V(e), t);
  }
  get(e) {
    return this.map.get(V(e)) ?? this.defaultValue;
  }
  keys() {
    return this.map.keys();
  }
  coords() {
    return I(this.map.keys(), (e) => W(e));
  }
  entries() {
    return this.map.entries();
  }
  toArray() {
    return Array.from(this.map.entries()).map(([t, n]) => [W(t), n]);
  }
  values() {
    return this.map.values();
  }
  delete(e) {
    return this.map.delete(V(e));
  }
  has(e) {
    return this.map.has(V(e));
  }
  clear() {
    for (let e of this.map.keys())
      this.map.delete(e);
  }
  get size() {
    return this.map.size;
  }
};
function J(r, e) {
  r.substring(0, 2) == "0x" && (r = r.substring(2));
  let t = e / 4;
  return r = r.padStart(t, "0"), r = r.substring(r.length - t), `0x${r}`;
}
function X(r) {
  return J(r, 160);
}
function Pe(r) {
  return J(r, 256);
}
function _e(r) {
  if (r[0] !== "0" && r[1] !== "x")
    throw new Error("Invalid hex string");
  return "0x" + r.substring(10);
}
function d(r, e, t) {
  return (((e ^ t) * 134775813 ^ r + e) * (1103515245 * e << 16 ^ 1103515245 * t - 134775813) >>> 0) / 4294967295;
}
function m(r, e) {
  if (r < 0)
    for (; r < 0; )
      r += e;
  return r % e;
}
function N(r, e, t, n, o, i, s) {
  let a = n - t - (r - e);
  return (e * Math.pow(i, 3) + o * (t * Math.pow(i, 2) + r * i * (-i + o) + o * (-(e + a) * i + a * o))) * s;
}
function $e(r, e, t, n = Number.MAX_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return { seed: Math.floor(r * Number.MAX_SAFE_INTEGER), periodX: n, periodY: o, octave: e, scale: t };
}
function De(r, e) {
  let t = Math.floor(e), n = e - t;
  return N(d(r.seed, m(t - 1, r.periodX), 0), d(r.seed, m(t, r.periodX), 0), d(r.seed, m(t + 1, r.periodX), 0), d(r.seed, m(t + 2, r.periodX), 0), n, 1, 1) * 0.666666 + 0.166666;
}
function Ye({ octave: r, periodX: e, periodY: t, seed: n, scale: o }, i, s) {
  let a = Math.floor(i / r), l = Math.floor(i * 1e3 / r) - a * 1e3, u = Math.floor(s / r), f = Math.floor(s * 1e3 / r) - u * 1e3, x = m(a - 1, e), c = m(a, e), b = m(a + 1, e), K = m(a + 2, e), g = new Array(4);
  for (let w = 0; w < 4; ++w) {
    let C = m(u - 1 + w, t);
    g[w] = N(d(n, x, C), d(n, c, C), d(n, b, C), d(n, K, C), l, 1e3, 1);
  }
  return Math.floor(N(g[0], g[1], g[2], g[3], f, 1e3, o) / Math.pow(1e3, 6));
}
var T = "mud-logger-topics";
function Je() {
  let r = window.console, e = !!localStorage.getItem(T), t = localStorage.getItem(T), n = t ? JSON.parse(t) : [];
  function o(...c) {
    e || r.log(...c);
  }
  function i(c, ...b) {
    (!e || n.includes(c)) && (r.log(`--- BETTER CONSOLE / TOPIC ${c} ---`), r.log(...b));
  }
  function s() {
    localStorage.setItem(T, JSON.stringify([])), e = true;
  }
  function a() {
    localStorage.removeItem(T), e = false;
  }
  function l(c) {
    n.push(c), localStorage.setItem(T, JSON.stringify(n));
  }
  function u(c) {
    n = n.filter((b) => b !== c), localStorage.setItem(T, JSON.stringify(n));
  }
  function f() {
    n = [], localStorage.setItem(T, JSON.stringify(n));
  }
  let x = { ...r, log: o, logWithTopic: i, enableFilters: s, disableFilters: a, addTopic: l, removeTopic: u, resetTopics: f };
  return window.logger = x, window.console = x, x;
}
function ze(r, e) {
  if (r.length !== e.length)
    throw new Error("points must have same dimension");
  return Math.sqrt(r.reduce((t, n, o) => t + Math.pow(r[o] - e[o], 2), 0));
}
function Ke(r) {
  return (r < 0 ? -1 : 1) * Math.floor(Math.abs(r));
}
var Ge = (r) => `0x${[...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("")}`;
var Qe = (r) => [...r].map((e) => String.fromCharCode(e)).join("");
function z(r) {
  return /^(0x)?([\da-f]{2})*$/i.test(r);
}
var H = (r) => {
  if (!z(r))
    throw console.error("Invalid hex string", r), new Error("Invalid hex string");
  let e = r.match(/[\da-f]{2}/gi);
  return e ? new Uint8Array(e.map((t) => parseInt(t, 16))) : new Uint8Array([]);
};
var nt = (r) => {
  if (r.length > 16)
    throw new Error("string too long");
  return new Uint8Array(16).map((e, t) => r.charCodeAt(t));
};
var ot = (r) => {
  if (r.length > 32)
    throw new Error("string too long");
  return new Uint8Array(32).map((e, t) => r.charCodeAt(t));
};
function br(r) {
  return r.substring(0, 2) == "0x" && (r = r.substring(2)), (r.length % 2 !== 0 ? "0x0" : "0x") + r;
}
function gr(r) {
  return H(r);
}
function dt(r) {
  return r.length === 0 ? "0x00" : br(r.reduce((e, t) => e + t.toString(16).padStart(2, "0"), ""));
}
function Tt(...r) {
  return Uint8Array.from(r.reduce((e, t) => [...e, ...t], []));
}
function xt(r, e) {
  let t = [], n = 0;
  for (let o of e) {
    let i = new Uint8Array(o);
    t.push(i);
    for (let s = 0; s < o; s++)
      i[s] = r[n], n++;
  }
  return t;
}
function bt(r) {
  let e = new ArrayBuffer(r.length * 4), t = new Int32Array(e);
  for (let n = 0; n < r.length; n++)
    t[n] = r[n];
  return new Uint8Array(e);
}
function gt(r) {
  return [...new Int32Array(r.buffer)];
}
function yt(r) {
  return gr(X(r));
}
function yr(r) {
  if (r < 2)
    throw new Error("Minimum size is 2");
  if (r > 64)
    throw new Error("Maximum size is 64");
  let e = 2 ** (r - 1) - 1, t = -e - 1;
  return (n) => {
    if (n = n << 0, n > e || n < t)
      throw console.log("value", n, e, t, n > e, n < t), new Error(`Int${r} overflow`);
    return n < 0 ? 2 ** r + n : n;
  };
}
var ht = yr(32);
export {
  A as CoordMap,
  bt as Int32ArrayToUint8Array,
  dt as Uint8ArrayToHexString,
  gt as Uint8ArrayToInt32Array,
  O as VoxelCoordMap,
  Ae as areaContains,
  Ge as arrayToHex,
  ye as arrayToIterator,
  Zr as awaitPromise,
  lr as awaitStreamValue,
  R as awaitValue,
  Qe as bytesToString,
  Br as cacheUntilReady,
  Te as callWithRetry,
  te as computedToStream,
  be as concatIterators,
  Tt as concatUint8Arrays,
  v as coordToKey,
  we as coordsOf,
  yr as createToInt,
  $e as cubicNoiseConfig,
  De as cubicNoiseSample1,
  Ye as cubicNoiseSample2,
  p as deferred,
  Je as enableLogger,
  yt as ethAddressToUint8Array,
  ze as euclidean,
  _e as extractEncodedArguments,
  ur as filterNullish,
  Ar as filterNullishValues,
  br as formatHex,
  Ve as fromWorker,
  gr as hexStringToUint8Array,
  H as hexToArray,
  N as interpolate,
  S as isFunction,
  z as isHex,
  hr as isNotEmpty,
  F as isObject,
  Y as keyToCoord,
  y as makeIterable,
  $r as mapObject,
  ge as mergeIterators,
  _r as numValues,
  ee as observableToComputed,
  ne as observableToStream,
  dr as pack,
  ke as packTuple,
  J as padToBitLength,
  Yr as pickRandom,
  Q as random,
  d as randomize,
  pe as range,
  fr as rejectAfter,
  Ke as roundTowardsZero,
  Oe as runWorker,
  U as sleep,
  xt as splitUint8Arrays,
  oe as streamToComputed,
  ie as streamToDefinedComputed,
  ae as streamToWrappedValue,
  re as stretch,
  nt as stringToBytes16,
  ot as stringToBytes32,
  Ne as subtract,
  m as tile,
  de as timeoutAfter,
  Pe as to256BitString,
  X as toEthAddress,
  ht as toInt32,
  I as transformIterator,
  Tr as unpack,
  Ee as unpackTuple,
  ue as uuid
};
/*! Bundled license information:

@latticexyz/utils/dist/index.js:
  (**
   * UUID.core.js - UUID.js for Minimalists
   *
   * @file
   * @author  LiosK
   * @version v4.2.0
   * @license Apache License 2.0: Copyright (c) 2010-2018 LiosK
   * @url https://github.com/LiosK/UUID.js/blob/master/src/uuid.core.js
   *)
*/
//# sourceMappingURL=@latticexyz_utils.js.map
