// node_modules/.pnpm/starknetkit@1.1.9_starknet@6.8.0/node_modules/starknetkit/dist/lastConnected-b964dc30.js
var x = Object.defineProperty;
var O = (o, f, s) => f in o ? x(o, f, { enumerable: true, configurable: true, writable: true, value: s }) : o[f] = s;
var h = (o, f, s) => (O(o, typeof f != "symbol" ? f + "" : f, s), s);
var P = class extends Error {
  constructor() {
    super(...arguments);
    h(this, "name", "ConnectorNotConnectedError");
    h(this, "message", "Connector not connected");
  }
};
var U = class extends Error {
  constructor() {
    super(...arguments);
    h(this, "name", "ConnectorNotFoundError");
    h(this, "message", "Connector not found");
  }
};
var A = class extends Error {
  constructor() {
    super(...arguments);
    h(this, "name", "UserRejectedRequestError");
    h(this, "message", "User rejected request");
  }
};
var S = class extends Error {
  constructor() {
    super(...arguments);
    h(this, "name", "UserNotConnectedError");
    h(this, "message", "User not connected");
  }
};
var F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function L(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function R(o) {
  if (o.__esModule)
    return o;
  var f = o.default;
  if (typeof f == "function") {
    var s = function v() {
      if (this instanceof v) {
        var y = [null];
        y.push.apply(y, arguments);
        var E = Function.bind.apply(f, y);
        return new E();
      }
      return f.apply(this, arguments);
    };
    s.prototype = f.prototype;
  } else
    s = {};
  return Object.defineProperty(s, "__esModule", { value: true }), Object.keys(o).forEach(function(v) {
    var y = Object.getOwnPropertyDescriptor(o, v);
    Object.defineProperty(s, v, y.get ? y : {
      enumerable: true,
      get: function() {
        return o[v];
      }
    });
  }), s;
}
var C = { exports: {} };
(function(o) {
  var f = Object.prototype.hasOwnProperty, s = "~";
  function v() {
  }
  Object.create && (v.prototype = /* @__PURE__ */ Object.create(null), new v().__proto__ || (s = false));
  function y(c, t, n) {
    this.fn = c, this.context = t, this.once = n || false;
  }
  function E(c, t, n, r, p) {
    if (typeof n != "function")
      throw new TypeError("The listener must be a function");
    var u = new y(n, r || c, p), a = s ? s + t : t;
    return c._events[a] ? c._events[a].fn ? c._events[a] = [c._events[a], u] : c._events[a].push(u) : (c._events[a] = u, c._eventsCount++), c;
  }
  function b(c, t) {
    --c._eventsCount === 0 ? c._events = new v() : delete c._events[t];
  }
  function l() {
    this._events = new v(), this._eventsCount = 0;
  }
  l.prototype.eventNames = function() {
    var t = [], n, r;
    if (this._eventsCount === 0)
      return t;
    for (r in n = this._events)
      f.call(n, r) && t.push(s ? r.slice(1) : r);
    return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(n)) : t;
  }, l.prototype.listeners = function(t) {
    var n = s ? s + t : t, r = this._events[n];
    if (!r)
      return [];
    if (r.fn)
      return [r.fn];
    for (var p = 0, u = r.length, a = new Array(u); p < u; p++)
      a[p] = r[p].fn;
    return a;
  }, l.prototype.listenerCount = function(t) {
    var n = s ? s + t : t, r = this._events[n];
    return r ? r.fn ? 1 : r.length : 0;
  }, l.prototype.emit = function(t, n, r, p, u, a) {
    var d = s ? s + t : t;
    if (!this._events[d])
      return false;
    var e = this._events[d], m = arguments.length, _, i;
    if (e.fn) {
      switch (e.once && this.removeListener(t, e.fn, void 0, true), m) {
        case 1:
          return e.fn.call(e.context), true;
        case 2:
          return e.fn.call(e.context, n), true;
        case 3:
          return e.fn.call(e.context, n, r), true;
        case 4:
          return e.fn.call(e.context, n, r, p), true;
        case 5:
          return e.fn.call(e.context, n, r, p, u), true;
        case 6:
          return e.fn.call(e.context, n, r, p, u, a), true;
      }
      for (i = 1, _ = new Array(m - 1); i < m; i++)
        _[i - 1] = arguments[i];
      e.fn.apply(e.context, _);
    } else {
      var w = e.length, g;
      for (i = 0; i < w; i++)
        switch (e[i].once && this.removeListener(t, e[i].fn, void 0, true), m) {
          case 1:
            e[i].fn.call(e[i].context);
            break;
          case 2:
            e[i].fn.call(e[i].context, n);
            break;
          case 3:
            e[i].fn.call(e[i].context, n, r);
            break;
          case 4:
            e[i].fn.call(e[i].context, n, r, p);
            break;
          default:
            if (!_)
              for (g = 1, _ = new Array(m - 1); g < m; g++)
                _[g - 1] = arguments[g];
            e[i].fn.apply(e[i].context, _);
        }
    }
    return true;
  }, l.prototype.on = function(t, n, r) {
    return E(this, t, n, r, false);
  }, l.prototype.once = function(t, n, r) {
    return E(this, t, n, r, true);
  }, l.prototype.removeListener = function(t, n, r, p) {
    var u = s ? s + t : t;
    if (!this._events[u])
      return this;
    if (!n)
      return b(this, u), this;
    var a = this._events[u];
    if (a.fn)
      a.fn === n && (!p || a.once) && (!r || a.context === r) && b(this, u);
    else {
      for (var d = 0, e = [], m = a.length; d < m; d++)
        (a[d].fn !== n || p && !a[d].once || r && a[d].context !== r) && e.push(a[d]);
      e.length ? this._events[u] = e.length === 1 ? e[0] : e : b(this, u);
    }
    return this;
  }, l.prototype.removeAllListeners = function(t) {
    var n;
    return t ? (n = s ? s + t : t, this._events[n] && b(this, n)) : (this._events = new v(), this._eventsCount = 0), this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = s, l.EventEmitter = l, o.exports = l;
})(C);
var j = C.exports;
var N = L(j);
var T = class extends N {
};
var q = () => {
  localStorage.removeItem("starknetLastConnectedWallet");
};

export {
  P,
  U,
  A,
  S,
  F,
  L,
  R,
  T,
  q
};
//# sourceMappingURL=chunk-ABGJYFXF.js.map
