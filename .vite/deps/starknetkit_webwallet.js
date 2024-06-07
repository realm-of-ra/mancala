import {
  s
} from "./chunk-5PXFP6GF.js";
import {
  A,
  F,
  P,
  R,
  S,
  T,
  U,
  q
} from "./chunk-ABGJYFXF.js";
import {
  Account,
  RpcProvider2,
  constants_exports
} from "./chunk-TQUWFIKU.js";
import "./chunk-ELN4VAZN.js";
import "./chunk-OPAFF7F5.js";
import "./chunk-J32WSRGE.js";

// node_modules/.pnpm/starknetkit@1.1.9_starknet@6.8.0/node_modules/starknetkit/dist/index-c4ef0430.js
var an = Object.defineProperty;
var on = (t, e, r) => e in t ? an(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
var ae = (t, e, r) => (on(t, typeof e != "symbol" ? e + "" : e, r), r);
var cr = "https://web.argent.xyz";
var Ut = `<svg
    width="32"
    height="28"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 0.4375C0.982233 0.4375 0.5625 0.857233 0.5625 1.375V12C0.5625 12.4144 0.72712 12.8118 1.02015 13.1049C1.31317 13.3979 1.7106 13.5625 2.125 13.5625H15.875C16.2894 13.5625 16.6868 13.3979 16.9799 13.1049C17.2729 12.8118 17.4375 12.4144 17.4375 12V1.375C17.4375 0.857233 17.0178 0.4375 16.5 0.4375H1.5ZM2.4375 3.50616V11.6875H15.5625V3.50616L9.63349 8.94108C9.27507 9.26964 8.72493 9.26964 8.36651 8.94108L2.4375 3.50616ZM14.0899 2.3125H3.91013L9 6.97822L14.0899 2.3125Z"
      fill="currentColor"
    />
  </svg>`;
var hn = "https://static.hydrogen.argent47.net/webwallet/iframe_whitelist_testnet.json";
var mn = "https://static.argent.net/webwallet/iframe_whitelist_mainnet.json";
function yn(t) {
  return t;
}
function gn(t) {
  return t.length === 0 ? yn : t.length === 1 ? t[0] : function(r) {
    return t.reduce((n, s2) => s2(n), r);
  };
}
function bn(t) {
  return typeof t == "object" && t !== null && "subscribe" in t;
}
function Qe(t) {
  const e = {
    subscribe(r) {
      let n = null, s2 = false, a = false, o = false;
      function i() {
        if (n === null) {
          o = true;
          return;
        }
        a || (a = true, typeof n == "function" ? n() : n && n.unsubscribe());
      }
      return n = t({
        next(c) {
          var _a3;
          s2 || ((_a3 = r.next) == null ? void 0 : _a3.call(r, c));
        },
        error(c) {
          var _a3;
          s2 || (s2 = true, (_a3 = r.error) == null ? void 0 : _a3.call(r, c), i());
        },
        complete() {
          var _a3;
          s2 || (s2 = true, (_a3 = r.complete) == null ? void 0 : _a3.call(r), i());
        }
      }), o && i(), {
        unsubscribe: i
      };
    },
    pipe(...r) {
      return gn(r)(e);
    }
  };
  return e;
}
function ur(t) {
  return (e) => {
    let r = 0, n = null;
    const s2 = [];
    function a() {
      n || (n = e.subscribe({
        next(i) {
          var _a3;
          for (const c of s2)
            (_a3 = c.next) == null ? void 0 : _a3.call(c, i);
        },
        error(i) {
          var _a3;
          for (const c of s2)
            (_a3 = c.error) == null ? void 0 : _a3.call(c, i);
        },
        complete() {
          var _a3;
          for (const i of s2)
            (_a3 = i.complete) == null ? void 0 : _a3.call(i);
        }
      }));
    }
    function o() {
      if (r === 0 && n) {
        const i = n;
        n = null, i.unsubscribe();
      }
    }
    return {
      subscribe(i) {
        return r++, s2.push(i), a(), {
          unsubscribe() {
            r--, o();
            const c = s2.findIndex((u) => u === i);
            c > -1 && s2.splice(c, 1);
          }
        };
      }
    };
  };
}
function wn(t) {
  return (e) => ({
    subscribe(r) {
      let n = 0;
      return e.subscribe({
        next(a) {
          var _a3;
          (_a3 = r.next) == null ? void 0 : _a3.call(r, t(a, n++));
        },
        error(a) {
          var _a3;
          (_a3 = r.error) == null ? void 0 : _a3.call(r, a);
        },
        complete() {
          var _a3;
          (_a3 = r.complete) == null ? void 0 : _a3.call(r);
        }
      });
    }
  });
}
function lr(t) {
  return (e) => ({
    subscribe(r) {
      return e.subscribe({
        next(n) {
          var _a3, _b2;
          (_a3 = t.next) == null ? void 0 : _a3.call(t, n), (_b2 = r.next) == null ? void 0 : _b2.call(r, n);
        },
        error(n) {
          var _a3, _b2;
          (_a3 = t.error) == null ? void 0 : _a3.call(t, n), (_b2 = r.error) == null ? void 0 : _b2.call(r, n);
        },
        complete() {
          var _a3, _b2;
          (_a3 = t.complete) == null ? void 0 : _a3.call(t), (_b2 = r.complete) == null ? void 0 : _b2.call(r);
        }
      });
    }
  });
}
var _n = class dr extends Error {
  constructor(e) {
    super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, dr.prototype);
  }
};
function fr(t) {
  let e;
  return {
    promise: new Promise((n, s2) => {
      let a = false;
      function o() {
        a || (a = true, s2(new _n("This operation was aborted.")), i.unsubscribe());
      }
      const i = t.subscribe({
        next(c) {
          a = true, n(c), o();
        },
        error(c) {
          a = true, s2(c), o();
        },
        complete() {
          a = true, o();
        }
      });
      e = o;
    }),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    abort: e
  };
}
var vn = Object.freeze(Object.defineProperty({
  __proto__: null,
  isObservable: bn,
  map: wn,
  observable: Qe,
  observableToPromise: fr,
  share: ur,
  tap: lr
}, Symbol.toStringTag, { value: "Module" }));
function pr(t) {
  return Qe((e) => {
    function r(s2 = 0, a = t.op) {
      const o = t.links[s2];
      if (!o)
        throw new Error("No more links to execute - did you forget to add an ending link?");
      return o({
        op: a,
        next(c) {
          return r(s2 + 1, c);
        }
      });
    }
    return r().subscribe(e);
  });
}
function Wt(t) {
  return Array.isArray(t) ? t : [
    t
  ];
}
function xn(t) {
  return (e) => {
    const r = Wt(t.true).map((s2) => s2(e)), n = Wt(t.false).map((s2) => s2(e));
    return (s2) => Qe((a) => {
      const o = t.condition(s2.op) ? r : n;
      return pr({
        op: s2.op,
        links: o
      }).subscribe(a);
    });
  };
}
function Tn(t) {
  return t instanceof hr || /**
  * @deprecated
  * Delete in next major
  */
  t.name === "TRPCClientError";
}
var hr = class $e extends Error {
  static from(e, r = {}) {
    return e instanceof Error ? Tn(e) ? (r.meta && (e.meta = {
      ...e.meta,
      ...r.meta
    }), e) : new $e(e.message, {
      ...r,
      cause: e,
      result: null
    }) : new $e(e.error.message ?? "", {
      ...r,
      cause: void 0,
      result: e
    });
  }
  constructor(e, r) {
    var _a3, _b2;
    const n = r == null ? void 0 : r.cause;
    super(e, {
      cause: n
    }), this.meta = r == null ? void 0 : r.meta, this.cause = n, this.shape = (_a3 = r == null ? void 0 : r.result) == null ? void 0 : _a3.error, this.data = (_b2 = r == null ? void 0 : r.result) == null ? void 0 : _b2.error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, $e.prototype);
  }
};
function mr(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r in t) {
    const n = t[r];
    e[n] = r;
  }
  return e;
}
var Xe = {
  /**
  * Invalid JSON was received by the server.
  * An error occurred on the server while parsing the JSON text.
  */
  PARSE_ERROR: -32700,
  /**
  * The JSON sent is not a valid Request object.
  */
  BAD_REQUEST: -32600,
  // Internal JSON-RPC error
  INTERNAL_SERVER_ERROR: -32603,
  NOT_IMPLEMENTED: -32603,
  // Implementation specific errors
  UNAUTHORIZED: -32001,
  FORBIDDEN: -32003,
  NOT_FOUND: -32004,
  METHOD_NOT_SUPPORTED: -32005,
  TIMEOUT: -32008,
  CONFLICT: -32009,
  PRECONDITION_FAILED: -32012,
  PAYLOAD_TOO_LARGE: -32013,
  UNPROCESSABLE_CONTENT: -32022,
  TOO_MANY_REQUESTS: -32029,
  CLIENT_CLOSED_REQUEST: -32099
};
mr(Xe);
mr(Xe);
var En = {
  PARSE_ERROR: 400,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501
};
function kn(t) {
  return En[t] ?? 500;
}
function yr(t) {
  return kn(t.code);
}
var gr = () => {
};
function br(t, e) {
  return new Proxy(gr, {
    get(n, s2) {
      if (!(typeof s2 != "string" || s2 === "then"))
        return br(t, [
          ...e,
          s2
        ]);
    },
    apply(n, s2, a) {
      const o = e[e.length - 1] === "apply";
      return t({
        args: o ? a.length >= 2 ? a[1] : [] : a,
        path: o ? e.slice(0, -1) : e
      });
    }
  });
}
var kt = (t) => br(t, []);
var Ct = (t) => new Proxy(gr, {
  get(e, r) {
    if (!(typeof r != "string" || r === "then"))
      return t(r);
  }
});
function Cn(t) {
  const { path: e, error: r, config: n } = t, { code: s2 } = t.error, a = {
    message: r.message,
    code: Xe[s2],
    data: {
      code: s2,
      httpStatus: yr(r)
    }
  };
  return n.isDev && typeof t.error.stack == "string" && (a.data.stack = t.error.stack), typeof e == "string" && (a.data.path = e), n.errorFormatter({
    ...t,
    shape: a
  });
}
function zt(t, e) {
  return "error" in e ? {
    ...e,
    error: t.transformer.output.serialize(e.error)
  } : "data" in e.result ? {
    ...e,
    result: {
      ...e.result,
      data: t.transformer.output.serialize(e.result.data)
    }
  } : e;
}
function Rn(t, e) {
  return Array.isArray(e) ? e.map((r) => zt(t, r)) : zt(t, e);
}
var On = Object.freeze(Object.defineProperty({
  __proto__: null,
  createFlatProxy: Ct,
  createRecursiveProxy: kt,
  getErrorShape: Cn,
  transformTRPCResponse: Rn
}, Symbol.toStringTag, { value: "Module" }));
function Pn(t) {
  return typeof FormData > "u" ? false : t instanceof FormData;
}
var ut = {
  css: {
    query: [
      "72e3ff",
      "3fb0d8"
    ],
    mutation: [
      "c5a3fc",
      "904dfc"
    ],
    subscription: [
      "ff49e1",
      "d83fbe"
    ]
  },
  ansi: {
    regular: {
      // Cyan background, black and white text respectively
      query: [
        "\x1B[30;46m",
        "\x1B[97;46m"
      ],
      // Magenta background, black and white text respectively
      mutation: [
        "\x1B[30;45m",
        "\x1B[97;45m"
      ],
      // Green background, black and white text respectively
      subscription: [
        "\x1B[30;42m",
        "\x1B[97;42m"
      ]
    },
    bold: {
      query: [
        "\x1B[1;30;46m",
        "\x1B[1;97;46m"
      ],
      mutation: [
        "\x1B[1;30;45m",
        "\x1B[1;97;45m"
      ],
      subscription: [
        "\x1B[1;30;42m",
        "\x1B[1;97;42m"
      ]
    }
  }
};
function Sn(t) {
  const { direction: e, type: r, path: n, id: s2, input: a } = t, o = [], i = [];
  if (t.colorMode === "ansi") {
    const [f, m] = ut.ansi.regular[r], [v, E] = ut.ansi.bold[r], S2 = "\x1B[0m";
    return o.push(e === "up" ? f : m, e === "up" ? ">>" : "<<", r, e === "up" ? v : E, `#${s2}`, n, S2), e === "up" ? i.push({
      input: t.input
    }) : i.push({
      input: t.input,
      // strip context from result cause it's too noisy in terminal wihtout collapse mode
      result: "result" in t.result ? t.result.result : t.result,
      elapsedMs: t.elapsedMs
    }), {
      parts: o,
      args: i
    };
  }
  const [c, u] = ut.css[r], l = `
    background-color: #${e === "up" ? c : u}; 
    color: ${e === "up" ? "black" : "white"};
    padding: 2px;
  `;
  return o.push("%c", e === "up" ? ">>" : "<<", r, `#${s2}`, `%c${n}%c`, "%O"), i.push(l, `${l}; font-weight: bold;`, `${l}; font-weight: normal;`), e === "up" ? i.push({
    input: a,
    context: t.context
  }) : i.push({
    input: a,
    result: t.result,
    elapsedMs: t.elapsedMs,
    context: t.context
  }), {
    parts: o,
    args: i
  };
}
var Nn = ({ c: t = console, colorMode: e = "css" }) => (r) => {
  const n = r.input, s2 = Pn(n) ? Object.fromEntries(n) : n, { parts: a, args: o } = Sn({
    ...r,
    colorMode: e,
    input: s2
  }), i = r.direction === "down" && r.result && (r.result instanceof Error || "error" in r.result.result) ? "error" : "log";
  t[i].apply(null, [
    a.join(" ")
  ].concat(o));
};
function In(t = {}) {
  const { enabled: e = () => true } = t, r = t.colorMode ?? (typeof window > "u" ? "ansi" : "css"), { logger: n = Nn({
    c: t.console,
    colorMode: r
  }) } = t;
  return () => ({ op: s2, next: a }) => Qe((o) => {
    e({
      ...s2,
      direction: "up"
    }) && n({
      ...s2,
      direction: "up"
    });
    const i = Date.now();
    function c(u) {
      const l = Date.now() - i;
      e({
        ...s2,
        direction: "down",
        result: u
      }) && n({
        ...s2,
        direction: "down",
        elapsedMs: l,
        result: u
      });
    }
    return a(s2).pipe(lr({
      next(u) {
        c(u);
      },
      error(u) {
        c(u);
      }
    })).subscribe(o);
  });
}
var Ln = class {
  $request({ type: e, input: r, path: n, context: s2 = {} }) {
    return pr({
      links: this.links,
      op: {
        id: ++this.requestId,
        type: e,
        path: n,
        input: r,
        context: s2
      }
    }).pipe(ur());
  }
  requestAsPromise(e) {
    const r = this.$request(e), { promise: n, abort: s2 } = fr(r);
    return new Promise((o, i) => {
      var _a3;
      (_a3 = e.signal) == null ? void 0 : _a3.addEventListener("abort", s2), n.then((c) => {
        o(c.result.data);
      }).catch((c) => {
        i(hr.from(c));
      });
    });
  }
  query(e, r, n) {
    return this.requestAsPromise({
      type: "query",
      path: e,
      input: r,
      context: n == null ? void 0 : n.context,
      signal: n == null ? void 0 : n.signal
    });
  }
  mutation(e, r, n) {
    return this.requestAsPromise({
      type: "mutation",
      path: e,
      input: r,
      context: n == null ? void 0 : n.context,
      signal: n == null ? void 0 : n.signal
    });
  }
  subscription(e, r, n) {
    return this.$request({
      type: "subscription",
      path: e,
      input: r,
      context: n == null ? void 0 : n.context
    }).subscribe({
      next(a) {
        var _a3, _b2, _c2;
        a.result.type === "started" ? (_a3 = n.onStarted) == null ? void 0 : _a3.call(n) : a.result.type === "stopped" ? (_b2 = n.onStopped) == null ? void 0 : _b2.call(n) : (_c2 = n.onData) == null ? void 0 : _c2.call(n, a.result.data);
      },
      error(a) {
        var _a3;
        (_a3 = n.onError) == null ? void 0 : _a3.call(n, a);
      },
      complete() {
        var _a3;
        (_a3 = n.onComplete) == null ? void 0 : _a3.call(n);
      }
    });
  }
  constructor(e) {
    this.requestId = 0;
    const r = (() => {
      const n = e.transformer;
      return n ? "input" in n ? e.transformer : {
        input: n,
        output: n
      } : {
        input: {
          serialize: (s2) => s2,
          deserialize: (s2) => s2
        },
        output: {
          serialize: (s2) => s2,
          deserialize: (s2) => s2
        }
      };
    })();
    this.runtime = {
      transformer: {
        serialize: (n) => r.input.serialize(n),
        deserialize: (n) => r.output.deserialize(n)
      },
      combinedTransformer: r
    }, this.links = e.links.map((n) => n(this.runtime));
  }
};
var An = {
  query: "query",
  mutate: "mutation",
  subscribe: "subscription"
};
var Mn = (t) => An[t];
function jn(t) {
  return Ct((e) => t.hasOwnProperty(e) ? t[e] : e === "__untypedClient" ? t : kt(({ path: r, args: n }) => {
    const s2 = [
      e,
      ...r
    ], a = Mn(s2.pop()), o = s2.join(".");
    return t[a](o, ...n);
  }));
}
function $n(t) {
  const e = new Ln(t);
  return jn(e);
}
function Dn(t) {
  return !!t && !Array.isArray(t) && typeof t == "object";
}
function Zn(t) {
  if (t instanceof le)
    return t;
  const e = new le({
    code: "INTERNAL_SERVER_ERROR",
    cause: t
  });
  return t instanceof Error && t.stack && (e.stack = t.stack), e;
}
var Un = class extends Error {
};
function Wn(t) {
  if (t instanceof Error)
    return t;
  const e = typeof t;
  if (!(e === "undefined" || e === "function" || t === null)) {
    if (e !== "object")
      return new Error(String(t));
    if (Dn(t)) {
      const r = new Un();
      for (const n in t)
        r[n] = t[n];
      return r;
    }
  }
}
var le = class extends Error {
  constructor(e) {
    const r = Wn(e.cause), n = e.message ?? (r == null ? void 0 : r.message) ?? e.code;
    super(n, {
      cause: r
    }), this.code = e.code, this.name = this.constructor.name;
  }
};
function zn(t) {
  return "input" in t ? t : {
    input: t,
    output: t
  };
}
var ge = {
  _default: true,
  input: {
    serialize: (t) => t,
    deserialize: (t) => t
  },
  output: {
    serialize: (t) => t,
    deserialize: (t) => t
  }
};
var be = ({ shape: t }) => t;
function qn(t) {
  return Object.assign(/* @__PURE__ */ Object.create(null), t);
}
var Bn = [
  "query",
  "mutation",
  "subscription"
];
function Vn(t) {
  return "router" in t._def;
}
var Hn = {
  _ctx: null,
  _errorShape: null,
  _meta: null,
  queries: {},
  mutations: {},
  subscriptions: {},
  errorFormatter: be,
  transformer: ge
};
var Fn = [
  /**
  * Then is a reserved word because otherwise we can't return a promise that returns a Proxy
  * since JS will think that `.then` is something that exists
  */
  "then"
];
function wr(t) {
  return function(r) {
    const n = new Set(Object.keys(r).filter((c) => Fn.includes(c)));
    if (n.size > 0)
      throw new Error("Reserved words used in `router({})` call: " + Array.from(n).join(", "));
    const s2 = qn({});
    function a(c, u = "") {
      for (const [l, f] of Object.entries(c ?? {})) {
        const m = `${u}${l}`;
        if (Vn(f)) {
          a(f._def.procedures, `${m}.`);
          continue;
        }
        if (s2[m])
          throw new Error(`Duplicate key: ${m}`);
        s2[m] = f;
      }
    }
    a(r);
    const o = {
      _config: t,
      router: true,
      procedures: s2,
      ...Hn,
      record: r,
      queries: Object.entries(s2).filter((c) => c[1]._def.query).reduce((c, [u, l]) => ({
        ...c,
        [u]: l
      }), {}),
      mutations: Object.entries(s2).filter((c) => c[1]._def.mutation).reduce((c, [u, l]) => ({
        ...c,
        [u]: l
      }), {}),
      subscriptions: Object.entries(s2).filter((c) => c[1]._def.subscription).reduce((c, [u, l]) => ({
        ...c,
        [u]: l
      }), {})
    };
    return {
      ...r,
      _def: o,
      createCaller(c) {
        return kt(({ path: l, args: f }) => {
          if (l.length === 1 && Bn.includes(l[0]))
            return Jn({
              procedures: o.procedures,
              path: f[0],
              rawInput: f[1],
              ctx: c,
              type: l[0]
            });
          const m = l.join("."), v = o.procedures[m];
          let E = "query";
          return v._def.mutation ? E = "mutation" : v._def.subscription && (E = "subscription"), v({
            path: m,
            rawInput: f[0],
            ctx: c,
            type: E
          });
        });
      },
      getErrorShape(c) {
        const { path: u, error: l } = c, { code: f } = c.error, m = {
          message: l.message,
          code: Xe[f],
          data: {
            code: f,
            httpStatus: yr(l)
          }
        };
        return t.isDev && typeof c.error.stack == "string" && (m.data.stack = c.error.stack), typeof u == "string" && (m.data.path = u), this._def._config.errorFormatter({
          ...c,
          shape: m
        });
      }
    };
  };
}
function Jn(t) {
  var _a3;
  const { type: e, path: r } = t;
  if (!(r in t.procedures) || !((_a3 = t.procedures[r]) == null ? void 0 : _a3._def[e]))
    throw new le({
      code: "NOT_FOUND",
      message: `No "${e}"-procedure on path "${r}"`
    });
  const n = t.procedures[r];
  return n(t);
}
var _a, _b, _c, _d, _e, _f;
var qt = typeof window > "u" || "Deno" in window || ((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test" || !!((_d = (_c = globalThis.process) == null ? void 0 : _c.env) == null ? void 0 : _d.JEST_WORKER_ID) || !!((_f = (_e = globalThis.process) == null ? void 0 : _e.env) == null ? void 0 : _f.VITEST_WORKER_ID);
function Bt(t) {
  const e = t;
  if (typeof e == "function")
    return e;
  if (typeof e.parseAsync == "function")
    return e.parseAsync.bind(e);
  if (typeof e.parse == "function")
    return e.parse.bind(e);
  if (typeof e.validateSync == "function")
    return e.validateSync.bind(e);
  if (typeof e.create == "function")
    return e.create.bind(e);
  if (typeof e.assert == "function")
    return (r) => (e.assert(r), r);
  throw new Error("Could not find a validator fn");
}
function _r(t, ...e) {
  const r = Object.assign(/* @__PURE__ */ Object.create(null), t);
  for (const n of e)
    for (const s2 in n) {
      if (s2 in r && r[s2] !== n[s2])
        throw new Error(`Duplicate key ${s2}`);
      r[s2] = n[s2];
    }
  return r;
}
function Gn() {
  function t(r) {
    return {
      _middlewares: r,
      unstable_pipe(n) {
        const s2 = "_middlewares" in n ? n._middlewares : [
          n
        ];
        return t([
          ...r,
          ...s2
        ]);
      }
    };
  }
  function e(r) {
    return t([
      r
    ]);
  }
  return e;
}
function Vt(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
function Yn(t) {
  const e = async ({ next: r, rawInput: n, input: s2 }) => {
    let a;
    try {
      a = await t(n);
    } catch (i) {
      throw new le({
        code: "BAD_REQUEST",
        cause: i
      });
    }
    const o = Vt(s2) && Vt(a) ? {
      ...s2,
      ...a
    } : a;
    return r({
      input: o
    });
  };
  return e._type = "input", e;
}
function Qn(t) {
  const e = async ({ next: r }) => {
    const n = await r();
    if (!n.ok)
      return n;
    try {
      const s2 = await t(n.data);
      return {
        ...n,
        data: s2
      };
    } catch (s2) {
      throw new le({
        message: "Output validation failed",
        code: "INTERNAL_SERVER_ERROR",
        cause: s2
      });
    }
  };
  return e._type = "output", e;
}
var vr = "middlewareMarker";
function oe(t, e) {
  const { middlewares: r = [], inputs: n, meta: s2, ...a } = e;
  return xr({
    ..._r(t, a),
    inputs: [
      ...t.inputs,
      ...n ?? []
    ],
    middlewares: [
      ...t.middlewares,
      ...r
    ],
    meta: t.meta && s2 ? {
      ...t.meta,
      ...s2
    } : s2 ?? t.meta
  });
}
function xr(t = {}) {
  const e = {
    inputs: [],
    middlewares: [],
    ...t
  };
  return {
    _def: e,
    input(r) {
      const n = Bt(r);
      return oe(e, {
        inputs: [
          r
        ],
        middlewares: [
          Yn(n)
        ]
      });
    },
    output(r) {
      const n = Bt(r);
      return oe(e, {
        output: r,
        middlewares: [
          Qn(n)
        ]
      });
    },
    meta(r) {
      return oe(e, {
        meta: r
      });
    },
    /**
    * @deprecated
    * This functionality is deprecated and will be removed in the next major version.
    */
    unstable_concat(r) {
      return oe(e, r._def);
    },
    use(r) {
      const n = "_middlewares" in r ? r._middlewares : [
        r
      ];
      return oe(e, {
        middlewares: n
      });
    },
    query(r) {
      return lt({
        ...e,
        query: true
      }, r);
    },
    mutation(r) {
      return lt({
        ...e,
        mutation: true
      }, r);
    },
    subscription(r) {
      return lt({
        ...e,
        subscription: true
      }, r);
    }
  };
}
function lt(t, e) {
  const r = oe(t, {
    resolver: e,
    middlewares: [
      async function(s2) {
        const a = await e(s2);
        return {
          marker: vr,
          ok: true,
          data: a,
          ctx: s2.ctx
        };
      }
    ]
  });
  return Kn(r._def);
}
var Xn = `
If you want to call this function on the server, you do the following:
This is a client-only function.

const caller = appRouter.createCaller({
  /* ... your context */
});

const result = await caller.call('myProcedure', input);
`.trim();
function Kn(t) {
  const e = async function(n) {
    if (!n || !("rawInput" in n))
      throw new Error(Xn);
    const s2 = async (o = {
      index: 0,
      ctx: n.ctx
    }) => {
      try {
        const i = t.middlewares[o.index];
        return await i({
          ctx: o.ctx,
          type: n.type,
          path: n.path,
          rawInput: o.rawInput ?? n.rawInput,
          meta: t.meta,
          input: o.input,
          next(u) {
            const l = u;
            return s2({
              index: o.index + 1,
              ctx: l && "ctx" in l ? {
                ...o.ctx,
                ...l.ctx
              } : o.ctx,
              input: l && "input" in l ? l.input : o.input,
              rawInput: l && "rawInput" in l ? l.rawInput : o.rawInput
            });
          }
        });
      } catch (i) {
        return {
          ok: false,
          error: Zn(i),
          marker: vr
        };
      }
    }, a = await s2();
    if (!a)
      throw new le({
        code: "INTERNAL_SERVER_ERROR",
        message: "No result from middlewares - did you forget to `return next()`?"
      });
    if (!a.ok)
      throw a.error;
    return a.data;
  };
  return e._def = t, e.meta = t.meta, e;
}
function es(...t) {
  var _a3;
  const e = _r({}, ...t.map((a) => a._def.record)), r = t.reduce((a, o) => {
    if (o._def._config.errorFormatter && o._def._config.errorFormatter !== be) {
      if (a !== be && a !== o._def._config.errorFormatter)
        throw new Error("You seem to have several error formatters");
      return o._def._config.errorFormatter;
    }
    return a;
  }, be), n = t.reduce((a, o) => {
    if (o._def._config.transformer && o._def._config.transformer !== ge) {
      if (a !== ge && a !== o._def._config.transformer)
        throw new Error("You seem to have several transformers");
      return o._def._config.transformer;
    }
    return a;
  }, ge);
  return wr({
    errorFormatter: r,
    transformer: n,
    isDev: t.some((a) => a._def._config.isDev),
    allowOutsideOfServer: t.some((a) => a._def._config.allowOutsideOfServer),
    isServer: t.some((a) => a._def._config.isServer),
    $types: (_a3 = t[0]) == null ? void 0 : _a3._def._config.$types
  })(e);
}
var Ue = class _Ue {
  context() {
    return new _Ue();
  }
  meta() {
    return new _Ue();
  }
  create(e) {
    return rs()(e);
  }
};
var ts = new Ue();
function rs() {
  return function(e) {
    var _a3, _b2;
    const r = (e == null ? void 0 : e.errorFormatter) ?? be, s2 = {
      transformer: zn((e == null ? void 0 : e.transformer) ?? ge),
      isDev: (e == null ? void 0 : e.isDev) ?? ((_b2 = (_a3 = globalThis.process) == null ? void 0 : _a3.env) == null ? void 0 : _b2.NODE_ENV) !== "production",
      allowOutsideOfServer: (e == null ? void 0 : e.allowOutsideOfServer) ?? false,
      errorFormatter: r,
      isServer: (e == null ? void 0 : e.isServer) ?? qt,
      /**
      * @internal
      */
      $types: Ct((a) => {
        throw new Error(`Tried to access "$types.${a}" which is not available at runtime`);
      })
    };
    if (!((e == null ? void 0 : e.isServer) ?? qt) && (e == null ? void 0 : e.allowOutsideOfServer) !== true)
      throw new Error("You're trying to use @trpc/server in a non-server environment. This is not supported by default.");
    return {
      /**
      * These are just types, they can't be used
      * @internal
      */
      _config: s2,
      /**
      * Builder object for creating procedures
      */
      procedure: xr({
        meta: e == null ? void 0 : e.defaultMeta
      }),
      /**
      * Create reusable middlewares
      */
      middleware: Gn(),
      /**
      * Create a router
      */
      router: wr(s2),
      /**
      * Merge Routers
      */
      mergeRouters: es
    };
  };
}
var bt = {};
var Ke = {};
var pe = {};
var O = {};
var he = R(vn);
var Rt = {};
var Tr = he;
function Er(t) {
  return Tr.observable((e) => {
    function r(s2 = 0, a = t.op) {
      const o = t.links[s2];
      if (!o)
        throw new Error("No more links to execute - did you forget to add an ending link?");
      return o({
        op: a,
        next(c) {
          return r(s2 + 1, c);
        }
      });
    }
    return r().subscribe(e);
  });
}
function Ht(t) {
  return Array.isArray(t) ? t : [
    t
  ];
}
function ns(t) {
  return (e) => {
    const r = Ht(t.true).map((s2) => s2(e)), n = Ht(t.false).map((s2) => s2(e));
    return (s2) => Tr.observable((a) => {
      const o = t.condition(s2.op) ? r : n;
      return Er({
        op: s2.op,
        links: o
      }).subscribe(a);
    });
  };
}
Rt.createChain = Er;
Rt.splitLink = ns;
var me = {};
function ss(t) {
  return t instanceof kr || /**
  * @deprecated
  * Delete in next major
  */
  t.name === "TRPCClientError";
}
var kr = class De extends Error {
  static from(e, r = {}) {
    return e instanceof Error ? ss(e) ? (r.meta && (e.meta = {
      ...e.meta,
      ...r.meta
    }), e) : new De(e.message, {
      ...r,
      cause: e,
      result: null
    }) : new De(e.error.message ?? "", {
      ...r,
      cause: void 0,
      result: e
    });
  }
  constructor(e, r) {
    var _a3, _b2;
    const n = r == null ? void 0 : r.cause;
    super(e, {
      cause: n
    }), this.meta = r == null ? void 0 : r.meta, this.cause = n, this.shape = (_a3 = r == null ? void 0 : r.result) == null ? void 0 : _a3.error, this.data = (_b2 = r == null ? void 0 : r.result) == null ? void 0 : _b2.error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, De.prototype);
  }
};
me.TRPCClientError = kr;
var as = R(On);
var z = {};
var os = me;
var Ft = (t) => typeof t == "function";
function Cr(t) {
  if (t)
    return t;
  if (typeof window < "u" && Ft(window.fetch))
    return window.fetch;
  if (typeof globalThis < "u" && Ft(globalThis.fetch))
    return globalThis.fetch;
  throw new Error("No fetch implementation found");
}
function is(t) {
  return t || (typeof window < "u" && window.AbortController ? window.AbortController : typeof globalThis < "u" && globalThis.AbortController ? globalThis.AbortController : null);
}
function cs(t) {
  return {
    url: t.url,
    fetch: t.fetch,
    AbortController: is(t.AbortController)
  };
}
function us(t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    e[r] = n;
  }
  return e;
}
var ls = {
  query: "GET",
  mutation: "POST"
};
function Rr(t) {
  return "input" in t ? t.runtime.transformer.serialize(t.input) : us(t.inputs.map((e) => t.runtime.transformer.serialize(e)));
}
var Or = (t) => {
  let e = t.url + "/" + t.path;
  const r = [];
  if ("inputs" in t && r.push("batch=1"), t.type === "query") {
    const n = Rr(t);
    n !== void 0 && r.push(`input=${encodeURIComponent(JSON.stringify(n))}`);
  }
  return r.length && (e += "?" + r.join("&")), e;
};
var Pr = (t) => {
  if (t.type === "query")
    return;
  const e = Rr(t);
  return e !== void 0 ? JSON.stringify(e) : void 0;
};
var ds = (t) => Nr({
  ...t,
  contentTypeHeader: "application/json",
  getUrl: Or,
  getBody: Pr
});
async function Sr(t, e) {
  const r = t.getUrl(t), n = t.getBody(t), { type: s2 } = t, a = await t.headers();
  if (s2 === "subscription")
    throw new Error("Subscriptions should use wsLink");
  const o = {
    ...t.contentTypeHeader ? {
      "content-type": t.contentTypeHeader
    } : {},
    ...t.batchModeHeader ? {
      "trpc-batch-mode": t.batchModeHeader
    } : {},
    ...a
  };
  return Cr(t.fetch)(r, {
    method: ls[s2],
    signal: e == null ? void 0 : e.signal,
    body: n,
    headers: o
  });
}
function Nr(t) {
  const e = t.AbortController ? new t.AbortController() : null, r = {};
  return {
    promise: new Promise((a, o) => {
      Sr(t, e).then((i) => (r.response = i, i.json())).then((i) => {
        r.responseJSON = i, a({
          json: i,
          meta: r
        });
      }).catch((i) => {
        o(os.TRPCClientError.from(i, {
          meta: r
        }));
      });
    }),
    cancel: () => {
      e == null ? void 0 : e.abort();
    }
  };
}
z.fetchHTTPResponse = Sr;
z.getBody = Pr;
z.getFetch = Cr;
z.getUrl = Or;
z.httpRequest = Nr;
z.jsonHttpRequester = ds;
z.resolveHTTPLinkOptions = cs;
var Ot = {};
var et = {};
function Jt(t) {
  return !!t && !Array.isArray(t) && typeof t == "object";
}
function fs(t, e) {
  if ("error" in t) {
    const n = e.transformer.deserialize(t.error);
    return {
      ok: false,
      error: {
        ...t,
        error: n
      }
    };
  }
  return {
    ok: true,
    result: {
      ...t.result,
      ...(!t.result.type || t.result.type === "data") && {
        type: "data",
        data: e.transformer.deserialize(t.result.data)
      }
    }
  };
}
var dt = class extends Error {
  constructor() {
    super("Unable to transform response from server");
  }
};
function ps(t, e) {
  let r;
  try {
    r = fs(t, e);
  } catch {
    throw new dt();
  }
  if (!r.ok && (!Jt(r.error.error) || typeof r.error.error.code != "number"))
    throw new dt();
  if (r.ok && !Jt(r.result))
    throw new dt();
  return r;
}
et.transformResult = ps;
var hs = he;
var ms = et;
var Gt = me;
var wt = z;
var ft = () => {
  throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new");
};
function pt(t) {
  let e = null, r = null;
  const n = () => {
    clearTimeout(r), r = null, e = null;
  };
  function s2(i) {
    var _a3, _b2;
    const c = [
      []
    ];
    let u = 0;
    for (; ; ) {
      const l = i[u];
      if (!l)
        break;
      const f = c[c.length - 1];
      if (l.aborted) {
        (_a3 = l.reject) == null ? void 0 : _a3.call(l, new Error("Aborted")), u++;
        continue;
      }
      if (t.validate(f.concat(l).map((v) => v.key))) {
        f.push(l), u++;
        continue;
      }
      if (f.length === 0) {
        (_b2 = l.reject) == null ? void 0 : _b2.call(l, new Error("Input is too big for a single dispatch")), u++;
        continue;
      }
      c.push([]);
    }
    return c;
  }
  function a() {
    const i = s2(e);
    n();
    for (const c of i) {
      if (!c.length)
        continue;
      const u = {
        items: c,
        cancel: ft
      };
      for (const v of c)
        v.batch = u;
      const l = (v, E) => {
        var _a3;
        const S2 = u.items[v];
        (_a3 = S2.resolve) == null ? void 0 : _a3.call(S2, E), S2.batch = null, S2.reject = null, S2.resolve = null;
      }, { promise: f, cancel: m } = t.fetch(u.items.map((v) => v.key), l);
      u.cancel = m, f.then((v) => {
        var _a3;
        for (let E = 0; E < v.length; E++) {
          const S2 = v[E];
          l(E, S2);
        }
        for (const E of u.items)
          (_a3 = E.reject) == null ? void 0 : _a3.call(E, new Error("Missing result")), E.batch = null;
      }).catch((v) => {
        var _a3;
        for (const E of u.items)
          (_a3 = E.reject) == null ? void 0 : _a3.call(E, v), E.batch = null;
      });
    }
  }
  function o(i) {
    const c = {
      aborted: false,
      key: i,
      batch: null,
      resolve: ft,
      reject: ft
    }, u = new Promise((f, m) => {
      c.reject = m, c.resolve = f, e || (e = []), e.push(c);
    });
    return r || (r = setTimeout(a)), {
      promise: u,
      cancel: () => {
        var _a3;
        c.aborted = true, ((_a3 = c.batch) == null ? void 0 : _a3.items.every((f) => f.aborted)) && (c.batch.cancel(), c.batch = null);
      }
    };
  }
  return {
    load: o
  };
}
function Ir(t) {
  return function(r) {
    const n = wt.resolveHTTPLinkOptions(r), s2 = r.maxURLLength ?? 1 / 0;
    return (a) => {
      const o = (f) => {
        const m = (E) => {
          if (s2 === 1 / 0)
            return true;
          const S2 = E.map((q2) => q2.path).join(","), ne = E.map((q2) => q2.input);
          return wt.getUrl({
            ...n,
            runtime: a,
            type: f,
            path: S2,
            inputs: ne
          }).length <= s2;
        }, v = t({
          ...n,
          runtime: a,
          type: f,
          opts: r
        });
        return {
          validate: m,
          fetch: v
        };
      }, i = pt(o("query")), c = pt(o("mutation")), u = pt(o("subscription")), l = {
        query: i,
        subscription: u,
        mutation: c
      };
      return ({ op: f }) => hs.observable((m) => {
        const v = l[f.type], { promise: E, cancel: S2 } = v.load(f);
        let ne;
        return E.then((A2) => {
          ne = A2;
          const q2 = ms.transformResult(A2.json, a);
          if (!q2.ok) {
            m.error(Gt.TRPCClientError.from(q2.error, {
              meta: A2.meta
            }));
            return;
          }
          m.next({
            context: A2.meta,
            result: q2.result
          }), m.complete();
        }).catch((A2) => {
          m.error(Gt.TRPCClientError.from(A2, {
            meta: ne == null ? void 0 : ne.meta
          }));
        }), () => {
          S2();
        };
      });
    };
  };
}
var ys = (t) => (e) => {
  const r = e.map((o) => o.path).join(","), n = e.map((o) => o.input), { promise: s2, cancel: a } = wt.jsonHttpRequester({
    ...t,
    path: r,
    inputs: n,
    headers() {
      return t.opts.headers ? typeof t.opts.headers == "function" ? t.opts.headers({
        opList: e
      }) : t.opts.headers : {};
    }
  });
  return {
    promise: s2.then((o) => (Array.isArray(o.json) ? o.json : e.map(() => o.json)).map((u) => ({
      meta: o.meta,
      json: u
    }))),
    cancel: a
  };
};
var gs = Ir(ys);
Ot.createHTTPBatchLink = Ir;
Ot.httpBatchLink = gs;
var tt = {};
Object.defineProperty(tt, "__esModule", { value: true });
var bs = he;
var ws = et;
var Yt = me;
var Lr = z;
function Ar(t) {
  return (e) => {
    const r = Lr.resolveHTTPLinkOptions(e);
    return (n) => ({ op: s2 }) => bs.observable((a) => {
      const { path: o, input: i, type: c } = s2, { promise: u, cancel: l } = t.requester({
        ...r,
        runtime: n,
        type: c,
        path: o,
        input: i,
        headers() {
          return e.headers ? typeof e.headers == "function" ? e.headers({
            op: s2
          }) : e.headers : {};
        }
      });
      let f;
      return u.then((m) => {
        f = m.meta;
        const v = ws.transformResult(m.json, n);
        if (!v.ok) {
          a.error(Yt.TRPCClientError.from(v.error, {
            meta: f
          }));
          return;
        }
        a.next({
          context: m.meta,
          result: v.result
        }), a.complete();
      }).catch((m) => {
        a.error(Yt.TRPCClientError.from(m, {
          meta: f
        }));
      }), () => {
        l();
      };
    });
  };
}
var _s = Ar({
  requester: Lr.jsonHttpRequester
});
tt.httpLink = _s;
tt.httpLinkFactory = Ar;
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: true });
var Qt = he;
function vs(t) {
  return typeof FormData > "u" ? false : t instanceof FormData;
}
var ht = {
  css: {
    query: [
      "72e3ff",
      "3fb0d8"
    ],
    mutation: [
      "c5a3fc",
      "904dfc"
    ],
    subscription: [
      "ff49e1",
      "d83fbe"
    ]
  },
  ansi: {
    regular: {
      // Cyan background, black and white text respectively
      query: [
        "\x1B[30;46m",
        "\x1B[97;46m"
      ],
      // Magenta background, black and white text respectively
      mutation: [
        "\x1B[30;45m",
        "\x1B[97;45m"
      ],
      // Green background, black and white text respectively
      subscription: [
        "\x1B[30;42m",
        "\x1B[97;42m"
      ]
    },
    bold: {
      query: [
        "\x1B[1;30;46m",
        "\x1B[1;97;46m"
      ],
      mutation: [
        "\x1B[1;30;45m",
        "\x1B[1;97;45m"
      ],
      subscription: [
        "\x1B[1;30;42m",
        "\x1B[1;97;42m"
      ]
    }
  }
};
function xs(t) {
  const { direction: e, type: r, path: n, id: s2, input: a } = t, o = [], i = [];
  if (t.colorMode === "ansi") {
    const [f, m] = ht.ansi.regular[r], [v, E] = ht.ansi.bold[r], S2 = "\x1B[0m";
    return o.push(e === "up" ? f : m, e === "up" ? ">>" : "<<", r, e === "up" ? v : E, `#${s2}`, n, S2), e === "up" ? i.push({
      input: t.input
    }) : i.push({
      input: t.input,
      // strip context from result cause it's too noisy in terminal wihtout collapse mode
      result: "result" in t.result ? t.result.result : t.result,
      elapsedMs: t.elapsedMs
    }), {
      parts: o,
      args: i
    };
  }
  const [c, u] = ht.css[r], l = `
    background-color: #${e === "up" ? c : u}; 
    color: ${e === "up" ? "black" : "white"};
    padding: 2px;
  `;
  return o.push("%c", e === "up" ? ">>" : "<<", r, `#${s2}`, `%c${n}%c`, "%O"), i.push(l, `${l}; font-weight: bold;`, `${l}; font-weight: normal;`), e === "up" ? i.push({
    input: a,
    context: t.context
  }) : i.push({
    input: a,
    result: t.result,
    elapsedMs: t.elapsedMs,
    context: t.context
  }), {
    parts: o,
    args: i
  };
}
var Ts = ({ c: t = console, colorMode: e = "css" }) => (r) => {
  const n = r.input, s2 = vs(n) ? Object.fromEntries(n) : n, { parts: a, args: o } = xs({
    ...r,
    colorMode: e,
    input: s2
  }), i = r.direction === "down" && r.result && (r.result instanceof Error || "error" in r.result.result) ? "error" : "log";
  t[i].apply(null, [
    a.join(" ")
  ].concat(o));
};
function Es(t = {}) {
  const { enabled: e = () => true } = t, r = t.colorMode ?? (typeof window > "u" ? "ansi" : "css"), { logger: n = Ts({
    c: t.console,
    colorMode: r
  }) } = t;
  return () => ({ op: s2, next: a }) => Qt.observable((o) => {
    e({
      ...s2,
      direction: "up"
    }) && n({
      ...s2,
      direction: "up"
    });
    const i = Date.now();
    function c(u) {
      const l = Date.now() - i;
      e({
        ...s2,
        direction: "down",
        result: u
      }) && n({
        ...s2,
        direction: "down",
        elapsedMs: l,
        result: u
      });
    }
    return a(s2).pipe(Qt.tap({
      next(u) {
        c(u);
      },
      error(u) {
        c(u);
      }
    })).subscribe(o);
  });
}
Pt.loggerLink = Es;
var rt = {};
Object.defineProperty(rt, "__esModule", { value: true });
var ks = he;
var Cs = et;
var Mr = me;
var Rs = (t) => t === 0 ? 0 : Math.min(1e3 * 2 ** t, 3e4);
function Os(t) {
  const { url: e, WebSocket: r = WebSocket, retryDelayMs: n = Rs, onOpen: s2, onClose: a } = t;
  if (!r)
    throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
  let o = [];
  const i = /* @__PURE__ */ Object.create(null);
  let c = 0, u = null, l = null, f = jt(), m = "connecting";
  function v() {
    m !== "open" || u || (u = setTimeout(() => {
      u = null, o.length === 1 ? f.send(JSON.stringify(o.pop())) : f.send(JSON.stringify(o)), o = [];
    }));
  }
  function E() {
    if (l !== null || m === "closed")
      return;
    const R2 = n(c++);
    ne(R2);
  }
  function S2() {
    m = "connecting";
    const R2 = f;
    f = jt(), A2(R2);
  }
  function ne(R2) {
    l || (m = "connecting", l = setTimeout(S2, R2));
  }
  function A2(R2) {
    Object.values(i).some((se) => se.ws === R2) || R2.close();
  }
  function q2() {
    Object.values(i).forEach((R2) => {
      R2.type === "subscription" && R2.callbacks.complete();
    });
  }
  function Mt(R2) {
    o.some((P2) => P2.id === R2.op.id) || $t(R2.op, R2.callbacks);
  }
  function jt() {
    const R2 = typeof e == "function" ? e() : e, P2 = new r(R2);
    clearTimeout(l), l = null, P2.addEventListener("open", () => {
      P2 === f && (c = 0, m = "open", s2 == null ? void 0 : s2(), v());
    }), P2.addEventListener("error", () => {
      P2 === f && E();
    });
    const se = (L) => {
      if (L.method === "reconnect" && P2 === f) {
        m === "open" && (a == null ? void 0 : a()), S2();
        for (const k of Object.values(i))
          k.type === "subscription" && Mt(k);
      }
    }, ct = (L) => {
      var _a3, _b2;
      const k = L.id !== null && i[L.id];
      if (k) {
        if ((_b2 = (_a3 = k.callbacks).next) == null ? void 0 : _b2.call(_a3, L), k.ws !== f && P2 === f) {
          const B = k.ws;
          k.ws = f, A2(B);
        }
        "result" in L && L.result.type === "stopped" && P2 === f && k.callbacks.complete();
      }
    };
    return P2.addEventListener("message", ({ data: L }) => {
      const k = JSON.parse(L);
      "method" in k ? se(k) : ct(k), (P2 !== f || m === "closed") && A2(P2);
    }), P2.addEventListener("close", ({ code: L }) => {
      var _a3, _b2, _c2, _d2;
      m === "open" && (a == null ? void 0 : a({
        code: L
      })), f === P2 && E();
      for (const [k, B] of Object.entries(i))
        if (B.ws === P2) {
          if (m === "closed") {
            delete i[k], (_b2 = (_a3 = B.callbacks).complete) == null ? void 0 : _b2.call(_a3);
            continue;
          }
          B.type === "subscription" ? Mt(B) : (delete i[k], (_d2 = (_c2 = B.callbacks).error) == null ? void 0 : _d2.call(_c2, Mr.TRPCClientError.from(new St("WebSocket closed prematurely"))));
        }
    }), P2;
  }
  function $t(R2, P2) {
    const { type: se, input: ct, path: L, id: k } = R2, B = {
      id: k,
      method: se,
      params: {
        input: ct,
        path: L
      }
    };
    return i[k] = {
      ws: f,
      type: se,
      callbacks: P2,
      op: R2
    }, o.push(B), v(), () => {
      var _a3, _b2;
      const nn = (_a3 = i[k]) == null ? void 0 : _a3.callbacks;
      delete i[k], o = o.filter((sn) => sn.id !== k), (_b2 = nn == null ? void 0 : nn.complete) == null ? void 0 : _b2.call(nn), f.readyState === r.OPEN && R2.type === "subscription" && (o.push({
        id: k,
        method: "subscription.stop"
      }), v());
    };
  }
  return {
    close: () => {
      m = "closed", a == null ? void 0 : a(), q2(), A2(f), clearTimeout(l), l = null;
    },
    request: $t,
    getConnection() {
      return f;
    }
  };
}
var St = class _St extends Error {
  constructor(e) {
    super(e), this.name = "TRPCWebSocketClosedError", Object.setPrototypeOf(this, _St.prototype);
  }
};
function Ps(t) {
  return (e) => {
    const { client: r } = t;
    return ({ op: n }) => ks.observable((s2) => {
      const { type: a, path: o, id: i, context: c } = n, u = e.transformer.serialize(n.input), l = r.request({
        type: a,
        path: o,
        input: u,
        id: i,
        context: c
      }, {
        error(f) {
          s2.error(f), l();
        },
        complete() {
          s2.complete();
        },
        next(f) {
          const m = Cs.transformResult(f, e);
          if (!m.ok) {
            s2.error(Mr.TRPCClientError.from(m.error));
            return;
          }
          s2.next({
            result: m.result
          }), n.type !== "subscription" && (l(), s2.complete());
        }
      });
      return () => {
        l();
      };
    });
  };
}
rt.createWSClient = Os;
rt.wsLink = Ps;
Object.defineProperty(O, "__esModule", { value: true });
var Xt = he;
var jr = Rt;
var $r = me;
var Kt = as;
var we = z;
var Dr = Ot;
var Nt = tt;
var Ss = Pt;
var Zr = rt;
var nt = class {
  $request({ type: e, input: r, path: n, context: s2 = {} }) {
    return jr.createChain({
      links: this.links,
      op: {
        id: ++this.requestId,
        type: e,
        path: n,
        input: r,
        context: s2
      }
    }).pipe(Xt.share());
  }
  requestAsPromise(e) {
    const r = this.$request(e), { promise: n, abort: s2 } = Xt.observableToPromise(r);
    return new Promise((o, i) => {
      var _a3;
      (_a3 = e.signal) == null ? void 0 : _a3.addEventListener("abort", s2), n.then((c) => {
        o(c.result.data);
      }).catch((c) => {
        i($r.TRPCClientError.from(c));
      });
    });
  }
  query(e, r, n) {
    return this.requestAsPromise({
      type: "query",
      path: e,
      input: r,
      context: n == null ? void 0 : n.context,
      signal: n == null ? void 0 : n.signal
    });
  }
  mutation(e, r, n) {
    return this.requestAsPromise({
      type: "mutation",
      path: e,
      input: r,
      context: n == null ? void 0 : n.context,
      signal: n == null ? void 0 : n.signal
    });
  }
  subscription(e, r, n) {
    return this.$request({
      type: "subscription",
      path: e,
      input: r,
      context: n == null ? void 0 : n.context
    }).subscribe({
      next(a) {
        var _a3, _b2, _c2;
        a.result.type === "started" ? (_a3 = n.onStarted) == null ? void 0 : _a3.call(n) : a.result.type === "stopped" ? (_b2 = n.onStopped) == null ? void 0 : _b2.call(n) : (_c2 = n.onData) == null ? void 0 : _c2.call(n, a.result.data);
      },
      error(a) {
        var _a3;
        (_a3 = n.onError) == null ? void 0 : _a3.call(n, a);
      },
      complete() {
        var _a3;
        (_a3 = n.onComplete) == null ? void 0 : _a3.call(n);
      }
    });
  }
  constructor(e) {
    this.requestId = 0;
    const r = (() => {
      const n = e.transformer;
      return n ? "input" in n ? e.transformer : {
        input: n,
        output: n
      } : {
        input: {
          serialize: (s2) => s2,
          deserialize: (s2) => s2
        },
        output: {
          serialize: (s2) => s2,
          deserialize: (s2) => s2
        }
      };
    })();
    this.runtime = {
      transformer: {
        serialize: (n) => r.input.serialize(n),
        deserialize: (n) => r.output.deserialize(n)
      },
      combinedTransformer: r
    }, this.links = e.links.map((n) => n(this.runtime));
  }
};
function Ns(t) {
  return new nt(t);
}
function Is(t) {
  return new nt(t);
}
var Ls = {
  query: "query",
  mutate: "mutation",
  subscribe: "subscription"
};
var Ur = (t) => Ls[t];
function Wr(t) {
  return Kt.createFlatProxy((e) => t.hasOwnProperty(e) ? t[e] : e === "__untypedClient" ? t : Kt.createRecursiveProxy(({ path: r, args: n }) => {
    const s2 = [
      e,
      ...r
    ], a = Ur(s2.pop()), o = s2.join(".");
    return t[a](o, ...n);
  }));
}
function As(t) {
  const e = new nt(t);
  return Wr(e);
}
function Ms(t) {
  return t.__untypedClient;
}
function js(t) {
  if (t)
    return t;
  if (typeof window < "u" && window.TextDecoder)
    return new window.TextDecoder();
  if (typeof globalThis < "u" && globalThis.TextDecoder)
    return new globalThis.TextDecoder();
  throw new Error("No TextDecoder implementation found");
}
async function $s(t) {
  const e = t.parse ?? JSON.parse, r = (n) => {
    var _a3;
    if (((_a3 = t.signal) == null ? void 0 : _a3.aborted) || !n || n === "}")
      return;
    const s2 = n.indexOf(":"), a = n.substring(2, s2 - 1), o = n.substring(s2 + 1);
    t.onSingle(Number(a), e(o));
  };
  await Ds(t.readableStream, r, t.textDecoder);
}
async function Ds(t, e, r) {
  let n = "";
  const s2 = (a) => {
    const i = r.decode(a).split(`
`);
    if (i.length === 1)
      n += i[0];
    else if (i.length > 1) {
      e(n + i[0]);
      for (let c = 1; c < i.length - 1; c++)
        e(i[c]);
      n = i[i.length - 1];
    }
  };
  "getReader" in t ? await Us(t, s2) : await Zs(t, s2), e(n);
}
function Zs(t, e) {
  return new Promise((r) => {
    t.on("data", e), t.on("end", r);
  });
}
async function Us(t, e) {
  const r = t.getReader();
  let n = await r.read();
  for (; !n.done; )
    e(n.value), n = await r.read();
}
var Ws = (t, e) => {
  const r = t.AbortController ? new t.AbortController() : null, n = we.fetchHTTPResponse({
    ...t,
    contentTypeHeader: "application/json",
    batchModeHeader: "stream",
    getUrl: we.getUrl,
    getBody: we.getBody
  }, r), s2 = () => r == null ? void 0 : r.abort(), a = n.then(async (o) => {
    if (!o.body)
      throw new Error("Received response without body");
    const i = {
      response: o
    };
    return $s({
      readableStream: o.body,
      onSingle: e,
      parse: (c) => ({
        json: JSON.parse(c),
        meta: i
      }),
      signal: r == null ? void 0 : r.signal,
      textDecoder: t.textDecoder
    });
  });
  return {
    cancel: s2,
    promise: a
  };
};
var zs = (t) => {
  const e = js(t.opts.textDecoder);
  return (r, n) => {
    const s2 = r.map((c) => c.path).join(","), a = r.map((c) => c.input), { cancel: o, promise: i } = Ws({
      ...t,
      textDecoder: e,
      path: s2,
      inputs: a,
      headers() {
        return t.opts.headers ? typeof t.opts.headers == "function" ? t.opts.headers({
          opList: r
        }) : t.opts.headers : {};
      }
    }, (c, u) => {
      n(c, u);
    });
    return {
      /**
      * return an empty array because the batchLoader expects an array of results
      * but we've already called the `unitResolver` for each of them, there's
      * nothing left to do here.
      */
      promise: i.then(() => []),
      cancel: o
    };
  };
};
var qs = Dr.createHTTPBatchLink(zs);
var Bs = (t) => {
  if ("input" in t) {
    if (!(t.input instanceof FormData))
      throw new Error("Input is not FormData");
    return t.input;
  }
};
var Vs = (t) => {
  if (t.type !== "mutation")
    throw new Error("We only handle mutations with formdata");
  return we.httpRequest({
    ...t,
    getUrl() {
      return `${t.url}/${t.path}`;
    },
    getBody: Bs
  });
};
var Hs = Nt.httpLinkFactory({
  requester: Vs
});
O.splitLink = jr.splitLink;
O.TRPCClientError = $r.TRPCClientError;
O.getFetch = we.getFetch;
O.httpBatchLink = Dr.httpBatchLink;
O.httpLink = Nt.httpLink;
O.httpLinkFactory = Nt.httpLinkFactory;
O.loggerLink = Ss.loggerLink;
O.createWSClient = Zr.createWSClient;
O.wsLink = Zr.wsLink;
O.TRPCUntypedClient = nt;
O.clientCallTypeToProcedureType = Ur;
O.createTRPCClient = Is;
O.createTRPCClientProxy = Wr;
O.createTRPCProxyClient = As;
O.createTRPCUntypedClient = Ns;
O.experimental_formDataLink = Hs;
O.getUntypedClient = Ms;
O.unstable_httpBatchStreamLink = qs;
var X = {};
var It = {};
function Fs(t) {
  return t;
}
function Js(t) {
  return t.length === 0 ? Fs : t.length === 1 ? t[0] : function(r) {
    return t.reduce((n, s2) => s2(n), r);
  };
}
function Gs(t) {
  return typeof t == "object" && t !== null && "subscribe" in t;
}
function Ys(t) {
  const e = {
    subscribe(r) {
      let n = null, s2 = false, a = false, o = false;
      function i() {
        if (n === null) {
          o = true;
          return;
        }
        a || (a = true, typeof n == "function" ? n() : n && n.unsubscribe());
      }
      return n = t({
        next(c) {
          var _a3;
          s2 || ((_a3 = r.next) == null ? void 0 : _a3.call(r, c));
        },
        error(c) {
          var _a3;
          s2 || (s2 = true, (_a3 = r.error) == null ? void 0 : _a3.call(r, c), i());
        },
        complete() {
          var _a3;
          s2 || (s2 = true, (_a3 = r.complete) == null ? void 0 : _a3.call(r), i());
        }
      }), o && i(), {
        unsubscribe: i
      };
    },
    pipe(...r) {
      return Js(r)(e);
    }
  };
  return e;
}
It.isObservable = Gs;
It.observable = Ys;
Object.defineProperty(X, "__esModule", { value: true });
var zr = It;
function Qs(t) {
  return (e) => {
    let r = 0, n = null;
    const s2 = [];
    function a() {
      n || (n = e.subscribe({
        next(i) {
          var _a3;
          for (const c of s2)
            (_a3 = c.next) == null ? void 0 : _a3.call(c, i);
        },
        error(i) {
          var _a3;
          for (const c of s2)
            (_a3 = c.error) == null ? void 0 : _a3.call(c, i);
        },
        complete() {
          var _a3;
          for (const i of s2)
            (_a3 = i.complete) == null ? void 0 : _a3.call(i);
        }
      }));
    }
    function o() {
      if (r === 0 && n) {
        const i = n;
        n = null, i.unsubscribe();
      }
    }
    return {
      subscribe(i) {
        return r++, s2.push(i), a(), {
          unsubscribe() {
            r--, o();
            const c = s2.findIndex((u) => u === i);
            c > -1 && s2.splice(c, 1);
          }
        };
      }
    };
  };
}
function Xs(t) {
  return (e) => ({
    subscribe(r) {
      let n = 0;
      return e.subscribe({
        next(a) {
          var _a3;
          (_a3 = r.next) == null ? void 0 : _a3.call(r, t(a, n++));
        },
        error(a) {
          var _a3;
          (_a3 = r.error) == null ? void 0 : _a3.call(r, a);
        },
        complete() {
          var _a3;
          (_a3 = r.complete) == null ? void 0 : _a3.call(r);
        }
      });
    }
  });
}
function Ks(t) {
  return (e) => ({
    subscribe(r) {
      return e.subscribe({
        next(n) {
          var _a3, _b2;
          (_a3 = t.next) == null ? void 0 : _a3.call(t, n), (_b2 = r.next) == null ? void 0 : _b2.call(r, n);
        },
        error(n) {
          var _a3, _b2;
          (_a3 = t.error) == null ? void 0 : _a3.call(t, n), (_b2 = r.error) == null ? void 0 : _b2.call(r, n);
        },
        complete() {
          var _a3, _b2;
          (_a3 = t.complete) == null ? void 0 : _a3.call(t), (_b2 = r.complete) == null ? void 0 : _b2.call(r);
        }
      });
    }
  });
}
var Lt = class _Lt extends Error {
  constructor(e) {
    super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, _Lt.prototype);
  }
};
function ea(t) {
  let e;
  return {
    promise: new Promise((n, s2) => {
      let a = false;
      function o() {
        a || (a = true, s2(new Lt("This operation was aborted.")), i.unsubscribe());
      }
      const i = t.subscribe({
        next(c) {
          a = true, n(c), o();
        },
        error(c) {
          a = true, s2(c), o();
        },
        complete() {
          a = true, o();
        }
      });
      e = o;
    }),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    abort: e
  };
}
X.isObservable = zr.isObservable;
X.observable = zr.observable;
X.map = Xs;
X.observableToPromise = ea;
X.share = Qs;
X.tap = Ks;
var Z = {};
Object.defineProperty(Z, "__esModule", { value: true });
Z.isTRPCRequestWithId = Z.isTRPCRequest = Z.isTRPCResponse = Z.isTRPCMessage = void 0;
function er(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function ta(t) {
  return t == null;
}
function qr(t) {
  return !!(er(t) && "trpc" in t && er(t.trpc));
}
Z.isTRPCMessage = qr;
function At(t) {
  return qr(t) && "id" in t.trpc && !ta(t.trpc.id);
}
function ra(t) {
  return At(t) && ("error" in t.trpc || "result" in t.trpc);
}
Z.isTRPCResponse = ra;
function Br(t) {
  return At(t) && "method" in t.trpc;
}
Z.isTRPCRequest = Br;
function na(t) {
  return Br(t) && At(t);
}
Z.isTRPCRequestWithId = na;
Object.defineProperty(pe, "__esModule", { value: true });
pe.createBaseLink = void 0;
var mt = O;
var sa = X;
var aa = Z;
var oa = (t) => (e) => ({ op: r }) => (0, sa.observable)((n) => {
  const s2 = [], { id: a, type: o, path: i } = r;
  try {
    const c = e.transformer.serialize(r.input), u = () => {
      n.error(new mt.TRPCClientError("Port disconnected prematurely"));
    };
    t.addCloseListener(u), s2.push(() => t.removeCloseListener(u));
    const l = (f) => {
      if (!(0, aa.isTRPCResponse)(f))
        return;
      const { trpc: m } = f;
      if (a === m.id) {
        if ("error" in m) {
          const v = e.transformer.deserialize(m.error);
          n.error(mt.TRPCClientError.from(Object.assign(Object.assign({}, m), { error: v })));
          return;
        }
        n.next({
          result: Object.assign(Object.assign({}, m.result), (!m.result.type || m.result.type === "data") && {
            type: "data",
            data: e.transformer.deserialize(m.result.data)
          })
        }), (o !== "subscription" || m.result.type === "stopped") && n.complete();
      }
    };
    t.addMessageListener(l), s2.push(() => t.removeMessageListener(l)), t.postMessage({
      trpc: {
        id: a,
        jsonrpc: void 0,
        method: o,
        params: { path: i, input: c }
      }
    });
  } catch (c) {
    n.error(new mt.TRPCClientError(c instanceof Error ? c.message : "Unknown error"));
  }
  return () => {
    o === "subscription" && t.postMessage({
      trpc: {
        id: a,
        jsonrpc: void 0,
        method: "subscription.stop"
      }
    }), s2.forEach((c) => c());
  };
});
pe.createBaseLink = oa;
Object.defineProperty(Ke, "__esModule", { value: true });
Ke.chromeLink = void 0;
var ia = pe;
var ca = (t) => (0, ia.createBaseLink)({
  postMessage(e) {
    t.port.postMessage(e);
  },
  addMessageListener(e) {
    t.port.onMessage.addListener(e);
  },
  removeMessageListener(e) {
    t.port.onMessage.removeListener(e);
  },
  addCloseListener(e) {
    t.port.onDisconnect.addListener(e);
  },
  removeCloseListener(e) {
    t.port.onDisconnect.removeListener(e);
  }
});
Ke.chromeLink = ca;
var st = {};
Object.defineProperty(st, "__esModule", { value: true });
st.windowLink = void 0;
var ua = pe;
var la = (t) => {
  var e;
  const r = /* @__PURE__ */ new Map(), n = t.window, s2 = (e = t.postWindow) !== null && e !== void 0 ? e : n;
  return (0, ua.createBaseLink)({
    postMessage(a) {
      s2.postMessage(a, {
        targetOrigin: t.postOrigin
      });
    },
    addMessageListener(a) {
      const o = (i) => {
        a(i.data);
      };
      r.set(a, o), n.addEventListener("message", o);
    },
    removeMessageListener(a) {
      const o = r.get(a);
      o && n.removeEventListener("message", o);
    },
    addCloseListener(a) {
      n.addEventListener("beforeunload", a);
    },
    removeCloseListener(a) {
      n.removeEventListener("beforeunload", a);
    }
  });
};
st.windowLink = la;
var at = {};
var ot = {};
Object.defineProperty(ot, "__esModule", { value: true });
ot.TRPC_BROWSER_LOADED_EVENT = void 0;
ot.TRPC_BROWSER_LOADED_EVENT = "TRPC_BROWSER::POPUP_LOADED";
Object.defineProperty(at, "__esModule", { value: true });
at.popupLink = void 0;
var da = ot;
var fa = pe;
var pa = (t) => {
  const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  let n = null;
  async function s2(a) {
    if (!n || n.closed) {
      n = t.createPopup(), await Promise.race([
        // wait til window is loaded (same origin)
        new Promise((o) => {
          var i;
          try {
            (i = n == null ? void 0 : n.addEventListener) === null || i === void 0 || i.call(n, "load", o);
          } catch {
          }
        }),
        // this is needed for cross-origin popups as they don't have a load event
        new Promise((o) => {
          a.addEventListener("message", (i) => {
            i.data === da.TRPC_BROWSER_LOADED_EVENT && o();
          });
        }),
        // expect the popup to load after 15s max, in case non of the above events fire
        new Promise((o) => {
          console.warn("Could not detect if popup loading succeeded after 15s timeout, continuing anyway"), setTimeout(o, 15e3);
        })
      ]);
      try {
        if (!n.addEventListener)
          throw new Error("popupWindow.addEventListener is not a function");
        n.addEventListener("beforeunload", () => {
          n = null;
        });
      } catch {
        const i = setInterval(() => {
          n && n.closed && (n = null, r.forEach((c) => {
            c();
          }), clearInterval(i));
        }, 1e3);
      }
    }
    return n;
  }
  return (0, fa.createBaseLink)({
    async postMessage(a) {
      return (await s2(t.listenWindow)).postMessage(a, {
        targetOrigin: t.postOrigin
      });
    },
    addMessageListener(a) {
      const o = (i) => {
        a(i.data);
      };
      e.set(a, o), t.listenWindow.addEventListener("message", o);
    },
    removeMessageListener(a) {
      const o = e.get(a);
      o && t.listenWindow.removeEventListener("message", o);
    },
    addCloseListener(a) {
      t.listenWindow.addEventListener("beforeunload", a), r.add(a);
    },
    removeCloseListener(a) {
      t.listenWindow.removeEventListener("beforeunload", a), r.delete(a);
    }
  });
};
at.popupLink = pa;
(function(t) {
  var e = F && F.__createBinding || (Object.create ? function(n, s2, a, o) {
    o === void 0 && (o = a);
    var i = Object.getOwnPropertyDescriptor(s2, a);
    (!i || ("get" in i ? !s2.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return s2[a];
    } }), Object.defineProperty(n, o, i);
  } : function(n, s2, a, o) {
    o === void 0 && (o = a), n[o] = s2[a];
  }), r = F && F.__exportStar || function(n, s2) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s2, a) && e(s2, n, a);
  };
  Object.defineProperty(t, "__esModule", { value: true }), r(Ke, t), r(st, t), r(at, t);
})(bt);
var T2;
(function(t) {
  t.assertEqual = (s2) => s2;
  function e(s2) {
  }
  t.assertIs = e;
  function r(s2) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s2) => {
    const a = {};
    for (const o of s2)
      a[o] = o;
    return a;
  }, t.getValidEnumValues = (s2) => {
    const a = t.objectKeys(s2).filter((i) => typeof s2[s2[i]] != "number"), o = {};
    for (const i of a)
      o[i] = s2[i];
    return t.objectValues(o);
  }, t.objectValues = (s2) => t.objectKeys(s2).map(function(a) {
    return s2[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (s2) => Object.keys(s2) : (s2) => {
    const a = [];
    for (const o in s2)
      Object.prototype.hasOwnProperty.call(s2, o) && a.push(o);
    return a;
  }, t.find = (s2, a) => {
    for (const o of s2)
      if (a(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s2) => Number.isInteger(s2) : (s2) => typeof s2 == "number" && isFinite(s2) && Math.floor(s2) === s2;
  function n(s2, a = " | ") {
    return s2.map((o) => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s2, a) => typeof a == "bigint" ? a.toString() : a;
})(T2 || (T2 = {}));
var h = T2.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var G = (t) => {
  switch (typeof t) {
    case "undefined":
      return h.undefined;
    case "string":
      return h.string;
    case "number":
      return isNaN(t) ? h.nan : h.number;
    case "boolean":
      return h.boolean;
    case "function":
      return h.function;
    case "bigint":
      return h.bigint;
    case "symbol":
      return h.symbol;
    case "object":
      return Array.isArray(t) ? h.array : t === null ? h.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? h.promise : typeof Map < "u" && t instanceof Map ? h.map : typeof Set < "u" && t instanceof Set ? h.set : typeof Date < "u" && t instanceof Date ? h.date : h.object;
    default:
      return h.unknown;
  }
};
var d = T2.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var ha = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
var V = class extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(a) {
      return a.message;
    }, n = { _errors: [] }, s2 = (a) => {
      for (const o of a.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s2);
        else if (o.code === "invalid_return_type")
          s2(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s2(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let i = n, c = 0;
          for (; c < o.path.length; ) {
            const u = o.path[c];
            c === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], c++;
          }
        }
    };
    return s2(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, T2.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s2 of this.issues)
      s2.path.length > 0 ? (r[s2.path[0]] = r[s2.path[0]] || [], r[s2.path[0]].push(e(s2))) : n.push(e(s2));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
};
V.create = (t) => new V(t);
var xe = (t, e) => {
  let r;
  switch (t.code) {
    case d.invalid_type:
      t.received === h.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case d.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, T2.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${T2.joinValues(t.keys, ", ")}`;
      break;
    case d.invalid_union:
      r = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${T2.joinValues(t.options)}`;
      break;
    case d.invalid_enum_value:
      r = `Invalid enum value. Expected ${T2.joinValues(t.options)}, received '${t.received}'`;
      break;
    case d.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case d.invalid_return_type:
      r = "Invalid function return type";
      break;
    case d.invalid_date:
      r = "Invalid date";
      break;
    case d.invalid_string:
      typeof t.validation == "object" ? "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : T2.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case d.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(t.minimum)}` : r = "Invalid input";
      break;
    case d.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(t.maximum)}` : r = "Invalid input";
      break;
    case d.custom:
      r = "Invalid input";
      break;
    case d.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case d.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case d.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, T2.assertNever(t);
  }
  return { message: r };
};
var Vr = xe;
function ma(t) {
  Vr = t;
}
function We() {
  return Vr;
}
var ze = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s2 } = t, a = [...r, ...s2.path || []], o = {
    ...s2,
    path: a
  };
  let i = "";
  const c = n.filter((u) => !!u).slice().reverse();
  for (const u of c)
    i = u(o, { data: e, defaultError: i }).message;
  return {
    ...s2,
    path: a,
    message: s2.message || i
  };
};
var ya = [];
function y(t, e) {
  const r = ze({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      We(),
      xe
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
var I = class _I {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s2 of r) {
      if (s2.status === "aborted")
        return b;
      s2.status === "dirty" && e.dirty(), n.push(s2.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s2 of r)
      n.push({
        key: await s2.key,
        value: await s2.value
      });
    return _I.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s2 of r) {
      const { key: a, value: o } = s2;
      if (a.status === "aborted" || o.status === "aborted")
        return b;
      a.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), (typeof o.value < "u" || s2.alwaysSet) && (n[a.value] = o.value);
    }
    return { status: e.value, value: n };
  }
};
var b = Object.freeze({
  status: "aborted"
});
var Hr = (t) => ({ status: "dirty", value: t });
var N = (t) => ({ status: "valid", value: t });
var _t = (t) => t.status === "aborted";
var vt = (t) => t.status === "dirty";
var qe = (t) => t.status === "valid";
var Be = (t) => typeof Promise < "u" && t instanceof Promise;
var x;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(x || (x = {}));
var U2 = class {
  constructor(e, r, n, s2) {
    this.parent = e, this.data = r, this._path = n, this._key = s2;
  }
  get path() {
    return this._path.concat(this._key);
  }
};
var tr = (t, e) => {
  if (qe(e))
    return { success: true, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return { success: false, error: new V(t.common.issues) };
};
function w(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s2 } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s2 } : { errorMap: (o, i) => o.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: n ?? i.defaultError } : { message: r ?? i.defaultError }, description: s2 };
}
var _ = class {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return G(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: G(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new I(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: G(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Be(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const s2 = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : false,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: G(e)
    }, a = this._parseSync({ data: e, path: s2.path, parent: s2 });
    return tr(s2, a);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: true
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: G(e)
    }, s2 = this._parse({ data: e, path: n.path, parent: n }), a = await (Be(s2) ? s2 : Promise.resolve(s2));
    return tr(n, a);
  }
  refine(e, r) {
    const n = (s2) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s2) : r;
    return this._refinement((s2, a) => {
      const o = e(s2), i = () => a.addIssue({
        code: d.custom,
        ...n(s2)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? true : (i(), false)) : o ? true : (i(), false);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s2) => e(n) ? true : (s2.addIssue(typeof r == "function" ? r(n, s2) : r), false));
  }
  _refinement(e) {
    return new D({
      schema: this,
      typeName: g.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return H.create(this, this._def);
  }
  nullable() {
    return re.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $.create(this, this._def);
  }
  promise() {
    return fe.create(this, this._def);
  }
  or(e) {
    return Re.create([this, e], this._def);
  }
  and(e) {
    return Oe.create(this, e, this._def);
  }
  transform(e) {
    return new D({
      ...w(this._def),
      schema: this,
      typeName: g.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Le({
      ...w(this._def),
      innerType: this,
      defaultValue: r,
      typeName: g.ZodDefault
    });
  }
  brand() {
    return new Jr({
      typeName: g.ZodBranded,
      type: this,
      ...w(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ge({
      ...w(this._def),
      innerType: this,
      catchValue: r,
      typeName: g.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Ae.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var ga = /^c[^\s-]{8,}$/i;
var ba = /^[a-z][a-z0-9]*$/;
var wa = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var _a2 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/;
var va = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
var F2 = class _F extends _ {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s2) => e.test(s2), {
      validation: r,
      code: d.invalid_string,
      ...x.errToObj(n)
    }), this.nonempty = (e) => this.min(1, x.errToObj(e)), this.trim = () => new _F({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== h.string) {
      const a = this._getOrReturnCtx(e);
      return y(
        a,
        {
          code: d.invalid_type,
          expected: h.string,
          received: a.parsedType
        }
        //
      ), b;
    }
    const n = new I();
    let s2;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: true,
          exact: false,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: true,
          exact: false,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const o = e.data.length > a.value, i = e.data.length < a.value;
        (o || i) && (s2 = this._getOrReturnCtx(e, s2), o ? y(s2, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: true,
          exact: true,
          message: a.message
        }) : i && y(s2, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: true,
          exact: true,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        _a2.test(e.data) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          validation: "email",
          code: d.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        wa.test(e.data) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          validation: "uuid",
          code: d.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        ga.test(e.data) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          validation: "cuid",
          code: d.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        ba.test(e.data) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          validation: "cuid2",
          code: d.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s2 = this._getOrReturnCtx(e, s2), y(s2, {
            validation: "url",
            code: d.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          validation: "regex",
          code: d.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          code: d.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          code: d.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? va(a).test(e.data) || (s2 = this._getOrReturnCtx(e, s2), y(s2, {
          code: d.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : T2.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new _F({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...x.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...x.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...x.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...x.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...x.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: false,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : false,
      ...x.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...x.errToObj(r)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...x.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...x.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...x.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...x.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...x.errToObj(r)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
};
F2.create = (t) => {
  var e;
  return new F2({
    checks: [],
    typeName: g.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false,
    ...w(t)
  });
};
function xa(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s2 = r > n ? r : n, a = parseInt(t.toFixed(s2).replace(".", "")), o = parseInt(e.toFixed(s2).replace(".", ""));
  return a % o / Math.pow(10, s2);
}
var Y = class _Y extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== h.number) {
      const a = this._getOrReturnCtx(e);
      return y(a, {
        code: d.invalid_type,
        expected: h.number,
        received: a.parsedType
      }), b;
    }
    let n;
    const s2 = new I();
    for (const a of this._def.checks)
      a.kind === "int" ? T2.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), y(n, {
        code: d.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s2.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), y(n, {
        code: d.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: false,
        message: a.message
      }), s2.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), y(n, {
        code: d.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: false,
        message: a.message
      }), s2.dirty()) : a.kind === "multipleOf" ? xa(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), y(n, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s2.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), y(n, {
        code: d.not_finite,
        message: a.message
      }), s2.dirty()) : T2.assertNever(a);
    return { status: s2.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, true, x.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, false, x.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, true, x.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, false, x.toString(r));
  }
  setLimit(e, r, n, s2) {
    return new _Y({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: x.toString(s2)
        }
      ]
    });
  }
  _addCheck(e) {
    return new _Y({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: x.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: x.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: x.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: x.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: x.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: x.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: x.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && T2.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return true;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
};
Y.create = (t) => new Y({
  checks: [],
  typeName: g.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || false,
  ...w(t)
});
var Te = class extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== h.bigint) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.bigint,
        received: n.parsedType
      }), b;
    }
    return N(e.data);
  }
};
Te.create = (t) => {
  var e;
  return new Te({
    typeName: g.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false,
    ...w(t)
  });
};
var Ee = class extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== h.boolean) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.boolean,
        received: n.parsedType
      }), b;
    }
    return N(e.data);
  }
};
Ee.create = (t) => new Ee({
  typeName: g.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || false,
  ...w(t)
});
var ee = class _ee extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== h.date) {
      const a = this._getOrReturnCtx(e);
      return y(a, {
        code: d.invalid_type,
        expected: h.date,
        received: a.parsedType
      }), b;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return y(a, {
        code: d.invalid_date
      }), b;
    }
    const n = new I();
    let s2;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s2 = this._getOrReturnCtx(e, s2), y(s2, {
        code: d.too_small,
        message: a.message,
        inclusive: true,
        exact: false,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s2 = this._getOrReturnCtx(e, s2), y(s2, {
        code: d.too_big,
        message: a.message,
        inclusive: true,
        exact: false,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : T2.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new _ee({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: x.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: x.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
};
ee.create = (t) => new ee({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || false,
  typeName: g.ZodDate,
  ...w(t)
});
var Ve = class extends _ {
  _parse(e) {
    if (this._getType(e) !== h.symbol) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.symbol,
        received: n.parsedType
      }), b;
    }
    return N(e.data);
  }
};
Ve.create = (t) => new Ve({
  typeName: g.ZodSymbol,
  ...w(t)
});
var ke = class extends _ {
  _parse(e) {
    if (this._getType(e) !== h.undefined) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.undefined,
        received: n.parsedType
      }), b;
    }
    return N(e.data);
  }
};
ke.create = (t) => new ke({
  typeName: g.ZodUndefined,
  ...w(t)
});
var Ce = class extends _ {
  _parse(e) {
    if (this._getType(e) !== h.null) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.null,
        received: n.parsedType
      }), b;
    }
    return N(e.data);
  }
};
Ce.create = (t) => new Ce({
  typeName: g.ZodNull,
  ...w(t)
});
var de = class extends _ {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e) {
    return N(e.data);
  }
};
de.create = (t) => new de({
  typeName: g.ZodAny,
  ...w(t)
});
var K = class extends _ {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e) {
    return N(e.data);
  }
};
K.create = (t) => new K({
  typeName: g.ZodUnknown,
  ...w(t)
});
var J = class extends _ {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return y(r, {
      code: d.invalid_type,
      expected: h.never,
      received: r.parsedType
    }), b;
  }
};
J.create = (t) => new J({
  typeName: g.ZodNever,
  ...w(t)
});
var He = class extends _ {
  _parse(e) {
    if (this._getType(e) !== h.undefined) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.void,
        received: n.parsedType
      }), b;
    }
    return N(e.data);
  }
};
He.create = (t) => new He({
  typeName: g.ZodVoid,
  ...w(t)
});
var $ = class _$ extends _ {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s2 = this._def;
    if (r.parsedType !== h.array)
      return y(r, {
        code: d.invalid_type,
        expected: h.array,
        received: r.parsedType
      }), b;
    if (s2.exactLength !== null) {
      const o = r.data.length > s2.exactLength.value, i = r.data.length < s2.exactLength.value;
      (o || i) && (y(r, {
        code: o ? d.too_big : d.too_small,
        minimum: i ? s2.exactLength.value : void 0,
        maximum: o ? s2.exactLength.value : void 0,
        type: "array",
        inclusive: true,
        exact: true,
        message: s2.exactLength.message
      }), n.dirty());
    }
    if (s2.minLength !== null && r.data.length < s2.minLength.value && (y(r, {
      code: d.too_small,
      minimum: s2.minLength.value,
      type: "array",
      inclusive: true,
      exact: false,
      message: s2.minLength.message
    }), n.dirty()), s2.maxLength !== null && r.data.length > s2.maxLength.value && (y(r, {
      code: d.too_big,
      maximum: s2.maxLength.value,
      type: "array",
      inclusive: true,
      exact: false,
      message: s2.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => s2.type._parseAsync(new U2(r, o, r.path, i)))).then((o) => I.mergeArray(n, o));
    const a = [...r.data].map((o, i) => s2.type._parseSync(new U2(r, o, r.path, i)));
    return I.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new _$({
      ...this._def,
      minLength: { value: e, message: x.toString(r) }
    });
  }
  max(e, r) {
    return new _$({
      ...this._def,
      maxLength: { value: e, message: x.toString(r) }
    });
  }
  length(e, r) {
    return new _$({
      ...this._def,
      exactLength: { value: e, message: x.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
$.create = (t, e) => new $({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: g.ZodArray,
  ...w(e)
});
var Fe;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Fe || (Fe = {}));
function ie(t) {
  if (t instanceof C) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = H.create(ie(n));
    }
    return new C({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof $ ? $.create(ie(t.element)) : t instanceof H ? H.create(ie(t.unwrap())) : t instanceof re ? re.create(ie(t.unwrap())) : t instanceof W ? W.create(t.items.map((e) => ie(e))) : t;
}
var C = class _C extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = T2.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== h.object) {
      const u = this._getOrReturnCtx(e);
      return y(u, {
        code: d.invalid_type,
        expected: h.object,
        received: u.parsedType
      }), b;
    }
    const { status: n, ctx: s2 } = this._processInputParams(e), { shape: a, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof J && this._def.unknownKeys === "strip"))
      for (const u in s2.data)
        o.includes(u) || i.push(u);
    const c = [];
    for (const u of o) {
      const l = a[u], f = s2.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: l._parse(new U2(s2, f, s2.path, u)),
        alwaysSet: u in s2.data
      });
    }
    if (this._def.catchall instanceof J) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const l of i)
          c.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: s2.data[l] }
          });
      else if (u === "strict")
        i.length > 0 && (y(s2, {
          code: d.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const l of i) {
        const f = s2.data[l];
        c.push({
          key: { status: "valid", value: l },
          value: u._parse(
            new U2(s2, f, s2.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in s2.data
        });
      }
    }
    return s2.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const l of c) {
        const f = await l.key;
        u.push({
          key: f,
          value: await l.value,
          alwaysSet: l.alwaysSet
        });
      }
      return u;
    }).then((u) => I.mergeObjectSync(n, u)) : I.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return x.errToObj, new _C({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s2, a, o, i;
          const c = (o = (a = (s2 = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s2, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = x.errToObj(e).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new _C({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _C({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new _C({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new _C({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => Fe.mergeShapes(this._def.shape(), e._def.shape()),
      typeName: g.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new _C({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return T2.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new _C({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return T2.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new _C({
      ...this._def,
      shape: () => r
    });
  }
  deepPartial() {
    return ie(this);
  }
  partial(e) {
    const r = {};
    return T2.objectKeys(this.shape).forEach((n) => {
      const s2 = this.shape[n];
      e && !e[n] ? r[n] = s2 : r[n] = s2.optional();
    }), new _C({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return T2.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof H; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new _C({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Fr(T2.objectKeys(this.shape));
  }
};
C.create = (t, e) => new C({
  shape: () => t,
  unknownKeys: "strip",
  catchall: J.create(),
  typeName: g.ZodObject,
  ...w(e)
});
C.strictCreate = (t, e) => new C({
  shape: () => t,
  unknownKeys: "strict",
  catchall: J.create(),
  typeName: g.ZodObject,
  ...w(e)
});
C.lazycreate = (t, e) => new C({
  shape: t,
  unknownKeys: "strip",
  catchall: J.create(),
  typeName: g.ZodObject,
  ...w(e)
});
var Re = class extends _ {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s2(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((i) => new V(i.ctx.common.issues));
      return y(r, {
        code: d.invalid_union,
        unionErrors: o
      }), b;
    }
    if (r.common.async)
      return Promise.all(n.map(async (a) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s2);
    {
      let a;
      const o = [];
      for (const c of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, l = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !a && (a = { result: l, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((c) => new V(c));
      return y(r, {
        code: d.invalid_union,
        unionErrors: i
      }), b;
    }
  }
  get options() {
    return this._def.options;
  }
};
Re.create = (t, e) => new Re({
  options: t,
  typeName: g.ZodUnion,
  ...w(e)
});
var Ze = (t) => t instanceof Se ? Ze(t.schema) : t instanceof D ? Ze(t.innerType()) : t instanceof Ne ? [t.value] : t instanceof Q ? t.options : t instanceof Ie ? Object.keys(t.enum) : t instanceof Le ? Ze(t._def.innerType) : t instanceof ke ? [void 0] : t instanceof Ce ? [null] : null;
var it = class _it extends _ {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== h.object)
      return y(r, {
        code: d.invalid_type,
        expected: h.object,
        received: r.parsedType
      }), b;
    const n = this.discriminator, s2 = r.data[n], a = this.optionsMap.get(s2);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (y(r, {
      code: d.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), b);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, n) {
    const s2 = /* @__PURE__ */ new Map();
    for (const a of r) {
      const o = Ze(a.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (s2.has(i))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
        s2.set(i, a);
      }
    }
    return new _it({
      typeName: g.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s2,
      ...w(n)
    });
  }
};
function xt(t, e) {
  const r = G(t), n = G(e);
  if (t === e)
    return { valid: true, data: t };
  if (r === h.object && n === h.object) {
    const s2 = T2.objectKeys(e), a = T2.objectKeys(t).filter((i) => s2.indexOf(i) !== -1), o = { ...t, ...e };
    for (const i of a) {
      const c = xt(t[i], e[i]);
      if (!c.valid)
        return { valid: false };
      o[i] = c.data;
    }
    return { valid: true, data: o };
  } else if (r === h.array && n === h.array) {
    if (t.length !== e.length)
      return { valid: false };
    const s2 = [];
    for (let a = 0; a < t.length; a++) {
      const o = t[a], i = e[a], c = xt(o, i);
      if (!c.valid)
        return { valid: false };
      s2.push(c.data);
    }
    return { valid: true, data: s2 };
  } else
    return r === h.date && n === h.date && +t == +e ? { valid: true, data: t } : { valid: false };
}
var Oe = class extends _ {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s2 = (a, o) => {
      if (_t(a) || _t(o))
        return b;
      const i = xt(a.value, o.value);
      return i.valid ? ((vt(a) || vt(o)) && r.dirty(), { status: r.value, value: i.data }) : (y(n, {
        code: d.invalid_intersection_types
      }), b);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([a, o]) => s2(a, o)) : s2(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
};
Oe.create = (t, e, r) => new Oe({
  left: t,
  right: e,
  typeName: g.ZodIntersection,
  ...w(r)
});
var W = class _W extends _ {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== h.array)
      return y(n, {
        code: d.invalid_type,
        expected: h.array,
        received: n.parsedType
      }), b;
    if (n.data.length < this._def.items.length)
      return y(n, {
        code: d.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      }), b;
    !this._def.rest && n.data.length > this._def.items.length && (y(n, {
      code: d.too_big,
      maximum: this._def.items.length,
      inclusive: true,
      exact: false,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((o, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new U2(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(a).then((o) => I.mergeArray(r, o)) : I.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new _W({
      ...this._def,
      rest: e
    });
  }
};
W.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new W({
    items: t,
    typeName: g.ZodTuple,
    rest: null,
    ...w(e)
  });
};
var Pe = class _Pe extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== h.object)
      return y(n, {
        code: d.invalid_type,
        expected: h.object,
        received: n.parsedType
      }), b;
    const s2 = [], a = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      s2.push({
        key: a._parse(new U2(n, i, n.path, i)),
        value: o._parse(new U2(n, n.data[i], n.path, i))
      });
    return n.common.async ? I.mergeObjectAsync(r, s2) : I.mergeObjectSync(r, s2);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof _ ? new _Pe({
      keyType: e,
      valueType: r,
      typeName: g.ZodRecord,
      ...w(n)
    }) : new _Pe({
      keyType: F2.create(),
      valueType: e,
      typeName: g.ZodRecord,
      ...w(r)
    });
  }
};
var Je = class extends _ {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== h.map)
      return y(n, {
        code: d.invalid_type,
        expected: h.map,
        received: n.parsedType
      }), b;
    const s2 = this._def.keyType, a = this._def.valueType, o = [...n.data.entries()].map(([i, c], u) => ({
      key: s2._parse(new U2(n, i, n.path, [u, "key"])),
      value: a._parse(new U2(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const u = await c.key, l = await c.value;
          if (u.status === "aborted" || l.status === "aborted")
            return b;
          (u.status === "dirty" || l.status === "dirty") && r.dirty(), i.set(u.value, l.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of o) {
        const u = c.key, l = c.value;
        if (u.status === "aborted" || l.status === "aborted")
          return b;
        (u.status === "dirty" || l.status === "dirty") && r.dirty(), i.set(u.value, l.value);
      }
      return { status: r.value, value: i };
    }
  }
};
Je.create = (t, e, r) => new Je({
  valueType: e,
  keyType: t,
  typeName: g.ZodMap,
  ...w(r)
});
var te = class _te extends _ {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== h.set)
      return y(n, {
        code: d.invalid_type,
        expected: h.set,
        received: n.parsedType
      }), b;
    const s2 = this._def;
    s2.minSize !== null && n.data.size < s2.minSize.value && (y(n, {
      code: d.too_small,
      minimum: s2.minSize.value,
      type: "set",
      inclusive: true,
      exact: false,
      message: s2.minSize.message
    }), r.dirty()), s2.maxSize !== null && n.data.size > s2.maxSize.value && (y(n, {
      code: d.too_big,
      maximum: s2.maxSize.value,
      type: "set",
      inclusive: true,
      exact: false,
      message: s2.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function o(c) {
      const u = /* @__PURE__ */ new Set();
      for (const l of c) {
        if (l.status === "aborted")
          return b;
        l.status === "dirty" && r.dirty(), u.add(l.value);
      }
      return { status: r.value, value: u };
    }
    const i = [...n.data.values()].map((c, u) => a._parse(new U2(n, c, n.path, u)));
    return n.common.async ? Promise.all(i).then((c) => o(c)) : o(i);
  }
  min(e, r) {
    return new _te({
      ...this._def,
      minSize: { value: e, message: x.toString(r) }
    });
  }
  max(e, r) {
    return new _te({
      ...this._def,
      maxSize: { value: e, message: x.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
te.create = (t, e) => new te({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: g.ZodSet,
  ...w(e)
});
var ue = class _ue extends _ {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== h.function)
      return y(r, {
        code: d.invalid_type,
        expected: h.function,
        received: r.parsedType
      }), b;
    function n(i, c) {
      return ze({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          We(),
          xe
        ].filter((u) => !!u),
        issueData: {
          code: d.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s2(i, c) {
      return ze({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          We(),
          xe
        ].filter((u) => !!u),
        issueData: {
          code: d.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof fe ? N(async (...i) => {
      const c = new V([]), u = await this._def.args.parseAsync(i, a).catch((m) => {
        throw c.addIssue(n(i, m)), c;
      }), l = await o(...u);
      return await this._def.returns._def.type.parseAsync(l, a).catch((m) => {
        throw c.addIssue(s2(l, m)), c;
      });
    }) : N((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new V([n(i, c.error)]);
      const u = o(...c.data), l = this._def.returns.safeParse(u, a);
      if (!l.success)
        throw new V([s2(u, l.error)]);
      return l.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new _ue({
      ...this._def,
      args: W.create(e).rest(K.create())
    });
  }
  returns(e) {
    return new _ue({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new _ue({
      args: e || W.create([]).rest(K.create()),
      returns: r || K.create(),
      typeName: g.ZodFunction,
      ...w(n)
    });
  }
};
var Se = class extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
};
Se.create = (t, e) => new Se({
  getter: t,
  typeName: g.ZodLazy,
  ...w(e)
});
var Ne = class extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return y(r, {
        received: r.data,
        code: d.invalid_literal,
        expected: this._def.value
      }), b;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Ne.create = (t, e) => new Ne({
  value: t,
  typeName: g.ZodLiteral,
  ...w(e)
});
function Fr(t, e) {
  return new Q({
    values: t,
    typeName: g.ZodEnum,
    ...w(e)
  });
}
var Q = class _Q extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return y(r, {
        expected: T2.joinValues(n),
        received: r.parsedType,
        code: d.invalid_type
      }), b;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return y(r, {
        received: r.data,
        code: d.invalid_enum_value,
        options: n
      }), b;
    }
    return N(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e) {
    return _Q.create(e);
  }
  exclude(e) {
    return _Q.create(this.options.filter((r) => !e.includes(r)));
  }
};
Q.create = Fr;
var Ie = class extends _ {
  _parse(e) {
    const r = T2.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== h.string && n.parsedType !== h.number) {
      const s2 = T2.objectValues(r);
      return y(n, {
        expected: T2.joinValues(s2),
        received: n.parsedType,
        code: d.invalid_type
      }), b;
    }
    if (r.indexOf(e.data) === -1) {
      const s2 = T2.objectValues(r);
      return y(n, {
        received: n.data,
        code: d.invalid_enum_value,
        options: s2
      }), b;
    }
    return N(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
Ie.create = (t, e) => new Ie({
  values: t,
  typeName: g.ZodNativeEnum,
  ...w(e)
});
var fe = class extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== h.promise && r.common.async === false)
      return y(r, {
        code: d.invalid_type,
        expected: h.promise,
        received: r.parsedType
      }), b;
    const n = r.parsedType === h.promise ? r.data : Promise.resolve(r.data);
    return N(n.then((s2) => this._def.type.parseAsync(s2, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
};
fe.create = (t, e) => new fe({
  type: t,
  typeName: g.ZodPromise,
  ...w(e)
});
var D = class extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === g.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s2 = this._def.effect || null;
    if (s2.type === "preprocess") {
      const o = s2.transform(n.data);
      return n.common.async ? Promise.resolve(o).then((i) => this._def.schema._parseAsync({
        data: i,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: o,
        path: n.path,
        parent: n
      });
    }
    const a = {
      addIssue: (o) => {
        y(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s2.type === "refinement") {
      const o = (i) => {
        const c = s2.refinement(i, a);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === false) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? b : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? b : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (s2.type === "transform")
      if (n.common.async === false) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!qe(o))
          return o;
        const i = s2.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => qe(o) ? Promise.resolve(s2.transform(o.value, a)).then((i) => ({ status: r.value, value: i })) : o);
    T2.assertNever(s2);
  }
};
D.create = (t, e, r) => new D({
  schema: t,
  typeName: g.ZodEffects,
  effect: e,
  ...w(r)
});
D.createWithPreprocess = (t, e, r) => new D({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: g.ZodEffects,
  ...w(r)
});
var H = class extends _ {
  _parse(e) {
    return this._getType(e) === h.undefined ? N(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
H.create = (t, e) => new H({
  innerType: t,
  typeName: g.ZodOptional,
  ...w(e)
});
var re = class extends _ {
  _parse(e) {
    return this._getType(e) === h.null ? N(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
re.create = (t, e) => new re({
  innerType: t,
  typeName: g.ZodNullable,
  ...w(e)
});
var Le = class extends _ {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === h.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Le.create = (t, e) => new Le({
  innerType: t,
  typeName: g.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...w(e)
});
var Ge = class extends _ {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r,
        common: {
          ...r.common,
          issues: []
          // don't collect issues from inner type
        }
      }
    });
    return Be(n) ? n.then((s2) => ({
      status: "valid",
      value: s2.status === "valid" ? s2.value : this._def.catchValue()
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue()
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Ge.create = (t, e) => new Ge({
  innerType: t,
  typeName: g.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...w(e)
});
var Ye = class extends _ {
  _parse(e) {
    if (this._getType(e) !== h.nan) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: d.invalid_type,
        expected: h.nan,
        received: n.parsedType
      }), b;
    }
    return { status: "valid", value: e.data };
  }
};
Ye.create = (t) => new Ye({
  typeName: g.ZodNaN,
  ...w(t)
});
var Ta = Symbol("zod_brand");
var Jr = class extends _ {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var Ae = class _Ae extends _ {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? b : a.status === "dirty" ? (r.dirty(), Hr(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s2 = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s2.status === "aborted" ? b : s2.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s2.value
      }) : this._def.out._parseSync({
        data: s2.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new _Ae({
      in: e,
      out: r,
      typeName: g.ZodPipeline
    });
  }
};
var Gr = (t, e = {}, r) => t ? de.create().superRefine((n, s2) => {
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, o = typeof a == "string" ? { message: a } : a;
    s2.addIssue({ code: "custom", ...o, fatal: r });
  }
}) : de.create();
var Ea = {
  object: C.lazycreate
};
var g;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(g || (g = {}));
var ka = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Gr((r) => r instanceof t, e, true);
var Yr = F2.create;
var Qr = Y.create;
var Ca = Ye.create;
var Ra = Te.create;
var Xr = Ee.create;
var Oa = ee.create;
var Pa = Ve.create;
var Sa = ke.create;
var Na = Ce.create;
var Ia = de.create;
var La = K.create;
var Aa = J.create;
var Ma = He.create;
var ja = $.create;
var $a = C.create;
var Da = C.strictCreate;
var Za = Re.create;
var Ua = it.create;
var Wa = Oe.create;
var za = W.create;
var qa = Pe.create;
var Ba = Je.create;
var Va = te.create;
var Ha = ue.create;
var Fa = Se.create;
var Ja = Ne.create;
var Ga = Q.create;
var Ya = Ie.create;
var Qa = fe.create;
var rr = D.create;
var Xa = H.create;
var Ka = re.create;
var eo = D.createWithPreprocess;
var to = Ae.create;
var ro = () => Yr().optional();
var no = () => Qr().optional();
var so = () => Xr().optional();
var ao = {
  string: (t) => F2.create({ ...t, coerce: true }),
  number: (t) => Y.create({ ...t, coerce: true }),
  boolean: (t) => Ee.create({
    ...t,
    coerce: true
  }),
  bigint: (t) => Te.create({ ...t, coerce: true }),
  date: (t) => ee.create({ ...t, coerce: true })
};
var oo = b;
var p = Object.freeze({
  __proto__: null,
  defaultErrorMap: xe,
  setErrorMap: ma,
  getErrorMap: We,
  makeIssue: ze,
  EMPTY_PATH: ya,
  addIssueToContext: y,
  ParseStatus: I,
  INVALID: b,
  DIRTY: Hr,
  OK: N,
  isAborted: _t,
  isDirty: vt,
  isValid: qe,
  isAsync: Be,
  get util() {
    return T2;
  },
  ZodParsedType: h,
  getParsedType: G,
  ZodType: _,
  ZodString: F2,
  ZodNumber: Y,
  ZodBigInt: Te,
  ZodBoolean: Ee,
  ZodDate: ee,
  ZodSymbol: Ve,
  ZodUndefined: ke,
  ZodNull: Ce,
  ZodAny: de,
  ZodUnknown: K,
  ZodNever: J,
  ZodVoid: He,
  ZodArray: $,
  get objectUtil() {
    return Fe;
  },
  ZodObject: C,
  ZodUnion: Re,
  ZodDiscriminatedUnion: it,
  ZodIntersection: Oe,
  ZodTuple: W,
  ZodRecord: Pe,
  ZodMap: Je,
  ZodSet: te,
  ZodFunction: ue,
  ZodLazy: Se,
  ZodLiteral: Ne,
  ZodEnum: Q,
  ZodNativeEnum: Ie,
  ZodPromise: fe,
  ZodEffects: D,
  ZodTransformer: D,
  ZodOptional: H,
  ZodNullable: re,
  ZodDefault: Le,
  ZodCatch: Ge,
  ZodNaN: Ye,
  BRAND: Ta,
  ZodBranded: Jr,
  ZodPipeline: Ae,
  custom: Gr,
  Schema: _,
  ZodSchema: _,
  late: Ea,
  get ZodFirstPartyTypeKind() {
    return g;
  },
  coerce: ao,
  any: Ia,
  array: ja,
  bigint: Ra,
  boolean: Xr,
  date: Oa,
  discriminatedUnion: Ua,
  effect: rr,
  enum: Ga,
  function: Ha,
  instanceof: ka,
  intersection: Wa,
  lazy: Fa,
  literal: Ja,
  map: Ba,
  nan: Ca,
  nativeEnum: Ya,
  never: Aa,
  null: Na,
  nullable: Ka,
  number: Qr,
  object: $a,
  oboolean: so,
  onumber: no,
  optional: Xa,
  ostring: ro,
  pipeline: to,
  preprocess: eo,
  promise: Qa,
  record: qa,
  set: Va,
  strictObject: Da,
  string: Yr,
  symbol: Pa,
  transformer: rr,
  tuple: za,
  undefined: Sa,
  union: Za,
  unknown: La,
  void: Ma,
  NEVER: oo,
  ZodIssueCode: d,
  quotelessJson: ha,
  ZodError: V
});
var Kr = /^0x[0-9a-f]+$/i;
var en = /^\d+$/;
var io = p.string().nonempty("The short string cannot be empty").max(31, "The short string cannot exceed 31 characters").refine(
  (t) => !Kr.test(t),
  "The shortString should not be a hex string"
).refine(
  (t) => !en.test(t),
  "The shortString should not be an integer string"
);
var _e2 = p.union([
  p.string().regex(
    Kr,
    "Only hex, integers and bigint are supported in calldata"
  ),
  p.string().regex(
    en,
    "Only hex, integers and bigint are supported in calldata"
  ),
  io,
  p.number().int("Only hex, integers and bigint are supported in calldata"),
  p.bigint()
]);
var tn = p.object({
  contractAddress: p.string(),
  entrypoint: p.string(),
  calldata: p.array(_e2.or(p.array(_e2))).optional()
});
var co = p.array(tn).nonempty();
var uo = p.object({
  types: p.record(
    p.array(
      p.union([
        p.object({
          name: p.string(),
          type: p.string()
        }),
        p.object({
          name: p.string(),
          type: p.literal("merkletree"),
          contains: p.string()
        })
      ])
    )
  ),
  primaryType: p.string(),
  domain: p.record(p.unknown()),
  message: p.record(p.unknown())
});
var nr = {
  enable: p.tuple([
    p.object({
      starknetVersion: p.union([p.literal("v4"), p.literal("v5")]).optional()
    }).optional()
  ]).or(p.tuple([])),
  addStarknetChain: p.tuple([
    p.object({
      id: p.string(),
      chainId: p.string(),
      chainName: p.string(),
      rpcUrls: p.array(p.string()).optional(),
      nativeCurrency: p.object({
        name: p.string(),
        symbol: p.string(),
        decimals: p.number()
      }).optional(),
      blockExplorerUrls: p.array(p.string()).optional()
    })
  ]),
  switchStarknetChain: p.tuple([
    p.object({
      chainId: p.string()
    })
  ]),
  watchAsset: p.tuple([
    p.object({
      type: p.literal("ERC20"),
      options: p.object({
        address: p.string(),
        symbol: p.string().optional(),
        decimals: p.number().optional(),
        image: p.string().optional(),
        name: p.string().optional()
      })
    })
  ]),
  execute: p.tuple([
    co.or(tn),
    p.object({
      nonce: _e2.optional(),
      maxFee: _e2.optional(),
      version: _e2.optional()
    }).optional()
  ]),
  signMessage: p.tuple([uo])
};
var j = ts.create({
  isServer: false,
  allowOutsideOfServer: true
});
var Tt = cr;
var Et = "";
var rn = "";
var ve = ({
  width: t = 775,
  height: e = 385,
  origin: r,
  location: n,
  atLeftBottom: s2 = false
}) => {
  const a = (window == null ? void 0 : window.outerWidth) ?? (window == null ? void 0 : window.innerWidth) ?? (window == null ? void 0 : window.screen.width) ?? 0, o = (window == null ? void 0 : window.outerHeight) ?? (window == null ? void 0 : window.innerHeight) ?? (window == null ? void 0 : window.screen.height) ?? 0, i = (window == null ? void 0 : window.screenLeft) ?? (window == null ? void 0 : window.screenX) ?? 0, c = (window == null ? void 0 : window.screenTop) ?? (window == null ? void 0 : window.screenY) ?? 0, u = s2 ? 0 : i + a / 2 - t / 2, l = s2 ? window.screen.availHeight + 10 : c + o / 2 - e / 2;
  Tt = r ?? Tt, Et = n ?? Et, rn = `width=${t},height=${e},top=${l},left=${u},toolbar=no,menubar=no,scrollbars=no,location=no,status=no,popup=1`;
};
j.router({
  authorize: j.procedure.output(p.boolean()).mutation(async () => true),
  connect: j.procedure.mutation(async () => ""),
  enable: j.procedure.output(p.string()).mutation(async () => ""),
  execute: j.procedure.input(nr.execute).output(p.string()).mutation(async () => ""),
  signMessage: j.procedure.input(nr.signMessage).output(p.string().array()).mutation(async () => []),
  getLoginStatus: j.procedure.output(
    p.object({
      isLoggedIn: p.boolean(),
      hasSession: p.boolean().optional(),
      isPreauthorized: p.boolean().optional()
    })
  ).mutation(async () => ({
    isLoggedIn: true
  })),
  addStarknetChain: j.procedure.mutation((t) => {
    throw Error("not implemented");
  }),
  switchStarknetChain: j.procedure.mutation((t) => {
    throw Error("not implemented");
  }),
  watchAsset: j.procedure.mutation((t) => {
    throw Error("not implemented");
  }),
  updateModal: j.procedure.subscription(async () => {
  })
});
var yt = ({
  iframe: t
}) => $n({
  links: [
    In({
      enabled: (e) => typeof window < "u" || e.direction === "down" && e.result instanceof Error
    }),
    xn({
      condition(e) {
        if (!t && e.type === "subscription")
          throw new Error(
            "subscription is not supported without an iframe window"
          );
        return !!t;
      },
      true: bt.windowLink({
        window,
        postWindow: t,
        postOrigin: "*"
      }),
      false: bt.popupLink({
        listenWindow: window,
        createPopup: () => {
          let e = null;
          const r = document.createElement("button");
          if (r.style.display = "none", r.addEventListener("click", () => {
            e = window.open(
              `${Tt}${Et}`,
              "popup",
              rn
            );
          }), r.click(), (async () => {
            for (; !e; )
              await new Promise((n) => setTimeout(n, 100));
          })(), !e)
            throw new Error("Could not open popup");
          return e;
        },
        postOrigin: "*"
      })
    })
  ]
});
var lo = 385;
var fo = 775;
var po = 385;
var ho = 440;
var mo = 886;
var yo = 562;
var sr = class {
  async getPubKey() {
    throw new Error("Method not implemented");
  }
  async signMessage() {
    throw new Error("Method not implemented");
  }
  async signTransaction() {
    throw new Error("Method not implemented");
  }
  async signDeclareTransaction() {
    throw new Error("Method not implemented");
  }
  async signDeployAccountTransaction() {
    throw new Error("Method not implemented");
  }
};
var go = class extends Account {
  constructor(r, n, s2) {
    super(r, n, new sr());
    ae(this, "signer", new sr());
    ae(this, "execute", async (r2, n2, s3 = {}) => {
      try {
        ve({
          width: lo,
          height: fo,
          location: "/review"
        }), Array.isArray(r2) && r2[0] && r2[0].entrypoint === "use_offchain_session" && ve({
          width: 1,
          height: 1,
          location: "/executeSessionTx",
          atLeftBottom: true
        });
        const a = n2 === void 0 || Array.isArray(n2) ? s3 : n2;
        return {
          transaction_hash: await this.proxyLink.execute.mutate([r2, a])
        };
      } catch (a) {
        throw a instanceof Error ? new Error(a.message) : new Error("Error while execute a transaction");
      }
    });
    ae(this, "signMessage", async (r2) => {
      try {
        return ve({
          width: po,
          height: ho,
          location: "/signMessage"
        }), await this.proxyLink.signMessage.mutate([r2]);
      } catch (n2) {
        throw n2 instanceof Error ? new Error(n2.message) : new Error("Error while sign a message");
      }
    });
    this.address = n, this.proxyLink = s2;
  }
};
var je = [];
var bo = (t, e, r) => {
  const n = {
    ...t,
    isConnected: false,
    provider: e,
    getLoginStatus: () => r.getLoginStatus.mutate(),
    async request(s2) {
      switch (s2.type) {
        case "wallet_addStarknetChain":
          return await r.addStarknetChain.mutate();
        case "wallet_switchStarknetChain":
          return await r.switchStarknetChain.mutate();
        case "wallet_watchAsset":
          return await r.watchAsset.mutate();
        default:
          throw new Error("not implemented");
      }
    },
    async enable(s2) {
      if ((s2 == null ? void 0 : s2.starknetVersion) !== "v4")
        throw Error("not implemented");
      try {
        ve({
          width: mo,
          height: yo,
          location: "/interstitialLogin"
        });
        const o = await r.enable.mutate();
        return await wo(
          n,
          e,
          r,
          o
        ), [o];
      } catch (a) {
        throw a instanceof Error ? new Error(a.message) : new Error("Unknow error on enable wallet");
      }
    },
    async isPreauthorized() {
      const { isLoggedIn: s2, isPreauthorized: a } = await r.getLoginStatus.mutate();
      return !!(s2 && a);
    },
    on: (s2, a) => {
      if (s2 === "accountsChanged")
        je.push({
          type: s2,
          handler: a
        });
      else if (s2 === "networkChanged")
        je.push({
          type: s2,
          handler: a
        });
      else
        throw new Error(`Unknwown event: ${s2}`);
    },
    off: (s2, a) => {
      if (s2 !== "accountsChanged" && s2 !== "networkChanged")
        throw new Error(`Unknwown event: ${s2}`);
      const o = je.findIndex(
        (i) => i.type === s2 && i.handler === a
      );
      o >= 0 && je.splice(o, 1);
    }
  };
  return n;
};
async function wo(t, e, r, n) {
  if (t.isConnected)
    return t;
  const a = {
    isConnected: true,
    chainId: await e.getChainId(),
    selectedAddress: n,
    account: new go(e, n, r),
    provider: e
  };
  return Object.assign(t, a);
}
var _o = (t) => {
  t.style.position = "fixed", t.style.top = "50%", t.style.left = "50%", t.style.transform = "translate(-50%, -50%)", t.style.width = "380px", t.style.height = "420px", t.style.border = "none", t.style.borderRadius = "40px", t.style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.5)";
  const e = document.createElement("div");
  return e.style.display = "none", e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.right = "0", e.style.bottom = "0", e.style.backgroundColor = "rgba(0, 0, 0, 0.5)", e.style.zIndex = "99999", e.style.backdropFilter = "blur(4px)", e.appendChild(t), e;
};
var vo = (t) => {
  t.style.display = "block";
};
var xo = (t) => {
  t.style.display = "none";
};
var To = (t, e) => {
  t.style.height = `min(${e || 420}px, 100%)`;
};
var Eo = async (t, e) => {
  const r = new URL(t);
  r.pathname = "/iframes/comms", t = r.toString();
  const n = document.createElement("iframe");
  n.src = t, n.loading = "eager", n.sandbox.add(
    "allow-scripts",
    "allow-same-origin",
    "allow-forms",
    "allow-top-navigation",
    "allow-popups"
  ), n.allow = "clipboard-write", n.id = "argent-webwallet-iframe";
  const s2 = _o(n);
  return s2.style.display = e ? "block" : "none", s2.id = "argent-webwallet-modal", window.document.body.appendChild(s2), await new Promise((a, o) => {
    const i = setTimeout(
      () => o(new Error("Timeout while loading an iframe")),
      2e4
    );
    n.addEventListener("load", async () => {
      clearTimeout(i), a();
    });
  }), { iframe: n, modal: s2 };
};
function ko(t) {
  const e = s();
  try {
    const { origin: r } = new URL(t);
    if (r.includes("localhost") || r.includes("127.0.0.1") || r.includes("hydrogen"))
      return e.testnet;
    if (r.includes("staging") || r.includes("argent.xyz"))
      return e.mainnet;
  } catch {
    console.warn(
      "Could not determine rpc nodeUrl from target URL, defaulting to mainnet"
    );
  }
  return e.mainnet;
}
var gt = async (t, e, r, n) => {
  const s2 = typeof window < "u" ? window : void 0;
  if (!s2)
    throw new Error("window is not defined");
  const a = ko(t), o = r ?? new RpcProvider2({ nodeUrl: a }), i = bo(
    {
      host: s2.location.origin,
      id: "argentWebWallet",
      icon: "https://www.argent.xyz/favicon.ico",
      name: "Argent Web Wallet",
      version: "1.0.0"
    },
    o,
    e
  );
  if (n) {
    const { iframe: c, modal: u } = n;
    e.updateModal.subscribe.apply(null, [
      void 0,
      {
        onData(l) {
          switch (l.action) {
            case "show":
              vo(u);
              break;
            case "hide":
              xo(u);
              break;
            case "updateHeight":
              To(c, l.height);
          }
        }
      }
    ]);
  }
  return i;
};
var ce = constants_exports.NetworkName;
var Co = ce.SN_SEPOLIA;
function Ro(t) {
  try {
    const { origin: e } = new URL(t);
    if (e.includes("localhost") || e.includes("127.0.0.1"))
      return Co;
    if (e.includes("hydrogen"))
      return ce.SN_SEPOLIA;
    if (e.includes("staging"))
      return ce.SN_MAIN;
    if (e.includes("dev"))
      return ce.SN_SEPOLIA;
    if (e.includes("argent.xyz"))
      return ce.SN_MAIN;
  } catch {
    console.warn(
      "Could not determine network from target URL, defaulting to mainnet-alpha"
    );
  }
  return ce.SN_MAIN;
}
var ar = "allowed-dapps";
var Oo = async (t) => {
  const e = t === constants_exports.NetworkName.SN_MAIN ? mn : hn;
  try {
    const n = await (await caches.open(ar)).match(e);
    if (n) {
      const u = parseInt(
        n.headers.get("X-Cache-Timestamp"),
        10
      );
      if (((/* @__PURE__ */ new Date()).getTime() - u) / (1e3 * 60 * 60) < 24)
        return n.json();
    }
    const s2 = await fetch(e), a = new Headers(s2.headers);
    a.set("X-Cache-Timestamp", (/* @__PURE__ */ new Date()).getTime().toString());
    const o = await s2.json(), i = new Response(JSON.stringify(o), {
      status: s2.status,
      statusText: s2.statusText,
      headers: a
    });
    return await (await caches.open(ar)).put(e, i), o;
  } catch (r) {
    throw new Error(r);
  }
};
var Po = async (t) => new Promise((e) => {
  if (!t)
    return e(false);
  try {
    navigator.webkitTemporaryStorage.queryUsageAndQuota(
      (n, s2) => {
        var _a3;
        e(
          Math.round(s2 / (1024 * 1024)) < Math.round(
            (((_a3 = performance == null ? void 0 : performance.memory) == null ? void 0 : _a3.jsHeapSizeLimit) ?? 1073741824) / (1024 * 1024)
          ) * 2
        );
      },
      () => e(false)
    );
  } catch {
    e(false);
  }
});
var So = async (t, e) => {
  const { userAgent: r } = navigator, n = !!(navigator.vendor && navigator.vendor.indexOf("Google") === 0 && navigator.brave === void 0 && !r.match(/Edg/) && !r.match(/OPR/)), s2 = await Po(n);
  if (!n || s2) {
    const i = yt({});
    return await gt(
      t,
      i,
      e,
      void 0
    );
  }
  const a = Ro(t), { allowedDapps: o } = await Oo(a);
  if (o.includes(window.location.hostname)) {
    const i = "argent-webwallet-modal", c = "argent-webwallet-iframe", u = document.getElementById(i), l = document.getElementById(c);
    u && u && l && (u.remove(), l.remove());
    const { iframe: f, modal: m } = await Eo(t, false), v = yt({
      iframe: f.contentWindow ?? void 0
    });
    return await v.authorize.mutate(), await gt(
      t,
      v,
      e,
      { modal: m, iframe: f }
    );
  } else {
    const i = yt({});
    return await gt(
      t,
      i,
      e,
      void 0
    );
  }
};
var M = null;
var jo = class extends T {
  constructor(r = {}) {
    super();
    ae(this, "_wallet", null);
    ae(this, "_options");
    this._options = r;
  }
  available() {
    return true;
  }
  async ready() {
    return M ? (this._wallet = M, this._wallet.isPreauthorized()) : (this._wallet = null, false);
  }
  get id() {
    var _a3;
    return this._wallet = M, ((_a3 = this._wallet) == null ? void 0 : _a3.id) || "argentWebWallet";
  }
  get name() {
    var _a3;
    return this._wallet = M, ((_a3 = this._wallet) == null ? void 0 : _a3.name) || "Argent Web Wallet";
  }
  get icon() {
    return {
      light: Ut,
      dark: Ut
    };
  }
  get wallet() {
    if (!this._wallet)
      throw new P();
    return this._wallet;
  }
  get title() {
    return "Email";
  }
  get subtitle() {
    return "Powered by Argent";
  }
  async connect() {
    if (await this.ensureWallet(), !this._wallet)
      throw new U();
    try {
      await this._wallet.enable({ starknetVersion: "v4" });
    } catch (s2) {
      throw console.log(s2), new A();
    }
    if (!this._wallet.isConnected)
      throw new A();
    const r = this._wallet.account, n = await this.chainId();
    return {
      account: r.address,
      chainId: n
    };
  }
  async disconnect() {
    var _a3;
    if (!this.available() && !this._wallet)
      throw new U();
    if (!((_a3 = this._wallet) == null ? void 0 : _a3.isConnected))
      throw new S();
    M = null, this._wallet = M, q();
  }
  async account() {
    if (this._wallet = M, !this._wallet || !this._wallet.account)
      throw new P();
    return this._wallet.account;
  }
  async chainId() {
    if (!this._wallet || !this.wallet.account || !this._wallet.provider)
      throw new P();
    const r = await this._wallet.provider.getChainId();
    return BigInt(r);
  }
  async initEventListener(r) {
    if (this._wallet = M, !this._wallet)
      throw new P();
    this._wallet.on("accountsChanged", r);
  }
  async removeEventListener(r) {
    if (this._wallet = M, !this._wallet)
      throw new P();
    this._wallet.off("accountsChanged", r), M = null, this._wallet = null;
  }
  async ensureWallet() {
    const r = this._options.url || cr, n = this._options.provider;
    ve({
      origin: r,
      location: "/interstitialLogin"
    }), M = await So(r, n) ?? null, this._wallet = M;
  }
};
export {
  jo as WebWalletConnector
};
/*! Bundled license information:

starknetkit/dist/index-c4ef0430.js:
  (* istanbul ignore if -- @preserve *)
  (* istanbul ignore next -- @preserve *)
*/
//# sourceMappingURL=starknetkit_webwallet.js.map
