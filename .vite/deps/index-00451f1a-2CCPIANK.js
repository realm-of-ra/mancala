import {
  _
} from "./chunk-NS6I2LM4.js";
import "./chunk-5PXFP6GF.js";
import {
  F,
  L,
  R
} from "./chunk-ABGJYFXF.js";
import {
  Account,
  RpcProvider2,
  constants_exports
} from "./chunk-TQUWFIKU.js";
import "./chunk-ELN4VAZN.js";
import "./chunk-OPAFF7F5.js";
import {
  __commonJS
} from "./chunk-J32WSRGE.js";

// node_modules/.pnpm/ws@7.4.6/node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/ws@7.4.6/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/.pnpm/starknetkit@1.1.9_starknet@6.8.0/node_modules/starknetkit/dist/index-00451f1a.js
var Au = Object.defineProperty;
var Tu = (i, e, t) => e in i ? Au(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var we = (i, e, t) => (Tu(i, typeof e != "symbol" ? e + "" : e, t), t);
var sn = { exports: {} };
var $i = typeof Reflect == "object" ? Reflect : null;
var Bn = $i && typeof $i.apply == "function" ? $i.apply : function(e, t, s) {
  return Function.prototype.apply.call(e, t, s);
};
var qs;
$i && typeof $i.ownKeys == "function" ? qs = $i.ownKeys : Object.getOwnPropertySymbols ? qs = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : qs = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Lu(i) {
  console && console.warn && console.warn(i);
}
var Ya = Number.isNaN || function(e) {
  return e !== e;
};
function Oe() {
  Oe.init.call(this);
}
sn.exports = Oe;
sn.exports.once = zu;
Oe.EventEmitter = Oe;
Oe.prototype._events = void 0;
Oe.prototype._eventsCount = 0;
Oe.prototype._maxListeners = void 0;
var kn = 10;
function tr(i) {
  if (typeof i != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof i);
}
Object.defineProperty(Oe, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return kn;
  },
  set: function(i) {
    if (typeof i != "number" || i < 0 || Ya(i))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + i + ".");
    kn = i;
  }
});
Oe.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Oe.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Ya(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Ja(i) {
  return i._maxListeners === void 0 ? Oe.defaultMaxListeners : i._maxListeners;
}
Oe.prototype.getMaxListeners = function() {
  return Ja(this);
};
Oe.prototype.emit = function(e) {
  for (var t = [], s = 1; s < arguments.length; s++)
    t.push(arguments[s]);
  var r = e === "error", n = this._events;
  if (n !== void 0)
    r = r && n.error === void 0;
  else if (!r)
    return false;
  if (r) {
    var o;
    if (t.length > 0 && (o = t[0]), o instanceof Error)
      throw o;
    var c = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw c.context = o, c;
  }
  var u = n[e];
  if (u === void 0)
    return false;
  if (typeof u == "function")
    Bn(u, this, t);
  else
    for (var d = u.length, p = tc(u, d), s = 0; s < d; ++s)
      Bn(p[s], this, t);
  return true;
};
function Qa(i, e, t, s) {
  var r, n, o;
  if (tr(t), n = i._events, n === void 0 ? (n = i._events = /* @__PURE__ */ Object.create(null), i._eventsCount = 0) : (n.newListener !== void 0 && (i.emit(
    "newListener",
    e,
    t.listener ? t.listener : t
  ), n = i._events), o = n[e]), o === void 0)
    o = n[e] = t, ++i._eventsCount;
  else if (typeof o == "function" ? o = n[e] = s ? [t, o] : [o, t] : s ? o.unshift(t) : o.push(t), r = Ja(i), r > 0 && o.length > r && !o.warned) {
    o.warned = true;
    var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = i, c.type = e, c.count = o.length, Lu(c);
  }
  return i;
}
Oe.prototype.addListener = function(e, t) {
  return Qa(this, e, t, false);
};
Oe.prototype.on = Oe.prototype.addListener;
Oe.prototype.prependListener = function(e, t) {
  return Qa(this, e, t, true);
};
function Mu() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Xa(i, e, t) {
  var s = { fired: false, wrapFn: void 0, target: i, type: e, listener: t }, r = Mu.bind(s);
  return r.listener = t, s.wrapFn = r, r;
}
Oe.prototype.once = function(e, t) {
  return tr(t), this.on(e, Xa(this, e, t)), this;
};
Oe.prototype.prependOnceListener = function(e, t) {
  return tr(t), this.prependListener(e, Xa(this, e, t)), this;
};
Oe.prototype.removeListener = function(e, t) {
  var s, r, n, o, c;
  if (tr(t), r = this._events, r === void 0)
    return this;
  if (s = r[e], s === void 0)
    return this;
  if (s === t || s.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, s.listener || t));
  else if (typeof s != "function") {
    for (n = -1, o = s.length - 1; o >= 0; o--)
      if (s[o] === t || s[o].listener === t) {
        c = s[o].listener, n = o;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? s.shift() : qu(s, n), s.length === 1 && (r[e] = s[0]), r.removeListener !== void 0 && this.emit("removeListener", e, c || t);
  }
  return this;
};
Oe.prototype.off = Oe.prototype.removeListener;
Oe.prototype.removeAllListeners = function(e) {
  var t, s, r;
  if (s = this._events, s === void 0)
    return this;
  if (s.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : s[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete s[e]), this;
  if (arguments.length === 0) {
    var n = Object.keys(s), o;
    for (r = 0; r < n.length; ++r)
      o = n[r], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = s[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (r = t.length - 1; r >= 0; r--)
      this.removeListener(e, t[r]);
  return this;
};
function Za(i, e, t) {
  var s = i._events;
  if (s === void 0)
    return [];
  var r = s[e];
  return r === void 0 ? [] : typeof r == "function" ? t ? [r.listener || r] : [r] : t ? ju(r) : tc(r, r.length);
}
Oe.prototype.listeners = function(e) {
  return Za(this, e, true);
};
Oe.prototype.rawListeners = function(e) {
  return Za(this, e, false);
};
Oe.listenerCount = function(i, e) {
  return typeof i.listenerCount == "function" ? i.listenerCount(e) : ec.call(i, e);
};
Oe.prototype.listenerCount = ec;
function ec(i) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[i];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
Oe.prototype.eventNames = function() {
  return this._eventsCount > 0 ? qs(this._events) : [];
};
function tc(i, e) {
  for (var t = new Array(e), s = 0; s < e; ++s)
    t[s] = i[s];
  return t;
}
function qu(i, e) {
  for (; e + 1 < i.length; e++)
    i[e] = i[e + 1];
  i.pop();
}
function ju(i) {
  for (var e = new Array(i.length), t = 0; t < e.length; ++t)
    e[t] = i[t].listener || i[t];
  return e;
}
function zu(i, e) {
  return new Promise(function(t, s) {
    function r(o) {
      i.removeListener(e, n), s(o);
    }
    function n() {
      typeof i.removeListener == "function" && i.removeListener("error", r), t([].slice.call(arguments));
    }
    ic(i, e, n, { once: true }), e !== "error" && Ku(i, r, { once: true });
  });
}
function Ku(i, e, t) {
  typeof i.on == "function" && ic(i, "error", e, t);
}
function ic(i, e, t, s) {
  if (typeof i.on == "function")
    s.once ? i.once(e, t) : i.on(e, t);
  else if (typeof i.addEventListener == "function")
    i.addEventListener(e, function r(n) {
      s.once && i.removeEventListener(e, r), t(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof i);
}
var We = sn.exports;
var ir = L(We);
var sr = {};
var sc = { exports: {} };
(function(i) {
  var e, t, s, r, n, o, c, u, d, p, b, x, O, _2, C, F2, K, I, D, y, w, f, a;
  (function(l) {
    var L2 = typeof F == "object" ? F : typeof self == "object" ? self : typeof this == "object" ? this : {};
    l(v(L2, v(i.exports)));
    function v(R2, $) {
      return R2 !== L2 && (typeof Object.create == "function" ? Object.defineProperty(R2, "__esModule", { value: true }) : R2.__esModule = true), function(q, m) {
        return R2[q] = $ ? $(q, m) : m;
      };
    }
  })(function(l) {
    var L2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(v, R2) {
      v.__proto__ = R2;
    } || function(v, R2) {
      for (var $ in R2)
        R2.hasOwnProperty($) && (v[$] = R2[$]);
    };
    e = function(v, R2) {
      L2(v, R2);
      function $() {
        this.constructor = v;
      }
      v.prototype = R2 === null ? Object.create(R2) : ($.prototype = R2.prototype, new $());
    }, t = Object.assign || function(v) {
      for (var R2, $ = 1, q = arguments.length; $ < q; $++) {
        R2 = arguments[$];
        for (var m in R2)
          Object.prototype.hasOwnProperty.call(R2, m) && (v[m] = R2[m]);
      }
      return v;
    }, s = function(v, R2) {
      var $ = {};
      for (var q in v)
        Object.prototype.hasOwnProperty.call(v, q) && R2.indexOf(q) < 0 && ($[q] = v[q]);
      if (v != null && typeof Object.getOwnPropertySymbols == "function")
        for (var m = 0, q = Object.getOwnPropertySymbols(v); m < q.length; m++)
          R2.indexOf(q[m]) < 0 && Object.prototype.propertyIsEnumerable.call(v, q[m]) && ($[q[m]] = v[q[m]]);
      return $;
    }, r = function(v, R2, $, q) {
      var m = arguments.length, E = m < 3 ? R2 : q === null ? q = Object.getOwnPropertyDescriptor(R2, $) : q, B;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        E = Reflect.decorate(v, R2, $, q);
      else
        for (var z = v.length - 1; z >= 0; z--)
          (B = v[z]) && (E = (m < 3 ? B(E) : m > 3 ? B(R2, $, E) : B(R2, $)) || E);
      return m > 3 && E && Object.defineProperty(R2, $, E), E;
    }, n = function(v, R2) {
      return function($, q) {
        R2($, q, v);
      };
    }, o = function(v, R2) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(v, R2);
    }, c = function(v, R2, $, q) {
      function m(E) {
        return E instanceof $ ? E : new $(function(B) {
          B(E);
        });
      }
      return new ($ || ($ = Promise))(function(E, B) {
        function z(M) {
          try {
            U(q.next(M));
          } catch (H) {
            B(H);
          }
        }
        function j(M) {
          try {
            U(q.throw(M));
          } catch (H) {
            B(H);
          }
        }
        function U(M) {
          M.done ? E(M.value) : m(M.value).then(z, j);
        }
        U((q = q.apply(v, R2 || [])).next());
      });
    }, u = function(v, R2) {
      var $ = { label: 0, sent: function() {
        if (E[0] & 1)
          throw E[1];
        return E[1];
      }, trys: [], ops: [] }, q, m, E, B;
      return B = { next: z(0), throw: z(1), return: z(2) }, typeof Symbol == "function" && (B[Symbol.iterator] = function() {
        return this;
      }), B;
      function z(U) {
        return function(M) {
          return j([U, M]);
        };
      }
      function j(U) {
        if (q)
          throw new TypeError("Generator is already executing.");
        for (; $; )
          try {
            if (q = 1, m && (E = U[0] & 2 ? m.return : U[0] ? m.throw || ((E = m.return) && E.call(m), 0) : m.next) && !(E = E.call(m, U[1])).done)
              return E;
            switch (m = 0, E && (U = [U[0] & 2, E.value]), U[0]) {
              case 0:
              case 1:
                E = U;
                break;
              case 4:
                return $.label++, { value: U[1], done: false };
              case 5:
                $.label++, m = U[1], U = [0];
                continue;
              case 7:
                U = $.ops.pop(), $.trys.pop();
                continue;
              default:
                if (E = $.trys, !(E = E.length > 0 && E[E.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                  $ = 0;
                  continue;
                }
                if (U[0] === 3 && (!E || U[1] > E[0] && U[1] < E[3])) {
                  $.label = U[1];
                  break;
                }
                if (U[0] === 6 && $.label < E[1]) {
                  $.label = E[1], E = U;
                  break;
                }
                if (E && $.label < E[2]) {
                  $.label = E[2], $.ops.push(U);
                  break;
                }
                E[2] && $.ops.pop(), $.trys.pop();
                continue;
            }
            U = R2.call(v, $);
          } catch (M) {
            U = [6, M], m = 0;
          } finally {
            q = E = 0;
          }
        if (U[0] & 5)
          throw U[1];
        return { value: U[0] ? U[1] : void 0, done: true };
      }
    }, a = function(v, R2, $, q) {
      q === void 0 && (q = $), v[q] = R2[$];
    }, d = function(v, R2) {
      for (var $ in v)
        $ !== "default" && !R2.hasOwnProperty($) && (R2[$] = v[$]);
    }, p = function(v) {
      var R2 = typeof Symbol == "function" && Symbol.iterator, $ = R2 && v[R2], q = 0;
      if ($)
        return $.call(v);
      if (v && typeof v.length == "number")
        return {
          next: function() {
            return v && q >= v.length && (v = void 0), { value: v && v[q++], done: !v };
          }
        };
      throw new TypeError(R2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, b = function(v, R2) {
      var $ = typeof Symbol == "function" && v[Symbol.iterator];
      if (!$)
        return v;
      var q = $.call(v), m, E = [], B;
      try {
        for (; (R2 === void 0 || R2-- > 0) && !(m = q.next()).done; )
          E.push(m.value);
      } catch (z) {
        B = { error: z };
      } finally {
        try {
          m && !m.done && ($ = q.return) && $.call(q);
        } finally {
          if (B)
            throw B.error;
        }
      }
      return E;
    }, x = function() {
      for (var v = [], R2 = 0; R2 < arguments.length; R2++)
        v = v.concat(b(arguments[R2]));
      return v;
    }, O = function() {
      for (var v = 0, R2 = 0, $ = arguments.length; R2 < $; R2++)
        v += arguments[R2].length;
      for (var q = Array(v), m = 0, R2 = 0; R2 < $; R2++)
        for (var E = arguments[R2], B = 0, z = E.length; B < z; B++, m++)
          q[m] = E[B];
      return q;
    }, _2 = function(v) {
      return this instanceof _2 ? (this.v = v, this) : new _2(v);
    }, C = function(v, R2, $) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var q = $.apply(v, R2 || []), m, E = [];
      return m = {}, B("next"), B("throw"), B("return"), m[Symbol.asyncIterator] = function() {
        return this;
      }, m;
      function B(te) {
        q[te] && (m[te] = function(G) {
          return new Promise(function(ie, Q) {
            E.push([te, G, ie, Q]) > 1 || z(te, G);
          });
        });
      }
      function z(te, G) {
        try {
          j(q[te](G));
        } catch (ie) {
          H(E[0][3], ie);
        }
      }
      function j(te) {
        te.value instanceof _2 ? Promise.resolve(te.value.v).then(U, M) : H(E[0][2], te);
      }
      function U(te) {
        z("next", te);
      }
      function M(te) {
        z("throw", te);
      }
      function H(te, G) {
        te(G), E.shift(), E.length && z(E[0][0], E[0][1]);
      }
    }, F2 = function(v) {
      var R2, $;
      return R2 = {}, q("next"), q("throw", function(m) {
        throw m;
      }), q("return"), R2[Symbol.iterator] = function() {
        return this;
      }, R2;
      function q(m, E) {
        R2[m] = v[m] ? function(B) {
          return ($ = !$) ? { value: _2(v[m](B)), done: m === "return" } : E ? E(B) : B;
        } : E;
      }
    }, K = function(v) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var R2 = v[Symbol.asyncIterator], $;
      return R2 ? R2.call(v) : (v = typeof p == "function" ? p(v) : v[Symbol.iterator](), $ = {}, q("next"), q("throw"), q("return"), $[Symbol.asyncIterator] = function() {
        return this;
      }, $);
      function q(E) {
        $[E] = v[E] && function(B) {
          return new Promise(function(z, j) {
            B = v[E](B), m(z, j, B.done, B.value);
          });
        };
      }
      function m(E, B, z, j) {
        Promise.resolve(j).then(function(U) {
          E({ value: U, done: z });
        }, B);
      }
    }, I = function(v, R2) {
      return Object.defineProperty ? Object.defineProperty(v, "raw", { value: R2 }) : v.raw = R2, v;
    }, D = function(v) {
      if (v && v.__esModule)
        return v;
      var R2 = {};
      if (v != null)
        for (var $ in v)
          Object.hasOwnProperty.call(v, $) && (R2[$] = v[$]);
      return R2.default = v, R2;
    }, y = function(v) {
      return v && v.__esModule ? v : { default: v };
    }, w = function(v, R2) {
      if (!R2.has(v))
        throw new TypeError("attempted to get private field on non-instance");
      return R2.get(v);
    }, f = function(v, R2, $) {
      if (!R2.has(v))
        throw new TypeError("attempted to set private field on non-instance");
      return R2.set(v, $), $;
    }, l("__extends", e), l("__assign", t), l("__rest", s), l("__decorate", r), l("__param", n), l("__metadata", o), l("__awaiter", c), l("__generator", u), l("__exportStar", d), l("__createBinding", a), l("__values", p), l("__read", b), l("__spread", x), l("__spreadArrays", O), l("__await", _2), l("__asyncGenerator", C), l("__asyncDelegator", F2), l("__asyncValues", K), l("__makeTemplateObject", I), l("__importStar", D), l("__importDefault", y), l("__classPrivateFieldGet", w), l("__classPrivateFieldSet", f);
  });
})(sc);
var Ft = sc.exports;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: true });
function Vu(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}
fs.safeJsonParse = Vu;
function Bu(i) {
  return typeof i == "string" ? i : JSON.stringify(i, (e, t) => typeof t > "u" ? null : t);
}
fs.safeJsonStringify = Bu;
var ki = { exports: {} };
var Hn;
function ku() {
  return Hn || (Hn = 1, function() {
    let i;
    function e() {
    }
    i = e, i.prototype.getItem = function(t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }, i.prototype.setItem = function(t, s) {
      this[t] = String(s);
    }, i.prototype.removeItem = function(t) {
      delete this[t];
    }, i.prototype.clear = function() {
      const t = this;
      Object.keys(t).forEach(function(s) {
        t[s] = void 0, delete t[s];
      });
    }, i.prototype.key = function(t) {
      return t = t || 0, Object.keys(this)[t];
    }, i.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof F < "u" && F.localStorage ? ki.exports = F.localStorage : typeof window < "u" && window.localStorage ? ki.exports = window.localStorage : ki.exports = new e();
  }()), ki.exports;
}
var yr = {};
var Hi = {};
var Gn;
function Hu() {
  if (Gn)
    return Hi;
  Gn = 1, Object.defineProperty(Hi, "__esModule", { value: true }), Hi.IKeyValueStorage = void 0;
  class i {
  }
  return Hi.IKeyValueStorage = i, Hi;
}
var Gi = {};
var Wn;
function Gu() {
  if (Wn)
    return Gi;
  Wn = 1, Object.defineProperty(Gi, "__esModule", { value: true }), Gi.parseEntry = void 0;
  const i = fs;
  function e(t) {
    var s;
    return [t[0], i.safeJsonParse((s = t[1]) !== null && s !== void 0 ? s : "")];
  }
  return Gi.parseEntry = e, Gi;
}
var Yn;
function Wu() {
  return Yn || (Yn = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true });
    const e = Ft;
    e.__exportStar(Hu(), i), e.__exportStar(Gu(), i);
  }(yr)), yr;
}
Object.defineProperty(sr, "__esModule", { value: true });
sr.KeyValueStorage = void 0;
var Ci = Ft;
var Jn = fs;
var Yu = Ci.__importDefault(ku());
var Ju = Wu();
var rc = class {
  constructor() {
    this.localStorage = Yu.default;
  }
  getKeys() {
    return Ci.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Ci.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Ju.parseEntry);
    });
  }
  getItem(e) {
    return Ci.__awaiter(this, void 0, void 0, function* () {
      const t = this.localStorage.getItem(e);
      if (t !== null)
        return Jn.safeJsonParse(t);
    });
  }
  setItem(e, t) {
    return Ci.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, Jn.safeJsonStringify(t));
    });
  }
  removeItem(e) {
    return Ci.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
};
sr.KeyValueStorage = rc;
var nc = sr.default = rc;
var Wt = {};
var Wi = {};
var V = {};
var mr = {};
var Yi = {};
var Qn;
function Qu() {
  if (Qn)
    return Yi;
  Qn = 1, Object.defineProperty(Yi, "__esModule", { value: true }), Yi.delay = void 0;
  function i(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(true);
      }, e);
    });
  }
  return Yi.delay = i, Yi;
}
var mi = {};
var br = {};
var bi = {};
var Xn;
function Xu() {
  return Xn || (Xn = 1, Object.defineProperty(bi, "__esModule", { value: true }), bi.ONE_THOUSAND = bi.ONE_HUNDRED = void 0, bi.ONE_HUNDRED = 100, bi.ONE_THOUSAND = 1e3), bi;
}
var wr = {};
var Zn;
function Zu() {
  return Zn || (Zn = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true }), i.ONE_YEAR = i.FOUR_WEEKS = i.THREE_WEEKS = i.TWO_WEEKS = i.ONE_WEEK = i.THIRTY_DAYS = i.SEVEN_DAYS = i.FIVE_DAYS = i.THREE_DAYS = i.ONE_DAY = i.TWENTY_FOUR_HOURS = i.TWELVE_HOURS = i.SIX_HOURS = i.THREE_HOURS = i.ONE_HOUR = i.SIXTY_MINUTES = i.THIRTY_MINUTES = i.TEN_MINUTES = i.FIVE_MINUTES = i.ONE_MINUTE = i.SIXTY_SECONDS = i.THIRTY_SECONDS = i.TEN_SECONDS = i.FIVE_SECONDS = i.ONE_SECOND = void 0, i.ONE_SECOND = 1, i.FIVE_SECONDS = 5, i.TEN_SECONDS = 10, i.THIRTY_SECONDS = 30, i.SIXTY_SECONDS = 60, i.ONE_MINUTE = i.SIXTY_SECONDS, i.FIVE_MINUTES = i.ONE_MINUTE * 5, i.TEN_MINUTES = i.ONE_MINUTE * 10, i.THIRTY_MINUTES = i.ONE_MINUTE * 30, i.SIXTY_MINUTES = i.ONE_MINUTE * 60, i.ONE_HOUR = i.SIXTY_MINUTES, i.THREE_HOURS = i.ONE_HOUR * 3, i.SIX_HOURS = i.ONE_HOUR * 6, i.TWELVE_HOURS = i.ONE_HOUR * 12, i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24, i.ONE_DAY = i.TWENTY_FOUR_HOURS, i.THREE_DAYS = i.ONE_DAY * 3, i.FIVE_DAYS = i.ONE_DAY * 5, i.SEVEN_DAYS = i.ONE_DAY * 7, i.THIRTY_DAYS = i.ONE_DAY * 30, i.ONE_WEEK = i.SEVEN_DAYS, i.TWO_WEEKS = i.ONE_WEEK * 2, i.THREE_WEEKS = i.ONE_WEEK * 3, i.FOUR_WEEKS = i.ONE_WEEK * 4, i.ONE_YEAR = i.ONE_DAY * 365;
  }(wr)), wr;
}
var eo;
function oc() {
  return eo || (eo = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true });
    const e = Ft;
    e.__exportStar(Xu(), i), e.__exportStar(Zu(), i);
  }(br)), br;
}
var to;
function el() {
  if (to)
    return mi;
  to = 1, Object.defineProperty(mi, "__esModule", { value: true }), mi.fromMiliseconds = mi.toMiliseconds = void 0;
  const i = oc();
  function e(s) {
    return s * i.ONE_THOUSAND;
  }
  mi.toMiliseconds = e;
  function t(s) {
    return Math.floor(s / i.ONE_THOUSAND);
  }
  return mi.fromMiliseconds = t, mi;
}
var io;
function tl() {
  return io || (io = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true });
    const e = Ft;
    e.__exportStar(Qu(), i), e.__exportStar(el(), i);
  }(mr)), mr;
}
var Ri = {};
var so;
function il() {
  if (so)
    return Ri;
  so = 1, Object.defineProperty(Ri, "__esModule", { value: true }), Ri.Watch = void 0;
  class i {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const s = this.get(t);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const r = Date.now() - s.started;
      this.timestamps.set(t, { started: s.started, elapsed: r });
    }
    get(t) {
      const s = this.timestamps.get(t);
      if (typeof s > "u")
        throw new Error(`No timestamp found for label: ${t}`);
      return s;
    }
    elapsed(t) {
      const s = this.get(t);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return Ri.Watch = i, Ri.default = i, Ri;
}
var vr = {};
var Ji = {};
var ro;
function sl() {
  if (ro)
    return Ji;
  ro = 1, Object.defineProperty(Ji, "__esModule", { value: true }), Ji.IWatch = void 0;
  class i {
  }
  return Ji.IWatch = i, Ji;
}
var no;
function rl() {
  return no || (no = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true }), Ft.__exportStar(sl(), i);
  }(vr)), vr;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  const e = Ft;
  e.__exportStar(tl(), i), e.__exportStar(il(), i), e.__exportStar(rl(), i), e.__exportStar(oc(), i);
})(V);
var _r = {};
var Qi = {};
var Nt = class {
};
var nl = Object.freeze(Object.defineProperty({
  __proto__: null,
  IEvents: Nt
}, Symbol.toStringTag, { value: "Module" }));
var ol = R(nl);
var oo;
function al() {
  if (oo)
    return Qi;
  oo = 1, Object.defineProperty(Qi, "__esModule", { value: true }), Qi.IHeartBeat = void 0;
  const i = ol;
  class e extends i.IEvents {
    constructor(s) {
      super();
    }
  }
  return Qi.IHeartBeat = e, Qi;
}
var ao;
function ac() {
  return ao || (ao = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true }), Ft.__exportStar(al(), i);
  }(_r)), _r;
}
var Er = {};
var wi = {};
var co;
function cl() {
  if (co)
    return wi;
  co = 1, Object.defineProperty(wi, "__esModule", { value: true }), wi.HEARTBEAT_EVENTS = wi.HEARTBEAT_INTERVAL = void 0;
  const i = V;
  return wi.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, wi.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, wi;
}
var ho;
function cc() {
  return ho || (ho = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: true }), Ft.__exportStar(cl(), i);
  }(Er)), Er;
}
var uo;
function hl() {
  if (uo)
    return Wi;
  uo = 1, Object.defineProperty(Wi, "__esModule", { value: true }), Wi.HeartBeat = void 0;
  const i = Ft, e = We, t = V, s = ac(), r = cc();
  class n extends s.IHeartBeat {
    constructor(c) {
      super(c), this.events = new e.EventEmitter(), this.interval = r.HEARTBEAT_INTERVAL, this.interval = (c == null ? void 0 : c.interval) || r.HEARTBEAT_INTERVAL;
    }
    static init(c) {
      return i.__awaiter(this, void 0, void 0, function* () {
        const u = new n(c);
        return yield u.init(), u;
      });
    }
    init() {
      return i.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(c, u) {
      this.events.on(c, u);
    }
    once(c, u) {
      this.events.once(c, u);
    }
    off(c, u) {
      this.events.off(c, u);
    }
    removeListener(c, u) {
      this.events.removeListener(c, u);
    }
    initialize() {
      return i.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), t.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(r.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Wi.HeartBeat = n, Wi;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  const e = Ft;
  e.__exportStar(hl(), i), e.__exportStar(ac(), i), e.__exportStar(cc(), i);
})(Wt);
var ee = {};
var Sr;
var lo;
function ul() {
  if (lo)
    return Sr;
  lo = 1;
  function i(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  Sr = e;
  function e(t, s, r) {
    var n = r && r.stringify || i, o = 1;
    if (typeof t == "object" && t !== null) {
      var c = s.length + o;
      if (c === 1)
        return t;
      var u = new Array(c);
      u[0] = n(t);
      for (var d = 1; d < c; d++)
        u[d] = n(s[d]);
      return u.join(" ");
    }
    if (typeof t != "string")
      return t;
    var p = s.length;
    if (p === 0)
      return t;
    for (var b = "", x = 1 - o, O = -1, _2 = t && t.length || 0, C = 0; C < _2; ) {
      if (t.charCodeAt(C) === 37 && C + 1 < _2) {
        switch (O = O > -1 ? O : 0, t.charCodeAt(C + 1)) {
          case 100:
          case 102:
            if (x >= p || s[x] == null)
              break;
            O < C && (b += t.slice(O, C)), b += Number(s[x]), O = C + 2, C++;
            break;
          case 105:
            if (x >= p || s[x] == null)
              break;
            O < C && (b += t.slice(O, C)), b += Math.floor(Number(s[x])), O = C + 2, C++;
            break;
          case 79:
          case 111:
          case 106:
            if (x >= p || s[x] === void 0)
              break;
            O < C && (b += t.slice(O, C));
            var F2 = typeof s[x];
            if (F2 === "string") {
              b += "'" + s[x] + "'", O = C + 2, C++;
              break;
            }
            if (F2 === "function") {
              b += s[x].name || "<anonymous>", O = C + 2, C++;
              break;
            }
            b += n(s[x]), O = C + 2, C++;
            break;
          case 115:
            if (x >= p)
              break;
            O < C && (b += t.slice(O, C)), b += String(s[x]), O = C + 2, C++;
            break;
          case 37:
            O < C && (b += t.slice(O, C)), b += "%", O = C + 2, C++, x--;
            break;
        }
        ++x;
      }
      ++C;
    }
    return O === -1 ? t : (O < _2 && (b += t.slice(O)), b);
  }
  return Sr;
}
var Ir;
var fo;
function ll() {
  if (fo)
    return Ir;
  fo = 1;
  const i = ul();
  Ir = r;
  const e = w().console || {}, t = {
    mapHttpRequest: _2,
    mapHttpResponse: _2,
    wrapRequestSerializer: C,
    wrapResponseSerializer: C,
    wrapErrorSerializer: C,
    req: _2,
    res: _2,
    err: x
  };
  function s(f, a) {
    return Array.isArray(f) ? f.filter(function(L2) {
      return L2 !== "!stdSerializers.err";
    }) : f === true ? Object.keys(a) : false;
  }
  function r(f) {
    f = f || {}, f.browser = f.browser || {};
    const a = f.browser.transmit;
    if (a && typeof a.send != "function")
      throw Error("pino: transmit option must have a send function");
    const l = f.browser.write || e;
    f.browser.write && (f.browser.asObject = true);
    const L2 = f.serializers || {}, v = s(f.browser.serialize, L2);
    let R2 = f.browser.serialize;
    Array.isArray(f.browser.serialize) && f.browser.serialize.indexOf("!stdSerializers.err") > -1 && (R2 = false);
    const $ = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof l == "function" && (l.error = l.fatal = l.warn = l.info = l.debug = l.trace = l), f.enabled === false && (f.level = "silent");
    const q = f.level || "info", m = Object.create(l);
    m.log || (m.log = F2), Object.defineProperty(m, "levelVal", {
      get: B
    }), Object.defineProperty(m, "level", {
      get: z,
      set: j
    });
    const E = {
      transmit: a,
      serialize: v,
      asObject: f.browser.asObject,
      levels: $,
      timestamp: O(f)
    };
    m.levels = r.levels, m.level = q, m.setMaxListeners = m.getMaxListeners = m.emit = m.addListener = m.on = m.prependListener = m.once = m.prependOnceListener = m.removeListener = m.removeAllListeners = m.listeners = m.listenerCount = m.eventNames = m.write = m.flush = F2, m.serializers = L2, m._serialize = v, m._stdErrSerialize = R2, m.child = U, a && (m._logEvent = b());
    function B() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function j(M) {
      if (M !== "silent" && !this.levels.values[M])
        throw Error("unknown level " + M);
      this._level = M, n(E, m, "error", "log"), n(E, m, "fatal", "error"), n(E, m, "warn", "error"), n(E, m, "info", "log"), n(E, m, "debug", "log"), n(E, m, "trace", "log");
    }
    function U(M, H) {
      if (!M)
        throw new Error("missing bindings for child Pino");
      H = H || {}, v && M.serializers && (H.serializers = M.serializers);
      const te = H.serializers;
      if (v && te) {
        var G = Object.assign({}, L2, te), ie = f.browser.serialize === true ? Object.keys(G) : v;
        delete M.serializers, u([M], ie, G, this._stdErrSerialize);
      }
      function Q(se) {
        this._childLevel = (se._childLevel | 0) + 1, this.error = d(se, M, "error"), this.fatal = d(se, M, "fatal"), this.warn = d(se, M, "warn"), this.info = d(se, M, "info"), this.debug = d(se, M, "debug"), this.trace = d(se, M, "trace"), G && (this.serializers = G, this._serialize = ie), a && (this._logEvent = b(
          [].concat(se._logEvent.bindings, M)
        ));
      }
      return Q.prototype = this, new Q(this);
    }
    return m;
  }
  r.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, r.stdSerializers = t, r.stdTimeFunctions = Object.assign({}, { nullTime: K, epochTime: I, unixTime: D, isoTime: y });
  function n(f, a, l, L2) {
    const v = Object.getPrototypeOf(a);
    a[l] = a.levelVal > a.levels.values[l] ? F2 : v[l] ? v[l] : e[l] || e[L2] || F2, o(f, a, l);
  }
  function o(f, a, l) {
    !f.transmit && a[l] === F2 || (a[l] = function(L2) {
      return function() {
        const R2 = f.timestamp(), $ = new Array(arguments.length), q = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var m = 0; m < $.length; m++)
          $[m] = arguments[m];
        if (f.serialize && !f.asObject && u($, this._serialize, this.serializers, this._stdErrSerialize), f.asObject ? L2.call(q, c(this, l, $, R2)) : L2.apply(q, $), f.transmit) {
          const E = f.transmit.level || a.level, B = r.levels.values[E], z = r.levels.values[l];
          if (z < B)
            return;
          p(this, {
            ts: R2,
            methodLevel: l,
            methodValue: z,
            transmitLevel: E,
            transmitValue: r.levels.values[f.transmit.level || a.level],
            send: f.transmit.send,
            val: a.levelVal
          }, $);
        }
      };
    }(a[l]));
  }
  function c(f, a, l, L2) {
    f._serialize && u(l, f._serialize, f.serializers, f._stdErrSerialize);
    const v = l.slice();
    let R2 = v[0];
    const $ = {};
    L2 && ($.time = L2), $.level = r.levels.values[a];
    let q = (f._childLevel | 0) + 1;
    if (q < 1 && (q = 1), R2 !== null && typeof R2 == "object") {
      for (; q-- && typeof v[0] == "object"; )
        Object.assign($, v.shift());
      R2 = v.length ? i(v.shift(), v) : void 0;
    } else
      typeof R2 == "string" && (R2 = i(v.shift(), v));
    return R2 !== void 0 && ($.msg = R2), $;
  }
  function u(f, a, l, L2) {
    for (const v in f)
      if (L2 && f[v] instanceof Error)
        f[v] = r.stdSerializers.err(f[v]);
      else if (typeof f[v] == "object" && !Array.isArray(f[v]))
        for (const R2 in f[v])
          a && a.indexOf(R2) > -1 && R2 in l && (f[v][R2] = l[R2](f[v][R2]));
  }
  function d(f, a, l) {
    return function() {
      const L2 = new Array(1 + arguments.length);
      L2[0] = a;
      for (var v = 1; v < L2.length; v++)
        L2[v] = arguments[v - 1];
      return f[l].apply(this, L2);
    };
  }
  function p(f, a, l) {
    const L2 = a.send, v = a.ts, R2 = a.methodLevel, $ = a.methodValue, q = a.val, m = f._logEvent.bindings;
    u(
      l,
      f._serialize || Object.keys(f.serializers),
      f.serializers,
      f._stdErrSerialize === void 0 ? true : f._stdErrSerialize
    ), f._logEvent.ts = v, f._logEvent.messages = l.filter(function(E) {
      return m.indexOf(E) === -1;
    }), f._logEvent.level.label = R2, f._logEvent.level.value = $, L2(R2, f._logEvent, q), f._logEvent = b(m);
  }
  function b(f) {
    return {
      ts: 0,
      messages: [],
      bindings: f || [],
      level: { label: "", value: 0 }
    };
  }
  function x(f) {
    const a = {
      type: f.constructor.name,
      msg: f.message,
      stack: f.stack
    };
    for (const l in f)
      a[l] === void 0 && (a[l] = f[l]);
    return a;
  }
  function O(f) {
    return typeof f.timestamp == "function" ? f.timestamp : f.timestamp === false ? K : I;
  }
  function _2() {
    return {};
  }
  function C(f) {
    return f;
  }
  function F2() {
  }
  function K() {
    return false;
  }
  function I() {
    return Date.now();
  }
  function D() {
    return Math.round(Date.now() / 1e3);
  }
  function y() {
    return new Date(Date.now()).toISOString();
  }
  function w() {
    function f(a) {
      return typeof a < "u" && a;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: true
      }), globalThis;
    } catch {
      return f(self) || f(window) || f(this) || {};
    }
  }
  return Ir;
}
var vi = {};
var po;
function hc() {
  return po || (po = 1, Object.defineProperty(vi, "__esModule", { value: true }), vi.PINO_CUSTOM_CONTEXT_KEY = vi.PINO_LOGGER_DEFAULTS = void 0, vi.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, vi.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), vi;
}
var yt = {};
var go;
function dl() {
  if (go)
    return yt;
  go = 1, Object.defineProperty(yt, "__esModule", { value: true }), yt.generateChildLogger = yt.formatChildLoggerContext = yt.getLoggerContext = yt.setBrowserLoggerContext = yt.getBrowserLoggerContext = yt.getDefaultLoggerOptions = void 0;
  const i = hc();
  function e(c) {
    return Object.assign(Object.assign({}, c), { level: (c == null ? void 0 : c.level) || i.PINO_LOGGER_DEFAULTS.level });
  }
  yt.getDefaultLoggerOptions = e;
  function t(c, u = i.PINO_CUSTOM_CONTEXT_KEY) {
    return c[u] || "";
  }
  yt.getBrowserLoggerContext = t;
  function s(c, u, d = i.PINO_CUSTOM_CONTEXT_KEY) {
    return c[d] = u, c;
  }
  yt.setBrowserLoggerContext = s;
  function r(c, u = i.PINO_CUSTOM_CONTEXT_KEY) {
    let d = "";
    return typeof c.bindings > "u" ? d = t(c, u) : d = c.bindings().context || "", d;
  }
  yt.getLoggerContext = r;
  function n(c, u, d = i.PINO_CUSTOM_CONTEXT_KEY) {
    const p = r(c, d);
    return p.trim() ? `${p}/${u}` : u;
  }
  yt.formatChildLoggerContext = n;
  function o(c, u, d = i.PINO_CUSTOM_CONTEXT_KEY) {
    const p = n(c, u, d), b = c.child({ context: p });
    return s(b, p, d);
  }
  return yt.generateChildLogger = o, yt;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true }), i.pino = void 0;
  const e = Ft, t = e.__importDefault(ll());
  Object.defineProperty(i, "pino", { enumerable: true, get: function() {
    return t.default;
  } }), e.__exportStar(hc(), i), e.__exportStar(dl(), i);
})(ee);
var fl = class extends Nt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
};
var pl = class extends Nt {
  constructor(e, t) {
    super(), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
var gl = class {
  constructor(e, t) {
    this.logger = e, this.core = t;
  }
};
var yl = class extends Nt {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
};
var ml = class extends Nt {
  constructor(e) {
    super();
  }
};
var bl = class {
  constructor(e, t, s, r) {
    this.core = e, this.logger = t, this.name = s;
  }
};
var wl = class extends Nt {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
};
var vl = class extends Nt {
  constructor(e, t) {
    super(), this.core = e, this.logger = t;
  }
};
var _l = class {
  constructor(e, t) {
    this.projectId = e, this.logger = t;
  }
};
var El = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
};
var Sl = class {
  constructor(e) {
    this.client = e;
  }
};
var Il = (i) => JSON.stringify(i, (e, t) => typeof t == "bigint" ? t.toString() + "n" : t);
var Dl = (i) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, t = i.replace(e, '$1"$2n"$3');
  return JSON.parse(t, (s, r) => typeof r == "string" && r.match(/^\d+n$/) ? BigInt(r.substring(0, r.length - 1)) : r);
};
function rn(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return Dl(i);
  } catch {
    return i;
  }
}
function rr(i) {
  return typeof i == "string" ? i : Il(i) || "";
}
var nn = {};
var li = {};
var nr = {};
var or = {};
Object.defineProperty(or, "__esModule", { value: true });
or.BrowserRandomSource = void 0;
var yo = 65536;
var xl = class {
  constructor() {
    this.isAvailable = false, this.isInstantiated = false;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = true, this.isInstantiated = true);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let s = 0; s < t.length; s += yo)
      this._crypto.getRandomValues(t.subarray(s, s + Math.min(t.length - s, yo)));
    return t;
  }
};
or.BrowserRandomSource = xl;
function Ol(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ar = {};
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: true });
function Nl(i) {
  for (var e = 0; e < i.length; e++)
    i[e] = 0;
  return i;
}
Pt.wipe = Nl;
var Pl = {};
var Rl = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Pl
}, Symbol.toStringTag, { value: "Module" }));
var Cl = R(Rl);
Object.defineProperty(ar, "__esModule", { value: true });
ar.NodeRandomSource = void 0;
var Al = Pt;
var Tl = class {
  constructor() {
    if (this.isAvailable = false, this.isInstantiated = false, typeof Ol < "u") {
      const e = Cl;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = true, this.isInstantiated = true);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let r = 0; r < s.length; r++)
      s[r] = t[r];
    return (0, Al.wipe)(t), s;
  }
};
ar.NodeRandomSource = Tl;
Object.defineProperty(nr, "__esModule", { value: true });
nr.SystemRandomSource = void 0;
var $l = or;
var Fl = ar;
var Ul = class {
  constructor() {
    if (this.isAvailable = false, this.name = "", this._source = new $l.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = true, this.name = "Browser";
      return;
    }
    if (this._source = new Fl.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = true, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
};
nr.SystemRandomSource = Ul;
var oe = {};
var uc = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  function e(c, u) {
    var d = c >>> 16 & 65535, p = c & 65535, b = u >>> 16 & 65535, x = u & 65535;
    return p * x + (d * x + p * b << 16 >>> 0) | 0;
  }
  i.mul = Math.imul || e;
  function t(c, u) {
    return c + u | 0;
  }
  i.add = t;
  function s(c, u) {
    return c - u | 0;
  }
  i.sub = s;
  function r(c, u) {
    return c << u | c >>> 32 - u;
  }
  i.rotl = r;
  function n(c, u) {
    return c << 32 - u | c >>> u;
  }
  i.rotr = n;
  function o(c) {
    return typeof c == "number" && isFinite(c) && Math.floor(c) === c;
  }
  i.isInteger = Number.isInteger || o, i.MAX_SAFE_INTEGER = 9007199254740991, i.isSafeInteger = function(c) {
    return i.isInteger(c) && c >= -i.MAX_SAFE_INTEGER && c <= i.MAX_SAFE_INTEGER;
  };
})(uc);
Object.defineProperty(oe, "__esModule", { value: true });
var lc = uc;
function Ll(i, e) {
  return e === void 0 && (e = 0), (i[e + 0] << 8 | i[e + 1]) << 16 >> 16;
}
oe.readInt16BE = Ll;
function Ml(i, e) {
  return e === void 0 && (e = 0), (i[e + 0] << 8 | i[e + 1]) >>> 0;
}
oe.readUint16BE = Ml;
function ql(i, e) {
  return e === void 0 && (e = 0), (i[e + 1] << 8 | i[e]) << 16 >> 16;
}
oe.readInt16LE = ql;
function jl(i, e) {
  return e === void 0 && (e = 0), (i[e + 1] << 8 | i[e]) >>> 0;
}
oe.readUint16LE = jl;
function dc(i, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = i >>> 8, e[t + 1] = i >>> 0, e;
}
oe.writeUint16BE = dc;
oe.writeInt16BE = dc;
function fc(i, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = i >>> 0, e[t + 1] = i >>> 8, e;
}
oe.writeUint16LE = fc;
oe.writeInt16LE = fc;
function Mr(i, e) {
  return e === void 0 && (e = 0), i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3];
}
oe.readInt32BE = Mr;
function qr(i, e) {
  return e === void 0 && (e = 0), (i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]) >>> 0;
}
oe.readUint32BE = qr;
function jr(i, e) {
  return e === void 0 && (e = 0), i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e];
}
oe.readInt32LE = jr;
function zr(i, e) {
  return e === void 0 && (e = 0), (i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]) >>> 0;
}
oe.readUint32LE = zr;
function ks(i, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = i >>> 24, e[t + 1] = i >>> 16, e[t + 2] = i >>> 8, e[t + 3] = i >>> 0, e;
}
oe.writeUint32BE = ks;
oe.writeInt32BE = ks;
function Hs(i, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = i >>> 0, e[t + 1] = i >>> 8, e[t + 2] = i >>> 16, e[t + 3] = i >>> 24, e;
}
oe.writeUint32LE = Hs;
oe.writeInt32LE = Hs;
function zl(i, e) {
  e === void 0 && (e = 0);
  var t = Mr(i, e), s = Mr(i, e + 4);
  return t * 4294967296 + s - (s >> 31) * 4294967296;
}
oe.readInt64BE = zl;
function Kl(i, e) {
  e === void 0 && (e = 0);
  var t = qr(i, e), s = qr(i, e + 4);
  return t * 4294967296 + s;
}
oe.readUint64BE = Kl;
function Vl(i, e) {
  e === void 0 && (e = 0);
  var t = jr(i, e), s = jr(i, e + 4);
  return s * 4294967296 + t - (t >> 31) * 4294967296;
}
oe.readInt64LE = Vl;
function Bl(i, e) {
  e === void 0 && (e = 0);
  var t = zr(i, e), s = zr(i, e + 4);
  return s * 4294967296 + t;
}
oe.readUint64LE = Bl;
function pc(i, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), ks(i / 4294967296 >>> 0, e, t), ks(i >>> 0, e, t + 4), e;
}
oe.writeUint64BE = pc;
oe.writeInt64BE = pc;
function gc(i, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), Hs(i >>> 0, e, t), Hs(i / 4294967296 >>> 0, e, t + 4), e;
}
oe.writeUint64LE = gc;
oe.writeInt64LE = gc;
function kl(i, e, t) {
  if (t === void 0 && (t = 0), i % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, r = 1, n = i / 8 + t - 1; n >= t; n--)
    s += e[n] * r, r *= 256;
  return s;
}
oe.readUintBE = kl;
function Hl(i, e, t) {
  if (t === void 0 && (t = 0), i % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, r = 1, n = t; n < t + i / 8; n++)
    s += e[n] * r, r *= 256;
  return s;
}
oe.readUintLE = Hl;
function Gl(i, e, t, s) {
  if (t === void 0 && (t = new Uint8Array(i / 8)), s === void 0 && (s = 0), i % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!lc.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var r = 1, n = i / 8 + s - 1; n >= s; n--)
    t[n] = e / r & 255, r *= 256;
  return t;
}
oe.writeUintBE = Gl;
function Wl(i, e, t, s) {
  if (t === void 0 && (t = new Uint8Array(i / 8)), s === void 0 && (s = 0), i % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!lc.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var r = 1, n = s; n < s + i / 8; n++)
    t[n] = e / r & 255, r *= 256;
  return t;
}
oe.writeUintLE = Wl;
function Yl(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e);
}
oe.readFloat32BE = Yl;
function Jl(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e, true);
}
oe.readFloat32LE = Jl;
function Ql(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e);
}
oe.readFloat64BE = Ql;
function Xl(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e, true);
}
oe.readFloat64LE = Xl;
function Zl(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i), e;
}
oe.writeFloat32BE = Zl;
function ed(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i, true), e;
}
oe.writeFloat32LE = ed;
function td(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i), e;
}
oe.writeFloat64BE = td;
function id(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i, true), e;
}
oe.writeFloat64LE = id;
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true }), i.randomStringForEntropy = i.randomString = i.randomUint32 = i.randomBytes = i.defaultRandomSource = void 0;
  const e = nr, t = oe, s = Pt;
  i.defaultRandomSource = new e.SystemRandomSource();
  function r(d, p = i.defaultRandomSource) {
    return p.randomBytes(d);
  }
  i.randomBytes = r;
  function n(d = i.defaultRandomSource) {
    const p = r(4, d), b = (0, t.readUint32LE)(p);
    return (0, s.wipe)(p), b;
  }
  i.randomUint32 = n;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function c(d, p = o, b = i.defaultRandomSource) {
    if (p.length < 2)
      throw new Error("randomString charset is too short");
    if (p.length > 256)
      throw new Error("randomString charset is too long");
    let x = "";
    const O = p.length, _2 = 256 - 256 % O;
    for (; d > 0; ) {
      const C = r(Math.ceil(d * 256 / _2), b);
      for (let F2 = 0; F2 < C.length && d > 0; F2++) {
        const K = C[F2];
        K < _2 && (x += p.charAt(K % O), d--);
      }
      (0, s.wipe)(C);
    }
    return x;
  }
  i.randomString = c;
  function u(d, p = o, b = i.defaultRandomSource) {
    const x = Math.ceil(d / (Math.log(p.length) / Math.LN2));
    return c(x, p, b);
  }
  i.randomStringForEntropy = u;
})(li);
var yc = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  var e = oe, t = Pt;
  i.DIGEST_LENGTH = 64, i.BLOCK_SIZE = 128;
  var s = (
    /** @class */
    function() {
      function c() {
        this.digestLength = i.DIGEST_LENGTH, this.blockSize = i.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = false, this.reset();
      }
      return c.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, c.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = false, this;
      }, c.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._tempHi), t.wipe(this._tempLo), this.reset();
      }, c.prototype.update = function(u, d) {
        if (d === void 0 && (d = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var p = 0;
        if (this._bytesHashed += d, this._bufferLength > 0) {
          for (; this._bufferLength < i.BLOCK_SIZE && d > 0; )
            this._buffer[this._bufferLength++] = u[p++], d--;
          this._bufferLength === this.blockSize && (n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (d >= this.blockSize && (p = n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, p, d), d %= this.blockSize); d > 0; )
          this._buffer[this._bufferLength++] = u[p++], d--;
        return this;
      }, c.prototype.finish = function(u) {
        if (!this._finished) {
          var d = this._bytesHashed, p = this._bufferLength, b = d / 536870912 | 0, x = d << 3, O = d % 128 < 112 ? 128 : 256;
          this._buffer[p] = 128;
          for (var _2 = p + 1; _2 < O - 8; _2++)
            this._buffer[_2] = 0;
          e.writeUint32BE(b, this._buffer, O - 8), e.writeUint32BE(x, this._buffer, O - 4), n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, O), this._finished = true;
        }
        for (var _2 = 0; _2 < this.digestLength / 8; _2++)
          e.writeUint32BE(this._stateHi[_2], u, _2 * 8), e.writeUint32BE(this._stateLo[_2], u, _2 * 8 + 4);
        return this;
      }, c.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, c.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, c.prototype.restoreState = function(u) {
        return this._stateHi.set(u.stateHi), this._stateLo.set(u.stateLo), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = false, this;
      }, c.prototype.cleanSavedState = function(u) {
        t.wipe(u.stateHi), t.wipe(u.stateLo), u.buffer && t.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, c;
    }()
  );
  i.SHA512 = s;
  var r = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function n(c, u, d, p, b, x, O) {
    for (var _2 = d[0], C = d[1], F2 = d[2], K = d[3], I = d[4], D = d[5], y = d[6], w = d[7], f = p[0], a = p[1], l = p[2], L2 = p[3], v = p[4], R2 = p[5], $ = p[6], q = p[7], m, E, B, z, j, U, M, H; O >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var G = 8 * te + x;
        c[te] = e.readUint32BE(b, G), u[te] = e.readUint32BE(b, G + 4);
      }
      for (var te = 0; te < 80; te++) {
        var ie = _2, Q = C, se = F2, T = K, A = I, N = D, h = y, S = w, W = f, X = a, fe = l, ve = L2, ge = v, Se = R2, Me = $, $e = q;
        if (m = w, E = q, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = (I >>> 14 | v << 32 - 14) ^ (I >>> 18 | v << 32 - 18) ^ (v >>> 41 - 32 | I << 32 - (41 - 32)), E = (v >>> 14 | I << 32 - 14) ^ (v >>> 18 | I << 32 - 18) ^ (I >>> 41 - 32 | v << 32 - (41 - 32)), j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, m = I & D ^ ~I & y, E = v & R2 ^ ~v & $, j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, m = r[te * 2], E = r[te * 2 + 1], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, m = c[te % 16], E = u[te % 16], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, B = M & 65535 | H << 16, z = j & 65535 | U << 16, m = B, E = z, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = (_2 >>> 28 | f << 32 - 28) ^ (f >>> 34 - 32 | _2 << 32 - (34 - 32)) ^ (f >>> 39 - 32 | _2 << 32 - (39 - 32)), E = (f >>> 28 | _2 << 32 - 28) ^ (_2 >>> 34 - 32 | f << 32 - (34 - 32)) ^ (_2 >>> 39 - 32 | f << 32 - (39 - 32)), j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, m = _2 & C ^ _2 & F2 ^ C & F2, E = f & a ^ f & l ^ a & l, j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, S = M & 65535 | H << 16, $e = j & 65535 | U << 16, m = T, E = ve, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = B, E = z, j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, T = M & 65535 | H << 16, ve = j & 65535 | U << 16, C = ie, F2 = Q, K = se, I = T, D = A, y = N, w = h, _2 = S, a = W, l = X, L2 = fe, v = ve, R2 = ge, $ = Se, q = Me, f = $e, te % 16 === 15)
          for (var G = 0; G < 16; G++)
            m = c[G], E = u[G], j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = c[(G + 9) % 16], E = u[(G + 9) % 16], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, B = c[(G + 1) % 16], z = u[(G + 1) % 16], m = (B >>> 1 | z << 32 - 1) ^ (B >>> 8 | z << 32 - 8) ^ B >>> 7, E = (z >>> 1 | B << 32 - 1) ^ (z >>> 8 | B << 32 - 8) ^ (z >>> 7 | B << 32 - 7), j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, B = c[(G + 14) % 16], z = u[(G + 14) % 16], m = (B >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | B << 32 - (61 - 32)) ^ B >>> 6, E = (z >>> 19 | B << 32 - 19) ^ (B >>> 61 - 32 | z << 32 - (61 - 32)) ^ (z >>> 6 | B << 32 - 6), j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, c[G] = M & 65535 | H << 16, u[G] = j & 65535 | U << 16;
      }
      m = _2, E = f, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[0], E = p[0], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[0] = _2 = M & 65535 | H << 16, p[0] = f = j & 65535 | U << 16, m = C, E = a, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[1], E = p[1], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[1] = C = M & 65535 | H << 16, p[1] = a = j & 65535 | U << 16, m = F2, E = l, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[2], E = p[2], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[2] = F2 = M & 65535 | H << 16, p[2] = l = j & 65535 | U << 16, m = K, E = L2, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[3], E = p[3], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[3] = K = M & 65535 | H << 16, p[3] = L2 = j & 65535 | U << 16, m = I, E = v, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[4], E = p[4], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[4] = I = M & 65535 | H << 16, p[4] = v = j & 65535 | U << 16, m = D, E = R2, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[5], E = p[5], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[5] = D = M & 65535 | H << 16, p[5] = R2 = j & 65535 | U << 16, m = y, E = $, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[6], E = p[6], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[6] = y = M & 65535 | H << 16, p[6] = $ = j & 65535 | U << 16, m = w, E = q, j = E & 65535, U = E >>> 16, M = m & 65535, H = m >>> 16, m = d[7], E = p[7], j += E & 65535, U += E >>> 16, M += m & 65535, H += m >>> 16, U += j >>> 16, M += U >>> 16, H += M >>> 16, d[7] = w = M & 65535 | H << 16, p[7] = q = j & 65535 | U << 16, x += 128, O -= 128;
    }
    return x;
  }
  function o(c) {
    var u = new s();
    u.update(c);
    var d = u.digest();
    return u.clean(), d;
  }
  i.hash = o;
})(yc);
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true }), i.convertSecretKeyToX25519 = i.convertPublicKeyToX25519 = i.verify = i.sign = i.extractPublicKeyFromSecretKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.SEED_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = i.SIGNATURE_LENGTH = void 0;
  const e = li, t = yc, s = Pt;
  i.SIGNATURE_LENGTH = 64, i.PUBLIC_KEY_LENGTH = 32, i.SECRET_KEY_LENGTH = 64, i.SEED_LENGTH = 32;
  function r(T) {
    const A = new Float64Array(16);
    if (T)
      for (let N = 0; N < T.length; N++)
        A[N] = T[N];
    return A;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const o = r(), c = r([1]), u = r([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), d = r([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), p = r([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), b = r([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), x = r([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function O(T, A) {
    for (let N = 0; N < 16; N++)
      T[N] = A[N] | 0;
  }
  function _2(T) {
    let A = 1;
    for (let N = 0; N < 16; N++) {
      let h = T[N] + A + 65535;
      A = Math.floor(h / 65536), T[N] = h - A * 65536;
    }
    T[0] += A - 1 + 37 * (A - 1);
  }
  function C(T, A, N) {
    const h = ~(N - 1);
    for (let S = 0; S < 16; S++) {
      const W = h & (T[S] ^ A[S]);
      T[S] ^= W, A[S] ^= W;
    }
  }
  function F2(T, A) {
    const N = r(), h = r();
    for (let S = 0; S < 16; S++)
      h[S] = A[S];
    _2(h), _2(h), _2(h);
    for (let S = 0; S < 2; S++) {
      N[0] = h[0] - 65517;
      for (let X = 1; X < 15; X++)
        N[X] = h[X] - 65535 - (N[X - 1] >> 16 & 1), N[X - 1] &= 65535;
      N[15] = h[15] - 32767 - (N[14] >> 16 & 1);
      const W = N[15] >> 16 & 1;
      N[14] &= 65535, C(h, N, 1 - W);
    }
    for (let S = 0; S < 16; S++)
      T[2 * S] = h[S] & 255, T[2 * S + 1] = h[S] >> 8;
  }
  function K(T, A) {
    let N = 0;
    for (let h = 0; h < 32; h++)
      N |= T[h] ^ A[h];
    return (1 & N - 1 >>> 8) - 1;
  }
  function I(T, A) {
    const N = new Uint8Array(32), h = new Uint8Array(32);
    return F2(N, T), F2(h, A), K(N, h);
  }
  function D(T) {
    const A = new Uint8Array(32);
    return F2(A, T), A[0] & 1;
  }
  function y(T, A) {
    for (let N = 0; N < 16; N++)
      T[N] = A[2 * N] + (A[2 * N + 1] << 8);
    T[15] &= 32767;
  }
  function w(T, A, N) {
    for (let h = 0; h < 16; h++)
      T[h] = A[h] + N[h];
  }
  function f(T, A, N) {
    for (let h = 0; h < 16; h++)
      T[h] = A[h] - N[h];
  }
  function a(T, A, N) {
    let h, S, W = 0, X = 0, fe = 0, ve = 0, ge = 0, Se = 0, Me = 0, $e = 0, be = 0, ye = 0, pe = 0, le = 0, ue = 0, he = 0, ce = 0, re = 0, de = 0, me = 0, ne = 0, _e = 0, Ee = 0, De = 0, xe = 0, Ie = 0, Ut = 0, qt = 0, si = 0, Dt = 0, fi = 0, Ki = 0, Os = 0, qe = N[0], Fe = N[1], je = N[2], ze = N[3], Ke = N[4], Ue = N[5], Qe = N[6], Xe = N[7], Ze = N[8], et = N[9], tt = N[10], Ye = N[11], Ve = N[12], Ae = N[13], it = N[14], st = N[15];
    h = A[0], W += h * qe, X += h * Fe, fe += h * je, ve += h * ze, ge += h * Ke, Se += h * Ue, Me += h * Qe, $e += h * Xe, be += h * Ze, ye += h * et, pe += h * tt, le += h * Ye, ue += h * Ve, he += h * Ae, ce += h * it, re += h * st, h = A[1], X += h * qe, fe += h * Fe, ve += h * je, ge += h * ze, Se += h * Ke, Me += h * Ue, $e += h * Qe, be += h * Xe, ye += h * Ze, pe += h * et, le += h * tt, ue += h * Ye, he += h * Ve, ce += h * Ae, re += h * it, de += h * st, h = A[2], fe += h * qe, ve += h * Fe, ge += h * je, Se += h * ze, Me += h * Ke, $e += h * Ue, be += h * Qe, ye += h * Xe, pe += h * Ze, le += h * et, ue += h * tt, he += h * Ye, ce += h * Ve, re += h * Ae, de += h * it, me += h * st, h = A[3], ve += h * qe, ge += h * Fe, Se += h * je, Me += h * ze, $e += h * Ke, be += h * Ue, ye += h * Qe, pe += h * Xe, le += h * Ze, ue += h * et, he += h * tt, ce += h * Ye, re += h * Ve, de += h * Ae, me += h * it, ne += h * st, h = A[4], ge += h * qe, Se += h * Fe, Me += h * je, $e += h * ze, be += h * Ke, ye += h * Ue, pe += h * Qe, le += h * Xe, ue += h * Ze, he += h * et, ce += h * tt, re += h * Ye, de += h * Ve, me += h * Ae, ne += h * it, _e += h * st, h = A[5], Se += h * qe, Me += h * Fe, $e += h * je, be += h * ze, ye += h * Ke, pe += h * Ue, le += h * Qe, ue += h * Xe, he += h * Ze, ce += h * et, re += h * tt, de += h * Ye, me += h * Ve, ne += h * Ae, _e += h * it, Ee += h * st, h = A[6], Me += h * qe, $e += h * Fe, be += h * je, ye += h * ze, pe += h * Ke, le += h * Ue, ue += h * Qe, he += h * Xe, ce += h * Ze, re += h * et, de += h * tt, me += h * Ye, ne += h * Ve, _e += h * Ae, Ee += h * it, De += h * st, h = A[7], $e += h * qe, be += h * Fe, ye += h * je, pe += h * ze, le += h * Ke, ue += h * Ue, he += h * Qe, ce += h * Xe, re += h * Ze, de += h * et, me += h * tt, ne += h * Ye, _e += h * Ve, Ee += h * Ae, De += h * it, xe += h * st, h = A[8], be += h * qe, ye += h * Fe, pe += h * je, le += h * ze, ue += h * Ke, he += h * Ue, ce += h * Qe, re += h * Xe, de += h * Ze, me += h * et, ne += h * tt, _e += h * Ye, Ee += h * Ve, De += h * Ae, xe += h * it, Ie += h * st, h = A[9], ye += h * qe, pe += h * Fe, le += h * je, ue += h * ze, he += h * Ke, ce += h * Ue, re += h * Qe, de += h * Xe, me += h * Ze, ne += h * et, _e += h * tt, Ee += h * Ye, De += h * Ve, xe += h * Ae, Ie += h * it, Ut += h * st, h = A[10], pe += h * qe, le += h * Fe, ue += h * je, he += h * ze, ce += h * Ke, re += h * Ue, de += h * Qe, me += h * Xe, ne += h * Ze, _e += h * et, Ee += h * tt, De += h * Ye, xe += h * Ve, Ie += h * Ae, Ut += h * it, qt += h * st, h = A[11], le += h * qe, ue += h * Fe, he += h * je, ce += h * ze, re += h * Ke, de += h * Ue, me += h * Qe, ne += h * Xe, _e += h * Ze, Ee += h * et, De += h * tt, xe += h * Ye, Ie += h * Ve, Ut += h * Ae, qt += h * it, si += h * st, h = A[12], ue += h * qe, he += h * Fe, ce += h * je, re += h * ze, de += h * Ke, me += h * Ue, ne += h * Qe, _e += h * Xe, Ee += h * Ze, De += h * et, xe += h * tt, Ie += h * Ye, Ut += h * Ve, qt += h * Ae, si += h * it, Dt += h * st, h = A[13], he += h * qe, ce += h * Fe, re += h * je, de += h * ze, me += h * Ke, ne += h * Ue, _e += h * Qe, Ee += h * Xe, De += h * Ze, xe += h * et, Ie += h * tt, Ut += h * Ye, qt += h * Ve, si += h * Ae, Dt += h * it, fi += h * st, h = A[14], ce += h * qe, re += h * Fe, de += h * je, me += h * ze, ne += h * Ke, _e += h * Ue, Ee += h * Qe, De += h * Xe, xe += h * Ze, Ie += h * et, Ut += h * tt, qt += h * Ye, si += h * Ve, Dt += h * Ae, fi += h * it, Ki += h * st, h = A[15], re += h * qe, de += h * Fe, me += h * je, ne += h * ze, _e += h * Ke, Ee += h * Ue, De += h * Qe, xe += h * Xe, Ie += h * Ze, Ut += h * et, qt += h * tt, si += h * Ye, Dt += h * Ve, fi += h * Ae, Ki += h * it, Os += h * st, W += 38 * de, X += 38 * me, fe += 38 * ne, ve += 38 * _e, ge += 38 * Ee, Se += 38 * De, Me += 38 * xe, $e += 38 * Ie, be += 38 * Ut, ye += 38 * qt, pe += 38 * si, le += 38 * Dt, ue += 38 * fi, he += 38 * Ki, ce += 38 * Os, S = 1, h = W + S + 65535, S = Math.floor(h / 65536), W = h - S * 65536, h = X + S + 65535, S = Math.floor(h / 65536), X = h - S * 65536, h = fe + S + 65535, S = Math.floor(h / 65536), fe = h - S * 65536, h = ve + S + 65535, S = Math.floor(h / 65536), ve = h - S * 65536, h = ge + S + 65535, S = Math.floor(h / 65536), ge = h - S * 65536, h = Se + S + 65535, S = Math.floor(h / 65536), Se = h - S * 65536, h = Me + S + 65535, S = Math.floor(h / 65536), Me = h - S * 65536, h = $e + S + 65535, S = Math.floor(h / 65536), $e = h - S * 65536, h = be + S + 65535, S = Math.floor(h / 65536), be = h - S * 65536, h = ye + S + 65535, S = Math.floor(h / 65536), ye = h - S * 65536, h = pe + S + 65535, S = Math.floor(h / 65536), pe = h - S * 65536, h = le + S + 65535, S = Math.floor(h / 65536), le = h - S * 65536, h = ue + S + 65535, S = Math.floor(h / 65536), ue = h - S * 65536, h = he + S + 65535, S = Math.floor(h / 65536), he = h - S * 65536, h = ce + S + 65535, S = Math.floor(h / 65536), ce = h - S * 65536, h = re + S + 65535, S = Math.floor(h / 65536), re = h - S * 65536, W += S - 1 + 37 * (S - 1), S = 1, h = W + S + 65535, S = Math.floor(h / 65536), W = h - S * 65536, h = X + S + 65535, S = Math.floor(h / 65536), X = h - S * 65536, h = fe + S + 65535, S = Math.floor(h / 65536), fe = h - S * 65536, h = ve + S + 65535, S = Math.floor(h / 65536), ve = h - S * 65536, h = ge + S + 65535, S = Math.floor(h / 65536), ge = h - S * 65536, h = Se + S + 65535, S = Math.floor(h / 65536), Se = h - S * 65536, h = Me + S + 65535, S = Math.floor(h / 65536), Me = h - S * 65536, h = $e + S + 65535, S = Math.floor(h / 65536), $e = h - S * 65536, h = be + S + 65535, S = Math.floor(h / 65536), be = h - S * 65536, h = ye + S + 65535, S = Math.floor(h / 65536), ye = h - S * 65536, h = pe + S + 65535, S = Math.floor(h / 65536), pe = h - S * 65536, h = le + S + 65535, S = Math.floor(h / 65536), le = h - S * 65536, h = ue + S + 65535, S = Math.floor(h / 65536), ue = h - S * 65536, h = he + S + 65535, S = Math.floor(h / 65536), he = h - S * 65536, h = ce + S + 65535, S = Math.floor(h / 65536), ce = h - S * 65536, h = re + S + 65535, S = Math.floor(h / 65536), re = h - S * 65536, W += S - 1 + 37 * (S - 1), T[0] = W, T[1] = X, T[2] = fe, T[3] = ve, T[4] = ge, T[5] = Se, T[6] = Me, T[7] = $e, T[8] = be, T[9] = ye, T[10] = pe, T[11] = le, T[12] = ue, T[13] = he, T[14] = ce, T[15] = re;
  }
  function l(T, A) {
    a(T, A, A);
  }
  function L2(T, A) {
    const N = r();
    let h;
    for (h = 0; h < 16; h++)
      N[h] = A[h];
    for (h = 253; h >= 0; h--)
      l(N, N), h !== 2 && h !== 4 && a(N, N, A);
    for (h = 0; h < 16; h++)
      T[h] = N[h];
  }
  function v(T, A) {
    const N = r();
    let h;
    for (h = 0; h < 16; h++)
      N[h] = A[h];
    for (h = 250; h >= 0; h--)
      l(N, N), h !== 1 && a(N, N, A);
    for (h = 0; h < 16; h++)
      T[h] = N[h];
  }
  function R2(T, A) {
    const N = r(), h = r(), S = r(), W = r(), X = r(), fe = r(), ve = r(), ge = r(), Se = r();
    f(N, T[1], T[0]), f(Se, A[1], A[0]), a(N, N, Se), w(h, T[0], T[1]), w(Se, A[0], A[1]), a(h, h, Se), a(S, T[3], A[3]), a(S, S, d), a(W, T[2], A[2]), w(W, W, W), f(X, h, N), f(fe, W, S), w(ve, W, S), w(ge, h, N), a(T[0], X, fe), a(T[1], ge, ve), a(T[2], ve, fe), a(T[3], X, ge);
  }
  function $(T, A, N) {
    for (let h = 0; h < 4; h++)
      C(T[h], A[h], N);
  }
  function q(T, A) {
    const N = r(), h = r(), S = r();
    L2(S, A[2]), a(N, A[0], S), a(h, A[1], S), F2(T, h), T[31] ^= D(N) << 7;
  }
  function m(T, A, N) {
    O(T[0], o), O(T[1], c), O(T[2], c), O(T[3], o);
    for (let h = 255; h >= 0; --h) {
      const S = N[h / 8 | 0] >> (h & 7) & 1;
      $(T, A, S), R2(A, T), R2(T, T), $(T, A, S);
    }
  }
  function E(T, A) {
    const N = [r(), r(), r(), r()];
    O(N[0], p), O(N[1], b), O(N[2], c), a(N[3], p, b), m(T, N, A);
  }
  function B(T) {
    if (T.length !== i.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
    const A = (0, t.hash)(T);
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const N = new Uint8Array(32), h = [r(), r(), r(), r()];
    E(h, A), q(N, h);
    const S = new Uint8Array(64);
    return S.set(T), S.set(N, 32), {
      publicKey: N,
      secretKey: S
    };
  }
  i.generateKeyPairFromSeed = B;
  function z(T) {
    const A = (0, e.randomBytes)(32, T), N = B(A);
    return (0, s.wipe)(A), N;
  }
  i.generateKeyPair = z;
  function j(T) {
    if (T.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(T.subarray(32));
  }
  i.extractPublicKeyFromSecretKey = j;
  const U = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function M(T, A) {
    let N, h, S, W;
    for (h = 63; h >= 32; --h) {
      for (N = 0, S = h - 32, W = h - 12; S < W; ++S)
        A[S] += N - 16 * A[h] * U[S - (h - 32)], N = Math.floor((A[S] + 128) / 256), A[S] -= N * 256;
      A[S] += N, A[h] = 0;
    }
    for (N = 0, S = 0; S < 32; S++)
      A[S] += N - (A[31] >> 4) * U[S], N = A[S] >> 8, A[S] &= 255;
    for (S = 0; S < 32; S++)
      A[S] -= N * U[S];
    for (h = 0; h < 32; h++)
      A[h + 1] += A[h] >> 8, T[h] = A[h] & 255;
  }
  function H(T) {
    const A = new Float64Array(64);
    for (let N = 0; N < 64; N++)
      A[N] = T[N];
    for (let N = 0; N < 64; N++)
      T[N] = 0;
    M(T, A);
  }
  function te(T, A) {
    const N = new Float64Array(64), h = [r(), r(), r(), r()], S = (0, t.hash)(T.subarray(0, 32));
    S[0] &= 248, S[31] &= 127, S[31] |= 64;
    const W = new Uint8Array(64);
    W.set(S.subarray(32), 32);
    const X = new t.SHA512();
    X.update(W.subarray(32)), X.update(A);
    const fe = X.digest();
    X.clean(), H(fe), E(h, fe), q(W, h), X.reset(), X.update(W.subarray(0, 32)), X.update(T.subarray(32)), X.update(A);
    const ve = X.digest();
    H(ve);
    for (let ge = 0; ge < 32; ge++)
      N[ge] = fe[ge];
    for (let ge = 0; ge < 32; ge++)
      for (let Se = 0; Se < 32; Se++)
        N[ge + Se] += ve[ge] * S[Se];
    return M(W.subarray(32), N), W;
  }
  i.sign = te;
  function G(T, A) {
    const N = r(), h = r(), S = r(), W = r(), X = r(), fe = r(), ve = r();
    return O(T[2], c), y(T[1], A), l(S, T[1]), a(W, S, u), f(S, S, T[2]), w(W, T[2], W), l(X, W), l(fe, X), a(ve, fe, X), a(N, ve, S), a(N, N, W), v(N, N), a(N, N, S), a(N, N, W), a(N, N, W), a(T[0], N, W), l(h, T[0]), a(h, h, W), I(h, S) && a(T[0], T[0], x), l(h, T[0]), a(h, h, W), I(h, S) ? -1 : (D(T[0]) === A[31] >> 7 && f(T[0], o, T[0]), a(T[3], T[0], T[1]), 0);
  }
  function ie(T, A, N) {
    const h = new Uint8Array(32), S = [r(), r(), r(), r()], W = [r(), r(), r(), r()];
    if (N.length !== i.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
    if (G(W, T))
      return false;
    const X = new t.SHA512();
    X.update(N.subarray(0, 32)), X.update(T), X.update(A);
    const fe = X.digest();
    return H(fe), m(S, W, fe), E(W, N.subarray(32)), R2(S, W), q(h, S), !K(N, h);
  }
  i.verify = ie;
  function Q(T) {
    let A = [r(), r(), r(), r()];
    if (G(A, T))
      throw new Error("Ed25519: invalid public key");
    let N = r(), h = r(), S = A[1];
    w(N, c, S), f(h, c, S), L2(h, h), a(N, N, h);
    let W = new Uint8Array(32);
    return F2(W, N), W;
  }
  i.convertPublicKeyToX25519 = Q;
  function se(T) {
    const A = (0, t.hash)(T.subarray(0, 32));
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const N = new Uint8Array(A.subarray(0, 32));
    return (0, s.wipe)(A), N;
  }
  i.convertSecretKeyToX25519 = se;
})(nn);
var sd = "EdDSA";
var rd = "JWT";
var mc = ".";
var bc = "base64url";
var nd = "utf8";
var od = "utf8";
var ad = ":";
var cd = "did";
var hd = "key";
var mo = "base58btc";
var ud = "z";
var ld = "K36";
var dd = 32;
function on(i) {
  return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i;
}
function wc(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? on(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i);
}
function ls(i, e) {
  e || (e = i.reduce((r, n) => r + n.length, 0));
  const t = wc(e);
  let s = 0;
  for (const r of i)
    t.set(r, s), s += r.length;
  return on(t);
}
function fd(i, e) {
  if (i.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
    t[s] = 255;
  for (var r = 0; r < i.length; r++) {
    var n = i.charAt(r), o = n.charCodeAt(0);
    if (t[o] !== 255)
      throw new TypeError(n + " is ambiguous");
    t[o] = r;
  }
  var c = i.length, u = i.charAt(0), d = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function b(_2) {
    if (_2 instanceof Uint8Array || (ArrayBuffer.isView(_2) ? _2 = new Uint8Array(_2.buffer, _2.byteOffset, _2.byteLength) : Array.isArray(_2) && (_2 = Uint8Array.from(_2))), !(_2 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_2.length === 0)
      return "";
    for (var C = 0, F2 = 0, K = 0, I = _2.length; K !== I && _2[K] === 0; )
      K++, C++;
    for (var D = (I - K) * p + 1 >>> 0, y = new Uint8Array(D); K !== I; ) {
      for (var w = _2[K], f = 0, a = D - 1; (w !== 0 || f < F2) && a !== -1; a--, f++)
        w += 256 * y[a] >>> 0, y[a] = w % c >>> 0, w = w / c >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      F2 = f, K++;
    }
    for (var l = D - F2; l !== D && y[l] === 0; )
      l++;
    for (var L2 = u.repeat(C); l < D; ++l)
      L2 += i.charAt(y[l]);
    return L2;
  }
  function x(_2) {
    if (typeof _2 != "string")
      throw new TypeError("Expected String");
    if (_2.length === 0)
      return new Uint8Array();
    var C = 0;
    if (_2[C] !== " ") {
      for (var F2 = 0, K = 0; _2[C] === u; )
        F2++, C++;
      for (var I = (_2.length - C) * d + 1 >>> 0, D = new Uint8Array(I); _2[C]; ) {
        var y = t[_2.charCodeAt(C)];
        if (y === 255)
          return;
        for (var w = 0, f = I - 1; (y !== 0 || w < K) && f !== -1; f--, w++)
          y += c * D[f] >>> 0, D[f] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        K = w, C++;
      }
      if (_2[C] !== " ") {
        for (var a = I - K; a !== I && D[a] === 0; )
          a++;
        for (var l = new Uint8Array(F2 + (I - a)), L2 = F2; a !== I; )
          l[L2++] = D[a++];
        return l;
      }
    }
  }
  function O(_2) {
    var C = x(_2);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: b,
    decodeUnsafe: x,
    decode: O
  };
}
var pd = fd;
var gd = pd;
var yd = (i) => {
  if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
    return i;
  if (i instanceof ArrayBuffer)
    return new Uint8Array(i);
  if (ArrayBuffer.isView(i))
    return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var md = (i) => new TextEncoder().encode(i);
var bd = (i) => new TextDecoder().decode(i);
var wd = class {
  constructor(e, t, s) {
    this.name = e, this.prefix = t, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var vd = class {
  constructor(e, t, s) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return vc(this, e);
  }
};
var _d = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return vc(this, e);
  }
  decode(e) {
    const t = e[0], s = this.decoders[t];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var vc = (i, e) => new _d({
  ...i.decoders || { [i.prefix]: i },
  ...e.decoders || { [e.prefix]: e }
});
var Ed = class {
  constructor(e, t, s, r) {
    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = r, this.encoder = new wd(e, t, s), this.decoder = new vd(e, t, r);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var cr = ({ name: i, prefix: e, encode: t, decode: s }) => new Ed(i, e, t, s);
var ps = ({ prefix: i, name: e, alphabet: t }) => {
  const { encode: s, decode: r } = gd(t, e);
  return cr({
    prefix: i,
    name: e,
    encode: s,
    decode: (n) => yd(r(n))
  });
};
var Sd = (i, e, t, s) => {
  const r = {};
  for (let p = 0; p < e.length; ++p)
    r[e[p]] = p;
  let n = i.length;
  for (; i[n - 1] === "="; )
    --n;
  const o = new Uint8Array(n * t / 8 | 0);
  let c = 0, u = 0, d = 0;
  for (let p = 0; p < n; ++p) {
    const b = r[i[p]];
    if (b === void 0)
      throw new SyntaxError(`Non-${s} character`);
    u = u << t | b, c += t, c >= 8 && (c -= 8, o[d++] = 255 & u >> c);
  }
  if (c >= t || 255 & u << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return o;
};
var Id = (i, e, t) => {
  const s = e[e.length - 1] === "=", r = (1 << t) - 1;
  let n = "", o = 0, c = 0;
  for (let u = 0; u < i.length; ++u)
    for (c = c << 8 | i[u], o += 8; o > t; )
      o -= t, n += e[r & c >> o];
  if (o && (n += e[r & c << t - o]), s)
    for (; n.length * t & 7; )
      n += "=";
  return n;
};
var ut = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) => cr({
  prefix: e,
  name: i,
  encode(r) {
    return Id(r, s, t);
  },
  decode(r) {
    return Sd(r, s, t, i);
  }
});
var Dd = cr({
  prefix: "\0",
  name: "identity",
  encode: (i) => bd(i),
  decode: (i) => md(i)
});
var xd = Object.freeze(Object.defineProperty({
  __proto__: null,
  identity: Dd
}, Symbol.toStringTag, { value: "Module" }));
var Od = ut({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
var Nd = Object.freeze(Object.defineProperty({
  __proto__: null,
  base2: Od
}, Symbol.toStringTag, { value: "Module" }));
var Pd = ut({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
var Rd = Object.freeze(Object.defineProperty({
  __proto__: null,
  base8: Pd
}, Symbol.toStringTag, { value: "Module" }));
var Cd = ps({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
var Ad = Object.freeze(Object.defineProperty({
  __proto__: null,
  base10: Cd
}, Symbol.toStringTag, { value: "Module" }));
var Td = ut({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var $d = ut({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
var Fd = Object.freeze(Object.defineProperty({
  __proto__: null,
  base16: Td,
  base16upper: $d
}, Symbol.toStringTag, { value: "Module" }));
var Ud = ut({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var Ld = ut({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var Md = ut({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var qd = ut({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var jd = ut({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var zd = ut({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var Kd = ut({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var Vd = ut({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var Bd = ut({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
var kd = Object.freeze(Object.defineProperty({
  __proto__: null,
  base32: Ud,
  base32hex: jd,
  base32hexpad: Kd,
  base32hexpadupper: Vd,
  base32hexupper: zd,
  base32pad: Md,
  base32padupper: qd,
  base32upper: Ld,
  base32z: Bd
}, Symbol.toStringTag, { value: "Module" }));
var Hd = ps({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var Gd = ps({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Wd = Object.freeze(Object.defineProperty({
  __proto__: null,
  base36: Hd,
  base36upper: Gd
}, Symbol.toStringTag, { value: "Module" }));
var Yd = ps({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var Jd = ps({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var Qd = Object.freeze(Object.defineProperty({
  __proto__: null,
  base58btc: Yd,
  base58flickr: Jd
}, Symbol.toStringTag, { value: "Module" }));
var Xd = ut({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var Zd = ut({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var ef = ut({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var tf = ut({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
var sf = Object.freeze(Object.defineProperty({
  __proto__: null,
  base64: Xd,
  base64pad: Zd,
  base64url: ef,
  base64urlpad: tf
}, Symbol.toStringTag, { value: "Module" }));
var _c = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var rf = _c.reduce((i, e, t) => (i[t] = e, i), []);
var nf = _c.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);
function of(i) {
  return i.reduce((e, t) => (e += rf[t], e), "");
}
function af(i) {
  const e = [];
  for (const t of i) {
    const s = nf[t.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
var cf = cr({
  prefix: "🚀",
  name: "base256emoji",
  encode: of,
  decode: af
});
var hf = Object.freeze(Object.defineProperty({
  __proto__: null,
  base256emoji: cf
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
var bo = {
  ...xd,
  ...Nd,
  ...Rd,
  ...Ad,
  ...Fd,
  ...kd,
  ...Wd,
  ...Qd,
  ...sf,
  ...hf
};
function Ec(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: {
      name: i,
      prefix: e,
      encode: t
    },
    decoder: { decode: s }
  };
}
var wo = Ec("utf8", "u", (i) => "u" + new TextDecoder("utf8").decode(i), (i) => new TextEncoder().encode(i.substring(1)));
var Dr = Ec("ascii", "a", (i) => {
  let e = "a";
  for (let t = 0; t < i.length; t++)
    e += String.fromCharCode(i[t]);
  return e;
}, (i) => {
  i = i.substring(1);
  const e = wc(i.length);
  for (let t = 0; t < i.length; t++)
    e[t] = i.charCodeAt(t);
  return e;
});
var Sc = {
  utf8: wo,
  "utf-8": wo,
  hex: bo.base16,
  latin1: Dr,
  ascii: Dr,
  binary: Dr,
  ...bo
};
function Ne(i, e = "utf8") {
  const t = Sc[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf8") : t.encoder.encode(i).substring(1);
}
function Ce(i, e = "utf8") {
  const t = Sc[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? on(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`);
}
function Gs(i) {
  return Ne(Ce(rr(i), nd), bc);
}
function an(i) {
  const e = Ce(ld, mo), t = ud + Ne(ls([e, i]), mo);
  return [cd, hd, t].join(ad);
}
function uf(i) {
  return Ne(i, bc);
}
function lf(i) {
  return Ce([Gs(i.header), Gs(i.payload)].join(mc), od);
}
function df(i) {
  return [
    Gs(i.header),
    Gs(i.payload),
    uf(i.signature)
  ].join(mc);
}
function Ws(i = li.randomBytes(dd)) {
  return nn.generateKeyPairFromSeed(i);
}
async function Ic(i, e, t, s, r = V.fromMiliseconds(Date.now())) {
  const n = { alg: sd, typ: rd }, o = an(s.publicKey), c = r + t, u = { iss: o, sub: i, aud: e, iat: r, exp: c }, d = lf({ header: n, payload: u }), p = nn.sign(s.secretKey, d);
  return df({ header: n, payload: u, signature: p });
}
var gs = {};
var hr = {};
Object.defineProperty(hr, "__esModule", { value: true });
var pt = oe;
var Kr = Pt;
var ff = 20;
function pf(i, e, t) {
  for (var s = 1634760805, r = 857760878, n = 2036477234, o = 1797285236, c = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], u = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], d = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], p = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], b = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], x = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], O = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], _2 = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], C = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], F2 = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], K = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], I = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], D = s, y = r, w = n, f = o, a = c, l = u, L2 = d, v = p, R2 = b, $ = x, q = O, m = _2, E = C, B = F2, z = K, j = I, U = 0; U < ff; U += 2)
    D = D + a | 0, E ^= D, E = E >>> 32 - 16 | E << 16, R2 = R2 + E | 0, a ^= R2, a = a >>> 32 - 12 | a << 12, y = y + l | 0, B ^= y, B = B >>> 32 - 16 | B << 16, $ = $ + B | 0, l ^= $, l = l >>> 32 - 12 | l << 12, w = w + L2 | 0, z ^= w, z = z >>> 32 - 16 | z << 16, q = q + z | 0, L2 ^= q, L2 = L2 >>> 32 - 12 | L2 << 12, f = f + v | 0, j ^= f, j = j >>> 32 - 16 | j << 16, m = m + j | 0, v ^= m, v = v >>> 32 - 12 | v << 12, w = w + L2 | 0, z ^= w, z = z >>> 32 - 8 | z << 8, q = q + z | 0, L2 ^= q, L2 = L2 >>> 32 - 7 | L2 << 7, f = f + v | 0, j ^= f, j = j >>> 32 - 8 | j << 8, m = m + j | 0, v ^= m, v = v >>> 32 - 7 | v << 7, y = y + l | 0, B ^= y, B = B >>> 32 - 8 | B << 8, $ = $ + B | 0, l ^= $, l = l >>> 32 - 7 | l << 7, D = D + a | 0, E ^= D, E = E >>> 32 - 8 | E << 8, R2 = R2 + E | 0, a ^= R2, a = a >>> 32 - 7 | a << 7, D = D + l | 0, j ^= D, j = j >>> 32 - 16 | j << 16, q = q + j | 0, l ^= q, l = l >>> 32 - 12 | l << 12, y = y + L2 | 0, E ^= y, E = E >>> 32 - 16 | E << 16, m = m + E | 0, L2 ^= m, L2 = L2 >>> 32 - 12 | L2 << 12, w = w + v | 0, B ^= w, B = B >>> 32 - 16 | B << 16, R2 = R2 + B | 0, v ^= R2, v = v >>> 32 - 12 | v << 12, f = f + a | 0, z ^= f, z = z >>> 32 - 16 | z << 16, $ = $ + z | 0, a ^= $, a = a >>> 32 - 12 | a << 12, w = w + v | 0, B ^= w, B = B >>> 32 - 8 | B << 8, R2 = R2 + B | 0, v ^= R2, v = v >>> 32 - 7 | v << 7, f = f + a | 0, z ^= f, z = z >>> 32 - 8 | z << 8, $ = $ + z | 0, a ^= $, a = a >>> 32 - 7 | a << 7, y = y + L2 | 0, E ^= y, E = E >>> 32 - 8 | E << 8, m = m + E | 0, L2 ^= m, L2 = L2 >>> 32 - 7 | L2 << 7, D = D + l | 0, j ^= D, j = j >>> 32 - 8 | j << 8, q = q + j | 0, l ^= q, l = l >>> 32 - 7 | l << 7;
  pt.writeUint32LE(D + s | 0, i, 0), pt.writeUint32LE(y + r | 0, i, 4), pt.writeUint32LE(w + n | 0, i, 8), pt.writeUint32LE(f + o | 0, i, 12), pt.writeUint32LE(a + c | 0, i, 16), pt.writeUint32LE(l + u | 0, i, 20), pt.writeUint32LE(L2 + d | 0, i, 24), pt.writeUint32LE(v + p | 0, i, 28), pt.writeUint32LE(R2 + b | 0, i, 32), pt.writeUint32LE($ + x | 0, i, 36), pt.writeUint32LE(q + O | 0, i, 40), pt.writeUint32LE(m + _2 | 0, i, 44), pt.writeUint32LE(E + C | 0, i, 48), pt.writeUint32LE(B + F2 | 0, i, 52), pt.writeUint32LE(z + K | 0, i, 56), pt.writeUint32LE(j + I | 0, i, 60);
}
function Dc(i, e, t, s, r) {
  if (r === void 0 && (r = 0), i.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var n, o;
  if (r === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    n = new Uint8Array(16), o = n.length - e.length, n.set(e, o);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    n = e, o = r;
  }
  for (var c = new Uint8Array(64), u = 0; u < t.length; u += 64) {
    pf(c, n, i);
    for (var d = u; d < u + 64 && d < t.length; d++)
      s[d] = t[d] ^ c[d - u];
    yf(n, 0, o);
  }
  return Kr.wipe(c), r === 0 && Kr.wipe(n), s;
}
hr.streamXOR = Dc;
function gf(i, e, t, s) {
  return s === void 0 && (s = 0), Kr.wipe(t), Dc(i, e, t, t, s);
}
hr.stream = gf;
function yf(i, e, t) {
  for (var s = 1; t--; )
    s = s + (i[e] & 255) | 0, i[e] = s & 255, s >>>= 8, e++;
  if (s > 0)
    throw new Error("ChaCha: counter overflow");
}
var xc = {};
var di = {};
Object.defineProperty(di, "__esModule", { value: true });
function mf(i, e, t) {
  return ~(i - 1) & e | i - 1 & t;
}
di.select = mf;
function bf(i, e) {
  return (i | 0) - (e | 0) - 1 >>> 31 & 1;
}
di.lessOrEqual = bf;
function Oc(i, e) {
  if (i.length !== e.length)
    return 0;
  for (var t = 0, s = 0; s < i.length; s++)
    t |= i[s] ^ e[s];
  return 1 & t - 1 >>> 8;
}
di.compare = Oc;
function wf(i, e) {
  return i.length === 0 || e.length === 0 ? false : Oc(i, e) !== 0;
}
di.equal = wf;
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  var e = di, t = Pt;
  i.DIGEST_LENGTH = 16;
  var s = (
    /** @class */
    function() {
      function o(c) {
        this.digestLength = i.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = false;
        var u = c[0] | c[1] << 8;
        this._r[0] = u & 8191;
        var d = c[2] | c[3] << 8;
        this._r[1] = (u >>> 13 | d << 3) & 8191;
        var p = c[4] | c[5] << 8;
        this._r[2] = (d >>> 10 | p << 6) & 7939;
        var b = c[6] | c[7] << 8;
        this._r[3] = (p >>> 7 | b << 9) & 8191;
        var x = c[8] | c[9] << 8;
        this._r[4] = (b >>> 4 | x << 12) & 255, this._r[5] = x >>> 1 & 8190;
        var O = c[10] | c[11] << 8;
        this._r[6] = (x >>> 14 | O << 2) & 8191;
        var _2 = c[12] | c[13] << 8;
        this._r[7] = (O >>> 11 | _2 << 5) & 8065;
        var C = c[14] | c[15] << 8;
        this._r[8] = (_2 >>> 8 | C << 8) & 8191, this._r[9] = C >>> 5 & 127, this._pad[0] = c[16] | c[17] << 8, this._pad[1] = c[18] | c[19] << 8, this._pad[2] = c[20] | c[21] << 8, this._pad[3] = c[22] | c[23] << 8, this._pad[4] = c[24] | c[25] << 8, this._pad[5] = c[26] | c[27] << 8, this._pad[6] = c[28] | c[29] << 8, this._pad[7] = c[30] | c[31] << 8;
      }
      return o.prototype._blocks = function(c, u, d) {
        for (var p = this._fin ? 0 : 2048, b = this._h[0], x = this._h[1], O = this._h[2], _2 = this._h[3], C = this._h[4], F2 = this._h[5], K = this._h[6], I = this._h[7], D = this._h[8], y = this._h[9], w = this._r[0], f = this._r[1], a = this._r[2], l = this._r[3], L2 = this._r[4], v = this._r[5], R2 = this._r[6], $ = this._r[7], q = this._r[8], m = this._r[9]; d >= 16; ) {
          var E = c[u + 0] | c[u + 1] << 8;
          b += E & 8191;
          var B = c[u + 2] | c[u + 3] << 8;
          x += (E >>> 13 | B << 3) & 8191;
          var z = c[u + 4] | c[u + 5] << 8;
          O += (B >>> 10 | z << 6) & 8191;
          var j = c[u + 6] | c[u + 7] << 8;
          _2 += (z >>> 7 | j << 9) & 8191;
          var U = c[u + 8] | c[u + 9] << 8;
          C += (j >>> 4 | U << 12) & 8191, F2 += U >>> 1 & 8191;
          var M = c[u + 10] | c[u + 11] << 8;
          K += (U >>> 14 | M << 2) & 8191;
          var H = c[u + 12] | c[u + 13] << 8;
          I += (M >>> 11 | H << 5) & 8191;
          var te = c[u + 14] | c[u + 15] << 8;
          D += (H >>> 8 | te << 8) & 8191, y += te >>> 5 | p;
          var G = 0, ie = G;
          ie += b * w, ie += x * (5 * m), ie += O * (5 * q), ie += _2 * (5 * $), ie += C * (5 * R2), G = ie >>> 13, ie &= 8191, ie += F2 * (5 * v), ie += K * (5 * L2), ie += I * (5 * l), ie += D * (5 * a), ie += y * (5 * f), G += ie >>> 13, ie &= 8191;
          var Q = G;
          Q += b * f, Q += x * w, Q += O * (5 * m), Q += _2 * (5 * q), Q += C * (5 * $), G = Q >>> 13, Q &= 8191, Q += F2 * (5 * R2), Q += K * (5 * v), Q += I * (5 * L2), Q += D * (5 * l), Q += y * (5 * a), G += Q >>> 13, Q &= 8191;
          var se = G;
          se += b * a, se += x * f, se += O * w, se += _2 * (5 * m), se += C * (5 * q), G = se >>> 13, se &= 8191, se += F2 * (5 * $), se += K * (5 * R2), se += I * (5 * v), se += D * (5 * L2), se += y * (5 * l), G += se >>> 13, se &= 8191;
          var T = G;
          T += b * l, T += x * a, T += O * f, T += _2 * w, T += C * (5 * m), G = T >>> 13, T &= 8191, T += F2 * (5 * q), T += K * (5 * $), T += I * (5 * R2), T += D * (5 * v), T += y * (5 * L2), G += T >>> 13, T &= 8191;
          var A = G;
          A += b * L2, A += x * l, A += O * a, A += _2 * f, A += C * w, G = A >>> 13, A &= 8191, A += F2 * (5 * m), A += K * (5 * q), A += I * (5 * $), A += D * (5 * R2), A += y * (5 * v), G += A >>> 13, A &= 8191;
          var N = G;
          N += b * v, N += x * L2, N += O * l, N += _2 * a, N += C * f, G = N >>> 13, N &= 8191, N += F2 * w, N += K * (5 * m), N += I * (5 * q), N += D * (5 * $), N += y * (5 * R2), G += N >>> 13, N &= 8191;
          var h = G;
          h += b * R2, h += x * v, h += O * L2, h += _2 * l, h += C * a, G = h >>> 13, h &= 8191, h += F2 * f, h += K * w, h += I * (5 * m), h += D * (5 * q), h += y * (5 * $), G += h >>> 13, h &= 8191;
          var S = G;
          S += b * $, S += x * R2, S += O * v, S += _2 * L2, S += C * l, G = S >>> 13, S &= 8191, S += F2 * a, S += K * f, S += I * w, S += D * (5 * m), S += y * (5 * q), G += S >>> 13, S &= 8191;
          var W = G;
          W += b * q, W += x * $, W += O * R2, W += _2 * v, W += C * L2, G = W >>> 13, W &= 8191, W += F2 * l, W += K * a, W += I * f, W += D * w, W += y * (5 * m), G += W >>> 13, W &= 8191;
          var X = G;
          X += b * m, X += x * q, X += O * $, X += _2 * R2, X += C * v, G = X >>> 13, X &= 8191, X += F2 * L2, X += K * l, X += I * a, X += D * f, X += y * w, G += X >>> 13, X &= 8191, G = (G << 2) + G | 0, G = G + ie | 0, ie = G & 8191, G = G >>> 13, Q += G, b = ie, x = Q, O = se, _2 = T, C = A, F2 = N, K = h, I = S, D = W, y = X, u += 16, d -= 16;
        }
        this._h[0] = b, this._h[1] = x, this._h[2] = O, this._h[3] = _2, this._h[4] = C, this._h[5] = F2, this._h[6] = K, this._h[7] = I, this._h[8] = D, this._h[9] = y;
      }, o.prototype.finish = function(c, u) {
        u === void 0 && (u = 0);
        var d = new Uint16Array(10), p, b, x, O;
        if (this._leftover) {
          for (O = this._leftover, this._buffer[O++] = 1; O < 16; O++)
            this._buffer[O] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (p = this._h[1] >>> 13, this._h[1] &= 8191, O = 2; O < 10; O++)
          this._h[O] += p, p = this._h[O] >>> 13, this._h[O] &= 8191;
        for (this._h[0] += p * 5, p = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += p, p = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += p, d[0] = this._h[0] + 5, p = d[0] >>> 13, d[0] &= 8191, O = 1; O < 10; O++)
          d[O] = this._h[O] + p, p = d[O] >>> 13, d[O] &= 8191;
        for (d[9] -= 8192, b = (p ^ 1) - 1, O = 0; O < 10; O++)
          d[O] &= b;
        for (b = ~b, O = 0; O < 10; O++)
          this._h[O] = this._h[O] & b | d[O];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, x = this._h[0] + this._pad[0], this._h[0] = x & 65535, O = 1; O < 8; O++)
          x = (this._h[O] + this._pad[O] | 0) + (x >>> 16) | 0, this._h[O] = x & 65535;
        return c[u + 0] = this._h[0] >>> 0, c[u + 1] = this._h[0] >>> 8, c[u + 2] = this._h[1] >>> 0, c[u + 3] = this._h[1] >>> 8, c[u + 4] = this._h[2] >>> 0, c[u + 5] = this._h[2] >>> 8, c[u + 6] = this._h[3] >>> 0, c[u + 7] = this._h[3] >>> 8, c[u + 8] = this._h[4] >>> 0, c[u + 9] = this._h[4] >>> 8, c[u + 10] = this._h[5] >>> 0, c[u + 11] = this._h[5] >>> 8, c[u + 12] = this._h[6] >>> 0, c[u + 13] = this._h[6] >>> 8, c[u + 14] = this._h[7] >>> 0, c[u + 15] = this._h[7] >>> 8, this._finished = true, this;
      }, o.prototype.update = function(c) {
        var u = 0, d = c.length, p;
        if (this._leftover) {
          p = 16 - this._leftover, p > d && (p = d);
          for (var b = 0; b < p; b++)
            this._buffer[this._leftover + b] = c[u + b];
          if (d -= p, u += p, this._leftover += p, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (d >= 16 && (p = d - d % 16, this._blocks(c, u, p), u += p, d -= p), d) {
          for (var b = 0; b < d; b++)
            this._buffer[this._leftover + b] = c[u + b];
          this._leftover += d;
        }
        return this;
      }, o.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var c = new Uint8Array(16);
        return this.finish(c), c;
      }, o.prototype.clean = function() {
        return t.wipe(this._buffer), t.wipe(this._r), t.wipe(this._h), t.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = true, this;
      }, o;
    }()
  );
  i.Poly1305 = s;
  function r(o, c) {
    var u = new s(o);
    u.update(c);
    var d = u.digest();
    return u.clean(), d;
  }
  i.oneTimeAuth = r;
  function n(o, c) {
    return o.length !== i.DIGEST_LENGTH || c.length !== i.DIGEST_LENGTH ? false : e.equal(o, c);
  }
  i.equal = n;
})(xc);
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  var e = hr, t = xc, s = Pt, r = oe, n = di;
  i.KEY_LENGTH = 32, i.NONCE_LENGTH = 12, i.TAG_LENGTH = 16;
  var o = new Uint8Array(16), c = (
    /** @class */
    function() {
      function u(d) {
        if (this.nonceLength = i.NONCE_LENGTH, this.tagLength = i.TAG_LENGTH, d.length !== i.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(d);
      }
      return u.prototype.seal = function(d, p, b, x) {
        if (d.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var O = new Uint8Array(16);
        O.set(d, O.length - d.length);
        var _2 = new Uint8Array(32);
        e.stream(this._key, O, _2, 4);
        var C = p.length + this.tagLength, F2;
        if (x) {
          if (x.length !== C)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          F2 = x;
        } else
          F2 = new Uint8Array(C);
        return e.streamXOR(this._key, O, p, F2, 4), this._authenticate(F2.subarray(F2.length - this.tagLength, F2.length), _2, F2.subarray(0, F2.length - this.tagLength), b), s.wipe(O), F2;
      }, u.prototype.open = function(d, p, b, x) {
        if (d.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (p.length < this.tagLength)
          return null;
        var O = new Uint8Array(16);
        O.set(d, O.length - d.length);
        var _2 = new Uint8Array(32);
        e.stream(this._key, O, _2, 4);
        var C = new Uint8Array(this.tagLength);
        if (this._authenticate(C, _2, p.subarray(0, p.length - this.tagLength), b), !n.equal(C, p.subarray(p.length - this.tagLength, p.length)))
          return null;
        var F2 = p.length - this.tagLength, K;
        if (x) {
          if (x.length !== F2)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          K = x;
        } else
          K = new Uint8Array(F2);
        return e.streamXOR(this._key, O, p.subarray(0, p.length - this.tagLength), K, 4), s.wipe(O), K;
      }, u.prototype.clean = function() {
        return s.wipe(this._key), this;
      }, u.prototype._authenticate = function(d, p, b, x) {
        var O = new t.Poly1305(p);
        x && (O.update(x), x.length % 16 > 0 && O.update(o.subarray(x.length % 16))), O.update(b), b.length % 16 > 0 && O.update(o.subarray(b.length % 16));
        var _2 = new Uint8Array(8);
        x && r.writeUint64LE(x.length, _2), O.update(_2), r.writeUint64LE(b.length, _2), O.update(_2);
        for (var C = O.digest(), F2 = 0; F2 < C.length; F2++)
          d[F2] = C[F2];
        O.clean(), s.wipe(C), s.wipe(_2);
      }, u;
    }()
  );
  i.ChaCha20Poly1305 = c;
})(gs);
var Nc = {};
var ys = {};
var cn = {};
Object.defineProperty(cn, "__esModule", { value: true });
function vf(i) {
  return typeof i.saveState < "u" && typeof i.restoreState < "u" && typeof i.cleanSavedState < "u";
}
cn.isSerializableHash = vf;
Object.defineProperty(ys, "__esModule", { value: true });
var jt = cn;
var _f = di;
var Ef = Pt;
var Pc = (
  /** @class */
  function() {
    function i(e, t) {
      this._finished = false, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var s = new Uint8Array(this.blockSize);
      t.length > this.blockSize ? this._inner.update(t).finish(s).clean() : s.set(t);
      for (var r = 0; r < s.length; r++)
        s[r] ^= 54;
      this._inner.update(s);
      for (var r = 0; r < s.length; r++)
        s[r] ^= 106;
      this._outer.update(s), jt.isSerializableHash(this._inner) && jt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Ef.wipe(s);
    }
    return i.prototype.reset = function() {
      if (!jt.isSerializableHash(this._inner) || !jt.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = false, this;
    }, i.prototype.clean = function() {
      jt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), jt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, i.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, i.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = true, this);
    }, i.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, i.prototype.saveState = function() {
      if (!jt.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, i.prototype.restoreState = function(e) {
      if (!jt.isSerializableHash(this._inner) || !jt.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = false, this;
    }, i.prototype.cleanSavedState = function(e) {
      if (!jt.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, i;
  }()
);
ys.HMAC = Pc;
function Sf(i, e, t) {
  var s = new Pc(i, e);
  s.update(t);
  var r = s.digest();
  return s.clean(), r;
}
ys.hmac = Sf;
ys.equal = _f.equal;
Object.defineProperty(Nc, "__esModule", { value: true });
var vo = ys;
var _o = Pt;
var If = (
  /** @class */
  function() {
    function i(e, t, s, r) {
      s === void 0 && (s = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = r;
      var n = vo.hmac(this._hash, s, t);
      this._hmac = new vo.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return i.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, i.prototype.expand = function(e) {
      for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
        this._bufpos === this._buffer.length && this._fillBuffer(), t[s] = this._buffer[this._bufpos++];
      return t;
    }, i.prototype.clean = function() {
      this._hmac.clean(), _o.wipe(this._buffer), _o.wipe(this._counter), this._bufpos = 0;
    }, i;
  }()
);
var Rc = Nc.HKDF = If;
var Si = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  var e = oe, t = Pt;
  i.DIGEST_LENGTH = 32, i.BLOCK_SIZE = 64;
  var s = (
    /** @class */
    function() {
      function c() {
        this.digestLength = i.DIGEST_LENGTH, this.blockSize = i.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = false, this.reset();
      }
      return c.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, c.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = false, this;
      }, c.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }, c.prototype.update = function(u, d) {
        if (d === void 0 && (d = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var p = 0;
        if (this._bytesHashed += d, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && d > 0; )
            this._buffer[this._bufferLength++] = u[p++], d--;
          this._bufferLength === this.blockSize && (n(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (d >= this.blockSize && (p = n(this._temp, this._state, u, p, d), d %= this.blockSize); d > 0; )
          this._buffer[this._bufferLength++] = u[p++], d--;
        return this;
      }, c.prototype.finish = function(u) {
        if (!this._finished) {
          var d = this._bytesHashed, p = this._bufferLength, b = d / 536870912 | 0, x = d << 3, O = d % 64 < 56 ? 64 : 128;
          this._buffer[p] = 128;
          for (var _2 = p + 1; _2 < O - 8; _2++)
            this._buffer[_2] = 0;
          e.writeUint32BE(b, this._buffer, O - 8), e.writeUint32BE(x, this._buffer, O - 4), n(this._temp, this._state, this._buffer, 0, O), this._finished = true;
        }
        for (var _2 = 0; _2 < this.digestLength / 4; _2++)
          e.writeUint32BE(this._state[_2], u, _2 * 4);
        return this;
      }, c.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, c.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, c.prototype.restoreState = function(u) {
        return this._state.set(u.state), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = false, this;
      }, c.prototype.cleanSavedState = function(u) {
        t.wipe(u.state), u.buffer && t.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, c;
    }()
  );
  i.SHA256 = s;
  var r = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function n(c, u, d, p, b) {
    for (; b >= 64; ) {
      for (var x = u[0], O = u[1], _2 = u[2], C = u[3], F2 = u[4], K = u[5], I = u[6], D = u[7], y = 0; y < 16; y++) {
        var w = p + y * 4;
        c[y] = e.readUint32BE(d, w);
      }
      for (var y = 16; y < 64; y++) {
        var f = c[y - 2], a = (f >>> 17 | f << 32 - 17) ^ (f >>> 19 | f << 32 - 19) ^ f >>> 10;
        f = c[y - 15];
        var l = (f >>> 7 | f << 32 - 7) ^ (f >>> 18 | f << 32 - 18) ^ f >>> 3;
        c[y] = (a + c[y - 7] | 0) + (l + c[y - 16] | 0);
      }
      for (var y = 0; y < 64; y++) {
        var a = (((F2 >>> 6 | F2 << 26) ^ (F2 >>> 11 | F2 << 21) ^ (F2 >>> 25 | F2 << 7)) + (F2 & K ^ ~F2 & I) | 0) + (D + (r[y] + c[y] | 0) | 0) | 0, l = ((x >>> 2 | x << 32 - 2) ^ (x >>> 13 | x << 32 - 13) ^ (x >>> 22 | x << 32 - 22)) + (x & O ^ x & _2 ^ O & _2) | 0;
        D = I, I = K, K = F2, F2 = C + a | 0, C = _2, _2 = O, O = x, x = a + l | 0;
      }
      u[0] += x, u[1] += O, u[2] += _2, u[3] += C, u[4] += F2, u[5] += K, u[6] += I, u[7] += D, p += 64, b -= 64;
    }
    return p;
  }
  function o(c) {
    var u = new s();
    u.update(c);
    var d = u.digest();
    return u.clean(), d;
  }
  i.hash = o;
})(Si);
var ms = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true }), i.sharedKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.scalarMultBase = i.scalarMult = i.SHARED_KEY_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = void 0;
  const e = li, t = Pt;
  i.PUBLIC_KEY_LENGTH = 32, i.SECRET_KEY_LENGTH = 32, i.SHARED_KEY_LENGTH = 32;
  function s(y) {
    const w = new Float64Array(16);
    if (y)
      for (let f = 0; f < y.length; f++)
        w[f] = y[f];
    return w;
  }
  const r = new Uint8Array(32);
  r[0] = 9;
  const n = s([56129, 1]);
  function o(y) {
    let w = 1;
    for (let f = 0; f < 16; f++) {
      let a = y[f] + w + 65535;
      w = Math.floor(a / 65536), y[f] = a - w * 65536;
    }
    y[0] += w - 1 + 37 * (w - 1);
  }
  function c(y, w, f) {
    const a = ~(f - 1);
    for (let l = 0; l < 16; l++) {
      const L2 = a & (y[l] ^ w[l]);
      y[l] ^= L2, w[l] ^= L2;
    }
  }
  function u(y, w) {
    const f = s(), a = s();
    for (let l = 0; l < 16; l++)
      a[l] = w[l];
    o(a), o(a), o(a);
    for (let l = 0; l < 2; l++) {
      f[0] = a[0] - 65517;
      for (let v = 1; v < 15; v++)
        f[v] = a[v] - 65535 - (f[v - 1] >> 16 & 1), f[v - 1] &= 65535;
      f[15] = a[15] - 32767 - (f[14] >> 16 & 1);
      const L2 = f[15] >> 16 & 1;
      f[14] &= 65535, c(a, f, 1 - L2);
    }
    for (let l = 0; l < 16; l++)
      y[2 * l] = a[l] & 255, y[2 * l + 1] = a[l] >> 8;
  }
  function d(y, w) {
    for (let f = 0; f < 16; f++)
      y[f] = w[2 * f] + (w[2 * f + 1] << 8);
    y[15] &= 32767;
  }
  function p(y, w, f) {
    for (let a = 0; a < 16; a++)
      y[a] = w[a] + f[a];
  }
  function b(y, w, f) {
    for (let a = 0; a < 16; a++)
      y[a] = w[a] - f[a];
  }
  function x(y, w, f) {
    let a, l, L2 = 0, v = 0, R2 = 0, $ = 0, q = 0, m = 0, E = 0, B = 0, z = 0, j = 0, U = 0, M = 0, H = 0, te = 0, G = 0, ie = 0, Q = 0, se = 0, T = 0, A = 0, N = 0, h = 0, S = 0, W = 0, X = 0, fe = 0, ve = 0, ge = 0, Se = 0, Me = 0, $e = 0, be = f[0], ye = f[1], pe = f[2], le = f[3], ue = f[4], he = f[5], ce = f[6], re = f[7], de = f[8], me = f[9], ne = f[10], _e = f[11], Ee = f[12], De = f[13], xe = f[14], Ie = f[15];
    a = w[0], L2 += a * be, v += a * ye, R2 += a * pe, $ += a * le, q += a * ue, m += a * he, E += a * ce, B += a * re, z += a * de, j += a * me, U += a * ne, M += a * _e, H += a * Ee, te += a * De, G += a * xe, ie += a * Ie, a = w[1], v += a * be, R2 += a * ye, $ += a * pe, q += a * le, m += a * ue, E += a * he, B += a * ce, z += a * re, j += a * de, U += a * me, M += a * ne, H += a * _e, te += a * Ee, G += a * De, ie += a * xe, Q += a * Ie, a = w[2], R2 += a * be, $ += a * ye, q += a * pe, m += a * le, E += a * ue, B += a * he, z += a * ce, j += a * re, U += a * de, M += a * me, H += a * ne, te += a * _e, G += a * Ee, ie += a * De, Q += a * xe, se += a * Ie, a = w[3], $ += a * be, q += a * ye, m += a * pe, E += a * le, B += a * ue, z += a * he, j += a * ce, U += a * re, M += a * de, H += a * me, te += a * ne, G += a * _e, ie += a * Ee, Q += a * De, se += a * xe, T += a * Ie, a = w[4], q += a * be, m += a * ye, E += a * pe, B += a * le, z += a * ue, j += a * he, U += a * ce, M += a * re, H += a * de, te += a * me, G += a * ne, ie += a * _e, Q += a * Ee, se += a * De, T += a * xe, A += a * Ie, a = w[5], m += a * be, E += a * ye, B += a * pe, z += a * le, j += a * ue, U += a * he, M += a * ce, H += a * re, te += a * de, G += a * me, ie += a * ne, Q += a * _e, se += a * Ee, T += a * De, A += a * xe, N += a * Ie, a = w[6], E += a * be, B += a * ye, z += a * pe, j += a * le, U += a * ue, M += a * he, H += a * ce, te += a * re, G += a * de, ie += a * me, Q += a * ne, se += a * _e, T += a * Ee, A += a * De, N += a * xe, h += a * Ie, a = w[7], B += a * be, z += a * ye, j += a * pe, U += a * le, M += a * ue, H += a * he, te += a * ce, G += a * re, ie += a * de, Q += a * me, se += a * ne, T += a * _e, A += a * Ee, N += a * De, h += a * xe, S += a * Ie, a = w[8], z += a * be, j += a * ye, U += a * pe, M += a * le, H += a * ue, te += a * he, G += a * ce, ie += a * re, Q += a * de, se += a * me, T += a * ne, A += a * _e, N += a * Ee, h += a * De, S += a * xe, W += a * Ie, a = w[9], j += a * be, U += a * ye, M += a * pe, H += a * le, te += a * ue, G += a * he, ie += a * ce, Q += a * re, se += a * de, T += a * me, A += a * ne, N += a * _e, h += a * Ee, S += a * De, W += a * xe, X += a * Ie, a = w[10], U += a * be, M += a * ye, H += a * pe, te += a * le, G += a * ue, ie += a * he, Q += a * ce, se += a * re, T += a * de, A += a * me, N += a * ne, h += a * _e, S += a * Ee, W += a * De, X += a * xe, fe += a * Ie, a = w[11], M += a * be, H += a * ye, te += a * pe, G += a * le, ie += a * ue, Q += a * he, se += a * ce, T += a * re, A += a * de, N += a * me, h += a * ne, S += a * _e, W += a * Ee, X += a * De, fe += a * xe, ve += a * Ie, a = w[12], H += a * be, te += a * ye, G += a * pe, ie += a * le, Q += a * ue, se += a * he, T += a * ce, A += a * re, N += a * de, h += a * me, S += a * ne, W += a * _e, X += a * Ee, fe += a * De, ve += a * xe, ge += a * Ie, a = w[13], te += a * be, G += a * ye, ie += a * pe, Q += a * le, se += a * ue, T += a * he, A += a * ce, N += a * re, h += a * de, S += a * me, W += a * ne, X += a * _e, fe += a * Ee, ve += a * De, ge += a * xe, Se += a * Ie, a = w[14], G += a * be, ie += a * ye, Q += a * pe, se += a * le, T += a * ue, A += a * he, N += a * ce, h += a * re, S += a * de, W += a * me, X += a * ne, fe += a * _e, ve += a * Ee, ge += a * De, Se += a * xe, Me += a * Ie, a = w[15], ie += a * be, Q += a * ye, se += a * pe, T += a * le, A += a * ue, N += a * he, h += a * ce, S += a * re, W += a * de, X += a * me, fe += a * ne, ve += a * _e, ge += a * Ee, Se += a * De, Me += a * xe, $e += a * Ie, L2 += 38 * Q, v += 38 * se, R2 += 38 * T, $ += 38 * A, q += 38 * N, m += 38 * h, E += 38 * S, B += 38 * W, z += 38 * X, j += 38 * fe, U += 38 * ve, M += 38 * ge, H += 38 * Se, te += 38 * Me, G += 38 * $e, l = 1, a = L2 + l + 65535, l = Math.floor(a / 65536), L2 = a - l * 65536, a = v + l + 65535, l = Math.floor(a / 65536), v = a - l * 65536, a = R2 + l + 65535, l = Math.floor(a / 65536), R2 = a - l * 65536, a = $ + l + 65535, l = Math.floor(a / 65536), $ = a - l * 65536, a = q + l + 65535, l = Math.floor(a / 65536), q = a - l * 65536, a = m + l + 65535, l = Math.floor(a / 65536), m = a - l * 65536, a = E + l + 65535, l = Math.floor(a / 65536), E = a - l * 65536, a = B + l + 65535, l = Math.floor(a / 65536), B = a - l * 65536, a = z + l + 65535, l = Math.floor(a / 65536), z = a - l * 65536, a = j + l + 65535, l = Math.floor(a / 65536), j = a - l * 65536, a = U + l + 65535, l = Math.floor(a / 65536), U = a - l * 65536, a = M + l + 65535, l = Math.floor(a / 65536), M = a - l * 65536, a = H + l + 65535, l = Math.floor(a / 65536), H = a - l * 65536, a = te + l + 65535, l = Math.floor(a / 65536), te = a - l * 65536, a = G + l + 65535, l = Math.floor(a / 65536), G = a - l * 65536, a = ie + l + 65535, l = Math.floor(a / 65536), ie = a - l * 65536, L2 += l - 1 + 37 * (l - 1), l = 1, a = L2 + l + 65535, l = Math.floor(a / 65536), L2 = a - l * 65536, a = v + l + 65535, l = Math.floor(a / 65536), v = a - l * 65536, a = R2 + l + 65535, l = Math.floor(a / 65536), R2 = a - l * 65536, a = $ + l + 65535, l = Math.floor(a / 65536), $ = a - l * 65536, a = q + l + 65535, l = Math.floor(a / 65536), q = a - l * 65536, a = m + l + 65535, l = Math.floor(a / 65536), m = a - l * 65536, a = E + l + 65535, l = Math.floor(a / 65536), E = a - l * 65536, a = B + l + 65535, l = Math.floor(a / 65536), B = a - l * 65536, a = z + l + 65535, l = Math.floor(a / 65536), z = a - l * 65536, a = j + l + 65535, l = Math.floor(a / 65536), j = a - l * 65536, a = U + l + 65535, l = Math.floor(a / 65536), U = a - l * 65536, a = M + l + 65535, l = Math.floor(a / 65536), M = a - l * 65536, a = H + l + 65535, l = Math.floor(a / 65536), H = a - l * 65536, a = te + l + 65535, l = Math.floor(a / 65536), te = a - l * 65536, a = G + l + 65535, l = Math.floor(a / 65536), G = a - l * 65536, a = ie + l + 65535, l = Math.floor(a / 65536), ie = a - l * 65536, L2 += l - 1 + 37 * (l - 1), y[0] = L2, y[1] = v, y[2] = R2, y[3] = $, y[4] = q, y[5] = m, y[6] = E, y[7] = B, y[8] = z, y[9] = j, y[10] = U, y[11] = M, y[12] = H, y[13] = te, y[14] = G, y[15] = ie;
  }
  function O(y, w) {
    x(y, w, w);
  }
  function _2(y, w) {
    const f = s();
    for (let a = 0; a < 16; a++)
      f[a] = w[a];
    for (let a = 253; a >= 0; a--)
      O(f, f), a !== 2 && a !== 4 && x(f, f, w);
    for (let a = 0; a < 16; a++)
      y[a] = f[a];
  }
  function C(y, w) {
    const f = new Uint8Array(32), a = new Float64Array(80), l = s(), L2 = s(), v = s(), R2 = s(), $ = s(), q = s();
    for (let z = 0; z < 31; z++)
      f[z] = y[z];
    f[31] = y[31] & 127 | 64, f[0] &= 248, d(a, w);
    for (let z = 0; z < 16; z++)
      L2[z] = a[z];
    l[0] = R2[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const j = f[z >>> 3] >>> (z & 7) & 1;
      c(l, L2, j), c(v, R2, j), p($, l, v), b(l, l, v), p(v, L2, R2), b(L2, L2, R2), O(R2, $), O(q, l), x(l, v, l), x(v, L2, $), p($, l, v), b(l, l, v), O(L2, l), b(v, R2, q), x(l, v, n), p(l, l, R2), x(v, v, l), x(l, R2, q), x(R2, L2, a), O(L2, $), c(l, L2, j), c(v, R2, j);
    }
    for (let z = 0; z < 16; z++)
      a[z + 16] = l[z], a[z + 32] = v[z], a[z + 48] = L2[z], a[z + 64] = R2[z];
    const m = a.subarray(32), E = a.subarray(16);
    _2(m, m), x(E, E, m);
    const B = new Uint8Array(32);
    return u(B, E), B;
  }
  i.scalarMult = C;
  function F2(y) {
    return C(y, r);
  }
  i.scalarMultBase = F2;
  function K(y) {
    if (y.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
    const w = new Uint8Array(y);
    return {
      publicKey: F2(w),
      secretKey: w
    };
  }
  i.generateKeyPairFromSeed = K;
  function I(y) {
    const w = (0, e.randomBytes)(32, y), f = K(w);
    return (0, t.wipe)(w), f;
  }
  i.generateKeyPair = I;
  function D(y, w, f = false) {
    if (y.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (w.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const a = C(y, w);
    if (f) {
      let l = 0;
      for (let L2 = 0; L2 < a.length; L2++)
        l |= a[L2];
      if (l === 0)
        throw new Error("X25519: invalid shared key");
    }
    return a;
  }
  i.sharedKey = D;
})(ms);
var Eo = globalThis && globalThis.__spreadArray || function(i, e, t) {
  if (t || arguments.length === 2)
    for (var s = 0, r = e.length, n; s < r; s++)
      (n || !(s in e)) && (n || (n = Array.prototype.slice.call(e, 0, s)), n[s] = e[s]);
  return i.concat(n || Array.prototype.slice.call(e));
};
var Df = (
  /** @class */
  function() {
    function i(e, t, s) {
      this.name = e, this.version = t, this.os = s, this.type = "browser";
    }
    return i;
  }()
);
var xf = (
  /** @class */
  function() {
    function i(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return i;
  }()
);
var Of = (
  /** @class */
  function() {
    function i(e, t, s, r) {
      this.name = e, this.version = t, this.os = s, this.bot = r, this.type = "bot-device";
    }
    return i;
  }()
);
var Nf = (
  /** @class */
  function() {
    function i() {
      this.type = "bot", this.bot = true, this.name = "bot", this.version = null, this.os = null;
    }
    return i;
  }()
);
var Pf = (
  /** @class */
  function() {
    function i() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return i;
  }()
);
var Rf = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var Cf = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var So = 3;
var Af = [
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
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
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
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
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
  ["searchbot", Rf]
];
var Io = [
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
  ["OS/2", /OS\/2/]
];
function hn(i) {
  return i ? Do(i) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Pf() : typeof navigator < "u" ? Do(navigator.userAgent) : Ff();
}
function Tf(i) {
  return i !== "" && Af.reduce(function(e, t) {
    var s = t[0], r = t[1];
    if (e)
      return e;
    var n = r.exec(i);
    return !!n && [s, n];
  }, false);
}
function Do(i) {
  var e = Tf(i);
  if (!e)
    return null;
  var t = e[0], s = e[1];
  if (t === "searchbot")
    return new Nf();
  var r = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  r ? r.length < So && (r = Eo(Eo([], r, true), Uf(So - r.length), true)) : r = [];
  var n = r.join("."), o = $f(i), c = Cf.exec(i);
  return c && c[1] ? new Of(t, n, o, c[1]) : new Df(t, n, o);
}
function $f(i) {
  for (var e = 0, t = Io.length; e < t; e++) {
    var s = Io[e], r = s[0], n = s[1], o = n.exec(i);
    if (o)
      return r;
  }
  return null;
}
function Ff() {
  var i = typeof process < "u" && process.version;
  return i ? new xf(process.version.slice(1)) : null;
}
function Uf(i) {
  for (var e = [], t = 0; t < i; t++)
    e.push("0");
  return e;
}
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: true });
Pe.getLocalStorage = Pe.getLocalStorageOrThrow = Pe.getCrypto = Pe.getCryptoOrThrow = ln = Pe.getLocation = Pe.getLocationOrThrow = bs = Pe.getNavigator = Pe.getNavigatorOrThrow = un = Pe.getDocument = Pe.getDocumentOrThrow = Pe.getFromWindowOrThrow = Pe.getFromWindow = void 0;
function Ii(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
Pe.getFromWindow = Ii;
function Li(i) {
  const e = Ii(i);
  if (!e)
    throw new Error(`${i} is not defined in Window`);
  return e;
}
Pe.getFromWindowOrThrow = Li;
function Lf() {
  return Li("document");
}
Pe.getDocumentOrThrow = Lf;
function Mf() {
  return Ii("document");
}
var un = Pe.getDocument = Mf;
function qf() {
  return Li("navigator");
}
Pe.getNavigatorOrThrow = qf;
function jf() {
  return Ii("navigator");
}
var bs = Pe.getNavigator = jf;
function zf() {
  return Li("location");
}
Pe.getLocationOrThrow = zf;
function Kf() {
  return Ii("location");
}
var ln = Pe.getLocation = Kf;
function Vf() {
  return Li("crypto");
}
Pe.getCryptoOrThrow = Vf;
function Bf() {
  return Ii("crypto");
}
Pe.getCrypto = Bf;
function kf() {
  return Li("localStorage");
}
Pe.getLocalStorageOrThrow = kf;
function Hf() {
  return Ii("localStorage");
}
Pe.getLocalStorage = Hf;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: true });
var fn = dn.getWindowMetadata = void 0;
var xo = Pe;
function Gf() {
  let i, e;
  try {
    i = xo.getDocumentOrThrow(), e = xo.getLocationOrThrow();
  } catch {
    return null;
  }
  function t() {
    const b = i.getElementsByTagName("link"), x = [];
    for (let O = 0; O < b.length; O++) {
      const _2 = b[O], C = _2.getAttribute("rel");
      if (C && C.toLowerCase().indexOf("icon") > -1) {
        const F2 = _2.getAttribute("href");
        if (F2)
          if (F2.toLowerCase().indexOf("https:") === -1 && F2.toLowerCase().indexOf("http:") === -1 && F2.indexOf("//") !== 0) {
            let K = e.protocol + "//" + e.host;
            if (F2.indexOf("/") === 0)
              K += F2;
            else {
              const I = e.pathname.split("/");
              I.pop();
              const D = I.join("/");
              K += D + "/" + F2;
            }
            x.push(K);
          } else if (F2.indexOf("//") === 0) {
            const K = e.protocol + F2;
            x.push(K);
          } else
            x.push(F2);
      }
    }
    return x;
  }
  function s(...b) {
    const x = i.getElementsByTagName("meta");
    for (let O = 0; O < x.length; O++) {
      const _2 = x[O], C = ["itemprop", "property", "name"].map((F2) => _2.getAttribute(F2)).filter((F2) => F2 ? b.includes(F2) : false);
      if (C.length && C) {
        const F2 = _2.getAttribute("content");
        if (F2)
          return F2;
      }
    }
    return "";
  }
  function r() {
    let b = s("name", "og:site_name", "og:title", "twitter:title");
    return b || (b = i.title), b;
  }
  function n() {
    return s("description", "og:description", "twitter:description", "keywords");
  }
  const o = r(), c = n(), u = e.origin, d = t();
  return {
    description: c,
    url: u,
    icons: d,
    name: o
  };
}
fn = dn.getWindowMetadata = Gf;
var ii = {};
var Wf = (i) => encodeURIComponent(i).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
var Cc = "%[a-f0-9]{2}";
var Oo = new RegExp("(" + Cc + ")|([^%]+?)", "gi");
var No = new RegExp("(" + Cc + ")+", "gi");
function Vr(i, e) {
  try {
    return [decodeURIComponent(i.join(""))];
  } catch {
  }
  if (i.length === 1)
    return i;
  e = e || 1;
  var t = i.slice(0, e), s = i.slice(e);
  return Array.prototype.concat.call([], Vr(t), Vr(s));
}
function Yf(i) {
  try {
    return decodeURIComponent(i);
  } catch {
    for (var e = i.match(Oo) || [], t = 1; t < e.length; t++)
      i = Vr(e, t).join(""), e = i.match(Oo) || [];
    return i;
  }
}
function Jf(i) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, t = No.exec(i); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var s = Yf(t[0]);
      s !== t[0] && (e[t[0]] = s);
    }
    t = No.exec(i);
  }
  e["%C2"] = "�";
  for (var r = Object.keys(e), n = 0; n < r.length; n++) {
    var o = r[n];
    i = i.replace(new RegExp(o, "g"), e[o]);
  }
  return i;
}
var Qf = function(i) {
  if (typeof i != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof i + "`");
  try {
    return i = i.replace(/\+/g, " "), decodeURIComponent(i);
  } catch {
    return Jf(i);
  }
};
var Xf = (i, e) => {
  if (!(typeof i == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [i];
  const t = i.indexOf(e);
  return t === -1 ? [i] : [
    i.slice(0, t),
    i.slice(t + e.length)
  ];
};
var Zf = function(i, e) {
  for (var t = {}, s = Object.keys(i), r = Array.isArray(e), n = 0; n < s.length; n++) {
    var o = s[n], c = i[o];
    (r ? e.indexOf(o) !== -1 : e(o, c, i)) && (t[o] = c);
  }
  return t;
};
(function(i) {
  const e = Wf, t = Qf, s = Xf, r = Zf, n = (I) => I == null, o = Symbol("encodeFragmentIdentifier");
  function c(I) {
    switch (I.arrayFormat) {
      case "index":
        return (D) => (y, w) => {
          const f = y.length;
          return w === void 0 || I.skipNull && w === null || I.skipEmptyString && w === "" ? y : w === null ? [...y, [p(D, I), "[", f, "]"].join("")] : [
            ...y,
            [p(D, I), "[", p(f, I), "]=", p(w, I)].join("")
          ];
        };
      case "bracket":
        return (D) => (y, w) => w === void 0 || I.skipNull && w === null || I.skipEmptyString && w === "" ? y : w === null ? [...y, [p(D, I), "[]"].join("")] : [...y, [p(D, I), "[]=", p(w, I)].join("")];
      case "colon-list-separator":
        return (D) => (y, w) => w === void 0 || I.skipNull && w === null || I.skipEmptyString && w === "" ? y : w === null ? [...y, [p(D, I), ":list="].join("")] : [...y, [p(D, I), ":list=", p(w, I)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = I.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (y) => (w, f) => f === void 0 || I.skipNull && f === null || I.skipEmptyString && f === "" ? w : (f = f === null ? "" : f, w.length === 0 ? [[p(y, I), D, p(f, I)].join("")] : [[w, p(f, I)].join(I.arrayFormatSeparator)]);
      }
      default:
        return (D) => (y, w) => w === void 0 || I.skipNull && w === null || I.skipEmptyString && w === "" ? y : w === null ? [...y, p(D, I)] : [...y, [p(D, I), "=", p(w, I)].join("")];
    }
  }
  function u(I) {
    let D;
    switch (I.arrayFormat) {
      case "index":
        return (y, w, f) => {
          if (D = /\[(\d*)\]$/.exec(y), y = y.replace(/\[\d*\]$/, ""), !D) {
            f[y] = w;
            return;
          }
          f[y] === void 0 && (f[y] = {}), f[y][D[1]] = w;
        };
      case "bracket":
        return (y, w, f) => {
          if (D = /(\[\])$/.exec(y), y = y.replace(/\[\]$/, ""), !D) {
            f[y] = w;
            return;
          }
          if (f[y] === void 0) {
            f[y] = [w];
            return;
          }
          f[y] = [].concat(f[y], w);
        };
      case "colon-list-separator":
        return (y, w, f) => {
          if (D = /(:list)$/.exec(y), y = y.replace(/:list$/, ""), !D) {
            f[y] = w;
            return;
          }
          if (f[y] === void 0) {
            f[y] = [w];
            return;
          }
          f[y] = [].concat(f[y], w);
        };
      case "comma":
      case "separator":
        return (y, w, f) => {
          const a = typeof w == "string" && w.includes(I.arrayFormatSeparator), l = typeof w == "string" && !a && b(w, I).includes(I.arrayFormatSeparator);
          w = l ? b(w, I) : w;
          const L2 = a || l ? w.split(I.arrayFormatSeparator).map((v) => b(v, I)) : w === null ? w : b(w, I);
          f[y] = L2;
        };
      case "bracket-separator":
        return (y, w, f) => {
          const a = /(\[\])$/.test(y);
          if (y = y.replace(/\[\]$/, ""), !a) {
            f[y] = w && b(w, I);
            return;
          }
          const l = w === null ? [] : w.split(I.arrayFormatSeparator).map((L2) => b(L2, I));
          if (f[y] === void 0) {
            f[y] = l;
            return;
          }
          f[y] = [].concat(f[y], l);
        };
      default:
        return (y, w, f) => {
          if (f[y] === void 0) {
            f[y] = w;
            return;
          }
          f[y] = [].concat(f[y], w);
        };
    }
  }
  function d(I) {
    if (typeof I != "string" || I.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function p(I, D) {
    return D.encode ? D.strict ? e(I) : encodeURIComponent(I) : I;
  }
  function b(I, D) {
    return D.decode ? t(I) : I;
  }
  function x(I) {
    return Array.isArray(I) ? I.sort() : typeof I == "object" ? x(Object.keys(I)).sort((D, y) => Number(D) - Number(y)).map((D) => I[D]) : I;
  }
  function O(I) {
    const D = I.indexOf("#");
    return D !== -1 && (I = I.slice(0, D)), I;
  }
  function _2(I) {
    let D = "";
    const y = I.indexOf("#");
    return y !== -1 && (D = I.slice(y)), D;
  }
  function C(I) {
    I = O(I);
    const D = I.indexOf("?");
    return D === -1 ? "" : I.slice(D + 1);
  }
  function F2(I, D) {
    return D.parseNumbers && !Number.isNaN(Number(I)) && typeof I == "string" && I.trim() !== "" ? I = Number(I) : D.parseBooleans && I !== null && (I.toLowerCase() === "true" || I.toLowerCase() === "false") && (I = I.toLowerCase() === "true"), I;
  }
  function K(I, D) {
    D = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, D), d(D.arrayFormatSeparator);
    const y = u(D), w = /* @__PURE__ */ Object.create(null);
    if (typeof I != "string" || (I = I.trim().replace(/^[?#&]/, ""), !I))
      return w;
    for (const f of I.split("&")) {
      if (f === "")
        continue;
      let [a, l] = s(D.decode ? f.replace(/\+/g, " ") : f, "=");
      l = l === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat) ? l : b(l, D), y(b(a, D), l, w);
    }
    for (const f of Object.keys(w)) {
      const a = w[f];
      if (typeof a == "object" && a !== null)
        for (const l of Object.keys(a))
          a[l] = F2(a[l], D);
      else
        w[f] = F2(a, D);
    }
    return D.sort === false ? w : (D.sort === true ? Object.keys(w).sort() : Object.keys(w).sort(D.sort)).reduce((f, a) => {
      const l = w[a];
      return l && typeof l == "object" && !Array.isArray(l) ? f[a] = x(l) : f[a] = l, f;
    }, /* @__PURE__ */ Object.create(null));
  }
  i.extract = C, i.parse = K, i.stringify = (I, D) => {
    if (!I)
      return "";
    D = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, D), d(D.arrayFormatSeparator);
    const y = (l) => D.skipNull && n(I[l]) || D.skipEmptyString && I[l] === "", w = c(D), f = {};
    for (const l of Object.keys(I))
      y(l) || (f[l] = I[l]);
    const a = Object.keys(f);
    return D.sort !== false && a.sort(D.sort), a.map((l) => {
      const L2 = I[l];
      return L2 === void 0 ? "" : L2 === null ? p(l, D) : Array.isArray(L2) ? L2.length === 0 && D.arrayFormat === "bracket-separator" ? p(l, D) + "[]" : L2.reduce(w(l), []).join("&") : p(l, D) + "=" + p(L2, D);
    }).filter((l) => l.length > 0).join("&");
  }, i.parseUrl = (I, D) => {
    D = Object.assign({
      decode: true
    }, D);
    const [y, w] = s(I, "#");
    return Object.assign(
      {
        url: y.split("?")[0] || "",
        query: K(C(I), D)
      },
      D && D.parseFragmentIdentifier && w ? { fragmentIdentifier: b(w, D) } : {}
    );
  }, i.stringifyUrl = (I, D) => {
    D = Object.assign({
      encode: true,
      strict: true,
      [o]: true
    }, D);
    const y = O(I.url).split("?")[0] || "", w = i.extract(I.url), f = i.parse(w, { sort: false }), a = Object.assign(f, I.query);
    let l = i.stringify(a, D);
    l && (l = `?${l}`);
    let L2 = _2(I.url);
    return I.fragmentIdentifier && (L2 = `#${D[o] ? p(I.fragmentIdentifier, D) : I.fragmentIdentifier}`), `${y}${l}${L2}`;
  }, i.pick = (I, D, y) => {
    y = Object.assign({
      parseFragmentIdentifier: true,
      [o]: false
    }, y);
    const { url: w, query: f, fragmentIdentifier: a } = i.parseUrl(I, y);
    return i.stringifyUrl({
      url: w,
      query: r(f, D),
      fragmentIdentifier: a
    }, y);
  }, i.exclude = (I, D, y) => {
    const w = Array.isArray(D) ? (f) => !D.includes(f) : (f, a) => !D(f, a);
    return i.pick(I, w, y);
  };
})(ii);
var Ac = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
};
function Tc(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
var $c = "base10";
var vt = "base16";
var Br = "base64pad";
var pn = "utf8";
var Fc = 0;
var Di = 1;
var ep = 0;
var Po = 1;
var kr = 12;
var gn = 32;
function tp() {
  const i = ms.generateKeyPair();
  return { privateKey: Ne(i.secretKey, vt), publicKey: Ne(i.publicKey, vt) };
}
function Hr() {
  const i = li.randomBytes(gn);
  return Ne(i, vt);
}
function ip(i, e) {
  const t = ms.sharedKey(Ce(i, vt), Ce(e, vt), true), s = new Rc(Si.SHA256, t).expand(gn);
  return Ne(s, vt);
}
function sp(i) {
  const e = Si.hash(Ce(i, vt));
  return Ne(e, vt);
}
function Fi(i) {
  const e = Si.hash(Ce(i, pn));
  return Ne(e, vt);
}
function rp(i) {
  return Ce(`${i}`, $c);
}
function ws(i) {
  return Number(Ne(i, $c));
}
function np(i) {
  const e = rp(typeof i.type < "u" ? i.type : Fc);
  if (ws(e) === Di && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? Ce(i.senderPublicKey, vt) : void 0, s = typeof i.iv < "u" ? Ce(i.iv, vt) : li.randomBytes(kr), r = new gs.ChaCha20Poly1305(Ce(i.symKey, vt)).seal(s, Ce(i.message, pn));
  return ap({ type: e, sealed: r, iv: s, senderPublicKey: t });
}
function op(i) {
  const e = new gs.ChaCha20Poly1305(Ce(i.symKey, vt)), { sealed: t, iv: s } = Ys(i.encoded), r = e.open(s, t);
  if (r === null)
    throw new Error("Failed to decrypt");
  return Ne(r, pn);
}
function ap(i) {
  if (ws(i.type) === Di) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ne(ls([i.type, i.senderPublicKey, i.iv, i.sealed]), Br);
  }
  return Ne(ls([i.type, i.iv, i.sealed]), Br);
}
function Ys(i) {
  const e = Ce(i, Br), t = e.slice(ep, Po), s = Po;
  if (ws(t) === Di) {
    const c = s + gn, u = c + kr, d = e.slice(s, c), p = e.slice(c, u), b = e.slice(u);
    return { type: t, sealed: b, iv: p, senderPublicKey: d };
  }
  const r = s + kr, n = e.slice(s, r), o = e.slice(r);
  return { type: t, sealed: o, iv: n };
}
function cp(i, e) {
  const t = Ys(i);
  return Uc({ type: ws(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? Ne(t.senderPublicKey, vt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Uc(i) {
  const e = (i == null ? void 0 : i.type) || Fc;
  if (e === Di) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: i == null ? void 0 : i.senderPublicKey, receiverPublicKey: i == null ? void 0 : i.receiverPublicKey };
}
function Ro(i) {
  return i.type === Di && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string";
}
var hp = Object.defineProperty;
var Co = Object.getOwnPropertySymbols;
var up = Object.prototype.hasOwnProperty;
var lp = Object.prototype.propertyIsEnumerable;
var Ao = (i, e, t) => e in i ? hp(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var To = (i, e) => {
  for (var t in e || (e = {}))
    up.call(e, t) && Ao(i, t, e[t]);
  if (Co)
    for (var t of Co(e))
      lp.call(e, t) && Ao(i, t, e[t]);
  return i;
};
var dp = "ReactNative";
var Ot = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var fp = "js";
function yn() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ur() {
  return !un() && !!bs() && navigator.product === dp;
}
function vs() {
  return !yn() && !!bs();
}
function _s() {
  return ur() ? Ot.reactNative : yn() ? Ot.node : vs() ? Ot.browser : Ot.unknown;
}
function pp(i, e) {
  let t = ii.parse(i);
  return t = To(To({}, t), e), i = ii.stringify(t), i;
}
function gp() {
  return fn() || { name: "", description: "", url: "", icons: [""] };
}
function yp() {
  if (_s() === Ot.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: t, Version: s } = global.Platform;
    return [t, s].join("-");
  }
  const i = hn();
  if (i === null)
    return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-");
}
function mp() {
  var i;
  const e = _s();
  return e === Ot.browser ? [e, ((i = ln()) == null ? void 0 : i.host) || "unknown"].join(":") : e;
}
function bp(i, e, t) {
  const s = yp(), r = mp();
  return [[i, e].join("-"), [fp, t].join("-"), s, r].join("/");
}
function wp({ protocol: i, version: e, relayUrl: t, sdkVersion: s, auth: r, projectId: n, useOnCloseEvent: o }) {
  const c = t.split("?"), u = bp(i, e, s), d = { auth: r, ua: u, projectId: n, useOnCloseEvent: o || void 0 }, p = pp(c[1] || "", d);
  return c[0] + "?" + p;
}
function _i(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function Lc(i) {
  return Object.fromEntries(i.entries());
}
function Mc(i) {
  return new Map(Object.entries(i));
}
function Ai(i = V.FIVE_MINUTES, e) {
  const t = V.toMiliseconds(i || V.FIVE_MINUTES);
  let s, r, n;
  return { resolve: (o) => {
    n && s && (clearTimeout(n), s(o));
  }, reject: (o) => {
    n && r && (clearTimeout(n), r(o));
  }, done: () => new Promise((o, c) => {
    n = setTimeout(() => {
      c(new Error(e));
    }, t), s = o, r = c;
  }) };
}
function ds(i, e, t) {
  return new Promise(async (s, r) => {
    const n = setTimeout(() => r(new Error(t)), e);
    try {
      const o = await i;
      s(o);
    } catch (o) {
      r(o);
    }
    clearTimeout(n);
  });
}
function qc(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`))
    return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function vp(i) {
  return qc("topic", i);
}
function _p(i) {
  return qc("id", i);
}
function jc(i) {
  const [e, t] = i.split(":"), s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string")
    s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t)))
    s.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
  return s;
}
function Mt(i, e) {
  return V.fromMiliseconds((e || Date.now()) + V.toMiliseconds(i));
}
function ai(i) {
  return Date.now() >= V.toMiliseconds(i);
}
function Be(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
async function Ep({ id: i, topic: e, wcDeepLink: t }) {
  var _a2;
  try {
    if (!t)
      return;
    let r = (_a2 = typeof t == "string" ? JSON.parse(t) : t) == null ? void 0 : _a2.href;
    if (typeof r != "string")
      return;
    r.endsWith("/") && (r = r.slice(0, -1));
    const n = `${r}/wc?requestId=${i}&sessionTopic=${e}`, o = _s();
    o === Ot.browser ? n.startsWith("https://") ? window.open(n, "_blank", "noreferrer noopener") : window.open(n, "_self", "noreferrer noopener") : o === Ot.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(n);
  } catch (s) {
    console.error(s);
  }
}
var Sp = "irn";
function Gr(i) {
  return (i == null ? void 0 : i.relay) || { protocol: Sp };
}
function js(i) {
  const e = Ac[i];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var Ip = Object.defineProperty;
var $o = Object.getOwnPropertySymbols;
var Dp = Object.prototype.hasOwnProperty;
var xp = Object.prototype.propertyIsEnumerable;
var Fo = (i, e, t) => e in i ? Ip(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var Op = (i, e) => {
  for (var t in e || (e = {}))
    Dp.call(e, t) && Fo(i, t, e[t]);
  if ($o)
    for (var t of $o(e))
      xp.call(e, t) && Fo(i, t, e[t]);
  return i;
};
function Np(i, e = "-") {
  const t = {}, s = "relay" + e;
  return Object.keys(i).forEach((r) => {
    if (r.startsWith(s)) {
      const n = r.replace(s, ""), o = i[r];
      t[n] = o;
    }
  }), t;
}
function Pp(i) {
  const e = i.indexOf(":"), t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0, s = i.substring(0, e), r = i.substring(e + 1, t).split("@"), n = typeof t < "u" ? i.substring(t) : "", o = ii.parse(n);
  return { protocol: s, topic: Rp(r[0]), version: parseInt(r[1], 10), symKey: o.symKey, relay: Np(o) };
}
function Rp(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function Cp(i, e = "-") {
  const t = "relay", s = {};
  return Object.keys(i).forEach((r) => {
    const n = t + e + r;
    i[r] && (s[n] = i[r]);
  }), s;
}
function Ap(i) {
  return `${i.protocol}:${i.topic}@${i.version}?` + ii.stringify(Op({ symKey: i.symKey }, Cp(i.relay)));
}
function Mi(i) {
  const e = [];
  return i.forEach((t) => {
    const [s, r] = t.split(":");
    e.push(`${s}:${r}`);
  }), e;
}
function Tp(i) {
  const e = [];
  return Object.values(i).forEach((t) => {
    e.push(...Mi(t.accounts));
  }), e;
}
function $p(i, e) {
  const t = [];
  return Object.values(i).forEach((s) => {
    Mi(s.accounts).includes(e) && t.push(...s.methods);
  }), t;
}
function Fp(i, e) {
  const t = [];
  return Object.values(i).forEach((s) => {
    Mi(s.accounts).includes(e) && t.push(...s.events);
  }), t;
}
function Up(i, e) {
  const t = zs(i, e);
  if (t)
    throw new Error(t.message);
  const s = {};
  for (const [r, n] of Object.entries(i))
    s[r] = { methods: n.methods, events: n.events, chains: n.accounts.map((o) => `${o.split(":")[0]}:${o.split(":")[1]}`) };
  return s;
}
var Lp = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var Mp = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Y(i, e) {
  const { message: t, code: s } = Mp[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function nt(i, e) {
  const { message: t, code: s } = Lp[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function Es(i, e) {
  return Array.isArray(i) ? typeof e < "u" && i.length ? i.every(e) : true : false;
}
function cs(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function bt(i) {
  return typeof i > "u";
}
function ot(i, e) {
  return e && bt(i) ? true : typeof i == "string" && !!i.trim().length;
}
function mn(i, e) {
  return e && bt(i) ? true : typeof i == "number" && !isNaN(i);
}
function qp(i, e) {
  const { requiredNamespaces: t } = e, s = Object.keys(i.namespaces), r = Object.keys(t);
  let n = true;
  return _i(r, s) ? (s.forEach((o) => {
    const { accounts: c, methods: u, events: d } = i.namespaces[o], p = Mi(c), b = t[o];
    (!_i(Tc(o, b), p) || !_i(b.methods, u) || !_i(b.events, d)) && (n = false);
  }), n) : false;
}
function Js(i) {
  return ot(i, false) && i.includes(":") ? i.split(":").length === 2 : false;
}
function jp(i) {
  if (ot(i, false) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Js(t);
    }
  }
  return false;
}
function zp(i) {
  if (ot(i, false))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return false;
    }
  return false;
}
function Kp(i) {
  var e;
  return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey;
}
function Vp(i) {
  return i == null ? void 0 : i.topic;
}
function Bp(i, e) {
  let t = null;
  return ot(i == null ? void 0 : i.publicKey, false) || (t = Y("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t;
}
function Uo(i) {
  let e = true;
  return Es(i) ? i.length && (e = i.every((t) => ot(t, false))) : e = false, e;
}
function kp(i, e, t) {
  let s = null;
  return Es(e) && e.length ? e.forEach((r) => {
    s || Js(r) || (s = nt("UNSUPPORTED_CHAINS", `${t}, chain ${r} should be a string and conform to "namespace:chainId" format`));
  }) : Js(i) || (s = nt("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function Hp(i, e, t) {
  let s = null;
  return Object.entries(i).forEach(([r, n]) => {
    if (s)
      return;
    const o = kp(r, Tc(r, n), `${e} ${t}`);
    o && (s = o);
  }), s;
}
function Gp(i, e) {
  let t = null;
  return Es(i) ? i.forEach((s) => {
    t || jp(s) || (t = nt("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = nt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function Wp(i, e) {
  let t = null;
  return Object.values(i).forEach((s) => {
    if (t)
      return;
    const r = Gp(s == null ? void 0 : s.accounts, `${e} namespace`);
    r && (t = r);
  }), t;
}
function Yp(i, e) {
  let t = null;
  return Uo(i == null ? void 0 : i.methods) ? Uo(i == null ? void 0 : i.events) || (t = nt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = nt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t;
}
function zc(i, e) {
  let t = null;
  return Object.values(i).forEach((s) => {
    if (t)
      return;
    const r = Yp(s, `${e}, namespace`);
    r && (t = r);
  }), t;
}
function Jp(i, e, t) {
  let s = null;
  if (i && cs(i)) {
    const r = zc(i, e);
    r && (s = r);
    const n = Hp(i, e, t);
    n && (s = n);
  } else
    s = Y("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function zs(i, e) {
  let t = null;
  if (i && cs(i)) {
    const s = zc(i, e);
    s && (t = s);
    const r = Wp(i, e);
    r && (t = r);
  } else
    t = Y("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return t;
}
function Kc(i) {
  return ot(i.protocol, true);
}
function Qp(i, e) {
  let t = false;
  return e && !i ? t = true : i && Es(i) && i.length && i.forEach((s) => {
    t = Kc(s);
  }), t;
}
function Xp(i) {
  return typeof i == "number";
}
function St(i) {
  return typeof i < "u" && typeof i !== null;
}
function Zp(i) {
  return !(!i || typeof i != "object" || !i.code || !mn(i.code, false) || !i.message || !ot(i.message, false));
}
function eg(i) {
  return !(bt(i) || !ot(i.method, false));
}
function tg(i) {
  return !(bt(i) || bt(i.result) && bt(i.error) || !mn(i.id, false) || !ot(i.jsonrpc, false));
}
function ig(i) {
  return !(bt(i) || !ot(i.name, false));
}
function Lo(i, e) {
  return !(!Js(e) || !Tp(i).includes(e));
}
function sg(i, e, t) {
  return ot(t, false) ? $p(i, e).includes(t) : false;
}
function rg(i, e, t) {
  return ot(t, false) ? Fp(i, e).includes(t) : false;
}
function Mo(i, e, t) {
  let s = null;
  const r = ng(i), n = og(e), o = Object.keys(r), c = Object.keys(n), u = qo(Object.keys(i)), d = qo(Object.keys(e)), p = u.filter((b) => !d.includes(b));
  return p.length && (s = Y("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)), _i(o, c) || (s = Y("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((b) => {
    if (!b.includes(":") || s)
      return;
    const x = Mi(e[b].accounts);
    x.includes(b) || (s = Y("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${x.toString()}`));
  }), o.forEach((b) => {
    s || (_i(r[b].methods, n[b].methods) ? _i(r[b].events, n[b].events) || (s = Y("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${b}`)) : s = Y("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${b}`));
  }), s;
}
function ng(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    var s;
    t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach((r) => {
      e[r] = { methods: i[t].methods, events: i[t].events };
    });
  }), e;
}
function qo(i) {
  return [...new Set(i.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function og(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    var _a2;
    t.includes(":") ? e[t] = i[t] : (_a2 = Mi(i[t].accounts)) == null ? void 0 : _a2.forEach((r) => {
      e[r] = { accounts: i[t].accounts.filter((n) => n.includes(`${r}:`)), methods: i[t].methods, events: i[t].events };
    });
  }), e;
}
function ag(i, e) {
  return mn(i, false) && i <= e.max && i >= e.min;
}
function jo() {
  const i = _s();
  return new Promise((e) => {
    switch (i) {
      case Ot.browser:
        e(cg());
        break;
      case Ot.reactNative:
        e(hg());
        break;
      case Ot.node:
        e(ug());
        break;
      default:
        e(true);
    }
  });
}
function cg() {
  return vs() && (navigator == null ? void 0 : navigator.onLine);
}
async function hg() {
  var _a2;
  return ur() && typeof global < "u" && global != null && global.NetInfo ? (_a2 = await (global == null ? void 0 : global.NetInfo.fetch())) == null ? void 0 : _a2.isConnected : true;
}
function ug() {
  return true;
}
function lg(i) {
  switch (_s()) {
    case Ot.browser:
      dg(i);
      break;
    case Ot.reactNative:
      fg(i);
      break;
  }
}
function dg(i) {
  vs() && (window.addEventListener("online", () => i(true)), window.addEventListener("offline", () => i(false)));
}
function fg(i) {
  ur() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((e) => i(e == null ? void 0 : e.isConnected)));
}
var xr = {};
var $s = class {
  static get(e) {
    return xr[e];
  }
  static set(e, t) {
    xr[e] = t;
  }
  static delete(e) {
    delete xr[e];
  }
};
var pg = "PARSE_ERROR";
var gg = "INVALID_REQUEST";
var yg = "METHOD_NOT_FOUND";
var mg = "INVALID_PARAMS";
var Vc = "INTERNAL_ERROR";
var bn = "SERVER_ERROR";
var bg = [-32700, -32600, -32601, -32602, -32603];
var hs = {
  [pg]: { code: -32700, message: "Parse error" },
  [gg]: { code: -32600, message: "Invalid Request" },
  [yg]: { code: -32601, message: "Method not found" },
  [mg]: { code: -32602, message: "Invalid params" },
  [Vc]: { code: -32603, message: "Internal error" },
  [bn]: { code: -32e3, message: "Server error" }
};
var Bc = bn;
function wg(i) {
  return bg.includes(i);
}
function zo(i) {
  return Object.keys(hs).includes(i) ? hs[i] : hs[Bc];
}
function vg(i) {
  const e = Object.values(hs).find((t) => t.code === i);
  return e || hs[Bc];
}
function _g(i, e, t) {
  return i.message.includes("getaddrinfo ENOTFOUND") || i.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : i;
}
var kc = {};
var Qt = {};
var Ko;
function Eg() {
  if (Ko)
    return Qt;
  Ko = 1, Object.defineProperty(Qt, "__esModule", { value: true }), Qt.isBrowserCryptoAvailable = Qt.getSubtleCrypto = Qt.getBrowerCrypto = void 0;
  function i() {
    return (F === null || F === void 0 ? void 0 : F.crypto) || (F === null || F === void 0 ? void 0 : F.msCrypto) || {};
  }
  Qt.getBrowerCrypto = i;
  function e() {
    const s = i();
    return s.subtle || s.webkitSubtle;
  }
  Qt.getSubtleCrypto = e;
  function t() {
    return !!i() && !!e();
  }
  return Qt.isBrowserCryptoAvailable = t, Qt;
}
var Xt = {};
var Vo;
function Sg() {
  if (Vo)
    return Xt;
  Vo = 1, Object.defineProperty(Xt, "__esModule", { value: true }), Xt.isBrowser = Xt.isNode = Xt.isReactNative = void 0;
  function i() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Xt.isReactNative = i;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Xt.isNode = e;
  function t() {
    return !i() && !e();
  }
  return Xt.isBrowser = t, Xt;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  const e = Ft;
  e.__exportStar(Eg(), i), e.__exportStar(Sg(), i);
})(kc);
function wn(i = 3) {
  const e = Date.now() * Math.pow(10, i), t = Math.floor(Math.random() * Math.pow(10, i));
  return e + t;
}
function vn(i = 6) {
  return BigInt(wn(i));
}
function ti(i, e, t) {
  return {
    id: t || wn(),
    jsonrpc: "2.0",
    method: i,
    params: e
  };
}
function xi(i, e) {
  return {
    id: i,
    jsonrpc: "2.0",
    result: e
  };
}
function qi(i, e, t) {
  return {
    id: i,
    jsonrpc: "2.0",
    error: Ig(e, t)
  };
}
function Ig(i, e) {
  return typeof i > "u" ? zo(Vc) : (typeof i == "string" && (i = Object.assign(Object.assign({}, zo(bn)), { message: i })), typeof e < "u" && (i.data = e), wg(i.code) && (i = vg(i.code)), i);
}
var Hc = class {
};
var Dg = class extends Hc {
  constructor(e) {
    super();
  }
};
var xg = class extends Hc {
  constructor() {
    super();
  }
};
var Og = class extends xg {
  constructor(e) {
    super();
  }
};
var Ng = "^wss?:";
function Pg(i) {
  const e = i.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Rg(i, e) {
  const t = Pg(i);
  return typeof t > "u" ? false : new RegExp(e).test(t);
}
function Bo(i) {
  return Rg(i, Ng);
}
function Cg(i) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(i);
}
function Gc(i) {
  return typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0";
}
function ji(i) {
  return Gc(i) && "method" in i;
}
function Oi(i) {
  return Gc(i) && (ht(i) || Ge(i));
}
function ht(i) {
  return "result" in i;
}
function Ge(i) {
  return "error" in i;
}
var _n = class extends Og {
  constructor(e) {
    super(e), this.events = new We.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(ti(e.method, e.params || [], e.id || vn().toString()), t);
  }
  async requestStrict(e, t) {
    return new Promise(async (s, r) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n) {
          r(n);
        }
      this.events.on(`${e.id}`, (n) => {
        Ge(n) ? r(n.error) : s(n.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (n) {
        r(n);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Oi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};
var Ag = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser();
var Tg = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var ko = (i) => i.split("?")[0];
var Ho = 10;
var $g = Ag();
var Wc = class {
  constructor(e) {
    if (this.url = e, this.events = new We.EventEmitter(), this.registering = false, !Bo(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (s) => {
        this.onClose(s), e();
      }, this.socket.close();
    });
  }
  async send(e, t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(rr(e));
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  register(e = this.url) {
    if (!Bo(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((s, r) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), r(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return r(new Error("WebSocket connection is missing or invalid"));
          s(this.socket);
        });
      });
    }
    return this.url = e, this.registering = true, new Promise((t, s) => {
      const r = kc.isReactNative() ? void 0 : { rejectUnauthorized: !Cg(e) }, n = new $g(e, [], r);
      Tg() ? n.onerror = (o) => {
        const c = o;
        s(this.emitError(c.error));
      } : n.on("error", (o) => {
        s(this.emitError(o));
      }), n.onopen = () => {
        this.onOpen(n), t(n);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = false, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? rn(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t), r = s.message || s.toString(), n = qi(e, r);
    this.events.emit("payload", n);
  }
  parseError(e, t = this.url) {
    return _g(e, ko(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ho && this.events.setMaxListeners(Ho);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${ko(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};
var Qs = { exports: {} };
Qs.exports;
(function(i, e) {
  var t = 200, s = "__lodash_hash_undefined__", r = 1, n = 2, o = 9007199254740991, c = "[object Arguments]", u = "[object Array]", d = "[object AsyncFunction]", p = "[object Boolean]", b = "[object Date]", x = "[object Error]", O = "[object Function]", _2 = "[object GeneratorFunction]", C = "[object Map]", F2 = "[object Number]", K = "[object Null]", I = "[object Object]", D = "[object Promise]", y = "[object Proxy]", w = "[object RegExp]", f = "[object Set]", a = "[object String]", l = "[object Symbol]", L2 = "[object Undefined]", v = "[object WeakMap]", R2 = "[object ArrayBuffer]", $ = "[object DataView]", q = "[object Float32Array]", m = "[object Float64Array]", E = "[object Int8Array]", B = "[object Int16Array]", z = "[object Int32Array]", j = "[object Uint8Array]", U = "[object Uint8ClampedArray]", M = "[object Uint16Array]", H = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, G = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[q] = Q[m] = Q[E] = Q[B] = Q[z] = Q[j] = Q[U] = Q[M] = Q[H] = true, Q[c] = Q[u] = Q[R2] = Q[p] = Q[$] = Q[b] = Q[x] = Q[O] = Q[C] = Q[F2] = Q[I] = Q[w] = Q[f] = Q[a] = Q[v] = false;
  var se = typeof F == "object" && F && F.Object === Object && F, T = typeof self == "object" && self && self.Object === Object && self, A = se || T || Function("return this")(), N = e && !e.nodeType && e, h = N && true && i && !i.nodeType && i, S = h && h.exports === N, W = S && se.process, X = function() {
    try {
      return W && W.binding && W.binding("util");
    } catch {
    }
  }(), fe = X && X.isTypedArray;
  function ve(g, P) {
    for (var k = -1, Z = g == null ? 0 : g.length, Re = 0, ae = []; ++k < Z; ) {
      var Le = g[k];
      P(Le, k, g) && (ae[Re++] = Le);
    }
    return ae;
  }
  function ge(g, P) {
    for (var k = -1, Z = P.length, Re = g.length; ++k < Z; )
      g[Re + k] = P[k];
    return g;
  }
  function Se(g, P) {
    for (var k = -1, Z = g == null ? 0 : g.length; ++k < Z; )
      if (P(g[k], k, g))
        return true;
    return false;
  }
  function Me(g, P) {
    for (var k = -1, Z = Array(g); ++k < g; )
      Z[k] = P(k);
    return Z;
  }
  function $e(g) {
    return function(P) {
      return g(P);
    };
  }
  function be(g, P) {
    return g.has(P);
  }
  function ye(g, P) {
    return g == null ? void 0 : g[P];
  }
  function pe(g) {
    var P = -1, k = Array(g.size);
    return g.forEach(function(Z, Re) {
      k[++P] = [Re, Z];
    }), k;
  }
  function le(g, P) {
    return function(k) {
      return g(P(k));
    };
  }
  function ue(g) {
    var P = -1, k = Array(g.size);
    return g.forEach(function(Z) {
      k[++P] = Z;
    }), k;
  }
  var he = Array.prototype, ce = Function.prototype, re = Object.prototype, de = A["__core-js_shared__"], me = ce.toString, ne = re.hasOwnProperty, _e = function() {
    var g = /[^.]+$/.exec(de && de.keys && de.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), Ee = re.toString, De = RegExp(
    "^" + me.call(ne).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), xe = S ? A.Buffer : void 0, Ie = A.Symbol, Ut = A.Uint8Array, qt = re.propertyIsEnumerable, si = he.splice, Dt = Ie ? Ie.toStringTag : void 0, fi = Object.getOwnPropertySymbols, Ki = xe ? xe.isBuffer : void 0, Os = le(Object.keys, Object), qe = Pi(A, "DataView"), Fe = Pi(A, "Map"), je = Pi(A, "Promise"), ze = Pi(A, "Set"), Ke = Pi(A, "WeakMap"), Ue = Pi(Object, "create"), Qe = gi(qe), Xe = gi(Fe), Ze = gi(je), et = gi(ze), tt = gi(Ke), Ye = Ie ? Ie.prototype : void 0, Ve = Ye ? Ye.valueOf : void 0;
  function Ae(g) {
    var P = -1, k = g == null ? 0 : g.length;
    for (this.clear(); ++P < k; ) {
      var Z = g[P];
      this.set(Z[0], Z[1]);
    }
  }
  function it() {
    this.__data__ = Ue ? Ue(null) : {}, this.size = 0;
  }
  function st(g) {
    var P = this.has(g) && delete this.__data__[g];
    return this.size -= P ? 1 : 0, P;
  }
  function kh(g) {
    var P = this.__data__;
    if (Ue) {
      var k = P[g];
      return k === s ? void 0 : k;
    }
    return ne.call(P, g) ? P[g] : void 0;
  }
  function Hh(g) {
    var P = this.__data__;
    return Ue ? P[g] !== void 0 : ne.call(P, g);
  }
  function Gh(g, P) {
    var k = this.__data__;
    return this.size += this.has(g) ? 0 : 1, k[g] = Ue && P === void 0 ? s : P, this;
  }
  Ae.prototype.clear = it, Ae.prototype.delete = st, Ae.prototype.get = kh, Ae.prototype.has = Hh, Ae.prototype.set = Gh;
  function Yt(g) {
    var P = -1, k = g == null ? 0 : g.length;
    for (this.clear(); ++P < k; ) {
      var Z = g[P];
      this.set(Z[0], Z[1]);
    }
  }
  function Wh() {
    this.__data__ = [], this.size = 0;
  }
  function Yh(g) {
    var P = this.__data__, k = Ps(P, g);
    if (k < 0)
      return false;
    var Z = P.length - 1;
    return k == Z ? P.pop() : si.call(P, k, 1), --this.size, true;
  }
  function Jh(g) {
    var P = this.__data__, k = Ps(P, g);
    return k < 0 ? void 0 : P[k][1];
  }
  function Qh(g) {
    return Ps(this.__data__, g) > -1;
  }
  function Xh(g, P) {
    var k = this.__data__, Z = Ps(k, g);
    return Z < 0 ? (++this.size, k.push([g, P])) : k[Z][1] = P, this;
  }
  Yt.prototype.clear = Wh, Yt.prototype.delete = Yh, Yt.prototype.get = Jh, Yt.prototype.has = Qh, Yt.prototype.set = Xh;
  function pi(g) {
    var P = -1, k = g == null ? 0 : g.length;
    for (this.clear(); ++P < k; ) {
      var Z = g[P];
      this.set(Z[0], Z[1]);
    }
  }
  function Zh() {
    this.size = 0, this.__data__ = {
      hash: new Ae(),
      map: new (Fe || Yt)(),
      string: new Ae()
    };
  }
  function eu(g) {
    var P = Rs(this, g).delete(g);
    return this.size -= P ? 1 : 0, P;
  }
  function tu(g) {
    return Rs(this, g).get(g);
  }
  function iu(g) {
    return Rs(this, g).has(g);
  }
  function su(g, P) {
    var k = Rs(this, g), Z = k.size;
    return k.set(g, P), this.size += k.size == Z ? 0 : 1, this;
  }
  pi.prototype.clear = Zh, pi.prototype.delete = eu, pi.prototype.get = tu, pi.prototype.has = iu, pi.prototype.set = su;
  function Ns(g) {
    var P = -1, k = g == null ? 0 : g.length;
    for (this.__data__ = new pi(); ++P < k; )
      this.add(g[P]);
  }
  function ru(g) {
    return this.__data__.set(g, s), this;
  }
  function nu(g) {
    return this.__data__.has(g);
  }
  Ns.prototype.add = Ns.prototype.push = ru, Ns.prototype.has = nu;
  function ri(g) {
    var P = this.__data__ = new Yt(g);
    this.size = P.size;
  }
  function ou() {
    this.__data__ = new Yt(), this.size = 0;
  }
  function au(g) {
    var P = this.__data__, k = P.delete(g);
    return this.size = P.size, k;
  }
  function cu(g) {
    return this.__data__.get(g);
  }
  function hu(g) {
    return this.__data__.has(g);
  }
  function uu(g, P) {
    var k = this.__data__;
    if (k instanceof Yt) {
      var Z = k.__data__;
      if (!Fe || Z.length < t - 1)
        return Z.push([g, P]), this.size = ++k.size, this;
      k = this.__data__ = new pi(Z);
    }
    return k.set(g, P), this.size = k.size, this;
  }
  ri.prototype.clear = ou, ri.prototype.delete = au, ri.prototype.get = cu, ri.prototype.has = hu, ri.prototype.set = uu;
  function lu(g, P) {
    var k = Cs(g), Z = !k && xu(g), Re = !k && !Z && gr(g), ae = !k && !Z && !Re && Kn(g), Le = k || Z || Re || ae, rt = Le ? Me(g.length, String) : [], ct = rt.length;
    for (var Te in g)
      (P || ne.call(g, Te)) && !(Le && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Te == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Re && (Te == "offset" || Te == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ae && (Te == "buffer" || Te == "byteLength" || Te == "byteOffset") || // Skip index properties.
      _u(Te, ct))) && rt.push(Te);
    return rt;
  }
  function Ps(g, P) {
    for (var k = g.length; k--; )
      if (Mn(g[k][0], P))
        return k;
    return -1;
  }
  function du(g, P, k) {
    var Z = P(g);
    return Cs(g) ? Z : ge(Z, k(g));
  }
  function Vi(g) {
    return g == null ? g === void 0 ? L2 : K : Dt && Dt in Object(g) ? wu(g) : Du(g);
  }
  function $n(g) {
    return Bi(g) && Vi(g) == c;
  }
  function Fn(g, P, k, Z, Re) {
    return g === P ? true : g == null || P == null || !Bi(g) && !Bi(P) ? g !== g && P !== P : fu(g, P, k, Z, Fn, Re);
  }
  function fu(g, P, k, Z, Re, ae) {
    var Le = Cs(g), rt = Cs(P), ct = Le ? u : ni(g), Te = rt ? u : ni(P);
    ct = ct == c ? I : ct, Te = Te == c ? I : Te;
    var xt = ct == I, Lt = Te == I, ft = ct == Te;
    if (ft && gr(g)) {
      if (!gr(P))
        return false;
      Le = true, xt = false;
    }
    if (ft && !xt)
      return ae || (ae = new ri()), Le || Kn(g) ? Un(g, P, k, Z, Re, ae) : mu(g, P, ct, k, Z, Re, ae);
    if (!(k & r)) {
      var Rt = xt && ne.call(g, "__wrapped__"), Ct = Lt && ne.call(P, "__wrapped__");
      if (Rt || Ct) {
        var oi = Rt ? g.value() : g, Jt = Ct ? P.value() : P;
        return ae || (ae = new ri()), Re(oi, Jt, k, Z, ae);
      }
    }
    return ft ? (ae || (ae = new ri()), bu(g, P, k, Z, Re, ae)) : false;
  }
  function pu(g) {
    if (!zn(g) || Su(g))
      return false;
    var P = qn(g) ? De : G;
    return P.test(gi(g));
  }
  function gu(g) {
    return Bi(g) && jn(g.length) && !!Q[Vi(g)];
  }
  function yu(g) {
    if (!Iu(g))
      return Os(g);
    var P = [];
    for (var k in Object(g))
      ne.call(g, k) && k != "constructor" && P.push(k);
    return P;
  }
  function Un(g, P, k, Z, Re, ae) {
    var Le = k & r, rt = g.length, ct = P.length;
    if (rt != ct && !(Le && ct > rt))
      return false;
    var Te = ae.get(g);
    if (Te && ae.get(P))
      return Te == P;
    var xt = -1, Lt = true, ft = k & n ? new Ns() : void 0;
    for (ae.set(g, P), ae.set(P, g); ++xt < rt; ) {
      var Rt = g[xt], Ct = P[xt];
      if (Z)
        var oi = Le ? Z(Ct, Rt, xt, P, g, ae) : Z(Rt, Ct, xt, g, P, ae);
      if (oi !== void 0) {
        if (oi)
          continue;
        Lt = false;
        break;
      }
      if (ft) {
        if (!Se(P, function(Jt, yi) {
          if (!be(ft, yi) && (Rt === Jt || Re(Rt, Jt, k, Z, ae)))
            return ft.push(yi);
        })) {
          Lt = false;
          break;
        }
      } else if (!(Rt === Ct || Re(Rt, Ct, k, Z, ae))) {
        Lt = false;
        break;
      }
    }
    return ae.delete(g), ae.delete(P), Lt;
  }
  function mu(g, P, k, Z, Re, ae, Le) {
    switch (k) {
      case $:
        if (g.byteLength != P.byteLength || g.byteOffset != P.byteOffset)
          return false;
        g = g.buffer, P = P.buffer;
      case R2:
        return !(g.byteLength != P.byteLength || !ae(new Ut(g), new Ut(P)));
      case p:
      case b:
      case F2:
        return Mn(+g, +P);
      case x:
        return g.name == P.name && g.message == P.message;
      case w:
      case a:
        return g == P + "";
      case C:
        var rt = pe;
      case f:
        var ct = Z & r;
        if (rt || (rt = ue), g.size != P.size && !ct)
          return false;
        var Te = Le.get(g);
        if (Te)
          return Te == P;
        Z |= n, Le.set(g, P);
        var xt = Un(rt(g), rt(P), Z, Re, ae, Le);
        return Le.delete(g), xt;
      case l:
        if (Ve)
          return Ve.call(g) == Ve.call(P);
    }
    return false;
  }
  function bu(g, P, k, Z, Re, ae) {
    var Le = k & r, rt = Ln(g), ct = rt.length, Te = Ln(P), xt = Te.length;
    if (ct != xt && !Le)
      return false;
    for (var Lt = ct; Lt--; ) {
      var ft = rt[Lt];
      if (!(Le ? ft in P : ne.call(P, ft)))
        return false;
    }
    var Rt = ae.get(g);
    if (Rt && ae.get(P))
      return Rt == P;
    var Ct = true;
    ae.set(g, P), ae.set(P, g);
    for (var oi = Le; ++Lt < ct; ) {
      ft = rt[Lt];
      var Jt = g[ft], yi = P[ft];
      if (Z)
        var Vn = Le ? Z(yi, Jt, ft, P, g, ae) : Z(Jt, yi, ft, g, P, ae);
      if (!(Vn === void 0 ? Jt === yi || Re(Jt, yi, k, Z, ae) : Vn)) {
        Ct = false;
        break;
      }
      oi || (oi = ft == "constructor");
    }
    if (Ct && !oi) {
      var As = g.constructor, Ts = P.constructor;
      As != Ts && "constructor" in g && "constructor" in P && !(typeof As == "function" && As instanceof As && typeof Ts == "function" && Ts instanceof Ts) && (Ct = false);
    }
    return ae.delete(g), ae.delete(P), Ct;
  }
  function Ln(g) {
    return du(g, Pu, vu);
  }
  function Rs(g, P) {
    var k = g.__data__;
    return Eu(P) ? k[typeof P == "string" ? "string" : "hash"] : k.map;
  }
  function Pi(g, P) {
    var k = ye(g, P);
    return pu(k) ? k : void 0;
  }
  function wu(g) {
    var P = ne.call(g, Dt), k = g[Dt];
    try {
      g[Dt] = void 0;
      var Z = true;
    } catch {
    }
    var Re = Ee.call(g);
    return Z && (P ? g[Dt] = k : delete g[Dt]), Re;
  }
  var vu = fi ? function(g) {
    return g == null ? [] : (g = Object(g), ve(fi(g), function(P) {
      return qt.call(g, P);
    }));
  } : Ru, ni = Vi;
  (qe && ni(new qe(new ArrayBuffer(1))) != $ || Fe && ni(new Fe()) != C || je && ni(je.resolve()) != D || ze && ni(new ze()) != f || Ke && ni(new Ke()) != v) && (ni = function(g) {
    var P = Vi(g), k = P == I ? g.constructor : void 0, Z = k ? gi(k) : "";
    if (Z)
      switch (Z) {
        case Qe:
          return $;
        case Xe:
          return C;
        case Ze:
          return D;
        case et:
          return f;
        case tt:
          return v;
      }
    return P;
  });
  function _u(g, P) {
    return P = P ?? o, !!P && (typeof g == "number" || ie.test(g)) && g > -1 && g % 1 == 0 && g < P;
  }
  function Eu(g) {
    var P = typeof g;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? g !== "__proto__" : g === null;
  }
  function Su(g) {
    return !!_e && _e in g;
  }
  function Iu(g) {
    var P = g && g.constructor, k = typeof P == "function" && P.prototype || re;
    return g === k;
  }
  function Du(g) {
    return Ee.call(g);
  }
  function gi(g) {
    if (g != null) {
      try {
        return me.call(g);
      } catch {
      }
      try {
        return g + "";
      } catch {
      }
    }
    return "";
  }
  function Mn(g, P) {
    return g === P || g !== g && P !== P;
  }
  var xu = $n(function() {
    return arguments;
  }()) ? $n : function(g) {
    return Bi(g) && ne.call(g, "callee") && !qt.call(g, "callee");
  }, Cs = Array.isArray;
  function Ou(g) {
    return g != null && jn(g.length) && !qn(g);
  }
  var gr = Ki || Cu;
  function Nu(g, P) {
    return Fn(g, P);
  }
  function qn(g) {
    if (!zn(g))
      return false;
    var P = Vi(g);
    return P == O || P == _2 || P == d || P == y;
  }
  function jn(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= o;
  }
  function zn(g) {
    var P = typeof g;
    return g != null && (P == "object" || P == "function");
  }
  function Bi(g) {
    return g != null && typeof g == "object";
  }
  var Kn = fe ? $e(fe) : gu;
  function Pu(g) {
    return Ou(g) ? lu(g) : yu(g);
  }
  function Ru() {
    return [];
  }
  function Cu() {
    return false;
  }
  i.exports = Nu;
})(Qs, Qs.exports);
var Fg = Qs.exports;
var Yc = L(Fg);
function Ug(i, e) {
  if (i.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
    t[s] = 255;
  for (var r = 0; r < i.length; r++) {
    var n = i.charAt(r), o = n.charCodeAt(0);
    if (t[o] !== 255)
      throw new TypeError(n + " is ambiguous");
    t[o] = r;
  }
  var c = i.length, u = i.charAt(0), d = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function b(_2) {
    if (_2 instanceof Uint8Array || (ArrayBuffer.isView(_2) ? _2 = new Uint8Array(_2.buffer, _2.byteOffset, _2.byteLength) : Array.isArray(_2) && (_2 = Uint8Array.from(_2))), !(_2 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_2.length === 0)
      return "";
    for (var C = 0, F2 = 0, K = 0, I = _2.length; K !== I && _2[K] === 0; )
      K++, C++;
    for (var D = (I - K) * p + 1 >>> 0, y = new Uint8Array(D); K !== I; ) {
      for (var w = _2[K], f = 0, a = D - 1; (w !== 0 || f < F2) && a !== -1; a--, f++)
        w += 256 * y[a] >>> 0, y[a] = w % c >>> 0, w = w / c >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      F2 = f, K++;
    }
    for (var l = D - F2; l !== D && y[l] === 0; )
      l++;
    for (var L2 = u.repeat(C); l < D; ++l)
      L2 += i.charAt(y[l]);
    return L2;
  }
  function x(_2) {
    if (typeof _2 != "string")
      throw new TypeError("Expected String");
    if (_2.length === 0)
      return new Uint8Array();
    var C = 0;
    if (_2[C] !== " ") {
      for (var F2 = 0, K = 0; _2[C] === u; )
        F2++, C++;
      for (var I = (_2.length - C) * d + 1 >>> 0, D = new Uint8Array(I); _2[C]; ) {
        var y = t[_2.charCodeAt(C)];
        if (y === 255)
          return;
        for (var w = 0, f = I - 1; (y !== 0 || w < K) && f !== -1; f--, w++)
          y += c * D[f] >>> 0, D[f] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        K = w, C++;
      }
      if (_2[C] !== " ") {
        for (var a = I - K; a !== I && D[a] === 0; )
          a++;
        for (var l = new Uint8Array(F2 + (I - a)), L2 = F2; a !== I; )
          l[L2++] = D[a++];
        return l;
      }
    }
  }
  function O(_2) {
    var C = x(_2);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return { encode: b, decodeUnsafe: x, decode: O };
}
var Lg = Ug;
var Mg = Lg;
var Jc = (i) => {
  if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
    return i;
  if (i instanceof ArrayBuffer)
    return new Uint8Array(i);
  if (ArrayBuffer.isView(i))
    return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var qg = (i) => new TextEncoder().encode(i);
var jg = (i) => new TextDecoder().decode(i);
var zg = class {
  constructor(e, t, s) {
    this.name = e, this.prefix = t, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Kg = class {
  constructor(e, t, s) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Qc(this, e);
  }
};
var Vg = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Qc(this, e);
  }
  decode(e) {
    const t = e[0], s = this.decoders[t];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Qc = (i, e) => new Vg({ ...i.decoders || { [i.prefix]: i }, ...e.decoders || { [e.prefix]: e } });
var Bg = class {
  constructor(e, t, s, r) {
    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = r, this.encoder = new zg(e, t, s), this.decoder = new Kg(e, t, r);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var lr = ({ name: i, prefix: e, encode: t, decode: s }) => new Bg(i, e, t, s);
var Ss = ({ prefix: i, name: e, alphabet: t }) => {
  const { encode: s, decode: r } = Mg(t, e);
  return lr({ prefix: i, name: e, encode: s, decode: (n) => Jc(r(n)) });
};
var kg = (i, e, t, s) => {
  const r = {};
  for (let p = 0; p < e.length; ++p)
    r[e[p]] = p;
  let n = i.length;
  for (; i[n - 1] === "="; )
    --n;
  const o = new Uint8Array(n * t / 8 | 0);
  let c = 0, u = 0, d = 0;
  for (let p = 0; p < n; ++p) {
    const b = r[i[p]];
    if (b === void 0)
      throw new SyntaxError(`Non-${s} character`);
    u = u << t | b, c += t, c >= 8 && (c -= 8, o[d++] = 255 & u >> c);
  }
  if (c >= t || 255 & u << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return o;
};
var Hg = (i, e, t) => {
  const s = e[e.length - 1] === "=", r = (1 << t) - 1;
  let n = "", o = 0, c = 0;
  for (let u = 0; u < i.length; ++u)
    for (c = c << 8 | i[u], o += 8; o > t; )
      o -= t, n += e[r & c >> o];
  if (o && (n += e[r & c << t - o]), s)
    for (; n.length * t & 7; )
      n += "=";
  return n;
};
var lt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) => lr({ prefix: e, name: i, encode(r) {
  return Hg(r, s, t);
}, decode(r) {
  return kg(r, s, t, i);
} });
var Gg = lr({ prefix: "\0", name: "identity", encode: (i) => jg(i), decode: (i) => qg(i) });
var Wg = Object.freeze({ __proto__: null, identity: Gg });
var Yg = lt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Jg = Object.freeze({ __proto__: null, base2: Yg });
var Qg = lt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Xg = Object.freeze({ __proto__: null, base8: Qg });
var Zg = Ss({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ey = Object.freeze({ __proto__: null, base10: Zg });
var ty = lt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var iy = lt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var sy = Object.freeze({ __proto__: null, base16: ty, base16upper: iy });
var ry = lt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var ny = lt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var oy = lt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var ay = lt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var cy = lt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var hy = lt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var uy = lt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var ly = lt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var dy = lt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var fy = Object.freeze({ __proto__: null, base32: ry, base32upper: ny, base32pad: oy, base32padupper: ay, base32hex: cy, base32hexupper: hy, base32hexpad: uy, base32hexpadupper: ly, base32z: dy });
var py = Ss({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var gy = Ss({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var yy = Object.freeze({ __proto__: null, base36: py, base36upper: gy });
var my = Ss({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var by = Ss({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var wy = Object.freeze({ __proto__: null, base58btc: my, base58flickr: by });
var vy = lt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var _y = lt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Ey = lt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Sy = lt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Iy = Object.freeze({ __proto__: null, base64: vy, base64pad: _y, base64url: Ey, base64urlpad: Sy });
var Xc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Dy = Xc.reduce((i, e, t) => (i[t] = e, i), []);
var xy = Xc.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);
function Oy(i) {
  return i.reduce((e, t) => (e += Dy[t], e), "");
}
function Ny(i) {
  const e = [];
  for (const t of i) {
    const s = xy[t.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
var Py = lr({ prefix: "🚀", name: "base256emoji", encode: Oy, decode: Ny });
var Ry = Object.freeze({ __proto__: null, base256emoji: Py });
var Cy = Zc;
var Go = 128;
var Ay = 127;
var Ty = ~Ay;
var $y = Math.pow(2, 31);
function Zc(i, e, t) {
  e = e || [], t = t || 0;
  for (var s = t; i >= $y; )
    e[t++] = i & 255 | Go, i /= 128;
  for (; i & Ty; )
    e[t++] = i & 255 | Go, i >>>= 7;
  return e[t] = i | 0, Zc.bytes = t - s + 1, e;
}
var Fy = Wr;
var Uy = 128;
var Wo = 127;
function Wr(i, s) {
  var t = 0, s = s || 0, r = 0, n = s, o, c = i.length;
  do {
    if (n >= c)
      throw Wr.bytes = 0, new RangeError("Could not decode varint");
    o = i[n++], t += r < 28 ? (o & Wo) << r : (o & Wo) * Math.pow(2, r), r += 7;
  } while (o >= Uy);
  return Wr.bytes = n - s, t;
}
var Ly = Math.pow(2, 7);
var My = Math.pow(2, 14);
var qy = Math.pow(2, 21);
var jy = Math.pow(2, 28);
var zy = Math.pow(2, 35);
var Ky = Math.pow(2, 42);
var Vy = Math.pow(2, 49);
var By = Math.pow(2, 56);
var ky = Math.pow(2, 63);
var Hy = function(i) {
  return i < Ly ? 1 : i < My ? 2 : i < qy ? 3 : i < jy ? 4 : i < zy ? 5 : i < Ky ? 6 : i < Vy ? 7 : i < By ? 8 : i < ky ? 9 : 10;
};
var Gy = { encode: Cy, decode: Fy, encodingLength: Hy };
var eh = Gy;
var Yo = (i, e, t = 0) => (eh.encode(i, e, t), e);
var Jo = (i) => eh.encodingLength(i);
var Yr = (i, e) => {
  const t = e.byteLength, s = Jo(i), r = s + Jo(t), n = new Uint8Array(r + t);
  return Yo(i, n, 0), Yo(t, n, s), n.set(e, r), new Wy(i, t, e, n);
};
var Wy = class {
  constructor(e, t, s, r) {
    this.code = e, this.size = t, this.digest = s, this.bytes = r;
  }
};
var th = ({ name: i, code: e, encode: t }) => new Yy(i, e, t);
var Yy = class {
  constructor(e, t, s) {
    this.name = e, this.code = t, this.encode = s;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? Yr(this.code, t) : t.then((s) => Yr(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
};
var ih = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e));
var Jy = th({ name: "sha2-256", code: 18, encode: ih("SHA-256") });
var Qy = th({ name: "sha2-512", code: 19, encode: ih("SHA-512") });
var Xy = Object.freeze({ __proto__: null, sha256: Jy, sha512: Qy });
var sh = 0;
var Zy = "identity";
var rh = Jc;
var e1 = (i) => Yr(sh, rh(i));
var t1 = { code: sh, name: Zy, encode: rh, digest: e1 };
var i1 = Object.freeze({ __proto__: null, identity: t1 });
new TextEncoder(), new TextDecoder();
var Qo = { ...Wg, ...Jg, ...Xg, ...ey, ...sy, ...fy, ...yy, ...wy, ...Iy, ...Ry };
({ ...Xy, ...i1 });
function nh(i) {
  return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i;
}
function s1(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? nh(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i);
}
function oh(i, e, t, s) {
  return { name: i, prefix: e, encoder: { name: i, prefix: e, encode: t }, decoder: { decode: s } };
}
var Xo = oh("utf8", "u", (i) => "u" + new TextDecoder("utf8").decode(i), (i) => new TextEncoder().encode(i.substring(1)));
var Or = oh("ascii", "a", (i) => {
  let e = "a";
  for (let t = 0; t < i.length; t++)
    e += String.fromCharCode(i[t]);
  return e;
}, (i) => {
  i = i.substring(1);
  const e = s1(i.length);
  for (let t = 0; t < i.length; t++)
    e[t] = i.charCodeAt(t);
  return e;
});
var r1 = { utf8: Xo, "utf-8": Xo, hex: Qo.base16, latin1: Or, ascii: Or, binary: Or, ...Qo };
function n1(i, e = "utf8") {
  const t = r1[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? nh(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`);
}
var ah = "wc";
var o1 = 2;
var En = "core";
var hi = `${ah}@2:${En}:`;
var a1 = { name: En, logger: "error" };
var c1 = { database: ":memory:" };
var h1 = "crypto";
var Zo = "client_ed25519_seed";
var u1 = V.ONE_DAY;
var l1 = "keychain";
var d1 = "0.3";
var f1 = "messages";
var p1 = "0.3";
var g1 = V.SIX_HOURS;
var y1 = "publisher";
var ch = "irn";
var m1 = "error";
var hh = "wss://relay.walletconnect.com";
var ea = "wss://relay.walletconnect.org";
var b1 = "relayer";
var gt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var w1 = "_subscription";
var Zt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var v1 = V.ONE_SECOND;
var _1 = "2.10.1";
var E1 = 1e4;
var S1 = "0.3";
var I1 = "WALLETCONNECT_CLIENT_ID";
var Vt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var D1 = "subscription";
var x1 = "0.3";
var O1 = V.FIVE_SECONDS * 1e3;
var N1 = "pairing";
var P1 = "0.3";
var Xi = { wc_pairingDelete: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: V.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 0 } } };
var os = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var zt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var R1 = "history";
var C1 = "0.3";
var A1 = "expirer";
var Tt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var T1 = "0.3";
var Nr = "verify-api";
var Ks = "https://verify.walletconnect.com";
var ta = "https://verify.walletconnect.org";
var $1 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = l1, this.version = d1, this.initialized = false, this.storagePrefix = hi, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = true;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, r) => {
      this.isInitialized(), this.keychain.set(s, r), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const r = this.keychain.get(s);
      if (typeof r > "u") {
        const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(n);
      }
      return r;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = e, this.logger = ee.generateChildLogger(t, this.name);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Lc(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Mc(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var F1 = class {
  constructor(e, t, s) {
    this.core = e, this.logger = t, this.name = h1, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (r) => (this.isInitialized(), this.keychain.has(r)), this.getClientId = async () => {
      this.isInitialized();
      const r = await this.getClientSeed(), n = Ws(r);
      return an(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const r = tp();
      return this.setPrivateKey(r.publicKey, r.privateKey);
    }, this.signJWT = async (r) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = Ws(n), c = Hr();
      return await Ic(c, r, u1, o);
    }, this.generateSharedKey = (r, n, o) => {
      this.isInitialized();
      const c = this.getPrivateKey(r), u = ip(c, n);
      return this.setSymKey(u, o);
    }, this.setSymKey = async (r, n) => {
      this.isInitialized();
      const o = n || sp(r);
      return await this.keychain.set(o, r), o;
    }, this.deleteKeyPair = async (r) => {
      this.isInitialized(), await this.keychain.del(r);
    }, this.deleteSymKey = async (r) => {
      this.isInitialized(), await this.keychain.del(r);
    }, this.encode = async (r, n, o) => {
      this.isInitialized();
      const c = Uc(o), u = rr(n);
      if (Ro(c)) {
        const x = c.senderPublicKey, O = c.receiverPublicKey;
        r = await this.generateSharedKey(x, O);
      }
      const d = this.getSymKey(r), { type: p, senderPublicKey: b } = c;
      return np({ type: p, symKey: d, message: u, senderPublicKey: b });
    }, this.decode = async (r, n, o) => {
      this.isInitialized();
      const c = cp(n, o);
      if (Ro(c)) {
        const u = c.receiverPublicKey, d = c.senderPublicKey;
        r = await this.generateSharedKey(u, d);
      }
      try {
        const u = this.getSymKey(r), d = op({ symKey: u, encoded: n });
        return rn(d);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (r) => {
      const n = Ys(r);
      return ws(n.type);
    }, this.getPayloadSenderPublicKey = (r) => {
      const n = Ys(r);
      return n.senderPublicKey ? Ne(n.senderPublicKey, vt) : void 0;
    }, this.core = e, this.logger = ee.generateChildLogger(t, this.name), this.keychain = s || new $1(this.core, this.logger);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Zo);
    } catch {
      e = Hr(), await this.keychain.set(Zo, e);
    }
    return n1(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var U1 = class extends gl {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = f1, this.version = p1, this.initialized = false, this.storagePrefix = hi, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (s, r) => {
      this.isInitialized();
      const n = Fi(r);
      let o = this.messages.get(s);
      return typeof o > "u" && (o = {}), typeof o[n] < "u" || (o[n] = r, this.messages.set(s, o), await this.persist()), n;
    }, this.get = (s) => {
      this.isInitialized();
      let r = this.messages.get(s);
      return typeof r > "u" && (r = {}), r;
    }, this.has = (s, r) => {
      this.isInitialized();
      const n = this.get(s), o = Fi(r);
      return typeof n[o] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = ee.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Lc(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Mc(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var L1 = class extends yl {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new We.EventEmitter(), this.name = y1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = V.toMiliseconds(V.TEN_SECONDS), this.needsTransportRestart = false, this.publish = async (s, r, n) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: r, opts: n } });
      try {
        const c = (n == null ? void 0 : n.ttl) || g1, u = Gr(n), d = (n == null ? void 0 : n.prompt) || false, p = (n == null ? void 0 : n.tag) || 0, b = (n == null ? void 0 : n.id) || vn().toString(), x = { topic: s, message: r, opts: { ttl: c, relay: u, prompt: d, tag: p, id: b } }, O = setTimeout(() => this.queue.set(b, x), this.publishTimeout);
        try {
          await await ds(this.rpcPublish(s, r, c, u, d, p, b), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(b), this.relayer.events.emit(gt.publish, x);
        } catch (_2) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true, (o = n == null ? void 0 : n.internal) != null && o.throwOnFailedPublish)
            throw this.removeRequestFromQueue(b), _2;
          return;
        } finally {
          clearTimeout(O);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: r, opts: n } });
      } catch (c) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(c), c;
      }
    }, this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.relayer = e, this.logger = ee.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, s, r, n, o, c) {
    var u, d, p, b;
    const x = { method: js(r.protocol).publish, params: { topic: e, message: t, ttl: s, prompt: n, tag: o }, id: c };
    return bt((u = x.params) == null ? void 0 : u.prompt) && ((d = x.params) == null || delete d.prompt), bt((p = x.params) == null ? void 0 : p.tag) && ((b = x.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: x }), this.relayer.request(x);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: r } = e;
      await this.publish(t, s, r);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(gt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(gt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
};
var M1 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const s = this.get(e);
      this.exists(e, t) || this.map.set(e, [...s, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const s = this.get(e);
      if (!this.exists(e, t))
        return;
      const r = s.filter((n) => n !== t);
      if (!r.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, r);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var q1 = Object.defineProperty;
var j1 = Object.defineProperties;
var z1 = Object.getOwnPropertyDescriptors;
var ia = Object.getOwnPropertySymbols;
var K1 = Object.prototype.hasOwnProperty;
var V1 = Object.prototype.propertyIsEnumerable;
var sa = (i, e, t) => e in i ? q1(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var Zi = (i, e) => {
  for (var t in e || (e = {}))
    K1.call(e, t) && sa(i, t, e[t]);
  if (ia)
    for (var t of ia(e))
      V1.call(e, t) && sa(i, t, e[t]);
  return i;
};
var Pr = (i, e) => j1(i, z1(e));
var B1 = class extends wl {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new M1(), this.events = new We.EventEmitter(), this.name = D1, this.version = x1, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = hi, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, r) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: r } });
      try {
        const n = Gr(r), o = { topic: s, relay: n };
        this.pending.set(s, o);
        const c = await this.rpcSubscribe(s, n);
        return this.onSubscribe(c, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: r } }), c;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (s, r) => {
      await this.restartToComplete(), this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(s, r.id, r) : await this.unsubscribeByTopic(s, r);
    }, this.isSubscribed = async (s) => this.topics.includes(s) ? true : await new Promise((r, n) => {
      const o = new V.Watch();
      o.start(this.pendingSubscriptionWatchLabel);
      const c = setInterval(() => {
        !this.pending.has(s) && this.topics.includes(s) && (clearInterval(c), o.stop(this.pendingSubscriptionWatchLabel), r(true)), o.elapsed(this.pendingSubscriptionWatchLabel) >= O1 && (clearInterval(c), o.stop(this.pendingSubscriptionWatchLabel), n(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => false), this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = ee.generateChildLogger(t, this.name), this.clientId = "";
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  hasSubscription(e, t) {
    let s = false;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (r) => await this.unsubscribeById(e, r, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    try {
      const r = Gr(s);
      await this.rpcUnsubscribe(e, t, r);
      const n = nt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    } catch (r) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r;
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: js(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await ds(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(gt.connection_stalled);
    }
    return Fi(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, s = { method: js(t.protocol).batchSubscribe, params: { topics: e.map((r) => r.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await ds(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(gt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const r = { method: js(s.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r }), this.relayer.request(r);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, Pr(Zi({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, Zi({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, Zi({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Vt.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(Vt.deleted, Pr(Zi({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Vt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Vt.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    Es(t) && this.onBatchSubscribe(t.map((s, r) => Pr(Zi({}, e[r]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(gt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(gt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Vt.created, async (e) => {
      const t = Vt.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(Vt.deleted, async (e) => {
      const t = Vt.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
};
var k1 = Object.defineProperty;
var ra = Object.getOwnPropertySymbols;
var H1 = Object.prototype.hasOwnProperty;
var G1 = Object.prototype.propertyIsEnumerable;
var na = (i, e, t) => e in i ? k1(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var W1 = (i, e) => {
  for (var t in e || (e = {}))
    H1.call(e, t) && na(i, t, e[t]);
  if (ra)
    for (var t of ra(e))
      G1.call(e, t) && na(i, t, e[t]);
  return i;
};
var Y1 = class extends ml {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new We.EventEmitter(), this.name = b1, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = false, this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t);
    }, this.onConnectHandler = () => {
      this.events.emit(gt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(gt.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Zt.payload, this.onPayloadHandler), this.provider.on(Zt.connect, this.onConnectHandler), this.provider.on(Zt.disconnect, this.onDisconnectHandler), this.provider.on(Zt.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ee.generateChildLogger(e.logger, this.name) : ee.pino(ee.getDefaultLoggerOptions({ level: e.logger || m1 })), this.messages = new U1(this.logger, e.core), this.subscriber = new B1(this, this.logger), this.publisher = new L1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || hh, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ea}...`), await this.restartTransport(ea);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, E1);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized();
    let r = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    return r || (await Promise.all([new Promise((n) => {
      this.subscriber.once(Vt.created, (o) => {
        o.topic === e && n();
      });
    }), new Promise(async (n) => {
      r = await this.subscriber.subscribe(e, t), n();
    })]), r);
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, this.hasExperiencedNetworkDisruption && this.connected ? await ds(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = true;
      try {
        await Promise.all([new Promise((t) => {
          if (!this.initialized)
            return t();
          this.subscriber.once(Vt.resubscribed, () => {
            t();
          });
        }), new Promise(async (t, s) => {
          try {
            await ds(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (r) {
            s(r);
            return;
          }
          t();
        })]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message))
          throw t;
        this.provider.events.emit(Zt.disconnect);
      } finally {
        this.connectionAttemptInProgress = false, this.hasExperiencedNetworkDisruption = false;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await jo())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new _n(new Wc(wp({ sdkVersion: _1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), true;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const r = this.messages.has(t, s);
    return r && this.logger.debug(`Ignoring duplicate message: ${s}`), r;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), ji(e)) {
      if (!e.method.endsWith(w1))
        return;
      const t = e.params, { topic: s, message: r, publishedAt: n } = t.data, o = { topic: s, message: r, publishedAt: n };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(W1({ type: "event", event: t.id }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      Oi(e) && this.events.emit(gt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(gt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = xi(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(Zt.payload, this.onPayloadHandler), this.provider.off(Zt.connect, this.onConnectHandler), this.provider.off(Zt.disconnect, this.onDisconnectHandler), this.provider.off(Zt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(gt.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await jo();
    lg(async (t) => {
      this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = true, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(gt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, V.toMiliseconds(v1)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
};
var J1 = Object.defineProperty;
var oa = Object.getOwnPropertySymbols;
var Q1 = Object.prototype.hasOwnProperty;
var X1 = Object.prototype.propertyIsEnumerable;
var aa = (i, e, t) => e in i ? J1(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var ca = (i, e) => {
  for (var t in e || (e = {}))
    Q1.call(e, t) && aa(i, t, e[t]);
  if (oa)
    for (var t of oa(e))
      X1.call(e, t) && aa(i, t, e[t]);
  return i;
};
var dr = class extends bl {
  constructor(e, t, s, r = hi, n = void 0) {
    super(e, t, s, r), this.core = e, this.logger = t, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = S1, this.cached = [], this.initialized = false, this.storagePrefix = hi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !bt(o) ? this.map.set(this.getKey(o), o) : Kp(o) ? this.map.set(o.id, o) : Vp(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o, c) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, c) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: c }), this.map.set(o, c), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((c) => Object.keys(o).every((u) => Yc(c[u], o[u]))) : this.values), this.update = async (o, c) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: c });
      const u = ca(ca({}, this.getData(o)), c);
      this.map.set(o, u), await this.persist();
    }, this.delete = async (o, c) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: c }), this.map.delete(o), await this.persist());
    }, this.logger = ee.generateChildLogger(t, this.name), this.storagePrefix = r, this.getKey = n;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Z1 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = N1, this.version = P1, this.events = new ir(), this.initialized = false, this.storagePrefix = hi, this.ignoredPayloadTypes = [Di], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = Hr(), r = await this.core.crypto.setSymKey(s), n = Mt(V.FIVE_MINUTES), o = { protocol: ch }, c = { topic: r, expiry: n, relay: o, active: false }, u = Ap({ protocol: this.core.protocol, version: this.core.version, topic: r, symKey: s, relay: o });
      return await this.pairings.set(r, c), await this.core.relayer.subscribe(r), this.core.expirer.set(r, n), { topic: r, uri: u };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: r, symKey: n, relay: o } = Pp(s.uri);
      let c;
      if (this.pairings.keys.includes(r) && (c = this.pairings.get(r), c.active))
        throw new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);
      this.core.crypto.keychain.has(r) || (await this.core.crypto.setSymKey(n, r), await this.core.relayer.subscribe(r, { relay: o }));
      const u = Mt(V.FIVE_MINUTES), d = { topic: r, relay: o, expiry: u, active: false };
      return await this.pairings.set(r, d), this.core.expirer.set(r, u), s.activatePairing && await this.activate({ topic: r }), this.events.emit(os.create, d), d;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const r = Mt(V.THIRTY_DAYS);
      await this.pairings.update(s, { active: true, expiry: r }), this.core.expirer.set(s, r);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: r } = s;
      if (this.pairings.keys.includes(r)) {
        const n = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: c, reject: u } = Ai();
        this.events.once(Be("pairing_ping", n), ({ error: d }) => {
          d ? u(d) : c();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: r }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: r });
    }, this.updateMetadata = async ({ topic: s, metadata: r }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: r });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: r } = s;
      this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", nt("USER_DISCONNECTED")), await this.deletePairing(r));
    }, this.sendRequest = async (s, r, n) => {
      const o = ti(r, n), c = await this.core.crypto.encode(s, o), u = Xi[r].req;
      return this.core.history.set(s, o), this.core.relayer.publish(s, c, u), o.id;
    }, this.sendResult = async (s, r, n) => {
      const o = xi(s, n), c = await this.core.crypto.encode(r, o), u = await this.core.history.get(r, s), d = Xi[u.request.method].res;
      await this.core.relayer.publish(r, c, d), await this.core.history.resolve(o);
    }, this.sendError = async (s, r, n) => {
      const o = qi(s, n), c = await this.core.crypto.encode(r, o), u = await this.core.history.get(r, s), d = Xi[u.request.method] ? Xi[u.request.method].res : Xi.unregistered_method.res;
      await this.core.relayer.publish(r, c, d), await this.core.history.resolve(o);
    }, this.deletePairing = async (s, r) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, nt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), r ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((r) => ai(r.expiry));
      await Promise.all(s.map((r) => this.deletePairing(r.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: r, payload: n } = s;
      switch (n.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(r, n);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(r, n);
        default:
          return this.onUnknownRpcMethodRequest(r, n);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: r, payload: n } = s, o = (await this.core.history.get(r, n.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(r, n);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (s, r) => {
      const { id: n } = r;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(n, s, true), this.events.emit(os.ping, { id: n, topic: s });
      } catch (o) {
        await this.sendError(n, s, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (s, r) => {
      const { id: n } = r;
      setTimeout(() => {
        ht(r) ? this.events.emit(Be("pairing_ping", n), {}) : Ge(r) && this.events.emit(Be("pairing_ping", n), { error: r.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, r) => {
      const { id: n } = r;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(os.delete, { id: n, topic: s });
      } catch (o) {
        await this.sendError(n, s, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (s, r) => {
      const { id: n, method: o } = r;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const c = nt("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, s, c), this.logger.error(c);
      } catch (c) {
        await this.sendError(n, s, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(nt("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      if (!St(s)) {
        const { message: r } = Y("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(r);
      }
      if (!zp(s.uri)) {
        const { message: r } = Y("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(r);
      }
    }, this.isValidPing = async (s) => {
      if (!St(s)) {
        const { message: n } = Y("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(n);
      }
      const { topic: r } = s;
      await this.isValidPairingTopic(r);
    }, this.isValidDisconnect = async (s) => {
      if (!St(s)) {
        const { message: n } = Y("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(n);
      }
      const { topic: r } = s;
      await this.isValidPairingTopic(r);
    }, this.isValidPairingTopic = async (s) => {
      if (!ot(s, false)) {
        const { message: r } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(r);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: r } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(r);
      }
      if (ai(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: r } = Y("EXPIRED", `pairing topic: ${s}`);
        throw new Error(r);
      }
    }, this.core = e, this.logger = ee.generateChildLogger(t, this.name), this.pairings = new dr(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(gt.message, async (e) => {
      const { topic: t, message: s } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const r = await this.core.crypto.decode(t, s);
      try {
        ji(r) ? (this.core.history.set(t, r), this.onRelayEventRequest({ topic: t, payload: r })) : Oi(r) && (await this.core.history.resolve(r), await this.onRelayEventResponse({ topic: t, payload: r }), this.core.history.delete(t, r.id));
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Tt.expired, async (e) => {
      const { topic: t } = jc(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(os.expire, { topic: t }));
    });
  }
};
var em = class extends pl {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new We.EventEmitter(), this.name = R1, this.version = C1, this.cached = [], this.initialized = false, this.storagePrefix = hi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (s, r, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: r, chainId: n }), this.records.has(r.id))
        return;
      const o = { id: r.id, topic: s, request: { method: r.method, params: r.params || null }, chainId: n, expiry: Mt(V.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(zt.created, o);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const r = await this.getRecord(s.id);
      typeof r.response > "u" && (r.response = Ge(s) ? { error: s.error } : { result: s.result }, this.records.set(r.id, r), this.events.emit(zt.updated, r));
    }, this.get = async (s, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: r }), await this.getRecord(r)), this.delete = (s, r) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: r }), this.values.forEach((n) => {
        if (n.topic === s) {
          if (typeof r < "u" && n.id !== r)
            return;
          this.records.delete(n.id), this.events.emit(zt.deleted, n);
        }
      });
    }, this.exists = async (s, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === s : false), this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.logger = ee.generateChildLogger(t, this.name);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const s = { topic: t.topic, request: ti(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(s);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(zt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(zt.created, (e) => {
      const t = zt.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(zt.updated, (e) => {
      const t = zt.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(zt.deleted, (e) => {
      const t = zt.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        V.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var tm = class extends vl {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new We.EventEmitter(), this.name = A1, this.version = T1, this.cached = [], this.initialized = false, this.storagePrefix = hi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (s) => {
      try {
        const r = this.formatTarget(s);
        return typeof this.getExpiration(r) < "u";
      } catch {
        return false;
      }
    }, this.set = (s, r) => {
      this.isInitialized();
      const n = this.formatTarget(s), o = { target: n, expiry: r };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(Tt.created, { target: n, expiration: o });
    }, this.get = (s) => {
      this.isInitialized();
      const r = this.formatTarget(s);
      return this.getExpiration(r);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const r = this.formatTarget(s), n = this.getExpiration(r);
        this.expirations.delete(r), this.events.emit(Tt.deleted, { target: r, expiration: n });
      }
    }, this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.logger = ee.generateChildLogger(t, this.name);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  formatTarget(e) {
    if (typeof e == "string")
      return vp(e);
    if (typeof e == "number")
      return _p(e);
    const { message: t } = Y("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Tt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    V.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(Tt.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Tt.created, (e) => {
      const t = Tt.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Tt.expired, (e) => {
      const t = Tt.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Tt.deleted, (e) => {
      const t = Tt.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var im = class extends _l {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = Nr, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (s) => {
      if (this.verifyDisabled || ur() || !vs())
        return;
      const r = (s == null ? void 0 : s.verifyUrl) || Ks;
      this.verifyUrl !== r && this.removeIframe(), this.verifyUrl = r;
      try {
        await this.createIframe();
      } catch (n) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = ta;
        try {
          await this.createIframe();
        } catch (n) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n), this.verifyDisabled = true;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv)
        return "";
      const r = (s == null ? void 0 : s.verifyUrl) || Ks;
      let n;
      try {
        n = await this.fetchAttestation(s.attestationId, r);
      } catch (o) {
        this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${r}`), this.logger.info(o), n = await this.fetchAttestation(s.attestationId, ta);
      }
      return n;
    }, this.fetchAttestation = async (s, r) => {
      this.logger.info(`resolving attestation: ${s} from url: ${r}`);
      const n = this.startAbortTimer(V.ONE_SECOND * 2), o = await fetch(`${r}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(n), o.status === 200 ? await o.json() : void 0;
    }, this.addToQueue = (s) => {
      this.queue.push(s);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), this.queue = []);
    }, this.sendPost = (s) => {
      var r;
      try {
        if (!this.iframe)
          return;
        (r = this.iframe.contentWindow) == null || r.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let s;
      const r = (n) => {
        n.data === "verify_ready" && (this.initialized = true, this.processQueue(), window.removeEventListener("message", r), s());
      };
      await Promise.race([new Promise((n) => {
        if (document.getElementById(Nr))
          return n();
        window.addEventListener("message", r);
        const o = document.createElement("iframe");
        o.id = Nr, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, s = n;
      }), new Promise((n, o) => setTimeout(() => {
        window.removeEventListener("message", r), o("verify iframe load timeout");
      }, V.toMiliseconds(V.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.logger = ee.generateChildLogger(t, this.name), this.verifyUrl = Ks, this.abortController = new AbortController(), this.isDevEnv = yn() && process.env.IS_VITEST;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), V.toMiliseconds(e));
  }
};
var sm = Object.defineProperty;
var ha = Object.getOwnPropertySymbols;
var rm = Object.prototype.hasOwnProperty;
var nm = Object.prototype.propertyIsEnumerable;
var ua = (i, e, t) => e in i ? sm(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var la = (i, e) => {
  for (var t in e || (e = {}))
    rm.call(e, t) && ua(i, t, e[t]);
  if (ha)
    for (var t of ha(e))
      nm.call(e, t) && ua(i, t, e[t]);
  return i;
};
var om = class uh extends fl {
  constructor(e) {
    super(e), this.protocol = ah, this.version = o1, this.name = En, this.events = new We.EventEmitter(), this.initialized = false, this.on = (s, r) => this.events.on(s, r), this.once = (s, r) => this.events.once(s, r), this.off = (s, r) => this.events.off(s, r), this.removeListener = (s, r) => this.events.removeListener(s, r), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || hh;
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ee.pino(ee.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || a1.logger }));
    this.logger = ee.generateChildLogger(t, this.name), this.heartbeat = new Wt.HeartBeat(), this.crypto = new F1(this, this.logger, e == null ? void 0 : e.keychain), this.history = new em(this, this.logger), this.expirer = new tm(this, this.logger), this.storage = e != null && e.storage ? e.storage : new nc(la(la({}, c1), e == null ? void 0 : e.storageOptions)), this.relayer = new Y1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Z1(this, this.logger), this.verify = new im(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new uh(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(I1, s), t;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
var am = om;
var lh = "wc";
var dh = 2;
var fh = "client";
var Sn = `${lh}@${dh}:${fh}:`;
var Rr = { name: fh, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" };
var da = "WALLETCONNECT_DEEPLINK_CHOICE";
var cm = "proposal";
var hm = "Proposal expired";
var um = "session";
var Fs = V.SEVEN_DAYS;
var lm = "engine";
var es = { wc_sessionPropose: { req: { ttl: V.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: V.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: V.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1115 } } };
var Cr = { min: V.FIVE_MINUTES, max: V.SEVEN_DAYS };
var ei = { idle: "IDLE", active: "ACTIVE" };
var dm = "request";
var fm = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var pm = Object.defineProperty;
var gm = Object.defineProperties;
var ym = Object.getOwnPropertyDescriptors;
var fa = Object.getOwnPropertySymbols;
var mm = Object.prototype.hasOwnProperty;
var bm = Object.prototype.propertyIsEnumerable;
var pa = (i, e, t) => e in i ? pm(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var Et = (i, e) => {
  for (var t in e || (e = {}))
    mm.call(e, t) && pa(i, t, e[t]);
  if (fa)
    for (var t of fa(e))
      bm.call(e, t) && pa(i, t, e[t]);
  return i;
};
var ts = (i, e) => gm(i, ym(e));
var wm = class extends Sl {
  constructor(e) {
    super(e), this.name = lm, this.events = new ir(), this.initialized = false, this.ignoredPayloadTypes = [Di], this.requestQueue = { state: ei.idle, queue: [] }, this.sessionRequestQueue = { state: ei.idle, queue: [] }, this.requestQueueDelay = V.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(es) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, V.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      await this.isInitialized();
      const s = ts(Et({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: r, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: c, relays: u } = s;
      let d = r, p, b = false;
      if (d && (b = this.client.core.pairing.pairings.get(d).active), !d || !b) {
        const { topic: D, uri: y } = await this.client.core.pairing.create();
        d = D, p = y;
      }
      const x = await this.client.core.crypto.generateKeyPair(), O = Et({ requiredNamespaces: n, optionalNamespaces: o, relays: u ?? [{ protocol: ch }], proposer: { publicKey: x, metadata: this.client.metadata } }, c && { sessionProperties: c }), { reject: _2, resolve: C, done: F2 } = Ai(V.FIVE_MINUTES, hm);
      if (this.events.once(Be("session_connect"), async ({ error: D, session: y }) => {
        if (D)
          _2(D);
        else if (y) {
          y.self.publicKey = x;
          const w = ts(Et({}, y), { requiredNamespaces: y.requiredNamespaces, optionalNamespaces: y.optionalNamespaces });
          await this.client.session.set(y.topic, w), await this.setExpiry(y.topic, y.expiry), d && await this.client.core.pairing.updateMetadata({ topic: d, metadata: y.peer.metadata }), C(w);
        }
      }), !d) {
        const { message: D } = Y("NO_MATCHING_KEY", `connect() pairing topic: ${d}`);
        throw new Error(D);
      }
      const K = await this.sendRequest({ topic: d, method: "wc_sessionPropose", params: O }), I = Mt(V.FIVE_MINUTES);
      return await this.setProposal(K, Et({ id: K, expiry: I }, O)), { uri: p, approval: F2 };
    }, this.pair = async (t) => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async (t) => {
      await this.isInitialized(), await this.isValidApprove(t);
      const { id: s, relayProtocol: r, namespaces: n, sessionProperties: o } = t, c = this.client.proposal.get(s);
      let { pairingTopic: u, proposer: d, requiredNamespaces: p, optionalNamespaces: b } = c;
      u = u || "", cs(p) || (p = Up(n, "approve()"));
      const x = await this.client.core.crypto.generateKeyPair(), O = d.publicKey, _2 = await this.client.core.crypto.generateSharedKey(x, O);
      u && s && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: d.metadata }), await this.sendResult({ id: s, topic: u, result: { relay: { protocol: r ?? "irn" }, responderPublicKey: x } }), await this.client.proposal.delete(s, nt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const C = Et({ relay: { protocol: r ?? "irn" }, namespaces: n, requiredNamespaces: p, optionalNamespaces: b, pairingTopic: u, controller: { publicKey: x, metadata: this.client.metadata }, expiry: Mt(Fs) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(_2), await this.sendRequest({ topic: _2, method: "wc_sessionSettle", params: C, throwOnFailedPublish: true });
      const F2 = ts(Et({}, C), { topic: _2, pairingTopic: u, acknowledged: false, self: C.controller, peer: { publicKey: d.publicKey, metadata: d.metadata }, controller: x });
      return await this.client.session.set(_2, F2), await this.setExpiry(_2, Mt(Fs)), { topic: _2, acknowledged: () => new Promise((K) => setTimeout(() => K(this.client.session.get(_2)), 500)) };
    }, this.reject = async (t) => {
      await this.isInitialized(), await this.isValidReject(t);
      const { id: s, reason: r } = t, { pairingTopic: n } = this.client.proposal.get(s);
      n && (await this.sendError(s, n, r), await this.client.proposal.delete(s, nt("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      await this.isInitialized(), await this.isValidUpdate(t);
      const { topic: s, namespaces: r } = t, n = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: r } }), { done: o, resolve: c, reject: u } = Ai();
      return this.events.once(Be("session_update", n), ({ error: d }) => {
        d ? u(d) : c();
      }), await this.client.session.update(s, { namespaces: r }), { acknowledged: o };
    }, this.extend = async (t) => {
      await this.isInitialized(), await this.isValidExtend(t);
      const { topic: s } = t, r = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: n, resolve: o, reject: c } = Ai();
      return this.events.once(Be("session_extend", r), ({ error: u }) => {
        u ? c(u) : o();
      }), await this.setExpiry(s, Mt(Fs)), { acknowledged: n };
    }, this.request = async (t) => {
      await this.isInitialized(), await this.isValidRequest(t);
      const { chainId: s, request: r, topic: n, expiry: o } = t, c = wn(), { done: u, resolve: d, reject: p } = Ai(o);
      return this.events.once(Be("session_request", c), ({ error: b, result: x }) => {
        b ? p(b) : d(x);
      }), await Promise.all([new Promise(async (b) => {
        await this.sendRequest({ clientRpcId: c, topic: n, method: "wc_sessionRequest", params: { request: r, chainId: s }, expiry: o, throwOnFailedPublish: true }).catch((x) => p(x)), this.client.events.emit("session_request_sent", { topic: n, request: r, chainId: s, id: c }), b();
      }), new Promise(async (b) => {
        const x = await this.client.core.storage.getItem(da);
        Ep({ id: c, topic: n, wcDeepLink: x }), b();
      }), u()]).then((b) => b[2]);
    }, this.respond = async (t) => {
      await this.isInitialized(), await this.isValidRespond(t);
      const { topic: s, response: r } = t, { id: n } = r;
      ht(r) ? await this.sendResult({ id: n, topic: s, result: r.result, throwOnFailedPublish: true }) : Ge(r) && await this.sendError(n, s, r.error), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      await this.isInitialized(), await this.isValidPing(t);
      const { topic: s } = t;
      if (this.client.session.keys.includes(s)) {
        const r = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: n, resolve: o, reject: c } = Ai();
        this.events.once(Be("session_ping", r), ({ error: u }) => {
          u ? c(u) : o();
        }), await n();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (t) => {
      await this.isInitialized(), await this.isValidEmit(t);
      const { topic: s, event: r, chainId: n } = t;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: r, chainId: n } });
    }, this.disconnect = async (t) => {
      await this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: s } = t;
      this.client.session.keys.includes(s) ? (await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: nt("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((s) => qp(s, t))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(t.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((n) => {
            var o, c;
            return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((c = n.peerMetadata) == null ? void 0 : c.url) === t.peer.metadata.url && n.topic && n.topic !== s.topic;
          });
          if (r.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (t, s) => {
      const { self: r } = this.client.session.get(t);
      await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, nt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), s || this.client.core.expirer.del(t), this.client.core.storage.removeItem(da).catch((n) => this.client.logger.warn(n));
    }, this.deleteProposal = async (t, s) => {
      await Promise.all([this.client.proposal.delete(t, nt("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deletePendingSessionRequest = async (t, s, r = false) => {
      await Promise.all([this.client.pendingRequest.delete(t, s), r ? Promise.resolve() : this.client.core.expirer.del(t)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== t), r && (this.sessionRequestQueue.state = ei.idle);
    }, this.setExpiry = async (t, s) => {
      this.client.session.keys.includes(t) && await this.client.session.update(t, { expiry: s }), this.client.core.expirer.set(t, s);
    }, this.setProposal = async (t, s) => {
      await this.client.proposal.set(t, s), this.client.core.expirer.set(t, s.expiry);
    }, this.setPendingSessionRequest = async (t) => {
      const s = es.wc_sessionRequest.req.ttl, { id: r, topic: n, params: o, verifyContext: c } = t;
      await this.client.pendingRequest.set(r, { id: r, topic: n, params: o, verifyContext: c }), s && this.client.core.expirer.set(r, Mt(s));
    }, this.sendRequest = async (t) => {
      const { topic: s, method: r, params: n, expiry: o, relayRpcId: c, clientRpcId: u, throwOnFailedPublish: d } = t, p = ti(r, n, u);
      if (vs() && fm.includes(r)) {
        const O = Fi(JSON.stringify(p));
        this.client.core.verify.register({ attestationId: O });
      }
      const b = await this.client.core.crypto.encode(s, p), x = es[r].req;
      return o && (x.ttl = o), c && (x.id = c), this.client.core.history.set(s, p), d ? (x.internal = ts(Et({}, x.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s, b, x)) : this.client.core.relayer.publish(s, b, x).catch((O) => this.client.logger.error(O)), p.id;
    }, this.sendResult = async (t) => {
      const { id: s, topic: r, result: n, throwOnFailedPublish: o } = t, c = xi(s, n), u = await this.client.core.crypto.encode(r, c), d = await this.client.core.history.get(r, s), p = es[d.request.method].res;
      o ? (p.internal = ts(Et({}, p.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(r, u, p)) : this.client.core.relayer.publish(r, u, p).catch((b) => this.client.logger.error(b)), await this.client.core.history.resolve(c);
    }, this.sendError = async (t, s, r) => {
      const n = qi(t, r), o = await this.client.core.crypto.encode(s, n), c = await this.client.core.history.get(s, t), u = es[c.request.method].res;
      this.client.core.relayer.publish(s, o, u), await this.client.core.history.resolve(n);
    }, this.cleanup = async () => {
      const t = [], s = [];
      this.client.session.getAll().forEach((r) => {
        ai(r.expiry) && t.push(r.topic);
      }), this.client.proposal.getAll().forEach((r) => {
        ai(r.expiry) && s.push(r.id);
      }), await Promise.all([...t.map((r) => this.deleteSession(r)), ...s.map((r) => this.deleteProposal(r))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === ei.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = ei.active;
        const t = this.requestQueue.queue.shift();
        if (t)
          try {
            this.processRequest(t), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = ei.idle;
    }, this.processRequest = (t) => {
      const { topic: s, payload: r } = t, n = r.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, r);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, r);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, r);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, r);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, r);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, r);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, r);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, r);
        default:
          return this.client.logger.info(`Unsupported request method ${n}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: s, payload: r } = t, n = (await this.client.core.history.get(s, r.id)).request.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, r);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, r);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, r);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, r);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, r);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, r);
        default:
          return this.client.logger.info(`Unsupported response method ${n}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: s } = t, { message: r } = Y("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(r);
    }, this.onSessionProposeRequest = async (t, s) => {
      const { params: r, id: n } = s;
      try {
        this.isValidConnect(Et({}, s.params));
        const o = Mt(V.FIVE_MINUTES), c = Et({ id: n, pairingTopic: t, expiry: o }, r);
        await this.setProposal(n, c);
        const u = Fi(JSON.stringify(s)), d = await this.getVerifyContext(u, c.proposer.metadata);
        this.client.events.emit("session_proposal", { id: n, params: c, verifyContext: d });
      } catch (o) {
        await this.sendError(n, t, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (t, s) => {
      const { id: r } = s;
      if (ht(s)) {
        const { result: n } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: n });
        const o = this.client.proposal.get(r);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const c = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const u = n.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const d = await this.client.core.crypto.generateSharedKey(c, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: d });
        const p = await this.client.core.relayer.subscribe(d);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p }), await this.client.core.pairing.activate({ topic: t });
      } else
        Ge(s) && (await this.client.proposal.delete(r, nt("USER_DISCONNECTED")), this.events.emit(Be("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (t, s) => {
      const { id: r, params: n } = s;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: o, controller: c, expiry: u, namespaces: d, requiredNamespaces: p, optionalNamespaces: b, sessionProperties: x, pairingTopic: O } = s.params, _2 = Et({ topic: t, relay: o, expiry: u, namespaces: d, acknowledged: true, pairingTopic: O, requiredNamespaces: p, optionalNamespaces: b, controller: c.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: c.publicKey, metadata: c.metadata } }, x && { sessionProperties: x });
        await this.sendResult({ id: s.id, topic: t, result: true }), this.events.emit(Be("session_connect"), { session: _2 }), this.cleanupDuplicatePairings(_2);
      } catch (o) {
        await this.sendError(r, t, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (t, s) => {
      const { id: r } = s;
      ht(s) ? (await this.client.session.update(t, { acknowledged: true }), this.events.emit(Be("session_approve", r), {})) : Ge(s) && (await this.client.session.delete(t, nt("USER_DISCONNECTED")), this.events.emit(Be("session_approve", r), { error: s.error }));
    }, this.onSessionUpdateRequest = async (t, s) => {
      const { params: r, id: n } = s;
      try {
        const o = `${t}_session_update`, c = $s.get(o);
        if (c && this.isRequestOutOfSync(c, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidUpdate(Et({ topic: t }, r)), await this.client.session.update(t, { namespaces: r.namespaces }), await this.sendResult({ id: n, topic: t, result: true }), this.client.events.emit("session_update", { id: n, topic: t, params: r }), $s.set(o, n);
      } catch (o) {
        await this.sendError(n, t, o), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (t, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, s) => {
      const { id: r } = s;
      ht(s) ? this.events.emit(Be("session_update", r), {}) : Ge(s) && this.events.emit(Be("session_update", r), { error: s.error });
    }, this.onSessionExtendRequest = async (t, s) => {
      const { id: r } = s;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, Mt(Fs)), await this.sendResult({ id: r, topic: t, result: true }), this.client.events.emit("session_extend", { id: r, topic: t });
      } catch (n) {
        await this.sendError(r, t, n), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (t, s) => {
      const { id: r } = s;
      ht(s) ? this.events.emit(Be("session_extend", r), {}) : Ge(s) && this.events.emit(Be("session_extend", r), { error: s.error });
    }, this.onSessionPingRequest = async (t, s) => {
      const { id: r } = s;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: r, topic: t, result: true }), this.client.events.emit("session_ping", { id: r, topic: t });
      } catch (n) {
        await this.sendError(r, t, n), this.client.logger.error(n);
      }
    }, this.onSessionPingResponse = (t, s) => {
      const { id: r } = s;
      setTimeout(() => {
        ht(s) ? this.events.emit(Be("session_ping", r), {}) : Ge(s) && this.events.emit(Be("session_ping", r), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, s) => {
      const { id: r } = s;
      try {
        this.isValidDisconnect({ topic: t, reason: s.params }), await Promise.all([new Promise((n) => {
          this.client.core.relayer.once(gt.publish, async () => {
            n(await this.deleteSession(t));
          });
        }), this.sendResult({ id: r, topic: t, result: true })]), this.client.events.emit("session_delete", { id: r, topic: t });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (t, s) => {
      const { id: r, params: n } = s;
      try {
        this.isValidRequest(Et({ topic: t }, n));
        const o = Fi(JSON.stringify(ti("wc_sessionRequest", n, r))), c = this.client.session.get(t), u = await this.getVerifyContext(o, c.peer.metadata), d = { id: r, topic: t, params: n, verifyContext: u };
        await this.setPendingSessionRequest(d), this.addSessionRequestToSessionRequestQueue(d), this.processSessionRequestQueue();
      } catch (o) {
        await this.sendError(r, t, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (t, s) => {
      const { id: r } = s;
      ht(s) ? this.events.emit(Be("session_request", r), { result: s.result }) : Ge(s) && this.events.emit(Be("session_request", r), { error: s.error });
    }, this.onSessionEventRequest = async (t, s) => {
      const { id: r, params: n } = s;
      try {
        const o = `${t}_session_event_${n.event.name}`, c = $s.get(o);
        if (c && this.isRequestOutOfSync(c, r)) {
          this.client.logger.info(`Discarding out of sync request - ${r}`);
          return;
        }
        this.isValidEmit(Et({ topic: t }, n)), this.client.events.emit("session_event", { id: r, topic: t, params: n }), $s.set(o, r);
      } catch (o) {
        await this.sendError(r, t, o), this.client.logger.error(o);
      }
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = ei.idle, this.processSessionRequestQueue();
      }, V.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === ei.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = ei.active, this.client.events.emit("session_request", t);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (t) => {
      if (t.active)
        return;
      const s = this.client.proposal.getAll().find((r) => r.pairingTopic === t.topic);
      s && this.onSessionProposeRequest(t.topic, ti("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer }, s.id));
    }, this.isValidConnect = async (t) => {
      if (!St(t)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(u);
      }
      const { pairingTopic: s, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, relays: c } = t;
      if (bt(s) || await this.isValidPairingTopic(s), !Qp(c, true)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(u);
      }
      !bt(r) && cs(r) !== 0 && this.validateNamespaces(r, "requiredNamespaces"), !bt(n) && cs(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), bt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (t, s) => {
      const r = Jp(t, "connect()", s);
      if (r)
        throw new Error(r.message);
    }, this.isValidApprove = async (t) => {
      if (!St(t))
        throw new Error(Y("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: s, namespaces: r, relayProtocol: n, sessionProperties: o } = t;
      await this.isValidProposalId(s);
      const c = this.client.proposal.get(s), u = zs(r, "approve()");
      if (u)
        throw new Error(u.message);
      const d = Mo(c.requiredNamespaces, r, "approve()");
      if (d)
        throw new Error(d.message);
      if (!ot(n, true)) {
        const { message: p } = Y("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(p);
      }
      bt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!St(t)) {
        const { message: n } = Y("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(n);
      }
      const { id: s, reason: r } = t;
      if (await this.isValidProposalId(s), !Zp(r)) {
        const { message: n } = Y("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!St(t)) {
        const { message: d } = Y("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(d);
      }
      const { relay: s, controller: r, namespaces: n, expiry: o } = t;
      if (!Kc(s)) {
        const { message: d } = Y("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(d);
      }
      const c = Bp(r, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      const u = zs(n, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (ai(o)) {
        const { message: d } = Y("EXPIRED", "onSessionSettleRequest()");
        throw new Error(d);
      }
    }, this.isValidUpdate = async (t) => {
      if (!St(t)) {
        const { message: u } = Y("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(u);
      }
      const { topic: s, namespaces: r } = t;
      await this.isValidSessionTopic(s);
      const n = this.client.session.get(s), o = zs(r, "update()");
      if (o)
        throw new Error(o.message);
      const c = Mo(n.requiredNamespaces, r, "update()");
      if (c)
        throw new Error(c.message);
    }, this.isValidExtend = async (t) => {
      if (!St(t)) {
        const { message: r } = Y("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(r);
      }
      const { topic: s } = t;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (t) => {
      if (!St(t)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(u);
      }
      const { topic: s, request: r, chainId: n, expiry: o } = t;
      await this.isValidSessionTopic(s);
      const { namespaces: c } = this.client.session.get(s);
      if (!Lo(c, n)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(u);
      }
      if (!eg(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      if (!sg(c, n, r.method)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() method: ${r.method}`);
        throw new Error(u);
      }
      if (o && !ag(o, Cr)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Cr.min} and ${Cr.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (t) => {
      if (!St(t)) {
        const { message: n } = Y("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(n);
      }
      const { topic: s, response: r } = t;
      if (await this.isValidSessionTopic(s), !tg(r)) {
        const { message: n } = Y("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (t) => {
      if (!St(t)) {
        const { message: r } = Y("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(r);
      }
      const { topic: s } = t;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (t) => {
      if (!St(t)) {
        const { message: c } = Y("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(c);
      }
      const { topic: s, event: r, chainId: n } = t;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!Lo(o, n)) {
        const { message: c } = Y("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(c);
      }
      if (!ig(r)) {
        const { message: c } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      if (!rg(o, n, r.name)) {
        const { message: c } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!St(t)) {
        const { message: r } = Y("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(r);
      }
      const { topic: s } = t;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (t, s) => {
      const r = { verified: { verifyUrl: s.verifyUrl || Ks, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const n = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: s.verifyUrl });
        n && (r.verified.origin = n.origin, r.verified.isScam = n.isScam, r.verified.validation = n.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (n) {
        this.client.logger.info(n);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r;
    }, this.validateSessionProps = (t, s) => {
      Object.values(t).forEach((r) => {
        if (!ot(r, false)) {
          const { message: n } = Y("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(r)}`);
          throw new Error(n);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(gt.message, async (e) => {
      const { topic: t, message: s } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const r = await this.client.core.crypto.decode(t, s);
      try {
        ji(r) ? (this.client.core.history.set(t, r), this.onRelayEventRequest({ topic: t, payload: r })) : Oi(r) ? (await this.client.core.history.resolve(r), await this.onRelayEventResponse({ topic: t, payload: r }), this.client.core.history.delete(t, r.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: r });
      } catch (n) {
        this.client.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Tt.expired, async (e) => {
      const { topic: t, id: s } = jc(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, Y("EXPIRED"), true);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, true), this.client.events.emit("session_expire", { topic: t })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(os.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!ot(e, false)) {
      const { message: t } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ai(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = Y("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!ot(e, false)) {
      const { message: t } = Y("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = Y("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ai(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: t } = Y("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (ot(e, false)) {
      const { message: t } = Y("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    } else {
      const { message: t } = Y("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!Xp(e)) {
      const { message: t } = Y("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = Y("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ai(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: t } = Y("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
};
var vm = class extends dr {
  constructor(e, t) {
    super(e, t, cm, Sn), this.core = e, this.logger = t;
  }
};
var _m = class extends dr {
  constructor(e, t) {
    super(e, t, um, Sn), this.core = e, this.logger = t;
  }
};
var Em = class extends dr {
  constructor(e, t) {
    super(e, t, dm, Sn, (s) => s.id), this.core = e, this.logger = t;
  }
};
var Sm = class ph extends El {
  constructor(e) {
    super(e), this.protocol = lh, this.version = dh, this.name = Rr.name, this.events = new We.EventEmitter(), this.on = (s, r) => this.events.on(s, r), this.once = (s, r) => this.events.once(s, r), this.off = (s, r) => this.events.off(s, r), this.removeListener = (s, r) => this.events.removeListener(s, r), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (e == null ? void 0 : e.name) || Rr.name, this.metadata = (e == null ? void 0 : e.metadata) || gp();
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ee.pino(ee.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Rr.logger }));
    this.core = (e == null ? void 0 : e.core) || new am(e), this.logger = ee.generateChildLogger(t, this.name), this.session = new _m(this.core, this.logger), this.proposal = new vm(this.core, this.logger), this.pendingRequest = new Em(this.core, this.logger), this.engine = new wm(this);
  }
  static async init(e) {
    const t = new ph(e);
    return await t.initialize(), t;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
var Im = () => {
  var _a2, _b2;
  const e = (_b2 = (_a2 = hn()) == null ? void 0 : _a2.os) == null ? void 0 : _b2.toLowerCase();
  return (e == null ? void 0 : e.includes("android")) ? "android" : (e == null ? void 0 : e.toLowerCase().includes("ios")) || (e == null ? void 0 : e.toLowerCase().includes("mac")) && navigator.maxTouchPoints > 1 ? "ios" : "desktop";
};
var Us = Im();
var Dm = {
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
  fontFamily: "'Barlow', sans-serif"
};
var xm = {
  width: "840px",
  height: "540px",
  zIndex: "99999",
  backgroundColor: "white",
  border: "none",
  outline: "none",
  borderRadius: "40px",
  boxShadow: "0px 4px 40px 0px rgb(0 0 0), 0px 4px 8px 0px rgb(0 0 0 / 25%)",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
var Om = `
  <div id="argent-mobile-modal-container" style="position: relative">
    <iframe class="argent-iframe" allow="clipboard-write"></iframe>
    <div class="argent-close-button" style="position: absolute; top: 24px; right: 24px; cursor: pointer;">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#F5F3F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2462 9.75382C22.7018 10.2094 22.7018 10.9481 22.2462 11.4037L17.6499 16L22.2462 20.5963C22.7018 21.0519 22.7018 21.7906 22.2462 22.2462C21.7905 22.7018 21.0519 22.7018 20.5962 22.2462L16 17.6499L11.4039 22.246C10.9482 22.7017 10.2096 22.7017 9.75394 22.246C9.29833 21.7904 9.29833 21.0517 9.75394 20.5961L14.3501 16L9.75394 11.4039C9.29833 10.9483 9.29833 10.2096 9.75394 9.75396C10.2096 9.29835 10.9482 9.29835 11.4039 9.75396L16 14.3501L20.5962 9.75382C21.0519 9.29821 21.7905 9.29821 22.2462 9.75382Z" fill="#333332"/>
      </svg>
    </div>
  </div>
`;
var Nm = class {
  constructor() {
    we(this, "bridgeUrl", "https://login.argent.xyz");
    we(this, "mobileUrl", "argent://");
    we(this, "type", "overlay");
    we(this, "wcUri");
    we(this, "overlay");
    we(this, "popupWindow");
    we(this, "closingTimeout");
    we(this, "close", () => {
      var _a2, _b2;
      (_a2 = this.overlay) == null ? void 0 : _a2.remove(), (_b2 = this.popupWindow) == null ? void 0 : _b2.close(), this.overlay = void 0, this.popupWindow = void 0;
    });
  }
  showConnectionModal(e) {
    const t = encodeURIComponent(e), s = encodeURIComponent(window.location.href);
    this.showModal({
      desktop: `${this.bridgeUrl}?wc=${t}&device=desktop`,
      ios: `${this.mobileUrl}app/wc?uri=${t}&href=${s}&device=mobile`,
      android: `${this.mobileUrl}app/wc?uri=${t}&href=${s}&device=mobile`
    });
  }
  showApprovalModal(e) {
    if (Us === "desktop") {
      this.showModal({
        desktop: `${this.bridgeUrl}?action=sign`,
        ios: "",
        android: ""
      });
      return;
    }
    const t = encodeURIComponent(window.location.href);
    this.showModal({
      desktop: `${this.bridgeUrl}?action=sign&device=desktop`,
      ios: `${this.mobileUrl}app/wc/request?href=${t}&device=mobile`,
      android: `${this.mobileUrl}app/wc/request?href=${t}&device=mobile`
    });
  }
  closeModal(e) {
    var _a2, _b2, _c2, _d2;
    e ? ((_c2 = (_b2 = (_a2 = this.overlay) == null ? void 0 : _a2.querySelector("iframe")) == null ? void 0 : _b2.contentWindow) == null ? void 0 : _c2.postMessage("argent-login.success", "*"), (_d2 = this.popupWindow) == null ? void 0 : _d2.postMessage("argent-login.success", "*"), this.closingTimeout = setTimeout(this.close, 3400)) : this.close();
  }
  showModal(e) {
    if (clearTimeout(this.closingTimeout), (this.overlay || this.popupWindow) && this.close(), Us === "android" || Us === "ios") {
      const n = document.createElement("button");
      n.style.display = "none", n.addEventListener("click", () => {
        window.location.href = e[Us];
      }), n.click();
      return;
    }
    if (this.type === "window") {
      const n = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=840,height=540";
      this.popupWindow = window.open(e.desktop, "_blank", n) || void 0;
      return;
    }
    const t = document.createElement("div");
    t.innerHTML = Om, t.id = "argent-mobile-modal-overlay";
    for (const [n, o] of Object.entries(Dm))
      t.style[n] = o;
    document.body.appendChild(t), t.addEventListener("click", () => this.closeModal()), this.overlay = t;
    const s = t.querySelector("iframe");
    s.setAttribute("src", e.desktop);
    for (const [n, o] of Object.entries(xm))
      s.style[n] = o;
    t.querySelector(
      ".argent-close-button"
    ).addEventListener("click", () => this.closeModal());
  }
};
var kt = new Nm();
var Xs = constants_exports.NetworkName;
var Pm = async ({
  projectId: i,
  chainId: e,
  name: t,
  description: s,
  rpcUrl: r,
  bridgeUrl: n = Rm(e),
  mobileUrl: o = Cm(e),
  modalType: c = "overlay",
  url: u,
  icons: d,
  walletConnect: p,
  provider: b
}, x) => {
  if (!n)
    throw new Error("bridgeUrl is required");
  if (!o)
    throw new Error("mobileUrl is required");
  kt.bridgeUrl = n, kt.mobileUrl = o, kt.type = c;
  const O = {
    projectId: i,
    metadata: {
      name: t ?? "Unknown dapp",
      description: s ?? "Unknown dapp description",
      url: u ?? "#",
      icons: d ?? [],
      ...p == null ? void 0 : p.metadata
    }
  }, _2 = await Sm.init(O), C = new x({ client: _2, chainId: e, rpcUrl: r, provider: b });
  _2.on("session_event", (F2) => {
  }), _2.on("session_update", ({ topic: F2, params: K }) => {
    const { namespaces: I } = K, D = _2.session.get(F2);
    C.updateSession({ ...D, namespaces: I });
  }), _2.on("session_delete", () => {
  });
  try {
    const F2 = _2.session.getAll().find(C.isValidSession);
    if (F2)
      return C.updateSession(F2), C;
    const K = { requiredNamespaces: C.getRequiredNamespaces() };
    _(), await new Promise((y) => setTimeout(y, 200));
    const { uri: I, approval: D } = await _2.connect(K);
    if (I) {
      kt.showConnectionModal(I), kt.wcUri = I;
      const y = await D();
      C.updateSession(y), kt.closeModal("animateSuccess");
    }
    return C;
  } catch {
    return console.error("@argent/login::error"), kt.closeModal(), null;
  }
};
var Rm = (i) => {
  if (!i)
    throw new Error(
      `Unknown or unsupported chainId (${i}), either specify a supported chain or set bridgeUrl.`
    );
  const e = parseInt(`${i}`);
  if (String(i).startsWith(Xs.SN_SEPOLIA) || e === 11155111)
    return "https://login.hydrogen.argent47.net";
  if (String(i).startsWith(Xs.SN_MAIN) || e === 1)
    return "https://login.argent.xyz";
};
var Cm = (i) => {
  if (!i)
    throw new Error(
      `Unknown or unsupported chainId (${i}), either specify a supported chain or set mobileUrl.`
    );
  const e = parseInt(`${i}`);
  if (String(i).startsWith(Xs.SN_SEPOLIA) || e === 11155111)
    return "argent-dev://";
  if (String(i).startsWith(Xs.SN_MAIN) || e === 1)
    return "argent://";
};
var Am = class extends Nt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
};
var Tm = class extends Nt {
  constructor(e, t) {
    super(), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
var $m = class {
  constructor(e, t) {
    this.logger = e, this.core = t;
  }
};
var Fm = class extends Nt {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
};
var Um = class extends Nt {
  constructor(e) {
    super();
  }
};
var Lm = class {
  constructor(e, t, s, r) {
    this.core = e, this.logger = t, this.name = s;
  }
};
var Mm = class extends Nt {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
};
var qm = class extends Nt {
  constructor(e, t) {
    super(), this.core = e, this.logger = t;
  }
};
var jm = class {
  constructor(e, t) {
    this.projectId = e, this.logger = t;
  }
};
var zm = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
};
var Km = class {
  constructor(e) {
    this.client = e;
  }
};
var gh = ":";
function Vm(i) {
  const { namespace: e, reference: t } = i;
  return [e, t].join(gh);
}
function Bm(i) {
  const [e, t, s] = i.split(gh);
  return { namespace: e, reference: t, address: s };
}
function km(i, e) {
  const t = [];
  return i.forEach((s) => {
    const r = e(s);
    t.includes(r) || t.push(r);
  }), t;
}
function Hm(i) {
  const { namespace: e, reference: t } = Bm(i);
  return Vm({ namespace: e, reference: t });
}
function Gm(i) {
  return km(i, Hm);
}
function Wm(i, e = []) {
  const t = [];
  return Object.keys(i).forEach((s) => {
    if (e.length && !e.includes(s))
      return;
    const r = i[s];
    t.push(...r.accounts);
  }), t;
}
function Ym(i, e = []) {
  const t = [];
  return Object.keys(i).forEach((s) => {
    if (e.length && !e.includes(s))
      return;
    const r = i[s];
    t.push(...Gm(r.accounts));
  }), t;
}
function Jm(i, e = []) {
  const t = [];
  return Object.keys(i).forEach((s) => {
    if (e.length && !e.includes(s))
      return;
    const r = i[s];
    t.push(...In(s, r));
  }), t;
}
function In(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
var yh = "base10";
var _t = "base16";
var Jr = "base64pad";
var Dn = "utf8";
var mh = 0;
var Ni = 1;
var Qm = 0;
var ga = 1;
var Qr = 12;
var xn = 32;
function Xm() {
  const i = ms.generateKeyPair();
  return { privateKey: Ne(i.secretKey, _t), publicKey: Ne(i.publicKey, _t) };
}
function Xr() {
  const i = li.randomBytes(xn);
  return Ne(i, _t);
}
function Zm(i, e) {
  const t = ms.sharedKey(Ce(i, _t), Ce(e, _t)), s = new Rc(Si.SHA256, t).expand(xn);
  return Ne(s, _t);
}
function eb(i) {
  const e = Si.hash(Ce(i, _t));
  return Ne(e, _t);
}
function Ui(i) {
  const e = Si.hash(Ce(i, Dn));
  return Ne(e, _t);
}
function tb(i) {
  return Ce(`${i}`, yh);
}
function Is(i) {
  return Number(Ne(i, yh));
}
function ib(i) {
  const e = tb(typeof i.type < "u" ? i.type : mh);
  if (Is(e) === Ni && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? Ce(i.senderPublicKey, _t) : void 0, s = typeof i.iv < "u" ? Ce(i.iv, _t) : li.randomBytes(Qr), r = new gs.ChaCha20Poly1305(Ce(i.symKey, _t)).seal(s, Ce(i.message, Dn));
  return rb({ type: e, sealed: r, iv: s, senderPublicKey: t });
}
function sb(i) {
  const e = new gs.ChaCha20Poly1305(Ce(i.symKey, _t)), { sealed: t, iv: s } = Zs(i.encoded), r = e.open(s, t);
  if (r === null)
    throw new Error("Failed to decrypt");
  return Ne(r, Dn);
}
function rb(i) {
  if (Is(i.type) === Ni) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ne(ls([i.type, i.senderPublicKey, i.iv, i.sealed]), Jr);
  }
  return Ne(ls([i.type, i.iv, i.sealed]), Jr);
}
function Zs(i) {
  const e = Ce(i, Jr), t = e.slice(Qm, ga), s = ga;
  if (Is(t) === Ni) {
    const c = s + xn, u = c + Qr, d = e.slice(s, c), p = e.slice(c, u), b = e.slice(u);
    return { type: t, sealed: b, iv: p, senderPublicKey: d };
  }
  const r = s + Qr, n = e.slice(s, r), o = e.slice(r);
  return { type: t, sealed: o, iv: n };
}
function nb(i, e) {
  const t = Zs(i);
  return bh({ type: Is(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? Ne(t.senderPublicKey, _t) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function bh(i) {
  const e = (i == null ? void 0 : i.type) || mh;
  if (e === Ni) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: i == null ? void 0 : i.senderPublicKey, receiverPublicKey: i == null ? void 0 : i.receiverPublicKey };
}
function ya(i) {
  return i.type === Ni && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string";
}
var ob = Object.defineProperty;
var ma = Object.getOwnPropertySymbols;
var ab = Object.prototype.hasOwnProperty;
var cb = Object.prototype.propertyIsEnumerable;
var ba = (i, e, t) => e in i ? ob(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var wa = (i, e) => {
  for (var t in e || (e = {}))
    ab.call(e, t) && ba(i, t, e[t]);
  if (ma)
    for (var t of ma(e))
      cb.call(e, t) && ba(i, t, e[t]);
  return i;
};
var hb = "ReactNative";
var as = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var ub = "js";
function On() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function wh() {
  return !un() && !!bs() && navigator.product === hb;
}
function Nn() {
  return !On() && !!bs();
}
function lb() {
  return wh() ? as.reactNative : On() ? as.node : Nn() ? as.browser : as.unknown;
}
function db(i, e) {
  let t = ii.parse(i);
  return t = wa(wa({}, t), e), i = ii.stringify(t), i;
}
function fb() {
  return fn() || { name: "", description: "", url: "", icons: [""] };
}
function pb() {
  const i = hn();
  if (i === null)
    return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-");
}
function gb() {
  var i;
  const e = lb();
  return e === as.browser ? [e, ((i = ln()) == null ? void 0 : i.host) || "unknown"].join(":") : e;
}
function yb(i, e, t) {
  const s = pb(), r = gb();
  return [[i, e].join("-"), [ub, t].join("-"), s, r].join("/");
}
function mb({ protocol: i, version: e, relayUrl: t, sdkVersion: s, auth: r, projectId: n, useOnCloseEvent: o }) {
  const c = t.split("?"), u = yb(i, e, s), d = { auth: r, ua: u, projectId: n, useOnCloseEvent: o || void 0 }, p = db(c[1] || "", d);
  return c[0] + "?" + p;
}
function Ei(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function vh(i) {
  return Object.fromEntries(i.entries());
}
function _h(i) {
  return new Map(Object.entries(i));
}
function Ti(i = V.FIVE_MINUTES, e) {
  const t = V.toMiliseconds(i || V.FIVE_MINUTES);
  let s, r, n;
  return { resolve: (o) => {
    n && s && (clearTimeout(n), s(o));
  }, reject: (o) => {
    n && r && (clearTimeout(n), r(o));
  }, done: () => new Promise((o, c) => {
    n = setTimeout(() => {
      c(new Error(e));
    }, t), s = o, r = c;
  }) };
}
function er(i, e, t) {
  return new Promise(async (s, r) => {
    const n = setTimeout(() => r(new Error(t)), e);
    try {
      const o = await i;
      s(o);
    } catch (o) {
      r(o);
    }
    clearTimeout(n);
  });
}
function Eh(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`))
    return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function bb(i) {
  return Eh("topic", i);
}
function wb(i) {
  return Eh("id", i);
}
function Sh(i) {
  const [e, t] = i.split(":"), s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string")
    s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t)))
    s.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
  return s;
}
function Ht(i, e) {
  return V.fromMiliseconds((e || Date.now()) + V.toMiliseconds(i));
}
function ci(i) {
  return Date.now() >= V.toMiliseconds(i);
}
function ke(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
var vb = "irn";
function Zr(i) {
  return (i == null ? void 0 : i.relay) || { protocol: vb };
}
function Vs(i) {
  const e = Ac[i];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var _b = Object.defineProperty;
var va = Object.getOwnPropertySymbols;
var Eb = Object.prototype.hasOwnProperty;
var Sb = Object.prototype.propertyIsEnumerable;
var _a = (i, e, t) => e in i ? _b(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var Ib = (i, e) => {
  for (var t in e || (e = {}))
    Eb.call(e, t) && _a(i, t, e[t]);
  if (va)
    for (var t of va(e))
      Sb.call(e, t) && _a(i, t, e[t]);
  return i;
};
function Db(i, e = "-") {
  const t = {}, s = "relay" + e;
  return Object.keys(i).forEach((r) => {
    if (r.startsWith(s)) {
      const n = r.replace(s, ""), o = i[r];
      t[n] = o;
    }
  }), t;
}
function xb(i) {
  const e = i.indexOf(":"), t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0, s = i.substring(0, e), r = i.substring(e + 1, t).split("@"), n = typeof t < "u" ? i.substring(t) : "", o = ii.parse(n);
  return { protocol: s, topic: Ob(r[0]), version: parseInt(r[1], 10), symKey: o.symKey, relay: Db(o) };
}
function Ob(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function Nb(i, e = "-") {
  const t = "relay", s = {};
  return Object.keys(i).forEach((r) => {
    const n = t + e + r;
    i[r] && (s[n] = i[r]);
  }), s;
}
function Pb(i) {
  return `${i.protocol}:${i.topic}@${i.version}?` + ii.stringify(Ib({ symKey: i.symKey }, Nb(i.relay)));
}
function zi(i) {
  const e = [];
  return i.forEach((t) => {
    const [s, r] = t.split(":");
    e.push(`${s}:${r}`);
  }), e;
}
function Rb(i) {
  const e = [];
  return Object.values(i).forEach((t) => {
    e.push(...zi(t.accounts));
  }), e;
}
function Cb(i, e) {
  const t = [];
  return Object.values(i).forEach((s) => {
    zi(s.accounts).includes(e) && t.push(...s.methods);
  }), t;
}
function Ab(i, e) {
  const t = [];
  return Object.values(i).forEach((s) => {
    zi(s.accounts).includes(e) && t.push(...s.events);
  }), t;
}
function Tb(i, e) {
  const t = Bs(i, e);
  if (t)
    throw new Error(t.message);
  const s = {};
  for (const [r, n] of Object.entries(i))
    s[r] = { methods: n.methods, events: n.events, chains: n.accounts.map((o) => `${o.split(":")[0]}:${o.split(":")[1]}`) };
  return s;
}
var $b = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var Fb = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function J(i, e) {
  const { message: t, code: s } = Fb[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function Je(i, e) {
  const { message: t, code: s } = $b[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function Ds(i, e) {
  return Array.isArray(i) ? typeof e < "u" && i.length ? i.every(e) : true : false;
}
function us(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function wt(i) {
  return typeof i > "u";
}
function at(i, e) {
  return e && wt(i) ? true : typeof i == "string" && !!i.trim().length;
}
function Pn(i, e) {
  return e && wt(i) ? true : typeof i == "number" && !isNaN(i);
}
function Ub(i, e) {
  const { requiredNamespaces: t } = e, s = Object.keys(i.namespaces), r = Object.keys(t);
  let n = true;
  return Ei(r, s) ? (s.forEach((o) => {
    const { accounts: c, methods: u, events: d } = i.namespaces[o], p = zi(c), b = t[o];
    (!Ei(In(o, b), p) || !Ei(b.methods, u) || !Ei(b.events, d)) && (n = false);
  }), n) : false;
}
function Rn(i) {
  return at(i, false) && i.includes(":") ? i.split(":").length === 2 : false;
}
function Lb(i) {
  if (at(i, false) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Rn(t);
    }
  }
  return false;
}
function Mb(i) {
  if (at(i, false))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return false;
    }
  return false;
}
function qb(i) {
  var e;
  return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey;
}
function jb(i) {
  return i == null ? void 0 : i.topic;
}
function zb(i, e) {
  let t = null;
  return at(i == null ? void 0 : i.publicKey, false) || (t = J("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t;
}
function Ea(i) {
  let e = true;
  return Ds(i) ? i.length && (e = i.every((t) => at(t, false))) : e = false, e;
}
function Kb(i, e, t) {
  let s = null;
  return Ds(e) ? e.forEach((r) => {
    s || (!Rn(r) || !r.includes(i)) && (s = Je("UNSUPPORTED_CHAINS", `${t}, chain ${r} should be a string and conform to "namespace:chainId" format`));
  }) : s = Je("UNSUPPORTED_CHAINS", `${t}, chains ${e} should be an array of strings conforming to "namespace:chainId" format`), s;
}
function Vb(i, e) {
  let t = null;
  return Object.entries(i).forEach(([s, r]) => {
    if (t)
      return;
    const n = Kb(s, In(s, r), `${e} requiredNamespace`);
    n && (t = n);
  }), t;
}
function Bb(i, e) {
  let t = null;
  return Ds(i) ? i.forEach((s) => {
    t || Lb(s) || (t = Je("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = Je("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function kb(i, e) {
  let t = null;
  return Object.values(i).forEach((s) => {
    if (t)
      return;
    const r = Bb(s == null ? void 0 : s.accounts, `${e} namespace`);
    r && (t = r);
  }), t;
}
function Hb(i, e) {
  let t = null;
  return Ea(i == null ? void 0 : i.methods) ? Ea(i == null ? void 0 : i.events) || (t = Je("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = Je("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t;
}
function Ih(i, e) {
  let t = null;
  return Object.values(i).forEach((s) => {
    if (t)
      return;
    const r = Hb(s, `${e}, namespace`);
    r && (t = r);
  }), t;
}
function Gb(i, e, t) {
  let s = null;
  if (i && us(i)) {
    const r = Ih(i, e);
    r && (s = r);
    const n = Vb(i, e);
    n && (s = n);
  } else
    s = J("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function Bs(i, e) {
  let t = null;
  if (i && us(i)) {
    const s = Ih(i, e);
    s && (t = s);
    const r = kb(i, e);
    r && (t = r);
  } else
    t = J("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return t;
}
function Dh(i) {
  return at(i.protocol, true);
}
function Wb(i, e) {
  let t = false;
  return e && !i ? t = true : i && Ds(i) && i.length && i.forEach((s) => {
    t = Dh(s);
  }), t;
}
function Yb(i) {
  return typeof i == "number";
}
function It(i) {
  return typeof i < "u" && typeof i !== null;
}
function Jb(i) {
  return !(!i || typeof i != "object" || !i.code || !Pn(i.code, false) || !i.message || !at(i.message, false));
}
function Qb(i) {
  return !(wt(i) || !at(i.method, false));
}
function Xb(i) {
  return !(wt(i) || wt(i.result) && wt(i.error) || !Pn(i.id, false) || !at(i.jsonrpc, false));
}
function Zb(i) {
  return !(wt(i) || !at(i.name, false));
}
function Sa(i, e) {
  return !(!Rn(e) || !Rb(i).includes(e));
}
function ew(i, e, t) {
  return at(t, false) ? Cb(i, e).includes(t) : false;
}
function tw(i, e, t) {
  return at(t, false) ? Ab(i, e).includes(t) : false;
}
function Ia(i, e, t) {
  let s = null;
  const r = iw(i), n = sw(e), o = Object.keys(r), c = Object.keys(n), u = Da(Object.keys(i)), d = Da(Object.keys(e)), p = u.filter((b) => !d.includes(b));
  return p.length && (s = J("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)), Ei(o, c) || (s = J("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((b) => {
    if (!b.includes(":") || s)
      return;
    const x = zi(e[b].accounts);
    x.includes(b) || (s = J("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${x.toString()}`));
  }), o.forEach((b) => {
    s || (Ei(r[b].methods, n[b].methods) ? Ei(r[b].events, n[b].events) || (s = J("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${b}`)) : s = J("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${b}`));
  }), s;
}
function iw(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    var s;
    t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach((r) => {
      e[r] = { methods: i[t].methods, events: i[t].events };
    });
  }), e;
}
function Da(i) {
  return [...new Set(i.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function sw(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    var _a2;
    t.includes(":") ? e[t] = i[t] : (_a2 = zi(i[t].accounts)) == null ? void 0 : _a2.forEach((r) => {
      e[r] = { accounts: i[t].accounts.filter((n) => n.includes(`${r}:`)), methods: i[t].methods, events: i[t].events };
    });
  }), e;
}
function rw(i, e) {
  return Pn(i, false) && i <= e.max && i >= e.min;
}
function nw(i, e) {
  if (i.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
    t[s] = 255;
  for (var r = 0; r < i.length; r++) {
    var n = i.charAt(r), o = n.charCodeAt(0);
    if (t[o] !== 255)
      throw new TypeError(n + " is ambiguous");
    t[o] = r;
  }
  var c = i.length, u = i.charAt(0), d = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function b(_2) {
    if (_2 instanceof Uint8Array || (ArrayBuffer.isView(_2) ? _2 = new Uint8Array(_2.buffer, _2.byteOffset, _2.byteLength) : Array.isArray(_2) && (_2 = Uint8Array.from(_2))), !(_2 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_2.length === 0)
      return "";
    for (var C = 0, F2 = 0, K = 0, I = _2.length; K !== I && _2[K] === 0; )
      K++, C++;
    for (var D = (I - K) * p + 1 >>> 0, y = new Uint8Array(D); K !== I; ) {
      for (var w = _2[K], f = 0, a = D - 1; (w !== 0 || f < F2) && a !== -1; a--, f++)
        w += 256 * y[a] >>> 0, y[a] = w % c >>> 0, w = w / c >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      F2 = f, K++;
    }
    for (var l = D - F2; l !== D && y[l] === 0; )
      l++;
    for (var L2 = u.repeat(C); l < D; ++l)
      L2 += i.charAt(y[l]);
    return L2;
  }
  function x(_2) {
    if (typeof _2 != "string")
      throw new TypeError("Expected String");
    if (_2.length === 0)
      return new Uint8Array();
    var C = 0;
    if (_2[C] !== " ") {
      for (var F2 = 0, K = 0; _2[C] === u; )
        F2++, C++;
      for (var I = (_2.length - C) * d + 1 >>> 0, D = new Uint8Array(I); _2[C]; ) {
        var y = t[_2.charCodeAt(C)];
        if (y === 255)
          return;
        for (var w = 0, f = I - 1; (y !== 0 || w < K) && f !== -1; f--, w++)
          y += c * D[f] >>> 0, D[f] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        K = w, C++;
      }
      if (_2[C] !== " ") {
        for (var a = I - K; a !== I && D[a] === 0; )
          a++;
        for (var l = new Uint8Array(F2 + (I - a)), L2 = F2; a !== I; )
          l[L2++] = D[a++];
        return l;
      }
    }
  }
  function O(_2) {
    var C = x(_2);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return { encode: b, decodeUnsafe: x, decode: O };
}
var ow = nw;
var aw = ow;
var xh = (i) => {
  if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
    return i;
  if (i instanceof ArrayBuffer)
    return new Uint8Array(i);
  if (ArrayBuffer.isView(i))
    return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var cw = (i) => new TextEncoder().encode(i);
var hw = (i) => new TextDecoder().decode(i);
var uw = class {
  constructor(e, t, s) {
    this.name = e, this.prefix = t, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var lw = class {
  constructor(e, t, s) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Oh(this, e);
  }
};
var dw = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Oh(this, e);
  }
  decode(e) {
    const t = e[0], s = this.decoders[t];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Oh = (i, e) => new dw({ ...i.decoders || { [i.prefix]: i }, ...e.decoders || { [e.prefix]: e } });
var fw = class {
  constructor(e, t, s, r) {
    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = r, this.encoder = new uw(e, t, s), this.decoder = new lw(e, t, r);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var fr = ({ name: i, prefix: e, encode: t, decode: s }) => new fw(i, e, t, s);
var xs = ({ prefix: i, name: e, alphabet: t }) => {
  const { encode: s, decode: r } = aw(t, e);
  return fr({ prefix: i, name: e, encode: s, decode: (n) => xh(r(n)) });
};
var pw = (i, e, t, s) => {
  const r = {};
  for (let p = 0; p < e.length; ++p)
    r[e[p]] = p;
  let n = i.length;
  for (; i[n - 1] === "="; )
    --n;
  const o = new Uint8Array(n * t / 8 | 0);
  let c = 0, u = 0, d = 0;
  for (let p = 0; p < n; ++p) {
    const b = r[i[p]];
    if (b === void 0)
      throw new SyntaxError(`Non-${s} character`);
    u = u << t | b, c += t, c >= 8 && (c -= 8, o[d++] = 255 & u >> c);
  }
  if (c >= t || 255 & u << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return o;
};
var gw = (i, e, t) => {
  const s = e[e.length - 1] === "=", r = (1 << t) - 1;
  let n = "", o = 0, c = 0;
  for (let u = 0; u < i.length; ++u)
    for (c = c << 8 | i[u], o += 8; o > t; )
      o -= t, n += e[r & c >> o];
  if (o && (n += e[r & c << t - o]), s)
    for (; n.length * t & 7; )
      n += "=";
  return n;
};
var dt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) => fr({ prefix: e, name: i, encode(r) {
  return gw(r, s, t);
}, decode(r) {
  return pw(r, s, t, i);
} });
var yw = fr({ prefix: "\0", name: "identity", encode: (i) => hw(i), decode: (i) => cw(i) });
var mw = Object.freeze({ __proto__: null, identity: yw });
var bw = dt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var ww = Object.freeze({ __proto__: null, base2: bw });
var vw = dt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var _w = Object.freeze({ __proto__: null, base8: vw });
var Ew = xs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Sw = Object.freeze({ __proto__: null, base10: Ew });
var Iw = dt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Dw = dt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var xw = Object.freeze({ __proto__: null, base16: Iw, base16upper: Dw });
var Ow = dt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Nw = dt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Pw = dt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var Rw = dt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var Cw = dt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var Aw = dt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Tw = dt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var $w = dt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Fw = dt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Uw = Object.freeze({ __proto__: null, base32: Ow, base32upper: Nw, base32pad: Pw, base32padupper: Rw, base32hex: Cw, base32hexupper: Aw, base32hexpad: Tw, base32hexpadupper: $w, base32z: Fw });
var Lw = xs({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Mw = xs({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var qw = Object.freeze({ __proto__: null, base36: Lw, base36upper: Mw });
var jw = xs({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var zw = xs({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Kw = Object.freeze({ __proto__: null, base58btc: jw, base58flickr: zw });
var Vw = dt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var Bw = dt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var kw = dt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Hw = dt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Gw = Object.freeze({ __proto__: null, base64: Vw, base64pad: Bw, base64url: kw, base64urlpad: Hw });
var Nh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Ww = Nh.reduce((i, e, t) => (i[t] = e, i), []);
var Yw = Nh.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);
function Jw(i) {
  return i.reduce((e, t) => (e += Ww[t], e), "");
}
function Qw(i) {
  const e = [];
  for (const t of i) {
    const s = Yw[t.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
var Xw = fr({ prefix: "🚀", name: "base256emoji", encode: Jw, decode: Qw });
var Zw = Object.freeze({ __proto__: null, base256emoji: Xw });
var e0 = Ph;
var xa = 128;
var t0 = 127;
var i0 = ~t0;
var s0 = Math.pow(2, 31);
function Ph(i, e, t) {
  e = e || [], t = t || 0;
  for (var s = t; i >= s0; )
    e[t++] = i & 255 | xa, i /= 128;
  for (; i & i0; )
    e[t++] = i & 255 | xa, i >>>= 7;
  return e[t] = i | 0, Ph.bytes = t - s + 1, e;
}
var r0 = en;
var n0 = 128;
var Oa = 127;
function en(i, s) {
  var t = 0, s = s || 0, r = 0, n = s, o, c = i.length;
  do {
    if (n >= c)
      throw en.bytes = 0, new RangeError("Could not decode varint");
    o = i[n++], t += r < 28 ? (o & Oa) << r : (o & Oa) * Math.pow(2, r), r += 7;
  } while (o >= n0);
  return en.bytes = n - s, t;
}
var o0 = Math.pow(2, 7);
var a0 = Math.pow(2, 14);
var c0 = Math.pow(2, 21);
var h0 = Math.pow(2, 28);
var u0 = Math.pow(2, 35);
var l0 = Math.pow(2, 42);
var d0 = Math.pow(2, 49);
var f0 = Math.pow(2, 56);
var p0 = Math.pow(2, 63);
var g0 = function(i) {
  return i < o0 ? 1 : i < a0 ? 2 : i < c0 ? 3 : i < h0 ? 4 : i < u0 ? 5 : i < l0 ? 6 : i < d0 ? 7 : i < f0 ? 8 : i < p0 ? 9 : 10;
};
var y0 = { encode: e0, decode: r0, encodingLength: g0 };
var Rh = y0;
var Na = (i, e, t = 0) => (Rh.encode(i, e, t), e);
var Pa = (i) => Rh.encodingLength(i);
var tn = (i, e) => {
  const t = e.byteLength, s = Pa(i), r = s + Pa(t), n = new Uint8Array(r + t);
  return Na(i, n, 0), Na(t, n, s), n.set(e, r), new m0(i, t, e, n);
};
var m0 = class {
  constructor(e, t, s, r) {
    this.code = e, this.size = t, this.digest = s, this.bytes = r;
  }
};
var Ch = ({ name: i, code: e, encode: t }) => new b0(i, e, t);
var b0 = class {
  constructor(e, t, s) {
    this.name = e, this.code = t, this.encode = s;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? tn(this.code, t) : t.then((s) => tn(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
};
var Ah = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e));
var w0 = Ch({ name: "sha2-256", code: 18, encode: Ah("SHA-256") });
var v0 = Ch({ name: "sha2-512", code: 19, encode: Ah("SHA-512") });
var _0 = Object.freeze({ __proto__: null, sha256: w0, sha512: v0 });
var Th = 0;
var E0 = "identity";
var $h = xh;
var S0 = (i) => tn(Th, $h(i));
var I0 = { code: Th, name: E0, encode: $h, digest: S0 };
var D0 = Object.freeze({ __proto__: null, identity: I0 });
new TextEncoder(), new TextDecoder();
var Ra = { ...mw, ...ww, ..._w, ...Sw, ...xw, ...Uw, ...qw, ...Kw, ...Gw, ...Zw };
({ ..._0, ...D0 });
function Fh(i) {
  return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i;
}
function x0(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Fh(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i);
}
function Uh(i, e, t, s) {
  return { name: i, prefix: e, encoder: { name: i, prefix: e, encode: t }, decoder: { decode: s } };
}
var Ca = Uh("utf8", "u", (i) => "u" + new TextDecoder("utf8").decode(i), (i) => new TextEncoder().encode(i.substring(1)));
var Ar = Uh("ascii", "a", (i) => {
  let e = "a";
  for (let t = 0; t < i.length; t++)
    e += String.fromCharCode(i[t]);
  return e;
}, (i) => {
  i = i.substring(1);
  const e = x0(i.length);
  for (let t = 0; t < i.length; t++)
    e[t] = i.charCodeAt(t);
  return e;
});
var O0 = { utf8: Ca, "utf-8": Ca, hex: Ra.base16, latin1: Ar, ascii: Ar, binary: Ar, ...Ra };
function N0(i, e = "utf8") {
  const t = O0[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Fh(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`);
}
var Lh = "wc";
var P0 = 2;
var Cn = "core";
var ui = `${Lh}@2:${Cn}:`;
var R0 = { name: Cn, logger: "error" };
var C0 = { database: ":memory:" };
var A0 = "crypto";
var Aa = "client_ed25519_seed";
var T0 = V.ONE_DAY;
var $0 = "keychain";
var F0 = "0.3";
var U0 = "messages";
var L0 = "0.3";
var M0 = V.SIX_HOURS;
var q0 = "publisher";
var Mh = "irn";
var j0 = "error";
var qh = "wss://relay.walletconnect.com";
var z0 = "relayer";
var He = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var K0 = "_subscription";
var is = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var V0 = V.ONE_SECOND / 2;
var B0 = "y";
var k0 = 1e4;
var H0 = "0.3";
var Bt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var G0 = "subscription";
var W0 = "0.3";
var Y0 = V.FIVE_SECONDS * 1e3;
var J0 = "pairing";
var Q0 = "0.3";
var ss = { wc_pairingDelete: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: V.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 0 } } };
var Kt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var X0 = "history";
var Z0 = "0.3";
var ev = "expirer";
var $t = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var tv = "0.3";
var Tr = "verify-api";
var Ta = "https://verify.walletconnect.com";
var iv = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = $0, this.version = F0, this.initialized = false, this.storagePrefix = ui, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = true;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, r) => {
      this.isInitialized(), this.keychain.set(s, r), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const r = this.keychain.get(s);
      if (typeof r > "u") {
        const { message: n } = J("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(n);
      }
      return r;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = e, this.logger = ee.generateChildLogger(t, this.name);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, vh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? _h(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var sv = class {
  constructor(e, t, s) {
    this.core = e, this.logger = t, this.name = A0, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (r) => (this.isInitialized(), this.keychain.has(r)), this.getClientId = async () => {
      this.isInitialized();
      const r = await this.getClientSeed(), n = Ws(r);
      return an(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const r = Xm();
      return this.setPrivateKey(r.publicKey, r.privateKey);
    }, this.signJWT = async (r) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = Ws(n), c = Xr();
      return await Ic(c, r, T0, o);
    }, this.generateSharedKey = (r, n, o) => {
      this.isInitialized();
      const c = this.getPrivateKey(r), u = Zm(c, n);
      return this.setSymKey(u, o);
    }, this.setSymKey = async (r, n) => {
      this.isInitialized();
      const o = n || eb(r);
      return await this.keychain.set(o, r), o;
    }, this.deleteKeyPair = async (r) => {
      this.isInitialized(), await this.keychain.del(r);
    }, this.deleteSymKey = async (r) => {
      this.isInitialized(), await this.keychain.del(r);
    }, this.encode = async (r, n, o) => {
      this.isInitialized();
      const c = bh(o), u = rr(n);
      if (ya(c)) {
        const x = c.senderPublicKey, O = c.receiverPublicKey;
        r = await this.generateSharedKey(x, O);
      }
      const d = this.getSymKey(r), { type: p, senderPublicKey: b } = c;
      return ib({ type: p, symKey: d, message: u, senderPublicKey: b });
    }, this.decode = async (r, n, o) => {
      this.isInitialized();
      const c = nb(n, o);
      if (ya(c)) {
        const p = c.receiverPublicKey, b = c.senderPublicKey;
        r = await this.generateSharedKey(p, b);
      }
      const u = this.getSymKey(r), d = sb({ symKey: u, encoded: n });
      return rn(d);
    }, this.getPayloadType = (r) => {
      const n = Zs(r);
      return Is(n.type);
    }, this.getPayloadSenderPublicKey = (r) => {
      const n = Zs(r);
      return n.senderPublicKey ? Ne(n.senderPublicKey, _t) : void 0;
    }, this.core = e, this.logger = ee.generateChildLogger(t, this.name), this.keychain = s || new iv(this.core, this.logger);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Aa);
    } catch {
      e = Xr(), await this.keychain.set(Aa, e);
    }
    return N0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var rv = class extends $m {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = U0, this.version = L0, this.initialized = false, this.storagePrefix = ui, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (s, r) => {
      this.isInitialized();
      const n = Ui(r);
      let o = this.messages.get(s);
      return typeof o > "u" && (o = {}), typeof o[n] < "u" || (o[n] = r, this.messages.set(s, o), await this.persist()), n;
    }, this.get = (s) => {
      this.isInitialized();
      let r = this.messages.get(s);
      return typeof r > "u" && (r = {}), r;
    }, this.has = (s, r) => {
      this.isInitialized();
      const n = this.get(s), o = Ui(r);
      return typeof n[o] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = ee.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, vh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? _h(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var nv = class extends Fm {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new We.EventEmitter(), this.name = q0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = 1e4, this.publish = async (s, r, n) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: r, opts: n } });
      try {
        const o = (n == null ? void 0 : n.ttl) || M0, c = Zr(n), u = (n == null ? void 0 : n.prompt) || false, d = (n == null ? void 0 : n.tag) || 0, p = (n == null ? void 0 : n.id) || vn().toString(), b = { topic: s, message: r, opts: { ttl: o, relay: c, prompt: u, tag: d, id: p } };
        this.queue.set(p, b);
        try {
          await await er(this.rpcPublish(s, r, o, c, u, d, p), this.publishTimeout), this.relayer.events.emit(He.publish, b);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.relayer.events.emit(He.connection_stalled);
          return;
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: r, opts: n } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.relayer = e, this.logger = ee.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, s, r, n, o, c) {
    var u, d, p, b;
    const x = { method: Vs(r.protocol).publish, params: { topic: e, message: t, ttl: s, prompt: n, tag: o }, id: c };
    return wt((u = x.params) == null ? void 0 : u.prompt) && ((d = x.params) == null || delete d.prompt), wt((p = x.params) == null ? void 0 : p.tag) && ((b = x.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: x }), this.relayer.request(x);
  }
  onPublish(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: r } = e;
      await this.publish(t, s, r);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, () => {
      this.checkQueue();
    }), this.relayer.on(He.message_ack, (e) => {
      this.onPublish(e.id.toString());
    });
  }
};
var ov = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const s = this.get(e);
      this.exists(e, t) || this.map.set(e, [...s, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const s = this.get(e);
      if (!this.exists(e, t))
        return;
      const r = s.filter((n) => n !== t);
      if (!r.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, r);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var av = Object.defineProperty;
var cv = Object.defineProperties;
var hv = Object.getOwnPropertyDescriptors;
var $a = Object.getOwnPropertySymbols;
var uv = Object.prototype.hasOwnProperty;
var lv = Object.prototype.propertyIsEnumerable;
var Fa = (i, e, t) => e in i ? av(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var rs = (i, e) => {
  for (var t in e || (e = {}))
    uv.call(e, t) && Fa(i, t, e[t]);
  if ($a)
    for (var t of $a(e))
      lv.call(e, t) && Fa(i, t, e[t]);
  return i;
};
var $r = (i, e) => cv(i, hv(e));
var dv = class extends Mm {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new ov(), this.events = new We.EventEmitter(), this.name = G0, this.version = W0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = ui, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, r) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: r } });
      try {
        const n = Zr(r), o = { topic: s, relay: n };
        this.pending.set(s, o);
        const c = await this.rpcSubscribe(s, n);
        return this.onSubscribe(c, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: r } }), c;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (s, r) => {
      await this.restartToComplete(), this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(s, r.id, r) : await this.unsubscribeByTopic(s, r);
    }, this.isSubscribed = async (s) => this.topics.includes(s) ? true : await new Promise((r, n) => {
      const o = new V.Watch();
      o.start(this.pendingSubscriptionWatchLabel);
      const c = setInterval(() => {
        !this.pending.has(s) && this.topics.includes(s) && (clearInterval(c), o.stop(this.pendingSubscriptionWatchLabel), r(true)), o.elapsed(this.pendingSubscriptionWatchLabel) >= Y0 && (clearInterval(c), o.stop(this.pendingSubscriptionWatchLabel), n(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => false), this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = ee.generateChildLogger(t, this.name), this.clientId = "";
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  hasSubscription(e, t) {
    let s = false;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (r) => await this.unsubscribeById(e, r, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    try {
      const r = Zr(s);
      await this.rpcUnsubscribe(e, t, r);
      const n = Je("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    } catch (r) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r;
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: Vs(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await er(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(He.connection_stalled);
    }
    return Ui(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, s = { method: Vs(t.protocol).batchSubscribe, params: { topics: e.map((r) => r.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await er(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(He.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const r = { method: Vs(s.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r }), this.relayer.request(r);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, $r(rs({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, rs({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, rs({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Bt.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(Bt.deleted, $r(rs({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Bt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Bt.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = J("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    Ds(t) && this.onBatchSubscribe(t.map((s, r) => $r(rs({}, e[r]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(He.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(He.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Bt.created, async (e) => {
      const t = Bt.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(Bt.deleted, async (e) => {
      const t = Bt.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
};
var fv = Object.defineProperty;
var Ua = Object.getOwnPropertySymbols;
var pv = Object.prototype.hasOwnProperty;
var gv = Object.prototype.propertyIsEnumerable;
var La = (i, e, t) => e in i ? fv(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var yv = (i, e) => {
  for (var t in e || (e = {}))
    pv.call(e, t) && La(i, t, e[t]);
  if (Ua)
    for (var t of Ua(e))
      gv.call(e, t) && La(i, t, e[t]);
  return i;
};
var mv = class extends Um {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new We.EventEmitter(), this.name = z0, this.transportExplicitlyClosed = false, this.initialized = false, this.reconnecting = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      }
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ee.generateChildLogger(e.logger, this.name) : ee.pino(ee.getDefaultLoggerOptions({ level: e.logger || j0 })), this.messages = new rv(this.logger, e.core), this.subscriber = new dv(this, this.logger), this.publisher = new nv(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || qh, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribted to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, k0);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    this.isInitialized();
    let s = "";
    return await Promise.all([new Promise((r) => {
      this.subscriber.once(Bt.created, (n) => {
        n.topic === e && r();
      });
    }), new Promise(async (r) => {
      s = await this.subscriber.subscribe(e, t), r();
    })]), s;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, this.connected && (await this.provider.disconnect(), this.events.emit(He.transport_closed));
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, !this.reconnecting) {
      this.relayUrl = e || this.relayUrl, this.reconnecting = true;
      try {
        await Promise.all([new Promise((t) => {
          this.initialized || t(), this.subscriber.once(Bt.resubscribed, () => {
            t();
          });
        }), await Promise.race([new Promise(async (t, s) => {
          await er(this.provider.connect(), 5e3, "socket stalled").catch((r) => s(r)).then(() => t()).finally(() => this.removeListener(He.transport_closed, this.rejectTransportOpen));
        }), new Promise((t) => this.once(He.transport_closed, this.rejectTransportOpen))])]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message))
          throw t;
        this.events.emit(He.transport_closed);
      } finally {
        this.reconnecting = false;
      }
    }
  }
  async restartTransport(e) {
    this.transportExplicitlyClosed || (this.relayUrl = e || this.relayUrl, this.connected && await Promise.all([new Promise((t) => {
      this.provider.once(is.disconnect, () => {
        t();
      });
    }), this.transportClose()]), await this.createProvider(), await this.transportOpen());
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  rejectTransportOpen() {
    throw new Error("closeTransport called before connection was established");
  }
  async createProvider() {
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new _n(new Wc(mb({ sdkVersion: B0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    return await this.subscriber.isSubscribed(t) ? this.messages.has(t, s) : true;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), ji(e)) {
      if (!e.method.endsWith(K0))
        return;
      const t = e.params, { topic: s, message: r, publishedAt: n } = t.data, o = { topic: s, message: r, publishedAt: n };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(yv({ type: "event", event: t.id }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      Oi(e) && this.events.emit(He.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(He.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = xi(e.id, true);
    await this.provider.connection.send(t);
  }
  registerProviderListeners() {
    this.provider.on(is.payload, (e) => this.onProviderPayload(e)), this.provider.on(is.connect, () => {
      this.events.emit(He.connect);
    }), this.provider.on(is.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(is.error, (e) => {
      this.logger.error(e), this.events.emit(He.error, e);
    });
  }
  registerEventListeners() {
    this.events.on(He.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(He.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, V.toMiliseconds(V0));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (!this.connected) {
      if (this.connecting)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
};
var bv = Object.defineProperty;
var Ma = Object.getOwnPropertySymbols;
var wv = Object.prototype.hasOwnProperty;
var vv = Object.prototype.propertyIsEnumerable;
var qa = (i, e, t) => e in i ? bv(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var ja = (i, e) => {
  for (var t in e || (e = {}))
    wv.call(e, t) && qa(i, t, e[t]);
  if (Ma)
    for (var t of Ma(e))
      vv.call(e, t) && qa(i, t, e[t]);
  return i;
};
var pr = class extends Lm {
  constructor(e, t, s, r = ui, n = void 0) {
    super(e, t, s, r), this.core = e, this.logger = t, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = H0, this.cached = [], this.initialized = false, this.storagePrefix = ui, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !wt(o) ? this.map.set(this.getKey(o), o) : qb(o) ? this.map.set(o.id, o) : jb(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o, c) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, c) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: c }), this.map.set(o, c), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((c) => Object.keys(o).every((u) => Yc(c[u], o[u]))) : this.values), this.update = async (o, c) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: c });
      const u = ja(ja({}, this.getData(o)), c);
      this.map.set(o, u), await this.persist();
    }, this.delete = async (o, c) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: c }), this.map.delete(o), await this.persist());
    }, this.logger = ee.generateChildLogger(t, this.name), this.storagePrefix = r, this.getKey = n;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = J("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var _v = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = J0, this.version = Q0, this.events = new ir(), this.initialized = false, this.storagePrefix = ui, this.ignoredPayloadTypes = [Ni], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = Xr(), r = await this.core.crypto.setSymKey(s), n = Ht(V.FIVE_MINUTES), o = { protocol: Mh }, c = { topic: r, expiry: n, relay: o, active: false }, u = Pb({ protocol: this.core.protocol, version: this.core.version, topic: r, symKey: s, relay: o });
      return await this.pairings.set(r, c), await this.core.relayer.subscribe(r), this.core.expirer.set(r, n), { topic: r, uri: u };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: r, symKey: n, relay: o } = xb(s.uri);
      if (this.pairings.keys.includes(r))
        throw new Error(`Pairing already exists: ${r}`);
      if (this.core.crypto.hasKeys(r))
        throw new Error(`Keychain already exists: ${r}`);
      const c = Ht(V.FIVE_MINUTES), u = { topic: r, relay: o, expiry: c, active: false };
      return await this.pairings.set(r, u), await this.core.crypto.setSymKey(n, r), await this.core.relayer.subscribe(r, { relay: o }), this.core.expirer.set(r, c), s.activatePairing && await this.activate({ topic: r }), u;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const r = Ht(V.THIRTY_DAYS);
      await this.pairings.update(s, { active: true, expiry: r }), this.core.expirer.set(s, r);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: r } = s;
      if (this.pairings.keys.includes(r)) {
        const n = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: c, reject: u } = Ti();
        this.events.once(ke("pairing_ping", n), ({ error: d }) => {
          d ? u(d) : c();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: r }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: r });
    }, this.updateMetadata = async ({ topic: s, metadata: r }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: r });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: r } = s;
      this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", Je("USER_DISCONNECTED")), await this.deletePairing(r));
    }, this.sendRequest = async (s, r, n) => {
      const o = ti(r, n), c = await this.core.crypto.encode(s, o), u = ss[r].req;
      return this.core.history.set(s, o), this.core.relayer.publish(s, c, u), o.id;
    }, this.sendResult = async (s, r, n) => {
      const o = xi(s, n), c = await this.core.crypto.encode(r, o), u = await this.core.history.get(r, s), d = ss[u.request.method].res;
      await this.core.relayer.publish(r, c, d), await this.core.history.resolve(o);
    }, this.sendError = async (s, r, n) => {
      const o = qi(s, n), c = await this.core.crypto.encode(r, o), u = await this.core.history.get(r, s), d = ss[u.request.method] ? ss[u.request.method].res : ss.unregistered_method.res;
      await this.core.relayer.publish(r, c, d), await this.core.history.resolve(o);
    }, this.deletePairing = async (s, r) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, Je("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), r ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((r) => ci(r.expiry));
      await Promise.all(s.map((r) => this.deletePairing(r.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: r, payload: n } = s, o = n.method;
      if (this.pairings.keys.includes(r))
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(r, n);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(r, n);
          default:
            return this.onUnknownRpcMethodRequest(r, n);
        }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: r, payload: n } = s, o = (await this.core.history.get(r, n.id)).request.method;
      if (this.pairings.keys.includes(r))
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(r, n);
          default:
            return this.onUnknownRpcMethodResponse(o);
        }
    }, this.onPairingPingRequest = async (s, r) => {
      const { id: n } = r;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(n, s, true), this.events.emit("pairing_ping", { id: n, topic: s });
      } catch (o) {
        await this.sendError(n, s, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (s, r) => {
      const { id: n } = r;
      setTimeout(() => {
        ht(r) ? this.events.emit(ke("pairing_ping", n), {}) : Ge(r) && this.events.emit(ke("pairing_ping", n), { error: r.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, r) => {
      const { id: n } = r;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit("pairing_delete", { id: n, topic: s });
      } catch (o) {
        await this.sendError(n, s, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (s, r) => {
      const { id: n, method: o } = r;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const c = Je("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, s, c), this.logger.error(c);
      } catch (c) {
        await this.sendError(n, s, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(Je("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      if (!It(s)) {
        const { message: r } = J("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(r);
      }
      if (!Mb(s.uri)) {
        const { message: r } = J("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(r);
      }
    }, this.isValidPing = async (s) => {
      if (!It(s)) {
        const { message: n } = J("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(n);
      }
      const { topic: r } = s;
      await this.isValidPairingTopic(r);
    }, this.isValidDisconnect = async (s) => {
      if (!It(s)) {
        const { message: n } = J("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(n);
      }
      const { topic: r } = s;
      await this.isValidPairingTopic(r);
    }, this.isValidPairingTopic = async (s) => {
      if (!at(s, false)) {
        const { message: r } = J("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(r);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: r } = J("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(r);
      }
      if (ci(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: r } = J("EXPIRED", `pairing topic: ${s}`);
        throw new Error(r);
      }
    }, this.core = e, this.logger = ee.generateChildLogger(t, this.name), this.pairings = new pr(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(He.message, async (e) => {
      const { topic: t, message: s } = e;
      if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const r = await this.core.crypto.decode(t, s);
      ji(r) ? (this.core.history.set(t, r), this.onRelayEventRequest({ topic: t, payload: r })) : Oi(r) && (await this.core.history.resolve(r), this.onRelayEventResponse({ topic: t, payload: r }));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on($t.expired, async (e) => {
      const { topic: t } = Sh(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit("pairing_expire", { topic: t }));
    });
  }
};
var Ev = class extends Tm {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new We.EventEmitter(), this.name = X0, this.version = Z0, this.cached = [], this.initialized = false, this.storagePrefix = ui, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (s, r, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: r, chainId: n }), this.records.has(r.id))
        return;
      const o = { id: r.id, topic: s, request: { method: r.method, params: r.params || null }, chainId: n };
      this.records.set(o.id, o), this.events.emit(Kt.created, o);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const r = await this.getRecord(s.id);
      typeof r.response > "u" && (r.response = Ge(s) ? { error: s.error } : { result: s.result }, this.records.set(r.id, r), this.events.emit(Kt.updated, r));
    }, this.get = async (s, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: r }), await this.getRecord(r)), this.delete = (s, r) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: r }), this.values.forEach((n) => {
        if (n.topic === s) {
          if (typeof r < "u" && n.id !== r)
            return;
          this.records.delete(n.id), this.events.emit(Kt.deleted, n);
        }
      });
    }, this.exists = async (s, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === s : false), this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.logger = ee.generateChildLogger(t, this.name);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const s = { topic: t.topic, request: ti(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(s);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Kt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = J("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Kt.created, (e) => {
      const t = Kt.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(Kt.updated, (e) => {
      const t = Kt.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(Kt.deleted, (e) => {
      const t = Kt.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Sv = class extends qm {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new We.EventEmitter(), this.name = ev, this.version = tv, this.cached = [], this.initialized = false, this.storagePrefix = ui, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (s) => {
      try {
        const r = this.formatTarget(s);
        return typeof this.getExpiration(r) < "u";
      } catch {
        return false;
      }
    }, this.set = (s, r) => {
      this.isInitialized();
      const n = this.formatTarget(s), o = { target: n, expiry: r };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit($t.created, { target: n, expiration: o });
    }, this.get = (s) => {
      this.isInitialized();
      const r = this.formatTarget(s);
      return this.getExpiration(r);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const r = this.formatTarget(s), n = this.getExpiration(r);
        this.expirations.delete(r), this.events.emit($t.deleted, { target: r, expiration: n });
      }
    }, this.on = (s, r) => {
      this.events.on(s, r);
    }, this.once = (s, r) => {
      this.events.once(s, r);
    }, this.off = (s, r) => {
      this.events.off(s, r);
    }, this.removeListener = (s, r) => {
      this.events.removeListener(s, r);
    }, this.logger = ee.generateChildLogger(t, this.name);
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  formatTarget(e) {
    if (typeof e == "string")
      return bb(e);
    if (typeof e == "number")
      return wb(e);
    const { message: t } = J("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit($t.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = J("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    V.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit($t.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Wt.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on($t.created, (e) => {
      const t = $t.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on($t.expired, (e) => {
      const t = $t.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on($t.deleted, (e) => {
      const t = $t.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Iv = class extends jm {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = Tr, this.initialized = false, this.init = async (s) => {
      wh() || !Nn() || (this.verifyUrl = (s == null ? void 0 : s.verifyUrl) || Ta, await this.createIframe());
    }, this.register = async (s) => {
      var r;
      this.initialized || await this.init(), this.iframe && ((r = this.iframe.contentWindow) == null || r.postMessage(s.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${s.attestationId} ${this.verifyUrl}`));
    }, this.resolve = async (s) => {
      var r;
      if (this.isDevEnv)
        return "";
      this.logger.info(`resolving attestation: ${s.attestationId}`);
      const n = this.startAbortTimer(V.FIVE_SECONDS), o = await fetch(`${this.verifyUrl}/attestation/${s.attestationId}`, { signal: this.abortController.signal });
      return clearTimeout(n), o.status === 200 ? (r = await o.json()) == null ? void 0 : r.origin : "";
    }, this.createIframe = async () => {
      try {
        await Promise.race([new Promise((s, r) => {
          if (document.getElementById(Tr))
            return s();
          const n = document.createElement("iframe");
          n.setAttribute("id", Tr), n.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), n.style.display = "none", n.addEventListener("load", () => {
            this.initialized = true, s();
          }), n.addEventListener("error", (o) => {
            r(o);
          }), document.body.append(n), this.iframe = n;
        }), new Promise((s) => {
          setTimeout(() => s("iframe load timeout"), V.toMiliseconds(V.ONE_SECOND / 2));
        })]);
      } catch (s) {
        this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(s);
      }
    }, this.logger = ee.generateChildLogger(t, this.name), this.verifyUrl = Ta, this.abortController = new AbortController(), this.isDevEnv = On() && process.env.IS_VITEST;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return setTimeout(() => this.abortController.abort(), V.toMiliseconds(e));
  }
};
var Dv = Object.defineProperty;
var za = Object.getOwnPropertySymbols;
var xv = Object.prototype.hasOwnProperty;
var Ov = Object.prototype.propertyIsEnumerable;
var Ka = (i, e, t) => e in i ? Dv(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var Va = (i, e) => {
  for (var t in e || (e = {}))
    xv.call(e, t) && Ka(i, t, e[t]);
  if (za)
    for (var t of za(e))
      Ov.call(e, t) && Ka(i, t, e[t]);
  return i;
};
var Nv = class jh extends Am {
  constructor(e) {
    super(e), this.protocol = Lh, this.version = P0, this.name = Cn, this.events = new We.EventEmitter(), this.initialized = false, this.on = (s, r) => this.events.on(s, r), this.once = (s, r) => this.events.once(s, r), this.off = (s, r) => this.events.off(s, r), this.removeListener = (s, r) => this.events.removeListener(s, r), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || qh;
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ee.pino(ee.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || R0.logger }));
    this.logger = ee.generateChildLogger(t, this.name), this.heartbeat = new Wt.HeartBeat(), this.crypto = new sv(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Ev(this, this.logger), this.expirer = new Sv(this, this.logger), this.storage = e != null && e.storage ? e.storage : new nc(Va(Va({}, C0), e == null ? void 0 : e.storageOptions)), this.relayer = new mv({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new _v(this, this.logger), this.verify = new Iv(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new jh(e);
    return await t.initialize(), t;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
var Pv = Nv;
var zh = "wc";
var Kh = 2;
var Vh = "client";
var An = `${zh}@${Kh}:${Vh}:`;
var Fr = { name: Vh, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" };
var Rv = "proposal";
var Cv = "Proposal expired";
var Av = "session";
var Ls = V.SEVEN_DAYS;
var Tv = "engine";
var ns = { wc_sessionPropose: { req: { ttl: V.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: V.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: V.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: V.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: V.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: V.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: V.THIRTY_SECONDS, prompt: false, tag: 1115 } } };
var Ur = { min: V.FIVE_MINUTES, max: V.SEVEN_DAYS };
var $v = "request";
var Fv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Uv = Object.defineProperty;
var Lv = Object.defineProperties;
var Mv = Object.getOwnPropertyDescriptors;
var Ba = Object.getOwnPropertySymbols;
var qv = Object.prototype.hasOwnProperty;
var jv = Object.prototype.propertyIsEnumerable;
var ka = (i, e, t) => e in i ? Uv(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var At = (i, e) => {
  for (var t in e || (e = {}))
    qv.call(e, t) && ka(i, t, e[t]);
  if (Ba)
    for (var t of Ba(e))
      jv.call(e, t) && ka(i, t, e[t]);
  return i;
};
var Lr = (i, e) => Lv(i, Mv(e));
var zv = class extends Km {
  constructor(e) {
    super(e), this.name = Tv, this.events = new ir(), this.initialized = false, this.ignoredPayloadTypes = [Ni], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(ns) }), this.initialized = true);
    }, this.connect = async (t) => {
      this.isInitialized();
      const s = Lr(At({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: r, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: c, relays: u } = s;
      let d = r, p, b = false;
      if (d && (b = this.client.core.pairing.pairings.get(d).active), !d || !b) {
        const { topic: D, uri: y } = await this.client.core.pairing.create();
        d = D, p = y;
      }
      const x = await this.client.core.crypto.generateKeyPair(), O = At({ requiredNamespaces: n, optionalNamespaces: o, relays: u ?? [{ protocol: Mh }], proposer: { publicKey: x, metadata: this.client.metadata } }, c && { sessionProperties: c }), { reject: _2, resolve: C, done: F2 } = Ti(V.FIVE_MINUTES, Cv);
      if (this.events.once(ke("session_connect"), async ({ error: D, session: y }) => {
        if (D)
          _2(D);
        else if (y) {
          y.self.publicKey = x;
          const w = Lr(At({}, y), { requiredNamespaces: y.requiredNamespaces, optionalNamespaces: y.optionalNamespaces });
          await this.client.session.set(y.topic, w), await this.setExpiry(y.topic, y.expiry), d && await this.client.core.pairing.updateMetadata({ topic: d, metadata: y.peer.metadata }), C(w);
        }
      }), !d) {
        const { message: D } = J("NO_MATCHING_KEY", `connect() pairing topic: ${d}`);
        throw new Error(D);
      }
      const K = await this.sendRequest(d, "wc_sessionPropose", O), I = Ht(V.FIVE_MINUTES);
      return await this.setProposal(K, At({ id: K, expiry: I }, O)), { uri: p, approval: F2 };
    }, this.pair = async (t) => (this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async (t) => {
      this.isInitialized(), await this.isValidApprove(t);
      const { id: s, relayProtocol: r, namespaces: n, sessionProperties: o } = t, c = this.client.proposal.get(s);
      let { pairingTopic: u, proposer: d, requiredNamespaces: p, optionalNamespaces: b } = c;
      u = u || "", us(p) || (p = Tb(n, "approve()"));
      const x = await this.client.core.crypto.generateKeyPair(), O = d.publicKey, _2 = await this.client.core.crypto.generateSharedKey(x, O);
      u && s && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: d.metadata }), await this.sendResult(s, u, { relay: { protocol: r ?? "irn" }, responderPublicKey: x }), await this.client.proposal.delete(s, Je("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const C = At({ relay: { protocol: r ?? "irn" }, namespaces: n, requiredNamespaces: p, optionalNamespaces: b, pairingTopic: u, controller: { publicKey: x, metadata: this.client.metadata }, expiry: Ht(Ls) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(_2), await this.sendRequest(_2, "wc_sessionSettle", C);
      const F2 = Lr(At({}, C), { topic: _2, pairingTopic: u, acknowledged: false, self: C.controller, peer: { publicKey: d.publicKey, metadata: d.metadata }, controller: x });
      return await this.client.session.set(_2, F2), await this.setExpiry(_2, Ht(Ls)), { topic: _2, acknowledged: () => new Promise((K) => setTimeout(() => K(this.client.session.get(_2)), 500)) };
    }, this.reject = async (t) => {
      this.isInitialized(), await this.isValidReject(t);
      const { id: s, reason: r } = t, { pairingTopic: n } = this.client.proposal.get(s);
      n && (await this.sendError(s, n, r), await this.client.proposal.delete(s, Je("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      this.isInitialized(), await this.isValidUpdate(t);
      const { topic: s, namespaces: r } = t, n = await this.sendRequest(s, "wc_sessionUpdate", { namespaces: r }), { done: o, resolve: c, reject: u } = Ti();
      return this.events.once(ke("session_update", n), ({ error: d }) => {
        d ? u(d) : c();
      }), await this.client.session.update(s, { namespaces: r }), { acknowledged: o };
    }, this.extend = async (t) => {
      this.isInitialized(), await this.isValidExtend(t);
      const { topic: s } = t, r = await this.sendRequest(s, "wc_sessionExtend", {}), { done: n, resolve: o, reject: c } = Ti();
      return this.events.once(ke("session_extend", r), ({ error: u }) => {
        u ? c(u) : o();
      }), await this.setExpiry(s, Ht(Ls)), { acknowledged: n };
    }, this.request = async (t) => {
      this.isInitialized(), await this.isValidRequest(t);
      const { chainId: s, request: r, topic: n, expiry: o } = t, c = await this.sendRequest(n, "wc_sessionRequest", { request: r, chainId: s }, o), { done: u, resolve: d, reject: p } = Ti(o);
      return this.events.once(ke("session_request", c), ({ error: b, result: x }) => {
        b ? p(b) : d(x);
      }), this.client.events.emit("session_request_sent", { topic: n, request: r, chainId: s, id: c }), await u();
    }, this.respond = async (t) => {
      this.isInitialized(), await this.isValidRespond(t);
      const { topic: s, response: r } = t, { id: n } = r;
      ht(r) ? await this.sendResult(n, s, r.result) : Ge(r) && await this.sendError(n, s, r.error), this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 });
    }, this.ping = async (t) => {
      this.isInitialized(), await this.isValidPing(t);
      const { topic: s } = t;
      if (this.client.session.keys.includes(s)) {
        const r = await this.sendRequest(s, "wc_sessionPing", {}), { done: n, resolve: o, reject: c } = Ti();
        this.events.once(ke("session_ping", r), ({ error: u }) => {
          u ? c(u) : o();
        }), await n();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (t) => {
      this.isInitialized(), await this.isValidEmit(t);
      const { topic: s, event: r, chainId: n } = t;
      await this.sendRequest(s, "wc_sessionEvent", { event: r, chainId: n });
    }, this.disconnect = async (t) => {
      this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: s } = t;
      this.client.session.keys.includes(s) ? (await this.sendRequest(s, "wc_sessionDelete", Je("USER_DISCONNECTED")), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((s) => Ub(s, t))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (t) => {
      try {
        const s = this.client.core.pairing.pairings.get(t.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((n) => {
          var o, c;
          return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((c = n.peerMetadata) == null ? void 0 : c.url) === t.self.metadata.url && n.topic !== s.topic;
        });
        if (r.length === 0)
          return;
        this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.deleteSession = async (t, s) => {
      const { self: r } = this.client.session.get(t);
      await this.client.core.relayer.unsubscribe(t), await Promise.all([this.client.session.delete(t, Je("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.deleteSymKey(t), s ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deleteProposal = async (t, s) => {
      await Promise.all([this.client.proposal.delete(t, Je("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deletePendingSessionRequest = async (t, s, r = false) => {
      await Promise.all([this.client.pendingRequest.delete(t, s), r ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.setExpiry = async (t, s) => {
      this.client.session.keys.includes(t) && await this.client.session.update(t, { expiry: s }), this.client.core.expirer.set(t, s);
    }, this.setProposal = async (t, s) => {
      await this.client.proposal.set(t, s), this.client.core.expirer.set(t, s.expiry);
    }, this.setPendingSessionRequest = async (t) => {
      const s = ns.wc_sessionRequest.req.ttl, { id: r, topic: n, params: o } = t;
      await this.client.pendingRequest.set(r, { id: r, topic: n, params: o }), s && this.client.core.expirer.set(r, Ht(s));
    }, this.sendRequest = async (t, s, r, n) => {
      const o = ti(s, r);
      if (Nn() && Fv.includes(s)) {
        const d = Ui(JSON.stringify(o));
        await this.client.core.verify.register({ attestationId: d });
      }
      const c = await this.client.core.crypto.encode(t, o), u = ns[s].req;
      return n && (u.ttl = n), this.client.core.history.set(t, o), this.client.core.relayer.publish(t, c, u), o.id;
    }, this.sendResult = async (t, s, r) => {
      const n = xi(t, r), o = await this.client.core.crypto.encode(s, n), c = await this.client.core.history.get(s, t), u = ns[c.request.method].res;
      this.client.core.relayer.publish(s, o, u), await this.client.core.history.resolve(n);
    }, this.sendError = async (t, s, r) => {
      const n = qi(t, r), o = await this.client.core.crypto.encode(s, n), c = await this.client.core.history.get(s, t), u = ns[c.request.method].res;
      this.client.core.relayer.publish(s, o, u), await this.client.core.history.resolve(n);
    }, this.cleanup = async () => {
      const t = [], s = [];
      this.client.session.getAll().forEach((r) => {
        ci(r.expiry) && t.push(r.topic);
      }), this.client.proposal.getAll().forEach((r) => {
        ci(r.expiry) && s.push(r.id);
      }), await Promise.all([...t.map((r) => this.deleteSession(r)), ...s.map((r) => this.deleteProposal(r))]);
    }, this.onRelayEventRequest = (t) => {
      const { topic: s, payload: r } = t, n = r.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, r);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, r);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, r);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, r);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, r);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, r);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, r);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, r);
        default:
          return this.client.logger.info(`Unsupported request method ${n}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: s, payload: r } = t, n = (await this.client.core.history.get(s, r.id)).request.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, r);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, r);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, r);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, r);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, r);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, r);
        default:
          return this.client.logger.info(`Unsupported response method ${n}`);
      }
    }, this.onSessionProposeRequest = async (t, s) => {
      const { params: r, id: n } = s;
      try {
        this.isValidConnect(At({}, s.params));
        const o = Ht(V.FIVE_MINUTES), c = At({ id: n, pairingTopic: t, expiry: o }, r);
        await this.setProposal(n, c);
        const u = Ui(JSON.stringify(s)), d = await this.getVerifyContext(u, c.proposer.metadata);
        this.client.events.emit("session_proposal", { id: n, params: c, verifyContext: d });
      } catch (o) {
        await this.sendError(n, t, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (t, s) => {
      const { id: r } = s;
      if (ht(s)) {
        const { result: n } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: n });
        const o = this.client.proposal.get(r);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const c = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const u = n.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const d = await this.client.core.crypto.generateSharedKey(c, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: d });
        const p = await this.client.core.relayer.subscribe(d);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p }), await this.client.core.pairing.activate({ topic: t });
      } else
        Ge(s) && (await this.client.proposal.delete(r, Je("USER_DISCONNECTED")), this.events.emit(ke("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (t, s) => {
      const { id: r, params: n } = s;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: o, controller: c, expiry: u, namespaces: d, requiredNamespaces: p, optionalNamespaces: b, sessionProperties: x, pairingTopic: O } = s.params, _2 = At({ topic: t, relay: o, expiry: u, namespaces: d, acknowledged: true, pairingTopic: O, requiredNamespaces: p, optionalNamespaces: b, controller: c.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: c.publicKey, metadata: c.metadata } }, x && { sessionProperties: x });
        await this.sendResult(s.id, t, true), this.events.emit(ke("session_connect"), { session: _2 }), this.cleanupDuplicatePairings(_2);
      } catch (o) {
        await this.sendError(r, t, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (t, s) => {
      const { id: r } = s;
      ht(s) ? (await this.client.session.update(t, { acknowledged: true }), this.events.emit(ke("session_approve", r), {})) : Ge(s) && (await this.client.session.delete(t, Je("USER_DISCONNECTED")), this.events.emit(ke("session_approve", r), { error: s.error }));
    }, this.onSessionUpdateRequest = async (t, s) => {
      const { params: r, id: n } = s;
      try {
        this.isValidUpdate(At({ topic: t }, r)), await this.client.session.update(t, { namespaces: r.namespaces }), await this.sendResult(n, t, true), this.client.events.emit("session_update", { id: n, topic: t, params: r });
      } catch (o) {
        await this.sendError(n, t, o), this.client.logger.error(o);
      }
    }, this.onSessionUpdateResponse = (t, s) => {
      const { id: r } = s;
      ht(s) ? this.events.emit(ke("session_update", r), {}) : Ge(s) && this.events.emit(ke("session_update", r), { error: s.error });
    }, this.onSessionExtendRequest = async (t, s) => {
      const { id: r } = s;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, Ht(Ls)), await this.sendResult(r, t, true), this.client.events.emit("session_extend", { id: r, topic: t });
      } catch (n) {
        await this.sendError(r, t, n), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (t, s) => {
      const { id: r } = s;
      ht(s) ? this.events.emit(ke("session_extend", r), {}) : Ge(s) && this.events.emit(ke("session_extend", r), { error: s.error });
    }, this.onSessionPingRequest = async (t, s) => {
      const { id: r } = s;
      try {
        this.isValidPing({ topic: t }), await this.sendResult(r, t, true), this.client.events.emit("session_ping", { id: r, topic: t });
      } catch (n) {
        await this.sendError(r, t, n), this.client.logger.error(n);
      }
    }, this.onSessionPingResponse = (t, s) => {
      const { id: r } = s;
      setTimeout(() => {
        ht(s) ? this.events.emit(ke("session_ping", r), {}) : Ge(s) && this.events.emit(ke("session_ping", r), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, s) => {
      const { id: r } = s;
      try {
        this.isValidDisconnect({ topic: t, reason: s.params }), await Promise.all([new Promise((n) => {
          this.client.core.relayer.once(He.publish, async () => {
            n(await this.deleteSession(t));
          });
        }), this.sendResult(r, t, true)]), this.client.events.emit("session_delete", { id: r, topic: t });
      } catch (n) {
        await this.sendError(r, t, n), this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (t, s) => {
      const { id: r, params: n } = s;
      try {
        this.isValidRequest(At({ topic: t }, n)), await this.setPendingSessionRequest({ id: r, topic: t, params: n });
        const o = Ui(JSON.stringify(s)), c = this.client.session.get(t), u = await this.getVerifyContext(o, c.peer.metadata);
        this.client.events.emit("session_request", { id: r, topic: t, params: n, verifyContext: u });
      } catch (o) {
        await this.sendError(r, t, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (t, s) => {
      const { id: r } = s;
      ht(s) ? this.events.emit(ke("session_request", r), { result: s.result }) : Ge(s) && this.events.emit(ke("session_request", r), { error: s.error });
    }, this.onSessionEventRequest = async (t, s) => {
      const { id: r, params: n } = s;
      try {
        this.isValidEmit(At({ topic: t }, n)), this.client.events.emit("session_event", { id: r, topic: t, params: n });
      } catch (o) {
        await this.sendError(r, t, o), this.client.logger.error(o);
      }
    }, this.isValidConnect = async (t) => {
      if (!It(t)) {
        const { message: u } = J("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(u);
      }
      const { pairingTopic: s, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, relays: c } = t;
      if (wt(s) || await this.isValidPairingTopic(s), !Wb(c, true)) {
        const { message: u } = J("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(u);
      }
      !wt(r) && us(r) !== 0 && this.validateNamespaces(r, "requiredNamespaces"), !wt(n) && us(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), wt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (t, s) => {
      const r = Gb(t, "connect()", s);
      if (r)
        throw new Error(r.message);
    }, this.isValidApprove = async (t) => {
      if (!It(t))
        throw new Error(J("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: s, namespaces: r, relayProtocol: n, sessionProperties: o } = t;
      await this.isValidProposalId(s);
      const c = this.client.proposal.get(s), u = Bs(r, "approve()");
      if (u)
        throw new Error(u.message);
      const d = Ia(c.requiredNamespaces, r, "approve()");
      if (d)
        throw new Error(d.message);
      if (!at(n, true)) {
        const { message: p } = J("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(p);
      }
      wt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!It(t)) {
        const { message: n } = J("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(n);
      }
      const { id: s, reason: r } = t;
      if (await this.isValidProposalId(s), !Jb(r)) {
        const { message: n } = J("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!It(t)) {
        const { message: d } = J("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(d);
      }
      const { relay: s, controller: r, namespaces: n, expiry: o } = t;
      if (!Dh(s)) {
        const { message: d } = J("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(d);
      }
      const c = zb(r, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      const u = Bs(n, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (ci(o)) {
        const { message: d } = J("EXPIRED", "onSessionSettleRequest()");
        throw new Error(d);
      }
    }, this.isValidUpdate = async (t) => {
      if (!It(t)) {
        const { message: u } = J("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(u);
      }
      const { topic: s, namespaces: r } = t;
      await this.isValidSessionTopic(s);
      const n = this.client.session.get(s), o = Bs(r, "update()");
      if (o)
        throw new Error(o.message);
      const c = Ia(n.requiredNamespaces, r, "update()");
      if (c)
        throw new Error(c.message);
    }, this.isValidExtend = async (t) => {
      if (!It(t)) {
        const { message: r } = J("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(r);
      }
      const { topic: s } = t;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (t) => {
      if (!It(t)) {
        const { message: u } = J("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(u);
      }
      const { topic: s, request: r, chainId: n, expiry: o } = t;
      await this.isValidSessionTopic(s);
      const { namespaces: c } = this.client.session.get(s);
      if (!Sa(c, n)) {
        const { message: u } = J("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(u);
      }
      if (!Qb(r)) {
        const { message: u } = J("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      if (!ew(c, n, r.method)) {
        const { message: u } = J("MISSING_OR_INVALID", `request() method: ${r.method}`);
        throw new Error(u);
      }
      if (o && !rw(o, Ur)) {
        const { message: u } = J("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Ur.min} and ${Ur.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (t) => {
      if (!It(t)) {
        const { message: n } = J("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(n);
      }
      const { topic: s, response: r } = t;
      if (await this.isValidSessionTopic(s), !Xb(r)) {
        const { message: n } = J("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (t) => {
      if (!It(t)) {
        const { message: r } = J("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(r);
      }
      const { topic: s } = t;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (t) => {
      if (!It(t)) {
        const { message: c } = J("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(c);
      }
      const { topic: s, event: r, chainId: n } = t;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!Sa(o, n)) {
        const { message: c } = J("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(c);
      }
      if (!Zb(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      if (!tw(o, n, r.name)) {
        const { message: c } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!It(t)) {
        const { message: r } = J("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(r);
      }
      const { topic: s } = t;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (t, s) => {
      const r = { verified: { verifyUrl: s.verifyUrl || "", validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const n = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: s.verifyUrl });
        n && (r.verified.origin = n, r.verified.validation = n === s.url ? "VALID" : "INVALID");
      } catch (n) {
        this.client.logger.error(n);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r;
    }, this.validateSessionProps = (t, s) => {
      Object.values(t).forEach((r) => {
        if (!at(r, false)) {
          const { message: n } = J("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(r)}`);
          throw new Error(n);
        }
      });
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(He.message, async (e) => {
      const { topic: t, message: s } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const r = await this.client.core.crypto.decode(t, s);
      ji(r) ? (this.client.core.history.set(t, r), this.onRelayEventRequest({ topic: t, payload: r })) : Oi(r) && (await this.client.core.history.resolve(r), this.onRelayEventResponse({ topic: t, payload: r }));
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on($t.expired, async (e) => {
      const { topic: t, id: s } = Sh(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, J("EXPIRED"), true);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, true), this.client.events.emit("session_expire", { topic: t })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  isValidPairingTopic(e) {
    if (!at(e, false)) {
      const { message: t } = J("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = J("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ci(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = J("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!at(e, false)) {
      const { message: t } = J("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = J("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ci(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: t } = J("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (at(e, false)) {
      const { message: t } = J("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    } else {
      const { message: t } = J("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!Yb(e)) {
      const { message: t } = J("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = J("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ci(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: t } = J("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
};
var Kv = class extends pr {
  constructor(e, t) {
    super(e, t, Rv, An), this.core = e, this.logger = t;
  }
};
var Vv = class extends pr {
  constructor(e, t) {
    super(e, t, Av, An), this.core = e, this.logger = t;
  }
};
var Bv = class extends pr {
  constructor(e, t) {
    super(e, t, $v, An, (s) => s.id), this.core = e, this.logger = t;
  }
};
var Tn = class _Tn extends zm {
  constructor(e) {
    super(e), this.protocol = zh, this.version = Kh, this.name = Fr.name, this.events = new We.EventEmitter(), this.on = (s, r) => this.events.on(s, r), this.once = (s, r) => this.events.once(s, r), this.off = (s, r) => this.events.off(s, r), this.removeListener = (s, r) => this.events.removeListener(s, r), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (e == null ? void 0 : e.name) || Fr.name, this.metadata = (e == null ? void 0 : e.metadata) || fb();
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ee.pino(ee.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Fr.logger }));
    this.core = (e == null ? void 0 : e.core) || new Pv(e), this.logger = ee.generateChildLogger(t, this.name), this.session = new Vv(this.core, this.logger), this.proposal = new Kv(this.core, this.logger), this.pendingRequest = new Bv(this.core, this.logger), this.engine = new zv(this);
  }
  static async init(e) {
    const t = new _Tn(e);
    return await t.initialize(), t;
  }
  get context() {
    return ee.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
function kv(i) {
  return typeof i < "u" && typeof i.context < "u";
}
var Gt = { init: "signer_init", uri: "signer_uri", created: "signer_created", updated: "signer_updated", deleted: "signer_deleted", event: "signer_event" };
var Hv = class extends Dg {
  constructor(e) {
    super(), this.events = new We.EventEmitter(), this.pending = false, this.initializing = false, this.requiredNamespaces = (e == null ? void 0 : e.requiredNamespaces) || {}, this.opts = e == null ? void 0 : e.client;
  }
  get connected() {
    return typeof this.session < "u";
  }
  get connecting() {
    return this.pending;
  }
  get chains() {
    return this.session ? Ym(this.session.namespaces) : Jm(this.requiredNamespaces);
  }
  get accounts() {
    return this.session ? Wm(this.session.namespaces) : [];
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open() {
    if (this.pending)
      return new Promise((e, t) => {
        this.events.once("open", () => {
          if (this.events.once("open_error", (s) => {
            t(s);
          }), typeof this.client > "u")
            return t(new Error("Sign Client not initialized"));
          e();
        });
      });
    try {
      this.pending = true;
      const e = await this.register(), t = e.find({ requiredNamespaces: this.requiredNamespaces });
      if (t.length)
        return this.onOpen(t[0]);
      const { uri: s, approval: r } = await e.connect({ requiredNamespaces: this.requiredNamespaces });
      this.events.emit(Gt.uri, { uri: s }), this.session = await r(), this.events.emit(Gt.created, this.session), this.onOpen();
    } catch (e) {
      throw this.events.emit("open_error", e), e;
    }
  }
  async close() {
    typeof this.session > "u" || (await (await this.register()).disconnect({ topic: this.session.topic, reason: Je("USER_DISCONNECTED") }), this.onClose());
  }
  async send(e, t) {
    if (typeof this.client > "u" && (this.client = await this.register(), this.connected || await this.open()), typeof this.session > "u")
      throw new Error("Signer connection is missing session");
    this.client.request({ topic: this.session.topic, request: e, chainId: t == null ? void 0 : t.chainId }).then((s) => this.events.emit("payload", xi(e.id, s))).catch((s) => this.events.emit("payload", qi(e.id, s.message)));
  }
  async register(e = this.opts) {
    if (typeof this.client < "u")
      return this.client;
    if (this.initializing)
      return new Promise((t, s) => {
        this.events.once("register_error", (r) => {
          s(r);
        }), this.events.once(Gt.init, () => {
          if (typeof this.client > "u")
            return s(new Error("Sign Client not initialized"));
          t(this.client);
        });
      });
    if (kv(e))
      return this.client = e, this.registerEventListeners(), this.client;
    try {
      return this.initializing = true, this.client = await Tn.init(e), this.initializing = false, this.registerEventListeners(), this.events.emit(Gt.init), this.client;
    } catch (t) {
      throw this.events.emit("register_error", t), t;
    }
  }
  onOpen(e) {
    this.pending = false, e && (this.session = e), this.events.emit("open");
  }
  onClose() {
    this.pending = false, this.client && (this.client = void 0), this.events.emit("close");
  }
  registerEventListeners() {
    typeof this.client < "u" && (this.client.on("session_event", (e) => {
      var t;
      this.session && ((t = this.session) == null ? void 0 : t.topic) !== e.topic || this.events.emit(Gt.event, e.params);
    }), this.client.on("session_update", (e) => {
      var t;
      typeof this.client < "u" && (this.session && ((t = this.session) == null ? void 0 : t.topic) !== e.topic || (this.session = this.client.session.get(e.topic), this.events.emit(Gt.updated, this.session)));
    }), this.client.on("session_delete", (e) => {
      var t;
      this.session && (this.session && ((t = this.session) == null ? void 0 : t.topic) !== e.topic || (this.onClose(), this.events.emit(Gt.deleted, this.session), this.session = void 0));
    }));
  }
};
var Bh = ":";
function Gv(i) {
  const { namespace: e, reference: t } = i;
  return [e, t].join(Bh);
}
function Wv(i) {
  const [e, t, s] = i.split(Bh);
  return { namespace: e, reference: t, address: s };
}
function Yv(i, e) {
  const t = [];
  return i.forEach((s) => {
    const r = e(s);
    t.includes(r) || t.push(r);
  }), t;
}
function Jv(i) {
  const { namespace: e, reference: t } = Wv(i);
  return Gv({ namespace: e, reference: t });
}
function Qv(i) {
  return Yv(i, Jv);
}
function Xv(i, e = []) {
  const t = [];
  return Object.keys(i).forEach((s) => {
    if (e.length && !e.includes(s))
      return;
    const r = i[s];
    t.push(...r.accounts);
  }), t;
}
function Zv(i, e = []) {
  const t = [];
  return Object.keys(i).forEach((s) => {
    if (e.length && !e.includes(s))
      return;
    const r = i[s];
    t.push(...Qv(r.accounts));
  }), t;
}
var e_ = class {
  constructor() {
    we(this, "accounts", []);
    we(this, "eventEmitter", new We.EventEmitter());
    we(this, "updateSession", (e) => {
      if (!this.isValidSession(e))
        throw console.warn(
          "updateSession incompatible session",
          e,
          "for adapter",
          this.formatChainId(this.chainId)
        ), new Error("Invalid session");
      this.session = e;
      const t = Zv(e.namespaces, [this.namespace]);
      this.setChainIds(t);
      const s = Xv(e.namespaces, [
        this.namespace
      ]);
      this.setAccounts(s);
    });
    we(this, "isValidSession", ({
      namespaces: e,
      requiredNamespaces: t
    }) => {
      var _a2, _b2, _c2;
      const s = this.formatChainId(this.chainId);
      return t ? !!((_b2 = (_a2 = t[this.namespace]) == null ? void 0 : _a2.chains) == null ? void 0 : _b2.includes(s)) : !!((_c2 = e == null ? void 0 : e[this.namespace]) == null ? void 0 : _c2.accounts.some(
        (r) => r.startsWith(s)
      ));
    });
  }
  getRequiredNamespaces() {
    const e = [this.formatChainId(this.chainId)];
    return {
      [this.namespace]: { chains: e, methods: this.methods, events: this.events }
    };
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : false;
  }
  setChainIds(e) {
    const s = e.filter((r) => this.isCompatibleChainId(r)).map((r) => this.parseChainId(r)).filter((r) => r !== this.chainId);
    s.length && (this.chainId = s[0], this.eventEmitter.emit("chainChanged", this.chainId));
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      this.chainId = t, this.eventEmitter.emit("chainChanged", this.chainId);
    }
  }
  parseAccountId(e) {
    const [t, s, r] = e.split(":");
    return { chainId: `${t}:${s}`, address: r };
  }
  getSignerConnection(e) {
    return new Hv({
      requiredNamespaces: {
        [this.namespace]: {
          chains: this.rpc.chains,
          methods: this.rpc.methods,
          events: this.rpc.events
        }
      },
      client: e
    });
  }
  registerEventListeners() {
    this.rpcProvider.on("connect", () => {
      const { chains: e, accounts: t } = this.signerConnection;
      (e == null ? void 0 : e.length) && this.setChainIds(e), (t == null ? void 0 : t.length) && this.setAccounts(t);
    }), this.signerConnection.on(Gt.created, this.updateSession), this.signerConnection.on(Gt.updated, this.updateSession), this.signerConnection.on(Gt.event, (e) => {
      if (!this.rpc.chains.includes(e.chainId))
        return;
      const { event: t } = e;
      t.name === "accountsChanged" ? (this.accounts = t.data, this.eventEmitter.emit("accountsChanged", this.accounts)) : t.name === "chainChanged" ? this.setChainId(t.data) : this.eventEmitter.emit(t.name, t.data);
    }), this.rpcProvider.on("disconnect", () => {
      this.eventEmitter.emit("disconnect");
    });
  }
};
var Ha = class extends Account {
  constructor(e, t, s, r) {
    super(e, t, s), this.wallet = r;
  }
  async execute(e, t = void 0, s = {}) {
    return e = Array.isArray(e) ? e : [e], await this.wallet.starknet_requestAddInvokeTransaction({
      accountAddress: this.address,
      executionRequest: { calls: e, abis: t, invocationDetails: s }
    });
  }
  async declare(e, t) {
    throw new Error("Not supported via Argent Login");
  }
  async deployAccount(e, t) {
    throw new Error("Not supported via Argent Login");
  }
};
var t_ = class {
  constructor(e) {
    this.wallet = e;
  }
  async getPubKey() {
    throw new Error("Not supported via Argent Login");
  }
  async signMessage(e, t) {
    const { signature: s } = await this.wallet.starknet_signTypedData({
      accountAddress: t,
      typedData: e
    });
    return s;
  }
  async signTransaction(e, t, s) {
    throw new Error("Not supported via Argent Login");
  }
  async signDeployAccountTransaction(e) {
    throw new Error("Not supported via Argent Login");
  }
  async signDeclareTransaction(e) {
    throw new Error("Not supported via Argent Login");
  }
};
var i_ = (i) => i.replace(/^SN_/, "SN");
var s_ = (i) => i.replace(/^SN/, "SN_");
var r_ = class extends e_ {
  constructor({ client: t, chainId: s, rpcUrl: r, provider: n }) {
    super();
    we(this, "id", "argentMobile");
    we(this, "name", "Argent Mobile");
    we(this, "version", "0.1.0");
    we(this, "icon", "");
    we(this, "provider");
    we(this, "signer");
    we(this, "account");
    we(this, "selectedAddress", "");
    we(this, "namespace", "starknet");
    we(this, "methods", [
      "starknet_signTypedData",
      "starknet_requestAddInvokeTransaction"
    ]);
    we(this, "events", ["chainChanged", "accountsChanged"]);
    we(this, "remoteSigner");
    we(this, "signerConnection");
    we(this, "rpcProvider");
    we(this, "chainId");
    we(this, "client");
    we(this, "session");
    we(this, "rpc");
    we(this, "walletRpc");
    we(this, "on", (t2, s2) => {
      this.eventEmitter.on(t2, s2);
    });
    we(this, "off", (t2, s2) => {
      this.eventEmitter.off(t2, s2);
    });
    this.chainId = String(s ?? constants_exports.NetworkName.SN_MAIN), this.rpc = {
      chains: s ? [this.formatChainId(this.chainId)] : [],
      methods: this.methods,
      events: this.events
    }, this.signerConnection = this.getSignerConnection(t), this.rpcProvider = new _n(this.signerConnection), this.client = t, this.registerEventListeners(), this.walletRpc = new Proxy({}, {
      get: (o, c) => (u) => this.requestWallet({ method: c, params: u })
    }), this.remoteSigner = new t_(this.walletRpc), this.provider = n || new RpcProvider2({ nodeUrl: r }), this.account = new Ha(
      this.provider,
      "",
      this.remoteSigner,
      this.walletRpc
    );
  }
  getNetworkName(t) {
    if (t === "SN_SEPOLIA")
      return constants_exports.NetworkName.SN_SEPOLIA;
    if (t === "SN_MAIN")
      return constants_exports.NetworkName.SN_MAIN;
    throw new Error(`Unknown starknet.js network name for chainId ${t}`);
  }
  // StarknetWindowObject
  async request(t) {
    throw new Error("Not implemented: .request()");
  }
  async enable() {
    return await this.rpcProvider.connect(), this.accounts;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  get isConnected() {
    return true;
  }
  async isPreauthorized() {
    return !!this.client.session.getAll().find(this.isValidSession);
  }
  async requestWallet(t) {
    if (!this.session)
      throw new Error("No session");
    try {
      const { topic: s } = this.session, r = this.formatChainId(this.chainId);
      kt.showApprovalModal(t);
      const n = await this.client.request({ topic: s, chainId: r, request: t });
      return kt.closeModal("animateSuccess"), n;
    } catch (s) {
      throw kt.closeModal(), s instanceof Error ? new Error(s.message) : new Error("Unknow error on requestWallet");
    }
  }
  // NamespaceAdapter
  get isConnecting() {
    return this.signerConnection.connecting;
  }
  async disable() {
    await this.rpcProvider.disconnect();
  }
  get isWalletConnect() {
    return true;
  }
  // NamespaceAdapter private methods
  registerEventListeners() {
    super.registerEventListeners(), this.eventEmitter.on("chainChanged", (t) => {
      throw new Error("Not implemented: chainChanged");
    });
  }
  formatChainId(t) {
    return `${this.namespace}:${i_(t)}`;
  }
  parseChainId(t) {
    return s_(t.split(":")[1]);
  }
  setAccounts(t) {
    this.accounts = t.filter(
      (n) => this.parseChainId(this.parseAccountId(n).chainId) === this.chainId
    ).map((n) => this.parseAccountId(n).address);
    const { address: s } = this.parseAccountId(t[0]), r = s.startsWith("0x") ? s : `0x${s}`;
    this.account = new Ha(
      this.provider,
      r,
      this.remoteSigner,
      this.walletRpc
    ), this.eventEmitter.emit("accountsChanged", this.accounts), this.selectedAddress = r;
  }
};
var Y_ = async (i) => Pm(i, r_);
export {
  Y_ as getStarknetWindowObject
};
/*! Bundled license information:

starknetkit/dist/index-00451f1a.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=index-00451f1a-2CCPIANK.js.map
