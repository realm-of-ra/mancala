import {
  esm_exports,
  init_esm,
  require_cookie,
  require_fetch_npm_browserify,
  require_set_cookie,
  require_url_join
} from "./chunk-OPAFF7F5.js";
import {
  __commonJS,
  __publicField,
  __toCommonJS
} from "./chunk-J32WSRGE.js";

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/errors.js
var require_errors = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/components.js
var require_components = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/components.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/nonspec.js
var require_nonspec = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/nonspec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ETransactionVersion3 = exports.ETransactionVersion2 = exports.ETransactionVersion = exports.EDAMode = exports.EDataAvailabilityMode = exports.EBlockTag = exports.ETransactionExecutionStatus = exports.ETransactionFinalityStatus = exports.ETransactionStatus = exports.ESimulationFlag = exports.ETransactionType = void 0;
    var ETransactionType;
    (function(ETransactionType2) {
      ETransactionType2["DECLARE"] = "DECLARE";
      ETransactionType2["DEPLOY"] = "DEPLOY";
      ETransactionType2["DEPLOY_ACCOUNT"] = "DEPLOY_ACCOUNT";
      ETransactionType2["INVOKE"] = "INVOKE";
      ETransactionType2["L1_HANDLER"] = "L1_HANDLER";
    })(ETransactionType || (exports.ETransactionType = ETransactionType = {}));
    var ESimulationFlag;
    (function(ESimulationFlag2) {
      ESimulationFlag2["SKIP_VALIDATE"] = "SKIP_VALIDATE";
      ESimulationFlag2["SKIP_FEE_CHARGE"] = "SKIP_FEE_CHARGE";
    })(ESimulationFlag || (exports.ESimulationFlag = ESimulationFlag = {}));
    var ETransactionStatus;
    (function(ETransactionStatus2) {
      ETransactionStatus2["RECEIVED"] = "RECEIVED";
      ETransactionStatus2["REJECTED"] = "REJECTED";
      ETransactionStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      ETransactionStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
    })(ETransactionStatus || (exports.ETransactionStatus = ETransactionStatus = {}));
    var ETransactionFinalityStatus;
    (function(ETransactionFinalityStatus2) {
      ETransactionFinalityStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      ETransactionFinalityStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
    })(ETransactionFinalityStatus || (exports.ETransactionFinalityStatus = ETransactionFinalityStatus = {}));
    var ETransactionExecutionStatus;
    (function(ETransactionExecutionStatus2) {
      ETransactionExecutionStatus2["SUCCEEDED"] = "SUCCEEDED";
      ETransactionExecutionStatus2["REVERTED"] = "REVERTED";
    })(ETransactionExecutionStatus || (exports.ETransactionExecutionStatus = ETransactionExecutionStatus = {}));
    var EBlockTag;
    (function(EBlockTag2) {
      EBlockTag2["LATEST"] = "latest";
      EBlockTag2["PENDING"] = "pending";
    })(EBlockTag || (exports.EBlockTag = EBlockTag = {}));
    var EDataAvailabilityMode;
    (function(EDataAvailabilityMode2) {
      EDataAvailabilityMode2["L1"] = "L1";
      EDataAvailabilityMode2["L2"] = "L2";
    })(EDataAvailabilityMode || (exports.EDataAvailabilityMode = EDataAvailabilityMode = {}));
    var EDAMode;
    (function(EDAMode2) {
      EDAMode2[EDAMode2["L1"] = 0] = "L1";
      EDAMode2[EDAMode2["L2"] = 1] = "L2";
    })(EDAMode || (exports.EDAMode = EDAMode = {}));
    var ETransactionVersion;
    (function(ETransactionVersion4) {
      ETransactionVersion4["V0"] = "0x0";
      ETransactionVersion4["V1"] = "0x1";
      ETransactionVersion4["V2"] = "0x2";
      ETransactionVersion4["V3"] = "0x3";
      ETransactionVersion4["F0"] = "0x100000000000000000000000000000000";
      ETransactionVersion4["F1"] = "0x100000000000000000000000000000001";
      ETransactionVersion4["F2"] = "0x100000000000000000000000000000002";
      ETransactionVersion4["F3"] = "0x100000000000000000000000000000003";
    })(ETransactionVersion || (exports.ETransactionVersion = ETransactionVersion = {}));
    var ETransactionVersion2;
    (function(ETransactionVersion22) {
      ETransactionVersion22["V0"] = "0x0";
      ETransactionVersion22["V1"] = "0x1";
      ETransactionVersion22["V2"] = "0x2";
      ETransactionVersion22["F0"] = "0x100000000000000000000000000000000";
      ETransactionVersion22["F1"] = "0x100000000000000000000000000000001";
      ETransactionVersion22["F2"] = "0x100000000000000000000000000000002";
    })(ETransactionVersion2 || (exports.ETransactionVersion2 = ETransactionVersion2 = {}));
    var ETransactionVersion3;
    (function(ETransactionVersion32) {
      ETransactionVersion32["V3"] = "0x3";
      ETransactionVersion32["F3"] = "0x100000000000000000000000000000003";
    })(ETransactionVersion3 || (exports.ETransactionVersion3 = ETransactionVersion3 = {}));
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/index.js
var require_api = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/api/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPEC = exports.Errors = void 0;
    exports.Errors = require_errors();
    exports.SPEC = require_components();
    __exportStar(require_nonspec(), exports);
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Permission = void 0;
    var Permission;
    (function(Permission2) {
      Permission2["Accounts"] = "accounts";
    })(Permission || (exports.Permission = Permission = {}));
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/typedData.js
var require_typedData = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/typedData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypedDataRevision = void 0;
    var TypedDataRevision2;
    (function(TypedDataRevision3) {
      TypedDataRevision3["Active"] = "1";
      TypedDataRevision3["Legacy"] = "0";
    })(TypedDataRevision2 || (exports.TypedDataRevision = TypedDataRevision2 = {}));
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/StarknetWindowObject.js
var require_StarknetWindowObject = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/StarknetWindowObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/components.js
var require_components2 = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/components.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/methods.js
var require_methods = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/methods.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/events.js
var require_events = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/errors.js
var require_errors2 = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/index.js
var require_wallet_api = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/wallet-api/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_constants(), exports);
    __exportStar(require_typedData(), exports);
    __exportStar(require_StarknetWindowObject(), exports);
    __exportStar(require_components2(), exports);
    __exportStar(require_methods(), exports);
    __exportStar(require_events(), exports);
    __exportStar(require_errors2(), exports);
  }
});

// node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/starknet-types@0.7.2/node_modules/starknet-types/dist/cjs/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WALLET_API = exports.API = void 0;
    __exportStar(require_api(), exports);
    exports.API = require_api();
    __exportStar(require_wallet_api(), exports);
    exports.WALLET_API = require_wallet_api();
  }
});

// node_modules/.pnpm/@scure+base@1.1.6/node_modules/@scure/base/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/@scure+base@1.1.6/node_modules/@scure/base/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bytes = exports.stringToBytes = exports.str = exports.bytesToString = exports.hex = exports.utf8 = exports.bech32m = exports.bech32 = exports.base58check = exports.createBase58check = exports.base58xmr = exports.base58xrp = exports.base58flickr = exports.base58 = exports.base64urlnopad = exports.base64url = exports.base64nopad = exports.base64 = exports.base32crockford = exports.base32hex = exports.base32 = exports.base16 = exports.utils = exports.assertNumber = void 0;
    function assertNumber(n) {
      if (!Number.isSafeInteger(n))
        throw new Error(`Wrong integer: ${n}`);
    }
    exports.assertNumber = assertNumber;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    function chain(...args) {
      const id = (a) => a;
      const wrap = (a, b) => (c) => a(b(c));
      const encode2 = args.map((x) => x.encode).reduceRight(wrap, id);
      const decode = args.map((x) => x.decode).reduce(wrap, id);
      return { encode: encode2, decode };
    }
    function alphabet(alphabet2) {
      return {
        encode: (digits) => {
          if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
            throw new Error("alphabet.encode input should be an array of numbers");
          return digits.map((i) => {
            assertNumber(i);
            if (i < 0 || i >= alphabet2.length)
              throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet2.length})`);
            return alphabet2[i];
          });
        },
        decode: (input) => {
          if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
            throw new Error("alphabet.decode input should be array of strings");
          return input.map((letter) => {
            if (typeof letter !== "string")
              throw new Error(`alphabet.decode: not string element=${letter}`);
            const index = alphabet2.indexOf(letter);
            if (index === -1)
              throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
            return index;
          });
        }
      };
    }
    function join(separator = "") {
      if (typeof separator !== "string")
        throw new Error("join separator should be string");
      return {
        encode: (from) => {
          if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
            throw new Error("join.encode input should be array of strings");
          for (let i of from)
            if (typeof i !== "string")
              throw new Error(`join.encode: non-string input=${i}`);
          return from.join(separator);
        },
        decode: (to) => {
          if (typeof to !== "string")
            throw new Error("join.decode input should be string");
          return to.split(separator);
        }
      };
    }
    function padding(bits, chr = "=") {
      assertNumber(bits);
      if (typeof chr !== "string")
        throw new Error("padding chr should be string");
      return {
        encode(data) {
          if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
            throw new Error("padding.encode input should be array of strings");
          for (let i of data)
            if (typeof i !== "string")
              throw new Error(`padding.encode: non-string input=${i}`);
          while (data.length * bits % 8)
            data.push(chr);
          return data;
        },
        decode(input) {
          if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
            throw new Error("padding.encode input should be array of strings");
          for (let i of input)
            if (typeof i !== "string")
              throw new Error(`padding.decode: non-string input=${i}`);
          let end = input.length;
          if (end * bits % 8)
            throw new Error("Invalid padding: string should have whole number of bytes");
          for (; end > 0 && input[end - 1] === chr; end--) {
            if (!((end - 1) * bits % 8))
              throw new Error("Invalid padding: string has too much padding");
          }
          return input.slice(0, end);
        }
      };
    }
    function normalize(fn) {
      if (typeof fn !== "function")
        throw new Error("normalize fn should be function");
      return { encode: (from) => from, decode: (to) => fn(to) };
    }
    function convertRadix(data, from, to) {
      if (from < 2)
        throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
      if (to < 2)
        throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
      if (!Array.isArray(data))
        throw new Error("convertRadix: data should be array");
      if (!data.length)
        return [];
      let pos = 0;
      const res = [];
      const digits = Array.from(data);
      digits.forEach((d) => {
        assertNumber(d);
        if (d < 0 || d >= from)
          throw new Error(`Wrong integer: ${d}`);
      });
      while (true) {
        let carry = 0;
        let done = true;
        for (let i = pos; i < digits.length; i++) {
          const digit = digits[i];
          const digitBase = from * carry + digit;
          if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
            throw new Error("convertRadix: carry overflow");
          }
          carry = digitBase % to;
          const rounded = Math.floor(digitBase / to);
          digits[i] = rounded;
          if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
            throw new Error("convertRadix: carry overflow");
          if (!done)
            continue;
          else if (!rounded)
            pos = i;
          else
            done = false;
        }
        res.push(carry);
        if (done)
          break;
      }
      for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
        res.push(0);
      return res.reverse();
    }
    var gcd = (a, b) => !b ? a : gcd(b, a % b);
    var radix2carry = (from, to) => from + (to - gcd(from, to));
    function convertRadix2(data, from, to, padding2) {
      if (!Array.isArray(data))
        throw new Error("convertRadix2: data should be array");
      if (from <= 0 || from > 32)
        throw new Error(`convertRadix2: wrong from=${from}`);
      if (to <= 0 || to > 32)
        throw new Error(`convertRadix2: wrong to=${to}`);
      if (radix2carry(from, to) > 32) {
        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
      }
      let carry = 0;
      let pos = 0;
      const mask = 2 ** to - 1;
      const res = [];
      for (const n of data) {
        assertNumber(n);
        if (n >= 2 ** from)
          throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = carry << from | n;
        if (pos + from > 32)
          throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
          res.push((carry >> pos - to & mask) >>> 0);
        carry &= 2 ** pos - 1;
      }
      carry = carry << to - pos & mask;
      if (!padding2 && pos >= from)
        throw new Error("Excess padding");
      if (!padding2 && carry)
        throw new Error(`Non-zero padding: ${carry}`);
      if (padding2 && pos > 0)
        res.push(carry >>> 0);
      return res;
    }
    function radix(num2) {
      assertNumber(num2);
      return {
        encode: (bytes) => {
          if (!isBytes(bytes))
            throw new Error("radix.encode input should be Uint8Array");
          return convertRadix(Array.from(bytes), 2 ** 8, num2);
        },
        decode: (digits) => {
          if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
            throw new Error("radix.decode input should be array of numbers");
          return Uint8Array.from(convertRadix(digits, num2, 2 ** 8));
        }
      };
    }
    function radix2(bits, revPadding = false) {
      assertNumber(bits);
      if (bits <= 0 || bits > 32)
        throw new Error("radix2: bits should be in (0..32]");
      if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error("radix2: carry overflow");
      return {
        encode: (bytes) => {
          if (!isBytes(bytes))
            throw new Error("radix2.encode input should be Uint8Array");
          return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
          if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
            throw new Error("radix2.decode input should be array of numbers");
          return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        }
      };
    }
    function unsafeWrapper(fn) {
      if (typeof fn !== "function")
        throw new Error("unsafeWrapper fn should be function");
      return function(...args) {
        try {
          return fn.apply(null, args);
        } catch (e) {
        }
      };
    }
    function checksum(len, fn) {
      assertNumber(len);
      if (typeof fn !== "function")
        throw new Error("checksum fn should be function");
      return {
        encode(data) {
          if (!isBytes(data))
            throw new Error("checksum.encode: input should be Uint8Array");
          const checksum2 = fn(data).slice(0, len);
          const res = new Uint8Array(data.length + len);
          res.set(data);
          res.set(checksum2, data.length);
          return res;
        },
        decode(data) {
          if (!isBytes(data))
            throw new Error("checksum.decode: input should be Uint8Array");
          const payload = data.slice(0, -len);
          const newChecksum = fn(payload).slice(0, len);
          const oldChecksum = data.slice(-len);
          for (let i = 0; i < len; i++)
            if (newChecksum[i] !== oldChecksum[i])
              throw new Error("Invalid checksum");
          return payload;
        }
      };
    }
    exports.utils = {
      alphabet,
      chain,
      checksum,
      convertRadix,
      convertRadix2,
      radix,
      radix2,
      join,
      padding
    };
    exports.base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
    exports.base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
    exports.base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
    exports.base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
    exports.base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
    exports.base64nopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), join(""));
    exports.base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
    exports.base64urlnopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), join(""));
    var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
    exports.base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    exports.base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
    exports.base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
    var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
    exports.base58xmr = {
      encode(data) {
        let res = "";
        for (let i = 0; i < data.length; i += 8) {
          const block = data.subarray(i, i + 8);
          res += exports.base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
        }
        return res;
      },
      decode(str) {
        let res = [];
        for (let i = 0; i < str.length; i += 11) {
          const slice = str.slice(i, i + 11);
          const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
          const block = exports.base58.decode(slice);
          for (let j = 0; j < block.length - blockLen; j++) {
            if (block[j] !== 0)
              throw new Error("base58xmr: wrong padding");
          }
          res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
      }
    };
    var createBase58check = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), exports.base58);
    exports.createBase58check = createBase58check;
    exports.base58check = exports.createBase58check;
    var BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
    var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
    function bech32Polymod(pre) {
      const b = pre >> 25;
      let chk = (pre & 33554431) << 5;
      for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if ((b >> i & 1) === 1)
          chk ^= POLYMOD_GENERATORS[i];
      }
      return chk;
    }
    function bechChecksum(prefix, words, encodingConst = 1) {
      const len = prefix.length;
      let chk = 1;
      for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
          throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ c >> 5;
      }
      chk = bech32Polymod(chk);
      for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
      for (let v of words)
        chk = bech32Polymod(chk) ^ v;
      for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
      chk ^= encodingConst;
      return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
    }
    function genBech32(encoding) {
      const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
      const _words = radix2(5);
      const fromWords = _words.decode;
      const toWords = _words.encode;
      const fromWordsUnsafe = unsafeWrapper(fromWords);
      function encode2(prefix, words, limit = 90) {
        if (typeof prefix !== "string")
          throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
          throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        if (prefix.length === 0)
          throw new TypeError(`Invalid prefix length ${prefix.length}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit)
          throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        const lowered = prefix.toLowerCase();
        const sum = bechChecksum(lowered, words, ENCODING_CONST);
        return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
      }
      function decode(str, limit = 90) {
        if (typeof str !== "string")
          throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || limit !== false && str.length > limit)
          throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
          throw new Error(`String must be lowercase or uppercase`);
        const sepIndex = lowered.lastIndexOf("1");
        if (sepIndex === 0 || sepIndex === -1)
          throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = lowered.slice(0, sepIndex);
        const data = lowered.slice(sepIndex + 1);
        if (data.length < 6)
          throw new Error("Data must be at least 6 characters long");
        const words = BECH_ALPHABET.decode(data).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!data.endsWith(sum))
          throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return { prefix, words };
      }
      const decodeUnsafe = unsafeWrapper(decode);
      function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return { prefix, words, bytes: fromWords(words) };
      }
      return { encode: encode2, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
    }
    exports.bech32 = genBech32("bech32");
    exports.bech32m = genBech32("bech32m");
    exports.utf8 = {
      encode: (data) => new TextDecoder().decode(data),
      decode: (str) => new TextEncoder().encode(str)
    };
    exports.hex = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s) => {
      if (typeof s !== "string" || s.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
      return s.toLowerCase();
    }));
    var CODERS = {
      utf8: exports.utf8,
      hex: exports.hex,
      base16: exports.base16,
      base32: exports.base32,
      base64: exports.base64,
      base64url: exports.base64url,
      base58: exports.base58,
      base58xmr: exports.base58xmr
    };
    var coderTypeError = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
    var bytesToString = (type, bytes) => {
      if (typeof type !== "string" || !CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
      if (!isBytes(bytes))
        throw new TypeError("bytesToString() expects Uint8Array");
      return CODERS[type].encode(bytes);
    };
    exports.bytesToString = bytesToString;
    exports.str = exports.bytesToString;
    var stringToBytes = (type, str) => {
      if (!CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
      if (typeof str !== "string")
        throw new TypeError("stringToBytes() expects string");
      return CODERS[type].decode(str);
    };
    exports.stringToBytes = stringToBytes;
    exports.bytes = exports.stringToBytes;
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateObject = exports.createHmacDrbg = exports.bitMask = exports.bitSet = exports.bitGet = exports.bitLen = exports.utf8ToBytes = exports.equalBytes = exports.concatBytes = exports.ensureBytes = exports.numberToVarBytesBE = exports.numberToBytesLE = exports.numberToBytesBE = exports.bytesToNumberLE = exports.bytesToNumberBE = exports.hexToBytes = exports.hexToNumber = exports.numberToHexUnpadded = exports.bytesToHex = exports.abytes = exports.isBytes = void 0;
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    exports.isBytes = isBytes;
    function abytes(item) {
      if (!isBytes(item))
        throw new Error("Uint8Array expected");
    }
    exports.abytes = abytes;
    var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      abytes(bytes);
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    function numberToHexUnpadded(num2) {
      const hex = num2.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    }
    exports.numberToHexUnpadded = numberToHexUnpadded;
    function hexToNumber(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      return BigInt(hex === "" ? "0" : `0x${hex}`);
    }
    exports.hexToNumber = hexToNumber;
    var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
      }
      return array;
    }
    exports.hexToBytes = hexToBytes;
    function bytesToNumberBE(bytes) {
      return hexToNumber(bytesToHex(bytes));
    }
    exports.bytesToNumberBE = bytesToNumberBE;
    function bytesToNumberLE(bytes) {
      abytes(bytes);
      return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
    }
    exports.bytesToNumberLE = bytesToNumberLE;
    function numberToBytesBE(n, len) {
      return hexToBytes(n.toString(16).padStart(len * 2, "0"));
    }
    exports.numberToBytesBE = numberToBytesBE;
    function numberToBytesLE(n, len) {
      return numberToBytesBE(n, len).reverse();
    }
    exports.numberToBytesLE = numberToBytesLE;
    function numberToVarBytesBE(n) {
      return hexToBytes(numberToHexUnpadded(n));
    }
    exports.numberToVarBytesBE = numberToVarBytesBE;
    function ensureBytes(title, hex, expectedLength) {
      let res;
      if (typeof hex === "string") {
        try {
          res = hexToBytes(hex);
        } catch (e) {
          throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
      } else if (isBytes(hex)) {
        res = Uint8Array.from(hex);
      } else {
        throw new Error(`${title} must be hex string or Uint8Array`);
      }
      const len = res.length;
      if (typeof expectedLength === "number" && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
      return res;
    }
    exports.ensureBytes = ensureBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
      }
      const res = new Uint8Array(sum);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    function equalBytes(a, b) {
      if (a.length !== b.length)
        return false;
      let diff = 0;
      for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
      return diff === 0;
    }
    exports.equalBytes = equalBytes;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function bitLen(n) {
      let len;
      for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
      return len;
    }
    exports.bitLen = bitLen;
    function bitGet(n, pos) {
      return n >> BigInt(pos) & _1n;
    }
    exports.bitGet = bitGet;
    function bitSet(n, pos, value) {
      return n | (value ? _1n : _0n) << BigInt(pos);
    }
    exports.bitSet = bitSet;
    var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
    exports.bitMask = bitMask;
    var u8n = (data) => new Uint8Array(data);
    var u8fr = (arr) => Uint8Array.from(arr);
    function createHmacDrbg(hashLen, qByteLen, hmacFn) {
      if (typeof hashLen !== "number" || hashLen < 2)
        throw new Error("hashLen must be a number");
      if (typeof qByteLen !== "number" || qByteLen < 2)
        throw new Error("qByteLen must be a number");
      if (typeof hmacFn !== "function")
        throw new Error("hmacFn must be a function");
      let v = u8n(hashLen);
      let k = u8n(hashLen);
      let i = 0;
      const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
      };
      const h = (...b) => hmacFn(k, v, ...b);
      const reseed = (seed = u8n()) => {
        k = h(u8fr([0]), seed);
        v = h();
        if (seed.length === 0)
          return;
        k = h(u8fr([1]), seed);
        v = h();
      };
      const gen = () => {
        if (i++ >= 1e3)
          throw new Error("drbg: tried 1000 values");
        let len = 0;
        const out = [];
        while (len < qByteLen) {
          v = h();
          const sl = v.slice();
          out.push(sl);
          len += v.length;
        }
        return concatBytes(...out);
      };
      const genUntil = (seed, pred) => {
        reset();
        reseed(seed);
        let res = void 0;
        while (!(res = pred(gen())))
          reseed();
        reset();
        return res;
      };
      return genUntil;
    }
    exports.createHmacDrbg = createHmacDrbg;
    var validatorFns = {
      bigint: (val) => typeof val === "bigint",
      function: (val) => typeof val === "function",
      boolean: (val) => typeof val === "boolean",
      string: (val) => typeof val === "string",
      stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object) => object.Fp.isValid(val),
      hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
    };
    function validateObject(object, validators, optValidators = {}) {
      const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== "function")
          throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === void 0)
          return;
        if (!checkVal(val, object)) {
          throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
      };
      for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
      for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
      return object;
    }
    exports.validateObject = validateObject;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/_assert.js
var require_assert = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/_assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
    function number(n) {
      if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
    }
    exports.number = number;
    function bool(b) {
      if (typeof b !== "boolean")
        throw new Error(`Expected boolean, not ${b}`);
    }
    exports.bool = bool;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    function bytes(b, ...lengths) {
      if (!isBytes(b))
        throw new Error("Expected Uint8Array");
      if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
    }
    exports.bytes = bytes;
    function hash2(hash3) {
      if (typeof hash3 !== "function" || typeof hash3.create !== "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
      number(hash3.outputLen);
      number(hash3.blockLen);
    }
    exports.hash = hash2;
    function exists(instance, checkFinished = true) {
      if (instance.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance.finished)
        throw new Error("Hash#digest() has already been called");
    }
    exports.exists = exists;
    function output(out, instance) {
      bytes(out);
      const min = instance.outputLen;
      if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
    }
    exports.output = output;
    var assert = { number, bool, bytes, hash: hash2, exists, output };
    exports.default = assert;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/_u64.js
var require_u64 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/_u64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.add = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = exports.split = exports.fromBig = void 0;
    var U32_MASK64 = BigInt(2 ** 32 - 1);
    var _32n = BigInt(32);
    function fromBig(n, le = false) {
      if (le)
        return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
      return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
    }
    exports.fromBig = fromBig;
    function split(lst, le = false) {
      let Ah = new Uint32Array(lst.length);
      let Al = new Uint32Array(lst.length);
      for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
      }
      return [Ah, Al];
    }
    exports.split = split;
    var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
    exports.toBig = toBig;
    var shrSH = (h, _l, s) => h >>> s;
    exports.shrSH = shrSH;
    var shrSL = (h, l, s) => h << 32 - s | l >>> s;
    exports.shrSL = shrSL;
    var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
    exports.rotrSH = rotrSH;
    var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
    exports.rotrSL = rotrSL;
    var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
    exports.rotrBH = rotrBH;
    var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
    exports.rotrBL = rotrBL;
    var rotr32H = (_h, l) => l;
    exports.rotr32H = rotr32H;
    var rotr32L = (h, _l) => h;
    exports.rotr32L = rotr32L;
    var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    exports.rotlSH = rotlSH;
    var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    exports.rotlSL = rotlSL;
    var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    exports.rotlBH = rotlBH;
    var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
    exports.rotlBL = rotlBL;
    function add(Ah, Al, Bh, Bl) {
      const l = (Al >>> 0) + (Bl >>> 0);
      return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
    }
    exports.add = add;
    var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    exports.add3L = add3L;
    var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
    exports.add3H = add3H;
    var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    exports.add4L = add4L;
    var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
    exports.add4H = add4H;
    var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    exports.add5L = add5L;
    var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
    exports.add5H = add5H;
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
    exports.default = u64;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/crypto.js
var require_crypto = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crypto = void 0;
    exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
    var crypto_1 = require_crypto();
    var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.u8 = u8;
    var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    exports.u32 = u32;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.createView = createView;
    var rotr = (word, shift) => word << 32 - shift | word >>> shift;
    exports.rotr = rotr;
    exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    if (!exports.isLE)
      throw new Error("Non little-endian hardware is not supported");
    var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
      }
      return array;
    }
    exports.hexToBytes = hexToBytes;
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i = 0; i < iters; i++) {
        cb(i);
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts += diff;
      }
    }
    exports.asyncLoop = asyncLoop;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function toBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      if (!isBytes(data))
        throw new Error(`expected Uint8Array, got ${typeof data}`);
      return data;
    }
    exports.toBytes = toBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
          throw new Error("Uint8Array expected");
        sum += a.length;
      }
      const res = new Uint8Array(sum);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    var Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
    exports.Hash = Hash;
    var toStr = {}.toString;
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    exports.checkOpts = checkOpts;
    function wrapConstructor(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
    }
    exports.wrapConstructor = wrapConstructor;
    function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
    function wrapXOFConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
    function randomBytes(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
    exports.randomBytes = randomBytes;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/sha3.js
var require_sha3 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/sha3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = exports.keccakP = void 0;
    var _assert_js_1 = require_assert();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils2();
    var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _7n = BigInt(7);
    var _256n = BigInt(256);
    var _0x71n = BigInt(113);
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    var [SHA3_IOTA_H, SHA3_IOTA_L] = (0, _u64_js_1.split)(_SHA3_IOTA, true);
    var rotlH = (h, l, s) => s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s);
    var rotlL = (h, l, s) => s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s);
    function keccakP(s, rounds = 24) {
      const B = new Uint32Array(5 * 2);
      for (let round = 24 - rounds; round < 24; round++) {
        for (let x = 0; x < 10; x++)
          B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
          const idx1 = (x + 8) % 10;
          const idx0 = (x + 2) % 10;
          const B0 = B[idx0];
          const B1 = B[idx0 + 1];
          const Th = rotlH(B0, B1, 1) ^ B[idx1];
          const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
          for (let y = 0; y < 50; y += 10) {
            s[x + y] ^= Th;
            s[x + y + 1] ^= Tl;
          }
        }
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
          const shift = SHA3_ROTL[t];
          const Th = rotlH(curH, curL, shift);
          const Tl = rotlL(curH, curL, shift);
          const PI = SHA3_PI[t];
          curH = s[PI];
          curL = s[PI + 1];
          s[PI] = Th;
          s[PI + 1] = Tl;
        }
        for (let y = 0; y < 50; y += 10) {
          for (let x = 0; x < 10; x++)
            B[x] = s[y + x];
          for (let x = 0; x < 10; x++)
            s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
      }
      B.fill(0);
    }
    exports.keccakP = keccakP;
    var Keccak = class _Keccak extends utils_js_1.Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.number)(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
      }
      keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const { blockLen, state } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        (0, _assert_js_1.exists)(this, false);
        (0, _assert_js_1.bytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        (0, _assert_js_1.number)(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        (0, _assert_js_1.output)(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    exports.Keccak = Keccak;
    var gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
    exports.sha3_224 = gen(6, 144, 224 / 8);
    exports.sha3_256 = gen(6, 136, 256 / 8);
    exports.sha3_384 = gen(6, 104, 384 / 8);
    exports.sha3_512 = gen(6, 72, 512 / 8);
    exports.keccak_224 = gen(1, 144, 224 / 8);
    exports.keccak_256 = gen(1, 136, 256 / 8);
    exports.keccak_384 = gen(1, 104, 384 / 8);
    exports.keccak_512 = gen(1, 72, 512 / 8);
    var genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    exports.shake128 = genShake(31, 168, 128 / 8);
    exports.shake256 = genShake(31, 136, 256 / 8);
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/_sha2.js
var require_sha2 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/_sha2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SHA2 = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils2();
    function setBigUint64(view, byteOffset, value, isLE) {
      if (typeof view.setBigUint64 === "function")
        return view.setBigUint64(byteOffset, value, isLE);
      const _32n = BigInt(32);
      const _u32_max = BigInt(4294967295);
      const wh = Number(value >> _32n & _u32_max);
      const wl = Number(value & _u32_max);
      const h = isLE ? 4 : 0;
      const l = isLE ? 0 : 4;
      view.setUint32(byteOffset + h, wh, isLE);
      view.setUint32(byteOffset + l, wl, isLE);
    }
    var SHA2 = class extends utils_js_1.Hash {
      constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = (0, utils_js_1.createView)(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i = pos; i < blockLen; i++)
          buffer[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE);
      }
      digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
          to.buffer.set(buffer);
        return to;
      }
    };
    exports.SHA2 = SHA2;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/sha256.js
var require_sha256 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/sha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sha224 = exports.sha256 = void 0;
    var _sha2_js_1 = require_sha2();
    var utils_js_1 = require_utils2();
    var Chi = (a, b, c) => a & b ^ ~a & c;
    var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
    var SHA256_K = new Uint32Array([
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
    var IV = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SHA256_W = new Uint32Array(64);
    var SHA256 = class extends _sha2_js_1.SHA2 {
      constructor() {
        super(64, 32, 8, false);
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
      }
      get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
      }
      // prettier-ignore
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
          const W15 = SHA256_W[i - 15];
          const W2 = SHA256_W[i - 2];
          const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
          const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
          const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
          const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
          const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
          const T2 = sigma0 + Maj(A, B, C) | 0;
          H = G;
          G = F;
          F = E;
          E = D + T1 | 0;
          D = C;
          C = B;
          B = A;
          A = T1 + T2 | 0;
        }
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        SHA256_W.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
      }
    };
    var SHA224 = class extends SHA256 {
      constructor() {
        super();
        this.A = 3238371032 | 0;
        this.B = 914150663 | 0;
        this.C = 812702999 | 0;
        this.D = 4144912697 | 0;
        this.E = 4290775857 | 0;
        this.F = 1750603025 | 0;
        this.G = 1694076839 | 0;
        this.H = 3204075428 | 0;
        this.outputLen = 28;
      }
    };
    exports.sha256 = (0, utils_js_1.wrapConstructor)(() => new SHA256());
    exports.sha224 = (0, utils_js_1.wrapConstructor)(() => new SHA224());
  }
});

// node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/utils.js
var require_utils3 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateObject = exports.createHmacDrbg = exports.bitMask = exports.bitSet = exports.bitGet = exports.bitLen = exports.utf8ToBytes = exports.equalBytes = exports.concatBytes = exports.ensureBytes = exports.numberToVarBytesBE = exports.numberToBytesLE = exports.numberToBytesBE = exports.bytesToNumberLE = exports.bytesToNumberBE = exports.hexToBytes = exports.hexToNumber = exports.numberToHexUnpadded = exports.bytesToHex = exports.isBytes = void 0;
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    exports.isBytes = isBytes;
    var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    function numberToHexUnpadded(num2) {
      const hex = num2.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    }
    exports.numberToHexUnpadded = numberToHexUnpadded;
    function hexToNumber(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      return BigInt(hex === "" ? "0" : `0x${hex}`);
    }
    exports.hexToNumber = hexToNumber;
    var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
      }
      return array;
    }
    exports.hexToBytes = hexToBytes;
    function bytesToNumberBE(bytes) {
      return hexToNumber(bytesToHex(bytes));
    }
    exports.bytesToNumberBE = bytesToNumberBE;
    function bytesToNumberLE(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
    }
    exports.bytesToNumberLE = bytesToNumberLE;
    function numberToBytesBE(n, len) {
      return hexToBytes(n.toString(16).padStart(len * 2, "0"));
    }
    exports.numberToBytesBE = numberToBytesBE;
    function numberToBytesLE(n, len) {
      return numberToBytesBE(n, len).reverse();
    }
    exports.numberToBytesLE = numberToBytesLE;
    function numberToVarBytesBE(n) {
      return hexToBytes(numberToHexUnpadded(n));
    }
    exports.numberToVarBytesBE = numberToVarBytesBE;
    function ensureBytes(title, hex, expectedLength) {
      let res;
      if (typeof hex === "string") {
        try {
          res = hexToBytes(hex);
        } catch (e) {
          throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
      } else if (isBytes(hex)) {
        res = Uint8Array.from(hex);
      } else {
        throw new Error(`${title} must be hex string or Uint8Array`);
      }
      const len = res.length;
      if (typeof expectedLength === "number" && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
      return res;
    }
    exports.ensureBytes = ensureBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
          throw new Error("Uint8Array expected");
        sum += a.length;
      }
      let res = new Uint8Array(sum);
      let pad = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    function equalBytes(a, b) {
      if (a.length !== b.length)
        return false;
      let diff = 0;
      for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
      return diff === 0;
    }
    exports.equalBytes = equalBytes;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function bitLen(n) {
      let len;
      for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
      return len;
    }
    exports.bitLen = bitLen;
    function bitGet(n, pos) {
      return n >> BigInt(pos) & _1n;
    }
    exports.bitGet = bitGet;
    var bitSet = (n, pos, value) => {
      return n | (value ? _1n : _0n) << BigInt(pos);
    };
    exports.bitSet = bitSet;
    var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
    exports.bitMask = bitMask;
    var u8n = (data) => new Uint8Array(data);
    var u8fr = (arr) => Uint8Array.from(arr);
    function createHmacDrbg(hashLen, qByteLen, hmacFn) {
      if (typeof hashLen !== "number" || hashLen < 2)
        throw new Error("hashLen must be a number");
      if (typeof qByteLen !== "number" || qByteLen < 2)
        throw new Error("qByteLen must be a number");
      if (typeof hmacFn !== "function")
        throw new Error("hmacFn must be a function");
      let v = u8n(hashLen);
      let k = u8n(hashLen);
      let i = 0;
      const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
      };
      const h = (...b) => hmacFn(k, v, ...b);
      const reseed = (seed = u8n()) => {
        k = h(u8fr([0]), seed);
        v = h();
        if (seed.length === 0)
          return;
        k = h(u8fr([1]), seed);
        v = h();
      };
      const gen = () => {
        if (i++ >= 1e3)
          throw new Error("drbg: tried 1000 values");
        let len = 0;
        const out = [];
        while (len < qByteLen) {
          v = h();
          const sl = v.slice();
          out.push(sl);
          len += v.length;
        }
        return concatBytes(...out);
      };
      const genUntil = (seed, pred) => {
        reset();
        reseed(seed);
        let res = void 0;
        while (!(res = pred(gen())))
          reseed();
        reset();
        return res;
      };
      return genUntil;
    }
    exports.createHmacDrbg = createHmacDrbg;
    var validatorFns = {
      bigint: (val) => typeof val === "bigint",
      function: (val) => typeof val === "function",
      boolean: (val) => typeof val === "boolean",
      string: (val) => typeof val === "string",
      stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object) => object.Fp.isValid(val),
      hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
    };
    function validateObject(object, validators, optValidators = {}) {
      const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== "function")
          throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === void 0)
          return;
        if (!checkVal(val, object)) {
          throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
      };
      for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
      for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
      return object;
    }
    exports.validateObject = validateObject;
  }
});

// node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/modular.js
var require_modular = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/modular.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapHashToField = exports.getMinHashLength = exports.getFieldBytesLength = exports.hashToPrivateScalar = exports.FpSqrtEven = exports.FpSqrtOdd = exports.Field = exports.nLength = exports.FpIsSquare = exports.FpDiv = exports.FpInvertBatch = exports.FpPow = exports.validateField = exports.isNegativeLE = exports.FpSqrt = exports.tonelliShanks = exports.invert = exports.pow2 = exports.pow = exports.mod = void 0;
    var utils_js_1 = require_utils3();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    var _5n = BigInt(5);
    var _8n = BigInt(8);
    var _9n = BigInt(9);
    var _16n = BigInt(16);
    function mod(a, b) {
      const result = a % b;
      return result >= _0n ? result : b + result;
    }
    exports.mod = mod;
    function pow(num2, power, modulo) {
      if (modulo <= _0n || power < _0n)
        throw new Error("Expected power/modulo > 0");
      if (modulo === _1n)
        return _0n;
      let res = _1n;
      while (power > _0n) {
        if (power & _1n)
          res = res * num2 % modulo;
        num2 = num2 * num2 % modulo;
        power >>= _1n;
      }
      return res;
    }
    exports.pow = pow;
    function pow2(x, power, modulo) {
      let res = x;
      while (power-- > _0n) {
        res *= res;
        res %= modulo;
      }
      return res;
    }
    exports.pow2 = pow2;
    function invert(number, modulo) {
      if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
      }
      let a = mod(number, modulo);
      let b = modulo;
      let x = _0n, y = _1n, u = _1n, v = _0n;
      while (a !== _0n) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
      }
      const gcd = b;
      if (gcd !== _1n)
        throw new Error("invert: does not exist");
      return mod(x, modulo);
    }
    exports.invert = invert;
    function tonelliShanks(P) {
      const legendreC = (P - _1n) / _2n;
      let Q, S, Z;
      for (Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++)
        ;
      for (Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++)
        ;
      if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      const Q1div2 = (Q + _1n) / _2n;
      return function tonelliSlow(Fp, n) {
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
          throw new Error("Cannot find square root");
        let r = S;
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
        let x = Fp.pow(n, Q1div2);
        let b = Fp.pow(n, Q);
        while (!Fp.eql(b, Fp.ONE)) {
          if (Fp.eql(b, Fp.ZERO))
            return Fp.ZERO;
          let m = 1;
          for (let t2 = Fp.sqr(b); m < r; m++) {
            if (Fp.eql(t2, Fp.ONE))
              break;
            t2 = Fp.sqr(t2);
          }
          const ge = Fp.pow(g, _1n << BigInt(r - m - 1));
          g = Fp.sqr(ge);
          x = Fp.mul(x, ge);
          b = Fp.mul(b, g);
          r = m;
        }
        return x;
      };
    }
    exports.tonelliShanks = tonelliShanks;
    function FpSqrt(P) {
      if (P % _4n === _3n) {
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
          const n2 = Fp.mul(n, _2n);
          const v = Fp.pow(n2, c1);
          const nv = Fp.mul(n, v);
          const i = Fp.mul(Fp.mul(nv, _2n), v);
          const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _16n === _9n) {
      }
      return tonelliShanks(P);
    }
    exports.FpSqrt = FpSqrt;
    var isNegativeLE = (num2, modulo) => (mod(num2, modulo) & _1n) === _1n;
    exports.isNegativeLE = isNegativeLE;
    var FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
    function validateField(field) {
      const initial = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
      };
      const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = "function";
        return map;
      }, initial);
      return (0, utils_js_1.validateObject)(field, opts);
    }
    exports.validateField = validateField;
    function FpPow(f, num2, power) {
      if (power < _0n)
        throw new Error("Expected power > 0");
      if (power === _0n)
        return f.ONE;
      if (power === _1n)
        return num2;
      let p = f.ONE;
      let d = num2;
      while (power > _0n) {
        if (power & _1n)
          p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
      }
      return p;
    }
    exports.FpPow = FpPow;
    function FpInvertBatch(f, nums) {
      const tmp = new Array(nums.length);
      const lastMultiplied = nums.reduce((acc, num2, i) => {
        if (f.is0(num2))
          return acc;
        tmp[i] = acc;
        return f.mul(acc, num2);
      }, f.ONE);
      const inverted = f.inv(lastMultiplied);
      nums.reduceRight((acc, num2, i) => {
        if (f.is0(num2))
          return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num2);
      }, inverted);
      return tmp;
    }
    exports.FpInvertBatch = FpInvertBatch;
    function FpDiv(f, lhs, rhs) {
      return f.mul(lhs, typeof rhs === "bigint" ? invert(rhs, f.ORDER) : f.inv(rhs));
    }
    exports.FpDiv = FpDiv;
    function FpIsSquare(f) {
      const legendreConst = (f.ORDER - _1n) / _2n;
      return (x) => {
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
      };
    }
    exports.FpIsSquare = FpIsSquare;
    function nLength(n, nBitLength) {
      const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
      const nByteLength = Math.ceil(_nBitLength / 8);
      return { nBitLength: _nBitLength, nByteLength };
    }
    exports.nLength = nLength;
    function Field(ORDER, bitLen, isLE = false, redef = {}) {
      if (ORDER <= _0n)
        throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
      const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
      if (BYTES > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
      const sqrtP = FpSqrt(ORDER);
      const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, utils_js_1.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num2) => mod(num2, ORDER),
        isValid: (num2) => {
          if (typeof num2 !== "bigint")
            throw new Error(`Invalid field element: expected bigint, got ${typeof num2}`);
          return _0n <= num2 && num2 < ORDER;
        },
        is0: (num2) => num2 === _0n,
        isOdd: (num2) => (num2 & _1n) === _1n,
        neg: (num2) => mod(-num2, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num2) => mod(num2 * num2, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num2, power) => FpPow(f, num2, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num2) => num2 * num2,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num2) => invert(num2, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => c ? b : a,
        toBytes: (num2) => isLE ? (0, utils_js_1.numberToBytesLE)(num2, BYTES) : (0, utils_js_1.numberToBytesBE)(num2, BYTES),
        fromBytes: (bytes) => {
          if (bytes.length !== BYTES)
            throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
          return isLE ? (0, utils_js_1.bytesToNumberLE)(bytes) : (0, utils_js_1.bytesToNumberBE)(bytes);
        }
      });
      return Object.freeze(f);
    }
    exports.Field = Field;
    function FpSqrtOdd(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? root : Fp.neg(root);
    }
    exports.FpSqrtOdd = FpSqrtOdd;
    function FpSqrtEven(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? Fp.neg(root) : root;
    }
    exports.FpSqrtEven = FpSqrtEven;
    function hashToPrivateScalar(hash2, groupOrder, isLE = false) {
      hash2 = (0, utils_js_1.ensureBytes)("privateHash", hash2);
      const hashLen = hash2.length;
      const minLen = nLength(groupOrder).nByteLength + 8;
      if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
      const num2 = isLE ? (0, utils_js_1.bytesToNumberLE)(hash2) : (0, utils_js_1.bytesToNumberBE)(hash2);
      return mod(num2, groupOrder - _1n) + _1n;
    }
    exports.hashToPrivateScalar = hashToPrivateScalar;
    function getFieldBytesLength(fieldOrder) {
      if (typeof fieldOrder !== "bigint")
        throw new Error("field order must be bigint");
      const bitLength = fieldOrder.toString(2).length;
      return Math.ceil(bitLength / 8);
    }
    exports.getFieldBytesLength = getFieldBytesLength;
    function getMinHashLength(fieldOrder) {
      const length = getFieldBytesLength(fieldOrder);
      return length + Math.ceil(length / 2);
    }
    exports.getMinHashLength = getMinHashLength;
    function mapHashToField(key, fieldOrder, isLE = false) {
      const len = key.length;
      const fieldLen = getFieldBytesLength(fieldOrder);
      const minLen = getMinHashLength(fieldOrder);
      if (len < 16 || len < minLen || len > 1024)
        throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
      const num2 = isLE ? (0, utils_js_1.bytesToNumberBE)(key) : (0, utils_js_1.bytesToNumberLE)(key);
      const reduced = mod(num2, fieldOrder - _1n) + _1n;
      return isLE ? (0, utils_js_1.numberToBytesLE)(reduced, fieldLen) : (0, utils_js_1.numberToBytesBE)(reduced, fieldLen);
    }
    exports.mapHashToField = mapHashToField;
  }
});

// node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/poseidon.js
var require_poseidon = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/poseidon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.poseidon = exports.splitConstants = exports.validateOpts = void 0;
    var modular_js_1 = require_modular();
    function validateOpts(opts) {
      const { Fp, mds, reversePartialPowIdx: rev, roundConstants: rc } = opts;
      const { roundsFull, roundsPartial, sboxPower, t } = opts;
      (0, modular_js_1.validateField)(Fp);
      for (const i of ["t", "roundsFull", "roundsPartial"]) {
        if (typeof opts[i] !== "number" || !Number.isSafeInteger(opts[i]))
          throw new Error(`Poseidon: invalid param ${i}=${opts[i]} (${typeof opts[i]})`);
      }
      if (!Array.isArray(mds) || mds.length !== t)
        throw new Error("Poseidon: wrong MDS matrix");
      const _mds = mds.map((mdsRow) => {
        if (!Array.isArray(mdsRow) || mdsRow.length !== t)
          throw new Error(`Poseidon MDS matrix row: ${mdsRow}`);
        return mdsRow.map((i) => {
          if (typeof i !== "bigint")
            throw new Error(`Poseidon MDS matrix value=${i}`);
          return Fp.create(i);
        });
      });
      if (rev !== void 0 && typeof rev !== "boolean")
        throw new Error(`Poseidon: invalid param reversePartialPowIdx=${rev}`);
      if (roundsFull % 2 !== 0)
        throw new Error(`Poseidon roundsFull is not even: ${roundsFull}`);
      const rounds = roundsFull + roundsPartial;
      if (!Array.isArray(rc) || rc.length !== rounds)
        throw new Error("Poseidon: wrong round constants");
      const roundConstants = rc.map((rc2) => {
        if (!Array.isArray(rc2) || rc2.length !== t)
          throw new Error(`Poseidon wrong round constants: ${rc2}`);
        return rc2.map((i) => {
          if (typeof i !== "bigint" || !Fp.isValid(i))
            throw new Error(`Poseidon wrong round constant=${i}`);
          return Fp.create(i);
        });
      });
      if (!sboxPower || ![3, 5, 7].includes(sboxPower))
        throw new Error(`Poseidon wrong sboxPower=${sboxPower}`);
      const _sboxPower = BigInt(sboxPower);
      let sboxFn = (n) => (0, modular_js_1.FpPow)(Fp, n, _sboxPower);
      if (sboxPower === 3)
        sboxFn = (n) => Fp.mul(Fp.sqrN(n), n);
      else if (sboxPower === 5)
        sboxFn = (n) => Fp.mul(Fp.sqrN(Fp.sqrN(n)), n);
      return Object.freeze({ ...opts, rounds, sboxFn, roundConstants, mds: _mds });
    }
    exports.validateOpts = validateOpts;
    function splitConstants(rc, t) {
      if (typeof t !== "number")
        throw new Error("poseidonSplitConstants: wrong t");
      if (!Array.isArray(rc) || rc.length % t)
        throw new Error("poseidonSplitConstants: wrong rc");
      const res = [];
      let tmp = [];
      for (let i = 0; i < rc.length; i++) {
        tmp.push(rc[i]);
        if (tmp.length === t) {
          res.push(tmp);
          tmp = [];
        }
      }
      return res;
    }
    exports.splitConstants = splitConstants;
    function poseidon(opts) {
      const _opts = validateOpts(opts);
      const { Fp, mds, roundConstants, rounds, roundsPartial, sboxFn, t } = _opts;
      const halfRoundsFull = _opts.roundsFull / 2;
      const partialIdx = _opts.reversePartialPowIdx ? t - 1 : 0;
      const poseidonRound = (values, isFull, idx) => {
        values = values.map((i, j) => Fp.add(i, roundConstants[idx][j]));
        if (isFull)
          values = values.map((i) => sboxFn(i));
        else
          values[partialIdx] = sboxFn(values[partialIdx]);
        values = mds.map((i) => i.reduce((acc, i2, j) => Fp.add(acc, Fp.mulN(i2, values[j])), Fp.ZERO));
        return values;
      };
      const poseidonHash = function poseidonHash2(values) {
        if (!Array.isArray(values) || values.length !== t)
          throw new Error(`Poseidon: wrong values (expected array of bigints with length ${t})`);
        values = values.map((i) => {
          if (typeof i !== "bigint")
            throw new Error(`Poseidon: wrong value=${i} (${typeof i})`);
          return Fp.create(i);
        });
        let round = 0;
        for (let i = 0; i < halfRoundsFull; i++)
          values = poseidonRound(values, true, round++);
        for (let i = 0; i < roundsPartial; i++)
          values = poseidonRound(values, false, round++);
        for (let i = 0; i < halfRoundsFull; i++)
          values = poseidonRound(values, true, round++);
        if (round !== rounds)
          throw new Error(`Poseidon: wrong number of rounds: last round=${round}, total=${rounds}`);
        return values;
      };
      poseidonHash.roundConstants = roundConstants;
      return poseidonHash;
    }
    exports.poseidon = poseidon;
  }
});

// node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/curve.js
var require_curve = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/curve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateBasic = exports.wNAF = void 0;
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils3();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    function wNAF(c, bits) {
      const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
      };
      const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1;
        const windowSize = 2 ** (W - 1);
        return { windows, windowSize };
      };
      return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder(elm, n) {
          let p = c.ZERO;
          let d = elm;
          while (n > _0n) {
            if (n & _1n)
              p = p.add(d);
            d = d.double();
            n >>= _1n;
          }
          return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
          const { windows, windowSize } = opts(W);
          const points = [];
          let p = elm;
          let base = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base = p;
            points.push(base);
            for (let i = 1; i < windowSize; i++) {
              base = base.add(p);
              points.push(base);
            }
            p = base.double();
          }
          return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
          const { windows, windowSize } = opts(W);
          let p = c.ZERO;
          let f = c.BASE;
          const mask = BigInt(2 ** W - 1);
          const maxNumber = 2 ** W;
          const shiftBy = BigInt(W);
          for (let window2 = 0; window2 < windows; window2++) {
            const offset = window2 * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window2 % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) {
              f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            } else {
              p = p.add(constTimeNegate(cond2, precomputes[offset2]));
            }
          }
          return { p, f };
        },
        wNAFCached(P, precomputesMap, n, transform) {
          const W = P._WINDOW_SIZE || 1;
          let comp = precomputesMap.get(P);
          if (!comp) {
            comp = this.precomputeWindow(P, W);
            if (W !== 1) {
              precomputesMap.set(P, transform(comp));
            }
          }
          return this.wNAF(W, comp, n);
        }
      };
    }
    exports.wNAF = wNAF;
    function validateBasic(curve) {
      (0, modular_js_1.validateField)(curve.Fp);
      (0, utils_js_1.validateObject)(curve, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
      }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
      });
      return Object.freeze({
        ...(0, modular_js_1.nLength)(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER }
      });
    }
    exports.validateBasic = validateBasic;
  }
});

// node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/weierstrass.js
var require_weierstrass = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/abstract/weierstrass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapToCurveSimpleSWU = exports.SWUFpSqrtRatio = exports.weierstrass = exports.weierstrassPoints = exports.DER = void 0;
    var mod = require_modular();
    var ut = require_utils3();
    var utils_js_1 = require_utils3();
    var curve_js_1 = require_curve();
    function validatePointOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        a: "field",
        b: "field"
      }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
      });
      const { endo, Fp, a } = opts;
      if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
          throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        }
        if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
          throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
        }
      }
      return Object.freeze({ ...opts });
    }
    var { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
    exports.DER = {
      // asn.1 DER encoding utils
      Err: class DERErr extends Error {
        constructor(m = "") {
          super(m);
        }
      },
      _parseInt(data) {
        const { Err: E } = exports.DER;
        if (data.length < 2 || data[0] !== 2)
          throw new E("Invalid signature integer tag");
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
          throw new E("Invalid signature integer: wrong length");
        if (res[0] & 128)
          throw new E("Invalid signature integer: negative");
        if (res[0] === 0 && !(res[1] & 128))
          throw new E("Invalid signature integer: unnecessary leading zero");
        return { d: b2n(res), l: data.subarray(len + 2) };
      },
      toSig(hex) {
        const { Err: E } = exports.DER;
        const data = typeof hex === "string" ? h2b(hex) : hex;
        if (!ut.isBytes(data))
          throw new Error("ui8a expected");
        let l = data.length;
        if (l < 2 || data[0] != 48)
          throw new E("Invalid signature tag");
        if (data[1] !== l - 2)
          throw new E("Invalid signature: incorrect length");
        const { d: r, l: sBytes } = exports.DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = exports.DER._parseInt(sBytes);
        if (rBytesLeft.length)
          throw new E("Invalid signature: left bytes after parsing");
        return { r, s };
      },
      hexFromSig(sig) {
        const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
        const h = (num2) => {
          const hex = num2.toString(16);
          return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
      }
    };
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    function weierstrassPoints(opts) {
      const CURVE = validatePointOpts(opts);
      const { Fp } = CURVE;
      const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
        const a = point.toAffine();
        return ut.concatBytes(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
      });
      const fromBytes = CURVE.fromBytes || ((bytes) => {
        const tail = bytes.subarray(1);
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return { x, y };
      });
      function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x);
        const x3 = Fp.mul(x2, x);
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
      }
      if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error("bad generator point: equation left != right");
      function isWithinCurveOrder(num2) {
        return typeof num2 === "bigint" && _0n < num2 && num2 < CURVE.n;
      }
      function assertGE(num2) {
        if (!isWithinCurveOrder(num2))
          throw new Error("Expected valid bigint: 0 < bigint < curve.n");
      }
      function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== "bigint") {
          if (ut.isBytes(key))
            key = ut.bytesToHex(key);
          if (typeof key !== "string" || !lengths.includes(key.length))
            throw new Error("Invalid key");
          key = key.padStart(nByteLength * 2, "0");
        }
        let num2;
        try {
          num2 = typeof key === "bigint" ? key : ut.bytesToNumberBE((0, utils_js_1.ensureBytes)("private key", key, nByteLength));
        } catch (error) {
          throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
          num2 = mod.mod(num2, n);
        assertGE(num2);
        return num2;
      }
      const pointPrecomputes = /* @__PURE__ */ new Map();
      function assertPrjPoint(other) {
        if (!(other instanceof Point))
          throw new Error("ProjectivePoint expected");
      }
      class Point {
        constructor(px, py, pz) {
          this.px = px;
          this.py = py;
          this.pz = pz;
          if (px == null || !Fp.isValid(px))
            throw new Error("x required");
          if (py == null || !Fp.isValid(py))
            throw new Error("y required");
          if (pz == null || !Fp.isValid(pz))
            throw new Error("z required");
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
          const { x, y } = p || {};
          if (!p || !Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("invalid affine point");
          if (p instanceof Point)
            throw new Error("projective point not allowed");
          const is0 = (i) => Fp.eql(i, Fp.ZERO);
          if (is0(x) && is0(y))
            return Point.ZERO;
          return new Point(x, y, Fp.ONE);
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
          const toInv = Fp.invertBatch(points.map((p) => p.pz));
          return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
          const P = Point.fromAffine(fromBytes((0, utils_js_1.ensureBytes)("pointHex", hex)));
          P.assertValidity();
          return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
          return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
          this._WINDOW_SIZE = windowSize;
          pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
          if (this.is0()) {
            if (CURVE.allowInfinityPoint && !Fp.is0(this.py))
              return;
            throw new Error("bad point: ZERO");
          }
          const { x, y } = this.toAffine();
          if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("bad point: x or y not FE");
          const left = Fp.sqr(y);
          const right = weierstrassEquation(x);
          if (!Fp.eql(left, right))
            throw new Error("bad point: equation left != right");
          if (!this.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        }
        hasEvenY() {
          const { y } = this.toAffine();
          if (Fp.isOdd)
            return !Fp.isOdd(y);
          throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
          assertPrjPoint(other);
          const { px: X1, py: Y1, pz: Z1 } = this;
          const { px: X2, py: Y2, pz: Z2 } = other;
          const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
          const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
          return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
          return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
          const { a, b } = CURVE;
          const b3 = Fp.mul(b, _3n);
          const { px: X1, py: Y1, pz: Z1 } = this;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          let t0 = Fp.mul(X1, X1);
          let t1 = Fp.mul(Y1, Y1);
          let t2 = Fp.mul(Z1, Z1);
          let t3 = Fp.mul(X1, Y1);
          t3 = Fp.add(t3, t3);
          Z3 = Fp.mul(X1, Z1);
          Z3 = Fp.add(Z3, Z3);
          X3 = Fp.mul(a, Z3);
          Y3 = Fp.mul(b3, t2);
          Y3 = Fp.add(X3, Y3);
          X3 = Fp.sub(t1, Y3);
          Y3 = Fp.add(t1, Y3);
          Y3 = Fp.mul(X3, Y3);
          X3 = Fp.mul(t3, X3);
          Z3 = Fp.mul(b3, Z3);
          t2 = Fp.mul(a, t2);
          t3 = Fp.sub(t0, t2);
          t3 = Fp.mul(a, t3);
          t3 = Fp.add(t3, Z3);
          Z3 = Fp.add(t0, t0);
          t0 = Fp.add(Z3, t0);
          t0 = Fp.add(t0, t2);
          t0 = Fp.mul(t0, t3);
          Y3 = Fp.add(Y3, t0);
          t2 = Fp.mul(Y1, Z1);
          t2 = Fp.add(t2, t2);
          t0 = Fp.mul(t2, t3);
          X3 = Fp.sub(X3, t0);
          Z3 = Fp.mul(t2, t1);
          Z3 = Fp.add(Z3, Z3);
          Z3 = Fp.add(Z3, Z3);
          return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
          assertPrjPoint(other);
          const { px: X1, py: Y1, pz: Z1 } = this;
          const { px: X2, py: Y2, pz: Z2 } = other;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          const a = CURVE.a;
          const b3 = Fp.mul(CURVE.b, _3n);
          let t0 = Fp.mul(X1, X2);
          let t1 = Fp.mul(Y1, Y2);
          let t2 = Fp.mul(Z1, Z2);
          let t3 = Fp.add(X1, Y1);
          let t4 = Fp.add(X2, Y2);
          t3 = Fp.mul(t3, t4);
          t4 = Fp.add(t0, t1);
          t3 = Fp.sub(t3, t4);
          t4 = Fp.add(X1, Z1);
          let t5 = Fp.add(X2, Z2);
          t4 = Fp.mul(t4, t5);
          t5 = Fp.add(t0, t2);
          t4 = Fp.sub(t4, t5);
          t5 = Fp.add(Y1, Z1);
          X3 = Fp.add(Y2, Z2);
          t5 = Fp.mul(t5, X3);
          X3 = Fp.add(t1, t2);
          t5 = Fp.sub(t5, X3);
          Z3 = Fp.mul(a, t4);
          X3 = Fp.mul(b3, t2);
          Z3 = Fp.add(X3, Z3);
          X3 = Fp.sub(t1, Z3);
          Z3 = Fp.add(t1, Z3);
          Y3 = Fp.mul(X3, Z3);
          t1 = Fp.add(t0, t0);
          t1 = Fp.add(t1, t0);
          t2 = Fp.mul(a, t2);
          t4 = Fp.mul(b3, t4);
          t1 = Fp.add(t1, t2);
          t2 = Fp.sub(t0, t2);
          t2 = Fp.mul(a, t2);
          t4 = Fp.add(t4, t2);
          t0 = Fp.mul(t1, t4);
          Y3 = Fp.add(Y3, t0);
          t0 = Fp.mul(t5, t4);
          X3 = Fp.mul(t3, X3);
          X3 = Fp.sub(X3, t0);
          t0 = Fp.mul(t3, t1);
          Z3 = Fp.mul(t5, Z3);
          Z3 = Fp.add(Z3, t0);
          return new Point(X3, Y3, Z3);
        }
        subtract(other) {
          return this.add(other.negate());
        }
        is0() {
          return this.equals(Point.ZERO);
        }
        wNAF(n) {
          return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
            const toInv = Fp.invertBatch(comp.map((p) => p.pz));
            return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
          });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(n) {
          const I = Point.ZERO;
          if (n === _0n)
            return I;
          assertGE(n);
          if (n === _1n)
            return this;
          const { endo } = CURVE;
          if (!endo)
            return wnaf.unsafeLadder(this, n);
          let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
          let k1p = I;
          let k2p = I;
          let d = this;
          while (k1 > _0n || k2 > _0n) {
            if (k1 & _1n)
              k1p = k1p.add(d);
            if (k2 & _1n)
              k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
          }
          if (k1neg)
            k1p = k1p.negate();
          if (k2neg)
            k2p = k2p.negate();
          k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
          assertGE(scalar);
          let n = scalar;
          let point, fake;
          const { endo } = CURVE;
          if (endo) {
            const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
            let { p: k1p, f: f1p } = this.wNAF(k1);
            let { p: k2p, f: f2p } = this.wNAF(k2);
            k1p = wnaf.constTimeNegate(k1neg, k1p);
            k2p = wnaf.constTimeNegate(k2neg, k2p);
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
          } else {
            const { p, f } = this.wNAF(n);
            point = p;
            fake = f;
          }
          return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
          const G = Point.BASE;
          const mul = (P, a2) => a2 === _0n || a2 === _1n || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
          const sum = mul(this, a).add(mul(Q, b));
          return sum.is0() ? void 0 : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
          const { px: x, py: y, pz: z } = this;
          const is0 = this.is0();
          if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
          const ax = Fp.mul(x, iz);
          const ay = Fp.mul(y, iz);
          const zz = Fp.mul(z, iz);
          if (is0)
            return { x: Fp.ZERO, y: Fp.ZERO };
          if (!Fp.eql(zz, Fp.ONE))
            throw new Error("invZ was invalid");
          return { x: ax, y: ay };
        }
        isTorsionFree() {
          const { h: cofactor, isTorsionFree } = CURVE;
          if (cofactor === _1n)
            return true;
          if (isTorsionFree)
            return isTorsionFree(Point, this);
          throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
          const { h: cofactor, clearCofactor } = CURVE;
          if (cofactor === _1n)
            return this;
          if (clearCofactor)
            return clearCofactor(Point, this);
          return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
          this.assertValidity();
          return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
          return ut.bytesToHex(this.toRawBytes(isCompressed));
        }
      }
      Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
      Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
      const _bits = CURVE.nBitLength;
      const wnaf = (0, curve_js_1.wNAF)(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
      return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder
      };
    }
    exports.weierstrassPoints = weierstrassPoints;
    function validateOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
      }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
      });
      return Object.freeze({ lowS: true, ...opts });
    }
    function weierstrass(curveDef) {
      const CURVE = validateOpts(curveDef);
      const { Fp, n: CURVE_ORDER } = CURVE;
      const compressedLen = Fp.BYTES + 1;
      const uncompressedLen = 2 * Fp.BYTES + 1;
      function isValidFieldElement(num2) {
        return _0n < num2 && num2 < Fp.ORDER;
      }
      function modN(a) {
        return mod.mod(a, CURVE_ORDER);
      }
      function invN(a) {
        return mod.invert(a, CURVE_ORDER);
      }
      const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
          const a = point.toAffine();
          const x = Fp.toBytes(a.x);
          const cat = ut.concatBytes;
          if (isCompressed) {
            return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
          } else {
            return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
          }
        },
        fromBytes(bytes) {
          const len = bytes.length;
          const head = bytes[0];
          const tail = bytes.subarray(1);
          if (len === compressedLen && (head === 2 || head === 3)) {
            const x = ut.bytesToNumberBE(tail);
            if (!isValidFieldElement(x))
              throw new Error("Point is not on curve");
            const y2 = weierstrassEquation(x);
            let y = Fp.sqrt(y2);
            const isYOdd = (y & _1n) === _1n;
            const isHeadOdd = (head & 1) === 1;
            if (isHeadOdd !== isYOdd)
              y = Fp.neg(y);
            return { x, y };
          } else if (len === uncompressedLen && head === 4) {
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
          } else {
            throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
          }
        }
      });
      const numToNByteStr = (num2) => ut.bytesToHex(ut.numberToBytesBE(num2, CURVE.nByteLength));
      function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n;
        return number > HALF;
      }
      function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
      }
      const slcNum = (b, from, to) => ut.bytesToNumberBE(b.slice(from, to));
      class Signature {
        constructor(r, s, recovery) {
          this.r = r;
          this.s = s;
          this.recovery = recovery;
          this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
          const l = CURVE.nByteLength;
          hex = (0, utils_js_1.ensureBytes)("compactSignature", hex, l * 2);
          return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
          const { r, s } = exports.DER.toSig((0, utils_js_1.ensureBytes)("DER", hex));
          return new Signature(r, s);
        }
        assertValidity() {
          if (!isWithinCurveOrder(this.r))
            throw new Error("r must be 0 < r < CURVE.n");
          if (!isWithinCurveOrder(this.s))
            throw new Error("s must be 0 < s < CURVE.n");
        }
        addRecoveryBit(recovery) {
          return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
          const { r, s, recovery: rec } = this;
          const h = bits2int_modN((0, utils_js_1.ensureBytes)("msgHash", msgHash));
          if (rec == null || ![0, 1, 2, 3].includes(rec))
            throw new Error("recovery id invalid");
          const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
          if (radj >= Fp.ORDER)
            throw new Error("recovery id 2 or 3 invalid");
          const prefix = (rec & 1) === 0 ? "02" : "03";
          const R = Point.fromHex(prefix + numToNByteStr(radj));
          const ir = invN(radj);
          const u1 = modN(-h * ir);
          const u2 = modN(s * ir);
          const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
          if (!Q)
            throw new Error("point at infinify");
          Q.assertValidity();
          return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
          return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
          return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
          return ut.hexToBytes(this.toDERHex());
        }
        toDERHex() {
          return exports.DER.hexFromSig({ r: this.r, s: this.s });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
          return ut.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
          return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
      }
      const utils = {
        isValidPrivateKey(privateKey) {
          try {
            normPrivateKeyToScalar(privateKey);
            return true;
          } catch (error) {
            return false;
          }
        },
        normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
          const length = mod.getMinHashLength(CURVE.n);
          return mod.mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
          point._setWindowSize(windowSize);
          point.multiply(BigInt(3));
          return point;
        }
      };
      function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
      }
      function isProbPub(item) {
        const arr = ut.isBytes(item);
        const str = typeof item === "string";
        const len = (arr || str) && item.length;
        if (arr)
          return len === compressedLen || len === uncompressedLen;
        if (str)
          return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
          return true;
        return false;
      }
      function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
          throw new Error("first arg must be private key");
        if (!isProbPub(publicB))
          throw new Error("second arg must be public key");
        const b = Point.fromHex(publicB);
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
      }
      const bits2int = CURVE.bits2int || function(bytes) {
        const num2 = ut.bytesToNumberBE(bytes);
        const delta = bytes.length * 8 - CURVE.nBitLength;
        return delta > 0 ? num2 >> BigInt(delta) : num2;
      };
      const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
        return modN(bits2int(bytes));
      };
      const ORDER_MASK = ut.bitMask(CURVE.nBitLength);
      function int2octets(num2) {
        if (typeof num2 !== "bigint")
          throw new Error("bigint expected");
        if (!(_0n <= num2 && num2 < ORDER_MASK))
          throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        return ut.numberToBytesBE(num2, CURVE.nByteLength);
      }
      function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (["recovered", "canonical"].some((k) => k in opts))
          throw new Error("sign() legacy options not supported");
        const { hash: hash2, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts;
        if (lowS == null)
          lowS = true;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        if (prehash)
          msgHash = (0, utils_js_1.ensureBytes)("prehashed msgHash", hash2(msgHash));
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey);
        const seedArgs = [int2octets(d), int2octets(h1int)];
        if (ent != null) {
          const e = ent === true ? randomBytes(Fp.BYTES) : ent;
          seedArgs.push((0, utils_js_1.ensureBytes)("extraEntropy", e));
        }
        const seed = ut.concatBytes(...seedArgs);
        const m = h1int;
        function k2sig(kBytes) {
          const k = bits2int(kBytes);
          if (!isWithinCurveOrder(k))
            return;
          const ik = invN(k);
          const q = Point.BASE.multiply(k).toAffine();
          const r = modN(q.x);
          if (r === _0n)
            return;
          const s = modN(ik * modN(m + r * d));
          if (s === _0n)
            return;
          let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n);
          let normS = s;
          if (lowS && isBiggerThanHalfOrder(s)) {
            normS = normalizeS(s);
            recovery ^= 1;
          }
          return new Signature(r, normS, recovery);
        }
        return { seed, k2sig };
      }
      const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
      const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
      function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts);
        const C = CURVE;
        const drbg = ut.createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig);
      }
      Point.BASE._setWindowSize(8);
      function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        var _a;
        const sg = signature;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        publicKey = (0, utils_js_1.ensureBytes)("publicKey", publicKey);
        if ("strict" in opts)
          throw new Error("options.strict was renamed to lowS");
        const { lowS, prehash } = opts;
        let _sig = void 0;
        let P;
        try {
          if (typeof sg === "string" || ut.isBytes(sg)) {
            try {
              _sig = Signature.fromDER(sg);
            } catch (derError) {
              if (!(derError instanceof exports.DER.Err))
                throw derError;
              _sig = Signature.fromCompact(sg);
            }
          } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
            const { r: r2, s: s2 } = sg;
            _sig = new Signature(r2, s2);
          } else {
            throw new Error("PARSE");
          }
          P = Point.fromHex(publicKey);
        } catch (error) {
          if (error.message === "PARSE")
            throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
          return false;
        }
        if (lowS && _sig.hasHighS())
          return false;
        if (prehash)
          msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash);
        const is = invN(s);
        const u1 = modN(h * is);
        const u2 = modN(r * is);
        const R = (_a = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a.toAffine();
        if (!R)
          return false;
        const v = modN(R.x);
        return v === r;
      }
      return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils
      };
    }
    exports.weierstrass = weierstrass;
    function SWUFpSqrtRatio(Fp, Z) {
      const q = Fp.ORDER;
      let l = _0n;
      for (let o = q - _1n; o % _2n === _0n; o /= _2n)
        l += _1n;
      const c1 = l;
      const _2n_pow_c1_1 = _2n << c1 - _1n - _1n;
      const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
      const c2 = (q - _1n) / _2n_pow_c1;
      const c3 = (c2 - _1n) / _2n;
      const c4 = _2n_pow_c1 - _1n;
      const c5 = _2n_pow_c1_1;
      const c6 = Fp.pow(Z, c2);
      const c7 = Fp.pow(Z, (c2 + _1n) / _2n);
      let sqrtRatio = (u, v) => {
        let tv1 = c6;
        let tv2 = Fp.pow(v, c4);
        let tv3 = Fp.sqr(tv2);
        tv3 = Fp.mul(tv3, v);
        let tv5 = Fp.mul(u, tv3);
        tv5 = Fp.pow(tv5, c3);
        tv5 = Fp.mul(tv5, tv2);
        tv2 = Fp.mul(tv5, v);
        tv3 = Fp.mul(tv5, u);
        let tv4 = Fp.mul(tv3, tv2);
        tv5 = Fp.pow(tv4, c5);
        let isQR = Fp.eql(tv5, Fp.ONE);
        tv2 = Fp.mul(tv3, c7);
        tv5 = Fp.mul(tv4, tv1);
        tv3 = Fp.cmov(tv2, tv3, isQR);
        tv4 = Fp.cmov(tv5, tv4, isQR);
        for (let i = c1; i > _1n; i--) {
          let tv52 = i - _2n;
          tv52 = _2n << tv52 - _1n;
          let tvv5 = Fp.pow(tv4, tv52);
          const e1 = Fp.eql(tvv5, Fp.ONE);
          tv2 = Fp.mul(tv3, tv1);
          tv1 = Fp.mul(tv1, tv1);
          tvv5 = Fp.mul(tv4, tv1);
          tv3 = Fp.cmov(tv2, tv3, e1);
          tv4 = Fp.cmov(tvv5, tv4, e1);
        }
        return { isValid: isQR, value: tv3 };
      };
      if (Fp.ORDER % _4n === _3n) {
        const c12 = (Fp.ORDER - _3n) / _4n;
        const c22 = Fp.sqrt(Fp.neg(Z));
        sqrtRatio = (u, v) => {
          let tv1 = Fp.sqr(v);
          const tv2 = Fp.mul(u, v);
          tv1 = Fp.mul(tv1, tv2);
          let y1 = Fp.pow(tv1, c12);
          y1 = Fp.mul(y1, tv2);
          const y2 = Fp.mul(y1, c22);
          const tv3 = Fp.mul(Fp.sqr(y1), v);
          const isQR = Fp.eql(tv3, u);
          let y = Fp.cmov(y2, y1, isQR);
          return { isValid: isQR, value: y };
        };
      }
      return sqrtRatio;
    }
    exports.SWUFpSqrtRatio = SWUFpSqrtRatio;
    function mapToCurveSimpleSWU(Fp, opts) {
      mod.validateField(Fp);
      if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error("mapToCurveSimpleSWU: invalid opts");
      const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
      if (!Fp.isOdd)
        throw new Error("Fp.isOdd is not implemented!");
      return (u) => {
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u);
        tv1 = Fp.mul(tv1, opts.Z);
        tv2 = Fp.sqr(tv1);
        tv2 = Fp.add(tv2, tv1);
        tv3 = Fp.add(tv2, Fp.ONE);
        tv3 = Fp.mul(tv3, opts.B);
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
        tv4 = Fp.mul(tv4, opts.A);
        tv2 = Fp.sqr(tv3);
        tv6 = Fp.sqr(tv4);
        tv5 = Fp.mul(tv6, opts.A);
        tv2 = Fp.add(tv2, tv5);
        tv2 = Fp.mul(tv2, tv3);
        tv6 = Fp.mul(tv6, tv4);
        tv5 = Fp.mul(tv6, opts.B);
        tv2 = Fp.add(tv2, tv5);
        x = Fp.mul(tv1, tv3);
        const { isValid, value } = sqrtRatio(tv2, tv6);
        y = Fp.mul(tv1, u);
        y = Fp.mul(y, value);
        x = Fp.cmov(x, tv3, isValid);
        y = Fp.cmov(y, value, isValid);
        const e1 = Fp.isOdd(u) === Fp.isOdd(y);
        y = Fp.cmov(Fp.neg(y), y, e1);
        x = Fp.div(x, tv4);
        return { x, y };
      };
    }
    exports.mapToCurveSimpleSWU = mapToCurveSimpleSWU;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/hmac.js
var require_hmac = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.3.3/node_modules/@noble/hashes/hmac.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hmac = exports.HMAC = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils2();
    var HMAC = class extends utils_js_1.Hash {
      constructor(hash2, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.hash)(hash2);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash2.create();
        if (typeof this.iHash.update !== "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        pad.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54;
        this.iHash.update(pad);
        this.oHash = hash2.create();
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54 ^ 92;
        this.oHash.update(pad);
        pad.fill(0);
      }
      update(buf) {
        (0, _assert_js_1.exists)(this);
        this.iHash.update(buf);
        return this;
      }
      digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.bytes)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
      }
      digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
      }
      _cloneInto(to) {
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
      }
      destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
      }
    };
    exports.HMAC = HMAC;
    var hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
    exports.hmac = hmac;
    exports.hmac.create = (hash2, key) => new HMAC(hash2, key);
  }
});

// node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/_shortw_utils.js
var require_shortw_utils = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.3.0/node_modules/@noble/curves/_shortw_utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCurve = exports.getHash = void 0;
    var hmac_1 = require_hmac();
    var utils_1 = require_utils2();
    var weierstrass_js_1 = require_weierstrass();
    function getHash(hash2) {
      return {
        hash: hash2,
        hmac: (key, ...msgs) => (0, hmac_1.hmac)(hash2, key, (0, utils_1.concatBytes)(...msgs)),
        randomBytes: utils_1.randomBytes
      };
    }
    exports.getHash = getHash;
    function createCurve(curveDef, defHash) {
      const create = (hash2) => (0, weierstrass_js_1.weierstrass)({ ...curveDef, ...getHash(hash2) });
      return Object.freeze({ ...create(defHash), create });
    }
    exports.createCurve = createCurve;
  }
});

// node_modules/.pnpm/@scure+starknet@1.0.0/node_modules/@scure/starknet/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@scure+starknet@1.0.0/node_modules/@scure/starknet/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.poseidonHashMany = exports.poseidonHashSingle = exports.poseidonHashFunc = exports.poseidonHash = exports.poseidonSmall = exports.poseidonCreate = exports.poseidonBasic = exports._poseidonMDS = exports.Fp251 = exports.keccak = exports.computeHashOnElements = exports.pedersen = exports.getAccountPath = exports.ethSigToPrivate = exports.getStarkKey = exports.grindKey = exports.utils = exports.Signature = exports.ProjectivePoint = exports.CURVE = exports.verify = exports.sign = exports.getSharedSecret = exports.getPublicKey = exports._starkCurve = exports.MAX_VALUE = void 0;
    var sha3_1 = require_sha3();
    var sha256_1 = require_sha256();
    var utils_1 = require_utils2();
    var modular_1 = require_modular();
    var poseidon_1 = require_poseidon();
    var weierstrass_1 = require_weierstrass();
    var u = require_utils3();
    var _shortw_utils_1 = require_shortw_utils();
    var CURVE_ORDER = BigInt("3618502788666131213697322783095070105526743751716087489154079457884512865583");
    exports.MAX_VALUE = BigInt("0x800000000000000000000000000000000000000000000000000000000000000");
    var nBitLength = 252;
    function bits2int(bytes) {
      while (bytes[0] === 0)
        bytes = bytes.subarray(1);
      const delta = bytes.length * 8 - nBitLength;
      const num2 = u.bytesToNumberBE(bytes);
      return delta > 0 ? num2 >> BigInt(delta) : num2;
    }
    function hex0xToBytes(hex) {
      if (typeof hex === "string") {
        hex = strip0x(hex);
        if (hex.length & 1)
          hex = "0" + hex;
      }
      return u.hexToBytes(hex);
    }
    var curve = (0, weierstrass_1.weierstrass)({
      a: BigInt(1),
      b: BigInt("3141592653589793238462643383279502884197169399375105820974944592307816406665"),
      Fp: (0, modular_1.Field)(BigInt("0x800000000000011000000000000000000000000000000000000000000000001")),
      n: CURVE_ORDER,
      nBitLength,
      Gx: BigInt("874739451078007766457464989774322083649278607533249481151382481072868806602"),
      Gy: BigInt("152666792071518830868575557812948353041420400780739481342941381225525861407"),
      h: BigInt(1),
      lowS: false,
      ...(0, _shortw_utils_1.getHash)(sha256_1.sha256),
      bits2int,
      bits2int_modN: (bytes) => {
        const hex = u.bytesToNumberBE(bytes).toString(16);
        if (hex.length === 63)
          bytes = hex0xToBytes(hex + "0");
        return (0, modular_1.mod)(bits2int(bytes), CURVE_ORDER);
      }
    });
    exports._starkCurve = curve;
    function ensureBytes(hex) {
      return u.ensureBytes("", typeof hex === "string" ? hex0xToBytes(hex) : hex);
    }
    function normPrivKey(privKey) {
      return u.bytesToHex(ensureBytes(privKey)).padStart(64, "0");
    }
    function getPublicKey(privKey, isCompressed = false) {
      return curve.getPublicKey(normPrivKey(privKey), isCompressed);
    }
    exports.getPublicKey = getPublicKey;
    function getSharedSecret(privKeyA, pubKeyB) {
      return curve.getSharedSecret(normPrivKey(privKeyA), pubKeyB);
    }
    exports.getSharedSecret = getSharedSecret;
    function checkSignature(signature) {
      const { r, s } = signature;
      if (r < 0n || r >= exports.MAX_VALUE)
        throw new Error(`Signature.r should be [1, ${exports.MAX_VALUE})`);
      const w = (0, modular_1.invert)(s, CURVE_ORDER);
      if (w < 0n || w >= exports.MAX_VALUE)
        throw new Error(`inv(Signature.s) should be [1, ${exports.MAX_VALUE})`);
    }
    function checkMessage(msgHash) {
      const bytes = ensureBytes(msgHash);
      const num2 = u.bytesToNumberBE(bytes);
      if (num2 >= exports.MAX_VALUE)
        throw new Error(`msgHash should be [0, ${exports.MAX_VALUE})`);
      return bytes;
    }
    function sign(msgHash, privKey, opts) {
      const sig = curve.sign(checkMessage(msgHash), normPrivKey(privKey), opts);
      checkSignature(sig);
      return sig;
    }
    exports.sign = sign;
    function verify(signature, msgHash, pubKey) {
      if (!(signature instanceof Signature)) {
        const bytes = ensureBytes(signature);
        try {
          signature = Signature.fromDER(bytes);
        } catch (derError) {
          if (!(derError instanceof weierstrass_1.DER.Err))
            throw derError;
          signature = Signature.fromCompact(bytes);
        }
      }
      checkSignature(signature);
      return curve.verify(signature, checkMessage(msgHash), ensureBytes(pubKey));
    }
    exports.verify = verify;
    var { CURVE, ProjectivePoint, Signature, utils } = curve;
    exports.CURVE = CURVE;
    exports.ProjectivePoint = ProjectivePoint;
    exports.Signature = Signature;
    exports.utils = utils;
    function extractX(bytes) {
      const hex = u.bytesToHex(bytes.subarray(1));
      const stripped = hex.replace(/^0+/gm, "");
      return `0x${stripped}`;
    }
    function strip0x(hex) {
      return hex.replace(/^0x/i, "");
    }
    function grindKey(seed) {
      const _seed = ensureBytes(seed);
      const sha256mask = 2n ** 256n;
      const limit = sha256mask - (0, modular_1.mod)(sha256mask, CURVE_ORDER);
      for (let i = 0; ; i++) {
        const key = sha256Num(u.concatBytes(_seed, u.numberToVarBytesBE(BigInt(i))));
        if (key < limit)
          return (0, modular_1.mod)(key, CURVE_ORDER).toString(16);
        if (i === 1e5)
          throw new Error("grindKey is broken: tried 100k vals");
      }
    }
    exports.grindKey = grindKey;
    function getStarkKey(privateKey) {
      return extractX(getPublicKey(privateKey, true));
    }
    exports.getStarkKey = getStarkKey;
    function ethSigToPrivate(signature) {
      signature = strip0x(signature);
      if (signature.length !== 130)
        throw new Error("Wrong ethereum signature");
      return grindKey(signature.substring(0, 64));
    }
    exports.ethSigToPrivate = ethSigToPrivate;
    var MASK_31 = 2n ** 31n - 1n;
    var int31 = (n) => Number(n & MASK_31);
    function getAccountPath(layer, application, ethereumAddress, index) {
      const layerNum = int31(sha256Num(layer));
      const applicationNum = int31(sha256Num(application));
      const eth2 = u.hexToNumber(strip0x(ethereumAddress));
      return `m/2645'/${layerNum}'/${applicationNum}'/${int31(eth2)}'/${int31(eth2 >> 31n)}'/${index}`;
    }
    exports.getAccountPath = getAccountPath;
    var PEDERSEN_POINTS = [
      new ProjectivePoint(2089986280348253421170679821480865132823066470938446095505822317253594081284n, 1713931329540660377023406109199410414810705867260802078187082345529207694986n, 1n),
      new ProjectivePoint(996781205833008774514500082376783249102396023663454813447423147977397232763n, 1668503676786377725805489344771023921079126552019160156920634619255970485781n, 1n),
      new ProjectivePoint(2251563274489750535117886426533222435294046428347329203627021249169616184184n, 1798716007562728905295480679789526322175868328062420237419143593021674992973n, 1n),
      new ProjectivePoint(2138414695194151160943305727036575959195309218611738193261179310511854807447n, 113410276730064486255102093846540133784865286929052426931474106396135072156n, 1n),
      new ProjectivePoint(2379962749567351885752724891227938183011949129833673362440656643086021394946n, 776496453633298175483985398648758586525933812536653089401905292063708816422n, 1n)
    ];
    function pedersenPrecompute(p1, p2) {
      const out = [];
      let p = p1;
      for (let i = 0; i < 248; i++) {
        out.push(p);
        p = p.double();
      }
      p = p2;
      for (let i = 0; i < 4; i++) {
        out.push(p);
        p = p.double();
      }
      return out;
    }
    var PEDERSEN_POINTS1 = pedersenPrecompute(PEDERSEN_POINTS[1], PEDERSEN_POINTS[2]);
    var PEDERSEN_POINTS2 = pedersenPrecompute(PEDERSEN_POINTS[3], PEDERSEN_POINTS[4]);
    function pedersenArg(arg) {
      let value;
      if (typeof arg === "bigint") {
        value = arg;
      } else if (typeof arg === "number") {
        if (!Number.isSafeInteger(arg))
          throw new Error(`Invalid pedersenArg: ${arg}`);
        value = BigInt(arg);
      } else {
        value = u.bytesToNumberBE(ensureBytes(arg));
      }
      if (!(0n <= value && value < curve.CURVE.Fp.ORDER))
        throw new Error(`PedersenArg should be 0 <= value < CURVE.P: ${value}`);
      return value;
    }
    function pedersenSingle(point, value, constants2) {
      let x = pedersenArg(value);
      for (let j = 0; j < 252; j++) {
        const pt = constants2[j];
        if (pt.equals(point))
          throw new Error("Same point");
        if ((x & 1n) !== 0n)
          point = point.add(pt);
        x >>= 1n;
      }
      return point;
    }
    function pedersen(x, y) {
      let point = PEDERSEN_POINTS[0];
      point = pedersenSingle(point, x, PEDERSEN_POINTS1);
      point = pedersenSingle(point, y, PEDERSEN_POINTS2);
      return extractX(point.toRawBytes(true));
    }
    exports.pedersen = pedersen;
    var computeHashOnElements = (data, fn = pedersen) => [0, ...data, data.length].reduce((x, y) => fn(x, y));
    exports.computeHashOnElements = computeHashOnElements;
    var MASK_250 = u.bitMask(250);
    var keccak = (data) => u.bytesToNumberBE((0, sha3_1.keccak_256)(data)) & MASK_250;
    exports.keccak = keccak;
    var sha256Num = (data) => u.bytesToNumberBE((0, sha256_1.sha256)(data));
    exports.Fp251 = (0, modular_1.Field)(BigInt("3618502788666131213697322783095070105623107215331596699973092056135872020481"));
    function poseidonRoundConstant(Fp, name, idx) {
      const val = Fp.fromBytes((0, sha256_1.sha256)((0, utils_1.utf8ToBytes)(`${name}${idx}`)));
      return Fp.create(val);
    }
    function _poseidonMDS(Fp, name, m, attempt = 0) {
      const x_values = [];
      const y_values = [];
      for (let i = 0; i < m; i++) {
        x_values.push(poseidonRoundConstant(Fp, `${name}x`, attempt * m + i));
        y_values.push(poseidonRoundConstant(Fp, `${name}y`, attempt * m + i));
      }
      if ((/* @__PURE__ */ new Set([...x_values, ...y_values])).size !== 2 * m)
        throw new Error("X and Y values are not distinct");
      return x_values.map((x) => y_values.map((y) => Fp.inv(Fp.sub(x, y))));
    }
    exports._poseidonMDS = _poseidonMDS;
    var MDS_SMALL = [
      [3, 1, 1],
      [1, -1, 1],
      [1, 1, -2]
    ].map((i) => i.map(BigInt));
    function poseidonBasic(opts, mds) {
      (0, modular_1.validateField)(opts.Fp);
      if (!Number.isSafeInteger(opts.rate) || !Number.isSafeInteger(opts.capacity))
        throw new Error(`Wrong poseidon opts: ${opts}`);
      const m = opts.rate + opts.capacity;
      const rounds = opts.roundsFull + opts.roundsPartial;
      const roundConstants = [];
      for (let i = 0; i < rounds; i++) {
        const row = [];
        for (let j = 0; j < m; j++)
          row.push(poseidonRoundConstant(opts.Fp, "Hades", m * i + j));
        roundConstants.push(row);
      }
      const res = (0, poseidon_1.poseidon)({
        ...opts,
        t: m,
        sboxPower: 3,
        reversePartialPowIdx: true,
        mds,
        roundConstants
      });
      res.m = m;
      res.rate = opts.rate;
      res.capacity = opts.capacity;
      return res;
    }
    exports.poseidonBasic = poseidonBasic;
    function poseidonCreate(opts, mdsAttempt = 0) {
      const m = opts.rate + opts.capacity;
      if (!Number.isSafeInteger(mdsAttempt))
        throw new Error(`Wrong mdsAttempt=${mdsAttempt}`);
      return poseidonBasic(opts, _poseidonMDS(opts.Fp, "HadesMDS", m, mdsAttempt));
    }
    exports.poseidonCreate = poseidonCreate;
    exports.poseidonSmall = poseidonBasic({ Fp: exports.Fp251, rate: 2, capacity: 1, roundsFull: 8, roundsPartial: 83 }, MDS_SMALL);
    function poseidonHash(x, y, fn = exports.poseidonSmall) {
      return fn([x, y, 2n])[0];
    }
    exports.poseidonHash = poseidonHash;
    function poseidonHashFunc(x, y, fn = exports.poseidonSmall) {
      return u.numberToVarBytesBE(poseidonHash(u.bytesToNumberBE(x), u.bytesToNumberBE(y), fn));
    }
    exports.poseidonHashFunc = poseidonHashFunc;
    function poseidonHashSingle(x, fn = exports.poseidonSmall) {
      return fn([x, 0n, 1n])[0];
    }
    exports.poseidonHashSingle = poseidonHashSingle;
    function poseidonHashMany(values, fn = exports.poseidonSmall) {
      const { m, rate } = fn;
      if (!Array.isArray(values))
        throw new Error("bigint array expected in values");
      const padded = Array.from(values);
      padded.push(1n);
      while (padded.length % rate !== 0)
        padded.push(0n);
      let state = new Array(m).fill(0n);
      for (let i = 0; i < padded.length; i += rate) {
        for (let j = 0; j < rate; j++)
          state[j] += padded[i + j];
        state = fn(state);
      }
      return state[0];
    }
    exports.poseidonHashMany = poseidonHashMany;
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/modular.js
var require_modular2 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/modular.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapHashToField = exports.getMinHashLength = exports.getFieldBytesLength = exports.hashToPrivateScalar = exports.FpSqrtEven = exports.FpSqrtOdd = exports.Field = exports.nLength = exports.FpIsSquare = exports.FpDiv = exports.FpInvertBatch = exports.FpPow = exports.validateField = exports.isNegativeLE = exports.FpSqrt = exports.tonelliShanks = exports.invert = exports.pow2 = exports.pow = exports.mod = void 0;
    var utils_js_1 = require_utils();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    var _5n = BigInt(5);
    var _8n = BigInt(8);
    var _9n = BigInt(9);
    var _16n = BigInt(16);
    function mod(a, b) {
      const result = a % b;
      return result >= _0n ? result : b + result;
    }
    exports.mod = mod;
    function pow(num2, power, modulo) {
      if (modulo <= _0n || power < _0n)
        throw new Error("Expected power/modulo > 0");
      if (modulo === _1n)
        return _0n;
      let res = _1n;
      while (power > _0n) {
        if (power & _1n)
          res = res * num2 % modulo;
        num2 = num2 * num2 % modulo;
        power >>= _1n;
      }
      return res;
    }
    exports.pow = pow;
    function pow2(x, power, modulo) {
      let res = x;
      while (power-- > _0n) {
        res *= res;
        res %= modulo;
      }
      return res;
    }
    exports.pow2 = pow2;
    function invert(number, modulo) {
      if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
      }
      let a = mod(number, modulo);
      let b = modulo;
      let x = _0n, y = _1n, u = _1n, v = _0n;
      while (a !== _0n) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
      }
      const gcd = b;
      if (gcd !== _1n)
        throw new Error("invert: does not exist");
      return mod(x, modulo);
    }
    exports.invert = invert;
    function tonelliShanks(P) {
      const legendreC = (P - _1n) / _2n;
      let Q, S, Z;
      for (Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++)
        ;
      for (Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++)
        ;
      if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      const Q1div2 = (Q + _1n) / _2n;
      return function tonelliSlow(Fp, n) {
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
          throw new Error("Cannot find square root");
        let r = S;
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
        let x = Fp.pow(n, Q1div2);
        let b = Fp.pow(n, Q);
        while (!Fp.eql(b, Fp.ONE)) {
          if (Fp.eql(b, Fp.ZERO))
            return Fp.ZERO;
          let m = 1;
          for (let t2 = Fp.sqr(b); m < r; m++) {
            if (Fp.eql(t2, Fp.ONE))
              break;
            t2 = Fp.sqr(t2);
          }
          const ge = Fp.pow(g, _1n << BigInt(r - m - 1));
          g = Fp.sqr(ge);
          x = Fp.mul(x, ge);
          b = Fp.mul(b, g);
          r = m;
        }
        return x;
      };
    }
    exports.tonelliShanks = tonelliShanks;
    function FpSqrt(P) {
      if (P % _4n === _3n) {
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
          const n2 = Fp.mul(n, _2n);
          const v = Fp.pow(n2, c1);
          const nv = Fp.mul(n, v);
          const i = Fp.mul(Fp.mul(nv, _2n), v);
          const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _16n === _9n) {
      }
      return tonelliShanks(P);
    }
    exports.FpSqrt = FpSqrt;
    var isNegativeLE = (num2, modulo) => (mod(num2, modulo) & _1n) === _1n;
    exports.isNegativeLE = isNegativeLE;
    var FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
    function validateField(field) {
      const initial = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
      };
      const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = "function";
        return map;
      }, initial);
      return (0, utils_js_1.validateObject)(field, opts);
    }
    exports.validateField = validateField;
    function FpPow(f, num2, power) {
      if (power < _0n)
        throw new Error("Expected power > 0");
      if (power === _0n)
        return f.ONE;
      if (power === _1n)
        return num2;
      let p = f.ONE;
      let d = num2;
      while (power > _0n) {
        if (power & _1n)
          p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
      }
      return p;
    }
    exports.FpPow = FpPow;
    function FpInvertBatch(f, nums) {
      const tmp = new Array(nums.length);
      const lastMultiplied = nums.reduce((acc, num2, i) => {
        if (f.is0(num2))
          return acc;
        tmp[i] = acc;
        return f.mul(acc, num2);
      }, f.ONE);
      const inverted = f.inv(lastMultiplied);
      nums.reduceRight((acc, num2, i) => {
        if (f.is0(num2))
          return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num2);
      }, inverted);
      return tmp;
    }
    exports.FpInvertBatch = FpInvertBatch;
    function FpDiv(f, lhs, rhs) {
      return f.mul(lhs, typeof rhs === "bigint" ? invert(rhs, f.ORDER) : f.inv(rhs));
    }
    exports.FpDiv = FpDiv;
    function FpIsSquare(f) {
      const legendreConst = (f.ORDER - _1n) / _2n;
      return (x) => {
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
      };
    }
    exports.FpIsSquare = FpIsSquare;
    function nLength(n, nBitLength) {
      const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
      const nByteLength = Math.ceil(_nBitLength / 8);
      return { nBitLength: _nBitLength, nByteLength };
    }
    exports.nLength = nLength;
    function Field(ORDER, bitLen, isLE = false, redef = {}) {
      if (ORDER <= _0n)
        throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
      const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
      if (BYTES > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
      const sqrtP = FpSqrt(ORDER);
      const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, utils_js_1.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num2) => mod(num2, ORDER),
        isValid: (num2) => {
          if (typeof num2 !== "bigint")
            throw new Error(`Invalid field element: expected bigint, got ${typeof num2}`);
          return _0n <= num2 && num2 < ORDER;
        },
        is0: (num2) => num2 === _0n,
        isOdd: (num2) => (num2 & _1n) === _1n,
        neg: (num2) => mod(-num2, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num2) => mod(num2 * num2, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num2, power) => FpPow(f, num2, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num2) => num2 * num2,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num2) => invert(num2, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => c ? b : a,
        toBytes: (num2) => isLE ? (0, utils_js_1.numberToBytesLE)(num2, BYTES) : (0, utils_js_1.numberToBytesBE)(num2, BYTES),
        fromBytes: (bytes) => {
          if (bytes.length !== BYTES)
            throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
          return isLE ? (0, utils_js_1.bytesToNumberLE)(bytes) : (0, utils_js_1.bytesToNumberBE)(bytes);
        }
      });
      return Object.freeze(f);
    }
    exports.Field = Field;
    function FpSqrtOdd(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? root : Fp.neg(root);
    }
    exports.FpSqrtOdd = FpSqrtOdd;
    function FpSqrtEven(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? Fp.neg(root) : root;
    }
    exports.FpSqrtEven = FpSqrtEven;
    function hashToPrivateScalar(hash2, groupOrder, isLE = false) {
      hash2 = (0, utils_js_1.ensureBytes)("privateHash", hash2);
      const hashLen = hash2.length;
      const minLen = nLength(groupOrder).nByteLength + 8;
      if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
      const num2 = isLE ? (0, utils_js_1.bytesToNumberLE)(hash2) : (0, utils_js_1.bytesToNumberBE)(hash2);
      return mod(num2, groupOrder - _1n) + _1n;
    }
    exports.hashToPrivateScalar = hashToPrivateScalar;
    function getFieldBytesLength(fieldOrder) {
      if (typeof fieldOrder !== "bigint")
        throw new Error("field order must be bigint");
      const bitLength = fieldOrder.toString(2).length;
      return Math.ceil(bitLength / 8);
    }
    exports.getFieldBytesLength = getFieldBytesLength;
    function getMinHashLength(fieldOrder) {
      const length = getFieldBytesLength(fieldOrder);
      return length + Math.ceil(length / 2);
    }
    exports.getMinHashLength = getMinHashLength;
    function mapHashToField(key, fieldOrder, isLE = false) {
      const len = key.length;
      const fieldLen = getFieldBytesLength(fieldOrder);
      const minLen = getMinHashLength(fieldOrder);
      if (len < 16 || len < minLen || len > 1024)
        throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
      const num2 = isLE ? (0, utils_js_1.bytesToNumberBE)(key) : (0, utils_js_1.bytesToNumberLE)(key);
      const reduced = mod(num2, fieldOrder - _1n) + _1n;
      return isLE ? (0, utils_js_1.numberToBytesLE)(reduced, fieldLen) : (0, utils_js_1.numberToBytesBE)(reduced, fieldLen);
    }
    exports.mapHashToField = mapHashToField;
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/poseidon.js
var require_poseidon2 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/poseidon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.poseidon = exports.splitConstants = exports.validateOpts = void 0;
    var modular_js_1 = require_modular2();
    function validateOpts(opts) {
      const { Fp, mds, reversePartialPowIdx: rev, roundConstants: rc } = opts;
      const { roundsFull, roundsPartial, sboxPower, t } = opts;
      (0, modular_js_1.validateField)(Fp);
      for (const i of ["t", "roundsFull", "roundsPartial"]) {
        if (typeof opts[i] !== "number" || !Number.isSafeInteger(opts[i]))
          throw new Error(`Poseidon: invalid param ${i}=${opts[i]} (${typeof opts[i]})`);
      }
      if (!Array.isArray(mds) || mds.length !== t)
        throw new Error("Poseidon: wrong MDS matrix");
      const _mds = mds.map((mdsRow) => {
        if (!Array.isArray(mdsRow) || mdsRow.length !== t)
          throw new Error(`Poseidon MDS matrix row: ${mdsRow}`);
        return mdsRow.map((i) => {
          if (typeof i !== "bigint")
            throw new Error(`Poseidon MDS matrix value=${i}`);
          return Fp.create(i);
        });
      });
      if (rev !== void 0 && typeof rev !== "boolean")
        throw new Error(`Poseidon: invalid param reversePartialPowIdx=${rev}`);
      if (roundsFull % 2 !== 0)
        throw new Error(`Poseidon roundsFull is not even: ${roundsFull}`);
      const rounds = roundsFull + roundsPartial;
      if (!Array.isArray(rc) || rc.length !== rounds)
        throw new Error("Poseidon: wrong round constants");
      const roundConstants = rc.map((rc2) => {
        if (!Array.isArray(rc2) || rc2.length !== t)
          throw new Error(`Poseidon wrong round constants: ${rc2}`);
        return rc2.map((i) => {
          if (typeof i !== "bigint" || !Fp.isValid(i))
            throw new Error(`Poseidon wrong round constant=${i}`);
          return Fp.create(i);
        });
      });
      if (!sboxPower || ![3, 5, 7].includes(sboxPower))
        throw new Error(`Poseidon wrong sboxPower=${sboxPower}`);
      const _sboxPower = BigInt(sboxPower);
      let sboxFn = (n) => (0, modular_js_1.FpPow)(Fp, n, _sboxPower);
      if (sboxPower === 3)
        sboxFn = (n) => Fp.mul(Fp.sqrN(n), n);
      else if (sboxPower === 5)
        sboxFn = (n) => Fp.mul(Fp.sqrN(Fp.sqrN(n)), n);
      return Object.freeze({ ...opts, rounds, sboxFn, roundConstants, mds: _mds });
    }
    exports.validateOpts = validateOpts;
    function splitConstants(rc, t) {
      if (typeof t !== "number")
        throw new Error("poseidonSplitConstants: wrong t");
      if (!Array.isArray(rc) || rc.length % t)
        throw new Error("poseidonSplitConstants: wrong rc");
      const res = [];
      let tmp = [];
      for (let i = 0; i < rc.length; i++) {
        tmp.push(rc[i]);
        if (tmp.length === t) {
          res.push(tmp);
          tmp = [];
        }
      }
      return res;
    }
    exports.splitConstants = splitConstants;
    function poseidon(opts) {
      const _opts = validateOpts(opts);
      const { Fp, mds, roundConstants, rounds, roundsPartial, sboxFn, t } = _opts;
      const halfRoundsFull = _opts.roundsFull / 2;
      const partialIdx = _opts.reversePartialPowIdx ? t - 1 : 0;
      const poseidonRound = (values, isFull, idx) => {
        values = values.map((i, j) => Fp.add(i, roundConstants[idx][j]));
        if (isFull)
          values = values.map((i) => sboxFn(i));
        else
          values[partialIdx] = sboxFn(values[partialIdx]);
        values = mds.map((i) => i.reduce((acc, i2, j) => Fp.add(acc, Fp.mulN(i2, values[j])), Fp.ZERO));
        return values;
      };
      const poseidonHash = function poseidonHash2(values) {
        if (!Array.isArray(values) || values.length !== t)
          throw new Error(`Poseidon: wrong values (expected array of bigints with length ${t})`);
        values = values.map((i) => {
          if (typeof i !== "bigint")
            throw new Error(`Poseidon: wrong value=${i} (${typeof i})`);
          return Fp.create(i);
        });
        let round = 0;
        for (let i = 0; i < halfRoundsFull; i++)
          values = poseidonRound(values, true, round++);
        for (let i = 0; i < roundsPartial; i++)
          values = poseidonRound(values, false, round++);
        for (let i = 0; i < halfRoundsFull; i++)
          values = poseidonRound(values, true, round++);
        if (round !== rounds)
          throw new Error(`Poseidon: wrong number of rounds: last round=${round}, total=${rounds}`);
        return values;
      };
      poseidonHash.roundConstants = roundConstants;
      return poseidonHash;
    }
    exports.poseidon = poseidon;
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/curve.js
var require_curve2 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/curve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateBasic = exports.wNAF = void 0;
    var modular_js_1 = require_modular2();
    var utils_js_1 = require_utils();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    function wNAF(c, bits) {
      const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
      };
      const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1;
        const windowSize = 2 ** (W - 1);
        return { windows, windowSize };
      };
      return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder(elm, n) {
          let p = c.ZERO;
          let d = elm;
          while (n > _0n) {
            if (n & _1n)
              p = p.add(d);
            d = d.double();
            n >>= _1n;
          }
          return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
          const { windows, windowSize } = opts(W);
          const points = [];
          let p = elm;
          let base = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base = p;
            points.push(base);
            for (let i = 1; i < windowSize; i++) {
              base = base.add(p);
              points.push(base);
            }
            p = base.double();
          }
          return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
          const { windows, windowSize } = opts(W);
          let p = c.ZERO;
          let f = c.BASE;
          const mask = BigInt(2 ** W - 1);
          const maxNumber = 2 ** W;
          const shiftBy = BigInt(W);
          for (let window2 = 0; window2 < windows; window2++) {
            const offset = window2 * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window2 % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) {
              f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            } else {
              p = p.add(constTimeNegate(cond2, precomputes[offset2]));
            }
          }
          return { p, f };
        },
        wNAFCached(P, precomputesMap, n, transform) {
          const W = P._WINDOW_SIZE || 1;
          let comp = precomputesMap.get(P);
          if (!comp) {
            comp = this.precomputeWindow(P, W);
            if (W !== 1) {
              precomputesMap.set(P, transform(comp));
            }
          }
          return this.wNAF(W, comp, n);
        }
      };
    }
    exports.wNAF = wNAF;
    function validateBasic(curve) {
      (0, modular_js_1.validateField)(curve.Fp);
      (0, utils_js_1.validateObject)(curve, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
      }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
      });
      return Object.freeze({
        ...(0, modular_js_1.nLength)(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER }
      });
    }
    exports.validateBasic = validateBasic;
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/weierstrass.js
var require_weierstrass2 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/weierstrass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapToCurveSimpleSWU = exports.SWUFpSqrtRatio = exports.weierstrass = exports.weierstrassPoints = exports.DER = void 0;
    var mod = require_modular2();
    var ut = require_utils();
    var utils_js_1 = require_utils();
    var curve_js_1 = require_curve2();
    function validatePointOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        a: "field",
        b: "field"
      }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
      });
      const { endo, Fp, a } = opts;
      if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
          throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        }
        if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
          throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
        }
      }
      return Object.freeze({ ...opts });
    }
    var { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
    exports.DER = {
      // asn.1 DER encoding utils
      Err: class DERErr extends Error {
        constructor(m = "") {
          super(m);
        }
      },
      _parseInt(data) {
        const { Err: E } = exports.DER;
        if (data.length < 2 || data[0] !== 2)
          throw new E("Invalid signature integer tag");
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
          throw new E("Invalid signature integer: wrong length");
        if (res[0] & 128)
          throw new E("Invalid signature integer: negative");
        if (res[0] === 0 && !(res[1] & 128))
          throw new E("Invalid signature integer: unnecessary leading zero");
        return { d: b2n(res), l: data.subarray(len + 2) };
      },
      toSig(hex) {
        const { Err: E } = exports.DER;
        const data = typeof hex === "string" ? h2b(hex) : hex;
        ut.abytes(data);
        let l = data.length;
        if (l < 2 || data[0] != 48)
          throw new E("Invalid signature tag");
        if (data[1] !== l - 2)
          throw new E("Invalid signature: incorrect length");
        const { d: r, l: sBytes } = exports.DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = exports.DER._parseInt(sBytes);
        if (rBytesLeft.length)
          throw new E("Invalid signature: left bytes after parsing");
        return { r, s };
      },
      hexFromSig(sig) {
        const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
        const h = (num2) => {
          const hex = num2.toString(16);
          return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
      }
    };
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    function weierstrassPoints(opts) {
      const CURVE = validatePointOpts(opts);
      const { Fp } = CURVE;
      const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
        const a = point.toAffine();
        return ut.concatBytes(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
      });
      const fromBytes = CURVE.fromBytes || ((bytes) => {
        const tail = bytes.subarray(1);
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return { x, y };
      });
      function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x);
        const x3 = Fp.mul(x2, x);
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
      }
      if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error("bad generator point: equation left != right");
      function isWithinCurveOrder(num2) {
        return typeof num2 === "bigint" && _0n < num2 && num2 < CURVE.n;
      }
      function assertGE(num2) {
        if (!isWithinCurveOrder(num2))
          throw new Error("Expected valid bigint: 0 < bigint < curve.n");
      }
      function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== "bigint") {
          if (ut.isBytes(key))
            key = ut.bytesToHex(key);
          if (typeof key !== "string" || !lengths.includes(key.length))
            throw new Error("Invalid key");
          key = key.padStart(nByteLength * 2, "0");
        }
        let num2;
        try {
          num2 = typeof key === "bigint" ? key : ut.bytesToNumberBE((0, utils_js_1.ensureBytes)("private key", key, nByteLength));
        } catch (error) {
          throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
          num2 = mod.mod(num2, n);
        assertGE(num2);
        return num2;
      }
      const pointPrecomputes = /* @__PURE__ */ new Map();
      function assertPrjPoint(other) {
        if (!(other instanceof Point))
          throw new Error("ProjectivePoint expected");
      }
      class Point {
        constructor(px, py, pz) {
          this.px = px;
          this.py = py;
          this.pz = pz;
          if (px == null || !Fp.isValid(px))
            throw new Error("x required");
          if (py == null || !Fp.isValid(py))
            throw new Error("y required");
          if (pz == null || !Fp.isValid(pz))
            throw new Error("z required");
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
          const { x, y } = p || {};
          if (!p || !Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("invalid affine point");
          if (p instanceof Point)
            throw new Error("projective point not allowed");
          const is0 = (i) => Fp.eql(i, Fp.ZERO);
          if (is0(x) && is0(y))
            return Point.ZERO;
          return new Point(x, y, Fp.ONE);
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
          const toInv = Fp.invertBatch(points.map((p) => p.pz));
          return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
          const P = Point.fromAffine(fromBytes((0, utils_js_1.ensureBytes)("pointHex", hex)));
          P.assertValidity();
          return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
          return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
          this._WINDOW_SIZE = windowSize;
          pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
          if (this.is0()) {
            if (CURVE.allowInfinityPoint && !Fp.is0(this.py))
              return;
            throw new Error("bad point: ZERO");
          }
          const { x, y } = this.toAffine();
          if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("bad point: x or y not FE");
          const left = Fp.sqr(y);
          const right = weierstrassEquation(x);
          if (!Fp.eql(left, right))
            throw new Error("bad point: equation left != right");
          if (!this.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        }
        hasEvenY() {
          const { y } = this.toAffine();
          if (Fp.isOdd)
            return !Fp.isOdd(y);
          throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
          assertPrjPoint(other);
          const { px: X1, py: Y1, pz: Z1 } = this;
          const { px: X2, py: Y2, pz: Z2 } = other;
          const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
          const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
          return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
          return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
          const { a, b } = CURVE;
          const b3 = Fp.mul(b, _3n);
          const { px: X1, py: Y1, pz: Z1 } = this;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          let t0 = Fp.mul(X1, X1);
          let t1 = Fp.mul(Y1, Y1);
          let t2 = Fp.mul(Z1, Z1);
          let t3 = Fp.mul(X1, Y1);
          t3 = Fp.add(t3, t3);
          Z3 = Fp.mul(X1, Z1);
          Z3 = Fp.add(Z3, Z3);
          X3 = Fp.mul(a, Z3);
          Y3 = Fp.mul(b3, t2);
          Y3 = Fp.add(X3, Y3);
          X3 = Fp.sub(t1, Y3);
          Y3 = Fp.add(t1, Y3);
          Y3 = Fp.mul(X3, Y3);
          X3 = Fp.mul(t3, X3);
          Z3 = Fp.mul(b3, Z3);
          t2 = Fp.mul(a, t2);
          t3 = Fp.sub(t0, t2);
          t3 = Fp.mul(a, t3);
          t3 = Fp.add(t3, Z3);
          Z3 = Fp.add(t0, t0);
          t0 = Fp.add(Z3, t0);
          t0 = Fp.add(t0, t2);
          t0 = Fp.mul(t0, t3);
          Y3 = Fp.add(Y3, t0);
          t2 = Fp.mul(Y1, Z1);
          t2 = Fp.add(t2, t2);
          t0 = Fp.mul(t2, t3);
          X3 = Fp.sub(X3, t0);
          Z3 = Fp.mul(t2, t1);
          Z3 = Fp.add(Z3, Z3);
          Z3 = Fp.add(Z3, Z3);
          return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
          assertPrjPoint(other);
          const { px: X1, py: Y1, pz: Z1 } = this;
          const { px: X2, py: Y2, pz: Z2 } = other;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          const a = CURVE.a;
          const b3 = Fp.mul(CURVE.b, _3n);
          let t0 = Fp.mul(X1, X2);
          let t1 = Fp.mul(Y1, Y2);
          let t2 = Fp.mul(Z1, Z2);
          let t3 = Fp.add(X1, Y1);
          let t4 = Fp.add(X2, Y2);
          t3 = Fp.mul(t3, t4);
          t4 = Fp.add(t0, t1);
          t3 = Fp.sub(t3, t4);
          t4 = Fp.add(X1, Z1);
          let t5 = Fp.add(X2, Z2);
          t4 = Fp.mul(t4, t5);
          t5 = Fp.add(t0, t2);
          t4 = Fp.sub(t4, t5);
          t5 = Fp.add(Y1, Z1);
          X3 = Fp.add(Y2, Z2);
          t5 = Fp.mul(t5, X3);
          X3 = Fp.add(t1, t2);
          t5 = Fp.sub(t5, X3);
          Z3 = Fp.mul(a, t4);
          X3 = Fp.mul(b3, t2);
          Z3 = Fp.add(X3, Z3);
          X3 = Fp.sub(t1, Z3);
          Z3 = Fp.add(t1, Z3);
          Y3 = Fp.mul(X3, Z3);
          t1 = Fp.add(t0, t0);
          t1 = Fp.add(t1, t0);
          t2 = Fp.mul(a, t2);
          t4 = Fp.mul(b3, t4);
          t1 = Fp.add(t1, t2);
          t2 = Fp.sub(t0, t2);
          t2 = Fp.mul(a, t2);
          t4 = Fp.add(t4, t2);
          t0 = Fp.mul(t1, t4);
          Y3 = Fp.add(Y3, t0);
          t0 = Fp.mul(t5, t4);
          X3 = Fp.mul(t3, X3);
          X3 = Fp.sub(X3, t0);
          t0 = Fp.mul(t3, t1);
          Z3 = Fp.mul(t5, Z3);
          Z3 = Fp.add(Z3, t0);
          return new Point(X3, Y3, Z3);
        }
        subtract(other) {
          return this.add(other.negate());
        }
        is0() {
          return this.equals(Point.ZERO);
        }
        wNAF(n) {
          return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
            const toInv = Fp.invertBatch(comp.map((p) => p.pz));
            return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
          });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(n) {
          const I = Point.ZERO;
          if (n === _0n)
            return I;
          assertGE(n);
          if (n === _1n)
            return this;
          const { endo } = CURVE;
          if (!endo)
            return wnaf.unsafeLadder(this, n);
          let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
          let k1p = I;
          let k2p = I;
          let d = this;
          while (k1 > _0n || k2 > _0n) {
            if (k1 & _1n)
              k1p = k1p.add(d);
            if (k2 & _1n)
              k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
          }
          if (k1neg)
            k1p = k1p.negate();
          if (k2neg)
            k2p = k2p.negate();
          k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
          assertGE(scalar);
          let n = scalar;
          let point, fake;
          const { endo } = CURVE;
          if (endo) {
            const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
            let { p: k1p, f: f1p } = this.wNAF(k1);
            let { p: k2p, f: f2p } = this.wNAF(k2);
            k1p = wnaf.constTimeNegate(k1neg, k1p);
            k2p = wnaf.constTimeNegate(k2neg, k2p);
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
          } else {
            const { p, f } = this.wNAF(n);
            point = p;
            fake = f;
          }
          return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
          const G = Point.BASE;
          const mul = (P, a2) => a2 === _0n || a2 === _1n || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
          const sum = mul(this, a).add(mul(Q, b));
          return sum.is0() ? void 0 : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
          const { px: x, py: y, pz: z } = this;
          const is0 = this.is0();
          if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
          const ax = Fp.mul(x, iz);
          const ay = Fp.mul(y, iz);
          const zz = Fp.mul(z, iz);
          if (is0)
            return { x: Fp.ZERO, y: Fp.ZERO };
          if (!Fp.eql(zz, Fp.ONE))
            throw new Error("invZ was invalid");
          return { x: ax, y: ay };
        }
        isTorsionFree() {
          const { h: cofactor, isTorsionFree } = CURVE;
          if (cofactor === _1n)
            return true;
          if (isTorsionFree)
            return isTorsionFree(Point, this);
          throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
          const { h: cofactor, clearCofactor } = CURVE;
          if (cofactor === _1n)
            return this;
          if (clearCofactor)
            return clearCofactor(Point, this);
          return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
          this.assertValidity();
          return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
          return ut.bytesToHex(this.toRawBytes(isCompressed));
        }
      }
      Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
      Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
      const _bits = CURVE.nBitLength;
      const wnaf = (0, curve_js_1.wNAF)(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
      return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder
      };
    }
    exports.weierstrassPoints = weierstrassPoints;
    function validateOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
      }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
      });
      return Object.freeze({ lowS: true, ...opts });
    }
    function weierstrass(curveDef) {
      const CURVE = validateOpts(curveDef);
      const { Fp, n: CURVE_ORDER } = CURVE;
      const compressedLen = Fp.BYTES + 1;
      const uncompressedLen = 2 * Fp.BYTES + 1;
      function isValidFieldElement(num2) {
        return _0n < num2 && num2 < Fp.ORDER;
      }
      function modN(a) {
        return mod.mod(a, CURVE_ORDER);
      }
      function invN(a) {
        return mod.invert(a, CURVE_ORDER);
      }
      const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
          const a = point.toAffine();
          const x = Fp.toBytes(a.x);
          const cat = ut.concatBytes;
          if (isCompressed) {
            return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
          } else {
            return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
          }
        },
        fromBytes(bytes) {
          const len = bytes.length;
          const head = bytes[0];
          const tail = bytes.subarray(1);
          if (len === compressedLen && (head === 2 || head === 3)) {
            const x = ut.bytesToNumberBE(tail);
            if (!isValidFieldElement(x))
              throw new Error("Point is not on curve");
            const y2 = weierstrassEquation(x);
            let y;
            try {
              y = Fp.sqrt(y2);
            } catch (sqrtError) {
              const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
              throw new Error("Point is not on curve" + suffix);
            }
            const isYOdd = (y & _1n) === _1n;
            const isHeadOdd = (head & 1) === 1;
            if (isHeadOdd !== isYOdd)
              y = Fp.neg(y);
            return { x, y };
          } else if (len === uncompressedLen && head === 4) {
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
          } else {
            throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
          }
        }
      });
      const numToNByteStr = (num2) => ut.bytesToHex(ut.numberToBytesBE(num2, CURVE.nByteLength));
      function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n;
        return number > HALF;
      }
      function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
      }
      const slcNum = (b, from, to) => ut.bytesToNumberBE(b.slice(from, to));
      class Signature {
        constructor(r, s, recovery) {
          this.r = r;
          this.s = s;
          this.recovery = recovery;
          this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
          const l = CURVE.nByteLength;
          hex = (0, utils_js_1.ensureBytes)("compactSignature", hex, l * 2);
          return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
          const { r, s } = exports.DER.toSig((0, utils_js_1.ensureBytes)("DER", hex));
          return new Signature(r, s);
        }
        assertValidity() {
          if (!isWithinCurveOrder(this.r))
            throw new Error("r must be 0 < r < CURVE.n");
          if (!isWithinCurveOrder(this.s))
            throw new Error("s must be 0 < s < CURVE.n");
        }
        addRecoveryBit(recovery) {
          return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
          const { r, s, recovery: rec } = this;
          const h = bits2int_modN((0, utils_js_1.ensureBytes)("msgHash", msgHash));
          if (rec == null || ![0, 1, 2, 3].includes(rec))
            throw new Error("recovery id invalid");
          const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
          if (radj >= Fp.ORDER)
            throw new Error("recovery id 2 or 3 invalid");
          const prefix = (rec & 1) === 0 ? "02" : "03";
          const R = Point.fromHex(prefix + numToNByteStr(radj));
          const ir = invN(radj);
          const u1 = modN(-h * ir);
          const u2 = modN(s * ir);
          const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
          if (!Q)
            throw new Error("point at infinify");
          Q.assertValidity();
          return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
          return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
          return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
          return ut.hexToBytes(this.toDERHex());
        }
        toDERHex() {
          return exports.DER.hexFromSig({ r: this.r, s: this.s });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
          return ut.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
          return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
      }
      const utils = {
        isValidPrivateKey(privateKey) {
          try {
            normPrivateKeyToScalar(privateKey);
            return true;
          } catch (error) {
            return false;
          }
        },
        normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
          const length = mod.getMinHashLength(CURVE.n);
          return mod.mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
          point._setWindowSize(windowSize);
          point.multiply(BigInt(3));
          return point;
        }
      };
      function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
      }
      function isProbPub(item) {
        const arr = ut.isBytes(item);
        const str = typeof item === "string";
        const len = (arr || str) && item.length;
        if (arr)
          return len === compressedLen || len === uncompressedLen;
        if (str)
          return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
          return true;
        return false;
      }
      function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
          throw new Error("first arg must be private key");
        if (!isProbPub(publicB))
          throw new Error("second arg must be public key");
        const b = Point.fromHex(publicB);
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
      }
      const bits2int = CURVE.bits2int || function(bytes) {
        const num2 = ut.bytesToNumberBE(bytes);
        const delta = bytes.length * 8 - CURVE.nBitLength;
        return delta > 0 ? num2 >> BigInt(delta) : num2;
      };
      const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
        return modN(bits2int(bytes));
      };
      const ORDER_MASK = ut.bitMask(CURVE.nBitLength);
      function int2octets(num2) {
        if (typeof num2 !== "bigint")
          throw new Error("bigint expected");
        if (!(_0n <= num2 && num2 < ORDER_MASK))
          throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        return ut.numberToBytesBE(num2, CURVE.nByteLength);
      }
      function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (["recovered", "canonical"].some((k) => k in opts))
          throw new Error("sign() legacy options not supported");
        const { hash: hash2, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts;
        if (lowS == null)
          lowS = true;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        if (prehash)
          msgHash = (0, utils_js_1.ensureBytes)("prehashed msgHash", hash2(msgHash));
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey);
        const seedArgs = [int2octets(d), int2octets(h1int)];
        if (ent != null && ent !== false) {
          const e = ent === true ? randomBytes(Fp.BYTES) : ent;
          seedArgs.push((0, utils_js_1.ensureBytes)("extraEntropy", e));
        }
        const seed = ut.concatBytes(...seedArgs);
        const m = h1int;
        function k2sig(kBytes) {
          const k = bits2int(kBytes);
          if (!isWithinCurveOrder(k))
            return;
          const ik = invN(k);
          const q = Point.BASE.multiply(k).toAffine();
          const r = modN(q.x);
          if (r === _0n)
            return;
          const s = modN(ik * modN(m + r * d));
          if (s === _0n)
            return;
          let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n);
          let normS = s;
          if (lowS && isBiggerThanHalfOrder(s)) {
            normS = normalizeS(s);
            recovery ^= 1;
          }
          return new Signature(r, normS, recovery);
        }
        return { seed, k2sig };
      }
      const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
      const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
      function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts);
        const C = CURVE;
        const drbg = ut.createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig);
      }
      Point.BASE._setWindowSize(8);
      function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        var _a;
        const sg = signature;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        publicKey = (0, utils_js_1.ensureBytes)("publicKey", publicKey);
        if ("strict" in opts)
          throw new Error("options.strict was renamed to lowS");
        const { lowS, prehash } = opts;
        let _sig = void 0;
        let P;
        try {
          if (typeof sg === "string" || ut.isBytes(sg)) {
            try {
              _sig = Signature.fromDER(sg);
            } catch (derError) {
              if (!(derError instanceof exports.DER.Err))
                throw derError;
              _sig = Signature.fromCompact(sg);
            }
          } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
            const { r: r2, s: s2 } = sg;
            _sig = new Signature(r2, s2);
          } else {
            throw new Error("PARSE");
          }
          P = Point.fromHex(publicKey);
        } catch (error) {
          if (error.message === "PARSE")
            throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
          return false;
        }
        if (lowS && _sig.hasHighS())
          return false;
        if (prehash)
          msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash);
        const is = invN(s);
        const u1 = modN(h * is);
        const u2 = modN(r * is);
        const R = (_a = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a.toAffine();
        if (!R)
          return false;
        const v = modN(R.x);
        return v === r;
      }
      return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils
      };
    }
    exports.weierstrass = weierstrass;
    function SWUFpSqrtRatio(Fp, Z) {
      const q = Fp.ORDER;
      let l = _0n;
      for (let o = q - _1n; o % _2n === _0n; o /= _2n)
        l += _1n;
      const c1 = l;
      const _2n_pow_c1_1 = _2n << c1 - _1n - _1n;
      const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
      const c2 = (q - _1n) / _2n_pow_c1;
      const c3 = (c2 - _1n) / _2n;
      const c4 = _2n_pow_c1 - _1n;
      const c5 = _2n_pow_c1_1;
      const c6 = Fp.pow(Z, c2);
      const c7 = Fp.pow(Z, (c2 + _1n) / _2n);
      let sqrtRatio = (u, v) => {
        let tv1 = c6;
        let tv2 = Fp.pow(v, c4);
        let tv3 = Fp.sqr(tv2);
        tv3 = Fp.mul(tv3, v);
        let tv5 = Fp.mul(u, tv3);
        tv5 = Fp.pow(tv5, c3);
        tv5 = Fp.mul(tv5, tv2);
        tv2 = Fp.mul(tv5, v);
        tv3 = Fp.mul(tv5, u);
        let tv4 = Fp.mul(tv3, tv2);
        tv5 = Fp.pow(tv4, c5);
        let isQR = Fp.eql(tv5, Fp.ONE);
        tv2 = Fp.mul(tv3, c7);
        tv5 = Fp.mul(tv4, tv1);
        tv3 = Fp.cmov(tv2, tv3, isQR);
        tv4 = Fp.cmov(tv5, tv4, isQR);
        for (let i = c1; i > _1n; i--) {
          let tv52 = i - _2n;
          tv52 = _2n << tv52 - _1n;
          let tvv5 = Fp.pow(tv4, tv52);
          const e1 = Fp.eql(tvv5, Fp.ONE);
          tv2 = Fp.mul(tv3, tv1);
          tv1 = Fp.mul(tv1, tv1);
          tvv5 = Fp.mul(tv4, tv1);
          tv3 = Fp.cmov(tv2, tv3, e1);
          tv4 = Fp.cmov(tvv5, tv4, e1);
        }
        return { isValid: isQR, value: tv3 };
      };
      if (Fp.ORDER % _4n === _3n) {
        const c12 = (Fp.ORDER - _3n) / _4n;
        const c22 = Fp.sqrt(Fp.neg(Z));
        sqrtRatio = (u, v) => {
          let tv1 = Fp.sqr(v);
          const tv2 = Fp.mul(u, v);
          tv1 = Fp.mul(tv1, tv2);
          let y1 = Fp.pow(tv1, c12);
          y1 = Fp.mul(y1, tv2);
          const y2 = Fp.mul(y1, c22);
          const tv3 = Fp.mul(Fp.sqr(y1), v);
          const isQR = Fp.eql(tv3, u);
          let y = Fp.cmov(y2, y1, isQR);
          return { isValid: isQR, value: y };
        };
      }
      return sqrtRatio;
    }
    exports.SWUFpSqrtRatio = SWUFpSqrtRatio;
    function mapToCurveSimpleSWU(Fp, opts) {
      mod.validateField(Fp);
      if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error("mapToCurveSimpleSWU: invalid opts");
      const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
      if (!Fp.isOdd)
        throw new Error("Fp.isOdd is not implemented!");
      return (u) => {
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u);
        tv1 = Fp.mul(tv1, opts.Z);
        tv2 = Fp.sqr(tv1);
        tv2 = Fp.add(tv2, tv1);
        tv3 = Fp.add(tv2, Fp.ONE);
        tv3 = Fp.mul(tv3, opts.B);
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
        tv4 = Fp.mul(tv4, opts.A);
        tv2 = Fp.sqr(tv3);
        tv6 = Fp.sqr(tv4);
        tv5 = Fp.mul(tv6, opts.A);
        tv2 = Fp.add(tv2, tv5);
        tv2 = Fp.mul(tv2, tv3);
        tv6 = Fp.mul(tv6, tv4);
        tv5 = Fp.mul(tv6, opts.B);
        tv2 = Fp.add(tv2, tv5);
        x = Fp.mul(tv1, tv3);
        const { isValid, value } = sqrtRatio(tv2, tv6);
        y = Fp.mul(tv1, u);
        y = Fp.mul(y, value);
        x = Fp.cmov(x, tv3, isValid);
        y = Fp.cmov(y, value, isValid);
        const e1 = Fp.isOdd(u) === Fp.isOdd(y);
        y = Fp.cmov(Fp.neg(y), y, e1);
        x = Fp.div(x, tv4);
        return { x, y };
      };
    }
    exports.mapToCurveSimpleSWU = mapToCurveSimpleSWU;
  }
});

// node_modules/.pnpm/lossless-json@4.0.1/node_modules/lossless-json/lib/umd/lossless-json.js
var require_lossless_json = __commonJS({
  "node_modules/.pnpm/lossless-json@4.0.1/node_modules/lossless-json/lib/umd/lossless-json.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).LosslessJSON = {});
    }(exports, function(t) {
      "use strict";
      function e(t2) {
        return r.test(t2);
      }
      const r = /^-?[0-9]+$/;
      function n(t2) {
        return o.test(t2);
      }
      const o = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
      function i(t2, r2) {
        const n2 = parseFloat(t2), o2 = String(n2), i2 = a(t2), c2 = a(o2);
        if (i2 === c2)
          return true;
        if (true === (r2 == null ? void 0 : r2.approx)) {
          const r3 = 14;
          if (!e(t2) && c2.length >= r3 && i2.startsWith(c2.substring(0, r3)))
            return true;
        }
        return false;
      }
      let c = function(t2) {
        return t2.underflow = "underflow", t2.overflow = "overflow", t2.truncate_integer = "truncate_integer", t2.truncate_float = "truncate_float", t2;
      }({});
      function u(t2) {
        if (i(t2, { approx: false }))
          return;
        if (e(t2))
          return c.truncate_integer;
        const r2 = parseFloat(t2);
        return isFinite(r2) ? 0 === r2 ? c.underflow : c.truncate_float : c.overflow;
      }
      function a(t2) {
        return t2.replace(f, "").replace(l, "").replace(d, "").replace(s, "");
      }
      const f = /[eE][+-]?\d+$/, s = /^-?(0*)?/, l = /\./, d = /0+$/;
      class h {
        constructor(t2) {
          __publicField(this, "isLosslessNumber", true);
          if (!n(t2))
            throw new Error('Invalid number (value: "' + t2 + '")');
          this.value = t2;
        }
        valueOf() {
          const t2 = u(this.value);
          if (void 0 === t2 || t2 === c.truncate_float)
            return parseFloat(this.value);
          if (e(this.value))
            return BigInt(this.value);
          throw new Error(`Cannot safely convert to number: the value '${this.value}' would ${t2} and become ${parseFloat(this.value)}`);
        }
        toString() {
          return this.value;
        }
      }
      function p(t2) {
        return t2 && "object" == typeof t2 && true === t2.isLosslessNumber || false;
      }
      function y(t2) {
        return new h(t2);
      }
      function w(t2, e2, r2, n2) {
        return Array.isArray(r2) ? n2.call(t2, e2, function(t3, e3) {
          for (let r3 = 0; r3 < t3.length; r3++)
            t3[r3] = w(t3, r3 + "", t3[r3], e3);
          return t3;
        }(r2, n2)) : r2 && "object" == typeof r2 && !p(r2) ? n2.call(t2, e2, function(t3, e3) {
          return Object.keys(t3).forEach((r3) => {
            const n3 = w(t3, r3, t3[r3], e3);
            void 0 !== n3 ? t3[r3] = n3 : delete t3[r3];
          }), t3;
        }(r2, n2)) : n2.call(t2, e2, r2);
      }
      function b(t2) {
        return t2 >= J && t2 <= B || t2 >= Q && t2 <= Z || t2 >= U && t2 <= q;
      }
      function g(t2) {
        return t2 >= J && t2 <= B;
      }
      function v(t2, e2) {
        if (t2 === e2)
          return true;
        if (Array.isArray(t2) && Array.isArray(e2))
          return t2.length === e2.length && t2.every((t3, r2) => v(t3, e2[r2]));
        if (A(t2) && A(e2)) {
          return [.../* @__PURE__ */ new Set([...Object.keys(t2), ...Object.keys(e2)])].every((r2) => v(t2[r2], e2[r2]));
        }
        return false;
      }
      function A(t2) {
        return "object" == typeof t2 && null !== t2;
      }
      const m = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "	" }, C = 92, $ = 123, S = 125, x = 91, E = 93, N = 32, O = 10, I = 9, j = 13, k = 34, _ = 43, F = 45, J = 48, L = 49, B = 57, D = 44, T = 46, R = 58, Q = 65, U = 97, P = 69, W = 101, Z = 70, q = 102;
      const z = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      t.LosslessNumber = h, t.UnsafeNumberReason = c, t.config = function(t2) {
        throw new Error("config is deprecated, support for circularRefs is removed from the library. If you encounter circular references in your data structures, please rethink your datastructures: better prevent circular references in the first place.");
      }, t.getUnsafeNumberReason = u, t.isInteger = e, t.isLosslessNumber = p, t.isNumber = n, t.isSafeNumber = i, t.parse = function(t2, e2) {
        let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y, n2 = 0;
        const o2 = u2();
        return function(t3) {
          if (void 0 === t3)
            throw new SyntaxError(`JSON value expected ${H()}`);
        }(o2), function() {
          if (n2 < t2.length)
            throw new SyntaxError(`Expected end of input ${H()}`);
        }(), e2 ? function(t3, e3) {
          return w({ "": t3 }, "", t3, e3);
        }(o2, e2) : o2;
        function i2() {
          if (t2.charCodeAt(n2) === $) {
            n2++, f2();
            const e3 = {};
            let r3 = true;
            for (; n2 < t2.length && t2.charCodeAt(n2) !== S; ) {
              r3 ? r3 = false : (l2(), f2());
              const t3 = n2, o3 = s2();
              if (void 0 === o3)
                return void A2();
              f2(), d2();
              const i3 = u2();
              if (void 0 === i3)
                return void q2();
              Object.prototype.hasOwnProperty.call(e3, o3) && !v(i3, e3[o3]) && Q2(o3, t3 + 1), e3[o3] = i3;
            }
            return t2.charCodeAt(n2) !== S && function() {
              throw new SyntaxError(`Quoted object key or end of object '}' expected ${H()}`);
            }(), n2++, e3;
          }
        }
        function c2() {
          if (t2.charCodeAt(n2) === x) {
            n2++, f2();
            const e3 = [];
            let r3 = true;
            for (; n2 < t2.length && t2.charCodeAt(n2) !== E; ) {
              r3 ? r3 = false : l2();
              const t3 = u2();
              h2(t3), e3.push(t3);
            }
            return t2.charCodeAt(n2) !== E && function() {
              throw new SyntaxError(`Array item or end of array ']' expected ${H()}`);
            }(), n2++, e3;
          }
        }
        function u2() {
          f2();
          const e3 = s2() ?? function() {
            const e4 = n2;
            t2.charCodeAt(n2) === F && (n2++, p2(e4));
            if (t2.charCodeAt(n2) === J)
              n2++;
            else if (o3 = t2.charCodeAt(n2), o3 >= L && o3 <= B)
              for (n2++; g(t2.charCodeAt(n2)); )
                n2++;
            var o3;
            if (t2.charCodeAt(n2) === T)
              for (n2++, p2(e4); g(t2.charCodeAt(n2)); )
                n2++;
            if (t2.charCodeAt(n2) === W || t2.charCodeAt(n2) === P)
              for (n2++, t2.charCodeAt(n2) !== F && t2.charCodeAt(n2) !== _ || n2++, p2(e4); g(t2.charCodeAt(n2)); )
                n2++;
            if (n2 > e4)
              return r2(t2.slice(e4, n2));
          }() ?? i2() ?? c2() ?? a2("true", true) ?? a2("false", false) ?? a2("null", null);
          return f2(), e3;
        }
        function a2(e3, r3) {
          if (t2.slice(n2, n2 + e3.length) === e3)
            return n2 += e3.length, r3;
        }
        function f2() {
          for (; (e3 = t2.charCodeAt(n2)) === N || e3 === O || e3 === I || e3 === j; )
            n2++;
          var e3;
        }
        function s2() {
          if (t2.charCodeAt(n2) === k) {
            n2++;
            let r3 = "";
            for (; n2 < t2.length && t2.charCodeAt(n2) !== k; ) {
              if (t2.charCodeAt(n2) === C) {
                const e4 = t2[n2 + 1], o3 = m[e4];
                void 0 !== o3 ? (r3 += o3, n2++) : "u" === e4 ? b(t2.charCodeAt(n2 + 2)) && b(t2.charCodeAt(n2 + 3)) && b(t2.charCodeAt(n2 + 4)) && b(t2.charCodeAt(n2 + 5)) ? (r3 += String.fromCharCode(parseInt(t2.slice(n2 + 2, n2 + 6), 16)), n2 += 5) : z2(n2) : Z2(n2);
              } else
                (e3 = t2.charCodeAt(n2)) >= 32 && e3 <= 1114111 ? r3 += t2[n2] : U2(t2[n2]);
              n2++;
            }
            return function() {
              if (t2.charCodeAt(n2) !== k)
                throw new SyntaxError(`End of string '"' expected ${H()}`);
            }(), n2++, r3;
          }
          var e3;
        }
        function l2() {
          if (t2.charCodeAt(n2) !== D)
            throw new SyntaxError(`Comma ',' expected after value ${H()}`);
          n2++;
        }
        function d2() {
          if (t2.charCodeAt(n2) !== R)
            throw new SyntaxError(`Colon ':' expected after property name ${H()}`);
          n2++;
        }
        function h2(t3) {
          if (void 0 === t3)
            throw new SyntaxError(`Array item expected ${H()}`);
        }
        function p2(e3) {
          if (!g(t2.charCodeAt(n2))) {
            const r3 = t2.slice(e3, n2);
            throw new SyntaxError(`Invalid number '${r3}', expecting a digit ${H()}`);
          }
        }
        function A2() {
          throw new SyntaxError(`Quoted object key expected ${H()}`);
        }
        function Q2(t3, e3) {
          throw new SyntaxError(`Duplicate key '${t3}' encountered at position ${e3}`);
        }
        function U2(t3) {
          throw new SyntaxError(`Invalid character '${t3}' ${G()}`);
        }
        function Z2(e3) {
          const r3 = t2.slice(e3, e3 + 2);
          throw new SyntaxError(`Invalid escape character '${r3}' ${G()}`);
        }
        function q2() {
          throw new SyntaxError(`Object value expected after ':' ${G()}`);
        }
        function z2(e3) {
          const r3 = t2.slice(e3, e3 + 6);
          throw new SyntaxError(`Invalid unicode character '${r3}' ${G()}`);
        }
        function G() {
          return `at position ${n2}`;
        }
        function H() {
          return (n2 < t2.length ? `but got '${t2[n2]}'` : "but reached end of input") + " " + G();
        }
      }, t.parseLosslessNumber = y, t.parseNumberAndBigInt = function(t2) {
        return e(t2) ? BigInt(t2) : parseFloat(t2);
      }, t.reviveDate = function(t2, e2) {
        return "string" == typeof e2 && z.test(e2) ? new Date(e2) : e2;
      }, t.stringify = function t2(e2, r2, o2, i2) {
        const c2 = function(t3) {
          if ("number" == typeof t3)
            return " ".repeat(t3);
          if ("string" == typeof t3 && "" !== t3)
            return t3;
          return;
        }(o2);
        return u2("function" == typeof r2 ? r2.call({ "": e2 }, "", e2) : e2, "");
        function u2(e3, a2) {
          if (Array.isArray(i2)) {
            const t3 = i2.find((t4) => t4.test(e3));
            if (t3) {
              const r3 = t3.stringify(e3);
              if ("string" != typeof r3 || !n(r3))
                throw new Error(`Invalid JSON number: output of a number stringifier must be a string containing a JSON number (output: ${r3})`);
              return r3;
            }
          }
          return "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || null === e3 || e3 instanceof Date || e3 instanceof Boolean || e3 instanceof Number || e3 instanceof String ? JSON.stringify(e3) : e3 && e3.isLosslessNumber || "bigint" == typeof e3 ? e3.toString() : Array.isArray(e3) ? function(t3, e4) {
            if (0 === t3.length)
              return "[]";
            const n2 = c2 ? e4 + c2 : void 0;
            let o3 = c2 ? "[\n" : "[";
            for (let e5 = 0; e5 < t3.length; e5++) {
              const i3 = "function" == typeof r2 ? r2.call(t3, String(e5), t3[e5]) : t3[e5];
              c2 && (o3 += n2), o3 += void 0 !== i3 && "function" != typeof i3 ? u2(i3, n2) : "null", e5 < t3.length - 1 && (o3 += c2 ? ",\n" : ",");
            }
            return o3 += c2 ? "\n" + e4 + "]" : "]", o3;
          }(e3, a2) : e3 && "object" == typeof e3 ? function(e4, n2) {
            if ("function" == typeof e4.toJSON)
              return t2(e4.toJSON(), r2, o2, void 0);
            const i3 = Array.isArray(r2) ? r2.map(String) : Object.keys(e4);
            if (0 === i3.length)
              return "{}";
            const a3 = c2 ? n2 + c2 : void 0;
            let f2 = true, s2 = c2 ? "{\n" : "{";
            return i3.forEach((t3) => {
              const n3 = "function" == typeof r2 ? r2.call(e4, t3, e4[t3]) : e4[t3];
              if (function(t4, e5) {
                return void 0 !== e5 && "function" != typeof e5 && "symbol" != typeof e5;
              }(0, n3)) {
                f2 ? f2 = false : s2 += c2 ? ",\n" : ",";
                const e5 = JSON.stringify(t3);
                s2 += c2 ? a3 + e5 + ": " : e5 + ":", s2 += u2(n3, a3);
              }
            }), s2 += c2 ? "\n" + n2 + "}" : "}", s2;
          }(e3, a2) : void 0;
        }
      }, t.toLosslessNumber = function(t2) {
        if (a(t2 + "").length > 15)
          throw new Error(`Invalid number: contains more than 15 digits and is most likely truncated and unsafe by itself (value: ${t2})`);
        if (isNaN(t2))
          throw new Error("Invalid number: NaN");
        if (!isFinite(t2))
          throw new Error("Invalid number: " + t2);
        return new h(String(t2));
      }, t.toSafeNumberOrThrow = function(t2, e2) {
        const r2 = parseFloat(t2), n2 = u(t2);
        if (true === (e2 == null ? void 0 : e2.approx) ? n2 && n2 !== c.truncate_float : n2) {
          const e3 = n2 == null ? void 0 : n2.replace(/_\w+$/, "");
          throw new Error(`Cannot safely convert to number: the value '${t2}' would ${e3} and become ${r2}`);
        }
        return r2;
      };
    });
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/trees.js"(exports, module) {
    "use strict";
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      let len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
    );
    var bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    var d_code = (dist) => {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    };
    var put_short = (s, w) => {
      s.pending_buf[s.pending++] = w & 255;
      s.pending_buf[s.pending++] = w >>> 8 & 255;
    };
    var send_bits = (s, value, length) => {
      if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
      }
    };
    var send_code = (s, c, tree) => {
      send_bits(
        s,
        tree[c * 2],
        tree[c * 2 + 1]
        /*.Len*/
      );
    };
    var bi_reverse = (code, len) => {
      let res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    };
    var bi_flush = (s) => {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    };
    var gen_bitlen = (s, desc) => {
      const tree = desc.dyn_tree;
      const max_code = desc.max_code;
      const stree = desc.stat_desc.static_tree;
      const has_stree = desc.stat_desc.has_stree;
      const extra = desc.stat_desc.extra_bits;
      const base = desc.stat_desc.extra_base;
      const max_length = desc.stat_desc.max_length;
      let h;
      let n, m;
      let bits;
      let xbits;
      let f;
      let overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n - base];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        }
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
        }
      }
    };
    var gen_codes = (tree, max_code, bl_count) => {
      const next_code = new Array(MAX_BITS + 1);
      let code = 0;
      let bits;
      let n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        code = code + bl_count[bits - 1] << 1;
        next_code[bits] = code;
      }
      for (n = 0; n <= max_code; n++) {
        let len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    };
    var tr_static_init = () => {
      let n;
      let bits;
      let length;
      let code;
      let dist;
      const bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < 1 << extra_lbits[code]; n++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < 1 << extra_dbits[code]; n++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    };
    var init_block = (s) => {
      let n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.sym_next = s.matches = 0;
    };
    var bi_windup = (s) => {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    };
    var smaller = (tree, n, m, depth) => {
      const _n2 = n * 2;
      const _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
    };
    var pqdownheap = (s, tree, k) => {
      const v = s.heap[k];
      let j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    };
    var compress_block = (s, ltree, dtree) => {
      let dist;
      let lc;
      let sx = 0;
      let code;
      let extra;
      if (s.sym_next !== 0) {
        do {
          dist = s.pending_buf[s.sym_buf + sx++] & 255;
          dist += (s.pending_buf[s.sym_buf + sx++] & 255) << 8;
          lc = s.pending_buf[s.sym_buf + sx++];
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (sx < s.sym_next);
      }
      send_code(s, END_BLOCK, ltree);
    };
    var build_tree = (s, desc) => {
      const tree = desc.dyn_tree;
      const stree = desc.stat_desc.static_tree;
      const has_stree = desc.stat_desc.has_stree;
      const elems = desc.stat_desc.elems;
      let n, m;
      let max_code = -1;
      let node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n = s.heap_len >> 1; n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[
          1
          /*SMALLEST*/
        ] = s.heap[s.heap_len--];
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
        m = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[
          1
          /*SMALLEST*/
        ] = node++;
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[
        1
        /*SMALLEST*/
      ];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    };
    var scan_tree = (s, tree, max_code) => {
      let n;
      let prevlen = -1;
      let curlen;
      let nextlen = tree[0 * 2 + 1];
      let count = 0;
      let max_count = 7;
      let min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          s.bl_tree[curlen * 2] += count;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    };
    var send_tree = (s, tree, max_code) => {
      let n;
      let prevlen = -1;
      let curlen;
      let nextlen = tree[0 * 2 + 1];
      let count = 0;
      let max_count = 7;
      let min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count--;
          }
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count - 3, 2);
        } else if (count <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    };
    var build_bl_tree = (s) => {
      let max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    };
    var send_all_trees = (s, lcodes, dcodes, blcodes) => {
      let rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    };
    var detect_data_type = (s) => {
      let block_mask = 4093624447;
      let n;
      for (n = 0; n <= 31; n++, block_mask >>>= 1) {
        if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
          return Z_BINARY;
        }
      }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    };
    var static_init_done = false;
    var _tr_init = (s) => {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    };
    var _tr_stored_block = (s, buf, stored_len, last) => {
      send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      bi_windup(s);
      put_short(s, stored_len);
      put_short(s, ~stored_len);
      if (stored_len) {
        s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
      }
      s.pending += stored_len;
    };
    var _tr_align = (s) => {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    };
    var _tr_flush_block = (s, buf, stored_len, last) => {
      let opt_lenb, static_lenb;
      let max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s, buf, stored_len, last);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last) {
        bi_windup(s);
      }
    };
    var _tr_tally = (s, dist, lc) => {
      s.pending_buf[s.sym_buf + s.sym_next++] = dist;
      s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
      s.pending_buf[s.sym_buf + s.sym_next++] = lc;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return s.sym_next === s.sym_end;
    };
    module.exports._tr_init = _tr_init;
    module.exports._tr_stored_block = _tr_stored_block;
    module.exports._tr_flush_block = _tr_flush_block;
    module.exports._tr_tally = _tr_tally;
    module.exports._tr_align = _tr_align;
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/adler32.js"(exports, module) {
    "use strict";
    var adler32 = (adler, buf, len, pos) => {
      let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
      while (len !== 0) {
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    };
    module.exports = adler32;
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/crc32.js
var require_crc32 = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/crc32.js"(exports, module) {
    "use strict";
    var makeTable = () => {
      let c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
      }
      return table;
    };
    var crcTable = new Uint32Array(makeTable());
    var crc32 = (crc, buf, len, pos) => {
      const t = crcTable;
      const end = pos + len;
      crc ^= -1;
      for (let i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    };
    module.exports = crc32;
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/messages.js"(exports, module) {
    "use strict";
    module.exports = {
      2: "need dictionary",
      /* Z_NEED_DICT       2  */
      1: "stream end",
      /* Z_STREAM_END      1  */
      0: "",
      /* Z_OK              0  */
      "-1": "file error",
      /* Z_ERRNO         (-1) */
      "-2": "stream error",
      /* Z_STREAM_ERROR  (-2) */
      "-3": "data error",
      /* Z_DATA_ERROR    (-3) */
      "-4": "insufficient memory",
      /* Z_MEM_ERROR     (-4) */
      "-5": "buffer error",
      /* Z_BUF_ERROR     (-5) */
      "-6": "incompatible version"
      /* Z_VERSION_ERROR (-6) */
    };
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/constants.js
var require_constants2 = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/constants.js"(exports, module) {
    "use strict";
    module.exports = {
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      /* compression levels */
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      /* The deflate compression method */
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/deflate.js"(exports, module) {
    "use strict";
    var { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = require_trees();
    var adler32 = require_adler32();
    var crc32 = require_crc32();
    var msg = require_messages();
    var {
      Z_NO_FLUSH,
      Z_PARTIAL_FLUSH,
      Z_FULL_FLUSH,
      Z_FINISH,
      Z_BLOCK,
      Z_OK,
      Z_STREAM_END,
      Z_STREAM_ERROR,
      Z_DATA_ERROR,
      Z_BUF_ERROR,
      Z_DEFAULT_COMPRESSION,
      Z_FILTERED,
      Z_HUFFMAN_ONLY,
      Z_RLE,
      Z_FIXED,
      Z_DEFAULT_STRATEGY,
      Z_UNKNOWN,
      Z_DEFLATED
    } = require_constants2();
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var GZIP_STATE = 57;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    var err = (strm, errorCode) => {
      strm.msg = msg[errorCode];
      return errorCode;
    };
    var rank = (f) => {
      return f * 2 - (f > 4 ? 9 : 0);
    };
    var zero = (buf) => {
      let len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    };
    var slide_hash = (s) => {
      let n, m;
      let p;
      let wsize = s.w_size;
      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = m >= wsize ? m - wsize : 0;
      } while (--n);
      n = wsize;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = m >= wsize ? m - wsize : 0;
      } while (--n);
    };
    var HASH_ZLIB = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask;
    var HASH = HASH_ZLIB;
    var flush_pending = (strm) => {
      const s = strm.state;
      let len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    };
    var flush_block_only = (s, last) => {
      _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    };
    var put_byte = (s, b) => {
      s.pending_buf[s.pending++] = b;
    };
    var putShortMSB = (s, b) => {
      s.pending_buf[s.pending++] = b >>> 8 & 255;
      s.pending_buf[s.pending++] = b & 255;
    };
    var read_buf = (strm, buf, start, size) => {
      let len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    };
    var longest_match = (s, cur_match) => {
      let chain_length = s.max_chain_length;
      let scan = s.strstart;
      let match;
      let len;
      let best_len = s.prev_length;
      let nice_match = s.nice_match;
      const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      const _win = s.window;
      const wmask = s.w_mask;
      const prev = s.prev;
      const strend = s.strstart + MAX_MATCH;
      let scan_end1 = _win[scan + best_len - 1];
      let scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    };
    var fill_window = (s) => {
      const _w_size = s.w_size;
      let n, more, str;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          if (s.insert > s.strstart) {
            s.insert = s.strstart;
          }
          slide_hash(s);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
          s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
          while (s.insert) {
            s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    };
    var deflate_stored = (s, flush) => {
      let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
      let len, left, have, last = 0;
      let used = s.strm.avail_in;
      do {
        len = 65535;
        have = s.bi_valid + 42 >> 3;
        if (s.strm.avail_out < have) {
          break;
        }
        have = s.strm.avail_out - have;
        left = s.strstart - s.block_start;
        if (len > left + s.strm.avail_in) {
          len = left + s.strm.avail_in;
        }
        if (len > have) {
          len = have;
        }
        if (len < min_block && (len === 0 && flush !== Z_FINISH || flush === Z_NO_FLUSH || len !== left + s.strm.avail_in)) {
          break;
        }
        last = flush === Z_FINISH && len === left + s.strm.avail_in ? 1 : 0;
        _tr_stored_block(s, 0, 0, last);
        s.pending_buf[s.pending - 4] = len;
        s.pending_buf[s.pending - 3] = len >> 8;
        s.pending_buf[s.pending - 2] = ~len;
        s.pending_buf[s.pending - 1] = ~len >> 8;
        flush_pending(s.strm);
        if (left) {
          if (left > len) {
            left = len;
          }
          s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
          s.strm.next_out += left;
          s.strm.avail_out -= left;
          s.strm.total_out += left;
          s.block_start += left;
          len -= left;
        }
        if (len) {
          read_buf(s.strm, s.strm.output, s.strm.next_out, len);
          s.strm.next_out += len;
          s.strm.avail_out -= len;
          s.strm.total_out += len;
        }
      } while (last === 0);
      used -= s.strm.avail_in;
      if (used) {
        if (used >= s.w_size) {
          s.matches = 2;
          s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
          s.strstart = s.w_size;
          s.insert = s.strstart;
        } else {
          if (s.window_size - s.strstart <= used) {
            s.strstart -= s.w_size;
            s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
            if (s.matches < 2) {
              s.matches++;
            }
            if (s.insert > s.strstart) {
              s.insert = s.strstart;
            }
          }
          s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
          s.strstart += used;
          s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
        }
        s.block_start = s.strstart;
      }
      if (s.high_water < s.strstart) {
        s.high_water = s.strstart;
      }
      if (last) {
        return BS_FINISH_DONE;
      }
      if (flush !== Z_NO_FLUSH && flush !== Z_FINISH && s.strm.avail_in === 0 && s.strstart === s.block_start) {
        return BS_BLOCK_DONE;
      }
      have = s.window_size - s.strstart;
      if (s.strm.avail_in > have && s.block_start >= s.w_size) {
        s.block_start -= s.w_size;
        s.strstart -= s.w_size;
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;
        }
        have += s.w_size;
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      if (have > s.strm.avail_in) {
        have = s.strm.avail_in;
      }
      if (have) {
        read_buf(s.strm, s.window, s.strstart, have);
        s.strstart += have;
        s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
      }
      if (s.high_water < s.strstart) {
        s.high_water = s.strstart;
      }
      have = s.bi_valid + 42 >> 3;
      have = s.pending_buf_size - have > 65535 ? 65535 : s.pending_buf_size - have;
      min_block = have > s.w_size ? s.w_size : have;
      left = s.strstart - s.block_start;
      if (left >= min_block || (left || flush === Z_FINISH) && flush !== Z_NO_FLUSH && s.strm.avail_in === 0 && left <= have) {
        len = left > have ? have : left;
        last = flush === Z_FINISH && s.strm.avail_in === 0 && len === left ? 1 : 0;
        _tr_stored_block(s, s.block_start, len, last);
        s.block_start += len;
        flush_pending(s.strm);
      }
      return last ? BS_FINISH_STARTED : BS_NEED_MORE;
    };
    var deflate_fast = (s, flush) => {
      let hash_head;
      let bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
          }
        } else {
          bflush = _tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    };
    var deflate_slow = (s, flush) => {
      let hash_head;
      let bflush;
      let max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      if (s.match_available) {
        bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    };
    var deflate_rle = (s, flush) => {
      let bflush;
      let prev;
      let scan, strend;
      const _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = _tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    };
    var deflate_huff = (s, flush) => {
      let bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = _tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    };
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    var configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
    ];
    var lm_init = (s) => {
      s.window_size = 2 * s.w_size;
      zero(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    };
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
      this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
      this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(MAX_BITS + 1);
      this.heap = new Uint16Array(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(2 * L_CODES + 1);
      zero(this.depth);
      this.sym_buf = 0;
      this.lit_bufsize = 0;
      this.sym_next = 0;
      this.sym_end = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    var deflateStateCheck = (strm) => {
      if (!strm) {
        return 1;
      }
      const s = strm.state;
      if (!s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
      s.status !== GZIP_STATE && //#endif
      s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) {
        return 1;
      }
      return 0;
    };
    var deflateResetKeep = (strm) => {
      if (deflateStateCheck(strm)) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      const s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = //#ifdef GZIP
      s.wrap === 2 ? GZIP_STATE : (
        //#endif
        s.wrap ? INIT_STATE : BUSY_STATE
      );
      strm.adler = s.wrap === 2 ? 0 : 1;
      s.last_flush = -2;
      _tr_init(s);
      return Z_OK;
    };
    var deflateReset = (strm) => {
      const ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    };
    var deflateSetHeader = (strm, head) => {
      if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    };
    var deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      let wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      const s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.status = INIT_STATE;
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new Uint8Array(s.w_size * 2);
      s.head = new Uint16Array(s.hash_size);
      s.prev = new Uint16Array(s.w_size);
      s.lit_bufsize = 1 << memLevel + 6;
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new Uint8Array(s.pending_buf_size);
      s.sym_buf = s.lit_bufsize;
      s.sym_end = (s.lit_bufsize - 1) * 3;
      s.level = level;
      s.strategy = strategy;
      s.method = method;
      return deflateReset(strm);
    };
    var deflateInit = (strm, level) => {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    };
    var deflate = (strm, flush) => {
      if (deflateStateCheck(strm) || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      const s = strm.state;
      if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      const old_flush = s.last_flush;
      s.last_flush = flush;
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === INIT_STATE && s.wrap === 0) {
        s.status = BUSY_STATE;
      }
      if (s.status === INIT_STATE) {
        let header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }
        header |= level_flags << 6;
        if (s.strstart !== 0) {
          header |= PRESET_DICT;
        }
        header += 31 - header % 31;
        putShortMSB(s, header);
        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 65535);
        }
        strm.adler = 1;
        s.status = BUSY_STATE;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
      if (s.status === GZIP_STATE) {
        strm.adler = 0;
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        } else {
          put_byte(
            s,
            (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
          );
          put_byte(s, s.gzhead.time & 255);
          put_byte(s, s.gzhead.time >> 8 & 255);
          put_byte(s, s.gzhead.time >> 16 & 255);
          put_byte(s, s.gzhead.time >> 24 & 255);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 255);
          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 255);
            put_byte(s, s.gzhead.extra.length >> 8 & 255);
          }
          if (s.gzhead.hcrc) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
          }
          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          let beg = s.pending;
          let left = (s.gzhead.extra.length & 65535) - s.gzindex;
          while (s.pending + left > s.pending_buf_size) {
            let copy = s.pending_buf_size - s.pending;
            s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
            s.pending = s.pending_buf_size;
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            s.gzindex += copy;
            flush_pending(strm);
            if (s.pending !== 0) {
              s.last_flush = -1;
              return Z_OK;
            }
            beg = 0;
            left -= copy;
          }
          let gzhead_extra = new Uint8Array(s.gzhead.extra);
          s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
          s.pending += left;
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          s.gzindex = 0;
        }
        s.status = NAME_STATE;
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          let beg = s.pending;
          let val;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK;
              }
              beg = 0;
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          s.gzindex = 0;
        }
        s.status = COMMENT_STATE;
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          let beg = s.pending;
          let val;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK;
              }
              beg = 0;
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
        }
        s.status = HCRC_STATE;
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
            if (s.pending !== 0) {
              s.last_flush = -1;
              return Z_OK;
            }
          }
          put_byte(s, strm.adler & 255);
          put_byte(s, strm.adler >> 8 & 255);
          strm.adler = 0;
        }
        s.status = BUSY_STATE;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            _tr_align(s);
          } else if (flush !== Z_BLOCK) {
            _tr_stored_block(s, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    };
    var deflateEnd = (strm) => {
      if (deflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const status = strm.state.status;
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    };
    var deflateSetDictionary = (strm, dictionary) => {
      let dictLength = dictionary.length;
      if (deflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const s = strm.state;
      const wrap = s.wrap;
      if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s.wrap = 0;
      if (dictLength >= s.w_size) {
        if (wrap === 0) {
          zero(s.head);
          s.strstart = 0;
          s.block_start = 0;
          s.insert = 0;
        }
        let tmpDict = new Uint8Array(s.w_size);
        tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
      }
      const avail = strm.avail_in;
      const next = strm.next_in;
      const input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s);
      while (s.lookahead >= MIN_MATCH) {
        let str = s.strstart;
        let n = s.lookahead - (MIN_MATCH - 1);
        do {
          s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
        } while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
      }
      s.strstart += s.lookahead;
      s.block_start = s.strstart;
      s.insert = s.lookahead;
      s.lookahead = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s.wrap = wrap;
      return Z_OK;
    };
    module.exports.deflateInit = deflateInit;
    module.exports.deflateInit2 = deflateInit2;
    module.exports.deflateReset = deflateReset;
    module.exports.deflateResetKeep = deflateResetKeep;
    module.exports.deflateSetHeader = deflateSetHeader;
    module.exports.deflate = deflate;
    module.exports.deflateEnd = deflateEnd;
    module.exports.deflateSetDictionary = deflateSetDictionary;
    module.exports.deflateInfo = "pako deflate (from Nodeca project)";
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/utils/common.js"(exports, module) {
    "use strict";
    var _has = (obj, key) => {
      return Object.prototype.hasOwnProperty.call(obj, key);
    };
    module.exports.assign = function(obj) {
      const sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        const source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (const p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    module.exports.flattenChunks = (chunks) => {
      let len = 0;
      for (let i = 0, l = chunks.length; i < l; i++) {
        len += chunks[i].length;
      }
      const result = new Uint8Array(len);
      for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
        let chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
      }
      return result;
    };
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/utils/strings.js"(exports, module) {
    "use strict";
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new Uint8Array(256);
    for (let q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    _utf8len[254] = _utf8len[254] = 1;
    module.exports.string2buf = (str) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(str);
      }
      let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new Uint8Array(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i++] = c;
        } else if (c < 2048) {
          buf[i++] = 192 | c >>> 6;
          buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i++] = 224 | c >>> 12;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        } else {
          buf[i++] = 240 | c >>> 18;
          buf[i++] = 128 | c >>> 12 & 63;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        }
      }
      return buf;
    };
    var buf2binstring = (buf, len) => {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK) {
          return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
        }
      }
      let result = "";
      for (let i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    };
    module.exports.buf2string = (buf, max) => {
      const len = max || buf.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(buf.subarray(0, max));
      }
      let i, out;
      const utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        let c = buf[i++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        let c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i < len) {
          c = c << 6 | buf[i++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    module.exports.utf8border = (buf, max) => {
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      let pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/zstream.js"(exports, module) {
    "use strict";
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    module.exports = ZStream;
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/deflate.js"(exports, module) {
    "use strict";
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var {
      Z_NO_FLUSH,
      Z_SYNC_FLUSH,
      Z_FULL_FLUSH,
      Z_FINISH,
      Z_OK,
      Z_STREAM_END,
      Z_DEFAULT_COMPRESSION,
      Z_DEFAULT_STRATEGY,
      Z_DEFLATED
    } = require_constants2();
    function Deflate(options) {
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY
      }, options || {});
      let opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      let status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        let dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        this._dict_set = true;
      }
    }
    Deflate.prototype.push = function(data, flush_mode) {
      const strm = this.strm;
      const chunkSize = this.options.chunkSize;
      let status, _flush_mode;
      if (this.ended) {
        return false;
      }
      if (flush_mode === ~~flush_mode)
        _flush_mode = flush_mode;
      else
        _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      for (; ; ) {
        if (strm.avail_out === 0) {
          strm.output = new Uint8Array(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
          this.onData(strm.output.subarray(0, strm.next_out));
          strm.avail_out = 0;
          continue;
        }
        status = zlib_deflate.deflate(strm, _flush_mode);
        if (status === Z_STREAM_END) {
          if (strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
          }
          status = zlib_deflate.deflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === Z_OK;
        }
        if (strm.avail_out === 0) {
          this.onData(strm.output);
          continue;
        }
        if (_flush_mode > 0 && strm.next_out > 0) {
          this.onData(strm.output.subarray(0, strm.next_out));
          strm.avail_out = 0;
          continue;
        }
        if (strm.avail_in === 0)
          break;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Deflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        this.result = utils.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function deflate(input, options) {
      const deflator = new Deflate(options);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate(input, options);
    }
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate(input, options);
    }
    module.exports.Deflate = Deflate;
    module.exports.deflate = deflate;
    module.exports.deflateRaw = deflateRaw;
    module.exports.gzip = gzip;
    module.exports.constants = require_constants2();
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/inffast.js"(exports, module) {
    "use strict";
    var BAD = 16209;
    var TYPE = 16191;
    module.exports = function inflate_fast(strm, start) {
      let _in;
      let last;
      let _out;
      let beg;
      let end;
      let dmax;
      let wsize;
      let whave;
      let wnext;
      let s_window;
      let hold;
      let bits;
      let lcode;
      let dcode;
      let lmask;
      let dmask;
      let here;
      let op;
      let len;
      let dist;
      let from;
      let from_source;
      let input, output;
      const state = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state.dmax;
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state.sane) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                          }
                        }
                        from = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from++];
                          if (len > 1) {
                            output[_out++] = from_source[from++];
                          }
                        }
                      } else {
                        from = _out - dist;
                        do {
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from++];
                          if (len > 1) {
                            output[_out++] = output[from++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
              }
              break;
            }
        } while (_in < last && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state.hold = hold;
      state.bits = bits;
      return;
    };
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/inftrees.js"(exports, module) {
    "use strict";
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = new Uint16Array([
      /* Length codes 257..285 base */
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ]);
    var lext = new Uint8Array([
      /* Length codes 257..285 extra */
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ]);
    var dbase = new Uint16Array([
      /* Distance codes 0..29 base */
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ]);
    var dext = new Uint8Array([
      /* Distance codes 0..29 extra */
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ]);
    var inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
      const bits = opts.bits;
      let len = 0;
      let sym = 0;
      let min = 0, max = 0;
      let root = 0;
      let curr = 0;
      let drop = 0;
      let left = 0;
      let used = 0;
      let huff = 0;
      let incr;
      let fill;
      let low;
      let mask;
      let next;
      let base = null;
      let match;
      const count = new Uint16Array(MAXBITS + 1);
      const offs = new Uint16Array(MAXBITS + 1);
      let extra = null;
      let here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES) {
        base = extra = work;
        match = 20;
      } else if (type === LENS) {
        base = lbase;
        extra = lext;
        match = 257;
      } else {
        base = dbase;
        extra = dext;
        match = 0;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] + 1 < match) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] >= match) {
          here_op = extra[work[sym] - match];
          here_val = base[work[sym] - match];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          }
          low = huff & mask;
          table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
      }
      if (huff !== 0) {
        table[next + huff] = len - drop << 24 | 64 << 16 | 0;
      }
      opts.bits = root;
      return 0;
    };
    module.exports = inflate_table;
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/inflate.js"(exports, module) {
    "use strict";
    var adler32 = require_adler32();
    var crc32 = require_crc32();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var {
      Z_FINISH,
      Z_BLOCK,
      Z_TREES,
      Z_OK,
      Z_STREAM_END,
      Z_NEED_DICT,
      Z_STREAM_ERROR,
      Z_DATA_ERROR,
      Z_MEM_ERROR,
      Z_BUF_ERROR,
      Z_DEFLATED
    } = require_constants2();
    var HEAD = 16180;
    var FLAGS = 16181;
    var TIME = 16182;
    var OS = 16183;
    var EXLEN = 16184;
    var EXTRA = 16185;
    var NAME = 16186;
    var COMMENT = 16187;
    var HCRC = 16188;
    var DICTID = 16189;
    var DICT = 16190;
    var TYPE = 16191;
    var TYPEDO = 16192;
    var STORED = 16193;
    var COPY_ = 16194;
    var COPY = 16195;
    var TABLE = 16196;
    var LENLENS = 16197;
    var CODELENS = 16198;
    var LEN_ = 16199;
    var LEN = 16200;
    var LENEXT = 16201;
    var DIST = 16202;
    var DISTEXT = 16203;
    var MATCH = 16204;
    var LIT = 16205;
    var CHECK = 16206;
    var LENGTH = 16207;
    var DONE = 16208;
    var BAD = 16209;
    var MEM = 16210;
    var SYNC = 16211;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    var zswap32 = (q) => {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    };
    function InflateState() {
      this.strm = null;
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new Uint16Array(320);
      this.work = new Uint16Array(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    var inflateStateCheck = (strm) => {
      if (!strm) {
        return 1;
      }
      const state = strm.state;
      if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
        return 1;
      }
      return 0;
    };
    var inflateResetKeep = (strm) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = "";
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.flags = -1;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
      state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    };
    var inflateReset = (strm) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    };
    var inflateReset2 = (strm, windowBits) => {
      let wrap;
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 5;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    };
    var inflateInit2 = (strm, windowBits) => {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      const state = new InflateState();
      strm.state = state;
      state.strm = strm;
      state.window = null;
      state.mode = HEAD;
      const ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    };
    var inflateInit = (strm) => {
      return inflateInit2(strm, DEF_WBITS);
    };
    var virgin = true;
    var lenfix;
    var distfix;
    var fixedtables = (state) => {
      if (virgin) {
        lenfix = new Int32Array(512);
        distfix = new Int32Array(32);
        let sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        }
        while (sym < 256) {
          state.lens[sym++] = 9;
        }
        while (sym < 280) {
          state.lens[sym++] = 7;
        }
        while (sym < 288) {
          state.lens[sym++] = 8;
        }
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        }
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    };
    var updatewindow = (strm, src, end, copy) => {
      let dist;
      const state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new Uint8Array(state.wsize);
      }
      if (copy >= state.wsize) {
        state.window.set(src.subarray(end - state.wsize, end), 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
        copy -= dist;
        if (copy) {
          state.window.set(src.subarray(end - copy, end), 0);
          state.wnext = copy;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          }
          if (state.whave < state.wsize) {
            state.whave += dist;
          }
        }
      }
      return 0;
    };
    var inflate = (strm, flush) => {
      let state;
      let input, output;
      let next;
      let put;
      let have, left;
      let hold;
      let bits;
      let _in, _out;
      let copy;
      let from;
      let from_source;
      let here = 0;
      let here_bits, here_op, here_val;
      let last_bits, last_op, last_val;
      let len;
      let ret;
      const hbuf = new Uint8Array(4);
      let opts;
      let n;
      const order = (
        /* permutation of code lengths */
        new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      );
      if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 2 && hold === 35615) {
                if (state.wbits === 0) {
                  state.wbits = 15;
                }
                state.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state.mode = FLAGS;
                break;
              }
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              }
              if (len > 15 || len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << state.wbits;
              state.flags = 0;
              strm.adler = state.check = 1;
              state.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
              break;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.flags = hold;
              if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              if (state.flags & 57344) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = TIME;
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc32(state.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = OS;
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = EXLEN;
            case EXLEN:
              if (state.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 512 && state.wrap & 4) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
              } else if (state.head) {
                state.head.extra = null;
              }
              state.mode = EXTRA;
            case EXTRA:
              if (state.flags & 1024) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      state.head.extra = new Uint8Array(state.head.extra_len);
                    }
                    state.head.extra.set(
                      input.subarray(
                        next,
                        // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        next + copy
                      ),
                      /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                      len
                    );
                  }
                  if (state.flags & 512 && state.wrap & 4) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            case NAME:
              if (state.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512 && state.wrap & 4) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            case COMMENT:
              if (state.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512 && state.wrap & 4) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            case HCRC:
              if (state.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.wrap & 4 && hold !== (state.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              strm.adler = state.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state.mode = DICT;
            case DICT:
              if (state.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1;
              state.mode = TYPE;
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            case TYPEDO:
              if (state.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state.mode = STORED;
                  break;
                case 1:
                  fixedtables(state);
                  state.mode = LEN_;
                  if (flush === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  }
                  break;
                case 2:
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
              }
              state.length = hold & 65535;
              hold = 0;
              bits = 0;
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            case COPY_:
              state.mode = COPY;
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                output.set(input.subarray(next, next + copy), put);
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              state.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = LENLENS;
            case LENLENS:
              while (state.have < state.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.lens[order[state.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = CODELENS;
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              if (state.mode === BAD) {
                break;
              }
              if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
              }
              state.lenbits = 9;
              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
              }
              state.distbits = 6;
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              state.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
              }
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            case LEN_:
              state.mode = LEN;
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            case LENEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              state.was = state.length;
              state.mode = DIST;
            case DIST:
              for (; ; ) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            case DISTEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.offset += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
              state.mode = MATCH;
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break;
                  }
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) {
                  strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = "incorrect data check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = LENGTH;
            case LENGTH:
              if (state.wrap && state.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = DONE;
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            default:
              return Z_STREAM_ERROR;
          }
        }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap & 4 && _out) {
        strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
        state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    };
    var inflateEnd = (strm) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      let state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    };
    var inflateGetHeader = (strm, head) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    };
    var inflateSetDictionary = (strm, dictionary) => {
      const dictLength = dictionary.length;
      let state;
      let dictid;
      let ret;
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
        }
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      return Z_OK;
    };
    module.exports.inflateReset = inflateReset;
    module.exports.inflateReset2 = inflateReset2;
    module.exports.inflateResetKeep = inflateResetKeep;
    module.exports.inflateInit = inflateInit;
    module.exports.inflateInit2 = inflateInit2;
    module.exports.inflate = inflate;
    module.exports.inflateEnd = inflateEnd;
    module.exports.inflateGetHeader = inflateGetHeader;
    module.exports.inflateSetDictionary = inflateSetDictionary;
    module.exports.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/zlib/gzheader.js"(exports, module) {
    "use strict";
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    module.exports = GZheader;
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/lib/inflate.js"(exports, module) {
    "use strict";
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    var {
      Z_NO_FLUSH,
      Z_FINISH,
      Z_OK,
      Z_STREAM_END,
      Z_NEED_DICT,
      Z_STREAM_ERROR,
      Z_DATA_ERROR,
      Z_MEM_ERROR
    } = require_constants2();
    function Inflate(options) {
      this.options = utils.assign({
        chunkSize: 1024 * 64,
        windowBits: 15,
        to: ""
      }, options || {});
      const opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      let status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
          status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== Z_OK) {
            throw new Error(msg[status]);
          }
        }
      }
    }
    Inflate.prototype.push = function(data, flush_mode) {
      const strm = this.strm;
      const chunkSize = this.options.chunkSize;
      const dictionary = this.options.dictionary;
      let status, _flush_mode, last_avail_out;
      if (this.ended)
        return false;
      if (flush_mode === ~~flush_mode)
        _flush_mode = flush_mode;
      else
        _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      for (; ; ) {
        if (strm.avail_out === 0) {
          strm.output = new Uint8Array(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, _flush_mode);
        if (status === Z_NEED_DICT && dictionary) {
          status = zlib_inflate.inflateSetDictionary(strm, dictionary);
          if (status === Z_OK) {
            status = zlib_inflate.inflate(strm, _flush_mode);
          } else if (status === Z_DATA_ERROR) {
            status = Z_NEED_DICT;
          }
        }
        while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
          zlib_inflate.inflateReset(strm);
          status = zlib_inflate.inflate(strm, _flush_mode);
        }
        switch (status) {
          case Z_STREAM_ERROR:
          case Z_DATA_ERROR:
          case Z_NEED_DICT:
          case Z_MEM_ERROR:
            this.onEnd(status);
            this.ended = true;
            return false;
        }
        last_avail_out = strm.avail_out;
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === Z_STREAM_END) {
            if (this.options.to === "string") {
              let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              let tail = strm.next_out - next_out_utf8;
              let utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail)
                strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
              this.onData(utf8str);
            } else {
              this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
            }
          }
        }
        if (status === Z_OK && last_avail_out === 0)
          continue;
        if (status === Z_STREAM_END) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return true;
        }
        if (strm.avail_in === 0)
          break;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate(input, options) {
      const inflator = new Inflate(options);
      inflator.push(input);
      if (inflator.err)
        throw inflator.msg || msg[inflator.err];
      return inflator.result;
    }
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate(input, options);
    }
    module.exports.Inflate = Inflate;
    module.exports.inflate = inflate;
    module.exports.inflateRaw = inflateRaw;
    module.exports.ungzip = inflate;
    module.exports.constants = require_constants2();
  }
});

// node_modules/.pnpm/pako@2.1.0/node_modules/pako/index.js
var require_pako = __commonJS({
  "node_modules/.pnpm/pako@2.1.0/node_modules/pako/index.js"(exports, module) {
    "use strict";
    var { Deflate, deflate, deflateRaw, gzip } = require_deflate2();
    var { Inflate, inflate, inflateRaw, ungzip } = require_inflate2();
    var constants2 = require_constants2();
    module.exports.Deflate = Deflate;
    module.exports.deflate = deflate;
    module.exports.deflateRaw = deflateRaw;
    module.exports.gzip = gzip;
    module.exports.Inflate = Inflate;
    module.exports.inflate = inflate;
    module.exports.inflateRaw = inflateRaw;
    module.exports.ungzip = ungzip;
    module.exports.constants = constants2;
  }
});

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/_assert.js
var require_assert2 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/_assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = exports.isBytes = void 0;
    function number(n) {
      if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`positive integer expected, not ${n}`);
    }
    exports.number = number;
    function bool(b) {
      if (typeof b !== "boolean")
        throw new Error(`boolean expected, not ${b}`);
    }
    exports.bool = bool;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    exports.isBytes = isBytes;
    function bytes(b, ...lengths) {
      if (!isBytes(b))
        throw new Error("Uint8Array expected");
      if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
    }
    exports.bytes = bytes;
    function hash2(h) {
      if (typeof h !== "function" || typeof h.create !== "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
      number(h.outputLen);
      number(h.blockLen);
    }
    exports.hash = hash2;
    function exists(instance, checkFinished = true) {
      if (instance.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance.finished)
        throw new Error("Hash#digest() has already been called");
    }
    exports.exists = exists;
    function output(out, instance) {
      bytes(out);
      const min = instance.outputLen;
      if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
    }
    exports.output = output;
    var assert = { number, bool, bytes, hash: hash2, exists, output };
    exports.default = assert;
  }
});

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/crypto.js
var require_crypto2 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crypto = void 0;
    exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  }
});

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/utils.js
var require_utils4 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.byteSwap32 = exports.byteSwapIfBE = exports.byteSwap = exports.isLE = exports.rotl = exports.rotr = exports.createView = exports.u32 = exports.u8 = exports.isBytes = void 0;
    var crypto_1 = require_crypto2();
    var _assert_js_1 = require_assert2();
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    exports.isBytes = isBytes;
    var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.u8 = u8;
    var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    exports.u32 = u32;
    var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.createView = createView;
    var rotr = (word, shift) => word << 32 - shift | word >>> shift;
    exports.rotr = rotr;
    var rotl = (word, shift) => word << shift | word >>> 32 - shift >>> 0;
    exports.rotl = rotl;
    exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    var byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
    exports.byteSwap = byteSwap;
    exports.byteSwapIfBE = exports.isLE ? (n) => n : (n) => (0, exports.byteSwap)(n);
    function byteSwap32(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = (0, exports.byteSwap)(arr[i]);
      }
    }
    exports.byteSwap32 = byteSwap32;
    var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      (0, _assert_js_1.bytes)(bytes);
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
      }
      return array;
    }
    exports.hexToBytes = hexToBytes;
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i = 0; i < iters; i++) {
        cb(i);
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts += diff;
      }
    }
    exports.asyncLoop = asyncLoop;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function toBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      (0, _assert_js_1.bytes)(data);
      return data;
    }
    exports.toBytes = toBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        (0, _assert_js_1.bytes)(a);
        sum += a.length;
      }
      const res = new Uint8Array(sum);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    var Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
    exports.Hash = Hash;
    var toStr = {}.toString;
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    exports.checkOpts = checkOpts;
    function wrapConstructor(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
    }
    exports.wrapConstructor = wrapConstructor;
    function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
    function wrapXOFConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
    function randomBytes(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
    exports.randomBytes = randomBytes;
  }
});

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/_md.js
var require_md = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/_md.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HashMD = exports.Maj = exports.Chi = void 0;
    var _assert_js_1 = require_assert2();
    var utils_js_1 = require_utils4();
    function setBigUint64(view, byteOffset, value, isLE) {
      if (typeof view.setBigUint64 === "function")
        return view.setBigUint64(byteOffset, value, isLE);
      const _32n = BigInt(32);
      const _u32_max = BigInt(4294967295);
      const wh = Number(value >> _32n & _u32_max);
      const wl = Number(value & _u32_max);
      const h = isLE ? 4 : 0;
      const l = isLE ? 0 : 4;
      view.setUint32(byteOffset + h, wh, isLE);
      view.setUint32(byteOffset + l, wl, isLE);
    }
    var Chi = (a, b, c) => a & b ^ ~a & c;
    exports.Chi = Chi;
    var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
    exports.Maj = Maj;
    var HashMD = class extends utils_js_1.Hash {
      constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = (0, utils_js_1.createView)(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i = pos; i < blockLen; i++)
          buffer[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE);
      }
      digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
          to.buffer.set(buffer);
        return to;
      }
    };
    exports.HashMD = HashMD;
  }
});

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/sha256.js
var require_sha2562 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/sha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sha224 = exports.sha256 = void 0;
    var _md_js_1 = require_md();
    var utils_js_1 = require_utils4();
    var SHA256_K = new Uint32Array([
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
    var SHA256_IV = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SHA256_W = new Uint32Array(64);
    var SHA256 = class extends _md_js_1.HashMD {
      constructor() {
        super(64, 32, 8, false);
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
      }
      get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
      }
      // prettier-ignore
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
          const W15 = SHA256_W[i - 15];
          const W2 = SHA256_W[i - 2];
          const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
          const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
          const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
          const T1 = H + sigma1 + (0, _md_js_1.Chi)(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
          const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
          const T2 = sigma0 + (0, _md_js_1.Maj)(A, B, C) | 0;
          H = G;
          G = F;
          F = E;
          E = D + T1 | 0;
          D = C;
          C = B;
          B = A;
          A = T1 + T2 | 0;
        }
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        SHA256_W.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
      }
    };
    var SHA224 = class extends SHA256 {
      constructor() {
        super();
        this.A = 3238371032 | 0;
        this.B = 914150663 | 0;
        this.C = 812702999 | 0;
        this.D = 4144912697 | 0;
        this.E = 4290775857 | 0;
        this.F = 1750603025 | 0;
        this.G = 1694076839 | 0;
        this.H = 3204075428 | 0;
        this.outputLen = 28;
      }
    };
    exports.sha256 = (0, utils_js_1.wrapConstructor)(() => new SHA256());
    exports.sha224 = (0, utils_js_1.wrapConstructor)(() => new SHA224());
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/hash-to-curve.js
var require_hash_to_curve = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/abstract/hash-to-curve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createHasher = exports.isogenyMap = exports.hash_to_field = exports.expand_message_xof = exports.expand_message_xmd = void 0;
    var modular_js_1 = require_modular2();
    var utils_js_1 = require_utils();
    var os2ip = utils_js_1.bytesToNumberBE;
    function i2osp(value, length) {
      if (value < 0 || value >= 1 << 8 * length) {
        throw new Error(`bad I2OSP call: value=${value} length=${length}`);
      }
      const res = Array.from({ length }).fill(0);
      for (let i = length - 1; i >= 0; i--) {
        res[i] = value & 255;
        value >>>= 8;
      }
      return new Uint8Array(res);
    }
    function strxor(a, b) {
      const arr = new Uint8Array(a.length);
      for (let i = 0; i < a.length; i++) {
        arr[i] = a[i] ^ b[i];
      }
      return arr;
    }
    function anum(item) {
      if (!Number.isSafeInteger(item))
        throw new Error("number expected");
    }
    function expand_message_xmd(msg, DST, lenInBytes, H) {
      (0, utils_js_1.abytes)(msg);
      (0, utils_js_1.abytes)(DST);
      anum(lenInBytes);
      if (DST.length > 255)
        DST = H((0, utils_js_1.concatBytes)((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-"), DST));
      const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
      const ell = Math.ceil(lenInBytes / b_in_bytes);
      if (ell > 255)
        throw new Error("Invalid xmd length");
      const DST_prime = (0, utils_js_1.concatBytes)(DST, i2osp(DST.length, 1));
      const Z_pad = i2osp(0, r_in_bytes);
      const l_i_b_str = i2osp(lenInBytes, 2);
      const b = new Array(ell);
      const b_0 = H((0, utils_js_1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
      b[0] = H((0, utils_js_1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
      for (let i = 1; i <= ell; i++) {
        const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
        b[i] = H((0, utils_js_1.concatBytes)(...args));
      }
      const pseudo_random_bytes = (0, utils_js_1.concatBytes)(...b);
      return pseudo_random_bytes.slice(0, lenInBytes);
    }
    exports.expand_message_xmd = expand_message_xmd;
    function expand_message_xof(msg, DST, lenInBytes, k, H) {
      (0, utils_js_1.abytes)(msg);
      (0, utils_js_1.abytes)(DST);
      anum(lenInBytes);
      if (DST.length > 255) {
        const dkLen = Math.ceil(2 * k / 8);
        DST = H.create({ dkLen }).update((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(DST).digest();
      }
      if (lenInBytes > 65535 || DST.length > 255)
        throw new Error("expand_message_xof: invalid lenInBytes");
      return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
    }
    exports.expand_message_xof = expand_message_xof;
    function hash_to_field(msg, count, options) {
      (0, utils_js_1.validateObject)(options, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
      });
      const { p, k, m, hash: hash2, expand, DST: _DST } = options;
      (0, utils_js_1.abytes)(msg);
      anum(count);
      const DST = typeof _DST === "string" ? (0, utils_js_1.utf8ToBytes)(_DST) : _DST;
      const log2p = p.toString(2).length;
      const L = Math.ceil((log2p + k) / 8);
      const len_in_bytes = count * m * L;
      let prb;
      if (expand === "xmd") {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash2);
      } else if (expand === "xof") {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash2);
      } else if (expand === "_internal_pass") {
        prb = msg;
      } else {
        throw new Error('expand must be "xmd" or "xof"');
      }
      const u = new Array(count);
      for (let i = 0; i < count; i++) {
        const e = new Array(m);
        for (let j = 0; j < m; j++) {
          const elm_offset = L * (j + i * m);
          const tv = prb.subarray(elm_offset, elm_offset + L);
          e[j] = (0, modular_js_1.mod)(os2ip(tv), p);
        }
        u[i] = e;
      }
      return u;
    }
    exports.hash_to_field = hash_to_field;
    function isogenyMap(field, map) {
      const COEFF = map.map((i) => Array.from(i).reverse());
      return (x, y) => {
        const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen);
        y = field.mul(y, field.div(yNum, yDen));
        return { x, y };
      };
    }
    exports.isogenyMap = isogenyMap;
    function createHasher(Point, mapToCurve, def) {
      if (typeof mapToCurve !== "function")
        throw new Error("mapToCurve() must be defined");
      return {
        // Encodes byte string to elliptic curve.
        // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        hashToCurve(msg, options) {
          const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
          const u0 = Point.fromAffine(mapToCurve(u[0]));
          const u1 = Point.fromAffine(mapToCurve(u[1]));
          const P = u0.add(u1).clearCofactor();
          P.assertValidity();
          return P;
        },
        // Encodes byte string to elliptic curve.
        // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        encodeToCurve(msg, options) {
          const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
          const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
          P.assertValidity();
          return P;
        }
      };
    }
    exports.createHasher = createHasher;
  }
});

// node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/hmac.js
var require_hmac2 = __commonJS({
  "node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/hmac.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hmac = exports.HMAC = void 0;
    var _assert_js_1 = require_assert2();
    var utils_js_1 = require_utils4();
    var HMAC = class extends utils_js_1.Hash {
      constructor(hash2, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.hash)(hash2);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash2.create();
        if (typeof this.iHash.update !== "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        pad.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54;
        this.iHash.update(pad);
        this.oHash = hash2.create();
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54 ^ 92;
        this.oHash.update(pad);
        pad.fill(0);
      }
      update(buf) {
        (0, _assert_js_1.exists)(this);
        this.iHash.update(buf);
        return this;
      }
      digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.bytes)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
      }
      digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
      }
      _cloneInto(to) {
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
      }
      destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
      }
    };
    exports.HMAC = HMAC;
    var hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
    exports.hmac = hmac;
    exports.hmac.create = (hash2, key) => new HMAC(hash2, key);
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/_shortw_utils.js
var require_shortw_utils2 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/_shortw_utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCurve = exports.getHash = void 0;
    var hmac_1 = require_hmac2();
    var utils_1 = require_utils4();
    var weierstrass_js_1 = require_weierstrass2();
    function getHash(hash2) {
      return {
        hash: hash2,
        hmac: (key, ...msgs) => (0, hmac_1.hmac)(hash2, key, (0, utils_1.concatBytes)(...msgs)),
        randomBytes: utils_1.randomBytes
      };
    }
    exports.getHash = getHash;
    function createCurve(curveDef, defHash) {
      const create = (hash2) => (0, weierstrass_js_1.weierstrass)({ ...curveDef, ...getHash(hash2) });
      return Object.freeze({ ...create(defHash), create });
    }
    exports.createCurve = createCurve;
  }
});

// node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/secp256k1.js
var require_secp256k1 = __commonJS({
  "node_modules/.pnpm/@noble+curves@1.4.0/node_modules/@noble/curves/secp256k1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encodeToCurve = exports.hashToCurve = exports.schnorr = exports.secp256k1 = void 0;
    var sha256_1 = require_sha2562();
    var utils_1 = require_utils4();
    var modular_js_1 = require_modular2();
    var weierstrass_js_1 = require_weierstrass2();
    var utils_js_1 = require_utils();
    var hash_to_curve_js_1 = require_hash_to_curve();
    var _shortw_utils_js_1 = require_shortw_utils2();
    var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
    var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var divNearest = (a, b) => (a + b / _2n) / b;
    function sqrtMod(y) {
      const P = secp256k1P;
      const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
      const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
      const b2 = y * y * y % P;
      const b3 = b2 * b2 * y % P;
      const b6 = (0, modular_js_1.pow2)(b3, _3n, P) * b3 % P;
      const b9 = (0, modular_js_1.pow2)(b6, _3n, P) * b3 % P;
      const b11 = (0, modular_js_1.pow2)(b9, _2n, P) * b2 % P;
      const b22 = (0, modular_js_1.pow2)(b11, _11n, P) * b11 % P;
      const b44 = (0, modular_js_1.pow2)(b22, _22n, P) * b22 % P;
      const b88 = (0, modular_js_1.pow2)(b44, _44n, P) * b44 % P;
      const b176 = (0, modular_js_1.pow2)(b88, _88n, P) * b88 % P;
      const b220 = (0, modular_js_1.pow2)(b176, _44n, P) * b44 % P;
      const b223 = (0, modular_js_1.pow2)(b220, _3n, P) * b3 % P;
      const t1 = (0, modular_js_1.pow2)(b223, _23n, P) * b22 % P;
      const t2 = (0, modular_js_1.pow2)(t1, _6n, P) * b2 % P;
      const root = (0, modular_js_1.pow2)(t2, _2n, P);
      if (!Fp.eql(Fp.sqr(root), y))
        throw new Error("Cannot find square root");
      return root;
    }
    var Fp = (0, modular_js_1.Field)(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
    exports.secp256k1 = (0, _shortw_utils_js_1.createCurve)({
      a: BigInt(0),
      // equation params: a, b
      b: BigInt(7),
      // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
      Fp,
      // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
      n: secp256k1N,
      // Curve order, total count of valid points in the field
      // Base point (x, y) aka generator point
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      // Cofactor
      lowS: true,
      // Allow only low-S signatures by default in sign() and verify()
      /**
       * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
       * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
       * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
       * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
       */
      endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (k) => {
          const n = secp256k1N;
          const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
          const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
          const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
          const b2 = a1;
          const POW_2_128 = BigInt("0x100000000000000000000000000000000");
          const c1 = divNearest(b2 * k, n);
          const c2 = divNearest(-b1 * k, n);
          let k1 = (0, modular_js_1.mod)(k - c1 * a1 - c2 * a2, n);
          let k2 = (0, modular_js_1.mod)(-c1 * b1 - c2 * b2, n);
          const k1neg = k1 > POW_2_128;
          const k2neg = k2 > POW_2_128;
          if (k1neg)
            k1 = n - k1;
          if (k2neg)
            k2 = n - k2;
          if (k1 > POW_2_128 || k2 > POW_2_128) {
            throw new Error("splitScalar: Endomorphism failed, k=" + k);
          }
          return { k1neg, k1, k2neg, k2 };
        }
      }
    }, sha256_1.sha256);
    var _0n = BigInt(0);
    var fe = (x) => typeof x === "bigint" && _0n < x && x < secp256k1P;
    var ge = (x) => typeof x === "bigint" && _0n < x && x < secp256k1N;
    var TAGGED_HASH_PREFIXES = {};
    function taggedHash(tag, ...messages) {
      let tagP = TAGGED_HASH_PREFIXES[tag];
      if (tagP === void 0) {
        const tagH = (0, sha256_1.sha256)(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = (0, utils_js_1.concatBytes)(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
      }
      return (0, sha256_1.sha256)((0, utils_js_1.concatBytes)(tagP, ...messages));
    }
    var pointToBytes = (point) => point.toRawBytes(true).slice(1);
    var numTo32b = (n) => (0, utils_js_1.numberToBytesBE)(n, 32);
    var modP = (x) => (0, modular_js_1.mod)(x, secp256k1P);
    var modN = (x) => (0, modular_js_1.mod)(x, secp256k1N);
    var Point = exports.secp256k1.ProjectivePoint;
    var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
    function schnorrGetExtPubKey(priv) {
      let d_ = exports.secp256k1.utils.normPrivateKeyToScalar(priv);
      let p = Point.fromPrivateKey(d_);
      const scalar = p.hasEvenY() ? d_ : modN(-d_);
      return { scalar, bytes: pointToBytes(p) };
    }
    function lift_x(x) {
      if (!fe(x))
        throw new Error("bad x: need 0 < x < p");
      const xx = modP(x * x);
      const c = modP(xx * x + BigInt(7));
      let y = sqrtMod(c);
      if (y % _2n !== _0n)
        y = modP(-y);
      const p = new Point(x, y, _1n);
      p.assertValidity();
      return p;
    }
    function challenge(...args) {
      return modN((0, utils_js_1.bytesToNumberBE)(taggedHash("BIP0340/challenge", ...args)));
    }
    function schnorrGetPublicKey(privateKey) {
      return schnorrGetExtPubKey(privateKey).bytes;
    }
    function schnorrSign(message, privateKey, auxRand = (0, utils_1.randomBytes)(32)) {
      const m = (0, utils_js_1.ensureBytes)("message", message);
      const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
      const a = (0, utils_js_1.ensureBytes)("auxRand", auxRand, 32);
      const t = numTo32b(d ^ (0, utils_js_1.bytesToNumberBE)(taggedHash("BIP0340/aux", a)));
      const rand = taggedHash("BIP0340/nonce", t, px, m);
      const k_ = modN((0, utils_js_1.bytesToNumberBE)(rand));
      if (k_ === _0n)
        throw new Error("sign failed: k is zero");
      const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
      const e = challenge(rx, px, m);
      const sig = new Uint8Array(64);
      sig.set(rx, 0);
      sig.set(numTo32b(modN(k + e * d)), 32);
      if (!schnorrVerify(sig, m, px))
        throw new Error("sign: Invalid signature produced");
      return sig;
    }
    function schnorrVerify(signature, message, publicKey) {
      const sig = (0, utils_js_1.ensureBytes)("signature", signature, 64);
      const m = (0, utils_js_1.ensureBytes)("message", message);
      const pub = (0, utils_js_1.ensureBytes)("publicKey", publicKey, 32);
      try {
        const P = lift_x((0, utils_js_1.bytesToNumberBE)(pub));
        const r = (0, utils_js_1.bytesToNumberBE)(sig.subarray(0, 32));
        if (!fe(r))
          return false;
        const s = (0, utils_js_1.bytesToNumberBE)(sig.subarray(32, 64));
        if (!ge(s))
          return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m);
        const R = GmulAdd(P, s, modN(-e));
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
          return false;
        return true;
      } catch (error) {
        return false;
      }
    }
    exports.schnorr = (() => ({
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      utils: {
        randomPrivateKey: exports.secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE: utils_js_1.numberToBytesBE,
        bytesToNumberBE: utils_js_1.bytesToNumberBE,
        taggedHash,
        mod: modular_js_1.mod
      }
    }))();
    var isoMap = (() => (0, hash_to_curve_js_1.isogenyMap)(Fp, [
      // xNum
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      // xDen
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ],
      // yNum
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      // yDen
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ]
    ].map((i) => i.map((j) => BigInt(j)))))();
    var mapSWU = (() => (0, weierstrass_js_1.mapToCurveSimpleSWU)(Fp, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: Fp.create(BigInt("-11"))
    }))();
    var htf = (() => (0, hash_to_curve_js_1.createHasher)(exports.secp256k1.ProjectivePoint, (scalars) => {
      const { x, y } = mapSWU(Fp.create(scalars[0]));
      return isoMap(x, y);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: Fp.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha256_1.sha256
    }))();
    exports.hashToCurve = (() => htf.hashToCurve)();
    exports.encodeToCurve = (() => htf.encodeToCurve)();
  }
});

// node_modules/.pnpm/fetch-cookie@3.0.1/node_modules/fetch-cookie/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/.pnpm/fetch-cookie@3.0.1/node_modules/fetch-cookie/cjs/index.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      default: () => fetchCookie
    });
    module.exports = __toCommonJS2(src_exports);
    var tough = __toESM(require_cookie(), 1);
    var import_set_cookie_parser = require_set_cookie();
    function isDomainOrSubdomain(destination, original) {
      const orig = new URL(original).hostname;
      const dest = new URL(destination).hostname;
      return orig === dest || orig.endsWith(`.${dest}`);
    }
    var referrerPolicy = /* @__PURE__ */ new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
    function parseReferrerPolicy(policyHeader) {
      const policyTokens = policyHeader.split(/[,\s]+/);
      let policy = "";
      for (const token of policyTokens) {
        if (token !== "" && referrerPolicy.has(token)) {
          policy = token;
        }
      }
      return policy;
    }
    function doNothing(init, name) {
    }
    function callDeleteMethod(init, name) {
      init.headers.delete(name);
    }
    function deleteFromObject(init, name) {
      const headers = init.headers;
      for (const key of Object.keys(headers)) {
        if (key.toLowerCase() === name) {
          delete headers[key];
        }
      }
    }
    function identifyDeleteHeader(init) {
      if (init.headers == null) {
        return doNothing;
      }
      if (typeof init.headers.delete === "function") {
        return callDeleteMethod;
      }
      return deleteFromObject;
    }
    var redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    function isRedirect(status) {
      return redirectStatus.has(status);
    }
    async function handleRedirect(fetchImpl, init, response) {
      switch (init.redirect ?? "follow") {
        case "error":
          throw new TypeError(`URI requested responded with a redirect and redirect mode is set to error: ${response.url}`);
        case "manual":
          return response;
        case "follow":
          break;
        default:
          throw new TypeError(`Invalid redirect option: ${init.redirect}`);
      }
      const locationUrl = response.headers.get("location");
      if (locationUrl === null) {
        return response;
      }
      const requestUrl = response.url;
      const redirectUrl = new URL(locationUrl, requestUrl).toString();
      const redirectCount = init.redirectCount ?? 0;
      const maxRedirect = init.maxRedirect ?? 20;
      if (redirectCount >= maxRedirect) {
        throw new TypeError(`Reached maximum redirect of ${maxRedirect} for URL: ${requestUrl}`);
      }
      init = {
        ...init,
        redirectCount: redirectCount + 1
      };
      const deleteHeader = identifyDeleteHeader(init);
      if (!isDomainOrSubdomain(requestUrl, redirectUrl)) {
        for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
          deleteHeader(init, name);
        }
      }
      const maybeNodeStreamBody = init.body;
      const maybeStreamBody = init.body;
      if (response.status !== 303 && init.body != null && (typeof maybeNodeStreamBody.pipe === "function" || typeof maybeStreamBody.pipeTo === "function")) {
        throw new TypeError("Cannot follow redirect with body being a readable stream");
      }
      if (response.status === 303 || (response.status === 301 || response.status === 302) && init.method === "POST") {
        init.method = "GET";
        init.body = void 0;
        deleteHeader(init, "content-length");
      }
      if (response.headers.has("referrer-policy")) {
        init.referrerPolicy = parseReferrerPolicy(response.headers.get("referrer-policy"));
      }
      return await fetchImpl(redirectUrl, init);
    }
    function addCookiesToRequest(input, init, cookie) {
      if (cookie === "") {
        return init;
      }
      const maybeRequest = input;
      const maybeHeaders = init.headers;
      if (maybeRequest.headers && typeof maybeRequest.headers.append === "function") {
        maybeRequest.headers.append("cookie", cookie);
      } else if (maybeHeaders && typeof maybeHeaders.append === "function") {
        maybeHeaders.append("cookie", cookie);
      } else {
        init = { ...init, headers: { ...init.headers, cookie } };
      }
      return init;
    }
    function getCookiesFromResponse(response) {
      const maybeNodeFetchHeaders = response.headers;
      if (typeof maybeNodeFetchHeaders.getAll === "function") {
        return maybeNodeFetchHeaders.getAll("set-cookie");
      }
      if (typeof maybeNodeFetchHeaders.raw === "function") {
        const headers = maybeNodeFetchHeaders.raw();
        if (Array.isArray(headers["set-cookie"])) {
          return headers["set-cookie"];
        }
        return [];
      }
      const cookieString = response.headers.get("set-cookie");
      if (cookieString !== null) {
        return (0, import_set_cookie_parser.splitCookiesString)(cookieString);
      }
      return [];
    }
    function fetchCookie(fetch2, jar, ignoreError = true) {
      const actualFetch = fetch2;
      const actualJar = jar ?? new tough.CookieJar();
      async function fetchCookieWrapper(input, init) {
        const originalInit = init ?? {};
        init = { ...init, redirect: "manual" };
        const requestUrl = typeof input === "string" ? input : input.url ?? input.href;
        const cookie = await actualJar.getCookieString(requestUrl);
        init = addCookiesToRequest(input, init, cookie);
        const response = await actualFetch(input, init);
        const cookies = getCookiesFromResponse(response);
        await Promise.all(cookies.map(async (cookie2) => await actualJar.setCookie(cookie2, response.url, { ignoreError })));
        if ((init.redirectCount ?? 0) > 0) {
          Object.defineProperty(response, "redirected", { value: true });
        }
        if (!isRedirect(response.status)) {
          return response;
        }
        return await handleRedirect(fetchCookieWrapper, originalInit, response);
      }
      fetchCookieWrapper.toughCookie = tough;
      return fetchCookieWrapper;
    }
    fetchCookie.toughCookie = tough;
  }
});

// node_modules/.pnpm/starknet@6.8.0/node_modules/starknet/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/starknet@6.8.0/node_modules/starknet/dist/index.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      Account: () => Account,
      AccountInterface: () => AccountInterface,
      BlockStatus: () => BlockStatus,
      BlockTag: () => BlockTag,
      CairoCustomEnum: () => CairoCustomEnum,
      CairoOption: () => CairoOption,
      CairoOptionVariant: () => CairoOptionVariant,
      CairoResult: () => CairoResult,
      CairoResultVariant: () => CairoResultVariant,
      CairoUint256: () => CairoUint256,
      CairoUint512: () => CairoUint512,
      CallData: () => CallData,
      Contract: () => Contract,
      ContractFactory: () => ContractFactory,
      ContractInterface: () => ContractInterface,
      CustomError: () => CustomError,
      EntryPointType: () => EntryPointType,
      EthSigner: () => EthSigner,
      GatewayError: () => GatewayError,
      HttpError: () => HttpError,
      LibraryError: () => LibraryError,
      Literal: () => Literal,
      Provider: () => RpcProvider2,
      ProviderInterface: () => ProviderInterface,
      RPC: () => api_exports,
      RPC06: () => rpc_0_6_exports,
      RPC07: () => rpc_0_7_exports,
      ReceiptTx: () => ReceiptTx,
      RpcChannel: () => RpcChannel2,
      RpcProvider: () => RpcProvider2,
      SIMULATION_FLAG: () => SIMULATION_FLAG,
      Signer: () => Signer,
      SignerInterface: () => SignerInterface,
      TransactionExecutionStatus: () => TransactionExecutionStatus,
      TransactionFinalityStatus: () => TransactionFinalityStatus,
      TransactionStatus: () => TransactionStatus,
      TransactionType: () => TransactionType,
      TypedDataRevision: () => import_starknet_types_07.TypedDataRevision,
      UINT_128_MAX: () => UINT_128_MAX,
      UINT_128_MIN: () => UINT_128_MIN,
      UINT_256_HIGH_MAX: () => UINT_256_HIGH_MAX,
      UINT_256_HIGH_MIN: () => UINT_256_HIGH_MIN,
      UINT_256_LOW_MAX: () => UINT_256_LOW_MAX,
      UINT_256_LOW_MIN: () => UINT_256_LOW_MIN,
      UINT_256_MAX: () => UINT_256_MAX,
      UINT_256_MIN: () => UINT_256_MIN,
      UINT_512_MAX: () => UINT_512_MAX,
      UINT_512_MIN: () => UINT_512_MIN,
      Uint: () => Uint,
      ValidateType: () => ValidateType,
      WalletAccount: () => WalletAccount,
      addAddressPadding: () => addAddressPadding,
      buildUrl: () => buildUrl,
      byteArray: () => byteArray_exports,
      cairo: () => cairo_exports,
      constants: () => constants_exports,
      contractClassResponseToLegacyCompiledContract: () => contractClassResponseToLegacyCompiledContract,
      defaultProvider: () => defaultProvider,
      ec: () => ec_exports,
      encode: () => encode_exports,
      eth: () => eth_exports,
      events: () => events_exports,
      extractContractHashes: () => extractContractHashes,
      fixProto: () => fixProto,
      fixStack: () => fixStack,
      getCalldata: () => getCalldata,
      getChecksumAddress: () => getChecksumAddress,
      hash: () => hash_exports,
      isSierra: () => isSierra,
      isUrl: () => isUrl,
      json: () => json_exports,
      merkle: () => merkle_exports,
      num: () => num_exports,
      number: () => number,
      parseCalldataField: () => parseCalldataField,
      parseUDCEvent: () => parseUDCEvent,
      provider: () => provider_exports,
      selector: () => selector_exports,
      shortString: () => shortString_exports,
      splitArgsAndOptions: () => splitArgsAndOptions,
      stark: () => stark_exports,
      starknetId: () => starknetId_exports,
      transaction: () => transaction_exports,
      typedData: () => typedData_exports,
      types: () => types_exports,
      uint256: () => uint256_exports,
      v2hash: () => v2_exports,
      v3hash: () => v3_exports,
      validateAndParseAddress: () => validateAndParseAddress,
      validateChecksumAddress: () => validateChecksumAddress,
      wallet: () => connect_exports
    });
    module.exports = __toCommonJS2(src_exports);
    var constants_exports = {};
    __export(constants_exports, {
      ADDR_BOUND: () => ADDR_BOUND,
      API_VERSION: () => API_VERSION,
      BaseUrl: () => BaseUrl,
      IS_BROWSER: () => IS_BROWSER,
      MASK_250: () => MASK_250,
      MAX_STORAGE_ITEM_SIZE: () => MAX_STORAGE_ITEM_SIZE,
      NetworkName: () => NetworkName,
      PRIME: () => PRIME,
      RANGE_FELT: () => RANGE_FELT,
      RANGE_I128: () => RANGE_I128,
      RANGE_U128: () => RANGE_U128,
      RPC_DEFAULT_VERSION: () => RPC_DEFAULT_VERSION,
      RPC_NODES: () => RPC_NODES,
      StarknetChainId: () => StarknetChainId,
      TEXT_TO_FELT_MAX_LEN: () => TEXT_TO_FELT_MAX_LEN,
      TRANSACTION_VERSION: () => api_exports.ETransactionVersion,
      TransactionHashPrefix: () => TransactionHashPrefix,
      UDC: () => UDC,
      ZERO: () => ZERO,
      feeMarginPercentage: () => feeMarginPercentage
    });
    var api_exports = {};
    __export(api_exports, {
      JRPC: () => jsonrpc_exports,
      RPCSPEC06: () => rpcspec_0_6_exports,
      RPCSPEC07: () => RPCSPEC07
    });
    var jsonrpc_exports = {};
    var rpcspec_0_6_exports = {};
    __export(rpcspec_0_6_exports, {
      EBlockTag: () => EBlockTag,
      EDAMode: () => EDAMode,
      EDataAvailabilityMode: () => EDataAvailabilityMode,
      ESimulationFlag: () => ESimulationFlag,
      ETransactionExecutionStatus: () => ETransactionExecutionStatus,
      ETransactionFinalityStatus: () => ETransactionFinalityStatus,
      ETransactionStatus: () => ETransactionStatus,
      ETransactionType: () => ETransactionType,
      ETransactionVersion: () => ETransactionVersion,
      ETransactionVersion2: () => ETransactionVersion2,
      ETransactionVersion3: () => ETransactionVersion3,
      Errors: () => errors_exports,
      SPEC: () => components_exports
    });
    var errors_exports = {};
    var components_exports = {};
    var ETransactionType = ((ETransactionType2) => {
      ETransactionType2["DECLARE"] = "DECLARE";
      ETransactionType2["DEPLOY"] = "DEPLOY";
      ETransactionType2["DEPLOY_ACCOUNT"] = "DEPLOY_ACCOUNT";
      ETransactionType2["INVOKE"] = "INVOKE";
      ETransactionType2["L1_HANDLER"] = "L1_HANDLER";
      return ETransactionType2;
    })(ETransactionType || {});
    var ESimulationFlag = ((ESimulationFlag2) => {
      ESimulationFlag2["SKIP_VALIDATE"] = "SKIP_VALIDATE";
      ESimulationFlag2["SKIP_FEE_CHARGE"] = "SKIP_FEE_CHARGE";
      return ESimulationFlag2;
    })(ESimulationFlag || {});
    var ETransactionStatus = ((ETransactionStatus2) => {
      ETransactionStatus2["RECEIVED"] = "RECEIVED";
      ETransactionStatus2["REJECTED"] = "REJECTED";
      ETransactionStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      ETransactionStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
      return ETransactionStatus2;
    })(ETransactionStatus || {});
    var ETransactionFinalityStatus = ((ETransactionFinalityStatus2) => {
      ETransactionFinalityStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      ETransactionFinalityStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
      return ETransactionFinalityStatus2;
    })(ETransactionFinalityStatus || {});
    var ETransactionExecutionStatus = ((ETransactionExecutionStatus2) => {
      ETransactionExecutionStatus2["SUCCEEDED"] = "SUCCEEDED";
      ETransactionExecutionStatus2["REVERTED"] = "REVERTED";
      return ETransactionExecutionStatus2;
    })(ETransactionExecutionStatus || {});
    var EBlockTag = ((EBlockTag2) => {
      EBlockTag2["LATEST"] = "latest";
      EBlockTag2["PENDING"] = "pending";
      return EBlockTag2;
    })(EBlockTag || {});
    var EDataAvailabilityMode = ((EDataAvailabilityMode3) => {
      EDataAvailabilityMode3["L1"] = "L1";
      EDataAvailabilityMode3["L2"] = "L2";
      return EDataAvailabilityMode3;
    })(EDataAvailabilityMode || {});
    var EDAMode = ((EDAMode4) => {
      EDAMode4[EDAMode4["L1"] = 0] = "L1";
      EDAMode4[EDAMode4["L2"] = 1] = "L2";
      return EDAMode4;
    })(EDAMode || {});
    var ETransactionVersion = ((ETransactionVersion10) => {
      ETransactionVersion10["V0"] = "0x0";
      ETransactionVersion10["V1"] = "0x1";
      ETransactionVersion10["V2"] = "0x2";
      ETransactionVersion10["V3"] = "0x3";
      ETransactionVersion10["F0"] = "0x100000000000000000000000000000000";
      ETransactionVersion10["F1"] = "0x100000000000000000000000000000001";
      ETransactionVersion10["F2"] = "0x100000000000000000000000000000002";
      ETransactionVersion10["F3"] = "0x100000000000000000000000000000003";
      return ETransactionVersion10;
    })(ETransactionVersion || {});
    var ETransactionVersion2 = ((ETransactionVersion25) => {
      ETransactionVersion25["V0"] = "0x0";
      ETransactionVersion25["V1"] = "0x1";
      ETransactionVersion25["V2"] = "0x2";
      ETransactionVersion25["F0"] = "0x100000000000000000000000000000000";
      ETransactionVersion25["F1"] = "0x100000000000000000000000000000001";
      ETransactionVersion25["F2"] = "0x100000000000000000000000000000002";
      return ETransactionVersion25;
    })(ETransactionVersion2 || {});
    var ETransactionVersion3 = ((ETransactionVersion36) => {
      ETransactionVersion36["V3"] = "0x3";
      ETransactionVersion36["F3"] = "0x100000000000000000000000000000003";
      return ETransactionVersion36;
    })(ETransactionVersion3 || {});
    var RPCSPEC07 = __toESM(require_cjs());
    __reExport(api_exports, require_cjs());
    var encode_exports = {};
    __export(encode_exports, {
      IS_BROWSER: () => IS_BROWSER,
      addHexPrefix: () => addHexPrefix,
      arrayBufferToString: () => arrayBufferToString,
      atobUniversal: () => atobUniversal,
      btoaUniversal: () => btoaUniversal,
      buf2hex: () => buf2hex,
      calcByteLength: () => calcByteLength,
      padLeft: () => padLeft,
      pascalToSnake: () => pascalToSnake,
      removeHexPrefix: () => removeHexPrefix,
      sanitizeBytes: () => sanitizeBytes,
      sanitizeHex: () => sanitizeHex,
      stringToArrayBuffer: () => stringToArrayBuffer,
      utf8ToArray: () => utf8ToArray
    });
    var import_base = require_lib();
    var IS_BROWSER = typeof window !== "undefined";
    var STRING_ZERO = "0";
    function arrayBufferToString(array) {
      return new Uint8Array(array).reduce((data, byte) => data + String.fromCharCode(byte), "");
    }
    function utf8ToArray(str) {
      return new TextEncoder().encode(str);
    }
    function stringToArrayBuffer(str) {
      return utf8ToArray(str);
    }
    function atobUniversal(a) {
      return import_base.base64.decode(a);
    }
    function btoaUniversal(b) {
      return import_base.base64.encode(new Uint8Array(b));
    }
    function buf2hex(buffer) {
      return buffer.reduce((r, x) => r + x.toString(16).padStart(2, "0"), "");
    }
    function removeHexPrefix(hex) {
      return hex.replace(/^0x/i, "");
    }
    function addHexPrefix(hex) {
      return `0x${removeHexPrefix(hex)}`;
    }
    function padString(str, length, left, padding = STRING_ZERO) {
      const diff = length - str.length;
      let result = str;
      if (diff > 0) {
        const pad = padding.repeat(diff);
        result = left ? pad + str : str + pad;
      }
      return result;
    }
    function padLeft(str, length, padding = STRING_ZERO) {
      return padString(str, length, true, padding);
    }
    function calcByteLength(str, byteSize = 8) {
      const { length } = str;
      const remainder = length % byteSize;
      return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
    }
    function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
      return padLeft(str, calcByteLength(str, byteSize), padding);
    }
    function sanitizeHex(hex) {
      hex = removeHexPrefix(hex);
      hex = sanitizeBytes(hex, 2);
      if (hex) {
        hex = addHexPrefix(hex);
      }
      return hex;
    }
    var pascalToSnake = (text) => /[a-z]/.test(text) ? text.split(/(?=[A-Z])/).join("_").toUpperCase() : text;
    var TEXT_TO_FELT_MAX_LEN = 31;
    var ZERO = 0n;
    var MASK_250 = 2n ** 250n - 1n;
    var API_VERSION = ZERO;
    var PRIME = 2n ** 251n + 17n * 2n ** 192n + 1n;
    var MAX_STORAGE_ITEM_SIZE = 256n;
    var ADDR_BOUND = 2n ** 251n - MAX_STORAGE_ITEM_SIZE;
    var range = (min, max) => ({ min, max });
    var RANGE_FELT = range(ZERO, PRIME - 1n);
    var RANGE_I128 = range(-(2n ** 127n), 2n ** 127n - 1n);
    var RANGE_U128 = range(ZERO, 2n ** 128n - 1n);
    var BaseUrl = ((BaseUrl2) => {
      BaseUrl2["SN_MAIN"] = "https://alpha-mainnet.starknet.io";
      BaseUrl2["SN_GOERLI"] = "https://alpha4.starknet.io";
      BaseUrl2["SN_SEPOLIA"] = "https://alpha-sepolia.starknet.io";
      return BaseUrl2;
    })(BaseUrl || {});
    var NetworkName = ((NetworkName2) => {
      NetworkName2["SN_MAIN"] = "SN_MAIN";
      NetworkName2["SN_GOERLI"] = "SN_GOERLI";
      NetworkName2["SN_SEPOLIA"] = "SN_SEPOLIA";
      return NetworkName2;
    })(NetworkName || {});
    var StarknetChainId = ((StarknetChainId6) => {
      StarknetChainId6["SN_MAIN"] = "0x534e5f4d41494e";
      StarknetChainId6["SN_GOERLI"] = "0x534e5f474f45524c49";
      StarknetChainId6["SN_SEPOLIA"] = "0x534e5f5345504f4c4941";
      return StarknetChainId6;
    })(StarknetChainId || {});
    var TransactionHashPrefix = ((TransactionHashPrefix2) => {
      TransactionHashPrefix2["DECLARE"] = "0x6465636c617265";
      TransactionHashPrefix2["DEPLOY"] = "0x6465706c6f79";
      TransactionHashPrefix2["DEPLOY_ACCOUNT"] = "0x6465706c6f795f6163636f756e74";
      TransactionHashPrefix2["INVOKE"] = "0x696e766f6b65";
      TransactionHashPrefix2["L1_HANDLER"] = "0x6c315f68616e646c6572";
      return TransactionHashPrefix2;
    })(TransactionHashPrefix || {});
    var feeMarginPercentage = ((feeMarginPercentage2) => {
      feeMarginPercentage2[feeMarginPercentage2["L1_BOUND_MAX_AMOUNT"] = 50] = "L1_BOUND_MAX_AMOUNT";
      feeMarginPercentage2[feeMarginPercentage2["L1_BOUND_MAX_PRICE_PER_UNIT"] = 50] = "L1_BOUND_MAX_PRICE_PER_UNIT";
      feeMarginPercentage2[feeMarginPercentage2["MAX_FEE"] = 50] = "MAX_FEE";
      return feeMarginPercentage2;
    })(feeMarginPercentage || {});
    var UDC = {
      ADDRESS: "0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",
      ENTRYPOINT: "deployContract"
    };
    var RPC_DEFAULT_VERSION = "v0_7";
    var RPC_NODES = {
      SN_GOERLI: [
        `https://starknet-testnet.public.blastapi.io/rpc/${RPC_DEFAULT_VERSION}`,
        `https://free-rpc.nethermind.io/goerli-juno/${RPC_DEFAULT_VERSION}`
      ],
      SN_MAIN: [
        `https://starknet-mainnet.public.blastapi.io/rpc/${RPC_DEFAULT_VERSION}`,
        `https://free-rpc.nethermind.io/mainnet-juno/${RPC_DEFAULT_VERSION}`
      ],
      SN_SEPOLIA: [
        `https://starknet-sepolia.public.blastapi.io/rpc/${RPC_DEFAULT_VERSION}`,
        `https://free-rpc.nethermind.io/sepolia-juno/${RPC_DEFAULT_VERSION}`
      ]
    };
    function fixStack(target, fn = target.constructor) {
      const { captureStackTrace } = Error;
      captureStackTrace && captureStackTrace(target, fn);
    }
    function fixProto(target, prototype) {
      const { setPrototypeOf } = Object;
      setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
    }
    var CustomError = class extends Error {
      constructor(message) {
        super(message);
        __publicField(this, "name");
        Object.defineProperty(this, "name", {
          value: new.target.name,
          enumerable: false,
          configurable: true
        });
        fixProto(this, new.target.prototype);
        fixStack(this);
      }
    };
    var LibraryError = class extends CustomError {
    };
    var GatewayError = class extends LibraryError {
      constructor(message, errorCode) {
        super(message);
        this.errorCode = errorCode;
      }
    };
    var HttpError = class extends LibraryError {
      constructor(message, errorCode) {
        super(message);
        this.errorCode = errorCode;
      }
    };
    var rpc_0_6_exports = {};
    __export(rpc_0_6_exports, {
      RpcChannel: () => RpcChannel
    });
    var types_exports = {};
    __export(types_exports, {
      BlockStatus: () => BlockStatus,
      BlockTag: () => BlockTag,
      EntryPointType: () => EntryPointType,
      Literal: () => Literal,
      RPC: () => api_exports,
      SIMULATION_FLAG: () => SIMULATION_FLAG,
      TransactionExecutionStatus: () => TransactionExecutionStatus,
      TransactionFinalityStatus: () => TransactionFinalityStatus,
      TransactionStatus: () => TransactionStatus,
      TransactionType: () => TransactionType,
      TypedDataRevision: () => import_starknet_types_07.TypedDataRevision,
      Uint: () => Uint,
      ValidateType: () => ValidateType
    });
    var SIMULATION_FLAG = ((SIMULATION_FLAG2) => {
      SIMULATION_FLAG2["SKIP_VALIDATE"] = "SKIP_VALIDATE";
      SIMULATION_FLAG2["SKIP_EXECUTE"] = "SKIP_EXECUTE";
      return SIMULATION_FLAG2;
    })(SIMULATION_FLAG || {});
    var ValidateType = ((ValidateType2) => {
      ValidateType2["DEPLOY"] = "DEPLOY";
      ValidateType2["CALL"] = "CALL";
      ValidateType2["INVOKE"] = "INVOKE";
      return ValidateType2;
    })(ValidateType || {});
    var Uint = ((Uint2) => {
      Uint2["u8"] = "core::integer::u8";
      Uint2["u16"] = "core::integer::u16";
      Uint2["u32"] = "core::integer::u32";
      Uint2["u64"] = "core::integer::u64";
      Uint2["u128"] = "core::integer::u128";
      Uint2["u256"] = "core::integer::u256";
      Uint2["u512"] = "core::integer::u512";
      return Uint2;
    })(Uint || {});
    var Literal = ((Literal2) => {
      Literal2["ClassHash"] = "core::starknet::class_hash::ClassHash";
      Literal2["ContractAddress"] = "core::starknet::contract_address::ContractAddress";
      Literal2["Secp256k1Point"] = "core::starknet::secp256k1::Secp256k1Point";
      return Literal2;
    })(Literal || {});
    var EntryPointType = ((EntryPointType2) => {
      EntryPointType2["EXTERNAL"] = "EXTERNAL";
      EntryPointType2["L1_HANDLER"] = "L1_HANDLER";
      EntryPointType2["CONSTRUCTOR"] = "CONSTRUCTOR";
      return EntryPointType2;
    })(EntryPointType || {});
    var TransactionType = ((TransactionType2) => {
      TransactionType2["DECLARE"] = "DECLARE";
      TransactionType2["DEPLOY"] = "DEPLOY";
      TransactionType2["DEPLOY_ACCOUNT"] = "DEPLOY_ACCOUNT";
      TransactionType2["INVOKE"] = "INVOKE_FUNCTION";
      return TransactionType2;
    })(TransactionType || {});
    var TransactionStatus = ((TransactionStatus2) => {
      TransactionStatus2["NOT_RECEIVED"] = "NOT_RECEIVED";
      TransactionStatus2["RECEIVED"] = "RECEIVED";
      TransactionStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      TransactionStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
      TransactionStatus2["REJECTED"] = "REJECTED";
      TransactionStatus2["REVERTED"] = "REVERTED";
      return TransactionStatus2;
    })(TransactionStatus || {});
    var TransactionFinalityStatus = ((TransactionFinalityStatus2) => {
      TransactionFinalityStatus2["NOT_RECEIVED"] = "NOT_RECEIVED";
      TransactionFinalityStatus2["RECEIVED"] = "RECEIVED";
      TransactionFinalityStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      TransactionFinalityStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
      return TransactionFinalityStatus2;
    })(TransactionFinalityStatus || {});
    var TransactionExecutionStatus = ((TransactionExecutionStatus2) => {
      TransactionExecutionStatus2["REJECTED"] = "REJECTED";
      TransactionExecutionStatus2["REVERTED"] = "REVERTED";
      TransactionExecutionStatus2["SUCCEEDED"] = "SUCCEEDED";
      return TransactionExecutionStatus2;
    })(TransactionExecutionStatus || {});
    var BlockStatus = ((BlockStatus2) => {
      BlockStatus2["PENDING"] = "PENDING";
      BlockStatus2["ACCEPTED_ON_L1"] = "ACCEPTED_ON_L1";
      BlockStatus2["ACCEPTED_ON_L2"] = "ACCEPTED_ON_L2";
      BlockStatus2["REJECTED"] = "REJECTED";
      return BlockStatus2;
    })(BlockStatus || {});
    var BlockTag = ((BlockTag2) => {
      BlockTag2["pending"] = "pending";
      BlockTag2["latest"] = "latest";
      return BlockTag2;
    })(BlockTag || {});
    var import_starknet_types_07 = require_cjs();
    function assert(condition, message) {
      if (!condition) {
        throw new Error(message || "Assertion failure");
      }
    }
    var num_exports = {};
    __export(num_exports, {
      addPercent: () => addPercent,
      assertInRange: () => assertInRange,
      bigNumberishArrayToDecimalStringArray: () => bigNumberishArrayToDecimalStringArray,
      bigNumberishArrayToHexadecimalStringArray: () => bigNumberishArrayToHexadecimalStringArray,
      cleanHex: () => cleanHex,
      getDecimalString: () => getDecimalString,
      getHexString: () => getHexString,
      getHexStringArray: () => getHexStringArray,
      hexToBytes: () => hexToBytes,
      hexToDecimalString: () => hexToDecimalString,
      isBigInt: () => isBigInt,
      isBoolean: () => isBoolean,
      isHex: () => isHex,
      isNumber: () => isNumber,
      isStringWholeNumber: () => isStringWholeNumber,
      toBigInt: () => toBigInt,
      toCairoBool: () => toCairoBool,
      toHex: () => toHex,
      toHexString: () => toHexString,
      toStorageKey: () => toStorageKey
    });
    var import_utils = require_utils();
    function isHex(hex) {
      return /^0x[0-9a-f]*$/i.test(hex);
    }
    function toBigInt(value) {
      return BigInt(value);
    }
    function isBigInt(value) {
      return typeof value === "bigint";
    }
    function toHex(number2) {
      return addHexPrefix(toBigInt(number2).toString(16));
    }
    var toHexString = toHex;
    function toStorageKey(number2) {
      const res = addHexPrefix(toBigInt(number2).toString(16).padStart(64, "0"));
      return res;
    }
    function hexToDecimalString(hex) {
      return BigInt(addHexPrefix(hex)).toString(10);
    }
    var cleanHex = (hex) => hex.toLowerCase().replace(/^(0x)0+/, "$1");
    function assertInRange(input, lowerBound, upperBound, inputName = "") {
      const messageSuffix = inputName === "" ? "invalid length" : `invalid ${inputName} length`;
      const inputBigInt = BigInt(input);
      const lowerBoundBigInt = BigInt(lowerBound);
      const upperBoundBigInt = BigInt(upperBound);
      assert(
        inputBigInt >= lowerBoundBigInt && inputBigInt <= upperBoundBigInt,
        `Message not signable, ${messageSuffix}.`
      );
    }
    function bigNumberishArrayToDecimalStringArray(rawCalldata) {
      return rawCalldata.map((x) => toBigInt(x).toString(10));
    }
    function bigNumberishArrayToHexadecimalStringArray(rawCalldata) {
      return rawCalldata.map((x) => toHex(x));
    }
    var isStringWholeNumber = (value) => /^\d+$/.test(value);
    function getDecimalString(value) {
      if (isHex(value)) {
        return hexToDecimalString(value);
      }
      if (isStringWholeNumber(value)) {
        return value;
      }
      throw new Error(`${value} need to be hex-string or whole-number-string`);
    }
    function getHexString(value) {
      if (isHex(value)) {
        return value;
      }
      if (isStringWholeNumber(value)) {
        return toHexString(value);
      }
      throw new Error(`${value} need to be hex-string or whole-number-string`);
    }
    function getHexStringArray(value) {
      return value.map((el) => getHexString(el));
    }
    var toCairoBool = (value) => (+value).toString();
    function hexToBytes(value) {
      if (!isHex(value))
        throw new Error(`${value} need to be a hex-string`);
      let adaptedValue = removeHexPrefix(value);
      if (adaptedValue.length % 2 !== 0) {
        adaptedValue = `0${adaptedValue}`;
      }
      return (0, import_utils.hexToBytes)(adaptedValue);
    }
    function addPercent(number2, percent) {
      const bigIntNum = BigInt(number2);
      return bigIntNum + bigIntNum * BigInt(percent) / 100n;
    }
    function isNumber(value) {
      return typeof value === "number";
    }
    function isBoolean(value) {
      return typeof value === "boolean";
    }
    var selector_exports = {};
    __export(selector_exports, {
      getSelector: () => getSelector,
      getSelectorFromName: () => getSelectorFromName,
      keccakBn: () => keccakBn,
      starknetKeccak: () => starknetKeccak
    });
    var import_starknet = require_lib2();
    function keccakBn(value) {
      const hexWithoutPrefix = removeHexPrefix(toHex(BigInt(value)));
      const evenHex = hexWithoutPrefix.length % 2 === 0 ? hexWithoutPrefix : `0${hexWithoutPrefix}`;
      return addHexPrefix((0, import_starknet.keccak)(hexToBytes(addHexPrefix(evenHex))).toString(16));
    }
    function keccakHex(str) {
      return addHexPrefix((0, import_starknet.keccak)(utf8ToArray(str)).toString(16));
    }
    function starknetKeccak(str) {
      const hash2 = BigInt(keccakHex(str));
      return hash2 & MASK_250;
    }
    function getSelectorFromName(funcName) {
      return toHex(starknetKeccak(funcName));
    }
    function getSelector(value) {
      if (isHex(value)) {
        return value;
      }
      if (isStringWholeNumber(value)) {
        return toHexString(value);
      }
      return getSelectorFromName(value);
    }
    var shortString_exports = {};
    __export(shortString_exports, {
      decodeShortString: () => decodeShortString,
      encodeShortString: () => encodeShortString,
      isASCII: () => isASCII,
      isDecimalString: () => isDecimalString,
      isLongText: () => isLongText,
      isShortString: () => isShortString,
      isShortText: () => isShortText,
      isString: () => isString,
      isText: () => isText,
      splitLongString: () => splitLongString
    });
    function isASCII(str) {
      return /^[\x00-\x7F]*$/.test(str);
    }
    function isShortString(str) {
      return str.length <= TEXT_TO_FELT_MAX_LEN;
    }
    function isDecimalString(str) {
      return /^[0-9]*$/i.test(str);
    }
    function isString(value) {
      return typeof value === "string";
    }
    function isText(val) {
      return isString(val) && !isHex(val) && !isStringWholeNumber(val);
    }
    var isShortText = (val) => isText(val) && isShortString(val);
    var isLongText = (val) => isText(val) && !isShortString(val);
    function splitLongString(longStr) {
      const regex = RegExp(`[^]{1,${TEXT_TO_FELT_MAX_LEN}}`, "g");
      return longStr.match(regex) || [];
    }
    function encodeShortString(str) {
      if (!isASCII(str))
        throw new Error(`${str} is not an ASCII string`);
      if (!isShortString(str))
        throw new Error(`${str} is too long`);
      return addHexPrefix(str.replace(/./g, (char) => char.charCodeAt(0).toString(16)));
    }
    function decodeShortString(str) {
      if (!isASCII(str))
        throw new Error(`${str} is not an ASCII string`);
      if (isHex(str)) {
        return removeHexPrefix(str).replace(/.{2}/g, (hex) => String.fromCharCode(parseInt(hex, 16)));
      }
      if (isDecimalString(str)) {
        return decodeShortString("0X".concat(BigInt(str).toString(16)));
      }
      throw new Error(`${str} is not Hex or decimal`);
    }
    var byteArray_exports = {};
    __export(byteArray_exports, {
      byteArrayFromString: () => byteArrayFromString,
      stringFromByteArray: () => stringFromByteArray
    });
    function stringFromByteArray(myByteArray) {
      const pending_word = BigInt(myByteArray.pending_word) === 0n ? "" : decodeShortString(toHex(myByteArray.pending_word));
      return myByteArray.data.reduce((cumuledString, encodedString) => {
        const add = BigInt(encodedString) === 0n ? "" : decodeShortString(toHex(encodedString));
        return cumuledString + add;
      }, "") + pending_word;
    }
    function byteArrayFromString(targetString) {
      const shortStrings = splitLongString(targetString);
      const remainder = shortStrings[shortStrings.length - 1];
      const shortStringsEncoded = shortStrings.map(encodeShortString);
      const [pendingWord, pendingWordLength] = remainder === void 0 || remainder.length === 31 ? ["0x00", 0] : [shortStringsEncoded.pop(), remainder.length];
      return {
        data: shortStringsEncoded.length === 0 ? [] : shortStringsEncoded,
        pending_word: pendingWord,
        pending_word_len: pendingWordLength
      };
    }
    var cairo_exports = {};
    __export(cairo_exports, {
      felt: () => felt,
      getAbiContractVersion: () => getAbiContractVersion,
      getArrayType: () => getArrayType,
      isCairo1Abi: () => isCairo1Abi,
      isCairo1Type: () => isCairo1Type,
      isLen: () => isLen,
      isTypeArray: () => isTypeArray,
      isTypeBool: () => isTypeBool,
      isTypeByteArray: () => isTypeByteArray,
      isTypeBytes31: () => isTypeBytes31,
      isTypeContractAddress: () => isTypeContractAddress,
      isTypeEnum: () => isTypeEnum,
      isTypeEthAddress: () => isTypeEthAddress,
      isTypeFelt: () => isTypeFelt,
      isTypeLiteral: () => isTypeLiteral,
      isTypeNamedTuple: () => isTypeNamedTuple,
      isTypeOption: () => isTypeOption,
      isTypeResult: () => isTypeResult,
      isTypeSecp256k1Point: () => isTypeSecp256k1Point,
      isTypeStruct: () => isTypeStruct,
      isTypeTuple: () => isTypeTuple,
      isTypeUint: () => isTypeUint,
      isTypeUint256: () => isTypeUint256,
      tuple: () => tuple,
      uint256: () => uint256,
      uint512: () => uint512
    });
    function CairoFelt(it) {
      if (isBigInt(it) || Number.isInteger(it)) {
        return it.toString();
      }
      if (isString(it)) {
        if (isHex(it)) {
          return BigInt(it).toString();
        }
        if (isText(it)) {
          if (!isShortString(it)) {
            throw new Error(
              `${it} is a long string > 31 chars. Please split it into an array of short strings.`
            );
          }
          return BigInt(encodeShortString(it)).toString();
        }
        if (isStringWholeNumber(it)) {
          return it;
        }
      }
      if (isBoolean(it)) {
        return `${+it}`;
      }
      throw new Error(`${it} can't be computed by felt()`);
    }
    var UINT_128_MAX = (1n << 128n) - 1n;
    var UINT_256_MAX = (1n << 256n) - 1n;
    var UINT_256_MIN = 0n;
    var UINT_256_LOW_MAX = 340282366920938463463374607431768211455n;
    var UINT_256_HIGH_MAX = 340282366920938463463374607431768211455n;
    var UINT_256_LOW_MIN = 0n;
    var UINT_256_HIGH_MIN = 0n;
    var _a;
    var CairoUint256 = (_a = class {
      constructor(...arr) {
        __publicField(this, "low");
        __publicField(this, "high");
        if (typeof arr[0] === "object" && arr.length === 1 && "low" in arr[0] && "high" in arr[0]) {
          const props = _a.validateProps(arr[0].low, arr[0].high);
          this.low = props.low;
          this.high = props.high;
        } else if (arr.length === 1) {
          const bigInt = _a.validate(arr[0]);
          this.low = bigInt & UINT_128_MAX;
          this.high = bigInt >> 128n;
        } else if (arr.length === 2) {
          const props = _a.validateProps(arr[0], arr[1]);
          this.low = props.low;
          this.high = props.high;
        } else {
          throw Error("Incorrect constructor parameters");
        }
      }
      /**
       * Validate if BigNumberish can be represented as Unit256
       */
      static validate(bigNumberish) {
        const bigInt = BigInt(bigNumberish);
        if (bigInt < UINT_256_MIN)
          throw Error("bigNumberish is smaller than UINT_256_MIN");
        if (bigInt > UINT_256_MAX)
          throw new Error("bigNumberish is bigger than UINT_256_MAX");
        return bigInt;
      }
      /**
       * Validate if low and high can be represented as Unit256
       */
      static validateProps(low, high) {
        const bigIntLow = BigInt(low);
        const bigIntHigh = BigInt(high);
        if (bigIntLow < UINT_256_LOW_MIN || bigIntLow > UINT_256_LOW_MAX) {
          throw new Error("low is out of range UINT_256_LOW_MIN - UINT_256_LOW_MAX");
        }
        if (bigIntHigh < UINT_256_HIGH_MIN || bigIntHigh > UINT_256_HIGH_MAX) {
          throw new Error("high is out of range UINT_256_HIGH_MIN - UINT_256_HIGH_MAX");
        }
        return { low: bigIntLow, high: bigIntHigh };
      }
      /**
       * Check if BigNumberish can be represented as Unit256
       */
      static is(bigNumberish) {
        try {
          _a.validate(bigNumberish);
        } catch (error) {
          return false;
        }
        return true;
      }
      /**
       * Check if provided abi type is this data type
       */
      static isAbiType(abiType) {
        return abiType === _a.abiSelector;
      }
      /**
       * Return bigint representation
       */
      toBigInt() {
        return (this.high << 128n) + this.low;
      }
      /**
       * Return Uint256 structure with HexString props
       * {low: HexString, high: HexString}
       */
      toUint256HexString() {
        return {
          low: addHexPrefix(this.low.toString(16)),
          high: addHexPrefix(this.high.toString(16))
        };
      }
      /**
       * Return Uint256 structure with DecimalString props
       * {low: DecString, high: DecString}
       */
      toUint256DecimalString() {
        return {
          low: this.low.toString(10),
          high: this.high.toString(10)
        };
      }
      /**
       * Return api requests representation witch is felt array
       */
      toApiRequest() {
        return [CairoFelt(this.low), CairoFelt(this.high)];
      }
    }, __publicField(_a, "abiSelector", "core::integer::u256"), _a);
    var UINT_512_MAX = (1n << 512n) - 1n;
    var UINT_512_MIN = 0n;
    var UINT_128_MIN = 0n;
    var _a2;
    var CairoUint512 = (_a2 = class {
      constructor(...arr) {
        __publicField(this, "limb0");
        __publicField(this, "limb1");
        __publicField(this, "limb2");
        __publicField(this, "limb3");
        if (typeof arr[0] === "object" && arr.length === 1 && "limb0" in arr[0] && "limb1" in arr[0] && "limb2" in arr[0] && "limb3" in arr[0]) {
          const props = _a2.validateProps(
            arr[0].limb0,
            arr[0].limb1,
            arr[0].limb2,
            arr[0].limb3
          );
          this.limb0 = props.limb0;
          this.limb1 = props.limb1;
          this.limb2 = props.limb2;
          this.limb3 = props.limb3;
        } else if (arr.length === 1) {
          const bigInt = _a2.validate(arr[0]);
          this.limb0 = bigInt & UINT_128_MAX;
          this.limb1 = (bigInt & UINT_128_MAX << 128n) >> 128n;
          this.limb2 = (bigInt & UINT_128_MAX << 256n) >> 256n;
          this.limb3 = bigInt >> 384n;
        } else if (arr.length === 4) {
          const props = _a2.validateProps(arr[0], arr[1], arr[2], arr[3]);
          this.limb0 = props.limb0;
          this.limb1 = props.limb1;
          this.limb2 = props.limb2;
          this.limb3 = props.limb3;
        } else {
          throw Error("Incorrect Uint512 constructor parameters");
        }
      }
      /**
       * Validate if BigNumberish can be represented as Uint512
       */
      static validate(bigNumberish) {
        const bigInt = BigInt(bigNumberish);
        if (bigInt < UINT_512_MIN)
          throw Error("bigNumberish is smaller than UINT_512_MIN.");
        if (bigInt > UINT_512_MAX)
          throw Error("bigNumberish is bigger than UINT_512_MAX.");
        return bigInt;
      }
      /**
       * Validate if limbs can be represented as Uint512
       */
      static validateProps(limb0, limb1, limb2, limb3) {
        const l0 = BigInt(limb0);
        const l1 = BigInt(limb1);
        const l2 = BigInt(limb2);
        const l3 = BigInt(limb3);
        [l0, l1, l2, l3].forEach((value, index) => {
          if (value < UINT_128_MIN || value > UINT_128_MAX) {
            throw Error(`limb${index} is not in the range of a u128 number`);
          }
        });
        return { limb0: l0, limb1: l1, limb2: l2, limb3: l3 };
      }
      /**
       * Check if BigNumberish can be represented as Uint512
       */
      static is(bigNumberish) {
        try {
          _a2.validate(bigNumberish);
        } catch (error) {
          return false;
        }
        return true;
      }
      /**
       * Check if provided abi type is this data type
       */
      static isAbiType(abiType) {
        return abiType === _a2.abiSelector;
      }
      /**
       * Return bigint representation
       */
      toBigInt() {
        return (this.limb3 << 384n) + (this.limb2 << 256n) + (this.limb1 << 128n) + this.limb0;
      }
      /**
       * Return Uint512 structure with HexString props
       * limbx: HexString
       */
      toUint512HexString() {
        return {
          limb0: addHexPrefix(this.limb0.toString(16)),
          limb1: addHexPrefix(this.limb1.toString(16)),
          limb2: addHexPrefix(this.limb2.toString(16)),
          limb3: addHexPrefix(this.limb3.toString(16))
        };
      }
      /**
       * Return Uint512 structure with DecimalString props
       * limbx DecString
       */
      toUint512DecimalString() {
        return {
          limb0: this.limb0.toString(10),
          limb1: this.limb1.toString(10),
          limb2: this.limb2.toString(10),
          limb3: this.limb3.toString(10)
        };
      }
      /**
       * Return api requests representation witch is felt array
       */
      toApiRequest() {
        return [
          CairoFelt(this.limb0),
          CairoFelt(this.limb1),
          CairoFelt(this.limb2),
          CairoFelt(this.limb3)
        ];
      }
    }, __publicField(_a2, "abiSelector", "core::integer::u512"), _a2);
    var isLen = (name) => /_len$/.test(name);
    var isTypeFelt = (type) => type === "felt" || type === "core::felt252";
    var isTypeArray = (type) => /\*/.test(type) || type.startsWith("core::array::Array::") || type.startsWith("core::array::Span::");
    var isTypeTuple = (type) => /^\(.*\)$/i.test(type);
    var isTypeNamedTuple = (type) => /\(.*\)/i.test(type) && type.includes(":");
    var isTypeStruct = (type, structs) => type in structs;
    var isTypeEnum = (type, enums) => type in enums;
    var isTypeOption = (type) => type.startsWith("core::option::Option::");
    var isTypeResult = (type) => type.startsWith("core::result::Result::");
    var isTypeUint = (type) => Object.values(Uint).includes(type);
    var isTypeUint256 = (type) => CairoUint256.isAbiType(type);
    var isTypeLiteral = (type) => Object.values(Literal).includes(type);
    var isTypeBool = (type) => type === "core::bool";
    var isTypeContractAddress = (type) => type === "core::starknet::contract_address::ContractAddress";
    var isTypeEthAddress = (type) => type === "core::starknet::eth_address::EthAddress";
    var isTypeBytes31 = (type) => type === "core::bytes_31::bytes31";
    var isTypeByteArray = (type) => type === "core::byte_array::ByteArray";
    var isTypeSecp256k1Point = (type) => type === "core::starknet::secp256k1::Secp256k1Point";
    var isCairo1Type = (type) => type.includes("::");
    var getArrayType = (type) => {
      if (isCairo1Type(type)) {
        return type.substring(type.indexOf("<") + 1, type.lastIndexOf(">"));
      }
      return type.replace("*", "");
    };
    function isCairo1Abi(abi) {
      const { cairo: cairo2 } = getAbiContractVersion(abi);
      if (cairo2 === void 0) {
        throw Error("Unable to determine Cairo version");
      }
      return cairo2 === "1";
    }
    function getAbiContractVersion(abi) {
      if (abi.find((it) => it.type === "interface")) {
        return { cairo: "1", compiler: "2" };
      }
      const testFunction = abi.find(
        (it) => it.type === "function" && (it.inputs.length || it.outputs.length)
      );
      if (!testFunction) {
        return { cairo: void 0, compiler: void 0 };
      }
      const io = testFunction.inputs.length ? testFunction.inputs : testFunction.outputs;
      if (isCairo1Type(io[0].type)) {
        return { cairo: "1", compiler: "1" };
      }
      return { cairo: "0", compiler: "0" };
    }
    var uint256 = (it) => {
      return new CairoUint256(it).toUint256DecimalString();
    };
    var uint512 = (it) => {
      return new CairoUint512(it).toUint512DecimalString();
    };
    var tuple = (...args) => ({ ...args });
    function felt(it) {
      return CairoFelt(it);
    }
    var CairoCustomEnum = class {
      /**
       * @param enumContent an object with the variants as keys and the content as value. Only one content shall be defined.
       */
      constructor(enumContent) {
        /**
         * direct readonly access to variants of the Cairo Custom Enum.
         * @returns a value of type any
         * @example
         * ```typescript
         * const successValue = myCairoEnum.variant.Success;
         */
        __publicField(this, "variant");
        const variantsList = Object.values(enumContent);
        if (variantsList.length === 0) {
          throw new Error("This Enum must have at least 1 variant");
        }
        const nbActiveVariants = variantsList.filter(
          (content) => typeof content !== "undefined"
        ).length;
        if (nbActiveVariants !== 1) {
          throw new Error("This Enum must have exactly one active variant");
        }
        this.variant = enumContent;
      }
      /**
       *
       * @returns the content of the valid variant of a Cairo custom Enum.
       */
      unwrap() {
        const variants = Object.entries(this.variant);
        const activeVariant = variants.find((item) => typeof item[1] !== "undefined");
        if (typeof activeVariant === "undefined") {
          return void 0;
        }
        return activeVariant[1];
      }
      /**
       *
       * @returns the name of the valid variant of a Cairo custom Enum.
       */
      activeVariant() {
        const variants = Object.entries(this.variant);
        const activeVariant = variants.find((item) => typeof item[1] !== "undefined");
        if (typeof activeVariant === "undefined") {
          return "";
        }
        return activeVariant[0];
      }
    };
    var CairoOptionVariant = ((CairoOptionVariant2) => {
      CairoOptionVariant2[CairoOptionVariant2["Some"] = 0] = "Some";
      CairoOptionVariant2[CairoOptionVariant2["None"] = 1] = "None";
      return CairoOptionVariant2;
    })(CairoOptionVariant || {});
    var CairoOption = class {
      constructor(variant, someContent) {
        __publicField(this, "Some");
        __publicField(this, "None");
        if (!(variant in CairoOptionVariant)) {
          throw new Error("Wrong variant : should be CairoOptionVariant.Some or .None.");
        }
        if (variant === 0) {
          if (typeof someContent === "undefined") {
            throw new Error(
              'The creation of a Cairo Option with "Some" variant needs a content as input.'
            );
          }
          this.Some = someContent;
          this.None = void 0;
        } else {
          this.Some = void 0;
          this.None = true;
        }
      }
      /**
       *
       * @returns the content of the valid variant of a Cairo custom Enum.
       *  If None, returns 'undefined'.
       */
      unwrap() {
        if (this.None) {
          return void 0;
        }
        return this.Some;
      }
      /**
       *
       * @returns true if the valid variant is 'isSome'.
       */
      isSome() {
        return !(typeof this.Some === "undefined");
      }
      /**
       *
       * @returns true if the valid variant is 'isNone'.
       */
      isNone() {
        return this.None === true;
      }
    };
    var CairoResultVariant = ((CairoResultVariant2) => {
      CairoResultVariant2[CairoResultVariant2["Ok"] = 0] = "Ok";
      CairoResultVariant2[CairoResultVariant2["Err"] = 1] = "Err";
      return CairoResultVariant2;
    })(CairoResultVariant || {});
    var CairoResult = class {
      constructor(variant, resultContent) {
        __publicField(this, "Ok");
        __publicField(this, "Err");
        if (!(variant in CairoResultVariant)) {
          throw new Error("Wrong variant : should be CairoResultVariant.Ok or .Err.");
        }
        if (variant === 0) {
          this.Ok = resultContent;
          this.Err = void 0;
        } else {
          this.Ok = void 0;
          this.Err = resultContent;
        }
      }
      /**
       *
       * @returns the content of the valid variant of a Cairo Result.
       */
      unwrap() {
        if (typeof this.Ok !== "undefined") {
          return this.Ok;
        }
        if (typeof this.Err !== "undefined") {
          return this.Err;
        }
        throw new Error("Both Result.Ok and .Err are undefined. Not authorized.");
      }
      /**
       *
       * @returns true if the valid variant is 'Ok'.
       */
      isOk() {
        return !(typeof this.Ok === "undefined");
      }
      /**
       *
       * @returns true if the valid variant is 'isErr'.
       */
      isErr() {
        return !(typeof this.Err === "undefined");
      }
    };
    var guard = {
      isBN: (data, type, key) => {
        if (!isBigInt(data[key]))
          throw new Error(
            `Data and formatter mismatch on ${key}:${type[key]}, expected response data ${key}:${data[key]} to be BN instead it is ${typeof data[key]}`
          );
      },
      unknown: (data, type, key) => {
        throw new Error(`Unhandled formatter type on ${key}:${type[key]} for data ${key}:${data[key]}`);
      }
    };
    function formatter(data, type, sameType) {
      return Object.entries(data).reduce((acc, [key, value]) => {
        const elType = sameType ?? type[key];
        if (!(key in type) && !sameType) {
          acc[key] = value;
          return acc;
        }
        if (elType === "string") {
          if (Array.isArray(data[key])) {
            const arrayStr = formatter(
              data[key],
              data[key].map((_) => elType)
            );
            acc[key] = Object.values(arrayStr).join("");
            return acc;
          }
          guard.isBN(data, type, key);
          acc[key] = decodeShortString(value);
          return acc;
        }
        if (elType === "number") {
          guard.isBN(data, type, key);
          acc[key] = Number(value);
          return acc;
        }
        if (typeof elType === "function") {
          acc[key] = elType(value);
          return acc;
        }
        if (Array.isArray(elType)) {
          const arrayObj = formatter(data[key], elType, elType[0]);
          acc[key] = Object.values(arrayObj);
          return acc;
        }
        if (typeof elType === "object") {
          acc[key] = formatter(data[key], elType);
          return acc;
        }
        guard.unknown(data, type, key);
        return acc;
      }, {});
    }
    var AbiParser1 = class {
      constructor(abi) {
        __publicField(this, "abi");
        this.abi = abi;
      }
      /**
       * abi method inputs length without '_len' inputs
       * cairo 0 reducer
       * @param abiMethod FunctionAbi
       * @returns number
       */
      methodInputsLength(abiMethod) {
        return abiMethod.inputs.reduce((acc, input) => !isLen(input.name) ? acc + 1 : acc, 0);
      }
      /**
       * get method definition from abi
       * @param name string
       * @returns FunctionAbi | undefined
       */
      getMethod(name) {
        return this.abi.find((it) => it.name === name);
      }
      /**
       * Get Abi in legacy format
       * @returns Abi
       */
      getLegacyFormat() {
        return this.abi;
      }
    };
    var AbiParser2 = class {
      constructor(abi) {
        __publicField(this, "abi");
        this.abi = abi;
      }
      /**
       * abi method inputs length
       * @param abiMethod FunctionAbi
       * @returns number
       */
      methodInputsLength(abiMethod) {
        return abiMethod.inputs.length;
      }
      /**
       * get method definition from abi
       * @param name string
       * @returns FunctionAbi | undefined
       */
      getMethod(name) {
        const intf = this.abi.find((it) => it.type === "interface");
        return intf.items.find((it) => it.name === name);
      }
      /**
       * Get Abi in legacy format
       * @returns Abi
       */
      getLegacyFormat() {
        return this.abi.flatMap((e) => {
          if (e.type === "interface") {
            return e.items;
          }
          return e;
        });
      }
    };
    function createAbiParser(abi) {
      const version = getAbiVersion(abi);
      if (version === 0 || version === 1) {
        return new AbiParser1(abi);
      }
      if (version === 2) {
        return new AbiParser2(abi);
      }
      throw Error(`Unsupported ABI version ${version}`);
    }
    function getAbiVersion(abi) {
      if (abi.find((it) => it.type === "interface"))
        return 2;
      if (isCairo1Abi(abi))
        return 1;
      return 0;
    }
    function isNoConstructorValid(method, argsCalldata, abiMethod) {
      return method === "constructor" && !abiMethod && !argsCalldata.length;
    }
    function parseNamedTuple(namedTuple) {
      const name = namedTuple.substring(0, namedTuple.indexOf(":"));
      const type = namedTuple.substring(name.length + ":".length);
      return { name, type };
    }
    function parseSubTuple(s) {
      if (!s.includes("("))
        return { subTuple: [], result: s };
      const subTuple = [];
      let result = "";
      let i = 0;
      while (i < s.length) {
        if (s[i] === "(") {
          let counter = 1;
          const lBracket = i;
          i++;
          while (counter) {
            if (s[i] === ")")
              counter--;
            if (s[i] === "(")
              counter++;
            i++;
          }
          subTuple.push(s.substring(lBracket, i));
          result += " ";
          i--;
        } else {
          result += s[i];
        }
        i++;
      }
      return {
        subTuple,
        result
      };
    }
    function extractCairo0Tuple(type) {
      const cleanType = type.replace(/\s/g, "").slice(1, -1);
      const { subTuple, result } = parseSubTuple(cleanType);
      let recomposed = result.split(",").map((it) => {
        return subTuple.length ? it.replace(" ", subTuple.shift()) : it;
      });
      if (isTypeNamedTuple(type)) {
        recomposed = recomposed.reduce((acc, it) => {
          return acc.concat(parseNamedTuple(it));
        }, []);
      }
      return recomposed;
    }
    function getClosureOffset(input, open, close) {
      for (let i = 0, counter = 0; i < input.length; i++) {
        if (input[i] === open) {
          counter++;
        } else if (input[i] === close && --counter === 0) {
          return i;
        }
      }
      return Number.POSITIVE_INFINITY;
    }
    function extractCairo1Tuple(type) {
      const input = type.slice(1, -1);
      const result = [];
      let currentIndex = 0;
      let limitIndex;
      while (currentIndex < input.length) {
        switch (true) {
          case input[currentIndex] === "(": {
            limitIndex = currentIndex + getClosureOffset(input.slice(currentIndex), "(", ")") + 1;
            break;
          }
          case (input.startsWith("core::result::Result::<", currentIndex) || input.startsWith("core::array::Array::<", currentIndex) || input.startsWith("core::option::Option::<", currentIndex)): {
            limitIndex = currentIndex + getClosureOffset(input.slice(currentIndex), "<", ">") + 1;
            break;
          }
          default: {
            const commaIndex = input.indexOf(",", currentIndex);
            limitIndex = commaIndex !== -1 ? commaIndex : Number.POSITIVE_INFINITY;
          }
        }
        result.push(input.slice(currentIndex, limitIndex));
        currentIndex = limitIndex + 2;
      }
      return result;
    }
    function extractTupleMemberTypes(type) {
      if (isCairo1Type(type)) {
        return extractCairo1Tuple(type);
      }
      return extractCairo0Tuple(type);
    }
    function errorU256(key) {
      return Error(
        `Your object includes the property : ${key}, containing an Uint256 object without the 'low' and 'high' keys.`
      );
    }
    function errorU512(key) {
      return Error(
        `Your object includes the property : ${key}, containing an Uint512 object without the 'limb0' to 'limb3' keys.`
      );
    }
    function orderPropsByAbi(unorderedObject, abiOfObject, structs, enums) {
      const orderInput = (unorderedItem, abiType) => {
        if (isTypeArray(abiType)) {
          return orderArray(unorderedItem, abiType);
        }
        if (isTypeEnum(abiType, enums)) {
          const abiObj = enums[abiType];
          return orderEnum(unorderedItem, abiObj);
        }
        if (isTypeTuple(abiType)) {
          return orderTuple(unorderedItem, abiType);
        }
        if (isTypeEthAddress(abiType)) {
          return unorderedItem;
        }
        if (isTypeByteArray(abiType)) {
          return unorderedItem;
        }
        if (isTypeSecp256k1Point(abiType)) {
          return unorderedItem;
        }
        if (CairoUint256.isAbiType(abiType)) {
          const u256 = unorderedItem;
          if (typeof u256 !== "object") {
            return u256;
          }
          if (!("low" in u256 && "high" in u256)) {
            throw errorU256(abiType);
          }
          return { low: u256.low, high: u256.high };
        }
        if (CairoUint512.isAbiType(abiType)) {
          const u512 = unorderedItem;
          if (typeof u512 !== "object") {
            return u512;
          }
          if (!["limb0", "limb1", "limb2", "limb3"].every((key) => key in u512)) {
            throw errorU512(abiType);
          }
          return { limb0: u512.limb0, limb1: u512.limb1, limb2: u512.limb2, limb3: u512.limb3 };
        }
        if (isTypeStruct(abiType, structs)) {
          const abiOfStruct = structs[abiType].members;
          return orderStruct(unorderedItem, abiOfStruct);
        }
        return unorderedItem;
      };
      const orderStruct = (unorderedObject2, abiObject) => {
        const orderedObject2 = abiObject.reduce((orderedObject, abiParam) => {
          const setProperty = (value) => Object.defineProperty(orderedObject, abiParam.name, {
            enumerable: true,
            value: value ?? unorderedObject2[abiParam.name]
          });
          if (unorderedObject2[abiParam.name] === "undefined") {
            if (isCairo1Type(abiParam.type) || !isLen(abiParam.name)) {
              throw Error(`Your object needs a property with key : ${abiParam.name} .`);
            }
          }
          setProperty(orderInput(unorderedObject2[abiParam.name], abiParam.type));
          return orderedObject;
        }, {});
        return orderedObject2;
      };
      function orderArray(myArray, abiParam) {
        const typeInArray = getArrayType(abiParam);
        if (isString(myArray)) {
          return myArray;
        }
        return myArray.map((myElem) => orderInput(myElem, typeInArray));
      }
      function orderTuple(unorderedObject2, abiParam) {
        const typeList = extractTupleMemberTypes(abiParam);
        const orderedObject2 = typeList.reduce((orderedObject, abiTypeCairoX, index) => {
          const myObjKeys = Object.keys(unorderedObject2);
          const setProperty = (value) => Object.defineProperty(orderedObject, index.toString(), {
            enumerable: true,
            value: value ?? unorderedObject2[myObjKeys[index]]
          });
          const abiType = (abiTypeCairoX == null ? void 0 : abiTypeCairoX.type) ? abiTypeCairoX.type : abiTypeCairoX;
          setProperty(orderInput(unorderedObject2[myObjKeys[index]], abiType));
          return orderedObject;
        }, {});
        return orderedObject2;
      }
      const orderEnum = (unorderedObject2, abiObject) => {
        if (isTypeResult(abiObject.name)) {
          const unorderedResult = unorderedObject2;
          const resultOkType = abiObject.name.substring(
            abiObject.name.indexOf("<") + 1,
            abiObject.name.lastIndexOf(",")
          );
          const resultErrType = abiObject.name.substring(
            abiObject.name.indexOf(",") + 1,
            abiObject.name.lastIndexOf(">")
          );
          if (unorderedResult.isOk()) {
            return new CairoResult(
              0,
              orderInput(unorderedObject2.unwrap(), resultOkType)
            );
          }
          return new CairoResult(
            1,
            orderInput(unorderedObject2.unwrap(), resultErrType)
          );
        }
        if (isTypeOption(abiObject.name)) {
          const unorderedOption = unorderedObject2;
          const resultSomeType = abiObject.name.substring(
            abiObject.name.indexOf("<") + 1,
            abiObject.name.lastIndexOf(">")
          );
          if (unorderedOption.isSome()) {
            return new CairoOption(
              0,
              orderInput(unorderedOption.unwrap(), resultSomeType)
            );
          }
          return new CairoOption(1, {});
        }
        const unorderedCustomEnum = unorderedObject2;
        const variants = Object.entries(unorderedCustomEnum.variant);
        const newEntries = variants.map((variant) => {
          if (typeof variant[1] === "undefined") {
            return variant;
          }
          const variantType = abiObject.type.substring(
            abiObject.type.lastIndexOf("<") + 1,
            abiObject.type.lastIndexOf(">")
          );
          if (variantType === "()") {
            return variant;
          }
          return [variant[0], orderInput(unorderedCustomEnum.unwrap(), variantType)];
        });
        return new CairoCustomEnum(Object.fromEntries(newEntries));
      };
      const finalOrderedObject = abiOfObject.reduce((orderedObject, abiParam) => {
        const setProperty = (value) => Object.defineProperty(orderedObject, abiParam.name, {
          enumerable: true,
          value
        });
        if (isLen(abiParam.name) && !isCairo1Type(abiParam.type)) {
          return orderedObject;
        }
        setProperty(orderInput(unorderedObject[abiParam.name], abiParam.type));
        return orderedObject;
      }, {});
      return finalOrderedObject;
    }
    function parseBaseTypes(type, val) {
      switch (true) {
        case CairoUint256.isAbiType(type):
          return new CairoUint256(val).toApiRequest();
        case CairoUint512.isAbiType(type):
          return new CairoUint512(val).toApiRequest();
        case isTypeBytes31(type):
          return encodeShortString(val.toString());
        case isTypeSecp256k1Point(type): {
          const pubKeyETH = removeHexPrefix(toHex(val)).padStart(128, "0");
          const pubKeyETHy = uint256(addHexPrefix(pubKeyETH.slice(-64)));
          const pubKeyETHx = uint256(addHexPrefix(pubKeyETH.slice(0, -64)));
          return [
            felt(pubKeyETHx.low),
            felt(pubKeyETHx.high),
            felt(pubKeyETHy.low),
            felt(pubKeyETHy.high)
          ];
        }
        default:
          return felt(val);
      }
    }
    function parseTuple(element, typeStr) {
      const memberTypes = extractTupleMemberTypes(typeStr);
      const elements = Object.values(element);
      if (elements.length !== memberTypes.length) {
        throw Error(
          `ParseTuple: provided and expected abi tuple size do not match.
      provided: ${elements} 
      expected: ${memberTypes}`
        );
      }
      return memberTypes.map((it, dx) => {
        return {
          element: elements[dx],
          type: it.type ?? it
        };
      });
    }
    function parseByteArray(element) {
      const myByteArray = byteArrayFromString(element);
      return [
        myByteArray.data.length.toString(),
        ...myByteArray.data.map((bn) => bn.toString()),
        myByteArray.pending_word.toString(),
        myByteArray.pending_word_len.toString()
      ];
    }
    function parseCalldataValue(element, type, structs, enums) {
      if (element === void 0) {
        throw Error(`Missing parameter for type ${type}`);
      }
      if (Array.isArray(element)) {
        const result = [];
        result.push(felt(element.length));
        const arrayType = getArrayType(type);
        return element.reduce((acc, it) => {
          return acc.concat(parseCalldataValue(it, arrayType, structs, enums));
        }, result);
      }
      if (structs[type] && structs[type].members.length) {
        if (CairoUint256.isAbiType(type)) {
          return new CairoUint256(element).toApiRequest();
        }
        if (CairoUint512.isAbiType(type)) {
          return new CairoUint512(element).toApiRequest();
        }
        if (type === "core::starknet::eth_address::EthAddress")
          return parseBaseTypes(type, element);
        if (type === "core::byte_array::ByteArray")
          return parseByteArray(element);
        const { members } = structs[type];
        const subElement = element;
        return members.reduce((acc, it) => {
          return acc.concat(parseCalldataValue(subElement[it.name], it.type, structs, enums));
        }, []);
      }
      if (isTypeTuple(type)) {
        const tupled = parseTuple(element, type);
        return tupled.reduce((acc, it) => {
          const parsedData = parseCalldataValue(it.element, it.type, structs, enums);
          return acc.concat(parsedData);
        }, []);
      }
      if (CairoUint256.isAbiType(type)) {
        return new CairoUint256(element).toApiRequest();
      }
      if (CairoUint512.isAbiType(type)) {
        return new CairoUint512(element).toApiRequest();
      }
      if (isTypeEnum(type, enums)) {
        const { variants } = enums[type];
        if (isTypeOption(type)) {
          const myOption = element;
          if (myOption.isSome()) {
            const listTypeVariant2 = variants.find((variant) => variant.name === "Some");
            if (typeof listTypeVariant2 === "undefined") {
              throw Error(`Error in abi : Option has no 'Some' variant.`);
            }
            const typeVariantSome = listTypeVariant2.type;
            if (typeVariantSome === "()") {
              return 0 .toString();
            }
            const parsedParameter2 = parseCalldataValue(
              myOption.unwrap(),
              typeVariantSome,
              structs,
              enums
            );
            if (Array.isArray(parsedParameter2)) {
              return [0 .toString(), ...parsedParameter2];
            }
            return [0 .toString(), parsedParameter2];
          }
          return 1 .toString();
        }
        if (isTypeResult(type)) {
          const myResult = element;
          if (myResult.isOk()) {
            const listTypeVariant3 = variants.find((variant) => variant.name === "Ok");
            if (typeof listTypeVariant3 === "undefined") {
              throw Error(`Error in abi : Result has no 'Ok' variant.`);
            }
            const typeVariantOk = listTypeVariant3.type;
            if (typeVariantOk === "()") {
              return 0 .toString();
            }
            const parsedParameter3 = parseCalldataValue(
              myResult.unwrap(),
              typeVariantOk,
              structs,
              enums
            );
            if (Array.isArray(parsedParameter3)) {
              return [0 .toString(), ...parsedParameter3];
            }
            return [0 .toString(), parsedParameter3];
          }
          const listTypeVariant2 = variants.find((variant) => variant.name === "Err");
          if (typeof listTypeVariant2 === "undefined") {
            throw Error(`Error in abi : Result has no 'Err' variant.`);
          }
          const typeVariantErr = listTypeVariant2.type;
          if (typeVariantErr === "()") {
            return 1 .toString();
          }
          const parsedParameter2 = parseCalldataValue(myResult.unwrap(), typeVariantErr, structs, enums);
          if (Array.isArray(parsedParameter2)) {
            return [1 .toString(), ...parsedParameter2];
          }
          return [1 .toString(), parsedParameter2];
        }
        const myEnum = element;
        const activeVariant = myEnum.activeVariant();
        const listTypeVariant = variants.find((variant) => variant.name === activeVariant);
        if (typeof listTypeVariant === "undefined") {
          throw Error(`Not find in abi : Enum has no '${activeVariant}' variant.`);
        }
        const typeActiveVariant = listTypeVariant.type;
        const numActiveVariant = variants.findIndex((variant) => variant.name === activeVariant);
        if (typeActiveVariant === "()") {
          return numActiveVariant.toString();
        }
        const parsedParameter = parseCalldataValue(myEnum.unwrap(), typeActiveVariant, structs, enums);
        if (Array.isArray(parsedParameter)) {
          return [numActiveVariant.toString(), ...parsedParameter];
        }
        return [numActiveVariant.toString(), parsedParameter];
      }
      if (typeof element === "object") {
        throw Error(`Parameter ${element} do not align with abi parameter ${type}`);
      }
      return parseBaseTypes(type, element);
    }
    function parseCalldataField(argsIterator, input, structs, enums) {
      const { name, type } = input;
      let { value } = argsIterator.next();
      switch (true) {
        case isTypeArray(type):
          if (!Array.isArray(value) && !isText(value)) {
            throw Error(`ABI expected parameter ${name} to be array or long string, got ${value}`);
          }
          if (isString(value)) {
            value = splitLongString(value);
          }
          return parseCalldataValue(value, input.type, structs, enums);
        case type === "core::starknet::eth_address::EthAddress":
          return parseBaseTypes(type, value);
        case (isTypeStruct(type, structs) || isTypeTuple(type) || CairoUint256.isAbiType(type) || CairoUint256.isAbiType(type)):
          return parseCalldataValue(value, type, structs, enums);
        case isTypeEnum(type, enums):
          return parseCalldataValue(
            value,
            type,
            structs,
            enums
          );
        default:
          return parseBaseTypes(type, value);
      }
    }
    function parseBaseTypes2(type, it) {
      let temp;
      switch (true) {
        case isTypeBool(type):
          temp = it.next().value;
          return Boolean(BigInt(temp));
        case CairoUint256.isAbiType(type):
          const low = it.next().value;
          const high = it.next().value;
          return new CairoUint256(low, high).toBigInt();
        case CairoUint512.isAbiType(type):
          const limb0 = it.next().value;
          const limb1 = it.next().value;
          const limb2 = it.next().value;
          const limb3 = it.next().value;
          return new CairoUint512(limb0, limb1, limb2, limb3).toBigInt();
        case type === "core::starknet::eth_address::EthAddress":
          temp = it.next().value;
          return BigInt(temp);
        case type === "core::bytes_31::bytes31":
          temp = it.next().value;
          return decodeShortString(temp);
        case isTypeSecp256k1Point(type):
          const xLow = removeHexPrefix(it.next().value).padStart(32, "0");
          const xHigh = removeHexPrefix(it.next().value).padStart(32, "0");
          const yLow = removeHexPrefix(it.next().value).padStart(32, "0");
          const yHigh = removeHexPrefix(it.next().value).padStart(32, "0");
          const pubK = BigInt(addHexPrefix(xHigh + xLow + yHigh + yLow));
          return pubK;
        default:
          temp = it.next().value;
          return BigInt(temp);
      }
    }
    function parseResponseValue(responseIterator, element, structs, enums) {
      if (element.type === "()") {
        return {};
      }
      if (CairoUint256.isAbiType(element.type)) {
        const low = responseIterator.next().value;
        const high = responseIterator.next().value;
        return new CairoUint256(low, high).toBigInt();
      }
      if (CairoUint512.isAbiType(element.type)) {
        const limb0 = responseIterator.next().value;
        const limb1 = responseIterator.next().value;
        const limb2 = responseIterator.next().value;
        const limb3 = responseIterator.next().value;
        return new CairoUint512(limb0, limb1, limb2, limb3).toBigInt();
      }
      if (isTypeByteArray(element.type)) {
        const parsedBytes31Arr = [];
        const bytes31ArrLen = BigInt(responseIterator.next().value);
        while (parsedBytes31Arr.length < bytes31ArrLen) {
          parsedBytes31Arr.push(toHex(responseIterator.next().value));
        }
        const pending_word = toHex(responseIterator.next().value);
        const pending_word_len = BigInt(responseIterator.next().value);
        const myByteArray = {
          data: parsedBytes31Arr,
          pending_word,
          pending_word_len
        };
        return stringFromByteArray(myByteArray);
      }
      if (isTypeArray(element.type)) {
        const parsedDataArr = [];
        const el = { name: "", type: getArrayType(element.type) };
        const len = BigInt(responseIterator.next().value);
        while (parsedDataArr.length < len) {
          parsedDataArr.push(parseResponseValue(responseIterator, el, structs, enums));
        }
        return parsedDataArr;
      }
      if (structs && element.type in structs && structs[element.type]) {
        if (element.type === "core::starknet::eth_address::EthAddress") {
          return parseBaseTypes2(element.type, responseIterator);
        }
        return structs[element.type].members.reduce((acc, el) => {
          acc[el.name] = parseResponseValue(responseIterator, el, structs, enums);
          return acc;
        }, {});
      }
      if (enums && element.type in enums && enums[element.type]) {
        const variantNum = Number(responseIterator.next().value);
        const rawEnum = enums[element.type].variants.reduce((acc, variant, num2) => {
          if (num2 === variantNum) {
            acc[variant.name] = parseResponseValue(
              responseIterator,
              { name: "", type: variant.type },
              structs,
              enums
            );
            return acc;
          }
          acc[variant.name] = void 0;
          return acc;
        }, {});
        if (element.type.startsWith("core::option::Option")) {
          const content = variantNum === 0 ? rawEnum.Some : void 0;
          return new CairoOption(variantNum, content);
        }
        if (element.type.startsWith("core::result::Result")) {
          let content;
          if (variantNum === 0) {
            content = rawEnum.Ok;
          } else {
            content = rawEnum.Err;
          }
          return new CairoResult(variantNum, content);
        }
        const customEnum = new CairoCustomEnum(rawEnum);
        return customEnum;
      }
      if (isTypeTuple(element.type)) {
        const memberTypes = extractTupleMemberTypes(element.type);
        return memberTypes.reduce((acc, it, idx) => {
          const name = (it == null ? void 0 : it.name) ? it.name : idx;
          const type = (it == null ? void 0 : it.type) ? it.type : it;
          const el = { name, type };
          acc[name] = parseResponseValue(responseIterator, el, structs, enums);
          return acc;
        }, {});
      }
      if (isTypeArray(element.type)) {
        const parsedDataArr = [];
        const el = { name: "", type: getArrayType(element.type) };
        const len = BigInt(responseIterator.next().value);
        while (parsedDataArr.length < len) {
          parsedDataArr.push(parseResponseValue(responseIterator, el, structs, enums));
        }
        return parsedDataArr;
      }
      return parseBaseTypes2(element.type, responseIterator);
    }
    function responseParser(responseIterator, output, structs, enums, parsedResult) {
      const { name, type } = output;
      let temp;
      switch (true) {
        case isLen(name):
          temp = responseIterator.next().value;
          return BigInt(temp);
        case (structs && type in structs || isTypeTuple(type)):
          return parseResponseValue(responseIterator, output, structs, enums);
        case (enums && isTypeEnum(type, enums)):
          return parseResponseValue(responseIterator, output, structs, enums);
        case isTypeArray(type):
          if (isCairo1Type(type)) {
            return parseResponseValue(responseIterator, output, structs, enums);
          }
          const parsedDataArr = [];
          if (parsedResult && parsedResult[`${name}_len`]) {
            const arrLen = parsedResult[`${name}_len`];
            while (parsedDataArr.length < arrLen) {
              parsedDataArr.push(
                parseResponseValue(
                  responseIterator,
                  { name, type: output.type.replace("*", "") },
                  structs,
                  enums
                )
              );
            }
          }
          return parsedDataArr;
        default:
          return parseBaseTypes2(type, responseIterator);
      }
    }
    var validateFelt = (parameter, input) => {
      assert(
        isString(parameter) || isNumber(parameter) || isBigInt(parameter),
        `Validate: arg ${input.name} should be a felt typed as (String, Number or BigInt)`
      );
      if (isString(parameter) && !isHex(parameter))
        return;
      const param = BigInt(parameter.toString(10));
      assert(
        // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1266
        param >= 0n && param <= 2n ** 252n - 1n,
        `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^252-1]`
      );
    };
    var validateBytes31 = (parameter, input) => {
      assert(isString(parameter), `Validate: arg ${input.name} should be a string.`);
      assert(
        parameter.length < 32,
        `Validate: arg ${input.name} cairo typed ${input.type} should be a string of less than 32 characters.`
      );
    };
    var validateByteArray = (parameter, input) => {
      assert(isString(parameter), `Validate: arg ${input.name} should be a string.`);
    };
    var validateUint = (parameter, input) => {
      if (isNumber(parameter)) {
        assert(
          parameter <= Number.MAX_SAFE_INTEGER,
          `Validation: Parameter is to large to be typed as Number use (BigInt or String)`
        );
      }
      assert(
        isString(parameter) || isNumber(parameter) || isBigInt(parameter) || typeof parameter === "object" && "low" in parameter && "high" in parameter || typeof parameter === "object" && ["limb0", "limb1", "limb2", "limb3"].every((key) => key in parameter),
        `Validate: arg ${input.name} of cairo type ${input.type} should be type (String, Number or BigInt), but is ${typeof parameter} ${parameter}.`
      );
      let param;
      switch (input.type) {
        case "core::integer::u256":
          param = new CairoUint256(parameter).toBigInt();
          break;
        case "core::integer::u512":
          param = new CairoUint512(parameter).toBigInt();
          break;
        default:
          param = toBigInt(parameter);
      }
      switch (input.type) {
        case "core::integer::u8":
          assert(
            param >= 0n && param <= 255n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0 - 255]`
          );
          break;
        case "core::integer::u16":
          assert(
            param >= 0n && param <= 65535n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 65535]`
          );
          break;
        case "core::integer::u32":
          assert(
            param >= 0n && param <= 4294967295n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 4294967295]`
          );
          break;
        case "core::integer::u64":
          assert(
            param >= 0n && param <= 2n ** 64n - 1n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^64-1]`
          );
          break;
        case "core::integer::u128":
          assert(
            param >= 0n && param <= 2n ** 128n - 1n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^128-1]`
          );
          break;
        case "core::integer::u256":
          assert(
            param >= 0n && param <= 2n ** 256n - 1n,
            `Validate: arg ${input.name} is ${input.type} 0 - 2^256-1`
          );
          break;
        case "core::integer::u512":
          assert(CairoUint512.is(param), `Validate: arg ${input.name} is ${input.type} 0 - 2^512-1`);
          break;
        case "core::starknet::class_hash::ClassHash":
          assert(
            // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1670
            param >= 0n && param <= 2n ** 252n - 1n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^252-1]`
          );
          break;
        case "core::starknet::contract_address::ContractAddress":
          assert(
            // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1245
            param >= 0n && param <= 2n ** 252n - 1n,
            `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^252-1]`
          );
          break;
        case "core::starknet::secp256k1::Secp256k1Point": {
          assert(
            param >= 0n && param <= 2n ** 512n - 1n,
            `Validate: arg ${input.name} must be ${input.type} : a 512 bits number.`
          );
          break;
        }
        default:
          break;
      }
    };
    var validateBool = (parameter, input) => {
      assert(
        isBoolean(parameter),
        `Validate: arg ${input.name} of cairo type ${input.type} should be type (Boolean)`
      );
    };
    var validateStruct = (parameter, input, structs) => {
      if (input.type === "core::integer::u256" || input.type === "core::integer::u512") {
        validateUint(parameter, input);
        return;
      }
      if (input.type === "core::starknet::eth_address::EthAddress") {
        assert(
          typeof parameter !== "object",
          `EthAddress type is waiting a BigNumberish. Got ${parameter}`
        );
        const param = BigInt(parameter.toString(10));
        assert(
          // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1259
          param >= 0n && param <= 2n ** 160n - 1n,
          `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^160-1]`
        );
        return;
      }
      assert(
        typeof parameter === "object" && !Array.isArray(parameter),
        `Validate: arg ${input.name} is cairo type struct (${input.type}), and should be defined as js object (not array)`
      );
      structs[input.type].members.forEach(({ name }) => {
        assert(
          Object.keys(parameter).includes(name),
          `Validate: arg ${input.name} should have a property ${name}`
        );
      });
    };
    var validateEnum = (parameter, input) => {
      assert(
        typeof parameter === "object" && !Array.isArray(parameter),
        `Validate: arg ${input.name} is cairo type Enum (${input.type}), and should be defined as js object (not array)`
      );
      const methodsKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(parameter));
      const keys = [...Object.getOwnPropertyNames(parameter), ...methodsKeys];
      if (isTypeOption(input.type) && keys.includes("isSome") && keys.includes("isNone")) {
        return;
      }
      if (isTypeResult(input.type) && keys.includes("isOk") && keys.includes("isErr")) {
        return;
      }
      if (keys.includes("variant") && keys.includes("activeVariant")) {
        return;
      }
      throw new Error(
        `Validate Enum: argument ${input.name}, type ${input.type}, value received ${parameter}, is not an Enum.`
      );
    };
    var validateTuple = (parameter, input) => {
      assert(
        typeof parameter === "object" && !Array.isArray(parameter),
        `Validate: arg ${input.name} should be a tuple (defined as object)`
      );
    };
    var validateArray = (parameter, input, structs, enums) => {
      const baseType = getArrayType(input.type);
      if (isTypeFelt(baseType) && isLongText(parameter)) {
        return;
      }
      assert(Array.isArray(parameter), `Validate: arg ${input.name} should be an Array`);
      switch (true) {
        case isTypeFelt(baseType):
          parameter.forEach((param) => validateFelt(param, input));
          break;
        case isTypeTuple(baseType):
          parameter.forEach((it) => validateTuple(it, { name: input.name, type: baseType }));
          break;
        case isTypeArray(baseType):
          parameter.forEach(
            (param) => validateArray(param, { name: "", type: baseType }, structs, enums)
          );
          break;
        case isTypeStruct(baseType, structs):
          parameter.forEach(
            (it) => validateStruct(it, { name: input.name, type: baseType }, structs)
          );
          break;
        case isTypeEnum(baseType, enums):
          parameter.forEach((it) => validateEnum(it, { name: input.name, type: baseType }));
          break;
        case (isTypeUint(baseType) || isTypeLiteral(baseType)):
          parameter.forEach((param) => validateUint(param, { name: "", type: baseType }));
          break;
        case isTypeBool(baseType):
          parameter.forEach((param) => validateBool(param, input));
          break;
        default:
          throw new Error(
            `Validate Unhandled: argument ${input.name}, type ${input.type}, value ${parameter}`
          );
      }
    };
    function validateFields(abiMethod, args, structs, enums) {
      abiMethod.inputs.reduce((acc, input) => {
        const parameter = args[acc];
        switch (true) {
          case isLen(input.name):
            return acc;
          case isTypeFelt(input.type):
            validateFelt(parameter, input);
            break;
          case isTypeBytes31(input.type):
            validateBytes31(parameter, input);
            break;
          case (isTypeUint(input.type) || isTypeLiteral(input.type)):
            validateUint(parameter, input);
            break;
          case isTypeBool(input.type):
            validateBool(parameter, input);
            break;
          case isTypeByteArray(input.type):
            validateByteArray(parameter, input);
            break;
          case isTypeArray(input.type):
            validateArray(parameter, input, structs, enums);
            break;
          case isTypeStruct(input.type, structs):
            validateStruct(parameter, input, structs);
            break;
          case isTypeEnum(input.type, enums):
            validateEnum(parameter, input);
            break;
          case isTypeTuple(input.type):
            validateTuple(parameter, input);
            break;
          default:
            throw new Error(
              `Validate Unhandled: argument ${input.name}, type ${input.type}, value ${parameter}`
            );
        }
        return acc + 1;
      }, 0);
    }
    var CallData = class _CallData {
      constructor(abi) {
        __publicField(this, "abi");
        __publicField(this, "parser");
        __publicField(this, "structs");
        __publicField(this, "enums");
        this.structs = _CallData.getAbiStruct(abi);
        this.enums = _CallData.getAbiEnum(abi);
        this.parser = createAbiParser(abi);
        this.abi = this.parser.getLegacyFormat();
      }
      /**
       * Validate arguments passed to the method as corresponding to the ones in the abi
       * @param type ValidateType - type of the method
       * @param method string - name of the method
       * @param args ArgsOrCalldata - arguments that are passed to the method
       */
      validate(type, method, args = []) {
        if (type !== "DEPLOY") {
          const invocableFunctionNames = this.abi.filter((abi) => {
            if (abi.type !== "function")
              return false;
            const isView = abi.stateMutability === "view" || abi.state_mutability === "view";
            return type === "INVOKE" ? !isView : isView;
          }).map((abi) => abi.name);
          assert(
            invocableFunctionNames.includes(method),
            `${type === "INVOKE" ? "invocable" : "viewable"} method not found in abi`
          );
        }
        const abiMethod = this.abi.find(
          (abi) => type === "DEPLOY" ? abi.name === method && abi.type === "constructor" : abi.name === method && abi.type === "function"
        );
        if (isNoConstructorValid(method, args, abiMethod)) {
          return;
        }
        const inputsLength = this.parser.methodInputsLength(abiMethod);
        if (args.length !== inputsLength) {
          throw Error(
            `Invalid number of arguments, expected ${inputsLength} arguments, but got ${args.length}`
          );
        }
        validateFields(abiMethod, args, this.structs, this.enums);
      }
      /**
       * Compile contract callData with abi
       * Parse the calldata by using input fields from the abi for that method
       * @param method string - method name
       * @param args RawArgs - arguments passed to the method. Can be an array of arguments (in the order of abi definition), or an object constructed in conformity with abi (in this case, the parameter can be in a wrong order).
       * @return Calldata - parsed arguments in format that contract is expecting
       * @example
       * ```typescript
       * const calldata = myCallData.compile("constructor", ["0x34a", [1, 3n]]);
       * ```
       * ```typescript
       * const calldata2 = myCallData.compile("constructor", {list:[1, 3n], balance:"0x34"}); // wrong order is valid
       * ```
       */
      compile(method, argsCalldata) {
        const abiMethod = this.abi.find((abiFunction) => abiFunction.name === method);
        if (isNoConstructorValid(method, argsCalldata, abiMethod)) {
          return [];
        }
        let args;
        if (Array.isArray(argsCalldata)) {
          args = argsCalldata;
        } else {
          const orderedObject = orderPropsByAbi(
            argsCalldata,
            abiMethod.inputs,
            this.structs,
            this.enums
          );
          args = Object.values(orderedObject);
          validateFields(abiMethod, args, this.structs, this.enums);
        }
        const argsIterator = args[Symbol.iterator]();
        const callArray = abiMethod.inputs.reduce(
          (acc, input) => isLen(input.name) && !isCairo1Type(input.type) ? acc : acc.concat(parseCalldataField(argsIterator, input, this.structs, this.enums)),
          []
        );
        Object.defineProperty(callArray, "__compiled__", {
          enumerable: false,
          writable: false,
          value: true
        });
        return callArray;
      }
      /**
       * Compile contract callData without abi
       * @param rawArgs RawArgs representing cairo method arguments or string array of compiled data
       * @returns Calldata
       */
      static compile(rawArgs) {
        const createTree = (obj) => {
          const getEntries = (o, prefix = ".") => {
            const oe = Array.isArray(o) ? [o.length.toString(), ...o] : o;
            return Object.entries(oe).flatMap(([k, v]) => {
              let value = v;
              if (k === "entrypoint")
                value = getSelectorFromName(value);
              else if (isLongText(value))
                value = byteArrayFromString(value);
              const kk = Array.isArray(oe) && k === "0" ? "$$len" : k;
              if (isBigInt(value))
                return [[`${prefix}${kk}`, felt(value)]];
              if (Object(value) === value) {
                const methodsKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(value));
                const keys = [...Object.getOwnPropertyNames(value), ...methodsKeys];
                if (keys.includes("isSome") && keys.includes("isNone")) {
                  const myOption = value;
                  const variantNb = myOption.isSome() ? 0 : 1;
                  if (myOption.isSome())
                    return getEntries({ 0: variantNb, 1: myOption.unwrap() }, `${prefix}${kk}.`);
                  return [[`${prefix}${kk}`, felt(variantNb)]];
                }
                if (keys.includes("isOk") && keys.includes("isErr")) {
                  const myResult = value;
                  const variantNb = myResult.isOk() ? 0 : 1;
                  return getEntries({ 0: variantNb, 1: myResult.unwrap() }, `${prefix}${kk}.`);
                }
                if (keys.includes("variant") && keys.includes("activeVariant")) {
                  const myEnum = value;
                  const activeVariant = myEnum.activeVariant();
                  const listVariants = Object.keys(myEnum.variant);
                  const activeVariantNb = listVariants.findIndex(
                    (variant) => variant === activeVariant
                  );
                  if (typeof myEnum.unwrap() === "object" && Object.keys(myEnum.unwrap()).length === 0) {
                    return [[`${prefix}${kk}`, felt(activeVariantNb)]];
                  }
                  return getEntries({ 0: activeVariantNb, 1: myEnum.unwrap() }, `${prefix}${kk}.`);
                }
                return getEntries(value, `${prefix}${kk}.`);
              }
              return [[`${prefix}${kk}`, felt(value)]];
            });
          };
          const result = Object.fromEntries(getEntries(obj));
          return result;
        };
        let callTreeArray;
        if (!Array.isArray(rawArgs)) {
          const callTree = createTree(rawArgs);
          callTreeArray = Object.values(callTree);
        } else {
          const callObj = { ...rawArgs };
          const callTree = createTree(callObj);
          callTreeArray = Object.values(callTree);
        }
        Object.defineProperty(callTreeArray, "__compiled__", {
          enumerable: false,
          writable: false,
          value: true
        });
        return callTreeArray;
      }
      /**
       * Parse elements of the response array and structuring them into response object
       * @param method string - method name
       * @param response string[] - response from the method
       * @return Result - parsed response corresponding to the abi
       */
      parse(method, response) {
        const { outputs } = this.abi.find((abi) => abi.name === method);
        const responseIterator = response.flat()[Symbol.iterator]();
        const parsed = outputs.flat().reduce((acc, output, idx) => {
          const propName = output.name ?? idx;
          acc[propName] = responseParser(responseIterator, output, this.structs, this.enums, acc);
          if (acc[propName] && acc[`${propName}_len`]) {
            delete acc[`${propName}_len`];
          }
          return acc;
        }, {});
        return Object.keys(parsed).length === 1 && 0 in parsed ? parsed[0] : parsed;
      }
      /**
       * Format cairo method response data to native js values based on provided format schema
       * @param method string - cairo method name
       * @param response string[] - cairo method response
       * @param format object - formatter object schema
       * @returns Result - parsed and formatted response object
       */
      format(method, response, format) {
        const parsed = this.parse(method, response);
        return formatter(parsed, format);
      }
      /**
       * Helper to extract structs from abi
       * @param abi Abi
       * @returns AbiStructs - structs from abi
       */
      static getAbiStruct(abi) {
        return abi.filter((abiEntry) => abiEntry.type === "struct").reduce(
          (acc, abiEntry) => ({
            ...acc,
            [abiEntry.name]: abiEntry
          }),
          {}
        );
      }
      /**
       * Helper to extract enums from abi
       * @param abi Abi
       * @returns AbiEnums - enums from abi
       */
      static getAbiEnum(abi) {
        const fullEnumList = abi.filter((abiEntry) => abiEntry.type === "enum").reduce(
          (acc, abiEntry) => ({
            ...acc,
            [abiEntry.name]: abiEntry
          }),
          {}
        );
        delete fullEnumList["core::bool"];
        return fullEnumList;
      }
      /**
       * Helper: Compile HexCalldata | RawCalldata | RawArgs
       * @param rawCalldata HexCalldata | RawCalldata | RawArgs
       * @returns Calldata
       */
      static toCalldata(rawCalldata = []) {
        return _CallData.compile(rawCalldata);
      }
      /**
       * Helper: Convert raw to HexCalldata
       * @param raw HexCalldata | RawCalldata | RawArgs
       * @returns HexCalldata
       */
      static toHex(raw = []) {
        const calldata = _CallData.compile(raw);
        return calldata.map((it) => toHex(it));
      }
      /**
       * Parse the elements of a contract response and structure them into one or several Result.
       * In Cairo 0, arrays are not supported.
       * @param typeCairo string or string[] - Cairo type name, ex : "hello::hello::UserData"
       * @param response string[] - serialized data corresponding to typeCairo.
       * @return Result or Result[] - parsed response corresponding to typeData.
       * @example
       * const res2=helloCallData.decodeParameters("hello::hello::UserData",["0x123456","0x1"]);
       * result = { address: 1193046n, is_claimed: true }
       */
      decodeParameters(typeCairo, response) {
        const typeCairoArray = Array.isArray(typeCairo) ? typeCairo : [typeCairo];
        const responseIterator = response.flat()[Symbol.iterator]();
        const decodedArray = typeCairoArray.map(
          (typeParam) => responseParser(
            responseIterator,
            { name: "", type: typeParam },
            this.structs,
            this.enums
          )
        );
        return decodedArray.length === 1 ? decodedArray[0] : decodedArray;
      }
    };
    var hash_exports = {};
    __export(hash_exports, {
      calculateContractAddressFromHash: () => calculateContractAddressFromHash,
      calculateDeclareTransactionHash: () => calculateDeclareTransactionHash3,
      calculateDeployAccountTransactionHash: () => calculateDeployAccountTransactionHash3,
      calculateInvokeTransactionHash: () => calculateInvokeTransactionHash2,
      computeCompiledClassHash: () => computeCompiledClassHash,
      computeContractClassHash: () => computeContractClassHash,
      computeHashOnElements: () => computeHashOnElements2,
      computeLegacyContractClassHash: () => computeLegacyContractClassHash,
      computePedersenHash: () => computePedersenHash,
      computePedersenHashOnElements: () => computePedersenHashOnElements,
      computePoseidonHash: () => computePoseidonHash,
      computePoseidonHashOnElements: () => computePoseidonHashOnElements,
      computeSierraContractClassHash: () => computeSierraContractClassHash,
      formatSpaces: () => formatSpaces,
      getSelector: () => getSelector,
      getSelectorFromName: () => getSelectorFromName,
      hashByteCodeSegments: () => hashByteCodeSegments,
      keccakBn: () => keccakBn,
      poseidon: () => poseidon,
      starknetKeccak: () => starknetKeccak
    });
    var poseidon = __toESM(require_poseidon2());
    var v2_exports = {};
    __export(v2_exports, {
      calculateDeclareTransactionHash: () => calculateDeclareTransactionHash,
      calculateDeployAccountTransactionHash: () => calculateDeployAccountTransactionHash,
      calculateTransactionHash: () => calculateTransactionHash,
      calculateTransactionHashCommon: () => calculateTransactionHashCommon,
      computeHashOnElements: () => computeHashOnElements
    });
    var ec_exports = {};
    __export(ec_exports, {
      starkCurve: () => starkCurve,
      weierstrass: () => weierstrass
    });
    var starkCurve = __toESM(require_lib2());
    var weierstrass = __toESM(require_weierstrass2());
    function computeHashOnElements(data) {
      return [...data, data.length].reduce((x, y) => starkCurve.pedersen(toBigInt(x), toBigInt(y)), 0).toString();
    }
    function calculateTransactionHashCommon(txHashPrefix, version, contractAddress, entryPointSelector, calldata, maxFee, chainId, additionalData = []) {
      const calldataHash = computeHashOnElements(calldata);
      const dataToHash = [
        txHashPrefix,
        version,
        contractAddress,
        entryPointSelector,
        calldataHash,
        maxFee,
        chainId,
        ...additionalData
      ];
      return computeHashOnElements(dataToHash);
    }
    function calculateDeclareTransactionHash(classHash, senderAddress, version, maxFee, chainId, nonce, compiledClassHash) {
      return calculateTransactionHashCommon(
        "0x6465636c617265",
        version,
        senderAddress,
        0,
        [classHash],
        maxFee,
        chainId,
        [nonce, ...compiledClassHash ? [compiledClassHash] : []]
      );
    }
    function calculateDeployAccountTransactionHash(contractAddress, classHash, constructorCalldata, salt, version, maxFee, chainId, nonce) {
      const calldata = [classHash, salt, ...constructorCalldata];
      return calculateTransactionHashCommon(
        "0x6465706c6f795f6163636f756e74",
        version,
        contractAddress,
        0,
        calldata,
        maxFee,
        chainId,
        [nonce]
      );
    }
    function calculateTransactionHash(contractAddress, version, calldata, maxFee, chainId, nonce) {
      return calculateTransactionHashCommon(
        "0x696e766f6b65",
        version,
        contractAddress,
        0,
        calldata,
        maxFee,
        chainId,
        [nonce]
      );
    }
    var v3_exports = {};
    __export(v3_exports, {
      calculateDeclareTransactionHash: () => calculateDeclareTransactionHash2,
      calculateDeployAccountTransactionHash: () => calculateDeployAccountTransactionHash2,
      calculateInvokeTransactionHash: () => calculateInvokeTransactionHash,
      calculateTransactionHashCommon: () => calculateTransactionHashCommon2,
      hashDAMode: () => hashDAMode,
      hashFeeField: () => hashFeeField
    });
    var import_starknet2 = require_lib2();
    var AToBI = (array) => array.map((it) => BigInt(it));
    var DATA_AVAILABILITY_MODE_BITS = 32n;
    var MAX_AMOUNT_BITS = 64n;
    var MAX_PRICE_PER_UNIT_BITS = 128n;
    var RESOURCE_VALUE_OFFSET = MAX_AMOUNT_BITS + MAX_PRICE_PER_UNIT_BITS;
    var L1_GAS_NAME = BigInt(encodeShortString("L1_GAS"));
    var L2_GAS_NAME = BigInt(encodeShortString("L2_GAS"));
    function hashDAMode(nonceDAMode, feeDAMode) {
      return (BigInt(nonceDAMode) << DATA_AVAILABILITY_MODE_BITS) + BigInt(feeDAMode);
    }
    function hashFeeField(tip, bounds) {
      const L1Bound = (L1_GAS_NAME << RESOURCE_VALUE_OFFSET) + (BigInt(bounds.l1_gas.max_amount) << MAX_PRICE_PER_UNIT_BITS) + BigInt(bounds.l1_gas.max_price_per_unit);
      const L2Bound = (L2_GAS_NAME << RESOURCE_VALUE_OFFSET) + (BigInt(bounds.l2_gas.max_amount) << MAX_PRICE_PER_UNIT_BITS) + BigInt(bounds.l2_gas.max_price_per_unit);
      return (0, import_starknet2.poseidonHashMany)([BigInt(tip), L1Bound, L2Bound]);
    }
    function calculateTransactionHashCommon2(txHashPrefix, version, senderAddress, chainId, nonce, tip, paymasterData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, additionalData = []) {
      const feeFieldHash = hashFeeField(tip, resourceBounds);
      const dAModeHash = hashDAMode(nonceDataAvailabilityMode, feeDataAvailabilityMode);
      const dataToHash = AToBI([
        txHashPrefix,
        version,
        senderAddress,
        feeFieldHash,
        (0, import_starknet2.poseidonHashMany)(AToBI(paymasterData)),
        chainId,
        nonce,
        dAModeHash,
        ...AToBI(additionalData)
      ]);
      return toHex((0, import_starknet2.poseidonHashMany)(dataToHash));
    }
    function calculateDeployAccountTransactionHash2(contractAddress, classHash, compiledConstructorCalldata, salt, version, chainId, nonce, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, tip, paymasterData) {
      return calculateTransactionHashCommon2(
        "0x6465706c6f795f6163636f756e74",
        version,
        contractAddress,
        chainId,
        nonce,
        tip,
        paymasterData,
        nonceDataAvailabilityMode,
        feeDataAvailabilityMode,
        resourceBounds,
        [(0, import_starknet2.poseidonHashMany)(AToBI(compiledConstructorCalldata)), classHash, salt]
      );
    }
    function calculateDeclareTransactionHash2(classHash, compiledClassHash, senderAddress, version, chainId, nonce, accountDeploymentData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, tip, paymasterData) {
      return calculateTransactionHashCommon2(
        "0x6465636c617265",
        version,
        senderAddress,
        chainId,
        nonce,
        tip,
        AToBI(paymasterData),
        nonceDataAvailabilityMode,
        feeDataAvailabilityMode,
        resourceBounds,
        [(0, import_starknet2.poseidonHashMany)(AToBI(accountDeploymentData)), classHash, compiledClassHash]
      );
    }
    function calculateInvokeTransactionHash(senderAddress, version, compiledCalldata, chainId, nonce, accountDeploymentData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, tip, paymasterData) {
      return calculateTransactionHashCommon2(
        "0x696e766f6b65",
        version,
        senderAddress,
        chainId,
        nonce,
        tip,
        paymasterData,
        nonceDataAvailabilityMode,
        feeDataAvailabilityMode,
        resourceBounds,
        [(0, import_starknet2.poseidonHashMany)(AToBI(accountDeploymentData)), (0, import_starknet2.poseidonHashMany)(AToBI(compiledCalldata))]
      );
    }
    function isV3InvokeTx(args) {
      return [api_exports.ETransactionVersion.V3, api_exports.ETransactionVersion.F3].includes(
        args.version
      );
    }
    function calculateInvokeTransactionHash2(args) {
      if (isV3InvokeTx(args)) {
        return calculateInvokeTransactionHash(
          args.senderAddress,
          args.version,
          args.compiledCalldata,
          args.chainId,
          args.nonce,
          args.accountDeploymentData,
          args.nonceDataAvailabilityMode,
          args.feeDataAvailabilityMode,
          args.resourceBounds,
          args.tip,
          args.paymasterData
        );
      }
      return calculateTransactionHash(
        args.senderAddress,
        args.version,
        args.compiledCalldata,
        args.maxFee,
        args.chainId,
        args.nonce
      );
    }
    function isV3DeclareTx(args) {
      return [api_exports.ETransactionVersion.V3, api_exports.ETransactionVersion.F3].includes(
        args.version
      );
    }
    function calculateDeclareTransactionHash3(args) {
      if (isV3DeclareTx(args)) {
        return calculateDeclareTransactionHash2(
          args.classHash,
          args.compiledClassHash,
          args.senderAddress,
          args.version,
          args.chainId,
          args.nonce,
          args.accountDeploymentData,
          args.nonceDataAvailabilityMode,
          args.feeDataAvailabilityMode,
          args.resourceBounds,
          args.tip,
          args.paymasterData
        );
      }
      return calculateDeclareTransactionHash(
        args.classHash,
        args.senderAddress,
        args.version,
        args.maxFee,
        args.chainId,
        args.nonce,
        args.compiledClassHash
      );
    }
    function isV3DeployAccountTx(args) {
      return [api_exports.ETransactionVersion.V3, api_exports.ETransactionVersion.F3].includes(
        args.version
      );
    }
    function calculateDeployAccountTransactionHash3(args) {
      if (isV3DeployAccountTx(args)) {
        return calculateDeployAccountTransactionHash2(
          args.contractAddress,
          args.classHash,
          args.compiledConstructorCalldata,
          args.salt,
          args.version,
          args.chainId,
          args.nonce,
          args.nonceDataAvailabilityMode,
          args.feeDataAvailabilityMode,
          args.resourceBounds,
          args.tip,
          args.paymasterData
        );
      }
      return calculateDeployAccountTransactionHash(
        args.contractAddress,
        args.classHash,
        args.constructorCalldata,
        args.salt,
        args.version,
        args.maxFee,
        args.chainId,
        args.nonce
      );
    }
    var import_starknet3 = require_lib2();
    var json_exports = {};
    __export(json_exports, {
      parse: () => parse2,
      parseAlwaysAsBig: () => parseAlwaysAsBig,
      stringify: () => stringify2,
      stringifyAlwaysAsBig: () => stringifyAlwaysAsBig
    });
    var json = __toESM(require_lossless_json());
    var parseIntAsNumberOrBigInt = (x) => {
      if (!json.isInteger(x))
        return parseFloat(x);
      const v = parseInt(x, 10);
      return Number.isSafeInteger(v) ? v : BigInt(x);
    };
    var parse2 = (x) => json.parse(String(x), void 0, parseIntAsNumberOrBigInt);
    var parseAlwaysAsBig = (x) => json.parse(String(x), void 0, json.parseNumberAndBigInt);
    var stringify2 = (value, replacer, space, numberStringifiers) => json.stringify(value, replacer, space, numberStringifiers);
    var stringifyAlwaysAsBig = stringify2;
    function computePedersenHash(a, b) {
      return starkCurve.pedersen(BigInt(a), BigInt(b));
    }
    function computePoseidonHash(a, b) {
      return toHex(starkCurve.poseidonHash(BigInt(a), BigInt(b)));
    }
    function computeHashOnElements2(data) {
      return [...data, data.length].reduce((x, y) => starkCurve.pedersen(BigInt(x), BigInt(y)), 0).toString();
    }
    var computePedersenHashOnElements = computeHashOnElements2;
    function computePoseidonHashOnElements(data) {
      return toHex((0, import_starknet3.poseidonHashMany)(data.map((x) => BigInt(x))));
    }
    function calculateContractAddressFromHash(salt, classHash, constructorCalldata, deployerAddress) {
      const compiledCalldata = CallData.compile(constructorCalldata);
      const constructorCalldataHash = computeHashOnElements2(compiledCalldata);
      const CONTRACT_ADDRESS_PREFIX = felt("0x535441524b4e45545f434f4e54524143545f41444452455353");
      const hash2 = computeHashOnElements2([
        CONTRACT_ADDRESS_PREFIX,
        deployerAddress,
        salt,
        classHash,
        constructorCalldataHash
      ]);
      return toHex(BigInt(hash2) % ADDR_BOUND);
    }
    function nullSkipReplacer(key, value) {
      if (key === "attributes" || key === "accessible_scopes") {
        return Array.isArray(value) && value.length === 0 ? void 0 : value;
      }
      if (key === "debug_info") {
        return null;
      }
      return value === null ? void 0 : value;
    }
    function formatSpaces(json2) {
      let insideQuotes = false;
      const newString = [];
      for (const char of json2) {
        if (char === '"' && (newString.length > 0 && newString.slice(-1)[0] === "\\") === false) {
          insideQuotes = !insideQuotes;
        }
        if (insideQuotes) {
          newString.push(char);
        } else {
          newString.push(char === ":" ? ": " : char === "," ? ", " : char);
        }
      }
      return newString.join("");
    }
    function computeHintedClassHash(compiledContract) {
      const { abi, program } = compiledContract;
      const contractClass = { abi, program };
      const serializedJson = formatSpaces(stringify2(contractClass, nullSkipReplacer));
      return addHexPrefix(starkCurve.keccak(utf8ToArray(serializedJson)).toString(16));
    }
    function computeLegacyContractClassHash(contract) {
      const compiledContract = isString(contract) ? parse2(contract) : contract;
      const apiVersion = toHex(API_VERSION);
      const externalEntryPointsHash = computeHashOnElements2(
        compiledContract.entry_points_by_type.EXTERNAL.flatMap((e) => [e.selector, e.offset])
      );
      const l1HandlerEntryPointsHash = computeHashOnElements2(
        compiledContract.entry_points_by_type.L1_HANDLER.flatMap((e) => [e.selector, e.offset])
      );
      const constructorEntryPointHash = computeHashOnElements2(
        compiledContract.entry_points_by_type.CONSTRUCTOR.flatMap((e) => [e.selector, e.offset])
      );
      const builtinsHash = computeHashOnElements2(
        compiledContract.program.builtins.map((s) => encodeShortString(s))
      );
      const hintedClassHash = computeHintedClassHash(compiledContract);
      const dataHash = computeHashOnElements2(compiledContract.program.data);
      return computeHashOnElements2([
        apiVersion,
        externalEntryPointsHash,
        l1HandlerEntryPointsHash,
        constructorEntryPointHash,
        builtinsHash,
        hintedClassHash,
        dataHash
      ]);
    }
    function hashBuiltins(builtins) {
      return (0, import_starknet3.poseidonHashMany)(
        builtins.flatMap((it) => {
          return BigInt(encodeShortString(it));
        })
      );
    }
    function hashEntryPoint(data) {
      const base = data.flatMap((it) => {
        return [BigInt(it.selector), BigInt(it.offset), hashBuiltins(it.builtins)];
      });
      return (0, import_starknet3.poseidonHashMany)(base);
    }
    function hashByteCodeSegments(casm) {
      const byteCode = casm.bytecode.map((n) => BigInt(n));
      const bytecodeSegmentLengths = casm.bytecode_segment_lengths ?? [];
      let segmentStart = 0;
      const hashLeaves = bytecodeSegmentLengths.flatMap((len) => {
        const segment = byteCode.slice(segmentStart, segmentStart += len);
        return [BigInt(len), (0, import_starknet3.poseidonHashMany)(segment)];
      });
      return 1n + (0, import_starknet3.poseidonHashMany)(hashLeaves);
    }
    function computeCompiledClassHash(casm) {
      const COMPILED_CLASS_VERSION = "COMPILED_CLASS_V1";
      const compiledClassVersion = BigInt(encodeShortString(COMPILED_CLASS_VERSION));
      const externalEntryPointsHash = hashEntryPoint(casm.entry_points_by_type.EXTERNAL);
      const l1Handlers = hashEntryPoint(casm.entry_points_by_type.L1_HANDLER);
      const constructor = hashEntryPoint(casm.entry_points_by_type.CONSTRUCTOR);
      const bytecode = casm.bytecode_segment_lengths ? hashByteCodeSegments(casm) : (0, import_starknet3.poseidonHashMany)(casm.bytecode.map((it) => BigInt(it)));
      return toHex(
        (0, import_starknet3.poseidonHashMany)([
          compiledClassVersion,
          externalEntryPointsHash,
          l1Handlers,
          constructor,
          bytecode
        ])
      );
    }
    function hashEntryPointSierra(data) {
      const base = data.flatMap((it) => {
        return [BigInt(it.selector), BigInt(it.function_idx)];
      });
      return (0, import_starknet3.poseidonHashMany)(base);
    }
    function hashAbi(sierra) {
      const indentString = formatSpaces(stringify2(sierra.abi, null));
      return BigInt(addHexPrefix(starkCurve.keccak(utf8ToArray(indentString)).toString(16)));
    }
    function computeSierraContractClassHash(sierra) {
      const CONTRACT_CLASS_VERSION = "CONTRACT_CLASS_V0.1.0";
      const compiledClassVersion = BigInt(encodeShortString(CONTRACT_CLASS_VERSION));
      const externalEntryPointsHash = hashEntryPointSierra(sierra.entry_points_by_type.EXTERNAL);
      const l1Handlers = hashEntryPointSierra(sierra.entry_points_by_type.L1_HANDLER);
      const constructor = hashEntryPointSierra(sierra.entry_points_by_type.CONSTRUCTOR);
      const abiHash = hashAbi(sierra);
      const sierraProgram = (0, import_starknet3.poseidonHashMany)(sierra.sierra_program.map((it) => BigInt(it)));
      return toHex(
        (0, import_starknet3.poseidonHashMany)([
          compiledClassVersion,
          externalEntryPointsHash,
          l1Handlers,
          constructor,
          abiHash,
          sierraProgram
        ])
      );
    }
    function computeContractClassHash(contract) {
      const compiledContract = isString(contract) ? parse2(contract) : contract;
      if ("sierra_program" in compiledContract) {
        return computeSierraContractClassHash(compiledContract);
      }
      return computeLegacyContractClassHash(compiledContract);
    }
    var stark_exports = {};
    __export(stark_exports, {
      compressProgram: () => compressProgram,
      decompressProgram: () => decompressProgram,
      estimateFeeToBounds: () => estimateFeeToBounds,
      estimatedFeeToMaxFee: () => estimatedFeeToMaxFee,
      formatSignature: () => formatSignature,
      intDAM: () => intDAM,
      makeAddress: () => makeAddress,
      randomAddress: () => randomAddress,
      reduceV2: () => reduceV2,
      signatureToDecimalArray: () => signatureToDecimalArray,
      signatureToHexArray: () => signatureToHexArray,
      toFeeVersion: () => toFeeVersion,
      toTransactionVersion: () => toTransactionVersion,
      v3Details: () => v3Details
    });
    var import_starknet4 = require_lib2();
    var import_pako = require_pako();
    function compressProgram(jsonProgram) {
      const stringified = isString(jsonProgram) ? jsonProgram : stringify2(jsonProgram);
      const compressedProgram = (0, import_pako.gzip)(stringified);
      return btoaUniversal(compressedProgram);
    }
    function decompressProgram(base642) {
      if (Array.isArray(base642))
        return base642;
      const decompressed = arrayBufferToString((0, import_pako.ungzip)(atobUniversal(base642)));
      return parse2(decompressed);
    }
    function randomAddress() {
      const randomKeyPair = import_starknet4.utils.randomPrivateKey();
      return (0, import_starknet4.getStarkKey)(randomKeyPair);
    }
    function makeAddress(input) {
      return addHexPrefix(input).toLowerCase();
    }
    function formatSignature(sig) {
      if (!sig)
        throw Error("formatSignature: provided signature is undefined");
      if (Array.isArray(sig)) {
        return sig.map((it) => toHex(it));
      }
      try {
        const { r, s } = sig;
        return [toHex(r), toHex(s)];
      } catch (e) {
        throw new Error("Signature need to be weierstrass.SignatureType or an array for custom");
      }
    }
    function signatureToDecimalArray(sig) {
      return bigNumberishArrayToDecimalStringArray(formatSignature(sig));
    }
    function signatureToHexArray(sig) {
      return bigNumberishArrayToHexadecimalStringArray(formatSignature(sig));
    }
    function estimatedFeeToMaxFee(estimatedFee, overhead = 50) {
      return addPercent(estimatedFee, overhead);
    }
    function estimateFeeToBounds(estimate, amountOverhead = 50, priceOverhead = 50) {
      if (isBigInt(estimate)) {
        return {
          l2_gas: { max_amount: "0x0", max_price_per_unit: "0x0" },
          l1_gas: { max_amount: "0x0", max_price_per_unit: "0x0" }
        };
      }
      if (typeof estimate.gas_consumed === "undefined" || typeof estimate.gas_price === "undefined") {
        throw Error("estimateFeeToBounds: estimate is undefined");
      }
      const maxUnits = estimate.data_gas_consumed !== void 0 && estimate.data_gas_price !== void 0 ? toHex(addPercent(BigInt(estimate.overall_fee) / BigInt(estimate.gas_price), amountOverhead)) : toHex(addPercent(estimate.gas_consumed, amountOverhead));
      const maxUnitPrice = toHex(addPercent(estimate.gas_price, priceOverhead));
      return {
        l2_gas: { max_amount: "0x0", max_price_per_unit: "0x0" },
        l1_gas: { max_amount: maxUnits, max_price_per_unit: maxUnitPrice }
      };
    }
    function intDAM(dam) {
      if (dam === api_exports.EDataAvailabilityMode.L1)
        return api_exports.EDAMode.L1;
      if (dam === api_exports.EDataAvailabilityMode.L2)
        return api_exports.EDAMode.L2;
      throw Error("EDAM conversion");
    }
    function toTransactionVersion(defaultVersion, providedVersion) {
      const providedVersion0xs = providedVersion ? toHex(providedVersion) : void 0;
      const defaultVersion0xs = toHex(defaultVersion);
      if (providedVersion && !Object.values(api_exports.ETransactionVersion).includes(providedVersion0xs)) {
        throw Error(`providedVersion ${providedVersion} is not ETransactionVersion`);
      }
      if (!Object.values(api_exports.ETransactionVersion).includes(defaultVersion0xs)) {
        throw Error(`defaultVersion ${defaultVersion} is not ETransactionVersion`);
      }
      return providedVersion ? providedVersion0xs : defaultVersion0xs;
    }
    function toFeeVersion(providedVersion) {
      if (!providedVersion)
        return void 0;
      const version = toHex(providedVersion);
      if (version === api_exports.ETransactionVersion.V0)
        return api_exports.ETransactionVersion.F0;
      if (version === api_exports.ETransactionVersion.V1)
        return api_exports.ETransactionVersion.F1;
      if (version === api_exports.ETransactionVersion.V2)
        return api_exports.ETransactionVersion.F2;
      if (version === api_exports.ETransactionVersion.V3)
        return api_exports.ETransactionVersion.F3;
      throw Error(`toFeeVersion: ${version} is not supported`);
    }
    function v3Details(details) {
      return {
        tip: details.tip || 0,
        paymasterData: details.paymasterData || [],
        accountDeploymentData: details.accountDeploymentData || [],
        nonceDataAvailabilityMode: details.nonceDataAvailabilityMode || api_exports.EDataAvailabilityMode.L1,
        feeDataAvailabilityMode: details.feeDataAvailabilityMode || api_exports.EDataAvailabilityMode.L1,
        resourceBounds: details.resourceBounds ?? estimateFeeToBounds(ZERO)
      };
    }
    function reduceV2(providedVersion) {
      if (providedVersion === api_exports.ETransactionVersion.F2)
        return api_exports.ETransactionVersion.F1;
      if (providedVersion === api_exports.ETransactionVersion.V2)
        return api_exports.ETransactionVersion.V1;
      return providedVersion;
    }
    function isSierra(contract) {
      const compiledContract = isString(contract) ? parse2(contract) : contract;
      return "sierra_program" in compiledContract;
    }
    function extractContractHashes(payload) {
      const response = { ...payload };
      if (isSierra(payload.contract)) {
        if (!payload.compiledClassHash && payload.casm) {
          response.compiledClassHash = computeCompiledClassHash(payload.casm);
        }
        if (!response.compiledClassHash)
          throw new Error(
            "Extract compiledClassHash failed, provide (CairoAssembly).casm file or compiledClassHash"
          );
      }
      response.classHash = payload.classHash ?? computeContractClassHash(payload.contract);
      if (!response.classHash)
        throw new Error("Extract classHash failed, provide (CompiledContract).json file or classHash");
      return response;
    }
    function contractClassResponseToLegacyCompiledContract(ccr) {
      if (isSierra(ccr)) {
        throw Error("ContractClassResponse need to be LegacyContractClass (cairo0 response class)");
      }
      const contract = ccr;
      return { ...contract, program: decompressProgram(contract.program) };
    }
    var eth_exports = {};
    __export(eth_exports, {
      ethRandomPrivateKey: () => ethRandomPrivateKey,
      validateAndParseEthAddress: () => validateAndParseEthAddress
    });
    var import_secp256k1 = require_secp256k1();
    function ethRandomPrivateKey() {
      return sanitizeHex(buf2hex(import_secp256k1.secp256k1.utils.randomPrivateKey()));
    }
    function validateAndParseEthAddress(address) {
      assertInRange(address, ZERO, 2n ** 160n - 1n, "Ethereum Address ");
      const result = addHexPrefix(removeHexPrefix(toHex(address)).padStart(40, "0"));
      assert(result.match(/^(0x)?[0-9a-f]{40}$/), "Invalid Ethereum Address Format");
      return result;
    }
    var import_fetch_cookie = __toESM(require_cjs2());
    var import_isomorphic_fetch = __toESM(require_fetch_npm_browserify());
    var fetchPonyfill_default = typeof window !== "undefined" && window.fetch || // use buildin fetch in browser if available
    typeof global !== "undefined" && (0, import_fetch_cookie.default)(global.fetch) || // use buildin fetch in node, react-native and service worker if available
    import_isomorphic_fetch.default;
    var provider_exports = {};
    __export(provider_exports, {
      Block: () => Block,
      createSierraContractClass: () => createSierraContractClass,
      formatHash: () => formatHash,
      getDefaultNodeUrl: () => getDefaultNodeUrl,
      isPendingBlock: () => isPendingBlock,
      isPendingStateUpdate: () => isPendingStateUpdate,
      isPendingTransaction: () => isPendingTransaction,
      isV3Tx: () => isV3Tx,
      isVersion: () => isVersion,
      parseContract: () => parseContract,
      txIdentifier: () => txIdentifier,
      validBlockTags: () => validBlockTags,
      wait: () => wait
    });
    function wait(delay) {
      return new Promise((res) => {
        setTimeout(res, delay);
      });
    }
    function createSierraContractClass(contract) {
      const result = { ...contract };
      delete result.sierra_program_debug_info;
      result.abi = formatSpaces(stringify2(contract.abi));
      result.sierra_program = formatSpaces(stringify2(contract.sierra_program));
      result.sierra_program = compressProgram(result.sierra_program);
      return result;
    }
    function parseContract(contract) {
      const parsedContract = isString(contract) ? parse2(contract) : contract;
      if (!isSierra(contract)) {
        return {
          ...parsedContract,
          ..."program" in parsedContract && { program: compressProgram(parsedContract.program) }
        };
      }
      return createSierraContractClass(parsedContract);
    }
    var getDefaultNodeUrl = (networkName, mute = false) => {
      if (!mute) {
        console.warn("Using default public node url, please provide nodeUrl in provider options!");
      }
      const nodes = RPC_NODES[
        networkName ?? "SN_SEPOLIA"
        /* SN_SEPOLIA */
      ];
      const randIdx = Math.floor(Math.random() * nodes.length);
      return nodes[randIdx];
    };
    function formatHash(hashValue) {
      if (isString(hashValue))
        return hashValue;
      return toHex(hashValue);
    }
    function txIdentifier(txHash, txId) {
      if (!txHash) {
        return `transactionId=${JSON.stringify(txId)}`;
      }
      const hashString = formatHash(txHash);
      return `transactionHash=${hashString}`;
    }
    var validBlockTags = Object.values(BlockTag);
    var Block = class {
      constructor(_identifier) {
        __publicField(this, "hash", null);
        __publicField(this, "number", null);
        __publicField(this, "tag", null);
        __publicField(this, "valueOf", () => this.number);
        __publicField(this, "toString", () => this.hash);
        this.setIdentifier(_identifier);
      }
      setIdentifier(__identifier) {
        if (isString(__identifier)) {
          if (isDecimalString(__identifier)) {
            this.number = parseInt(__identifier, 10);
          } else if (isHex(__identifier)) {
            this.hash = __identifier;
          } else if (validBlockTags.includes(__identifier)) {
            this.tag = __identifier;
          } else {
            throw TypeError(`Block identifier unmanaged: ${__identifier}`);
          }
        } else if (isBigInt(__identifier)) {
          this.hash = toHex(__identifier);
        } else if (isNumber(__identifier)) {
          this.number = __identifier;
        } else {
          this.tag = "pending";
        }
        if (isNumber(this.number) && this.number < 0) {
          throw TypeError(`Block number (${this.number}) can't be negative`);
        }
      }
      // TODO: fix any
      get queryIdentifier() {
        if (this.number !== null) {
          return `blockNumber=${this.number}`;
        }
        if (this.hash !== null) {
          return `blockHash=${this.hash}`;
        }
        return `blockNumber=${this.tag}`;
      }
      // TODO: fix any
      get identifier() {
        if (this.number !== null) {
          return { block_number: this.number };
        }
        if (this.hash !== null) {
          return { block_hash: this.hash };
        }
        return this.tag;
      }
      set identifier(_identifier) {
        this.setIdentifier(_identifier);
      }
    };
    function isV3Tx(details) {
      const version = details.version ? toHex(details.version) : api_exports.ETransactionVersion.V3;
      return version === api_exports.ETransactionVersion.V3 || version === api_exports.ETransactionVersion.F3;
    }
    function isVersion(version, response) {
      const [majorS, minorS] = version.split(".");
      const [majorR, minorR] = response.split(".");
      return majorS === majorR && minorS === minorR;
    }
    function isPendingBlock(response) {
      return response.status === "PENDING";
    }
    function isPendingTransaction(response) {
      return !("block_hash" in response);
    }
    function isPendingStateUpdate(response) {
      return !("block_hash" in response);
    }
    var transaction_exports = {};
    __export(transaction_exports, {
      buildUDCCall: () => buildUDCCall,
      fromCallsToExecuteCalldata: () => fromCallsToExecuteCalldata,
      fromCallsToExecuteCalldataWithNonce: () => fromCallsToExecuteCalldataWithNonce,
      fromCallsToExecuteCalldata_cairo1: () => fromCallsToExecuteCalldata_cairo1,
      getExecuteCalldata: () => getExecuteCalldata,
      getVersionsByType: () => getVersionsByType,
      transformCallsToMulticallArrays: () => transformCallsToMulticallArrays,
      transformCallsToMulticallArrays_cairo1: () => transformCallsToMulticallArrays_cairo1
    });
    var transformCallsToMulticallArrays = (calls) => {
      const callArray = [];
      const calldata = [];
      calls.forEach((call) => {
        const data = CallData.compile(call.calldata || []);
        callArray.push({
          to: toBigInt(call.contractAddress).toString(10),
          selector: toBigInt(getSelectorFromName(call.entrypoint)).toString(10),
          data_offset: calldata.length.toString(),
          data_len: data.length.toString()
        });
        calldata.push(...data);
      });
      return {
        callArray,
        calldata: CallData.compile({ calldata })
      };
    };
    var fromCallsToExecuteCalldata = (calls) => {
      const { callArray, calldata } = transformCallsToMulticallArrays(calls);
      const compiledCalls = CallData.compile({ callArray });
      return [...compiledCalls, ...calldata];
    };
    var fromCallsToExecuteCalldataWithNonce = (calls, nonce) => {
      return [...fromCallsToExecuteCalldata(calls), toBigInt(nonce).toString()];
    };
    var transformCallsToMulticallArrays_cairo1 = (calls) => {
      const callArray = calls.map((call) => ({
        to: toBigInt(call.contractAddress).toString(10),
        selector: toBigInt(getSelectorFromName(call.entrypoint)).toString(10),
        calldata: CallData.compile(call.calldata || [])
      }));
      return callArray;
    };
    var fromCallsToExecuteCalldata_cairo1 = (calls) => {
      const orderCalls = calls.map((call) => ({
        contractAddress: call.contractAddress,
        entrypoint: call.entrypoint,
        calldata: Array.isArray(call.calldata) && "__compiled__" in call.calldata ? call.calldata : CallData.compile(call.calldata)
        // RawArgsObject | RawArgsArray type
      }));
      return CallData.compile({ orderCalls });
    };
    var getExecuteCalldata = (calls, cairoVersion = "0") => {
      if (cairoVersion === "1") {
        return fromCallsToExecuteCalldata_cairo1(calls);
      }
      return fromCallsToExecuteCalldata(calls);
    };
    function buildUDCCall(payload, address) {
      const params = [].concat(payload).map((it) => {
        const {
          classHash,
          salt,
          unique = true,
          constructorCalldata = []
        } = it;
        const compiledConstructorCallData = CallData.compile(constructorCalldata);
        const deploySalt = salt ?? randomAddress();
        return {
          call: {
            contractAddress: UDC.ADDRESS,
            entrypoint: UDC.ENTRYPOINT,
            calldata: [
              classHash,
              deploySalt,
              toCairoBool(unique),
              compiledConstructorCallData.length,
              ...compiledConstructorCallData
            ]
          },
          address: calculateContractAddressFromHash(
            unique ? starkCurve.pedersen(address, deploySalt) : deploySalt,
            classHash,
            compiledConstructorCallData,
            unique ? UDC.ADDRESS : 0
          )
        };
      });
      return {
        calls: params.map((it) => it.call),
        addresses: params.map((it) => it.address)
      };
    }
    function getVersionsByType(versionType) {
      return versionType === "fee" ? {
        v1: api_exports.ETransactionVersion.F1,
        v2: api_exports.ETransactionVersion.F2,
        v3: api_exports.ETransactionVersion.F3
      } : { v1: api_exports.ETransactionVersion.V1, v2: api_exports.ETransactionVersion.V2, v3: api_exports.ETransactionVersion.V3 };
    }
    var defaultOptions = {
      headers: { "Content-Type": "application/json" },
      blockIdentifier: "pending",
      retries: 200
    };
    var RpcChannel = class {
      // behave like web2 rpc and return when tx is processed
      constructor(optionsOrProvider) {
        __publicField(this, "nodeUrl");
        __publicField(this, "headers");
        __publicField(this, "retries");
        __publicField(this, "requestId");
        __publicField(this, "blockIdentifier");
        __publicField(this, "chainId");
        __publicField(this, "specVersion");
        __publicField(this, "waitMode");
        const { nodeUrl, retries, headers, blockIdentifier, chainId, specVersion, waitMode } = optionsOrProvider || {};
        if (Object.values(NetworkName).includes(nodeUrl)) {
          this.nodeUrl = getDefaultNodeUrl(nodeUrl, optionsOrProvider == null ? void 0 : optionsOrProvider.default);
        } else if (nodeUrl) {
          this.nodeUrl = nodeUrl;
        } else {
          this.nodeUrl = getDefaultNodeUrl(void 0, optionsOrProvider == null ? void 0 : optionsOrProvider.default);
        }
        this.retries = retries || defaultOptions.retries;
        this.headers = { ...defaultOptions.headers, ...headers };
        this.blockIdentifier = blockIdentifier || defaultOptions.blockIdentifier;
        this.chainId = chainId;
        this.specVersion = specVersion;
        this.waitMode = waitMode || false;
        this.requestId = 0;
      }
      setChainId(chainId) {
        this.chainId = chainId;
      }
      fetch(method, params, id = 0) {
        const rpcRequestBody = {
          id,
          jsonrpc: "2.0",
          method,
          ...params && { params }
        };
        return fetchPonyfill_default(this.nodeUrl, {
          method: "POST",
          body: stringify2(rpcRequestBody),
          headers: this.headers
        });
      }
      errorHandler(method, params, rpcError, otherError) {
        if (rpcError) {
          const { code, message, data } = rpcError;
          throw new LibraryError(
            `RPC: ${method} with params ${stringify2(params, null, 2)}
 
        ${code}: ${message}: ${stringify2(data)}`
          );
        }
        if (otherError instanceof LibraryError) {
          throw otherError;
        }
        if (otherError) {
          throw Error(otherError.message);
        }
      }
      async fetchEndpoint(method, params) {
        var _a3;
        try {
          const rawResult = await this.fetch(method, params, this.requestId += 1);
          const { error, result } = await rawResult.json();
          this.errorHandler(method, params, error);
          return result;
        } catch (error) {
          this.errorHandler(method, params, (_a3 = error == null ? void 0 : error.response) == null ? void 0 : _a3.data, error);
          throw error;
        }
      }
      async getChainId() {
        this.chainId ?? (this.chainId = await this.fetchEndpoint("starknet_chainId"));
        return this.chainId;
      }
      async getSpecVersion() {
        this.specVersion ?? (this.specVersion = await this.fetchEndpoint("starknet_specVersion"));
        return this.specVersion;
      }
      getNonceForAddress(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getNonce", {
          contract_address,
          block_id
        });
      }
      /**
       * Get the most recent accepted block hash and number
       */
      getBlockLatestAccepted() {
        return this.fetchEndpoint("starknet_blockHashAndNumber");
      }
      /**
       * Get the most recent accepted block number
       * redundant use getBlockLatestAccepted();
       * @returns Number of the latest block
       */
      getBlockNumber() {
        return this.fetchEndpoint("starknet_blockNumber");
      }
      getBlockWithTxHashes(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxHashes", { block_id });
      }
      getBlockWithTxs(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxs", { block_id });
      }
      getBlockStateUpdate(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStateUpdate", { block_id });
      }
      getBlockTransactionsTraces(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_traceBlockTransactions", { block_id });
      }
      getBlockTransactionCount(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockTransactionCount", { block_id });
      }
      getTransactionByHash(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionByHash", {
          transaction_hash
        });
      }
      getTransactionByBlockIdAndIndex(blockIdentifier, index) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", { block_id, index });
      }
      getTransactionReceipt(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionReceipt", { transaction_hash });
      }
      getTransactionTrace(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_traceTransaction", { transaction_hash });
      }
      /**
       * Get the status of a transaction
       */
      getTransactionStatus(transactionHash) {
        const transaction_hash = toHex(transactionHash);
        return this.fetchEndpoint("starknet_getTransactionStatus", { transaction_hash });
      }
      /**
       * @param invocations AccountInvocations
       * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
       * - blockIdentifier<br/>
       * - skipValidate (default false)<br/>
       * - skipFeeCharge (default true)<br/>
       */
      simulateTransaction(invocations, {
        blockIdentifier = this.blockIdentifier,
        skipValidate = true,
        skipFeeCharge = true
      } = {}) {
        const block_id = new Block(blockIdentifier).identifier;
        const simulationFlags = [];
        if (skipValidate)
          simulationFlags.push(rpcspec_0_6_exports.ESimulationFlag.SKIP_VALIDATE);
        if (skipFeeCharge)
          simulationFlags.push(rpcspec_0_6_exports.ESimulationFlag.SKIP_FEE_CHARGE);
        return this.fetchEndpoint("starknet_simulateTransactions", {
          block_id,
          transactions: invocations.map((it) => this.buildTransaction(it)),
          simulation_flags: simulationFlags
        });
      }
      async waitForTransaction(txHash, options) {
        const transactionHash = toHex(txHash);
        let { retries } = this;
        let onchain = false;
        let isErrorState = false;
        const retryInterval = (options == null ? void 0 : options.retryInterval) ?? 5e3;
        const errorStates = (options == null ? void 0 : options.errorStates) ?? [
          rpcspec_0_6_exports.ETransactionStatus.REJECTED
          // TODO: commented out to preserve the long-standing behavior of "reverted" not being treated as an error by default
          // should decide which behavior to keep in the future
          // RPC.ETransactionExecutionStatus.REVERTED,
        ];
        const successStates = (options == null ? void 0 : options.successStates) ?? [
          rpcspec_0_6_exports.ETransactionExecutionStatus.SUCCEEDED,
          rpcspec_0_6_exports.ETransactionStatus.ACCEPTED_ON_L2,
          rpcspec_0_6_exports.ETransactionStatus.ACCEPTED_ON_L1
        ];
        let txStatus;
        while (!onchain) {
          await wait(retryInterval);
          try {
            txStatus = await this.getTransactionStatus(transactionHash);
            const executionStatus = txStatus.execution_status;
            const finalityStatus = txStatus.finality_status;
            if (!finalityStatus) {
              const error = new Error("waiting for transaction status");
              throw error;
            }
            if (errorStates.includes(executionStatus) || errorStates.includes(finalityStatus)) {
              const message = `${executionStatus}: ${finalityStatus}`;
              const error = new Error(message);
              error.response = txStatus;
              isErrorState = true;
              throw error;
            } else if (successStates.includes(executionStatus) || successStates.includes(finalityStatus)) {
              onchain = true;
            }
          } catch (error) {
            if (error instanceof Error && isErrorState) {
              throw error;
            }
            if (retries <= 0) {
              throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
            }
          }
          retries -= 1;
        }
        let txReceipt = null;
        while (txReceipt === null) {
          try {
            txReceipt = await this.getTransactionReceipt(transactionHash);
          } catch (error) {
            if (retries <= 0) {
              throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
            }
          }
          retries -= 1;
          await wait(retryInterval);
        }
        return txReceipt;
      }
      getStorageAt(contractAddress, key, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const parsedKey = toStorageKey(key);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStorageAt", {
          contract_address,
          key: parsedKey,
          block_id
        });
      }
      getClassHashAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassHashAt", {
          block_id,
          contract_address
        });
      }
      getClass(classHash, blockIdentifier = this.blockIdentifier) {
        const class_hash = toHex(classHash);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClass", {
          class_hash,
          block_id
        });
      }
      getClassAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassAt", {
          block_id,
          contract_address
        });
      }
      async getEstimateFee(invocations, { blockIdentifier = this.blockIdentifier, skipValidate = true }) {
        const block_id = new Block(blockIdentifier).identifier;
        let flags = {};
        if (!isVersion("0.5", await this.getSpecVersion())) {
          flags = {
            simulation_flags: skipValidate ? [rpcspec_0_6_exports.ESimulationFlag.SKIP_VALIDATE] : []
          };
        }
        return this.fetchEndpoint("starknet_estimateFee", {
          request: invocations.map((it) => this.buildTransaction(it, "fee")),
          block_id,
          ...flags
        });
      }
      async invoke(functionInvocation, details) {
        let promise;
        if (!isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
            invoke_transaction: {
              sender_address: functionInvocation.contractAddress,
              calldata: CallData.toHex(functionInvocation.calldata),
              type: rpcspec_0_6_exports.ETransactionType.INVOKE,
              max_fee: toHex(details.maxFee || 0),
              version: rpcspec_0_6_exports.ETransactionVersion.V1,
              signature: signatureToHexArray(functionInvocation.signature),
              nonce: toHex(details.nonce)
            }
          });
        } else {
          promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
            invoke_transaction: {
              type: rpcspec_0_6_exports.ETransactionType.INVOKE,
              sender_address: functionInvocation.contractAddress,
              calldata: CallData.toHex(functionInvocation.calldata),
              version: rpcspec_0_6_exports.ETransactionVersion.V3,
              signature: signatureToHexArray(functionInvocation.signature),
              nonce: toHex(details.nonce),
              resource_bounds: details.resourceBounds,
              tip: toHex(details.tip),
              paymaster_data: details.paymasterData.map((it) => toHex(it)),
              account_deployment_data: details.accountDeploymentData.map((it) => toHex(it)),
              nonce_data_availability_mode: details.nonceDataAvailabilityMode,
              fee_data_availability_mode: details.feeDataAvailabilityMode
            }
          });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
      }
      async declare({ contract, signature, senderAddress, compiledClassHash }, details) {
        let promise;
        if (!isSierra(contract) && !isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
            declare_transaction: {
              type: rpcspec_0_6_exports.ETransactionType.DECLARE,
              contract_class: {
                program: contract.program,
                entry_points_by_type: contract.entry_points_by_type,
                abi: contract.abi
              },
              version: rpcspec_0_6_exports.ETransactionVersion.V1,
              max_fee: toHex(details.maxFee || 0),
              signature: signatureToHexArray(signature),
              sender_address: senderAddress,
              nonce: toHex(details.nonce)
            }
          });
        } else if (isSierra(contract) && !isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
            declare_transaction: {
              type: rpcspec_0_6_exports.ETransactionType.DECLARE,
              contract_class: {
                sierra_program: decompressProgram(contract.sierra_program),
                contract_class_version: contract.contract_class_version,
                entry_points_by_type: contract.entry_points_by_type,
                abi: contract.abi
              },
              compiled_class_hash: compiledClassHash || "",
              version: rpcspec_0_6_exports.ETransactionVersion.V2,
              max_fee: toHex(details.maxFee || 0),
              signature: signatureToHexArray(signature),
              sender_address: senderAddress,
              nonce: toHex(details.nonce)
            }
          });
        } else if (isSierra(contract) && isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
            declare_transaction: {
              type: rpcspec_0_6_exports.ETransactionType.DECLARE,
              sender_address: senderAddress,
              compiled_class_hash: compiledClassHash || "",
              version: rpcspec_0_6_exports.ETransactionVersion.V3,
              signature: signatureToHexArray(signature),
              nonce: toHex(details.nonce),
              contract_class: {
                sierra_program: decompressProgram(contract.sierra_program),
                contract_class_version: contract.contract_class_version,
                entry_points_by_type: contract.entry_points_by_type,
                abi: contract.abi
              },
              resource_bounds: details.resourceBounds,
              tip: toHex(details.tip),
              paymaster_data: details.paymasterData.map((it) => toHex(it)),
              account_deployment_data: details.accountDeploymentData.map((it) => toHex(it)),
              nonce_data_availability_mode: details.nonceDataAvailabilityMode,
              fee_data_availability_mode: details.feeDataAvailabilityMode
            }
          });
        } else {
          throw Error("declare unspotted parameters");
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
      }
      async deployAccount({ classHash, constructorCalldata, addressSalt, signature }, details) {
        let promise;
        if (!isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
            deploy_account_transaction: {
              constructor_calldata: CallData.toHex(constructorCalldata || []),
              class_hash: toHex(classHash),
              contract_address_salt: toHex(addressSalt || 0),
              type: rpcspec_0_6_exports.ETransactionType.DEPLOY_ACCOUNT,
              max_fee: toHex(details.maxFee || 0),
              version: rpcspec_0_6_exports.ETransactionVersion.V1,
              signature: signatureToHexArray(signature),
              nonce: toHex(details.nonce)
            }
          });
        } else {
          promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
            deploy_account_transaction: {
              type: rpcspec_0_6_exports.ETransactionType.DEPLOY_ACCOUNT,
              version: rpcspec_0_6_exports.ETransactionVersion.V3,
              signature: signatureToHexArray(signature),
              nonce: toHex(details.nonce),
              contract_address_salt: toHex(addressSalt || 0),
              constructor_calldata: CallData.toHex(constructorCalldata || []),
              class_hash: toHex(classHash),
              resource_bounds: details.resourceBounds,
              tip: toHex(details.tip),
              paymaster_data: details.paymasterData.map((it) => toHex(it)),
              nonce_data_availability_mode: details.nonceDataAvailabilityMode,
              fee_data_availability_mode: details.feeDataAvailabilityMode
            }
          });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
      }
      callContract(call, blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_call", {
          request: {
            contract_address: call.contractAddress,
            entry_point_selector: getSelectorFromName(call.entrypoint),
            calldata: CallData.toHex(call.calldata)
          },
          block_id
        });
      }
      /**
       * NEW: Estimate the fee for a message from L1
       * @param message Message From L1
       */
      estimateMessageFee(message, blockIdentifier = this.blockIdentifier) {
        const { from_address, to_address, entry_point_selector, payload } = message;
        const formattedMessage = {
          from_address: validateAndParseEthAddress(from_address),
          to_address: toHex(to_address),
          entry_point_selector: getSelector(entry_point_selector),
          payload: getHexStringArray(payload)
        };
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_estimateMessageFee", {
          message: formattedMessage,
          block_id
        });
      }
      /**
       * Returns an object about the sync status, or false if the node is not synching
       * @returns Object with the stats data
       */
      getSyncingStats() {
        return this.fetchEndpoint("starknet_syncing");
      }
      /**
       * Returns all events matching the given filter
       * @returns events and the pagination of the events
       */
      getEvents(eventFilter) {
        return this.fetchEndpoint("starknet_getEvents", { filter: eventFilter });
      }
      buildTransaction(invocation, versionType) {
        const defaultVersions = getVersionsByType(versionType);
        let details;
        if (!isV3Tx(invocation)) {
          details = {
            signature: signatureToHexArray(invocation.signature),
            nonce: toHex(invocation.nonce),
            max_fee: toHex(invocation.maxFee || 0)
          };
        } else {
          details = {
            signature: signatureToHexArray(invocation.signature),
            nonce: toHex(invocation.nonce),
            resource_bounds: invocation.resourceBounds,
            tip: toHex(invocation.tip),
            paymaster_data: invocation.paymasterData.map((it) => toHex(it)),
            nonce_data_availability_mode: invocation.nonceDataAvailabilityMode,
            fee_data_availability_mode: invocation.feeDataAvailabilityMode,
            account_deployment_data: invocation.accountDeploymentData.map((it) => toHex(it))
          };
        }
        if (invocation.type === "INVOKE_FUNCTION") {
          return {
            // v0 v1 v3
            type: rpcspec_0_6_exports.ETransactionType.INVOKE,
            sender_address: invocation.contractAddress,
            calldata: CallData.toHex(invocation.calldata),
            version: toHex(invocation.version || defaultVersions.v3),
            ...details
          };
        }
        if (invocation.type === "DECLARE") {
          if (!isSierra(invocation.contract)) {
            return {
              type: invocation.type,
              contract_class: invocation.contract,
              sender_address: invocation.senderAddress,
              version: toHex(invocation.version || defaultVersions.v1),
              ...details
            };
          }
          return {
            // Cairo 1 - v2 v3
            type: invocation.type,
            contract_class: {
              ...invocation.contract,
              sierra_program: decompressProgram(invocation.contract.sierra_program)
            },
            compiled_class_hash: invocation.compiledClassHash || "",
            sender_address: invocation.senderAddress,
            version: toHex(invocation.version || defaultVersions.v3),
            ...details
          };
        }
        if (invocation.type === "DEPLOY_ACCOUNT") {
          const { account_deployment_data, ...restDetails } = details;
          return {
            type: invocation.type,
            constructor_calldata: CallData.toHex(invocation.constructorCalldata || []),
            class_hash: toHex(invocation.classHash),
            contract_address_salt: toHex(invocation.addressSalt || 0),
            version: toHex(invocation.version || defaultVersions.v3),
            ...restDetails
          };
        }
        throw Error("RPC buildTransaction received unknown TransactionType");
      }
    };
    var rpc_0_7_exports = {};
    __export(rpc_0_7_exports, {
      RpcChannel: () => RpcChannel2
    });
    var defaultOptions2 = {
      headers: { "Content-Type": "application/json" },
      blockIdentifier: "pending",
      retries: 200
    };
    var RpcChannel2 = class {
      // behave like web2 rpc and return when tx is processed
      constructor(optionsOrProvider) {
        __publicField(this, "nodeUrl");
        __publicField(this, "headers");
        __publicField(this, "retries");
        __publicField(this, "requestId");
        __publicField(this, "blockIdentifier");
        __publicField(this, "chainId");
        __publicField(this, "specVersion");
        __publicField(this, "waitMode");
        const { nodeUrl, retries, headers, blockIdentifier, chainId, specVersion, waitMode } = optionsOrProvider || {};
        if (Object.values(NetworkName).includes(nodeUrl)) {
          this.nodeUrl = getDefaultNodeUrl(nodeUrl, optionsOrProvider == null ? void 0 : optionsOrProvider.default);
        } else if (nodeUrl) {
          this.nodeUrl = nodeUrl;
        } else {
          this.nodeUrl = getDefaultNodeUrl(void 0, optionsOrProvider == null ? void 0 : optionsOrProvider.default);
        }
        this.retries = retries || defaultOptions2.retries;
        this.headers = { ...defaultOptions2.headers, ...headers };
        this.blockIdentifier = blockIdentifier || defaultOptions2.blockIdentifier;
        this.chainId = chainId;
        this.specVersion = specVersion;
        this.waitMode = waitMode || false;
        this.requestId = 0;
      }
      setChainId(chainId) {
        this.chainId = chainId;
      }
      fetch(method, params, id = 0) {
        const rpcRequestBody = {
          id,
          jsonrpc: "2.0",
          method,
          ...params && { params }
        };
        return fetchPonyfill_default(this.nodeUrl, {
          method: "POST",
          body: stringify2(rpcRequestBody),
          headers: this.headers
        });
      }
      errorHandler(method, params, rpcError, otherError) {
        if (rpcError) {
          const { code, message, data } = rpcError;
          throw new LibraryError(
            `RPC: ${method} with params ${stringify2(params, null, 2)}
 
        ${code}: ${message}: ${stringify2(data)}`
          );
        }
        if (otherError instanceof LibraryError) {
          throw otherError;
        }
        if (otherError) {
          throw Error(otherError.message);
        }
      }
      async fetchEndpoint(method, params) {
        var _a3;
        try {
          const rawResult = await this.fetch(method, params, this.requestId += 1);
          const { error, result } = await rawResult.json();
          this.errorHandler(method, params, error);
          return result;
        } catch (error) {
          this.errorHandler(method, params, (_a3 = error == null ? void 0 : error.response) == null ? void 0 : _a3.data, error);
          throw error;
        }
      }
      async getChainId() {
        this.chainId ?? (this.chainId = await this.fetchEndpoint("starknet_chainId"));
        return this.chainId;
      }
      async getSpecVersion() {
        this.specVersion ?? (this.specVersion = await this.fetchEndpoint("starknet_specVersion"));
        return this.specVersion;
      }
      getNonceForAddress(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getNonce", {
          contract_address,
          block_id
        });
      }
      /**
       * Get the most recent accepted block hash and number
       */
      getBlockLatestAccepted() {
        return this.fetchEndpoint("starknet_blockHashAndNumber");
      }
      /**
       * Get the most recent accepted block number
       * redundant use getBlockLatestAccepted();
       * @returns Number of the latest block
       */
      getBlockNumber() {
        return this.fetchEndpoint("starknet_blockNumber");
      }
      getBlockWithTxHashes(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxHashes", { block_id });
      }
      getBlockWithTxs(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxs", { block_id });
      }
      getBlockWithReceipts(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithReceipts", { block_id });
      }
      getBlockStateUpdate(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStateUpdate", { block_id });
      }
      getBlockTransactionsTraces(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_traceBlockTransactions", { block_id });
      }
      getBlockTransactionCount(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockTransactionCount", { block_id });
      }
      getTransactionByHash(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionByHash", {
          transaction_hash
        });
      }
      getTransactionByBlockIdAndIndex(blockIdentifier, index) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", { block_id, index });
      }
      getTransactionReceipt(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionReceipt", { transaction_hash });
      }
      getTransactionTrace(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_traceTransaction", { transaction_hash });
      }
      /**
       * Get the status of a transaction
       */
      getTransactionStatus(transactionHash) {
        const transaction_hash = toHex(transactionHash);
        return this.fetchEndpoint("starknet_getTransactionStatus", { transaction_hash });
      }
      /**
       * @param invocations AccountInvocations
       * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
       * - blockIdentifier<br/>
       * - skipValidate (default false)<br/>
       * - skipFeeCharge (default true)<br/>
       */
      simulateTransaction(invocations, {
        blockIdentifier = this.blockIdentifier,
        skipValidate = true,
        skipFeeCharge = true
      } = {}) {
        const block_id = new Block(blockIdentifier).identifier;
        const simulationFlags = [];
        if (skipValidate)
          simulationFlags.push(RPCSPEC07.ESimulationFlag.SKIP_VALIDATE);
        if (skipFeeCharge)
          simulationFlags.push(RPCSPEC07.ESimulationFlag.SKIP_FEE_CHARGE);
        return this.fetchEndpoint("starknet_simulateTransactions", {
          block_id,
          transactions: invocations.map((it) => this.buildTransaction(it)),
          simulation_flags: simulationFlags
        });
      }
      async waitForTransaction(txHash, options) {
        const transactionHash = toHex(txHash);
        let { retries } = this;
        let onchain = false;
        let isErrorState = false;
        const retryInterval = (options == null ? void 0 : options.retryInterval) ?? 5e3;
        const errorStates = (options == null ? void 0 : options.errorStates) ?? [
          RPCSPEC07.ETransactionStatus.REJECTED
          // TODO: commented out to preserve the long-standing behavior of "reverted" not being treated as an error by default
          // should decide which behavior to keep in the future
          // RPC.ETransactionExecutionStatus.REVERTED,
        ];
        const successStates = (options == null ? void 0 : options.successStates) ?? [
          RPCSPEC07.ETransactionExecutionStatus.SUCCEEDED,
          RPCSPEC07.ETransactionStatus.ACCEPTED_ON_L2,
          RPCSPEC07.ETransactionStatus.ACCEPTED_ON_L1
        ];
        let txStatus;
        while (!onchain) {
          await wait(retryInterval);
          try {
            txStatus = await this.getTransactionStatus(transactionHash);
            const executionStatus = txStatus.execution_status;
            const finalityStatus = txStatus.finality_status;
            if (!finalityStatus) {
              const error = new Error("waiting for transaction status");
              throw error;
            }
            if (errorStates.includes(executionStatus) || errorStates.includes(finalityStatus)) {
              const message = `${executionStatus}: ${finalityStatus}`;
              const error = new Error(message);
              error.response = txStatus;
              isErrorState = true;
              throw error;
            } else if (successStates.includes(executionStatus) || successStates.includes(finalityStatus)) {
              onchain = true;
            }
          } catch (error) {
            if (error instanceof Error && isErrorState) {
              throw error;
            }
            if (retries <= 0) {
              throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
            }
          }
          retries -= 1;
        }
        let txReceipt = null;
        while (txReceipt === null) {
          try {
            txReceipt = await this.getTransactionReceipt(transactionHash);
          } catch (error) {
            if (retries <= 0) {
              throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
            }
          }
          retries -= 1;
          await wait(retryInterval);
        }
        return txReceipt;
      }
      getStorageAt(contractAddress, key, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const parsedKey = toStorageKey(key);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStorageAt", {
          contract_address,
          key: parsedKey,
          block_id
        });
      }
      getClassHashAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassHashAt", {
          block_id,
          contract_address
        });
      }
      getClass(classHash, blockIdentifier = this.blockIdentifier) {
        const class_hash = toHex(classHash);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClass", {
          class_hash,
          block_id
        });
      }
      getClassAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassAt", {
          block_id,
          contract_address
        });
      }
      async getEstimateFee(invocations, { blockIdentifier = this.blockIdentifier, skipValidate = true }) {
        const block_id = new Block(blockIdentifier).identifier;
        let flags = {};
        if (!isVersion("0.5", await this.getSpecVersion())) {
          flags = {
            simulation_flags: skipValidate ? [RPCSPEC07.ESimulationFlag.SKIP_VALIDATE] : []
          };
        }
        return this.fetchEndpoint("starknet_estimateFee", {
          request: invocations.map((it) => this.buildTransaction(it, "fee")),
          block_id,
          ...flags
        });
      }
      async invoke(functionInvocation, details) {
        let promise;
        if (!isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
            invoke_transaction: {
              sender_address: functionInvocation.contractAddress,
              calldata: CallData.toHex(functionInvocation.calldata),
              type: RPCSPEC07.ETransactionType.INVOKE,
              max_fee: toHex(details.maxFee || 0),
              version: RPCSPEC07.ETransactionVersion.V1,
              signature: signatureToHexArray(functionInvocation.signature),
              nonce: toHex(details.nonce)
            }
          });
        } else {
          promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
            invoke_transaction: {
              type: RPCSPEC07.ETransactionType.INVOKE,
              sender_address: functionInvocation.contractAddress,
              calldata: CallData.toHex(functionInvocation.calldata),
              version: RPCSPEC07.ETransactionVersion.V3,
              signature: signatureToHexArray(functionInvocation.signature),
              nonce: toHex(details.nonce),
              resource_bounds: details.resourceBounds,
              tip: toHex(details.tip),
              paymaster_data: details.paymasterData.map((it) => toHex(it)),
              account_deployment_data: details.accountDeploymentData.map((it) => toHex(it)),
              nonce_data_availability_mode: details.nonceDataAvailabilityMode,
              fee_data_availability_mode: details.feeDataAvailabilityMode
            }
          });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
      }
      async declare({ contract, signature, senderAddress, compiledClassHash }, details) {
        let promise;
        if (!isSierra(contract) && !isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
            declare_transaction: {
              type: RPCSPEC07.ETransactionType.DECLARE,
              contract_class: {
                program: contract.program,
                entry_points_by_type: contract.entry_points_by_type,
                abi: contract.abi
              },
              version: RPCSPEC07.ETransactionVersion.V1,
              max_fee: toHex(details.maxFee || 0),
              signature: signatureToHexArray(signature),
              sender_address: senderAddress,
              nonce: toHex(details.nonce)
            }
          });
        } else if (isSierra(contract) && !isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
            declare_transaction: {
              type: RPCSPEC07.ETransactionType.DECLARE,
              contract_class: {
                sierra_program: decompressProgram(contract.sierra_program),
                contract_class_version: contract.contract_class_version,
                entry_points_by_type: contract.entry_points_by_type,
                abi: contract.abi
              },
              compiled_class_hash: compiledClassHash || "",
              version: RPCSPEC07.ETransactionVersion.V2,
              max_fee: toHex(details.maxFee || 0),
              signature: signatureToHexArray(signature),
              sender_address: senderAddress,
              nonce: toHex(details.nonce)
            }
          });
        } else if (isSierra(contract) && isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
            declare_transaction: {
              type: RPCSPEC07.ETransactionType.DECLARE,
              sender_address: senderAddress,
              compiled_class_hash: compiledClassHash || "",
              version: RPCSPEC07.ETransactionVersion.V3,
              signature: signatureToHexArray(signature),
              nonce: toHex(details.nonce),
              contract_class: {
                sierra_program: decompressProgram(contract.sierra_program),
                contract_class_version: contract.contract_class_version,
                entry_points_by_type: contract.entry_points_by_type,
                abi: contract.abi
              },
              resource_bounds: details.resourceBounds,
              tip: toHex(details.tip),
              paymaster_data: details.paymasterData.map((it) => toHex(it)),
              account_deployment_data: details.accountDeploymentData.map((it) => toHex(it)),
              nonce_data_availability_mode: details.nonceDataAvailabilityMode,
              fee_data_availability_mode: details.feeDataAvailabilityMode
            }
          });
        } else {
          throw Error("declare unspotted parameters");
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
      }
      async deployAccount({ classHash, constructorCalldata, addressSalt, signature }, details) {
        let promise;
        if (!isV3Tx(details)) {
          promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
            deploy_account_transaction: {
              constructor_calldata: CallData.toHex(constructorCalldata || []),
              class_hash: toHex(classHash),
              contract_address_salt: toHex(addressSalt || 0),
              type: RPCSPEC07.ETransactionType.DEPLOY_ACCOUNT,
              max_fee: toHex(details.maxFee || 0),
              version: RPCSPEC07.ETransactionVersion.V1,
              signature: signatureToHexArray(signature),
              nonce: toHex(details.nonce)
            }
          });
        } else {
          promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
            deploy_account_transaction: {
              type: RPCSPEC07.ETransactionType.DEPLOY_ACCOUNT,
              version: RPCSPEC07.ETransactionVersion.V3,
              signature: signatureToHexArray(signature),
              nonce: toHex(details.nonce),
              contract_address_salt: toHex(addressSalt || 0),
              constructor_calldata: CallData.toHex(constructorCalldata || []),
              class_hash: toHex(classHash),
              resource_bounds: details.resourceBounds,
              tip: toHex(details.tip),
              paymaster_data: details.paymasterData.map((it) => toHex(it)),
              nonce_data_availability_mode: details.nonceDataAvailabilityMode,
              fee_data_availability_mode: details.feeDataAvailabilityMode
            }
          });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
      }
      callContract(call, blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_call", {
          request: {
            contract_address: call.contractAddress,
            entry_point_selector: getSelectorFromName(call.entrypoint),
            calldata: CallData.toHex(call.calldata)
          },
          block_id
        });
      }
      /**
       * NEW: Estimate the fee for a message from L1
       * @param message Message From L1
       */
      estimateMessageFee(message, blockIdentifier = this.blockIdentifier) {
        const { from_address, to_address, entry_point_selector, payload } = message;
        const formattedMessage = {
          from_address: validateAndParseEthAddress(from_address),
          to_address: toHex(to_address),
          entry_point_selector: getSelector(entry_point_selector),
          payload: getHexStringArray(payload)
        };
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_estimateMessageFee", {
          message: formattedMessage,
          block_id
        });
      }
      /**
       * Returns an object about the sync status, or false if the node is not synching
       * @returns Object with the stats data
       */
      getSyncingStats() {
        return this.fetchEndpoint("starknet_syncing");
      }
      /**
       * Returns all events matching the given filter
       * @returns events and the pagination of the events
       */
      getEvents(eventFilter) {
        return this.fetchEndpoint("starknet_getEvents", { filter: eventFilter });
      }
      buildTransaction(invocation, versionType) {
        const defaultVersions = getVersionsByType(versionType);
        let details;
        if (!isV3Tx(invocation)) {
          details = {
            signature: signatureToHexArray(invocation.signature),
            nonce: toHex(invocation.nonce),
            max_fee: toHex(invocation.maxFee || 0)
          };
        } else {
          details = {
            signature: signatureToHexArray(invocation.signature),
            nonce: toHex(invocation.nonce),
            resource_bounds: invocation.resourceBounds,
            tip: toHex(invocation.tip),
            paymaster_data: invocation.paymasterData.map((it) => toHex(it)),
            nonce_data_availability_mode: invocation.nonceDataAvailabilityMode,
            fee_data_availability_mode: invocation.feeDataAvailabilityMode,
            account_deployment_data: invocation.accountDeploymentData.map((it) => toHex(it))
          };
        }
        if (invocation.type === "INVOKE_FUNCTION") {
          return {
            // v0 v1 v3
            type: RPCSPEC07.ETransactionType.INVOKE,
            sender_address: invocation.contractAddress,
            calldata: CallData.toHex(invocation.calldata),
            version: toHex(invocation.version || defaultVersions.v3),
            ...details
          };
        }
        if (invocation.type === "DECLARE") {
          if (!isSierra(invocation.contract)) {
            return {
              type: invocation.type,
              contract_class: invocation.contract,
              sender_address: invocation.senderAddress,
              version: toHex(invocation.version || defaultVersions.v1),
              ...details
            };
          }
          return {
            // Cairo 1 - v2 v3
            type: invocation.type,
            contract_class: {
              ...invocation.contract,
              sierra_program: decompressProgram(invocation.contract.sierra_program)
            },
            compiled_class_hash: invocation.compiledClassHash || "",
            sender_address: invocation.senderAddress,
            version: toHex(invocation.version || defaultVersions.v3),
            ...details
          };
        }
        if (invocation.type === "DEPLOY_ACCOUNT") {
          const { account_deployment_data, ...restDetails } = details;
          return {
            type: invocation.type,
            constructor_calldata: CallData.toHex(invocation.constructorCalldata || []),
            class_hash: toHex(invocation.classHash),
            contract_address_salt: toHex(invocation.addressSalt || 0),
            version: toHex(invocation.version || defaultVersions.v3),
            ...restDetails
          };
        }
        throw Error("RPC buildTransaction received unknown TransactionType");
      }
    };
    var RPCResponseParser = class {
      constructor(margin) {
        __publicField(this, "margin");
        this.margin = margin;
      }
      estimatedFeeToMaxFee(estimatedFee) {
        var _a3;
        return estimatedFeeToMaxFee(estimatedFee, (_a3 = this.margin) == null ? void 0 : _a3.maxFee);
      }
      estimateFeeToBounds(estimate) {
        var _a3, _b;
        return estimateFeeToBounds(
          estimate,
          (_a3 = this.margin) == null ? void 0 : _a3.l1BoundMaxAmount,
          (_b = this.margin) == null ? void 0 : _b.l1BoundMaxPricePerUnit
        );
      }
      parseGetBlockResponse(res) {
        return { status: "PENDING", ...res };
      }
      parseTransactionReceipt(res) {
        if ("actual_fee" in res && isString(res.actual_fee)) {
          return {
            ...res,
            actual_fee: {
              amount: res.actual_fee,
              unit: "FRI"
            }
          };
        }
        return res;
      }
      parseFeeEstimateResponse(res) {
        const val = res[0];
        return {
          overall_fee: toBigInt(val.overall_fee),
          gas_consumed: toBigInt(val.gas_consumed),
          gas_price: toBigInt(val.gas_price),
          unit: val.unit,
          suggestedMaxFee: this.estimatedFeeToMaxFee(val.overall_fee),
          resourceBounds: this.estimateFeeToBounds(val),
          data_gas_consumed: val.data_gas_consumed ? toBigInt(val.data_gas_consumed) : 0n,
          data_gas_price: val.data_gas_price ? toBigInt(val.data_gas_price) : 0n
        };
      }
      parseFeeEstimateBulkResponse(res) {
        return res.map((val) => ({
          overall_fee: toBigInt(val.overall_fee),
          gas_consumed: toBigInt(val.gas_consumed),
          gas_price: toBigInt(val.gas_price),
          unit: val.unit,
          suggestedMaxFee: this.estimatedFeeToMaxFee(val.overall_fee),
          resourceBounds: this.estimateFeeToBounds(val),
          data_gas_consumed: val.data_gas_consumed ? toBigInt(val.data_gas_consumed) : 0n,
          data_gas_price: val.data_gas_price ? toBigInt(val.data_gas_price) : 0n
        }));
      }
      parseSimulateTransactionResponse(res) {
        return res.map((it) => {
          return {
            ...it,
            suggestedMaxFee: this.estimatedFeeToMaxFee(it.fee_estimation.overall_fee),
            resourceBounds: this.estimateFeeToBounds(it.fee_estimation)
          };
        });
      }
      parseContractClassResponse(res) {
        return {
          ...res,
          abi: isString(res.abi) ? JSON.parse(res.abi) : res.abi
        };
      }
      parseL1GasPriceResponse(res) {
        return res.l1_gas_price.price_in_wei;
      }
    };
    var ReceiptTx = class _ReceiptTx {
      constructor(receipt) {
        __publicField(this, "statusReceipt");
        __publicField(this, "value");
        [this.statusReceipt, this.value] = _ReceiptTx.isSuccess(receipt) ? ["success", receipt] : _ReceiptTx.isReverted(receipt) ? ["reverted", receipt] : _ReceiptTx.isRejected(receipt) ? ["rejected", receipt] : ["error", new Error("Unknown response type")];
        for (const [key] of Object.entries(this)) {
          Object.defineProperty(this, key, {
            enumerable: false
          });
        }
        for (const [key, value] of Object.entries(receipt)) {
          Object.defineProperty(this, key, {
            enumerable: true,
            writable: false,
            value
          });
        }
      }
      match(callbacks) {
        if (this.statusReceipt in callbacks) {
          return callbacks[this.statusReceipt](this.value);
        }
        return callbacks._();
      }
      isSuccess() {
        return this.statusReceipt === "success";
      }
      isReverted() {
        return this.statusReceipt === "reverted";
      }
      isRejected() {
        return this.statusReceipt === "rejected";
      }
      isError() {
        return this.statusReceipt === "error";
      }
      static isSuccess(transactionReceipt) {
        return transactionReceipt.execution_status === "SUCCEEDED";
      }
      static isReverted(transactionReceipt) {
        return transactionReceipt.execution_status === "REVERTED";
      }
      static isRejected(transactionReceipt) {
        return transactionReceipt.status === "REJECTED";
      }
    };
    var RpcProvider = class {
      constructor(optionsOrProvider) {
        __publicField(this, "responseParser");
        __publicField(this, "channel");
        __publicField(this, "getStateUpdate", this.getBlockStateUpdate);
        if (optionsOrProvider && "channel" in optionsOrProvider) {
          this.channel = optionsOrProvider.channel;
          this.responseParser = optionsOrProvider.responseParser;
        } else {
          this.channel = new RpcChannel2({ ...optionsOrProvider, waitMode: false });
          this.responseParser = new RPCResponseParser(optionsOrProvider == null ? void 0 : optionsOrProvider.feeMarginPercentage);
        }
      }
      fetch(method, params, id = 0) {
        return this.channel.fetch(method, params, id);
      }
      async getChainId() {
        return this.channel.getChainId();
      }
      async getSpecVersion() {
        return this.channel.getSpecVersion();
      }
      async getNonceForAddress(contractAddress, blockIdentifier) {
        return this.channel.getNonceForAddress(contractAddress, blockIdentifier);
      }
      async getBlock(blockIdentifier) {
        return this.channel.getBlockWithTxHashes(blockIdentifier).then(this.responseParser.parseGetBlockResponse);
      }
      /**
       * Get the most recent accepted block hash and number
       */
      async getBlockLatestAccepted() {
        return this.channel.getBlockLatestAccepted();
      }
      /**
       * Get the most recent accepted block number
       * redundant use getBlockLatestAccepted();
       * @returns Number of the latest block
       */
      async getBlockNumber() {
        return this.channel.getBlockNumber();
      }
      async getBlockWithTxHashes(blockIdentifier) {
        return this.channel.getBlockWithTxHashes(blockIdentifier);
      }
      async getBlockWithTxs(blockIdentifier) {
        return this.channel.getBlockWithTxs(blockIdentifier);
      }
      async getL1GasPrice(blockIdentifier) {
        return this.channel.getBlockWithTxHashes(blockIdentifier).then(this.responseParser.parseL1GasPriceResponse);
      }
      async getBlockWithReceipts(blockIdentifier) {
        if (this.channel instanceof rpc_0_6_exports.RpcChannel)
          throw new LibraryError("Unsupported method for RPC version");
        return this.channel.getBlockWithReceipts(blockIdentifier);
      }
      async getBlockStateUpdate(blockIdentifier) {
        return this.channel.getBlockStateUpdate(blockIdentifier);
      }
      async getBlockTransactionsTraces(blockIdentifier) {
        return this.channel.getBlockTransactionsTraces(blockIdentifier);
      }
      async getBlockTransactionCount(blockIdentifier) {
        return this.channel.getBlockTransactionCount(blockIdentifier);
      }
      /**
       * Return transactions from pending block
       * @deprecated Instead use getBlock(BlockTag.pending); (will be removed in next minor version)
       * Utility method, same result can be achieved using getBlockWithTxHashes(BlockTag.pending);
       */
      async getPendingTransactions() {
        const { transactions } = await this.getBlockWithTxHashes(
          "pending"
          /* pending */
        ).then(
          this.responseParser.parseGetBlockResponse
        );
        return Promise.all(transactions.map((it) => this.getTransactionByHash(it)));
      }
      async getTransaction(txHash) {
        return this.channel.getTransactionByHash(txHash);
      }
      async getTransactionByHash(txHash) {
        return this.channel.getTransactionByHash(txHash);
      }
      async getTransactionByBlockIdAndIndex(blockIdentifier, index) {
        return this.channel.getTransactionByBlockIdAndIndex(blockIdentifier, index);
      }
      async getTransactionReceipt(txHash) {
        const txReceiptWoHelper = await this.channel.getTransactionReceipt(txHash);
        const txReceiptWoHelperModified = this.responseParser.parseTransactionReceipt(txReceiptWoHelper);
        return new ReceiptTx(txReceiptWoHelperModified);
      }
      async getTransactionTrace(txHash) {
        return this.channel.getTransactionTrace(txHash);
      }
      /**
       * Get the status of a transaction
       */
      async getTransactionStatus(transactionHash) {
        return this.channel.getTransactionStatus(transactionHash);
      }
      /**
       * @param invocations AccountInvocations
       * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
       * - blockIdentifier<br/>
       * - skipValidate (default false)<br/>
       * - skipFeeCharge (default true)<br/>
       */
      async getSimulateTransaction(invocations, options) {
        return this.channel.simulateTransaction(invocations, options).then((r) => this.responseParser.parseSimulateTransactionResponse(r));
      }
      async waitForTransaction(txHash, options) {
        const receiptWoHelper = await this.channel.waitForTransaction(
          txHash,
          options
        );
        return new ReceiptTx(receiptWoHelper);
      }
      async getStorageAt(contractAddress, key, blockIdentifier) {
        return this.channel.getStorageAt(contractAddress, key, blockIdentifier);
      }
      async getClassHashAt(contractAddress, blockIdentifier) {
        return this.channel.getClassHashAt(contractAddress, blockIdentifier);
      }
      async getClassByHash(classHash) {
        return this.getClass(classHash);
      }
      async getClass(classHash, blockIdentifier) {
        return this.channel.getClass(classHash, blockIdentifier).then(this.responseParser.parseContractClassResponse);
      }
      async getClassAt(contractAddress, blockIdentifier) {
        return this.channel.getClassAt(contractAddress, blockIdentifier).then(this.responseParser.parseContractClassResponse);
      }
      async getContractVersion(contractAddress, classHash, {
        blockIdentifier = this.channel.blockIdentifier,
        compiler = true
      } = {}) {
        let contractClass;
        if (contractAddress) {
          contractClass = await this.getClassAt(contractAddress, blockIdentifier);
        } else if (classHash) {
          contractClass = await this.getClass(classHash, blockIdentifier);
        } else {
          throw Error("getContractVersion require contractAddress or classHash");
        }
        if (isSierra(contractClass)) {
          if (compiler) {
            const abiTest = getAbiContractVersion(contractClass.abi);
            return { cairo: "1", compiler: abiTest.compiler };
          }
          return { cairo: "1", compiler: void 0 };
        }
        return { cairo: "0", compiler: "0" };
      }
      /**
       * @deprecated use get*type*EstimateFee (will be refactored based on type after sequencer deprecation)
       */
      async getEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate) {
        return this.getInvokeEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate);
      }
      async getInvokeEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate) {
        return this.channel.getEstimateFee(
          [
            {
              type: "INVOKE_FUNCTION",
              ...invocation,
              ...invocationDetails
            }
          ],
          { blockIdentifier, skipValidate }
        ).then((r) => this.responseParser.parseFeeEstimateResponse(r));
      }
      async getDeclareEstimateFee(invocation, details, blockIdentifier, skipValidate) {
        return this.channel.getEstimateFee(
          [
            {
              type: "DECLARE",
              ...invocation,
              ...details
            }
          ],
          { blockIdentifier, skipValidate }
        ).then((r) => this.responseParser.parseFeeEstimateResponse(r));
      }
      async getDeployAccountEstimateFee(invocation, details, blockIdentifier, skipValidate) {
        return this.channel.getEstimateFee(
          [
            {
              type: "DEPLOY_ACCOUNT",
              ...invocation,
              ...details
            }
          ],
          { blockIdentifier, skipValidate }
        ).then((r) => this.responseParser.parseFeeEstimateResponse(r));
      }
      async getEstimateFeeBulk(invocations, options) {
        return this.channel.getEstimateFee(invocations, options).then((r) => this.responseParser.parseFeeEstimateBulkResponse(r));
      }
      async invokeFunction(functionInvocation, details) {
        return this.channel.invoke(functionInvocation, details);
      }
      async declareContract(transaction2, details) {
        return this.channel.declare(transaction2, details);
      }
      async deployAccountContract(transaction2, details) {
        return this.channel.deployAccount(
          transaction2,
          details
        );
      }
      async callContract(call, blockIdentifier) {
        return this.channel.callContract(call, blockIdentifier);
      }
      /**
       * NEW: Estimate the fee for a message from L1
       * @param message Message From L1
       */
      async estimateMessageFee(message, blockIdentifier) {
        return this.channel.estimateMessageFee(message, blockIdentifier);
      }
      /**
       * Returns an object about the sync status, or false if the node is not synching
       * @returns Object with the stats data
       */
      async getSyncingStats() {
        return this.channel.getSyncingStats();
      }
      /**
       * Returns all events matching the given filter
       * @returns events and the pagination of the events
       */
      async getEvents(eventFilter) {
        return this.channel.getEvents(eventFilter);
      }
    };
    var import_ts_mixer = (init_esm(), __toCommonJS(esm_exports));
    var starknetId_exports = {};
    __export(starknetId_exports, {
      StarknetIdContract: () => StarknetIdContract,
      StarknetIdIdentityContract: () => StarknetIdIdentityContract,
      StarknetIdMulticallContract: () => StarknetIdMulticallContract,
      StarknetIdPfpContract: () => StarknetIdPfpContract,
      StarknetIdPopContract: () => StarknetIdPopContract,
      StarknetIdVerifierContract: () => StarknetIdVerifierContract,
      dynamicCallData: () => dynamicCallData,
      dynamicFelt: () => dynamicFelt,
      execution: () => execution,
      getStarknetIdContract: () => getStarknetIdContract,
      getStarknetIdIdentityContract: () => getStarknetIdIdentityContract,
      getStarknetIdMulticallContract: () => getStarknetIdMulticallContract,
      getStarknetIdPfpContract: () => getStarknetIdPfpContract,
      getStarknetIdPopContract: () => getStarknetIdPopContract,
      getStarknetIdVerifierContract: () => getStarknetIdVerifierContract,
      useDecoded: () => useDecoded,
      useEncoded: () => useEncoded
    });
    var basicAlphabet = "abcdefghijklmnopqrstuvwxyz0123456789-";
    var basicSizePlusOne = BigInt(basicAlphabet.length + 1);
    var bigAlphabet = "这来";
    var basicAlphabetSize = BigInt(basicAlphabet.length);
    var bigAlphabetSize = BigInt(bigAlphabet.length);
    var bigAlphabetSizePlusOne = BigInt(bigAlphabet.length + 1);
    function extractStars(str) {
      let k = 0;
      while (str.endsWith(bigAlphabet[bigAlphabet.length - 1])) {
        str = str.substring(0, str.length - 1);
        k += 1;
      }
      return [str, k];
    }
    function useDecoded(encoded) {
      let decoded = "";
      encoded.forEach((subdomain) => {
        while (subdomain !== ZERO) {
          const code = subdomain % basicSizePlusOne;
          subdomain /= basicSizePlusOne;
          if (code === BigInt(basicAlphabet.length)) {
            const nextSubdomain = subdomain / bigAlphabetSizePlusOne;
            if (nextSubdomain === ZERO) {
              const code2 = subdomain % bigAlphabetSizePlusOne;
              subdomain = nextSubdomain;
              if (code2 === ZERO)
                decoded += basicAlphabet[0];
              else
                decoded += bigAlphabet[Number(code2) - 1];
            } else {
              const code2 = subdomain % bigAlphabetSize;
              decoded += bigAlphabet[Number(code2)];
              subdomain /= bigAlphabetSize;
            }
          } else
            decoded += basicAlphabet[Number(code)];
        }
        const [str, k] = extractStars(decoded);
        if (k)
          decoded = str + (k % 2 === 0 ? bigAlphabet[bigAlphabet.length - 1].repeat(k / 2 - 1) + bigAlphabet[0] + basicAlphabet[1] : bigAlphabet[bigAlphabet.length - 1].repeat((k - 1) / 2 + 1));
        decoded += ".";
      });
      if (!decoded) {
        return decoded;
      }
      return decoded.concat("stark");
    }
    function useEncoded(decoded) {
      let encoded = BigInt(0);
      let multiplier = BigInt(1);
      if (decoded.endsWith(bigAlphabet[0] + basicAlphabet[1])) {
        const [str, k] = extractStars(decoded.substring(0, decoded.length - 2));
        decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(2 * (k + 1));
      } else {
        const [str, k] = extractStars(decoded);
        if (k)
          decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(1 + 2 * (k - 1));
      }
      for (let i = 0; i < decoded.length; i += 1) {
        const char = decoded[i];
        const index = basicAlphabet.indexOf(char);
        const bnIndex = BigInt(basicAlphabet.indexOf(char));
        if (index !== -1) {
          if (i === decoded.length - 1 && decoded[i] === basicAlphabet[0]) {
            encoded += multiplier * basicAlphabetSize;
            multiplier *= basicSizePlusOne;
            multiplier *= basicSizePlusOne;
          } else {
            encoded += multiplier * bnIndex;
            multiplier *= basicSizePlusOne;
          }
        } else if (bigAlphabet.indexOf(char) !== -1) {
          encoded += multiplier * basicAlphabetSize;
          multiplier *= basicSizePlusOne;
          const newid = (i === decoded.length - 1 ? 1 : 0) + bigAlphabet.indexOf(char);
          encoded += multiplier * BigInt(newid);
          multiplier *= bigAlphabetSize;
        }
      }
      return encoded;
    }
    var StarknetIdContract = ((StarknetIdContract2) => {
      StarknetIdContract2["MAINNET"] = "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678";
      StarknetIdContract2["TESTNET"] = "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce";
      StarknetIdContract2["TESTNET_SEPOLIA"] = "0x0707f09bc576bd7cfee59694846291047e965f4184fe13dac62c56759b3b6fa7";
      return StarknetIdContract2;
    })(StarknetIdContract || {});
    function getStarknetIdContract(chainId) {
      switch (chainId) {
        case "0x534e5f4d41494e":
          return "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678";
        case "0x534e5f474f45524c49":
          return "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce";
        case "0x534e5f5345504f4c4941":
          return "0x0707f09bc576bd7cfee59694846291047e965f4184fe13dac62c56759b3b6fa7";
        default:
          throw new Error("Starknet.id is not yet deployed on this network");
      }
    }
    var StarknetIdIdentityContract = ((StarknetIdIdentityContract2) => {
      StarknetIdIdentityContract2["MAINNET"] = "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af";
      StarknetIdIdentityContract2["TESTNET"] = "0x783a9097b26eae0586373b2ce0ed3529ddc44069d1e0fbc4f66d42b69d6850d";
      StarknetIdIdentityContract2["TESTNET_SEPOLIA"] = "0x070DF8B4F5cb2879f8592849fA8f3134da39d25326B8558cc9C8FE8D47EA3A90";
      return StarknetIdIdentityContract2;
    })(StarknetIdIdentityContract || {});
    function getStarknetIdIdentityContract(chainId) {
      switch (chainId) {
        case "0x534e5f4d41494e":
          return "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af";
        case "0x534e5f474f45524c49":
          return "0x783a9097b26eae0586373b2ce0ed3529ddc44069d1e0fbc4f66d42b69d6850d";
        case "0x534e5f5345504f4c4941":
          return "0x070DF8B4F5cb2879f8592849fA8f3134da39d25326B8558cc9C8FE8D47EA3A90";
        default:
          throw new Error("Starknet.id verifier contract is not yet deployed on this network");
      }
    }
    var StarknetIdMulticallContract = "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970";
    function getStarknetIdMulticallContract(chainId) {
      switch (chainId) {
        case "0x534e5f4d41494e":
          return StarknetIdMulticallContract;
        case "0x534e5f474f45524c49":
          return StarknetIdMulticallContract;
        case "0x534e5f5345504f4c4941":
          return StarknetIdMulticallContract;
        default:
          throw new Error("Starknet.id multicall contract is not yet deployed on this network");
      }
    }
    var StarknetIdVerifierContract = ((StarknetIdVerifierContract2) => {
      StarknetIdVerifierContract2["MAINNET"] = "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf";
      StarknetIdVerifierContract2["TESTNET"] = "0x057c942544063c3aea6ea6c37009cc9d1beacd750cb6801549a129c7265f0f11";
      StarknetIdVerifierContract2["TESTNET_SEPOLIA"] = "0x0182EcE8173C216A395f4828e1523541b7e3600bf190CB252E1a1A0cE219d184";
      return StarknetIdVerifierContract2;
    })(StarknetIdVerifierContract || {});
    function getStarknetIdVerifierContract(chainId) {
      switch (chainId) {
        case "0x534e5f4d41494e":
          return "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf";
        case "0x534e5f474f45524c49":
          return "0x057c942544063c3aea6ea6c37009cc9d1beacd750cb6801549a129c7265f0f11";
        case "0x534e5f5345504f4c4941":
          return "0x0182EcE8173C216A395f4828e1523541b7e3600bf190CB252E1a1A0cE219d184";
        default:
          throw new Error("Starknet.id verifier contract is not yet deployed on this network");
      }
    }
    var StarknetIdPfpContract = ((StarknetIdPfpContract2) => {
      StarknetIdPfpContract2["MAINNET"] = "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7";
      StarknetIdPfpContract2["TESTNET"] = "0x03cac3228b434259734ee0e4ff445f642206ea11adace7e4f45edd2596748698";
      StarknetIdPfpContract2["TESTNET_SEPOLIA"] = "0x058061bb6bdc501eE215172c9f87d557C1E0f466dC498cA81b18f998Bf1362b2";
      return StarknetIdPfpContract2;
    })(StarknetIdPfpContract || {});
    function getStarknetIdPfpContract(chainId) {
      switch (chainId) {
        case "0x534e5f4d41494e":
          return "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7";
        case "0x534e5f474f45524c49":
          return "0x03cac3228b434259734ee0e4ff445f642206ea11adace7e4f45edd2596748698";
        case "0x534e5f5345504f4c4941":
          return "0x058061bb6bdc501eE215172c9f87d557C1E0f466dC498cA81b18f998Bf1362b2";
        default:
          throw new Error(
            "Starknet.id profile picture verifier contract is not yet deployed on this network"
          );
      }
    }
    var StarknetIdPopContract = ((StarknetIdPopContract2) => {
      StarknetIdPopContract2["MAINNET"] = "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4";
      StarknetIdPopContract2["TESTNET"] = "0x03528caf090179e337931ee669a5b0214041e1bae30d460ff07d2cea2c7a9106";
      StarknetIdPopContract2["TESTNET_SEPOLIA"] = "0x0023FE3b845ed5665a9eb3792bbB17347B490EE4090f855C1298d03BB5F49B49";
      return StarknetIdPopContract2;
    })(StarknetIdPopContract || {});
    function getStarknetIdPopContract(chainId) {
      switch (chainId) {
        case "0x534e5f4d41494e":
          return "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4";
        case "0x534e5f474f45524c49":
          return "0x03528caf090179e337931ee669a5b0214041e1bae30d460ff07d2cea2c7a9106";
        case "0x534e5f5345504f4c4941":
          return "0x0023FE3b845ed5665a9eb3792bbB17347B490EE4090f855C1298d03BB5F49B49";
        default:
          throw new Error(
            "Starknet.id proof of personhood verifier contract is not yet deployed on this network"
          );
      }
    }
    function execution(staticEx, ifEqual = void 0, ifNotEqual = void 0) {
      return new CairoCustomEnum({
        Static: staticEx,
        IfEqual: ifEqual ? tuple(ifEqual[0], ifEqual[1], ifEqual[2]) : void 0,
        IfNotEqual: ifNotEqual ? tuple(ifNotEqual[0], ifNotEqual[1], ifNotEqual[2]) : void 0
      });
    }
    function dynamicFelt(hardcoded, reference = void 0) {
      return new CairoCustomEnum({
        Hardcoded: hardcoded,
        Reference: reference ? tuple(reference[0], reference[1]) : void 0
      });
    }
    function dynamicCallData(hardcoded, reference = void 0, arrayReference = void 0) {
      return new CairoCustomEnum({
        Hardcoded: hardcoded,
        Reference: reference ? tuple(reference[0], reference[1]) : void 0,
        ArrayReference: arrayReference ? tuple(arrayReference[0], arrayReference[1]) : void 0
      });
    }
    var StarknetId = class _StarknetId {
      async getStarkName(address, StarknetIdContract2) {
        return _StarknetId.getStarkName(
          // After Mixin, this is ProviderInterface
          this,
          address,
          StarknetIdContract2
        );
      }
      async getAddressFromStarkName(name, StarknetIdContract2) {
        return _StarknetId.getAddressFromStarkName(
          // After Mixin, this is ProviderInterface
          this,
          name,
          StarknetIdContract2
        );
      }
      async getStarkProfile(address, StarknetIdContract2, StarknetIdIdentityContract2, StarknetIdVerifierContract2, StarknetIdPfpContract2, StarknetIdPopContract2, StarknetIdMulticallContract2) {
        return _StarknetId.getStarkProfile(
          // After Mixin, this is ProviderInterface
          this,
          address,
          StarknetIdContract2,
          StarknetIdIdentityContract2,
          StarknetIdVerifierContract2,
          StarknetIdPfpContract2,
          StarknetIdPopContract2,
          StarknetIdMulticallContract2
        );
      }
      static async getStarkName(provider2, address, StarknetIdContract2) {
        const chainId = await provider2.getChainId();
        const contract = StarknetIdContract2 ?? getStarknetIdContract(chainId);
        try {
          const hexDomain = await provider2.callContract({
            contractAddress: contract,
            entrypoint: "address_to_domain",
            calldata: CallData.compile({
              address
            })
          });
          const decimalDomain = hexDomain.map((element) => BigInt(element)).slice(1);
          const stringDomain = useDecoded(decimalDomain);
          if (!stringDomain) {
            throw Error("Starkname not found");
          }
          return stringDomain;
        } catch (e) {
          if (e instanceof Error && e.message === "Starkname not found") {
            throw e;
          }
          throw Error("Could not get stark name");
        }
      }
      static async getAddressFromStarkName(provider2, name, StarknetIdContract2) {
        const chainId = await provider2.getChainId();
        const contract = StarknetIdContract2 ?? getStarknetIdContract(chainId);
        try {
          const encodedDomain = name.replace(".stark", "").split(".").map((part) => useEncoded(part).toString(10));
          const addressData = await provider2.callContract({
            contractAddress: contract,
            entrypoint: "domain_to_address",
            calldata: CallData.compile({ domain: encodedDomain, hint: [] })
          });
          return addressData[0];
        } catch {
          throw Error("Could not get address from stark name");
        }
      }
      static async getStarkProfile(provider2, address, StarknetIdContract2, StarknetIdIdentityContract2, StarknetIdVerifierContract2, StarknetIdPfpContract2, StarknetIdPopContract2, StarknetIdMulticallContract2) {
        const chainId = await provider2.getChainId();
        const contract = StarknetIdContract2 ?? getStarknetIdContract(chainId);
        const identityContract = StarknetIdIdentityContract2 ?? getStarknetIdIdentityContract(chainId);
        const verifierContract = StarknetIdVerifierContract2 ?? getStarknetIdVerifierContract(chainId);
        const pfpContract = StarknetIdPfpContract2 ?? getStarknetIdPfpContract(chainId);
        const popContract = StarknetIdPopContract2 ?? getStarknetIdPopContract(chainId);
        const multicallAddress = StarknetIdMulticallContract2 ?? getStarknetIdMulticallContract(chainId);
        try {
          const data = await provider2.callContract({
            contractAddress: multicallAddress,
            entrypoint: "aggregate",
            calldata: CallData.compile({
              calls: [
                {
                  execution: execution({}),
                  to: dynamicFelt(contract),
                  selector: dynamicFelt(getSelectorFromName("address_to_domain")),
                  calldata: [dynamicCallData(address)]
                },
                {
                  execution: execution({}),
                  to: dynamicFelt(contract),
                  selector: dynamicFelt(getSelectorFromName("domain_to_id")),
                  calldata: [dynamicCallData(void 0, void 0, [0, 0])]
                },
                {
                  execution: execution({}),
                  to: dynamicFelt(identityContract),
                  selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                  calldata: [
                    dynamicCallData(void 0, [1, 0]),
                    dynamicCallData(encodeShortString("twitter")),
                    dynamicCallData(verifierContract),
                    dynamicCallData("0")
                  ]
                },
                {
                  execution: execution({}),
                  to: dynamicFelt(identityContract),
                  selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                  calldata: [
                    dynamicCallData(void 0, [1, 0]),
                    dynamicCallData(encodeShortString("github")),
                    dynamicCallData(verifierContract),
                    dynamicCallData("0")
                  ]
                },
                {
                  execution: execution({}),
                  to: dynamicFelt(identityContract),
                  selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                  calldata: [
                    dynamicCallData(void 0, [1, 0]),
                    dynamicCallData(encodeShortString("discord")),
                    dynamicCallData(verifierContract),
                    dynamicCallData("0")
                  ]
                },
                {
                  execution: execution({}),
                  to: dynamicFelt(identityContract),
                  selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                  calldata: [
                    dynamicCallData(void 0, [1, 0]),
                    dynamicCallData(encodeShortString("proof_of_personhood")),
                    dynamicCallData(popContract),
                    dynamicCallData("0")
                  ]
                },
                // PFP
                {
                  execution: execution({}),
                  to: dynamicFelt(identityContract),
                  selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                  calldata: [
                    dynamicCallData(void 0, [1, 0]),
                    dynamicCallData(encodeShortString("nft_pp_contract")),
                    dynamicCallData(pfpContract),
                    dynamicCallData("0")
                  ]
                },
                {
                  execution: execution({}),
                  to: dynamicFelt(identityContract),
                  selector: dynamicFelt(getSelectorFromName("get_extended_verifier_data")),
                  calldata: [
                    dynamicCallData(void 0, [1, 0]),
                    dynamicCallData(encodeShortString("nft_pp_id")),
                    dynamicCallData("2"),
                    dynamicCallData(pfpContract),
                    dynamicCallData("0")
                  ]
                },
                {
                  execution: execution(void 0, void 0, [6, 0, 0]),
                  to: dynamicFelt(void 0, [6, 0]),
                  selector: dynamicFelt(getSelectorFromName("tokenURI")),
                  calldata: [dynamicCallData(void 0, [7, 1]), dynamicCallData(void 0, [7, 2])]
                }
              ]
            })
          });
          if (Array.isArray(data)) {
            const size = parseInt(data[0], 16);
            const finalArray = [];
            let index = 1;
            for (let i = 0; i < size; i += 1) {
              if (index < data.length) {
                const subArraySize = parseInt(data[index], 16);
                index += 1;
                const subArray = data.slice(index, index + subArraySize);
                finalArray.push(subArray);
                index += subArraySize;
              } else {
                break;
              }
            }
            const name = useDecoded(finalArray[0].slice(1).map((hexString) => BigInt(hexString)));
            const twitter = finalArray[2][0] !== "0x0" ? BigInt(finalArray[2][0]).toString() : void 0;
            const github = finalArray[3][0] !== "0x0" ? BigInt(finalArray[3][0]).toString() : void 0;
            const discord = finalArray[4][0] !== "0x0" ? BigInt(finalArray[4][0]).toString() : void 0;
            const proofOfPersonhood = finalArray[5][0] === "0x1";
            const profilePictureMetadata = data[0] === "0x9" ? finalArray[8].slice(1).map((val) => decodeShortString(val)).join("") : void 0;
            const profilePicture = profilePictureMetadata || `https://starknet.id/api/identicons/${BigInt(finalArray[1][0]).toString()}`;
            return {
              name,
              twitter,
              github,
              discord,
              proofOfPersonhood,
              profilePicture
            };
          }
          throw Error("Error while calling aggregate function");
        } catch (e) {
          if (e instanceof Error) {
            throw e;
          }
          throw Error("Could not get user stark profile data from address");
        }
      }
    };
    var RpcProvider2 = class extends (0, import_ts_mixer.Mixin)(RpcProvider, StarknetId) {
    };
    var ProviderInterface = class {
    };
    var defaultProvider = new RpcProvider({ default: true });
    var SignerInterface = class {
    };
    var typedData_exports = {};
    __export(typedData_exports, {
      TypedDataRevision: () => import_starknet_types_07.TypedDataRevision,
      encodeData: () => encodeData,
      encodeType: () => encodeType,
      encodeValue: () => encodeValue,
      getDependencies: () => getDependencies,
      getMessageHash: () => getMessageHash,
      getStructHash: () => getStructHash,
      getTypeHash: () => getTypeHash,
      isMerkleTreeType: () => isMerkleTreeType,
      prepareSelector: () => prepareSelector
    });
    var merkle_exports = {};
    __export(merkle_exports, {
      MerkleTree: () => MerkleTree,
      proofMerklePath: () => proofMerklePath
    });
    var MerkleTree = class _MerkleTree {
      constructor(leafHashes, hashMethod = computePedersenHash) {
        __publicField(this, "leaves");
        __publicField(this, "branches", []);
        __publicField(this, "root");
        __publicField(this, "hashMethod");
        this.hashMethod = hashMethod;
        this.leaves = leafHashes;
        this.root = this.build(leafHashes);
      }
      /**
       * Create Merkle tree
       * @param leaves hex-string array
       * @returns format: hex-string; Merkle tree root
       */
      build(leaves) {
        if (leaves.length === 1) {
          return leaves[0];
        }
        if (leaves.length !== this.leaves.length) {
          this.branches.push(leaves);
        }
        const newLeaves = [];
        for (let i = 0; i < leaves.length; i += 2) {
          if (i + 1 === leaves.length) {
            newLeaves.push(_MerkleTree.hash(leaves[i], "0x0", this.hashMethod));
          } else {
            newLeaves.push(_MerkleTree.hash(leaves[i], leaves[i + 1], this.hashMethod));
          }
        }
        return this.build(newLeaves);
      }
      /**
       * Create hash from ordered a and b, Pedersen hash default
       * @returns format: hex-string
       */
      static hash(a, b, hashMethod = computePedersenHash) {
        const [aSorted, bSorted] = [BigInt(a), BigInt(b)].sort((x, y) => x >= y ? 1 : -1);
        return hashMethod(aSorted, bSorted);
      }
      /**
       * Return path to leaf
       * @param leaf hex-string
       * @param branch hex-string array
       * @param hashPath hex-string array
       * @returns format: hex-string array
       */
      getProof(leaf, branch = this.leaves, hashPath = []) {
        const index = branch.indexOf(leaf);
        if (index === -1) {
          throw new Error("leaf not found");
        }
        if (branch.length === 1) {
          return hashPath;
        }
        const isLeft = index % 2 === 0;
        const neededBranch = (isLeft ? branch[index + 1] : branch[index - 1]) ?? "0x0";
        const newHashPath = [...hashPath, neededBranch];
        const currentBranchLevelIndex = this.leaves.length === branch.length ? -1 : this.branches.findIndex((b) => b.length === branch.length);
        const nextBranch = this.branches[currentBranchLevelIndex + 1] ?? [this.root];
        return this.getProof(
          _MerkleTree.hash(isLeft ? leaf : neededBranch, isLeft ? neededBranch : leaf, this.hashMethod),
          nextBranch,
          newHashPath
        );
      }
    };
    function proofMerklePath(root, leaf, path, hashMethod = computePedersenHash) {
      if (path.length === 0) {
        return root === leaf;
      }
      const [next, ...rest] = path;
      return proofMerklePath(root, MerkleTree.hash(leaf, next, hashMethod), rest, hashMethod);
    }
    var presetTypes = {
      u256: JSON.parse('[{ "name": "low", "type": "u128" }, { "name": "high", "type": "u128" }]'),
      TokenAmount: JSON.parse(
        '[{ "name": "token_address", "type": "ContractAddress" }, { "name": "amount", "type": "u256" }]'
      ),
      NftId: JSON.parse(
        '[{ "name": "collection_address", "type": "ContractAddress" }, { "name": "token_id", "type": "u256" }]'
      )
    };
    var revisionConfiguration = {
      [import_starknet_types_07.TypedDataRevision.Active]: {
        domain: "StarknetDomain",
        hashMethod: computePoseidonHashOnElements,
        hashMerkleMethod: computePoseidonHash,
        escapeTypeString: (s) => `"${s}"`,
        presetTypes
      },
      [import_starknet_types_07.TypedDataRevision.Legacy]: {
        domain: "StarkNetDomain",
        hashMethod: computePedersenHashOnElements,
        hashMerkleMethod: computePedersenHash,
        escapeTypeString: (s) => s,
        presetTypes: {}
      }
    };
    function assertRange(data, type, { min, max }) {
      const value = BigInt(data);
      assert(value >= min && value <= max, `${value} (${type}) is out of bounds [${min}, ${max}]`);
    }
    function identifyRevision({ types: types2, domain }) {
      if (revisionConfiguration[import_starknet_types_07.TypedDataRevision.Active].domain in types2 && domain.revision === import_starknet_types_07.TypedDataRevision.Active)
        return import_starknet_types_07.TypedDataRevision.Active;
      if (revisionConfiguration[import_starknet_types_07.TypedDataRevision.Legacy].domain in types2 && (domain.revision ?? import_starknet_types_07.TypedDataRevision.Legacy) === import_starknet_types_07.TypedDataRevision.Legacy)
        return import_starknet_types_07.TypedDataRevision.Legacy;
      return void 0;
    }
    function getHex(value) {
      try {
        return toHex(value);
      } catch (e) {
        if (isString(value)) {
          return toHex(encodeShortString(value));
        }
        throw new Error(`Invalid BigNumberish: ${value}`);
      }
    }
    function validateTypedData(data) {
      const typedData2 = data;
      return Boolean(
        typedData2.message && typedData2.primaryType && typedData2.types && identifyRevision(typedData2)
      );
    }
    function prepareSelector(selector2) {
      return isHex(selector2) ? selector2 : getSelectorFromName(selector2);
    }
    function isMerkleTreeType(type) {
      return type.type === "merkletree";
    }
    function getDependencies(types2, type, dependencies = [], contains = "", revision = import_starknet_types_07.TypedDataRevision.Legacy) {
      if (type[type.length - 1] === "*") {
        type = type.slice(0, -1);
      } else if (revision === import_starknet_types_07.TypedDataRevision.Active) {
        if (type === "enum") {
          type = contains;
        } else if (type.match(/^\(.*\)$/)) {
          type = type.slice(1, -1);
        }
      }
      if (dependencies.includes(type) || !types2[type]) {
        return dependencies;
      }
      return [
        type,
        ...types2[type].reduce(
          (previous, t) => [
            ...previous,
            ...getDependencies(types2, t.type, previous, t.contains, revision).filter(
              (dependency) => !previous.includes(dependency)
            )
          ],
          []
        )
      ];
    }
    function getMerkleTreeType(types2, ctx) {
      if (ctx.parent && ctx.key) {
        const parentType = types2[ctx.parent];
        const merkleType = parentType.find((t) => t.name === ctx.key);
        const isMerkleTree = isMerkleTreeType(merkleType);
        if (!isMerkleTree) {
          throw new Error(`${ctx.key} is not a merkle tree`);
        }
        if (merkleType.contains.endsWith("*")) {
          throw new Error(`Merkle tree contain property must not be an array but was given ${ctx.key}`);
        }
        return merkleType.contains;
      }
      return "raw";
    }
    function encodeType(types2, type, revision = import_starknet_types_07.TypedDataRevision.Legacy) {
      const allTypes = revision === import_starknet_types_07.TypedDataRevision.Active ? { ...types2, ...revisionConfiguration[revision].presetTypes } : types2;
      const [primary, ...dependencies] = getDependencies(
        allTypes,
        type,
        void 0,
        void 0,
        revision
      );
      const newTypes = !primary ? [] : [primary, ...dependencies.sort()];
      const esc = revisionConfiguration[revision].escapeTypeString;
      return newTypes.map((dependency) => {
        const dependencyElements = allTypes[dependency].map((t) => {
          const targetType = t.type === "enum" && revision === import_starknet_types_07.TypedDataRevision.Active ? t.contains : t.type;
          const typeString = targetType.match(/^\(.*\)$/) ? `(${targetType.slice(1, -1).split(",").map((e) => e ? esc(e) : e).join(",")})` : esc(targetType);
          return `${esc(t.name)}:${typeString}`;
        });
        return `${esc(dependency)}(${dependencyElements})`;
      }).join("");
    }
    function getTypeHash(types2, type, revision = import_starknet_types_07.TypedDataRevision.Legacy) {
      return getSelectorFromName(encodeType(types2, type, revision));
    }
    function encodeValue(types2, type, data, ctx = {}, revision = import_starknet_types_07.TypedDataRevision.Legacy) {
      if (types2[type]) {
        return [type, getStructHash(types2, type, data, revision)];
      }
      if (revisionConfiguration[revision].presetTypes[type]) {
        return [
          type,
          getStructHash(
            revisionConfiguration[revision].presetTypes,
            type,
            data,
            revision
          )
        ];
      }
      if (type.endsWith("*")) {
        const hashes = data.map(
          (entry) => encodeValue(types2, type.slice(0, -1), entry, void 0, revision)[1]
        );
        return [type, revisionConfiguration[revision].hashMethod(hashes)];
      }
      switch (type) {
        case "enum": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            const [variantKey, variantData] = Object.entries(data)[0];
            const parentType = types2[ctx.parent][0];
            const enumType = types2[parentType.contains];
            const variantType = enumType.find((t) => t.name === variantKey);
            const variantIndex = enumType.indexOf(variantType);
            const encodedSubtypes = variantType.type.slice(1, -1).split(",").map((subtype, index) => {
              if (!subtype)
                return subtype;
              const subtypeData = variantData[index];
              return encodeValue(types2, subtype, subtypeData, void 0, revision)[1];
            });
            return [
              type,
              revisionConfiguration[revision].hashMethod([variantIndex, ...encodedSubtypes])
            ];
          }
          return [type, getHex(data)];
        }
        case "merkletree": {
          const merkleTreeType = getMerkleTreeType(types2, ctx);
          const structHashes = data.map((struct) => {
            return encodeValue(types2, merkleTreeType, struct, void 0, revision)[1];
          });
          const { root } = new MerkleTree(
            structHashes,
            revisionConfiguration[revision].hashMerkleMethod
          );
          return ["felt", root];
        }
        case "selector": {
          return ["felt", prepareSelector(data)];
        }
        case "string": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            const byteArray2 = byteArrayFromString(data);
            const elements = [
              byteArray2.data.length,
              ...byteArray2.data,
              byteArray2.pending_word,
              byteArray2.pending_word_len
            ];
            return [type, revisionConfiguration[revision].hashMethod(elements)];
          }
          return [type, getHex(data)];
        }
        case "i128": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            const value = BigInt(data);
            assertRange(value, type, RANGE_I128);
            return [type, getHex(value < 0n ? PRIME + value : value)];
          }
          return [type, getHex(data)];
        }
        case "timestamp":
        case "u128": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            assertRange(data, type, RANGE_U128);
          }
          return [type, getHex(data)];
        }
        case "felt":
        case "shortstring": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            assertRange(getHex(data), type, RANGE_FELT);
          }
          return [type, getHex(data)];
        }
        case "ClassHash":
        case "ContractAddress": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            assertRange(data, type, RANGE_FELT);
          }
          return [type, getHex(data)];
        }
        case "bool": {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            assert(typeof data === "boolean", `Type mismatch for ${type} ${data}`);
          }
          return [type, getHex(data)];
        }
        default: {
          if (revision === import_starknet_types_07.TypedDataRevision.Active) {
            throw new Error(`Unsupported type: ${type}`);
          }
          return [type, getHex(data)];
        }
      }
    }
    function encodeData(types2, type, data, revision = import_starknet_types_07.TypedDataRevision.Legacy) {
      const targetType = types2[type] ?? revisionConfiguration[revision].presetTypes[type];
      const [returnTypes, values] = targetType.reduce(
        ([ts, vs], field) => {
          if (data[field.name] === void 0 || data[field.name] === null && field.type !== "enum") {
            throw new Error(`Cannot encode data: missing data for '${field.name}'`);
          }
          const value = data[field.name];
          const ctx = { parent: type, key: field.name };
          const [t, encodedValue] = encodeValue(types2, field.type, value, ctx, revision);
          return [
            [...ts, t],
            [...vs, encodedValue]
          ];
        },
        [["felt"], [getTypeHash(types2, type, revision)]]
      );
      return [returnTypes, values];
    }
    function getStructHash(types2, type, data, revision = import_starknet_types_07.TypedDataRevision.Legacy) {
      return revisionConfiguration[revision].hashMethod(encodeData(types2, type, data, revision)[1]);
    }
    function getMessageHash(typedData2, account) {
      if (!validateTypedData(typedData2)) {
        throw new Error("Typed data does not match JSON schema");
      }
      const revision = identifyRevision(typedData2);
      const { domain, hashMethod } = revisionConfiguration[revision];
      const message = [
        encodeShortString("StarkNet Message"),
        getStructHash(typedData2.types, domain, typedData2.domain, revision),
        account,
        getStructHash(typedData2.types, typedData2.primaryType, typedData2.message, revision)
      ];
      return hashMethod(message);
    }
    var Signer = class {
      constructor(pk = starkCurve.utils.randomPrivateKey()) {
        __publicField(this, "pk");
        this.pk = pk instanceof Uint8Array ? buf2hex(pk) : toHex(pk);
      }
      async getPubKey() {
        return starkCurve.getStarkKey(this.pk);
      }
      async signMessage(typedData2, accountAddress) {
        const msgHash = getMessageHash(typedData2, accountAddress);
        return this.signRaw(msgHash);
      }
      async signTransaction(transactions, details) {
        const compiledCalldata = getExecuteCalldata(transactions, details.cairoVersion);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
          const det = details;
          msgHash = calculateInvokeTransactionHash2({
            ...det,
            senderAddress: det.walletAddress,
            compiledCalldata,
            version: det.version
          });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
          const det = details;
          msgHash = calculateInvokeTransactionHash2({
            ...det,
            senderAddress: det.walletAddress,
            compiledCalldata,
            version: det.version,
            nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
            feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
          });
        } else {
          throw Error("unsupported signTransaction version");
        }
        return this.signRaw(msgHash);
      }
      async signDeployAccountTransaction(details) {
        const compiledConstructorCalldata = CallData.compile(details.constructorCalldata);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
          const det = details;
          msgHash = calculateDeployAccountTransactionHash3({
            ...det,
            salt: det.addressSalt,
            constructorCalldata: compiledConstructorCalldata,
            version: det.version
          });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
          const det = details;
          msgHash = calculateDeployAccountTransactionHash3({
            ...det,
            salt: det.addressSalt,
            compiledConstructorCalldata,
            version: det.version,
            nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
            feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
          });
        } else {
          throw Error("unsupported signDeployAccountTransaction version");
        }
        return this.signRaw(msgHash);
      }
      async signDeclareTransaction(details) {
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
          const det = details;
          msgHash = calculateDeclareTransactionHash3({
            ...det,
            version: det.version
          });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
          const det = details;
          msgHash = calculateDeclareTransactionHash3({
            ...det,
            version: det.version,
            nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
            feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
          });
        } else {
          throw Error("unsupported signDeclareTransaction version");
        }
        return this.signRaw(msgHash);
      }
      async signRaw(msgHash) {
        return starkCurve.sign(msgHash, this.pk);
      }
    };
    var import_secp256k12 = require_secp256k1();
    var uint256_exports = {};
    __export(uint256_exports, {
      UINT_128_MAX: () => UINT_128_MAX,
      UINT_256_MAX: () => UINT_256_MAX,
      bnToUint256: () => bnToUint256,
      isUint256: () => isUint256,
      uint256ToBN: () => uint256ToBN
    });
    function uint256ToBN(uint2562) {
      return new CairoUint256(uint2562).toBigInt();
    }
    function isUint256(bn) {
      return CairoUint256.is(bn);
    }
    function bnToUint256(bn) {
      return new CairoUint256(bn).toUint256HexString();
    }
    var EthSigner = class {
      // hex string without 0x and with an odd number of characters
      constructor(pk = ethRandomPrivateKey()) {
        __publicField(this, "pk");
        this.pk = pk instanceof Uint8Array ? buf2hex(pk).padStart(64, "0") : removeHexPrefix(toHex(pk)).padStart(64, "0");
      }
      /**
       * provides the Ethereum full public key (without parity prefix)
       * @returns an hex string : 64 first characters are Point X coordinate. 64 last characters are Point Y coordinate.
       */
      async getPubKey() {
        return addHexPrefix(
          buf2hex(import_secp256k12.secp256k1.getPublicKey(this.pk, false)).padStart(130, "0").slice(2)
        );
      }
      async signMessage(typedData2, accountAddress) {
        const msgHash = getMessageHash(typedData2, accountAddress);
        const signature = import_secp256k12.secp256k1.sign(
          removeHexPrefix(sanitizeHex(msgHash)),
          this.pk
        );
        return this.formatEthSignature(signature);
      }
      async signTransaction(transactions, details) {
        const compiledCalldata = getExecuteCalldata(transactions, details.cairoVersion);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
          const det = details;
          msgHash = calculateInvokeTransactionHash2({
            ...det,
            senderAddress: det.walletAddress,
            compiledCalldata,
            version: det.version
          });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
          const det = details;
          msgHash = calculateInvokeTransactionHash2({
            ...det,
            senderAddress: det.walletAddress,
            compiledCalldata,
            version: det.version,
            nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
            feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
          });
        } else {
          throw Error("unsupported signTransaction version");
        }
        const signature = import_secp256k12.secp256k1.sign(
          removeHexPrefix(sanitizeHex(msgHash)),
          this.pk
        );
        return this.formatEthSignature(signature);
      }
      async signDeployAccountTransaction(details) {
        const compiledConstructorCalldata = CallData.compile(details.constructorCalldata);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
          const det = details;
          msgHash = calculateDeployAccountTransactionHash3({
            ...det,
            salt: det.addressSalt,
            constructorCalldata: compiledConstructorCalldata,
            version: det.version
          });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
          const det = details;
          msgHash = calculateDeployAccountTransactionHash3({
            ...det,
            salt: det.addressSalt,
            compiledConstructorCalldata,
            version: det.version,
            nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
            feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
          });
        } else {
          throw Error("unsupported signDeployAccountTransaction version");
        }
        const signature = import_secp256k12.secp256k1.sign(
          removeHexPrefix(sanitizeHex(msgHash)),
          this.pk
        );
        return this.formatEthSignature(signature);
      }
      async signDeclareTransaction(details) {
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
          const det = details;
          msgHash = calculateDeclareTransactionHash3({
            ...det,
            version: det.version
          });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
          const det = details;
          msgHash = calculateDeclareTransactionHash3({
            ...det,
            version: det.version,
            nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
            feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
          });
        } else {
          throw Error("unsupported signDeclareTransaction version");
        }
        const signature = import_secp256k12.secp256k1.sign(
          removeHexPrefix(sanitizeHex(msgHash)),
          this.pk
        );
        return this.formatEthSignature(signature);
      }
      /**
       * Serialize the signature in conformity with starknet::eth_signature::Signature
       * @param ethSignature secp256k1 signature from Noble curves library
       * @return an array of felts, representing a Cairo Eth Signature.
       */
      formatEthSignature(ethSignature) {
        const r = bnToUint256(ethSignature.r);
        const s = bnToUint256(ethSignature.s);
        return [
          toHex(r.low),
          toHex(r.high),
          toHex(s.low),
          toHex(s.high),
          toHex(ethSignature.recovery)
        ];
      }
    };
    function parseUDCEvent(txReceipt) {
      if (!txReceipt.events) {
        throw new Error("UDC emitted event is empty");
      }
      const event = txReceipt.events.find(
        (it) => cleanHex(it.from_address) === cleanHex(UDC.ADDRESS)
      ) || {
        data: []
      };
      return {
        transaction_hash: txReceipt.transaction_hash,
        contract_address: event.data[0],
        address: event.data[0],
        deployer: event.data[1],
        unique: event.data[2],
        classHash: event.data[3],
        calldata_len: event.data[4],
        calldata: event.data.slice(5, 5 + parseInt(event.data[4], 16)),
        salt: event.data[event.data.length - 1]
      };
    }
    var Account = class extends RpcProvider2 {
      constructor(providerOrOptions, address, pkOrSigner, cairoVersion, transactionVersion = api_exports.ETransactionVersion.V2) {
        super(providerOrOptions);
        __publicField(this, "signer");
        __publicField(this, "address");
        __publicField(this, "cairoVersion");
        __publicField(this, "transactionVersion");
        __publicField(this, "deploySelf", this.deployAccount);
        this.address = address.toLowerCase();
        this.signer = isString(pkOrSigner) || pkOrSigner instanceof Uint8Array ? new Signer(pkOrSigner) : pkOrSigner;
        if (cairoVersion) {
          this.cairoVersion = cairoVersion.toString();
        }
        this.transactionVersion = transactionVersion;
      }
      // provided version or contract based preferred transactionVersion
      getPreferredVersion(type12, type3) {
        if (this.transactionVersion === api_exports.ETransactionVersion.V3)
          return type3;
        if (this.transactionVersion === api_exports.ETransactionVersion.V2)
          return type12;
        return api_exports.ETransactionVersion.V3;
      }
      async getNonce(blockIdentifier) {
        return super.getNonceForAddress(this.address, blockIdentifier);
      }
      async getNonceSafe(nonce) {
        try {
          return toBigInt(nonce ?? await this.getNonce());
        } catch (error) {
          return 0n;
        }
      }
      /**
       * Retrieves the Cairo version from the network and sets `cairoVersion` if not already set in the constructor
       * @param classHash if provided detects Cairo version from classHash, otherwise from the account address
       */
      async getCairoVersion(classHash) {
        if (!this.cairoVersion) {
          const { cairo: cairo2 } = classHash ? await super.getContractVersion(void 0, classHash) : await super.getContractVersion(this.address);
          this.cairoVersion = cairo2;
        }
        return this.cairoVersion;
      }
      async estimateFee(calls, estimateFeeDetails = {}) {
        return this.estimateInvokeFee(calls, estimateFeeDetails);
      }
      async estimateInvokeFee(calls, details = {}) {
        const {
          nonce: providedNonce,
          blockIdentifier,
          version: providedVersion,
          skipValidate = true
        } = details;
        const transactions = Array.isArray(calls) ? calls : [calls];
        const nonce = toBigInt(providedNonce ?? await this.getNonce());
        const version = toTransactionVersion(
          this.getPreferredVersion(api_exports.ETransactionVersion.F1, api_exports.ETransactionVersion.F3),
          toFeeVersion(providedVersion)
        );
        const chainId = await this.getChainId();
        const signerDetails = {
          ...v3Details(details),
          walletAddress: this.address,
          nonce,
          maxFee: ZERO,
          version,
          chainId,
          cairoVersion: await this.getCairoVersion(),
          skipValidate
        };
        const invocation = await this.buildInvocation(transactions, signerDetails);
        return super.getInvokeEstimateFee(
          { ...invocation },
          { ...v3Details(details), version, nonce },
          blockIdentifier,
          details.skipValidate
        );
      }
      async estimateDeclareFee(payload, details = {}) {
        const {
          blockIdentifier,
          nonce: providedNonce,
          version: providedVersion,
          skipValidate = true
        } = details;
        const nonce = toBigInt(providedNonce ?? await this.getNonce());
        const version = toTransactionVersion(
          !isSierra(payload.contract) ? api_exports.ETransactionVersion.F1 : this.getPreferredVersion(api_exports.ETransactionVersion.F2, api_exports.ETransactionVersion.F3),
          toFeeVersion(providedVersion)
        );
        const chainId = await this.getChainId();
        const declareContractTransaction = await this.buildDeclarePayload(payload, {
          ...v3Details(details),
          nonce,
          chainId,
          version,
          walletAddress: this.address,
          maxFee: ZERO,
          cairoVersion: void 0,
          // unused parameter
          skipValidate
        });
        return super.getDeclareEstimateFee(
          declareContractTransaction,
          { ...v3Details(details), version, nonce },
          blockIdentifier,
          details.skipValidate
        );
      }
      async estimateAccountDeployFee({
        classHash,
        addressSalt = 0,
        constructorCalldata = [],
        contractAddress
      }, details = {}) {
        const { blockIdentifier, version: providedVersion, skipValidate = true } = details;
        const version = toTransactionVersion(
          this.getPreferredVersion(api_exports.ETransactionVersion.F1, api_exports.ETransactionVersion.F3),
          toFeeVersion(providedVersion)
        );
        const nonce = ZERO;
        const chainId = await this.getChainId();
        const payload = await this.buildAccountDeployPayload(
          { classHash, addressSalt, constructorCalldata, contractAddress },
          {
            ...v3Details(details),
            nonce,
            chainId,
            version,
            walletAddress: this.address,
            // unused parameter
            maxFee: ZERO,
            cairoVersion: void 0,
            // unused parameter,
            skipValidate
          }
        );
        return super.getDeployAccountEstimateFee(
          { ...payload },
          { ...v3Details(details), version, nonce },
          blockIdentifier,
          details.skipValidate
        );
      }
      async estimateDeployFee(payload, details = {}) {
        const calls = this.buildUDCContractPayload(payload);
        return this.estimateInvokeFee(calls, details);
      }
      async estimateFeeBulk(invocations, details = {}) {
        const { nonce, blockIdentifier, version, skipValidate } = details;
        const accountInvocations = await this.accountInvocationsFactory(invocations, {
          ...v3Details(details),
          versions: [
            api_exports.ETransactionVersion.F1,
            // non-sierra
            toTransactionVersion(
              this.getPreferredVersion(api_exports.ETransactionVersion.F2, api_exports.ETransactionVersion.F3),
              version
            )
            // sierra
          ],
          nonce,
          blockIdentifier,
          skipValidate
        });
        return super.getEstimateFeeBulk(accountInvocations, {
          blockIdentifier,
          skipValidate
        });
      }
      async simulateTransaction(invocations, details = {}) {
        const { nonce, blockIdentifier, skipValidate = true, skipExecute, version } = details;
        const accountInvocations = await this.accountInvocationsFactory(invocations, {
          ...v3Details(details),
          versions: [
            api_exports.ETransactionVersion.V1,
            // non-sierra
            toTransactionVersion(
              this.getPreferredVersion(api_exports.ETransactionVersion.V2, api_exports.ETransactionVersion.V3),
              version
            )
          ],
          nonce,
          blockIdentifier,
          skipValidate
        });
        return super.getSimulateTransaction(accountInvocations, {
          blockIdentifier,
          skipValidate,
          skipExecute
        });
      }
      async execute(transactions, arg2, transactionsDetail = {}) {
        const details = arg2 === void 0 || Array.isArray(arg2) ? transactionsDetail : arg2;
        const calls = Array.isArray(transactions) ? transactions : [transactions];
        const nonce = toBigInt(details.nonce ?? await this.getNonce());
        const version = toTransactionVersion(
          this.getPreferredVersion(api_exports.ETransactionVersion.V1, api_exports.ETransactionVersion.V3),
          // TODO: does this depend on cairo version ?
          details.version
        );
        const estimate = await this.getUniversalSuggestedFee(
          version,
          { type: "INVOKE_FUNCTION", payload: transactions },
          {
            ...details,
            version
          }
        );
        const chainId = await this.getChainId();
        const signerDetails = {
          ...v3Details(details),
          resourceBounds: estimate.resourceBounds,
          walletAddress: this.address,
          nonce,
          maxFee: estimate.maxFee,
          version,
          chainId,
          cairoVersion: await this.getCairoVersion()
        };
        const signature = await this.signer.signTransaction(calls, signerDetails);
        const calldata = getExecuteCalldata(calls, await this.getCairoVersion());
        return this.invokeFunction(
          { contractAddress: this.address, calldata, signature },
          {
            ...v3Details(details),
            resourceBounds: estimate.resourceBounds,
            nonce,
            maxFee: estimate.maxFee,
            version
          }
        );
      }
      /**
       * First check if contract is already declared, if not declare it
       * If contract already declared returned transaction_hash is ''.
       * Method will pass even if contract is already declared
       * @param transactionsDetail (optional)
       */
      async declareIfNot(payload, transactionsDetail = {}) {
        const declareContractPayload = extractContractHashes(payload);
        try {
          await this.getClassByHash(declareContractPayload.classHash);
        } catch (error) {
          return this.declare(payload, transactionsDetail);
        }
        return {
          transaction_hash: "",
          class_hash: declareContractPayload.classHash
        };
      }
      async declare(payload, details = {}) {
        const declareContractPayload = extractContractHashes(payload);
        const { nonce, version: providedVersion } = details;
        const version = toTransactionVersion(
          !isSierra(payload.contract) ? api_exports.ETransactionVersion.V1 : this.getPreferredVersion(api_exports.ETransactionVersion.V2, api_exports.ETransactionVersion.V3),
          providedVersion
        );
        const estimate = await this.getUniversalSuggestedFee(
          version,
          {
            type: "DECLARE",
            payload: declareContractPayload
          },
          {
            ...details,
            version
          }
        );
        const declareDetails = {
          ...v3Details(details),
          resourceBounds: estimate.resourceBounds,
          maxFee: estimate.maxFee,
          nonce: toBigInt(nonce ?? await this.getNonce()),
          version,
          chainId: await this.getChainId(),
          walletAddress: this.address,
          cairoVersion: void 0
        };
        const declareContractTransaction = await this.buildDeclarePayload(
          declareContractPayload,
          declareDetails
        );
        return this.declareContract(declareContractTransaction, declareDetails);
      }
      async deploy(payload, details = {}) {
        const { calls, addresses } = buildUDCCall(payload, this.address);
        const invokeResponse = await this.execute(calls, void 0, details);
        return {
          ...invokeResponse,
          contract_address: addresses
        };
      }
      async deployContract(payload, details = {}) {
        const deployTx = await this.deploy(payload, details);
        const txReceipt = await this.waitForTransaction(deployTx.transaction_hash);
        return parseUDCEvent(txReceipt);
      }
      async declareAndDeploy(payload, details = {}) {
        const { constructorCalldata, salt, unique } = payload;
        let declare = await this.declareIfNot(payload, details);
        if (declare.transaction_hash !== "") {
          const tx = await this.waitForTransaction(declare.transaction_hash);
          declare = { ...declare, ...tx };
        }
        const deploy = await this.deployContract(
          { classHash: declare.class_hash, salt, unique, constructorCalldata },
          details
        );
        return { declare: { ...declare }, deploy };
      }
      async deployAccount({
        classHash,
        constructorCalldata = [],
        addressSalt = 0,
        contractAddress: providedContractAddress
      }, details = {}) {
        const version = toTransactionVersion(
          this.getPreferredVersion(api_exports.ETransactionVersion.V1, api_exports.ETransactionVersion.V3),
          details.version
        );
        const nonce = ZERO;
        const chainId = await this.getChainId();
        const compiledCalldata = CallData.compile(constructorCalldata);
        const contractAddress = providedContractAddress ?? calculateContractAddressFromHash(addressSalt, classHash, compiledCalldata, 0);
        const estimate = await this.getUniversalSuggestedFee(
          version,
          {
            type: "DEPLOY_ACCOUNT",
            payload: {
              classHash,
              constructorCalldata: compiledCalldata,
              addressSalt,
              contractAddress
            }
          },
          details
        );
        const signature = await this.signer.signDeployAccountTransaction({
          ...v3Details(details),
          classHash,
          constructorCalldata: compiledCalldata,
          contractAddress,
          addressSalt,
          chainId,
          resourceBounds: estimate.resourceBounds,
          maxFee: estimate.maxFee,
          version,
          nonce
        });
        return this.deployAccountContract(
          { classHash, addressSalt, constructorCalldata, signature },
          {
            ...v3Details(details),
            nonce,
            resourceBounds: estimate.resourceBounds,
            maxFee: estimate.maxFee,
            version
          }
        );
      }
      async signMessage(typedData2) {
        return this.signer.signMessage(typedData2, this.address);
      }
      async hashMessage(typedData2) {
        return getMessageHash(typedData2, this.address);
      }
      async verifyMessageHash(hash2, signature) {
        try {
          const resp = await this.callContract({
            contractAddress: this.address,
            entrypoint: "isValidSignature",
            calldata: CallData.compile({
              hash: toBigInt(hash2).toString(),
              signature: formatSignature(signature)
            })
          });
          if (BigInt(resp[0]) === 0n) {
            return false;
          }
          return true;
        } catch (err) {
          if (["argent/invalid-signature", "is invalid, with respect to the public key"].some(
            (errMessage) => err.message.includes(errMessage)
          )) {
            return false;
          }
          throw Error(`Signature verification request is rejected by the network: ${err}`);
        }
      }
      async verifyMessage(typedData2, signature) {
        const hash2 = await this.hashMessage(typedData2);
        return this.verifyMessageHash(hash2, signature);
      }
      /*
       * Support methods
       */
      async getUniversalSuggestedFee(version, { type, payload }, details) {
        let maxFee = 0;
        let resourceBounds = estimateFeeToBounds(ZERO);
        if (version === api_exports.ETransactionVersion.V3) {
          resourceBounds = details.resourceBounds ?? (await this.getSuggestedFee({ type, payload }, details)).resourceBounds;
        } else {
          maxFee = details.maxFee ?? (await this.getSuggestedFee({ type, payload }, details)).suggestedMaxFee;
        }
        return {
          maxFee,
          resourceBounds
        };
      }
      async getSuggestedFee({ type, payload }, details) {
        let feeEstimate;
        switch (type) {
          case "INVOKE_FUNCTION":
            feeEstimate = await this.estimateInvokeFee(payload, details);
            break;
          case "DECLARE":
            feeEstimate = await this.estimateDeclareFee(payload, details);
            break;
          case "DEPLOY_ACCOUNT":
            feeEstimate = await this.estimateAccountDeployFee(payload, details);
            break;
          case "DEPLOY":
            feeEstimate = await this.estimateDeployFee(payload, details);
            break;
          default:
            feeEstimate = {
              gas_consumed: 0n,
              gas_price: 0n,
              overall_fee: ZERO,
              unit: "FRI",
              suggestedMaxFee: ZERO,
              resourceBounds: estimateFeeToBounds(ZERO),
              data_gas_consumed: 0n,
              data_gas_price: 0n
            };
            break;
        }
        return feeEstimate;
      }
      async buildInvocation(call, details) {
        const calldata = getExecuteCalldata(call, await this.getCairoVersion());
        const signature = !details.skipValidate ? await this.signer.signTransaction(call, details) : [];
        return {
          ...v3Details(details),
          contractAddress: this.address,
          calldata,
          signature
        };
      }
      async buildDeclarePayload(payload, details) {
        const { classHash, contract, compiledClassHash } = extractContractHashes(payload);
        const compressedCompiledContract = parseContract(contract);
        if (typeof compiledClassHash === "undefined" && (details.version === api_exports.ETransactionVersion3.F3 || details.version === api_exports.ETransactionVersion3.V3)) {
          throw Error("V3 Transaction work with Cairo1 Contracts and require compiledClassHash");
        }
        const signature = !details.skipValidate ? await this.signer.signDeclareTransaction({
          ...details,
          ...v3Details(details),
          classHash,
          compiledClassHash,
          // TODO: TS, cast because optional for v2 and required for v3, thrown if not present
          senderAddress: details.walletAddress
        }) : [];
        return {
          senderAddress: details.walletAddress,
          signature,
          contract: compressedCompiledContract,
          compiledClassHash
        };
      }
      async buildAccountDeployPayload({
        classHash,
        addressSalt = 0,
        constructorCalldata = [],
        contractAddress: providedContractAddress
      }, details) {
        const compiledCalldata = CallData.compile(constructorCalldata);
        const contractAddress = providedContractAddress ?? calculateContractAddressFromHash(addressSalt, classHash, compiledCalldata, 0);
        const signature = !details.skipValidate ? await this.signer.signDeployAccountTransaction({
          ...details,
          ...v3Details(details),
          classHash,
          contractAddress,
          addressSalt,
          constructorCalldata: compiledCalldata
        }) : [];
        return {
          ...v3Details(details),
          classHash,
          addressSalt,
          constructorCalldata: compiledCalldata,
          signature
        };
      }
      buildUDCContractPayload(payload) {
        const calls = [].concat(payload).map((it) => {
          const {
            classHash,
            salt = "0",
            unique = true,
            constructorCalldata = []
          } = it;
          const compiledConstructorCallData = CallData.compile(constructorCalldata);
          return {
            contractAddress: UDC.ADDRESS,
            entrypoint: UDC.ENTRYPOINT,
            calldata: [
              classHash,
              salt,
              toCairoBool(unique),
              compiledConstructorCallData.length,
              ...compiledConstructorCallData
            ]
          };
        });
        return calls;
      }
      async accountInvocationsFactory(invocations, details) {
        const { nonce, blockIdentifier, skipValidate = true } = details;
        const safeNonce = await this.getNonceSafe(nonce);
        const chainId = await this.getChainId();
        const versions = details.versions.map((it) => toTransactionVersion(it));
        const tx0Payload = "payload" in invocations[0] ? invocations[0].payload : invocations[0];
        const cairoVersion = invocations[0].type === "DEPLOY_ACCOUNT" ? await this.getCairoVersion(tx0Payload.classHash) : await this.getCairoVersion();
        return Promise.all(
          [].concat(invocations).map(async (transaction2, index) => {
            const txPayload = "payload" in transaction2 ? transaction2.payload : transaction2;
            const signerDetails = {
              ...v3Details(details),
              walletAddress: this.address,
              nonce: toBigInt(Number(safeNonce) + index),
              maxFee: ZERO,
              chainId,
              cairoVersion,
              version: "",
              skipValidate
            };
            const common = {
              type: transaction2.type,
              nonce: toBigInt(Number(safeNonce) + index),
              blockIdentifier,
              version: ""
            };
            if (transaction2.type === "INVOKE_FUNCTION") {
              const versionX = reduceV2(versions[1]);
              signerDetails.version = versionX;
              common.version = versionX;
              const payload = await this.buildInvocation(
                [].concat(txPayload),
                signerDetails
              );
              return {
                ...common,
                ...payload
              };
            }
            if (transaction2.type === "DEPLOY") {
              const versionX = reduceV2(versions[1]);
              signerDetails.version = versionX;
              common.version = versionX;
              const calls = this.buildUDCContractPayload(txPayload);
              const payload = await this.buildInvocation(calls, signerDetails);
              return {
                ...common,
                ...payload,
                type: "INVOKE_FUNCTION"
                /* INVOKE */
              };
            }
            if (transaction2.type === "DECLARE") {
              const versionX = !isSierra(txPayload.contract) ? versions[0] : versions[1];
              signerDetails.version = versionX;
              common.version = versionX;
              const payload = await this.buildDeclarePayload(txPayload, signerDetails);
              return {
                ...common,
                ...payload
              };
            }
            if (transaction2.type === "DEPLOY_ACCOUNT") {
              const versionX = reduceV2(versions[1]);
              signerDetails.version = versionX;
              common.version = versionX;
              const payload = await this.buildAccountDeployPayload(txPayload, signerDetails);
              return {
                ...common,
                ...payload
              };
            }
            throw Error(`accountInvocationsFactory: unsupported transaction type: ${transaction2}`);
          })
        );
      }
      async getStarkName(address = this.address, StarknetIdContract2) {
        return super.getStarkName(address, StarknetIdContract2);
      }
    };
    var AccountInterface = class extends ProviderInterface {
    };
    var connect_exports = {};
    __export(connect_exports, {
      addDeclareTransaction: () => addDeclareTransaction,
      addInvokeTransaction: () => addInvokeTransaction,
      addStarknetChain: () => addStarknetChain,
      deploymentData: () => deploymentData,
      getPermissions: () => getPermissions,
      onAccountChange: () => onAccountChange,
      onNetworkChanged: () => onNetworkChanged,
      requestAccounts: () => requestAccounts,
      requestChainId: () => requestChainId,
      signMessage: () => signMessage,
      supportedSpecs: () => supportedSpecs,
      switchStarknetChain: () => switchStarknetChain,
      watchAsset: () => watchAsset
    });
    function requestAccounts(swo, silent_mode = false) {
      return swo.request({
        type: "wallet_requestAccounts",
        params: {
          silent_mode
        }
      });
    }
    function getPermissions(swo) {
      return swo.request({ type: "wallet_getPermissions" });
    }
    function watchAsset(swo, asset) {
      return swo.request({
        type: "wallet_watchAsset",
        params: asset
      });
    }
    function addStarknetChain(swo, chain) {
      return swo.request({
        type: "wallet_addStarknetChain",
        params: chain
      });
    }
    function switchStarknetChain(swo, chainId) {
      return swo.request({
        type: "wallet_switchStarknetChain",
        params: {
          chainId
        }
      });
    }
    function requestChainId(swo) {
      return swo.request({ type: "wallet_requestChainId" });
    }
    function deploymentData(swo) {
      return swo.request({ type: "wallet_deploymentData" });
    }
    function addInvokeTransaction(swo, params) {
      return swo.request({
        type: "wallet_addInvokeTransaction",
        params
      });
    }
    function addDeclareTransaction(swo, params) {
      return swo.request({
        type: "wallet_addDeclareTransaction",
        params
      });
    }
    function signMessage(swo, typedData2) {
      return swo.request({
        type: "wallet_signTypedData",
        params: typedData2
      });
    }
    function supportedSpecs(swo) {
      return swo.request({ type: "wallet_supportedSpecs" });
    }
    function onAccountChange(swo, callback) {
      swo.on("accountsChanged", callback);
    }
    function onNetworkChanged(swo, callback) {
      swo.on("networkChanged", callback);
    }
    var WalletAccount = class extends Account {
      constructor(providerOrOptions, walletProvider, cairoVersion) {
        super(providerOrOptions, "", "", cairoVersion);
        __publicField(this, "address", "");
        __publicField(this, "walletProvider");
        this.walletProvider = walletProvider;
        this.walletProvider.on("accountsChanged", (res) => {
          if (!res)
            return;
          this.address = res[0].toLowerCase();
        });
        this.walletProvider.on("networkChanged", (res) => {
          if (!res)
            return;
          this.channel.setChainId(res);
        });
        walletProvider.request({
          type: "wallet_requestAccounts",
          params: {
            silent_mode: false
          }
        }).then((res) => {
          this.address = res[0].toLowerCase();
        });
      }
      /**
       * WALLET EVENTS
       */
      onAccountChange(callback) {
        onAccountChange(this.walletProvider, callback);
      }
      onNetworkChanged(callback) {
        onNetworkChanged(this.walletProvider, callback);
      }
      /**
       * WALLET SPECIFIC METHODS
       */
      requestAccounts(silentMode = false) {
        return requestAccounts(this.walletProvider, silentMode);
      }
      getPermissions() {
        return getPermissions(this.walletProvider);
      }
      switchStarknetChain(chainId) {
        return switchStarknetChain(this.walletProvider, chainId);
      }
      watchAsset(asset) {
        return watchAsset(this.walletProvider, asset);
      }
      addStarknetChain(chain) {
        return addStarknetChain(this.walletProvider, chain);
      }
      /**
       * ACCOUNT METHODS
       */
      execute(calls) {
        const txCalls = [].concat(calls).map((it) => {
          const { contractAddress, entrypoint, calldata } = it;
          return {
            contract_address: contractAddress,
            entry_point: entrypoint,
            calldata
          };
        });
        const params = {
          calls: txCalls
        };
        return addInvokeTransaction(this.walletProvider, params);
      }
      declare(payload) {
        const declareContractPayload = extractContractHashes(payload);
        const pContract = payload.contract;
        const cairo1Contract = {
          ...pContract,
          abi: stringify2(pContract.abi)
        };
        if (!declareContractPayload.compiledClassHash) {
          throw Error("compiledClassHash is required");
        }
        const params = {
          compiled_class_hash: declareContractPayload.compiledClassHash,
          contract_class: cairo1Contract
        };
        return addDeclareTransaction(this.walletProvider, params);
      }
      async deploy(payload) {
        const { calls, addresses } = buildUDCCall(payload, this.address);
        const invokeResponse = await this.execute(calls);
        return {
          ...invokeResponse,
          contract_address: addresses
        };
      }
      signMessage(typedData2) {
        return signMessage(this.walletProvider, typedData2);
      }
      // TODO: MISSING ESTIMATES
    };
    var events_exports = {};
    __export(events_exports, {
      getAbiEvents: () => getAbiEvents,
      parseEvents: () => parseEvents
    });
    function getAbiEvents(abi) {
      return abi.filter((abiEntry) => abiEntry.type === "event" && (abiEntry.size || abiEntry.kind !== "enum")).reduce((acc, abiEntry) => {
        const entryName = abiEntry.name.slice(abiEntry.name.lastIndexOf(":") + 1);
        const abiEntryMod = { ...abiEntry };
        abiEntryMod.name = entryName;
        return {
          ...acc,
          [addHexPrefix(starkCurve.keccak(utf8ToArray(entryName)).toString(16))]: abiEntryMod
        };
      }, {});
    }
    function parseEvents(providerReceivedEvents, abiEvents, abiStructs, abiEnums) {
      const ret = providerReceivedEvents.flat().reduce((acc, recEvent) => {
        var _a3, _b;
        const abiEvent = abiEvents[recEvent.keys[0]];
        if (!abiEvent) {
          return acc;
        }
        const parsedEvent = {};
        parsedEvent[abiEvent.name] = {};
        recEvent.keys.shift();
        const keysIter = recEvent.keys[Symbol.iterator]();
        const dataIter = recEvent.data[Symbol.iterator]();
        const abiEventKeys = ((_a3 = abiEvent.members) == null ? void 0 : _a3.filter((it) => it.kind === "key")) || abiEvent.keys;
        const abiEventData = ((_b = abiEvent.members) == null ? void 0 : _b.filter((it) => it.kind === "data")) || abiEvent.data;
        abiEventKeys.forEach((key) => {
          parsedEvent[abiEvent.name][key.name] = responseParser(
            keysIter,
            key,
            abiStructs,
            abiEnums,
            parsedEvent[abiEvent.name]
          );
        });
        abiEventData.forEach((data) => {
          parsedEvent[abiEvent.name][data.name] = responseParser(
            dataIter,
            data,
            abiStructs,
            abiEnums,
            parsedEvent[abiEvent.name]
          );
        });
        acc.push(parsedEvent);
        return acc;
      }, []);
      return ret;
    }
    var splitArgsAndOptions = (args) => {
      const options = [
        "blockIdentifier",
        "parseRequest",
        "parseResponse",
        "formatResponse",
        "maxFee",
        "nonce",
        "signature",
        "addressSalt"
      ];
      const lastArg = args[args.length - 1];
      if (typeof lastArg === "object" && options.some((x) => x in lastArg)) {
        return { args, options: args.pop() };
      }
      return { args };
    };
    function buildCall(contract, functionAbi) {
      return async function(...args) {
        const params = splitArgsAndOptions(args);
        return contract.call(functionAbi.name, params.args, {
          parseRequest: true,
          parseResponse: true,
          ...params.options
        });
      };
    }
    function buildInvoke(contract, functionAbi) {
      return async function(...args) {
        const params = splitArgsAndOptions(args);
        return contract.invoke(functionAbi.name, params.args, {
          parseRequest: true,
          ...params.options
        });
      };
    }
    function buildDefault(contract, functionAbi) {
      if (functionAbi.stateMutability === "view" || functionAbi.state_mutability === "view") {
        return buildCall(contract, functionAbi);
      }
      return buildInvoke(contract, functionAbi);
    }
    function buildPopulate(contract, functionAbi) {
      return function(...args) {
        return contract.populate(functionAbi.name, args);
      };
    }
    function buildEstimate(contract, functionAbi) {
      return function(...args) {
        return contract.estimate(functionAbi.name, args);
      };
    }
    function getCalldata(args, callback) {
      if (Array.isArray(args) && "__compiled__" in args)
        return args;
      if (Array.isArray(args) && Array.isArray(args[0]) && "__compiled__" in args[0])
        return args[0];
      return callback();
    }
    var Contract = class {
      /**
       * Contract class to handle contract methods
       *
       * @param abi - Abi of the contract object
       * @param address (optional) - address to connect to
       * @param providerOrAccount (optional) - Provider or Account to attach to
       */
      constructor(abi, address, providerOrAccount = defaultProvider) {
        __publicField(this, "abi");
        __publicField(this, "address");
        __publicField(this, "providerOrAccount");
        __publicField(this, "deployTransactionHash");
        __publicField(this, "structs");
        __publicField(this, "events");
        __publicField(this, "functions");
        __publicField(this, "callStatic");
        __publicField(this, "populateTransaction");
        __publicField(this, "estimateFee");
        __publicField(this, "callData");
        this.address = address && address.toLowerCase();
        this.providerOrAccount = providerOrAccount;
        this.callData = new CallData(abi);
        this.structs = CallData.getAbiStruct(abi);
        this.events = getAbiEvents(abi);
        const parser = createAbiParser(abi);
        this.abi = parser.getLegacyFormat();
        const options = { enumerable: true, value: {}, writable: false };
        Object.defineProperties(this, {
          functions: { enumerable: true, value: {}, writable: false },
          callStatic: { enumerable: true, value: {}, writable: false },
          populateTransaction: { enumerable: true, value: {}, writable: false },
          estimateFee: { enumerable: true, value: {}, writable: false }
        });
        this.abi.forEach((abiElement) => {
          if (abiElement.type !== "function")
            return;
          const signature = abiElement.name;
          if (!this[signature]) {
            Object.defineProperty(this, signature, {
              ...options,
              value: buildDefault(this, abiElement)
            });
          }
          if (!this.functions[signature]) {
            Object.defineProperty(this.functions, signature, {
              ...options,
              value: buildDefault(this, abiElement)
            });
          }
          if (!this.callStatic[signature]) {
            Object.defineProperty(this.callStatic, signature, {
              ...options,
              value: buildCall(this, abiElement)
            });
          }
          if (!this.populateTransaction[signature]) {
            Object.defineProperty(this.populateTransaction, signature, {
              ...options,
              value: buildPopulate(this, abiElement)
            });
          }
          if (!this.estimateFee[signature]) {
            Object.defineProperty(this.estimateFee, signature, {
              ...options,
              value: buildEstimate(this, abiElement)
            });
          }
        });
      }
      attach(address) {
        this.address = address;
      }
      connect(providerOrAccount) {
        this.providerOrAccount = providerOrAccount;
      }
      async deployed() {
        if (this.deployTransactionHash) {
          await this.providerOrAccount.waitForTransaction(this.deployTransactionHash);
          this.deployTransactionHash = void 0;
        }
        return this;
      }
      async call(method, args = [], {
        parseRequest = true,
        parseResponse = true,
        formatResponse = void 0,
        blockIdentifier = void 0
      } = {}) {
        assert(this.address !== null, "contract is not connected to an address");
        const calldata = getCalldata(args, () => {
          if (parseRequest) {
            this.callData.validate("CALL", method, args);
            return this.callData.compile(method, args);
          }
          console.warn("Call skipped parsing but provided rawArgs, possible malfunction request");
          return args;
        });
        return this.providerOrAccount.callContract(
          {
            contractAddress: this.address,
            calldata,
            entrypoint: method
          },
          blockIdentifier
        ).then((it) => {
          if (!parseResponse) {
            return it;
          }
          if (formatResponse) {
            return this.callData.format(method, it, formatResponse);
          }
          return this.callData.parse(method, it);
        });
      }
      invoke(method, args = [], { parseRequest = true, maxFee, nonce, signature } = {}) {
        assert(this.address !== null, "contract is not connected to an address");
        const calldata = getCalldata(args, () => {
          if (parseRequest) {
            this.callData.validate("INVOKE", method, args);
            return this.callData.compile(method, args);
          }
          console.warn("Invoke skipped parsing but provided rawArgs, possible malfunction request");
          return args;
        });
        const invocation = {
          contractAddress: this.address,
          calldata,
          entrypoint: method
        };
        if ("execute" in this.providerOrAccount) {
          return this.providerOrAccount.execute(invocation, void 0, {
            maxFee,
            nonce
          });
        }
        if (!nonce)
          throw new Error(`Nonce is required when invoking a function without an account`);
        console.warn(`Invoking ${method} without an account. This will not work on a public node.`);
        return this.providerOrAccount.invokeFunction(
          {
            ...invocation,
            signature
          },
          {
            nonce
          }
        );
      }
      async estimate(method, args = []) {
        assert(this.address !== null, "contract is not connected to an address");
        if (!getCalldata(args, () => false)) {
          this.callData.validate("INVOKE", method, args);
        }
        const invocation = this.populate(method, args);
        if ("estimateInvokeFee" in this.providerOrAccount) {
          return this.providerOrAccount.estimateInvokeFee(invocation);
        }
        throw Error("Contract must be connected to the account contract to estimate");
      }
      populate(method, args = []) {
        const calldata = getCalldata(args, () => this.callData.compile(method, args));
        return {
          contractAddress: this.address,
          entrypoint: method,
          calldata
        };
      }
      parseEvents(receipt) {
        var _a3;
        return parseEvents(
          ((_a3 = receipt.events) == null ? void 0 : _a3.filter(
            (event) => cleanHex(event.from_address) === cleanHex(this.address),
            []
          )) || [],
          this.events,
          this.structs,
          CallData.getAbiEnum(this.abi)
        );
      }
      isCairo1() {
        return cairo_exports.isCairo1Abi(this.abi);
      }
      async getVersion() {
        return this.providerOrAccount.getContractVersion(this.address);
      }
      typedv2(tAbi) {
        return this;
      }
    };
    var ContractInterface = class {
      constructor() {
        __publicField(this, "functions");
        __publicField(this, "callStatic");
        __publicField(this, "populateTransaction");
        __publicField(this, "estimateFee");
      }
    };
    var ContractFactory = class {
      /**
       * @param params CFParams
       *  - compiledContract: CompiledContract;
       *  - account: AccountInterface;
       *  - casm?: CairoAssembly;
       *  - classHash?: string;
       *  - compiledClassHash?: string;
       *  - abi?: Abi;
       */
      constructor(params) {
        __publicField(this, "compiledContract");
        __publicField(this, "account");
        __publicField(this, "abi");
        __publicField(this, "classHash");
        __publicField(this, "casm");
        __publicField(this, "compiledClassHash");
        __publicField(this, "CallData");
        this.compiledContract = params.compiledContract;
        this.account = params.account;
        this.casm = params.casm;
        this.abi = params.abi ?? params.compiledContract.abi;
        this.classHash = params.classHash;
        this.compiledClassHash = params.compiledClassHash;
        this.CallData = new CallData(this.abi);
      }
      /**
       * Deploys contract and returns new instance of the Contract
       *
       * If contract is not declared it will first declare it, and then deploy
       */
      async deploy(...args) {
        const { args: param, options = { parseRequest: true } } = splitArgsAndOptions(args);
        const constructorCalldata = getCalldata(param, () => {
          if (options.parseRequest) {
            this.CallData.validate("DEPLOY", "constructor", param);
            return this.CallData.compile("constructor", param);
          }
          console.warn("Call skipped parsing but provided rawArgs, possible malfunction request");
          return param;
        });
        const {
          deploy: { contract_address, transaction_hash }
        } = await this.account.declareAndDeploy({
          contract: this.compiledContract,
          casm: this.casm,
          classHash: this.classHash,
          compiledClassHash: this.compiledClassHash,
          constructorCalldata,
          salt: options.addressSalt
        });
        assert(Boolean(contract_address), "Deployment of the contract failed");
        const contractInstance = new Contract(
          this.compiledContract.abi,
          contract_address,
          this.account
        );
        contractInstance.deployTransactionHash = transaction_hash;
        return contractInstance;
      }
      /**
       * Attaches to new Account
       *
       * @param account - new Account to attach to
       */
      connect(account) {
        this.account = account;
        return this;
      }
      /**
       * Attaches current abi and account to the new address
       */
      attach(address) {
        return new Contract(this.abi, address, this.account);
      }
      // ethers.js' getDeployTransaction can't be supported as it requires the account or signer to return a signed transaction which is not possible with the current implementation
    };
    var import_utils2 = require_utils();
    function addAddressPadding(address) {
      return addHexPrefix(removeHexPrefix(toHex(address)).padStart(64, "0"));
    }
    function validateAndParseAddress(address) {
      assertInRange(address, ZERO, ADDR_BOUND - 1n, "Starknet Address");
      const result = addAddressPadding(address);
      if (!result.match(/^(0x)?[0-9a-fA-F]{64}$/)) {
        throw new Error("Invalid Address Format");
      }
      return result;
    }
    function getChecksumAddress(address) {
      const chars = removeHexPrefix(validateAndParseAddress(address)).toLowerCase().split("");
      const hex = removeHexPrefix(keccakBn(address));
      const hashed = (0, import_utils2.hexToBytes)(hex.padStart(64, "0"));
      for (let i = 0; i < chars.length; i += 2) {
        if (hashed[i >> 1] >> 4 >= 8) {
          chars[i] = chars[i].toUpperCase();
        }
        if ((hashed[i >> 1] & 15) >= 8) {
          chars[i + 1] = chars[i + 1].toUpperCase();
        }
      }
      return addHexPrefix(chars.join(""));
    }
    function validateChecksumAddress(address) {
      return getChecksumAddress(address) === address;
    }
    var import_url_join = __toESM(require_url_join());
    var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
    var localhostDomainRE = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/;
    var nonLocalhostDomainRE = /^[^\s.]+\.\S{2,}$/;
    function isUrl(s) {
      if (!s) {
        return false;
      }
      if (typeof s !== "string") {
        return false;
      }
      const match = s.match(protocolAndDomainRE);
      if (!match) {
        return false;
      }
      const everythingAfterProtocol = match[1];
      if (!everythingAfterProtocol) {
        return false;
      }
      if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {
        return true;
      }
      return false;
    }
    function buildUrl(baseUrl, defaultPath, urlOrPath) {
      return isUrl(urlOrPath) ? urlOrPath : (0, import_url_join.default)(baseUrl, urlOrPath ?? defaultPath);
    }
    var number = num_exports;
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/constants.js
var require_constants3 = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZERO = void 0;
    exports.ZERO = 0n;
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/utils.js
var require_utils5 = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isXplorerSubdomain = exports.isStarkRootDomain = exports.isBraavosSubdomain = exports.isSubdomain = exports.getUtilsMulticallContract = exports.getBlobbertContract = exports.getMulticallContract = exports.getPopVerifierContract = exports.getPfpVerifierContract = exports.getVerifierContract = exports.getIdentityContract = exports.getNamingContract = exports.encodeDomain = exports.decodeDomain = exports.isStarkDomain = void 0;
    var starknet_1 = require_dist();
    var constants_1 = require_constants3();
    var basicAlphabet = "abcdefghijklmnopqrstuvwxyz0123456789-";
    var basicSizePlusOne = BigInt(basicAlphabet.length + 1);
    var bigAlphabet = "这来";
    var basicAlphabetSize = BigInt(basicAlphabet.length);
    var bigAlphabetSize = BigInt(bigAlphabet.length);
    var bigAlphabetSizePlusOne = BigInt(bigAlphabet.length + 1);
    function isStarkDomain(domain) {
      return /^(?:[a-z0-9-]{1,48}(?:[a-z0-9-]{1,48}[a-z0-9-])?\.)*[a-z0-9-]{1,48}\.stark$/.test(domain);
    }
    exports.isStarkDomain = isStarkDomain;
    function decodeDomain(encoded) {
      let decoded = "";
      encoded.forEach((subdomain) => {
        decoded += decode(subdomain);
        if (decoded)
          decoded += ".";
      });
      if (!decoded) {
        return decoded;
      }
      return decoded.concat("stark");
    }
    exports.decodeDomain = decodeDomain;
    function encodeDomain(domain) {
      if (!domain)
        return [BigInt(0)];
      const encoded = [];
      for (const subdomain of domain.replace(".stark", "").split("."))
        encoded.push(encode2(subdomain));
      return encoded;
    }
    exports.encodeDomain = encodeDomain;
    function getNamingContract(chainId) {
      const namingdMainnetContract = "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678";
      const namingdGoerliContract = "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce";
      const namingdSepoliaContract = "0x00000154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return namingdMainnetContract;
        case starknet_1.constants.StarknetChainId.SN_GOERLI:
          return namingdGoerliContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return namingdSepoliaContract;
        default:
          throw new Error("Starknet.id naming contract is not yet deployed on this network");
      }
    }
    exports.getNamingContract = getNamingContract;
    function getIdentityContract(chainId) {
      const starknetIdMainnetContract = "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af";
      const starknetIdGoerliContract = "0x0783a9097b26eae0586373b2ce0ed3529ddc44069d1e0fbc4f66d42b69d6850d";
      const starknetIdSepoliaContract = "0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return starknetIdMainnetContract;
        case starknet_1.constants.StarknetChainId.SN_GOERLI:
          return starknetIdGoerliContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return starknetIdSepoliaContract;
        default:
          throw new Error("Starknet.id identity contract is not yet deployed on this network");
      }
    }
    exports.getIdentityContract = getIdentityContract;
    function getVerifierContract(chainId) {
      const starknetIdMainnetContract = "0x0480258f58d43fb73936f803780047a0f6d0a563697d80bd3f95b603f9c8b1c8";
      const starknetIdGoerliContract = "0x019e5204152a72891bf8cd0bed8f03593fdb29ceacd14fca587be5d9fcf87c0e";
      const starknetIdSepoliaContract = "0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return starknetIdMainnetContract;
        case starknet_1.constants.StarknetChainId.SN_GOERLI:
          return starknetIdGoerliContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return starknetIdSepoliaContract;
        default:
          throw new Error("Starknet.id verifier contract is not yet deployed on this network");
      }
    }
    exports.getVerifierContract = getVerifierContract;
    function getPfpVerifierContract(chainId) {
      const starknetIdMainnetContract = "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7";
      const starknetIdGoerliContract = "0x03cac3228b434259734ee0e4ff445f642206ea11adace7e4f45edd2596748698";
      const starknetIdSepoliaContract = "0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return starknetIdMainnetContract;
        case starknet_1.constants.StarknetChainId.SN_GOERLI:
          return starknetIdGoerliContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return starknetIdSepoliaContract;
        default:
          throw new Error("Starknet.id profile picture verifier contract is not yet deployed on this network");
      }
    }
    exports.getPfpVerifierContract = getPfpVerifierContract;
    function getPopVerifierContract(chainId) {
      const starknetIdMainnetContract = "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4";
      const starknetIdGoerliContract = "0x03528caf090179e337931ee669a5b0214041e1bae30d460ff07d2cea2c7a9106";
      const starknetIdSepoliaContract = "0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return starknetIdMainnetContract;
        case starknet_1.constants.StarknetChainId.SN_GOERLI:
          return starknetIdGoerliContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return starknetIdSepoliaContract;
        default:
          throw new Error("Starknet.id proof of personhood verifier contract is not yet deployed on this network");
      }
    }
    exports.getPopVerifierContract = getPopVerifierContract;
    function getMulticallContract(chainId) {
      const multicallContract = "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return multicallContract;
        case starknet_1.constants.StarknetChainId.SN_GOERLI:
          return multicallContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return multicallContract;
        default:
          throw new Error("Starknet.id multicall contract is not yet deployed on this network");
      }
    }
    exports.getMulticallContract = getMulticallContract;
    function getBlobbertContract(chainId) {
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return "0x00539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1";
        default:
          return "0";
      }
    }
    exports.getBlobbertContract = getBlobbertContract;
    function getUtilsMulticallContract(chainId) {
      const utilsMulticallContract = "0x004a50c8a8bc97eaaa947e8cbde481beaf5d6c38b4ac89da31ebdddb547d13d7";
      switch (chainId) {
        case starknet_1.constants.StarknetChainId.SN_MAIN:
          return utilsMulticallContract;
        case starknet_1.constants.StarknetChainId.SN_SEPOLIA:
          return utilsMulticallContract;
        default:
          throw new Error("Starknet.id utils multicall contract is not yet deployed on this network");
      }
    }
    exports.getUtilsMulticallContract = getUtilsMulticallContract;
    function extractStars(str) {
      let k = 0;
      while (str.endsWith(bigAlphabet[bigAlphabet.length - 1])) {
        str = str.substring(0, str.length - 1);
        k += 1;
      }
      return [str, k];
    }
    function decode(felt) {
      let decoded = "";
      while (felt !== constants_1.ZERO) {
        const code = felt % basicSizePlusOne;
        felt /= basicSizePlusOne;
        if (code === BigInt(basicAlphabet.length)) {
          const nextSubdomain = felt / bigAlphabetSizePlusOne;
          if (nextSubdomain === constants_1.ZERO) {
            const code2 = felt % bigAlphabetSizePlusOne;
            felt = nextSubdomain;
            if (code2 === constants_1.ZERO)
              decoded += basicAlphabet[0];
            else
              decoded += bigAlphabet[Number(code2) - 1];
          } else {
            const code2 = felt % bigAlphabetSize;
            decoded += bigAlphabet[Number(code2)];
            felt /= bigAlphabetSize;
          }
        } else
          decoded += basicAlphabet[Number(code)];
      }
      const [str, k] = extractStars(decoded);
      if (k)
        decoded = str + (k % 2 === 0 ? bigAlphabet[bigAlphabet.length - 1].repeat(k / 2 - 1) + bigAlphabet[0] + basicAlphabet[1] : bigAlphabet[bigAlphabet.length - 1].repeat((k - 1) / 2 + 1));
      return decoded;
    }
    function encode2(decoded) {
      let encoded = BigInt(0);
      let multiplier = BigInt(1);
      if (!decoded) {
        return encoded;
      }
      if (decoded.endsWith(bigAlphabet[0] + basicAlphabet[1])) {
        const [str, k] = extractStars(decoded.substring(0, decoded.length - 2));
        decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(2 * (k + 1));
      } else {
        const [str, k] = extractStars(decoded);
        if (k)
          decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(1 + 2 * (k - 1));
      }
      for (let i = 0; i < decoded.length; i += 1) {
        const char = decoded[i];
        const index = basicAlphabet.indexOf(char);
        const bnIndex = BigInt(basicAlphabet.indexOf(char));
        if (index !== -1) {
          if (i === decoded.length - 1 && decoded[i] === basicAlphabet[0]) {
            encoded += multiplier * basicAlphabetSize;
            multiplier *= basicSizePlusOne;
            multiplier *= basicSizePlusOne;
          } else {
            encoded += multiplier * bnIndex;
            multiplier *= basicSizePlusOne;
          }
        } else if (bigAlphabet.indexOf(char) !== -1) {
          encoded += multiplier * basicAlphabetSize;
          multiplier *= basicSizePlusOne;
          const newid = (i === decoded.length - 1 ? 1 : 0) + bigAlphabet.indexOf(char);
          encoded += multiplier * BigInt(newid);
          multiplier *= bigAlphabetSize;
        }
      }
      return encoded;
    }
    function isSubdomain(domain) {
      if (!domain)
        return false;
      return Boolean((domain.match(/\./g) || []).length > 1);
    }
    exports.isSubdomain = isSubdomain;
    function isBraavosSubdomain(domain) {
      if (!domain)
        return false;
      return /^([a-z0-9-]){1,48}\.braavos.stark$/.test(domain);
    }
    exports.isBraavosSubdomain = isBraavosSubdomain;
    function isStarkRootDomain(domain) {
      return /^([a-z0-9-]){1,48}\.stark$/.test(domain);
    }
    exports.isStarkRootDomain = isStarkRootDomain;
    function isXplorerSubdomain(domain) {
      if (!domain)
        return false;
      return /^([a-z0-9-]){1,48}\.xplorer.stark$/.test(domain);
    }
    exports.isXplorerSubdomain = isXplorerSubdomain;
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/types/lib.js
var require_lib3 = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/types/lib.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/types/index.js
var require_types = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/types/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_lib3(), exports);
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/internal.js
var require_internal = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/internal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.queryServer = exports.decodeErrorMsg = exports.extractArrayFromErrorMessage = exports.getProfileDataCalldata = exports.getStarkProfilesCalldata = exports.getStarknamesCalldata = exports.notEqual = exports.staticExecution = exports.arrayReference = exports.reference = exports.hardcoded = exports.fetchImageUrl = exports.parseImageUrl = exports.parseBase64Image = void 0;
    var starknet_1 = require_dist();
    var __1 = require_dist2();
    var parseBase64Image = (metadata) => {
      return JSON.parse(atob(metadata.split(",")[1].slice(0, -1))).image;
    };
    exports.parseBase64Image = parseBase64Image;
    var parseImageUrl = (url) => {
      return url.startsWith("ipfs://") ? url.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : url;
    };
    exports.parseImageUrl = parseImageUrl;
    var fetchImageUrl = async (url) => {
      try {
        const response = await fetch((0, exports.parseImageUrl)(url));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.image) {
          return (0, exports.parseImageUrl)(data.image);
        } else {
          return "Image is not set";
        }
      } catch (error) {
        console.error("There was a problem fetching the image URL:", error);
        return "Error fetching data";
      }
    };
    exports.fetchImageUrl = fetchImageUrl;
    var hardcoded = (arg) => {
      return new starknet_1.CairoCustomEnum({
        Hardcoded: arg
      });
    };
    exports.hardcoded = hardcoded;
    var reference = (call, pos) => {
      return new starknet_1.CairoCustomEnum({
        Reference: starknet_1.cairo.tuple(call, pos)
      });
    };
    exports.reference = reference;
    var arrayReference = (call, pos) => {
      return new starknet_1.CairoCustomEnum({
        ArrayReference: starknet_1.cairo.tuple(call, pos)
      });
    };
    exports.arrayReference = arrayReference;
    var staticExecution = () => {
      return new starknet_1.CairoCustomEnum({
        Static: {}
      });
    };
    exports.staticExecution = staticExecution;
    var notEqual = (call, pos, value) => {
      return new starknet_1.CairoCustomEnum({
        IfNotEqual: starknet_1.cairo.tuple(call, pos, value)
      });
    };
    exports.notEqual = notEqual;
    var getStarknamesCalldata = (addresses, namingContract) => {
      let calldata = [];
      addresses.forEach((address) => {
        calldata.push({
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(namingContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("address_to_domain")),
          calldata: [(0, exports.hardcoded)(address), (0, exports.hardcoded)("0")]
        });
      });
      return calldata;
    };
    exports.getStarknamesCalldata = getStarknamesCalldata;
    var getStarkProfilesCalldata = (addresses, namingContract, identityContract, pfpVerifierContract, utilsMulticallContract, blobbertContract) => {
      let calldata = [];
      let uriCalldata = [];
      const nbInstructions = 5;
      addresses.forEach((address, index) => {
        calldata.push({
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(namingContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("address_to_domain")),
          calldata: [(0, exports.hardcoded)(address), (0, exports.hardcoded)("0")]
        }, {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(namingContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("domain_to_id")),
          calldata: [(0, exports.arrayReference)(index * nbInstructions, 0)]
          //  result of address_to_domain
        }, {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_verifier_data")),
          calldata: [
            (0, exports.reference)(index * nbInstructions + 1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("nft_pp_contract")),
            (0, exports.hardcoded)(pfpVerifierContract),
            (0, exports.hardcoded)("0")
          ]
        }, {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_extended_verifier_data")),
          calldata: [
            (0, exports.reference)(index * nbInstructions + 1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("nft_pp_id")),
            (0, exports.hardcoded)("2"),
            (0, exports.hardcoded)(pfpVerifierContract),
            (0, exports.hardcoded)("0")
          ]
        }, {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(utilsMulticallContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("not_zero_and_not_y")),
          calldata: [
            (0, exports.reference)(index * nbInstructions + 2, 0),
            (0, exports.hardcoded)(blobbertContract)
          ]
        });
        uriCalldata.push({
          execution: (0, exports.notEqual)(index * nbInstructions + 4, 0, 0),
          to: (0, exports.reference)(index * nbInstructions + 2, 0),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("tokenURI")),
          calldata: [
            (0, exports.reference)(index * nbInstructions + 3, 1),
            (0, exports.reference)(index * nbInstructions + 3, 2)
          ]
        });
      });
      return [...calldata, ...uriCalldata];
    };
    exports.getStarkProfilesCalldata = getStarkProfilesCalldata;
    var getProfileDataCalldata = (address, namingContract, identityContract, verifierContract, pfpVerifierContract, popVerifierContract) => {
      let calldata = [];
      calldata.push(
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(namingContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("address_to_domain")),
          calldata: [(0, exports.hardcoded)(address), (0, exports.hardcoded)("0")]
        },
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(namingContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("domain_to_id")),
          calldata: [(0, exports.arrayReference)(0, 0)]
        },
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_verifier_data")),
          calldata: [
            (0, exports.reference)(1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("twitter")),
            (0, exports.hardcoded)(verifierContract),
            (0, exports.hardcoded)("0")
          ]
        },
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_verifier_data")),
          calldata: [
            (0, exports.reference)(1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("github")),
            (0, exports.hardcoded)(verifierContract),
            (0, exports.hardcoded)("0")
          ]
        },
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_verifier_data")),
          calldata: [
            (0, exports.reference)(1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("discord")),
            (0, exports.hardcoded)(verifierContract),
            (0, exports.hardcoded)("0")
          ]
        },
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_verifier_data")),
          calldata: [
            (0, exports.reference)(1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("proof_of_personhood")),
            (0, exports.hardcoded)(popVerifierContract),
            (0, exports.hardcoded)("0")
          ]
        },
        // PFP
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_verifier_data")),
          calldata: [
            (0, exports.reference)(1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("nft_pp_contract")),
            (0, exports.hardcoded)(pfpVerifierContract),
            (0, exports.hardcoded)("0")
          ]
        },
        {
          execution: (0, exports.staticExecution)(),
          to: (0, exports.hardcoded)(identityContract),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("get_extended_verifier_data")),
          calldata: [
            (0, exports.reference)(1, 0),
            (0, exports.hardcoded)(starknet_1.shortString.encodeShortString("nft_pp_id")),
            (0, exports.hardcoded)("2"),
            (0, exports.hardcoded)(pfpVerifierContract),
            (0, exports.hardcoded)("0")
          ]
        },
        {
          execution: (0, exports.notEqual)(6, 0, 0),
          to: (0, exports.reference)(6, 0),
          selector: (0, exports.hardcoded)(starknet_1.hash.getSelectorFromName("tokenURI")),
          calldata: [(0, exports.reference)(7, 1), (0, exports.reference)(7, 2)]
        }
      );
      return calldata;
    };
    exports.getProfileDataCalldata = getProfileDataCalldata;
    var extractArrayFromErrorMessage = (errorMsg) => {
      const pattern = /Execution failed\. Failure reason: \((.*?)\)\./;
      const match = errorMsg.match(pattern);
      if (match && match[1]) {
        const values = match[1].split(",").map((value) => value.trim());
        const res = values.map((entry) => {
          const hexMatch = entry.match(/(0x[0-9a-f]+)/i);
          if (hexMatch && hexMatch[1]) {
            return hexMatch[1];
          }
        });
        return (0, exports.decodeErrorMsg)(res);
      }
      return null;
    };
    exports.extractArrayFromErrorMessage = extractArrayFromErrorMessage;
    var decodeErrorMsg = (array) => {
      try {
        let index = 0;
        const result = {
          errorType: starknet_1.shortString.decodeShortString(array[index++]),
          domain_slice: "",
          uris: []
        };
        const domainSize = parseInt(array[index++], 16);
        for (let i = 0; i < domainSize; i++) {
          result.domain_slice += __1.utils.decodeDomain([BigInt(array[index++])]).replace(".stark", "");
          if (i < domainSize - 1)
            result.domain_slice += ".";
        }
        while (index < array.length) {
          let uriSize = parseInt(array[index++], 16);
          let uri = "";
          for (let i = 0; i < uriSize; i++) {
            uri += starknet_1.shortString.decodeShortString(array[index++]);
          }
          result.uris.push(uri);
        }
        return result;
      } catch (error) {
        console.error("Error decoding array:", error);
        return null;
      }
    };
    exports.decodeErrorMsg = decodeErrorMsg;
    var queryServer = async (serverUri, domain) => {
      try {
        const response = await fetch(`${serverUri}${domain}`);
        if (!response.ok) {
          const errorResponse = await response.text();
          throw new Error(errorResponse || "Error while querying server");
        }
        const data = await response.json();
        return { data };
      } catch (error) {
        return { error };
      }
    };
    exports.queryServer = queryServer;
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/default.js
var require_default = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StarknetIdNavigator = void 0;
    var starknet_1 = require_dist();
    var utils_1 = require_utils5();
    var internal_1 = require_internal();
    var StarknetIdNavigator = class {
      constructor(provider2, chainId, starknetIdContract) {
        this.provider = provider2;
        this.chainId = chainId;
        this.StarknetIdContract = starknetIdContract ?? {
          identity: (0, utils_1.getIdentityContract)(chainId),
          naming: (0, utils_1.getNamingContract)(chainId)
        };
      }
      async getAddressFromStarkName(domain) {
        const contract = this.StarknetIdContract.naming ?? (0, utils_1.getNamingContract)(this.chainId);
        const encodedDomain = (0, utils_1.encodeDomain)(domain).map((elem) => elem.toString(10));
        try {
          return await this.tryResolveDomain(contract, encodedDomain, []);
        } catch (error) {
          if (error instanceof Error) {
            const data = (0, internal_1.extractArrayFromErrorMessage)(String(error));
            if (!data || (data == null ? void 0 : data.errorType) !== "offchain_resolving") {
              throw new Error("Could not get address from stark name");
            }
            for (const uri of data.uris) {
              try {
                const serverRes = await (0, internal_1.queryServer)(uri, data.domain_slice);
                if (serverRes.error) {
                  continue;
                }
                const hint = [
                  serverRes.data.address,
                  serverRes.data.r,
                  serverRes.data.s,
                  serverRes.data.max_validity
                ];
                return await this.tryResolveDomain(contract, encodedDomain, hint);
              } catch (error2) {
                throw new Error(`Could not resolve domain on URI ${uri} : ${error2.message}`);
              }
            }
            throw new Error("Could not get address from stark name");
          } else {
            throw new Error("Could not get address from stark name");
          }
        }
      }
      async getStarkName(address) {
        const contract = this.StarknetIdContract.naming ?? (0, utils_1.getNamingContract)(this.chainId);
        try {
          return await this.tryResolveAddress(contract, address);
        } catch (error) {
          if (error instanceof Error) {
            const data = (0, internal_1.extractArrayFromErrorMessage)(String(error));
            if (!data || (data == null ? void 0 : data.errorType) !== "offchain_resolving") {
              throw new Error("Could not get stark name");
            }
            for (const uri of data.uris) {
              try {
                const serverRes = await (0, internal_1.queryServer)(uri, data.domain_slice);
                if (serverRes.error) {
                  continue;
                }
                const hint = [
                  serverRes.data.address,
                  serverRes.data.r,
                  serverRes.data.s,
                  serverRes.data.max_validity
                ];
                return await this.tryResolveAddress(contract, address, hint);
              } catch (error2) {
                throw new Error(`Could not resolve domain on URI ${uri} : ${error2.message}`);
              }
            }
            throw new Error("Could not get stark name");
          } else {
            throw new Error("Could not get stark name");
          }
        }
      }
      async getStarkNames(addresses, multicallContract) {
        const namingContract = this.StarknetIdContract.naming ?? (0, utils_1.getNamingContract)(this.chainId);
        const multicallAddress = multicallContract ?? (0, utils_1.getMulticallContract)(this.chainId);
        const { abi: multicallAbi } = await this.provider.getClassAt(multicallAddress);
        const contract = new starknet_1.Contract(multicallAbi, multicallAddress, this.provider);
        try {
          let calldata = (0, internal_1.getStarknamesCalldata)(addresses, namingContract);
          const data = await contract.call("aggregate", [calldata]);
          let result = [];
          if (Array.isArray(data)) {
            data.forEach((hexDomain) => {
              const decimalDomain = hexDomain.map((element) => BigInt(element)).slice(1);
              const stringDomain = (0, utils_1.decodeDomain)(decimalDomain);
              result.push(stringDomain);
            });
          }
          return result;
        } catch (e) {
          throw new Error("Could not get stark names");
        }
      }
      async getStarknetId(domain) {
        const contract = this.StarknetIdContract.naming ?? (0, utils_1.getNamingContract)(this.chainId);
        try {
          const encodedDomain = (0, utils_1.encodeDomain)(domain).map((elem) => elem.toString(10));
          const starknetId2 = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "domain_to_id",
            calldata: starknet_1.CallData.compile({
              domain: encodedDomain
            })
          });
          return BigInt(starknetId2.result[0]).toString();
        } catch (e) {
          if (e instanceof Error && e.message === "Could not get stark name") {
            throw e;
          }
          throw new Error("Could not get starknet id from starkname");
        }
      }
      async getUserData(idDomainOrAddr, field) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const data = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_user_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString(field),
              domain: "0"
            })
          });
          return starknet_1.num.toBigInt(data.result[0]);
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user data from starknet id");
        }
      }
      async getExtentedUserData(idDomainOrAddr, field, length) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const data = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_extended_user_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString(field),
              length: length.toString(),
              domain: "0"
            })
          });
          data.result.shift();
          const res = data.result.map((element) => {
            return starknet_1.num.toBigInt(element);
          });
          return res;
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user extended data from starknet id");
        }
      }
      async getUnboundedUserData(idDomainOrAddr, field) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const data = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_unbounded_user_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString(field),
              domain: "0"
            })
          });
          data.result.shift();
          const res = data.result.map((element) => {
            return starknet_1.num.toBigInt(element);
          });
          return res;
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user unbounded data from starknet id");
        }
      }
      async getVerifierData(idDomainOrAddr, field, verifier) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const verifierAddress = verifier ?? (0, utils_1.getVerifierContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const data = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_verifier_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString(field),
              verifier_address: verifierAddress,
              domain: "0"
            })
          });
          return starknet_1.num.toBigInt(data.result[0]);
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user verifier data from starknet id");
        }
      }
      async getExtendedVerifierData(idDomainOrAddr, field, length, verifier) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const verifierAddress = verifier ?? (0, utils_1.getVerifierContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const data = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_extended_verifier_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString(field),
              length: length.toString(),
              verifier_address: verifierAddress,
              domain: "0"
            })
          });
          data.result.shift();
          const res = data.result.map((element) => {
            return starknet_1.num.toBigInt(element);
          });
          return res;
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user verifier data from starknet id");
        }
      }
      async getUnboundedVerifierData(idDomainOrAddr, field, verifier) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const verifierAddress = verifier ?? (0, utils_1.getVerifierContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const data = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_unbounded_verifier_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString(field),
              verifier_address: verifierAddress,
              domain: "0"
            })
          });
          data.result.shift();
          const res = data.result.map((element) => {
            return starknet_1.num.toBigInt(element);
          });
          return res;
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user verifier data from starknet id");
        }
      }
      async getPfpVerifierData(idDomainOrAddr, verifier) {
        const contract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const pfpVerifierAddress = verifier ?? (0, utils_1.getPfpVerifierContract)(this.chainId);
        const id = await this.checkArguments(idDomainOrAddr);
        try {
          const nftContractData = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_verifier_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString("nft_pp_contract"),
              verifier_address: pfpVerifierAddress,
              domain: "0"
              // for now we only support domain 0
            })
          });
          const nftContract = nftContractData.result.map((element) => {
            return starknet_1.num.toBigInt(element);
          });
          const nftTokenData = await this.provider.callContract({
            contractAddress: contract,
            entrypoint: "get_extended_verifier_data",
            calldata: starknet_1.CallData.compile({
              token_id: id.toString(),
              field: starknet_1.shortString.encodeShortString("nft_pp_id"),
              length: 2,
              verifier_address: pfpVerifierAddress,
              domain: "0"
              // for now we only support domain 0
            })
          });
          nftTokenData.result.shift();
          const nftTokenId = nftTokenData.result.map((element) => {
            return starknet_1.num.toBigInt(element);
          });
          return [BigInt(0), ...nftContract, ...nftTokenId];
        } catch (e) {
          if (e instanceof Error && e.message === "User not found") {
            throw e;
          }
          throw Error("Could not get user verifier data from starknet id");
        }
      }
      async getProfileData(address, useDefaultPfp = true, verifier, pfp_verifier, pop_verifier) {
        const identityContract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const namingContract = this.StarknetIdContract.naming ?? (0, utils_1.getNamingContract)(this.chainId);
        const verifierContract = verifier ?? (0, utils_1.getVerifierContract)(this.chainId);
        const pfpVerifierContract = pfp_verifier ?? (0, utils_1.getPfpVerifierContract)(this.chainId);
        const popVerifierContract = pop_verifier ?? (0, utils_1.getPopVerifierContract)(this.chainId);
        const multicallAddress = (0, utils_1.getMulticallContract)(this.chainId);
        const { abi: multicallAbi } = await this.provider.getClassAt(multicallAddress);
        const multicallContract = new starknet_1.Contract(multicallAbi, multicallAddress, this.provider);
        try {
          const calldata = (0, internal_1.getProfileDataCalldata)(address, namingContract, identityContract, verifierContract, pfpVerifierContract, popVerifierContract);
          const data = await multicallContract.call("aggregate", [calldata]);
          if (Array.isArray(data)) {
            const name = (0, utils_1.decodeDomain)(data[0].slice(1));
            const twitter = data[2][0] !== BigInt(0) ? data[2][0].toString() : void 0;
            const github = data[3][0] !== BigInt(0) ? data[3][0].toString() : void 0;
            const discord = data[4][0] !== BigInt(0) ? data[4][0].toString() : void 0;
            const proofOfPersonhood = data[5][0] === BigInt(1) ? true : false;
            const profilePictureMetadata = data.length === 9 ? data[8].slice(1).map((val) => starknet_1.shortString.decodeShortString(val.toString())).join("") : void 0;
            const profilePicture = profilePictureMetadata ? profilePictureMetadata.includes("base64") ? (0, internal_1.parseBase64Image)(profilePictureMetadata) : await (0, internal_1.fetchImageUrl)(profilePictureMetadata) : useDefaultPfp ? `https://starknet.id/api/identicons/${data[1][0].toString()}` : void 0;
            return {
              name,
              twitter,
              github,
              discord,
              proofOfPersonhood,
              profilePicture
            };
          } else {
            throw Error("Error while calling aggregate function");
          }
        } catch (e) {
          if (e instanceof Error) {
            throw e;
          }
          throw Error("Could not get user profile data from address");
        }
      }
      async getStarkProfiles(addresses, useDefaultPfp = true, pfp_verifier) {
        const identityContract = this.StarknetIdContract.identity ?? (0, utils_1.getIdentityContract)(this.chainId);
        const namingContract = this.StarknetIdContract.naming ?? (0, utils_1.getNamingContract)(this.chainId);
        const pfpVerifierContract = pfp_verifier ?? (0, utils_1.getPfpVerifierContract)(this.chainId);
        const multicallAddress = (0, utils_1.getMulticallContract)(this.chainId);
        const utilsMulticallContract = (0, utils_1.getUtilsMulticallContract)(this.chainId);
        const blobbertContract = (0, utils_1.getBlobbertContract)(this.chainId);
        const { abi: multicallAbi } = await this.provider.getClassAt(multicallAddress);
        const multicallContract = new starknet_1.Contract(multicallAbi, multicallAddress, this.provider);
        try {
          const nbInstructions = 5;
          const calldata = (0, internal_1.getStarkProfilesCalldata)(addresses, namingContract, identityContract, pfpVerifierContract, utilsMulticallContract, blobbertContract);
          const data = await multicallContract.call("aggregate", [calldata]);
          if (Array.isArray(data)) {
            let results = [];
            const callResult = data.slice(0, addresses.length * nbInstructions);
            const uriResult = data.slice(addresses.length * nbInstructions);
            let uriIndex = 0;
            for (let i = 0; i < addresses.length; i++) {
              const name = (0, utils_1.decodeDomain)(callResult[i * nbInstructions].slice(1));
              const nftContract = callResult[i * nbInstructions + 2][0];
              const hasPfp = nftContract !== BigInt(0) && nftContract !== BigInt(blobbertContract);
              const profilePictureMetadata = hasPfp ? uriResult[uriIndex].slice(1).map((val) => starknet_1.shortString.decodeShortString(val.toString())).join("") : void 0;
              if (hasPfp)
                uriIndex++;
              const profilePicture = profilePictureMetadata ? profilePictureMetadata.includes("base64") ? (0, internal_1.parseBase64Image)(profilePictureMetadata) : await (0, internal_1.fetchImageUrl)(profilePictureMetadata) : useDefaultPfp ? `https://starknet.id/api/identicons/${callResult[i * nbInstructions + 1][0].toString()}` : void 0;
              results.push({
                name: name.length > 0 ? name : void 0,
                profilePicture
              });
            }
            return results;
          } else {
            throw Error("Error while calling aggregate function");
          }
        } catch (e) {
          if (e instanceof Error) {
            throw e;
          }
          throw Error("Could not get profiles from addresses");
        }
      }
      async tryResolveDomain(contract, encodedDomain, hint = []) {
        const addressData = await this.provider.callContract({
          contractAddress: contract,
          entrypoint: "domain_to_address",
          calldata: starknet_1.CallData.compile({ domain: encodedDomain, hint })
        });
        return addressData.result[0];
      }
      async tryResolveAddress(contract, address, hint = []) {
        const domainData = await this.provider.callContract({
          contractAddress: contract,
          entrypoint: "address_to_domain",
          calldata: starknet_1.CallData.compile({
            address,
            hint
          })
        });
        const decimalDomain = domainData.result.map((element) => BigInt(element)).slice(1);
        const stringDomain = (0, utils_1.decodeDomain)(decimalDomain);
        if (!stringDomain) {
          throw new Error("Could not get stark name");
        }
        return stringDomain;
      }
      async checkArguments(idDomainOrAddr) {
        if (typeof idDomainOrAddr === "string") {
          if (/^\d+$/.test(idDomainOrAddr)) {
            return idDomainOrAddr;
          } else if ((0, utils_1.isStarkDomain)(idDomainOrAddr)) {
            return this.getStarknetId(idDomainOrAddr).then((id) => {
              return id;
            });
          } else if (/^[-+]?0x[0-9a-f]+$/i.test(idDomainOrAddr)) {
            const checkSumAddr = (0, starknet_1.getChecksumAddress)(idDomainOrAddr);
            if ((0, starknet_1.validateChecksumAddress)(checkSumAddr)) {
              return this.getStarkName(idDomainOrAddr).then((name) => {
                return this.getStarknetId(name).then((id) => {
                  return id;
                });
              });
            } else {
              throw new Error("Invalid Starknet address");
            }
          } else {
            throw new Error("Invalid idDomainOrAddr argument");
          }
        } else {
          throw new Error("Invalid idDomainOrAddr argument");
        }
      }
    };
    exports.StarknetIdNavigator = StarknetIdNavigator;
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/interface.js
var require_interface = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StarknetIdNavigatorInterface = void 0;
    var StarknetIdNavigatorInterface = class {
    };
    exports.StarknetIdNavigatorInterface = StarknetIdNavigatorInterface;
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/index.js
var require_starknetIdNavigator = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/starknetIdNavigator/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_default(), exports);
    __exportStar(require_interface(), exports);
  }
});

// node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/starknetid.js@3.2.2_@babel+core@7.24.7_starknet@6.8.0/node_modules/starknetid.js/packages/core/dist/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constants = exports.utils = void 0;
    exports.utils = __importStar(require_utils5());
    exports.constants = __importStar(require_constants3());
    __exportStar(require_types(), exports);
    __exportStar(require_starknetIdNavigator(), exports);
  }
});
export default require_dist2();
/*! Bundled license information:

@scure/base/lib/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/poseidon.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/poseidon.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=starknetid__js.js.map
