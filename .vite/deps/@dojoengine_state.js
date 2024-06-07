import {
  E,
  P
} from "./chunk-5654ECAM.js";
import "./chunk-A6J2VAW2.js";
import "./chunk-4RUCNEUM.js";
import "./chunk-J32WSRGE.js";

// node_modules/.pnpm/@dojoengine+state@0.6.125_starknet@6.8.0_typescript@5.4.5_zod@3.23.8/node_modules/@dojoengine/state/dist/index.js
function s(t, r) {
  return Object.keys(t).reduce((e, n) => {
    let a = t[n], o = r[n];
    return o == null ? (e[n] = o, e) : (a === P.String ? e[n] = o : typeof a == "object" && o && typeof o == "object" ? e[n] = s(a, o) : e[n] = a === P.BigInt ? BigInt(o) : Number(o), e);
  }, {});
}
var b = async (t, r, e = 100) => {
  await c(t, r, e), f(t, r);
};
var c = async (t, r, e = 100) => {
  let n = 0, a = true;
  for (; a; ) {
    let o = await t.getEntities(e, n);
    m(o, r), Object.keys(o).length < e ? a = false : n += e;
  }
};
var f = async (t, r) => {
  t.onEntityUpdated([], (e) => {
    m(e, r);
  });
};
var m = async (t, r) => {
  for (let e in t)
    if (t.hasOwnProperty(e)) {
      for (let n in t[e])
        if (t[e].hasOwnProperty(n)) {
          let a = r[n];
          a && E(a, e, s(a.schema, t[e][n]));
        }
    }
};
export {
  c as getEntities,
  b as getSyncEntities,
  m as setEntities,
  f as syncEntities
};
//# sourceMappingURL=@dojoengine_state.js.map
