import {
  eventemitter3_default,
  require_jsx_runtime,
  z
} from "./chunk-OUD7UKAV.js";
import "./chunk-FGLWLMLJ.js";
import {
  KATANA_ETH_CONTRACT_ADDRESS
} from "./chunk-REUMKYAQ.js";
import {
  Account,
  CallData,
  HashMD,
  TransactionFinalityStatus,
  bytes,
  bytesToHex,
  concatBytes,
  createBase58check,
  createView,
  ec_exports,
  encode_exports,
  hash_exports,
  hexToBytes,
  hmac,
  mod,
  num_exports,
  rotl,
  secp256k1,
  sha256,
  shortString_exports,
  stark_exports,
  utf8ToBytes,
  wrapConstructor
} from "./chunk-TQUWFIKU.js";
import "./chunk-ELN4VAZN.js";
import "./chunk-OPAFF7F5.js";
import {
  require_react
} from "./chunk-T22XXT7L.js";
import {
  __publicField,
  __toESM
} from "./chunk-J32WSRGE.js";

// node_modules/.pnpm/@starknet-react+core@2.3.0_get-starknet-core@3.3.0_react@18.3.1_starknet@6.8.0/node_modules/@starknet-react/core/dist/index.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var Connector = class extends eventemitter3_default {
};
var AccountContext = import_react3.default.createContext(
  void 0
);
var StarknetContext = (0, import_react2.createContext)(void 0);
var uint256Schema = z.object({
  low: z.bigint(),
  high: z.bigint()
});
var balanceSchema = z.object({
  balance: uint256Schema
});
var decimalsSchema = z.object({
  decimals: z.bigint()
});
var symbolSchema = z.object({
  symbol: z.bigint()
});

// node_modules/.pnpm/@dojoengine+create-burner@0.6.125_react@18.3.1_starknet@6.8.0_typescript@5.4.5_zod@3.23.8/node_modules/@dojoengine/create-burner/dist/index.js
var import_react17 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_react18 = __toESM(require_react());

// node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/ripemd160.js
var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = new Uint8Array(new Array(16).fill(0).map((_, i) => i));
var Pi = Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k) => Rho[k]));
var shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
var shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
var Kl = new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function f(group, x, y, z2) {
  if (group === 0)
    return x ^ y ^ z2;
  else if (group === 1)
    return x & y | ~x & z2;
  else if (group === 2)
    return (x | ~y) ^ z2;
  else if (group === 3)
    return x & z2 | y & ~z2;
  else
    return x ^ (y | ~z2);
}
var R_BUF = new Uint32Array(16);
var RIPEMD160 = class extends HashMD {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      R_BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    R_BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = wrapConstructor(() => new RIPEMD160());

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
var shrSH = (h, _l, s) => h >>> s;
var shrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
var rotr32H = (_h, l) => l;
var rotr32L = (h, _l) => h;
var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
var u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
var u64_default = u64;

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/sha512.js
var [SHA512_Kh, SHA512_Kl] = (() => u64_default.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA512 = class extends HashMD {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
      const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64_default.add3L(T1l, sigma0l, MAJl);
      Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var SHA512_224 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
};
var SHA512_256 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
};
var SHA384 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
};
var sha512 = wrapConstructor(() => new SHA512());
var sha512_224 = wrapConstructor(() => new SHA512_224());
var sha512_256 = wrapConstructor(() => new SHA512_256());
var sha384 = wrapConstructor(() => new SHA384());

// node_modules/.pnpm/@scure+bip32@1.4.0/node_modules/@scure/bip32/lib/esm/index.js
var Point = secp256k1.ProjectivePoint;
var base58check = createBase58check(sha256);
function bytesToNumber(bytes2) {
  return BigInt(`0x${bytesToHex(bytes2)}`);
}
function numberToBytes(num) {
  return hexToBytes(num.toString(16).padStart(64, "0"));
}
var MASTER_SECRET = utf8ToBytes("Bitcoin seed");
var BITCOIN_VERSIONS = { private: 76066276, public: 76067358 };
var HARDENED_OFFSET = 2147483648;
var hash160 = (data) => ripemd160(sha256(data));
var fromU32 = (data) => createView(data).getUint32(0, false);
var toU32 = (n) => {
  if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1) {
    throw new Error(`Invalid number=${n}. Should be from 0 to 2 ** 32 - 1`);
  }
  const buf = new Uint8Array(4);
  createView(buf).setUint32(0, n, false);
  return buf;
};
var HDKey = class _HDKey {
  get fingerprint() {
    if (!this.pubHash) {
      throw new Error("No publicKey set!");
    }
    return fromU32(this.pubHash);
  }
  get identifier() {
    return this.pubHash;
  }
  get pubKeyHash() {
    return this.pubHash;
  }
  get privateKey() {
    return this.privKeyBytes || null;
  }
  get publicKey() {
    return this.pubKey || null;
  }
  get privateExtendedKey() {
    const priv = this.privateKey;
    if (!priv) {
      throw new Error("No private key");
    }
    return base58check.encode(this.serialize(this.versions.private, concatBytes(new Uint8Array([0]), priv)));
  }
  get publicExtendedKey() {
    if (!this.pubKey) {
      throw new Error("No public key");
    }
    return base58check.encode(this.serialize(this.versions.public, this.pubKey));
  }
  static fromMasterSeed(seed, versions = BITCOIN_VERSIONS) {
    bytes(seed);
    if (8 * seed.length < 128 || 8 * seed.length > 512) {
      throw new Error(`HDKey: wrong seed length=${seed.length}. Should be between 128 and 512 bits; 256 bits is advised)`);
    }
    const I = hmac(sha512, MASTER_SECRET, seed);
    return new _HDKey({
      versions,
      chainCode: I.slice(32),
      privateKey: I.slice(0, 32)
    });
  }
  static fromExtendedKey(base58key, versions = BITCOIN_VERSIONS) {
    const keyBuffer = base58check.decode(base58key);
    const keyView = createView(keyBuffer);
    const version = keyView.getUint32(0, false);
    const opt = {
      versions,
      depth: keyBuffer[4],
      parentFingerprint: keyView.getUint32(5, false),
      index: keyView.getUint32(9, false),
      chainCode: keyBuffer.slice(13, 45)
    };
    const key = keyBuffer.slice(45);
    const isPriv = key[0] === 0;
    if (version !== versions[isPriv ? "private" : "public"]) {
      throw new Error("Version mismatch");
    }
    if (isPriv) {
      return new _HDKey({ ...opt, privateKey: key.slice(1) });
    } else {
      return new _HDKey({ ...opt, publicKey: key });
    }
  }
  static fromJSON(json) {
    return _HDKey.fromExtendedKey(json.xpriv);
  }
  constructor(opt) {
    this.depth = 0;
    this.index = 0;
    this.chainCode = null;
    this.parentFingerprint = 0;
    if (!opt || typeof opt !== "object") {
      throw new Error("HDKey.constructor must not be called directly");
    }
    this.versions = opt.versions || BITCOIN_VERSIONS;
    this.depth = opt.depth || 0;
    this.chainCode = opt.chainCode || null;
    this.index = opt.index || 0;
    this.parentFingerprint = opt.parentFingerprint || 0;
    if (!this.depth) {
      if (this.parentFingerprint || this.index) {
        throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");
      }
    }
    if (opt.publicKey && opt.privateKey) {
      throw new Error("HDKey: publicKey and privateKey at same time.");
    }
    if (opt.privateKey) {
      if (!secp256k1.utils.isValidPrivateKey(opt.privateKey)) {
        throw new Error("Invalid private key");
      }
      this.privKey = typeof opt.privateKey === "bigint" ? opt.privateKey : bytesToNumber(opt.privateKey);
      this.privKeyBytes = numberToBytes(this.privKey);
      this.pubKey = secp256k1.getPublicKey(opt.privateKey, true);
    } else if (opt.publicKey) {
      this.pubKey = Point.fromHex(opt.publicKey).toRawBytes(true);
    } else {
      throw new Error("HDKey: no public or private key provided");
    }
    this.pubHash = hash160(this.pubKey);
  }
  derive(path) {
    if (!/^[mM]'?/.test(path)) {
      throw new Error('Path must start with "m" or "M"');
    }
    if (/^[mM]'?$/.test(path)) {
      return this;
    }
    const parts = path.replace(/^[mM]'?\//, "").split("/");
    let child = this;
    for (const c of parts) {
      const m = /^(\d+)('?)$/.exec(c);
      const m1 = m && m[1];
      if (!m || m.length !== 3 || typeof m1 !== "string") {
        throw new Error(`Invalid child index: ${c}`);
      }
      let idx = +m1;
      if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET) {
        throw new Error("Invalid index");
      }
      if (m[2] === "'") {
        idx += HARDENED_OFFSET;
      }
      child = child.deriveChild(idx);
    }
    return child;
  }
  deriveChild(index) {
    if (!this.pubKey || !this.chainCode) {
      throw new Error("No publicKey or chainCode set");
    }
    let data = toU32(index);
    if (index >= HARDENED_OFFSET) {
      const priv = this.privateKey;
      if (!priv) {
        throw new Error("Could not derive hardened child key");
      }
      data = concatBytes(new Uint8Array([0]), priv, data);
    } else {
      data = concatBytes(this.pubKey, data);
    }
    const I = hmac(sha512, this.chainCode, data);
    const childTweak = bytesToNumber(I.slice(0, 32));
    const chainCode = I.slice(32);
    if (!secp256k1.utils.isValidPrivateKey(childTweak)) {
      throw new Error("Tweak bigger than curve order");
    }
    const opt = {
      versions: this.versions,
      chainCode,
      depth: this.depth + 1,
      parentFingerprint: this.fingerprint,
      index
    };
    try {
      if (this.privateKey) {
        const added = mod(this.privKey + childTweak, secp256k1.CURVE.n);
        if (!secp256k1.utils.isValidPrivateKey(added)) {
          throw new Error("The tweak was out of range or the resulted private key is invalid");
        }
        opt.privateKey = added;
      } else {
        const added = Point.fromHex(this.pubKey).add(Point.fromPrivateKey(childTweak));
        if (added.equals(Point.ZERO)) {
          throw new Error("The tweak was equal to negative P, which made the result key invalid");
        }
        opt.publicKey = added.toRawBytes(true);
      }
      return new _HDKey(opt);
    } catch (err) {
      return this.deriveChild(index + 1);
    }
  }
  sign(hash) {
    if (!this.privateKey) {
      throw new Error("No privateKey set!");
    }
    bytes(hash, 32);
    return secp256k1.sign(hash, this.privKey).toCompactRawBytes();
  }
  verify(hash, signature) {
    bytes(hash, 32);
    bytes(signature, 64);
    if (!this.publicKey) {
      throw new Error("No publicKey set!");
    }
    let sig;
    try {
      sig = secp256k1.Signature.fromCompact(signature);
    } catch (error) {
      return false;
    }
    return secp256k1.verify(sig, hash, this.publicKey);
  }
  wipePrivateData() {
    this.privKey = void 0;
    if (this.privKeyBytes) {
      this.privKeyBytes.fill(0);
      this.privKeyBytes = void 0;
    }
    return this;
  }
  toJSON() {
    return {
      xpriv: this.privateExtendedKey,
      xpub: this.publicExtendedKey
    };
  }
  serialize(version, key) {
    if (!this.chainCode) {
      throw new Error("No chainCode set");
    }
    bytes(key, 33);
    return concatBytes(toU32(version), new Uint8Array([this.depth]), toU32(this.parentFingerprint), toU32(this.index), this.chainCode, key);
  }
};

// node_modules/.pnpm/@dojoengine+create-burner@0.6.125_react@18.3.1_starknet@6.8.0_typescript@5.4.5_zod@3.23.8/node_modules/@dojoengine/create-burner/dist/index.js
var import_react19 = __toESM(require_react());
var import_react20 = __toESM(require_react());
var import_react21 = __toESM(require_react());
var katanaIcon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOC4yNzk4IDEzLjU4NzNDMTkuNjE5OCAxMy41ODczIDIwLjcwNjEgMTIuNTAwOCAyMC43MDYxIDExLjE2MDVDMjAuNzA2MSA5LjgyMDE3IDE5LjYxOTggOC43MzM2NCAxOC4yNzk4IDguNzMzNjRDMTYuOTM5OCA4LjczMzY0IDE1Ljg1MzUgOS44MjAxNyAxNS44NTM1IDExLjE2MDVDMTUuODUzNSAxMi41MDA4IDE2LjkzOTggMTMuNTg3MyAxOC4yNzk4IDEzLjU4NzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNS40MTAxNiAyLjc5NDhIMzEuMTUzOVYzLjg4NTEyQzMxLjE1MzkgNC4wODA0NiAzMS4wNzE4IDQuMjY0MjMgMzAuOTMxMiA0LjM5MzEyTDI4LjYyNiA2LjQ2NDRDMjguMzI1MSA2LjgwMDQxIDI3LjkxMSA2Ljk5MTk0IDI3LjQ4MTIgNi45OTE5NEgyNS42NTI3QzI1LjY1MjcgNi45OTE5NCAyNS42NDg4IDguNTA3NTUgMjUuNjQ4OCA5LjM5MjY1QzI1LjY0ODggMTAuMjc3NiAyNS4yODY1IDExLjIzMzIgMjUuMjg2NSAxMS4yMzMyTDI1LjUzMzQgMTEuNDgwMkMyNS43OTc5IDExLjExNyAyNi45NjY4IDkuNjc2NjQgMjcuNzQzIDkuNjc2NjRMMzAuNjc3MiA5LjY2MTA0VjEzLjQwNDhMMjUuNjQ4OCAxMy40NjM1VjIwLjc5NDhMMjQuNzY5NyAxOS45MTk0QzIzLjc2NzggMTguOTIzMyAyMi43NjQyIDE3LjkyODkgMjEuNzY1MiAxNi45Mjk5VjkuOTE1MDlDMjEuNzY1MiA4Ljg3MDU2IDIxLjk5NjkgOC4wMjA4MiAyMi4yMTAxIDcuMDg3NTlMMjIuMjEwNSA3LjA4NTY4TDIyLjIxMTkgNy4wNzk3NEwyMi4yMTM0IDcuMDczOUMyMi4yMTU0IDcuMDY2NjggMjIuMjE3MSA3LjA2MDMxIDIyLjIxNjcgNy4wNTM0MUMyMi4yMTY0IDcuMDQ3NzggMjIuMjE0NyA3LjA0MTgzIDIyLjIxMDUgNy4wMzQ5M0MyMi4xODQgNi45OTUwMiAyMi4wNzQ3IDYuOTU1MiAyMS45NzA2IDYuOTM1MjRDMjEuODkxIDYuOTIwMDYgMjEuODE0NyA2LjkxNjQ1IDIxLjc4MDggNi45MzMzM0MyMS4yMjMxIDcuMjA1MiAyMC42MzA4IDcuMzA2NjcgMjAuMDE2NiA3LjMxNzEyQzE4Ljg2MDcgNy4zMzY2MyAxNy43MDIgNy4zMzY0NSAxNi41NDYgNy4zMTcxMkMxNS45MzIzIDcuMzA2NjQgMTUuMzQwNCA3LjIwNDk2IDE0Ljc4MzIgNi45MzMzM0MxNC43MDUxIDYuODk0MjYgMTQuNDAwMyA2Ljk2NDU1IDE0LjM1MzUgNy4wMzQ5M0MxNC4zNDE3IDcuMDU0NDcgMTQuMzQ5NSA3LjA2NjE1IDE0LjM1MzUgNy4wODU2OEwxNC4zNTM5IDcuMDg3NTlDMTQuNTY3IDguMDIwNDIgMTQuNzk4OCA4Ljg3OTY5IDE0Ljc5ODggOS45MTUwOVYxNi45Mjk5QzEzLjUwNzQgMTguMjIxMyAxMi4yMDkzIDE5LjUwNiAxMC45MTUyIDIwLjc5NDhWMTMuNDYzNUw1Ljg4Njg0IDEzLjQwNDhWOS42NjEwNEw4LjgyMTAzIDkuNjc2NjRDOS41OTcyMSA5LjY3NjY0IDEwLjc2NjEgMTEuMTE3IDExLjAzMDYgMTEuNDgwMkwxMS4yNzc1IDExLjIzMzJDMTEuMjc3NSAxMS4yMzMyIDEwLjkxNTIgMTAuMjc3NiAxMC45MTUyIDkuMzkyNjVDMTAuOTE1MiA4LjUwNzU1IDEwLjkxMTMgNi45OTE5NCAxMC45MTEzIDYuOTkxOTRIOS4wODI3OEM4LjY1MzAzIDYuOTkxOTQgOC4yMzg4OCA2LjgwMDQxIDcuOTM4MDYgNi40NjQ0TDUuNjMyODQgNC4zOTMxMkM1LjQ5MjIyIDQuMjY0MjMgNS40MTAxNiA0LjA4MDQ2IDUuNDEwMTYgMy44ODUxMlYyLjc5NDhaIiBmaWxsPSIjRkYyRjQyIi8+Cjwvc3ZnPgo=";
var BurnerConnector = class extends Connector {
  constructor(options, account) {
    super();
    __publicField(this, "_options");
    __publicField(this, "_account");
    this._options = options;
    this._account = account;
  }
  available() {
    return true;
  }
  async ready() {
    return Promise.resolve(true);
  }
  async connect() {
    if (!this._account) {
      throw new Error("account not found");
    }
    const chainId = await this.chainId();
    return Promise.resolve({
      account: this._account.address,
      chainId
    });
  }
  async disconnect() {
    Promise.resolve(this._account == null);
  }
  async account() {
    return Promise.resolve(this._account);
  }
  async chainId() {
    const chainId = await this._account.getChainId();
    return Promise.resolve(BigInt(shortString_exports.encodeShortString(chainId)));
  }
  get id() {
    return this._options.id;
  }
  get name() {
    return this._options.name || "Dojo Burner";
  }
  get icon() {
    return this._options.icon || {
      light: katanaIcon,
      dark: katanaIcon
    };
  }
};
var ID = "dojoburner";
var NAME = "Dojo Burner";
var VERSION = "0.0.1";
var DojoBurnerStarknetWindowObject = class {
  constructor(burnerManager) {
    __publicField(this, "id", ID);
    __publicField(this, "name", NAME);
    __publicField(this, "icon", katanaIcon);
    __publicField(this, "account");
    __publicField(this, "provider");
    __publicField(this, "selectedAddress");
    __publicField(this, "chainId");
    __publicField(this, "isConnected", false);
    __publicField(this, "version", VERSION);
    //
    __publicField(this, "burnerManager");
    ///@ts-ignore
    __publicField(this, "on", (event, handleEvent) => {
    });
    ///@ts-ignore
    __publicField(this, "off", (event, handleEvent) => {
    });
    var _a;
    if (!burnerManager.isInitialized) {
      throw new Error("burnerManager should be initialized");
    }
    this.burnerManager = burnerManager;
    this.chainId = this.burnerManager.chainId;
    this.provider = this.burnerManager.provider;
    const activeAccount = this.burnerManager.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    this.selectedAddress = (_a = this.account) == null ? void 0 : _a.address;
  }
  ///@ts-ignore
  async request(call) {
  }
  ///@ts-ignore
  async enable({ starknetVersion = "v5" } = {}) {
    var _a, _b;
    if (!this.burnerManager) {
      await new Promise((r) => setTimeout(r, 1500));
    }
    const activeAccount = (_a = this.burnerManager) == null ? void 0 : _a.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    if (!this.account) {
      this.account = await ((_b = this.burnerManager) == null ? void 0 : _b.create());
    }
    if (!this.account) {
      this.isConnected = false;
      return [];
    }
    this.isConnected = true;
    return [this.account.address];
  }
  async isPreauthorized() {
    return true;
  }
  /** @returns {string} the connector id */
  static getId() {
    return ID;
  }
  /** @returns {string} the connector name */
  static getName() {
    return NAME;
  }
};
var ID2 = "dojopredeployed";
var NAME2 = "Dojo Predeployed";
var VERSION2 = "0.0.1";
var DojoPredeployedStarknetWindowObject = class {
  constructor(predeployedManager) {
    __publicField(this, "id", ID2);
    __publicField(this, "name", NAME2);
    __publicField(this, "icon", katanaIcon);
    __publicField(this, "account");
    __publicField(this, "provider");
    __publicField(this, "selectedAddress");
    __publicField(this, "chainId");
    __publicField(this, "isConnected", false);
    __publicField(this, "version", VERSION2);
    //
    __publicField(this, "predeployedManager");
    ///@ts-ignore
    __publicField(this, "on", (event, handleEvent) => {
    });
    ///@ts-ignore
    __publicField(this, "off", (event, handleEvent) => {
    });
    var _a;
    this.predeployedManager = predeployedManager;
    this.chainId = this.predeployedManager.chainId;
    this.provider = this.predeployedManager.provider;
    const activeAccount = this.predeployedManager.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    this.selectedAddress = (_a = this.account) == null ? void 0 : _a.address;
  }
  ///@ts-ignore
  async request(call) {
  }
  ///@ts-ignore
  async enable({ starknetVersion = "v5" } = {}) {
    var _a, _b, _c, _d;
    if (!this.predeployedManager) {
      await new Promise((r) => setTimeout(r, 1500));
    }
    const activeAccount = (_a = this.predeployedManager) == null ? void 0 : _a.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    if (!this.account) {
      const predeployed = (_b = this.predeployedManager) == null ? void 0 : _b.list();
      if (predeployed && (predeployed == null ? void 0 : predeployed.length) > 0) {
        (_c = this.predeployedManager) == null ? void 0 : _c.select(predeployed[0].address);
        const activeAccount2 = (_d = this.predeployedManager) == null ? void 0 : _d.getActiveAccount();
        this.account = activeAccount2 ? activeAccount2 : void 0;
      }
    }
    if (!this.account) {
      this.isConnected = false;
      return [];
    }
    this.isConnected = true;
    return [this.account.address];
  }
  async isPreauthorized() {
    return true;
  }
  /** @returns {string} the connector id */
  static getId() {
    return ID2;
  }
  /** @returns {string} the connector name */
  static getName() {
    return NAME2;
  }
};
var BurnerContext = (0, import_react17.createContext)(null);
var BurnerProvider = ({
  children,
  initOptions
}) => {
  return (0, import_jsx_runtime4.jsx)(BurnerContext.Provider, { value: initOptions, children });
};
var hasLocalStorageSupport = () => {
  try {
    const testKey = "__test__";
    if (typeof window !== "undefined") {
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
var isLocalStorage = hasLocalStorageSupport();
var safeParse = (data) => {
  try {
    if (data === "")
      return null;
    return JSON.parse(data);
  } catch (e) {
    console.error("Error parsing JSON data:", e, "Data:", data);
    return null;
  }
};
var Storage = {
  keys: () => {
    if (isLocalStorage) {
      return Object.keys(window.localStorage);
    }
    return Object.keys(api.get());
  },
  get: (key) => {
    if (isLocalStorage) {
      return safeParse(window.localStorage.getItem(key) || "");
    }
    return safeParse(api.get(key) || "");
  },
  set: (key, value) => {
    const data = JSON.stringify(value);
    if (isLocalStorage) {
      window.localStorage.setItem(key, data);
    } else {
      api.set(key, data, {
        secure: true,
        sameSite: "strict"
      });
    }
  },
  remove: (key) => {
    if (isLocalStorage) {
      window.localStorage.removeItem(key);
    } else {
      api.remove(key);
    }
  },
  clear: () => {
    if (isLocalStorage) {
      window.localStorage.clear();
    } else {
      const cookies = api.get();
      Object.keys(cookies).forEach((key) => api.remove(key));
    }
  }
};
var storage_default = Storage;
function getPathForIndex(index) {
  return `m/44'/9004'/0'/0/${index}`;
}
function derivePrivateKeyFromSeed(secret, index) {
  if (!secret) {
    throw "seed is undefined";
  }
  const masterNode = HDKey.fromMasterSeed(num_exports.hexToBytes(secret));
  const childNode = masterNode.derive(getPathForIndex(index));
  if (!childNode.privateKey) {
    throw "childNode.privateKey is undefined";
  }
  const groundKey = ec_exports.starkCurve.grindKey(childNode.privateKey);
  return encode_exports.addHexPrefix(groundKey);
}
var prefundAccount = async (address, account, feeTokenAddress, prefundAmount) => {
  try {
    const transferOptions = {
      contractAddress: feeTokenAddress,
      entrypoint: "transfer",
      calldata: CallData.compile([address, prefundAmount, "0x0"])
    };
    const nonce = await account.getNonce();
    const { transaction_hash } = await account.execute(
      [transferOptions],
      void 0,
      {
        nonce,
        maxFee: 0
        // This is set to 0 for now, consider adjusting it based on network conditions or requirements.
      }
    );
    const result = await account.waitForTransaction(transaction_hash, {
      retryInterval: 1e3,
      successStates: [TransactionFinalityStatus.ACCEPTED_ON_L2]
    });
    if (!result) {
      throw new Error("Transaction did not complete successfully.");
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
var PREFUND_AMOUNT = "0x2386f26fc10000";
var BurnerManager = class {
  constructor({
    masterAccount,
    accountClassHash,
    feeTokenAddress = KATANA_ETH_CONTRACT_ADDRESS,
    rpcProvider
  }) {
    __publicField(this, "masterAccount");
    __publicField(this, "accountClassHash");
    __publicField(this, "feeTokenAddress");
    __publicField(this, "provider");
    __publicField(this, "chainId", "");
    __publicField(this, "account", null);
    __publicField(this, "isDeploying", false);
    __publicField(this, "isInitialized", false);
    __publicField(this, "setIsDeploying");
    __publicField(this, "afterDeploying");
    this.masterAccount = masterAccount;
    this.accountClassHash = accountClassHash;
    this.feeTokenAddress = feeTokenAddress;
    this.provider = rpcProvider;
  }
  setIsDeployingCallback(callback) {
    this.setIsDeploying = callback;
  }
  setAfterDeployingCallback(callback) {
    this.afterDeploying = callback;
  }
  updateIsDeploying(status) {
    this.isDeploying = status;
    if (this.setIsDeploying) {
      this.setIsDeploying(status);
    }
  }
  getBurnerKey() {
    return `burners_${this.chainId}`;
  }
  getBurnerStorage() {
    return storage_default.get(this.getBurnerKey()) || {};
  }
  setActiveBurnerAccount(storage) {
    for (let address in storage) {
      if (storage[address].active) {
        this.account = new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
        return;
      }
    }
  }
  async isBurnerDeployed(deployTx) {
    try {
      const receipt = await this.masterAccount.getTransactionReceipt(deployTx);
      return receipt !== null;
    } catch (error) {
      return false;
    }
  }
  async init(keepNonDeployed = false) {
    if (this.isInitialized) {
      throw new Error("BurnerManager is already initialized");
    }
    this.chainId = shortString_exports.decodeShortString(
      await this.provider.getChainId()
    );
    const storage = this.getBurnerStorage();
    const addresses = Object.keys(storage);
    const checks = addresses.map(async (address) => {
      const isDeployed = await this.isBurnerDeployed(
        storage[address].deployTx
      );
      return isDeployed ? null : address;
    });
    const toRemove = (await Promise.all(checks)).filter(
      (address) => address !== null
    );
    toRemove.forEach((address) => {
      if (!keepNonDeployed) {
        console.log(
          `Removing non-deployed burner at address ${address}.`
        );
        delete storage[address];
      }
    });
    if (Object.keys(storage).length) {
      storage_default.set(this.getBurnerKey(), storage);
      this.setActiveBurnerAccount(storage);
    } else {
      this.clear();
    }
    this.isInitialized = true;
  }
  list() {
    const storage = this.getBurnerStorage();
    return Object.keys(storage).map((address) => {
      return {
        address,
        active: storage[address].active,
        masterAccount: storage[address].masterAccount,
        accountIndex: storage[address].accountIndex
      };
    });
  }
  select(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage[address].active = true;
    storage_default.set(this.getBurnerKey(), storage);
    this.account = new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  deselect() {
    const storage = this.getBurnerStorage();
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage_default.set(this.getBurnerKey(), storage);
    this.account = null;
  }
  get(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    return new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  delete(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    delete storage[address];
    storage_default.set(this.getBurnerKey(), storage);
  }
  clear() {
    storage_default.remove(this.getBurnerKey());
  }
  getActiveAccount() {
    const storage = this.getBurnerStorage();
    for (let address in storage) {
      if (storage[address].active) {
        return new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
      }
    }
    return null;
  }
  generateKeysAndAddress(options) {
    const privateKey = (options == null ? void 0 : options.secret) ? derivePrivateKeyFromSeed(options.secret, options.index || 0) : stark_exports.randomAddress();
    const publicKey = ec_exports.starkCurve.getStarkKey(privateKey);
    return {
      privateKey,
      publicKey,
      address: hash_exports.calculateContractAddressFromHash(
        publicKey,
        this.accountClassHash,
        CallData.compile({ publicKey }),
        0
      )
    };
  }
  async create(options) {
    var _a;
    if (!this.isInitialized) {
      throw new Error("BurnerManager is not initialized");
    }
    this.updateIsDeploying(true);
    const { privateKey, publicKey, address } = this.generateKeysAndAddress(options);
    if (!this.masterAccount) {
      throw new Error("wallet account not found");
    }
    try {
      await prefundAccount(
        address,
        this.masterAccount,
        this.feeTokenAddress,
        (options == null ? void 0 : options.prefundedAmount) || PREFUND_AMOUNT
      );
    } catch (e) {
      console.error(`burner manager create() error:`, e);
      this.updateIsDeploying(false);
    }
    const accountOptions = {
      classHash: this.accountClassHash,
      constructorCalldata: CallData.compile({ publicKey }),
      addressSalt: publicKey
    };
    const burner = new Account(this.provider, address, privateKey, "1");
    let deployTx = "";
    try {
      const nonce = await ((_a = this.account) == null ? void 0 : _a.getNonce());
      const { transaction_hash } = await burner.deployAccount(
        accountOptions,
        {
          nonce,
          maxFee: 0
          // TODO: update
        }
      );
      deployTx = transaction_hash;
    } catch (error) {
      this.updateIsDeploying(false);
      throw error;
    }
    let isDeployed = false;
    try {
      isDeployed = await this.isBurnerDeployed(deployTx);
    } catch {
    }
    if (!isDeployed) {
      const receipt = await this.masterAccount.waitForTransaction(
        deployTx,
        {
          retryInterval: 100
        }
      );
      if (!receipt) {
        throw new Error("Transaction did not complete successfully.");
      }
    }
    const storage = this.getBurnerStorage();
    for (let address2 in storage) {
      storage[address2].active = false;
    }
    storage[address] = {
      chainId: this.chainId,
      privateKey,
      publicKey,
      deployTx,
      masterAccount: this.masterAccount.address,
      active: true
    };
    if (options == null ? void 0 : options.secret) {
      storage[address].accountIndex = options.index;
    }
    if (options == null ? void 0 : options.metadata) {
      storage[address].metadata = options.metadata;
    }
    this.account = burner;
    this.updateIsDeploying(false);
    storage_default.set(this.getBurnerKey(), storage);
    if (this.afterDeploying) {
      try {
        await this.afterDeploying({ account: this.account, deployTx });
      } catch (e) {
        console.log("error on afterDeploying", e);
      }
    }
    return burner;
  }
  async copyBurnersToClipboard() {
    const burners = this.getBurnerStorage();
    try {
      await navigator.clipboard.writeText(JSON.stringify(burners));
    } catch (error) {
      throw error;
    }
  }
  async setBurnersFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      const burners = JSON.parse(text);
      let activeAddress = null;
      for (const [address, burner] of Object.entries(burners)) {
        if (burner.active) {
          activeAddress = address;
          break;
        }
      }
      storage_default.set(this.getBurnerKey(), burners);
      if (activeAddress) {
        this.select(activeAddress);
      }
    } catch (error) {
      throw error;
    }
  }
};
var useBurner = () => {
  const initParams = (0, import_react18.useContext)(BurnerContext);
  if (!initParams) {
    throw new Error("useBurner must be used within a BurnerProvider");
  }
  const burnerManager = (0, import_react18.useMemo)(
    () => new BurnerManager(initParams),
    [initParams]
  );
  const [account, setAccount] = (0, import_react18.useState)(null);
  const [count, setCount] = (0, import_react18.useState)(0);
  const [isDeploying, setIsDeploying] = (0, import_react18.useState)(false);
  (0, import_react18.useEffect)(() => {
    (async () => {
      await burnerManager.init();
      setAccount(burnerManager.getActiveAccount());
      setCount(burnerManager.list().length);
    })();
  }, []);
  const list = (0, import_react18.useCallback)(() => {
    return burnerManager.list();
  }, [count]);
  const select = (0, import_react18.useCallback)(
    (address) => {
      burnerManager.select(address);
      setAccount(burnerManager.getActiveAccount());
    },
    [burnerManager]
  );
  const get = (0, import_react18.useCallback)(
    (address) => {
      return burnerManager.get(address);
    },
    [burnerManager]
  );
  const clear = (0, import_react18.useCallback)(() => {
    burnerManager.clear();
    setCount(0);
  }, [burnerManager]);
  const create = (0, import_react18.useCallback)(
    async (options) => {
      burnerManager.setIsDeployingCallback(setIsDeploying);
      const newAccount = await burnerManager.create(options);
      setAccount(newAccount);
      setCount((prev) => prev + 1);
      return newAccount;
    },
    [burnerManager]
  );
  const listConnectors = (0, import_react18.useCallback)(() => {
    const burners = list();
    return burners.map((burner) => {
      return new BurnerConnector(
        {
          id: burner.address,
          name: "Dojo Burner"
        },
        get(burner.address)
      );
    });
  }, [burnerManager.isDeploying]);
  const copyToClipboard = (0, import_react18.useCallback)(async () => {
    await burnerManager.copyBurnersToClipboard();
  }, [burnerManager]);
  const applyFromClipboard = (0, import_react18.useCallback)(async () => {
    await burnerManager.setBurnersFromClipboard();
    setAccount(burnerManager.getActiveAccount());
    setCount(burnerManager.list().length);
  }, [burnerManager]);
  const generateAddressFromSeed = (0, import_react18.useCallback)(
    (options) => {
      const { address } = burnerManager.generateKeysAndAddress(options);
      return address;
    },
    [burnerManager]
  );
  return {
    get,
    list,
    select,
    create,
    listConnectors,
    clear,
    account,
    isDeploying,
    count,
    copyToClipboard,
    applyFromClipboard,
    generateAddressFromSeed
  };
};
var useBurnerManager = ({
  burnerManager
}) => {
  const [isError, setIsError] = (0, import_react19.useState)(false);
  const [account, setAccount] = (0, import_react19.useState)(null);
  const [count, setCount] = (0, import_react19.useState)(0);
  const [isDeploying, setIsDeploying] = (0, import_react19.useState)(false);
  (0, import_react19.useEffect)(() => {
    if (!burnerManager) {
      setIsError(true);
      console.error("BurnerManager object must be provided");
      return;
    }
    if (!burnerManager.isInitialized) {
      throw new Error("BurnerManager must be intialized");
    }
    if (!burnerManager.masterAccount) {
      throw new Error("BurnerManager Master Account must be provided");
    }
    setIsError(false);
    (async () => {
      setAccount(burnerManager.getActiveAccount());
      setCount(burnerManager.list().length);
    })();
  }, [burnerManager]);
  const list = (0, import_react19.useCallback)(() => {
    return (burnerManager == null ? void 0 : burnerManager.list()) ?? [];
  }, [count]);
  const select = (0, import_react19.useCallback)(
    (address) => {
      burnerManager.select(address);
      setAccount(burnerManager.getActiveAccount());
    },
    [burnerManager]
  );
  const deselect = (0, import_react19.useCallback)(() => {
    burnerManager.deselect();
    setAccount(null);
  }, [burnerManager]);
  const get = (0, import_react19.useCallback)(
    (address) => {
      return burnerManager.get(address);
    },
    [burnerManager]
  );
  const remove = (0, import_react19.useCallback)(
    (address) => {
      burnerManager.delete(address);
      setCount((prev) => Math.max(prev - 1, 0));
    },
    [burnerManager]
  );
  const clear = (0, import_react19.useCallback)(() => {
    burnerManager.clear();
    setCount(0);
  }, [burnerManager]);
  const create = (0, import_react19.useCallback)(
    async (options) => {
      burnerManager.setIsDeployingCallback(setIsDeploying);
      const newAccount = await burnerManager.create(options);
      setAccount(newAccount);
      setCount((prev) => prev + 1);
      return newAccount;
    },
    [burnerManager]
  );
  const listConnectors = (0, import_react19.useCallback)(() => {
    const burners = list();
    return burners.map((burner) => {
      return new BurnerConnector(
        {
          id: burner.address,
          name: "Dojo Burner"
        },
        get(burner.address)
      );
    });
  }, [burnerManager == null ? void 0 : burnerManager.isDeploying]);
  const copyToClipboard = (0, import_react19.useCallback)(async () => {
    await burnerManager.copyBurnersToClipboard();
  }, [burnerManager]);
  const applyFromClipboard = (0, import_react19.useCallback)(async () => {
    await burnerManager.setBurnersFromClipboard();
    setAccount(burnerManager.getActiveAccount());
    setCount(burnerManager.list().length);
  }, [burnerManager]);
  const generateAddressFromSeed = (0, import_react19.useCallback)(
    (options) => {
      const { address } = burnerManager.generateKeysAndAddress(options);
      return address;
    },
    [burnerManager]
  );
  return {
    isError,
    get,
    list,
    select,
    deselect,
    remove,
    create,
    listConnectors,
    clear,
    account,
    isDeploying,
    count,
    copyToClipboard,
    applyFromClipboard,
    generateAddressFromSeed
  };
};
var useBurnerWindowObject = (burnerManager) => {
  const [isInitialized, setIsInitialized] = (0, import_react20.useState)(false);
  const [isError, setIsError] = (0, import_react20.useState)(false);
  const [error, setError] = (0, import_react20.useState)();
  (0, import_react20.useEffect)(() => {
    const initAsync = async () => {
      if (!burnerManager) {
        setIsInitialized(true);
        return;
      }
      try {
        if (!burnerManager.isInitialized) {
          await burnerManager.init();
        }
        const starknetWindowObject = new DojoBurnerStarknetWindowObject(
          burnerManager
        );
        const key = `starknet_${starknetWindowObject.id}`;
        window[key] = starknetWindowObject;
        setIsInitialized(true);
      } catch (e) {
        console.log(e);
        setIsError(true);
        setError("failed to initialize burnerManager");
      }
    };
    initAsync();
  }, [burnerManager]);
  return { isInitialized, isError, error };
};
var usePredeployedWindowObject = (predeployedManager) => {
  const [isInitialized, setIsInitialized] = (0, import_react21.useState)(false);
  const [isError, setIsError] = (0, import_react21.useState)(false);
  const [error, setError] = (0, import_react21.useState)();
  (0, import_react21.useEffect)(() => {
    const initAsync = async () => {
      if (!predeployedManager) {
        setIsInitialized(true);
        return;
      }
      try {
        if (!predeployedManager.isInitialized) {
          await predeployedManager.init();
        }
        const starknetWindowObject = new DojoPredeployedStarknetWindowObject(predeployedManager);
        const key = `starknet_${starknetWindowObject.id}`;
        window[key] = starknetWindowObject;
        setIsInitialized(true);
      } catch (e) {
        console.log(e);
        setIsError(true);
        setError("failed to initialize predeployedManager");
      }
    };
    initAsync();
  }, [predeployedManager]);
  return { isInitialized, isError, error };
};
var PredeployedManager2 = class {
  constructor({
    rpcProvider,
    predeployedAccounts
  }) {
    __publicField(this, "provider");
    __publicField(this, "chainId", "");
    __publicField(this, "account", null);
    __publicField(this, "predeployedAccounts", []);
    __publicField(this, "isInitialized", false);
    this.provider = rpcProvider;
    this.predeployedAccounts = predeployedAccounts;
  }
  getStorageKey() {
    return `predeployed_${this.chainId}`;
  }
  getStorage() {
    return storage_default.get(this.getStorageKey()) || {};
  }
  setActiveAccount(storage) {
    for (let address in storage) {
      if (storage[address].active) {
        this.account = new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
        return;
      }
    }
  }
  async init() {
    this.chainId = shortString_exports.decodeShortString(
      await this.provider.getChainId()
    );
    const storage = this.getStorage();
    const addresses = Object.keys(storage);
    if (addresses.length) {
      storage_default.set(this.getStorageKey(), storage);
      this.setActiveAccount(storage);
    } else {
      const storage2 = this.getStorage();
      for (let predeployed of this.predeployedAccounts) {
        storage2[predeployed.address] = predeployed;
      }
      storage_default.set(this.getStorageKey(), storage2);
    }
    this.isInitialized = true;
  }
  list() {
    const storage = this.getStorage();
    return Object.keys(storage).map((address) => {
      return {
        address,
        name: storage[address].name,
        active: storage[address].active
      };
    });
  }
  select(address) {
    const storage = this.getStorage();
    if (!storage[address]) {
      throw new Error("predeployed not found");
    }
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage[address].active = true;
    storage_default.set(this.getStorageKey(), storage);
    this.account = new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  get(address) {
    const storage = this.getStorage();
    if (!storage[address]) {
      throw new Error("predeployed not found");
    }
    return new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  delete(address) {
    const storage = this.getStorage();
    if (!storage[address]) {
      throw new Error("predeployed not found");
    }
    delete storage[address];
    storage_default.set(this.getStorageKey(), storage);
  }
  clear() {
    storage_default.remove(this.getStorageKey());
  }
  getActiveAccount() {
    const storage = this.getStorage();
    for (let address in storage) {
      if (storage[address].active) {
        return new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
      }
    }
    return null;
  }
};
export {
  BurnerConnector,
  BurnerContext,
  BurnerManager,
  BurnerProvider,
  DojoBurnerStarknetWindowObject,
  DojoPredeployedStarknetWindowObject,
  PredeployedManager2 as PredeployedManager,
  katanaIcon,
  prefundAccount,
  useBurner,
  useBurnerManager,
  useBurnerWindowObject,
  usePredeployedWindowObject
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)

@scure/bip32/lib/esm/index.js:
  (*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=@dojoengine_create-burner.js.map
